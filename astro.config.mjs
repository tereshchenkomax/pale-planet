import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";
const isDev = import.meta.env.DEV;


// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [tailwind(), react()],
  site: 'https://tereshchenkomax.github.io',
  base: isDev ? '' : '/pale-planet'
});