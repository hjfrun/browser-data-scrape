import fsPromises from 'fs/promises'

const stores = []

const func = filenames => {
  return Promise.all(
    filenames.map(f => fsPromises.readFile(f))
  )
}
const filenames = []
for (let page = 1; page < 124; page++) {
  const filename = page.toString().padStart(3, '0')
  filenames.push(`../results/${filename}.json`)
}
func(filenames).then(res => {
  res.forEach(strData => {
    const data = JSON.parse(strData)
    stores.push(...data)
  })
}
).finally(() => {
  fsPromises.writeFile('../results.json', JSON.stringify(stores, null, 2))
})


