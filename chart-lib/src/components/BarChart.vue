<template>
  <div>
    <canvas ref="barChart" id="BarChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables)

export default {
    mounted(){
    // const ctx = document.getElementById('BarChart');
    // const ctx = this.$refs.barChart;
    // document.getElementById('BarChart')와 같은식으로 불러오면 충돌나기 쉬워서 refs 속성을 이용하자 
    new this.$_Chart(this.$refs.barChart, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  }
}
</script>

<style>

</style>