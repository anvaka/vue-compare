# vue.js performance comparison

The purpose of this repository is to investigate and compare performance of
vue.js with other frameworks. This is not supposed to be a comprehensive comparison,
but instead I will focus on my favorite performance area: rendering SVG.


## The setup

We will be rendering 1,000 circles in SVG document and measure FPS rates of
different implementations. The baseline is native DOM implementation: no frameworks,
using plain DOM API.
