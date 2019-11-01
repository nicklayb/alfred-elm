export const mapToAlfy = pkg => element => ({
  title: element.name,
  subtitle: element.comment,
  arg: [pkg, element.name].join('/')
})

export const mapFunctionsToAlfy = pkg => element => ({
  title: element.name,
  subtitle: element.type,
  arg: [pkg, element.name].join('#')
})
