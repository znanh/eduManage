<template>
  <div class="PositiveElection">
    <el-table
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @select="selectfn"
      ref="multipleTable"
    >
      <el-table-column type="selection" width="55" :selectable="selectEnable">
      </el-table-column>
      <el-table-column
        label="课程"
        prop="cou_name"
        header-align="center"
        align="center"
      ></el-table-column>
      <el-table-column
        label="学分"
        prop="cou_credit"
        header-align="center"
        align="center"
      >
      </el-table-column>

      <el-table-column
        label="类别"
        prop="cou_category"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="授课方式"
        prop="cou_teachingCategory"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="考核方式"
        prop="cou_assessmentMethod"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="任课教师"
        prop="cou_teacher"
        header-align="center"
        align="center"
      >
      </el-table-column>

      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="总学时">
              <span>{{ props.row.cou_totalPeriod }}</span>
            </el-form-item>
            <el-form-item label="讲授学时">
              <span>{{ props.row.cou_teachingHours }}</span>
            </el-form-item>
            <el-form-item label="上机学时">
              <span>{{ props.row.cou_computerHours }}</span>
            </el-form-item>
            <el-form-item label="周次">
              <span>{{ props.row.cou_weekNum }}</span>
            </el-form-item>
            <el-form-item label="节次">
              <span>{{ props.row.cou_dayNum }}</span>
            </el-form-item>
            <el-form-item label="地点">
              <span>{{ props.row.cou_address }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="addstate()">确定</el-button>
    </div>
  </div>
</template>

<script>
import axios from '@/network/index.js'
export default {
  data() {
    return {
      arr: [],
      length: 0,
      flag: true,
      ce: null,
      kong: null,
      tableData: null,
    };
  },

  created() {

    axios({
      url: "/PositiveElection",
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
    selectfn(selection, row) {
      //this.$refs.multipleTable.selection是动态更新的
      this.arr = this.$refs.multipleTable.selection;
      this.length = this.$refs.multipleTable.selection.length;
      this.$refs.multipleTable.selection.forEach((item, index) => {
        if (this.length === 3) {//选满三个，其他不可选，三个可选
          item.isHidden = 1;
        } else {//小于三个均可选
          this.tableData.forEach(function(item) {
            item.isHidden = 0;
          });
        }
      });
    },
    selectEnable(row, rowIndex) {
      //点击确定按钮后，进入不了此判断
      if (this.length === 3 && this.flag == true) {
        return row.isHidden;
        //true可选，false不可选
      }
      return this.flag;//点击按钮后，全部都不可选
    },
    addstate() {
      this.$store.commit("add", this.arr);
      this.flag = false;
    },
  },
};
</script>

<style lang="less" scoped>
.PositiveElection {
  padding: 32px;
}

/deep/.has-gutter .el-checkbox__inner {
  display: none;
}

/deep/.el-form--inline {
  column-count:6;
}
/deep/.el-table__header-wrapper{
background-color: transparent !important;
}
/deep/.el-table__body-wrapper {
background-color: transparent !important;
}

</style>
