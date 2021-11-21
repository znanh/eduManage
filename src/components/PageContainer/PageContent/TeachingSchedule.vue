<template>
  <div class="TeachingSchedule">
    <!-- expandTrigger 必须动态传递数据才可以实现切换 -->
    <el-cascader :options="options" @change="change" :expandTrigger="triggle">
      <!-- :key='+new Date()'可以动态刷新组件 -->
      <!-- <el-cascader v-if='isclick' :options="options" @change="change" :key="+new Date()" :expandTrigger="triggle"> -->
    </el-cascader>
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
    <el-table v-show="one" :data="tableData" style="width: 100%">
      <el-table-column type="index" :index="indexMethod" width="60" align="center"> </el-table-column>
      <el-table-column label="星期一" prop="Monday" header-align="center" align="left"> </el-table-column>
      <el-table-column label="星期二" prop="Tuesday" header-align="center" align="left"></el-table-column>
      <el-table-column label="星期三" prop="Wednesday" header-align="center" align="left"> </el-table-column>
      <el-table-column label="星期四" prop="Thursday" header-align="center" align="left"> </el-table-column>
      <el-table-column label="星期五" prop="Friday" header-align="center" align="left"> </el-table-column>
      <el-table-column label="星期六" prop="Saturday" header-align="center" align="left"> </el-table-column>
      <el-table-column label="星期日" prop="Sunday" header-align="center" align="left"> </el-table-column>
    </el-table>
    <el-table v-if="two" :data="tableData" :span-method="MergeRows" style="width: 100%">
      <el-table-column label="课程" prop="cou_name" width="210" header-align="center" align="center"></el-table-column>
      <el-table-column label="学分" prop="cou_credit" width="50" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="总学时" prop="cou_totalPeriod" width="50" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="讲授学时" prop="cou_teachingHours" width="50" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="上机学时" prop="cou_computerHours" width="50" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="类别" prop="cou_category" width="70" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="授课方式" prop="cou_teachingCategory" width="50" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="考核方式" prop="cou_assessmentMethod" width="50" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="任课教师" prop="cou_teacher" width="80" header-align="center" align="center">
      </el-table-column>

      <el-table-column label="时间" align="center">
        <el-table-column label="周次" prop="cou_weekNum" width="90" header-align="center" align="center">
        </el-table-column>
        <el-table-column label="节次" prop="cou_dayNum" width="110" header-align="center" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column label="地点" prop="cou_address" header-align="center" align="center"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from '@/network/index.js'
