<style lang="less" src="./mine.less" scoped></style>

<template>
  <div id="mine">
    <van-tabs v-model="activeTabIndex" animated swipeable @change="toggleTaskList">
      <van-tab title="待提交">
        <div class="stay-submit">
          <div v-for="stayItem in stayList" :key="stayItem.taskId" class="task-item">
            <div class="info">
              <div class="icon">
                <img :src="stayItem.coverImage" alt="">
              </div>
              <p class="name">{{stayItem.name}}</p>
            </div>
            <div class="options">
              <div class="btn detail-btn" @click="viewTaskDetail(stayItem.taskId)">查看详情</div>
              <div class="btn submit-btn" @click="toCommitTask(stayItem.taskId)">去提交</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="审核中">
        <div class="checking">
          <div v-for="checkingItem in checkingList" :key="checkingItem.taskId" class="task-item">
            <div class="info van-hairline--bottom">
              <div class="icon">
                <img :src="checkingItem.coverImage" alt="">
              </div>
              <p class="name">{{checkingItem.name}}</p>
            </div>
            <div class="time">
              {{checkingItem.time}} 提交
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="审核完成">
        <div class="checked">
          <div v-for="checkedItem in checkedList" :key="checkedItem.taskId" class="task-item">
            <div class="info van-hairline--bottom">
              <div class="icon">
                <img :src="checkedItem.coverImage" alt="">
              </div>
              <p class="name">{{checkedItem.name}}</p>
            </div>
            <div class="options" v-if="checkedItem.auditResult === 2">
              <div class="btn appeal-btn" @click="taskAppeal(checkedItem.taskId)">申诉</div>
              <p>未通过</p>
            </div>
            <div class="options" v-if="checkedItem.auditResult === 1">
              <p>通过</p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="已失效">
        <div class="losed">
          <div class="head-tips">啊哦～任务失效了，要注意任务有效期哦～</div>
          <div v-for="losedItem in losedList" :key="losedItem.taskId" class="task-item">
            <div class="info van-hairline--bottom">
              <div class="icon">
                <img :src="losedItem.coverImage" alt="">
              </div>
              <p class="name">{{losedItem.name}}</p>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import { getNoCommitList, getAuditCompleteList, getFailureList, getInAuditList } from '../../api/api'

  export default {
    data() {
      return {
        name: 'mine',
        activeTabIndex: 0,
        stayList: [], // 待提交列表
        checkingList: [], // 审核中列表
        checkedList: [], // 审核完成列表
        losedList: [] // 失效列表
      }
    },
    mounted() {
      this.getAllTaskList(0)
    },
    methods: {
      // tab切换触发
      toggleTaskList(index) {
        this.getAllTaskList(index)
      },
      getAllTaskList(index) {
        const that = this
        switch (index) {
          case 0:
            getNoCommitList().then(({ data }) => {
              that.stayList = data.taskInfoList
            })
            break;
          case 1:
            getInAuditList().then(({ data }) => {
              that.checkingList = data.taskInfoList
            })
            break
          case 2:
            getAuditCompleteList().then(({ data }) => {
              that.checkedList = data.taskInfoList
            })
            break
          case 3:
            getFailureList().then(({ data }) => {
              that.losedList = data.taskInfoList
            })
            break;
          default:
            break
        }
      },
      // 查看任务详情
      viewTaskDetail(taskId) {
        this.$router.push({ name: 'detail', query: { taskId } })
      },
      // 去提交任务
      toCommitTask(taskId) {
        this.$router.push({ name: 'submit', query: { taskId } })
      },
      // 申诉
      taskAppeal(taskId){
        console.log(taskId)
      }
    }
  }
</script>