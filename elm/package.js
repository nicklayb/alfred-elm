import { fetch, encode, withoutVersion } from '../utils';
export const all = () => fetch('search.json');

export const get = pkg => fetch(`packages/${pkg}/docs.json`);

export const mapToAlfy = element => ({
  title: element.name,
  subtitle: element.summary,
  arg: encode(element.name)
});

export const mapRecentToAlfy = element => ({
  title: withoutVersion(element),
  subtitle: element,
  arg: element,
});

export const corePackage = 'elm/core/latest';
