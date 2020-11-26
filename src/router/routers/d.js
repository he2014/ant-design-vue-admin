export default [
  {
    path: '/2',
    name: 'Home1',
    component: () => import(/* webpackChunkName: "about" */ '../../views/Home.vue')
  },
  {
    path: '/about2',
    name: 'About2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../../views/About.vue')
  }
]
