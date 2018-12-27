<style lang="less" src="./wallet.less" scoped></style>


<template>
  <div id="wallet">
    <div class="user">
      <div class="avatar">
        <img src="" alt="">
      </div>
      <div class="nickname">陪你吹吹风</div>
      <!-- 余额 -->
      <div class="balance">钱包余额：<span>2.25元</span></div>
      <!-- 提现 -->
      <div class="withdraw-btn">提现</div>
      <div class="total">
        <div class="con">
          已累计提现：<span>74.5元</span>
        </div>
      </div>
    </div>
    <!-- 明细 -->
    <div class="detail">
      <div class="head van-hairline--bottom">收支明细如下</div>
     <div class="detail-list">
       <div class="detail-item van-hairline--bottom">
         <div class="desc">
           <div class="name">京东新用户注册</div>
           <div class="time">2018-12-20 18:26</div>
         </div>
         <div class="money">+2.25元</div>
       </div>
       <div class="detail-item van-hairline--bottom">
         <div class="desc">
           <div class="name">京东新用户注册</div>
           <div class="time">2018-12-20 18:26</div>
         </div>
         <div class="money">+2.25元</div>
       </div>
     </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'wallet page'
      }
    }
  }
</script>