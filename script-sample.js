// https://www.topuniversities.com/university-rankings/world-university-rankings/2021

$$('._qs-ranking-data-row').map(a => {
  return {
    rank: $$('.row ._univ-rank.hide-this-in-mobile-indi', a)[0].innerText,
    university: $$('.row .uni-link', a)[0].innerText,
    location: $$('.row .location,i', a)[0].innerText.trim(),
    score: $$('.row .overall-score-span', a)[0].innerText
  }
})

// https://list.jd.com/list.html?cat=16750%2C16751%2C16756&pvid=06c21d9d5fdb4ff4bb114d6fcf2f7624&0.5017979894033657#J_main

$$('.gl-warp li').map(a => {
  return {
    name: $$('.p-name em', a)[0].innerText,
    price: $$('.p-price i', a)[0].innerText,
    detail: $$('.p-img a', a)[0].href,
    img: $$('.p-img a img', a)[0].src
  }
})

// https://movie.douban.com/explore#!type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0

$$('.list .item').map(a => {
  return {
    title: $$('img', a)[0].alt,
    score: $$('p strong', a)[0] ? $$('p strong', a)[0].innerText : 'null',
    img: $$('img', a)[0].src,
    url: a.href
  }
})
