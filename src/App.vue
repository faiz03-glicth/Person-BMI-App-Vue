<template>
<div>
   <nav>
      <router-link to="/addperson">Add Person</router-link> |
      <router-link to="/viewall">View All</router-link> |
      <router-link to="/updateprofile/0">Edit</router-link> |
      <router-link to="/delete/0">Delete</router-link> |
      <router-link to="/bmitext">BMI Text</router-link>
    </nav>
    <router-view
      :personList="personList"
      @person-added="handleAddPerson"
      @person-updated="handleUpdatePerson"
      @person-deleted="handleDeletePerson"
    ></router-view>
  </div>
</template>

<script>
// import AddPerson from './components/AddPerson.vue'
// import BmiText from './components/BmiText.vue'
// import DeletePerson from './components/DeletePerson.vue'
// import EditPerson from './components/EditPerson.vue'
// import ListPersons from './components/ListPersons.vue'
// import ViewPerson from './components/ViewPerson.vue'


export default {
  name: 'App',
  components: {
    // AddPerson,
    // BmiText,
    // DeletePerson,
    // EditPerson,
    // ListPersons,
    // ViewPerson
  },
    data() {
        return {
            personList: [
                {
                    name: "White Boy",
                    yob: 1995,
                    age: new Date().getFullYear() - 1995,
                    weight: 68,
                    height: 175,
                    bmi: (68 / ((175 / 100) ** 2)).toFixed(2),
                    category: 't.b.c',
                    photoUrl: "https://randomuser.me/api/portraits/men/44.jpg"
                },
                {
                    name: "Karen",
                    yob: 2000,
                    age: new Date().getFullYear() - 2000,
                    weight: 52,
                    height: 160,
                    bmi: (52 / ((160 / 100) ** 2)).toFixed(2),
                    category: 'normal',
                    photoUrl: "https://randomuser.me/api/portraits/women/3.jpg"
                }
            ],
        }
    },
    methods: {
        handleAddPerson(entry)
        {
            this.personList.push(entry)
        }
    },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
