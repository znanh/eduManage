import Vue from 'vue'
import Login from '../views/Login.vue'
import VueRouter from 'vue-router'
import PageContainer from '../views/PageContainer.vue'
import { clearPending } from '@/utils/index.js'

//学生学籍
//-学籍档案
import StudentStatusFile from '../components/PageContainer/PageContent/StudentStatusFile.vue'
import AdminStudentStatusFile from '../components/PageContainer/PageContent/AdminStudentStatusFile.vue'

//培养方案
//-理论课程
import TheoryCourse from '../components/PageContainer/PageContent/TheoryCourse.vue'
import AdminTheoryCourse from '../components/PageContainer/PageContent/AdminTheoryCourse.vue'
//-实践课程
import PracticeLink from '../components/PageContainer/PageContent/PracticeLink.vue'
import AdminPracticeLink from '../components/PageContainer/PageContent/AdminPracticeLink.vue'
// const PracticeLink = () => import("../components/PageContainer/PageContent/PracticeLink.vue")

//网上选课
//-正选
import PositiveElection from '../components/PageContainer/PageContent/PositiveElection.vue'
import AdminPositiveElection from '../components/PageContainer/PageContent/AdminPositiveElection.vue'
//-退选
import Withdraw from '../components/PageContainer/PageContent/Withdraw.vue'

//教学安排
//-教学安排表
import TeachingSchedule from '../components/PageContainer/PageContent/TeachingSchedule.vue'
import AdiminTeachingSchedule from '../components/PageContainer/PageContent/AdiminTeachingSchedule.vue'

//考试安排
//-考试安排表
import ExamSchedule from '../components/PageContainer/PageContent/ExamSchedule.vue'
import AdminExamSchedule from '../components/PageContainer/PageContent/AdminExamSchedule.vue'

//学生成绩
//-查看成绩
import ViewGrades from '../components/PageContainer/PageContent/ViewGrades.vue'
import AdminViewGrades from '../components/PageContainer/PageContent/AdminViewGrades.vue'
//-成绩分布
import ScoreDistribution from '../components/PageContainer/PageContent/ScoreDistribution.vue'
import AdminScoreDistribution from '../components/PageContainer/PageContent/AdminScoreDistribution.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/PageContainer',
    // redirect:'/PageContainer/ScoreDistribution',
    name: 'PageContainer',
    component: PageContainer,
    // component: ScoreDistribution,
    children: [
      {
        path: 'StudentStatusFile',
        name: 'StudentStatusFile',
        component: StudentStatusFile
      },
      {
        path: 'TheoryCourse',
        name: 'TheoryCourse',
        component: TheoryCourse
      },
      {
        path: 'PracticeLink',
        name: 'PracticeLink',
        component: PracticeLink
      },
      {
        path: 'PositiveElection',
        name: 'PositiveElection',
        component: PositiveElection
      },
      {
        path: 'Withdraw',
        name: 'Withdraw',
        component: Withdraw
      },
      {
        path: 'TeachingSchedule',
        name: 'TeachingSchedule',
        component: TeachingSchedule
      },
      {
        path: 'ExamSchedule',
        name: 'ExamSchedule',
        component: ExamSchedule
      },
      {
        path: 'ViewGrades',
        name: 'ViewGrades',
        component: ViewGrades
      },
      {
        path: 'ScoreDistribution',
        name: 'ScoreDistribution',
        component: ScoreDistribution
      },

      {
        path: 'AdminStudentStatusFile',
        name: 'AdminStudentStatusFile',
        component: AdminStudentStatusFile
      },
      {
        path: 'AdminTheoryCourse',
        name: 'AdminTheoryCourse',
        component: AdminTheoryCourse
      },
      {
        path: 'AdminPracticeLink',
        name: 'AdminPracticeLink',
        component: AdminPracticeLink
      },
      {
        path: 'AdminPositiveElection',
        name: 'AdminPositiveElection',
        component: AdminPositiveElection
      },
      {
        path: 'AdiminTeachingSchedule',
        name: 'AdiminTeachingSchedule',
        component: AdiminTeachingSchedule
      },
      {
        path: 'AdminExamSchedule',
        name: 'AdminExamSchedule',
        component: AdminExamSchedule
      },
      {
        path: 'AdminViewGrades',
        name: 'AdminViewGrades',
        component: AdminViewGrades
      },
      {
        path: 'AdminScoreDistribution',
        name: 'AdminScoreDistribution',
        component: AdminScoreDistribution
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  clearPending()
  next()
})

export default router
