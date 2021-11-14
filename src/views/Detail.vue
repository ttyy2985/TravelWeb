<template>
  <div class="about">
    <div class="title-container flex justify-between items-center mb-2">
      <div class="left flex items-center">
        <div class="back cursor-pointer" @click="$router.back(-1)">
          <icon iconName="ArrowLeft" class="w-6 h-6 mr-2" />
        </div>
        <h1 class="text-2xl font-bold">{{ info.Name }}</h1>
      </div>
      <div class="icons flex items-center">
        <icon class="w-5 h-5 mr-4 cursor-pointer" iconName="Print"></icon>
        <div class="icon cursor-pointer" @click="share()">
          <icon class="w-5 h-5" iconName="sharing_green"></icon>
        </div>
      </div>
    </div>
    <!-- 圖片 -->
    <div
      class="title-img relative w-full rounded-xl h-233 bg-cover bg-no-repeat bg-center mb-2"
      :style="{ backgroundImage: `url(${info.Picture.PictureUrl1})` }"
    ></div>
    <!-- 圖片 -->
    <!-- 簡易資訊 -->
    <div class="card-content text-left px-4 py-2 mb-2 bg-green-50 bg-opacity-10 rounded-md">
      <div
        class="info flex items-center"
        v-for="(content, icon) in detail"
        v-show="icon"
        :key="icon"
      >
        <icon :iconName="icon" class="w-4 h-4 text-green-50 mr-1" />
        {{ content }}
      </div>
    </div>
    <!-- 簡易資訊 -->
    <!-- 景點介紹 -->
    <div class="description flex flex-col items-start mb-2" v-if="info.DescriptionDetail">
      <h4 class="font-bold text-green-50 text-lg">景點介紹</h4>
      <p class="text-left">{{ info.DescriptionDetail }}</p>
    </div>
    <!-- 景點介紹 -->
    <!-- 交通方式 -->
    <div class="travelInfo flex flex-col items-start mb-2" v-if="info.TravelInfo">
      <h4 class="font-bold text-green-50 text-lg">交通方式</h4>
      <p class="text-left">{{ info.TravelInfo }}</p>
    </div>
    <!-- 交通方式 -->
    <!-- 更多景點 -->
    <ArticleSetion
      @refresh="
        (val) => {
          refresh = true;
          $route.params.id = val;
        }
      "
      :options="{ city: `${info.Address ? city[info.Address.substr(0, 3)] : ''}` }"
      category="ScenicSpot"
      :subtitle="`${info.City ? info.City : ''}更多景點`"
    />
    <!-- 更多景點 -->
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleSetion from "@/components/ArticleSetion.vue";

export default {
  name: "Detail",
  components: {
    ArticleSetion,
  },
  data() {
    return {
      info: {},
      refresh: false,
      city: this.$root.city,
    };
  },
  computed: {
    detail() {
      const infoTag = ["Phone", "Address", "OpenTime", "TicketInfo"];
      const vm = this;
      console.log(this.info);
      return Object.keys(this.info).reduce(function (infos, option) {
        console.log(option, infos, "rtreter");
        if (infoTag.indexOf(option) > -1) {
          infos[option] = vm.info[option];
        }
        return infos;
      }, {});
    },
  },
  mounted() {
    this.info = JSON.parse(sessionStorage.getItem("info"));
  },
  watch: {
    refresh(val) {
      if (val) {
        this.info = JSON.parse(sessionStorage.getItem("info"));
        this.refresh = !val;
      }
    },
  },
  methods: {
    share() {
      console.log("share", encodeURIComponent(window.location.href));
      window.open(
        `https://lineit.line.me/share/ui?url=${encodeURIComponent(window.location.href)}`
      );
    },
  },
};
</script>
