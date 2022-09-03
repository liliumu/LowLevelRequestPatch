A project I made this weekend that hooks browser HTTP requests and outputs them to console.log.

Dev server

```
python3 -m http.server --directory ./page 8080
```

Todo list

* [x] Get xhr response header
* [x] UserScript
* [ ] Get xhr request header - <a target="_blank" href="https://stackoverflow.com/questions/58776280/how-can-i-convert-arraybuffer-to-json">[how]</a>
* [ ] Override `fetch` api

GitHub Pages demo site

- <a target="_blank" href="https://liliumu.github.io/LowLevelRequestPatch/">https://liliumu.github.io/LowLevelRequestPatch/</a>
