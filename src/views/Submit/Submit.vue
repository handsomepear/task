<style lang="less" src="./submit.less" scoped></style>


<template>
  <div id="submit">
    <TaskInfo :task-detail="taskDetail"/>
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
          <li class="item" v-for="(proofItem, proofIndex) in  proofImgList" :key="proofIndex">
            <div class="img">
              <img :src="proofItem.url" />
            </div>
          </li>
          <div class="item add-btn">
            <div class="img" @click="uploadImg">
              <img src="@/assets/imgs/add.png" />
              <span>添加照片</span>
            </div>
            <input type="file" id="upload-btn" @change="uploadTaskPrintscreen" accept="image/png,image/jpg" style="display: none">
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
  import { commitTask, makeMoneyTaskDetail } from '@/api/api'
  import fileUpload from '@/util/_qiniu'

  export default {
    components: { TaskInfo },
    data() {
      return {
        name: 'submit',
        taskId: 0,
        taskDetail: {},
        taskPrintscreen: null,
        proofImgList: []
      }
    },
    mounted() {
      const that = this
      this.taskId = this.$route.query.taskId
      // 获取详情信息
      makeMoneyTaskDetail(this.taskId).then(({ data }) => {
        that.taskDetail = data.task
      })
    },
    methods: {
      // 提交任务
      commitTask() {
        const that = this
        if (!this.taskPrintscreen) {
          // 去上传图片
        }
        commitTask({
          images: that.proofImgList,
          taskId: that.taskId
        }).then(({ data }) => {
          console.log(data)
        })
      },
      uploadImg() {
        document.getElementById('upload-btn').click()
      },
      // 上传图片
      uploadTaskPrintscreen(e) {
        let that = this
        let file = e.target.files[0]
        fileUpload(this, file, function (res) {
          that.proofImgList.push({
            width: 0,
            height: 0,
            url: res
          })
        })
      }
    }
  }
</script>