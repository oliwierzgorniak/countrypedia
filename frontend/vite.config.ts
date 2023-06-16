import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pluginLicense from "rollup-plugin-license";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pluginLicense({
      thirdParty: {
        output: path.join(__dirname, "dist", "dependencies.txt"),
        includePrivate: true,
      },
    }),
  ],
});
