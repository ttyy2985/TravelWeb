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
      <Card v-for="content in contents" :content="content" :key="content.title" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
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
  },
  data() {
    return {
      info: {
        time: "343434",
        location: "errtr",
      },
      contents: [
        {
          title: "天長地久",
          info: {
            time: "wewew",
            location: "wewe",
            calling: "0954544",
          },
          photo:
            "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
        },
        {
          title: "天長地久",
          info: {
            time: "wewew",
            location: "wewe",
            calling: "0954544",
          },
          photo:
            "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
        },
        {
          title: "天長地久",
          info: {
            time: "wewew",
            location: "wewe",
            calling: "0954544",
          },
          photo:
            "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
        },
      ],
    };
  },
};
</script>
