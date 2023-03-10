// babel处理es6代码的转换
import babel from '@rollup/plugin-babel'
// 解决rollup无法识别commonjs的问题
import commonjs from '@rollup/plugin-commonjs'
// resolve将我们编写的源码与依赖的第三方库进行合并
import resolve from '@rollup/plugin-node-resolve'
// 代码压缩插件
import { terser } from 'rollup-plugin-terser'

export default {
  input: './index.js', //入口文件
  output: {
    file: './dist/index.js', //打包后的存放文件
    format: 'es', //输出格式 amd es iife umd cjs
    name: 'AwMove' //如果iife,umd需要指定一个全局变量
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    resolve(),
    terser()
  ]
}
