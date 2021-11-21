<template>
  <div class="ViewGrades">
    <el-cascader :options="options" @change="change" :expandTrigger="triggle"> </el-cascader>
    <el-switch
      style="display: inline-block;float:right"
      v-model="valSwitch"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="点击选择"
      inactive-text="悬浮选择"
      @change="switchChange"
    >
    </el-switch>
    <el-table v-show="primitive" :data="tableData" style="width: 100%">
      <el-table-column label="序号" prop="id" width="50" header-align="center" align="center"> </el-table-column>
      <el-table-column label="课程" prop="gra_name" header-align="center" align="center"></el-table-column>
      <el-table-column label="学分" prop="gra_credit" width="50" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="类别" prop="gra_category" width="140" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="考核方式" prop="gra_assessmentMethod" width="50" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="修读性质" prop="gra_nature" width="50" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="成绩" align="center">
        <el-table-column label="平时" prop="gra_usually" width="70" header-align="center" align="center">
        </el-table-column>
        <el-table-column label="中考" prop="gra_mExam" width="70" header-align="center" align="center">
        </el-table-column>
        <el-table-column label="末考" prop="gra_eExam" width="70" header-align="center" align="center">
        </el-table-column>
        <el-table-column label="技能" prop="gra_skill" width="70" header-align="center" align="center">
        </el-table-column>
        <el-table-column label="综合" prop="gra_comprehensive" width="70" header-align="center" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column label="辅修标记" prop="gra_minor" width="80" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="备注" prop="gra_remarks" width="60" header-align="center" align="center">
      </el-table-column>
    </el-table>

    <el-table v-show="valid" :data="tableData" style="width: 100%" border>
      <el-table-column label="序号" prop="id" width="50" header-align="center" align="center"> </el-table-column>
      <el-table-column label="课程" prop="gra_name" header-align="center" align="center"></el-table-column>
      <el-table-column label="学分" prop="gra_credit" width="50" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="类别" prop="gra_category" width="140" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="考核方式" prop="gra_assessmentMethod" width="50" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="修读性质" prop="gra_nature" width="50" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="成绩" prop="gra_grades" width="70" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="取得学分" prop="gra_getCredits" width="110" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="绩点" prop="gra_gradePoint" width="70" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="学分绩点" prop="gra_creditPoint" width="90" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="备注" prop="gra_remarks" width="60" header-align="center" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from '@/network/index.js'
