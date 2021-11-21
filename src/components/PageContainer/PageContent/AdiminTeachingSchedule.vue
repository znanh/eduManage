<template>
  <div class="AdiminTeachingSchedule">
    <vxe-toolbar>
      <template #buttons>
        <vxe-button icon="el-icon-plus" @click="one ? '' : insertEvent2()">新增</vxe-button>
      </template>
    </vxe-toolbar>
    <el-cascader
      :options="options"
      @change="change"
      :expandTrigger="triggle"
      style="display: inline-block;margin:0 auto"
    >
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
    <vxe-table
      border
      show-overflow
      highlight-hover-row
      v-if="one"
      ref="xTable"
      height="500"
      align="center"
      :data="tableData"
      @cell-dblclick="cellDBLClickEvent1"
    >
      <vxe-table-column field="Monday" title="星期一"></vxe-table-column>
      <vxe-table-column field="Tuesday" title="星期二"></vxe-table-column>
      <vxe-table-column field="Wednesday" title="星期三"></vxe-table-column>
      <vxe-table-column field="Thursday" title="星期四"></vxe-table-column>
      <vxe-table-column field="Friday" title="星期五"></vxe-table-column>
      <vxe-table-column field="Saturday" title="星期六"></vxe-table-column>
      <vxe-table-column field="Sunday" title="星期日"></vxe-table-column>

      <vxe-table-column title="操作" width="100" show-overflow :key="+new Date()">
        <!-- 不加key，它会一直复用上一个 -->
        <template #default="{ row }">
          <vxe-button type="text" icon="el-icon-edit-outline" @click="editEvent1(row)"></vxe-button>
        </template>
      </vxe-table-column>
    </vxe-table>
    <vxe-table
      border
      show-overflow
      highlight-hover-row
      v-if="two"
      ref="xTable"
      height="500"
      align="center"
      :data="tableData"
      :span-method="mergeRowMethod"
      @cell-dblclick="cellDBLClickEvent2"
    >
      <vxe-table-column field="cou_name" title="课程"></vxe-table-column>
      <vxe-table-column field="cou_credit" title="学分"></vxe-table-column>
      <vxe-table-column field="cou_category" title="课程类别"></vxe-table-column>
      <vxe-table-colgroup title="时间">
        <vxe-table-column field="cou_weekNum" title="周次"></vxe-table-column>
        <vxe-table-column field="cou_dayNum" title="节次"></vxe-table-column>
      </vxe-table-colgroup>
      <vxe-table-column field="cou_address" title="地点"></vxe-table-column>

      <vxe-table-column title="操作" width="100" show-overflow :key="+new Date()">
        <template #default="{ row }">
          <vxe-button type="text" icon="el-icon-edit-outline" @click="editEvent2(row)"></vxe-button>
          <vxe-button type="text" icon="el-icon-delete" @click="removeEvent2(row)"></vxe-button>
        </template>
      </vxe-table-column>
    </vxe-table>
    <vxe-modal
      v-model="showEdit1"
      :title="selectRow1 ? '编辑&保存' : '新增&保存'"
      width="800"
      min-width="600"
      min-height="300"
      :loading="submitLoading1"
      resize
      destroy-on-close
    >
      <template #default>
        <vxe-form
          :data="formData1"
          :items="formItems1"
          :rules="formRules1"
          title-align="right"
          title-width="100"
          @submit="submitEvent1"
        ></vxe-form>
      </template>
    </vxe-modal>
    <vxe-modal
      v-model="showEdit2"
      v-if="two"
      :title="selectRow2 ? '编辑&保存' : '新增&保存'"
      width="800"
      min-width="600"
      min-height="300"
      :loading="submitLoading2"
      resize
      destroy-on-close
    >
      <template #default>
        <vxe-form
          :data="formData2"
          :items="formItems2"
          :rules="formRules2"
          title-align="right"
          title-width="100"
          @submit="submitEvent2"
        ></vxe-form>
      </template>
    </vxe-modal>
  </div>
</template>

