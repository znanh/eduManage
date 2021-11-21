<template>
  <div class="StudentStatusFile">
    <el-form
    v-if="formLabelAlign"
      :label-position="labelPosition"
      :model="formLabelAlign"
      :disabled=true
    >
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="学号">
            <el-input v-model="formLabelAlign.stu_id"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="姓名">
            <el-input v-model="formLabelAlign.stu_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="性别">
            <el-input v-model="formLabelAlign.stu_gender"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="身份证号">
            <el-input v-model="formLabelAlign.stu_idnum"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="出生日期">
            <el-input
              v-model="formLabelAlign.stu_birth"
            ></el-input> </el-form-item
        ></el-col>
        <el-col :span="8">
          <el-form-item label="民族">
            <el-input
              v-model="formLabelAlign.stu_nation"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="籍贯">
            <el-input
              v-model="formLabelAlign.stu_hometown"
            ></el-input> </el-form-item
        ></el-col>
        <el-col :span="8">
          <el-form-item label="政治面貌">
            <el-input
              v-model="formLabelAlign.stu_political"
            ></el-input> </el-form-item
        ></el-col>
        <el-col :span="8">
          <el-form-item label="宿舍号">
            <el-input
              v-model="formLabelAlign.stu_dormitory"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="联系电话">
            <el-input
              v-model="formLabelAlign.stu_phone"
            ></el-input> </el-form-item
        ></el-col>
        <el-col :span="8">
          <el-form-item label="入学年份">
            <el-input
              v-model="formLabelAlign.stu_startYear"
            ></el-input> </el-form-item
        ></el-col>
        <el-col :span="8">
          <el-form-item label="录取专业">
            <el-input
              v-model="formLabelAlign.stu_profession"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="学制">
            <el-input
              v-model="formLabelAlign.stu_schoolSystem"
            ></el-input> </el-form-item
        ></el-col>
        <el-col :span="8">
          <el-form-item label="培养层次">
            <el-input
              v-model="formLabelAlign.stu_trainingLevel"
            ></el-input> </el-form-item
        ></el-col>
        <el-col :span="8">
          <el-form-item label="院系">
            <el-input v-model="formLabelAlign.stu_Faculty"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import axios from '@/network/index.js'
export default {
  data() {
    return {
      kong: null,
      ce: null,
      labelPosition: "top",
      formLabelAlign: null,
    };
  },
  created() {
    
    const loading = this.$loadingService({
      target: ".StudentStatusFile",
    });
    axios({
      url: "/StudentStatusFile",
    }).then(
      (response) => {
        this.formLabelAlign = response.data[0];
        this.$nextTick(() => {
          loading.close();
        });
      },
      (error) => {
        // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
        console.log("请求StudentStatusFile失败了", error.message);
      }
    );
  },
};
</script>

<style lang="less" scoped>
.StudentStatusFile {
  padding: 32px;
}

.el-form {
  overflow: hidden;
}

/deep/ .el-input.is-disabled .el-input__inner {
  cursor: default;
}

/deep/ .el-row .el-col .el-input .el-input__inner {
  background-color: #fff;
}

/deep/ .el-row .el-col:first-child .el-input .el-input__inner {
  border-color: #63cb89;
  color: #63cb89;
}

/deep/ .el-row .el-col:nth-child(2) .el-input .el-input__inner {
  border-color: #f1c205;
  color: #f1c205;
}

/deep/ .el-row .el-col:last-child .el-input .el-input__inner {
  border-color: #ec5e69;
  color: #ec5e69;
}
</style>
