<template>
  <div class="page-content">
    <div class="page-header" style="padding-bottom:0;margin:0;border-bottom:none">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li>
                <a href="javascript:void(0)"><i class="fa el-icon-menu"></i></a>
              </li>
              <li>
                <a href="javascript:void(0)"><i class="fa el-icon-lock"></i></a>
              </li>
              <li>
                <a href="javascript:void(0)"><i class="fa el-icon-full-screen"></i></a>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown user-dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  ><img src="../../assets/img/mdn.png" alt="" class="img-circle"
                /></a>
                <ul class="dropdown-menu" v-for="info in userinfo" :key="info.id">
                  <li>
                    <a href="javascript:void(0)">姓名：{{ info.username }}</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">ID：{{ info.userid }}</a>
                  </li>
                  <li v-if="show">
                    <a href="javascript:void(0)">专业：{{ info.userprofession }}</a>
                  </li>
                  <!-- <li><a href="javascript:void(0)">姓名：郑广超</a></li>
                  <li><a href="javascript:void(0)">学号：201710214532</a></li>
                  <li>
                    <a href="javascript:void(0)#">专业：物联网工程172班</a>
                  </li> -->
                  <li role="separator" class="divider"></li>
                  <li class="tc"><a href="#">修改密码</a></li>
                  <li class="tc">
                    <router-link to="/" @click="nologin">退出登录</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from '@/network/index.js'
export default {
  data() {
    return {
      isclose: false,
      url: null,
      show: true,
      userinfo: null
    }
  },
  created() {
    // console.log("内容区创建");
    // console.log(this.$store.state.islogin);
    // this.isclose = this.$store.state.islogin
    if (this.$store.state.user === 'student') {
      this.url = '/studentinfo'
      this.show = true
    } else if (this.$store.state.user === 'admin') {
      this.url = '/admininfo'
      this.show = false
    }
    axios({
      url: `${this.url}?userid=${this.$store.state.id}`
    }).then(
      response => {
        this.userinfo = response.data
        console.log(response.data)
      },
      error => {
        // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
        console.log('请求navBar失败了', error)
      }
    )
  },
  mounted() {
    $('.navbar-nav .el-icon-menu').click(function() {
      $('.page-sidebar .accordion-menu li')
        .children('.sub-menu')
        .slideUp('slow')
      flag = !flag //坍塌后禁止展开二级菜单
      //判断是否固定了，如果固定了，则坍塌后，内容区的margin-left变为60px
      if ($('.page-sidebar').hasClass('p-s')) {
        $('.page-content').toggleClass('ml-60')
      }
      $('.page-sidebar').toggleClass('coll')
      //坍塌后使图标居中
      $('.page-sidebar-menu ul li>a').toggleClass('phalf')
      //使一级菜单文字、logo中的教务网三字、箭头隐藏
      $('.page-sidebar-menu ul li a span').toggleClass('dn')
      $('.page-sidebar .logo-box .dis').toggleClass('dn')
      $('.fa').toggleClass('dn')
      //坍塌后logo占位变小
      $('.page-sidebar .logo-box').toggleClass('sm-logo')
    })

    $('.navbar-nav .el-icon-lock').click(function() {
      $('.page-sidebar').toggleClass('p-s')
      //判断是否已经坍塌，如果坍塌了修改其margin-left为60px，且因为这个margin-left是!important的，会覆盖240px的margin-left
      if ($('.page-sidebar').hasClass('coll')) {
        $('.page-content').toggleClass('ml-60')
      }
      $('.page-content').toggleClass('p-c')
    })

    $('.navbar-nav .el-icon-full-screen').click(function() {
      //fullscreenElement 该属性返回当前处于全屏模式的DOM元素，有则退出全屏，无则进入全屏
      document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen()
    })
  },
  methods: {
    nologin() {
      this.$message({
        message: '退出登录成功',
        type: 'success'
      })
    }
  }
  //   updated(){
  //     console.log("内容区更新");
  // //     this.isclose = this.$store.state.islogin
  // // console.log(this.$store.state.islogin);

  // console.log(this.$store.state.islogin);
  //     // this.isclose = this.$store.state.islogin

  //   },
  //   beforeDestroy(){
  //     console.log("内容区销毁");
  //   },
  //   watch:{
  //     ['$store.state.islogin'](){
  //       console.log(1);
  //     this.isclose = this.$store.state.islogin
  //     }
  //   }
}
</script>

<style lang="less" scoped>
.tc {
  text-align: center;
}

.ml-60 {
  margin-left: 60px !important;
}

.p-c {
  margin-left: 240px;
}

.navbar-default .navbar-nav > .open > a:focus {
  background-color: transparent;
}
</style>
