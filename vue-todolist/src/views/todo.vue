<template>
  <div id="app">
    <header>
      <section class="top">
        <label v-html="title"></label>
        <input
          v-model="newItem"
          @keydown.enter="addNew"
          type="text"
          name="add"
          id="add"
          placeholder="添加"
          autocomplete="off"
        />
        <!-- autocomplete="off" -- 禁用自动完成 -->
      </section>
    </header>
    <div class="content">
      <div class="title-doing">
        <span class="text-doing">正在进行</span>
        <span class="doingLength">{{ doingList.length }}</span>
        <!-- 正在进行数量 -->
      </div>

      <!--eslint-disable-next-line-->
      <ul class="doing" v-for="item in doingList">
        <!-- 取消v-for没有:key报错 -->
        <input
          type="checkbox"
          class="checkDoing"
          @click.prevent="checkDone(item.id)"
          :data-id="item.id"
        />
        <li v-bind:class="{ finished: item.isFinished }">
          {{ item.label }}
        </li>
        <!-- v-bind替换class，将items的每一行中的isFinished绑定到finished属性上，
          使得每一行根据isFinished的值来决定是否有下划线显示,
          v-bind:可以简写: -->
        <div class="delDoing" @click="del(item.id)"><span>删除</span></div>
      </ul>

      <div class="title-done">
        <span class="text-done">已经完成</span>
        <span class="doneLength">{{ doneList.length }}</span>
        <!-- 已经完成数量 -->
      </div>

      <!--eslint-disable-next-line-->
      <ul class="done" v-for="item in doneList">
        <input
          type="checkbox"
          class="checkDone"
          @click.prevent="checkDone(item.id)"
          :data-id="item.id"
          checked="checked"
        />
        <li v-bind:class="{ finished: item.isFinished }">
          {{ item.label }}
        </li>
        <div class="delDone" @click="del(item.id)"><span>删除</span></div>
      </ul>
    </div>
    <footer class="foot">
      Copyright © 2020/12/24 todolist
      <a href="">clear</a>
    </footer>
  </div>
</template>
<style >
* {
  margin: 0;
  padding: 0;
}
* {
  background-color: #eee;
  cursor: default;
  /* 鼠标指针样式 */
  font-size: 20px;
  font-family: "微软雅黑";
}

.top {
  height: 50px;
  background-color: #9999ff;
}
label {
  line-height: 50px;
  background-color: #9999ff;
}
#add {
  margin-left: 15px;
  border-radius: 50px;
  height: 30px;
  border: 0;
  outline: none;
  /* 所有浏览器都不显示边框 */
  padding-left: 10px;
}
#add:focus {
  box-shadow: 0 0 5px blue;
}
.content {
  top: 50px;
  bottom: 30px;
  width: 40%;
  margin: 0 auto;
}
.title-doing,
.title-done {
  height: 60px;
  line-height: 60px;
  position: relative;
}
.text-doing,
.text-done {
  position: absolute;
  left: 0px;
}
.doingLength,
.doneLength {
  position: absolute;
  right: 0px;
}
.doing,
.done {
  list-style: none;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex布局实现div内容居中 */
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 2px;
  height: 30px;
}
.done {
  opacity: 0.5;
}
.doing:hover {
  transform: scale(1.2, 1.2);
  box-shadow: 0 0 5px #0000ff;
  /* 水平阴影，垂直阴影，模糊距离 */
}
.checkDoing,
.checkDone {
  font-size: 15px;
  vertical-align: middle;
  text-align: center;
  flex: 0.5;
}

.doing li,
.done li {
  background-color: #fff;
  flex: 2;
}
.delDoing,
.delDone {
  font-size: 15px;
  flex: 0.5;
  background-color: #fff;
}
.delDoing span,
.delDone span {
  background-color: #a8a8fd;
  font-size: 15px;
  border-radius: 2px;
  padding: 0px 2px;
}
.finished {
  text-decoration: line-through;
}
.foot a {
  background-color: #8383e9;
  font-size: 10px;
}
.foot {
  position: absolute;
  bottom: 0;
  height: 30px;
  background-color: #8383e9;
  line-height: 30px;
  text-align: center;
  width: 100%;
  font-size: 10px;
}
</style>
<script>
export default {
  data() {
    return {
      title: "ToDoList",
      todolist: [],
      newItem: "",
    };
  },
  methods: {
    addNew: function () {
      this.todolist.push({
        label: this.newItem,
        isFinished: false,
        id: this.todolist.length,
        isDone: false,
      });
      this.newItem = "";
      //   输入框不再显示刚刚添加的内容
      this.saveData();
      //保存
    },

    saveData: function () {
      localStorage.items = JSON.stringify(this.items);
    },
    //将数据存储到本地存储

    checkDone: function (id) {
      var that = this.todolist[id];
      that.isDone = !that.isDone;
      that.isFinished = !that.isFinished;
      this.saveData();
      //每次修改保存
    },
    del: function (id) {
      this.todolist.splice(id, 1);
      // 删除
      this.todolist.forEach(function (item, i) {
        item.id = i;
        // 重新排序，forEach循环遍历
      });
      this.saveData();
    },
  },
  computed: {
    //通过filter过滤器过滤items数据，得到未做好和已做好列表
    doingList: function () {
      let arr = this.todolist.filter(function (item) {
        return !item.isDone;
      });
      return arr;
    },
    doneList: function () {
      let arr = this.todolist.filter(function (item) {
        return item.isDone;
      });
      return arr;
    },
  },
  mounted: function () {
    this.todolist = localStorage.todolist
      ? JSON.parse(localStorage.todolist)
      : [];
    //判断本地是否有数据，有保存没有原始
    // localStorage本地存储
    // window.localStorage.clear();
  },
};
</script>