<template>
  <div class="TheoryCourse">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        label="序号"
        prop="id"
        width="50"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="学年学期"
        prop="cou_schoolYearSemester"
        width="175"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="课程"
        prop="cou_idname"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="学分"
        prop="cou_credit"
        width="50"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="课程类别"
        prop="cou_category"
        width="110"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="考核方式"
        prop="cou_assessmentMethod"
        width="50"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="总学时"
        prop="cou_totalPeriod"
        width="50"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="讲授学时"
        prop="cou_teachingHours"
        width="50"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="实验学时"
        prop="cou_experimentalHours"
        width="50"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="上机学时"
        prop="cou_computerHours"
        width="50"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="其它学时"
        prop="cou_otherHours"
        width="50"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="周学时"
        prop="cou_weekHours"
        width="50"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="课程代码">
              <span>{{ props.row.cou_id }}</span>
            </el-form-item>
            <el-form-item label="承担单位">
              <span>{{ props.row.cou_department }}</span>
            </el-form-item>
            <el-form-item label="课程名称">
              <span>{{ props.row.cou_name }}</span>
            </el-form-item>
            <el-form-item label="英文名称">
              <span>{{ props.row.cou_englishName }}</span>
            </el-form-item>
            <el-form-item label="学分">
              <span>{{ props.row.cou_credit }}</span>
            </el-form-item>
            <el-form-item label="总学时">
              <span>{{ props.row.cou_totalPeriod }}</span>
            </el-form-item>
            <el-form-item label="讲授学时">
              <span>{{ props.row.cou_teachingHours }}</span>
            </el-form-item>
            <el-form-item label="实验学时">
              <span>{{ props.row.cou_experimentalHours }}</span>
            </el-form-item>
            <el-form-item label="上机学时">
              <span>{{ props.row.cou_computerHours }}</span>
            </el-form-item>
            <el-form-item label="其它学时">
              <span>{{ props.row.cou_otherHours }}</span>
            </el-form-item>
            <el-form-item label="课程类别三">
              <span>{{ props.row.cou_category_three }}</span>
            </el-form-item>
            <el-form-item label="课程类别四">
              <span>{{ props.row.cou_category_four }}</span>
            </el-form-item>
            <el-form-item label="教学大纲">
              <span>{{ props.row.cou_outline }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from '@/network/index.js'
export default {
  data() {
    return {
      kong: null,
      ce: null,
      tableData: null,
    };
  },
  methods: {},
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
  // beforeDestroy(){
  //   console.log("理论课程销毁"+axios);
  // },
  // destroyed(){
  //   console.log("l课程销毁"+axios);
  // }
};
</script>

<style lang="less" scoped>
.TheoryCourse {
  padding: 32px;
}

.demo-table-expand {
  font-size: 0;
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
