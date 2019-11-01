const alfy = require('alfy');
const Package = require('./elm/package')
const Module = require('./elm/module')

const packageName = process.env.package

const modules = await Package.get(packageName)

const items = alfy
  .inputMatches(modules, 'name')
  .map(Module.mapToAlfy(packageName));

alfy.output(items)
