(function () {
    const class2type = {},
    toString = class2type.toString,
        hasOwn = class2type.hasOwnProperty;
    
    
    const isFunction = function isFunction (obj) {
        return typeof obj === "function" &&
            typeof obj.nodeType !== "number" &&
         typeof obj.item !== "function"
    }

const isPlainObject = function isPlainObject (obj) {
    let proto, Ctor;
    if (!obj || toString.call(obj) !== "[object Object") return false;
    proto = Object.getPrototypeOf(obj);
    if (!proto) return true
    Ctor = hasOwn.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor === "function" && Ctor === Object;
;}


const clone = function clone (...params) {
    let target = params[0],
        deep = false,
        length = params.length,
        i = 1,
        isArray,
        isObject,
        result,
        treated;
    if (typeof target === "boolean" && length > 1) {
        deep = target;
        target = params[1];
        i = 2;
    }
    treated = params[i];
    if (!treated) treated = new Set();
    if (treated.has(target)) return target;
    treated.add(target);
    isArray = Array.isArray(target);
    isObject = isPlainObject(target);
    if (target == null) return target;
    if (!isArray && !isObject && !isFunction(target) && typeof target == "object") {
        try {
            return new target.constructor(target);
        } catch (_) {
            return target;
        }
    }
    if (!isArray && !isObject) return target;
    result = new target.constructor();
    each(target, (copy, name) => {
        if (deep) {
            result[name] = clone(deep, copy, treated);
            return;
        }
        result[name] = copy;
    });
    return result;
};

const utils = {
    clone
}

if (typeof window !== "undefined"){
    let $ = window._;
    utils.noConflict = function noConflict () {
        if (window._  === utils) {
            window._ = $
        }
        return utils
    }
}

if (typeof window !== "undefined") window.utils = window._ = utils;
if (typeof module === 'object' && typeof module.export === 'object') module.export = utils})()