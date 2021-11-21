<template>
  <div class="AdminScoreDistribution">
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
      @cell-dblclick="cellDBLClickEvent"
    >
      <vxe-table-column field="gra_schoolYearSemester" title="学年学期" width="250"></vxe-table-column>
      <vxe-table-column field="gra_name" title="课程"></vxe-table-column>
      <vxe-table-column field="gra_credit" title="学分" width="100"></vxe-table-column>
      <vxe-table-column field="gra_category" title="类别" width="180"></vxe-table-column>
      <vxe-table-column field="gra_assessmentMethod" title="考核方式" width="140"></vxe-table-column>
      <vxe-table-column field="gra_grades" title="成绩" width="140"></vxe-table-column>

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
        gra_schoolYearSemester: null,
        gra_name: null,
        gra_credit: null,
        gra_category: null,
        gra_assessmentMethod: null,
        gra_nature: null,
        gra_excellent: null,
        gra_well: null,
        gra_medium: null,
        gra_pass: null,
        gra_failed: null,
        gra_grades: null
      },
      formRules: {
        gra_schoolYearSemester: [
          { required: true, message: '请输入学年学期' },
          { min: 14, max: 16, message: '长度在 14 到 16 个字符' }
        ],
        gra_name: [
          { required: true, message: '请输入课程' },
          { min: 3, max: 25, message: '长度在 3 到 25 个字符' }
        ],
        gra_credit: [
          { required: true, message: '请输入学分' },
          { min: 3, max: 3, message: '长度为3 个字符' }
        ],
        gra_category: [
          { required: true, message: '请输入课程类别' },
          { min: 7, max: 9, message: '长度在 7 到 9 个字符' }
        ],
        gra_assessmentMethod: [
          { required: true, message: '请输入考核方式' },
          { min: 2, max: 2, message: '长度为2 个字符' }
        ],
        gra_grades: [
          { required: true, message: '请输入成绩' },
          { min: 1, max: 6, message: '长度在 1 到 6 个字符' }
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
          field: 'gra_schoolYearSemester',
          title: '学年学期',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入学年学期' }
          }
        },
        {
          field: 'gra_name',
          title: '课程',
          span: 12,
          itemRender: { name: '$input', props: { placeholder: '请输入课程' } }
        },
        {
          field: 'gra_credit',
          title: '学分',
          span: 12,
          itemRender: { name: '$input', props: { placeholder: '请输入学分' } }
        },
        {
          field: 'gra_category',
          title: '课程类别',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入类别' }
          }
        },
        {
          field: 'gra_assessmentMethod',
          title: '考核方式',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入考核方式' }
          }
        },
        {
          field: 'gra_grades',
          title: '成绩',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入成绩' }
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
          field: 'gra_nature',
          title: '修读性质',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入修读性质' }
          }
        },
        {
          field: 'gra_excellent',
          title: '[100,90]优秀',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请打√' }
          }
        },

        {
          field: 'gra_well',
          title: '(90,80]良好',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请打√' }
          }
        },
        {
          field: 'gra_medium',
          title: '(80,70]中等',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请打√' }
          }
        },
        {
          field: 'gra_pass',
          title: '(70,60]及格',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请打√' }
          }
        },
        {
          field: 'gra_failed',
          title: '(60,0]不及格',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请打√' }
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
      url: 'score'
    }).then(
      response => {
        this.tableData = response.data
      },
      error => {
        // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
        console.log('请求scoree失败了', error.message)
      }
    )
  },
  methods: {
    cellDBLClickEvent({ row }) {
      this.editEvent(row)
    },
    insertEvent() {
      this.formData = {
        id: this.tableData.length + 1,
        gra_schoolYearSemester: '',
        gra_name: '',
        gra_credit: '',
        gra_category: '',
        gra_assessmentMethod: '',
        gra_nature: '',
        gra_excellent: '',
        gra_well: '',
        gra_medium: '',
        gra_pass: '',
        gra_failed: '',
        gra_grades: ''
      }
      this.selectRow = null
      this.showEdit = true
    },
    editEvent(row) {
      this.formData = {
        id: row.id,
        gra_schoolYearSemester: row.gra_schoolYearSemester,
        gra_name: row.gra_name,
        gra_credit: row.gra_credit,
        gra_category: row.gra_category,
        gra_assessmentMethod: row.gra_assessmentMethod,
        gra_nature: row.gra_nature,
        gra_excellent: row.gra_excellent,
        gra_well: row.gra_well,
        gra_medium: row.gra_medium,
        gra_pass: row.gra_pass,
        gra_failed: row.gra_failed,
        gra_grades: row.gra_grades
      }
      this.selectRow = row
      this.showEdit = true
    },
    removeEvent(row) {
      this.$XModal.confirm('您确定要删除该数据?').then(type => {
        const $table = this.$refs.xTable
        if (type === 'confirm') {
          axios({
            url: `score/${row.id}`,
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
              console.log('请求score失败了', error.message)
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
            url: `score/${this.formData.id}`,
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
              console.log('请求score失败了', error.message)
            }
          )
        } else {
          axios({
            url: 'score',
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
              console.log('请求score失败了', error.message)
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
