<template>
  <i
    v-if="!tooltip && text"
    class="zmdi zmdi-help-outline hint"
    @mouseenter.once="fixPositon"
  />
  <base-tooltip
    v-else-if="text"
    ref="tooltip"
    :position="position"
    :text="text"
  />
</template>
<script>
export default {
  name: 'CommonTooltip',
  components: {
    BaseTooltip: {
      render(createElement) {
        const modifiers = {}
        if (this.$props.position) modifiers[this.$props.position] = true

        return createElement('i', {
          directives: [
            {
              name: 'tooltip',
              value: this.$props.text,
              modifiers
            }
          ],
          class: 'zmdi zmdi-help-outline hint'
        })
      },
      props: {
        text: { default: null, type: String },
        position: { default: null, type: String }
      }
    }
  },
  props: {
    text: { default: null, type: String },
    position: { default: null, type: String }
  },
  data() {
    return { tooltip: false }
  },
  methods: {
    fixPositon: async function() {
      this.tooltip = true
      await this.$nextTick()
      this.$refs.tooltip.$el.dispatchEvent(new Event('mouseenter'))
    }
  }
}
</script>

<style lang="less" scoped>
@import '~common/assets/less/_tooltip.less';

.wrap {
  display: inline;
}
i {
  cursor: pointer;
  color: #7e8796;
}
</style>
