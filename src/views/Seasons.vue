<template>
  <div class="about">
    <div class="enterDate">
      <input 
      v-model="data.dateEnd"
      @keyup.enter="getdateSt"
      placeholder="Enter an end date (yyyy-mm-dd)"
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

<script>
import axios from 'axios';
import {reactive} from 'vue'

export default {
  name: 'Matches',
  data() {
    return {
      matches: [],
    };
  },
  setup() {
    let data = reactive({
      dateEnd: '',
    });
    const getdateSt = () => {
      const apiUrlMatches = 'http://api.football-data.org/v2/matches';
      const apiToken = 'dd045086dcdc4f00b0e16680f114a9d3';

      axios
      .get(`${apiUrlMatches}?dateFrom=${data.dateEnd}&dateTo=${data.dateEnd}`, {
        headers: {
          'X-Auth-Token': `${apiToken}`,
        },
        'filters': {
          'dateFrom': `2020-09-06`,
          'dateTo': `2021-09-06`
        }
      })
      .then(response => {
        console.log(response.data);
    })
    }
    
    return {
      data,
      getdateSt,
      matches: [],
    }
  },
  // mounted() {
  //   const apiUrlMatches = 'http://api.football-data.org/v2/matches';
  //   const apiToken = 'dd045086dcdc4f00b0e16680f114a9d3';
  //   axios
  //     .get(`${apiUrlMatches}?dateFrom=${dateEnd}&dateTo=${dateEnd}`, {
  //       headers: {
  //         'X-Auth-Token': `${apiToken}`,
  //       },
  //       'filters': {
  //         'dateFrom': `2020-09-06`,
  //         'dateTo': `2021-09-06`
  //       }
  //     })
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     // .then(response => {
  //     //   this.competitions = response.data.competitions
  //     // })
  // }
}
 </script>

 <style lang="sass" scoped>
 .enterDate
   input
     width: 200px
     text-align: center
 </style>

