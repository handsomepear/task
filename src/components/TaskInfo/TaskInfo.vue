<style lang="less" src="./taskInfo.less" scoped></style>

<template>
  <div class="task-info">
    <div class="content">
      <div class="title">{{taskDetail.name}}</div>
      <div class="money">{{taskDetail.cashCount}}元</div>
      <div class="tips">截止日期：<span>{{taskDetail.endTime}}</span></div>
      <div class="tips">报名条件：<span>{{taskDetail.signUpCondition}}</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      taskDetail: Object
    }
  }
</script>