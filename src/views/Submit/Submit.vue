<style lang="less" src="./submit.less" scoped></style>


<template>
  <div id="submit">
    <TaskInfo />
    <!-- 上传截图 -->
    <div class="task-printscreen">
      <div class="content">
        <div class="head">上传截图（示例如右图）：</div>
        <ul class="printscreen-list">
          <div class="item example">
            <div class="img">
              <img src="" />
            </div>
            <p>点击查看示例</p>
          </div>
          <li class="item">
            <div class="img"></div>
          </li>
          <div class="item add-btn">
            <div class="img">
              <img src="@/assets/imgs/add.png" />
              <span>添加照片</span>
            </div>
          </div>
        </ul>
      </div>
    </div>
    <!-- 提交按钮 -->
    <div class="submit-btn" @click="commitTask">提交</div>
  </div>
</template>


<script>

  import TaskInfo from '../../components/TaskInfo/TaskInfo'
  import { commitTask } from '../../api/api'
  import wx from '../../util/wxToolkit'

  export default {
    components: { TaskInfo },
    data() {
      return {
        name: 'submit',
        taskId: 0,
        taskPrintscreen: null
      }
    },
    mounted() {
      console.log(wx)
      this.taskId = this.$route.query.taskId
    },
    methods: {
      // 提交任务
      commitTask() {
        if (!this.taskPrintscreen) {
          // 去上传图片
        }
        commitTask(this.taskId).then(({ data }) => {
          console.log(data)
        })
      },
      // 上传图片
      uploadTaskPrintscreen() {
        wx.chooseImage({
          count: 1, // 默认9,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: res => {
            let localIds = res.localIds
            console.log(localIds)
          }
        });
      }
    }
  }
</script>