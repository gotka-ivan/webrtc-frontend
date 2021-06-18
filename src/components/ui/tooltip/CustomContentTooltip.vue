<template>
  <div class="tooltip-block">
    <i
      v-tooltip="{ ref: 'tooltipRef' }"
      class="tooltip-block__icon"
    >
      {{ value }}
    </i>

    <div ref="tooltipRef">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonCustomContentTooltip',
  props: {
    value: {
      type: String,
      default: 'i'
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .vue-tooltip.tooltip-custom {
  z-index: 100;

  max-height: 240px;
  max-width: 800px;

  background-color: #fff;
  color: #000;
  border: 1px solid #7e8796;
  border-radius: 8px;
}

/deep/ .tooltip-content {
  overflow-y: auto;
  max-height: 220px;
}
/deep/.vue-tooltip.tooltip-custom .tooltip-arrow {
  width: 20px !important;
  height: 20px !important;
  background-color: #fff !important;
  border: none !important;
  transform: rotate(45deg);
}

/deep/.vue-tooltip[x-placement^='top'].tooltip-custom .tooltip-arrow {
  border-bottom: 1px solid #7e8796 !important;
  border-right: 1px solid #7e8796 !important;
  bottom: -11px !important;
}

/deep/.vue-tooltip[x-placement^='bottom'].tooltip-custom .tooltip-arrow {
  border-left: 1px solid #7e8796 !important;
  border-top: 1px solid #7e8796 !important;
  top: -11px !important;
}

/deep/.vue-tooltip[x-placement^='left'].tooltip-custom .tooltip-arrow {
  border-right: 1px solid #7e8796 !important;
  border-top: 1px solid #7e8796 !important;
  left: -11px !important;
}
/deep/.vue-tooltip[x-placement^='right'].tooltip-custom .tooltip-arrow {
  border-left: 1px solid #7e8796 !important;
  border-bottom: 1px solid #7e8796 !important;
  right: -11px !important;
}

.tooltip-block {
  display: inline;
}

.tooltip-block__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;

  font-size: 16px;
  font-style: normal;

  color: #fff;
  background-color: #3f7fbc;
  border-radius: 50%;
  cursor: pointer;
}

@media (max-width: 767px) {
  /deep/ .vue-tooltip.tooltip-custom {
    z-index: 6;

    max-height: 300px;
    max-width: calc(100% - 30px);
  }

  /deep/ .tooltip-content {
    overflow-y: auto;
    max-height: 280px;
  }
}

@media (min-width: 767px) and (max-width: 991px) {
  /deep/ .vue-tooltip.tooltip-custom {
    max-width: 600px;
  }
}
</style>
