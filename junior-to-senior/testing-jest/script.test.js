const googleSearch = require('./script');

const dbMock = [
  'dog.com',
  'cat.com',
  'cheesepuff.com',
  'reddenglong.com',
  'cats.com'
]

describe('googleSearch', () => {
  it('this is a test', () => {
    expect('hello').toBe('hello');
    googleSearch('test', dbMock);
  })

  it('is searching google', () => {
    // expect to equal an empty array because dbMock should not contain 'test' keyword
    expect(googleSearch('test', dbMock)).toEqual([]);

    expect(googleSearch('cat', dbMock)).toEqual(['cat.com', 'cats.com']);
  })

  it('work with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  })

  it('does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  })
})

