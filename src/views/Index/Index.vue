<style lang="less" src="./index.less" scoped></style>


<template>
  <div id="index">
    <!-- 头部 -->
    <div class="top">
      <button class="entry mine" @click="navigateTo('mine')">我的任务</button>
      <button class="entry wallet" @click="navigateTo('wallet')">我的钱包</button>
    </div>
    <!-- 签到任务 -->
    <div class="sign-task" v-if="signList.length">
      <div class="title van-hairline--bottom">签到任务</div>
      <ul class="sign-list">
        <li v-for="(signItem, signIndex) in signList" :key="signItem.id" :class="signIndex % 2 === 1 ? '' : 'van-hairline--right'"
            class="sign-item van-hairline--bottom" @click="viewTaskDetail(signItem.taskId)">
          <div class="icon">
            <img :src="signItem.coverImage" />
          </div>
          <div class="desc">
            <p class="name">{{signItem.name}}</p>
            <p class="money">{{signItem.cashCount}}元</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="hot-task">
      <div class="title van-hairline--bottom">热门任务</div>
      <van-list v-model="loading" :finished="finished" @load="loadMoreHotList(0)" :immediate-check="false">
        <div v-for="hotItem in hotList" :key="hotItem.taskId" class="hot-item van-hairline--bottom" @click="viewTaskDetail(hotItem.taskId)">
          <div class="desc">
            <div class="icon">
              <!--<img src="" />-->
            </div>
            <p class="name">京东新用户注册</p>
          </div>
          <div class="btn">赚2.25元</div>
        </div>
      </van-list>
      <!--<ul class="hot-list">
        <li class="hot-item van-hairline&#45;&#45;bottom">
          <div class="desc">
            <div class="icon">
              &lt;!&ndash;<img src="" />&ndash;&gt;
            </div>
            <p class="name">京东新用户注册</p>
          </div>
          <div class="btn">赚2.25元</div>
        </li>
        <li class="hot-item van-hairline&#45;&#45;bottom">
          <div class="desc">
            <div class="icon">
              &lt;!&ndash;<img src="" />&ndash;&gt;
            </div>
            <p class="name">京东新用户注册</p>
          </div>
          <div class="btn">赚2.25元</div>
        </li>
        <li class="hot-item van-hairline&#45;&#45;bottom">
          <div class="desc">
            <div class="icon">
              &lt;!&ndash;<img src="" />&ndash;&gt;
            </div>
            <p class="name">京东新用户注册</p>
          </div>
          <div class="btn">赚2.25元</div>
        </li>
      </ul>-->
    </div>
  </div>
</template>


<script>
  import Vue from 'vue'
  import { List } from 'vant'
  import { makeMoneyTaskList } from '@/api/api'

  Vue.use(List)
  export default {
    data() {
      return {
        name: 'index',
        loading: false,
        finished: false,
        pageNum: 1,
        pageSize: 10,
        signList: [], // 签到任务
        hotList: []   // 热门任务
      }
    },
    mounted() {
      this.getTaskList(0)
      this.getTaskList(1)
    },
    methods: {
      navigateTo(name, query) {
        this.$router.push({ name, query })
      },
      /**
       * 获取热门列表
       * @param type 0 热门任务 1 每日任务
       */
      getTaskList(type) {
        const that = this
        makeMoneyTaskList({
          pageNum: that.pageNum,
          pageSize: that.pageSize,
          type
        }).then(({ data }) => {
          if (data.bizStatus === 0) {
            that.loading = false
            if (data.taskList < 10) {
              that.finished = true // 没有更多了
            }
            if (type === 1) {
              that.signList.push.apply(that.signList, data.taskList)
            }
            if (type === 0) {
              that.hotList.push.apply(that.signList, data.taskList)
            }
          }

        })
      },
      loadMoreHotList() {
        if (!this.data.finished) {
          ++this.pageNum
          this.getTaskList(0)
        }
      },
      // 查看任务
      viewTaskDetail(taskId) {
        this.$router.push({ name: 'detail', query: { taskId } })
      }
    }
  }
</script>