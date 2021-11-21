const express = require("express");
const cors = require("cors");

const app = express();

//使用cors，允许跨域
app.use(cors());
//能解析urlencode格式的post请求体参数
app.use(express.urlencoded());
//能解析json格式的请求体参数
app.use(express.json());

//学籍档案
app.get("/StudentStatusFile", (request, response) => {
  setTimeout(() => {
    response.send({
      labelPosition: "top",
      formLabelAlign: {
        stu_id: "201710214532",
        stu_name: "郑广超",
        stu_gender: "男",
        stu_idnum: "441421199702135514",
        stu_birth: "1997-02-13",
        stu_nation: "汉族",
        stu_hometown: "广东省梅州市梅县区",
        stu_political: "共青团员",
        stu_dormitory: "F1-113",
        stu_phone: "17806707070",
        stu_startYear: "2017",
        stu_profession: "计算机类",
        stu_schoolSystem: "4年",
        stu_trainingLevel: "本科",
        stu_Faculty: "信息科学与技术学院",
      },
    });
  }, 300);
});

//理论课程
app.get("/TheoryCourse", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        cou_schoolYearSemester: "2019-2020学年第一学期",
        cou_idname: "[320635]无线传感网与RFID技术",
        cou_credit: "3.0",
        cou_category: "必修课/专业课",
        cou_assessmentMethod: "考试",
        cou_totalPeriod: "48",
        cou_teachingHours: "32",
        cou_experimentalHours: "16",
        cou_computerHours: "0",
        cou_otherHours: "0",
        cou_weekHours: " ",
        cou_id: "320635",
        cou_department: "信息科学与技术学院",
        cou_name: "无线传感网与RFID技术",
        cou_englishName:
          "Wireless sensor network and Radio Frequency Identification Technology",
        cou_category_three: "自然科学类",
        cou_category_four: "普通课",
        cou_outline: "",
      },
      {
        id: "1",
        cou_schoolYearSemester: "2019-2020学年第一学期",
        cou_idname: "[320635]无线传感网与RFID技术",
        cou_credit: "3.0",
        cou_category: "必修课/专业课",
        cou_assessmentMethod: "考试",
        cou_totalPeriod: "48",
        cou_teachingHours: "32",
        cou_experimentalHours: "16",
        cou_computerHours: "0",
        cou_otherHours: "0",
        cou_weekHours: " ",
        cou_id: "320635",
        cou_department: "信息科学与技术学院",
        cou_name: "无线传感网与RFID技术",
        cou_englishName:
          "Wireless sensor network and Radio Frequency Identification Technology",
        cou_category_three: "自然科学类",
        cou_category_four: "普通课",
        cou_outline: "",
      },
      {
        id: "1",
        cou_schoolYearSemester: "2019-2020学年第一学期",
        cou_idname: "[320635]无线传感网与RFID技术",
        cou_credit: "3.0",
        cou_category: "必修课/专业课",
        cou_assessmentMethod: "考试",
        cou_totalPeriod: "48",
        cou_teachingHours: "32",
        cou_experimentalHours: "16",
        cou_computerHours: "0",
        cou_otherHours: "0",
        cou_weekHours: " ",
        cou_id: "320635",
        cou_department: "信息科学与技术学院",
        cou_name: "无线传感网与RFID技术",
        cou_englishName:
          "Wireless sensor network and Radio Frequency Identification Technology",
        cou_category_three: "自然科学类",
        cou_category_four: "普通课",
        cou_outline: "",
      },
      {
        id: "1",
        cou_schoolYearSemester: "2019-2020学年第一学期",
        cou_idname: "[320635]无线传感网与RFID技术",
        cou_credit: "3.0",
        cou_category: "必修课/专业课",
        cou_assessmentMethod: "考试",
        cou_totalPeriod: "48",
        cou_teachingHours: "32",
        cou_experimentalHours: "16",
        cou_computerHours: "0",
        cou_otherHours: "0",
        cou_weekHours: " ",
        cou_id: "320635",
        cou_department: "信息科学与技术学院",
        cou_name: "无线传感网与RFID技术",
        cou_englishName:
          "Wireless sensor network and Radio Frequency Identification Technology",
        cou_category_three: "自然科学类",
        cou_category_four: "普通课",
        cou_outline: "",
      },
      {
        id: "1",
        cou_schoolYearSemester: "2019-2020学年第一学期",
        cou_idname: "[320635]无线传感网与RFID技术",
        cou_credit: "3.0",
        cou_category: "必修课/专业课",
        cou_assessmentMethod: "考试",
        cou_totalPeriod: "48",
        cou_teachingHours: "32",
        cou_experimentalHours: "16",
        cou_computerHours: "0",
        cou_otherHours: "0",
        cou_weekHours: " ",
        cou_id: "320635",
        cou_department: "信息科学与技术学院",
        cou_name: "无线传感网与RFID技术",
        cou_englishName:
          "Wireless sensor network and Radio Frequency Identification Technology",
        cou_category_three: "自然科学类",
        cou_category_four: "普通课",
        cou_outline: "",
      },
      {
        id: "1",
        cou_schoolYearSemester: "2019-2020学年第一学期",
        cou_idname: "[320635]无线传感网与RFID技术",
        cou_credit: "3.0",
        cou_category: "必修课/专业课",
        cou_assessmentMethod: "考试",
        cou_totalPeriod: "48",
        cou_teachingHours: "32",
        cou_experimentalHours: "16",
        cou_computerHours: "0",
        cou_otherHours: "0",
        cou_weekHours: " ",
        cou_id: "320635",
        cou_department: "信息科学与技术学院",
        cou_name: "无线传感网与RFID技术",
        cou_englishName:
          "Wireless sensor network and Radio Frequency Identification Technology",
        cou_category_three: "自然科学类",
        cou_category_four: "普通课",
        cou_outline: "",
      },
      {
        id: "1",
        cou_schoolYearSemester: "2019-2020学年第一学期",
        cou_idname: "[320635]无线传感网与RFID技术",
        cou_credit: "3.0",
        cou_category: "必修课/专业课",
        cou_assessmentMethod: "考试",
        cou_totalPeriod: "48",
        cou_teachingHours: "32",
        cou_experimentalHours: "16",
        cou_computerHours: "0",
        cou_otherHours: "0",
        cou_weekHours: " ",
        cou_id: "320635",
        cou_department: "信息科学与技术学院",
        cou_name: "无线传感网与RFID技术",
        cou_englishName:
          "Wireless sensor network and Radio Frequency Identification Technology",
        cou_category_three: "自然科学类",
        cou_category_four: "普通课",
        cou_outline: "",
      },
      {
        id: "1",
        cou_schoolYearSemester: "2019-2020学年第一学期",
        cou_idname: "[320635]无线传感网与RFID技术",
        cou_credit: "3.0",
        cou_category: "必修课/专业课",
        cou_assessmentMethod: "考试",
        cou_totalPeriod: "48",
        cou_teachingHours: "32",
        cou_experimentalHours: "16",
        cou_computerHours: "0",
        cou_otherHours: "0",
        cou_weekHours: " ",
        cou_id: "320635",
        cou_department: "信息科学与技术学院",
        cou_name: "无线传感网与RFID技术",
        cou_englishName:
          "Wireless sensor network and Radio Frequency Identification Technology",
        cou_category_three: "自然科学类",
        cou_category_four: "普通课",
        cou_outline: "",
      },
      {
        id: "1",
        cou_schoolYearSemester: "2019-2020学年第一学期",
        cou_idname: "[320635]无线传感网与RFID技术",
        cou_credit: "3.0",
        cou_category: "必修课/专业课",
        cou_assessmentMethod: "考试",
        cou_totalPeriod: "48",
        cou_teachingHours: "32",
        cou_experimentalHours: "16",
        cou_computerHours: "0",
        cou_otherHours: "0",
        cou_weekHours: " ",
        cou_id: "320635",
        cou_department: "信息科学与技术学院",
        cou_name: "无线传感网与RFID技术",
        cou_englishName:
          "Wireless sensor network and Radio Frequency Identification Technology",
        cou_category_three: "自然科学类",
        cou_category_four: "普通课",
        cou_outline: "",
      },
      {
        id: "1",
        cou_schoolYearSemester: "2019-2020学年第一学期",
        cou_idname: "[320635]无线传感网与RFID技术",
        cou_credit: "3.0",
        cou_category: "必修课/专业课",
        cou_assessmentMethod: "考试",
        cou_totalPeriod: "48",
        cou_teachingHours: "32",
        cou_experimentalHours: "16",
        cou_computerHours: "0",
        cou_otherHours: "0",
        cou_weekHours: " ",
        cou_id: "320635",
        cou_department: "信息科学与技术学院",
        cou_name: "无线传感网与RFID技术",
        cou_englishName:
          "Wireless sensor network and Radio Frequency Identification Technology",
        cou_category_three: "自然科学类",
        cou_category_four: "普通课",
        cou_outline: "",
      },
      {
        id: "1",
        cou_schoolYearSemester: "2019-2020学年第一学期",
        cou_idname: "[320635]无线传感网与RFID技术",
        cou_credit: "3.0",
        cou_category: "必修课/专业课",
        cou_assessmentMethod: "考试",
        cou_totalPeriod: "48",
        cou_teachingHours: "32",
        cou_experimentalHours: "16",
        cou_computerHours: "0",
        cou_otherHours: "0",
        cou_weekHours: " ",
        cou_id: "320635",
        cou_department: "信息科学与技术学院",
        cou_name: "无线传感网与RFID技术",
        cou_englishName:
          "Wireless sensor network and Radio Frequency Identification Technology",
        cou_category_three: "自然科学类",
        cou_category_four: "普通课",
        cou_outline: "",
      },
    ]);
  }, 300);
});

