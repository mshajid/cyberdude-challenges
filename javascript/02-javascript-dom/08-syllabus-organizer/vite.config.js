import { defineConfig } from "vite";

export default defineConfig ({
    base: "/cyberdude-challenges/",
    build: {
        target: "es2022"
      },
      esbuild: {
        supported: {
          'top-level-await': true
        },
      },
})

