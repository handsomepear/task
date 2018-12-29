<style lang="less" src="./detail.less" scoped></style>

<template>
  <div id="detail">
    <TaskInfo :task-detail="taskDetail" />
    <div class="content">
      <header>步骤说明：</header>
      <div class="rich-con" v-html="taskDetail.instruction"></div>
      <header class="example-header" v-if="taskDetail.exampleImages">必看！上传截图示例（共{{taskDetail.exampleImages.length}}张）</header>
      <div class="example-img" v-for="(imgItem, imgIndex) in taskDetail.exampleImages" :key="imgIndex">
        <img :src="imgItem" alt="">
      </div>
    </div>
    <div class="draw-btn" v-if="!hasdraw" @click="drawTask">领取任务</div>
    <div class="draw-btn hasdraw" v-else @click="toMineTask">已领取，去我的任务 >></div>
  </div>
</template>


<script>
  import TaskInfo from '../../components/TaskInfo/TaskInfo'
  import { makeMoneyTaskDetail, receiveTask } from '@/api/api'

  export default {
    components: { TaskInfo },
    data() {
      return {
        name: 'detail',
        hasdraw: false, // 是否已领取任务
        taskId: 0,
        receiveCount: 0,
        taskDetail: {} // 任务详情
      }
    },
    activated() {
      const that = this
      this.taskId = this.$route.query.taskId
      // 获取任务详情
      makeMoneyTaskDetail(that.taskId).then(({ data }) => {
        that.taskDetail = data.task
        that.receiveCount = data.receiveCount // 领取次数
        that.hasdraw = that.receiveCount > 0
      })
    },
    methods: {
      // 领取任务
      drawTask() {
        const that = this
        receiveTask(that.taskId).then(() => {
          that.hasdraw = true
        })
      },
      toMineTask() {
        this.$router.push({ name: 'mine' })
      }
    }
  }
</script>