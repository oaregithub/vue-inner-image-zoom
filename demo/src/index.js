import { createApp, h } from 'vue';
import App from './App.vue';

createApp({
  render: () => h(App, { srcs: ['/assets/unsplash.jpg', '/assets/unsplash-large.jpg'] })
}).mount('#app');
