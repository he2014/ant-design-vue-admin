import { createStore } from 'vuex'
const moduelsFile = require.context('./modules', true, /\w+\.js$/)
const modules = moduelsFile.keys().reduce((module, moduelPath) => {
  const moduleName = moduelPath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const moduleValue = moduelsFile(moduelPath)
  module[moduleName] = moduleValue.default
  return module
}, {})
// console.log(modules)
export default createStore({
  modules
})
