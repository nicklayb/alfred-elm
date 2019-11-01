const alfy = require('alfy');
const Package = require('./elm/package');
const Recents = require('./recents');

const recents = Recents.get();

if (alfy.input.length > 0 || recents.length == 0) {
  const packages = await Package.all();

  const items = alfy
    .inputMatches(packages, 'name')
    .map(Package.mapToAlfy);

  alfy.output(items);
} else {
  alfy.output(recents.map(Package.mapRecentToAlfy))
}



