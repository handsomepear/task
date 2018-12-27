<style lang="less" src="./detail.less" scoped></style>

<template>
  <div id="detail">
    <TaskInfo />
    <div class="content">
      <header>步骤说明：</header>

    </div>
    <div class="draw-btn" v-if="!hasdraw" @click="drawTask">领取任务</div>
    <div class="draw-btn hasdraw" v-else>已领取，去我的任务 >></div>
  </div>
</template>


<script>
  import TaskInfo from '../../components/TaskInfo/TaskInfo'
  import { makeMoneyTaskDetail } from '../../api/api'

  export default {
    components: { TaskInfo },
    data() {
      return {
        name: 'detail',
        hasdraw: false,
        taskId: 0
      }
    },
    activated() {
      this.taskId = this.$route.query.taskId
      makeMoneyTaskDetail(this.taskId).then(({ data }) => {
        console.log(data)
      })
    },
    methods: {
      drawTask() {
        this.hasdraw = true
      },

    }
  }
</script>