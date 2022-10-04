<script>
import { onMount } from 'svelte';

var WIDTH = 800
var HEIGHT = 600
var model = createModel(3000);
var points = model.points;
var raf;

var counter = 0;
var startTime = new Date();
setInterval(printStats, 10000);

onMount(() => {
	requestAnimationFrame(frame);
});

function frame() {
	raf = window.requestAnimationFrame(frame)
	model.step()
	points = model.points
	counter++;
}

function printStats() {
  var currentTime = new Date();
  var elapsed = (currentTime - startTime)/1000;
  console.log(counter + ' calls in last ' + elapsed + 's');
  console.log(counter/elapsed + ' fps per second over ' + elapsed + 's time period');
  counter = 0;
  startTime = new Date();
}

function createModel (count) {
  var points = []
  for (var i = 0; i < count; ++i) {
    points.push({
      x: Math.random() * WIDTH,
      y: Math.random() * HEIGHT,
      vx: Math.random() * 4 - 2,
      vy: Math.random() * 4 - 2
    })
  }

  return {
    points,
    step
  }

  function step () {
		points.forEach(move)
  }

  function move (p) {
    if (p.x > WIDTH || p.x < 0) p.vx *= -1
    if (p.y > HEIGHT || p.y < 0) p.vy *= -1
    p.y += p.vy
    p.x += p.vx
  }
}
</script>

 <svg>
 {#each points as point}
    <circle cx={point.x} cy={point.y} r='2px' fill='#FC309D'></circle>
	{/each}
 </svg>

<style>
html, body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
svg {
  width: 800px;
  height: 600px;
}
</style>