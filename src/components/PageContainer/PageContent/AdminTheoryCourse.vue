<template>
  <div class="AdminTheoryCourse">
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
      <vxe-table-column
        field="id"
        title="序号"
        width="60"
      ></vxe-table-column>
      <vxe-table-column
        field="cou_schoolYearSemester"
        title="学年学期"
        width="250"
      ></vxe-table-column>
      <vxe-table-column field="cou_idname" title="课程"></vxe-table-column>
      <vxe-table-column
        field="cou_credit"
        title="学分"
        width="100"
      ></vxe-table-column>
      <vxe-table-column
        field="cou_category"
        title="课程类别"
        width="180"
      ></vxe-table-column>
      <vxe-table-column
        field="cou_assessmentMethod"
        title="考核方式"
        width="140"
      ></vxe-table-column>

      <vxe-table-column title="操作" width="100" show-overflow>
        <template #default="{ row }">
          <vxe-button
            type="text"
            icon="el-icon-edit-outline"
            @click="editEvent(row)"
          ></vxe-button>
          <vxe-button
            type="text"
            icon="el-icon-delete"
            @click="removeEvent(row)"
          ></vxe-button>
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
        cou_schoolYearSemester: null,
        cou_idname: null,
        cou_credit: null,
        cou_category: null,
        cou_assessmentMethod: null,
        cou_totalPeriod: null,
        cou_teachingHours: null,
        cou_experimentalHours: null,
        cou_computerHours: null,
        cou_otherHours: null,
        cou_weekHours: null,
        cou_id: null,
        cou_department: null,
        cou_name: null,
        cou_englishName: null,
        cou_category_three: null,
        cou_category_four: null,
        cou_outline: null,
      },
      formRules: {
        cou_schoolYearSemester: [
          { required: true, message: "请输入学年学期" },
          { min: 14, max: 16, message: "长度在 14 到 16 个字符" },
        ],
        cou_idname: [
          { required: true, message: "请输入课程" },
          { min: 9, max: 25, message: "长度在 9 到 25 个字符" },
        ],
        cou_credit: [
          { required: true, message: "请输入学分" },
          { min: 3, max: 3, message: "长度为3 个字符" },
        ],
        cou_category: [
          { required: true, message: "请输入课程类别" },
          { min: 7, max: 7, message: "长度为7 个字符" },
        ],
        cou_assessmentMethod: [
          { required: true, message: "请输入考核方式" },
          { min: 2, max: 2, message: "长度为2 个字符" },
        ],
      },
      formItems: [
        {
          title: "Basic information",
          span: 24,
          titleAlign: "left",
          titleWidth: 200,
          titlePrefix: { icon: "el-icon-bank-card" },
        },
        {
          field: "cou_schoolYearSemester",
          title: "学年学期",
          span: 12,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入学年学期" },
          },
        },
        {
          field: "cou_idname",
          title: "课程",
          span: 12,
          itemRender: { name: "$input", props: { placeholder: "请输入课程" } },
        },
        {
          field: "cou_credit",
          title: "学分",
          span: 8,
          itemRender: { name: "$input", props: { placeholder: "请输入学分" } },
        },
        {
          field: "cou_category",
          title: "课程类别",
          span: 8,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入课程类别" },
          },
        },
        {
          field: "cou_assessmentMethod",
          title: "考核方式",
          span: 8,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入考核方式" },
          },
        },
        {
          title: "detailed information",
          span: 24,
          titleAlign: "left",
          titleWidth: 200,
          titlePrefix: { message: "请填写必填项", icon: "el-icon-info" },
        },
        {
          field: "cou_name",
          title: "课程名称",
          span: 12,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入课程名称" },
          },
        },
        {
          field: "cou_department",
          title: "承担单位",
          span: 12,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入承担单位" },
          },
        },

        {
          field: "cou_id",
          title: "课程代码",
          span: 8,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入课程代码" },
          },
        },
        {
          field: "cou_totalPeriod",
          title: "总学时",
          span: 8,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入总学时" },
          },
        },
        {
          field: "cou_teachingHours",
          title: "讲授学时",
          span: 8,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入讲授学时" },
          },
        },
        {
          field: "cou_experimentalHours",
          title: "实验学时",
          span: 8,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入实验学时" },
          },
        },
        {
          field: "cou_computerHours",
          title: "上机学时",
          span: 8,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入上机学时" },
          },
        },
        {
          field: "cou_otherHours",
          title: "其它学时",
          span: 8,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入其它学时" },
          },
        },
        {
          field: "cou_weekHours",
          title: "周学时",
          span: 8,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入周学时" },
          },
        },
        {
          field: "cou_category_three",
          title: "课程类别三",
          span: 8,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入课程类别三" },
          },
        },
        {
          field: "cou_category_four",
          title: "课程类别四",
          span: 8,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入课程类别四" },
          },
        },
        {
          field: "cou_englishName",
          title: "英文名称",
          span: 24,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入英文名称" },
          },
        },
        {
          field: "cou_outline",
          title: "教学大纲",
          span: 24,
          itemRender: {
            name: "$textarea",
            props: {
              autosize: { minRows: 2, maxRows: 4 },
              placeholder: "请输入教学大纲",
            },
          },
        },
        {
          align: "center",
          span: 24,
          titleAlign: "left",
          itemRender: {
            name: "$buttons",
            children: [
              { props: { type: "submit", content: "提交", status: "primary" } },
              { props: { type: "reset", content: "重置" } },
            ],
          },
        },
      ],
    };
  },
  created() {
    axios({
      url: "TheoryCourse",
    }).then(
      (response) => {
        this.tableData = response.data;
      },
      (error) => {
        // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
        console.log("请求TheoryCourse失败了", error.message);
      }
    );
  },
  methods: {
    cellDBLClickEvent({ row }) {
      this.editEvent(row);
    },
    insertEvent() {
      this.formData = {
        id: this.tableData.length + 1,
        cou_schoolYearSemester: "",
        cou_idname: "",
        cou_credit: "",
        cou_category: "",
        cou_assessmentMethod: "",
        cou_totalPeriod: "",
        cou_teachingHours: "",
        cou_experimentalHours: "",
        cou_computerHours: "",
        cou_otherHours: "",
        cou_weekHours: "",
        cou_id: "",
        cou_department: "",
        cou_name: "",
        cou_englishName: "",
        cou_category_three: "",
        cou_category_four: "",
        cou_outline: "",
      };
      this.selectRow = null;
      this.showEdit = true;
    },
    editEvent(row) {
      this.formData = {
        id: row.id,
        cou_schoolYearSemester: row.cou_schoolYearSemester,
        cou_idname: row.cou_idname,
        cou_credit: row.cou_credit,
        cou_category: row.cou_category,
        cou_assessmentMethod: row.cou_assessmentMethod,
        cou_totalPeriod: row.cou_totalPeriod,
        cou_teachingHours: row.cou_teachingHours,
        cou_experimentalHours: row.cou_experimentalHours,
        cou_computerHours: row.cou_computerHours,
        cou_otherHours: row.cou_otherHours,
        cou_weekHours: row.cou_weekHours,
        cou_id: row.cou_id,
        cou_department: row.cou_department,
        cou_name: row.cou_name,
        cou_englishName: row.cou_englishName,
        cou_category_three: row.cou_category_three,
        cou_category_four: row.cou_category_four,
        cou_outline: row.cou_outline,
      };
      this.selectRow = row;
      this.showEdit = true;
    },
    removeEvent(row) {
      this.$XModal.confirm("您确定要删除该数据?").then((type) => {
        const $table = this.$refs.xTable;
        if (type === "confirm") {
          axios({
            url: `TheoryCourse/${row.id}`,
            method: "delete",
          }).then(
            (response) => {
              if (response.status >= 200 && response.status <= 300) {
                this.$XModal.message({
                  content: "删除成功",
                  status: "success",
                });
                $table.remove(row);
                console.log('ss'+response.data);
              }
              // console.log(response);
              // this.tableData = response.data;
            },
            (error) => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log("请求TheoryCourse失败了", error.message);
            }
          );
        }
      });
    },
    submitEvent() {
      this.submitLoading = true;
      setTimeout(() => {
        const $table = this.$refs.xTable;
        this.submitLoading = false;
        this.showEdit = false;
        if (this.selectRow) {
          axios({
            url: `TheoryCourse/${this.formData.id}`,
            method: "put",
            data: this.formData,
          }).then(
            (response) => {
              if (response.status >= 200 && response.status <= 300) {
                this.$XModal.message({
                  content: "保存成功",
                  status: "success",
                });
                Object.assign(this.selectRow, this.formData);
              }
              // console.log(response);
              // this.tableData = response.data;
            },
            (error) => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log("请求TheoryCourse失败了", error.message);
            }
          );
        } else {
          axios({
            url: "TheoryCourse",
            method: "post",
            data: this.formData,
          }).then(
            (response) => {
              if (response.status >= 200 && response.status <= 300) {
                this.$XModal.message({
                  content: "新增成功",
                  status: "success",
                });
                console.log(response.data);
                $table.insert(this.formData);
              }
              // console.log(response);
              // this.tableData = response.data;
            },
            (error) => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log("请求TheoryCourse失败了", error.message);
            }
          );
        }
      }, 500);
    },
  },
};
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
