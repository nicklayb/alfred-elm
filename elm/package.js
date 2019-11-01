import { fetch, encode } from '../utils'

export const all = () => fetch('search.json')

export const get = pkg => fetch(`packages/${pkg}/docs.json`);

export const mapToAlfy = element => ({
  title: element.name,
  subtitle: element.summary,
  arg: encode(element.name)
})
