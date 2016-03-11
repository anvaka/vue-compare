# vue.js performance comparison

The purpose of this repository is to investigate and compare performance of
vue.js with other frameworks. This is not supposed to be a comprehensive comparison,
but instead I will focus on my favorite performance area: rendering SVG.


## The setup

We will be rendering 1,000 circles in SVG document and measure FPS rates of
different implementations. The baseline is native DOM implementation: no frameworks,
using plain DOM API. Then we compare it with vue.js and react.

## Results

This is on my old MacBookPro (late 2011):

* vue.js (v1.0.17): ~14 FPS
* vue.js (v1.0.17-dev branch): ~18 FPS
* react: ~19-20 FPS
* native DOM: ~31-32 FPS

You can measure FPS yourself here: https://anvaka.github.io/vue-compare/index.html.
Just open your dev tools and enable FPS counter. I'm also printing average FPS over
course of last 10 seconds to console.

If you know how to make vue.js or any other benchmark faster - please let me know!
