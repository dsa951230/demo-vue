<template>
  <div class="parent">
    <Children ref="child" :ch_msg="msg"></Children>
    <button v-on:click="get_child_msg()">取得子階資料</button>
  </div>
</template>
<script>
// @ is an alias to /src
import Children from '@/views/Children.vue';

export default {
  name: 'Parent',
  components: {
    Children
  },
  data() {
    return {
      msg: '由父階傳資料給子階',
    }
  },
  methods: {
    get_child_msg() {
      /*修改子階資料*/
      this.$refs.child.ch_new_msg = '注意事項 若子階有props的值不能直接使用此方法改資料 會有錯誤必須更改父階值的方法連動子階';
      alert(this.$refs.child.ch_new_msg);
      /*父階修改子階也會變動*/
      this.msg = '父階與子階資料 皆更新';
    }
  }
}

</script>
