import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslintPlugin from "@nabla/vite-plugin-eslint";
import path from "path";
import mkcert from 'vite-plugin-mkcert';

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), eslintPlugin(), mkcert()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_Base_URL, 
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/cors/, ''),
        },
      },
      open: true,
      host: true,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@public": path.resolve(__dirname, "./public"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@constants": path.resolve(__dirname, "./src/constants"),
        "@store": path.resolve(__dirname, "./src/store"),
        "@connection": path.resolve(__dirname, "./src/connection"),
        "@helpers": path.resolve(__dirname, "./src/helpers"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@routes": path.resolve(__dirname, "./src/routes"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@custom-types": path.resolve(__dirname, "./src/types"),
        "@wrappers": path.resolve(__dirname, "./src/wrappers"),
      },
    },
  };
});
