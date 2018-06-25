const describe = (desc: any, fn: any) => {
  console.log(desc)
  fn()
}

const it = (msg: any, fn: any) => {
  describe('  ' + msg, fn)
}

const matchers = (exp: any) => ({
  toBe: (assertion: any) => {
    if (exp === assertion) {
      console.log('pass')
      return true
    } else {
      console.log('fail')
      return false
    }
  }
})

const expect = (exp: any) => {
  matchers(exp)
}

const SimTest = {
  describe,
  expect,
  it,
  matchers
}

module.exports = SimTest
