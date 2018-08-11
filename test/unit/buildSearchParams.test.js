import buildSearchParams from '../../src/util/buildSearchParams'

describe('testing build searchParams', () => {
  let params = {
    name: 'zhoulin',
    age: 18,
    like: ['playgames', 'playbasketball', 'running'],
    others: {
      'bazi': 'omammaniho'
    }
  }
  let url = 'https://www.zhoulin.com'
  test('normal', () => {
    expect(buildSearchParams(url, {
      name: 'zhoulin'
    })).toEqual('https://www.zhoulin.com?name=zhoulin')
  })

  test('array', () => {
    expect(buildSearchParams(url, {
      name: 'zhoulin',
      like: ['playgames', 'playbasketball', 'running']
    })).toEqual('https://www.zhoulin.com?name=zhoulin&like[]=playgames&like[]=playbasketball&like[]=running')
  })

  test('array', () => {
    expect(buildSearchParams(url, {
      name: 'zhoulin',
      like: ['playgames', 'playbasketball', 'running']
    })).toEqual('https://www.zhoulin.com?name=zhoulin&like[]=playgames&like[]=playbasketball&like[]=running')
  })

  test('url with params', () => {
    expect(buildSearchParams(`${url}?name=zhoulin`, {
      like: ['playgames', 'playbasketball', 'running']
    })).toEqual('https://www.zhoulin.com?name=zhoulin&like[]=playgames&like[]=playbasketball&like[]=running')
  })
});