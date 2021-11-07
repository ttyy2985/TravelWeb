<template>
  <nav
    class="
      bg-white
      w-screen
      hidden
      md:w-96
      min-h-screen
      fixed
      px-6
      py-10
      2xl:flex
      flex-col
      justify-start
      z-50
    "
  >
    <icon iconName="logo" class="w-28 h-12 mb-6" />
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
    <ul class="flex flex-wrap">
      <li
        class="
          w-1/2
          py-2
          text-center
          flex flex-col
          items-center
          mb-3
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
          class="img-bg rounded-full w-20 h-20 flex justify-center items-center"
          :class="`bg-${category.bgColor}`"
        >
          <i class="twicon-3x text-white" :class="`twicon-${category.icon}`"></i>
        </div>
        <p>{{ category.name }}</p>
      </li>
    </ul>
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
      destination: [],
    };
  },
  components: { CustomInput, MultipleSelect },
};
</script>
