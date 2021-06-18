<template>
  <div
    v-show="show"
    class="wrap"
  >
    <div class="modal">
      <div class="body">
        <p class="title">
          Операция выполняется
        </p>
        <div class="img">
          <div class="bar" />
        </div>
        <p class="message">
          Пожалуйста, подождите...
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    show: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    close: function() {
      this.$emit('loadClose')
    }
  }
}
</script>

<style lang="less" scoped>
@import '~common/assets/less/_variables.less';
@-webkit-keyframes infiniteLoad {
  0% {
    margin-left: -100px;
  }
  100% {
    margin-left: 100px;
  }
}

@keyframes infiniteLoad {
  0% {
    margin-left: -100px;
  }
  100% {
    margin-left: 100px;
  }
}
.wrap {
  z-index: 12000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(102, 102, 102, 0.85);
  .modal {
    display: block;
    text-align: center;
    width: 460px;
    position: absolute;
    left: 50%;
    top: 50%;
    bottom: initial;
    right: initial;
    transform: translate(-50%, -50%);
    padding: 20px;
    background: #ffffff;
    .body {
      min-height: 170px;
      .title {
        font-size: 18px;
        text-transform: uppercase;
        font-weight: bold;
      }
      .img {
        position: relative;
        width: 100px;
        height: 65px;
        margin: 20px auto 30px auto;
        border: 3px solid #b5cbfb;
        border-radius: 7px;
        .bar {
          position: absolute;
          top: 12px;
          left: -3px;
          width: 100px;
          height: 17px;
          background-color: #b5cbfb;
          overflow: hidden;
          &::after {
            content: '';
            position: absolute;
            width: 100px;
            height: 17px;
            left: 0;
            background-color: #0d4ce4;
            -webkit-animation: infiniteLoad 4.23s infinite linear;
            animation: infiniteLoad 4.23s infinite linear;
          }
        }
      }
      .message {
        font-size: 18px;
      }
    }
  }
}

@media (max-width: 767px) {
  .wrap .modal {
    width: 100vw;
  }
}
</style>

<style lang="less" scoped>
.tw-special-mode {
  .wrap {
    font-weight: 600;
    .modal .body .img {
      border: 3px solid #000000;
      .bar {
        background-color: #929292;
        &::after {
          background-color: #000000;
        }
      }
    }
    .footer .button {
      background: #000000;
    }
  }
}
</style>
