<template>
  <div class="search">
    <ArticleSetion
      :category="this.$route.query.category"
      :title="map[this.$route.query.category]"
      :options="{ city: this.$route.query.destination, $top: 3 }"
    />
  </div>
</template>

<script>
const map = {
  ScenicSpot: "熱門景點",
  Restaurant: "美食品嘗",
  Hotel: "住宿推薦",
  Activity: "親子活動",
};
// @ is an alias to /src
import ArticleSetion from "@/components/ArticleSetion.vue";
export default {
  name: "Search",
  data() {
    return {
      map,
    };
  },
  components: {
    ArticleSetion,
  },
  mounted() {
    console.log(this.$route.query, "query");
  },
};
</script>
