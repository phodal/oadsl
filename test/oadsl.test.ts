import SQL from '../src/chain/chain'
import { FormValidator, RegexMap, VALIDATE_ERROR } from '../src/validate/validate'

describe('OA DSL Test', () => {
  it('Where defined', () => {
    let sql = new SQL()
    expect(sql.WHERE().ORDERBY()).toBeDefined()
  })

  it('Where defined', () => {
    let sql = new SQL()
    expect(sql.WHERE().ORDERBY()).toBeDefined()
  })

  it('form validate', () => {
    const LoginFormValidateMap = {
      phone: {
        require: true,
        regular: RegexMap.phone
      },
      country: {
        requiredBy: 'phone'
      },
      email: {
        requiredByNot: {
          country: 'CN'
        }
      }
    }

    const data = {
      phone: '1234567980',
      country: 'US',
      email: ''
    }

    let result = FormValidator(LoginFormValidateMap, data)
    expect(result).toEqual({ error: 1, key: 'phone' })
  })
})
