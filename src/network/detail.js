import {request} from './request'

export function getDetail(iid) {
  return request ({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class Goods {
  constructor(itemInfo,columns,shopInfo) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = shopInfo.services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.Logo = shopInfo.shopLogo;
    this.Sells = shopInfo.cSells;
    this.TGoods = shopInfo.cGoods;
    this.Fans = shopInfo.cFans;
  }
}