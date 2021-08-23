const fsPromises = require('fs/promises')

const branches = []

const func = filenames => {
  return Promise.all(
    filenames.map(f => fsPromises.readFile(f))
  )
}

const filenames = []

for (let page = 1; page < 15; page++) {
  filenames.push(`./result-json/${page}.json`)
}

func(filenames).then(res => {
  res.forEach(strData => {
    const data = JSON.parse(strData)
    branches.push(...data)
  })
  fsPromises.writeFile('./results.json', JSON.stringify(branches, null, 2))
})


