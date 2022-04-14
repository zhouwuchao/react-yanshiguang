let icons =  [
  {
    name: '住院医生站',
    path: require('../images/icons/01.png'),
    star: true
  },
  {
    name: '住院EMR',
    path: require('../images/icons/02.png'),
    star: true
  },
  {
    star: false,
    name: "护理EMR",
    path: require('../images/icons/03.png')
  },
  {
    star: true,
    name: "门诊医生站",
    path: require('../images/icons/04.png')
  },
  {
    star: false,
    name: "急诊护理",
    path: require('../images/icons/05.png')
  },
  {
    star: false,
    name: "急诊EMR",
    path: require('../images/icons/06.png')
  },
  {
    star: true,
    name: "BI决策分析",
    path: require('../images/icons/07.png')
  },
  {
    star: false,
    name: "院感系统",
    path: require('../images/icons/08.png')
  },
  {
    star: true,
    name: "住院医嘱",
    path: require('../images/icons/09.png')
  },
  {
    star: true,
    name: "门诊医嘱",
    path: require('../images/icons/10.png')
  },
  {
    star: false,
    name: "数据集成平台监控",
    path: require('../images/icons/11.png')
  },
  {
    star: false,
    name: "数据监控平台",
    path: require('../images/icons/12.png')
  },
  {
    star: true,
    name: "单病种上报",
    path: require('../images/icons/13.png')
  },
  {
    star: true,
    name: "患者360",
    path: require('../images/icons/14.png')
  },
  {
    star: false,
    name: "传染病系统",
    path: require('../images/icons/15.png')
  },
  {
    star: false,
    name: "物资领情",
    path: require('../images/icons/16.png')
  },
  {
    star: false,
    name: "影像系统",
    path: require('../images/icons/17.png')
  },
  {
    star: false,
    name: "检验系统",
    path: require('../images/icons/18.png')
  },
  {
    star: false,
    name: "OA系统",
    path: require('../images/icons/19.png')
  },
  {
    star: false,
    name: "手麻系统",
    path: require('../images/icons/20.png')
  },
  {
    star: false,
    name: "号源系统",
    path: require('../images/icons/21.png')
  },
  {
    star: false,
    name: "排班系统",
    path: require('../images/icons/22.png')
  },
  {
    star: false,
    name: "输血系统",
    path: require('../images/icons/23.png')
  },
  {
    star: false,
    name: "闭环管理系统",
    path: require('../images/icons/24.png')
  },
  {
    star: false,
    name: "ICU重症系统",
    path: require('../images/icons/25.png')
  },
  {
    star: false,
    name: "预约系统",
    path: require('../images/icons/26.png')
  },
  {
    star: false,
    name: "门诊EMR",
    path: require('../images/icons/27.png')
  },
  {
    star: true,
    name: "员工360",
    path: require('../images/icons/28.png')
  }
]

export default function(prevState={icons}, action) {
  const { type, data } = action
  switch(type) {
    case 'changeAllSystemApplication':
      return { icons: data }
    default:
      return prevState
  }
}