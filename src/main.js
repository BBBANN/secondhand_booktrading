import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import store from './store'
import {
  Card, Form, FormItem, Input, Button, Row, Col, Container, Header, Aside, Main, Menu,
  MenuItem, MenuItemGroup, Submenu, Carousel, CarouselItem, Divider, Step, Steps, Table, TableColumn, Drawer, Select, Option,
  Pagination, Radio, RadioGroup, DatePicker, Dialog
} from 'element-ui'

Vue.component(Card.name, Card)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Container.name, Container)
Vue.component(Header.name, Header)
Vue.component(Aside.name, Aside)
Vue.component(Main.name, Main)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(Submenu.name, Submenu)
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)
Vue.component(Divider.name, Divider)
Vue.component(Step.name, Step)
Vue.component(Steps.name, Steps)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Drawer.name, Drawer)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.component(Pagination.name, Pagination)
Vue.component(Radio.name, Radio)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Dialog.name, Dialog)

Vue.use(VueRouter)

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   // ----------------------------需要后端--------------------------------
//   /**
//    * 判断token
//    */
// })

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
