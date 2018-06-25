import SQL from '../src/chain/chain'
import { FormValidator, RegexMap } from '../src/validate/validate'
import { workflowParser } from '../src/workflow/workflow'

describe('OA DSL Test', () => {
  it('Where defined', () => {
    let sql = new SQL()
    expect(sql.WHERE().ORDERBY()).toBeDefined()
  })

  it('Where defined', () => {
    let sql = new SQL()
    expect(sql.WHERE().ORDERBY()).toBeDefined()
  })

  it('Workflow Test', () => {
    let data = {
      transact: {
        name: 'Transact',
        status: 'success'
      },
      approve: {
        name: 'Approve',
        status: 'processing'
      },
      bank: {
        name: 'Bank',
        status: 'todo'
      }
    }

    let results = workflowParser(data)
    expect(results).toEqual([
      { icon: 'icon-success', name: 'Transact', status: 'success' },
      { icon: 'icon-processing', name: 'Approve', status: 'processing' },
      { icon: 'icon-todo', name: 'Bank', status: 'todo' }
    ])
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
