<template>
  <div name="show">
    <ul class="list">
      <li v-for="(good,index) in list" :key="index">
        <img v-bind:src="good.img" />
        <p>{{good.goodName}}</p>
      </li>
    </ul>
  </div>
</template>
<style>
.list li {
  width: 240px;
  height: 170px;
  list-style: none;
  float: left;
  font-weight: bold;
  margin: 18px 5px auto;
}
.list img {
  width: 200px;
  height: 150px;
}
</style>
<script>
export default {
  name: "show",
  data() {
    var obj = this;
    var url = "";
    if (obj.goodid == 1) {
      url = "json/Desserts.json";
    } else if (obj.goodid == 2) {
      url = "json/Drinks.json";
    } else {
      url = "json/Desserts.json";
    }
    this.$http.get(url).then(function(res) {
      obj.list = res.data;
    });
    return {
      list: []
    };
  },
  props: {
    goodid: Number
  },
  watch: {
    goodid() {
      var obj = this;
      var url = "";
      if (obj.goodid == 1) {
        url = "json/Desserts.json";
      } else if (obj.goodid == 2) {
        url = "json/Drinks.json";
      } else {
        url = "json/Desserts.json";
      }
      this.$http.get(url).then(function(res) {
        obj.list = res.data;
      });
      return {
        list: []
      };
    }
  }
};
</script>