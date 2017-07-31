import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
  constructor() {
    super()
    this.state={
      comments:[]
    }
  }

  handleSubmitComment(comment) {
    //数据检查
    if(!comment) return 
    if(!comment.username) return  alert('请输入用户名')
    if(!comment.content) return  alert("请输入评论内容")
    
    this.state.comments.push(comment) //把数据插入到comments
    //通过setState把数据更新到页面上
    this.setState({
      comments:this.state.comments
    })
  }
  render(){
    return (
      <div className="wrapper" >
        <CommentInput 
          onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList 
          comments={this.state.comments}/>
      </div>
    )
  }
}

export default CommentApp
