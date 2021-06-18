<template>
  <div>
    <div
      v-if="content"
      id="dialogModal"
      class="modal modalEKP vertical in"
      data-backdrop="static"
      style="display:block"
    >
      <div class="modal_content modal-lg">
        <div class="modal_header">
          <div
            class="closeEKP"
            @click="$emit('close')"
          >
            <i class="zmdi zmdi-close" />
          </div>
        </div>
        <div class="modal_body">
          <div
            v-if="content.symbol"
            class="symbol"
          >
            {{ content.symbol }}
          </div>
          <div
            v-if="content.text"
            class="container-text"
            v-html="content.text"
          />
          <div
            v-if="content.leftBtn"
            class="container-buttons"
          >
            <button
              v-if="content.leftBtn.text"
              class="button btn whiteBtn transparent middle-blue"
              @click.once="$emit('left')"
            >
              {{ content.leftBtn.text }}
            </button>
            <button
              v-if="content.rightBtn.text"
              class="button btn blueBtn middle-blue"
              @click.once="$emit('right')"
            >
              {{ content.rightBtn.text }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonPlainDialogModal',
  props: {
    content: {
      type: [Object, Array],
      default: () => {}
    }
  }
}
</script>

<style lang="less" scoped>
@import '~common/assets/less/_variables.less';

.modal_header {
  font-size: 1.8em;
  font-weight: bold;
}

.modal_body {
  font-size: 1.6em;
  .button.btn {
    min-height: 40px;
    padding: 5px 15px;
  }
}
.symbol {
  color: white;
  background-color: @blue;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  align-items: center;
  border-radius: 50%;
  font-size: 90px;
  font-weight: 600;
  margin-bottom: 20px;
  cursor: default;
  user-select: none;
}
.container-text {
  margin-bottom: 40px;
  font-size: 18px;
}
.container-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
  .button {
    min-width: 180px;
  }

  * > {
    margin-right: 30px;
    &:last-of-type {
      margin-right: 0;
    }
  }
}
.blueBtn {
  background-color: @blue;
  color: white;
  height: 40px;
  padding: 5px;
}
.blueBtn:hover {
  background-color: darken(@blue, 5%);
}
.whiteBtn {
  background-color: white;
  color: #56595e;
  height: 40px;
  padding: 5px;
  border: 1px solid #b5b8c8;
}
@media (min-width: 320px) and (max-width: 767px) {
  .container-buttons {
    flex-direction: column;
    .button {
      min-width: 180px;
      width: 100%;
    }

    * > {
      margin-right: 0px;
      &:last-of-type {
        margin-top: 20px;
      }
    }
  }
}
</style>