//实践课程
app.get("/PracticeLink", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        pra_schoolYearSemester: "2019-2020学年第一学期",
        pra_idname: "[320735]嵌入式系统设计(校企合作)",
        pra_credit: "2.0",
        pra_category: "课程设计",
        pra_assessmentMethod: "考查",
        pra_weekNum: "2.0",
        pra_id: "	320735",
        pra_department: "信息科学与技术学院",
        pra_name: "	嵌入式系统设计(校企合作)",
        pra_englishName:
          "Design of Embedded System ( School-enterprise Cooperation)",
        pra_experimentalHours: " ",
      },
      {
        id: "1",
        pra_schoolYearSemester: "2019-2020学年第一学期",
        pra_idname: "[320735]嵌入式系统设计(校企合作)",
        pra_credit: "2.0",
        pra_category: "课程设计",
        pra_assessmentMethod: "考查",
        pra_weekNum: "2.0",
        pra_id: "	320735",
        pra_department: "信息科学与技术学院",
        pra_name: "	嵌入式系统设计(校企合作)",
        pra_englishName:
          "Design of Embedded System ( School-enterprise Cooperation)",
        pra_experimentalHours: " ",
      },
      {
        id: "1",
        pra_schoolYearSemester: "2019-2020学年第一学期",
        pra_idname: "[320735]嵌入式系统设计(校企合作)",
        pra_credit: "2.0",
        pra_category: "课程设计",
        pra_assessmentMethod: "考查",
        pra_weekNum: "2.0",
        pra_id: "	320735",
        pra_department: "信息科学与技术学院",
        pra_name: "	嵌入式系统设计(校企合作)",
        pra_englishName:
          "Design of Embedded System ( School-enterprise Cooperation)",
        pra_experimentalHours: " ",
      },
      {
        id: "1",
        pra_schoolYearSemester: "2019-2020学年第一学期",
        pra_idname: "[320735]嵌入式系统设计(校企合作)",
        pra_credit: "2.0",
        pra_category: "课程设计",
        pra_assessmentMethod: "考查",
        pra_weekNum: "2.0",
        pra_id: "	320735",
        pra_department: "信息科学与技术学院",
        pra_name: "	嵌入式系统设计(校企合作)",
        pra_englishName:
          "Design of Embedded System ( School-enterprise Cooperation)",
        pra_experimentalHours: " ",
      },
      {
        id: "1",
        pra_schoolYearSemester: "2019-2020学年第一学期",
        pra_idname: "[320735]嵌入式系统设计(校企合作)",
        pra_credit: "2.0",
        pra_category: "课程设计",
        pra_assessmentMethod: "考查",
        pra_weekNum: "2.0",
        pra_id: "	320735",
        pra_department: "信息科学与技术学院",
        pra_name: "	嵌入式系统设计(校企合作)",
        pra_englishName:
          "Design of Embedded System ( School-enterprise Cooperation)",
        pra_experimentalHours: " ",
      },
      {
        id: "1",
        pra_schoolYearSemester: "2019-2020学年第一学期",
        pra_idname: "[320735]嵌入式系统设计(校企合作)",
        pra_credit: "2.0",
        pra_category: "课程设计",
        pra_assessmentMethod: "考查",
        pra_weekNum: "2.0",
        pra_id: "	320735",
        pra_department: "信息科学与技术学院",
        pra_name: "	嵌入式系统设计(校企合作)",
        pra_englishName:
          "Design of Embedded System ( School-enterprise Cooperation)",
        pra_experimentalHours: " ",
      },
      {
        id: "1",
        pra_schoolYearSemester: "2019-2020学年第一学期",
        pra_idname: "[320735]嵌入式系统设计(校企合作)",
        pra_credit: "2.0",
        pra_category: "课程设计",
        pra_assessmentMethod: "考查",
        pra_weekNum: "2.0",
        pra_id: "	320735",
        pra_department: "信息科学与技术学院",
        pra_name: "	嵌入式系统设计(校企合作)",
        pra_englishName:
          "Design of Embedded System ( School-enterprise Cooperation)",
        pra_experimentalHours: " ",
      },
      {
        id: "1",
        pra_schoolYearSemester: "2019-2020学年第一学期",
        pra_idname: "[320735]嵌入式系统设计(校企合作)",
        pra_credit: "2.0",
        pra_category: "课程设计",
        pra_assessmentMethod: "考查",
        pra_weekNum: "2.0",
        pra_id: "	320735",
        pra_department: "信息科学与技术学院",
        pra_name: "	嵌入式系统设计(校企合作)",
        pra_englishName:
          "Design of Embedded System ( School-enterprise Cooperation)",
        pra_experimentalHours: " ",
      },
      {
        id: "1",
        pra_schoolYearSemester: "2019-2020学年第一学期",
        pra_idname: "[320735]嵌入式系统设计(校企合作)",
        pra_credit: "2.0",
        pra_category: "课程设计",
        pra_assessmentMethod: "考查",
        pra_weekNum: "2.0",
        pra_id: "	320735",
        pra_department: "信息科学与技术学院",
        pra_name: "	嵌入式系统设计(校企合作)",
        pra_englishName:
          "Design of Embedded System ( School-enterprise Cooperation)",
        pra_experimentalHours: " ",
      },
    ]);
  }, 300);
});

