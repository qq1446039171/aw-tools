```
流程:

1. lerna bootstrap (lerna run --scope aw-tool ins # 运行 aw-tool 模块下的 ins)


2. yarn workspaces xxx run build (lerna run --scope aw-tool build # 运行 aw-tool 模块下的 build)

3. npm run pub
```