// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Trocar pelo domínio real quando ele existir (pendência 8 do doc de visão).
  site: 'https://rafaelamartins.com.br',
  build: { inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
});
