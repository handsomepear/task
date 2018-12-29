import request from '../util/_request'


// 获取openId
export function makeMoneyGetUserInfo(code) {
  return request({
    url: '/api/makeMoneyGetUserInfo',
    data: { code }
  })
}

// 获取个人钱包信息
export function getCashAccountInfo() {
  return request({
    url: '/api/getCashAccountInfo'
  })
}

// 获取钱包明细列表
export function getCashDetailList({ pageNum, pageSize }) {
  return request({
    url: '/api/getCashDetailList',
    data: { pageNum, pageSize }
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
export function getAuditCompleteList({ pageNum, pageSize }) {
  return request({
    url: '/api/getAuditCompleteList',
    data: { pageNum, pageSize }
  })
}

// 失效列表
export function getFailureList({ pageNum, pageSize }) {
  return request({
    url: '/api/getFailureList',
    data: { pageNum, pageSize }
  })
}

// 审核中列表
export function getInAuditList({ pageNum, pageSize }) {
  return request({
    url: '/api/getInAuditList',
    data: { pageNum, pageSize }
  })
}

// 待提交列表
export function getNoCommitList({ pageNum, pageSize }) {
  return request({
    url: '/api/getNoCommitList',
    data: { pageNum, pageSize }
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

