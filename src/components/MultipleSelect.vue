<template>
  <div class="inline-block pay-select-container" :class="{ flex: displayColumn === 'h' }">
    <label
      class="flex items-center pay-label mr-16 h-39 w-full"
      v-if="label"
      :class="{ 'justify-end': alignRight }"
      :style="{ width: labelWidth, marginRight: gapWidth }"
      ><span>{{ label }}</span
      ><span class="text-red-200" v-if="required">*</span></label
    >
    <div
      class="pay-select mr-8 focus:outline-none focus:border-blue-700"
      :tabindex="tabindex"
      @blur="open = false"
    >
      <div
        class="selected flex items-start p-3 justify-between bg-white"
        :style="{ width: `${selectWidth}px`, height: `${selectHeight}px` }"
        @click="openSelectOption()"
      >
        <div class="selected-area flex flex-wrap w-3/4" v-if="selected.length">
          <div
            class="whitespace-no-wrap rounded-lg flex items-center mr-5"
            v-for="item in selected"
            :key="item.val"
            @click.stop="updateValue(item)"
          >
            {{ item.val }}
            <div class="icon flex items-center justify-center">
              <icon class="w-3 h-3 ml-3" iconName="Vector"></icon>
            </div>
          </div>
        </div>
        <p class="text-placeholder" v-else>
          {{ defaultString }}
        </p>
        <icon
          class="w-5 h-5"
          iconName="ic_arrow_down"
          :class="{ 'rotate-0': !open, 'rotate-180': open, hidden: isDisabled }"
        ></icon>
      </div>
      <div
        class="items grid grid-cols-3 p-3 gap-6"
        :class="{ selectHide: !open }"
        style="max-height: 200px"
      >
        <div
          v-for="option in options"
          :key="option.val"
          @click="updateValue(option)"
          class="
            border border-green-50
            rounded-lg
            grid-span-1
            text-center text-lg
            py-1
            hover:bg-green-50 hover:text-white
          "
          :class="{
            'bg-green-50 text-white': isSelected(option.val),
            'text-fontColor': !isSelected(option.val),
          }"
        >
          {{ option.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    clean: Boolean,
    error: String,
    displayColumn: String,
    isDisabled: {
      type: Boolean,
      default: false,
    },
    defaultString: {
      type: String,
      required: false,
      default: "",
    },
    labelWidth: {
      type: String,
      default: "85px",
    },
    gapWidth: String,
    alignRight: {
      type: Boolean,
      default: false,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    value: {
      type: Array, // object {name: '選項名', val: '選項值'}
      required: true,
    },
    options: {
      type: Array, //  [{name: '選項名', val: '選項值'},{name: '選項名', val: '選項值'}]
      required: true,
    },
    selectWidth: [String, Number],
    selectHeight: [String, Number],
    label: String,
    required: Boolean,
    type: String,
  },
  data() {
    return {
      open: false,
    };
  },
  computed: {
    selected() {
      //  可能會 map 不到這資料，然後 select就壞掉了
      return this.value;
    },
  },
  methods: {
    isSelected(val) {
      return this.value.findIndex((item) => item.val == val) > -1;
    },
    openSelectOption() {
      this.isDisabled ? "" : (this.open = !this.open);
    },
    updateValue(selected) {
      const data = this.value;
      console.log(selected);
      const index = this.value.findIndex((item) => item.val == selected.val);
      console.log(index);
      if (index < 0) {
        data.push(selected);
      } else {
        data.splice(index, 1);
      }
      console.log(data);
      this.$emit("input", data);
    },
  },
};
</script>

<style lang="scss" scoped>
.pay-select {
  @apply relative text-left outline-none w-full;
  .selected {
    @apply border rounded-lg px-3 h-full cursor-pointer select-none border-black border-opacity-10 bg-gray-50;
    &.open {
      @apply border  text-fontColor  border-gray-50 rounded-t-lg;
    }
  }
  .items {
    @apply bg-white border-gray-50 border border-t-0 border-gray-50 rounded-b-lg overflow-y-auto overflow-x-hidden absolute left-0 right-0 z-10 shadow-sm;
    div {
      @apply px-3 cursor-pointer select-none break-all;
      //   &:hover {
      //     @apply bg-blue-100;
      //   }
    }
  }
}

.selectHide {
  @apply hidden;
}
</style>
