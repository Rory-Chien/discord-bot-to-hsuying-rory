import { createPinia } from "pinia";
import { createApp } from "vue";

export default () => {
  console.log("vue init");
  const vue = createApp({});
  const pinia = createPinia();

  vue.use(pinia);
};
