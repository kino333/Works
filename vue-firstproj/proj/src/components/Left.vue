<template>
  <div>
    <div class="title">点心饮料</div>
    <ul class="menu">
      <li @click="menu1">点心</li>
      <li @click="menu2">饮料</li>
    </ul>
  </div>
</template>
<style type='text/css'>
.title {
  width: 100px;
  height: 50px;
  line-height: 50px;
  color: red;
}
.menu li {
  width: 100px;
  height: 130px;
  list-style: none;
  margin-top: 20px;
  line-height: 130px;
  cursor: pointer;
  /* 手指鼠标样式 */
}
</style>
<script type='text/javascript'>
import Msg from "./msg.js";
//组件引用
export default {
  methods: {
    menu1: function() {
      Msg.$emit("val", "1");
      // 发送
    },
    menu2: function() {
      Msg.$emit("val", "2");
    }
  }
};
</script>