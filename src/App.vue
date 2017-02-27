<template>
  <div id="app">
    <div class="container">
      <h1>🦄 vue-chartjs demo</h1>
      <div class="Chart__list">
        <div class="Chart">
          <h2>Linechart</h2>
          <line-example></line-example>
        </div>
        <div class="Chart">
          <h2>Barchart</h2>
          <bar-example></bar-example>
        </div>
        <div class="Chart">
          <h2>Barchart with reactive mixing for live data</h2>
          <reactive-example></reactive-example>
        </div>
        <div class="Chart">
          <h2>Doughnutchart</h2>
          <doughnut-example></doughnut-example>
        </div>
        <div class="Chart">
          <h2>Piechart</h2>
          <pie-example></pie-example>
        </div>
        <div class="Chart">
          <h2>Radarchart</h2>
          <radar-example></radar-example>
        </div>
        <div class="Chart">
          <h2>Polararea</h2>
          <polar-area-example></polar-area-example>
        </div>
        <div class="Chart">
          <h2>Bubblechart</h2>
          <bubble-example></bubble-example>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarExample from './components/BarExample'
import LineExample from './components/LineExample'
import DoughnutExample from './components/DoughnutExample'
import PieExample from './components/PieExample'
import RadarExample from './components/RadarExample'
import PolarAreaExample from './components/PolarAreaExample'
import BubbleExample from './components/BubbleExample'
import ReactiveExample from './components/ReactiveExample'

export default {
  name: 'app',
  components: {
    BarExample,
    LineExample,
    DoughnutExample,
    PieExample,
    RadarExample,
    PolarAreaExample,
    BubbleExample,
    ReactiveExample
  }
}
</script>

<style>
body {
  animation: colorchange 50s infinite;
}

@keyframes colorchange
{
  0%   {background: #9b59b6;}
  25%  {background: #f1c40f;}
  50%  {background: #3498db;}
  75%  {background: #1abc9c;}
  100% {background: #9b59b6;}
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 800px;
  margin:  0 auto;

  color:  rgba(155, 89, 182, 1);
}


.Chart {
  background: #212733;
  border-radius: 15px;
  box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
  margin:  25px 0;
}

.Chart h2 {
  margin-top: 0;
  padding: 15px 0;
  color:  rgba(255, 0,0, 0.5);
  border-bottom: 1px solid #323d54;
}
</style>
