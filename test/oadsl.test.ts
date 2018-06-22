import SQL from '../src/chain/chain'

describe('OA DSL Test', () => {
  it('Where defined', () => {
    let sql = new SQL()
    expect(sql.WHERE().ORDERBY()).toBeDefined()
  })

  it('Where defined', () => {
    let sql = new SQL()
    expect(sql.WHERE().ORDERBY()).toBeDefined()
  })
})
