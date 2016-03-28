# [alaska-cache-lru](https://github.com/maichong/alaska-cache-lru)
Alaska LRU cache driver based on [lru-cache](https://github.com/isaacs/node-lru-cache)

## configure

```javascript

cache: {
  type: 'alaska-cache-lru',
  // The maximum size of the cache. default Infinity
  max: 500,
  // Maximum age in ms
  maxAge: 1000 * 60 * 60
  //more https://github.com/isaacs/node-lru-cache#options
}

```

## Contribute
[Maichong Software](http://maichong.it)

[Liang Xingchen](https://github.com/liangxingchen)

## License

This project is licensed under the terms of the MIT license
