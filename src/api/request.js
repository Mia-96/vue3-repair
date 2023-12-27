import http from './index'

export const getRepairList = () => {
    return http.get('/getRepairList')
}


export const getRepairDetail = () => {
    return http.get('/getRepairDetail')
}
