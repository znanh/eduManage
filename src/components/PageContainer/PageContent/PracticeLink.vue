<template>
  <div class="PracticeLink">
    <el-table :data="tableData" style="width: 100%" >
      <el-table-column
        label="序号"
        prop="id"
        width="70"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="学年学期"
        prop="pra_schoolYearSemester"
        width="200"
        header-align="center"
        align="center"
      ></el-table-column>
      <el-table-column
        label="环节"
        prop="pra_idname"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="学分"
        prop="pra_credit"
        width="70"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="环节类型"
        prop="pra_category"
        width="140"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="考核方式"
        prop="pra_assessmentMethod"
        width="140"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="周数"
        prop="pra_weekNum"
        width="70"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="环节代码">
              <span>{{ props.row.pra_id }}</span>
            </el-form-item>
            <el-form-item label="承担单位">
              <span>{{ props.row.pra_department }}</span>
            </el-form-item>
            <el-form-item label="中文名称">
              <span>{{ props.row.pra_name }}</span>
            </el-form-item>
            <el-form-item label="英文名称">
              <span>{{ props.row.pra_englishName }}</span>
            </el-form-item>
            <el-form-item label="环节类型">
              <span>{{ props.row.pra_category }}</span>
            </el-form-item>
            <el-form-item label="学分">
              <span>{{ props.row.pra_credit }}</span>
            </el-form-item>
            <el-form-item label="周数">
              <span>{{ props.row.pra_weekNum }}</span>
            </el-form-item>
            <el-form-item label="教学大纲">
              <span>{{ props.row.pra_experimentalHours }}</span>
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
      loading: null,
    };
  },
  created() {
    //添加请求拦截器
    console.log("实践课程创建");
    axios({
      url: "/PracticeLink",
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
  // beforeDestroy(){
  //   console.log("实践课程销毁");
  // },
  // destroyed(){
  //   console.log("实践课程销毁"+axios);
  // }
  // deactivated(){
  //   this.$destroy('PracticeLink')
  // }
};
</script>

<style lang="less" scoped>
.PracticeLink {
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

/deep/ .el-table .cell {
  white-space: pre-line;
}
</style>
