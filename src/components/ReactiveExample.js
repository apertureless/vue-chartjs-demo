import {Bar, mixins} from 'vue-chartjs'
const { reactiveData } = mixins

export default Bar.extend({
  mixins: [reactiveData],
  data () {
    return {
      chartData: null,
      gradient: null
    }
  },
  created () {
    this.fillData()
  },

  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)') // show this color at 0%;
    this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)'); // show this color at 50%
    this.gradient.addColorStop(1, 'rgba(145, 67, 204, 0.46)'); // show this color at 100%

    this.renderChart(this.chartData, {responsive: true, maintainAspectRatio: false})

    setInterval(() => {
      this.fillData()
    }, 5000)
  },

  methods: {
    fillData () {
      this.chartData = {
        labels: ['January' + this.getRandomInt(), 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: this.gradient,
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },

    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
})
