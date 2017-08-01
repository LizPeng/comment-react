import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CommentList from '../components/ComponentList'
import { initComments, deleteComment } from '../reducers/comments'

/*
CommentListContainer
一个Smart组件，负责评论列表数据的加载、初始化、删除评论
沟通CommentList和state
*/
class CommentListContainer extends Component {
  static propTypes =　{
    comments:PropTypes.array,
    initComments:PropTypes.func,
    onDeleteComment: PropTypes.func
  }
  componentWillMount(){
    this._loadComments()
  }
  _loadComments(){
    let comments = LocalStorage.getItem('comments')
    comments =  comments ? JSON.parse(comments) : []
    //this.props.initComments是connect传进来的
    //可以帮我们把数据初始化到state里面去
    this.props.initComments(comments)
  }
  handleDeleteComment (index) {
    const { comments } = this.props //?????
    const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1)
    ]
    localStorage.setItem('comments', JSON.stringify(newComments))
    if(this.props.onDeleteComment){
      this.props.onDeleteComment(index)
    }
  }

  render () {
    return (
      <CommentList 
        comments={this.props.comments}
        onDeleteComment={this.handleDeleteComment.bind(this)} />
    )
  }
}

//评论列表从state.comments中获取
const mapStateToProps = (state) => {
  return {
    comments:state.comments
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    initComments:(comments) => {
      dispatch(initComments(comments))
    },
    onDeleteComment:(commentIndex) => {
      dispatch(deleteComment(commentIndex))
    }
  }
}
//将CommentListContainer connect到store
export default connect(mapStateToProps,mapDispatchToProps)(CommentListContainer)