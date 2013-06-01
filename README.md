# Anchors Bookmarklet
This bookmarklet creates a link for each linkable section of a given HTML page. Linkable sections are identified by the following code-samples:

- `id`-Attributes of any HTML tag
- `name`-Attributes of `a`nchor tags

## How to install
Create a new bookmark in your browser, with the following address:

```javascript
javascript:(function(){jsCode=document.createElement('script');jsCode.setAttribute('src','https://raw.github.com/heussd/anchors_bookmarklet/master/link_anchors.js');document.body.appendChild(jsCode);}());
```

