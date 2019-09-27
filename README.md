## Definition: What is a Slider?
slid·er
/ˈslīdər/

1. a handle that may be moved horizontally or vertically or button that can be pushed to control an image.
~~2. a small hamburger or other hot sandwich made with a soft bun.~~

Programmatically, a slider can be as simple as a set of boxes, set in a row with usually only one visible at a time, where either the user can navigate in-between or the display is automatic.

## Features

Slider to be Cascading Style Sheet only, no JavaScript<br />
At least 10 SVGs/PNGs<br />
Not Minified<br />
Self Hosted on sub-domain neoscape.billiemead.com<br />
Site secured with LetsEncrypt SSL<br />
Separate Git branch set-up for Unsplash API

##  Semantic markup first

```
<div class="neoscape-slider">
  <div id="neoscape-slide1" class="neoscape-slide"></div>
  <div id="neoscape-slide2" class="neoscape-slide"></div>
  <!--REPEAT AS NEEDED-->
</div>
```

## Linking semantically as well

```
<div class="neoscape-slide-wrap">
  
  <div class="neoscape-slider">
    <div id="neoscape-slide1" class="neoscape-slide">1</div>
    <div id="neoscape-slide2" class="neoscape-slide">2</div>
  </div>

  <a href="#neoscape-slide1">1</a>
  <a href="#neoscape-slide2">2</a>

</div>
```


##  CSS - Set them next to each other & allow scrolling

```
.neoscape-slider {
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: auto;
}
.neoscape-slide {
  width: 100%;
  flex-shrink: 0;
  height: 100%;
}
```
## Swipe smoothly on WebKit based mobile browsers.

```
.neoscape-slider {
  -webkit-overflow-scrolling: touch;
}
```

## Snap points to Slides snap into place nicely.

```
.neoscape-slider {
  scroll-snap-type: x mandatory;  
}
.neoscape-slides > div {
  scroll-snap-align: start;
}
```
