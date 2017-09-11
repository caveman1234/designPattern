> store 

```js
import Vue from 'vue';
import Vuex from 'vuex';
import shopCar from './shopCar/index';
Vue.use(Vuex);
let store = new Vuex.Store({
    modules: {
        shopCar: shopCar
    }
});
export default store;
```

> shopCar 

```js
const SELECT_ALL = "SELECT_ALL";
const SELECT_ITEM_ALL = "SELECT_ITEM_ALL";
const SELECT_ALL_CHANGE = "SELECT_ALL_CHANGE";
const SELECT_ITEM_CHANGE = "SELECT_ITEM_CHANGE";
const PLUS = "PLUS";
const MINUS = "MINUS";
const DEL = "DEL";
let state = {
    selectAll: false,
    items: [{
            name: '天猫超市生鲜店',
            selected: false,
            details: [{
                    selected: false,
                    imgUrl: '../../static/1.jpg',
                    name: '【天猫超市】易家菜园山东紫薯500g/包番薯16:00截单',
                    price: 6.90,
                    count: 1,
                    limitCount: 1,
                    weight: 0.5
                },
                {
                    selected: false,
                    imgUrl: '../../static/2.jpg',
                    name: '【天猫超市】新西兰去骨小牛腿肉块500g 进口新鲜牛肉',
                    price: 22.80,
                    count: 1,
                    limitCount: 2,
                    weight: 0.5
                }
            ]
        },
        {
            name: '天猫超市',
            selected: false,
            details: [{
                    selected: false,
                    imgUrl: '../../static/3.jpg',
                    name: '【天猫超市】乌江酱菜泡菜红油榨菜瓶装红版300g美味可口酱菜下饭',
                    price: 9.90,
                    count: 1,
                    limitCount: 1000,
                    weight: 0.3
                },
                {
                    selected: false,
                    imgUrl: '../../static/4.jpg',
                    name: '【天猫超市】三只松鼠 碧根果225g零食坚果炒货山核桃2包起售',
                    price: 19.9,
                    count: 1,
                    limitCount: 2,
                    weight: 0.225

                },
                {
                    selected: false,
                    imgUrl: '../../static/5.jpg',
                    name: '【天猫超市】金龙鱼 多用途麦芯粉5kg 不含增白剂面粉 烘焙原料',
                    price: 33.9,
                    count: 1,
                    limitCount: 20,
                    weight: 5
                }
            ]
        }
    ]
}
let getters = {
    odd(state, getters, rootState, rootGetters) {
        return state.arr;
    },
    total(state) {
        let allRows = state.items.map((v, i) => {
            return v.details.map((v1, i1) => {
                return v1.price * v1.count;

            });
        })
        var allPrices = allRows.reduce((acc, v) => {
            var total = 0;
            v.forEach((num) => {
                total += num;
            });
            return acc + total;
        }, 0);
        return allPrices.toFixed(2);

    }
};
let mutations = {
    [SELECT_ALL_CHANGE](state, value) {
        state.selectAll = value;
    },
    [SELECT_ALL](state, payload) {
        state.items.forEach((v, i) => {
            v.selected = state.selectAll;
            v.details.forEach((v1, i1) => {
                v1.selected = state.selectAll;
            });
        });
    },
    [SELECT_ITEM_ALL](state, index) {
        state.items[index].details.forEach((v, i) => {
            v.selected = state.items[index].selected;
        });
    },
    [SELECT_ITEM_CHANGE](state) {
        let allItemCheckboxState = state.items.map((v, i) => {
            return v.details.map((v1, i1) => {
                return v1.selected;
            });
        });
        allItemCheckboxState.forEach((v, i) => {
            let allChecked = v.every(x => x);
            state.items[i].selected = allChecked ? true : false;
        });
        var rootAll = allItemCheckboxState.reduce((acc, v) => {
            return acc.concat(v)
        }, [])
        var rootAllCheckd = rootAll.every(v => v);
        state.allChecked = rootAllCheckd ? true : false;
    },
    [MINUS](state, payload) {
        let current = state.items[payload.index].details[payload.index1];
        (current.count > 0) && (current.count--)
    },
    [PLUS](state, payload) {
        let current = state.items[payload.index].details[payload.index1];
        (current.count < current.limitCount) && (current.count++)
    },
    [DEL](state, payload) {
        let current = state.items[payload.index].details;
        current.splice(payload.index1, 1);
        current.length == 0 && state.items.splice(payload.index, 1);
    }
};
let actions = {};
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
```

> .vue

```js
import { mapState, mapMutations } from 'vuex';
export default {
    data() {
        return {}
    },
    methods: {
        minus(index, index1) {
            this.MINUS({ index, index1 })
        },
        plus(index, index1) {
            this.PLUS({ index, index1 });
        },
        selectItemAll(index) {
            this.SELECT_ITEM_ALL(index)
        },
        selectItemChange() {
            this.SELECT_ITEM_CHANGE();
        },
        del(index,index1){
            this.DEL({index,index1})
        },
        ...mapMutations({
            SELECT_ITEM_ALL: "shopCar/SELECT_ITEM_ALL",
            SELECT_ITEM_CHANGE: "shopCar/SELECT_ITEM_CHANGE",
            MINUS: "shopCar/MINUS",
            PLUS: "shopCar/PLUS",
            DEL: "shopCar/DEL"
        })
    },
    computed: {
        ...mapState({
            shopItem(state, rootGetters) {
                return state.shopCar.items
            },
            shopItemCopy(state, rootGetters) {
                return state.shopCar.itemsCopy
            }
        })

    },
    mounted() {

    },
    filters: {
        tofixed(value) {
            return value.toFixed(2);
        }
    }
}
```

> 结构 

[图片](../img/x.png)