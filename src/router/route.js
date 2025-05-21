import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import AddPerson from './components/AddPerson.vue';
import ListPersons from './components/ListPersons.vue';
import EditPerson from './components/EditPerson.vue';
import DeletePerson from './components/DeletePerson.vue';
import ViewPerson from './components/ViewPerson.vue';
import BmiText from './components/BmiText.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/addperson', component: AddPerson },
    { path: '/viewall', component: ListPersons },
    { path: '/viewone/:id', component: ViewPerson }, 
    { path: '/updateprofile', component: EditPerson }, 
    { path: '/delete', component: DeletePerson },
    { path: '/bmitext', component: BmiText }, 
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');