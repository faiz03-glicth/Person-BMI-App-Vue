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
  }
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
</style>