//正选
app.get("/PositiveElection", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        cou_name: "物联网技术及应用",
        cou_credit: "2.0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: '张世龙',
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: '0',
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: '教学楼605',
      },
      {
        cou_name: "C语言",
        cou_credit: "2.0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: '曾宪贵',
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: '0',
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: '教学楼605',
      },
      {
        cou_name: "Linux操作系统",
        cou_credit: "2.0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: '吴志芳',
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: '0',
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: '教学楼605',
      },
      {
        cou_name: "离散数学",
        cou_credit: "2.0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: '王潇',
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: '0',
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: '教学楼605',
      },
      {
        cou_name: "电路与电子技术",
        cou_credit: "2.0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: '罗智杰',
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: '0',
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: '教学楼605',
      },
      {
        cou_name: "面对对象程序设计",
        cou_credit: "2.0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: '王俊红',
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: '0',
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: '教学楼605',
      },
      {
        cou_name: "计算机网络",
        cou_credit: "2.0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: '邹莹',
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: '0',
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: '教学楼605',
      },
      {
        cou_name: "计算机组成原理",
        cou_credit: "2.0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: '王潇',
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: '0',
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: '教学楼605',
      },
      {
        cou_name: "算法分析与设计",
        cou_credit: "2.0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: '曾宪贵',
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: '0',
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: '教学楼605',
      },
    ]);
  }, 300);
});

