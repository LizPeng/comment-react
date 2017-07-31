## state
React.js认为所有的状态都应该由state控制，只要类似于`<input /> <textarea /> <select />`这样的输入控件被设置了value值，那么它们的值永远被以被设置的值为准。值不变，value就不变化。

如何把用户输入更新到输入框中：监听输入框的**onChange事件**，然后获取到用户输入的内容，再通过setState的方式更新state中username

## 向父组件传递数据

父组件CommentApp只需要通过`props`给子组件CommentInput传入一个回调函数。当用户点击发布按钮的时候，CommentInput调用`props`中的回调函数并且将state传入该函数即可。

    class CommentApp extends Component {
      handleSubmitComment(comment) {
    	console.log(comment)
      }
      render(){
	     return (
	      <div className="wrapper" >
		    <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
		    <CommentList />
		   </div>
		 )
      }
    }

在CommentApp中给CommentInput传入一个`onSubmit`属性，这个属性时**CommentApp自己**的一个方法`handleSubmitComment`。这样CommentInput就可以调用`this.props.onSubmit()`把数据传给`CommentApp`