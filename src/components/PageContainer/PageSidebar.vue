<template>
  <div class="page-sidebar">
    <div class="logo-box">
      <router-link to="/PageContainer">
        <span>仲园<span class="dis">教务网</span></span>
      </router-link>
    </div>
    <div class="page-sidebar-inner">
      <div class="page-sidebar-menu">
        <ul class="accordion-menu">
          <li v-for="item in navBarItems" :key="item.id">
            <a href="javascript:void(0)">
              <i :class="`menu-icon ${item.icon}`"></i>
              <span>{{ item.title }}</span>
              <i class="accordion-icon fa el-icon-arrow-down"></i>
            </a>
            <ul class="sub-menu">
              <li v-for="i in item.children" :key="i.id">
                <router-link :to="i.path">{{ i.title }}</router-link>
              </li>
            </ul>
          </li>
          <!-- <li>
            <a href="javascript:void(0)">
              <i class="menu-icon el-icon-user-solid"></i><span>学生学籍</span
              ><i class="accordion-icon fa el-icon-arrow-down"></i>
            </a>
            <ul class="sub-menu">
              <li>
                <router-link to="/PageContainer/StudentStatusFile">学籍档案</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i class="menu-icon el-icon-s-management"></i><span>培养方案</span
              ><i class="accordion-icon fa el-icon-arrow-down"></i>
            </a>
            <ul class="sub-menu">
              <li>
                <router-link to="/PageContainer/TheoryCourse">理论课程</router-link>
              </li>
              <li>
                <router-link to="/PageContainer/PracticeLink">实践环节</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i class="menu-icon el-icon-s-promotion"></i><span>网上选课</span
              ><i class="accordion-icon fa el-icon-arrow-down"></i>
            </a>
            <ul class="sub-menu">
              <li>
                <router-link to="/PageContainer/PositiveElection">正选</router-link>
              </li>
              <li>
                <router-link to="/PageContainer/Withdraw">退选</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i class="menu-icon el-icon-s-claim "></i
              ><span>教学安排</span
              ><i class="accordion-icon fa el-icon-arrow-down"></i>
            </a>
            <ul class="sub-menu">
              <li>
                <router-link to="/PageContainer/TeachingSchedule">教学安排表</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i class="menu-icon el-icon-s-data"></i><span>考试安排</span
              ><i class="accordion-icon fa el-icon-arrow-down"></i>
            </a>
            <ul class="sub-menu">
              <li>
                <router-link to="/PageContainer/ExamSchedule">考试安排表</router-link>
                </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i class="menu-icon el-icon-s-check"></i><span>学生成绩</span
              ><i class="accordion-icon fa el-icon-arrow-down"></i>
            </a>
            <ul class="sub-menu">
              <li>
                <router-link to="/PageContainer/ViewGrades">查看成绩</router-link>
                </li>
              <li>
                <router-link to="/PageContainer/ScoreDistribution">成绩分布</router-link>
                </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i class="menu-icon el-icon-s-marketing"></i><span>其它</span
              ><i class="accordion-icon fa el-icon-arrow-down"></i>
            </a>
            <ul class="sub-menu">
              <li>
                <router-link to="/PageContainer/TimeLine">TimeLine</router-link>
              </li>
            </ul>
          </li> -->
          <li class="menu-divider"></li>

          <li>
            <router-link to="/PageContainer">
              <i class="menu-icon el-icon-s-opportunity"></i><span>版本</span
              ><span class="label label-danger">1.0</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// const axios = require("axios");
import axios from '@/network/index.js'

export default {
  data() {
    return {
      islogin: null,
      url: null,
      navBarItems: null
    }
  },
  created() {
    // window._this = this
    // console.log(this.$store.state.user);
    // axios.defaults.baseURL = "http://localhost:3000";
    if (this.$store.state.user === 'student') {
      this.url = '/studentSideBar'
    } else if (this.$store.state.user === 'admin') {
      this.url = '/adminSideBar'
    }
    axios({
      url: this.url
    }).then(
      response => {
        this.navBarItems = response.data
      },
      error => {
        // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
        console.log('请求navBar失败了', error.message)
      }
    )
  },
  /*虽然是created时期发送的请求，但是要到updated才能更新渲染，而坍塌后的hover由于是css样式，则一直生效*/
  updated() {
    // console.log($(".page-sidebar .accordion-menu li").has("ul"));
    var other = null
    window.flag = true //跨组件变量
    $('.page-sidebar .accordion-menu li')
      .has('ul')
      .click(function(e) {
        if (flag) {
          //flag为true则提供展开功能，为false则不能展开
          //  _this.islogin = true
          //   _this.$store.commit("savelogin", _this.islogin);
          //   console.log(_this.$store.state.islogin);
          if (other !== null) {
            $(other.children[1]).slideUp('slow')
          }
          //判断是否和上次点击的是同一个li，如果是则只收缩，不展开
          if (this === other) {
            other = null
            return
          }
          var now = this
          $(now.children[1]).slideDown('slow')
          other = now
        }
      })
    //阻止二级菜单上的li冒泡，不然一级菜单的li会再次收缩
    $('.accordion-menu li ul li').click(function(e) {
      e.stopPropagation()
    })
  },
  beforeDestroy() {
    console.log('侧边栏销毁')
  }
}
</script>

<style lang="less" scoped>
.p-s {
  position: fixed;
}

.accordion-menu {
  li {
    & > ul {
      display: none;
    }
  }
  & > li {
    &:hover {
      background-color: #001528;
      transition: all 1s;
    }
    & > ul {
      & > li {
        &:hover {
          background-color: #001528;
          transition: all 1s;
        }
      }
    }
  }
  .sub-menu {
    padding: 0;
  }
}

.dn {
  display: none !important;
}

.phalf {
  padding: 14px 21.5px;
}

.sm-logo {
  width: 60px;
  padding: 40px 20px 11px 20px;
}

.h-33 {
  height: 33px;
}

.coll {
  width: 60px;
  .page-sidebar-menu {
    ul {
      li {
        position: relative;
        &:hover {
          width: 230px;
          a {
            span {
              margin-left: 50px;
              display: inline-block !important;
            }
          }
          ul {
            display: block !important;
            position: absolute;
            left: 60px;
            top: 50px;
            width: 170px;
            li {
              opacity: 1;
              width: 170px;
              a {
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
  .label-danger {
    position: absolute;
  }
}

.logo-box {
  span {
    color: #ccc;
  }
}

.fz-13 {
  font-size: 13px !important;
}

.el-icon-arrow-down {
  transition: transform 0.5s;
}

.page-sidebar {
  .accordion-menu {
    li {
      &:visited {
        .el-icon-arrow-down {
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>
