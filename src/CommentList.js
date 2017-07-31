import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  static defaultProps = {
    comments:[]
  }

  render() {
    return (
      <div>
        {this.props.comments.map((comment, i)=>{
          return (
            <Comment comment={comment} index={i} key={i}/>
          )
        })}
      </div>
    )
  }
}

export default CommentList 
