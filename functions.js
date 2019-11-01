const alfy = require('alfy');
const Package = require('./elm/package')
const Module = require('./elm/module')
const { decode } = require('./utils')

const query = process.env.module
const [namespace, pkg, version, mod] = query.split('/')
const packageName = [namespace, pkg, version].join('/')

const modules = await Package.get(packageName)
const functions = modules.find((value) => value.name === mod).values

const items = alfy
  .inputMatches(functions, 'name')
  .map(Module.mapFunctionsToAlfy(query));

alfy.output(items)
