const alfy = require('alfy');

const HOST = 'https://package.elm-lang.org';
const SPLIT_CHAR = '/';

export const LATEST = 'latest';
const FETCH_OPTIONS = {
  maxAge: 3600
};

const host = (path) => [HOST, path].join(SPLIT_CHAR);

export const fetch = (route) => alfy.fetch(host(route), FETCH_OPTIONS);

export const encode = (pkg, version = LATEST) => [pkg, version].join(SPLIT_CHAR);

export const withoutVersion = pkg => {
  const [ns, name] = pkg.split('/');

  return [ns, name].join('/');
};
