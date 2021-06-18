<template>
  <div class="wrap">
    <TextInput
      :id="id"
      v-model="valueModel"
      :classes="classes"
      :config="{
        ...textInputConfig,
        required: required,
        reset: reset,
        type: 'number'
      }"
      v-bind="$attrs"
      v-on="{ ...$listeners, input: () => {} }"
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
  name: 'CommonNumberInput',
  components: {
    TextInput
  },
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: 'number-input'
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
  },
  computed: {
    valueModel: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~common/assets/less/_variables.less';
</style>
