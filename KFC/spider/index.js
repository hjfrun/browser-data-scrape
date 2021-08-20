import axios from 'axios'
import fs from 'fs'

const stores = []

function fetchPageData(page) {
  axios.get(`https://kfcku.com/api/stores?page=${page}`, {
    headers: {
      "x-requested-with": "XMLHttpRequest"
    }
  }).then(res => {
    const storesPiece = res.data.data.map(item => {
      return {
        name: item.name,
        address: item.address + ', ' + item.district.name + ', ' + item.district.province.name,
        latitude: item.lat,
        longitude: item.long,
        services: item.store_services.map(e => e.name)
      }
    })

    stores.push(...storesPiece)

    const filename = page.toString().padStart(3, '0')
    fs.writeFileSync(`../results-3/${filename}.json`, JSON.stringify(storesPiece, null, 2))
  })
}

async function downloadAll() {
  for (let page = 1; page < 124; page++) {
    fetchPageData(page)
  }
}

await downloadAll()
fs.writeFileSync('../results.json', JSON.stringify(stores, null, 2))


