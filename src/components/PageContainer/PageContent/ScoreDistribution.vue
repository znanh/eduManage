<template>
  <div class="ScoreDistribution">
    <el-radio-group v-model="radio" size="small" @change="radiochange">
      <el-radio-button label="表格"></el-radio-button>
      <el-radio-button label="柱状图"></el-radio-button>
      <el-radio-button label="饼状图"></el-radio-button>
    </el-radio-group>
    <el-table v-if="tab" :data="tableData" style="width: 100%">
      <el-table-column label="学年学期" prop="gra_schoolYearSemester" width="180" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="课程" prop="gra_name" header-align="center" align="center"></el-table-column>
      <el-table-column label="学分" prop="gra_credit" width="50" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="类别" prop="gra_category" width="140" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="考核方式" prop="gra_assessmentMethod" width="50" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="修读性质" prop="gra_nature" width="50" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="[100,90]优秀" prop="gra_excellent" width="80" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="(90,80]良好" prop="gra_well" width="70" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="(80,70]中等" prop="gra_medium" width="70" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="(70,60]及格" prop="gra_pass" width="70" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="(60,0]不及格" prop="gra_failed" width="70" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="成绩" prop="gra_grades" width="60" header-align="center" align="center">
      </el-table-column>
    </el-table>
    <div v-else-if="bar" id="barChart" :style="{ width: '1100px', height: '500px' }" :key="+new Date()"></div>
    <div v-else-if="pie" id="pieChart" :style="{ width: '1100px', height: '500px' }" :key="+new Date()"></div>
  </div>
</template>

