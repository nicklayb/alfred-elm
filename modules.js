const alfy = require('alfy');
const Package = require('./elm/package');
const Module = require('./elm/module');
const Recents = require('./recents');

const packageName = process.env.package || Package.corePackage;

Recents.put(packageName);

const modules = await Package.get(packageName);

const items = alfy
  .inputMatches(modules, 'name')
  .map(Module.mapToAlfy(packageName));

alfy.output(items);
