<template>
  <div
    class="card rounded-2xl bg-white shadow-lg col-span-1 overflow-hidden"
    @click="toDetailPage()"
  >
    <div
      class="card-img relative h-183 bg-cover bg-no-repeat"
      :style="{ backgroundImage: `url(${content.photo})` }"
    >
      <div
        class="
          icon
          bg-green-50
          absolute
          top-3
          right-3
          bg-opacity-20
          w-10
          h-10
          rounded-xl
          flex
          items-center
          justify-center
          cursor-pointer
        "
      >
        <icon class="w-5 h-5" iconName="sharing"></icon>
      </div>
    </div>
    <div class="card-content text-left px-4 py-2">
      <h4 class="card-title text-lg font-bold">{{ content.title }}</h4>
      <div class="info" v-for="(content, icon) in content.info" :key="icon">
        <icon :iconName="icon" class="w-4 h-4 text-green-50" />
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    content: {
      type: Object,
    },
  },
  methods: {
    toDetailPage() {},
  },
};
</script>
