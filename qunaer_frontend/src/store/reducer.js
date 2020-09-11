import { ADD_GOODS,PAY_MONEY } from './actionTypes';
const defaultState = {
  list: [
    // {
    //   "imgUrl": "https://img10.360buyimg.com/mobilecms/s300x300_jfs/t1/124219/3/2745/287769/5ec89338E784d08be/9920af8a6161b93c.jpg!q70.dpg.webp",
    //   "name": "平行宇宙其徐如林 玻璃瓶装汽水 低糖无脂松针风味饮料 255ml*6瓶整箱装",
    //   "price": "58.8",
    //   "checked": false,
    //   "count": 1,
    // },
    // {
    //   "imgUrl": "https://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/143534/40/3859/39101/5f1e7416Ebebfc413/27a7a28ba592a73b.jpg!q70.dpg.webp",
    //   "name": "SK-II男士焕活保湿洗面奶120g（SK2洁面乳 补水保湿 控油洁面 深层清洁 护肤品 化妆品)",
    //   "price": "440",
    //   "checked": false,
    //   "count": 1,
    // },
  ],
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_GOODS:
      state.list.push(action.obj)
      return {
        list: state.list
      }
    case PAY_MONEY:
      console.log('pay end')
      return {
        list: []
      }
    default:
      return state
  }
  return state
}