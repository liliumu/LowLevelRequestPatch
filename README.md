A project I made this weekend that hooks browser HTTP requests and outputs them to console.log.

GitHub Pages demo site

- ![](https://github.com/liliumu/LowLevelRequestPatch/actions/workflows/pages.yml/badge.svg)
- https://liliumu.github.io/LowLevelRequestPatch/ 

Dev server

```
python3 -m http.server --directory ./page 8080
```

Todo/done list

* [x] Get xhr response header
* [x] UserScript
  + [x] General
  + [x] TweetDeck
  + [x] Logging
* [x] Get xhr response url
* [ ] Get xhr request header / url
* [ ] Override `fetch` api
