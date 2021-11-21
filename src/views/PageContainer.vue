<template>
  <div class="page-container" :style="`background: ${background}`">
    <page-sidebar />
    <page-content />
    <theme @selectTheme="selecttheme" />
  </div>
</template>

<script>
import PageSidebar from "@/components/PageContainer/PageSidebar.vue";
import PageContent from "@/components/PageContainer/PageContent.vue";
import Theme from "@/components/common/Theme.vue";

export default {
  name: "PageContainer",
  components: {
    PageSidebar,
    PageContent,
    Theme,
  },
  data() {
    return {
      background: "linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%);",
    };
  },
  created() {
    if (sessionStorage.getItem("user")) {
      if (!this.$store.state.user) {
        this.$store.commit("useris", sessionStorage.getItem("user"));
      }
    }
    window.addEventListener("pagehide", () => {
      sessionStorage.setItem("user", this.$store.state.user);
    });
  },
  methods: {
    selecttheme(color) {
      this.background = color;
    },
  },
};
</script>
