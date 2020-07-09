<template>
  <div>
    <div v-if="zz==1">
      <List :goodid="1"></List>
    </div>
    <div v-else-if="zz==2">
      <List :goodid="2"></List>
    </div>
    <div v-else>
      <List :goodid="0"></List>
    </div>
  </div>
</template>
<script type='text/javascript'>
import Msg from "./msg.js";
import List from "./List.vue";
export default {
  data() {
    return {
      zz: 0
    };
  },
  mounted: function() {
    var _this = this;
    Msg.$on("val", function(v) {
      // 接收
      _this.zz = v;
    });
  },
  components: {
    List
  }
};
</script>