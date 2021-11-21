<template>
  <div id="app" >
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
}

</script>

<style lang="less">
#app {
 .el-table th, .el-table tr{
  background-color: transparent;
}

.el-table--striped .el-table__body tr.el-table__row--striped.current-row td,
.el-table__body tr.current-row > td {
    background-color: #ffffff30 !important;
}
 
.el-table__body tr:hover>td {
    background-color: #ffffff30 !important;
}

.el-table, .el-table__expanded-cell {
  background-color: transparent;
}

.vxe-table--render-default.border--default .vxe-table--header-wrapper, .vxe-table--render-default.border--full .vxe-table--header-wrapper, .vxe-table--render-default.border--outer .vxe-table--header-wrapper {
  background-color: transparent;
}
.vxe-table--render-default .vxe-table--body-wrapper {
  background-color: transparent;
}
.row--hover {
  background-color: #ffffff30;
}
.vxe-toolbar {
  background-color: transparent;
}
.vxe-button.type--button {
  background-color: #ffffff80;
}
.el-button {
  background-color: #ffffff80;
}
.vxe-button.type--button.theme--primary:not(.is--disabled) {
  background-color: #409eff!important;
}
}
</style>
