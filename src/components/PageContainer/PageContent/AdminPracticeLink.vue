<template>
  <div class="AdminPracticeLink">
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
        field="pra_schoolYearSemester"
        title="学年学期"
        width="250"
      ></vxe-table-column>
      <vxe-table-column field="pra_idname" title="环节"></vxe-table-column>
      <vxe-table-column
        field="pra_credit"
        title="学分"
        width="100"
      ></vxe-table-column>
      <vxe-table-column
        field="pra_category"
        title="环节类型"
        width="180"
      ></vxe-table-column>
      <vxe-table-column
        field="pra_assessmentMethod"
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
import axios from "@/network/index.js";
export default {
  data() {
    return {
      submitLoading: false,
      tableData: null,
      selectRow: null,
      showEdit: false,
      formData: {
        id: null,
        pra_schoolYearSemester: null,
        pra_idname: null,
        pra_credit: null,
        pra_category: null,
        pra_assessmentMethod: null,
        pra_weekNum: null,
        pra_id: null,
        pra_department: null,
        pra_name: null,
        pra_englishName: null,
        pra_experimentalHours: null,
      },
      formRules: {
        pra_schoolYearSemester: [
          { required: true, message: "请输入学年学期" },
          { min: 14, max: 16, message: "长度在 14 到 16 个字符" },
        ],
        pra_idname: [
          { required: true, message: "环节" },
          { min: 9, max: 25, message: "长度在 9 到 25 个字符" },
        ],
        pra_credit: [
          { required: true, message: "请输入学分" },
          { min: 3, max: 3, message: "长度为3 个字符" },
        ],
        pra_category: [
          { required: true, message: "请输入环节类型" },
          { min: 4, max: 4, message: "长度为4 个字符" },
        ],
        pra_assessmentMethod: [
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
          field: "pra_schoolYearSemester",
          title: "学年学期",
          span: 12,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入学年学期" },
          },
        },
        {
          field: "pra_idname",
          title: "环节",
          span: 12,
          itemRender: { name: "$input", props: { placeholder: "请输入环节" } },
        },
        {
          field: "pra_credit",
          title: "学分",
          span: 8,
          itemRender: { name: "$input", props: { placeholder: "请输入学分" } },
        },
        {
          field: "pra_category",
          title: "环节类型",
          span: 8,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入课程类别" },
          },
        },
        {
          field: "pra_assessmentMethod",
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
          field: "pra_name",
          title: "课程名称",
          span: 12,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入课程名称" },
          },
        },
        {
          field: "pra_department",
          title: "承担单位",
          span: 12,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入承担单位" },
          },
        },
        {
          field: "pra_englishName",
          title: "英文名称",
          span: 24,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入英文名称" },
          },
        },
        {
          field: "pra_id",
          title: "课程代码",
          span: 12,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入课程代码" },
          },
        },
        {
          field: "pra_weekNum",
          title: "周数",
          span: 12,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入周数" },
          },
        },

        {
          field: "pra_experimentalHours",
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
      url: "PracticeLink",
    }).then(
      (response) => {
        this.tableData = response.data;
      },
      (error) => {
        // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
        console.log("请求PracticeLink失败了", error.message);
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
        pra_schoolYearSemester: "",
        pra_idname: "",
        pra_credit: "",
        pra_category: "",
        pra_assessmentMethod: "",
        pra_weekNum: "",
        pra_id: "",
        pra_department: "",
        pra_name: "",
        pra_englishName: "",
        pra_experimentalHours: "",
      };
      this.selectRow = null;
      this.showEdit = true;
    },
    editEvent(row) {
      this.formData = {
        id: row.id,
        pra_schoolYearSemester: row.pra_schoolYearSemester,
        pra_idname: row.pra_idname,
        pra_credit: row.pra_credit,
        pra_category: row.pra_category,
        pra_assessmentMethod: row.pra_assessmentMethod,
        pra_weekNum: row.pra_weekNum,
        pra_id: row.pra_id,
        pra_department: row.pra_department,
        pra_name: row.pra_name,
        pra_englishName: row.pra_englishName,
        pra_experimentalHours: row.pra_experimentalHours,
      };
      this.selectRow = row;
      this.showEdit = true;
    },
    removeEvent(row) {
      this.$XModal.confirm("您确定要删除该数据?").then((type) => {
        const $table = this.$refs.xTable;
        if (type === "confirm") {
          axios({
            url: `PracticeLink/${row.id}`,
            method: "delete",
          }).then(
            (response) => {
              if (response.status >= 200 && response.status <= 300) {
                this.$XModal.message({
                  content: "删除成功",
                  status: "success",
                });
                $table.remove(row);
                console.log("ss" + response.data);
              }
              // console.log(response);
              // this.tableData = response.data;
            },
            (error) => {
              // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
              console.log("请求PracticeLink失败了", error.message);
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
            url: `PracticeLink/${this.formData.id}`,
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
              console.log("请求PracticeLink失败了", error.message);
            }
          );
        } else {
          axios({
            url: "PracticeLink",
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
              console.log("请求PracticeLink失败了", error.message);
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
