/**
 *
I need to scrape the branch/store location data. My priority is the below data (if available),
but I’m ok to scrape all the available location related data.

Latitude
Longitude
Store_address
Store_type
 */

// Bank Negara Indonesia Bank
// https://www.bni.co.id/en-us/contact/locator/branch
$$('.item-value').map(a => {
  return {
    location: $$('.grid-item', a)[0].innerText,
    address: $$('.grid-item', a)[1].innerText,
    regencyORcity: $$('.grid-item', a)[2].innerText,
    province: $$('.grid-item', a)[3].innerText,
    phone: $$('.grid-item', a)[4].innerText
  }
})

// Bank Rakyat Indonesia Bank
// https://bri.co.id/en/lokasi
// no result found


// Bank Mandiri Bank
// https://www.bankmandiri.co.id/en/kantor-cabang
// need vpn access


// KFC Food service 
// https://kfcku.com/store



// McDonald's Corp Food service 
// http://www.mcdonalds.co.id/location

$$('.location-list').map(a => {
  let location = $$('.btn-directions', a)[0].href.split('/').pop()
  return {
    opening: $$('.location-opening button', a)[0].innerText,
    name: $$('.title h5', a)[0].innerText,
    address: $$('.quiet', a)[0].innerText,
    location,
    latitude: location.split(',')[0],
    longitude: location.split(',')[1],
    services: $$('.location-facility img', a).map(b => b.dataset.originalTitle)
  }
})

// with join

$$('.location-list').map(a => {
  let location = $$('.btn-directions', a)[0].href.split('/').pop()
  return {
    opening: $$('.location-opening button', a)[0].innerText,
    name: $$('.title h5', a)[0].innerText,
    address: $$('.quiet', a)[0].innerText,
    location,
    latitude: location.split(',')[0],
    longitude: location.split(',')[1],
    services: $$('.location-facility img', a).map(b => b.dataset.originalTitle).join(',')
  }
})
