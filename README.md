# OADSL

> A Series DSL in Action with examples and JavaScript

With
 
 - Regex DSL
 - Language DSL
 - Template DSL
 - Data Structure DSL 

Examples
---

### Workflow

```typescript
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
``` 

### Form Validate

```typescript
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
```

Resources
---

 - [如何在业务代码中提升：创建领域特定语言](https://www.phodal.com/blog/how-to-design-dsl-in-bau-project/)

License
---

[![Phodal's Idea](http://brand.phodal.com/shields/idea-small.svg)](http://ideas.phodal.com/)

© 2018 A [Phodal Huang](https://www.phodal.com)'s [Idea](http://github.com/phodal/ideas).  This code is distributed under the MIT license. See `LICENSE` in this directory.
