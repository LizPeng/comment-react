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


> 不依赖DOM操作的组件启动的操作都可以放在`componentWillMount`中进行

## 组件的私有方法都用 `_` 开头 ##
## 所有的事件监听方法都用`handle` 开头 ；把事件监听方法传给组件的时候，属性名用`on`开头##

> 组件内容编写顺序如下：
> 
1. static开头的类属性，如`defaultProps`，`propTypes`。
2. 构造函数，`constructor`、
3. getter/setter。
4. 组件声明周期
5. `_` 开头的私有方法。
6. 事件监听方法， `handle*`。
7. `render*`开头的方法，有时候render()方法里面的内容会分开到不同函数里面进行，这些函数都以`render*`开头。
8. `render()` 方法。


##　个人写reducer文件的习惯

1. 定义action types
2. 编写reducer
3. 跟这个reducer的action creators

> 了解MVC/MVP架构模式的同学应该可以类比过去，Dum组件就是View（负责渲染），Smart组件就是Controller（Presenter），State其实有点类似Model。