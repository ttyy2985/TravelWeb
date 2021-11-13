<template>
  <div class="card rounded-2xl bg-white shadow-lg col-span-1 overflow-hidden hover:shadow-2xl">
    <div
      class="card-img relative h-183 bg-cover bg-no-repeat bg-right-bottom"
      :style="{ backgroundImage: `url(${content.Picture.PictureUrl1})` }"
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
        @click="share()"
      >
        <icon class="w-5 h-5" iconName="sharing"></icon>
      </div>
    </div>
    <div class="card-content text-left px-4 py-2 cursor-pointer" @click="toDetailPage()">
      <h4 class="card-title text-lg font-bold">{{ content.Name }}</h4>
      <div class="info flex items-center" v-for="(content, icon) in info" v-show="icon" :key="icon">
        <icon :iconName="icon" class="w-4 h-4 text-green-50 mr-1" />
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
  computed: {
    info() {
      const infoTag = ["Phone", "Address", "OpenTime", "TicketInfo"];
      const vm = this;
      console.log(this.content);
      return Object.keys(this.content).reduce(function (infos, option) {
        console.log(option, infos, "rtreter");
        if (infoTag.indexOf(option) > -1) {
          infos[option] = vm.content[option];
        }
        return infos;
      }, {});
    },
  },
  methods: {
    toDetailPage() {},
    share() {
      console.log("share", encodeURIComponent(window.location.href));
      window.open(
        `https://lineit.line.me/share/ui?url=${encodeURIComponent(window.location.href)}`
      );
    },
  },
};
</script>
