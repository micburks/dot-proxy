const dotProxy = require('../lib/index.js')

describe('dotProxy', () => {
  describe('#set', () => {
    it('sets a nested path', () => {
      const expected = { a: { b: 3 } }
      const actual = dotProxy({
        a: {
          b: 1
        }
      })

      actual['a.b'] = 3

      expect(actual).to.deep.equal(expected)
    })
  })

  describe('#get', () => {
    it('gets a nested path', () => {
      const expected = 'hello'
      const target = dotProxy({
        a: {
          b: {
            c: 'hello'
          }
        }
      })

      const withDot = dotProxy(target).a.b.c
      const withBracket = dotProxy(target)['a.b.c']

      expect(withDot).deep.equal(expected)
      expect(withBracket).deep.equal(expected)
    })
  })

  describe('#delete', () => {
    it('deletes a nested path', () => {
      const target = {
        ralph: {
          waldo: {
            emerson: 'nature'
          }
        }
      }

      expect(target.ralph.waldo.emerson).to.equal('nature')

      const proxy = dotProxy(target)
      delete target['ralph.waldo.emerson']

      expect(target.ralph.waldo.emerson).to.be.undefined
    })
  })

  describe('#has', () => {
    it('has a nested path', () => {
      const target = dotProxy({
        1: {
          2: {
            3: 'hello'
          }
        }
      })

      const actual = '1.2.3' in target

      expect(actual).to.be.true
    })
  })
})