//课表格式一
app.get("/bigone-one_one", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: ``,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: ``,
      },
      {
        Monday: ``,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: ``,
        Saturday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Sunday: ``,
      },
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: ``,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
      },
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: ``,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: ``,
      },
      {
        Monday: ``,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: ``,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: ``,
        Saturday: ``,
        Sunday: ``,
      },
    ]);
  }, 300);
});
app.get("/bigone-two_one", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: ``,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: ``,
      },
      {
        Monday: ``,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: ``,
        Saturday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Sunday: ``,
      },
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: ``,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
      },
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: ``,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: ``,
      },
      {
        Monday: ``,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: ``,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: ``,
        Saturday: ``,
        Sunday: ``,
      },
    ]);
  }, 300);
});
app.get("/bigtwo-one_one", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: ``,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: ``,
      },
      {
        Monday: ``,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: ``,
        Saturday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Sunday: ``,
      },
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: ``,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
      },
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: ``,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: ``,
      },
      {
        Monday: ``,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: ``,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: ``,
        Saturday: ``,
        Sunday: ``,
      },
    ]);
  }, 300);
});
app.get("/bigtwo-two_one", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: ``,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: ``,
      },
      {
        Monday: ``,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: ``,
        Saturday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Sunday: ``,
      },
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: ``,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
      },
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: ``,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: ``,
      },
      {
        Monday: ``,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: ``,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: ``,
        Saturday: ``,
        Sunday: ``,
      },
    ]);
  }, 300);
});
app.get("/bigthree-one_one", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: ``,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: ``,
      },
      {
        Monday: ``,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: ``,
        Saturday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Sunday: ``,
      },
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: ``,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
      },
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: ``,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: ``,
      },
      {
        Monday: ``,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: ``,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: ``,
        Saturday: ``,
        Sunday: ``,
      },
    ]);
  }, 300);
});
app.get("/bigthree-two_one", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: ``,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: ``,
      },
      {
        Monday: ``,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: ``,
        Saturday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Sunday: ``,
      },
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: ``,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
      },
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: ``,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: ``,
      },
      {
        Monday: ``,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: ``,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: ``,
        Saturday: ``,
        Sunday: ``,
      },
    ]);
  }, 300);
});
app.get("/bigfour-one_one", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: ``,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: ``,
      },
      {
        Monday: ``,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: ``,
        Saturday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Sunday: ``,
      },
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: ``,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
      },
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: ``,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: ``,
      },
      {
        Monday: ``,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: ``,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: ``,
        Saturday: ``,
        Sunday: ``,
      },
    ]);
  }, 300);
});
app.get("/bigfour-two_one", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: ``,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: ``,
      },
      {
        Monday: ``,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: ``,
        Saturday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Sunday: ``,
      },
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: ``,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
      },
      {
        Monday: `[320490]Linux操作系统
        吴志芳
        [1-4,6-9周]-周一-[1-2节]
        教学楼803`,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: `[320636]物联网技术及应用
        张世龙
        [3-4,6-9周]-周三-[1-2节]
        教学楼808`,
        Thursday: ``,
        Friday: `[320636]物联网技术及应用
        韩洁琼
        [10-13周]-周五-[1-4节]
        英东楼803-物联网与传感实验室`,
        Saturday: ``,
        Sunday: ``,
      },
      {
        Monday: ``,
        Tuesday: `[320490]Linux操作系统
        吴志芳
        [10-11周]-周二-[1-4节]
        英东楼702-Linux实验室`,
        Wednesday: ``,
        Thursday: `[320842]Python语言程序设计
        张荣锋
        [6-13周]-周四-[1-2节]
        教学楼408`,
        Friday: ``,
        Saturday: ``,
        Sunday: ``,
      },
    ]);
  }, 300);
});

