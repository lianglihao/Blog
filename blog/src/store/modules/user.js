const state = {
    //设置属性
    currenuser:null,
    isLogin:false,
    noLogin:true,
    usersudo:null,
    token:"",
    head_portrait:null,
    accountnumber:null,
    userid:null
}

const getters = {
    //获取属性状态
    getcurrenuser : state => state.currenuser,
    isLogin : state => state.isLogin,
    noLogin : state => state.noLogin,
    getusersudo: state => state.usersudo,
    gethead_portrait:state => state.head_portrait,
    getaccountnumber:state => state.accountnumber,
    getuserid:state => state.userid
}

const mutations = {
    changeLogin(state,status){
        state.isLogin = status
    },
    //改变属性状态
    userStatus(state,user){
        if(user){
            state.currenuser = user,
            state.isLogin = true
            // sessionStorage.setItem("username",user),
            // sessionStorage.setItem("isLogin",true)
        }else if(user == null){
            state.currenuser = null,
            state.isLogin = false
            // sessionStorage.setItem("username",null),
            // sessionStorage.setItem("isLogin",false)
        }
    },
    userSudo(state,user){
        if(user){
            state.usersudo = user
        }else if(user == null){
            state.usersudo = null
        }
    },
    head_portrait(state,user){
        if(user){
            state.head_portrait = user
        }else if(user == null){
            state.head_portrait = null
        }
    },
    AccountNumber(state,user){
        if(user){
            state.accountnumber = user
        }else if(user==null){
            state.accountnumber = null
        }
    },
    userId(state,user){
        if(user){
            state.userid = user
        }else if(user==null){
            state.userid= null
        }
    }
}

const actions = {
    //应用mutations
    setUser({commit},user){
        commit("userStatus",user)
    },
    setUsersudo({commit},user){
        commit("userSudo",user)
    },
    setHead_portrait({commit},user){
        commit("head_portrait",user)
    },
    setzhanghao({commit},user){
        commit("AccountNumber",user)
    },
    setUserid({commit},user){
        commit("userId",user)
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}