<template>
  <div class="AdminPositiveElection">
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
      <vxe-table-column field="id" title="序号" width="60"></vxe-table-column>
      <vxe-table-column
        field="cou_name"
        title="课程"
        width="250"
      ></vxe-table-column>
      <vxe-table-column field="cou_credit" title="学分"></vxe-table-column>
      <vxe-table-column
        field="cou_category"
        title="类别"
        width="100"
      ></vxe-table-column>
      <vxe-table-column
        field="cou_teachingCategory"
        title="授课方式"
        width="180"
      ></vxe-table-column>
      <vxe-table-column
        field="cou_assessmentMethod"
        title="考核方式"
        width="140"
      ></vxe-table-column>
      <vxe-table-column
        field="cou_teacher"
        title="任课教师"
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
        cou_name: null,
        cou_credit: null,
        cou_category: null,
        cou_teachingCategory: null,
        cou_assessmentMethod: null,
        cou_teacher: null,
        cou_totalPeriod: null,
        cou_teachingHours: null,
        cou_computerHours: null,
        cou_weekNum: null,
        cou_dayNum: null,
        cou_address: null,
      },
      formRules: {
        cou_name: [
          { required: true, message: "请输入课程" },
          { min: 3, max: 13, message: "长度在 3 到 13 个字符" },
        ],
        cou_credit: [
          { required: true, message: "请输入学分" },
          { min: 3, max: 3, message: "长度为3 个字符" },
        ],
        cou_category: [
          { required: true, message: "请输入课程类别" },
          { min: 7, max: 7, message: "长度为7 个字符" },
        ],
        cou_teachingCategory: [
          { required: true, message: "请输入授课方式" },
          { min: 2, max: 2, message: "长度为2 个字符" },
        ],
        cou_assessmentMethod: [
          { required: true, message: "请输入考核方式" },
          { min: 2, max: 2, message: "长度为2 个字符" },
        ],
        cou_teacher: [
          { required: true, message: "请输入任课教师" },
          { min: 2, max: 6, message: "长度为2 到6 个字符" },
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
          field: "cou_name",
          title: "课程",
          span: 8,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入课程" },
          },
        },
        {
          field: "cou_credit",
          title: "学分",
          span: 8,
          itemRender: { name: "$input", props: { placeholder: "请输入学分" } },
        },
        {
          field: "cou_category",
          title: "类别",
          span: 8,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入类别" },
          },
        },
        {
          field: "cou_teachingCategory",
          title: "授课方式",
          span: 8,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入授课方式" },
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
          field: "cou_teacher",
          title: "任课教师",
          span: 8,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入任课教师" },
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
          field: "cou_computerHours",
          title: "上机学时",
          span: 8,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入上机学时" },
          },
        },
        {
          field: "cou_weekNum",
          title: "周次",
          span: 8,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入周次" },
          },
        },
        {
          field: "cou_dayNum",
          title: "节次",
          span: 8,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入节次" },
          },
        },
        {
          field: "cou_address",
          title: "地点",
          span: 8,
          itemRender: {
            name: "$input",
            props: { placeholder: "请输入地点" },
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
      url: "PositiveElection",
    }).then(
      (response) => {
        this.tableData = response.data;
      },
      (error) => {
        // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
        console.log("请求PositiveElection失败了", error.message);
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
        cou_name: "",
        cou_credit: "",
        cou_category: "",
        cou_teachingCategory: "",
        cou_assessmentMethod: "",
        cou_teacher: "",
        cou_totalPeriod: "",
        cou_teachingHours: "",
        cou_computerHours: "",
        cou_weekNum: "",
        cou_dayNum: "",
        cou_address: "",
      };
      this.selectRow = null;
      this.showEdit = true;
    },
    editEvent(row) {
      this.formData = {
        id: row.id,
        cou_name: row.cou_name,
        cou_credit: row.cou_credit,
        cou_category: row.cou_category,
        cou_teachingCategory: row.cou_teachingCategory,
        cou_assessmentMethod: row.cou_assessmentMethod,
        cou_teacher: row.cou_teacher,
        cou_totalPeriod: row.cou_totalPeriod,
        cou_teachingHours: row.cou_teachingHours,
        cou_computerHours: row.cou_computerHours,
        cou_weekNum: row.cou_weekNum,
        cou_dayNum: row.cou_dayNum,
        cou_address: row.cou_address,
      };
      this.selectRow = row;
      this.showEdit = true;
    },
    removeEvent(row) {
      this.$XModal.confirm("您确定要删除该数据?").then((type) => {
        const $table = this.$refs.xTable;
        if (type === "confirm") {
          axios({
            url: `PositiveElection/${row.id}`,
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
              console.log("请求PositiveElection失败了", error.message);
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
            url: `PositiveElection/${this.formData.id}`,
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
              console.log("请求PositiveElection失败了", error.message);
            }
          );
        } else {
          axios({
            url: "PositiveElection",
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
              console.log("请求PositiveElection失败了", error.message);
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
