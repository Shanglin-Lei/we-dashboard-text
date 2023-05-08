import { createApp } from 'vue'
import Editor from './editor/index.vue'

const app = createApp(Editor)

app.config.unwrapInjectedRef = true

app.mount('#app')
