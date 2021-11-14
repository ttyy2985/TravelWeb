<template>
  <nav
    class="
      bg-white
      w-full
      2xl:w-96 2xl:h-screen
      overflow-y-auto
      fixed
      p-4
      pb-0
      2xl:px-6 2xl:py-10
      z-50
    "
    :class="{ 'h-screen': showMenu }"
  >
    <div
      class="top 2xl:hidden flex items-center pb-4"
      :class="{ 'border-b border-black border-opacity-10': showMenu }"
    >
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
      <div class="logo cursor-pointer m-auto" @click="toHome()">
        <icon iconName="logo" class="w-28 h-12" />
      </div>
    </div>
    <div class="flex flex-col justify-start mt-6 2xl:mt-0" v-show="show">
      <div class="logo cursor-pointer" @click="toHome()">
        <icon iconName="logo" class="w-28 h-12 mb-6 2xl:block hidden" />
      </div>
      <!-- <CustomInput class="mb-6" v-model="keyword" /> -->
      <MultipleSelect
        class="mb-6"
        :options="city"
        v-model="destination"
        defaultString="選擇目的地"
      />
      <hr class="border-black border-opacity-10" />
      <h4 class="font-bold text-left text-lg my-6 leading-6">精選主題</h4>
      <ul class="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-2 gap-2 mb-2">
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
          @click="active = category.category"
          v-for="category in categories"
          :key="category.name"
        >
          <div
            class="img-bg rounded-full w-20 h-20 max-h-20 max-w-20 flex justify-center items-center"
            :class="`bg-${category.bgColor}`"
          >
            <i class="twicon-3x text-white" :class="`twicon-${category.icon}`"></i>
          </div>
          <p>{{ category.name }}</p>
        </li>
      </ul>
      <button class="bg-green-50 text-white mt-4 py-2 rounded" @click="search()">搜尋</button>
    </div>
  </nav>
</template>

<script>
import CustomInput from "@/components/CustomInput.vue";
import MultipleSelect from "@/components/MultipleSelect.vue";

const categories = [
  {
    name: "熱門景點",
    icon: "queens-head",
    bgColor: "purple-50",
    category: "ScenicSpot",
  },
  {
    name: "美食品嘗",
    icon: "tapioca",
    bgColor: "yellow-100",
    category: "Restaurant",
  },
  {
    name: "住宿推薦",
    icon: "grand-hotel",
    bgColor: "yellow-50",
    category: "Hotel",
  },
  {
    name: "親子活動",
    icon: "youbike",
    bgColor: "yellow-50",
    category: "Activity",
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
      // keyword: "",
    };
  },
  computed: {
    show() {
      return this.$root.windowWidth >= 1440 || this.showMenu;
    },
    city() {
      const vm = this;
      return Object.keys(this.$root.city).reduce(function (infos, option) {
        console.log(option, infos, vm.$root.city[option], "rtre121212ter");
        infos.push({ name: option, val: vm.$root.city[option] });
        return infos;
      }, []);
    },
  },
  components: { CustomInput, MultipleSelect },
  methods: {
    search() {
      console.log("search");
      const cities = this.destination.map((item) => item.val).join(",");
      this.$router.push({
        path: "search",
        query: {
          destination: cities,
          // keyword: this.keyword,
          category: this.active,
        },
      });
    },
    toHome() {
      if (this.$route.name == "Home") return;
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
