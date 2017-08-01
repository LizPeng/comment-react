import React, { Component,PropTypes } from 'react'

class CommentInput extends Component {
  static propTypes = {
    username: PropTypes.any,
    onSubmit: PropTypes.func,
    onUserNameInputBlur: PropTypes.func
  }
  /*
    原来CommentInput需要从LocalStorage中获取username字段，现在让它从props里面去取

    原来用户名的输入框blur的时候保存username到LocalStorage的行为也通过props.onUserNameInputBlur传递到上层去做。
    CommentInput所有的渲染操作都只依赖于props完成
  */ 
  static defaultProps = {
    username: ''
  }
  
  constructor(props){
    super(props)
    this.state = {
      username:props.username ,//从props上取username字段
      content:''
    }
  }
  // componentWillMount(){
  //   this._loadUsername()
  // }
  componentDidMount(){
    this.textarea.focus()
  }

  // _loadUsername(){
  //   //取出username
  //   const username = localStorage.getItem('username')
  //   if(username){//判断是否存在username
  //     this.setState({'username':username}) 
  //   }
  // }
  // _saveUsername(username){
  //   localStorage.setItem('username', username)
  // }
  
  handleUsernameBlur(event){
    if(this.props.onUserNameInputBlur){
      //this._saveUsername(event.target.value)
      this.props.onUserNameInputBlur(event.target.value)
    }
  }
  handleUsernameChange(event){
    this.setState({
      username: event.target.value
    })
  }
  handleContentChange(event){
    this.setState({
      content:event.target.value
    })
  }

  handleSubmit(){
    if(this.props.onSubmit){//判断props中书否传入了onSubmit属性。
      //有的话就调用该函数，并且把用户名和评论,评论时间等数据传入该函数
      this.props.onSubmit({ 
        username:this.state.username, 
        content: this.state.content,
        createdTime: +new Date() }) 
    }
    //清空用户输入的评论内容
    this.setState({ content: '' })
  }

  render() {
    return (
     <div className="comment-input" >
       <div className="comment-field ">
         <span className="comment-field-name">用户名：</span>
         <div className="comment-field-input">
           {/*给输入框设置value属性，让value等于this.state里面的值*/}
           <input value={this.state.username} 
                  onChange={this.handleUsernameChange.bind(this)}
                  onBlur={this.handleUsernameBlur.bind(this)} />
         </div>
       </div>
       <div className="comment-field ">
         <span className="comment-field-name">评论内容</span>
         <div className="comment-field-input">
           <textarea value={this.state.content} 
                     onChange={this.handleContentChange.bind(this)}
                     ref={ (textarea)=> this.textarea = textarea } />
         </div>
       </div>
       <div className="comment-field-button">
         <button onClick={this.handleSubmit.bind(this)}>
           发布
         </button>
       </div>
     </div>
    )
  }
}

export default CommentInput 
