<template>
<div>
<body class="text-center">
    <div class="container aaa">
        <div class="titlelogin">
            <h2>Please sign in</h2>
        </div>
        <form @submit.prevent="signin">
        <div class="inputlogin">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input  v-model="email"  onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" style="height:45px" type="text" id="inputEmail" class="form-control" placeholder="Email address" required>
            <label for="inputPassword" class="sr-only">Password</label>
            <input v-model="password" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" style="height:45px" type="password" id="inputPassword" class="form-control sss" placeholder="Password" required>   
            <div class="checkbox mb-3">
            <label class="inputtext">
                <!-- <input type="checkbox" value="remember-me">  -->
                电脑屏幕大的话，贞子更好爬出来
            </label>
            <!-- <button class="btn btn-lg btn-primary btn-block buttonlogin" type="submit" @click="signin">Sign in</button> -->
            <input id="login" class="btn btn-lg btn-primary btn-block buttonlogin" type="submit"  v-loading.fullscreen.lock="fullscreenLoading" value="Sign in">
            </div>
        </div>
        </form>
    </div>
</body>
</div> 
</template>

<script>
export default {
    data(){
        return{
            email:localStorage.getItem("zhanghao"),
            password:"",
            fullscreenLoading:false,
            zhaonghao:123
        }
    },
    beforeRouteEnter:(to,from,next) => {
        // localStorage.clear()
        localStorage.setItem("isLogin",null)
        localStorage.setItem("name",null)
        localStorage.setItem("usersudo",null)
        localStorage.setItem("head_portrait",null)
        next(vm => vm.$store.dispatch("setUser",null))
    },
    computed:{
 
    },
    methods:{
        // this.http.get('/api/getContentAll')
        //     .then( (res) => {
        //         console.log('res',res.data);
        //         this.$store.commit("setContent",res.data)
        //     })
        signin(){
            this.http.get('/api/getUsers')
                .then(res => {
                    // console.log('res',res.data)
                    const data = res.data
                    const users = []
                    for(let key in data){
                        const user = data[key]
                        users.push(user)
                    }
                    let result = users.filter((users) => {
                    return users.AccountNumber === this.email && users.password === this.password
                    })
                    if(result != null && result.length > 0){
                        // this.$store.dispatch("setUsersudo",result[0].sudo)
                        // this.$store.dispatch("setUser",result[0].username)
                        // this.$store.commit('changeLogin', true)
                        // // alert("登录成功")
                        // sessionStorage.setItem("isLogin","1")
                        // sessionStorage.setItem("name",this.$store.getters.getcurrenuser)
                        // sessionStorage.setItem("usersudo",this.$store.getters.getusersudo)
                        document.getElementById("login").disabled=true;
                        this.fullscreenLoading = true;
                            setTimeout(() => {
                            this.fullscreenLoading = true;
                            setTimeout(() => {
                            this.fullscreenLoading = false;
                            }, 2000);
                            this.$store.dispatch("setUsersudo",result[0].sudo)
                            this.$store.dispatch("setzhanghao",result[0].AccountNumber)
                            this.$store.dispatch("setUser",result[0].username)
                            this.$store.dispatch("setHead_portrait",result[0].Head_portrait)
                            this.$store.dispatch("setUserid",result[0].id)
                            this.$store.commit('changeLogin', true)
                            // alert("登录成功")

                            // sessionStorage.setItem("isLogin","1")
                            // localStorage.setItem("zhanghao",this.$store.getters.getaccountnumber)
                            // sessionStorage.setItem("name",this.$store.getters.getcurrenuser)
                            // sessionStorage.setItem("usersudo",this.$store.getters.getusersudo)
                            // sessionStorage.setItem("head_portrait",this.$store.getters.gethead_portrait)


                            localStorage.setItem("isLogin","1")
                            localStorage.setItem("zhanghao",this.$store.getters.getaccountnumber)
                            localStorage.setItem("name",this.$store.getters.getcurrenuser)
                            localStorage.setItem("usersudo",this.$store.getters.getusersudo)
                            localStorage.setItem("head_portrait",this.$store.getters.gethead_portrait)
                            localStorage.setItem("userid",this.$store.getters.getuserid)

                            // this.$router.push({name:"firstLink"})
                            this.$router.push({
                                name:"firstLink",
                                query:{
                                    name:"s"
                                }
                                })
                            this.$message({
                             type: 'success',
                             message: `登陆成功: ${ localStorage.getItem("name") }
                             登陆有效期为一天，24小时候需再次手动登陆`
                             });
                            }, 2000);
                            localStorage.setItem("LoginTime",new Date().getTime())
                            console.log(returnCitySN['cip'] + returnCitySN['cname'])
                        // this.$alert('登陆成功', '登陆提示', {
                        // confirmButtonText: '确定',
                        // callback: action => {
                        //     setTimeout(() => {
                        //         this.$router.push({name:"firstLink"})
                        //         }, 300);
                        //     this.$router.push({name:"firstLink"})
                        //     this.$message({
                        //     type: 'success',
                        //     message: `登陆成功: ${ sessionStorage.getItem("name") }`
                        //     });
                        // }
                        // });

                        // sessionStorage.setItem("isLogin","1")
                        // sessionStorage.setItem("name",this.$store.getters.getcurrenuser)
                        // sessionStorage.setItem("usersudo",this.$store.getters.getusersudo)
                        // this.$router.push({name:"firstLink"})
                    }else{
                        // alert("账号或密码错误，请重新输入")
                        this.$alert('账号或密码错误，请重新输入', '提示', {
                        confirmButtonText: '确定',
                        
                        });
                        this.email = ""
                        this.password = ""
                        this.$store.dispatch("setUser",null)
                        document.getElementById("inputEmail").focus();
                    }
                })
        }
    }
}
</script>

<style scoped>

.titlelogin{
    margin-top: 15%;
}
.inputlogin{
    width: 30%;
    margin: 0 auto;
    margin-top: 5%;
}
.inputtext{
    margin-top: 5%;
}
.buttonlogin{
    margin-top: 5%;
}
.sss{
    margin-top: 5%
}
.aaa{
    margin-bottom: 10%
}
</style>

