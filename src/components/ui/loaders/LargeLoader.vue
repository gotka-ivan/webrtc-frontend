<template>
  <div
    v-if="show"
    id="loadModal"
    class="modal modalEKP vertical in"
    data-backdrop="static"
    aria-hidden="false"
    style="display:block"
  >
    <div class="modal_content modal_info">
      <div class="modal_body text-center">
        <p class="load_title">
          Операция выполняется
        </p>
        <div class="load_img">
          <div class="load_bar" />
        </div>
        <p class="load_message">
          Пожалуйста, подождите...
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonLargeLoader',
  props: { show: { default: false, type: Boolean } },
  methods: {
    close: function() {
      this.$emit('loadClose')
    }
  }
}
</script>

<style scoped>
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
#loadModal {
  z-index: 10100;
}

.modalEKP .modal_info {
  width: 460px;
}

.modalEKP .modal_body {
  min-height: 170px;
}

.load_title {
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
}

.load_message {
  font-size: 18px;
}

.load_img {
  position: relative;
  width: 100px;
  height: 65px;
  margin: 20px auto 30px auto;
  border: 3px solid #b5cbfb;
  border-radius: 7px;
}

.load_bar {
  position: absolute;
  top: 12px;
  left: -3px;
  width: 100px;
  height: 17px;
  background-color: #b5cbfb;
  overflow: hidden;
}

.load_bar::after {
  content: '';
  position: absolute;
  width: 100px;
  height: 17px;
  left: 0;
  background-color: #0d4ce4;
  -webkit-animation: infiniteLoad 4.23s infinite linear;
  animation: infiniteLoad 4.23s infinite linear;
}

/* mobile */

@media (min-width: 320px) and (max-width: 767px) {
  #loadModal .modal_content {
    width: 100vw;
  }
}
</style>
