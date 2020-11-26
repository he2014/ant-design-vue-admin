import { createRouter, createWebHistory } from 'vue-router'
const routerFiles = require.context('./routers', true, /\w+\.js$/)
const routes = routerFiles.keys().reduce((module, path) => {
  const route = routerFiles(path)
  return [...module, ...route.default]
}, [])
console.log(routes)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