<script>
import axios from '@/network/index.js'
export default {
  data() {
    return {
      submitLoading1: false,
      submitLoading2: false,
      tableData: null,
      selectRow1: null,
      selectRow2: null,
      showEdit1: false,
      showEdit2: false,
      triggle: 'click',
      one: false,
      two: false,
      term: null,
      valSwitch: true,
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
      ],
      formData1: {
        id: null,
        Monday: null,
        Tuesday: null,
        Wednesday: null,
        Thursday: null,
        Friday: null,
        Saturday: null,
        Sunday: null
      },
      formData2: {
        id: null,
        cou_name: null,
        cou_credit: null,
        cou_totalPeriod: null,
        cou_teachingHours: null,
        cou_computerHours: null,
        cou_category: null,
        cou_teachingCategory: null,
        cou_assessmentMethod: null,
        cou_teacher: null,
        cou_weekNum: null,
        cou_dayNum: null,
        cou_address: null
      },
      formRules1: {},
      formRules2: {
        cou_name: [
          { required: true, message: '请输入课程' },
          { min: 3, max: 23, message: '长度在 3 到 23 个字符' }
        ],
        cou_credit: [
          { required: true, message: '请输入学分' },
          { min: 3, max: 3, message: '长度为3 个字符' }
        ],
        cou_category: [
          { required: true, message: '请输入类别' },
          { min: 7, max: 7, message: '长度为7 个字符' }
        ],
        cou_weekNum: [
          { required: true, message: '请输入周次' },
          { min: 3, max: 13, message: '长度在 3 到 13 个字符' }
        ],
        cou_dayNum: [
          { required: true, message: '请输入节次' },
          { min: 8, max: 8, message: '长度为8 个字符' }
        ],
        cou_address: [
          { required: true, message: '请输入地点' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符' }
        ]
      },
      formItems1: [
        {
          field: 'Monday',
          title: '星期一',
          span: 24,
          itemRender: {
            name: '$textarea',
            props: {
              autosize: { minRows: 2, maxRows: 4 },
              placeholder: '请输入星期一'
            }
          }
        },
        {
          field: 'Tuesday',
          title: '星期二',
          span: 24,
          itemRender: {
            name: '$textarea',
            props: {
              autosize: { minRows: 2, maxRows: 4 },
              placeholder: '请输入星期二'
            }
          }
        },
        {
          field: 'Wednesday',
          title: '星期三',
          span: 24,
          itemRender: {
            name: '$textarea',
            props: {
              autosize: { minRows: 2, maxRows: 4 },
              placeholder: '请输入星期三'
            }
          }
        },
        {
          field: 'Thursday',
          title: '星期四',
          span: 24,
          itemRender: {
            name: '$textarea',
            props: {
              autosize: { minRows: 2, maxRows: 4 },
              placeholder: '请输入星期四'
            }
          }
        },
        {
          field: 'Friday',
          title: '星期五',
          span: 24,
          itemRender: {
            name: '$textarea',
            props: {
              autosize: { minRows: 2, maxRows: 4 },
              placeholder: '请输入星期五'
            }
          }
        },
        {
          field: 'Saturday',
          title: '星期六',
          span: 24,
          itemRender: {
            name: '$textarea',
            props: {
              autosize: { minRows: 2, maxRows: 4 },
              placeholder: '请输入星期六'
            }
          }
        },
        {
          field: 'Sunday',
          title: '星期日',
          span: 24,
          itemRender: {
            name: '$textarea',
            props: {
              autosize: { minRows: 2, maxRows: 4 },
              placeholder: '请输入星期日'
            }
          }
        },
        {
          align: 'center',
          span: 24,
          titleAlign: 'left',
          itemRender: {
            name: '$buttons',
            children: [
              { props: { type: 'submit', content: '提交', status: 'primary' } },
              { props: { type: 'reset', content: '重置' } }
            ]
          }
        }
      ],
      formItems2: [
        {
          title: 'Basic information',
          span: 24,
          titleAlign: 'left',
          titleWidth: 200,
          titlePrefix: { icon: 'el-icon-bank-card' }
        },
        {
          field: 'cou_name',
          title: '课程',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入课程' }
          }
        },
        {
          field: 'cou_credit',
          title: '学分',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入学分' }
          }
        },
        {
          field: 'cou_category',
          title: '类别',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入类别' }
          }
        },
        {
          field: 'cou_weekNum',
          title: '周次',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入周次' }
          }
        },
        {
          field: 'cou_dayNum',
          title: '节次',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入节次' }
          }
        },
        {
          field: 'cou_address',
          title: '地点',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入地点' }
          }
        },
        {
          title: 'detailed information',
          span: 24,
          titleAlign: 'left',
          titleWidth: 200,
          titlePrefix: { message: '请填写必填项', icon: 'el-icon-info' }
        },
        {
          field: 'cou_totalPeriod',
          title: '总学时',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入总学时' }
          }
        },
        {
          field: 'cou_teachingHours',
          title: '讲授学时',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入讲授学时' }
          }
        },
        {
          field: 'cou_computerHours',
          title: '上机学时',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入上机学时' }
          }
        },
        {
          field: 'cou_teachingCategory',
          title: '授课方式',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入授课方式' }
          }
        },
        {
          field: 'cou_assessmentMethod',
          title: '考核方式',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入考核方式' }
          }
        },
        {
          field: 'cou_teacher',
          title: '任课教师',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入任课教师' }
          }
        },
        {
          align: 'center',
          span: 24,
          titleAlign: 'left',
          itemRender: {
            name: '$buttons',
            children: [
              { props: { type: 'submit', content: '提交', status: 'primary' } },
              { props: { type: 'reset', content: '重置' } }
            ]
          }
        }
      ]
    }
  },
  methods: {
    mergeRowMethod({ row, _rowIndex, column, visibleData }) {
      const fields = ['cou_name', 'cou_credit', 'cou_category']
      const cellValue = row[column.property]
      if (cellValue && fields.includes(column.property)) {
        const prevRow = visibleData[_rowIndex - 1]
        let nextRow = visibleData[_rowIndex + 1]
        if (prevRow && prevRow[column.property] === cellValue) {
          return { rowspan: 0, colspan: 0 }
        } else {
          let countRowspan = 1
          while (nextRow && nextRow[column.property] === cellValue) {
            nextRow = visibleData[++countRowspan + _rowIndex]
          }
          if (countRowspan > 1) {
            return { rowspan: countRowspan, colspan: 1 }
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
    },
    cellDBLClickEvent1({ row }) {
      this.editEvent1(row)
    },
    cellDBLClickEvent2({ row }) {
      this.editEvent2(row)
    },
    insertEvent2() {
      this.formData2 = {
        id: this.tableData.length + 1,
        cou_name: '',
        cou_credit: '',
        cou_totalPeriod: '',
        cou_teachingHours: '',
        cou_computerHours: '',
        cou_category: '',
        cou_teachingCategory: '',
        cou_assessmentMethod: '',
        cou_teacher: '',
        cou_weekNum: '',
        cou_dayNum: '',
        cou_address: ''
      }
      this.selectRow2 = null
      this.showEdit1 = false
      this.showEdit2 = true
    },
    editEvent1(row) {
      this.formData1 = {
        id: row.id,
        Monday: row.Monday,
        Tuesday: row.Tuesday,
        Wednesday: row.Wednesday,
        Thursday: row.Thursday,
        Friday: row.Friday,
        Saturday: row.Saturday,
        Sunday: row.Sunday
      }
      this.selectRow1 = row
      this.showEdit2 = false
      this.showEdit1 = true
    },
    editEvent2(row) {
      this.formData2 = {
        id: row.id,
        cou_name: row.cou_name,
        cou_credit: row.cou_credit,
        cou_totalPeriod: row.cou_totalPeriod,
        cou_teachingHours: row.cou_teachingHours,
        cou_computerHours: row.cou_computerHours,
        cou_category: row.cou_category,
        cou_teachingCategory: row.cou_teachingCategory,
        cou_assessmentMethod: row.cou_assessmentMethod,
        cou_teacher: row.cou_teacher,
        cou_weekNum: row.cou_weekNum,
        cou_dayNum: row.cou_dayNum,
        cou_address: row.cou_address
      }
      this.selectRow2 = row
      this.showEdit1 = false
      this.showEdit2 = true
    },
    removeEvent2(row) {
      this.$XModal.confirm('您确定要删除该数据?').then(type => {
        const $table = this.$refs.xTable
        if (type === 'confirm') {
          axios({
            url: `${this.term}/${row.id}`,
            method: 'delete'
          }).then(
            response => {
              if (response.status >= 200 && response.status <= 300) {
                this.$XModal.message({
                  content: '删除成功',
                  status: 'success'
                })
                $table.remove(row)
                console.log('ss' + response.data)
              }
              // console.log(response);
              // this.tableData = response.data;
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求教学安排表失败了', error.message)
            }
          )
        }
      })
    },
    submitEvent1() {
      this.submitLoading1 = true
      setTimeout(() => {
        const $table = this.$refs.xTable
        this.submitLoading1 = false
        this.showEdit1 = false
        if (this.selectRow1) {
          axios({
            url: `${this.term}/${this.formData1.id}`,
            method: 'put',
            data: this.formData1
          }).then(
            response => {
              2222222222222222
              if (response.status >= 200 && response.status <= 300) {
                this.$XModal.message({
                  content: '保存成功',
                  status: 'success'
                })
                Object.assign(this.selectRow1, this.formData1)
              }
              // console.log(response);
              // this.tableData = response.data;
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求T失败了', error.message)
            }
          )
        }
      }, 500)
    },
    submitEvent2() {
      this.submitLoading2 = true
      setTimeout(() => {
        const $table = this.$refs.xTable
        this.submitLoading2 = false
        this.showEdit2 = false
        if (this.selectRow2) {
          axios({
            url: `${this.term}/${this.formData2.id}`,
            method: 'put',
            data: this.formData2
          }).then(
            response => {
              if (response.status >= 200 && response.status <= 300) {
                this.$XModal.message({
                  content: '保存成功',
                  status: 'success'
                })
                Object.assign(this.selectRow2, this.formData2)
              }
              // console.log(response);
              // this.tableData = response.data;
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求教学安排表失败了', error.message)
            }
          )
        } else {
          axios({
            url: this.term,
            method: 'post',
            data: this.formData2
          }).then(
            response => {
              if (response.status >= 200 && response.status <= 300) {
                this.$XModal.message({
                  content: '新增成功',
                  status: 'success'
                })
                console.log(response.data)
                $table.insert(this.formData2)
              }
              // console.log(response);
              // this.tableData = response.data;
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求教学安排表失败了', error.message)
            }
          )
        }
      }, 500)
    }
  }
}
</script>

<style lang="less" scoped>
.vxe-modal--body {
  padding: 0 !important;
}
/deep/.el-icon-delete {
  color: #ff4949;
}
/deep/.el-icon-edit-outline {
  color: #1890ff;
}
.vxe-button.type--text:not(.is--disabled):focus {
  box-shadow: none;
}
.vxe-toolbar {
  display: inline-block !important;
}
.el-cascader {
  top: -10px;
  left: 350px;
}
</style>
