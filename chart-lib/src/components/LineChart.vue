<template>
  <div>
    <canvas ref="lineChart" id="LineChart" width="400" height="400"></canvas>
  </div>
</template>

<script>

export default {
    props :{
        propsdata : {
            type : Array,
            default: () =>  []
        }
    },
    mounted(){
        new this.$_Chart(this.$refs.lineChart, {
            type: 'line',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets : this.propsdata
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }
}
</script>

<style>

</style>