import Vue from "vue";

import XEUtils from 'xe-utils';
import {
  // 核心
  VXETable,

  // 功能模块
  Icon,
  // Filter,
  // Menu,
  Edit,
  // Export,
  // Keyboard,
  // Validator,
  Header,
  // Footer,

  // 可选组件
  Column,
  Colgroup,
  // Grid,
  Toolbar,
  // Pager,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  RadioButton,
  Input,
  Textarea,
  Button,
  Modal,
  Tooltip,
  Form,
  // FormItem,
  // FormGather,
  Select,
  // Optgroup,
  // Option,
  // Switch,
  // List,
  // Pulldown,

  // 表格
  Table
} from 'vxe-table'
import zhCN from 'vxe-table/lib/locale/lang/zh-CN'

      // 按需加载的方式默认是不带国际化的，自定义国际化需要自行解析占位符 '{0}'，例如：
      VXETable.setup({
        i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)
      })

// 表格功能
Vue.use(Header)
// .use(Footer)
.use(Icon)
// .use(Filter)
.use(Edit)
// .use(Menu)
// .use(Export)
// .use(Keyboard)
// .use(Validator)

// 可选组件
.use(Column)
.use(Colgroup)
// .use(Grid)
.use(Toolbar)
// .use(Pager)
.use(Checkbox)
.use(CheckboxGroup)
.use(Radio)
.use(RadioGroup)
.use(RadioButton)
.use(Input)
.use(Textarea)
.use(Button)
.use(Modal)
.use(Tooltip)
.use(Form)

// .use(FormItem)
// .use(FormGather)

.use(Select)

// .use(Optgroup)
// .use(Option)
// .use(Switch)
// .use(List)
// .use(Pulldown)

// 安装表格
.use(Table)

// 给 vue 实例挂载内部对象，例如：
      Vue.prototype.$XModal = VXETable.modal
      // Vue.prototype.$XPrint = VXETable.print
      // Vue.prototype.$XSaveFile = VXETable.saveFile
      // Vue.prototype.$XReadFile = VXETable.readFile

VXETable.setup({
  icon: {
    // table
  //   TABLE_SORT_ASC: 'vxe-icon--caret-top',
  //   TABLE_SORT_DESC: 'vxe-icon--caret-bottom',
  //   TABLE_FILTER_NONE: 'vxe-icon--funnel',
  //   TABLE_FILTER_MATCH: 'vxe-icon--funnel',
    // TABLE_EDIT: 'vxe-icon--edit-outline',
  //   TABLE_TREE_LOADED: 'vxe-icon--refresh roll',
  //   TABLE_TREE_OPEN: 'vxe-icon--caret-right rotate90',
  //   TABLE_TREE_CLOSE: 'vxe-icon--caret-right',
  //   TABLE_EXPAND_LOADED: 'vxe-icon--refresh roll',
  //   TABLE_EXPAND_OPEN: 'vxe-icon--arrow-right rotate90',
  //   TABLE_EXPAND_CLOSE: 'vxe-icon--arrow-right',

  //   // button
  //   BUTTON_DROPDOWN: 'vxe-icon--arrow-bottom',
  //   BUTTON_LOADING: 'vxe-icon--refresh roll',

  //   // select
  //   SELECT_OPEN: 'vxe-icon--caret-bottom rotate180',
  //   SELECT_CLOSE: 'vxe-icon--caret-bottom',

  //   // pager
  //   PAGER_JUMP_PREV: 'vxe-icon--d-arrow-left',
  //   PAGER_JUMP_NEXT: 'vxe-icon--d-arrow-right',
  //   PAGER_PREV_PAGE: 'vxe-icon--arrow-left',
  //   PAGER_NEXT_PAGE: 'vxe-icon--arrow-right',
  //   PAGER_JUMP_MORE: 'vxe-icon--more',

  //   // input
  //   INPUT_CLEAR: 'vxe-icon--close',
  //   INPUT_PWD: 'vxe-icon--eye-slash',
  //   INPUT_SHOW_PWD: 'vxe-icon--eye',
  //   INPUT_PREV_NUM: 'vxe-icon--caret-top',
  //   INPUT_NEXT_NUM: 'vxe-icon--caret-bottom',
  //   INPUT_DATE: 'vxe-icon--calendar',
  //   INPUT_SEARCH: 'vxe-icon--search',

  //   // modal
  //   MODAL_ZOOM_IN: 'vxe-icon--square',
  //   MODAL_ZOOM_OUT: 'vxe-icon--zoomout',
    MODAL_CLOSE: 'vxe-icon--close',
  //   MODAL_INFO: 'vxe-icon--info',
  //   MODAL_SUCCESS: 'vxe-icon--success',
  //   MODAL_WARNING: 'vxe-icon--warning',
    // MODAL_ERROR: 'vxe-icon--error',
  //   MODAL_QUESTION: 'vxe-icon--question',
  //   MODAL_LOADING: 'vxe-icon--refresh roll',

  //   // toolbar
  //   TOOLBAR_TOOLS_REFRESH: 'vxe-icon--refresh',
  //   TOOLBAR_TOOLS_REFRESH_LOADING: 'vxe-icon--refresh roll',
  //   TOOLBAR_TOOLS_IMPORT: 'vxe-icon--upload',
  //   TOOLBAR_TOOLS_EXPORT: 'vxe-icon--download',
  //   TOOLBAR_TOOLS_ZOOM_IN: 'vxe-icon--zoomin',
  //   TOOLBAR_TOOLS_ZOOM_OUT: 'vxe-icon--zoomout',
  //   TOOLBAR_TOOLS_CUSTOM: 'vxe-icon--menu',

  //   // form
  //   FORM_PREFIX: 'vxe-icon--info',
  //   FORM_SUFFIX: 'vxe-icon--info',
  //   FORM_FOLDING: 'vxe-icon--arrow-top rotate180',
  //   FORM_UNFOLDING: 'vxe-icon--arrow-top'
  }
})
