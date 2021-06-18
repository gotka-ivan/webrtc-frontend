<template>
  <div
    v-if="showMessage"
    id="messageModal"
    v-overflowYHidden
    class="modal modalEKP serviceModal in"
    style="display:block"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal_content modal_info">
      <div class="modal_body">
        <div
          v-if="type == 'error'"
          class="attention-sign"
        >
          <i class="modal_error zmdi zmdi-alert-triangle middle-vert-align" />
        </div>
        <div
          v-else-if="(type = 'info')"
          class="attention-sign"
          style="color: #518DC7;"
        >
          <i class="zmdi zmdi-info middle-vert-align" />
        </div>

        <div class="message">
          <span>{{ message }}</span>
        </div>
        <div class="clear" />
      </div>
      <div class="modal_footer">
        <button
          type="button"
          :class="['btn button btn-ok', type]"
          @click="close()"
        >
          ОК
        </button>
        <div class="clear" />
      </div>
    </div>
  </div>
</template>

<script>
export const messageModal = {
  open: function(text, type = 'info') {
    this.text = text || 'Сервис временно недоступен'
    this.type = type
    this.show = true
  },
  close: function() {
    this.text = ''
    this.type = ''
    this.show = false
  },
  type: 'info',
  text: '',
  show: false
}

export default {
  name: 'CommonMessageModal',
  props: {
    //error, info
    type: { default: 'error', type: String },
    message: { default: 'Сервис находится в разработке', type: String },
    showMessage: { default: false, type: Boolean }
  },
  methods: {
    close: function() {
      this.$emit('messageClose')
    }
  }
}
</script>

<style scoped>
.btn.button.btn-ok:focus {
  outline: 2px solid;
  outline-offset: 0px;
  outline-color: #b5b8c8;
}

.message {
  width: 100%;
  margin: 15px 18px 6px 0;
  font-size: 18px;
  font-weight: 100;
  text-align: center;
}

.message span {
  margin-top: 50%;
  white-space: pre-line;
}

/*===================*/

.modal {
  letter-spacing: 0.8px;
  z-index: 99999;
}

.modal_body {
  padding: 10px 20px 0 20px;
  font-size: 1.6em;
}

.modal_content {
  margin: 17% auto !important;
}

.request_number {
  font-size: 1.2em;
  font-weight: 600;
}

button.error {
  width: 215px;
  min-width: 150px;
  margin: 0 auto;
  padding: 10px !important;
}

button.info {
  font-size: 2.1em;
  border: none;
  background-color: #518dc7;
  color: white !important;
}

button.info:focus {
  outline: 2px solid;
  outline-offset: 0px;
  outline-color: #b5b8c8;
}

button.info:hover {
  background-color: #2e6fae !important;
}

/* mobile */
@media (min-width: 320px) and (max-width: 767px) {
  #messageModal .modal_content {
    width: 100vw;
  }
  #messageModal .zmdi-alert-triangle {
    width: 100%;
    font-size: 50px;
  }
}
</style>
