// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "@/assets/css/main.css",
    "@/assets/css/aos.css",
    "@/assets/css/video.css",
    "@/assets/css/animate.min.css",
    "@/assets/font/IRanSans/css/style.css",
  ],
  modules: ["nuxt-aos"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app:{
    baseURL: '/appointment-reservation/',
    buildAssetsDir: 'assets',
    head:{
      link:[
        {rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"}
      ]
    }
  }
});
