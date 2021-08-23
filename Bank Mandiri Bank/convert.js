const fs = require('fs')

function convertFormat(piece) {
  fs.readFile(`./raw-json/${piece}.json`, (err, data) => {
    const list = JSON.parse(data)

    const res = list.map(e => {
      const index = e.address.indexOf('<a')
      const addressStr = e.address.substr(0, index)
      const addressAry = addressStr.split('<br>')
      let address = addressAry.shift()
      let phone = '-'
      addressAry.forEach(item => {
        if (item.length === 0) return
        if (!item.includes('cl-grey')) {
          address += ', ' + item
        } else {
          phone = item.replace(/<[^>]*>/g, '').replace('Phone:.:', '').trim()
        }
      })
      return {
        type: e.name.split('<br>')[0].replace(/<[^>]*>/g, ''),
        name: e.name.split('<br>')[1],
        address,
        phone
      }
    })

    fs.writeFileSync(`./result-json/${piece}.json`, JSON.stringify(res, null, 2))
  })
}

for (let i = 1; i < 15; i++) {
  convertFormat(i)
}
