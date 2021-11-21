<template>
  <div class="AdminExamSchedule">
    <vxe-toolbar>
      <template #buttons>
        <vxe-button icon="el-icon-plus" @click="insertEvent()">新增</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      show-overflow
      highlight-hover-row
      ref="xTable"
      height="500"
      align="center"
      :data="tableData"
      :span-method="mergeRowMethod"
      @cell-dblclick="cellDBLClickEvent"
    >
      <vxe-table-column field="exam_name" title="课程名称"></vxe-table-column>
      <vxe-table-column field="exam_time" title="时间"></vxe-table-column>
      <vxe-table-column field="exam_address" title="地点"></vxe-table-column>
      <vxe-table-column field="exam_invigilator" title="监考人员"></vxe-table-column>
      <vxe-table-column field="exam_class" title="考试班级"></vxe-table-column>

      <vxe-table-column title="操作" width="100" show-overflow>
        <template #default="{ row }">
          <vxe-button type="text" icon="el-icon-edit-outline" @click="editEvent(row)"></vxe-button>
          <vxe-button type="text" icon="el-icon-delete" @click="removeEvent(row)"></vxe-button>
        </template>
      </vxe-table-column>
    </vxe-table>

    <vxe-modal
      v-model="showEdit"
      :title="selectRow ? '编辑&保存' : '新增&保存'"
      width="800"
      min-width="600"
      min-height="300"
      :loading="submitLoading"
      resize
      destroy-on-close
    >
      <template #default>
        <vxe-form
          :data="formData"
          :items="formItems"
          :rules="formRules"
          title-align="right"
          title-width="100"
          @submit="submitEvent"
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
      submitLoading: false,
      tableData: null,
      selectRow: null,
      showEdit: false,
      formData: {
        id: null,
        exam_name: null,
        exam_time: null,
        exam_address: null,
        exam_invigilator: null,
        exam_class: null
      },
      formRules: {
        exam_name: [
          { required: true, message: '请输入课程名字' },
          { min: 3, max: 14, message: '长度在 3 到 14 个字符' }
        ],
        exam_time: [
          { required: true, message: '请输入时间' },
          { min: 9, max: 15, message: '长度在 9 到 15 个字符' }
        ],
        exam_address: [
          { required: true, message: '请输入地点' },
          { min: 3, max: 5, message: '长度在3 到5 个字符' }
        ],
        exam_invigilator: [
          { required: true, message: '请输入监考人员' },
          { min: 8, max: 20, message: '长度在8 到20 个字符' }
        ],
        exam_class: [
          { required: true, message: '请输入考试班级' },
          { min: 4, max: 20, message: '长度在4 到20 个字符' }
        ]
      },
      formItems: [
        {
          title: 'Basic information',
          span: 24,
          titleAlign: 'left',
          titleWidth: 200,
          titlePrefix: { icon: 'el-icon-bank-card' }
        },
        {
          field: 'exam_name',
          title: '课程名称',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入课程名称' }
          }
        },
        {
          field: 'exam_time',
          title: '时间',
          span: 12,
          itemRender: { name: '$input', props: { placeholder: '请输入时间' } }
        },
        {
          title: 'detailed information',
          span: 24,
          titleAlign: 'left',
          titleWidth: 200,
          titlePrefix: { message: '请填写必填项', icon: 'el-icon-info' }
        },
        {
          field: 'exam_address',
          title: '地点',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入地点' }
          }
        },
        {
          field: 'exam_invigilator',
          title: '监考人员',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入监考人员' }
          }
        },

        {
          field: 'exam_class',
          title: '考试班级',
          span: 24,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入考试班级' }
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
  created() {
    axios({
      url: 'ExamSchedule'
    }).then(
      response => {
        this.tableData = response.data
      },
      error => {
        // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
        console.log('请求ExamSchedule失败了', error.message)
      }
    )
  },
  methods: {
    mergeRowMethod({ row, _rowIndex, column, visibleData }) {
      const fields = ['exam_name', 'exam_time']
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
    cellDBLClickEvent({ row }) {
      this.editEvent(row)
    },
    insertEvent() {
      this.formData = {
        id: this.tableData.length + 1,
        exam_name: '',
        exam_time: '',
        exam_address: '',
        exam_invigilator: '',
        exam_class: ''
      }
      this.selectRow = null
      this.showEdit = true
    },
    editEvent(row) {
      this.formData = {
        id: row.id,
        exam_name: row.exam_name,
        exam_time: row.exam_time,
        exam_address: row.exam_address,
        exam_invigilator: row.exam_invigilator,
        exam_class: row.exam_class
      }
      this.selectRow = row
      this.showEdit = true
    },
    removeEvent(row) {
      this.$XModal.confirm('您确定要删除该数据?').then(type => {
        const $table = this.$refs.xTable
        if (type === 'confirm') {
          axios({
            url: `ExamSchedule/${row.id}`,
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
              console.log('请求ExamSchedule失败了', error.message)
            }
          )
        }
      })
    },
    submitEvent() {
      this.submitLoading = true
      setTimeout(() => {
        const $table = this.$refs.xTable
        this.submitLoading = false
        this.showEdit = false
        if (this.selectRow) {
          axios({
            url: `ExamSchedule/${this.formData.id}`,
            method: 'put',
            data: this.formData
          }).then(
            response => {
              if (response.status >= 200 && response.status <= 300) {
                this.$XModal.message({
                  content: '保存成功',
                  status: 'success'
                })
                Object.assign(this.selectRow, this.formData)
              }
              // console.log(response);
              // this.tableData = response.data;
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求ExamSchedule失败了', error.message)
            }
          )
        } else {
          axios({
            url: 'ExamSchedule',
            method: 'post',
            data: this.formData
          }).then(
            response => {
              if (response.status >= 200 && response.status <= 300) {
                this.$XModal.message({
                  content: '新增成功',
                  status: 'success'
                })
                console.log(response.data)
                $table.insert(this.formData)
              }
              // console.log(response);
              // this.tableData = response.data;
            },
            error => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log('请求ExamSchedule失败了', error.message)
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
</style>
