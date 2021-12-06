import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    addCounter(state, payload) {
      payload.count++
    },
    addToCart(state, payload) {
      payload.checked = true;
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {
      // payload为添加的产品
      // 1、查找之前数组是否有该商品
      return new Promise((resolve,reject) => {
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);
        // 2、判断是否有该商品
        if(oldProduct) {
          context.commit('addCounter', oldProduct);
          resolve('继续添加成功！')
        } else {
          payload.count = 1
          context.commit('addToCart',payload)
          resolve('添加成功~')
        }
      })
    }
  },
  getters: {
    cartlength(state) {
      return state.cartList.length
    },
    cartList(state) {
      return state.cartList
    }
  }
})
