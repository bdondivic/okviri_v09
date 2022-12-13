const palindrom = require('../utils/za_test').palindrom

test('palindrom od a', () => {
  const rezultat = palindrom('a')

  expect(rezultat).toBe('a')
})

test('palindrom od oarwa', () => {
  const rezultat = palindrom('oarwa')

  expect(rezultat).toBe('awrao')
})

test('palindrom od radar', () => {
  const rezultat = palindrom('radar')

  expect(rezultat).toBe('radar')
})

