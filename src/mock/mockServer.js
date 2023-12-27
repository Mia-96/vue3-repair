import Mock from 'mockjs'
import repairList from './repairList.json'
import repairDetail from './repairDetail.json'

Mock.mock('/api/getRepairList',{
    code: "200",
    data:repairList
})


Mock.mock('/api/getRepairDetail',{
    code: "200",
    data:repairDetail
})