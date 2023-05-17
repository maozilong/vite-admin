// const localDb = require('./localDb')
import localDb from './localDb'
// require('./localDb')
import { default as user } from './user'
// const user = require('./user')
// const model = require('./model')
import { default as model } from './model'

localDb.mock = [
  ...user
]

const table = ['article', 'dict', 'cate']
table.forEach(t => {
  localDb.mock.push(...model.create(t))
})
