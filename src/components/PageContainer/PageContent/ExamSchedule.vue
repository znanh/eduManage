<template>
  <div class="ExamSchedule">
     <el-table
      :data="tableData"
      :span-method="MergeRows"
      border
      style="width: 100%; margin-top: 20px">
      <el-table-column
        prop="exam_name"
        label="课程名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="exam_time"
        label="时间">
      </el-table-column>
      <el-table-column
        prop="exam_address"
        label="地点">
      </el-table-column>
      <el-table-column
        prop="exam_invigilator"
        label="监考人员">
      </el-table-column>
      <el-table-column
        prop="exam_class"
        label="考试班级">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from '@/network/index.js'
export default {
  data() {
      return {
        tableData:null
      }
  },
  created() {
    axios({
      url: "/ExamSchedule",
    }).then(
      (response) => {
        this.tableData = response.data;
      },
      (error) => {
        // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
        console.log("请求ExamSchedule失败了", error.message);
      }
    );
  },
  methods:{
    MergeRows({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0 || columnIndex === 1) {
          if (rowIndex === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } 
        }

        if (columnIndex === 0 || columnIndex === 1) {
          if (rowIndex === 2) {
            return {
              rowspan: 3,
              colspan: 1
            };
          } 
        }
        if (columnIndex === 0 || columnIndex === 1) {
          if (rowIndex === 5) {
            return {
              rowspan: 1,
              colspan: 1
            };
          } 
        }
        if (columnIndex === 0 || columnIndex === 1) {
          if (rowIndex === 6) {
            return {
              rowspan: 3,
              colspan: 1
            };
          } 
        }

        if (columnIndex === 0 || columnIndex === 1) {
          if (rowIndex === 9) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          } 
        }
      }
  }
}
</script>

<style lang="less" scoped>
.ExamSchedule {
  padding: 32px;
}
</style>