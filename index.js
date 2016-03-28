/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-02-28
 * @author Liang <liang@maichong.it>
 */

'use strict';

const LRU = require('lru-cache');

class LruCacheDriver {
  constructor(options) {
    this._driver = LRU(options);
    this.type = 'lru';
    //标识已经是缓存对象实例
    this.isCacheDriver = true;
    //标识本驱动不会序列化数据
    this.noSerialization = true;
  }

  driver() {
    return this._driver;
  }

  set(key, value, lifetime) {
    if (lifetime) {
      lifetime *= 1000;
    }
    return Promise.resolve(this._driver.set(key, value, lifetime));
  }

  get(key) {
    return Promise.resolve(this._driver.get(key));
  }

  del(key) {
    return Promise.resolve(this._driver.del(key));
  }

  has(key) {
    return Promise.resolve(this._driver.has(key));
  }

  size() {
    return Promise.resolve(this._driver.itemCount);
  }

  flush() {
    this._driver.reset();
    return Promise.resolve();
  }
}

LruCacheDriver.default = LruCacheDriver;

module.exports = LruCacheDriver;
