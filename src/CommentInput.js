import React, { Component } from 'react'

class CommentInput extends Component {
  //初始化一个state来保存username和content
  constructor(){
    super()
    this.state = {
      username:'',
      content:''
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
      const { username, content } = this.state
      //有的话就调用该函数，并且把用户名和评论数据传入该函数
      this.props.onSubmit({ username, content }) 
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
                  onChange={this.handleUsernameChange.bind(this)} />
         </div>
       </div>
       <div className="comment-field ">
         <span className="comment-field-name">评论内容</span>
         <div className="comment-field-input">
           <textarea value={this.state.content} 
                     onChange={this.handleContentChange.bind(this)}/>
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
