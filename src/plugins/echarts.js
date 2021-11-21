// import Vue from 'vue'

import * as echarts from 'echarts/core'
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, PieChart, ScatterChart, EffectScatterChart, CustomChart } from 'echarts/charts'
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import { TitleComponent, GridComponent, DataZoomComponent, TooltipComponent, LegendComponent } from 'echarts/components'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  TitleComponent,
  GridComponent,
  DataZoomComponent,
  TooltipComponent,
  LegendComponent,
  BarChart,
  PieChart,
  CanvasRenderer,
  ScatterChart,
  EffectScatterChart,
  CustomChart
])

export default echarts

// Vue.prototype.$echarts = echarts
