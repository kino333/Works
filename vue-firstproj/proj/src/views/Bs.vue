<template>
  <div class="main">
    <div class="left">
      <Left></Left>
    </div>
    <div class="right">
      <div class="top">
        <img src="img/home/首页.png" />
      </div>
      <div class="buttom">
        <Right></Right>
      </div>
    </div>
  </div>
</template>
<style type='text/css'>
* {
  margin: 0;
  padding: 0;
}
.left {
  width: 100px;
  float: left;
  margin-right: 10px;
}
.right {
  width: 1000px;
  float: left;
  margin-left: 10px;
}
.main {
  width: 1200px;
  margin: 20px auto;
}
.top img {
  width: 1000px;
  height: 200px;
}
.left,
.right {
  background-color: #fcf3f4;
  height: 600px;
}
</style>
<script type='text/javascript'>
import Left from "../components/Left.vue";
import Right from "../components/Right.vue";
//组件引用
export default {
  //组件注册
  components: {
    Left,
    Right
  }
};
</script>