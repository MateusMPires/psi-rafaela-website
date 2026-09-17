// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://psirafaelamartins.com.br',
  build: { inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
});
