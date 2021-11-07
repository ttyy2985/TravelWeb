<template>
  <svg aria-hidden="true" :class="svgClass" class="svg-icon inline-block">
    <use :xlink:href="`#${iconName}`" />
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    iconName: {
      type: String,
      required: true,
    },
  },
  computed: {
    svgClass() {
      return `svg-icon${this.iconName}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.svg-icon use path * {
  fill: currentColor !important;
  color: currentColor !important;
  overflow: hidden;
}
</style>
