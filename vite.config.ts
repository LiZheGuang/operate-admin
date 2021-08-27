import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
import config from "./config/index"
import { name } from "./package.json"
const useDevMode = true

export default (({ mode }) => {
  const env = loadEnv(
    mode, // mode
    process.cwd(), // root
    '' // prefix (defaults to "VITE_")
  )
  const { VITE_NODE_ENV } = env
  return defineConfig(
    {
      base: config[VITE_NODE_ENV].microServer,
      // 指定生成静态资源的存放路径（
      build: {
        assetsDir: "static"
      },
      plugins: [
        vue(),
        qiankun(name, {
          useDevMode,
        }),
      ],
      css: {
        preprocessorOptions: {
          less: {
            modifyVars: { '@ant-prefix': name },
            javascriptEnabled: true,
          },
        },
      },
      server: {
        port: 3102,
        cors: true

      },
    }
  )
})
