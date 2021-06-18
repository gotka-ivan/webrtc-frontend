<template>
  <div class="wrap">
    <div v-if="$slots.label" class="label-wrapper">
      <label :for="id">
        <slot name="label" />
        <span v-if="required" class="star">* &nbsp;</span>
      </label>
    </div>
    <div class="field">
      <div v-if="$slots.left" class="left-wrapper">
        <slot name="left" />
      </div>
      <input
        :id="id"
        v-model="valueModel"
        v-bind="$attrs"
        :type="type"
        :class="[
          classes,
          invalid && 'error',
          $slots.left && 'left-padding',
          ($slots.right || reset) && 'right-padding',
          $slots.right && reset && 'two-icons-padding',
        ]"
        v-on="{ ...$listeners, input: () => {} }"
      />
      <div v-if="$slots.right" class="right-wrapper">
        <slot name="right" />
      </div>
    </div>
    <div v-if="invalid" class="invalid-text">
      <slot name="invalid"> Проверьте правильность заполнения поля </slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TextInput',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    id: {
      type: [String, Number],
      default: 'text-input',
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    classes: {
      type: Array,
      default: (): [] => [],
    },
    reset: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    valueModel: {
      get(): string | number {
        return this.value
      },
      set(val: string | number): void {
        this.$emit('input', val)
      },
    },
  },
}
</script>

<style lang="less">
@import '../../../assets/less/__variables.less';
.wrap {
  width: 100%;
  height: 100%;
  .label-wrapper {
    padding-bottom: 12px;
    font-size: 14px;
    color: #3c3f45;
    label {
      display: flex;
      .star {
        color: red;
        padding-left: 4px;
      }
    }
  }
  .field {
    position: relative;
    .hide {
      display: none !important;
    }
    width: 100%;
    .left-wrapper {
      position: absolute;
      left: 8px;
      top: 25%;
      color: @light-gray;
    }
    .right-wrapper {
      position: absolute;
      right: 8px;
      top: 25%;
      color: @light-gray;
    }

    .close-container {
      position: absolute;
      right: 0;
      height: 100%;
      width: 35px;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      &.right {
        right: 30px;
      }
    }

    input {
      width: 100%;
      min-height: 48px;
      font-size: 16px;
      color: @dark-gray;
      padding: 5px 10px;
      background-color: #fff;
      border: 1px solid @light-gray;
      font-size: 14px;

      &[type='number'] {
        -moz-appearance: textfield;
      }

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      &.right-padding {
        padding-right: 35px;
      }

      &.left-padding {
        padding-left: 35px;
      }
      &.two-icons-padding {
        padding-right: 70px;
      }
      &:active,
      &:focus {
        outline: 2px solid;
        outline-offset: 0px;
        outline-color: #b5b8c8;
      }
      &.error {
        border: 2px solid #cd5251;
        transition: 0.5s !important;
        outline: none;
      }
    }

    input:disabled,
    input:read-only {
      color: @input-disabled;
      background-color: @input-bg-disabled;
      &:hover {
        color: @input-disabled;
        background-color: @input-bg-disabled;
      }
    }
  }
  .invalid-text {
    color: #cd5251;
    font-size: 14px;
    padding-top: 7px;
    font-weight: 600;
  }
}
</style>
