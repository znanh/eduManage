<template>
  <div class="AdminStudentStatusFile">
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
      <vxe-table-column field="stu_id" title="学号" width="250"></vxe-table-column>
      <vxe-table-column field="stu_name" title="姓名"></vxe-table-column>
      <vxe-table-column field="stu_gender" title="性别" :formatter="formatterSex" width="100"></vxe-table-column>
      <vxe-table-column field="stu_idnum" title="身份证号" width="180"></vxe-table-column>
      <vxe-table-column field="stu_birth" title="出生年月" width="140"></vxe-table-column>
      <vxe-table-column field="stu_nation" title="民族" width="140"></vxe-table-column>

      <vxe-table-column title="操作" width="100" show-overflow>
        <template #default="{ row }">
          <vxe-button type="text" icon="el-icon-edit-outline" @click="editEvent(row)"></vxe-button>
        </template>
      </vxe-table-column>
    </vxe-table>

    <vxe-modal
      v-model="showEdit"
      :title="'编辑&保存'"
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
      sexList: [
        { label: '女', value: '女' },
        { label: '男', value: '男' }
      ],
      formData: {
        id: null,
        stu_id: null,
        stu_name: null,
        stu_gender: null,
        stu_idnum: null,
        stu_birth: null,
        stu_nation: null,
        stu_hometown: null,
        stu_political: null,
        stu_dormitory: null,
        stu_phone: null,
        stu_startYear: null,
        stu_profession: null,
        stu_schoolSystem: null,
        stu_trainingLevel: null,
        stu_Faculty: null
      },
      formRules: {
        stu_id: [
          { required: true, message: '请输入学号' },
          { min: 12, max: 12, message: '长度为12 个字符' }
        ],
        stu_name: [
          { required: true, message: '请输入姓名' },
          { min: 2, max: 6, message: '长度在 2 到 6 个字符' }
        ],
        stu_gender: [{ required: true, message: '请选择性别' }],
        stu_idnum: [
          { required: true, message: '请输入身份证号' },
          { min: 18, max: 18, message: '长度为18 个字符' }
        ],
        stu_birth: [{ required: true, message: '请选择出生年月' }],
        stu_nation: [
          { required: true, message: '请输入民族' },
          { min: 2, max: 6, message: '长度为2 到6 个字符' }
        ],
        stu_hometown: [
          { required: true, message: '请输入籍贯' },
          { min: 9, max: 20, message: '长度为9 到20 个字符' }
        ],
        stu_political: [
          { required: true, message: '请输入政治面貌' },
          { min: 2, max: 4, message: '长度为2 到4 个字符' }
        ],
        stu_dormitory: [
          { required: true, message: '请输入宿舍号' },
          { min: 6, max: 9, message: '长度为6 到9 个字符' }
        ],
        stu_phone: [
          { required: true, message: '请输入联系电话' },
          { min: 11, max: 11, message: '长度为11 个字符' }
        ],
        stu_startYear: [
          { required: true, message: '请输入入学年份' },
          { min: 4, max: 4, message: '长度为4 个字符' }
        ],
        stu_profession: [
          { required: true, message: '请输入录取专业' },
          { min: 4, max: 10, message: '长度为4 到10 个字符' }
        ],
        stu_schoolSystem: [
          { required: true, message: '请输入学制' },
          { min: 2, max: 2, message: '长度为2 个字符' }
        ],
        stu_trainingLevel: [
          { required: true, message: '请输入培养层次' },
          { min: 2, max: 2, message: '长度为2 个字符' }
        ],
        stu_Faculty: [
          { required: true, message: '请输入院系' },
          { min: 8, max: 20, message: '长度为8 到20 个字符' }
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
          field: 'stu_id',
          title: '学号',
          span: 8,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入学号' }
          }
        },
        {
          field: 'stu_name',
          title: '姓名',
          span: 8,
          itemRender: { name: '$input', props: { placeholder: '请输入姓名' } }
        },
        {
          field: 'stu_gender',
          title: '性别',
          span: 8,
          itemRender: { name: '$select', options: [] }
        },
        {
          field: 'stu_idnum',
          title: '身份证号',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入身份证号' }
          }
        },
        {
          field: 'stu_birth',
          title: '出生年月',
          span: 12,
          itemRender: { name: '$input', props: { type: 'date', placeholder: '请选择日期' } }
        },
        {
          title: 'detailed information',
          span: 24,
          titleAlign: 'left',
          titleWidth: 200,
          titlePrefix: { message: '请填写必填项', icon: 'el-icon-info' }
        },
        {
          field: 'stu_nation',
          title: '民族',
          span: 8,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入民族' }
          }
        },
        {
          field: 'stu_political',
          title: '政治面貌',
          span: 8,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入政治面貌' }
          }
        },
        {
          field: 'stu_dormitory',
          title: '宿舍号',
          span: 8,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入宿舍号' }
          }
        },
        {
          field: 'stu_hometown',
          title: '籍贯',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入籍贯' }
          }
        },
        {
          field: 'stu_startYear',
          title: '入学年份',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入入学年份' }
          }
        },
        {
          field: 'stu_Faculty',
          title: '院系',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入院系' }
          }
        },
        {
          field: 'stu_profession',
          title: '录取专业',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入录取专业' }
          }
        },
        {
          field: 'stu_schoolSystem',
          title: '学制',
          span: 8,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入学制' }
          }
        },
        {
          field: 'stu_trainingLevel',
          title: '培养层次',
          span: 8,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入培养层次' }
          }
        },
        {
          field: 'stu_phone',
          title: '联系电话',
          span: 8,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入联系电话' }
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
    this.formItems[3].itemRender.options = this.sexList
    axios({
      url: 'StudentStatusFile'
    }).then(
      response => {
        this.tableData = response.data
      },
      error => {
        // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
        console.log('请求StudentStatusFile失败了', error.message)
      }
    )
  },
  methods: {
    formatterSex({ cellValue }) {
      let item = this.sexList.find(item => item.value === cellValue)
      return item ? item.label : ''
    },
    cellDBLClickEvent({ row }) {
      this.editEvent(row)
    },
    editEvent(row) {
      this.formData = {
        id: row.id,
        stu_id: row.stu_id,
        stu_name: row.stu_name,
        stu_gender: row.stu_gender,
        stu_idnum: row.stu_idnum,
        stu_birth: row.stu_birth,
        stu_nation: row.stu_nation,
        stu_hometown: row.stu_hometown,
        stu_political: row.stu_political,
        stu_dormitory: row.stu_dormitory,
        stu_phone: row.stu_phone,
        stu_startYear: row.stu_startYear,
        stu_profession: row.stu_profession,
        stu_schoolSystem: row.stu_schoolSystem,
        stu_trainingLevel: row.stu_trainingLevel,
        stu_Faculty: row.stu_Faculty
      }
      this.selectRow = row
      this.showEdit = true
    },
    submitEvent() {
      this.submitLoading = true
      setTimeout(() => {
        const $table = this.$refs.xTable
        this.submitLoading = false
        this.showEdit = false
        if (this.selectRow) {
          axios({
            url: `StudentStatusFile/${this.formData.id}`,
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
              console.log('请求StudentStatusFile失败了', error.message)
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
