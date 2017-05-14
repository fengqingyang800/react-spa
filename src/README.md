1. App.js
2. 调用 actions/*.js
3. actions 调用 fetch(axios.js) 发送数据请求

###
切记不要在 constructor 或者 组件的任何位置setState，state全部在reducer初始化
###

Store的数据修改，本质上是通过Reducer来完成的。
Store只提供get方法（即getState），不提供set方法，所以数据的修改一定是通过dispatch(action)来完成，即：action -> reducers -> store
Store除了存储数据之外，还有着消息发布/订阅（pub/sub）的功能，也正是因为这个功能，它才能够同时连接着Actions和Views。
dispatch方法 对应着 pub
subscribe方法 对应着 sub



import {increase, descrease} from 'it is the path'
const mapDispatchToProps = (dispatch) =>
bindActionCreators({
  increase,
  decrease
}, dispatch)
@connect(state => state, mapDispatchToProps)

->

<code>
@connect(state => state, dispatch => bindActionCreators({increase, decrease}, dispatch))
</code>
