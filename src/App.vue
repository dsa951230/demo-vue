<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">預設</router-link> |
      <router-link to="/about">vue 基本方法</router-link>
      <router-link to="/props_ref">模板間傳接值</router-link>
      <router-link to="/quote">套件引用</router-link>
      <router-link to="/axios_post">取得 Api 資料</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
