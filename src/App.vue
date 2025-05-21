<template>
<div>
    <nav>
      <a href="#">Add Person</a>
      <a href="#">View Person</a>
      <a href="#">Edit Person</a>
      <a href="#">Delete Person</a>
      <a href="#">View Statistic Person</a>
    </nav>
    <div>
      <AddPerson></AddPerson>
      <BmiText></BmiText>
      <DeletePerson></DeletePerson>
      <EditPerson></EditPerson>
      <ListPersons></ListPersons>
      <ViewPerson></ViewPerson>
    </div>
    <h4></h4>
  </div>
</template>

<script>
import AddPerson from './components/AddPerson.vue'
import BmiText from './components/BmiText.vue'
import DeletePerson from './components/DeletePerson.vue'
import EditPerson from './components/EditPerson.vue'
import ListPersons from './components/ListPersons.vue'
import ViewPerson from './components/ViewPerson.vue'


export default {
  name: 'App',
  components: {
    AddPerson,
    BmiText,
    DeletePerson,
    EditPerson,
    ListPersons,
    ViewPerson
  },
    data() {
        return {
            personList: [
                {
                    name: "Hassan",
                    yob: 1995,
                    age: new Date().getFullYear() - 1995,
                    weight: 68,
                    height: 175,
                    bmi: (68 / ((175 / 100) ** 2)).toFixed(2),
                    category: 't.b.c',
                    photoUrl: "https://randomuser.me/api/portraits/men/44.jpg"
                },
                {
                    name: "Siti",
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

</style>
