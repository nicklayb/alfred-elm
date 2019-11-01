const alfy = require('alfy');
const Package = require('./elm/package')

const packages = await Package.all();

const items = alfy
    .inputMatches(packages, 'name')
    .map(Package.mapToAlfy);

alfy.output(items);