//课表格式二
app.get("/bigone-one_two", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
    ]);
  }, 300);
});
app.get("/bigone-two_two", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
    ]);
  }, 300);
});
app.get("/bigtwo-one_two", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
    ]);
  }, 300);
});
app.get("/bigtwo-two_two", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
    ]);
  }, 300);
});
app.get("/bigthree-one_two", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
    ]);
  }, 300);
});
app.get("/bigthree-two_two", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
    ]);
  }, 300);
});
app.get("/bigfour-one_two", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
    ]);
  }, 300);
});
app.get("/bigfour-two_two", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
      {
        id: "1",
        cou_name: "[320488]大型关系数据库应用",
        cou_credit: "2.5",
        cou_totalPeriod: "40",
        cou_teachingHours: "32",
        cou_computerHours: "0",
        cou_category: "专业课/限选课",
        cou_teachingCategory: "讲授",
        cou_assessmentMethod: "考试",
        cou_teacher: "赵爱芹",
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周一[6-7节]",
        cou_address: "教学楼605",
      },
      {
        cou_weekNum: "2-4,6-10",
        cou_dayNum: "周四[3-4节]",
        cou_address: "教学楼804",
      },
      {
        cou_weekNum: "10-11",
        cou_dayNum: "周五[6-9节]",
        cou_address: "英东楼701-Web技术实验室",
      },
    ]);
  }, 300);
});

