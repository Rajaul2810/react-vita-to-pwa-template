import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const manifestForPlugin = {
  registerType: "prompt",
  manifest: {
      name: "Fish App",
      short_name: "Fish App",
      description: "Fish managment App",
      "icons": [
        {
            "src": "/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
        },
        {
            "src": "/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
        },
        {
            "src": "/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
        },
        {
          "src": "/icon-256x256.png",
          "sizes": "256x256",
         " type": "image/png",
          "purpose": "any maskable",
        },
    ],
      theme_color: "#4a90e2",
      background_color: "#4a90e2",
      display: "standalone",
      scope: "/",
      start_url: "/",
  },
};


// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
});
