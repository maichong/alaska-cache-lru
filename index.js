/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-02-28
 * @author Liang <liang@maichong.it>
 */

'use strict';

const LRU = require('lru-cache');
const _ = require('lodash');
const debug = require('debug')('alaska-cache-lru');

class LruCacheDriver {
  constructor(options) {
    let opts = _.assign({}, options);
    if (opts.maxAge) {
      opts.maxAge *= 1000;
    }
    this._driver = LRU(opts);
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
    debug('set ', key, '=>', value, '(', lifetime, ')');
    if (lifetime) {
      lifetime *= 1000;
    }
    return Promise.resolve(this._driver.set(key, value, lifetime));
  }

  get(key) {
    let value = this._driver.get(key);
    debug('get ', key, '=>', value);
    return Promise.resolve(value);
  }

  del(key) {
    debug('del ', key);
    return Promise.resolve(this._driver.del(key));
  }

  has(key) {
    debug('has ', key);
    return Promise.resolve(this._driver.has(key));
  }

  size() {
    debug('size', this._driver.itemCount);
    return Promise.resolve(this._driver.itemCount);
  }

  flush() {
    debug('flush');
    this._driver.reset();
    return Promise.resolve();
  }
}

LruCacheDriver.default = LruCacheDriver;

module.exports = LruCacheDriver;