//考试安排表
app.get('/ExamSchedule',(request,response) => {

  setTimeout( () => {
    response.send([
      {
        exam_name: 'Web应用项目开发',
        exam_time: '6月20日（周四）下午',
        exam_address: 'b301',
        exam_invigilator: '符老师、曾老师、邹老师、',
        exam_class: '物联网171、172、173'
      }, 
      {
        exam_name: 'Web应用项目开发',
        exam_time: '6月20日（周四）下午',
        exam_address: 'b401',
        exam_invigilator: '王老师、李老师、赵老师',
        exam_class: '计算机171、172、173'
      }, 
      { 
        exam_name: '高等数学',
        exam_time: '6月22日（周六）下午',
        exam_address: '702',
        exam_invigilator: '周老师、郑老师、林老师',
        exam_class: '网络171、172、173'
      }, 
      { 
        exam_name: '高等数学',
        exam_time: '6月22日（周六）下午',
        exam_address: '703',
        exam_invigilator: '符老师、曾老师、邹老师',
        exam_class: '物联网171、172、173'
      }, 
      { 
        exam_name: '高等数学',
        exam_time: '6月22日（周六）下午',
        exam_address: '704',
        exam_invigilator: '王老师、李老师、赵老师',
        exam_class: '计算机171、172、173'
      }, 
      {
        exam_name: '数据库原理及应用',
        exam_time: '6月23日（周日）下午',
        exam_address: '402',
        exam_invigilator: '周老师、郑老师、林老师',
        exam_class: '物联网171、172、173'
      },
      {
        exam_name: '计算机网络',
        exam_time: '6月24日（周一）上午',
        exam_address: '301',
        exam_invigilator: '王老师、李老师、赵老师',
        exam_class: '物联网171、172、173'
      }, 
      {
        exam_name: '计算机网络',
        exam_time: '6月24日（周一）上午',
        exam_address: '302',
        exam_invigilator: '符老师、曾老师、邹老师',
        exam_class: '网络171、172、173'
      }, 
      {
        exam_name: '计算机网络',
        exam_time: '6月24日（周一）上午',
        exam_address: '304',
        exam_invigilator: '周老师、郑老师、林老师',
        exam_class: '计算机171、172、173'
      }, 
      {
        exam_name: '数字逻辑',
        exam_time: '6月26日（周三）下午',
        exam_address: '601',
        exam_invigilator: '周老师、郑老师、林老师',
        exam_class:  '计算机171、172、173'
      }, 
      {
        exam_name: '数字逻辑',
        exam_time: '6月26日（周三）下午',
        exam_address: '603',
        exam_invigilator: '符老师、曾老师、邹老师',
        exam_class:  '网络171、172、173'
      },
      ])
  },1000+Math.random()*2000)

})

