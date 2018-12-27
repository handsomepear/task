import request from '../util/_request'

// 获取个人钱包信息
export function getCashAccountInfo() {
  return request({
    url: '/api/getCashAccountInfo'
  })
}

// 获取任务列表
export function makeMoneyTaskList(data) {
  return request({
    url: 'api/makeMoneyTaskList',
    data
  })
}

// 审核完成列表
export function getAuditCompleteList() {
  return request({
    url: '/api/getAuditCompleteList'
  })
}

// 失效列表
export function getFailureList() {
  return request({
    url: '/api/getFailureList'
  })
}

// 审核中列表
export function getInAuditList() {
  return request({
    url: '/api/getInAuditList'
  })
}

// 待提交列表
export function getNoCommitList() {
  return request({
    url: '/api/getNoCommitList'
  })
}


// 提交任务
export function commitTask({ images, taskId }) {
  return request({
    url: '/api/commitTask',
    data: { images, taskId }
  })
}

// 任务详情
export function makeMoneyTaskDetail(taskId) {
  return request({
    url: '/api/makeMoneyTaskDetail',
    data: { taskId }
  })
}

// 领取任务
export function receiveTask(taskId) {
  return request({
    url: '/api/receiveTask',
    data: { taskId }
  })
}