export default {
  data() {
    return {
      length: 0,
      flag: true,
      ce: null,
      kong: null,
      tableData: null,
      primitive: false,
      valid: false,
      term: null,
      indexVal: null,
      valSwitch: true,
      triggle: 'click',
      options: [
        {
          value: 'bigone',
          label: '2017-2018学年',
          children: [
            {
              value: '-one',
              label: '第一学期',
              children: [
                {
                  value: '_primitive',
                  label: '原始成绩'
                },
                {
                  value: '_valid',
                  label: '有效成绩'
                }
              ]
            },
            {
              value: '-two',
              label: '第二学期',
              children: [
                {
                  value: '_primitive',
                  label: '原始成绩'
                },
                {
                  value: '_valid',
                  label: '有效成绩'
                }
              ]
            }
          ]
        },
        {
          value: 'bigtwo',
          label: '2018-2019学年',
          children: [
            {
              value: '-one',
              label: '第一学期',
              children: [
                {
                  value: '_primitive',
                  label: '原始成绩'
                },
                {
                  value: '_valid',
                  label: '有效成绩'
                }
              ]
            },
            {
              value: '-two',
              label: '第二学期',
              children: [
                {
                  value: '_primitive',
                  label: '原始成绩'
                },
                {
                  value: '_valid',
                  label: '有效成绩'
                }
              ]
            }
          ]
        },
        {
          value: 'bigthree',
          label: '2019-2020学年',
          children: [
            {
              value: '-one',
              label: '第一学期',
              children: [
                {
                  value: '_primitive',
                  label: '原始成绩'
                },
                {
                  value: '_valid',
                  label: '有效成绩'
                }
              ]
            },
            {
              value: '-two',
              label: '第二学期',
              children: [
                {
                  value: '_primitive',
                  label: '原始成绩'
                },
                {
                  value: '_valid',
                  label: '有效成绩'
                }
              ]
            }
          ]
        },
        {
          value: 'bigfour',
          label: '2020-2021学年',
          children: [
            {
              value: '-one',
              label: '第一学期',
              children: [
                {
                  value: '_primitive',
                  label: '原始成绩'
                },
                {
                  value: '_valid',
                  label: '有效成绩'
                }
              ]
            },
            {
              value: '-two',
              label: '第二学期',
              children: [
                {
                  value: '_primitive',
                  label: '原始成绩'
                },
                {
                  value: '_valid',
                  label: '有效成绩'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    switchChange(sval) {
      console.log(sval)
      if (sval) {
        this.triggle = 'click'
      } else if (!sval) {
        this.triggle = 'hover'
      }
    },
    change(value) {
      this.term = value[0] + value[1] + value[2]
      console.log(value)
      console.log(this.term)
      if (value[2] === '_primitive') {
        this.valid = false
        this.primitive = true
        if (this.term === 'bigone-one_primitive') {
          axios({
            url: '/bigone-one_primitive'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigone-one_primitive失败了', error.message)
            }
          )
        } else if (this.term === 'bigone-two_primitive') {
          axios({
            url: '/bigone-two_primitive'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigone-two_primitive失败了', error.message)
            }
          )
        } else if (this.term === 'bigtwo-one_primitive') {
          axios({
            url: '/bigtwo-one_primitive'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigtwo-one_primitive失败了', error.message)
            }
          )
        } else if (this.term === 'bigtwo-two_primitive') {
          axios({
            url: '/bigtwo-two_primitive'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigtwo-two_primitive失败了', error.message)
            }
          )
        } else if (this.term === 'bigthree-one_primitive') {
          axios({
            url: '/bigthree-one_primitive'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigthree-one_primitive失败了', error.message)
            }
          )
        } else if (this.term === 'bigthree-two_primitive') {
          axios({
            url: '/bigthree-two_primitive'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigthree-two_primitive失败了', error.message)
            }
          )
        } else if (this.term === 'bigfour-one_primitive') {
          axios({
            url: '/bigfour-one_primitive'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigfour-one_primitive失败了', error.message)
            }
          )
        } else if (this.term === 'bigfour-two_primitive') {
          axios({
            url: '/bigfour-two_primitive'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigfour-two_primitive失败了', error.message)
            }
          )
        }
      } else {
        this.primitive = false
        this.valid = true
        if (this.term === 'bigone-one_valid') {
          axios({
            url: '/bigone-one_valid'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigone-one_valid失败了', error.message)
            }
          )
        } else if (this.term === 'bigone-two_valid') {
          axios({
            url: '/bigone-two_valid'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigone-two_valid失败了', error.message)
            }
          )
        } else if (this.term === 'bigtwo-one_valid') {
          axios({
            url: '/bigtwo-one_valid'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigtwo-one_valid失败了', error.message)
            }
          )
        } else if (this.term === 'bigtwo-two_valid') {
          axios({
            url: '/bigtwo-two_valid'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigtwo-two_valid失败了', error.message)
            }
          )
        } else if (this.term === 'bigthree-one_valid') {
          axios({
            url: '/bigthree-one_valid'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigthree-one_valid失败了', error.message)
            }
          )
        } else if (this.term === 'bigthree-two_valid') {
          axios({
            url: '/bigthree-two_valid'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigthree-two_one失败了', error.message)
            }
          )
        } else if (this.term === 'bigfour-one_valid') {
          axios({
            url: '/bigfour-one_valid'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigfour-one_valid失败了', error.message)
            }
          )
        } else if (this.term === 'bigfour-two_valid') {
          axios({
            url: '/bigfour-two_valid'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigfour-two_valid失败了', error.message)
            }
          )
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.ViewGrades {
  padding: 32px;
  user-select: none;
}
</style>
