# Scroll Nav

A simple method for creating a scroll to page anchor nav component.
Leverages native `scrollBy` if available, with a polyfill.


### Init

Create a new instance of the ScrollNav class, passing in params for your links and offset from top.

```
/**
 * @param {element}
let PageNav = new ScrollNav(anchorLinks, anchorOffset)
```

### Init Example
```
import ScrollNav from './ScrollNav.js'

let anchorLinks = document.querySelectorAll('.js-page-nav');
let anchorOffset = 20;

let PageNav = ScrollNav.init(anchorLinks, anchorOffset);
```


### Markup - example
```
<nav class="js-page-nav">
  <a href="#spiders">Spiders</a>
  <a href="#insects">Insects</a>
  <a href="#moths">Moths</a>
</nav>

<section id="spiders"></section>
<section id="insects"></section>
<section id="moths"></section>
```
