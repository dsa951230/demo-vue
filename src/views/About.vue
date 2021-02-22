<template>
  <div class="about">
    <a target="_blank" href="https://medium.com/pierceshih/vue-js-%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98-day14-vue%E7%94%9F%E5%91%BD%E9%80%B1%E6%9C%9F-65bc934dfd47">vue生命週期</a>
    <h1>{{ msg }}</h1>
    <h1 v-text="msg"></h1>
    <h1 v-html="msg"></h1>
    <div>
      v-model , v-for , v-bind:(也可以省略成:) , onChange的用法
      <select v-model="selected" v-on:change="select_change($event)">
        <option v-for="(d, index) in select_option" v-bind:value="d.value" v-text="d.name"></option>
      </select>
    </div>
    <br>
    <button v-on:click="show_click()">v-show</button>
    {{ show_value }}
    <div v-show="show_value">搭配v-show顯示與隱藏</div>
    <br>
    <div>
      <br>
      v-if, v-else-if, v-else
      <div v-if="show_value">v-if</div>
      <div v-else="show_value">v-else</div>
    </div>
    <div>
      v-for搭配v-if 與 template
      <select v-model="selected_by_1" v-on:change="select_change($event)">
        <template v-for="(d, index) in select_option">
          <option v-if="d.value <= 2" v-bind:value="d.value" v-text="d.name"></option>
          <option v-else-if="d.value == 3" v-bind:value="d.value" v-text="d.name + ' v-elseif'"></option>
          <option v-else v-bind:value="d.value" v-text="d.name + ' v-else'"></option>
        </template>
      </select>
    </div>
    <br>
    <div v-bind:style="{color: show_value ? 'red' : 'black'}">
      v-show (show_value) 按鈕動態控制css
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'About',
  data() {
    return {
      msg: '<p style="color:red">資料顯示方法</p>',
      select_option: [{
          name: 'A',
          value: 0,
        },
        {
          name: 'B',
          value: 1,
        },
        {
          name: 'C',
          value: 2,
        },
        {
          name: 'D',
          value: 3,
        },
        {
          name: 'E',
          value: 4,
        }
      ],
      selected: 1,
      show_value: true,
      selected_by_1: 0,
    }
  },
  methods: {
    select_change(el) {
      console.log('el.target.value : ' + el.target.value);
      console.log('this.selected : ' + this.selected);
    },
    show_click() {
      this.show_value = this.show_value ? false : true;
    }
  }
}

</script>
