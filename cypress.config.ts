import { defineConfig } from 'cypress'

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    baseUrl: 'http://localhost:8080',
    supportFile: false,
    specPattern: '**/tests/e2e/**/*.(js|ts)',
    video: false
  }
})
