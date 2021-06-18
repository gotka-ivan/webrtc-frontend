<template>
  <div class="wrap">
    <TextInput
      :id="id"
      v-model="val"
      :classes="classes"
      :config="{
        ...textInputConfig,
        required: required,
        reset: reset,
        type: 'tel',
        mask: mask
      }"
      v-bind="$attrs"
    >
      <template slot="label">
        <slot name="label" />
      </template>

      <template slot="left">
        <slot name="left" />
      </template>

      <template slot="right">
        <slot name="right" />
      </template>

      <template slot="invalid">
        <slot name="invalid" />
      </template>
    </TextInput>
  </div>
</template>

<script>
import TextInput, { Config as TextInputConfig } from '@common/components/lib/inputs/TextInput.vue'

export default {
  name: 'CommonPhoneInput',
  components: {
    TextInput
  },
  inheritAttrs: false,
  props: {
    mask: {
      type: String,
      default: '+7(###)###-##-##'
    },
    value: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: 'phone-input'
    },
    classes: {
      type: Array,
      default: () => []
    },
    required: {
      type: Boolean,
      default: false
    },
    reset: {
      type: Boolean,
      default: false
    }
  },

  data: function() {
    return {
      textInputConfig: new TextInputConfig(),
      val: this.value
    }
  }
}
</script>

<style lang="less" scoped>
@import '~common/assets/less/_variables.less';
</style>
