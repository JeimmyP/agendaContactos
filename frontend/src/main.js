import Vue from 'vue'
import VueRouter from 'vue-router'
  
import App from './App.vue'
import Create from './components/AddContact.vue'
import Edit from './components/EditContact.vue'
import Index from './components/ContactList.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserPlus,faAddressBook,faEdit,faTrashAlt,faEnvelope,faUser,faPhone,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserPlus,faAddressBook,faEdit,faTrashAlt,faEnvelope,faUser,faPhone,faMapMarkerAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)
  
Vue.config.productionTip = false
  
const routes = [
  {
    name: 'Create',
    path: '/create',
    component: Create
  },
  {
    name: 'Edit',
    path: '/edit/:id',
    component: Edit
  },
  {
    name: 'Index',
    path: '/',
    component: Index
  },
];
  
const router = new VueRouter({ mode: 'history', routes: routes })
  
new Vue({
  // init router
  router,
  render: h => h(App),
}).$mount('#app')
