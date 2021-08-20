import axios from 'axios'
import fs from 'fs'

function fetchPageData(page) {
  axios.get(`https://kfcku.com/api/stores?page=${page}`, {
    headers: {
      "x-requested-with": "XMLHttpRequest"
    }
  }).then(res => {
    const stores = res.data.data.map(item => {
      return {
        name: item.name,
        address: item.address + ', ' + item.district.name + ', ' + item.district.province.name,
        latitude: item.lat,
        longitude: item.long,
        services: item.store_services.map(e => e.name).join(',')
      }
    })

    const filename = page.toString().padStart(3, '0')
    fs.writeFileSync(`../results-2/${filename}.json`, JSON.stringify(stores, null, 2))
  })
}


for (let page = 1; page < 124; page++) {
  fetchPageData(page)
}

