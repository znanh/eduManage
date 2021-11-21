<template>
  <div class="AdminViewGrades">
    <vxe-toolbar>
      <template #buttons>
        <vxe-button icon="el-icon-plus" @click="primitive ? insertEvent1() : insertEvent2()">新增</vxe-button>
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
      v-if="primitive"
      ref="xTable"
      height="500"
      align="center"
      :data="tableData"
      @cell-dblclick="cellDBLClickEvent1"
    >
      <vxe-table-column field="id" title="序号" width="90"></vxe-table-column>
      <vxe-table-column field="gra_name" title="课程"></vxe-table-column>
      <vxe-table-column field="gra_credit" title="学分" width="90"></vxe-table-column>
      <vxe-table-column field="gra_category" title="类别" width="140"></vxe-table-column>
      <vxe-table-colgroup title="成绩">
        <vxe-table-column field="gra_usually" title="平时" width="90"></vxe-table-column>
        <vxe-table-column field="gra_eExam" title="末考" width="90"></vxe-table-column>
        <vxe-table-column field="gra_comprehensive" title="综合" width="90"></vxe-table-column>
      </vxe-table-colgroup>
      <vxe-table-column field="gra_minor" title="辅修标记" width="90"></vxe-table-column>

      <vxe-table-column title="操作" width="100" show-overflow :key="+new Date()">
        <template #default="{ row }">
          <vxe-button type="text" icon="el-icon-edit-outline" @click="editEvent1(row)"></vxe-button>
          <vxe-button type="text" icon="el-icon-delete" @click="removeEvent1(row)"></vxe-button>
        </template>
      </vxe-table-column>
    </vxe-table>
    <vxe-table
      border
      show-overflow
      highlight-hover-row
      v-if="valid"
      ref="xTable"
      height="500"
      align="center"
      :data="tableData"
      @cell-dblclick="cellDBLClickEvent2"
    >
      <vxe-table-column field="id" title="序号" width="90"></vxe-table-column>
      <vxe-table-column field="gra_name" title="课程"></vxe-table-column>
      <vxe-table-column field="gra_credit" title="学分" width="90"></vxe-table-column>
      <vxe-table-column field="gra_category" title="类别" width="140"></vxe-table-column>
      <vxe-table-column field="gra_grades" title="成绩" width="90"></vxe-table-column>
      <vxe-table-column field="gra_getCredits" title="取得学分" width="90"></vxe-table-column>
      <vxe-table-column field="gra_gradePoint" title="绩点" width="90"></vxe-table-column>
      <vxe-table-column field="gra_creditPoint" title="学分绩点" width="90"></vxe-table-column>

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
      primitive: false,
      valid: false,
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
      ],
      formData1: {
        id: null,
        gra_name: null,
        gra_credit: null,
        gra_category: null,
        gra_assessmentMethod: null,
        gra_nature: null,
        gra_usually: null,
        gra_mExam: null,
        gra_eExam: null,
        gra_skill: null,
        gra_comprehensive: null,
        gra_minor: null,
        gra_remarks: null
      },
      formData2: {
        id: null,
        gra_name: null,
        gra_credit: null,
        gra_category: null,
        gra_assessmentMethod: null,
        gra_nature: null,
        gra_grades: null,
        gra_getCredits: null,
        gra_gradePoint: null,
        gra_creditPoint: null,
        gra_remarks: null
      },
      formRules1: {
        gra_name: [
          { required: true, message: '请输入课程' },
          { min: 3, max: 23, message: '长度在 3 到 23 个字符' }
        ],
        gra_credit: [
          { required: true, message: '请输入学分' },
          { min: 3, max: 3, message: '长度为3 个字符' }
        ],
        gra_category: [
          { required: true, message: '请输入类别' },
          { min: 7, max: 9, message: '长度在 7 到 9 个字符' }
        ],
        gra_usually: [
          { required: true, message: '请输入平时' },
          { min: 1, max: 6, message: '长度在 1 到 6 个字符' }
        ],
        gra_eExam: [
          { required: true, message: '请输入末考' },
          { min: 1, max: 6, message: '长度在 1 到 6 个字符' }
        ],
        gra_comprehensive: [
          { required: true, message: '请输入综合' },
          { min: 1, max: 6, message: '长度在 1 到 6 个字符' }
        ],
        gra_minor: [
          { required: true, message: '请输入辅修标记' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符' }
        ]
      },
      formRules2: {
        gra_name: [
          { required: true, message: '请输入课程' },
          { min: 3, max: 23, message: '长度在 3 到 23 个字符' }
        ],
        gra_credit: [
          { required: true, message: '请输入学分' },
          { min: 3, max: 3, message: '长度为3 个字符' }
        ],
        gra_category: [
          { required: true, message: '请输入类别' },
          { min: 7, max: 9, message: '长度在 7 到 9 个字符' }
        ],
        gra_grades: [
          { required: true, message: '请输入成绩' },
          { min: 1, max: 6, message: '长度在 1 到 6 个字符' }
        ],
        gra_getCredits: [
          { required: true, message: '请输入取得学分' },
          { min: 1, max: 3, message: '长度在 1 到 3 个字符' }
        ],
        gra_gradePoint: [
          { required: true, message: '请输入绩点' },
          { min: 3, max: 3, message: '长度为3 个字符' }
        ],
        gra_creditPoint: [
          { required: true, message: '请输入学分绩点' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
        ]
      },
      formItems1: [
        {
          title: 'Basic information',
          span: 24,
          titleAlign: 'left',
          titleWidth: 200,
          titlePrefix: { icon: 'el-icon-bank-card' }
        },
        {
          field: 'gra_name',
          title: '课程',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入课程' }
          }
        },
        {
          field: 'gra_category',
          title: '类别',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入类别' }
          }
        },
        {
          field: 'gra_credit',
          title: '学分',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入学分' }
          }
        },
        {
          field: 'gra_minor',
          title: '辅修标记',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入辅修标记' }
          }
        },
        {
          field: 'gra_usually',
          title: '平时',
          span: 8,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入平时' }
          }
        },
        {
          field: 'gra_eExam',
          title: '末考',
          span: 8,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入末考' }
          }
        },
        {
          field: 'gra_comprehensive',
          title: '综合',
          span: 8,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入综合' }
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
          field: 'gra_assessmentMethod',
          title: '考核方式',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入考核方式' }
          }
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
          field: 'gra_mExam',
          title: '中考',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入中考' }
          }
        },
        {
          field: 'gra_skill',
          title: '技能',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入技能' }
          }
        },
        {
          field: 'gra_remarks',
          title: '备注',
          span: 24,
          itemRender: { name: '$textarea', props: { autosize: { minRows: 2, maxRows: 4 }, placeholder: '请输入地址' } }
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
          field: 'gra_name',
          title: '课程',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入课程' }
          }
        },
        {
          field: 'gra_category',
          title: '类别',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入类别' }
          }
        },
        {
          field: 'gra_credit',
          title: '学分',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入学分' }
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
          field: 'gra_getCredits',
          title: '取得学分',
          span: 8,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入取得学分' }
          }
        },
        {
          field: 'gra_gradePoint',
          title: '绩点',
          span: 8,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入绩点' }
          }
        },
        {
          field: 'gra_creditPoint',
          title: '学分绩点',
          span: 8,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入学分绩点' }
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
          field: 'gra_assessmentMethod',
          title: '考核方式',
          span: 12,
          itemRender: {
            name: '$input',
            props: { placeholder: '请输入考核方式' }
          }
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
          field: 'gra_remarks',
          title: '备注',
          span: 24,
          itemRender: { name: '$textarea', props: { autosize: { minRows: 2, maxRows: 4 }, placeholder: '请输入地址' } }
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
    },
    cellDBLClickEvent1({ row }) {
      this.editEvent1(row)
    },
    cellDBLClickEvent2({ row }) {
      this.editEvent2(row)
    },
    insertEvent1() {
      this.formData1 = {
        id: this.tableData.length + 1,
        gra_name: '',
        gra_credit: '',
        gra_category: '',
        gra_assessmentMethod: '',
        gra_nature: '',
        gra_usually: '',
        gra_mExam: '',
        gra_eExam: '',
        gra_skill: '',
        gra_comprehensive: '',
        gra_minor: '',
        gra_remarks: ''
      }
      this.selectRow1 = null
      this.showEdit2 = false
      this.showEdit1 = true
    },
    insertEvent2() {
      this.formData2 = {
        id: this.tableData.length + 1,
        gra_name: '',
        gra_credit: '',
        gra_category: '',
        gra_assessmentMethod: '',
        gra_nature: '',
        gra_grades: '',
        gra_getCredits: '',
        gra_gradePoint: '',
        gra_creditPoint: '',
        gra_remarks: ''
      }
      this.selectRow2 = null
      this.showEdit1 = false
      this.showEdit2 = true
    },
    editEvent1(row) {
      this.formData1 = {
        id: row.id,
        gra_name: row.gra_name,
        gra_credit: row.gra_credit,
        gra_category: row.gra_category,
        gra_assessmentMethod: row.gra_assessmentMethod,
        gra_nature: row.gra_nature,
        gra_usually: row.gra_usually,
        gra_mExam: row.gra_mExam,
        gra_eExam: row.gra_eExam,
        gra_skill: row.gra_skill,
        gra_comprehensive: row.gra_comprehensive,
        gra_minor: row.gra_minor,
        gra_remarks: row.gra_remarks
      }
      this.selectRow1 = row
      this.showEdit2 = false
      this.showEdit1 = true
    },
    editEvent2(row) {
      this.formData2 = {
        id: row.id,
        gra_name: row.gra_name,
        gra_credit: row.gra_credit,
        gra_category: row.gra_category,
        gra_assessmentMethod: row.gra_assessmentMethod,
        gra_nature: row.gra_nature,
        gra_grades: row.gra_grades,
        gra_getCredits: row.gra_getCredits,
        gra_gradePoint: row.gra_gradePoint,
        gra_creditPoint: row.gra_creditPoint,
        gra_remarks: row.gra_remarks
      }
      this.selectRow2 = row
      this.showEdit1 = false
      this.showEdit2 = true
    },
    removeEvent1(row) {
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
              console.log('请求教学安排表失败了', error.message)
            }
          )
        } else {
          axios({
            url: this.term,
            method: 'post',
            data: this.formData1
          }).then(
            response => {
              if (response.status >= 200 && response.status <= 300) {
                this.$XModal.message({
                  content: '新增成功',
                  status: 'success'
                })
                console.log(response.data)
                $table.insert(this.formData1)
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
