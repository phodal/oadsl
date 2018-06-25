const simDescribe = (desc: any, fn: any) => {
  console.log(desc)
  fn()
}

const simIt = (msg: any, fn: any) => {
  simDescribe('  ' + msg, fn)
}

const simMatchers = (exp: any) => ({
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

const simExpect = (exp: any) => {
  simMatchers(exp)
}

export const SimTest = {
  describe: simDescribe,
  expect: simExpect,
  it: simIt,
  matchers: simMatchers
}
