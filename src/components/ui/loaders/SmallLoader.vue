<template>
  <div class="lds-ellipsis">
    <div />
    <div />
    <div />
    <div />
  </div>
</template>
<style lang="less" scoped>
@import '~common/assets/less/_variables.less';

.lds-ellipsis {
  display: flex;
  position: relative;
  width: 128px;
  height: 98px;
}
.lds-ellipsis div {
  position: absolute;
  top: 36px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: @blue;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 12px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 12px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 52px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 90px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(38px, 0);
  }
}
</style>
