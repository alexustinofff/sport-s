<template>
  <div class="about">
    <div class="enter-data"> 
    <input 
    v-model="data.teams"
    @keyup.enter="getSport" 
    placeholder="Enter a data (yyyy-mm-dd)" 
    type="text"
    >
     <table>
      <tr>
        <th>Area</th>
        <th>ID</th>
        <th>Name</th>
        <th>Start Date</th>
        <th>End Date</th>
      </tr>
      <tr v-for="competition in competitions"  v-bind:key="competition.id">
        <td>{{competition.area?.name}}</td>
        <td>{{competition.area?.id}}</td>
        <td>{{competition.name}}</td>
        <td>{{competition.currentSeason?.startDate}}</td>
        <td>{{competition.currentSeason?.endDate}}</td>
      </tr>
    </table>
  </div>
  </div>
</template>
