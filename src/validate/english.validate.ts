/* sources:
** http://byatool.com/uncategorized/javascript-dsl-because-im-tired-of-writing-if-if-if/
 */

function isNotEmpty(toCheck: any, propertyName: any, error: any, rest: any) {
  return toCheck[propertyName] === '' ? error : null
}

function isNotLongerThan(toCheck: any, propertyName: any, error: any, rest: any) {
  return toCheck[propertyName].length > rest[0] ? error : null
}

function isBetween(toCheck: any, propertyName: any, error: any, rest: any) {
  let length = toCheck[propertyName].length
  return length < rest[0] || length > rest[1] ? error : null
}

const methods = [
  ['is not empty', isNotEmpty],
  ['is not longer than', isNotLongerThan],
  ['length is between', isBetween]
]
