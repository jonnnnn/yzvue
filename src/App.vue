<template>
  <div id="app">
    <div style="float: right">
      <el-button @click="loginOut">退出</el-button>
      <el-button @click="xianshi">修改密码</el-button>
    </div>
    <router-link to="/"><el-button >预占</el-button></router-link>
    <router-link to="/Fp"><el-button >发票</el-button></router-link>
    <router-link to="/Dj"><el-button >单据</el-button></router-link>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <MM  ref="MM"/>
  </div>

</template>


<script>
import MM from "./components/MM";
export default {
    name : 'App',
    components: {MM},
    methods: {
        loginOut() {
            this.$http.get('/lzzz_war/loginOut').then(function (res) {
                this.$message({
                    message: '已注销！',
                    type: 'success'
                });
                location.href = "/lzzz_war/index.html"
            });
        },

        xianshi(){
         this.$refs.MM.parentclick();
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


