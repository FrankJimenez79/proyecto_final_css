import { defineConfig } from "vite";

export default defineConfig({
  base: "/proyecto_final_css/",
  build: {
    rollupOptions: {
      input: [
        "index.html",
        "ingles.html",
        "conocenos.html",
        "blog.html",
        "article-poder-tecnologia.html",
        "article-extranjero.html",
        "article-cinco-palabras.html",
        "article-cinco-consejos.html",
      ],
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
