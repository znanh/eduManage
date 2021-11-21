<template>
  <div class="Withdraw">
    <el-table
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @select="selectfn"
      ref="multiple"
    >
      <el-table-column type="selection" width="55" >
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
      <el-button @click="del()">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr:[],
    };
  },

  computed: {
    tableData() {
      const ret = [] 
      this.$store.state.Ele_one ? ret.push(this.$store.state.Ele_one) : null
        this.$store.state.Ele_two ? ret.push(this.$store.state.Ele_two) : null
        this.$store.state.Ele_three ?ret.push(this.$store.state.Ele_three) : null
        return ret
    }
  },

  methods: {
    selectfn(selection,row){
      this.arr = this.$refs.multiple.selection
    },
    del() {
      this.$store.commit('delete',this.arr)
    },
  },
};
</script>

<style lang="less" scoped>
.Withdraw {
  padding: 32px;
}

/deep/.has-gutter .el-checkbox__inner {
  display: none;
}

/deep/.el-form--inline {
  column-count:6;
}
</style>
