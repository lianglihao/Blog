<template>
    <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#"><strong>梁酱的小窝</strong></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link :to="{name:'firstLink'}" class="nav-item nav-link active" href="#">首页 <span class="sr-only">(current)</span></router-link>
                    <a class="nav-item nav-link" href="#">学习圣地</a>
                    <router-link :to="{name:'loveLink'}" class="nav-item nav-link" href="#">小夫妻</router-link>
                    <span class=" navbar-text" href="#">某些链接需要登录方可查看</span>
                    
                </div>
                <div class="navbar-nav ml-auto">
                    <!-- <img src="http://139.199.206.151:7070/static/firstPage/laopomeimeidatouxiang.jpg" v-show="isLogin" class="round_icon"  alt=""> -->
                    <img :src="head_Portrait" v-show="isLogin" class="round_icon"  alt="">
                    <a class="nav-item nav-link" v-show="isLogin">{{currenuser}}</a>
                    <a id="tuichu" href="javascript:void(0);" @click="shachusession"  class="nav-item nav-link" v-show="isLogin">Sign out</a>
                    <router-link :to="{name:'isloginLink'}" class="nav-item nav-link" v-show="!isLogin">Log in</router-link>
                </div>
            </div>
            </nav>
         
    </header>
</template>
 
 <script>
 export default {
      data() {
      return {
  
      };
    },
     computed:{
        head_Portrait(){
            if(this.$store.state.user.isLogin){
                 return localStorage.getItem("head_portrait")
             }
        },
        currenuser(){
            if(this.$store.state.user.isLogin){
                 return localStorage.getItem("name")
             }
         },
         isLogin(){
             if(localStorage.getItem("isLogin") == "1"){
                 this.$store.commit('changeLogin', true)
                 return this.$store.state.user.isLogin
             }else{
                 this.$store.commit('changeLogin', false)
                 return this.$store.state.user.isLogin
             }
             
         }
     },
     methods:{
         shachusession(){

            this.$confirm('确定退出登陆吗，将失去一些权限', '退出登陆', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
                // localStorage.clear()
                localStorage.setItem("isLogin",null)
                localStorage.setItem("name",null)
                localStorage.setItem("usersudo",null)
                localStorage.setItem("head_portrait",null)

                this.$router.push({name:"isloginLink"})
                this.$message({
                    type: 'info',
                    message: '已退出当前账号'
                });
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '取消退出'
            });          
            });

         },
         handleSelect(key, keyPath) {
            // console.log(key, keyPath);
        }
     },
     beforeMount(){
        this.currenuser
        this.isLogin
    },
 }
 </script>

 <style scoped>
.navbar-text{
    color:gainsboro;
}
.tuichu a{
  cursor:pointer;
}
.round_icon{
  width: 34px;
  height: 34px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.navbar-nav img{
    margin-right: 10px;
}
 </style>
 
 