//原始成绩
app.get("/bigone-one_primitive", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
    ]);
  }, 300);
});
app.get("/bigone-two_primitive", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
    ]);
  }, 300);
});
app.get("/bigtwo-one_primitive", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
    ]);
  }, 300);
});
app.get("/bigtwo-two_primitive", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
    ]);
  }, 300);
});
app.get("/bigthree-one_primitive", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
    ]);
  }, 300);
});
app.get("/bigthree-two_primitive", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
    ]);
  }, 300);
});
app.get("/bigfour-one_primitive", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
    ]);
  }, 300);
});
app.get("/bigfour-two_primitive", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_usually: "97.00",
        gra_mExam: "",
        gra_eExam: "87.00",
        gra_skill: "",
        gra_comprehensive: "90.00",
        gra_minor: "主修",
        gra_remarks: "",
      },
    ]);
  }, 300);
});

//有效成绩
app.get("/bigone-one_valid", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
    ]);
  }, 300);
});
app.get("/bigone-two_valid", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
    ]);
  }, 300);
});
app.get("/bigtwo-one_valid", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
    ]);
  }, 300);
});
app.get("/bigtwo-two_valid", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
    ]);
  }, 300);
});
app.get("/bigthree-one_valid", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
    ]);
  }, 300);
});
app.get("/bigthree-two_valid", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
    ]);
  }, 300);
});
app.get("/bigfour-one_valid", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
    ]);
  }, 300);
});
app.get("/bigfour-two_valid", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
      {
        id: "1",
        gra_name: "[110841]高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",
        gra_grades: "90.00",
        gra_getCredits: "4.0",
        gra_gradePoint: "4.0",
        gra_creditPoint: "16.00",
        gra_remarks: "",
      },
    ]);
  }, 300);
});

