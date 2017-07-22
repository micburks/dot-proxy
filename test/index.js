const assert = require('assert')
const dotProxy = require('../index.js')

describe('dotProxy', function () {
  it('sets a nested path', function () {
    const target = { a: { b: 1 } }
    const actual = dotProxy(target)
    actual['a.b'] = 3
    const expected = { a: { b: 3 } }
    assert.deepEqual(actual, expected)
  })
  it('gets a nested path', function () {
  })
  it('deletes a nested path', function () {
  })
  it('has a nested path', function () {
  })
})
