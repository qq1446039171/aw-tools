```
创建一个插件 

1. npm run create

流程:
备注: # 在 aw-tool 中 添加 print-js 作为devDependencies
yarn workspace aw-tool add print-js --dev

1. lerna bootstrap (lerna run --scope aw-tool ins # 运行 aw-tool 模块下的 ins)


2. yarn workspaces xxx run build (lerna run --scope aw-tool build # 运行 aw-tool 模块下的 build)

3. npm run git

4. npm run pub
```