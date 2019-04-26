const levelup = require('levelup')
const leveljs = require('level-js')

const db = levelup(leveljs('bigdata'))

db.put('hello', Buffer.from('world'), err => {
  if (err) throw err

  db.get('hello', (err, value) => {
    if (err) throw err

    console.log(value.toString()) // 'world'
  })
})

