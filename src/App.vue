<template>
  <div id="app">
    <div style="float: right">
      <el-button @click="loginOut">退出</el-button>
    </div>
    <router-link to="/"><el-button >预占</el-button></router-link>
    <router-link to="/Fp"><el-button >发票</el-button></router-link>
    <router-link to="/Dj"><el-button >单据</el-button></router-link>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
    name : 'App',
    methods: {
        loginOut() {
            this.$http.get('/lzzz_war/loginOut').then(function (res) {
                this.$message({
                    message: '已注销！',
                    type: 'success'
                });
                location.href = "/lzzz_war/index.html"
            });
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<!--

  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>

<script>
    export default {
        data() {
            return {
                activeName: 'first'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>-->
