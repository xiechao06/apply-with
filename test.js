import applyWith from './index'
import test from 'tape'

test('synchronous', async function (t) {
  let o = await applyWith(
    { a: 1 },
    it => ++it.a,
    it => { it.a += 2 }
  )
  t.deepEqual(o, { a: 4 })
  t.end()
})

test('asynchronous', async function (t) {
  let o = await applyWith(
    Promise.resolve({ a: 1 }),
    it => Promise.resolve(4).then(n => { it.a = n })
  )
  t.deepEqual(o, { a: 4 })
  t.end()
})
