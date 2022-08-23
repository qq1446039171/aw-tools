module.exports = (plop) => {
  // 创建生成器
  plop.setGenerator('component', {
    // 生成器描述
    description: 'create a component for aw-ui',
    // 询问
    prompts: [
      // 组件名称
      {
        type: 'input',
        name: 'name',
        message: 'component name',
        default: 'component',
      },
    ],
    // 把基于模板创建的文件，放到指定的目录
    actions: [
      {
        type: 'add',
        path: 'packages/aw-{{kebabCase name}}/index.js',
        templateFile: 'template/component/index.hbs',
      },
      {
        type: 'add',
        path: 'packages/aw-{{kebabCase name}}/package.json',
        templateFile: 'template/component/package.hbs',
      },
      {
        type: 'add',
        path: 'packages/aw-{{kebabCase name}}/README.md',
        templateFile: 'template/component/README.hbs',
      },
    ],
  })
}