//成绩分布
//表格
app.get("/tab", (request, response) => {
  setTimeout(() => {
    response.send([
      {
        gra_schoolYearSemester: "2017-2018学年第一学期",
        gra_name: "高等数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",

        gra_excellent: "√",
        gra_well: "",
        gra_medium: "",
        gra_pass: "",
        gra_failed: "",

        gra_grades: "90.00",
      },
      {
        gra_schoolYearSemester: "2017-2018学年第一学期",
        gra_name: "计算机网络",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",

        gra_excellent: "",
        gra_well: "√",
        gra_medium: "",
        gra_pass: "",
        gra_failed: "",

        gra_grades: "84.00",
      },
      {
        gra_schoolYearSemester: "2017-2018学年第一学期",
        gra_name: "数据库原理及应用",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",

        gra_excellent: "",
        gra_well: "",
        gra_medium: "√",
        gra_pass: "",
        gra_failed: "",

        gra_grades: "78.00",
      },
      {
        gra_schoolYearSemester: "2017-2018学年第一学期",
        gra_name: "c语言程序设计",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",

        gra_excellent: "√",
        gra_well: "",
        gra_medium: "",
        gra_pass: "",
        gra_failed: "",

        gra_grades: "94.00",
      },
      {
        gra_schoolYearSemester: "2017-2018学年第一学期",
        gra_name: "大学英语",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",

        gra_excellent: "",
        gra_well: "",
        gra_medium: "",
        gra_pass: "",
        gra_failed: "√",

        gra_grades: "58.00",
      },
      {
        gra_schoolYearSemester: "2017-2018学年第一学期",
        gra_name: "面对对象程序设计",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",

        gra_excellent: "",
        gra_well: "√",
        gra_medium: "",
        gra_pass: "",
        gra_failed: "",

        gra_grades: "85.00",
      },
      {
        gra_schoolYearSemester: "2017-2018学年第一学期",
        gra_name: "数字逻辑",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",

        gra_excellent: "",
        gra_well: "√",
        gra_medium: "",
        gra_pass: "",
        gra_failed: "",

        gra_grades: "82.00",
      },
      {
        gra_schoolYearSemester: "2017-2018学年第一学期",
        gra_name: "计算机组成原理",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",

        gra_excellent: "",
        gra_well: "√",
        gra_medium: "",
        gra_pass: "",
        gra_failed: "",

        gra_grades: "82.00",
      },
      {
        gra_schoolYearSemester: "2017-2018学年第一学期",
        gra_name: "算法分析与设计",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",

        gra_excellent: "",
        gra_well: "",
        gra_medium: "√",
        gra_pass: "",
        gra_failed: "",

        gra_grades: "74.00",
      },
      {
        gra_schoolYearSemester: "2017-2018学年第一学期",
        gra_name: "工程数学",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",

        gra_excellent: "",
        gra_well: "",
        gra_medium: "",
        gra_pass: "√",
        gra_failed: "",

        gra_grades: "66.00",
      },
      {
        gra_schoolYearSemester: "2017-2018学年第一学期",
        gra_name: "大学物理",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",

        gra_excellent: "",
        gra_well: "",
        gra_medium: "",
        gra_pass: "√",
        gra_failed: "",

        gra_grades: "68.00",
      },
      {
        gra_schoolYearSemester: "2017-2018学年第一学期",
        gra_name: "电路与电子技术",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",

        gra_excellent: "",
        gra_well: "",
        gra_medium: "√",
        gra_pass: "",
        gra_failed: "",

        gra_grades: "77.00",
      },
      {
        gra_schoolYearSemester: "2017-2018学年第一学期",
        gra_name: "Linux操作系统",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",

        gra_excellent: "",
        gra_well: "",
        gra_medium: "",
        gra_pass: "√",
        gra_failed: "",

        gra_grades: "66.00",
      },
      {
        gra_schoolYearSemester: "2017-2018学年第一学期",
        gra_name: "Web应用项目开发",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",

        gra_excellent: "",
        gra_well: "",
        gra_medium: "√",
        gra_pass: "",
        gra_failed: "",

        gra_grades: "75.00",
      },
      {
        gra_schoolYearSemester: "2017-2018学年第一学期",
        gra_name: "无线传感网RFID技术",
        gra_credit: "4.0",
        gra_category: "学科基础课/必修课",
        gra_assessmentMethod: "考试",
        gra_nature: "初修",

        gra_excellent: "",
        gra_well: "√",
        gra_medium: "",
        gra_pass: "",
        gra_failed: "",

        gra_grades: "82.00",
      },
    ]);
  }, 300);
});

app.listen(4000, () => {
  console.log("server app start on port 4000");
});
