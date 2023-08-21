import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isDev = import.meta.env.DEV;

// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [tailwind()],
  site: 'https://tereshchenkomax.github.io',
  base: isDev ? '' : '/pale-planet'
});