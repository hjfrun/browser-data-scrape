import fsPromises from 'fs/promises'

const stores = []
// const p1 = fsPromises.readFile('../results-3/001.json', 'utf-8')
// const p2 = fsPromises.readFile('../results-3/002.json', 'utf-8')
// const p3 = fsPromises.readFile('../results-3/003.json', 'utf-8')

// Promise.all([p1, p2, p3]).then(res => {
//   res.forEach(strData => {
//     const data = JSON.parse(strData)
//     stores.push(...data)
//   })
// }).finally(() => {
//   console.log(stores.length)
// })

const func = filenames => {
  return Promise.all(
    filenames.map(f => fsPromises.readFile(f))
  )
}
const filenames = []
for (let page = 1; page < 124; page++) {
  const filename = page.toString().padStart(3, '0')
  filenames.push(`../results-2/${filename}.json`)
  // filenames.push(`../results/${filename}.json`)
}
func(filenames).then(res => {
  res.forEach(strData => {
    const data = JSON.parse(strData)
    stores.push(...data)
  })
}
).finally(() => {
  fsPromises.writeFile('../results2.json', JSON.stringify(stores, null, 2))
})


