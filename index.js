import '@babel/polyfill'

async function applyWith (obj, ...funcs) {
  obj = await Promise.resolve(obj)
  for (let func of funcs) {
    await Promise.resolve(func(obj))
  }
  return obj
}

export default applyWith
