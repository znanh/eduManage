<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="off"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">登录</h3>
      </div>

      <el-form-item prop="select">
        <el-select v-model="value" placeholder="请选择" @change="selchange">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </el-form-item>

      <el-form-item prop="username">
        <span class="svg-container">
          <i class="el-icon-user-solid"></i>
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="off"
        />
        <!-- tabindex是tab键遍历 -->
        <!-- autocomplete是记录输入历史 -->
      </el-form-item>

      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <i class="el-icon-lock"></i>
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            autocomplete="off"
          />
        </el-form-item>
      </el-tooltip>

      <el-button
        class="login-button"
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:30px;"
        @click="toPageContainer"
        >Login</el-button
      >
    </el-form>
  </div>
</template>

<script>
import axios from '@/network/index.js'
export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('账号不可为空'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不可为空'))
      } else if (value.length < 6) {
        callback(new Error('密码长度不小于6位'))
      } else {
        callback()
      }
    }
    return {
      islogin: null,
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      url: null,
      otherQuery: {},
      loginForm: {
        username: '201710214532',
        password: '123456'
      },
      loginRules: {
        //required 不能为空
        //trigger类型为blur的功能是文本框失去焦点才会触发
        //validator 校验
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      options: [
        {
          value: 'student',
          label: '学生'
        },
        {
          value: 'admin',
          label: '管理员'
        }
      ],
      value: 'student'
    }
  },

  methods: {
    toPageContainer() {
      if (this.$store.state.user === 'student') {
        this.url = '/studentinfo'
      } else if (this.$store.state.user === 'admin') {
        this.url = '/admininfo'
      }

      axios({
        url: `${this.url}?userid=${this.loginForm.username}`
      }).then(
        response => {
          if (this.loginForm.password === response.data[0].password) {
            console.log(response.data[0])
            this.$message({
              message: '登录成功',
              type: 'success'
            })
            this.$router.push('/PageContainer/')
            this.$store.commit('idis', response.data[0].userid)
          } else {
            this.$message({
              message: '账号或密码错误，请检查账号密码！',
              type: 'error'
            })
            // this.$message.error('账号或密码错误，请检查账号密码！')
          }
        },
        error => {
          // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
          console.log('请求navBar失败了', error.message)
        }
      )
    },
    selchange(val) {
      this.$store.commit('useris', val)
    }
  },
  created() {
    console.log('登录创建')
    //     this.islogin = false
    //     this.$store.commit("savelogin", this.islogin);
    // console.log(this.$store.state.islogin);
    this.$store.commit('useris', this.value)
  },
  beforeDestroy() {
    console.log('登录销毁')
    //     this.islogin = true
    //     this.$store.commit("savelogin", this.islogin);
    // console.log(this.$store.state.islogin);
  }
}
</script>

<style lang="less" scoped>
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #fff;
      height: 47px;
      caret-color: #fff;
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
  .login-button {
    background-color: #1890ff !important;
  }
  .el-select {
    width: 100%;
  }
  /deep/.el-select > .el-input {
    line-height: 52px;
  }
}

// -----

.login-container {
  min-height: 100%;
  width: 100%;
  padding: 0 0 185px 0;
  background-color: #2d3a4b;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: #889aa4;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: #eee;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: #889aa4;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }
}

/deep/.el-input__inner {
  background-color: #283443;
  border: none;
  color: #fff;
}
// .select {
//   position: relative;
//   left: 235px;
// }
</style>
