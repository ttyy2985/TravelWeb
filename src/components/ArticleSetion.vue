<template>
  <div class="article my-10">
    <div class="article-title flex justify-between items-center mb-4">
      <div class="left flex items-center">
        <icon :iconName="iconName" class="w-6 h-6 mr-2" v-if="iconName != ''" />
        <h3 class="font-bold text-2xl">{{ title }}</h3>
        <h4 class="font-bold text-green-50 text-lg">{{ subtitle }}</h4>
      </div>
      <a class="more text-base text-green-50 cursor-pointer" v-if="title"> 更多{{ title }} </a>
    </div>
    <div class="article-content grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 2xl:gap-6">
      <Card v-for="content in contents" :content="content" :key="content.ID" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import api from "@/api";

export default {
  name: "ArticleSection",
  components: {
    Card,
  },
  props: {
    iconName: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    subtitle: String,
    options: {
      type: Object,
    },
    category: String,
  },
  data() {
    return {
      contents: [],
    };
  },
  async mounted() {
    await this.getData(this.options);
  },
  methods: {
    async getData(options = "") {
      const ApiName = this.category.toLowerCase();
      const method = `get${this.category}`;
      let data = await api[ApiName][method]({
        params: options || { $top: 3 },
      });
      this.contents = data;
    },
  },
};
</script>