<script>
import axios from '@/network/index.js'
export default {
  data() {
    return {
      radio: '表格',
      tab: true,
      bar: false,
      pie: false,
      kong: null,
      ce: null,
      tableData: null,
      bardata: [],
      excellent: 0,
      well: 0,
      medium: 0,
      pass: 0,
      failed: 0
    }
  },
  created() {
    axios({
      url: '/score'
    }).then(
      response => {
        this.tableData = response.data
        response.data.forEach(item => {
          this.bardata.push(item.gra_grades)
          /* if (item.gra_grades >= 90) {
            this.excellent += 1
          } else if (item.gra_grades >= 80) {
            this.well += 1
          } else if (item.gra_grades >= 70) {
            this.medium += 1
          } else if (item.gra_grades >= 60) {
            this.pass += 1
          } else if (item.gra_grades >= 0) {
            this.failed += 1
          } */
          switch (Math.floor(item.gra_grades / 10)) {
            case 10:
            case 9:
              this.excellent += 1
              break
            case 8:
              this.well += 1
              break
            case 7:
              this.medium += 1
              break
            case 6:
              this.pass += 1
              break
            default:
              this.failed += 1
          }
          // console.log(
          //   'excellent' + this.excellent,
          //   'well' + this.well,
          //   'medium' + this.medium,
          //   'pass' + this.pass,
          //   'failed' + this.failed
          // )
        })
      },
      error => {
        // 只需要处理请求失败的情况，取消请求的不用处理，响应拦截器已经处理了，且没有将取消请求的向下传递，而只是将请求失败的错误向下传递
        console.log('请求tab失败了', error.message)
      }
    )
  },
  updated() {
    if (this.bar == true) {
      this.drawLineBar()
    } else if (this.pie == true) {
      this.drawLinePie()
    }
  },
  methods: {
    radiochange(label) {
      console.log(label)
      if (label === '表格') {
        this.bar = false
        this.pie = false
        this.tab = true
      } else if (label === '柱状图') {
        this.tab = false
        this.pie = false
        this.bar = true
      } else if (label === '饼状图') {
        this.tab = false
        this.bar = false
        this.pie = true
      }
    },

    drawLineBar() {
      // 基于准备好的dom，初始化echarts实例
      var barchartDom = document.getElementById('barChart')
      var barChart = this.$echarts.init(barchartDom)
      var option

      var dataAxis = [
        '高等数学',
        '计算机网络',
        '数据库原理及应用',
        'c语言程序设计',
        '大学英语',
        '面对对象程序设计',
        '数字逻辑',
        '计算机组成原理',
        '算法分析与设计',
        '工程数学',
        '大学物理',
        '电路与电子技术',
        'Linux操作系统',
        'Web应用项目开发',
        '无线传感网RFID技术'
      ]
      /* var data = [
        {
          value: 90,
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#FDEB71' },
              { offset: 0.5, color: '#FDEB71' },
              { offset: 1, color: '#F8D800' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#F8D800' },
                { offset: 0.7, color: '#F8D800' },
                { offset: 1, color: '#FDEB71' }
              ])
            }
          }
        },
        {
          value: 84,
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#ABDCFF' },
              { offset: 0.5, color: '#ABDCFF' },
              { offset: 1, color: '#0396FF' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#0396FF' },
                { offset: 0.7, color: '#0396FF' },
                { offset: 1, color: '#ABDCFF' }
              ])
            }
          }
        },
        {
          value: 78,
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#FEB692' },
              { offset: 0.5, color: '#FEB692' },
              { offset: 1, color: '#EA5455' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#EA5455' },
                { offset: 0.7, color: '#EA5455' },
                { offset: 1, color: '#FEB692' }
              ])
            }
          }
        },
        {
          value: 94,
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#CE9FFC' },
              { offset: 0.5, color: '#CE9FFC' },
              { offset: 1, color: '#7367F0' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#7367F0' },
                { offset: 0.7, color: '#7367F0' },
                { offset: 1, color: '#CE9FFC' }
              ])
            }
          }
        },
        {
          value: 58,
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#90F7EC' },
              { offset: 0.5, color: '#90F7EC' },
              { offset: 1, color: '#32CCBC' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#32CCBC' },
                { offset: 0.7, color: '#32CCBC' },
                { offset: 1, color: '#90F7EC' }
              ])
            }
          }
        },
        {
          value: 85,
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#FFF6B7' },
              { offset: 0.5, color: '#FFF6B7' },
              { offset: 1, color: '#F6416C' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#F6416C' },
                { offset: 0.7, color: '#F6416C' },
                { offset: 1, color: '#FFF6B7' }
              ])
            }
          }
        },
        {
          value: 82,
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#81FBB8' },
              { offset: 0.5, color: '#81FBB8' },
              { offset: 1, color: '#28C76F' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#28C76F' },
                { offset: 0.7, color: '#28C76F' },
                { offset: 1, color: '#81FBB8' }
              ])
            }
          }
        },
        {
          value: 82,
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#E2B0FF' },
              { offset: 0.5, color: '#E2B0FF' },
              { offset: 1, color: '#9F44D3' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#9F44D3' },
                { offset: 0.7, color: '#9F44D3' },
                { offset: 1, color: '#E2B0FF' }
              ])
            }
          }
        },
        {
          value: 74,
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#F97794' },
              { offset: 0.5, color: '#F97794' },
              { offset: 1, color: '#623AA2' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#623AA2' },
                { offset: 0.7, color: '#623AA2' },
                { offset: 1, color: '#F97794' }
              ])
            }
          }
        },
        {
          value: 66,
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#FCCF31' },
              { offset: 0.5, color: '#FCCF31' },
              { offset: 1, color: '#F55555' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#F55555' },
                { offset: 0.7, color: '#F55555' },
                { offset: 1, color: '#FCCF31' }
              ])
            }
          }
        },
        {
          value: 68,
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#F761A1' },
              { offset: 0.5, color: '#F761A1' },
              { offset: 1, color: '#8C1BAB' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#8C1BAB' },
                { offset: 0.7, color: '#8C1BAB' },
                { offset: 1, color: '#F761A1' }
              ])
            }
          }
        },
        {
          value: 77,
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#43CBFF' },
              { offset: 0.5, color: '#43CBFF' },
              { offset: 1, color: '#9708CC' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#9708CC' },
                { offset: 0.7, color: '#9708CC' },
                { offset: 1, color: '#43CBFF' }
              ])
            }
          }
        },
        {
          value: 66,
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#5EFCE8' },
              { offset: 0.5, color: '#5EFCE8' },
              { offset: 1, color: '#736EFE' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#736EFE' },
                { offset: 0.7, color: '#736EFE' },
                { offset: 1, color: '#5EFCE8' }
              ])
            }
          }
        },
        {
          value: 75,
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#FAD7A1' },
              { offset: 0.5, color: '#FAD7A1' },
              { offset: 1, color: '#E96D71' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#E96D71' },
                { offset: 0.7, color: '#E96D71' },
                { offset: 1, color: '#FAD7A1' }
              ])
            }
          }
        },
        {
          value: 82,
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#FFD26F' },
              { offset: 0.5, color: '#FFD26F' },
              { offset: 1, color: '#3677FF' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#3677FF' },
                { offset: 0.7, color: '#3677FF' },
                { offset: 1, color: '#FFD26F' }
              ])
            }
          }
        }
      ] */
      // var data = [90, 84, 78, 94, 58, 85, 82, 82, 74, 66, 68, 77, 66, 75, 82]
      var data = this.bardata
      var yMax = 100
      var dataShadow = []

      for (var i = 0; i < data.length; i++) {
        dataShadow.push(yMax)
      }

      option = {
        xAxis: {
          data: dataAxis,
          axisLabel: {
            rotate: 90,
            inside: true,
            textStyle: {
              color: '#fff'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#999'
            }
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'bar',
            showBackground: true,
            data: data,
            // itemStyle: {
            //   color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //     { offset: 0, color: '#81FBB8' },
            //     { offset: 0.5, color: '#81FBB8' },
            //     { offset: 1, color: '#28C76F' }
            //   ])
            // },
            emphasis: {
              itemStyle: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#28C76F' },
                  { offset: 0.7, color: '#28C76F' },
                  { offset: 1, color: '#81FBB8' }
                ])
              }
            }
          }
        ]
      }

      var zoomSize = 6
      barChart.on('click', function(params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)])
        barChart.dispatchAction({
          type: 'dataZoom',
          startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
          endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
        })
      })
      option && barChart.setOption(option)
    },
    drawLinePie() {
      var piechartDom = document.getElementById('pieChart')
      var pieChart = this.$echarts.init(piechartDom)
      var option

      option = {
        title: {
          text: '成绩分布',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            type: 'pie',
            radius: '50%',
            data: [
              { value: this.excellent, name: '优秀' },
              { value: this.well, name: '良好' },
              { value: this.medium, name: '中等' },
              { value: this.pass, name: '及格' },
              { value: this.failed, name: '不及格' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }

      option && pieChart.setOption(option)
    }
  }
}
</script>

<style lang="less" scoped>
.ScoreDistribution {
  padding: 32px;
}
</style>
