<style lang="less" src="./wallet.less" scoped></style>


<template>
  <div id="wallet">
    <div class="user">
      <div class="avatar">
        <img :src="userInfo.avatar" alt="">
      </div>
      <div class="nickname">{{userInfo.nickname}}</div>
      <!-- 余额 -->
      <div class="balance">钱包余额：<span>{{userWalletInfo.totalMoney}}元</span></div>
      <!-- 提现 -->
      <div class="withdraw-btn" @click="withdraw">提现</div>
      <div class="total">
        <div class="con">
          已累计提现：<span>{{userWalletInfo.totalWithdraw}}元</span>
        </div>
      </div>
    </div>
    <!-- 明细 -->
    <div class="detail">
      <div class="head van-hairline--bottom">收支明细如下</div>
      <van-list class="detail-list" v-model="loading" :finished="finished" @load="getUerWalletDetailList" :immediate-check="false">
        <div v-for="(item, index) in userWalletList" :key="index" class="detail-item van-hairline--bottom">
          <div class="desc">
            <div class="name">{{item.name}}</div>
            <div class="time">{{item.time}}</div>
          </div>
          <div class="money">+{{item.money}}元</div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
  import { getCashAccountInfo, getCashDetailList } from '@/api/api'

  export default {
    data() {
      return {
        userInfo: {},
        loading: false,
        finished: false,
        pageNum: 1,
        pageSize: 10,
        userWalletInfo: {
          totalMoney: 0, // 钱包余额
          totalWithdraw: 0 // 累计提现
        }, // 用户钱包信息
        userWalletList: [] // 用户钱包收支明细
      }
    },
    mounted() {
      this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
      this.getUserWalletInfo()
      this.getUerWalletDetailList()
    },
    methods: {
      // 获取钱包信息
      getUserWalletInfo() {
        const that = this
        getCashAccountInfo().then(({ data }) => {
          that.userWalletInfo.totalMoney = data.totalMoney
          that.userWalletInfo.totalWithdraw = data.totalWithdraw
        })
      },
      // 获取钱包列表
      getUerWalletDetailList() {
        const that = this
        getCashDetailList({
          pageNum: that.pageNum,
          pageSize: that.pageSize
        }).then(({ data }) => {
          that.userWalletList.push.apply(that.userWalletList, data.cashDetailList)
          if (data.cashDetailList.length < that.pageSize) {
            that.finished = true
          } else {
            ++that.pageNum
          }
        })
      },
      withdraw(){

      },
    }

  }
</script>