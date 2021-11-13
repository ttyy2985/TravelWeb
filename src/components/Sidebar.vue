<template>
  <nav class="bg-white w-screen 2xl:w-96 2xl:h-screen fixed p-4 pb-0 2xl:px-6 2xl:py-10 z-50">
    <div class="top border-b border-black border-opacity-10 2xl:hidden flex items-center pb-4">
      <div
        class="
          icon
          bg-green-50 bg-opacity-20
          w-8
          h-8
          rounded-lg
          flex
          items-center
          justify-center
          cursor-pointer
        "
        @click="showMenu = !showMenu"
      >
        <icon class="w-5 h-5" iconName="setting"></icon>
      </div>
      <icon iconName="logo" class="w-28 h-12 m-auto" />
    </div>
    <div class="flex flex-col justify-start mt-6 2xl:mt-0" v-show="show">
      <icon iconName="logo" class="w-28 h-12 mb-6 2xl:block hidden" />
      <CustomInput class="mb-6" />
      <MultipleSelect
        class="mb-6"
        :options="[
          { name: '小琉球', val: '小琉球' },
          { name: '台北', val: '台北' },
          { name: '新竹', val: '新竹' },
          { name: '苗栗', val: '苗栗' },
          { name: '彰化', val: '彰化' },
          { name: '嘉義', val: '嘉義' },
          { name: '台南', val: '台南' },
        ]"
        v-model="destination"
        defaultString="選擇目的地"
      />
      <hr class="border-black border-opacity-10" />
      <h4 class="font-bold text-left text-lg my-6 leading-6">精選主題</h4>
      <ul class="grid grid-cols-2 gap-2">
        <li
          class="
            col-span-1
            py-2
            text-center
            flex flex-col
            items-center
            rounded-lg
            border border-transparent
            hover:border-green-50
          "
          :class="{ ' border-green-50': active == category.icon }"
          @click="active = category.icon"
          v-for="category in categories"
          :key="category.name"
        >
          <div
            class="img-bg rounded-full w-10 h-10 max-h-20 max-w-20 flex justify-center items-center"
            :class="`bg-${category.bgColor}`"
          >
            <i class="twicon-2x text-white" :class="`twicon-${category.icon}`"></i>
          </div>
          <p>{{ category.name }}</p>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import CustomInput from "@/components/CustomInput.vue";
import MultipleSelect from "@/components/MultipleSelect.vue";

const categories = [
  {
    name: "歷史文化",
    icon: "zeelandia",
    bgColor: "green-50",
  },
  {
    name: "戶外踏青",
    icon: "youbike",
    bgColor: "indigo-50",
  },
  {
    name: "宗教巡禮",
    icon: "xingtian-tmp",
    bgColor: "pink-50",
  },
  {
    name: "親子活動",
    icon: "sky-lantern",
    bgColor: "blue-50",
  },
  {
    name: "風景區",
    icon: "queens-head",
    bgColor: "purple-50",
  },
  {
    name: "美食品嘗",
    icon: "tapioca",
    bgColor: "yellow-100",
  },
  {
    name: "住宿推薦",
    icon: "grand-hotel",
    bgColor: "yellow-50",
  },
  {
    name: "觀光活動",
    icon: "balloon",
    bgColor: "green-100",
  },
];
export default {
  name: "Navbar",
  data() {
    return {
      categories,
      active: "",
      showMenu: false,
      destination: [],
    };
  },
  computed: {
    show() {
      return this.$root.windowWidth >= 1440 || this.showMenu;
    },
  },
  components: { CustomInput, MultipleSelect },
};
</script>