export default {
  data() {
    return {
      ce: null,
      kong: null,
      tableData: null,
      one: false,
      two: false,
      term: null,
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
                  value: '_one',
                  label: '格式一'
                },
                {
                  value: '_two',
                  label: '格式二'
                }
              ]
            },
            {
              value: '-two',
              label: '第二学期',
              children: [
                {
                  value: '_one',
                  label: '格式一'
                },
                {
                  value: '_two',
                  label: '格式二'
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
                  value: '_one',
                  label: '格式一'
                },
                {
                  value: '_two',
                  label: '格式二'
                }
              ]
            },
            {
              value: '-two',
              label: '第二学期',
              children: [
                {
                  value: '_one',
                  label: '格式一'
                },
                {
                  value: '_two',
                  label: '格式二'
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
                  value: '_one',
                  label: '格式一'
                },
                {
                  value: '_two',
                  label: '格式二'
                }
              ]
            },
            {
              value: '-two',
              label: '第二学期',
              children: [
                {
                  value: '_one',
                  label: '格式一'
                },
                {
                  value: '_two',
                  label: '格式二'
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
                  value: '_one',
                  label: '格式一'
                },
                {
                  value: '_two',
                  label: '格式二'
                }
              ]
            },
            {
              value: '-two',
              label: '第二学期',
              children: [
                {
                  value: '_one',
                  label: '格式一'
                },
                {
                  value: '_two',
                  label: '格式二'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    indexMethod(index) {
      switch (index) {
        case 0:
          return '1-2'
        case 1:
          return '3-4'
        case 2:
          return '6-7'
        case 3:
          return '8-9'
        case 4:
          return '10-12'
      }
    },
    MergeRows({ row, column, rowIndex, columnIndex }) {
      if (
        columnIndex === 0 ||
        columnIndex === 1 ||
        columnIndex === 2 ||
        columnIndex === 3 ||
        columnIndex === 4 ||
        columnIndex === 5 ||
        columnIndex === 6 ||
        columnIndex === 7 ||
        columnIndex === 8 ||
        columnIndex === 9
      ) {
        if (rowIndex === 0) {
          return {
            rowspan: 3,
            colspan: 1
          }
        }
      }

      if (
        columnIndex === 0 ||
        columnIndex === 1 ||
        columnIndex === 2 ||
        columnIndex === 3 ||
        columnIndex === 4 ||
        columnIndex === 5 ||
        columnIndex === 6 ||
        columnIndex === 7 ||
        columnIndex === 8 ||
        columnIndex === 9
      ) {
        if (rowIndex === 3) {
          return {
            rowspan: 3,
            colspan: 1
          }
        }
      }

      if (
        columnIndex === 0 ||
        columnIndex === 1 ||
        columnIndex === 2 ||
        columnIndex === 3 ||
        columnIndex === 4 ||
        columnIndex === 5 ||
        columnIndex === 6 ||
        columnIndex === 7 ||
        columnIndex === 8 ||
        columnIndex === 9
      ) {
        if (rowIndex === 6) {
          return {
            rowspan: 3,
            colspan: 1
          }
        }
      }

      if (
        columnIndex === 0 ||
        columnIndex === 1 ||
        columnIndex === 2 ||
        columnIndex === 3 ||
        columnIndex === 4 ||
        columnIndex === 5 ||
        columnIndex === 6 ||
        columnIndex === 7 ||
        columnIndex === 8 ||
        columnIndex === 9
      ) {
        if (rowIndex === 9) {
          return {
            rowspan: 3,
            colspan: 1
          }
        }
      }

      if (
        columnIndex === 0 ||
        columnIndex === 1 ||
        columnIndex === 2 ||
        columnIndex === 3 ||
        columnIndex === 4 ||
        columnIndex === 5 ||
        columnIndex === 6 ||
        columnIndex === 7 ||
        columnIndex === 8 ||
        columnIndex === 9
      ) {
        if (rowIndex === 12) {
          return {
            rowspan: 3,
            colspan: 1
          }
        }
      }

      if (
        columnIndex === 0 ||
        columnIndex === 1 ||
        columnIndex === 2 ||
        columnIndex === 3 ||
        columnIndex === 4 ||
        columnIndex === 5 ||
        columnIndex === 6 ||
        columnIndex === 7 ||
        columnIndex === 8 ||
        columnIndex === 9
      ) {
        if (rowIndex === 15) {
          return {
            rowspan: 3,
            colspan: 1
          }
        }
      }

      if (
        columnIndex === 0 ||
        columnIndex === 1 ||
        columnIndex === 2 ||
        columnIndex === 3 ||
        columnIndex === 4 ||
        columnIndex === 5 ||
        columnIndex === 6 ||
        columnIndex === 7 ||
        columnIndex === 8 ||
        columnIndex === 9
      ) {
        if (rowIndex === 18) {
          return {
            rowspan: 3,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    //点击切换选中方式
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
      if (value[2] === '_one') {
        //判断要用哪种表
        this.two = false
        this.one = true
        if (this.term === 'bigone-one_one') {
          axios({
            url: '/bigone-one_one'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigone-one_one失败了', error.message)
            }
          )
        } else if (this.term === 'bigone-two_one') {
          axios({
            url: '/bigone-two_one'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigone-two_one失败了', error.message)
            }
          )
        } else if (this.term === 'bigtwo-one_one') {
          axios({
            url: '/bigtwo-one_one'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigtwo-one_one失败了', error.message)
            }
          )
        } else if (this.term === 'bigtwo-two_one') {
          axios({
            url: '/bigtwo-two_one'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigtwo-two_one失败了', error.message)
            }
          )
        } else if (this.term === 'bigthree-one_one') {
          axios({
            url: '/bigthree-one_one'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigthree-one_one失败了', error.message)
            }
          )
        } else if (this.term === 'bigthree-two_one') {
          axios({
            url: '/bigthree-two_one'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigthree-two_one失败了', error.message)
            }
          )
        } else if (this.term === 'bigfour-one_one') {
          axios({
            url: '/bigfour-one_one'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigfour-one_one失败了', error.message)
            }
          )
        } else if (this.term === 'bigfour-two_one') {
          axios({
            url: '/bigfour-two_one'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigfour-two_one失败了', error.message)
            }
          )
        }
      } else {
        this.one = false
        this.two = true
        if (this.term === 'bigone-one_two') {
          axios({
            url: '/bigone-one_two'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigone-one_two失败了', error.message)
            }
          )
        } else if (this.term === 'bigone-two_two') {
          axios({
            url: '/bigone-two_two'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigone-two_two失败了', error.message)
            }
          )
        } else if (this.term === 'bigtwo-one_two') {
          axios({
            url: '/bigtwo-one_two'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigtwo-one_two失败了', error.message)
            }
          )
        } else if (this.term === 'bigtwo-two_two') {
          axios({
            url: '/bigtwo-two_two'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigtwo-two_two失败了', error.message)
            }
          )
        } else if (this.term === 'bigthree-one_two') {
          axios({
            url: '/bigthree-one_two'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigthree-one_two失败了', error.message)
            }
          )
        } else if (this.term === 'bigthree-two_two') {
          axios({
            url: '/bigthree-two_two'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigthree-two_one失败了', error.message)
            }
          )
        } else if (this.term === 'bigfour-one_two') {
          axios({
            url: '/bigfour-one_two'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigfour-one_two失败了', error.message)
            }
          )
        } else if (this.term === 'bigfour-two_two') {
          axios({
            url: '/bigfour-two_two'
          }).then(
            response => {
              this.tableData = response.data
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求bigfour-two_two失败了', error.message)
            }
          )
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.TeachingSchedule {
  padding: 32px;
  user-select: none; //user-select 能否选中文本
}

/deep/.el-table .cell {
  white-space: pre-line;
}
</style>
