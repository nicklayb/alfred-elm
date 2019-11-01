const alfy = require('alfy');

const RECENTS = 'recents';

export const get = () => alfy.cache.get(RECENTS) || [];

const set = value => alfy.cache.set(RECENTS, value);

const has = value => !!get().find(e => e === value)

export const put = pkg => {
  if (has(pkg)) {
    return get();
  }
  const current = get();
  const newRecents = [pkg, ...current];
  set(newRecents);

  return newRecents;
};

export const clear = () => set([]);
