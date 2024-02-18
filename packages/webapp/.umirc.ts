import { defineConfig } from '@umijs/max'

const path = require('path')

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      name: '介绍页',
      path: '/',
      component: './Intro',
      layout: false,
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      layout: false,
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
  alias: {
    '@p': path.resolve(__dirname, '../'),
  },
  tailwindcss: {},
  mfsu: {
    strategy: 'normal',
  },
  monorepoRedirect: {
    srcDir: ['.', 'src']
  }
})
