import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig( ({command}) => ({
  plugins: [react()],
  test: {
    environment: "jsdom"
  },
  // see https://github.com/vitejs/vite/issues/1153#issuecomment-785467271
  // and specifically https://vite.dev/config/server-options.html#server-watch
  // Needed when working on Windows and WSL2 with the code of the Windows
  // side and trying to mount stuff from the host to the container
  // Vite doesn't see the updates, but the contents do still update
  // verifiably in the container
  server: {
    watch: {
      usePolling: command === "serve" ? true : false
    }
  }
}))
