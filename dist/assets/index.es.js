var va = Object.defineProperty;
var ya = (r, t, e) => t in r ? va(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var I = (r, t, e) => ya(r, typeof t != "symbol" ? t + "" : t, e);
var On = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _a(r) {
  if (r.__esModule) return r;
  var t = r.default;
  if (typeof t == "function") {
    var e = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(r).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(r, n);
    Object.defineProperty(e, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return r[n];
      }
    });
  }), e;
}
var _s = {};
function Pn(r, t) {
  if (r == null) return {};
  var e, n, i = function(a, u) {
    if (a == null) return {};
    var c, p, m = {}, g = Object.keys(a);
    for (p = 0; p < g.length; p++) c = g[p], u.indexOf(c) >= 0 || (m[c] = a[c]);
    return m;
  }(r, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    for (n = 0; n < o.length; n++) e = o[n], t.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(r, e) && (i[e] = r[e]);
  }
  return i;
}
function fe(r, t) {
  if (!(r instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function $(r) {
  return $ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $(r);
}
function bs(r) {
  var t = function(e, n) {
    if ($(e) !== "object" || e === null) return e;
    var i = e[Symbol.toPrimitive];
    if (i !== void 0) {
      var o = i.call(e, n);
      if ($(o) !== "object") return o;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (n === "string" ? String : Number)(e);
  }(r, "string");
  return $(t) === "symbol" ? t : String(t);
}
function Ln(r, t) {
  for (var e = 0; e < t.length; e++) {
    var n = t[e];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, bs(n.key), n);
  }
}
function me(r, t, e) {
  return t && Ln(r.prototype, t), e && Ln(r, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Ee(r) {
  if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function _t(r, t) {
  return _t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
    return e.__proto__ = n, e;
  }, _t(r, t);
}
function er(r, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(t && t.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), t && _t(r, t);
}
function tr(r, t) {
  if (t && ($(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Ee(r);
}
function he(r) {
  return he = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, he(r);
}
function Te(r, t, e) {
  return (t = bs(t)) in r ? Object.defineProperty(r, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : r[t] = e, r;
}
function In(r, t, e, n, i, o, a) {
  try {
    var u = r[o](a), c = u.value;
  } catch (p) {
    return void e(p);
  }
  u.done ? t(c) : Promise.resolve(c).then(n, i);
}
function P(r) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(n, i) {
      var o = r.apply(t, e);
      function a(c) {
        In(o, n, i, a, u, "next", c);
      }
      function u(c) {
        In(o, n, i, a, u, "throw", c);
      }
      a(void 0);
    });
  };
}
function jn(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
  return n;
}
function Se(r, t) {
  return function(e) {
    if (Array.isArray(e)) return e;
  }(r) || function(e, n) {
    var i = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (i != null) {
      var o, a, u, c, p = [], m = !0, g = !1;
      try {
        if (u = (i = i.call(e)).next, n === 0) {
          if (Object(i) !== i) return;
          m = !1;
        } else for (; !(m = (o = u.call(i)).done) && (p.push(o.value), p.length !== n); m = !0) ;
      } catch (_) {
        g = !0, a = _;
      } finally {
        try {
          if (!m && i.return != null && (c = i.return(), Object(c) !== c)) return;
        } finally {
          if (g) throw a;
        }
      }
      return p;
    }
  }(r, t) || function(e, n) {
    if (e) {
      if (typeof e == "string") return jn(e, n);
      var i = Object.prototype.toString.call(e).slice(8, -1);
      return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? jn(e, n) : void 0;
    }
  }(r, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
var ws, Me = {}, ba = { get exports() {
  return Me;
}, set exports(r) {
  Me = r;
} }, rt = typeof Reflect == "object" ? Reflect : null, Dn = rt && typeof rt.apply == "function" ? rt.apply : function(r, t, e) {
  return Function.prototype.apply.call(r, t, e);
};
ws = rt && typeof rt.ownKeys == "function" ? rt.ownKeys : Object.getOwnPropertySymbols ? function(r) {
  return Object.getOwnPropertyNames(r).concat(Object.getOwnPropertySymbols(r));
} : function(r) {
  return Object.getOwnPropertyNames(r);
};
var Nn = Number.isNaN || function(r) {
  return r != r;
};
function V() {
  V.init.call(this);
}
ba.exports = V, Me.once = function(r, t) {
  return new Promise(function(e, n) {
    function i(a) {
      r.removeListener(t, o), n(a);
    }
    function o() {
      typeof r.removeListener == "function" && r.removeListener("error", i), e([].slice.call(arguments));
    }
    Vn(r, t, o, { once: !0 }), t !== "error" && function(a, u, c) {
      typeof a.on == "function" && Vn(a, "error", u, c);
    }(r, i, { once: !0 });
  });
}, V.EventEmitter = V, V.prototype._events = void 0, V.prototype._eventsCount = 0, V.prototype._maxListeners = void 0;
var Rn = 10;
function Rt(r) {
  if (typeof r != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof r);
}
function Ss(r) {
  return r._maxListeners === void 0 ? V.defaultMaxListeners : r._maxListeners;
}
function xn(r, t, e, n) {
  var i, o, a, u;
  if (Rt(e), (o = r._events) === void 0 ? (o = r._events = /* @__PURE__ */ Object.create(null), r._eventsCount = 0) : (o.newListener !== void 0 && (r.emit("newListener", t, e.listener ? e.listener : e), o = r._events), a = o[t]), a === void 0) a = o[t] = e, ++r._eventsCount;
  else if (typeof a == "function" ? a = o[t] = n ? [e, a] : [a, e] : n ? a.unshift(e) : a.push(e), (i = Ss(r)) > 0 && a.length > i && !a.warned) {
    a.warned = !0;
    var c = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    c.name = "MaxListenersExceededWarning", c.emitter = r, c.type = t, c.count = a.length, u = c, console && console.warn && console.warn(u);
  }
  return r;
}
function wa() {
  if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Fn(r, t, e) {
  var n = { fired: !1, wrapFn: void 0, target: r, type: t, listener: e }, i = wa.bind(n);
  return i.listener = e, n.wrapFn = i, i;
}
function qn(r, t, e) {
  var n = r._events;
  if (n === void 0) return [];
  var i = n[t];
  return i === void 0 ? [] : typeof i == "function" ? e ? [i.listener || i] : [i] : e ? function(o) {
    for (var a = new Array(o.length), u = 0; u < a.length; ++u) a[u] = o[u].listener || o[u];
    return a;
  }(i) : Es(i, i.length);
}
function $n(r) {
  var t = this._events;
  if (t !== void 0) {
    var e = t[r];
    if (typeof e == "function") return 1;
    if (e !== void 0) return e.length;
  }
  return 0;
}
function Es(r, t) {
  for (var e = new Array(t), n = 0; n < t; ++n) e[n] = r[n];
  return e;
}
function Vn(r, t, e, n) {
  if (typeof r.on == "function") n.once ? r.once(t, e) : r.on(t, e);
  else {
    if (typeof r.addEventListener != "function") throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof r);
    r.addEventListener(t, function i(o) {
      n.once && r.removeEventListener(t, i), e(o);
    });
  }
}
Object.defineProperty(V, "defaultMaxListeners", { enumerable: !0, get: function() {
  return Rn;
}, set: function(r) {
  if (typeof r != "number" || r < 0 || Nn(r)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + r + ".");
  Rn = r;
} }), V.init = function() {
  this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, V.prototype.setMaxListeners = function(r) {
  if (typeof r != "number" || r < 0 || Nn(r)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + r + ".");
  return this._maxListeners = r, this;
}, V.prototype.getMaxListeners = function() {
  return Ss(this);
}, V.prototype.emit = function(r) {
  for (var t = [], e = 1; e < arguments.length; e++) t.push(arguments[e]);
  var n = r === "error", i = this._events;
  if (i !== void 0) n = n && i.error === void 0;
  else if (!n) return !1;
  if (n) {
    var o;
    if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
    var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
    throw a.context = o, a;
  }
  var u = i[r];
  if (u === void 0) return !1;
  if (typeof u == "function") Dn(u, this, t);
  else {
    var c = u.length, p = Es(u, c);
    for (e = 0; e < c; ++e) Dn(p[e], this, t);
  }
  return !0;
}, V.prototype.addListener = function(r, t) {
  return xn(this, r, t, !1);
}, V.prototype.on = V.prototype.addListener, V.prototype.prependListener = function(r, t) {
  return xn(this, r, t, !0);
}, V.prototype.once = function(r, t) {
  return Rt(t), this.on(r, Fn(this, r, t)), this;
}, V.prototype.prependOnceListener = function(r, t) {
  return Rt(t), this.prependListener(r, Fn(this, r, t)), this;
}, V.prototype.removeListener = function(r, t) {
  var e, n, i, o, a;
  if (Rt(t), (n = this._events) === void 0) return this;
  if ((e = n[r]) === void 0) return this;
  if (e === t || e.listener === t) --this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete n[r], n.removeListener && this.emit("removeListener", r, e.listener || t));
  else if (typeof e != "function") {
    for (i = -1, o = e.length - 1; o >= 0; o--) if (e[o] === t || e[o].listener === t) {
      a = e[o].listener, i = o;
      break;
    }
    if (i < 0) return this;
    i === 0 ? e.shift() : function(u, c) {
      for (; c + 1 < u.length; c++) u[c] = u[c + 1];
      u.pop();
    }(e, i), e.length === 1 && (n[r] = e[0]), n.removeListener !== void 0 && this.emit("removeListener", r, a || t);
  }
  return this;
}, V.prototype.off = V.prototype.removeListener, V.prototype.removeAllListeners = function(r) {
  var t, e, n;
  if ((e = this._events) === void 0) return this;
  if (e.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : e[r] !== void 0 && (--this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete e[r]), this;
  if (arguments.length === 0) {
    var i, o = Object.keys(e);
    for (n = 0; n < o.length; ++n) (i = o[n]) !== "removeListener" && this.removeAllListeners(i);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (typeof (t = e[r]) == "function") this.removeListener(r, t);
  else if (t !== void 0) for (n = t.length - 1; n >= 0; n--) this.removeListener(r, t[n]);
  return this;
}, V.prototype.listeners = function(r) {
  return qn(this, r, !0);
}, V.prototype.rawListeners = function(r) {
  return qn(this, r, !1);
}, V.listenerCount = function(r, t) {
  return typeof r.listenerCount == "function" ? r.listenerCount(t) : $n.call(r, t);
}, V.prototype.listenerCount = $n, V.prototype.eventNames = function() {
  return this._eventsCount > 0 ? ws(this._events) : [];
};
var Un = Object.prototype.hasOwnProperty;
function Bn(r, t, e) {
  for (e of r.keys()) if (ee(e, t)) return e;
}
function ee(r, t) {
  var e, n, i;
  if (r === t) return !0;
  if (r && t && (e = r.constructor) === t.constructor) {
    if (e === Date) return r.getTime() === t.getTime();
    if (e === RegExp) return r.toString() === t.toString();
    if (e === Array) {
      if ((n = r.length) === t.length) for (; n-- && ee(r[n], t[n]); ) ;
      return n === -1;
    }
    if (e === Set) {
      if (r.size !== t.size) return !1;
      for (n of r)
        if ((i = n) && typeof i == "object" && !(i = Bn(t, i)) || !t.has(i)) return !1;
      return !0;
    }
    if (e === Map) {
      if (r.size !== t.size) return !1;
      for (n of r)
        if ((i = n[0]) && typeof i == "object" && !(i = Bn(t, i)) || !ee(n[1], t.get(i))) return !1;
      return !0;
    }
    if (e === ArrayBuffer) r = new Uint8Array(r), t = new Uint8Array(t);
    else if (e === DataView) {
      if ((n = r.byteLength) === t.byteLength) for (; n-- && r.getInt8(n) === t.getInt8(n); ) ;
      return n === -1;
    }
    if (ArrayBuffer.isView(r)) {
      if ((n = r.byteLength) === t.byteLength) for (; n-- && r[n] === t[n]; ) ;
      return n === -1;
    }
    if (!e || typeof r == "object") {
      for (e in n = 0, r)
        if (Un.call(r, e) && ++n && !Un.call(t, e) || !(e in t) || !ee(r[e], t[e])) return !1;
      return Object.keys(t).length === n;
    }
  }
  return r != r && t != t;
}
const Sa = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" }, ks = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" }, W = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" }, Z = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" }, Le = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" };
class b {
  static getFirstMatch(t, e) {
    const n = e.match(t);
    return n && n.length > 0 && n[1] || "";
  }
  static getSecondMatch(t, e) {
    const n = e.match(t);
    return n && n.length > 1 && n[2] || "";
  }
  static matchAndReturnConst(t, e, n) {
    if (t.test(e)) return n;
  }
  static getWindowsVersionName(t) {
    switch (t) {
      case "NT":
        return "NT";
      case "XP":
      case "NT 5.1":
        return "XP";
      case "NT 5.0":
        return "2000";
      case "NT 5.2":
        return "2003";
      case "NT 6.0":
        return "Vista";
      case "NT 6.1":
        return "7";
      case "NT 6.2":
        return "8";
      case "NT 6.3":
        return "8.1";
      case "NT 10.0":
        return "10";
      default:
        return;
    }
  }
  static getMacOSVersionName(t) {
    const e = t.split(".").splice(0, 2).map((n) => parseInt(n, 10) || 0);
    if (e.push(0), e[0] === 10) switch (e[1]) {
      case 5:
        return "Leopard";
      case 6:
        return "Snow Leopard";
      case 7:
        return "Lion";
      case 8:
        return "Mountain Lion";
      case 9:
        return "Mavericks";
      case 10:
        return "Yosemite";
      case 11:
        return "El Capitan";
      case 12:
        return "Sierra";
      case 13:
        return "High Sierra";
      case 14:
        return "Mojave";
      case 15:
        return "Catalina";
      default:
        return;
    }
  }
  static getAndroidVersionName(t) {
    const e = t.split(".").splice(0, 2).map((n) => parseInt(n, 10) || 0);
    if (e.push(0), !(e[0] === 1 && e[1] < 5)) return e[0] === 1 && e[1] < 6 ? "Cupcake" : e[0] === 1 && e[1] >= 6 ? "Donut" : e[0] === 2 && e[1] < 2 ? "Eclair" : e[0] === 2 && e[1] === 2 ? "Froyo" : e[0] === 2 && e[1] > 2 ? "Gingerbread" : e[0] === 3 ? "Honeycomb" : e[0] === 4 && e[1] < 1 ? "Ice Cream Sandwich" : e[0] === 4 && e[1] < 4 ? "Jelly Bean" : e[0] === 4 && e[1] >= 4 ? "KitKat" : e[0] === 5 ? "Lollipop" : e[0] === 6 ? "Marshmallow" : e[0] === 7 ? "Nougat" : e[0] === 8 ? "Oreo" : e[0] === 9 ? "Pie" : void 0;
  }
  static getVersionPrecision(t) {
    return t.split(".").length;
  }
  static compareVersions(t, e, n = !1) {
    const i = b.getVersionPrecision(t), o = b.getVersionPrecision(e);
    let a = Math.max(i, o), u = 0;
    const c = b.map([t, e], (p) => {
      const m = a - b.getVersionPrecision(p), g = p + new Array(m + 1).join(".0");
      return b.map(g.split("."), (_) => new Array(20 - _.length).join("0") + _).reverse();
    });
    for (n && (u = a - Math.min(i, o)), a -= 1; a >= u; ) {
      if (c[0][a] > c[1][a]) return 1;
      if (c[0][a] === c[1][a]) {
        if (a === u) return 0;
        a -= 1;
      } else if (c[0][a] < c[1][a]) return -1;
    }
  }
  static map(t, e) {
    const n = [];
    let i;
    if (Array.prototype.map) return Array.prototype.map.call(t, e);
    for (i = 0; i < t.length; i += 1) n.push(e(t[i]));
    return n;
  }
  static find(t, e) {
    let n, i;
    if (Array.prototype.find) return Array.prototype.find.call(t, e);
    for (n = 0, i = t.length; n < i; n += 1) {
      const o = t[n];
      if (e(o, n)) return o;
    }
  }
  static assign(t, ...e) {
    const n = t;
    let i, o;
    if (Object.assign) return Object.assign(t, ...e);
    for (i = 0, o = e.length; i < o; i += 1) {
      const a = e[i];
      typeof a == "object" && a !== null && Object.keys(a).forEach((u) => {
        n[u] = a[u];
      });
    }
    return t;
  }
  static getBrowserAlias(t) {
    return Sa[t];
  }
  static getBrowserTypeByAlias(t) {
    return ks[t] || "";
  }
}
const B = /version\/(\d+(\.?_?\d+)+)/i, Ea = [{ test: [/googlebot/i], describe(r) {
  const t = { name: "Googlebot" }, e = b.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, r) || b.getFirstMatch(B, r);
  return e && (t.version = e), t;
} }, { test: [/opera/i], describe(r) {
  const t = { name: "Opera" }, e = b.getFirstMatch(B, r) || b.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/opr\/|opios/i], describe(r) {
  const t = { name: "Opera" }, e = b.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, r) || b.getFirstMatch(B, r);
  return e && (t.version = e), t;
} }, { test: [/SamsungBrowser/i], describe(r) {
  const t = { name: "Samsung Internet for Android" }, e = b.getFirstMatch(B, r) || b.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/Whale/i], describe(r) {
  const t = { name: "NAVER Whale Browser" }, e = b.getFirstMatch(B, r) || b.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/MZBrowser/i], describe(r) {
  const t = { name: "MZ Browser" }, e = b.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, r) || b.getFirstMatch(B, r);
  return e && (t.version = e), t;
} }, { test: [/focus/i], describe(r) {
  const t = { name: "Focus" }, e = b.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, r) || b.getFirstMatch(B, r);
  return e && (t.version = e), t;
} }, { test: [/swing/i], describe(r) {
  const t = { name: "Swing" }, e = b.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, r) || b.getFirstMatch(B, r);
  return e && (t.version = e), t;
} }, { test: [/coast/i], describe(r) {
  const t = { name: "Opera Coast" }, e = b.getFirstMatch(B, r) || b.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe(r) {
  const t = { name: "Opera Touch" }, e = b.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, r) || b.getFirstMatch(B, r);
  return e && (t.version = e), t;
} }, { test: [/yabrowser/i], describe(r) {
  const t = { name: "Yandex Browser" }, e = b.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, r) || b.getFirstMatch(B, r);
  return e && (t.version = e), t;
} }, { test: [/ucbrowser/i], describe(r) {
  const t = { name: "UC Browser" }, e = b.getFirstMatch(B, r) || b.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/Maxthon|mxios/i], describe(r) {
  const t = { name: "Maxthon" }, e = b.getFirstMatch(B, r) || b.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/epiphany/i], describe(r) {
  const t = { name: "Epiphany" }, e = b.getFirstMatch(B, r) || b.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/puffin/i], describe(r) {
  const t = { name: "Puffin" }, e = b.getFirstMatch(B, r) || b.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/sleipnir/i], describe(r) {
  const t = { name: "Sleipnir" }, e = b.getFirstMatch(B, r) || b.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/k-meleon/i], describe(r) {
  const t = { name: "K-Meleon" }, e = b.getFirstMatch(B, r) || b.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/micromessenger/i], describe(r) {
  const t = { name: "WeChat" }, e = b.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, r) || b.getFirstMatch(B, r);
  return e && (t.version = e), t;
} }, { test: [/qqbrowser/i], describe(r) {
  const t = { name: /qqbrowserlite/i.test(r) ? "QQ Browser Lite" : "QQ Browser" }, e = b.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, r) || b.getFirstMatch(B, r);
  return e && (t.version = e), t;
} }, { test: [/msie|trident/i], describe(r) {
  const t = { name: "Internet Explorer" }, e = b.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/\sedg\//i], describe(r) {
  const t = { name: "Microsoft Edge" }, e = b.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/edg([ea]|ios)/i], describe(r) {
  const t = { name: "Microsoft Edge" }, e = b.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/vivaldi/i], describe(r) {
  const t = { name: "Vivaldi" }, e = b.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/seamonkey/i], describe(r) {
  const t = { name: "SeaMonkey" }, e = b.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/sailfish/i], describe(r) {
  const t = { name: "Sailfish" }, e = b.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, r);
  return e && (t.version = e), t;
} }, { test: [/silk/i], describe(r) {
  const t = { name: "Amazon Silk" }, e = b.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/phantom/i], describe(r) {
  const t = { name: "PhantomJS" }, e = b.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/slimerjs/i], describe(r) {
  const t = { name: "SlimerJS" }, e = b.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe(r) {
  const t = { name: "BlackBerry" }, e = b.getFirstMatch(B, r) || b.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/(web|hpw)[o0]s/i], describe(r) {
  const t = { name: "WebOS Browser" }, e = b.getFirstMatch(B, r) || b.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/bada/i], describe(r) {
  const t = { name: "Bada" }, e = b.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/tizen/i], describe(r) {
  const t = { name: "Tizen" }, e = b.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, r) || b.getFirstMatch(B, r);
  return e && (t.version = e), t;
} }, { test: [/qupzilla/i], describe(r) {
  const t = { name: "QupZilla" }, e = b.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, r) || b.getFirstMatch(B, r);
  return e && (t.version = e), t;
} }, { test: [/firefox|iceweasel|fxios/i], describe(r) {
  const t = { name: "Firefox" }, e = b.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/electron/i], describe(r) {
  const t = { name: "Electron" }, e = b.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/MiuiBrowser/i], describe(r) {
  const t = { name: "Miui" }, e = b.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/chromium/i], describe(r) {
  const t = { name: "Chromium" }, e = b.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, r) || b.getFirstMatch(B, r);
  return e && (t.version = e), t;
} }, { test: [/chrome|crios|crmo/i], describe(r) {
  const t = { name: "Chrome" }, e = b.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/GSA/i], describe(r) {
  const t = { name: "Google Search" }, e = b.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test(r) {
  const t = !r.test(/like android/i), e = r.test(/android/i);
  return t && e;
}, describe(r) {
  const t = { name: "Android Browser" }, e = b.getFirstMatch(B, r);
  return e && (t.version = e), t;
} }, { test: [/playstation 4/i], describe(r) {
  const t = { name: "PlayStation 4" }, e = b.getFirstMatch(B, r);
  return e && (t.version = e), t;
} }, { test: [/safari|applewebkit/i], describe(r) {
  const t = { name: "Safari" }, e = b.getFirstMatch(B, r);
  return e && (t.version = e), t;
} }, { test: [/.*/i], describe(r) {
  const t = r.search("\\(") !== -1 ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
  return { name: b.getFirstMatch(t, r), version: b.getSecondMatch(t, r) };
} }];
var ka = [{ test: [/Roku\/DVP/], describe(r) {
  const t = b.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, r);
  return { name: Z.Roku, version: t };
} }, { test: [/windows phone/i], describe(r) {
  const t = b.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, r);
  return { name: Z.WindowsPhone, version: t };
} }, { test: [/windows /i], describe(r) {
  const t = b.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, r), e = b.getWindowsVersionName(t);
  return { name: Z.Windows, version: t, versionName: e };
} }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe(r) {
  const t = { name: Z.iOS }, e = b.getSecondMatch(/(Version\/)(\d[\d.]+)/, r);
  return e && (t.version = e), t;
} }, { test: [/macintosh/i], describe(r) {
  const t = b.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, r).replace(/[_\s]/g, "."), e = b.getMacOSVersionName(t), n = { name: Z.MacOS, version: t };
  return e && (n.versionName = e), n;
} }, { test: [/(ipod|iphone|ipad)/i], describe(r) {
  const t = b.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, r).replace(/[_\s]/g, ".");
  return { name: Z.iOS, version: t };
} }, { test(r) {
  const t = !r.test(/like android/i), e = r.test(/android/i);
  return t && e;
}, describe(r) {
  const t = b.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, r), e = b.getAndroidVersionName(t), n = { name: Z.Android, version: t };
  return e && (n.versionName = e), n;
} }, { test: [/(web|hpw)[o0]s/i], describe(r) {
  const t = b.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, r), e = { name: Z.WebOS };
  return t && t.length && (e.version = t), e;
} }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe(r) {
  const t = b.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, r) || b.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, r) || b.getFirstMatch(/\bbb(\d+)/i, r);
  return { name: Z.BlackBerry, version: t };
} }, { test: [/bada/i], describe(r) {
  const t = b.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, r);
  return { name: Z.Bada, version: t };
} }, { test: [/tizen/i], describe(r) {
  const t = b.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, r);
  return { name: Z.Tizen, version: t };
} }, { test: [/linux/i], describe: () => ({ name: Z.Linux }) }, { test: [/CrOS/], describe: () => ({ name: Z.ChromeOS }) }, { test: [/PlayStation 4/], describe(r) {
  const t = b.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, r);
  return { name: Z.PlayStation4, version: t };
} }], Ca = [{ test: [/googlebot/i], describe: () => ({ type: "bot", vendor: "Google" }) }, { test: [/huawei/i], describe(r) {
  const t = b.getFirstMatch(/(can-l01)/i, r) && "Nova", e = { type: W.mobile, vendor: "Huawei" };
  return t && (e.model = t), e;
} }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: () => ({ type: W.tablet, vendor: "Nexus" }) }, { test: [/ipad/i], describe: () => ({ type: W.tablet, vendor: "Apple", model: "iPad" }) }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: () => ({ type: W.tablet, vendor: "Apple", model: "iPad" }) }, { test: [/kftt build/i], describe: () => ({ type: W.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" }) }, { test: [/silk/i], describe: () => ({ type: W.tablet, vendor: "Amazon" }) }, { test: [/tablet(?! pc)/i], describe: () => ({ type: W.tablet }) }, { test(r) {
  const t = r.test(/ipod|iphone/i), e = r.test(/like (ipod|iphone)/i);
  return t && !e;
}, describe(r) {
  const t = b.getFirstMatch(/(ipod|iphone)/i, r);
  return { type: W.mobile, vendor: "Apple", model: t };
} }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: () => ({ type: W.mobile, vendor: "Nexus" }) }, { test: [/[^-]mobi/i], describe: () => ({ type: W.mobile }) }, { test: (r) => r.getBrowserName(!0) === "blackberry", describe: () => ({ type: W.mobile, vendor: "BlackBerry" }) }, { test: (r) => r.getBrowserName(!0) === "bada", describe: () => ({ type: W.mobile }) }, { test: (r) => r.getBrowserName() === "windows phone", describe: () => ({ type: W.mobile, vendor: "Microsoft" }) }, { test(r) {
  const t = Number(String(r.getOSVersion()).split(".")[0]);
  return r.getOSName(!0) === "android" && t >= 3;
}, describe: () => ({ type: W.tablet }) }, { test: (r) => r.getOSName(!0) === "android", describe: () => ({ type: W.mobile }) }, { test: (r) => r.getOSName(!0) === "macos", describe: () => ({ type: W.desktop, vendor: "Apple" }) }, { test: (r) => r.getOSName(!0) === "windows", describe: () => ({ type: W.desktop }) }, { test: (r) => r.getOSName(!0) === "linux", describe: () => ({ type: W.desktop }) }, { test: (r) => r.getOSName(!0) === "playstation 4", describe: () => ({ type: W.tv }) }, { test: (r) => r.getOSName(!0) === "roku", describe: () => ({ type: W.tv }) }], Ta = [{ test: (r) => r.getBrowserName(!0) === "microsoft edge", describe(r) {
  if (/\sedg\//i.test(r)) return { name: Le.Blink };
  const t = b.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, r);
  return { name: Le.EdgeHTML, version: t };
} }, { test: [/trident/i], describe(r) {
  const t = { name: Le.Trident }, e = b.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: (r) => r.test(/presto/i), describe(r) {
  const t = { name: Le.Presto }, e = b.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test(r) {
  const t = r.test(/gecko/i), e = r.test(/like gecko/i);
  return t && !e;
}, describe(r) {
  const t = { name: Le.Gecko }, e = b.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }, { test: [/(apple)?webkit\/537\.36/i], describe: () => ({ name: Le.Blink }) }, { test: [/(apple)?webkit/i], describe(r) {
  const t = { name: Le.WebKit }, e = b.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, r);
  return e && (t.version = e), t;
} }];
class Jn {
  constructor(t, e = !1) {
    if (t == null || t === "") throw new Error("UserAgent parameter can't be empty");
    this._ua = t, this.parsedResult = {}, e !== !0 && this.parse();
  }
  getUA() {
    return this._ua;
  }
  test(t) {
    return t.test(this._ua);
  }
  parseBrowser() {
    this.parsedResult.browser = {};
    const t = b.find(Ea, (e) => {
      if (typeof e.test == "function") return e.test(this);
      if (e.test instanceof Array) return e.test.some((n) => this.test(n));
      throw new Error("Browser's test function is not valid");
    });
    return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser;
  }
  getBrowser() {
    return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
  }
  getBrowserName(t) {
    return t ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
  }
  getBrowserVersion() {
    return this.getBrowser().version;
  }
  getOS() {
    return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
  }
  parseOS() {
    this.parsedResult.os = {};
    const t = b.find(ka, (e) => {
      if (typeof e.test == "function") return e.test(this);
      if (e.test instanceof Array) return e.test.some((n) => this.test(n));
      throw new Error("Browser's test function is not valid");
    });
    return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os;
  }
  getOSName(t) {
    const { name: e } = this.getOS();
    return t ? String(e).toLowerCase() || "" : e || "";
  }
  getOSVersion() {
    return this.getOS().version;
  }
  getPlatform() {
    return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
  }
  getPlatformType(t = !1) {
    const { type: e } = this.getPlatform();
    return t ? String(e).toLowerCase() || "" : e || "";
  }
  parsePlatform() {
    this.parsedResult.platform = {};
    const t = b.find(Ca, (e) => {
      if (typeof e.test == "function") return e.test(this);
      if (e.test instanceof Array) return e.test.some((n) => this.test(n));
      throw new Error("Browser's test function is not valid");
    });
    return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform;
  }
  getEngine() {
    return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
  }
  getEngineName(t) {
    return t ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
  }
  parseEngine() {
    this.parsedResult.engine = {};
    const t = b.find(Ta, (e) => {
      if (typeof e.test == "function") return e.test(this);
      if (e.test instanceof Array) return e.test.some((n) => this.test(n));
      throw new Error("Browser's test function is not valid");
    });
    return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine;
  }
  parse() {
    return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
  }
  getResult() {
    return b.assign({}, this.parsedResult);
  }
  satisfies(t) {
    const e = {};
    let n = 0;
    const i = {};
    let o = 0;
    if (Object.keys(t).forEach((a) => {
      const u = t[a];
      typeof u == "string" ? (i[a] = u, o += 1) : typeof u == "object" && (e[a] = u, n += 1);
    }), n > 0) {
      const a = Object.keys(e), u = b.find(a, (p) => this.isOS(p));
      if (u) {
        const p = this.satisfies(e[u]);
        if (p !== void 0) return p;
      }
      const c = b.find(a, (p) => this.isPlatform(p));
      if (c) {
        const p = this.satisfies(e[c]);
        if (p !== void 0) return p;
      }
    }
    if (o > 0) {
      const a = Object.keys(i), u = b.find(a, (c) => this.isBrowser(c, !0));
      if (u !== void 0) return this.compareVersion(i[u]);
    }
  }
  isBrowser(t, e = !1) {
    const n = this.getBrowserName().toLowerCase();
    let i = t.toLowerCase();
    const o = b.getBrowserTypeByAlias(i);
    return e && o && (i = o.toLowerCase()), i === n;
  }
  compareVersion(t) {
    let e = [0], n = t, i = !1;
    const o = this.getBrowserVersion();
    if (typeof o == "string") return t[0] === ">" || t[0] === "<" ? (n = t.substr(1), t[1] === "=" ? (i = !0, n = t.substr(2)) : e = [], t[0] === ">" ? e.push(1) : e.push(-1)) : t[0] === "=" ? n = t.substr(1) : t[0] === "~" && (i = !0, n = t.substr(1)), e.indexOf(b.compareVersions(o, n, i)) > -1;
  }
  isOS(t) {
    return this.getOSName(!0) === String(t).toLowerCase();
  }
  isPlatform(t) {
    return this.getPlatformType(!0) === String(t).toLowerCase();
  }
  isEngine(t) {
    return this.getEngineName(!0) === String(t).toLowerCase();
  }
  is(t, e = !1) {
    return this.isBrowser(t, e) || this.isOS(t) || this.isPlatform(t);
  }
  some(t = []) {
    return t.some((e) => this.is(e));
  }
}
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */
class Ma {
  static getParser(t, e = !1) {
    if (typeof t != "string") throw new Error("UserAgent should be a string");
    return new Jn(t, e);
  }
  static parse(t) {
    return new Jn(t).getResult();
  }
  static get BROWSER_MAP() {
    return ks;
  }
  static get ENGINE_MAP() {
    return Le;
  }
  static get OS_MAP() {
    return Z;
  }
  static get PLATFORMS_MAP() {
    return W;
  }
}
function rr() {
  return Date.now() + Math.random().toString();
}
function pt() {
  throw new Error("Method must be implemented in subclass");
}
function Cs(r, t) {
  return t != null && t.proxyUrl ? t.proxyUrl + (t.proxyUrl.slice(-1) === "/" ? "" : "/") + r.substring(8) : r;
}
function Bt(r) {
  return r != null && r.callObjectBundleUrlOverride ? r.callObjectBundleUrlOverride : Cs("https://c.daily.co/call-machine/versioned/".concat("0.75.2", "/static/call-machine-object-bundle.js"), r);
}
function Jt(r) {
  try {
    new URL(r);
  } catch {
    return !1;
  }
  return !0;
}
const Ts = Object.prototype.toString;
function tn(r) {
  switch (Ts.call(r)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return !0;
    default:
      return Qe(r, Error);
  }
}
function lt(r, t) {
  return Ts.call(r) === `[object ${t}]`;
}
function Ms(r) {
  return lt(r, "ErrorEvent");
}
function Gn(r) {
  return lt(r, "DOMError");
}
function Ae(r) {
  return lt(r, "String");
}
function rn(r) {
  return typeof r == "object" && r !== null && "__sentry_template_string__" in r && "__sentry_template_values__" in r;
}
function Cr(r) {
  return r === null || rn(r) || typeof r != "object" && typeof r != "function";
}
function ot(r) {
  return lt(r, "Object");
}
function nr(r) {
  return typeof Event < "u" && Qe(r, Event);
}
function ir(r) {
  return !!(r && r.then && typeof r.then == "function");
}
function Qe(r, t) {
  try {
    return r instanceof t;
  } catch {
    return !1;
  }
}
function As(r) {
  return !(typeof r != "object" || r === null || !r.__isVue && !r._isVue);
}
function nt(r, t = 0) {
  return typeof r != "string" || t === 0 || r.length <= t ? r : `${r.slice(0, t)}...`;
}
function Yn(r, t) {
  if (!Array.isArray(r)) return "";
  const e = [];
  for (let n = 0; n < r.length; n++) {
    const i = r[n];
    try {
      As(i) ? e.push("[VueViewModel]") : e.push(String(i));
    } catch {
      e.push("[value cannot be serialized]");
    }
  }
  return e.join(t);
}
function Aa(r, t, e = !1) {
  return !!Ae(r) && (lt(t, "RegExp") ? t.test(r) : !!Ae(t) && (e ? r === t : r.includes(t)));
}
function Ct(r, t = [], e = !1) {
  return t.some((n) => Aa(r, n, e));
}
function Oa(r, t, e = 250, n, i, o, a) {
  if (!(o.exception && o.exception.values && a && Qe(a.originalException, Error))) return;
  const u = o.exception.values.length > 0 ? o.exception.values[o.exception.values.length - 1] : void 0;
  var c, p;
  u && (o.exception.values = (c = Tr(r, t, i, a.originalException, n, o.exception.values, u, 0), p = e, c.map((m) => (m.value && (m.value = nt(m.value, p)), m))));
}
function Tr(r, t, e, n, i, o, a, u) {
  if (o.length >= e + 1) return o;
  let c = [...o];
  if (Qe(n[i], Error)) {
    Wn(a, u);
    const p = r(t, n[i]), m = c.length;
    Hn(p, i, m, u), c = Tr(r, t, e, n[i], i, [p, ...c], p, m);
  }
  return Array.isArray(n.errors) && n.errors.forEach((p, m) => {
    if (Qe(p, Error)) {
      Wn(a, u);
      const g = r(t, p), _ = c.length;
      Hn(g, `errors[${m}]`, _, u), c = Tr(r, t, e, p, i, [g, ...c], g, _);
    }
  }), c;
}
function Wn(r, t) {
  r.mechanism = r.mechanism || { type: "generic", handled: !0 }, r.mechanism = { ...r.mechanism, ...r.type === "AggregateError" && { is_exception_group: !0 }, exception_id: t };
}
function Hn(r, t, e, n) {
  r.mechanism = r.mechanism || { type: "generic", handled: !0 }, r.mechanism = { ...r.mechanism, type: "chained", source: t, exception_id: e, parent_id: n };
}
function zn(r) {
  return r === void 0 ? void 0 : r >= 400 && r < 500 ? "warning" : r >= 500 ? "error" : void 0;
}
const ze = "8.33.1", F = globalThis;
function Gt(r, t, e) {
  const n = F, i = n.__SENTRY__ = n.__SENTRY__ || {}, o = i[ze] = i[ze] || {};
  return o[r] || (o[r] = t());
}
const nn = F;
function Os(r, t = {}) {
  if (!r) return "<unknown>";
  try {
    let e = r;
    const n = 5, i = [];
    let o = 0, a = 0;
    const u = " > ", c = u.length;
    let p;
    const m = Array.isArray(t) ? t : t.keyAttrs, g = !Array.isArray(t) && t.maxStringLength || 80;
    for (; e && o++ < n && (p = Pa(e, m), !(p === "html" || o > 1 && a + i.length * c + p.length >= g)); ) i.push(p), a += p.length, e = e.parentNode;
    return i.reverse().join(u);
  } catch {
    return "<unknown>";
  }
}
function Pa(r, t) {
  const e = r, n = [];
  if (!e || !e.tagName) return "";
  if (nn.HTMLElement && e instanceof HTMLElement && e.dataset) {
    if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
    if (e.dataset.sentryElement) return e.dataset.sentryElement;
  }
  n.push(e.tagName.toLowerCase());
  const i = t && t.length ? t.filter((a) => e.getAttribute(a)).map((a) => [a, e.getAttribute(a)]) : null;
  if (i && i.length) i.forEach((a) => {
    n.push(`[${a[0]}="${a[1]}"]`);
  });
  else {
    e.id && n.push(`#${e.id}`);
    const a = e.className;
    if (a && Ae(a)) {
      const u = a.split(/\s+/);
      for (const c of u) n.push(`.${c}`);
    }
  }
  const o = ["aria-label", "type", "name", "title", "alt"];
  for (const a of o) {
    const u = e.getAttribute(a);
    u && n.push(`[${a}="${u}"]`);
  }
  return n.join("");
}
const St = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, Mr = ["debug", "info", "warn", "error", "log", "assert", "trace"], Yt = {};
function sn(r) {
  if (!("console" in F)) return r();
  const t = F.console, e = {}, n = Object.keys(Yt);
  n.forEach((i) => {
    const o = Yt[i];
    e[i] = t[i], t[i] = o;
  });
  try {
    return r();
  } finally {
    n.forEach((i) => {
      t[i] = e[i];
    });
  }
}
const L = Gt("logger", function() {
  let r = !1;
  const t = { enable: () => {
    r = !0;
  }, disable: () => {
    r = !1;
  }, isEnabled: () => r };
  return St ? Mr.forEach((e) => {
    t[e] = (...n) => {
      r && sn(() => {
        F.console[e](`Sentry Logger [${e}]:`, ...n);
      });
    };
  }) : Mr.forEach((e) => {
    t[e] = () => {
    };
  }), t;
}), La = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function Wt(r, t = !1) {
  const { host: e, path: n, pass: i, port: o, projectId: a, protocol: u, publicKey: c } = r;
  return `${u}://${c}${t && i ? `:${i}` : ""}@${e}${o ? `:${o}` : ""}/${n && `${n}/`}${a}`;
}
function Qn(r) {
  return { protocol: r.protocol, publicKey: r.publicKey || "", pass: r.pass || "", host: r.host, port: r.port || "", path: r.path || "", projectId: r.projectId };
}
function Ia(r) {
  const t = typeof r == "string" ? function(e) {
    const n = La.exec(e);
    if (!n) return void sn(() => {
      console.error(`Invalid Sentry Dsn: ${e}`);
    });
    const [i, o, a = "", u = "", c = "", p = ""] = n.slice(1);
    let m = "", g = p;
    const _ = g.split("/");
    if (_.length > 1 && (m = _.slice(0, -1).join("/"), g = _.pop()), g) {
      const w = g.match(/^\d+/);
      w && (g = w[0]);
    }
    return Qn({ host: u, pass: a, path: m, projectId: g, port: c, protocol: i, publicKey: o });
  }(r) : Qn(r);
  if (t && function(e) {
    if (!St) return !0;
    const { port: n, projectId: i, protocol: o } = e;
    return !(["protocol", "publicKey", "host", "projectId"].find((a) => !e[a] && (L.error(`Invalid Sentry Dsn: ${a} missing`), !0)) || (i.match(/^\d+$/) ? /* @__PURE__ */ function(a) {
      return a === "http" || a === "https";
    }(o) ? n && isNaN(parseInt(n, 10)) && (L.error(`Invalid Sentry Dsn: Invalid port ${n}`), 1) : (L.error(`Invalid Sentry Dsn: Invalid protocol ${o}`), 1) : (L.error(`Invalid Sentry Dsn: Invalid projectId ${i}`), 1)));
  }(t)) return t;
}
class _e extends Error {
  constructor(t, e = "warn") {
    super(t), this.message = t, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = e;
  }
}
function ne(r, t, e) {
  if (!(t in r)) return;
  const n = r[t], i = e(n);
  typeof i == "function" && Ps(i, n), r[t] = i;
}
function Ke(r, t, e) {
  try {
    Object.defineProperty(r, t, { value: e, writable: !0, configurable: !0 });
  } catch {
    St && L.log(`Failed to add non-enumerable property "${t}" to object`, r);
  }
}
function Ps(r, t) {
  try {
    const e = t.prototype || {};
    r.prototype = t.prototype = e, Ke(r, "__sentry_original__", t);
  } catch {
  }
}
function on(r) {
  return r.__sentry_original__;
}
function Ls(r) {
  if (tn(r)) return { message: r.message, name: r.name, stack: r.stack, ...Xn(r) };
  if (nr(r)) {
    const t = { type: r.type, target: Kn(r.target), currentTarget: Kn(r.currentTarget), ...Xn(r) };
    return typeof CustomEvent < "u" && Qe(r, CustomEvent) && (t.detail = r.detail), t;
  }
  return r;
}
function Kn(r) {
  try {
    return t = r, typeof Element < "u" && Qe(t, Element) ? Os(r) : Object.prototype.toString.call(r);
  } catch {
    return "<unknown>";
  }
  var t;
}
function Xn(r) {
  if (typeof r == "object" && r !== null) {
    const t = {};
    for (const e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
    return t;
  }
  return {};
}
function ue(r) {
  return Ar(r, /* @__PURE__ */ new Map());
}
function Ar(r, t) {
  if (function(e) {
    if (!ot(e)) return !1;
    try {
      const n = Object.getPrototypeOf(e).constructor.name;
      return !n || n === "Object";
    } catch {
      return !0;
    }
  }(r)) {
    const e = t.get(r);
    if (e !== void 0) return e;
    const n = {};
    t.set(r, n);
    for (const i of Object.getOwnPropertyNames(r)) r[i] !== void 0 && (n[i] = Ar(r[i], t));
    return n;
  }
  if (Array.isArray(r)) {
    const e = t.get(r);
    if (e !== void 0) return e;
    const n = [];
    return t.set(r, n), r.forEach((i) => {
      n.push(Ar(i, t));
    }), n;
  }
  return r;
}
const Ye = "?", Zn = /\(error: (.*)\)/, ei = /captureMessage|captureException/;
function Tt(r) {
  return r[r.length - 1] || {};
}
const ti = "<anonymous>";
function Fe(r) {
  try {
    return r && typeof r == "function" && r.name || ti;
  } catch {
    return ti;
  }
}
function ri(r) {
  const t = r.exception;
  if (t) {
    const e = [];
    try {
      return t.values.forEach((n) => {
        n.stacktrace.frames && e.push(...n.stacktrace.frames);
      }), e;
    } catch {
      return;
    }
  }
}
const xt = {}, ni = {};
function We(r, t) {
  xt[r] = xt[r] || [], xt[r].push(t);
}
function He(r, t) {
  ni[r] || (t(), ni[r] = !0);
}
function de(r, t) {
  const e = r && xt[r];
  if (e) for (const n of e) try {
    n(t);
  } catch (i) {
    St && L.error(`Error while triggering instrumentation handler.
Type: ${r}
Name: ${Fe(n)}
Error:`, i);
  }
}
function ja() {
  "console" in F && Mr.forEach(function(r) {
    r in F.console && ne(F.console, r, function(t) {
      return Yt[r] = t, function(...e) {
        de("console", { args: e, level: r });
        const n = Yt[r];
        n && n.apply(F.console, e);
      };
    });
  });
}
const lr = F;
function Or(r) {
  return r && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(r.toString());
}
function Da() {
  if (typeof EdgeRuntime == "string") return !0;
  if (!function() {
    if (!("fetch" in lr)) return !1;
    try {
      return new Headers(), new Request("http://www.example.com"), new Response(), !0;
    } catch {
      return !1;
    }
  }()) return !1;
  if (Or(lr.fetch)) return !0;
  let r = !1;
  const t = lr.document;
  if (t && typeof t.createElement == "function") try {
    const e = t.createElement("iframe");
    e.hidden = !0, t.head.appendChild(e), e.contentWindow && e.contentWindow.fetch && (r = Or(e.contentWindow.fetch)), t.head.removeChild(e);
  } catch (e) {
    St && L.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
  }
  return r;
}
function Et() {
  return Date.now() / 1e3;
}
const Re = function() {
  const { performance: r } = F;
  if (!r || !r.now) return Et;
  const t = Date.now() - r.now(), e = r.timeOrigin == null ? t : r.timeOrigin;
  return () => (e + r.now()) / 1e3;
}();
function Na(r, t) {
  const e = "fetch";
  We(e, r), He(e, () => function(n, i = !1) {
    i && !Da() || ne(F, "fetch", function(o) {
      return function(...a) {
        const { method: u, url: c } = function(g) {
          if (g.length === 0) return { method: "GET", url: "" };
          if (g.length === 2) {
            const [w, y] = g;
            return { url: ii(w), method: Pr(y, "method") ? String(y.method).toUpperCase() : "GET" };
          }
          const _ = g[0];
          return { url: ii(_), method: Pr(_, "method") ? String(_.method).toUpperCase() : "GET" };
        }(a), p = { args: a, fetchData: { method: u, url: c }, startTimestamp: 1e3 * Re() };
        de("fetch", { ...p });
        const m = new Error().stack;
        return o.apply(F, a).then(async (g) => (de("fetch", { ...p, endTimestamp: 1e3 * Re(), response: g }), g), (g) => {
          throw de("fetch", { ...p, endTimestamp: 1e3 * Re(), error: g }), tn(g) && g.stack === void 0 && (g.stack = m, Ke(g, "framesToPop", 1)), g;
        });
      };
    });
  }(void 0, t));
}
function Pr(r, t) {
  return !!r && typeof r == "object" && !!r[t];
}
function ii(r) {
  return typeof r == "string" ? r : r ? Pr(r, "url") ? r.url : r.toString ? r.toString() : "" : "";
}
(() => {
  const { performance: r } = F;
  !r || !r.now || (r.now(), r.timing && r.timing.navigationStart);
})();
let Mt = null;
function Ra() {
  Mt = F.onerror, F.onerror = function(r, t, e, n, i) {
    return de("error", { column: n, error: i, line: e, msg: r, url: t }), !(!Mt || Mt.__SENTRY_LOADER__) && Mt.apply(this, arguments);
  }, F.onerror.__SENTRY_INSTRUMENTED__ = !0;
}
let At = null;
function xa() {
  At = F.onunhandledrejection, F.onunhandledrejection = function(r) {
    return de("unhandledrejection", r), !(At && !At.__SENTRY_LOADER__) || At.apply(this, arguments);
  }, F.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
}
function pe() {
  const r = F, t = r.crypto || r.msCrypto;
  let e = () => 16 * Math.random();
  try {
    if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
    t && t.getRandomValues && (e = () => {
      const n = new Uint8Array(1);
      return t.getRandomValues(n), n[0];
    });
  } catch {
  }
  return ("10000000100040008000" + 1e11).replace(/[018]/g, (n) => (n ^ (15 & e()) >> n / 4).toString(16));
}
function Is(r) {
  return r.exception && r.exception.values ? r.exception.values[0] : void 0;
}
function je(r) {
  const { message: t, event_id: e } = r;
  if (t) return t;
  const n = Is(r);
  return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || e || "<unknown>" : e || "<unknown>";
}
function Lr(r, t, e) {
  const n = r.exception = r.exception || {}, i = n.values = n.values || [], o = i[0] = i[0] || {};
  o.value || (o.value = t || ""), o.type || (o.type = "Error");
}
function bt(r, t) {
  const e = Is(r);
  if (!e) return;
  const n = e.mechanism;
  if (e.mechanism = { type: "generic", handled: !0, ...n, ...t }, t && "data" in t) {
    const i = { ...n && n.data, ...t.data };
    e.mechanism.data = i;
  }
}
function si(r) {
  if (r && r.__sentry_captured__) return !0;
  try {
    Ke(r, "__sentry_captured__", !0);
  } catch {
  }
  return !1;
}
function De(r, t = 100, e = 1 / 0) {
  try {
    return Ir("", r, t, e);
  } catch (n) {
    return { ERROR: `**non-serializable** (${n})` };
  }
}
function js(r, t = 3, e = 102400) {
  const n = De(r, t);
  return i = n, function(o) {
    return ~-encodeURI(o).split(/%..|./).length;
  }(JSON.stringify(i)) > e ? js(r, t - 1, e) : n;
  var i;
}
function Ir(r, t, e = 1 / 0, n = 1 / 0, i = /* @__PURE__ */ function() {
  const o = typeof WeakSet == "function", a = o ? /* @__PURE__ */ new WeakSet() : [];
  return [function(u) {
    if (o) return !!a.has(u) || (a.add(u), !1);
    for (let c = 0; c < a.length; c++) if (a[c] === u) return !0;
    return a.push(u), !1;
  }, function(u) {
    if (o) a.delete(u);
    else for (let c = 0; c < a.length; c++) if (a[c] === u) {
      a.splice(c, 1);
      break;
    }
  }];
}()) {
  const [o, a] = i;
  if (t == null || ["boolean", "string"].includes(typeof t) || typeof t == "number" && Number.isFinite(t)) return t;
  const u = function(w, y) {
    try {
      if (w === "domain" && y && typeof y == "object" && y._events) return "[Domain]";
      if (w === "domainEmitter") return "[DomainEmitter]";
      if (typeof global < "u" && y === global) return "[Global]";
      if (typeof window < "u" && y === window) return "[Window]";
      if (typeof document < "u" && y === document) return "[Document]";
      if (As(y)) return "[VueViewModel]";
      if (ot(E = y) && "nativeEvent" in E && "preventDefault" in E && "stopPropagation" in E) return "[SyntheticEvent]";
      if (typeof y == "number" && !Number.isFinite(y)) return `[${y}]`;
      if (typeof y == "function") return `[Function: ${Fe(y)}]`;
      if (typeof y == "symbol") return `[${String(y)}]`;
      if (typeof y == "bigint") return `[BigInt: ${String(y)}]`;
      const C = function(O) {
        const j = Object.getPrototypeOf(O);
        return j ? j.constructor.name : "null prototype";
      }(y);
      return /^HTML(\w*)Element$/.test(C) ? `[HTMLElement: ${C}]` : `[object ${C}]`;
    } catch (C) {
      return `**non-serializable** (${C})`;
    }
    var E;
  }(r, t);
  if (!u.startsWith("[object ")) return u;
  if (t.__sentry_skip_normalization__) return t;
  const c = typeof t.__sentry_override_normalization_depth__ == "number" ? t.__sentry_override_normalization_depth__ : e;
  if (c === 0) return u.replace("object ", "");
  if (o(t)) return "[Circular ~]";
  const p = t;
  if (p && typeof p.toJSON == "function") try {
    return Ir("", p.toJSON(), c - 1, n, i);
  } catch {
  }
  const m = Array.isArray(t) ? [] : {};
  let g = 0;
  const _ = Ls(t);
  for (const w in _) {
    if (!Object.prototype.hasOwnProperty.call(_, w)) continue;
    if (g >= n) {
      m[w] = "[MaxProperties ~]";
      break;
    }
    const y = _[w];
    m[w] = Ir(w, y, c - 1, n, i), g++;
  }
  return a(t), m;
}
var Ce;
function Xe(r) {
  return new se((t) => {
    t(r);
  });
}
function Ht(r) {
  return new se((t, e) => {
    e(r);
  });
}
(function(r) {
  r[r.PENDING = 0] = "PENDING", r[r.RESOLVED = 1] = "RESOLVED", r[r.REJECTED = 2] = "REJECTED";
})(Ce || (Ce = {}));
class se {
  constructor(t) {
    se.prototype.__init.call(this), se.prototype.__init2.call(this), se.prototype.__init3.call(this), se.prototype.__init4.call(this), this._state = Ce.PENDING, this._handlers = [];
    try {
      t(this._resolve, this._reject);
    } catch (e) {
      this._reject(e);
    }
  }
  then(t, e) {
    return new se((n, i) => {
      this._handlers.push([!1, (o) => {
        if (t) try {
          n(t(o));
        } catch (a) {
          i(a);
        }
        else n(o);
      }, (o) => {
        if (e) try {
          n(e(o));
        } catch (a) {
          i(a);
        }
        else i(o);
      }]), this._executeHandlers();
    });
  }
  catch(t) {
    return this.then((e) => e, t);
  }
  finally(t) {
    return new se((e, n) => {
      let i, o;
      return this.then((a) => {
        o = !1, i = a, t && t();
      }, (a) => {
        o = !0, i = a, t && t();
      }).then(() => {
        o ? n(i) : e(i);
      });
    });
  }
  __init() {
    this._resolve = (t) => {
      this._setResult(Ce.RESOLVED, t);
    };
  }
  __init2() {
    this._reject = (t) => {
      this._setResult(Ce.REJECTED, t);
    };
  }
  __init3() {
    this._setResult = (t, e) => {
      this._state === Ce.PENDING && (ir(e) ? e.then(this._resolve, this._reject) : (this._state = t, this._value = e, this._executeHandlers()));
    };
  }
  __init4() {
    this._executeHandlers = () => {
      if (this._state === Ce.PENDING) return;
      const t = this._handlers.slice();
      this._handlers = [], t.forEach((e) => {
        e[0] || (this._state === Ce.RESOLVED && e[1](this._value), this._state === Ce.REJECTED && e[2](this._value), e[0] = !0);
      });
    };
  }
}
function Fa(r) {
  const t = [];
  function e(n) {
    return t.splice(t.indexOf(n), 1)[0] || Promise.resolve(void 0);
  }
  return { $: t, add: function(n) {
    if (!(r === void 0 || t.length < r)) return Ht(new _e("Not adding Promise because buffer limit was reached."));
    const i = n();
    return t.indexOf(i) === -1 && t.push(i), i.then(() => e(i)).then(null, () => e(i).then(null, () => {
    })), i;
  }, drain: function(n) {
    return new se((i, o) => {
      let a = t.length;
      if (!a) return i(!0);
      const u = setTimeout(() => {
        n && n > 0 && i(!1);
      }, n);
      t.forEach((c) => {
        Xe(c).then(() => {
          --a || (clearTimeout(u), i(!0));
        }, o);
      });
    });
  } };
}
function ur(r) {
  if (!r) return {};
  const t = r.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!t) return {};
  const e = t[6] || "", n = t[8] || "";
  return { host: t[4], path: t[5], protocol: t[2], search: e, hash: n, relative: t[5] + e + n };
}
const qa = ["fatal", "error", "warning", "log", "info", "debug"];
function $a(r) {
  return r === "warn" ? "warning" : qa.includes(r) ? r : "log";
}
const Va = /^sentry-/;
function Ua(r) {
  const t = function(n) {
    if (!(!n || !Ae(n) && !Array.isArray(n)))
      return Array.isArray(n) ? n.reduce((i, o) => {
        const a = oi(o);
        return Object.entries(a).forEach(([u, c]) => {
          i[u] = c;
        }), i;
      }, {}) : oi(n);
  }(r);
  if (!t) return;
  const e = Object.entries(t).reduce((n, [i, o]) => (i.match(Va) && (n[i.slice(7)] = o), n), {});
  return Object.keys(e).length > 0 ? e : void 0;
}
function oi(r) {
  return r.split(",").map((t) => t.split("=").map((e) => decodeURIComponent(e.trim()))).reduce((t, [e, n]) => (e && n && (t[e] = n), t), {});
}
function wt(r, t = []) {
  return [r, t];
}
function Ba(r, t) {
  const [e, n] = r;
  return [e, [...n, t]];
}
function ai(r, t) {
  const e = r[1];
  for (const n of e)
    if (t(n, n[0].type)) return !0;
  return !1;
}
function jr(r) {
  return F.__SENTRY__ && F.__SENTRY__.encodePolyfill ? F.__SENTRY__.encodePolyfill(r) : new TextEncoder().encode(r);
}
function Ja(r) {
  const [t, e] = r;
  let n = JSON.stringify(t);
  function i(o) {
    typeof n == "string" ? n = typeof o == "string" ? n + o : [jr(n), o] : n.push(typeof o == "string" ? jr(o) : o);
  }
  for (const o of e) {
    const [a, u] = o;
    if (i(`
${JSON.stringify(a)}
`), typeof u == "string" || u instanceof Uint8Array) i(u);
    else {
      let c;
      try {
        c = JSON.stringify(u);
      } catch {
        c = JSON.stringify(De(u));
      }
      i(c);
    }
  }
  return typeof n == "string" ? n : function(o) {
    const a = o.reduce((p, m) => p + m.length, 0), u = new Uint8Array(a);
    let c = 0;
    for (const p of o) u.set(p, c), c += p.length;
    return u;
  }(n);
}
function Ga(r) {
  const t = typeof r.data == "string" ? jr(r.data) : r.data;
  return [ue({ type: "attachment", length: t.length, filename: r.filename, content_type: r.contentType, attachment_type: r.attachmentType }), t];
}
const Ya = { session: "session", sessions: "session", attachment: "attachment", transaction: "transaction", event: "error", client_report: "internal", user_report: "default", profile: "profile", profile_chunk: "profile", replay_event: "replay", replay_recording: "replay", check_in: "monitor", feedback: "feedback", span: "span", statsd: "metric_bucket" };
function ci(r) {
  return Ya[r];
}
function Ds(r) {
  if (!r || !r.sdk) return;
  const { name: t, version: e } = r.sdk;
  return { name: t, version: e };
}
function Wa(r, { statusCode: t, headers: e }, n = Date.now()) {
  const i = { ...r }, o = e && e["x-sentry-rate-limits"], a = e && e["retry-after"];
  if (o) for (const u of o.trim().split(",")) {
    const [c, p, , , m] = u.split(":", 5), g = parseInt(c, 10), _ = 1e3 * (isNaN(g) ? 60 : g);
    if (p) for (const w of p.split(";")) w === "metric_bucket" && m && !m.split(";").includes("custom") || (i[w] = n + _);
    else i.all = n + _;
  }
  else a ? i.all = n + function(u, c = Date.now()) {
    const p = parseInt(`${u}`, 10);
    if (!isNaN(p)) return 1e3 * p;
    const m = Date.parse(`${u}`);
    return isNaN(m) ? 6e4 : m - c;
  }(a, n) : t === 429 && (i.all = n + 6e4);
  return i;
}
function li() {
  return { traceId: pe(), spanId: pe().substring(16) };
}
const Ot = F, G = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function sr() {
  return an(F), F;
}
function an(r) {
  const t = r.__SENTRY__ = r.__SENTRY__ || {};
  return t.version = t.version || ze, t[ze] = t[ze] || {};
}
function Dr(r, t = {}) {
  if (t.user && (!r.ipAddress && t.user.ip_address && (r.ipAddress = t.user.ip_address), r.did || t.did || (r.did = t.user.id || t.user.email || t.user.username)), r.timestamp = t.timestamp || Re(), t.abnormal_mechanism && (r.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (r.ignoreDuration = t.ignoreDuration), t.sid && (r.sid = t.sid.length === 32 ? t.sid : pe()), t.init !== void 0 && (r.init = t.init), !r.did && t.did && (r.did = `${t.did}`), typeof t.started == "number" && (r.started = t.started), r.ignoreDuration) r.duration = void 0;
  else if (typeof t.duration == "number") r.duration = t.duration;
  else {
    const e = r.timestamp - r.started;
    r.duration = e >= 0 ? e : 0;
  }
  t.release && (r.release = t.release), t.environment && (r.environment = t.environment), !r.ipAddress && t.ipAddress && (r.ipAddress = t.ipAddress), !r.userAgent && t.userAgent && (r.userAgent = t.userAgent), typeof t.errors == "number" && (r.errors = t.errors), t.status && (r.status = t.status);
}
const Nr = "_sentrySpan";
function ui(r, t) {
  t ? Ke(r, Nr, t) : delete r[Nr];
}
function di(r) {
  return r[Nr];
}
class cn {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = li();
  }
  clone() {
    const t = new cn();
    return t._breadcrumbs = [...this._breadcrumbs], t._tags = { ...this._tags }, t._extra = { ...this._extra }, t._contexts = { ...this._contexts }, t._user = this._user, t._level = this._level, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [...this._eventProcessors], t._requestSession = this._requestSession, t._attachments = [...this._attachments], t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }, t._propagationContext = { ...this._propagationContext }, t._client = this._client, t._lastEventId = this._lastEventId, ui(t, di(this)), t;
  }
  setClient(t) {
    this._client = t;
  }
  setLastEventId(t) {
    this._lastEventId = t;
  }
  getClient() {
    return this._client;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addScopeListener(t) {
    this._scopeListeners.push(t);
  }
  addEventProcessor(t) {
    return this._eventProcessors.push(t), this;
  }
  setUser(t) {
    return this._user = t || { email: void 0, id: void 0, ip_address: void 0, username: void 0 }, this._session && Dr(this._session, { user: t }), this._notifyScopeListeners(), this;
  }
  getUser() {
    return this._user;
  }
  getRequestSession() {
    return this._requestSession;
  }
  setRequestSession(t) {
    return this._requestSession = t, this;
  }
  setTags(t) {
    return this._tags = { ...this._tags, ...t }, this._notifyScopeListeners(), this;
  }
  setTag(t, e) {
    return this._tags = { ...this._tags, [t]: e }, this._notifyScopeListeners(), this;
  }
  setExtras(t) {
    return this._extra = { ...this._extra, ...t }, this._notifyScopeListeners(), this;
  }
  setExtra(t, e) {
    return this._extra = { ...this._extra, [t]: e }, this._notifyScopeListeners(), this;
  }
  setFingerprint(t) {
    return this._fingerprint = t, this._notifyScopeListeners(), this;
  }
  setLevel(t) {
    return this._level = t, this._notifyScopeListeners(), this;
  }
  setTransactionName(t) {
    return this._transactionName = t, this._notifyScopeListeners(), this;
  }
  setContext(t, e) {
    return e === null ? delete this._contexts[t] : this._contexts[t] = e, this._notifyScopeListeners(), this;
  }
  setSession(t) {
    return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this;
  }
  getSession() {
    return this._session;
  }
  update(t) {
    if (!t) return this;
    const e = typeof t == "function" ? t(this) : t, [n, i] = e instanceof qe ? [e.getScopeData(), e.getRequestSession()] : ot(e) ? [t, t.requestSession] : [], { tags: o, extra: a, user: u, contexts: c, level: p, fingerprint: m = [], propagationContext: g } = n || {};
    return this._tags = { ...this._tags, ...o }, this._extra = { ...this._extra, ...a }, this._contexts = { ...this._contexts, ...c }, u && Object.keys(u).length && (this._user = u), p && (this._level = p), m.length && (this._fingerprint = m), g && (this._propagationContext = g), i && (this._requestSession = i), this;
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._session = void 0, ui(this, void 0), this._attachments = [], this._propagationContext = li(), this._notifyScopeListeners(), this;
  }
  addBreadcrumb(t, e) {
    const n = typeof e == "number" ? e : 100;
    if (n <= 0) return this;
    const i = { timestamp: Et(), ...t }, o = this._breadcrumbs;
    return o.push(i), this._breadcrumbs = o.length > n ? o.slice(-n) : o, this._notifyScopeListeners(), this;
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    return this._breadcrumbs = [], this._notifyScopeListeners(), this;
  }
  addAttachment(t) {
    return this._attachments.push(t), this;
  }
  clearAttachments() {
    return this._attachments = [], this;
  }
  getScopeData() {
    return { breadcrumbs: this._breadcrumbs, attachments: this._attachments, contexts: this._contexts, tags: this._tags, extra: this._extra, user: this._user, level: this._level, fingerprint: this._fingerprint || [], eventProcessors: this._eventProcessors, propagationContext: this._propagationContext, sdkProcessingMetadata: this._sdkProcessingMetadata, transactionName: this._transactionName, span: di(this) };
  }
  setSDKProcessingMetadata(t) {
    return this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...t }, this;
  }
  setPropagationContext(t) {
    return this._propagationContext = t, this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(t, e) {
    const n = e && e.event_id ? e.event_id : pe();
    if (!this._client) return L.warn("No client configured on scope - will not capture exception!"), n;
    const i = new Error("Sentry syntheticException");
    return this._client.captureException(t, { originalException: t, syntheticException: i, ...e, event_id: n }, this), n;
  }
  captureMessage(t, e, n) {
    const i = n && n.event_id ? n.event_id : pe();
    if (!this._client) return L.warn("No client configured on scope - will not capture message!"), i;
    const o = new Error(t);
    return this._client.captureMessage(t, e, { originalException: t, syntheticException: o, ...n, event_id: i }, this), i;
  }
  captureEvent(t, e) {
    const n = e && e.event_id ? e.event_id : pe();
    return this._client ? (this._client.captureEvent(t, { ...e, event_id: n }, this), n) : (L.warn("No client configured on scope - will not capture event!"), n);
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((t) => {
      t(this);
    }), this._notifyingListeners = !1);
  }
}
const qe = cn;
class Ha {
  constructor(t, e) {
    let n, i;
    n = t || new qe(), i = e || new qe(), this._stack = [{ scope: n }], this._isolationScope = i;
  }
  withScope(t) {
    const e = this._pushScope();
    let n;
    try {
      n = t(e);
    } catch (i) {
      throw this._popScope(), i;
    }
    return ir(n) ? n.then((i) => (this._popScope(), i), (i) => {
      throw this._popScope(), i;
    }) : (this._popScope(), n);
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  _pushScope() {
    const t = this.getScope().clone();
    return this._stack.push({ client: this.getClient(), scope: t }), t;
  }
  _popScope() {
    return !(this._stack.length <= 1) && !!this._stack.pop();
  }
}
function at() {
  const r = an(sr());
  return r.stack = r.stack || new Ha(Gt("defaultCurrentScope", () => new qe()), Gt("defaultIsolationScope", () => new qe()));
}
function za(r) {
  return at().withScope(r);
}
function Qa(r, t) {
  const e = at();
  return e.withScope(() => (e.getStackTop().scope = r, t(r)));
}
function pi(r) {
  return at().withScope(() => r(at().getIsolationScope()));
}
function ln(r) {
  const t = an(r);
  return t.acs ? t.acs : { withIsolationScope: pi, withScope: za, withSetScope: Qa, withSetIsolationScope: (e, n) => pi(n), getCurrentScope: () => at().getScope(), getIsolationScope: () => at().getIsolationScope() };
}
function un() {
  return ln(sr()).getCurrentScope();
}
function Ns() {
  return ln(sr()).getIsolationScope();
}
function te() {
  return un().getClient();
}
function Ka(r) {
  const t = r._sentryMetrics;
  if (!t) return;
  const e = {};
  for (const [, [n, i]] of t)
    (e[n] || (e[n] = [])).push(ue(i));
  return e;
}
function Xa(r) {
  const { spanId: t, traceId: e } = r.spanContext(), { parent_span_id: n } = zt(r);
  return ue({ parent_span_id: n, span_id: t, trace_id: e });
}
function hi(r) {
  return typeof r == "number" ? fi(r) : Array.isArray(r) ? r[0] + r[1] / 1e9 : r instanceof Date ? fi(r.getTime()) : Re();
}
function fi(r) {
  return r > 9999999999 ? r / 1e3 : r;
}
function zt(r) {
  if (function(t) {
    return typeof t.getSpanJSON == "function";
  }(r)) return r.getSpanJSON();
  try {
    const { spanId: t, traceId: e } = r.spanContext();
    if (function(n) {
      const i = n;
      return !!(i.attributes && i.startTime && i.name && i.endTime && i.status);
    }(r)) {
      const { attributes: n, startTime: i, name: o, endTime: a, parentSpanId: u, status: c } = r;
      return ue({ span_id: t, trace_id: e, data: n, description: o, parent_span_id: u, start_timestamp: hi(i), timestamp: hi(a) || void 0, status: Za(c), op: n["sentry.op"], origin: n["sentry.origin"], _metrics_summary: Ka(r) });
    }
    return { span_id: t, trace_id: e };
  } catch {
    return {};
  }
}
function Za(r) {
  if (r && r.code !== 0) return r.code === 1 ? "ok" : r.message || "unknown_error";
}
function Rs(r) {
  return r._sentryRootSpan || r;
}
const xs = "production";
function Fs(r, t) {
  const e = t.getOptions(), { publicKey: n } = t.getDsn() || {}, i = ue({ environment: e.environment || xs, release: e.release, public_key: n, trace_id: r });
  return t.emit("createDsc", i), i;
}
function ec(r) {
  const t = te();
  if (!t) return {};
  const e = Fs(zt(r).trace_id || "", t), n = Rs(r), i = n._frozenDsc;
  if (i) return i;
  const o = n.spanContext().traceState, a = o && o.get("sentry.dsc"), u = a && Ua(a);
  if (u) return u;
  const c = zt(n), p = c.data || {}, m = p["sentry.sample_rate"];
  m != null && (e.sample_rate = `${m}`);
  const g = p["sentry.source"], _ = c.description;
  return g !== "url" && _ && (e.transaction = _), function(w) {
    if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
    const y = te(), E = y && y.getOptions();
    return !!E && (E.enableTracing || "tracesSampleRate" in E || "tracesSampler" in E);
  }() && (e.sampled = String(function(w) {
    const { traceFlags: y } = w.spanContext();
    return y === 1;
  }(n))), t.emit("createDsc", e, n), e;
}
function tc(r, t, e, n) {
  const i = Ds(e), o = r.type && r.type !== "replay_event" ? r.type : "event";
  (function(u, c) {
    c && (u.sdk = u.sdk || {}, u.sdk.name = u.sdk.name || c.name, u.sdk.version = u.sdk.version || c.version, u.sdk.integrations = [...u.sdk.integrations || [], ...c.integrations || []], u.sdk.packages = [...u.sdk.packages || [], ...c.packages || []]);
  })(r, e && e.sdk);
  const a = function(u, c, p, m) {
    const g = u.sdkProcessingMetadata && u.sdkProcessingMetadata.dynamicSamplingContext;
    return { event_id: u.event_id, sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...c && { sdk: c }, ...!!p && m && { dsn: Wt(m) }, ...g && { trace: ue({ ...g }) } };
  }(r, i, n, t);
  return delete r.sdkProcessingMetadata, wt(a, [[{ type: o }, r]]);
}
function Rr(r, t, e, n = 0) {
  return new se((i, o) => {
    const a = r[n];
    if (t === null || typeof a != "function") i(t);
    else {
      const u = a({ ...t }, e);
      G && a.id && u === null && L.log(`Event processor "${a.id}" dropped event`), ir(u) ? u.then((c) => Rr(r, c, e, n + 1).then(i)).then(null, o) : Rr(r, u, e, n + 1).then(i).then(null, o);
    }
  });
}
function rc(r, t) {
  const { fingerprint: e, span: n, breadcrumbs: i, sdkProcessingMetadata: o } = t;
  (function(a, u) {
    const { extra: c, tags: p, user: m, contexts: g, level: _, transactionName: w } = u, y = ue(c);
    y && Object.keys(y).length && (a.extra = { ...y, ...a.extra });
    const E = ue(p);
    E && Object.keys(E).length && (a.tags = { ...E, ...a.tags });
    const C = ue(m);
    C && Object.keys(C).length && (a.user = { ...C, ...a.user });
    const O = ue(g);
    O && Object.keys(O).length && (a.contexts = { ...O, ...a.contexts }), _ && (a.level = _), w && a.type !== "transaction" && (a.transaction = w);
  })(r, t), n && function(a, u) {
    a.contexts = { trace: Xa(u), ...a.contexts }, a.sdkProcessingMetadata = { dynamicSamplingContext: ec(u), ...a.sdkProcessingMetadata };
    const c = Rs(u), p = zt(c).description;
    p && !a.transaction && a.type === "transaction" && (a.transaction = p);
  }(r, n), function(a, u) {
    a.fingerprint = a.fingerprint ? function(c) {
      return Array.isArray(c) ? c : [c];
    }(a.fingerprint) : [], u && (a.fingerprint = a.fingerprint.concat(u)), a.fingerprint && !a.fingerprint.length && delete a.fingerprint;
  }(r, e), function(a, u) {
    const c = [...a.breadcrumbs || [], ...u];
    a.breadcrumbs = c.length ? c : void 0;
  }(r, i), function(a, u) {
    a.sdkProcessingMetadata = { ...a.sdkProcessingMetadata, ...u };
  }(r, o);
}
function mi(r, t) {
  const { extra: e, tags: n, user: i, contexts: o, level: a, sdkProcessingMetadata: u, breadcrumbs: c, fingerprint: p, eventProcessors: m, attachments: g, propagationContext: _, transactionName: w, span: y } = t;
  ht(r, "extra", e), ht(r, "tags", n), ht(r, "user", i), ht(r, "contexts", o), ht(r, "sdkProcessingMetadata", u), a && (r.level = a), w && (r.transactionName = w), y && (r.span = y), c.length && (r.breadcrumbs = [...r.breadcrumbs, ...c]), p.length && (r.fingerprint = [...r.fingerprint, ...p]), m.length && (r.eventProcessors = [...r.eventProcessors, ...m]), g.length && (r.attachments = [...r.attachments, ...g]), r.propagationContext = { ...r.propagationContext, ..._ };
}
function ht(r, t, e) {
  if (e && Object.keys(e).length) {
    r[t] = { ...r[t] };
    for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[t][n] = e[n]);
  }
}
function nc(r, t, e, n, i, o) {
  const { normalizeDepth: a = 3, normalizeMaxBreadth: u = 1e3 } = r, c = { ...t, event_id: t.event_id || e.event_id || pe(), timestamp: t.timestamp || Et() }, p = e.integrations || r.integrations.map((y) => y.name);
  (function(y, E) {
    const { environment: C, release: O, dist: j, maxValueLength: x = 250 } = E;
    "environment" in y || (y.environment = "environment" in E ? C : xs), y.release === void 0 && O !== void 0 && (y.release = O), y.dist === void 0 && j !== void 0 && (y.dist = j), y.message && (y.message = nt(y.message, x));
    const H = y.exception && y.exception.values && y.exception.values[0];
    H && H.value && (H.value = nt(H.value, x));
    const Y = y.request;
    Y && Y.url && (Y.url = nt(Y.url, x));
  })(c, r), function(y, E) {
    E.length > 0 && (y.sdk = y.sdk || {}, y.sdk.integrations = [...y.sdk.integrations || [], ...E]);
  }(c, p), i && i.emit("applyFrameMetadata", t), t.type === void 0 && function(y, E) {
    const C = F._sentryDebugIds;
    if (!C) return;
    let O;
    const j = gi.get(E);
    j ? O = j : (O = /* @__PURE__ */ new Map(), gi.set(E, O));
    const x = Object.entries(C).reduce((H, [Y, ae]) => {
      let ie;
      const ge = O.get(Y);
      ge ? ie = ge : (ie = E(Y), O.set(Y, ie));
      for (let $e = ie.length - 1; $e >= 0; $e--) {
        const ut = ie[$e];
        if (ut.filename) {
          H[ut.filename] = ae;
          break;
        }
      }
      return H;
    }, {});
    try {
      y.exception.values.forEach((H) => {
        H.stacktrace.frames.forEach((Y) => {
          Y.filename && (Y.debug_id = x[Y.filename]);
        });
      });
    } catch {
    }
  }(c, r.stackParser);
  const m = function(y, E) {
    if (!E) return y;
    const C = y ? y.clone() : new qe();
    return C.update(E), C;
  }(n, e.captureContext);
  e.mechanism && bt(c, e.mechanism);
  const g = i ? i.getEventProcessors() : [], _ = Gt("globalScope", () => new qe()).getScopeData();
  o && mi(_, o.getScopeData()), m && mi(_, m.getScopeData());
  const w = [...e.attachments || [], ..._.attachments];
  return w.length && (e.attachments = w), rc(c, _), Rr([...g, ..._.eventProcessors], c, e).then((y) => (y && function(E) {
    const C = {};
    try {
      E.exception.values.forEach((j) => {
        j.stacktrace.frames.forEach((x) => {
          x.debug_id && (x.abs_path ? C[x.abs_path] = x.debug_id : x.filename && (C[x.filename] = x.debug_id), delete x.debug_id);
        });
      });
    } catch {
    }
    if (Object.keys(C).length === 0) return;
    E.debug_meta = E.debug_meta || {}, E.debug_meta.images = E.debug_meta.images || [];
    const O = E.debug_meta.images;
    Object.entries(C).forEach(([j, x]) => {
      O.push({ type: "sourcemap", code_file: j, debug_id: x });
    });
  }(y), typeof a == "number" && a > 0 ? function(E, C, O) {
    if (!E) return null;
    const j = { ...E, ...E.breadcrumbs && { breadcrumbs: E.breadcrumbs.map((x) => ({ ...x, ...x.data && { data: De(x.data, C, O) } })) }, ...E.user && { user: De(E.user, C, O) }, ...E.contexts && { contexts: De(E.contexts, C, O) }, ...E.extra && { extra: De(E.extra, C, O) } };
    return E.contexts && E.contexts.trace && j.contexts && (j.contexts.trace = E.contexts.trace, E.contexts.trace.data && (j.contexts.trace.data = De(E.contexts.trace.data, C, O))), E.spans && (j.spans = E.spans.map((x) => ({ ...x, ...x.data && { data: De(x.data, C, O) } }))), j;
  }(y, a, u) : y));
}
const gi = /* @__PURE__ */ new WeakMap();
function vi(r, t) {
  return un().captureEvent(r, t);
}
function ic(r, t) {
  return e = { sentry_key: r.publicKey, sentry_version: "7", ...t && { sentry_client: `${t.name}/${t.version}` } }, Object.keys(e).map((n) => `${encodeURIComponent(n)}=${encodeURIComponent(e[n])}`).join("&");
  var e;
}
const yi = [];
function _i(r, t) {
  for (const e of t) e && e.afterAllSetup && e.afterAllSetup(r);
}
function bi(r, t, e) {
  if (e[t.name]) G && L.log(`Integration skipped because it was already installed: ${t.name}`);
  else {
    if (e[t.name] = t, yi.indexOf(t.name) === -1 && typeof t.setupOnce == "function" && (t.setupOnce(), yi.push(t.name)), t.setup && typeof t.setup == "function" && t.setup(r), typeof t.preprocessEvent == "function") {
      const n = t.preprocessEvent.bind(t);
      r.on("preprocessEvent", (i, o) => n(i, o, r));
    }
    if (typeof t.processEvent == "function") {
      const n = t.processEvent.bind(t), i = Object.assign((o, a) => n(o, a, r), { id: t.name });
      r.addEventProcessor(i);
    }
    G && L.log(`Integration installed: ${t.name}`);
  }
}
const wi = "Not capturing exception because it's already been captured.";
class sc {
  constructor(t) {
    if (this._options = t, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], t.dsn ? this._dsn = Ia(t.dsn) : G && L.warn("No DSN provided, client will not send events."), this._dsn) {
      const o = (e = this._dsn, n = t.tunnel, i = t._metadata ? t._metadata.sdk : void 0, n || `${function(a) {
        return `${function(u) {
          const c = u.protocol ? `${u.protocol}:` : "", p = u.port ? `:${u.port}` : "";
          return `${c}//${u.host}${p}${u.path ? `/${u.path}` : ""}/api/`;
        }(a)}${a.projectId}/envelope/`;
      }(e)}?${ic(e, i)}`);
      this._transport = t.transport({ tunnel: this._options.tunnel, recordDroppedEvent: this.recordDroppedEvent.bind(this), ...t.transportOptions, url: o });
    }
    var e, n, i;
  }
  captureException(t, e, n) {
    const i = pe();
    if (si(t)) return G && L.log(wi), i;
    const o = { event_id: i, ...e };
    return this._process(this.eventFromException(t, o).then((a) => this._captureEvent(a, o, n))), o.event_id;
  }
  captureMessage(t, e, n, i) {
    const o = { event_id: pe(), ...n }, a = rn(t) ? t : String(t), u = Cr(t) ? this.eventFromMessage(a, e, o) : this.eventFromException(t, o);
    return this._process(u.then((c) => this._captureEvent(c, o, i))), o.event_id;
  }
  captureEvent(t, e, n) {
    const i = pe();
    if (e && e.originalException && si(e.originalException)) return G && L.log(wi), i;
    const o = { event_id: i, ...e }, a = (t.sdkProcessingMetadata || {}).capturedSpanScope;
    return this._process(this._captureEvent(t, o, a || n)), o.event_id;
  }
  captureSession(t) {
    typeof t.release != "string" ? G && L.warn("Discarded session because of missing or non-string release") : (this.sendSession(t), Dr(t, { init: !1 }));
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  flush(t) {
    const e = this._transport;
    return e ? (this.emit("flush"), this._isClientDoneProcessing(t).then((n) => e.flush(t).then((i) => n && i))) : Xe(!0);
  }
  close(t) {
    return this.flush(t).then((e) => (this.getOptions().enabled = !1, this.emit("close"), e));
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(t) {
    this._eventProcessors.push(t);
  }
  init() {
    (this._isEnabled() || this._options.integrations.some(({ name: t }) => t.startsWith("Spotlight"))) && this._setupIntegrations();
  }
  getIntegrationByName(t) {
    return this._integrations[t];
  }
  addIntegration(t) {
    const e = this._integrations[t.name];
    bi(this, t, this._integrations), e || _i(this, [t]);
  }
  sendEvent(t, e = {}) {
    this.emit("beforeSendEvent", t, e);
    let n = tc(t, this._dsn, this._options._metadata, this._options.tunnel);
    for (const o of e.attachments || []) n = Ba(n, Ga(o));
    const i = this.sendEnvelope(n);
    i && i.then((o) => this.emit("afterSendEvent", t, o), null);
  }
  sendSession(t) {
    const e = function(n, i, o, a) {
      const u = Ds(o);
      return wt({ sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...u && { sdk: u }, ...!!a && i && { dsn: Wt(i) } }, ["aggregates" in n ? [{ type: "sessions" }, n] : [{ type: "session" }, n.toJSON()]]);
    }(t, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(e);
  }
  recordDroppedEvent(t, e, n) {
    if (this._options.sendClientReports) {
      const i = typeof n == "number" ? n : 1, o = `${t}:${e}`;
      G && L.log(`Recording outcome: "${o}"${i > 1 ? ` (${i} times)` : ""}`), this._outcomes[o] = (this._outcomes[o] || 0) + i;
    }
  }
  on(t, e) {
    const n = this._hooks[t] = this._hooks[t] || [];
    return n.push(e), () => {
      const i = n.indexOf(e);
      i > -1 && n.splice(i, 1);
    };
  }
  emit(t, ...e) {
    const n = this._hooks[t];
    n && n.forEach((i) => i(...e));
  }
  sendEnvelope(t) {
    return this.emit("beforeEnvelope", t), this._isEnabled() && this._transport ? this._transport.send(t).then(null, (e) => (G && L.error("Error while sending event:", e), e)) : (G && L.error("Transport disabled"), Xe({}));
  }
  _setupIntegrations() {
    const { integrations: t } = this._options;
    this._integrations = function(e, n) {
      const i = {};
      return n.forEach((o) => {
        o && bi(e, o, i);
      }), i;
    }(this, t), _i(this, t);
  }
  _updateSessionFromEvent(t, e) {
    let n = !1, i = !1;
    const o = e.exception && e.exception.values;
    if (o) {
      i = !0;
      for (const u of o) {
        const c = u.mechanism;
        if (c && c.handled === !1) {
          n = !0;
          break;
        }
      }
    }
    const a = t.status === "ok";
    (a && t.errors === 0 || a && n) && (Dr(t, { ...n && { status: "crashed" }, errors: t.errors || Number(i || n) }), this.captureSession(t));
  }
  _isClientDoneProcessing(t) {
    return new se((e) => {
      let n = 0;
      const i = setInterval(() => {
        this._numProcessing == 0 ? (clearInterval(i), e(!0)) : (n += 1, t && n >= t && (clearInterval(i), e(!1)));
      }, 1);
    });
  }
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._transport !== void 0;
  }
  _prepareEvent(t, e, n, i = Ns()) {
    const o = this.getOptions(), a = Object.keys(this._integrations);
    return !e.integrations && a.length > 0 && (e.integrations = a), this.emit("preprocessEvent", t, e), t.type || i.setLastEventId(t.event_id || e.event_id), nc(o, t, e, n, this, i).then((u) => {
      if (u === null) return u;
      const c = { ...i.getPropagationContext(), ...n ? n.getPropagationContext() : void 0 };
      if (!(u.contexts && u.contexts.trace) && c) {
        const { traceId: p, spanId: m, parentSpanId: g, dsc: _ } = c;
        u.contexts = { trace: ue({ trace_id: p, span_id: m, parent_span_id: g }), ...u.contexts };
        const w = _ || Fs(p, this);
        u.sdkProcessingMetadata = { dynamicSamplingContext: w, ...u.sdkProcessingMetadata };
      }
      return u;
    });
  }
  _captureEvent(t, e = {}, n) {
    return this._processEvent(t, e, n).then((i) => i.event_id, (i) => {
      if (G) {
        const o = i;
        o.logLevel === "log" ? L.log(o.message) : L.warn(o);
      }
    });
  }
  _processEvent(t, e, n) {
    const i = this.getOptions(), { sampleRate: o } = i, a = Ei(t), u = Si(t), c = t.type || "error", p = `before send for type \`${c}\``, m = o === void 0 ? void 0 : function(w) {
      if (typeof w == "boolean") return Number(w);
      const y = typeof w == "string" ? parseFloat(w) : w;
      if (!(typeof y != "number" || isNaN(y) || y < 0 || y > 1)) return y;
      G && L.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(w)} of type ${JSON.stringify(typeof w)}.`);
    }(o);
    if (u && typeof m == "number" && Math.random() > m) return this.recordDroppedEvent("sample_rate", "error", t), Ht(new _e(`Discarding event because it's not included in the random sample (sampling rate = ${o})`, "log"));
    const g = c === "replay_event" ? "replay" : c, _ = (t.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
    return this._prepareEvent(t, e, n, _).then((w) => {
      if (w === null) throw this.recordDroppedEvent("event_processor", g, t), new _e("An event processor returned `null`, will not send event.", "log");
      if (e.data && e.data.__sentry__ === !0) return w;
      const y = function(E, C, O, j) {
        const { beforeSend: x, beforeSendTransaction: H, beforeSendSpan: Y } = C;
        if (Si(O) && x) return x(O, j);
        if (Ei(O)) {
          if (O.spans && Y) {
            const ae = [];
            for (const ie of O.spans) {
              const ge = Y(ie);
              ge ? ae.push(ge) : E.recordDroppedEvent("before_send", "span");
            }
            O.spans = ae;
          }
          if (H) {
            if (O.spans) {
              const ae = O.spans.length;
              O.sdkProcessingMetadata = { ...O.sdkProcessingMetadata, spanCountBeforeProcessing: ae };
            }
            return H(O, j);
          }
        }
        return O;
      }(this, i, w, e);
      return function(E, C) {
        const O = `${C} must return \`null\` or a valid event.`;
        if (ir(E)) return E.then((j) => {
          if (!ot(j) && j !== null) throw new _e(O);
          return j;
        }, (j) => {
          throw new _e(`${C} rejected with ${j}`);
        });
        if (!ot(E) && E !== null) throw new _e(O);
        return E;
      }(y, p);
    }).then((w) => {
      if (w === null) {
        if (this.recordDroppedEvent("before_send", g, t), a) {
          const C = 1 + (t.spans || []).length;
          this.recordDroppedEvent("before_send", "span", C);
        }
        throw new _e(`${p} returned \`null\`, will not send event.`, "log");
      }
      const y = n && n.getSession();
      if (!a && y && this._updateSessionFromEvent(y, w), a) {
        const C = (w.sdkProcessingMetadata && w.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - (w.spans ? w.spans.length : 0);
        C > 0 && this.recordDroppedEvent("before_send", "span", C);
      }
      const E = w.transaction_info;
      if (a && E && w.transaction !== t.transaction) {
        const C = "custom";
        w.transaction_info = { ...E, source: C };
      }
      return this.sendEvent(w, e), w;
    }).then(null, (w) => {
      throw w instanceof _e ? w : (this.captureException(w, { data: { __sentry__: !0 }, originalException: w }), new _e(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${w}`));
    });
  }
  _process(t) {
    this._numProcessing++, t.then((e) => (this._numProcessing--, e), (e) => (this._numProcessing--, e));
  }
  _clearOutcomes() {
    const t = this._outcomes;
    return this._outcomes = {}, Object.entries(t).map(([e, n]) => {
      const [i, o] = e.split(":");
      return { reason: i, category: o, quantity: n };
    });
  }
  _flushOutcomes() {
    G && L.log("Flushing outcomes...");
    const t = this._clearOutcomes();
    if (t.length === 0) return void (G && L.log("No outcomes to send"));
    if (!this._dsn) return void (G && L.log("No dsn provided, will not send outcomes"));
    G && L.log("Sending outcomes:", t);
    const e = (n = t, wt((i = this._options.tunnel && Wt(this._dsn)) ? { dsn: i } : {}, [[{ type: "client_report" }, { timestamp: o || Et(), discarded_events: n }]]));
    var n, i, o;
    this.sendEnvelope(e);
  }
}
function Si(r) {
  return r.type === void 0;
}
function Ei(r) {
  return r.type === "transaction";
}
function oc(r, t, e = Fa(r.bufferSize || 64)) {
  let n = {};
  return { send: function(i) {
    const o = [];
    if (ai(i, (c, p) => {
      const m = ci(p);
      if (function(g, _, w = Date.now()) {
        return function(y, E) {
          return y[E] || y.all || 0;
        }(g, _) > w;
      }(n, m)) {
        const g = ki(c, p);
        r.recordDroppedEvent("ratelimit_backoff", m, g);
      } else o.push(c);
    }), o.length === 0) return Xe({});
    const a = wt(i[0], o), u = (c) => {
      ai(a, (p, m) => {
        const g = ki(p, m);
        r.recordDroppedEvent(c, ci(m), g);
      });
    };
    return e.add(() => t({ body: Ja(a) }).then((c) => (c.statusCode !== void 0 && (c.statusCode < 200 || c.statusCode >= 300) && G && L.warn(`Sentry responded with status code ${c.statusCode} to sent event.`), n = Wa(n, c), c), (c) => {
      throw u("network_error"), c;
    })).then((c) => c, (c) => {
      if (c instanceof _e) return G && L.error("Skipped sending event because buffer is full."), u("queue_overflow"), Xe({});
      throw c;
    });
  }, flush: (i) => e.drain(i) };
}
function ki(r, t) {
  if (t === "event" || t === "transaction") return Array.isArray(r) ? r[1] : void 0;
}
const ac = 100;
function Be(r, t) {
  const e = te(), n = Ns();
  if (!e) return;
  const { beforeBreadcrumb: i = null, maxBreadcrumbs: o = ac } = e.getOptions();
  if (o <= 0) return;
  const a = { timestamp: Et(), ...r }, u = i ? sn(() => i(a, t)) : a;
  u !== null && (e.emit && e.emit("beforeAddBreadcrumb", u, t), n.addBreadcrumb(u, o));
}
let Ci;
const Ti = /* @__PURE__ */ new WeakMap(), cc = () => ({ name: "FunctionToString", setupOnce() {
  Ci = Function.prototype.toString;
  try {
    Function.prototype.toString = function(...r) {
      const t = on(this), e = Ti.has(te()) && t !== void 0 ? t : this;
      return Ci.apply(e, r);
    };
  } catch {
  }
}, setup(r) {
  Ti.set(r, !0);
} }), lc = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler"], uc = (r = {}) => ({ name: "InboundFilters", processEvent(t, e, n) {
  const i = n.getOptions(), o = function(a = {}, u = {}) {
    return { allowUrls: [...a.allowUrls || [], ...u.allowUrls || []], denyUrls: [...a.denyUrls || [], ...u.denyUrls || []], ignoreErrors: [...a.ignoreErrors || [], ...u.ignoreErrors || [], ...a.disableErrorDefaults ? [] : lc], ignoreTransactions: [...a.ignoreTransactions || [], ...u.ignoreTransactions || []], ignoreInternal: a.ignoreInternal === void 0 || a.ignoreInternal };
  }(r, i);
  return function(a, u) {
    return u.ignoreInternal && function(c) {
      try {
        return c.exception.values[0].type === "SentryError";
      } catch {
      }
      return !1;
    }(a) ? (G && L.warn(`Event dropped due to being internal Sentry Error.
Event: ${je(a)}`), !0) : function(c, p) {
      return c.type || !p || !p.length ? !1 : function(m) {
        const g = [];
        m.message && g.push(m.message);
        let _;
        try {
          _ = m.exception.values[m.exception.values.length - 1];
        } catch {
        }
        return _ && _.value && (g.push(_.value), _.type && g.push(`${_.type}: ${_.value}`)), g;
      }(c).some((m) => Ct(m, p));
    }(a, u.ignoreErrors) ? (G && L.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${je(a)}`), !0) : function(c) {
      return c.type || !c.exception || !c.exception.values || c.exception.values.length === 0 ? !1 : !c.message && !c.exception.values.some((p) => p.stacktrace || p.type && p.type !== "Error" || p.value);
    }(a) ? (G && L.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${je(a)}`), !0) : function(c, p) {
      if (c.type !== "transaction" || !p || !p.length) return !1;
      const m = c.transaction;
      return !!m && Ct(m, p);
    }(a, u.ignoreTransactions) ? (G && L.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${je(a)}`), !0) : function(c, p) {
      if (!p || !p.length) return !1;
      const m = Pt(c);
      return !!m && Ct(m, p);
    }(a, u.denyUrls) ? (G && L.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${je(a)}.
Url: ${Pt(a)}`), !0) : function(c, p) {
      if (!p || !p.length) return !0;
      const m = Pt(c);
      return !m || Ct(m, p);
    }(a, u.allowUrls) ? !1 : (G && L.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${je(a)}.
Url: ${Pt(a)}`), !0);
  }(t, o) ? null : t;
} });
function Pt(r) {
  try {
    let t;
    try {
      t = r.exception.values[0].stacktrace.frames;
    } catch {
    }
    return t ? function(e = []) {
      for (let n = e.length - 1; n >= 0; n--) {
        const i = e[n];
        if (i && i.filename !== "<anonymous>" && i.filename !== "[native code]") return i.filename || null;
      }
      return null;
    }(t) : null;
  } catch {
    return G && L.error(`Cannot extract url for event ${je(r)}`), null;
  }
}
const dc = () => {
  let r;
  return { name: "Dedupe", processEvent(t) {
    if (t.type) return t;
    try {
      if (function(e, n) {
        return n ? !!(function(i, o) {
          const a = i.message, u = o.message;
          return !(!a && !u || a && !u || !a && u || a !== u || !Ai(i, o) || !Mi(i, o));
        }(e, n) || function(i, o) {
          const a = Oi(o), u = Oi(i);
          return !(!a || !u || a.type !== u.type || a.value !== u.value || !Ai(i, o) || !Mi(i, o));
        }(e, n)) : !1;
      }(t, r)) return G && L.warn("Event dropped due to being a duplicate of previously captured event."), null;
    } catch {
    }
    return r = t;
  } };
};
function Mi(r, t) {
  let e = ri(r), n = ri(t);
  if (!e && !n) return !0;
  if (e && !n || !e && n || n.length !== e.length) return !1;
  for (let i = 0; i < n.length; i++) {
    const o = n[i], a = e[i];
    if (o.filename !== a.filename || o.lineno !== a.lineno || o.colno !== a.colno || o.function !== a.function) return !1;
  }
  return !0;
}
function Ai(r, t) {
  let e = r.fingerprint, n = t.fingerprint;
  if (!e && !n) return !0;
  if (e && !n || !e && n) return !1;
  try {
    return e.join("") === n.join("");
  } catch {
    return !1;
  }
}
function Oi(r) {
  return r.exception && r.exception.values && r.exception.values[0];
}
const Q = F;
let xr = 0;
function Pi() {
  return xr > 0;
}
function ct(r, t = {}, e) {
  if (typeof r != "function") return r;
  try {
    const i = r.__sentry_wrapped__;
    if (i) return typeof i == "function" ? i : r;
    if (on(r)) return r;
  } catch {
    return r;
  }
  const n = function() {
    const i = Array.prototype.slice.call(arguments);
    try {
      e && typeof e == "function" && e.apply(this, arguments);
      const o = i.map((a) => ct(a, t));
      return r.apply(this, o);
    } catch (o) {
      throw xr++, setTimeout(() => {
        xr--;
      }), function(...a) {
        const u = ln(sr());
        if (a.length === 2) {
          const [c, p] = a;
          return c ? u.withSetScope(c, p) : u.withScope(p);
        }
        u.withScope(a[0]);
      }((a) => {
        var u;
        a.addEventProcessor((c) => (t.mechanism && (Lr(c, void 0), bt(c, t.mechanism)), c.extra = { ...c.extra, arguments: i }, c)), u = o, un().captureException(u, void 0);
      }), o;
    }
  };
  try {
    for (const i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  } catch {
  }
  Ps(n, r), Ke(r, "__sentry_wrapped__", n);
  try {
    Object.getOwnPropertyDescriptor(n, "name").configurable && Object.defineProperty(n, "name", { get: () => r.name });
  } catch {
  }
  return n;
}
const dn = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function pn(r, t) {
  const e = hn(r, t), n = { type: t && t.name, value: fc(t) };
  return e.length && (n.stacktrace = { frames: e }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n;
}
function pc(r, t, e, n) {
  const i = te(), o = i && i.getOptions().normalizeDepth, a = function(p) {
    for (const m in p) if (Object.prototype.hasOwnProperty.call(p, m)) {
      const g = p[m];
      if (g instanceof Error) return g;
    }
  }(t), u = { __serialized__: js(t, o) };
  if (a) return { exception: { values: [pn(r, a)] }, extra: u };
  const c = { exception: { values: [{ type: nr(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error", value: mc(t, { isUnhandledRejection: n }) }] }, extra: u };
  if (e) {
    const p = hn(r, e);
    p.length && (c.exception.values[0].stacktrace = { frames: p });
  }
  return c;
}
function dr(r, t) {
  return { exception: { values: [pn(r, t)] } };
}
function hn(r, t) {
  const e = t.stacktrace || t.stack || "", n = function(o) {
    return o && hc.test(o.message) ? 1 : 0;
  }(t), i = function(o) {
    return typeof o.framesToPop == "number" ? o.framesToPop : 0;
  }(t);
  try {
    return r(e, n, i);
  } catch {
  }
  return [];
}
const hc = /Minified React error #\d+;/i;
function fc(r) {
  const t = r && r.message;
  return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message";
}
function Fr(r, t, e, n, i) {
  let o;
  if (Ms(t) && t.error)
    return dr(r, t.error);
  if (Gn(t) || lt(t, "DOMException")) {
    const a = t;
    if ("stack" in t) o = dr(r, t);
    else {
      const u = a.name || (Gn(a) ? "DOMError" : "DOMException"), c = a.message ? `${u}: ${a.message}` : u;
      o = qr(r, c, e, n), Lr(o, c);
    }
    return "code" in a && (o.tags = { ...o.tags, "DOMException.code": `${a.code}` }), o;
  }
  return tn(t) ? dr(r, t) : ot(t) || nr(t) ? (o = pc(r, t, e, i), bt(o, { synthetic: !0 }), o) : (o = qr(r, t, e, n), Lr(o, `${t}`), bt(o, { synthetic: !0 }), o);
}
function qr(r, t, e, n) {
  const i = {};
  if (n && e) {
    const o = hn(r, e);
    o.length && (i.exception = { values: [{ value: t, stacktrace: { frames: o } }] });
  }
  if (rn(t)) {
    const { __sentry_template_string__: o, __sentry_template_values__: a } = t;
    return i.logentry = { message: o, params: a }, i;
  }
  return i.message = t, i;
}
function mc(r, { isUnhandledRejection: t }) {
  const e = function(i, o = 40) {
    const a = Object.keys(Ls(i));
    a.sort();
    const u = a[0];
    if (!u) return "[object has no keys]";
    if (u.length >= o) return nt(u, o);
    for (let c = a.length; c > 0; c--) {
      const p = a.slice(0, c).join(", ");
      if (!(p.length > o)) return c === a.length ? p : nt(p, o);
    }
    return "";
  }(r), n = t ? "promise rejection" : "exception";
  return Ms(r) ? `Event \`ErrorEvent\` captured as ${n} with message \`${r.message}\`` : nr(r) ? `Event \`${function(i) {
    try {
      const o = Object.getPrototypeOf(i);
      return o ? o.constructor.name : void 0;
    } catch {
    }
  }(r)}\` (type=${r.type}) captured as ${n}` : `Object captured as ${n} with keys: ${e}`;
}
class gc extends sc {
  constructor(t) {
    const e = { parentSpanIsAlwaysRootSpan: !0, ...t };
    (function(n, i, o = [i], a = "npm") {
      const u = n._metadata || {};
      u.sdk || (u.sdk = { name: `sentry.javascript.${i}`, packages: o.map((c) => ({ name: `${a}:@sentry/${c}`, version: ze })), version: ze }), n._metadata = u;
    })(e, "browser", ["browser"], Q.SENTRY_SDK_SOURCE || "npm"), super(e), e.sendClientReports && Q.document && Q.document.addEventListener("visibilitychange", () => {
      Q.document.visibilityState === "hidden" && this._flushOutcomes();
    });
  }
  eventFromException(t, e) {
    return function(n, i, o, a) {
      const u = Fr(n, i, o && o.syntheticException || void 0, a);
      return bt(u), u.level = "error", o && o.event_id && (u.event_id = o.event_id), Xe(u);
    }(this._options.stackParser, t, e, this._options.attachStacktrace);
  }
  eventFromMessage(t, e = "info", n) {
    return function(i, o, a = "info", u, c) {
      const p = qr(i, o, u && u.syntheticException || void 0, c);
      return p.level = a, u && u.event_id && (p.event_id = u.event_id), Xe(p);
    }(this._options.stackParser, t, e, n, this._options.attachStacktrace);
  }
  captureUserFeedback(t) {
    if (!this._isEnabled()) return void (dn && L.warn("SDK not enabled, will not capture user feedback."));
    const e = function(n, { metadata: i, tunnel: o, dsn: a }) {
      const u = { event_id: n.event_id, sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...i && i.sdk && { sdk: { name: i.sdk.name, version: i.sdk.version } }, ...!!o && !!a && { dsn: Wt(a) } };
      return wt(u, [/* @__PURE__ */ function(p) {
        return [{ type: "user_report" }, p];
      }(n)]);
    }(t, { metadata: this.getSdkMetadata(), dsn: this.getDsn(), tunnel: this.getOptions().tunnel });
    this.sendEnvelope(e);
  }
  _prepareEvent(t, e, n) {
    return t.platform = t.platform || "javascript", super._prepareEvent(t, e, n);
  }
}
const vc = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, X = F;
let Li, pr, hr, Lt;
function yc() {
  if (!X.document) return;
  const r = de.bind(null, "dom"), t = Ii(r, !0);
  X.document.addEventListener("click", t, !1), X.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach((e) => {
    const n = X[e] && X[e].prototype;
    n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (ne(n, "addEventListener", function(i) {
      return function(o, a, u) {
        if (o === "click" || o == "keypress") try {
          const c = this, p = c.__sentry_instrumentation_handlers__ = c.__sentry_instrumentation_handlers__ || {}, m = p[o] = p[o] || { refCount: 0 };
          if (!m.handler) {
            const g = Ii(r);
            m.handler = g, i.call(this, o, g, u);
          }
          m.refCount++;
        } catch {
        }
        return i.call(this, o, a, u);
      };
    }), ne(n, "removeEventListener", function(i) {
      return function(o, a, u) {
        if (o === "click" || o == "keypress") try {
          const c = this, p = c.__sentry_instrumentation_handlers__ || {}, m = p[o];
          m && (m.refCount--, m.refCount <= 0 && (i.call(this, o, m.handler, u), m.handler = void 0, delete p[o]), Object.keys(p).length === 0 && delete c.__sentry_instrumentation_handlers__);
        } catch {
        }
        return i.call(this, o, a, u);
      };
    }));
  });
}
function Ii(r, t = !1) {
  return (e) => {
    if (!e || e._sentryCaptured) return;
    const n = function(o) {
      try {
        return o.target;
      } catch {
        return null;
      }
    }(e);
    if (function(o, a) {
      return o === "keypress" && (!a || !a.tagName || a.tagName !== "INPUT" && a.tagName !== "TEXTAREA" && !a.isContentEditable);
    }(e.type, n)) return;
    Ke(e, "_sentryCaptured", !0), n && !n._sentryId && Ke(n, "_sentryId", pe());
    const i = e.type === "keypress" ? "input" : e.type;
    (function(o) {
      if (o.type !== pr) return !1;
      try {
        if (!o.target || o.target._sentryId !== hr) return !1;
      } catch {
      }
      return !0;
    })(e) || (r({ event: e, name: i, global: t }), pr = e.type, hr = n ? n._sentryId : void 0), clearTimeout(Li), Li = X.setTimeout(() => {
      hr = void 0, pr = void 0;
    }, 1e3);
  };
}
function _c() {
  if (!function() {
    const e = Ot.chrome, n = e && e.app && e.app.runtime, i = "history" in Ot && !!Ot.history.pushState && !!Ot.history.replaceState;
    return !n && i;
  }()) return;
  const r = X.onpopstate;
  function t(e) {
    return function(...n) {
      const i = n.length > 2 ? n[2] : void 0;
      if (i) {
        const o = Lt, a = String(i);
        Lt = a, de("history", { from: o, to: a });
      }
      return e.apply(this, n);
    };
  }
  X.onpopstate = function(...e) {
    const n = X.location.href, i = Lt;
    if (Lt = n, de("history", { from: i, to: n }), r) try {
      return r.apply(this, e);
    } catch {
    }
  }, ne(X.history, "pushState", t), ne(X.history, "replaceState", t);
}
const Ft = {};
function ji(r) {
  Ft[r] = void 0;
}
const mt = "__sentry_xhr_v3__";
function bc() {
  if (!X.XMLHttpRequest) return;
  const r = XMLHttpRequest.prototype;
  r.open = new Proxy(r.open, { apply(t, e, n) {
    const i = 1e3 * Re(), o = Ae(n[0]) ? n[0].toUpperCase() : void 0, a = function(c) {
      if (Ae(c)) return c;
      try {
        return c.toString();
      } catch {
      }
    }(n[1]);
    if (!o || !a) return t.apply(e, n);
    e[mt] = { method: o, url: a, request_headers: {} }, o === "POST" && a.match(/sentry_key/) && (e.__sentry_own_request__ = !0);
    const u = () => {
      const c = e[mt];
      if (c && e.readyState === 4) {
        try {
          c.status_code = e.status;
        } catch {
        }
        de("xhr", { endTimestamp: 1e3 * Re(), startTimestamp: i, xhr: e });
      }
    };
    return "onreadystatechange" in e && typeof e.onreadystatechange == "function" ? e.onreadystatechange = new Proxy(e.onreadystatechange, { apply: (c, p, m) => (u(), c.apply(p, m)) }) : e.addEventListener("readystatechange", u), e.setRequestHeader = new Proxy(e.setRequestHeader, { apply(c, p, m) {
      const [g, _] = m, w = p[mt];
      return w && Ae(g) && Ae(_) && (w.request_headers[g.toLowerCase()] = _), c.apply(p, m);
    } }), t.apply(e, n);
  } }), r.send = new Proxy(r.send, { apply(t, e, n) {
    const i = e[mt];
    return i ? (n[0] !== void 0 && (i.body = n[0]), de("xhr", { startTimestamp: 1e3 * Re(), xhr: e }), t.apply(e, n)) : t.apply(e, n);
  } });
}
function wc(r, t = function(e) {
  const n = Ft[e];
  if (n) return n;
  let i = X[e];
  if (Or(i)) return Ft[e] = i.bind(X);
  const o = X.document;
  if (o && typeof o.createElement == "function") try {
    const a = o.createElement("iframe");
    a.hidden = !0, o.head.appendChild(a);
    const u = a.contentWindow;
    u && u[e] && (i = u[e]), o.head.removeChild(a);
  } catch (a) {
    vc && L.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, a);
  }
  return i && (Ft[e] = i.bind(X));
}("fetch")) {
  let e = 0, n = 0;
  return oc(r, function(i) {
    const o = i.body.length;
    e += o, n++;
    const a = { body: i.body, method: "POST", referrerPolicy: "origin", headers: r.headers, keepalive: e <= 6e4 && n < 15, ...r.fetchOptions };
    if (!t) return ji("fetch"), Ht("No fetch implementation available");
    try {
      return t(r.url, a).then((u) => (e -= o, n--, { statusCode: u.status, headers: { "x-sentry-rate-limits": u.headers.get("X-Sentry-Rate-Limits"), "retry-after": u.headers.get("Retry-After") } }));
    } catch (u) {
      return ji("fetch"), e -= o, n--, Ht(u);
    }
  });
}
function fr(r, t, e, n) {
  const i = { filename: r, function: t === "<anonymous>" ? Ye : t, in_app: !0 };
  return e !== void 0 && (i.lineno = e), n !== void 0 && (i.colno = n), i;
}
const Sc = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, Ec = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, kc = /\((\S*)(?::(\d+))(?::(\d+))\)/, Cc = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, Tc = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, Mc = function(...r) {
  const t = r.sort((e, n) => e[0] - n[0]).map((e) => e[1]);
  return (e, n = 0, i = 0) => {
    const o = [], a = e.split(`
`);
    for (let u = n; u < a.length; u++) {
      const c = a[u];
      if (c.length > 1024) continue;
      const p = Zn.test(c) ? c.replace(Zn, "$1") : c;
      if (!p.match(/\S*Error: /)) {
        for (const m of t) {
          const g = m(p);
          if (g) {
            o.push(g);
            break;
          }
        }
        if (o.length >= 50 + i) break;
      }
    }
    return function(u) {
      if (!u.length) return [];
      const c = Array.from(u);
      return /sentryWrapped/.test(Tt(c).function || "") && c.pop(), c.reverse(), ei.test(Tt(c).function || "") && (c.pop(), ei.test(Tt(c).function || "") && c.pop()), c.slice(0, 50).map((p) => ({ ...p, filename: p.filename || Tt(c).filename, function: p.function || Ye }));
    }(o.slice(i));
  };
}([30, (r) => {
  const t = Sc.exec(r);
  if (t) {
    const [, n, i, o] = t;
    return fr(n, Ye, +i, +o);
  }
  const e = Ec.exec(r);
  if (e) {
    if (e[2] && e[2].indexOf("eval") === 0) {
      const o = kc.exec(e[2]);
      o && (e[2] = o[1], e[3] = o[2], e[4] = o[3]);
    }
    const [n, i] = Di(e[1] || Ye, e[2]);
    return fr(i, n, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0);
  }
}], [50, (r) => {
  const t = Cc.exec(r);
  if (t) {
    if (t[3] && t[3].indexOf(" > eval") > -1) {
      const i = Tc.exec(t[3]);
      i && (t[1] = t[1] || "eval", t[3] = i[1], t[4] = i[2], t[5] = "");
    }
    let e = t[3], n = t[1] || Ye;
    return [n, e] = Di(n, e), fr(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0);
  }
}]), Di = (r, t) => {
  const e = r.indexOf("safari-extension") !== -1, n = r.indexOf("safari-web-extension") !== -1;
  return e || n ? [r.indexOf("@") !== -1 ? r.split("@")[0] : Ye, e ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [r, t];
}, Ni = 1024, Ac = (r = {}) => {
  const t = { console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0, ...r };
  return { name: "Breadcrumbs", setup(e) {
    var n;
    t.console && function(i) {
      const o = "console";
      We(o, i), He(o, ja);
    }(/* @__PURE__ */ function(i) {
      return function(o) {
        if (te() !== i) return;
        const a = { category: "console", data: { arguments: o.args, logger: "console" }, level: $a(o.level), message: Yn(o.args, " ") };
        if (o.level === "assert") {
          if (o.args[0] !== !1) return;
          a.message = `Assertion failed: ${Yn(o.args.slice(1), " ") || "console.assert"}`, a.data.arguments = o.args.slice(1);
        }
        Be(a, { input: o.args, level: o.level });
      };
    }(e)), t.dom && (n = /* @__PURE__ */ function(i, o) {
      return function(a) {
        if (te() !== i) return;
        let u, c, p = typeof o == "object" ? o.serializeAttribute : void 0, m = typeof o == "object" && typeof o.maxStringLength == "number" ? o.maxStringLength : void 0;
        m && m > Ni && (dn && L.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${m} was configured. Sentry will use 1024 instead.`), m = Ni), typeof p == "string" && (p = [p]);
        try {
          const _ = a.event, w = function(y) {
            return !!y && !!y.target;
          }(_) ? _.target : _;
          u = Os(w, { keyAttrs: p, maxStringLength: m }), c = function(y) {
            if (!nn.HTMLElement) return null;
            let E = y;
            for (let C = 0; C < 5; C++) {
              if (!E) return null;
              if (E instanceof HTMLElement) {
                if (E.dataset.sentryComponent) return E.dataset.sentryComponent;
                if (E.dataset.sentryElement) return E.dataset.sentryElement;
              }
              E = E.parentNode;
            }
            return null;
          }(w);
        } catch {
          u = "<unknown>";
        }
        if (u.length === 0) return;
        const g = { category: `ui.${a.name}`, message: u };
        c && (g.data = { "ui.component_name": c }), Be(g, { event: a.event, name: a.name, global: a.global });
      };
    }(e, t.dom), We("dom", n), He("dom", yc)), t.xhr && function(i) {
      We("xhr", i), He("xhr", bc);
    }(/* @__PURE__ */ function(i) {
      return function(o) {
        if (te() !== i) return;
        const { startTimestamp: a, endTimestamp: u } = o, c = o.xhr[mt];
        if (!a || !u || !c) return;
        const { method: p, url: m, status_code: g, body: _ } = c, w = { method: p, url: m, status_code: g }, y = { xhr: o.xhr, input: _, startTimestamp: a, endTimestamp: u };
        Be({ category: "xhr", data: w, type: "http", level: zn(g) }, y);
      };
    }(e)), t.fetch && Na(/* @__PURE__ */ function(i) {
      return function(o) {
        if (te() !== i) return;
        const { startTimestamp: a, endTimestamp: u } = o;
        if (u && (!o.fetchData.url.match(/sentry_key/) || o.fetchData.method !== "POST")) if (o.error)
          Be({ category: "fetch", data: o.fetchData, level: "error", type: "http" }, { data: o.error, input: o.args, startTimestamp: a, endTimestamp: u });
        else {
          const c = o.response, p = { ...o.fetchData, status_code: c && c.status }, m = { input: o.args, response: c, startTimestamp: a, endTimestamp: u };
          Be({ category: "fetch", data: p, type: "http", level: zn(p.status_code) }, m);
        }
      };
    }(e)), t.history && function(i) {
      const o = "history";
      We(o, i), He(o, _c);
    }(/* @__PURE__ */ function(i) {
      return function(o) {
        if (te() !== i) return;
        let a = o.from, u = o.to;
        const c = ur(Q.location.href);
        let p = a ? ur(a) : void 0;
        const m = ur(u);
        p && p.path || (p = c), c.protocol === m.protocol && c.host === m.host && (u = m.relative), c.protocol === p.protocol && c.host === p.host && (a = p.relative), Be({ category: "navigation", data: { from: a, to: u } });
      };
    }(e)), t.sentry && e.on("beforeSendEvent", /* @__PURE__ */ function(i) {
      return function(o) {
        te() === i && Be({ category: "sentry." + (o.type === "transaction" ? "transaction" : "event"), event_id: o.event_id, level: o.level, message: je(o) }, { event: o });
      };
    }(e));
  } };
}, Oc = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], Pc = (r = {}) => {
  const t = { XMLHttpRequest: !0, eventTarget: !0, requestAnimationFrame: !0, setInterval: !0, setTimeout: !0, ...r };
  return { name: "BrowserApiErrors", setupOnce() {
    t.setTimeout && ne(Q, "setTimeout", Ri), t.setInterval && ne(Q, "setInterval", Ri), t.requestAnimationFrame && ne(Q, "requestAnimationFrame", Lc), t.XMLHttpRequest && "XMLHttpRequest" in Q && ne(XMLHttpRequest.prototype, "send", Ic);
    const e = t.eventTarget;
    e && (Array.isArray(e) ? e : Oc).forEach(jc);
  } };
};
function Ri(r) {
  return function(...t) {
    const e = t[0];
    return t[0] = ct(e, { mechanism: { data: { function: Fe(r) }, handled: !1, type: "instrument" } }), r.apply(this, t);
  };
}
function Lc(r) {
  return function(t) {
    return r.apply(this, [ct(t, { mechanism: { data: { function: "requestAnimationFrame", handler: Fe(r) }, handled: !1, type: "instrument" } })]);
  };
}
function Ic(r) {
  return function(...t) {
    const e = this;
    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((n) => {
      n in e && typeof e[n] == "function" && ne(e, n, function(i) {
        const o = { mechanism: { data: { function: n, handler: Fe(i) }, handled: !1, type: "instrument" } }, a = on(i);
        return a && (o.mechanism.data.handler = Fe(a)), ct(i, o);
      });
    }), r.apply(this, t);
  };
}
function jc(r) {
  const t = Q, e = t[r] && t[r].prototype;
  e && e.hasOwnProperty && e.hasOwnProperty("addEventListener") && (ne(e, "addEventListener", function(n) {
    return function(i, o, a) {
      try {
        typeof o.handleEvent == "function" && (o.handleEvent = ct(o.handleEvent, { mechanism: { data: { function: "handleEvent", handler: Fe(o), target: r }, handled: !1, type: "instrument" } }));
      } catch {
      }
      return n.apply(this, [i, ct(o, { mechanism: { data: { function: "addEventListener", handler: Fe(o), target: r }, handled: !1, type: "instrument" } }), a]);
    };
  }), ne(e, "removeEventListener", function(n) {
    return function(i, o, a) {
      const u = o;
      try {
        const c = u && u.__sentry_wrapped__;
        c && n.call(this, i, c, a);
      } catch {
      }
      return n.call(this, i, u, a);
    };
  }));
}
const Dc = (r = {}) => {
  const t = { onerror: !0, onunhandledrejection: !0, ...r };
  return { name: "GlobalHandlers", setupOnce() {
    Error.stackTraceLimit = 50;
  }, setup(e) {
    t.onerror && (function(n) {
      (function(i) {
        const o = "error";
        We(o, i), He(o, Ra);
      })((i) => {
        const { stackParser: o, attachStacktrace: a } = Fi();
        if (te() !== n || Pi()) return;
        const { msg: u, url: c, line: p, column: m, error: g } = i, _ = function(w, y, E, C) {
          const O = w.exception = w.exception || {}, j = O.values = O.values || [], x = j[0] = j[0] || {}, H = x.stacktrace = x.stacktrace || {}, Y = H.frames = H.frames || [], ae = isNaN(parseInt(C, 10)) ? void 0 : C, ie = isNaN(parseInt(E, 10)) ? void 0 : E, ge = Ae(y) && y.length > 0 ? y : function() {
            try {
              return nn.document.location.href;
            } catch {
              return "";
            }
          }();
          return Y.length === 0 && Y.push({ colno: ae, filename: ge, function: Ye, in_app: !0, lineno: ie }), w;
        }(Fr(o, g || u, void 0, a, !1), c, p, m);
        _.level = "error", vi(_, { originalException: g, mechanism: { handled: !1, type: "onerror" } });
      });
    }(e), xi("onerror")), t.onunhandledrejection && (function(n) {
      (function(i) {
        const o = "unhandledrejection";
        We(o, i), He(o, xa);
      })((i) => {
        const { stackParser: o, attachStacktrace: a } = Fi();
        if (te() !== n || Pi()) return;
        const u = function(p) {
          if (Cr(p)) return p;
          try {
            if ("reason" in p) return p.reason;
            if ("detail" in p && "reason" in p.detail) return p.detail.reason;
          } catch {
          }
          return p;
        }(i), c = Cr(u) ? { exception: { values: [{ type: "UnhandledRejection", value: `Non-Error promise rejection captured with value: ${String(u)}` }] } } : Fr(o, u, void 0, a, !0);
        c.level = "error", vi(c, { originalException: u, mechanism: { handled: !1, type: "onunhandledrejection" } });
      });
    }(e), xi("onunhandledrejection"));
  } };
};
function xi(r) {
  dn && L.log(`Global Handler attached: ${r}`);
}
function Fi() {
  const r = te();
  return r && r.getOptions() || { stackParser: () => [], attachStacktrace: !1 };
}
const Nc = () => ({ name: "HttpContext", preprocessEvent(r) {
  if (!Q.navigator && !Q.location && !Q.document) return;
  const t = r.request && r.request.url || Q.location && Q.location.href, { referrer: e } = Q.document || {}, { userAgent: n } = Q.navigator || {}, i = { ...r.request && r.request.headers, ...e && { Referer: e }, ...n && { "User-Agent": n } }, o = { ...r.request, ...t && { url: t }, headers: i };
  r.request = o;
} }), Rc = (r = {}) => {
  const t = r.limit || 5, e = r.key || "cause";
  return { name: "LinkedErrors", preprocessEvent(n, i, o) {
    const a = o.getOptions();
    Oa(pn, a.stackParser, a.maxValueLength, e, t, n, i);
  } };
};
var $r = "new", qi = "loading", $i = "loaded", Qt = "joining-meeting", Ne = "joined-meeting", Ie = "left-meeting", ke = "error", xc = "blocked", Fc = "off", qc = "sendable", $c = "loading", Vc = "interrupted", qs = "playable", qt = "unknown", $s = "full", Uc = "lobby", Bc = "none", Vs = "base", Jc = "*", Gc = "ejected", Yc = "nbf-room", Wc = "nbf-token", Hc = "exp-room", zc = "exp-token", Vr = "no-room", Qc = "meeting-full", Us = "end-of-life", Kc = "not-allowed", Bs = "connection-error", Xc = "cam-in-use", Zc = "mic-in-use", el = "cam-mic-in-use", tl = "permissions", rl = "undefined-mediadevices", nl = "not-found", il = "constraints", sl = "unknown", Js = "iframe-ready-for-launch-config", Gs = "iframe-launch-config", Ys = "theme-updated", Ws = "loading", Hs = "load-attempt-failed", Ur = "loaded", zs = "started-camera", Qs = "camera-error", Ks = "joining-meeting", Xs = "joined-meeting", Zs = "left-meeting", eo = "participant-joined", to = "participant-updated", ro = "participant-left", no = "participant-counts-updated", io = "access-state-updated", so = "meeting-session-summary-updated", oo = "meeting-session-state-updated", ol = "meeting-session-data-error", ao = "waiting-participant-added", co = "waiting-participant-updated", lo = "waiting-participant-removed", uo = "track-started", po = "track-stopped", ho = "transcription-started", fo = "transcription-stopped", mo = "transcription-error", Br = "recording-started", Jr = "recording-stopped", go = "recording-stats", vo = "recording-error", yo = "recording-upload-completed", _o = "recording-data", bo = "app-message", wo = "transcription-message", So = "remote-media-player-started", Eo = "remote-media-player-updated", ko = "remote-media-player-stopped", Co = "local-screen-share-started", To = "local-screen-share-stopped", Mo = "local-screen-share-canceled", Ao = "active-speaker-change", Oo = "active-speaker-mode-change", Po = "network-quality-change", Lo = "network-connection", Io = "cpu-load-change", jo = "face-counts-updated", gt = "fullscreen", vt = "exited-fullscreen", Do = "live-streaming-started", No = "live-streaming-updated", Ro = "live-streaming-stopped", xo = "live-streaming-error", Fo = "lang-updated", qo = "receive-settings-updated", Gr = "input-settings-updated", Yr = "nonfatal-error", Wr = "error", mr = 4096, Vi = 102400, gr = "iframe-call-message", Ui = "local-screen-start", Bi = "daily-method-update-live-streaming-endpoints", It = "transmit-log", Oe = "daily-custom-track", $t = { NONE: "none", BGBLUR: "background-blur", BGIMAGE: "background-image", FACE_DETECTION: "face-detection" }, $o = { NONE: "none", NOISE_CANCELLATION: "noise-cancellation" }, Hr = { PLAY: "play", PAUSE: "pause" }, vr = ["jpg", "png", "jpeg"], al = "add-endpoints", cl = "remove-endpoints", Ji = "sip-call-transfer";
function oe() {
  return !R() && typeof window < "u" && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : "";
}
function R() {
  return typeof navigator < "u" && navigator.product && navigator.product === "ReactNative";
}
function Vo() {
  return navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
}
function ll() {
  return !!(navigator && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) && (function(r, t) {
    if (!r || !t) return !0;
    switch (r) {
      case "Chrome":
        return t.major >= 75;
      case "Safari":
        return RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection") && !(t.major === 13 && t.minor === 0 && t.point === 0);
      case "Firefox":
        return t.major >= 67;
    }
    return !0;
  }(Ze(), Kt()) || R());
}
function Gi() {
  if (R() || !document) return !1;
  var r = document.createElement("iframe");
  return !!r.requestFullscreen || !!r.webkitRequestFullscreen;
}
var ul = function() {
  try {
    var r = document.createElement("canvas"), t = r.getContext("webgl2") != null;
    return r.remove(), t;
  } catch {
    return !1;
  }
}();
function Uo() {
  var r = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
  return !R() && !!ul && (r ? function() {
    return Wi() ? !1 : ["Chrome", "Firefox"].includes(Ze());
  }() : function() {
    if (Wi()) return !1;
    var t = Ze();
    if (t === "Safari") {
      var e = mn();
      if (e.major < 15 || e.major === 15 && e.minor < 4) return !1;
    }
    return t === "Chrome" ? fn().major >= 77 : t === "Firefox" ? gn().major >= 97 : ["Chrome", "Firefox", "Safari"].includes(t);
  }());
}
function Bo() {
  if (R() || Jo() || typeof AudioWorkletNode > "u") return !1;
  switch (Ze()) {
    case "Chrome":
    case "Firefox":
      return !0;
    case "Safari":
      var r = Kt();
      return r.major > 17 || r.major === 17 && r.minor >= 4;
  }
  return !1;
}
function Yi() {
  return Vo() && !function() {
    var r, t = Ze();
    if (!oe()) return !0;
    switch (t) {
      case "Chrome":
        return (r = fn()).major && r.major > 0 && r.major < 75;
      case "Firefox":
        return (r = gn()).major < 91;
      case "Safari":
        return (r = mn()).major < 13 || r.major === 13 && r.minor < 1;
      default:
        return !0;
    }
  }();
}
function Jo() {
  return oe().match(/Linux; Android/);
}
function Wi() {
  var r, t, e = oe(), n = e.match(/Mac/) && (!R() && typeof window < "u" && (r = window) !== null && r !== void 0 && (t = r.navigator) !== null && t !== void 0 && t.maxTouchPoints ? window.navigator.maxTouchPoints : 0) >= 5;
  return !!(e.match(/Mobi/) || e.match(/Android/) || n) || !!oe().match(/DailyAnd\//) || void 0;
}
function Ze() {
  if (typeof window < "u") {
    var r = oe();
    return Go() ? "Safari" : r.indexOf("Edge") > -1 ? "Edge" : r.match(/Chrome\//) ? "Chrome" : r.indexOf("Safari") > -1 || Yo() ? "Safari" : r.indexOf("Firefox") > -1 ? "Firefox" : r.indexOf("MSIE") > -1 || r.indexOf(".NET") > -1 ? "IE" : "Unknown Browser";
  }
}
function Kt() {
  switch (Ze()) {
    case "Chrome":
      return fn();
    case "Safari":
      return mn();
    case "Firefox":
      return gn();
    case "Edge":
      return function() {
        var r = 0, t = 0;
        if (typeof window < "u") {
          var e = oe().match(/Edge\/(\d+).(\d+)/);
          if (e) try {
            r = parseInt(e[1]), t = parseInt(e[2]);
          } catch {
          }
        }
        return { major: r, minor: t };
      }();
  }
}
function fn() {
  var r = 0, t = 0, e = 0, n = 0, i = !1;
  if (typeof window < "u") {
    var o = oe(), a = o.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);
    if (a) try {
      r = parseInt(a[1]), t = parseInt(a[2]), e = parseInt(a[3]), n = parseInt(a[4]), i = o.indexOf("OPR/") > -1;
    } catch {
    }
  }
  return { major: r, minor: t, build: e, patch: n, opera: i };
}
function Go() {
  return !!oe().match(/iPad|iPhone|iPod/i) && Vo();
}
function Yo() {
  return oe().indexOf("AppleWebKit/605.1.15") > -1;
}
function mn() {
  var r = 0, t = 0, e = 0;
  if (typeof window < "u") {
    var n = oe().match(/Version\/(\d+).(\d+)(.(\d+))?/);
    if (n) try {
      r = parseInt(n[1]), t = parseInt(n[2]), e = parseInt(n[4]);
    } catch {
    }
    else (Go() || Yo()) && (r = 14, t = 0, e = 3);
  }
  return { major: r, minor: t, point: e };
}
function gn() {
  var r = 0, t = 0;
  if (typeof window < "u") {
    var e = oe().match(/Firefox\/(\d+).(\d+)/);
    if (e) try {
      r = parseInt(e[1]), t = parseInt(e[2]);
    } catch {
    }
  }
  return { major: r, minor: t };
}
var Wo = function() {
  function r() {
    fe(this, r);
  }
  return me(r, [{ key: "addListenerForMessagesFromCallMachine", value: function(t, e, n) {
    pt();
  } }, { key: "addListenerForMessagesFromDailyJs", value: function(t, e, n) {
    pt();
  } }, { key: "sendMessageToCallMachine", value: function(t, e, n, i) {
    pt();
  } }, { key: "sendMessageToDailyJs", value: function(t, e) {
    pt();
  } }, { key: "removeListener", value: function(t) {
    pt();
  } }]), r;
}();
function Hi(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function yr(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hi(Object(e), !0).forEach(function(n) {
      Te(r, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : Hi(Object(e)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return r;
}
function dl(r) {
  var t = function() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }();
  return function() {
    var e, n = he(r);
    if (t) {
      var i = he(this).constructor;
      e = Reflect.construct(n, arguments, i);
    } else e = n.apply(this, arguments);
    return tr(this, e);
  };
}
var pl = function() {
  er(t, Wo);
  var r = dl(t);
  function t() {
    var e;
    return fe(this, t), (e = r.call(this))._wrappedListeners = {}, e._messageCallbacks = {}, e;
  }
  return me(t, [{ key: "addListenerForMessagesFromCallMachine", value: function(e, n, i) {
    var o = this, a = function(u) {
      if (u.data && u.data.what === "iframe-call-message" && (!u.data.callClientId || u.data.callClientId === n) && (!u.data.from || u.data.from !== "module")) {
        var c = yr({}, u.data);
        if (delete c.from, c.callbackStamp && o._messageCallbacks[c.callbackStamp]) {
          var p = c.callbackStamp;
          o._messageCallbacks[p].call(i, c), delete o._messageCallbacks[p];
        }
        delete c.what, delete c.callbackStamp, e.call(i, c);
      }
    };
    this._wrappedListeners[e] = a, window.addEventListener("message", a);
  } }, { key: "addListenerForMessagesFromDailyJs", value: function(e, n, i) {
    var o = function(a) {
      var u;
      if (!(!a.data || a.data.what !== gr || !a.data.action || a.data.from && a.data.from !== "module" || a.data.callClientId && n && a.data.callClientId !== n || a != null && (u = a.data) !== null && u !== void 0 && u.callFrameId)) {
        var c = a.data;
        e.call(i, c);
      }
    };
    this._wrappedListeners[e] = o, window.addEventListener("message", o);
  } }, { key: "sendMessageToCallMachine", value: function(e, n, i, o) {
    if (!i) throw new Error("undefined callClientId. Are you trying to use a DailyCall instance previously destroyed?");
    var a = yr({}, e);
    if (a.what = gr, a.from = "module", a.callClientId = i, n) {
      var u = rr();
      this._messageCallbacks[u] = n, a.callbackStamp = u;
    }
    var c = o ? o.contentWindow : window, p = this._callMachineTargetOrigin(o);
    p && c.postMessage(a, p);
  } }, { key: "sendMessageToDailyJs", value: function(e, n) {
    e.what = gr, e.callClientId = n, e.from = "embedded", window.postMessage(e, this._targetOriginFromWindowLocation());
  } }, { key: "removeListener", value: function(e) {
    var n = this._wrappedListeners[e];
    n && (window.removeEventListener("message", n), delete this._wrappedListeners[e]);
  } }, { key: "forwardPackagedMessageToCallMachine", value: function(e, n, i) {
    var o = yr({}, e);
    o.callClientId = i;
    var a = n ? n.contentWindow : window, u = this._callMachineTargetOrigin(n);
    u && a.postMessage(o, u);
  } }, { key: "addListenerForPackagedMessagesFromCallMachine", value: function(e, n) {
    var i = function(o) {
      if (o.data && o.data.what === "iframe-call-message" && (!o.data.callClientId || o.data.callClientId === n) && (!o.data.from || o.data.from !== "module")) {
        var a = o.data;
        e(a);
      }
    };
    return this._wrappedListeners[e] = i, window.addEventListener("message", i), e;
  } }, { key: "removeListenerForPackagedMessagesFromCallMachine", value: function(e) {
    var n = this._wrappedListeners[e];
    n && (window.removeEventListener("message", n), delete this._wrappedListeners[e]);
  } }, { key: "_callMachineTargetOrigin", value: function(e) {
    return e ? e.src ? new URL(e.src).origin : void 0 : this._targetOriginFromWindowLocation();
  } }, { key: "_targetOriginFromWindowLocation", value: function() {
    return window.location.protocol === "file:" ? "*" : window.location.origin;
  } }]), t;
}();
function zi(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function hl(r) {
  var t = function() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }();
  return function() {
    var e, n = he(r);
    if (t) {
      var i = he(this).constructor;
      e = Reflect.construct(n, arguments, i);
    } else e = n.apply(this, arguments);
    return tr(this, e);
  };
}
var fl = function() {
  er(t, Wo);
  var r = hl(t);
  function t() {
    var e;
    return fe(this, t), e = r.call(this), global.callMachineToDailyJsEmitter = global.callMachineToDailyJsEmitter || new Me.EventEmitter(), global.dailyJsToCallMachineEmitter = global.dailyJsToCallMachineEmitter || new Me.EventEmitter(), e._wrappedListeners = {}, e._messageCallbacks = {}, e;
  }
  return me(t, [{ key: "addListenerForMessagesFromCallMachine", value: function(e, n, i) {
    this._addListener(e, global.callMachineToDailyJsEmitter, n, i, "received call machine message");
  } }, { key: "addListenerForMessagesFromDailyJs", value: function(e, n, i) {
    this._addListener(e, global.dailyJsToCallMachineEmitter, n, i, "received daily-js message");
  } }, { key: "sendMessageToCallMachine", value: function(e, n, i) {
    this._sendMessage(e, global.dailyJsToCallMachineEmitter, i, n, "sending message to call machine");
  } }, { key: "sendMessageToDailyJs", value: function(e, n) {
    this._sendMessage(e, global.callMachineToDailyJsEmitter, n, null, "sending message to daily-js");
  } }, { key: "removeListener", value: function(e) {
    var n = this._wrappedListeners[e];
    n && (global.callMachineToDailyJsEmitter.removeListener("message", n), global.dailyJsToCallMachineEmitter.removeListener("message", n), delete this._wrappedListeners[e]);
  } }, { key: "_addListener", value: function(e, n, i, o, a) {
    var u = this, c = function(p) {
      if (p.callClientId === i) {
        if (p.callbackStamp && u._messageCallbacks[p.callbackStamp]) {
          var m = p.callbackStamp;
          u._messageCallbacks[m].call(o, p), delete u._messageCallbacks[m];
        }
        e.call(o, p);
      }
    };
    this._wrappedListeners[e] = c, n.addListener("message", c);
  } }, { key: "_sendMessage", value: function(e, n, i, o, a) {
    var u = function(p) {
      for (var m = 1; m < arguments.length; m++) {
        var g = arguments[m] != null ? arguments[m] : {};
        m % 2 ? zi(Object(g), !0).forEach(function(_) {
          Te(p, _, g[_]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(g)) : zi(Object(g)).forEach(function(_) {
          Object.defineProperty(p, _, Object.getOwnPropertyDescriptor(g, _));
        });
      }
      return p;
    }({}, e);
    if (u.callClientId = i, o) {
      var c = rr();
      this._messageCallbacks[c] = o, u.callbackStamp = c;
    }
    n.emit("message", u);
  } }]), t;
}(), zr = "replace", Qr = "shallow-merge", Qi = [zr, Qr], ml = function() {
  function r() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.data, n = t.mergeStrategy, i = n === void 0 ? zr : n;
    fe(this, r), r._validateMergeStrategy(i), r._validateData(e, i), this.mergeStrategy = i, this.data = e;
  }
  return me(r, [{ key: "isNoOp", value: function() {
    return r.isNoOpUpdate(this.data, this.mergeStrategy);
  } }], [{ key: "isNoOpUpdate", value: function(t, e) {
    return Object.keys(t).length === 0 && e === Qr;
  } }, { key: "_validateMergeStrategy", value: function(t) {
    if (!Qi.includes(t)) throw Error("Unrecognized mergeStrategy provided. Options are: [".concat(Qi, "]"));
  } }, { key: "_validateData", value: function(t, e) {
    if (!function(u) {
      if (u == null || $(u) !== "object") return !1;
      var c = Object.getPrototypeOf(u);
      return c == null || c === Object.prototype;
    }(t)) throw Error("Meeting session data must be a plain (map-like) object");
    var n;
    try {
      if (n = JSON.stringify(t), e === zr) {
        var i = JSON.parse(n);
        ee(i, t) || console.warn("The meeting session data provided will be modified when serialized.", i, t);
      } else if (e === Qr) {
        for (var o in t) if (Object.hasOwnProperty.call(t, o) && t[o] !== void 0) {
          var a = JSON.parse(JSON.stringify(t[o]));
          ee(t[o], a) || console.warn("At least one key in the meeting session data provided will be modified when serialized.", a, t[o]);
        }
      }
    } catch (u) {
      throw Error("Meeting session data must be serializable to JSON: ".concat(u));
    }
    if (n.length > Vi) throw Error("Meeting session data is too large (".concat(n.length, " characters). Maximum size suppported is ").concat(Vi, "."));
  } }]), r;
}();
function Kr(r, t, e) {
  return Kr = function() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }() ? Reflect.construct.bind() : function(n, i, o) {
    var a = [null];
    a.push.apply(a, i);
    var u = new (Function.bind.apply(n, a))();
    return o && _t(u, o.prototype), u;
  }, Kr.apply(null, arguments);
}
function Xr(r) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Xr = function(e) {
    if (e === null || (n = e, Function.toString.call(n).indexOf("[native code]") === -1)) return e;
    var n;
    if (typeof e != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(e)) return t.get(e);
      t.set(e, i);
    }
    function i() {
      return Kr(e, arguments, he(this).constructor);
    }
    return i.prototype = Object.create(e.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), _t(i, e);
  }, Xr(r);
}
function gl(r) {
  var t = function() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }();
  return function() {
    var e, n = he(r);
    if (t) {
      var i = he(this).constructor;
      e = Reflect.construct(n, arguments, i);
    } else e = n.apply(this, arguments);
    return tr(this, e);
  };
}
function Ki(r) {
  var t, e = (t = window._daily) === null || t === void 0 ? void 0 : t.pendings;
  if (e) {
    var n = e.indexOf(r);
    n !== -1 && e.splice(n, 1);
  }
}
var vl = function() {
  function r(t) {
    fe(this, r), this._currentLoad = null, this._callClientId = t;
  }
  return me(r, [{ key: "load", value: function() {
    var t, e = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0;
    if (this.loaded) return window._daily.instances[this._callClientId].callMachine.reset(), void i(!0);
    t = this._callClientId, window._daily.pendings.push(t), this._currentLoad && this._currentLoad.cancel(), this._currentLoad = new yl(n, function() {
      i(!1);
    }, function(a, u) {
      u || Ki(e._callClientId), o(a, u);
    }), this._currentLoad.start();
  } }, { key: "cancel", value: function() {
    this._currentLoad && this._currentLoad.cancel(), Ki(this._callClientId);
  } }, { key: "loaded", get: function() {
    return this._currentLoad && this._currentLoad.succeeded;
  } }]), r;
}(), yl = function() {
  function r() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0;
    fe(this, r), this._attemptsRemaining = 3, this._currentAttempt = null, this._dailyConfig = t, this._successCallback = e, this._failureCallback = n;
  }
  return me(r, [{ key: "start", value: function() {
    var t = this;
    this._currentAttempt || (this._currentAttempt = new Xi(this._dailyConfig, this._successCallback, function e(n) {
      t._currentAttempt.cancelled || (t._attemptsRemaining--, t._failureCallback(n, t._attemptsRemaining > 0), t._attemptsRemaining <= 0 || setTimeout(function() {
        t._currentAttempt.cancelled || (t._currentAttempt = new Xi(t._dailyConfig, t._successCallback, e), t._currentAttempt.start());
      }, 3e3));
    }), this._currentAttempt.start());
  } }, { key: "cancel", value: function() {
    this._currentAttempt && this._currentAttempt.cancel();
  } }, { key: "cancelled", get: function() {
    return this._currentAttempt && this._currentAttempt.cancelled;
  } }, { key: "succeeded", get: function() {
    return this._currentAttempt && this._currentAttempt.succeeded;
  } }]), r;
}(), _r = function() {
  er(t, Xr(Error));
  var r = gl(t);
  function t() {
    return fe(this, t), r.apply(this, arguments);
  }
  return me(t);
}(), Xt = 2e4, Xi = function() {
  function r(e, n, i) {
    fe(this, r), this._loadAttemptImpl = R() || !e.avoidEval ? new _l(e, n, i) : new bl(e, n, i);
  }
  var t;
  return me(r, [{ key: "start", value: (t = P(function* () {
    return this._loadAttemptImpl.start();
  }), function() {
    return t.apply(this, arguments);
  }) }, { key: "cancel", value: function() {
    this._loadAttemptImpl.cancel();
  } }, { key: "cancelled", get: function() {
    return this._loadAttemptImpl.cancelled;
  } }, { key: "succeeded", get: function() {
    return this._loadAttemptImpl.succeeded;
  } }]), r;
}(), _l = function() {
  function r(o, a, u) {
    fe(this, r), this.cancelled = !1, this.succeeded = !1, this._networkTimedOut = !1, this._networkTimeout = null, this._iosCache = typeof iOSCallObjectBundleCache < "u" && iOSCallObjectBundleCache, this._refetchHeaders = null, this._dailyConfig = o, this._successCallback = a, this._failureCallback = u;
  }
  var t, e, n, i;
  return me(r, [{ key: "start", value: (i = P(function* () {
    var o = Bt(this._dailyConfig);
    !(yield this._tryLoadFromIOSCache(o)) && this._loadFromNetwork(o);
  }), function() {
    return i.apply(this, arguments);
  }) }, { key: "cancel", value: function() {
    clearTimeout(this._networkTimeout), this.cancelled = !0;
  } }, { key: "_tryLoadFromIOSCache", value: (n = P(function* (o) {
    if (!this._iosCache) return !1;
    try {
      var a = yield this._iosCache.get(o);
      return !!this.cancelled || !!a && (a.code ? (Function('"use strict";' + a.code)(), this.succeeded = !0, this._successCallback(), !0) : (this._refetchHeaders = a.refetchHeaders, !1));
    } catch {
      return !1;
    }
  }), function(o) {
    return n.apply(this, arguments);
  }) }, { key: "_loadFromNetwork", value: (e = P(function* (o) {
    var a = this;
    this._networkTimeout = setTimeout(function() {
      a._networkTimedOut = !0, a._failureCallback({ msg: "Timed out (>".concat(Xt, " ms) when loading call object bundle ").concat(o), type: "timeout" });
    }, Xt);
    try {
      var u = this._refetchHeaders ? { headers: this._refetchHeaders } : {}, c = yield fetch(o, u);
      if (clearTimeout(this._networkTimeout), this.cancelled || this._networkTimedOut) throw new _r();
      var p = yield this._getBundleCodeFromResponse(o, c);
      if (this.cancelled) throw new _r();
      Function('"use strict";' + p)(), this._iosCache && this._iosCache.set(o, p, c.headers), this.succeeded = !0, this._successCallback();
    } catch (m) {
      if (clearTimeout(this._networkTimeout), m instanceof _r || this.cancelled || this._networkTimedOut) return;
      this._failureCallback({ msg: "Failed to load call object bundle ".concat(o, ": ").concat(m), type: m.message });
    }
  }), function(o) {
    return e.apply(this, arguments);
  }) }, { key: "_getBundleCodeFromResponse", value: (t = P(function* (o, a) {
    if (a.ok) return yield a.text();
    if (this._iosCache && a.status === 304) return (yield this._iosCache.renew(o, a.headers)).code;
    throw new Error("Received ".concat(a.status, " response"));
  }), function(o, a) {
    return t.apply(this, arguments);
  }) }]), r;
}(), bl = function() {
  function r(t, e, n) {
    fe(this, r), this.cancelled = !1, this.succeeded = !1, this._dailyConfig = t, this._successCallback = e, this._failureCallback = n, this._attemptId = rr(), this._networkTimeout = null, this._scriptElement = null;
  }
  return me(r, [{ key: "start", value: function() {
    window._dailyCallMachineLoadWaitlist || (window._dailyCallMachineLoadWaitlist = /* @__PURE__ */ new Set());
    var t = Bt(this._dailyConfig);
    (typeof document > "u" ? "undefined" : $(document)) === "object" ? this._startLoading(t) : this._failureCallback({ msg: "Call object bundle must be loaded in a DOM/web context", type: "missing context" });
  } }, { key: "cancel", value: function() {
    this._stopLoading(), this.cancelled = !0;
  } }, { key: "_startLoading", value: function(t) {
    var e = this;
    this._signUpForCallMachineLoadWaitlist(), this._networkTimeout = setTimeout(function() {
      e._stopLoading(), e._failureCallback({ msg: "Timed out (>".concat(Xt, " ms) when loading call object bundle ").concat(t), type: "timeout" });
    }, Xt);
    var n = document.getElementsByTagName("head")[0], i = document.createElement("script");
    this._scriptElement = i, i.onload = function() {
      e._stopLoading(), e.succeeded = !0, e._successCallback();
    }, i.onerror = function(o) {
      e._stopLoading(), e._failureCallback({ msg: "Failed to load call object bundle ".concat(o.target.src), type: o.message });
    }, i.src = t, n.appendChild(i);
  } }, { key: "_stopLoading", value: function() {
    this._withdrawFromCallMachineLoadWaitlist(), clearTimeout(this._networkTimeout), this._scriptElement && (this._scriptElement.onload = null, this._scriptElement.onerror = null);
  } }, { key: "_signUpForCallMachineLoadWaitlist", value: function() {
    window._dailyCallMachineLoadWaitlist.add(this._attemptId);
  } }, { key: "_withdrawFromCallMachineLoadWaitlist", value: function() {
    window._dailyCallMachineLoadWaitlist.delete(this._attemptId);
  } }]), r;
}(), jt = function(r, t, e) {
  return Sl(r.local, t, e) === !0;
}, wl = function(r, t, e) {
  return r.local.streams && r.local.streams[t] && r.local.streams[t].stream && r.local.streams[t].stream["get".concat(e === "video" ? "Video" : "Audio", "Tracks")]()[0];
}, tt = function(r, t, e, n) {
  var i = El(r, t, e, n);
  return i && i.pendingTrack;
}, Sl = function(r, t, e) {
  if (!r) return !1;
  var n = function(o) {
    switch (o) {
      case "avatar":
        return !0;
      case "staged":
        return o;
      default:
        return !!o;
    }
  }, i = r.public.subscribedTracks;
  return i && i[t] ? ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo"].indexOf(e) === -1 && i[t].custom ? [!0, "staged"].includes(i[t].custom) ? n(i[t].custom) : n(i[t].custom[e]) : n(i[t][e]) : !i || n(i.ALL);
}, El = function(r, t, e, n) {
  var i = Object.values(r.streams || {}).filter(function(o) {
    return o.participantId === t && o.type === e && o.pendingTrack && o.pendingTrack.kind === n;
  }).sort(function(o, a) {
    return new Date(a.starttime) - new Date(o.starttime);
  });
  return i && i[0];
}, kl = function(r, t) {
  var e = r.local.public.customTracks;
  if (e && e[t]) return e[t].track;
};
function Zi(r, t) {
  for (var e = t.getState(), n = 0, i = ["cam", "screen"]; n < i.length; n++) for (var o = i[n], a = 0, u = ["video", "audio"]; a < u.length; a++) {
    var c = u[a], p = o === "cam" ? c : "screen".concat(c.charAt(0).toUpperCase() + c.slice(1)), m = r.tracks[p];
    if (m) {
      var g = r.local ? wl(e, o, c) : tt(e, r.session_id, o, c);
      m.state === "playable" && (m.track = g), m.persistentTrack = g;
    }
  }
}
function es(r, t) {
  try {
    var e = t.getState();
    for (var n in r.tracks) if (!Cl(n)) {
      var i = r.tracks[n].kind;
      if (i) {
        var o = r.tracks[n];
        if (o) {
          var a = r.local ? kl(e, n) : tt(e, r.session_id, n, i);
          o.state === "playable" && (r.tracks[n].track = a), o.persistentTrack = a;
        }
      } else console.error("unknown type for custom track");
    }
  } catch (u) {
    console.error(u);
  }
}
function Cl(r) {
  return ["video", "audio", "screenVideo", "screenAudio"].includes(r);
}
function ts(r, t, e) {
  var n = e.getState();
  if (r.local) {
    if (r.audio) try {
      r.audioTrack = n.local.streams.cam.stream.getAudioTracks()[0], r.audioTrack || (r.audio = !1);
    } catch {
    }
    if (r.video) try {
      r.videoTrack = n.local.streams.cam.stream.getVideoTracks()[0], r.videoTrack || (r.video = !1);
    } catch {
    }
    if (r.screen) try {
      r.screenVideoTrack = n.local.streams.screen.stream.getVideoTracks()[0], r.screenAudioTrack = n.local.streams.screen.stream.getAudioTracks()[0], r.screenVideoTrack || r.screenAudioTrack || (r.screen = !1);
    } catch {
    }
  } else {
    var i = !0;
    try {
      var o = n.participants[r.session_id];
      o && o.public && o.public.rtcType && o.public.rtcType.impl === "peer-to-peer" && o.private && !["connected", "completed"].includes(o.private.peeringState) && (i = !1);
    } catch (m) {
      console.error(m);
    }
    if (!i) return r.audio = !1, r.audioTrack = !1, r.video = !1, r.videoTrack = !1, r.screen = !1, void (r.screenTrack = !1);
    try {
      if (n.streams, r.audio && jt(n, r.session_id, "cam-audio")) {
        var a = tt(n, r.session_id, "cam", "audio");
        a && (t && t.audioTrack && t.audioTrack.id === a.id ? r.audioTrack = a : a.muted || (r.audioTrack = a)), r.audioTrack || (r.audio = !1);
      }
      if (r.video && jt(n, r.session_id, "cam-video")) {
        var u = tt(n, r.session_id, "cam", "video");
        u && (t && t.videoTrack && t.videoTrack.id === u.id ? r.videoTrack = u : u.muted || (r.videoTrack = u)), r.videoTrack || (r.video = !1);
      }
      if (r.screen && jt(n, r.session_id, "screen-audio")) {
        var c = tt(n, r.session_id, "screen", "audio");
        c && (t && t.screenAudioTrack && t.screenAudioTrack.id === c.id ? r.screenAudioTrack = c : c.muted || (r.screenAudioTrack = c));
      }
      if (r.screen && jt(n, r.session_id, "screen-video")) {
        var p = tt(n, r.session_id, "screen", "video");
        p && (t && t.screenVideoTrack && t.screenVideoTrack.id === p.id ? r.screenVideoTrack = p : p.muted || (r.screenVideoTrack = p));
      }
      r.screenVideoTrack || r.screenAudioTrack || (r.screen = !1);
    } catch (m) {
      console.error("unexpected error matching up tracks", m);
    }
  }
}
function Tl(r, t) {
  var e = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!e) {
    if (Array.isArray(r) || (e = function(c, p) {
      if (c) {
        if (typeof c == "string") return rs(c, p);
        var m = Object.prototype.toString.call(c).slice(8, -1);
        if (m === "Object" && c.constructor && (m = c.constructor.name), m === "Map" || m === "Set") return Array.from(c);
        if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) return rs(c, p);
      }
    }(r)) || t) {
      e && (r = e);
      var n = 0, i = function() {
      };
      return { s: i, n: function() {
        return n >= r.length ? { done: !0 } : { done: !1, value: r[n++] };
      }, e: function(c) {
        throw c;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o, a = !0, u = !1;
  return { s: function() {
    e = e.call(r);
  }, n: function() {
    var c = e.next();
    return a = c.done, c;
  }, e: function(c) {
    u = !0, o = c;
  }, f: function() {
    try {
      a || e.return == null || e.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function rs(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
  return n;
}
var be = /* @__PURE__ */ new Map(), it = null;
function Ml(r, t) {
  var e = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!e) {
    if (Array.isArray(r) || (e = function(c, p) {
      if (c) {
        if (typeof c == "string") return ns(c, p);
        var m = Object.prototype.toString.call(c).slice(8, -1);
        if (m === "Object" && c.constructor && (m = c.constructor.name), m === "Map" || m === "Set") return Array.from(c);
        if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) return ns(c, p);
      }
    }(r)) || t) {
      e && (r = e);
      var n = 0, i = function() {
      };
      return { s: i, n: function() {
        return n >= r.length ? { done: !0 } : { done: !1, value: r[n++] };
      }, e: function(c) {
        throw c;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o, a = !0, u = !1;
  return { s: function() {
    e = e.call(r);
  }, n: function() {
    var c = e.next();
    return a = c.done, c;
  }, e: function(c) {
    u = !0, o = c;
  }, f: function() {
    try {
      a || e.return == null || e.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function ns(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
  return n;
}
var we = /* @__PURE__ */ new Map(), yt = null;
function Al(r) {
  Ho() ? function(t) {
    be.has(t) || (be.set(t, {}), navigator.mediaDevices.enumerateDevices().then(function(e) {
      be.has(t) && (be.get(t).lastDevicesString = JSON.stringify(e), it || (it = function() {
        var n = P(function* () {
          var i, o = yield navigator.mediaDevices.enumerateDevices(), a = Tl(be.keys());
          try {
            for (a.s(); !(i = a.n()).done; ) {
              var u = i.value, c = JSON.stringify(o);
              c !== be.get(u).lastDevicesString && (be.get(u).lastDevicesString = c, u(o));
            }
          } catch (p) {
            a.e(p);
          } finally {
            a.f();
          }
        });
        return function() {
          return n.apply(this, arguments);
        };
      }(), navigator.mediaDevices.addEventListener("devicechange", it)));
    }).catch(function() {
    }));
  }(r) : function(t) {
    we.has(t) || (we.set(t, {}), navigator.mediaDevices.enumerateDevices().then(function(e) {
      we.has(t) && (we.get(t).lastDevicesString = JSON.stringify(e), yt || (yt = setInterval(P(function* () {
        var n, i = yield navigator.mediaDevices.enumerateDevices(), o = Ml(we.keys());
        try {
          for (o.s(); !(n = o.n()).done; ) {
            var a = n.value, u = JSON.stringify(i);
            u !== we.get(a).lastDevicesString && (we.get(a).lastDevicesString = u, a(i));
          }
        } catch (c) {
          o.e(c);
        } finally {
          o.f();
        }
      }), 3e3)));
    }));
  }(r);
}
function Ol(r) {
  Ho() ? function(t) {
    be.has(t) && (be.delete(t), be.size === 0 && it && (navigator.mediaDevices.removeEventListener("devicechange", it), it = null));
  }(r) : function(t) {
    we.has(t) && (we.delete(t), we.size === 0 && yt && (clearInterval(yt), yt = null));
  }(r);
}
function Ho() {
  var r;
  return R() || ((r = navigator.mediaDevices) === null || r === void 0 ? void 0 : r.ondevicechange) !== void 0;
}
var Pl = /* @__PURE__ */ new Set();
function Ll(r, t) {
  return r && r.readyState === "live" && !function(e, n) {
    return e.muted && !Pl.has(e.id);
  }(r);
}
var Il = ["result"], jl = ["preserveIframe"];
function is(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function T(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? is(Object(e), !0).forEach(function(n) {
      Te(r, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : is(Object(e)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return r;
}
function Dl(r) {
  var t = function() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }();
  return function() {
    var e, n = he(r);
    if (t) {
      var i = he(this).constructor;
      e = Reflect.construct(n, arguments, i);
    } else e = n.apply(this, arguments);
    return tr(this, e);
  };
}
function ss(r, t) {
  var e = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!e) {
    if (Array.isArray(r) || (e = function(c, p) {
      if (c) {
        if (typeof c == "string") return os(c, p);
        var m = Object.prototype.toString.call(c).slice(8, -1);
        if (m === "Object" && c.constructor && (m = c.constructor.name), m === "Map" || m === "Set") return Array.from(c);
        if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) return os(c, p);
      }
    }(r)) || t) {
      e && (r = e);
      var n = 0, i = function() {
      };
      return { s: i, n: function() {
        return n >= r.length ? { done: !0 } : { done: !1, value: r[n++] };
      }, e: function(c) {
        throw c;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o, a = !0, u = !1;
  return { s: function() {
    e = e.call(r);
  }, n: function() {
    var c = e.next();
    return a = c.done, c;
  }, e: function(c) {
    u = !0, o = c;
  }, f: function() {
    try {
      a || e.return == null || e.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function os(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
  return n;
}
var Je = {}, as = "video", Nl = "voice", cs = R() ? { data: {} } : { data: {}, topology: "none" }, ls = { present: 0, hidden: 0 }, zo = { maxBitrate: { min: 1e5, max: 25e5 }, maxFramerate: { min: 1, max: 30 }, scaleResolutionDownBy: { min: 1, max: 8 } }, br = Object.keys(zo), us = ["state", "volume", "simulcastEncodings"], ds = { androidInCallNotification: { title: "string", subtitle: "string", iconName: "string", disableForCustomOverride: "boolean" }, disableAutoDeviceManagement: { audio: "boolean", video: "boolean" } }, Zt = { id: { iconPath: "string", iconPathDarkMode: "string", label: "string", tooltip: "string", visualState: "'default' | 'sidebar-open' | 'active'" } }, Zr = { id: { allow: "string", controlledBy: "'*' | 'owners' | string[]", csp: "string", iconURL: "string", label: "string", loading: "'eager' | 'lazy'", location: "'main' | 'sidebar'", name: "string", referrerPolicy: "string", sandbox: "string", src: "string", srcdoc: "string", shared: "string[] | 'owners' | boolean" } }, Ge = { customIntegrations: { validate: na, help: ta() }, customTrayButtons: { validate: ra, help: "customTrayButtons should be a dictionary of the type ".concat(JSON.stringify(Zt)) }, url: { validate: function(r) {
  return typeof r == "string";
}, help: "url should be a string" }, baseUrl: { validate: function(r) {
  return typeof r == "string";
}, help: "baseUrl should be a string" }, token: { validate: function(r) {
  return typeof r == "string";
}, help: "token should be a string", queryString: "t" }, dailyConfig: { validate: function(r, t) {
  try {
    return t.validateDailyConfig(r), !0;
  } catch (e) {
    console.error("Failed to validate dailyConfig", e);
  }
  return !1;
}, help: "Unsupported dailyConfig. Check error logs for detailed info." }, reactNativeConfig: { validate: function(r) {
  return ia(r, ds);
}, help: "reactNativeConfig should look like ".concat(JSON.stringify(ds), ", all fields optional") }, lang: { validate: function(r) {
  return ["da", "de", "en-us", "en", "es", "fi", "fr", "it", "jp", "ka", "nl", "no", "pl", "pt", "pt-BR", "ru", "sv", "tr", "user"].includes(r);
}, help: "language not supported. Options are: da, de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, pt-BR, ru, sv, tr, user" }, userName: !0, userData: { validate: function(r) {
  try {
    return Qo(r), !0;
  } catch (t) {
    return console.error(t), !1;
  }
}, help: "invalid userData type provided" }, startVideoOff: !0, startAudioOff: !0, allowLocalVideo: !0, allowLocalAudio: !0, activeSpeakerMode: !0, showLeaveButton: !0, showLocalVideo: !0, showParticipantsBar: !0, showFullscreenButton: !0, showUserNameChangeUI: !0, iframeStyle: !0, customLayout: !0, cssFile: !0, cssText: !0, bodyClass: !0, videoSource: { validate: function(r, t) {
  if (typeof r == "boolean") return t._preloadCache.allowLocalVideo = r, !0;
  var e;
  if (r instanceof MediaStreamTrack) t._sharedTracks.videoTrack = r, e = { customTrack: Oe };
  else {
    if (delete t._sharedTracks.videoTrack, typeof r != "string") return console.error("videoSource must be a MediaStreamTrack, boolean, or a string"), !1;
    e = { deviceId: r };
  }
  return t._updatePreloadCacheInputSettings({ video: { settings: e } }, !1), !0;
} }, audioSource: { validate: function(r, t) {
  if (typeof r == "boolean") return t._preloadCache.allowLocalAudio = r, !0;
  var e;
  if (r instanceof MediaStreamTrack) t._sharedTracks.audioTrack = r, e = { customTrack: Oe };
  else {
    if (delete t._sharedTracks.audioTrack, typeof r != "string") return console.error("audioSource must be a MediaStreamTrack, boolean, or a string"), !1;
    e = { deviceId: r };
  }
  return t._updatePreloadCacheInputSettings({ audio: { settings: e } }, !1), !0;
} }, subscribeToTracksAutomatically: { validate: function(r, t) {
  return t._preloadCache.subscribeToTracksAutomatically = r, !0;
} }, theme: { validate: function(r) {
  var t = ["accent", "accentText", "background", "backgroundAccent", "baseText", "border", "mainAreaBg", "mainAreaBgAccent", "mainAreaText", "supportiveText"], e = function(n) {
    for (var i = 0, o = Object.keys(n); i < o.length; i++) {
      var a = o[i];
      if (!t.includes(a)) return console.error('unsupported color "'.concat(a, '". Valid colors: ').concat(t.join(", "))), !1;
      if (!n[a].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i)) return console.error("".concat(a, ' theme color should be provided in valid hex color format. Received: "').concat(n[a], '"')), !1;
    }
    return !0;
  };
  return $(r) === "object" && ("light" in r && "dark" in r || "colors" in r) ? "light" in r && "dark" in r ? "colors" in r.light ? "colors" in r.dark ? e(r.light.colors) && e(r.dark.colors) : (console.error('Dark theme is missing "colors" property.', r), !1) : (console.error('Light theme is missing "colors" property.', r), !1) : e(r.colors) : (console.error('Theme must contain either both "light" and "dark" properties, or "colors".', r), !1);
}, help: "unsupported theme configuration. Check error logs for detailed info." }, layoutConfig: { validate: function(r) {
  if ("grid" in r) {
    var t = r.grid;
    if ("maxTilesPerPage" in t) {
      if (!Number.isInteger(t.maxTilesPerPage)) return console.error("grid.maxTilesPerPage should be an integer. You passed ".concat(t.maxTilesPerPage, ".")), !1;
      if (t.maxTilesPerPage > 49) return console.error("grid.maxTilesPerPage can't be larger than 49 without sacrificing browser performance. Please contact us at https://www.daily.co/contact to talk about your use case."), !1;
    }
    if ("minTilesPerPage" in t) {
      if (!Number.isInteger(t.minTilesPerPage)) return console.error("grid.minTilesPerPage should be an integer. You passed ".concat(t.minTilesPerPage, ".")), !1;
      if (t.minTilesPerPage < 1) return console.error("grid.minTilesPerPage can't be lower than 1."), !1;
      if ("maxTilesPerPage" in t && t.minTilesPerPage > t.maxTilesPerPage) return console.error("grid.minTilesPerPage can't be higher than grid.maxTilesPerPage."), !1;
    }
  }
  return !0;
}, help: "unsupported layoutConfig. Check error logs for detailed info." }, receiveSettings: { validate: function(r) {
  return Ko(r, { allowAllParticipantsKey: !1 });
}, help: ea({ allowAllParticipantsKey: !1 }) }, sendSettings: { validate: function(r, t) {
  return !!function(e, n) {
    try {
      return n.validateUpdateSendSettings(e), !0;
    } catch (i) {
      return console.error("Failed to validate send settings", i), !1;
    }
  }(r, t) && (t._preloadCache.sendSettings = r, !0);
}, help: "Invalid sendSettings provided. Check error logs for detailed info." }, inputSettings: { validate: function(r, t) {
  var e;
  return !!Xo(r) && (t._inputSettings || (t._inputSettings = {}), Zo(r, (e = t.properties) === null || e === void 0 ? void 0 : e.dailyConfig, t._sharedTracks), t._updatePreloadCacheInputSettings(r, !0), !0);
}, help: en() }, layout: { validate: function(r) {
  return r === "custom-v1" || r === "browser" || r === "none";
}, help: 'layout may only be set to "custom-v1"', queryString: "layout" }, emb: { queryString: "emb" }, embHref: { queryString: "embHref" }, dailyJsVersion: { queryString: "dailyJsVersion" }, proxy: { queryString: "proxy" }, strictMode: !0, allowMultipleCallInstances: !0 }, Dt = { styles: { validate: function(r) {
  for (var t in r) if (t !== "cam" && t !== "screen") return !1;
  if (r.cam) {
    for (var e in r.cam) if (e !== "div" && e !== "video") return !1;
  }
  if (r.screen) {
    for (var n in r.screen) if (n !== "div" && n !== "video") return !1;
  }
  return !0;
}, help: "styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }" }, setSubscribedTracks: { validate: function(r, t) {
  if (t._preloadCache.subscribeToTracksAutomatically) return !1;
  var e = [!0, !1, "staged"];
  if (e.includes(r) || !R() && r === "avatar") return !0;
  var n = ["audio", "video", "screenAudio", "screenVideo", "rmpAudio", "rmpVideo"];
  return function i(o) {
    var a = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    for (var u in o) if (u === "custom") {
      if (!e.includes(o[u]) && !i(o[u], !0)) return !1;
    } else {
      var c = !a && !n.includes(u), p = !e.includes(o[u]);
      if (c || p) return !1;
    }
    return !0;
  }(r);
}, help: "setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: " + "true".concat(R() ? "" : " | 'avatar'", " | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }") }, setAudio: !0, setVideo: !0, setScreenShare: { validate: function(r) {
  return r === !1;
}, help: "setScreenShare must be false, as it's only meant for stopping remote participants' screen shares" }, eject: !0, updatePermissions: { validate: function(r) {
  for (var t = 0, e = Object.entries(r); t < e.length; t++) {
    var n = Se(e[t], 2), i = n[0], o = n[1];
    switch (i) {
      case "hasPresence":
        if (typeof o != "boolean") return !1;
        break;
      case "canSend":
        if (o instanceof Set || o instanceof Array || Array.isArray(o)) {
          var a, u = ["video", "audio", "screenVideo", "screenAudio", "customVideo", "customAudio"], c = ss(o);
          try {
            for (c.s(); !(a = c.n()).done; ) {
              var p = a.value;
              if (!u.includes(p)) return !1;
            }
          } catch (y) {
            c.e(y);
          } finally {
            c.f();
          }
        } else if (typeof o != "boolean") return !1;
        (o instanceof Array || Array.isArray(o)) && (r.canSend = new Set(o));
        break;
      case "canAdmin":
        if (o instanceof Set || o instanceof Array || Array.isArray(o)) {
          var m, g = ["participants", "streaming", "transcription"], _ = ss(o);
          try {
            for (_.s(); !(m = _.n()).done; ) {
              var w = m.value;
              if (!g.includes(w)) return !1;
            }
          } catch (y) {
            _.e(y);
          } finally {
            _.f();
          }
        } else if (typeof o != "boolean") return !1;
        (o instanceof Array || Array.isArray(o)) && (r.canAdmin = new Set(o));
        break;
      default:
        return !1;
    }
  }
  return !0;
}, help: "updatePermissions can take hasPresence, canSend, and canAdmin permissions. hasPresence must be a boolean. canSend can be a boolean or an Array or Set of media types (video, audio, screenVideo, screenAudio, customVideo, customAudio). canAdmin can be a boolean or an Array or Set of admin types (participants, streaming, transcription)." } };
Promise.any || (Promise.any = function() {
  var r = P(function* (t) {
    return new Promise(function(e, n) {
      var i = [];
      t.forEach(function(o) {
        return Promise.resolve(o).then(function(a) {
          e(a);
        }).catch(function(a) {
          i.push(a), i.length === t.length && n(i);
        });
      });
    });
  });
  return function(t) {
    return r.apply(this, arguments);
  };
}());
var Rl = function() {
  er(ce, Me);
  var r, t, e, n, i, o, a, u, c, p, m, g, _, w, y, E, C, O, j, x, H, Y, ae, ie, ge, $e, ut, yn, _n, bn, wn, Sn, En, kn, Cn, Tn, Mn, An, ma = Dl(ce);
  function ce(s) {
    var d, l, f, h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (fe(this, ce), Te(Ee(l = ma.call(this)), "startListeningForDeviceChanges", function() {
      Al(l.handleDeviceChange);
    }), Te(Ee(l), "stopListeningForDeviceChanges", function() {
      Ol(l.handleDeviceChange);
    }), Te(Ee(l), "handleDeviceChange", function(S) {
      S = S.map(function(k) {
        return JSON.parse(JSON.stringify(k));
      }), l.emitDailyJSEvent({ action: "available-devices-updated", availableDevices: S });
    }), Te(Ee(l), "handleNativeAppStateChange", function() {
      var S = P(function* (k) {
        if (k === "destroyed") return console.warn("App has been destroyed before leaving the meeting. Cleaning up all the resources!"), void (yield l.destroy());
        var A = k === "active";
        l.disableReactNativeAutoDeviceManagement("video") || (A ? l.camUnmutedBeforeLosingNativeActiveState && l.setLocalVideo(!0) : (l.camUnmutedBeforeLosingNativeActiveState = l.localVideo(), l.camUnmutedBeforeLosingNativeActiveState && l.setLocalVideo(!1)));
      });
      return function(k) {
        return S.apply(this, arguments);
      };
    }()), Te(Ee(l), "handleNativeAudioFocusChange", function(S) {
      l.disableReactNativeAutoDeviceManagement("audio") || (l._hasNativeAudioFocus = S, l.toggleParticipantAudioBasedOnNativeAudioFocus(), l._hasNativeAudioFocus ? l.micUnmutedBeforeLosingNativeAudioFocus && l.setLocalAudio(!0) : (l.micUnmutedBeforeLosingNativeAudioFocus = l.localAudio(), l.setLocalAudio(!1)));
    }), Te(Ee(l), "handleNativeSystemScreenCaptureStop", function() {
      l.stopScreenShare();
    }), l.strictMode = h.strictMode === void 0 || h.strictMode, l.allowMultipleCallInstances = (d = h.allowMultipleCallInstances) !== null && d !== void 0 && d, Object.keys(Je).length && (l._logDuplicateInstanceAttempt(), !l.allowMultipleCallInstances)) {
      if (l.strictMode) throw new Error("Duplicate DailyIframe instances are not allowed");
      console.warn("Using strictMode: false to allow multiple call instances is now deprecated. Set `allowMultipleCallInstances: true`");
    }
    if (window._daily || (window._daily = { pendings: [], instances: {} }), l.callClientId = rr(), f = Ee(l), Je[f.callClientId] = f, window._daily.instances[l.callClientId] = {}, l._sharedTracks = {}, window._daily.instances[l.callClientId].tracks = l._sharedTracks, h.dailyJsVersion = ce.version(), l._iframe = s, l._callObjectMode = h.layout === "none" && !l._iframe, l._preloadCache = { subscribeToTracksAutomatically: !0, outputDeviceId: null, inputSettings: null, sendSettings: null, videoTrackForNetworkConnectivityTest: null, videoTrackForConnectionQualityTest: null }, h.showLocalVideo !== void 0 ? l._callObjectMode ? console.error("showLocalVideo is not available in call object mode") : l._showLocalVideo = !!h.showLocalVideo : l._showLocalVideo = !0, h.showParticipantsBar !== void 0 ? l._callObjectMode ? console.error("showParticipantsBar is not available in call object mode") : l._showParticipantsBar = !!h.showParticipantsBar : l._showParticipantsBar = !0, h.customIntegrations !== void 0 ? l._callObjectMode ? console.error("customIntegrations is not available in call object mode") : l._customIntegrations = h.customIntegrations : l._customIntegrations = {}, h.customTrayButtons !== void 0 ? l._callObjectMode ? console.error("customTrayButtons is not available in call object mode") : l._customTrayButtons = h.customTrayButtons : l._customTrayButtons = {}, h.activeSpeakerMode !== void 0 ? l._callObjectMode ? console.error("activeSpeakerMode is not available in call object mode") : l._activeSpeakerMode = !!h.activeSpeakerMode : l._activeSpeakerMode = !1, h.receiveSettings ? l._callObjectMode ? l._receiveSettings = h.receiveSettings : console.error("receiveSettings is only available in call object mode") : l._receiveSettings = {}, l.validateProperties(h), l.properties = T({}, h), l._inputSettings || (l._inputSettings = {}), l._callObjectLoader = l._callObjectMode ? new vl(l.callClientId) : null, l._callState = $r, l._isPreparingToJoin = !1, l._accessState = { access: qt }, l._meetingSessionSummary = {}, l._finalSummaryOfPrevSession = {}, l._meetingSessionState = Er(cs, l._callObjectMode), l._nativeInCallAudioMode = as, l._participants = {}, l._isScreenSharing = !1, l._participantCounts = ls, l._rmpPlayerState = {}, l._waitingParticipants = {}, l._network = { threshold: "good", quality: 100 }, l._activeSpeaker = {}, l._localAudioLevel = 0, l._isLocalAudioLevelObserverRunning = !1, l._remoteParticipantsAudioLevel = {}, l._isRemoteParticipantsAudioLevelObserverRunning = !1, l._maxAppMessageSize = mr, l._messageChannel = R() ? new fl() : new pl(), l._iframe && (l._iframe.requestFullscreen ? l._iframe.addEventListener("fullscreenchange", function() {
      document.fullscreenElement === l._iframe ? (l.emitDailyJSEvent({ action: gt }), l.sendMessageToCallMachine({ action: gt })) : (l.emitDailyJSEvent({ action: vt }), l.sendMessageToCallMachine({ action: vt }));
    }) : l._iframe.webkitRequestFullscreen && l._iframe.addEventListener("webkitfullscreenchange", function() {
      document.webkitFullscreenElement === l._iframe ? (l.emitDailyJSEvent({ action: gt }), l.sendMessageToCallMachine({ action: gt })) : (l.emitDailyJSEvent({ action: vt }), l.sendMessageToCallMachine({ action: vt }));
    })), R()) {
      var v = l.nativeUtils();
      v.addAudioFocusChangeListener && v.removeAudioFocusChangeListener && v.addAppStateChangeListener && v.removeAppStateChangeListener && v.addSystemScreenCaptureStopListener && v.removeSystemScreenCaptureStopListener || console.warn("expected (add|remove)(AudioFocusChange|AppActiveStateChange|SystemScreenCaptureStop)Listener to be available in React Native"), l._hasNativeAudioFocus = !0, v.addAudioFocusChangeListener(l.handleNativeAudioFocusChange), v.addAppStateChangeListener(l.handleNativeAppStateChange), v.addSystemScreenCaptureStopListener(l.handleNativeSystemScreenCaptureStop);
    }
    return l._callObjectMode && l.startListeningForDeviceChanges(), l._messageChannel.addListenerForMessagesFromCallMachine(l.handleMessageFromCallMachine, l.callClientId, Ee(l)), l;
  }
  return me(ce, [{ key: "destroy", value: (An = P(function* () {
    var s, d;
    try {
      yield this.leave();
    } catch {
    }
    var l = this._iframe;
    if (l) {
      var f = l.parentElement;
      f && f.removeChild(l);
    }
    if (this._messageChannel.removeListener(this.handleMessageFromCallMachine), R()) {
      var h = this.nativeUtils();
      h.removeAudioFocusChangeListener(this.handleNativeAudioFocusChange), h.removeAppStateChangeListener(this.handleNativeAppStateChange), h.removeSystemScreenCaptureStopListener(this.handleNativeSystemScreenCaptureStop);
    }
    this._callObjectMode && this.stopListeningForDeviceChanges(), this.resetMeetingDependentVars(), this._destroyed = !0, this.emitDailyJSEvent({ action: "call-instance-destroyed" }), delete Je[this.callClientId], !((s = window) === null || s === void 0 || (d = s._daily) === null || d === void 0) && d.instances && delete window._daily.instances[this.callClientId], this.strictMode && (this.callClientId = void 0);
  }), function() {
    return An.apply(this, arguments);
  }) }, { key: "isDestroyed", value: function() {
    return !!this._destroyed;
  } }, { key: "loadCss", value: function(s) {
    var d = s.bodyClass, l = s.cssFile, f = s.cssText;
    return D(), this.sendMessageToCallMachine({ action: "load-css", cssFile: this.absoluteUrl(l), bodyClass: d, cssText: f }), this;
  } }, { key: "iframe", value: function() {
    return D(), this._iframe;
  } }, { key: "meetingState", value: function() {
    return this._callState;
  } }, { key: "accessState", value: function() {
    return le(this._callObjectMode, "accessState()"), this._accessState;
  } }, { key: "participants", value: function() {
    return this._participants;
  } }, { key: "participantCounts", value: function() {
    return this._participantCounts;
  } }, { key: "waitingParticipants", value: function() {
    return le(this._callObjectMode, "waitingParticipants()"), this._waitingParticipants;
  } }, { key: "validateParticipantProperties", value: function(s, d) {
    for (var l in d) {
      if (!Dt[l]) throw new Error("unrecognized updateParticipant property ".concat(l));
      if (Dt[l].validate && !Dt[l].validate(d[l], this, this._participants[s])) throw new Error(Dt[l].help);
    }
  } }, { key: "updateParticipant", value: function(s, d) {
    return this._participants.local && this._participants.local.session_id === s && (s = "local"), s && d && (this.validateParticipantProperties(s, d), this.sendMessageToCallMachine({ action: "update-participant", id: s, properties: d })), this;
  } }, { key: "updateParticipants", value: function(s) {
    var d = this._participants.local && this._participants.local.session_id;
    for (var l in s) l === d && (l = "local"), l && s[l] && this.validateParticipantProperties(l, s[l]);
    return this.sendMessageToCallMachine({ action: "update-participants", participants: s }), this;
  } }, { key: "updateWaitingParticipant", value: (Mn = P(function* () {
    var s = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (le(this._callObjectMode, "updateWaitingParticipant()"), J(this._callState, "updateWaitingParticipant()"), typeof d != "string" || $(l) !== "object") throw new Error("updateWaitingParticipant() must take an id string and a updates object");
    return new Promise(function(f, h) {
      s.sendMessageToCallMachine({ action: "daily-method-update-waiting-participant", id: d, updates: l }, function(v) {
        v.error && h(v.error), v.id || h(new Error("unknown error in updateWaitingParticipant()")), f({ id: v.id });
      });
    });
  }), function() {
    return Mn.apply(this, arguments);
  }) }, { key: "updateWaitingParticipants", value: (Tn = P(function* () {
    var s = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (le(this._callObjectMode, "updateWaitingParticipants()"), J(this._callState, "updateWaitingParticipants()"), $(d) !== "object") throw new Error("updateWaitingParticipants() must take a mapping between ids and update objects");
    return new Promise(function(l, f) {
      s.sendMessageToCallMachine({ action: "daily-method-update-waiting-participants", updatesById: d }, function(h) {
        h.error && f(h.error), h.ids || f(new Error("unknown error in updateWaitingParticipants()")), l({ ids: h.ids });
      });
    });
  }), function() {
    return Tn.apply(this, arguments);
  }) }, { key: "requestAccess", value: (Cn = P(function* () {
    var s = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = d.access, f = l === void 0 ? { level: $s } : l, h = d.name, v = h === void 0 ? "" : h;
    return le(this._callObjectMode, "requestAccess()"), J(this._callState, "requestAccess()"), new Promise(function(S, k) {
      s.sendMessageToCallMachine({ action: "daily-method-request-access", access: f, name: v }, function(A) {
        A.error && k(A.error), A.access || k(new Error("unknown error in requestAccess()")), S({ access: A.access, granted: A.granted });
      });
    });
  }), function() {
    return Cn.apply(this, arguments);
  }) }, { key: "localAudio", value: function() {
    return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.audio.state) : null;
  } }, { key: "localVideo", value: function() {
    return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.video.state) : null;
  } }, { key: "setLocalAudio", value: function(s) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return "forceDiscardTrack" in d && (R() ? (console.warn("forceDiscardTrack option not supported in React Native; ignoring"), d = {}) : s && (console.warn("forceDiscardTrack option only supported when calling setLocalAudio(false); ignoring"), d = {})), this.sendMessageToCallMachine({ action: "local-audio", state: s, options: d }), this;
  } }, { key: "localScreenAudio", value: function() {
    return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.screenAudio.state) : null;
  } }, { key: "localScreenVideo", value: function() {
    return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.screenVideo.state) : null;
  } }, { key: "updateScreenShare", value: function(s) {
    if (this._isScreenSharing) return this.sendMessageToCallMachine({ action: "local-screen-update", options: s }), this;
    console.warn("There is no screen share in progress. Try calling startScreenShare first.");
  } }, { key: "setLocalVideo", value: function(s) {
    return this.sendMessageToCallMachine({ action: "local-video", state: s }), this;
  } }, { key: "_setAllowLocalAudio", value: function(s) {
    if (this._preloadCache.allowLocalAudio = s, this._callMachineInitialized) return this.sendMessageToCallMachine({ action: "set-allow-local-audio", state: s }), this;
  } }, { key: "_setAllowLocalVideo", value: function(s) {
    if (this._preloadCache.allowLocalVideo = s, this._callMachineInitialized) return this.sendMessageToCallMachine({ action: "set-allow-local-video", state: s }), this;
  } }, { key: "getReceiveSettings", value: (kn = P(function* (s) {
    var d = this, l = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).showInheritedValues, f = l !== void 0 && l;
    if (le(this._callObjectMode, "getReceiveSettings()"), !this._callMachineInitialized) return this._receiveSettings;
    switch ($(s)) {
      case "string":
        return new Promise(function(h) {
          d.sendMessageToCallMachine({ action: "get-single-participant-receive-settings", id: s, showInheritedValues: f }, function(v) {
            h(v.receiveSettings);
          });
        });
      case "undefined":
        return this._receiveSettings;
      default:
        throw new Error('first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments');
    }
  }), function(s) {
    return kn.apply(this, arguments);
  }) }, { key: "updateReceiveSettings", value: (En = P(function* (s) {
    var d = this;
    if (le(this._callObjectMode, "updateReceiveSettings()"), !Ko(s, { allowAllParticipantsKey: !0 })) throw new Error(ea({ allowAllParticipantsKey: !0 }));
    return J(this._callState, "updateReceiveSettings()", "To specify receive settings earlier, use the receiveSettings config property."), new Promise(function(l) {
      d.sendMessageToCallMachine({ action: "update-receive-settings", receiveSettings: s }, function(f) {
        l({ receiveSettings: f.receiveSettings });
      });
    });
  }), function(s) {
    return En.apply(this, arguments);
  }) }, { key: "_prepInputSettingsForSharing", value: function(s, d) {
    if (s) {
      var l = {};
      if (s.audio) {
        var f, h, v, S;
        s.audio.settings && (!Object.keys(s.audio.settings).length && d || (l.audio = { settings: T({}, s.audio.settings) })), d && (f = l.audio) !== null && f !== void 0 && (h = f.settings) !== null && h !== void 0 && h.customTrack && (l.audio.settings = { customTrack: this._sharedTracks.audioTrack });
        var k = ((v = s.audio.processor) === null || v === void 0 ? void 0 : v.type) === "none" && ((S = s.audio.processor) === null || S === void 0 ? void 0 : S._isDefaultWhenNone);
        if (s.audio.processor && !k) {
          var A = T({}, s.audio.processor);
          delete A._isDefaultWhenNone, l.audio = T(T({}, l.audio), {}, { processor: A });
        }
      }
      if (s.video) {
        var q, N, z, ve;
        s.video.settings && (!Object.keys(s.video.settings).length && d || (l.video = { settings: T({}, s.video.settings) })), d && (q = l.video) !== null && q !== void 0 && (N = q.settings) !== null && N !== void 0 && N.customTrack && (l.video.settings = { customTrack: this._sharedTracks.videoTrack });
        var Pe = ((z = s.video.processor) === null || z === void 0 ? void 0 : z.type) === "none" && ((ve = s.video.processor) === null || ve === void 0 ? void 0 : ve._isDefaultWhenNone);
        if (s.video.processor && !Pe) {
          var Ve = T({}, s.video.processor);
          delete Ve._isDefaultWhenNone, l.video = T(T({}, l.video), {}, { processor: Ve });
        }
      }
      return l;
    }
  } }, { key: "getInputSettings", value: function() {
    var s = this;
    return D(), new Promise(function(d) {
      d(s._getInputSettings());
    });
  } }, { key: "_getInputSettings", value: function() {
    var s, d, l, f, h, v, S, k, A = { processor: { type: "none", _isDefaultWhenNone: !0 } };
    this._inputSettings ? (s = ((l = this._inputSettings) === null || l === void 0 ? void 0 : l.video) || A, d = ((f = this._inputSettings) === null || f === void 0 ? void 0 : f.audio) || A) : (s = ((h = this._preloadCache) === null || h === void 0 || (v = h.inputSettings) === null || v === void 0 ? void 0 : v.video) || A, d = ((S = this._preloadCache) === null || S === void 0 || (k = S.inputSettings) === null || k === void 0 ? void 0 : k.audio) || A);
    var q = { audio: d, video: s };
    return this._prepInputSettingsForSharing(q, !0);
  } }, { key: "_updatePreloadCacheInputSettings", value: function(s, d) {
    var l = this._inputSettings || {}, f = {};
    if (s.video) {
      var h, v, S;
      f.video = {}, s.video.settings ? (f.video.settings = {}, d || s.video.settings.customTrack || (S = l.video) === null || S === void 0 || !S.settings ? f.video.settings = s.video.settings : f.video.settings = T(T({}, l.video.settings), s.video.settings), Object.keys(f.video.settings).length || delete f.video.settings) : (h = l.video) !== null && h !== void 0 && h.settings && (f.video.settings = l.video.settings), s.video.processor ? f.video.processor = s.video.processor : (v = l.video) !== null && v !== void 0 && v.processor && (f.video.processor = l.video.processor);
    } else l.video && (f.video = l.video);
    if (s.audio) {
      var k, A, q;
      f.audio = {}, s.audio.settings ? (f.audio.settings = {}, d || s.audio.settings.customTrack || (q = l.audio) === null || q === void 0 || !q.settings ? f.audio.settings = s.audio.settings : f.audio.settings = T(T({}, l.audio.settings), s.audio.settings), Object.keys(f.audio.settings).length || delete f.audio.settings) : (k = l.audio) !== null && k !== void 0 && k.settings && (f.audio.settings = l.audio.settings), s.audio.processor ? f.audio.processor = s.audio.processor : (A = l.audio) !== null && A !== void 0 && A.processor && (f.audio.processor = l.audio.processor);
    } else l.audio && (f.audio = l.audio);
    this._maybeUpdateInputSettings(f);
  } }, { key: "_devicesFromInputSettings", value: function(s) {
    var d, l, f, h, v = (s == null || (d = s.video) === null || d === void 0 || (l = d.settings) === null || l === void 0 ? void 0 : l.deviceId) || null, S = (s == null || (f = s.audio) === null || f === void 0 || (h = f.settings) === null || h === void 0 ? void 0 : h.deviceId) || null, k = this._preloadCache.outputDeviceId || null;
    return { camera: v ? { deviceId: v } : {}, mic: S ? { deviceId: S } : {}, speaker: k ? { deviceId: k } : {} };
  } }, { key: "updateInputSettings", value: (Sn = P(function* (s) {
    var d = this;
    return D(), Xo(s) ? s.video || s.audio ? (Zo(s, this.properties.dailyConfig, this._sharedTracks), this._callObjectMode && !this._callMachineInitialized ? (this._updatePreloadCacheInputSettings(s, !0), this._getInputSettings()) : new Promise(function(l, f) {
      d.sendMessageToCallMachine({ action: "update-input-settings", inputSettings: s }, function(h) {
        if (h.error) f(h.error);
        else {
          if (h.returnPreloadCache) return d._updatePreloadCacheInputSettings(s, !0), void l(d._getInputSettings());
          d._maybeUpdateInputSettings(h.inputSettings), l(d._prepInputSettingsForSharing(h.inputSettings, !0));
        }
      });
    })) : this._getInputSettings() : (console.error(en()), Promise.reject(en()));
  }), function(s) {
    return Sn.apply(this, arguments);
  }) }, { key: "setBandwidth", value: function(s) {
    var d = s.kbs, l = s.trackConstraints;
    if (D(), this._callMachineInitialized) return this.sendMessageToCallMachine({ action: "set-bandwidth", kbs: d, trackConstraints: l }), this;
  } }, { key: "getDailyLang", value: function() {
    var s = this;
    if (D(), this._callMachineInitialized) return new Promise(function(d) {
      s.sendMessageToCallMachine({ action: "get-daily-lang" }, function(l) {
        delete l.action, delete l.callbackStamp, d(l);
      });
    });
  } }, { key: "setDailyLang", value: function(s) {
    return D(), this.sendMessageToCallMachine({ action: "set-daily-lang", lang: s }), this;
  } }, { key: "setProxyUrl", value: function(s) {
    return this.sendMessageToCallMachine({ action: "set-proxy-url", proxyUrl: s }), this;
  } }, { key: "setIceConfig", value: function(s) {
    return this.sendMessageToCallMachine({ action: "set-ice-config", iceConfig: s }), this;
  } }, { key: "meetingSessionSummary", value: function() {
    return [Ie, ke].includes(this._callState) ? this._finalSummaryOfPrevSession : this._meetingSessionSummary;
  } }, { key: "getMeetingSession", value: (wn = P(function* () {
    var s = this;
    return console.warn("getMeetingSession() is deprecated: use meetingSessionSummary(), which will return immediately"), J(this._callState, "getMeetingSession()"), new Promise(function(d) {
      s.sendMessageToCallMachine({ action: "get-meeting-session" }, function(l) {
        delete l.action, delete l.callbackStamp, d(l);
      });
    });
  }), function() {
    return wn.apply(this, arguments);
  }) }, { key: "meetingSessionState", value: function() {
    return J(this._callState, "meetingSessionState"), this._meetingSessionState;
  } }, { key: "setMeetingSessionData", value: function(s) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "replace";
    le(this._callObjectMode, "setMeetingSessionData()"), J(this._callState, "setMeetingSessionData");
    try {
      (function(l, f) {
        new ml({ data: l, mergeStrategy: f });
      })(s, d);
    } catch (l) {
      throw console.error(l), l;
    }
    try {
      this.sendMessageToCallMachine({ action: "set-session-data", data: s, mergeStrategy: d });
    } catch (l) {
      throw new Error("Error setting meeting session data: ".concat(l));
    }
  } }, { key: "setUserName", value: function(s, d) {
    var l = this;
    return this.properties.userName = s, new Promise(function(f) {
      l.sendMessageToCallMachine({ action: "set-user-name", name: s ?? "", thisMeetingOnly: R() || !!d && !!d.thisMeetingOnly }, function(h) {
        delete h.action, delete h.callbackStamp, f(h);
      });
    });
  } }, { key: "setUserData", value: (bn = P(function* (s) {
    var d = this;
    try {
      Qo(s);
    } catch (l) {
      throw console.error(l), l;
    }
    if (this.properties.userData = s, this._callMachineInitialized) return new Promise(function(l) {
      try {
        d.sendMessageToCallMachine({ action: "set-user-data", userData: s }, function(f) {
          delete f.action, delete f.callbackStamp, l(f);
        });
      } catch (f) {
        throw new Error("Error setting user data: ".concat(f));
      }
    });
  }), function(s) {
    return bn.apply(this, arguments);
  }) }, { key: "validateAudioLevelInterval", value: function(s) {
    if (s && (s < 100 || typeof s != "number")) throw new Error("The interval must be a number greater than or equal to 100 milliseconds.");
  } }, { key: "startLocalAudioLevelObserver", value: function(s) {
    var d = this;
    if (typeof AudioWorkletNode > "u" && !R()) throw new Error("startLocalAudioLevelObserver() is not supported on this browser");
    if (this.validateAudioLevelInterval(s), this._callMachineInitialized) return this._isLocalAudioLevelObserverRunning = !0, new Promise(function(l, f) {
      d.sendMessageToCallMachine({ action: "start-local-audio-level-observer", interval: s }, function(h) {
        d._isLocalAudioLevelObserverRunning = !h.error, h.error ? f({ error: h.error }) : l();
      });
    });
    this._preloadCache.localAudioLevelObserver = { enabled: !0, interval: s };
  } }, { key: "isLocalAudioLevelObserverRunning", value: function() {
    return this._isLocalAudioLevelObserverRunning;
  } }, { key: "stopLocalAudioLevelObserver", value: function() {
    this._preloadCache.localAudioLevelObserver = null, this._localAudioLevel = 0, this._isLocalAudioLevelObserverRunning = !1, this.sendMessageToCallMachine({ action: "stop-local-audio-level-observer" });
  } }, { key: "startRemoteParticipantsAudioLevelObserver", value: function(s) {
    var d = this;
    if (this.validateAudioLevelInterval(s), this._callMachineInitialized) return this._isRemoteParticipantsAudioLevelObserverRunning = !0, new Promise(function(l, f) {
      d.sendMessageToCallMachine({ action: "start-remote-participants-audio-level-observer", interval: s }, function(h) {
        d._isRemoteParticipantsAudioLevelObserverRunning = !h.error, h.error ? f({ error: h.error }) : l();
      });
    });
    this._preloadCache.remoteParticipantsAudioLevelObserver = { enabled: !0, interval: s };
  } }, { key: "isRemoteParticipantsAudioLevelObserverRunning", value: function() {
    return this._isRemoteParticipantsAudioLevelObserverRunning;
  } }, { key: "stopRemoteParticipantsAudioLevelObserver", value: function() {
    this._preloadCache.remoteParticipantsAudioLevelObserver = null, this._remoteParticipantsAudioLevel = {}, this._isRemoteParticipantsAudioLevelObserverRunning = !1, this.sendMessageToCallMachine({ action: "stop-remote-participants-audio-level-observer" });
  } }, { key: "startCamera", value: (_n = P(function* () {
    var s = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (le(this._callObjectMode, "startCamera()"), wr(this._callState, this._isPreparingToJoin, "startCamera()", "Did you mean to use setLocalAudio() and/or setLocalVideo() instead?"), this.needsLoad()) try {
      yield this.load(d);
    } catch (l) {
      return Promise.reject(l);
    }
    else {
      if (this._didPreAuth) {
        if (d.url && d.url !== this.properties.url) return console.error("url in startCamera() is different than the one used in preAuth()"), Promise.reject();
        if (d.token && d.token !== this.properties.token) return console.error("token in startCamera() is different than the one used in preAuth()"), Promise.reject();
      }
      this.validateProperties(d), this.properties = T(T({}, this.properties), d);
    }
    return new Promise(function(l) {
      s._preloadCache.inputSettings = s._prepInputSettingsForSharing(s._inputSettings, !1), s.sendMessageToCallMachine({ action: "start-camera", properties: et(s.properties, s.callClientId), preloadCache: et(s._preloadCache, s.callClientId) }, function(f) {
        l({ camera: f.camera, mic: f.mic, speaker: f.speaker });
      });
    });
  }), function() {
    return _n.apply(this, arguments);
  }) }, { key: "validateCustomTrack", value: function(s, d, l) {
    if (l && l.length > 50) throw new Error("Custom track `trackName` must not be more than 50 characters");
    if (d && d !== "music" && d !== "speech" && !(d instanceof Object)) throw new Error("Custom track `mode` must be either `music` | `speech` | `DailyMicAudioModeSettings` or `undefined`");
    if (l && ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo", "customVideoDefaults"].includes(l)) throw new Error("Custom track `trackName` must not match a track name already used by daily: cam-audio, cam-video, customVideoDefaults, screen-video, screen-audio, rmpAudio, rmpVideo");
    if (!(s instanceof MediaStreamTrack)) throw new Error("Custom tracks provided must be instances of MediaStreamTrack");
  } }, { key: "startCustomTrack", value: function() {
    var s = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { track, mode, trackName };
    return D(), J(this._callState, "startCustomTrack()"), this.validateCustomTrack(d.track, d.mode, d.trackName), new Promise(function(l, f) {
      s._sharedTracks.customTrack = d.track, d.track = Oe, s.sendMessageToCallMachine({ action: "start-custom-track", properties: d }, function(h) {
        h.error ? f({ error: h.error }) : l(h.mediaTag);
      });
    });
  } }, { key: "stopCustomTrack", value: function(s) {
    var d = this;
    return D(), J(this._callState, "stopCustomTrack()"), new Promise(function(l) {
      d.sendMessageToCallMachine({ action: "stop-custom-track", mediaTag: s }, function(f) {
        l(f.mediaTag);
      });
    });
  } }, { key: "setCamera", value: function(s) {
    var d = this;
    return ft(), Nt(this._callMachineInitialized, "setCamera()"), new Promise(function(l) {
      d.sendMessageToCallMachine({ action: "set-camera", cameraDeviceId: s }, function(f) {
        l({ device: f.device });
      });
    });
  } }, { key: "setAudioDevice", value: (yn = P(function* (s) {
    return ft(), this.nativeUtils().setAudioDevice(s), { deviceId: yield this.nativeUtils().getAudioDevice() };
  }), function(s) {
    return yn.apply(this, arguments);
  }) }, { key: "cycleCamera", value: function() {
    var s = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return new Promise(function(l) {
      s.sendMessageToCallMachine({ action: "cycle-camera", properties: d }, function(f) {
        l({ device: f.device });
      });
    });
  } }, { key: "cycleMic", value: function() {
    var s = this;
    return D(), new Promise(function(d) {
      s.sendMessageToCallMachine({ action: "cycle-mic" }, function(l) {
        d({ device: l.device });
      });
    });
  } }, { key: "getCameraFacingMode", value: function() {
    var s = this;
    return ft(), new Promise(function(d) {
      s.sendMessageToCallMachine({ action: "get-camera-facing-mode" }, function(l) {
        d(l.facingMode);
      });
    });
  } }, { key: "setInputDevicesAsync", value: (ut = P(function* (s) {
    var d = this, l = s.audioDeviceId, f = s.videoDeviceId, h = s.audioSource, v = s.videoSource;
    if (D(), h !== void 0 && (l = h), v !== void 0 && (f = v), typeof l == "boolean" && (this._setAllowLocalAudio(l), l = void 0), typeof f == "boolean" && (this._setAllowLocalVideo(f), f = void 0), !l && !f) return yield this.getInputDevices();
    var S = {};
    return l && (l instanceof MediaStreamTrack ? (this._sharedTracks.audioTrack = l, l = Oe, S.audio = { settings: { customTrack: l } }) : (delete this._sharedTracks.audioTrack, S.audio = { settings: { deviceId: l } })), f && (f instanceof MediaStreamTrack ? (this._sharedTracks.videoTrack = f, f = Oe, S.video = { settings: { customTrack: f } }) : (delete this._sharedTracks.videoTrack, S.video = { settings: { deviceId: f } })), this._callObjectMode && this.needsLoad() ? (this._updatePreloadCacheInputSettings(S, !1), this._devicesFromInputSettings(this._inputSettings)) : new Promise(function(k) {
      d.sendMessageToCallMachine({ action: "set-input-devices", audioDeviceId: l, videoDeviceId: f }, function(A) {
        if (delete A.action, delete A.callbackStamp, A.returnPreloadCache) return d._updatePreloadCacheInputSettings(S, !1), void k(d._devicesFromInputSettings(d._inputSettings));
        k(A);
      });
    });
  }), function(s) {
    return ut.apply(this, arguments);
  }) }, { key: "setOutputDeviceAsync", value: ($e = P(function* (s) {
    var d = this, l = s.outputDeviceId;
    return D(), l && (this._preloadCache.outputDeviceId = l), this._callObjectMode && this.needsLoad() ? this._devicesFromInputSettings(this._inputSettings) : new Promise(function(f) {
      d.sendMessageToCallMachine({ action: "set-output-device", outputDeviceId: l }, function(h) {
        delete h.action, delete h.callbackStamp, h.returnPreloadCache ? f(d._devicesFromInputSettings(d._inputSettings)) : f(h);
      });
    });
  }), function(s) {
    return $e.apply(this, arguments);
  }) }, { key: "getInputDevices", value: (ge = P(function* () {
    var s = this;
    return this._callObjectMode && this.needsLoad() ? this._devicesFromInputSettings(this._inputSettings) : new Promise(function(d) {
      s.sendMessageToCallMachine({ action: "get-input-devices" }, function(l) {
        l.returnPreloadCache ? d(s._devicesFromInputSettings(s._inputSettings)) : d({ camera: l.camera, mic: l.mic, speaker: l.speaker });
      });
    });
  }), function() {
    return ge.apply(this, arguments);
  }) }, { key: "nativeInCallAudioMode", value: function() {
    return ft(), this._nativeInCallAudioMode;
  } }, { key: "setNativeInCallAudioMode", value: function(s) {
    if (ft(), [as, Nl].includes(s)) {
      if (s !== this._nativeInCallAudioMode) return this._nativeInCallAudioMode = s, !this.disableReactNativeAutoDeviceManagement("audio") && Vt(this._callState, this._isPreparingToJoin) && this.nativeUtils().setAudioMode(this._nativeInCallAudioMode), this;
    } else console.error("invalid in-call audio mode specified: ", s);
  } }, { key: "preAuth", value: (ie = P(function* () {
    var s = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (le(this._callObjectMode, "preAuth()"), wr(this._callState, this._isPreparingToJoin, "preAuth()"), this.needsLoad() && (yield this.load(d)), !d.url) throw new Error("preAuth() requires at least a url to be provided");
    return this.validateProperties(d), this.properties = T(T({}, this.properties), d), new Promise(function(l, f) {
      s._preloadCache.inputSettings = s._prepInputSettingsForSharing(s._inputSettings, !1), s.sendMessageToCallMachine({ action: "daily-method-preauth", properties: et(s.properties, s.callClientId), preloadCache: et(s._preloadCache, s.callClientId) }, function(h) {
        return h.error ? f(h.error) : h.access ? (s._didPreAuth = !0, void l({ access: h.access })) : f(new Error("unknown error in preAuth()"));
      });
    });
  }), function() {
    return ie.apply(this, arguments);
  }) }, { key: "load", value: (ae = P(function* (s) {
    var d = this;
    if (this.needsLoad()) {
      if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
      if (s && (this.validateProperties(s), this.properties = T(T({}, this.properties), s)), !this._callObjectMode && !this.properties.url) throw new Error("can't load iframe meeting because url property isn't set");
      return this._updateCallState(qi), this.emitDailyJSEvent({ action: Ws }), this._callObjectMode ? new Promise(function(l, f) {
        d._callObjectLoader.cancel();
        var h = Date.now();
        d._callObjectLoader.load(d.properties.dailyConfig, function(v) {
          d._bundleLoadTime = v ? "no-op" : Date.now() - h, d._updateCallState($i), v && d.emitDailyJSEvent({ action: Ur }), l();
        }, function(v, S) {
          if (d.emitDailyJSEvent({ action: Hs }), !S) {
            d._updateCallState(ke), d.resetMeetingDependentVars();
            var k = { action: Wr, errorMsg: v.msg, error: { type: "connection-error", msg: "Failed to load call object bundle.", details: { on: "load", sourceError: v, bundleUrl: Bt(d.properties.dailyConfig) } } };
            d._maybeSendToSentry(k), d.emitDailyJSEvent(k), f(v.msg);
          }
        });
      }) : (this._iframe.src = Cs(this.assembleMeetingUrl(), this.properties.dailyConfig), new Promise(function(l, f) {
        d._loadedCallback = function(h) {
          d._callState !== ke ? (d._updateCallState($i), (d.properties.cssFile || d.properties.cssText) && d.loadCss(d.properties), l()) : f(h);
        };
      }));
    }
  }), function(s) {
    return ae.apply(this, arguments);
  }) }, { key: "join", value: (Y = P(function* () {
    var s = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this._testCallInProgress && this.stopTestCallQuality();
    var l = !1;
    if (this.needsLoad()) {
      this.updateIsPreparingToJoin(!0);
      try {
        yield this.load(d);
      } catch (f) {
        return this.updateIsPreparingToJoin(!1), Promise.reject(f);
      }
    } else {
      if (l = !(!this.properties.cssFile && !this.properties.cssText), this._didPreAuth) {
        if (d.url && d.url !== this.properties.url) return console.error("url in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject();
        if (d.token && d.token !== this.properties.token) return console.error("token in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject();
      }
      if (d.url && !this._callObjectMode && d.url && d.url !== this.properties.url) return console.error("url in join() is different than the one used in load() (".concat(this.properties.url, " -> ").concat(d.url, ")")), this.updateIsPreparingToJoin(!1), Promise.reject();
      this.validateProperties(d), this.properties = T(T({}, this.properties), d);
    }
    return d.showLocalVideo !== void 0 && (this._callObjectMode ? console.error("showLocalVideo is not available in callObject mode") : this._showLocalVideo = !!d.showLocalVideo), d.showParticipantsBar !== void 0 && (this._callObjectMode ? console.error("showParticipantsBar is not available in callObject mode") : this._showParticipantsBar = !!d.showParticipantsBar), this._callState === Ne || this._callState === Qt ? (console.warn("already joined meeting, call leave() before joining again"), void this.updateIsPreparingToJoin(!1)) : (this._updateCallState(Qt, !1), this.emitDailyJSEvent({ action: Ks }), this._preloadCache.inputSettings = this._prepInputSettingsForSharing(this._inputSettings || {}, !1), this.sendMessageToCallMachine({ action: "join-meeting", properties: et(this.properties, this.callClientId), preloadCache: et(this._preloadCache, this.callClientId) }), new Promise(function(f, h) {
      s._joinedCallback = function(v, S) {
        if (s._callState !== ke) {
          if (s._updateCallState(Ne), v) for (var k in v) {
            if (s._callObjectMode) {
              var A = s._callMachine().store;
              Zi(v[k], A), es(v[k], A), ts(v[k], s._participants[k], A);
            }
            s._participants[k] = T({}, v[k]), s.toggleParticipantAudioBasedOnNativeAudioFocus();
          }
          l && s.loadCss(s.properties), f(v);
        } else h(S);
      };
    }));
  }), function() {
    return Y.apply(this, arguments);
  }) }, { key: "leave", value: (H = P(function* () {
    var s = this;
    return this._testCallInProgress && this.stopTestCallQuality(), new Promise(function(d) {
      s._callState === Ie || s._callState === ke ? d() : s._callObjectLoader && !s._callObjectLoader.loaded ? (s._callObjectLoader.cancel(), s._updateCallState(Ie), s.resetMeetingDependentVars(), s.emitDailyJSEvent({ action: Ie }), d()) : (s._resolveLeave = d, s.sendMessageToCallMachine({ action: "leave-meeting" }));
    });
  }), function() {
    return H.apply(this, arguments);
  }) }, { key: "startScreenShare", value: (x = P(function* () {
    var s = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Nt(this._callMachineInitialized, "startScreenShare()"), d.screenVideoSendSettings && this._validateVideoSendSettings("screenVideo", d.screenVideoSendSettings), d.mediaStream && (this._sharedTracks.screenMediaStream = d.mediaStream, d.mediaStream = Oe), typeof DailyNativeUtils < "u" && DailyNativeUtils.isIOS !== void 0 && DailyNativeUtils.isIOS) {
      var l = this.nativeUtils();
      if (yield l.isScreenBeingCaptured()) return void this.emitDailyJSEvent({ action: Yr, type: "screen-share-error", errorMsg: "Could not start the screen sharing. The screen is already been captured!" });
      l.setSystemScreenCaptureStartCallback(function() {
        l.setSystemScreenCaptureStartCallback(null), s.sendMessageToCallMachine({ action: Ui, captureOptions: d });
      }), l.presentSystemScreenCapturePrompt();
    } else this.sendMessageToCallMachine({ action: Ui, captureOptions: d });
  }), function() {
    return x.apply(this, arguments);
  }) }, { key: "stopScreenShare", value: function() {
    Nt(this._callMachineInitialized, "stopScreenShare()"), this.sendMessageToCallMachine({ action: "local-screen-stop" });
  } }, { key: "startRecording", value: function() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = s.type;
    if (d && d !== "cloud" && d !== "raw-tracks" && d !== "local") throw new Error("invalid type: ".concat(d, ", allowed values 'cloud', 'raw-tracks', or 'local'"));
    this.sendMessageToCallMachine(T({ action: "local-recording-start" }, s));
  } }, { key: "updateRecording", value: function(s) {
    var d = s.layout, l = d === void 0 ? { preset: "default" } : d, f = s.instanceId;
    this.sendMessageToCallMachine({ action: "daily-method-update-recording", layout: l, instanceId: f });
  } }, { key: "stopRecording", value: function() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.sendMessageToCallMachine(T({ action: "local-recording-stop" }, s));
  } }, { key: "startLiveStreaming", value: function() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.sendMessageToCallMachine(T({ action: "daily-method-start-live-streaming" }, s));
  } }, { key: "updateLiveStreaming", value: function(s) {
    var d = s.layout, l = d === void 0 ? { preset: "default" } : d, f = s.instanceId;
    this.sendMessageToCallMachine({ action: "daily-method-update-live-streaming", layout: l, instanceId: f });
  } }, { key: "addLiveStreamingEndpoints", value: function(s) {
    var d = s.endpoints, l = s.instanceId;
    this.sendMessageToCallMachine({ action: Bi, endpointsOp: al, endpoints: d, instanceId: l });
  } }, { key: "removeLiveStreamingEndpoints", value: function(s) {
    var d = s.endpoints, l = s.instanceId;
    this.sendMessageToCallMachine({ action: Bi, endpointsOp: cl, endpoints: d, instanceId: l });
  } }, { key: "stopLiveStreaming", value: function() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.sendMessageToCallMachine(T({ action: "daily-method-stop-live-streaming" }, s));
  } }, { key: "validateDailyConfig", value: function(s) {
    s.camSimulcastEncodings && (console.warn("camSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide camera simulcast settings."), this.validateSimulcastEncodings(s.camSimulcastEncodings)), s.screenSimulcastEncodings && console.warn("screenSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide screen simulcast settings."), Jo() && s.noAutoDefaultDeviceChange && console.warn("noAutoDefaultDeviceChange is not supported on Android, and will be ignored.");
  } }, { key: "validateSimulcastEncodings", value: function(s) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, l = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    if (s) {
      if (!(s instanceof Array || Array.isArray(s))) throw new Error("encodings must be an Array");
      if (!ms(s.length, 1, 3)) throw new Error("encodings must be an Array with between 1 to ".concat(3, " layers"));
      for (var f = 0; f < s.length; f++) {
        var h = s[f];
        for (var v in this._validateEncodingLayerHasValidProperties(h), h) if (br.includes(v)) {
          if (typeof h[v] != "number") throw new Error("".concat(v, " must be a number"));
          if (d) {
            var S = d[v], k = S.min, A = S.max;
            if (!ms(h[v], k, A)) throw new Error("".concat(v, " value not in range. valid range: ").concat(k, " to ").concat(A));
          }
        } else if (!["active", "scalabilityMode"].includes(v)) throw new Error("Invalid key ".concat(v, ", valid keys are:") + Object.values(br));
        if (l && !h.hasOwnProperty("maxBitrate")) throw new Error("maxBitrate is not specified");
      }
    }
  } }, { key: "startRemoteMediaPlayer", value: (j = P(function* (s) {
    var d = this, l = s.url, f = s.settings, h = f === void 0 ? { state: Hr.PLAY } : f;
    try {
      (function(v) {
        if (typeof v != "string") throw new Error('url parameter must be "string" type');
      })(l), fs(h), function(v) {
        for (var S in v) if (!us.includes(S)) throw new Error("Invalid key ".concat(S, ", valid keys are: ").concat(us));
        v.simulcastEncodings && this.validateSimulcastEncodings(v.simulcastEncodings, zo, !0);
      }(h);
    } catch (v) {
      throw console.error("invalid argument Error: ".concat(v)), console.error(`startRemoteMediaPlayer arguments must be of the form:
  { url: "playback url",
  settings?:
  {state: "play"|"pause", simulcastEncodings?: [{}] } }`), v;
    }
    return new Promise(function(v, S) {
      d.sendMessageToCallMachine({ action: "daily-method-start-remote-media-player", url: l, settings: h }, function(k) {
        k.error ? S({ error: k.error, errorMsg: k.errorMsg }) : v({ session_id: k.session_id, remoteMediaPlayerState: { state: k.state, settings: k.settings } });
      });
    });
  }), function(s) {
    return j.apply(this, arguments);
  }) }, { key: "stopRemoteMediaPlayer", value: (O = P(function* (s) {
    var d = this;
    if (typeof s != "string") throw new Error(" remotePlayerID must be of type string");
    return new Promise(function(l, f) {
      d.sendMessageToCallMachine({ action: "daily-method-stop-remote-media-player", session_id: s }, function(h) {
        h.error ? f({ error: h.error, errorMsg: h.errorMsg }) : l();
      });
    });
  }), function(s) {
    return O.apply(this, arguments);
  }) }, { key: "updateRemoteMediaPlayer", value: (C = P(function* (s) {
    var d = this, l = s.session_id, f = s.settings;
    try {
      fs(f);
    } catch (h) {
      throw console.error("invalid argument Error: ".concat(h)), console.error(`updateRemoteMediaPlayer arguments must be of the form:
  session_id: "participant session",
  { settings?: {state: "play"|"pause"} }`), h;
    }
    return new Promise(function(h, v) {
      d.sendMessageToCallMachine({ action: "daily-method-update-remote-media-player", session_id: l, settings: f }, function(S) {
        S.error ? v({ error: S.error, errorMsg: S.errorMsg }) : h({ session_id: S.session_id, remoteMediaPlayerState: { state: S.state, settings: S.settings } });
      });
    });
  }), function(s) {
    return C.apply(this, arguments);
  }) }, { key: "startTranscription", value: function(s) {
    J(this._callState, "startTranscription()"), this.sendMessageToCallMachine(T({ action: "daily-method-start-transcription" }, s));
  } }, { key: "updateTranscription", value: function(s) {
    if (J(this._callState, "updateTranscription()"), !s) throw new Error("updateTranscription Error: options is mandatory");
    if ($(s) !== "object") throw new Error("updateTranscription Error: options must be object type");
    if (s.participants && !Array.isArray(s.participants)) throw new Error("updateTranscription Error: participants must be an array");
    this.sendMessageToCallMachine(T({ action: "daily-method-update-transcription" }, s));
  } }, { key: "stopTranscription", value: function(s) {
    if (J(this._callState, "stopTranscription()"), s && $(s) !== "object") throw new Error("stopTranscription Error: options must be object type");
    if (s && !s.instanceId) throw new Error('"instanceId" not provided');
    this.sendMessageToCallMachine(T({ action: "daily-method-stop-transcription" }, s));
  } }, { key: "startDialOut", value: (E = P(function* (s) {
    var d = this;
    J(this._callState, "startDialOut()");
    var l = function(f) {
      if (f) {
        if (!Array.isArray(f)) throw new Error("Error starting dial out: audio codec must be an array");
        if (f.length <= 0) throw new Error("Error starting dial out: audio codec array specified but empty");
        f.forEach(function(h) {
          if (typeof h != "string") throw new Error("Error starting dial out: audio codec must be a string");
          if (h !== "OPUS" && h !== "PCMU" && h !== "PCMA" && h !== "G722") throw new Error("Error starting dial out: audio codec must be one of OPUS, PCMU, PCMA, G722");
        });
      }
    };
    if (!s.sipUri && !s.phoneNumber) throw new Error("Error starting dial out: either a sip uri or phone number must be provided");
    if (s.sipUri && s.phoneNumber) throw new Error("Error starting dial out: only one of sip uri or phone number must be provided");
    if (s.sipUri) {
      if (typeof s.sipUri != "string") throw new Error("Error starting dial out: sipUri must be a string");
      if (!s.sipUri.startsWith("sip:")) throw new Error("Error starting dial out: Invalid SIP URI, must start with 'sip:'");
      if (s.video && typeof s.video != "boolean") throw new Error("Error starting dial out: video must be a boolean value");
      (function(f) {
        if (f && (l(f.audio), f.video)) {
          if (!Array.isArray(f.video)) throw new Error("Error starting dial out: video codec must be an array");
          if (f.video.length <= 0) throw new Error("Error starting dial out: video codec array specified but empty");
          f.video.forEach(function(h) {
            if (typeof h != "string") throw new Error("Error starting dial out: video codec must be a string");
            if (h !== "H264" && h !== "VP8") throw new Error("Error starting dial out: video codec must be H264 or VP8");
          });
        }
      })(s.codecs);
    }
    if (s.phoneNumber) {
      if (typeof s.phoneNumber != "string") throw new Error("Error starting dial out: phoneNumber must be a string");
      if (!/^\+\d{1,}$/.test(s.phoneNumber)) throw new Error("Error starting dial out: Invalid phone number, must be valid phone number as per E.164");
      s.codecs && l(s.codecs.audio);
    }
    if (s.callerId) {
      if (typeof s.callerId != "string") throw new Error("Error starting dial out: callerId must be a string");
      if (s.sipUri) throw new Error("Error starting dial out: callerId not allowed with sipUri");
    }
    if (s.displayName) {
      if (typeof s.displayName != "string") throw new Error("Error starting dial out: displayName must be a string");
      if (s.displayName.length >= 200) throw new Error("Error starting dial out: displayName length must be less than 200");
    }
    if (s.userId) {
      if (typeof s.userId != "string") throw new Error("Error starting dial out: userId must be a string");
      if (s.userId.length > 36) throw new Error("Error starting dial out: userId length must be less than or equal to 36");
    }
    return new Promise(function(f, h) {
      d.sendMessageToCallMachine(T({ action: "dialout-start" }, s), function(v) {
        v.error ? h(v.error) : f(v);
      });
    });
  }), function(s) {
    return E.apply(this, arguments);
  }) }, { key: "stopDialOut", value: function(s) {
    var d = this;
    return J(this._callState, "stopDialOut()"), new Promise(function(l, f) {
      d.sendMessageToCallMachine(T({ action: "dialout-stop" }, s), function(h) {
        h.error ? f(h.error) : l(h);
      });
    });
  } }, { key: "sipCallTransfer", value: (y = P(function* (s) {
    var d = this;
    if (J(this._callState, "sipCallTransfer()"), !s) throw new Error("sipCallTransfer() requires a sessionId and toEndPoint");
    return s.useSipRefer = !1, hs(s, "sipCallTransfer"), new Promise(function(l, f) {
      d.sendMessageToCallMachine(T({ action: Ji }, s), function(h) {
        h.error ? f(h.error) : l(h);
      });
    });
  }), function(s) {
    return y.apply(this, arguments);
  }) }, { key: "sipRefer", value: (w = P(function* (s) {
    var d = this;
    if (J(this._callState, "sipRefer()"), !s) throw new Error("sessionId and toEndPoint are mandatory parameter");
    return s.useSipRefer = !0, hs(s, "sipRefer"), new Promise(function(l, f) {
      d.sendMessageToCallMachine(T({ action: Ji }, s), function(h) {
        h.error ? f(h.error) : l(h);
      });
    });
  }), function(s) {
    return w.apply(this, arguments);
  }) }, { key: "sendDTMF", value: (_ = P(function* (s) {
    var d = this;
    return J(this._callState, "sendDTMF()"), function(l) {
      var f = l.sessionId, h = l.tones;
      if (!f || !h) throw new Error("sessionId and tones are mandatory parameter");
      if (typeof f != "string" || typeof h != "string") throw new Error("sessionId and tones should be of string type");
      if (h.length > 20) throw new Error("tones string must be upto 20 characters");
      var v = /[^0-9A-D*#]/g, S = h.match(v);
      if (S && S[0]) throw new Error("".concat(S[0], " is not valid DTMF tone"));
    }(s), new Promise(function(l, f) {
      d.sendMessageToCallMachine(T({ action: "send-dtmf" }, s), function(h) {
        h.error ? f(h.error) : l(h);
      });
    });
  }), function(s) {
    return _.apply(this, arguments);
  }) }, { key: "getNetworkStats", value: function() {
    var s = this;
    return this._callState !== Ne ? { stats: { latest: {} } } : new Promise(function(d) {
      s.sendMessageToCallMachine({ action: "get-calc-stats" }, function(l) {
        d(T({ stats: l.stats }, s._network));
      });
    });
  } }, { key: "testWebsocketConnectivity", value: (g = P(function* () {
    var s = this;
    if (Sr(this._testCallInProgress, "testWebsocketConnectivity()"), this.needsLoad()) try {
      yield this.load();
    } catch (d) {
      return Promise.reject(d);
    }
    return new Promise(function(d, l) {
      s.sendMessageToCallMachine({ action: "test-websocket-connectivity" }, function(f) {
        f.error ? l(f.error) : d(f.results);
      });
    });
  }), function() {
    return g.apply(this, arguments);
  }) }, { key: "abortTestWebsocketConnectivity", value: function() {
    this.sendMessageToCallMachine({ action: "abort-test-websocket-connectivity" });
  } }, { key: "_validateVideoTrackForNetworkTests", value: function(s) {
    return s ? s instanceof MediaStreamTrack ? !!Ll(s) || (console.error("Video track is not playable. This test needs a live video track."), !1) : (console.error("Video track needs to be of type `MediaStreamTrack`."), !1) : (console.error("Missing video track. You must provide a video track in order to run this test."), !1);
  } }, { key: "testCallQuality", value: (m = P(function* () {
    var s = this;
    D(), le(this._callObjectMode, "testCallQuality()"), Nt(this._callMachineInitialized, "testCallQuality()", null, !0), wr(this._callState, this._isPreparingToJoin, "testCallQuality()");
    var d = this._testCallAlreadyInProgress, l = function(h) {
      d || (s._testCallInProgress = h);
    };
    if (l(!0), this.needsLoad()) try {
      var f = this._callState;
      yield this.load(), this._callState = f;
    } catch (h) {
      return l(!1), Promise.reject(h);
    }
    return new Promise(function(h) {
      s.sendMessageToCallMachine({ action: "test-call-quality", dailyJsVersion: s.properties.dailyJsVersion }, function(v) {
        var S = v.results, k = S.result, A = Pn(S, Il);
        if (k === "failed") {
          var q, N = T({}, A);
          (q = A.error) !== null && q !== void 0 && q.details ? (A.error.details = JSON.parse(A.error.details), N.error = T(T({}, N.error), {}, { details: T({}, N.error.details) }), N.error.details.duringTest = "testCallQuality") : (N.error = N.error ? T({}, N.error) : {}, N.error.details = { duringTest: "testCallQuality" }), s._maybeSendToSentry(N);
        }
        l(!1), h(T({ result: k }, A));
      });
    });
  }), function() {
    return m.apply(this, arguments);
  }) }, { key: "stopTestCallQuality", value: function() {
    this.sendMessageToCallMachine({ action: "stop-test-call-quality" });
  } }, { key: "testConnectionQuality", value: (p = P(function* (s) {
    var d;
    R() ? (console.warn("testConnectionQuality() is deprecated: use testPeerToPeerCallQuality() instead"), d = yield this.testPeerToPeerCallQuality(s)) : (console.warn("testConnectionQuality() is deprecated: use testCallQuality() instead"), d = yield this.testCallQuality());
    var l = { result: d.result, secondsElapsed: d.secondsElapsed };
    return d.data && (l.data = { maxRTT: d.data.maxRoundTripTime, packetLoss: d.data.avgRecvPacketLoss }), l;
  }), function(s) {
    return p.apply(this, arguments);
  }) }, { key: "testPeerToPeerCallQuality", value: (c = P(function* (s) {
    var d = this;
    if (Sr(this._testCallInProgress, "testPeerToPeerCallQuality()"), this.needsLoad()) try {
      yield this.load();
    } catch (h) {
      return Promise.reject(h);
    }
    var l = s.videoTrack, f = s.duration;
    if (!this._validateVideoTrackForNetworkTests(l)) throw new Error("Video track error");
    return this._sharedTracks.videoTrackForConnectionQualityTest = l, new Promise(function(h, v) {
      d.sendMessageToCallMachine({ action: "test-p2p-call-quality", duration: f }, function(S) {
        S.error ? v(S.error) : h(S.results);
      });
    });
  }), function(s) {
    return c.apply(this, arguments);
  }) }, { key: "stopTestConnectionQuality", value: function() {
    R() ? (console.warn("stopTestConnectionQuality() is deprecated: use testPeerToPeerCallQuality() and stopTestPeerToPeerCallQuality() instead"), this.stopTestPeerToPeerCallQuality()) : (console.warn("stopTestConnectionQuality() is deprecated: use testCallQuality() and stopTestCallQuality() instead"), this.stopTestCallQuality());
  } }, { key: "stopTestPeerToPeerCallQuality", value: function() {
    this.sendMessageToCallMachine({ action: "stop-test-p2p-call-quality" });
  } }, { key: "testNetworkConnectivity", value: (u = P(function* (s) {
    var d = this;
    if (Sr(this._testCallInProgress, "testNetworkConnectivity()"), this.needsLoad()) try {
      yield this.load();
    } catch (l) {
      return Promise.reject(l);
    }
    if (!this._validateVideoTrackForNetworkTests(s)) throw new Error("Video track error");
    return this._sharedTracks.videoTrackForNetworkConnectivityTest = s, new Promise(function(l, f) {
      d.sendMessageToCallMachine({ action: "test-network-connectivity" }, function(h) {
        h.error ? f(h.error) : l(h.results);
      });
    });
  }), function(s) {
    return u.apply(this, arguments);
  }) }, { key: "abortTestNetworkConnectivity", value: function() {
    this.sendMessageToCallMachine({ action: "abort-test-network-connectivity" });
  } }, { key: "getCpuLoadStats", value: function() {
    var s = this;
    return new Promise(function(d) {
      s._callState === Ne ? s.sendMessageToCallMachine({ action: "get-cpu-load-stats" }, function(l) {
        d(l.cpuStats);
      }) : d({ cpuLoadState: void 0, cpuLoadStateReason: void 0, stats: {} });
    });
  } }, { key: "_validateEncodingLayerHasValidProperties", value: function(s) {
    var d;
    if (!(((d = Object.keys(s)) === null || d === void 0 ? void 0 : d.length) > 0)) throw new Error("Empty encoding is not allowed. At least one of these valid keys should be specified:" + Object.values(br));
  } }, { key: "_validateVideoSendSettings", value: function(s, d) {
    var l = s === "screenVideo" ? ["default-screen-video", "detail-optimized", "motion-optimized", "motion-and-detail-balanced"] : ["default-video", "bandwidth-optimized", "bandwidth-and-quality-balanced", "quality-optimized", "adaptive-2-layers", "adaptive-3-layers"], f = "Video send settings should be either an object or one of the supported presets: ".concat(l.join());
    if (typeof d == "string") {
      if (!l.includes(d)) throw new Error(f);
    } else {
      if ($(d) !== "object") throw new Error(f);
      if (!d.maxQuality && !d.encodings && d.allowAdaptiveLayers === void 0) throw new Error("Video send settings must contain at least maxQuality, allowAdaptiveLayers or encodings attribute");
      if (d.maxQuality && ["low", "medium", "high"].indexOf(d.maxQuality) === -1) throw new Error("maxQuality must be either low, medium or high");
      if (d.encodings) {
        var h = !1;
        switch (Object.keys(d.encodings).length) {
          case 1:
            h = !d.encodings.low;
            break;
          case 2:
            h = !d.encodings.low || !d.encodings.medium;
            break;
          case 3:
            h = !d.encodings.low || !d.encodings.medium || !d.encodings.high;
            break;
          default:
            h = !0;
        }
        if (h) throw new Error("Encodings must be defined as: low, low and medium, or low, medium and high.");
        d.encodings.low && this._validateEncodingLayerHasValidProperties(d.encodings.low), d.encodings.medium && this._validateEncodingLayerHasValidProperties(d.encodings.medium), d.encodings.high && this._validateEncodingLayerHasValidProperties(d.encodings.high);
      }
    }
  } }, { key: "validateUpdateSendSettings", value: function(s) {
    var d = this;
    if (!s || Object.keys(s).length === 0) throw new Error("Send settings must contain at least information for one track!");
    Object.entries(s).forEach(function(l) {
      var f = Se(l, 2), h = f[0], v = f[1];
      d._validateVideoSendSettings(h, v);
    });
  } }, { key: "updateSendSettings", value: function(s) {
    var d = this;
    return this.validateUpdateSendSettings(s), this.needsLoad() ? (this._preloadCache.sendSettings = s, { sendSettings: this._preloadCache.sendSettings }) : new Promise(function(l, f) {
      d.sendMessageToCallMachine({ action: "update-send-settings", sendSettings: s }, function(h) {
        h.error ? f(h.error) : l(h.sendSettings);
      });
    });
  } }, { key: "getSendSettings", value: function() {
    return this._sendSettings || this._preloadCache.sendSettings;
  } }, { key: "getLocalAudioLevel", value: function() {
    return this._localAudioLevel;
  } }, { key: "getRemoteParticipantsAudioLevel", value: function() {
    return this._remoteParticipantsAudioLevel;
  } }, { key: "getActiveSpeaker", value: function() {
    return D(), this._activeSpeaker;
  } }, { key: "setActiveSpeakerMode", value: function(s) {
    return D(), this.sendMessageToCallMachine({ action: "set-active-speaker-mode", enabled: s }), this;
  } }, { key: "activeSpeakerMode", value: function() {
    return D(), this._activeSpeakerMode;
  } }, { key: "subscribeToTracksAutomatically", value: function() {
    return this._preloadCache.subscribeToTracksAutomatically;
  } }, { key: "setSubscribeToTracksAutomatically", value: function(s) {
    return J(this._callState, "setSubscribeToTracksAutomatically()", "Use the subscribeToTracksAutomatically configuration property."), this._preloadCache.subscribeToTracksAutomatically = s, this.sendMessageToCallMachine({ action: "daily-method-subscribe-to-tracks-automatically", enabled: s }), this;
  } }, { key: "enumerateDevices", value: (a = P(function* () {
    var s = this;
    if (this._callObjectMode) {
      var d = yield navigator.mediaDevices.enumerateDevices();
      return Ze() === "Firefox" && Kt().major > 115 && Kt().major < 123 && (d = d.filter(function(l) {
        return l.kind !== "audiooutput";
      })), { devices: d.map(function(l) {
        var f = JSON.parse(JSON.stringify(l));
        if (!R() && l.kind === "videoinput" && l.getCapabilities) {
          var h, v = l.getCapabilities();
          f.facing = (v == null || (h = v.facingMode) === null || h === void 0 ? void 0 : h.length) >= 1 ? v.facingMode[0] : void 0;
        }
        return f;
      }) };
    }
    return new Promise(function(l) {
      s.sendMessageToCallMachine({ action: "enumerate-devices" }, function(f) {
        l({ devices: f.devices });
      });
    });
  }), function() {
    return a.apply(this, arguments);
  }) }, { key: "sendAppMessage", value: function(s) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "*";
    if (J(this._callState, "sendAppMessage()"), JSON.stringify(s).length > this._maxAppMessageSize) throw new Error("Message data too large. Max size is " + this._maxAppMessageSize);
    return this.sendMessageToCallMachine({ action: "app-msg", data: s, to: d }), this;
  } }, { key: "addFakeParticipant", value: function(s) {
    return D(), J(this._callState, "addFakeParticipant()"), this.sendMessageToCallMachine(T({ action: "add-fake-participant" }, s)), this;
  } }, { key: "setShowNamesMode", value: function(s) {
    return re(this._callObjectMode, "setShowNamesMode()"), D(), s && s !== "always" && s !== "never" ? (console.error('setShowNamesMode argument should be "always", "never", or false'), this) : (this.sendMessageToCallMachine({ action: "set-show-names", mode: s }), this);
  } }, { key: "setShowLocalVideo", value: function() {
    var s = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
    return re(this._callObjectMode, "setShowLocalVideo()"), D(), J(this._callState, "setShowLocalVideo()"), typeof s != "boolean" ? (console.error("setShowLocalVideo only accepts a boolean value"), this) : (this.sendMessageToCallMachine({ action: "set-show-local-video", show: s }), this._showLocalVideo = s, this);
  } }, { key: "showLocalVideo", value: function() {
    return re(this._callObjectMode, "showLocalVideo()"), D(), this._showLocalVideo;
  } }, { key: "setShowParticipantsBar", value: function() {
    var s = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
    return re(this._callObjectMode, "setShowParticipantsBar()"), D(), J(this._callState, "setShowParticipantsBar()"), typeof s != "boolean" ? (console.error("setShowParticipantsBar only accepts a boolean value"), this) : (this.sendMessageToCallMachine({ action: "set-show-participants-bar", show: s }), this._showParticipantsBar = s, this);
  } }, { key: "showParticipantsBar", value: function() {
    return re(this._callObjectMode, "showParticipantsBar()"), D(), this._showParticipantsBar;
  } }, { key: "customIntegrations", value: function() {
    return D(), re(this._callObjectMode, "customIntegrations()"), this._customIntegrations;
  } }, { key: "setCustomIntegrations", value: function(s) {
    return D(), re(this._callObjectMode, "setCustomIntegrations()"), J(this._callState, "setCustomIntegrations()"), na(s) ? (this.sendMessageToCallMachine({ action: "set-custom-integrations", integrations: s }), this._customIntegrations = s, this) : this;
  } }, { key: "startCustomIntegrations", value: function(s) {
    var d = this;
    if (D(), re(this._callObjectMode, "startCustomIntegrations()"), J(this._callState, "startCustomIntegrations()"), Array.isArray(s) && s.some(function(h) {
      return typeof h != "string";
    }) || !Array.isArray(s) && typeof s != "string") return console.error("startCustomIntegrations() only accepts string | string[]"), this;
    var l = typeof s == "string" ? [s] : s, f = l.filter(function(h) {
      return !(h in d._customIntegrations);
    });
    return f.length ? (console.error(`Can't find custom integration(s): "`.concat(f.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "start-custom-integrations", ids: l }), this);
  } }, { key: "stopCustomIntegrations", value: function(s) {
    var d = this;
    if (D(), re(this._callObjectMode, "stopCustomIntegrations()"), J(this._callState, "stopCustomIntegrations()"), Array.isArray(s) && s.some(function(h) {
      return typeof h != "string";
    }) || !Array.isArray(s) && typeof s != "string") return console.error("stopCustomIntegrations() only accepts string | string[]"), this;
    var l = typeof s == "string" ? [s] : s, f = l.filter(function(h) {
      return !(h in d._customIntegrations);
    });
    return f.length ? (console.error(`Can't find custom integration(s): "`.concat(f.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "stop-custom-integrations", ids: l }), this);
  } }, { key: "customTrayButtons", value: function() {
    return re(this._callObjectMode, "customTrayButtons()"), D(), this._customTrayButtons;
  } }, { key: "updateCustomTrayButtons", value: function(s) {
    return re(this._callObjectMode, "updateCustomTrayButtons()"), D(), J(this._callState, "updateCustomTrayButtons()"), ra(s) ? (this.sendMessageToCallMachine({ action: "update-custom-tray-buttons", btns: s }), this._customTrayButtons = s, this) : (console.error("updateCustomTrayButtons only accepts a dictionary of the type ".concat(JSON.stringify(Zt))), this);
  } }, { key: "theme", value: function() {
    return re(this._callObjectMode, "theme()"), this.properties.theme;
  } }, { key: "setTheme", value: function(s) {
    var d = this;
    return re(this._callObjectMode, "setTheme()"), new Promise(function(l, f) {
      try {
        d.validateProperties({ theme: s }), d.properties.theme = T({}, s), d.sendMessageToCallMachine({ action: "set-theme", theme: d.properties.theme });
        try {
          d.emitDailyJSEvent({ action: Ys, theme: d.properties.theme });
        } catch (h) {
          console.log("could not emit 'theme-updated'", h);
        }
        l(d.properties.theme);
      } catch (h) {
        f(h);
      }
    });
  } }, { key: "requestFullscreen", value: (o = P(function* () {
    if (D(), this._iframe && !document.fullscreenElement && Gi()) try {
      (yield this._iframe.requestFullscreen) ? this._iframe.requestFullscreen() : this._iframe.webkitRequestFullscreen();
    } catch (s) {
      console.log("could not make video call fullscreen", s);
    }
  }), function() {
    return o.apply(this, arguments);
  }) }, { key: "exitFullscreen", value: function() {
    D(), document.fullscreenElement ? document.exitFullscreen() : document.webkitFullscreenElement && document.webkitExitFullscreen();
  } }, { key: "getSidebarView", value: (i = P(function* () {
    var s = this;
    return this._callObjectMode ? (console.error("getSidebarView is not available in callObject mode"), Promise.resolve(null)) : new Promise(function(d) {
      s.sendMessageToCallMachine({ action: "get-sidebar-view" }, function(l) {
        d(l.view);
      });
    });
  }), function() {
    return i.apply(this, arguments);
  }) }, { key: "setSidebarView", value: function(s) {
    return this._callObjectMode ? (console.error("setSidebarView is not available in callObject mode"), this) : (this.sendMessageToCallMachine({ action: "set-sidebar-view", view: s }), this);
  } }, { key: "room", value: (n = P(function* () {
    var s = this, d = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).includeRoomConfigDefaults, l = d === void 0 || d;
    return this._accessState.access === qt || this.needsLoad() ? this.properties.url ? { roomUrlPendingJoin: this.properties.url } : null : new Promise(function(f) {
      s.sendMessageToCallMachine({ action: "lib-room-info", includeRoomConfigDefaults: l }, function(h) {
        delete h.action, delete h.callbackStamp, f(h);
      });
    });
  }), function() {
    return n.apply(this, arguments);
  }) }, { key: "geo", value: (e = P(function* () {
    try {
      var s = yield fetch("https://gs.daily.co/_ks_/x-swsl/:");
      return { current: (yield s.json()).geo };
    } catch (d) {
      return console.error("geo lookup failed", d), { current: "" };
    }
  }), function() {
    return e.apply(this, arguments);
  }) }, { key: "setNetworkTopology", value: (t = P(function* (s) {
    var d = this;
    return D(), J(this._callState, "setNetworkTopology()"), new Promise(function(l, f) {
      d.sendMessageToCallMachine({ action: "set-network-topology", opts: s }, function(h) {
        h.error ? f({ error: h.error }) : l({ workerId: h.workerId });
      });
    });
  }), function(s) {
    return t.apply(this, arguments);
  }) }, { key: "getNetworkTopology", value: (r = P(function* () {
    var s = this;
    return new Promise(function(d, l) {
      s.needsLoad() && d({ topology: "none" }), s.sendMessageToCallMachine({ action: "get-network-topology" }, function(f) {
        f.error ? l({ error: f.error }) : d({ topology: f.topology });
      });
    });
  }), function() {
    return r.apply(this, arguments);
  }) }, { key: "setPlayNewParticipantSound", value: function(s) {
    if (D(), typeof s != "number" && s !== !0 && s !== !1) throw new Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(s));
    this.sendMessageToCallMachine({ action: "daily-method-set-play-ding", arg: s });
  } }, { key: "on", value: function(s, d) {
    return Me.prototype.on.call(this, s, d);
  } }, { key: "once", value: function(s, d) {
    return Me.prototype.once.call(this, s, d);
  } }, { key: "off", value: function(s, d) {
    return Me.prototype.off.call(this, s, d);
  } }, { key: "validateProperties", value: function(s) {
    var d, l;
    if (s != null && (d = s.dailyConfig) !== null && d !== void 0 && d.userMediaAudioConstraints) {
      var f, h, v;
      R() || console.warn("userMediaAudioConstraints is deprecated. You can override constraints with inputSettings.audio.settings, found in DailyCallOptions.");
      var S = s.inputSettings || {};
      S.audio = ((f = s.inputSettings) === null || f === void 0 ? void 0 : f.audio) || {}, S.audio.settings = ((h = s.inputSettings) === null || h === void 0 || (v = h.audio) === null || v === void 0 ? void 0 : v.settings) || {}, S.audio.settings = T(T({}, S.audio.settings), s.dailyConfig.userMediaAudioConstraints), s.inputSettings = S, delete s.dailyConfig.userMediaAudioConstraints;
    }
    if (s != null && (l = s.dailyConfig) !== null && l !== void 0 && l.userMediaVideoConstraints) {
      var k, A, q;
      R() || console.warn("userMediaVideoConstraints is deprecated. You can override constraints with inputSettings.video.settings, found in DailyCallOptions.");
      var N = s.inputSettings || {};
      N.video = ((k = s.inputSettings) === null || k === void 0 ? void 0 : k.video) || {}, N.video.settings = ((A = s.inputSettings) === null || A === void 0 || (q = A.video) === null || q === void 0 ? void 0 : q.settings) || {}, N.video.settings = T(T({}, N.video.settings), s.dailyConfig.userMediaVideoConstraints), s.inputSettings = N, delete s.dailyConfig.userMediaVideoConstraints;
    }
    for (var z in s) {
      if (!Ge[z]) throw new Error("unrecognized property '".concat(z, "'"));
      if (Ge[z].validate && !Ge[z].validate(s[z], this)) throw new Error("property '".concat(z, "': ").concat(Ge[z].help));
    }
  } }, { key: "assembleMeetingUrl", value: function() {
    var s, d, l = T(T({}, this.properties), {}, { emb: this.callClientId, embHref: encodeURIComponent(window.location.href), proxy: (s = this.properties.dailyConfig) !== null && s !== void 0 && s.proxyUrl ? encodeURIComponent((d = this.properties.dailyConfig) === null || d === void 0 ? void 0 : d.proxyUrl) : void 0 }), f = l.url.match(/\?/) ? "&" : "?";
    return l.url + f + Object.keys(Ge).filter(function(h) {
      return Ge[h].queryString && l[h] !== void 0;
    }).map(function(h) {
      return "".concat(Ge[h].queryString, "=").concat(l[h]);
    }).join("&");
  } }, { key: "needsLoad", value: function() {
    return [$r, qi, Ie, ke].includes(this._callState);
  } }, { key: "sendMessageToCallMachine", value: function(s, d) {
    if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
    this._messageChannel.sendMessageToCallMachine(s, d, this.callClientId, this._iframe);
  } }, { key: "forwardPackagedMessageToCallMachine", value: function(s) {
    this._messageChannel.forwardPackagedMessageToCallMachine(s, this._iframe, this.callClientId);
  } }, { key: "addListenerForPackagedMessagesFromCallMachine", value: function(s) {
    return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(s, this.callClientId);
  } }, { key: "removeListenerForPackagedMessagesFromCallMachine", value: function(s) {
    this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(s);
  } }, { key: "handleMessageFromCallMachine", value: function(s) {
    switch (s.action) {
      case Js:
        this.sendMessageToCallMachine(T({ action: Gs }, this.properties));
        break;
      case "call-machine-initialized":
        this._callMachineInitialized = !0;
        var d = { action: It, level: "log", code: 1011, stats: { event: "bundle load", time: this._bundleLoadTime === "no-op" ? 0 : this._bundleLoadTime, preLoaded: this._bundleLoadTime === "no-op", url: Bt(this.properties.dailyConfig) } };
        this.sendMessageToCallMachine(d), this._delayDuplicateInstanceLog && this._logDuplicateInstanceAttempt();
        break;
      case Ur:
        this._loadedCallback && (this._loadedCallback(), this._loadedCallback = null), this.emitDailyJSEvent(s);
        break;
      case Xs:
        var l, f = T({}, s);
        delete f.internal, this._maxAppMessageSize = ((l = s.internal) === null || l === void 0 ? void 0 : l._maxAppMessageSize) || mr, this._joinedCallback && (this._joinedCallback(s.participants), this._joinedCallback = null), this.emitDailyJSEvent(f);
        break;
      case eo:
      case to:
        if (this._callState === Ie) return;
        if (s.participant && s.participant.session_id) {
          var h = s.participant.local ? "local" : s.participant.session_id;
          if (this._callObjectMode) {
            var v = this._callMachine().store;
            Zi(s.participant, v), es(s.participant, v), ts(s.participant, this._participants[h], v);
          }
          try {
            this.maybeParticipantTracksStopped(this._participants[h], s.participant), this.maybeParticipantTracksStarted(this._participants[h], s.participant), this.maybeEventRecordingStopped(this._participants[h], s.participant), this.maybeEventRecordingStarted(this._participants[h], s.participant);
          } catch (cr) {
            console.error("track events error", cr);
          }
          this.compareEqualForParticipantUpdateEvent(s.participant, this._participants[h]) || (this._participants[h] = T({}, s.participant), this.toggleParticipantAudioBasedOnNativeAudioFocus(), this.emitDailyJSEvent(s));
        }
        break;
      case ro:
        if (s.participant && s.participant.session_id) {
          var S = this._participants[s.participant.session_id];
          S && this.maybeParticipantTracksStopped(S, null), delete this._participants[s.participant.session_id], this.emitDailyJSEvent(s);
        }
        break;
      case no:
        ee(this._participantCounts, s.participantCounts) || (this._participantCounts = s.participantCounts, this.emitDailyJSEvent(s));
        break;
      case io:
        var k = { access: s.access };
        s.awaitingAccess && (k.awaitingAccess = s.awaitingAccess), ee(this._accessState, k) || (this._accessState = k, this.emitDailyJSEvent(s));
        break;
      case so:
        if (s.meetingSession) {
          this._meetingSessionSummary = s.meetingSession, this.emitDailyJSEvent(s);
          var A = T(T({}, s), {}, { action: "meeting-session-updated" });
          this.emitDailyJSEvent(A);
        }
        break;
      case Wr:
        var q;
        this._iframe && !s.preserveIframe && (this._iframe.src = ""), this._updateCallState(ke), this.resetMeetingDependentVars(), this._loadedCallback && (this._loadedCallback(s.errorMsg), this._loadedCallback = null), s.preserveIframe;
        var N = Pn(s, jl);
        N != null && (q = N.error) !== null && q !== void 0 && q.details && (N.error.details = JSON.parse(N.error.details)), this._maybeSendToSentry(s), this._joinedCallback && (this._joinedCallback(null, N), this._joinedCallback = null), this.emitDailyJSEvent(N);
        break;
      case Zs:
        this._callState !== ke && this._updateCallState(Ie), this.resetMeetingDependentVars(), this._resolveLeave && (this._resolveLeave(), this._resolveLeave = null), this.emitDailyJSEvent(s);
        break;
      case "selected-devices-updated":
        s.devices && this.emitDailyJSEvent(s);
        break;
      case Po:
        var z = s.threshold, ve = s.quality;
        z === this._network.threshold && ve === this._network.quality || (this._network.quality = ve, this._network.threshold = z, this.emitDailyJSEvent(s));
        break;
      case Io:
        s && s.cpuLoadState && this.emitDailyJSEvent(s);
        break;
      case jo:
        s && s.faceCounts !== void 0 && this.emitDailyJSEvent(s);
        break;
      case Ao:
        var Pe = s.activeSpeaker;
        this._activeSpeaker.peerId !== Pe.peerId && (this._activeSpeaker.peerId = Pe.peerId, this.emitDailyJSEvent({ action: s.action, activeSpeaker: this._activeSpeaker }));
        break;
      case "show-local-video-changed":
        if (this._callObjectMode) return;
        var Ve = s.show;
        this._showLocalVideo = Ve, this.emitDailyJSEvent({ action: s.action, show: Ve });
        break;
      case Oo:
        var dt = s.enabled;
        this._activeSpeakerMode !== dt && (this._activeSpeakerMode = dt, this.emitDailyJSEvent({ action: s.action, enabled: this._activeSpeakerMode }));
        break;
      case ao:
      case co:
      case lo:
        this._waitingParticipants = s.allWaitingParticipants, this.emitDailyJSEvent({ action: s.action, participant: s.participant });
        break;
      case qo:
        ee(this._receiveSettings, s.receiveSettings) || (this._receiveSettings = s.receiveSettings, this.emitDailyJSEvent({ action: s.action, receiveSettings: s.receiveSettings }));
        break;
      case Gr:
        this._maybeUpdateInputSettings(s.inputSettings);
        break;
      case "send-settings-updated":
        ee(this._sendSettings, s.sendSettings) || (this._sendSettings = s.sendSettings, this._preloadCache.sendSettings = null, this.emitDailyJSEvent({ action: s.action, sendSettings: s.sendSettings }));
        break;
      case "local-audio-level":
        this._localAudioLevel = s.audioLevel, this._preloadCache.localAudioLevelObserver = null, this.emitDailyJSEvent(s);
        break;
      case "remote-participants-audio-level":
        this._remoteParticipantsAudioLevel = s.participantsAudioLevel, this._preloadCache.remoteParticipantsAudioLevelObserver = null, this.emitDailyJSEvent(s);
        break;
      case So:
        var K = s.session_id;
        this._rmpPlayerState[K] = s.playerState, this.emitDailyJSEvent(s);
        break;
      case ko:
        delete this._rmpPlayerState[s.session_id], this.emitDailyJSEvent(s);
        break;
      case Eo:
        var ye = s.session_id, Ue = this._rmpPlayerState[ye];
        Ue && this.compareEqualForRMPUpdateEvent(Ue, s.remoteMediaPlayerState) || (this._rmpPlayerState[ye] = s.remoteMediaPlayerState, this.emitDailyJSEvent(s));
        break;
      case "custom-button-click":
      case "sidebar-view-changed":
        this.emitDailyJSEvent(s);
        break;
      case oo:
        var kt = this._meetingSessionState.topology !== (s.meetingSessionState && s.meetingSessionState.topology);
        this._meetingSessionState = Er(s.meetingSessionState, this._callObjectMode), (this._callObjectMode || kt) && this.emitDailyJSEvent(s);
        break;
      case Co:
        this._isScreenSharing = !0, this.emitDailyJSEvent(s);
        break;
      case To:
      case Mo:
        this._isScreenSharing = !1, this.emitDailyJSEvent(s);
        break;
      case Br:
      case Jr:
      case go:
      case vo:
      case yo:
      case ho:
      case fo:
      case mo:
      case zs:
      case Qs:
      case bo:
      case wo:
      case "test-completed":
      case Lo:
      case _o:
      case Do:
      case No:
      case Ro:
      case xo:
      case Yr:
      case Fo:
      case "dialin-ready":
      case "dialin-connected":
      case "dialin-error":
      case "dialin-stopped":
      case "dialin-warning":
      case "dialout-connected":
      case "dialout-answered":
      case "dialout-error":
      case "dialout-stopped":
      case "dialout-warning":
        this.emitDailyJSEvent(s);
        break;
      case "request-fullscreen":
        this.requestFullscreen();
        break;
      case "request-exit-fullscreen":
        this.exitFullscreen();
    }
  } }, { key: "maybeEventRecordingStopped", value: function(s, d) {
    var l = "record";
    s && (d.local || d[l] !== !1 || s[l] === d[l] || this.emitDailyJSEvent({ action: Jr }));
  } }, { key: "maybeEventRecordingStarted", value: function(s, d) {
    var l = "record";
    s && (d.local || d[l] !== !0 || s[l] === d[l] || this.emitDailyJSEvent({ action: Br }));
  } }, { key: "_trackStatePlayable", value: function(s) {
    return !(!s || s.state !== qs);
  } }, { key: "_trackChanged", value: function(s, d) {
    return (s == null ? void 0 : s.id) !== (d == null ? void 0 : d.id);
  } }, { key: "maybeEventTrackStopped", value: function(s, d, l) {
    var f, h, v = (f = d == null ? void 0 : d.tracks[s]) !== null && f !== void 0 ? f : null, S = (h = l == null ? void 0 : l.tracks[s]) !== null && h !== void 0 ? h : null, k = v == null ? void 0 : v.track;
    if (k) {
      var A = this._trackStatePlayable(v), q = this._trackStatePlayable(S), N = this._trackChanged(k, S == null ? void 0 : S.track);
      A && (q && !N || this.emitDailyJSEvent({ action: po, track: k, participant: l ?? d, type: s }));
    }
  } }, { key: "maybeEventTrackStarted", value: function(s, d, l) {
    var f, h, v = (f = d == null ? void 0 : d.tracks[s]) !== null && f !== void 0 ? f : null, S = (h = l == null ? void 0 : l.tracks[s]) !== null && h !== void 0 ? h : null, k = S == null ? void 0 : S.track;
    if (k) {
      var A = this._trackStatePlayable(v), q = this._trackStatePlayable(S), N = this._trackChanged(v == null ? void 0 : v.track, k);
      q && (A && !N || this.emitDailyJSEvent({ action: uo, track: k, participant: l, type: s }));
    }
  } }, { key: "maybeParticipantTracksStopped", value: function(s, d) {
    if (s) for (var l in s.tracks) this.maybeEventTrackStopped(l, s, d);
  } }, { key: "maybeParticipantTracksStarted", value: function(s, d) {
    if (d) for (var l in d.tracks) this.maybeEventTrackStarted(l, s, d);
  } }, { key: "compareEqualForRMPUpdateEvent", value: function(s, d) {
    var l, f;
    return s.state === d.state && ((l = s.settings) === null || l === void 0 ? void 0 : l.volume) === ((f = d.settings) === null || f === void 0 ? void 0 : f.volume);
  } }, { key: "emitDailyJSEvent", value: function(s) {
    try {
      s.callClientId = this.callClientId, this.emit(s.action, s);
    } catch (d) {
      console.log("could not emit", s, d);
    }
  } }, { key: "compareEqualForParticipantUpdateEvent", value: function(s, d) {
    return !!ee(s, d) && (!s.videoTrack || !d.videoTrack || s.videoTrack.id === d.videoTrack.id && s.videoTrack.muted === d.videoTrack.muted && s.videoTrack.enabled === d.videoTrack.enabled) && (!s.audioTrack || !d.audioTrack || s.audioTrack.id === d.audioTrack.id && s.audioTrack.muted === d.audioTrack.muted && s.audioTrack.enabled === d.audioTrack.enabled);
  } }, { key: "nativeUtils", value: function() {
    return R() ? typeof DailyNativeUtils > "u" ? (console.warn("in React Native, DailyNativeUtils is expected to be available"), null) : DailyNativeUtils : null;
  } }, { key: "updateIsPreparingToJoin", value: function(s) {
    this._updateCallState(this._callState, s);
  } }, { key: "_updateCallState", value: function(s) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._isPreparingToJoin;
    if (s !== this._callState || d !== this._isPreparingToJoin) {
      var l = this._callState, f = this._isPreparingToJoin;
      this._callState = s, this._isPreparingToJoin = d;
      var h = this._callState === Ne;
      this.updateShowAndroidOngoingMeetingNotification(h);
      var v = Vt(l, f), S = Vt(this._callState, this._isPreparingToJoin);
      v !== S && (this.updateKeepDeviceAwake(S), this.updateDeviceAudioMode(S), this.updateNoOpRecordingEnsuringBackgroundContinuity(S));
    }
  } }, { key: "resetMeetingDependentVars", value: function() {
    this._participants = {}, this._participantCounts = ls, this._waitingParticipants = {}, this._activeSpeaker = {}, this._activeSpeakerMode = !1, this._didPreAuth = !1, this._accessState = { access: qt }, this._finalSummaryOfPrevSession = this._meetingSessionSummary, this._meetingSessionSummary = {}, this._meetingSessionState = Er(cs, this._callObjectMode), this._isScreenSharing = !1, this._receiveSettings = {}, this._inputSettings = void 0, this._sendSettings = {}, this._localAudioLevel = 0, this._isLocalAudioLevelObserverRunning = !1, this._remoteParticipantsAudioLevel = {}, this._isRemoteParticipantsAudioLevelObserverRunning = !1, this._maxAppMessageSize = mr, this._callMachineInitialized = !1, this._bundleLoadTime = void 0, this._preloadCache;
  } }, { key: "updateKeepDeviceAwake", value: function(s) {
    R() && this.nativeUtils().setKeepDeviceAwake(s, this.callClientId);
  } }, { key: "updateDeviceAudioMode", value: function(s) {
    if (R() && !this.disableReactNativeAutoDeviceManagement("audio")) {
      var d = s ? this._nativeInCallAudioMode : "idle";
      this.nativeUtils().setAudioMode(d);
    }
  } }, { key: "updateShowAndroidOngoingMeetingNotification", value: function(s) {
    if (R() && this.nativeUtils().setShowOngoingMeetingNotification) {
      var d, l, f, h;
      if (this.properties.reactNativeConfig && this.properties.reactNativeConfig.androidInCallNotification) {
        var v = this.properties.reactNativeConfig.androidInCallNotification;
        d = v.title, l = v.subtitle, f = v.iconName, h = v.disableForCustomOverride;
      }
      h && (s = !1), this.nativeUtils().setShowOngoingMeetingNotification(s, d, l, f, this.callClientId);
    }
  } }, { key: "updateNoOpRecordingEnsuringBackgroundContinuity", value: function(s) {
    R() && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(s);
  } }, { key: "toggleParticipantAudioBasedOnNativeAudioFocus", value: function() {
    var s, d;
    if (R()) {
      var l = (s = this._callMachine()) === null || s === void 0 || (d = s.store) === null || d === void 0 ? void 0 : d.getState();
      for (var f in l == null ? void 0 : l.streams) {
        var h = l.streams[f];
        h && h.pendingTrack && h.pendingTrack.kind === "audio" && (h.pendingTrack.enabled = this._hasNativeAudioFocus);
      }
    }
  } }, { key: "disableReactNativeAutoDeviceManagement", value: function(s) {
    return this.properties.reactNativeConfig && this.properties.reactNativeConfig.disableAutoDeviceManagement && this.properties.reactNativeConfig.disableAutoDeviceManagement[s];
  } }, { key: "absoluteUrl", value: function(s) {
    if (s !== void 0) {
      var d = document.createElement("a");
      return d.href = s, d.href;
    }
  } }, { key: "sayHello", value: function() {
    var s = "hello, world.";
    return console.log(s), s;
  } }, { key: "_logUseAfterDestroy", value: function() {
    var s = Object.values(Je)[0];
    if (this.needsLoad())
      if (s && !s.needsLoad()) {
        var d = { action: It, level: "error", code: this.strictMode ? 9995 : 9997 };
        s.sendMessageToCallMachine(d);
      } else this.strictMode || console.error("You are are attempting to use a call instance that was previously destroyed, which is unsupported. Please remove `strictMode: false` from your constructor properties to enable strict mode to track down and fix this unsupported usage.");
    else {
      var l = { action: It, level: "error", code: this.strictMode ? 9995 : 9997 };
      this._messageChannel.sendMessageToCallMachine(l, null, this.callClientId, this._iframe);
    }
  } }, { key: "_logDuplicateInstanceAttempt", value: function() {
    for (var s = 0, d = Object.values(Je); s < d.length; s++) {
      var l = d[s];
      l._callMachineInitialized ? (l.sendMessageToCallMachine({ action: It, level: "warn", code: this.allowMultipleCallInstances ? 9993 : 9992 }), l._delayDuplicateInstanceLog = !1) : l._delayDuplicateInstanceLog = !0;
    }
  } }, { key: "_maybeSendToSentry", value: function(s) {
    var d, l, f, h, v, S;
    if (!((d = s.error) !== null && d !== void 0 && d.type && (![Bs, Us, Vr].includes(s.error.type) || s.error.type === Vr && s.error.msg.includes("deleted")))) {
      var k = (l = this.properties) !== null && l !== void 0 && l.url ? new URL(this.properties.url) : void 0, A = "production";
      k && k.host.includes(".staging.daily") && (A = "staging");
      var q, N, z, ve, Pe, Ve = [uc(), cc(), Pc(), Ac(), Dc(), Rc(), dc(), Nc()].filter(function(ga) {
        return !["BrowserApiErrors", "Breadcrumbs", "GlobalHandlers"].includes(ga.name);
      }), dt = new gc({ dsn: "https://f10f1c81e5d44a4098416c0867a8b740@o77906.ingest.sentry.io/168844", transport: wc, stackParser: Mc, integrations: Ve, environment: A }), K = new qe();
      if (K.setClient(dt), dt.init(), this.session_id && K.setExtra("sessionId", this.session_id), this.properties) {
        var ye = T({}, this.properties);
        ye.userName = ye.userName ? "[Filtered]" : void 0, ye.userData = ye.userData ? "[Filtered]" : void 0, ye.token = ye.token ? "[Filtered]" : void 0, K.setExtra("properties", ye);
      }
      if (k) {
        var Ue = k.searchParams.get("domain");
        if (!Ue) {
          var kt = k.host.match(/(.*?)\./);
          Ue = kt && kt[1] || "";
        }
        Ue && K.setTag("domain", Ue);
      }
      s.error && (K.setTag("fatalErrorType", s.error.type), K.setExtra("errorDetails", s.error.details), !((q = s.error.details) === null || q === void 0) && q.uri && K.setTag("serverAddress", s.error.details.uri), !((N = s.error.details) === null || N === void 0) && N.workerGroup && K.setTag("workerGroup", s.error.details.workerGroup), !((z = s.error.details) === null || z === void 0) && z.geoGroup && K.setTag("geoGroup", s.error.details.geoGroup), !((ve = s.error.details) === null || ve === void 0) && ve.on && K.setTag("connectionAttempt", s.error.details.on), (Pe = s.error.details) !== null && Pe !== void 0 && Pe.bundleUrl && (K.setTag("bundleUrl", s.error.details.bundleUrl), K.setTag("bundleError", s.error.details.sourceError.type))), K.setTags({ callMode: this._callObjectMode ? R() ? "reactNative" : (f = this.properties) !== null && f !== void 0 && (h = f.dailyConfig) !== null && h !== void 0 && (v = h.callMode) !== null && v !== void 0 && v.includes("prebuilt") ? this.properties.dailyConfig.callMode : "custom" : "prebuilt-frame", version: ce.version() });
      var cr = ((S = s.error) === null || S === void 0 ? void 0 : S.msg) || s.errorMsg;
      K.captureException(new Error(cr));
    }
  } }, { key: "_callMachine", value: function() {
    var s, d, l;
    return (s = window._daily) === null || s === void 0 || (d = s.instances) === null || d === void 0 || (l = d[this.callClientId]) === null || l === void 0 ? void 0 : l.callMachine;
  } }, { key: "_maybeUpdateInputSettings", value: function(s) {
    if (!ee(this._inputSettings, s)) {
      var d = this._getInputSettings();
      this._inputSettings = s;
      var l = this._getInputSettings();
      ee(d, l) || this.emitDailyJSEvent({ action: Gr, inputSettings: l });
    }
  } }], [{ key: "supportedBrowser", value: function() {
    if (R()) return { supported: !0, mobile: !0, name: "React Native", version: null, supportsScreenShare: !0, supportsSfu: !0, supportsVideoProcessing: !1, supportsAudioProcessing: !1 };
    var s = Ma.getParser(oe());
    return { supported: !!Yi(), mobile: s.getPlatformType() === "mobile", name: s.getBrowserName(), version: s.getBrowserVersion(), supportsFullscreen: !!Gi(), supportsScreenShare: !!ll(), supportsSfu: !!Yi(), supportsVideoProcessing: Uo(), supportsAudioProcessing: Bo() };
  } }, { key: "version", value: function() {
    return "0.75.2";
  } }, { key: "createCallObject", value: function() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return s.layout = "none", new ce(null, s);
  } }, { key: "wrap", value: function(s) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (D(), !s || !s.contentWindow || typeof s.src != "string") throw new Error("DailyIframe::Wrap needs an iframe-like first argument");
    return d.layout || (d.customLayout ? d.layout = "custom-v1" : d.layout = "browser"), new ce(s, d);
  } }, { key: "createFrame", value: function(s, d) {
    var l, f;
    D(), s && d ? (l = s, f = d) : s && s.append ? (l = s, f = {}) : (l = document.body, f = s || {});
    var h = f.iframeStyle;
    h || (h = l === document.body ? { position: "fixed", border: "1px solid black", backgroundColor: "white", width: "375px", height: "450px", right: "1em", bottom: "1em" } : { border: 0, width: "100%", height: "100%" });
    var v = document.createElement("iframe");
    window.navigator && window.navigator.userAgent.match(/Chrome\/61\./) ? v.allow = "microphone, camera" : v.allow = "microphone; camera; autoplay; display-capture; screen-wake-lock", v.style.visibility = "hidden", l.appendChild(v), v.style.visibility = null, Object.keys(h).forEach(function(S) {
      return v.style[S] = h[S];
    }), f.layout || (f.customLayout ? f.layout = "custom-v1" : f.layout = "browser");
    try {
      return new ce(v, f);
    } catch (S) {
      throw l.removeChild(v), S;
    }
  } }, { key: "createTransparentFrame", value: function() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    D();
    var d = document.createElement("iframe");
    return d.allow = "microphone; camera; autoplay", d.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      pointer-events: none;
    `, document.body.appendChild(d), s.layout || (s.layout = "custom-v1"), ce.wrap(d, s);
  } }, { key: "getCallInstance", value: function() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
    return s ? Je[s] : Object.values(Je)[0];
  } }]), ce;
}();
function et(r, t) {
  var e = {};
  for (var n in r) if (r[n] instanceof MediaStreamTrack) console.warn("MediaStreamTrack found in props or cache.", n), e[n] = Oe;
  else if (n === "dailyConfig") {
    if (r[n].modifyLocalSdpHook) {
      var i = window._daily.instances[t].customCallbacks || {};
      i.modifyLocalSdpHook = r[n].modifyLocalSdpHook, window._daily.instances[t].customCallbacks = i, delete r[n].modifyLocalSdpHook;
    }
    if (r[n].modifyRemoteSdpHook) {
      var o = window._daily.instances[t].customCallbacks || {};
      o.modifyRemoteSdpHook = r[n].modifyRemoteSdpHook, window._daily.instances[t].customCallbacks = o, delete r[n].modifyRemoteSdpHook;
    }
    e[n] = r[n];
  } else e[n] = r[n];
  return e;
}
function J(r) {
  var t = arguments.length > 2 ? arguments[2] : void 0;
  if (r !== Ne) {
    var e = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " only supported after join.");
    throw t && (e += " ".concat(t)), console.error(e), new Error(e);
  }
}
function Vt(r, t) {
  return [Qt, Ne].includes(r) || t;
}
function wr(r, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "This daily-js method", n = arguments.length > 3 ? arguments[3] : void 0;
  if (Vt(r, t)) {
    var i = "".concat(e, " not supported after joining a meeting.");
    throw n && (i += " ".concat(n)), console.error(i), new Error(i);
  }
}
function Nt(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", e = arguments.length > 2 ? arguments[2] : void 0;
  if (!r) {
    var n = "".concat(t, arguments.length > 3 && arguments[3] !== void 0 && arguments[3] ? " requires preAuth() or startCamera() to initialize call state." : " requires preAuth(), startCamera(), or join() to initialize call state.");
    throw e && (n += " ".concat(e)), console.error(n), new Error(n);
  }
}
function Sr(r) {
  if (r) {
    var t = "A pre-call quality test is in progress. Please try ".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " again once testing has completed. Use stopTestCallQuality() to end it early.");
    throw console.error(t), new Error(t);
  }
}
function le(r) {
  if (!r) {
    var t = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " is only supported on custom callObject instances");
    throw console.error(t), new Error(t);
  }
}
function re(r) {
  if (r) {
    var t = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " is only supported as part of Daily's Prebuilt");
    throw console.error(t), new Error(t);
  }
}
function D() {
  if (R()) throw new Error("This daily-js method is not currently supported in React Native");
}
function ft() {
  if (!R()) throw new Error("This daily-js method is only supported in React Native");
}
function Qo(r) {
  if (r === void 0) return !0;
  var t;
  if (typeof r == "string") t = r;
  else try {
    t = JSON.stringify(r), ee(JSON.parse(t), r) || console.warn("The userData provided will be modified when serialized.");
  } catch (e) {
    throw Error("userData must be serializable to JSON: ".concat(e));
  }
  if (t.length > 4096) throw Error("userData is too large (".concat(t.length, " characters). Maximum size suppported is ").concat(4096, "."));
  return !0;
}
function Ko(r, t) {
  for (var e = t.allowAllParticipantsKey, n = function(g) {
    var _ = ["local"];
    return e || _.push("*"), g && !_.includes(g);
  }, i = function(g) {
    return !!(g.layer === void 0 || Number.isInteger(g.layer) && g.layer >= 0 || g.layer === "inherit");
  }, o = function(g) {
    return !!g && !(g.video && !i(g.video)) && !(g.screenVideo && !i(g.screenVideo));
  }, a = 0, u = Object.entries(r); a < u.length; a++) {
    var c = Se(u[a], 2), p = c[0], m = c[1];
    if (!n(p) || !o(m)) return !1;
  }
  return !0;
}
function Xo(r) {
  if ($(r) !== "object") return !1;
  for (var t = 0, e = Object.entries(r); t < e.length; t++) {
    var n = Se(e[t], 2), i = n[0], o = n[1];
    switch (i) {
      case "video":
        if ($(o) !== "object") return !1;
        for (var a = 0, u = Object.entries(o); a < u.length; a++) {
          var c = Se(u[a], 2), p = c[0], m = c[1];
          switch (p) {
            case "processor":
              if (!Fl(m)) return !1;
              break;
            case "settings":
              if (!ps(m)) return !1;
              break;
            default:
              return !1;
          }
        }
        break;
      case "audio":
        if ($(o) !== "object") return !1;
        for (var g = 0, _ = Object.entries(o); g < _.length; g++) {
          var w = Se(_[g], 2), y = w[0], E = w[1];
          switch (y) {
            case "processor":
              if (!xl(E)) return !1;
              break;
            case "settings":
              if (!ps(E)) return !1;
              break;
            default:
              return !1;
          }
        }
        break;
      default:
        return !1;
    }
  }
  return !0;
}
function Zo(r, t, e) {
  var n, i = [];
  r.video && r.video.processor && (Uo((n = t == null ? void 0 : t.useLegacyVideoProcessor) !== null && n !== void 0 && n) || (r.video.settings ? delete r.video.processor : delete r.video, i.push("video"))), r.audio && r.audio.processor && (Bo() || (r.audio.settings ? delete r.audio.processor : delete r.audio, i.push("audio"))), i.length > 0 && console.error("Ignoring settings for browser- or platform-unsupported input processor(s): ".concat(i.join(", "))), r.audio && r.audio.settings && (r.audio.settings.customTrack ? (e.audioTrack = r.audio.settings.customTrack, r.audio.settings = { customTrack: Oe }) : delete e.audioTrack), r.video && r.video.settings && (r.video.settings.customTrack ? (e.videoTrack = r.video.settings.customTrack, r.video.settings = { customTrack: Oe }) : delete e.videoTrack);
}
function xl(r) {
  if (R()) return console.warn("Video processing is not yet supported in React Native"), !1;
  var t = ["type"];
  return !!r && $(r) === "object" && (Object.keys(r).filter(function(e) {
    return !t.includes(e);
  }).forEach(function(e) {
    console.warn("invalid key inputSettings -> audio -> processor : ".concat(e)), delete r[e];
  }), !!function(e) {
    return typeof e != "string" ? !1 : Object.values($o).includes(e) ? !0 : (console.error("inputSettings audio processor type invalid"), !1);
  }(r.type));
}
function Fl(r) {
  if (R()) return console.warn("Video processing is not yet supported in React Native"), !1;
  var t = ["type", "config"];
  return !r || $(r) !== "object" || !function(e) {
    return typeof e != "string" ? !1 : Object.values($t).includes(e) ? !0 : (console.error("inputSettings video processor type invalid"), !1);
  }(r.type) || r.config && ($(r.config) !== "object" || !function(e, n) {
    var i = Object.keys(n);
    if (i.length === 0) return !0;
    var o = "invalid object in inputSettings -> video -> processor -> config";
    switch (e) {
      case $t.BGBLUR:
        return i.length > 1 || i[0] !== "strength" ? (console.error(o), !1) : !(typeof n.strength != "number" || n.strength <= 0 || n.strength > 1 || isNaN(n.strength)) || (console.error("".concat(o, "; expected: {0 < strength <= 1}, got: ").concat(n.strength)), !1);
      case $t.BGIMAGE:
        return !(n.source !== void 0 && !function(a) {
          if (a.source === "default") return a.type = "default", !0;
          if (a.source instanceof ArrayBuffer) return !0;
          if (Jt(a.source)) return a.type = "url", !!function(p) {
            var m = new URL(p), g = m.pathname;
            if (m.protocol === "data:") try {
              var _ = g.substring(g.indexOf(":") + 1, g.indexOf(";")).split("/")[1];
              return vr.includes(_);
            } catch (y) {
              return console.error("failed to deduce blob content type", y), !1;
            }
            var w = g.split(".").at(-1).toLowerCase().trim();
            return vr.includes(w);
          }(a.source) || (console.error("invalid image type; supported types: [".concat(vr.join(", "), "]")), !1);
          return u = a.source, c = Number(u), isNaN(c) || !Number.isInteger(c) || c <= 0 || c > 10 ? (console.error("invalid image selection; must be an int, > 0, <= ".concat(10)), !1) : (a.type = "daily-preselect", !0);
          var u, c;
        }(n));
      default:
        return !0;
    }
  }(r.type, r.config)) ? !1 : (Object.keys(r).filter(function(e) {
    return !t.includes(e);
  }).forEach(function(e) {
    console.warn("invalid key inputSettings -> video -> processor : ".concat(e)), delete r[e];
  }), !0);
}
function ps(r) {
  return $(r) === "object" && (!r.customTrack || r.customTrack instanceof MediaStreamTrack);
}
function en() {
  var r = Object.values($t).join(" | "), t = Object.values($o).join(" | ");
  return "inputSettings must be of the form: { video?: { processor?: { type: [ ".concat(r, " ], config?: {} } }, audio?: { processor: {type: [ ").concat(t, " ] } } }");
}
function ea(r) {
  var t = r.allowAllParticipantsKey;
  return "receiveSettings must be of the form { [<remote participant id> | ".concat(Vs).concat(t ? ' | "'.concat("*", '"') : "", "]: ") + '{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}';
}
function ta() {
  return "customIntegrations should be an object of type ".concat(JSON.stringify(Zr), ".");
}
function ra(r) {
  if (r && $(r) !== "object" || Array.isArray(r)) return console.error("customTrayButtons should be an Object of the type ".concat(JSON.stringify(Zt), ".")), !1;
  if (r) for (var t = 0, e = Object.entries(r); t < e.length; t++) for (var n = Se(e[t], 1)[0], i = 0, o = Object.entries(r[n]); i < o.length; i++) {
    var a = Se(o[i], 2), u = a[0], c = a[1], p = Zt.id[u];
    if (!p) return console.error("customTrayButton does not support key ".concat(u)), !1;
    switch (u) {
      case "iconPath":
      case "iconPathDarkMode":
        if (!Jt(c)) return console.error("customTrayButton ".concat(u, " should be a url.")), !1;
        break;
      case "visualState":
        if (!["default", "sidebar-open", "active"].includes(c)) return console.error("customTrayButton ".concat(u, " should be ").concat(p, ". Got: ").concat(c)), !1;
        break;
      default:
        if ($(c) !== p) return console.error("customTrayButton ".concat(u, " should be a ").concat(p, ".")), !1;
    }
  }
  return !0;
}
function na(r) {
  if (!r || r && $(r) !== "object" || Array.isArray(r)) return console.error(ta()), !1;
  for (var t = function(g) {
    return "".concat(g, " should be ").concat(Zr.id[g]);
  }, e = function(g, _) {
    return console.error("customIntegration ".concat(g, ": ").concat(_));
  }, n = 0, i = Object.entries(r); n < i.length; n++) {
    var o = Se(i[n], 1)[0];
    if (!("label" in r[o])) return e(o, "label is required"), !1;
    if (!("location" in r[o])) return e(o, "location is required"), !1;
    if (!("src" in r[o]) && !("srcdoc" in r[o])) return e(o, "src or srcdoc is required"), !1;
    for (var a = 0, u = Object.entries(r[o]); a < u.length; a++) {
      var c = Se(u[a], 2), p = c[0], m = c[1];
      switch (p) {
        case "allow":
        case "csp":
        case "name":
        case "referrerPolicy":
        case "sandbox":
          if (typeof m != "string") return e(o, t(p)), !1;
          break;
        case "iconURL":
          if (!Jt(m)) return e(o, "".concat(p, " should be a url")), !1;
          break;
        case "src":
          if ("srcdoc" in r[o]) return e(o, "cannot have both src and srcdoc"), !1;
          if (!Jt(m)) return e(o, 'src "'.concat(m, '" is not a valid URL')), !1;
          break;
        case "srcdoc":
          if ("src" in r[o]) return e(o, "cannot have both src and srcdoc"), !1;
          if (typeof m != "string") return e(o, t(p)), !1;
          break;
        case "location":
          if (!["main", "sidebar"].includes(m)) return e(o, t(p)), !1;
          break;
        case "controlledBy":
          if (m !== "*" && m !== "owners" && (!Array.isArray(m) || m.some(function(g) {
            return typeof g != "string";
          }))) return e(o, t(p)), !1;
          break;
        case "shared":
          if ((!Array.isArray(m) || m.some(function(g) {
            return typeof g != "string";
          })) && m !== "owners" && typeof m != "boolean") return e(o, t(p)), !1;
          break;
        default:
          if (!Zr.id[p]) return console.error("customIntegration does not support key ".concat(p)), !1;
      }
    }
  }
  return !0;
}
function ia(r, t) {
  if (t === void 0) return !1;
  switch ($(t)) {
    case "string":
      return $(r) === t;
    case "object":
      if ($(r) !== "object") return !1;
      for (var e in r) if (!ia(r[e], t[e])) return !1;
      return !0;
    default:
      return !1;
  }
}
function hs(r, t) {
  var e = r.sessionId, n = r.toEndPoint, i = r.useSipRefer;
  if (!e || !n) throw new Error("".concat(t, "() requires a sessionId and toEndPoint"));
  if (typeof e != "string" || typeof n != "string") throw new Error("Invalid paramater: sessionId and toEndPoint must be of type string");
  if (i && !n.startsWith("sip:")) throw new Error('"toEndPoint" must be a "sip" address');
  if (!n.startsWith("sip:") && !n.startsWith("+")) throw new Error("toEndPoint: ".concat(n, ' must starts with either "sip:" or "+"'));
}
function fs(r) {
  if ($(r) !== "object") throw new Error('RemoteMediaPlayerSettings: must be "object" type');
  if (r.state && !Object.values(Hr).includes(r.state)) throw new Error("Invalid value for RemoteMediaPlayerSettings.state, valid values are: " + JSON.stringify(Hr));
  if (r.volume) {
    if (typeof r.volume != "number") throw new Error('RemoteMediaPlayerSettings.volume: must be "number" type');
    if (r.volume < 0 || r.volume > 2) throw new Error("RemoteMediaPlayerSettings.volume: must be between 0.0 - 2.0");
  }
}
function ms(r, t, e) {
  return !(typeof r != "number" || r < t || r > e);
}
function Er(r, t) {
  return r && !t && delete r.data, r;
}
const ql = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DAILY_ACCESS_LEVEL_FULL: $s,
  DAILY_ACCESS_LEVEL_LOBBY: Uc,
  DAILY_ACCESS_LEVEL_NONE: Bc,
  DAILY_ACCESS_UNKNOWN: qt,
  DAILY_CAMERA_ERROR_CAM_AND_MIC_IN_USE: el,
  DAILY_CAMERA_ERROR_CAM_IN_USE: Xc,
  DAILY_CAMERA_ERROR_CONSTRAINTS: il,
  DAILY_CAMERA_ERROR_MIC_IN_USE: Zc,
  DAILY_CAMERA_ERROR_NOT_FOUND: nl,
  DAILY_CAMERA_ERROR_PERMISSIONS: tl,
  DAILY_CAMERA_ERROR_UNDEF_MEDIADEVICES: rl,
  DAILY_CAMERA_ERROR_UNKNOWN: sl,
  DAILY_EVENT_ACCESS_STATE_UPDATED: io,
  DAILY_EVENT_ACTIVE_SPEAKER_CHANGE: Ao,
  DAILY_EVENT_ACTIVE_SPEAKER_MODE_CHANGE: Oo,
  DAILY_EVENT_APP_MSG: bo,
  DAILY_EVENT_CAMERA_ERROR: Qs,
  DAILY_EVENT_CPU_LOAD_CHANGE: Io,
  DAILY_EVENT_ERROR: Wr,
  DAILY_EVENT_EXIT_FULLSCREEN: vt,
  DAILY_EVENT_FACE_COUNTS_UPDATED: jo,
  DAILY_EVENT_FULLSCREEN: gt,
  DAILY_EVENT_IFRAME_LAUNCH_CONFIG: Gs,
  DAILY_EVENT_IFRAME_READY_FOR_LAUNCH_CONFIG: Js,
  DAILY_EVENT_INPUT_SETTINGS_UPDATED: Gr,
  DAILY_EVENT_JOINED_MEETING: Xs,
  DAILY_EVENT_JOINING_MEETING: Ks,
  DAILY_EVENT_LANG_UPDATED: Fo,
  DAILY_EVENT_LEFT_MEETING: Zs,
  DAILY_EVENT_LIVE_STREAMING_ERROR: xo,
  DAILY_EVENT_LIVE_STREAMING_STARTED: Do,
  DAILY_EVENT_LIVE_STREAMING_STOPPED: Ro,
  DAILY_EVENT_LIVE_STREAMING_UPDATED: No,
  DAILY_EVENT_LOADED: Ur,
  DAILY_EVENT_LOADING: Ws,
  DAILY_EVENT_LOAD_ATTEMPT_FAILED: Hs,
  DAILY_EVENT_LOCAL_SCREEN_SHARE_CANCELED: Mo,
  DAILY_EVENT_LOCAL_SCREEN_SHARE_STARTED: Co,
  DAILY_EVENT_LOCAL_SCREEN_SHARE_STOPPED: To,
  DAILY_EVENT_MEETING_SESSION_DATA_ERROR: ol,
  DAILY_EVENT_MEETING_SESSION_STATE_UPDATED: oo,
  DAILY_EVENT_MEETING_SESSION_SUMMARY_UPDATED: so,
  DAILY_EVENT_NETWORK_CONNECTION: Lo,
  DAILY_EVENT_NETWORK_QUALITY_CHANGE: Po,
  DAILY_EVENT_NONFATAL_ERROR: Yr,
  DAILY_EVENT_PARTICIPANT_COUNTS_UPDATED: no,
  DAILY_EVENT_PARTICIPANT_JOINED: eo,
  DAILY_EVENT_PARTICIPANT_LEFT: ro,
  DAILY_EVENT_PARTICIPANT_UPDATED: to,
  DAILY_EVENT_RECEIVE_SETTINGS_UPDATED: qo,
  DAILY_EVENT_RECORDING_DATA: _o,
  DAILY_EVENT_RECORDING_ERROR: vo,
  DAILY_EVENT_RECORDING_STARTED: Br,
  DAILY_EVENT_RECORDING_STATS: go,
  DAILY_EVENT_RECORDING_STOPPED: Jr,
  DAILY_EVENT_RECORDING_UPLOAD_COMPLETED: yo,
  DAILY_EVENT_REMOTE_MEDIA_PLAYER_STARTED: So,
  DAILY_EVENT_REMOTE_MEDIA_PLAYER_STOPPED: ko,
  DAILY_EVENT_REMOTE_MEDIA_PLAYER_UPDATED: Eo,
  DAILY_EVENT_STARTED_CAMERA: zs,
  DAILY_EVENT_THEME_UPDATED: Ys,
  DAILY_EVENT_TRACK_STARTED: uo,
  DAILY_EVENT_TRACK_STOPPED: po,
  DAILY_EVENT_TRANSCRIPTION_ERROR: mo,
  DAILY_EVENT_TRANSCRIPTION_MSG: wo,
  DAILY_EVENT_TRANSCRIPTION_STARTED: ho,
  DAILY_EVENT_TRANSCRIPTION_STOPPED: fo,
  DAILY_EVENT_WAITING_PARTICIPANT_ADDED: ao,
  DAILY_EVENT_WAITING_PARTICIPANT_REMOVED: lo,
  DAILY_EVENT_WAITING_PARTICIPANT_UPDATED: co,
  DAILY_FATAL_ERROR_CONNECTION: Bs,
  DAILY_FATAL_ERROR_EJECTED: Gc,
  DAILY_FATAL_ERROR_EOL: Us,
  DAILY_FATAL_ERROR_EXP_ROOM: Hc,
  DAILY_FATAL_ERROR_EXP_TOKEN: zc,
  DAILY_FATAL_ERROR_MEETING_FULL: Qc,
  DAILY_FATAL_ERROR_NBF_ROOM: Yc,
  DAILY_FATAL_ERROR_NBF_TOKEN: Wc,
  DAILY_FATAL_ERROR_NOT_ALLOWED: Kc,
  DAILY_FATAL_ERROR_NO_ROOM: Vr,
  DAILY_RECEIVE_SETTINGS_ALL_PARTICIPANTS_KEY: Jc,
  DAILY_RECEIVE_SETTINGS_BASE_KEY: Vs,
  DAILY_STATE_ERROR: ke,
  DAILY_STATE_JOINED: Ne,
  DAILY_STATE_JOINING: Qt,
  DAILY_STATE_LEFT: Ie,
  DAILY_STATE_NEW: $r,
  DAILY_TRACK_STATE_BLOCKED: xc,
  DAILY_TRACK_STATE_INTERRUPTED: Vc,
  DAILY_TRACK_STATE_LOADING: $c,
  DAILY_TRACK_STATE_OFF: Fc,
  DAILY_TRACK_STATE_PLAYABLE: qs,
  DAILY_TRACK_STATE_SENDABLE: qc,
  default: Rl
}, Symbol.toStringTag, { value: "Module" })), $l = /* @__PURE__ */ _a(ql);
var vn = { exports: {} }, st = typeof Reflect == "object" ? Reflect : null, gs = st && typeof st.apply == "function" ? st.apply : function(t, e, n) {
  return Function.prototype.apply.call(t, e, n);
}, Ut;
st && typeof st.ownKeys == "function" ? Ut = st.ownKeys : Object.getOwnPropertySymbols ? Ut = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Ut = function(t) {
  return Object.getOwnPropertyNames(t);
};
function Vl(r) {
  console && console.warn && console.warn(r);
}
var sa = Number.isNaN || function(t) {
  return t !== t;
};
function U() {
  U.init.call(this);
}
vn.exports = U;
vn.exports.once = Gl;
U.EventEmitter = U;
U.prototype._events = void 0;
U.prototype._eventsCount = 0;
U.prototype._maxListeners = void 0;
var vs = 10;
function or(r) {
  if (typeof r != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof r);
}
Object.defineProperty(U, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return vs;
  },
  set: function(r) {
    if (typeof r != "number" || r < 0 || sa(r))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + r + ".");
    vs = r;
  }
});
U.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
U.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || sa(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function oa(r) {
  return r._maxListeners === void 0 ? U.defaultMaxListeners : r._maxListeners;
}
U.prototype.getMaxListeners = function() {
  return oa(this);
};
U.prototype.emit = function(t) {
  for (var e = [], n = 1; n < arguments.length; n++) e.push(arguments[n]);
  var i = t === "error", o = this._events;
  if (o !== void 0)
    i = i && o.error === void 0;
  else if (!i)
    return !1;
  if (i) {
    var a;
    if (e.length > 0 && (a = e[0]), a instanceof Error)
      throw a;
    var u = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
    throw u.context = a, u;
  }
  var c = o[t];
  if (c === void 0)
    return !1;
  if (typeof c == "function")
    gs(c, this, e);
  else
    for (var p = c.length, m = da(c, p), n = 0; n < p; ++n)
      gs(m[n], this, e);
  return !0;
};
function aa(r, t, e, n) {
  var i, o, a;
  if (or(e), o = r._events, o === void 0 ? (o = r._events = /* @__PURE__ */ Object.create(null), r._eventsCount = 0) : (o.newListener !== void 0 && (r.emit(
    "newListener",
    t,
    e.listener ? e.listener : e
  ), o = r._events), a = o[t]), a === void 0)
    a = o[t] = e, ++r._eventsCount;
  else if (typeof a == "function" ? a = o[t] = n ? [e, a] : [a, e] : n ? a.unshift(e) : a.push(e), i = oa(r), i > 0 && a.length > i && !a.warned) {
    a.warned = !0;
    var u = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    u.name = "MaxListenersExceededWarning", u.emitter = r, u.type = t, u.count = a.length, Vl(u);
  }
  return r;
}
U.prototype.addListener = function(t, e) {
  return aa(this, t, e, !1);
};
U.prototype.on = U.prototype.addListener;
U.prototype.prependListener = function(t, e) {
  return aa(this, t, e, !0);
};
function Ul() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function ca(r, t, e) {
  var n = { fired: !1, wrapFn: void 0, target: r, type: t, listener: e }, i = Ul.bind(n);
  return i.listener = e, n.wrapFn = i, i;
}
U.prototype.once = function(t, e) {
  return or(e), this.on(t, ca(this, t, e)), this;
};
U.prototype.prependOnceListener = function(t, e) {
  return or(e), this.prependListener(t, ca(this, t, e)), this;
};
U.prototype.removeListener = function(t, e) {
  var n, i, o, a, u;
  if (or(e), i = this._events, i === void 0)
    return this;
  if (n = i[t], n === void 0)
    return this;
  if (n === e || n.listener === e)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, n.listener || e));
  else if (typeof n != "function") {
    for (o = -1, a = n.length - 1; a >= 0; a--)
      if (n[a] === e || n[a].listener === e) {
        u = n[a].listener, o = a;
        break;
      }
    if (o < 0)
      return this;
    o === 0 ? n.shift() : Bl(n, o), n.length === 1 && (i[t] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", t, u || e);
  }
  return this;
};
U.prototype.off = U.prototype.removeListener;
U.prototype.removeAllListeners = function(t) {
  var e, n, i;
  if (n = this._events, n === void 0)
    return this;
  if (n.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[t]), this;
  if (arguments.length === 0) {
    var o = Object.keys(n), a;
    for (i = 0; i < o.length; ++i)
      a = o[i], a !== "removeListener" && this.removeAllListeners(a);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (e = n[t], typeof e == "function")
    this.removeListener(t, e);
  else if (e !== void 0)
    for (i = e.length - 1; i >= 0; i--)
      this.removeListener(t, e[i]);
  return this;
};
function la(r, t, e) {
  var n = r._events;
  if (n === void 0)
    return [];
  var i = n[t];
  return i === void 0 ? [] : typeof i == "function" ? e ? [i.listener || i] : [i] : e ? Jl(i) : da(i, i.length);
}
U.prototype.listeners = function(t) {
  return la(this, t, !0);
};
U.prototype.rawListeners = function(t) {
  return la(this, t, !1);
};
U.listenerCount = function(r, t) {
  return typeof r.listenerCount == "function" ? r.listenerCount(t) : ua.call(r, t);
};
U.prototype.listenerCount = ua;
function ua(r) {
  var t = this._events;
  if (t !== void 0) {
    var e = t[r];
    if (typeof e == "function")
      return 1;
    if (e !== void 0)
      return e.length;
  }
  return 0;
}
U.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Ut(this._events) : [];
};
function da(r, t) {
  for (var e = new Array(t), n = 0; n < t; ++n)
    e[n] = r[n];
  return e;
}
function Bl(r, t) {
  for (; t + 1 < r.length; t++)
    r[t] = r[t + 1];
  r.pop();
}
function Jl(r) {
  for (var t = new Array(r.length), e = 0; e < t.length; ++e)
    t[e] = r[e].listener || r[e];
  return t;
}
function Gl(r, t) {
  return new Promise(function(e, n) {
    function i(a) {
      r.removeListener(t, o), n(a);
    }
    function o() {
      typeof r.removeListener == "function" && r.removeListener("error", i), e([].slice.call(arguments));
    }
    pa(r, t, o, { once: !0 }), t !== "error" && Yl(r, i, { once: !0 });
  });
}
function Yl(r, t, e) {
  typeof r.on == "function" && pa(r, "error", t, e);
}
function pa(r, t, e, n) {
  if (typeof r.on == "function")
    n.once ? r.once(t, e) : r.on(t, e);
  else if (typeof r.addEventListener == "function")
    r.addEventListener(t, function i(o) {
      n.once && r.removeEventListener(t, i), e(o);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof r);
}
var Wl = vn.exports, ar = {}, xe = {};
Object.defineProperty(xe, "__esModule", { value: !0 });
xe.Api = xe.HttpClient = xe.ContentType = void 0;
var M;
(function(r) {
  r.Json = "application/json", r.FormData = "multipart/form-data", r.UrlEncoded = "application/x-www-form-urlencoded", r.Text = "text/plain";
})(M || (xe.ContentType = M = {}));
class ha {
  constructor(t = {}) {
    I(this, "baseUrl", "https://api.vapi.ai");
    I(this, "securityData", null);
    I(this, "securityWorker");
    I(this, "abortControllers", /* @__PURE__ */ new Map());
    I(this, "customFetch", (...t) => fetch(...t));
    I(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    I(this, "setSecurityData", (t) => {
      this.securityData = t;
    });
    I(this, "contentFormatters", {
      [M.Json]: (t) => t !== null && (typeof t == "object" || typeof t == "string") ? JSON.stringify(t) : t,
      [M.Text]: (t) => t !== null && typeof t != "string" ? JSON.stringify(t) : t,
      [M.FormData]: (t) => Object.keys(t || {}).reduce((e, n) => {
        const i = t[n];
        return e.append(n, i instanceof Blob ? i : typeof i == "object" && i !== null ? JSON.stringify(i) : `${i}`), e;
      }, new FormData()),
      [M.UrlEncoded]: (t) => this.toQueryString(t)
    });
    I(this, "createAbortSignal", (t) => {
      if (this.abortControllers.has(t)) {
        const n = this.abortControllers.get(t);
        return n ? n.signal : void 0;
      }
      const e = new AbortController();
      return this.abortControllers.set(t, e), e.signal;
    });
    I(this, "abortRequest", (t) => {
      const e = this.abortControllers.get(t);
      e && (e.abort(), this.abortControllers.delete(t));
    });
    I(this, "request", async ({ body: t, secure: e, path: n, type: i, query: o, format: a, baseUrl: u, cancelToken: c, ...p }) => {
      const m = (typeof e == "boolean" ? e : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {}, g = this.mergeRequestParams(p, m), _ = o && this.toQueryString(o), w = this.contentFormatters[i || M.Json], y = a || g.format;
      return this.customFetch(`${u || this.baseUrl || ""}${n}${_ ? `?${_}` : ""}`, {
        ...g,
        headers: {
          ...g.headers || {},
          ...i && i !== M.FormData ? { "Content-Type": i } : {}
        },
        signal: (c ? this.createAbortSignal(c) : g.signal) || null,
        body: typeof t > "u" || t === null ? null : w(t)
      }).then(async (E) => {
        const C = E;
        C.data = null, C.error = null;
        const O = y ? await E[y]().then((j) => (C.ok ? C.data = j : C.error = j, C)).catch((j) => (C.error = j, C)) : C;
        if (c && this.abortControllers.delete(c), !E.ok)
          throw O;
        return O;
      });
    });
    Object.assign(this, t);
  }
  encodeQueryParam(t, e) {
    return `${encodeURIComponent(t)}=${encodeURIComponent(typeof e == "number" ? e : `${e}`)}`;
  }
  addQueryParam(t, e) {
    return this.encodeQueryParam(e, t[e]);
  }
  addArrayQueryParam(t, e) {
    return t[e].map((i) => this.encodeQueryParam(e, i)).join("&");
  }
  toQueryString(t) {
    const e = t || {};
    return Object.keys(e).filter((i) => typeof e[i] < "u").map((i) => Array.isArray(e[i]) ? this.addArrayQueryParam(e, i) : this.addQueryParam(e, i)).join("&");
  }
  addQueryParams(t) {
    const e = this.toQueryString(t);
    return e ? `?${e}` : "";
  }
  mergeRequestParams(t, e) {
    return {
      ...this.baseApiParams,
      ...t,
      ...e || {},
      headers: {
        ...this.baseApiParams.headers || {},
        ...t.headers || {},
        ...e && e.headers || {}
      }
    };
  }
}
xe.HttpClient = ha;
class Hl extends ha {
  constructor() {
    super(...arguments);
    I(this, "call", {
      /**
       * No description
       *
       * @tags Calls
       * @name CallControllerCreate
       * @summary Create Call
       * @request POST:/call
       * @secure
       */
      callControllerCreate: (e, n = {}) => this.request({
        path: "/call",
        method: "POST",
        body: e,
        secure: !0,
        type: M.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Calls
       * @name CallControllerFindAll
       * @summary List Calls
       * @request GET:/call
       * @secure
       */
      callControllerFindAll: (e, n = {}) => this.request({
        path: "/call",
        method: "GET",
        query: e,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Calls
       * @name CallControllerFindOne
       * @summary Get Call
       * @request GET:/call/{id}
       * @secure
       */
      callControllerFindOne: (e, n = {}) => this.request({
        path: `/call/${e}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Calls
       * @name CallControllerUpdate
       * @summary Update Call
       * @request PATCH:/call/{id}
       * @secure
       */
      callControllerUpdate: (e, n, i = {}) => this.request({
        path: `/call/${e}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: M.Json,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Calls
       * @name CallControllerDeleteCallData
       * @summary Delete Call Data
       * @request DELETE:/call/{id}
       * @secure
       */
      callControllerDeleteCallData: (e, n = {}) => this.request({
        path: `/call/${e}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Calls
       * @name CallControllerCreatePhoneCall
       * @summary Create Phone Call
       * @request POST:/call/phone
       * @deprecated
       * @secure
       */
      callControllerCreatePhoneCall: (e, n = {}) => this.request({
        path: "/call/phone",
        method: "POST",
        body: e,
        secure: !0,
        type: M.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Calls
       * @name CallControllerCreateWebCall
       * @summary Create Web Call
       * @request POST:/call/web
       * @secure
       */
      callControllerCreateWebCall: (e, n = {}) => this.request({
        path: "/call/web",
        method: "POST",
        body: e,
        secure: !0,
        type: M.Json,
        format: "json",
        ...n
      })
    });
    I(this, "v2", {
      /**
       * No description
       *
       * @tags Calls
       * @name CallControllerFindAllPaginated
       * @summary List Calls
       * @request GET:/v2/call
       * @secure
       */
      callControllerFindAllPaginated: (e, n = {}) => this.request({
        path: "/v2/call",
        method: "GET",
        query: e,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Calls
       * @name CallControllerFindAllMetadataPaginated
       * @summary List Call Metadata
       * @request GET:/v2/call/metadata
       * @secure
       */
      callControllerFindAllMetadataPaginated: (e, n = {}) => this.request({
        path: "/v2/call/metadata",
        method: "GET",
        query: e,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Assistants
       * @name AssistantControllerFindAllPaginated
       * @summary List Assistants with pagination
       * @request GET:/v2/assistant
       * @secure
       */
      assistantControllerFindAllPaginated: (e, n = {}) => this.request({
        path: "/v2/assistant",
        method: "GET",
        query: e,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Phone Numbers
       * @name PhoneNumberControllerFindAllPaginated
       * @summary List Phone Numbers
       * @request GET:/v2/phone-number
       * @secure
       */
      phoneNumberControllerFindAllPaginated: (e, n = {}) => this.request({
        path: "/v2/phone-number",
        method: "GET",
        query: e,
        secure: !0,
        format: "json",
        ...n
      })
    });
    I(this, "chat", {
      /**
       * No description
       *
       * @tags Chat
       * @name ChatController
       * @summary Chat with Assistant
       * @request POST:/chat
       * @deprecated
       * @secure
       */
      chatController: (e = {}) => this.request({
        path: "/chat",
        method: "POST",
        secure: !0,
        format: "json",
        ...e
      }),
      /**
       * No description
       *
       * @tags Chat
       * @name ChatControllerChatCompletions
       * @summary Chat with a Workflow
       * @request POST:/chat/completions
       * @secure
       */
      chatControllerChatCompletions: (e, n = {}) => this.request({
        path: "/chat/completions",
        method: "POST",
        body: e,
        secure: !0,
        type: M.Json,
        format: "json",
        ...n
      })
    });
    I(this, "assistant", {
      /**
       * No description
       *
       * @tags Assistants
       * @name AssistantControllerCreate
       * @summary Create Assistant
       * @request POST:/assistant
       * @secure
       */
      assistantControllerCreate: (e, n = {}) => this.request({
        path: "/assistant",
        method: "POST",
        body: e,
        secure: !0,
        type: M.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Assistants
       * @name AssistantControllerFindAll
       * @summary List Assistants
       * @request GET:/assistant
       * @secure
       */
      assistantControllerFindAll: (e, n = {}) => this.request({
        path: "/assistant",
        method: "GET",
        query: e,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Assistants
       * @name AssistantControllerFindOne
       * @summary Get Assistant
       * @request GET:/assistant/{id}
       * @secure
       */
      assistantControllerFindOne: (e, n = {}) => this.request({
        path: `/assistant/${e}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Assistants
       * @name AssistantControllerUpdate
       * @summary Update Assistant
       * @request PATCH:/assistant/{id}
       * @secure
       */
      assistantControllerUpdate: (e, n, i = {}) => this.request({
        path: `/assistant/${e}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: M.Json,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Assistants
       * @name AssistantControllerReplace
       * @summary Replace Assistant
       * @request PUT:/assistant/{id}
       * @secure
       */
      assistantControllerReplace: (e, n, i = {}) => this.request({
        path: `/assistant/${e}`,
        method: "PUT",
        body: n,
        secure: !0,
        type: M.Json,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Assistants
       * @name AssistantControllerRemove
       * @summary Delete Assistant
       * @request DELETE:/assistant/{id}
       * @secure
       */
      assistantControllerRemove: (e, n = {}) => this.request({
        path: `/assistant/${e}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      })
    });
    I(this, "phoneNumber", {
      /**
       * @description Use POST /phone-number instead.
       *
       * @tags Phone Numbers
       * @name PhoneNumberControllerImportTwilio
       * @summary Import Twilio Number
       * @request POST:/phone-number/import/twilio
       * @deprecated
       * @secure
       */
      phoneNumberControllerImportTwilio: (e, n = {}) => this.request({
        path: "/phone-number/import/twilio",
        method: "POST",
        body: e,
        secure: !0,
        type: M.Json,
        format: "json",
        ...n
      }),
      /**
       * @description Use POST /phone-number instead.
       *
       * @tags Phone Numbers
       * @name PhoneNumberControllerImportVonage
       * @summary Import Vonage Number
       * @request POST:/phone-number/import/vonage
       * @deprecated
       * @secure
       */
      phoneNumberControllerImportVonage: (e, n = {}) => this.request({
        path: "/phone-number/import/vonage",
        method: "POST",
        body: e,
        secure: !0,
        type: M.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Phone Numbers
       * @name PhoneNumberControllerCreate
       * @summary Create Phone Number
       * @request POST:/phone-number
       * @secure
       */
      phoneNumberControllerCreate: (e, n = {}) => this.request({
        path: "/phone-number",
        method: "POST",
        body: e,
        secure: !0,
        type: M.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Phone Numbers
       * @name PhoneNumberControllerFindAll
       * @summary List Phone Numbers
       * @request GET:/phone-number
       * @secure
       */
      phoneNumberControllerFindAll: (e, n = {}) => this.request({
        path: "/phone-number",
        method: "GET",
        query: e,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Phone Numbers
       * @name PhoneNumberControllerFindOne
       * @summary Get Phone Number
       * @request GET:/phone-number/{id}
       * @secure
       */
      phoneNumberControllerFindOne: (e, n = {}) => this.request({
        path: `/phone-number/${e}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Phone Numbers
       * @name PhoneNumberControllerUpdate
       * @summary Update Phone Number
       * @request PATCH:/phone-number/{id}
       * @secure
       */
      phoneNumberControllerUpdate: (e, n, i = {}) => this.request({
        path: `/phone-number/${e}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: M.Json,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Phone Numbers
       * @name PhoneNumberControllerRemove
       * @summary Delete Phone Number
       * @request DELETE:/phone-number/{id}
       * @secure
       */
      phoneNumberControllerRemove: (e, n = {}) => this.request({
        path: `/phone-number/${e}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      })
    });
    I(this, "tool", {
      /**
       * No description
       *
       * @tags Tools
       * @name ToolControllerCreate
       * @summary Create Tool
       * @request POST:/tool
       * @secure
       */
      toolControllerCreate: (e, n = {}) => this.request({
        path: "/tool",
        method: "POST",
        body: e,
        secure: !0,
        type: M.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Tools
       * @name ToolControllerFindAll
       * @summary List Tools
       * @request GET:/tool
       * @secure
       */
      toolControllerFindAll: (e, n = {}) => this.request({
        path: "/tool",
        method: "GET",
        query: e,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Tools
       * @name ToolControllerFindOne
       * @summary Get Tool
       * @request GET:/tool/{id}
       * @secure
       */
      toolControllerFindOne: (e, n = {}) => this.request({
        path: `/tool/${e}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Tools
       * @name ToolControllerUpdate
       * @summary Update Tool
       * @request PATCH:/tool/{id}
       * @secure
       */
      toolControllerUpdate: (e, n, i = {}) => this.request({
        path: `/tool/${e}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: M.Json,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Tools
       * @name ToolControllerRemove
       * @summary Delete Tool
       * @request DELETE:/tool/{id}
       * @secure
       */
      toolControllerRemove: (e, n = {}) => this.request({
        path: `/tool/${e}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      })
    });
    I(this, "file", {
      /**
       * @description Use POST /file instead.
       *
       * @tags Files
       * @name FileControllerCreateDeprecated
       * @summary Upload File
       * @request POST:/file/upload
       * @deprecated
       * @secure
       */
      fileControllerCreateDeprecated: (e, n = {}) => this.request({
        path: "/file/upload",
        method: "POST",
        body: e,
        secure: !0,
        type: M.FormData,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Files
       * @name FileControllerCreate
       * @summary Upload File
       * @request POST:/file
       * @secure
       */
      fileControllerCreate: (e, n = {}) => this.request({
        path: "/file",
        method: "POST",
        body: e,
        secure: !0,
        type: M.FormData,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Files
       * @name FileControllerFindAll
       * @summary List Files
       * @request GET:/file
       * @secure
       */
      fileControllerFindAll: (e = {}) => this.request({
        path: "/file",
        method: "GET",
        secure: !0,
        format: "json",
        ...e
      }),
      /**
       * No description
       *
       * @tags Files
       * @name FileControllerFindOne
       * @summary Get File
       * @request GET:/file/{id}
       * @secure
       */
      fileControllerFindOne: (e, n = {}) => this.request({
        path: `/file/${e}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Files
       * @name FileControllerUpdate
       * @summary Update File
       * @request PATCH:/file/{id}
       * @secure
       */
      fileControllerUpdate: (e, n, i = {}) => this.request({
        path: `/file/${e}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: M.Json,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Files
       * @name FileControllerRemove
       * @summary Delete File
       * @request DELETE:/file/{id}
       * @secure
       */
      fileControllerRemove: (e, n = {}) => this.request({
        path: `/file/${e}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      })
    });
    I(this, "knowledgeBase", {
      /**
       * No description
       *
       * @tags Knowledge Base
       * @name KnowledgeBaseControllerCreate
       * @summary Create Knowledge Base
       * @request POST:/knowledge-base
       * @secure
       */
      knowledgeBaseControllerCreate: (e, n = {}) => this.request({
        path: "/knowledge-base",
        method: "POST",
        body: e,
        secure: !0,
        type: M.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Knowledge Base
       * @name KnowledgeBaseControllerFindAll
       * @summary List Knowledge Bases
       * @request GET:/knowledge-base
       * @secure
       */
      knowledgeBaseControllerFindAll: (e, n = {}) => this.request({
        path: "/knowledge-base",
        method: "GET",
        query: e,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Knowledge Base
       * @name KnowledgeBaseControllerFindOne
       * @summary Get Knowledge Base
       * @request GET:/knowledge-base/{id}
       * @secure
       */
      knowledgeBaseControllerFindOne: (e, n = {}) => this.request({
        path: `/knowledge-base/${e}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Knowledge Base
       * @name KnowledgeBaseControllerUpdate
       * @summary Update Knowledge Base
       * @request PATCH:/knowledge-base/{id}
       * @secure
       */
      knowledgeBaseControllerUpdate: (e, n, i = {}) => this.request({
        path: `/knowledge-base/${e}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: M.Json,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Knowledge Base
       * @name KnowledgeBaseControllerRemove
       * @summary Delete Knowledge Base
       * @request DELETE:/knowledge-base/{id}
       * @secure
       */
      knowledgeBaseControllerRemove: (e, n = {}) => this.request({
        path: `/knowledge-base/${e}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      })
    });
    I(this, "workflow", {
      /**
       * No description
       *
       * @tags Workflow
       * @name WorkflowControllerFindAll
       * @summary Get Workflows
       * @request GET:/workflow
       * @secure
       */
      workflowControllerFindAll: (e = {}) => this.request({
        path: "/workflow",
        method: "GET",
        secure: !0,
        format: "json",
        ...e
      }),
      /**
       * No description
       *
       * @tags Workflow
       * @name WorkflowControllerCreate
       * @summary Create Workflow
       * @request POST:/workflow
       * @secure
       */
      workflowControllerCreate: (e, n = {}) => this.request({
        path: "/workflow",
        method: "POST",
        body: e,
        secure: !0,
        type: M.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Workflow
       * @name WorkflowControllerFindOne
       * @summary Get Workflow
       * @request GET:/workflow/{id}
       * @secure
       */
      workflowControllerFindOne: (e, n = {}) => this.request({
        path: `/workflow/${e}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Workflow
       * @name WorkflowControllerDelete
       * @summary Delete Workflow
       * @request DELETE:/workflow/{id}
       * @secure
       */
      workflowControllerDelete: (e, n = {}) => this.request({
        path: `/workflow/${e}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Workflow
       * @name WorkflowControllerUpdate
       * @summary Update Workflow
       * @request PATCH:/workflow/{id}
       * @secure
       */
      workflowControllerUpdate: (e, n, i = {}) => this.request({
        path: `/workflow/${e}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: M.Json,
        format: "json",
        ...i
      })
    });
    I(this, "squad", {
      /**
       * No description
       *
       * @tags Squads
       * @name SquadControllerCreate
       * @summary Create Squad
       * @request POST:/squad
       * @secure
       */
      squadControllerCreate: (e, n = {}) => this.request({
        path: "/squad",
        method: "POST",
        body: e,
        secure: !0,
        type: M.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Squads
       * @name SquadControllerFindAll
       * @summary List Squads
       * @request GET:/squad
       * @secure
       */
      squadControllerFindAll: (e, n = {}) => this.request({
        path: "/squad",
        method: "GET",
        query: e,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Squads
       * @name SquadControllerFindOne
       * @summary Get Squad
       * @request GET:/squad/{id}
       * @secure
       */
      squadControllerFindOne: (e, n = {}) => this.request({
        path: `/squad/${e}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Squads
       * @name SquadControllerUpdate
       * @summary Update Squad
       * @request PATCH:/squad/{id}
       * @secure
       */
      squadControllerUpdate: (e, n, i = {}) => this.request({
        path: `/squad/${e}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: M.Json,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Squads
       * @name SquadControllerRemove
       * @summary Delete Squad
       * @request DELETE:/squad/{id}
       * @secure
       */
      squadControllerRemove: (e, n = {}) => this.request({
        path: `/squad/${e}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      })
    });
    I(this, "testSuite", {
      /**
       * No description
       *
       * @tags Test Suites
       * @name TestSuiteControllerFindAllPaginated
       * @summary List Test Suites
       * @request GET:/test-suite
       * @secure
       */
      testSuiteControllerFindAllPaginated: (e, n = {}) => this.request({
        path: "/test-suite",
        method: "GET",
        query: e,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Test Suites
       * @name TestSuiteControllerCreate
       * @summary Create Test Suite
       * @request POST:/test-suite
       * @secure
       */
      testSuiteControllerCreate: (e, n = {}) => this.request({
        path: "/test-suite",
        method: "POST",
        body: e,
        secure: !0,
        type: M.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Test Suites
       * @name TestSuiteControllerFindOne
       * @summary Get Test Suite
       * @request GET:/test-suite/{id}
       * @secure
       */
      testSuiteControllerFindOne: (e, n = {}) => this.request({
        path: `/test-suite/${e}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Test Suites
       * @name TestSuiteControllerUpdate
       * @summary Update Test Suite
       * @request PATCH:/test-suite/{id}
       * @secure
       */
      testSuiteControllerUpdate: (e, n, i = {}) => this.request({
        path: `/test-suite/${e}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: M.Json,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Test Suites
       * @name TestSuiteControllerRemove
       * @summary Delete Test Suite
       * @request DELETE:/test-suite/{id}
       * @secure
       */
      testSuiteControllerRemove: (e, n = {}) => this.request({
        path: `/test-suite/${e}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Test Suite Tests
       * @name TestSuiteTestControllerFindAllPaginated
       * @summary List Tests
       * @request GET:/test-suite/{testSuiteId}/test
       * @secure
       */
      testSuiteTestControllerFindAllPaginated: (e, n, i = {}) => this.request({
        path: `/test-suite/${e}/test`,
        method: "GET",
        query: n,
        secure: !0,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Test Suite Tests
       * @name TestSuiteTestControllerCreate
       * @summary Create Test
       * @request POST:/test-suite/{testSuiteId}/test
       * @secure
       */
      testSuiteTestControllerCreate: (e, n, i = {}) => this.request({
        path: `/test-suite/${e}/test`,
        method: "POST",
        body: n,
        secure: !0,
        type: M.Json,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Test Suite Tests
       * @name TestSuiteTestControllerFindOne
       * @summary Get Test
       * @request GET:/test-suite/{testSuiteId}/test/{id}
       * @secure
       */
      testSuiteTestControllerFindOne: (e, n, i = {}) => this.request({
        path: `/test-suite/${e}/test/${n}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Test Suite Tests
       * @name TestSuiteTestControllerUpdate
       * @summary Update Test
       * @request PATCH:/test-suite/{testSuiteId}/test/{id}
       * @secure
       */
      testSuiteTestControllerUpdate: (e, n, i, o = {}) => this.request({
        path: `/test-suite/${e}/test/${n}`,
        method: "PATCH",
        body: i,
        secure: !0,
        type: M.Json,
        format: "json",
        ...o
      }),
      /**
       * No description
       *
       * @tags Test Suite Tests
       * @name TestSuiteTestControllerRemove
       * @summary Delete Test
       * @request DELETE:/test-suite/{testSuiteId}/test/{id}
       * @secure
       */
      testSuiteTestControllerRemove: (e, n, i = {}) => this.request({
        path: `/test-suite/${e}/test/${n}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Test Suite Runs
       * @name TestSuiteRunControllerFindAllPaginated
       * @summary List Test Suite Runs
       * @request GET:/test-suite/{testSuiteId}/run
       * @secure
       */
      testSuiteRunControllerFindAllPaginated: (e, n, i = {}) => this.request({
        path: `/test-suite/${e}/run`,
        method: "GET",
        query: n,
        secure: !0,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Test Suite Runs
       * @name TestSuiteRunControllerCreate
       * @summary Create Test Suite Run
       * @request POST:/test-suite/{testSuiteId}/run
       * @secure
       */
      testSuiteRunControllerCreate: (e, n, i = {}) => this.request({
        path: `/test-suite/${e}/run`,
        method: "POST",
        body: n,
        secure: !0,
        type: M.Json,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Test Suite Runs
       * @name TestSuiteRunControllerFindOne
       * @summary Get Test Suite Run
       * @request GET:/test-suite/{testSuiteId}/run/{id}
       * @secure
       */
      testSuiteRunControllerFindOne: (e, n, i = {}) => this.request({
        path: `/test-suite/${e}/run/${n}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Test Suite Runs
       * @name TestSuiteRunControllerUpdate
       * @summary Update Test Suite Run
       * @request PATCH:/test-suite/{testSuiteId}/run/{id}
       * @secure
       */
      testSuiteRunControllerUpdate: (e, n, i, o = {}) => this.request({
        path: `/test-suite/${e}/run/${n}`,
        method: "PATCH",
        body: i,
        secure: !0,
        type: M.Json,
        format: "json",
        ...o
      }),
      /**
       * No description
       *
       * @tags Test Suite Runs
       * @name TestSuiteRunControllerRemove
       * @summary Delete Test Suite Run
       * @request DELETE:/test-suite/{testSuiteId}/run/{id}
       * @secure
       */
      testSuiteRunControllerRemove: (e, n, i = {}) => this.request({
        path: `/test-suite/${e}/run/${n}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...i
      })
    });
    I(this, "metrics", {
      /**
       * @description Use GET /metric instead
       *
       * @tags Analytics
       * @name AnalyticsControllerFindAllDeprecated
       * @summary List Billing Metrics
       * @request GET:/metrics
       * @deprecated
       * @secure
       */
      analyticsControllerFindAllDeprecated: (e, n = {}) => this.request({
        path: "/metrics",
        method: "GET",
        query: e,
        secure: !0,
        format: "json",
        ...n
      })
    });
    I(this, "analytics", {
      /**
       * No description
       *
       * @tags Analytics
       * @name AnalyticsControllerQuery
       * @summary Create Analytics Queries
       * @request POST:/analytics
       * @secure
       */
      analyticsControllerQuery: (e, n = {}) => this.request({
        path: "/analytics",
        method: "POST",
        body: e,
        secure: !0,
        type: M.Json,
        format: "json",
        ...n
      })
    });
    I(this, "log", {
      /**
       * No description
       *
       * @tags Logs
       * @name LoggingControllerCallLogsQuery
       * @summary Get Call Logs
       * @request GET:/log
       * @secure
       */
      loggingControllerCallLogsQuery: (e, n = {}) => this.request({
        path: "/log",
        method: "GET",
        query: e,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Logs
       * @name LoggingControllerCallLogsDeleteQuery
       * @summary Delete Call Logs
       * @request DELETE:/log
       * @secure
       */
      loggingControllerCallLogsDeleteQuery: (e, n = {}) => this.request({
        path: "/log",
        method: "DELETE",
        query: e,
        secure: !0,
        ...n
      })
    });
    I(this, "logs", {
      /**
       * No description
       *
       * @tags Logs
       * @name LoggingControllerLogsQuery
       * @summary Get Logs
       * @request GET:/logs
       * @deprecated
       * @secure
       */
      loggingControllerLogsQuery: (e, n = {}) => this.request({
        path: "/logs",
        method: "GET",
        query: e,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Logs
       * @name LoggingControllerLogsDeleteQuery
       * @summary Delete Logs
       * @request DELETE:/logs
       * @deprecated
       * @secure
       */
      loggingControllerLogsDeleteQuery: (e, n = {}) => this.request({
        path: "/logs",
        method: "DELETE",
        query: e,
        secure: !0,
        ...n
      })
    });
    I(this, "org", {
      /**
       * No description
       *
       * @tags Orgs
       * @name OrgControllerCreate
       * @summary Create Org
       * @request POST:/org
       * @secure
       */
      orgControllerCreate: (e, n = {}) => this.request({
        path: "/org",
        method: "POST",
        body: e,
        secure: !0,
        type: M.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Orgs
       * @name OrgControllerFindAll
       * @summary List Orgs
       * @request GET:/org
       * @secure
       */
      orgControllerFindAll: (e = {}) => this.request({
        path: "/org",
        method: "GET",
        secure: !0,
        format: "json",
        ...e
      }),
      /**
       * No description
       *
       * @tags Orgs
       * @name OrgControllerFindOne
       * @summary Get Org
       * @request GET:/org/{id}
       * @secure
       */
      orgControllerFindOne: (e, n = {}) => this.request({
        path: `/org/${e}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Orgs
       * @name OrgControllerUpdate
       * @summary Update Org
       * @request PATCH:/org/{id}
       * @secure
       */
      orgControllerUpdate: (e, n, i = {}) => this.request({
        path: `/org/${e}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: M.Json,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Orgs
       * @name OrgControllerDeleteOrg
       * @summary Delete Org
       * @request DELETE:/org/{id}
       * @secure
       */
      orgControllerDeleteOrg: (e, n = {}) => this.request({
        path: `/org/${e}`,
        method: "DELETE",
        secure: !0,
        ...n
      }),
      /**
       * No description
       *
       * @tags Orgs
       * @name OrgControllerFindAllUsers
       * @summary List Users
       * @request GET:/org/{id}/user
       * @secure
       */
      orgControllerFindAllUsers: (e, n = {}) => this.request({
        path: `/org/${e}/user`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Orgs
       * @name OrgControllerOrgLeave
       * @summary Leave Org
       * @request DELETE:/org/{id}/leave
       * @secure
       */
      orgControllerOrgLeave: (e, n = {}) => this.request({
        path: `/org/${e}/leave`,
        method: "DELETE",
        secure: !0,
        ...n
      }),
      /**
       * No description
       *
       * @tags Orgs
       * @name OrgControllerOrgRemoveUser
       * @summary Remove Org Member
       * @request DELETE:/org/{id}/member/{memberId}/leave
       * @secure
       */
      orgControllerOrgRemoveUser: (e, n, i = {}) => this.request({
        path: `/org/${e}/member/${n}/leave`,
        method: "DELETE",
        secure: !0,
        ...i
      }),
      /**
       * No description
       *
       * @tags Orgs
       * @name OrgControllerUsersInvite
       * @summary Invite User
       * @request POST:/org/{id}/invite
       * @secure
       */
      orgControllerUsersInvite: (e, n, i = {}) => this.request({
        path: `/org/${e}/invite`,
        method: "POST",
        body: n,
        secure: !0,
        type: M.Json,
        ...i
      }),
      /**
       * No description
       *
       * @tags Orgs
       * @name OrgControllerUserUpdate
       * @summary Update User Role
       * @request PATCH:/org/{id}/role
       * @secure
       */
      orgControllerUserUpdate: (e, n, i = {}) => this.request({
        path: `/org/${e}/role`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: M.Json,
        ...i
      })
    });
    I(this, "token", {
      /**
       * No description
       *
       * @tags Tokens
       * @name TokenControllerCreate
       * @summary Create Token
       * @request POST:/token
       * @secure
       */
      tokenControllerCreate: (e, n = {}) => this.request({
        path: "/token",
        method: "POST",
        body: e,
        secure: !0,
        type: M.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Tokens
       * @name TokenControllerFindAll
       * @summary List Tokens
       * @request GET:/token
       * @secure
       */
      tokenControllerFindAll: (e, n = {}) => this.request({
        path: "/token",
        method: "GET",
        query: e,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Tokens
       * @name TokenControllerFindOne
       * @summary Get Token
       * @request GET:/token/{id}
       * @secure
       */
      tokenControllerFindOne: (e, n = {}) => this.request({
        path: `/token/${e}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Tokens
       * @name TokenControllerUpdate
       * @summary Update Token
       * @request PATCH:/token/{id}
       * @secure
       */
      tokenControllerUpdate: (e, n, i = {}) => this.request({
        path: `/token/${e}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: M.Json,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Tokens
       * @name TokenControllerRemove
       * @summary Delete Token
       * @request DELETE:/token/{id}
       * @secure
       */
      tokenControllerRemove: (e, n = {}) => this.request({
        path: `/token/${e}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      })
    });
    I(this, "credential", {
      /**
       * No description
       *
       * @tags Credentials
       * @name CredentialControllerCreate
       * @summary Create Credential
       * @request POST:/credential
       * @secure
       */
      credentialControllerCreate: (e, n = {}) => this.request({
        path: "/credential",
        method: "POST",
        body: e,
        secure: !0,
        type: M.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Credentials
       * @name CredentialControllerFindAll
       * @summary List Credentials
       * @request GET:/credential
       * @secure
       */
      credentialControllerFindAll: (e, n = {}) => this.request({
        path: "/credential",
        method: "GET",
        query: e,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Credentials
       * @name CredentialControllerFindOne
       * @summary Get Credential
       * @request GET:/credential/{id}
       * @secure
       */
      credentialControllerFindOne: (e, n = {}) => this.request({
        path: `/credential/${e}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Credentials
       * @name CredentialControllerUpdate
       * @summary Update Credential
       * @request PATCH:/credential/{id}
       * @secure
       */
      credentialControllerUpdate: (e, n, i = {}) => this.request({
        path: `/credential/${e}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: M.Json,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Credentials
       * @name CredentialControllerRemove
       * @summary Delete Credential
       * @request DELETE:/credential/{id}
       * @secure
       */
      credentialControllerRemove: (e, n = {}) => this.request({
        path: `/credential/${e}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Credentials
       * @name CredentialControllerGenerateSession
       * @summary Generate a credential session
       * @request POST:/credential/session
       * @secure
       */
      credentialControllerGenerateSession: (e, n = {}) => this.request({
        path: "/credential/session",
        method: "POST",
        body: e,
        secure: !0,
        type: M.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Credentials
       * @name CredentialControllerHandleWebhook
       * @summary Handle credential webhook
       * @request POST:/credential/webhook
       */
      credentialControllerHandleWebhook: (e, n = {}) => this.request({
        path: "/credential/webhook",
        method: "POST",
        body: e,
        type: M.Json,
        ...n
      }),
      /**
       * No description
       *
       * @tags Credentials
       * @name CredentialControllerTriggerCredentialAction
       * @summary Trigger a credential action
       * @request POST:/credential/trigger
       * @secure
       */
      credentialControllerTriggerCredentialAction: (e, n = {}) => this.request({
        path: "/credential/trigger",
        method: "POST",
        body: e,
        secure: !0,
        type: M.Json,
        ...n
      })
    });
    I(this, "template", {
      /**
       * No description
       *
       * @tags Templates
       * @name TemplateControllerCreate
       * @summary Create Template
       * @request POST:/template
       * @secure
       */
      templateControllerCreate: (e, n = {}) => this.request({
        path: "/template",
        method: "POST",
        body: e,
        secure: !0,
        type: M.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Templates
       * @name TemplateControllerFindAll
       * @summary List Templates
       * @request GET:/template
       * @secure
       */
      templateControllerFindAll: (e, n = {}) => this.request({
        path: "/template",
        method: "GET",
        query: e,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Templates
       * @name TemplateControllerFindAllPinned
       * @summary List Templates
       * @request GET:/template/pinned
       * @secure
       */
      templateControllerFindAllPinned: (e = {}) => this.request({
        path: "/template/pinned",
        method: "GET",
        secure: !0,
        format: "json",
        ...e
      }),
      /**
       * No description
       *
       * @tags Templates
       * @name TemplateControllerFindOne
       * @summary Get Template
       * @request GET:/template/{id}
       * @secure
       */
      templateControllerFindOne: (e, n = {}) => this.request({
        path: `/template/${e}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Templates
       * @name TemplateControllerUpdate
       * @summary Update Template
       * @request PATCH:/template/{id}
       * @secure
       */
      templateControllerUpdate: (e, n, i = {}) => this.request({
        path: `/template/${e}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: M.Json,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Templates
       * @name TemplateControllerRemove
       * @summary Delete Template
       * @request DELETE:/template/{id}
       * @secure
       */
      templateControllerRemove: (e, n = {}) => this.request({
        path: `/template/${e}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      })
    });
    I(this, "voiceLibrary", {
      /**
       * No description
       *
       * @tags Voice Library
       * @name VoiceLibraryControllerVoiceGetByProvider
       * @summary Get voices in Voice Library by Provider
       * @request GET:/voice-library/{provider}
       * @secure
       */
      voiceLibraryControllerVoiceGetByProvider: (e, n, i = {}) => this.request({
        path: `/voice-library/${e}`,
        method: "GET",
        query: n,
        secure: !0,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Voice Library
       * @name VoiceLibraryControllerVoiceGetAccentsByProvider
       * @summary Get accents in Voice Library by Provider
       * @request GET:/voice-library/{provider}/accents
       * @secure
       */
      voiceLibraryControllerVoiceGetAccentsByProvider: (e, n = {}) => this.request({
        path: `/voice-library/${e}/accents`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Voice Library
       * @name VoiceLibraryControllerVoiceLibrarySyncByProvider
       * @summary Sync Private voices in Voice Library by Provider
       * @request POST:/voice-library/sync/{provider}
       * @secure
       */
      voiceLibraryControllerVoiceLibrarySyncByProvider: (e, n = {}) => this.request({
        path: `/voice-library/sync/${e}`,
        method: "POST",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Voice Library
       * @name VoiceLibraryControllerVoiceLibrarySyncDefaultVoices
       * @summary Sync Default voices in Voice Library by Providers
       * @request POST:/voice-library/sync
       * @secure
       */
      voiceLibraryControllerVoiceLibrarySyncDefaultVoices: (e, n = {}) => this.request({
        path: "/voice-library/sync",
        method: "POST",
        body: e,
        secure: !0,
        type: M.Json,
        format: "json",
        ...n
      })
    });
    I(this, "provider", {
      /**
       * No description
       *
       * @tags Providers
       * @name ProviderControllerGetWorkflows
       * @request GET:/{provider}/workflows
       * @secure
       */
      providerControllerGetWorkflows: (e, n, i = {}) => this.request({
        path: `/${e}/workflows`,
        method: "GET",
        query: n,
        secure: !0,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Providers
       * @name ProviderControllerGetWorkflowTriggerHook
       * @request GET:/{provider}/workflows/{workflowId}/hooks
       * @secure
       */
      providerControllerGetWorkflowTriggerHook: (e, n, i = {}) => this.request({
        path: `/${e}/workflows/${n}/hooks`,
        method: "GET",
        secure: !0,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Providers
       * @name ProviderControllerGetLocations
       * @request GET:/{provider}/locations
       * @secure
       */
      providerControllerGetLocations: (e, n = {}) => this.request({
        path: `/${e}/locations`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Providers
       * @name VoiceProviderControllerSearchVoices
       * @summary Search Voice from Provider Voice Library.
       * @request GET:/{provider}/voices/search
       * @deprecated
       * @secure
       */
      voiceProviderControllerSearchVoices: (e, n, i = {}) => this.request({
        path: `/${e}/voices/search`,
        method: "GET",
        query: n,
        secure: !0,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Providers
       * @name VoiceProviderControllerSearchVoice
       * @summary Search Voice from Provider Voice Library.
       * @request GET:/{provider}/voice/search
       * @secure
       */
      voiceProviderControllerSearchVoice: (e, n, i = {}) => this.request({
        path: `/${e}/voice/search`,
        method: "GET",
        query: n,
        secure: !0,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Providers
       * @name VoiceProviderControllerAddVoices
       * @summary Add Shared Voice to your Provider Account.
       * @request POST:/{provider}/voices/add
       * @deprecated
       * @secure
       */
      voiceProviderControllerAddVoices: (e, n, i = {}) => this.request({
        path: `/${e}/voices/add`,
        method: "POST",
        body: n,
        secure: !0,
        type: M.Json,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Providers
       * @name VoiceProviderControllerAddVoice
       * @summary Add Shared Voice to your Provider Account.
       * @request POST:/{provider}/voice/add
       * @secure
       */
      voiceProviderControllerAddVoice: (e, n, i = {}) => this.request({
        path: `/${e}/voice/add`,
        method: "POST",
        body: n,
        secure: !0,
        type: M.Json,
        format: "json",
        ...i
      })
    });
    I(this, "v11Labs", {
      /**
       * No description
       *
       * @tags Providers
       * @name VoiceProviderControllerCloneVoices
       * @summary Clone a voice to the provider account and add to Vapi Voice Library.
       * @request POST:/11labs/voice/clone
       * @secure
       */
      voiceProviderControllerCloneVoices: (e, n = {}) => this.request({
        path: "/11labs/voice/clone",
        method: "POST",
        body: e,
        secure: !0,
        type: M.FormData,
        ...n
      })
    });
  }
}
xe.Api = Hl;
Object.defineProperty(ar, "__esModule", { value: !0 });
ar.client = void 0;
const zl = xe, Ql = new zl.Api({
  baseUrl: "https://api.vapi.ai",
  baseApiParams: {
    secure: !0
  },
  securityWorker: async (r) => {
    if (r)
      return {
        headers: {
          Authorization: `Bearer ${r}`
        }
      };
  }
});
ar.client = Ql;
var fa = On && On.__importDefault || function(r) {
  return r && r.__esModule ? r : { default: r };
};
Object.defineProperty(_s, "__esModule", { value: !0 });
const Kl = fa($l), Xl = fa(Wl), kr = ar;
async function Zl(r, t) {
  r.muted = !1, r.autoplay = !0, t != null && (r.srcObject = new MediaStream([t]), await r.play());
}
async function eu(r, t) {
  const e = document.createElement("audio");
  return e.dataset.participantId = t, document.body.appendChild(e), await Zl(e, r), e;
}
function tu(r) {
  const t = document.querySelector(`audio[data-participant-id="${r}"]`);
  t == null || t.remove();
}
function ru(r, t, e, n) {
  r.participant.local || t.updateParticipant(r.participant.session_id, {
    setSubscribedTracks: {
      audio: !0,
      video: e || n
    }
  });
}
class nu extends Xl.default {
  on(t, e) {
    return super.on(t, e), this;
  }
  once(t, e) {
    return super.once(t, e), this;
  }
  emit(t, ...e) {
    return super.emit(t, ...e);
  }
  removeListener(t, e) {
    return super.removeListener(t, e), this;
  }
  removeAllListeners(t) {
    return super.removeAllListeners(t), this;
  }
}
class iu extends nu {
  constructor(e, n, i, o) {
    super();
    I(this, "started", !1);
    I(this, "call", null);
    I(this, "speakingTimeout", null);
    I(this, "dailyCallConfig", {});
    I(this, "dailyCallObject", {});
    I(this, "hasEmittedCallEndedStatus", !1);
    kr.client.baseUrl = n ?? "https://api.vapi.ai", kr.client.setSecurityData(e), this.dailyCallConfig = i ?? {}, this.dailyCallObject = o ?? {};
  }
  cleanup() {
    var e;
    this.started = !1, this.hasEmittedCallEndedStatus = !1, (e = this.call) == null || e.destroy(), this.call = null, this.speakingTimeout = null;
  }
  isMobileDevice() {
    if (typeof navigator > "u")
      return !1;
    const e = navigator.userAgent;
    return /android|iphone|ipad|ipod|iemobile|blackberry|bada/i.test(e.toLowerCase());
  }
  async sleep(e) {
    return new Promise((n) => setTimeout(n, e));
  }
  async start(e, n, i) {
    var o, a, u;
    if (!e && !i)
      throw new Error("Assistant or Squad must be provided.");
    if (this.started)
      return null;
    this.started = !0;
    try {
      const c = (await kr.client.call.callControllerCreateWebCall({
        assistant: typeof e == "string" ? void 0 : e,
        assistantId: typeof e == "string" ? e : void 0,
        assistantOverrides: n,
        squad: typeof i == "string" ? void 0 : i,
        squadId: typeof i == "string" ? i : void 0
      })).data;
      this.call && this.cleanup();
      const p = ((o = c == null ? void 0 : c.artifactPlan) == null ? void 0 : o.videoRecordingEnabled) ?? !1, m = ((a = c.transport) == null ? void 0 : a.assistantVideoEnabled) ?? !1;
      if (this.call = Kl.default.createCallObject({
        audioSource: this.dailyCallObject.audioSource ?? !0,
        videoSource: this.dailyCallObject.videoSource ?? p,
        dailyConfig: this.dailyCallConfig
      }), (u = this.call.iframe()) == null || u.style.setProperty("display", "none"), this.call.on("left-meeting", () => {
        var g;
        this.emit("call-end"), this.hasEmittedCallEndedStatus || (this.emit("message", {
          type: "status-update",
          status: "ended",
          endedReason: "customer-ended-call"
        }), this.hasEmittedCallEndedStatus = !0), p && ((g = this.call) == null || g.stopRecording()), this.cleanup();
      }), this.call.on("error", (g) => {
        var _;
        this.emit("error", g), p && ((_ = this.call) == null || _.stopRecording());
      }), this.call.on("camera-error", (g) => {
        this.emit("error", g);
      }), this.call.on("track-started", async (g) => {
        var _, w, y;
        !g || !g.participant || (_ = g.participant) != null && _.local || ((w = g.participant) == null ? void 0 : w.user_name) === "Vapi Speaker" && (g.track.kind === "video" && this.emit("video", g.track), g.track.kind === "audio" && await eu(g.track, g.participant.session_id), (y = this.call) == null || y.sendAppMessage("playable"));
      }), this.call.on("participant-joined", (g) => {
        !g || !this.call || ru(g, this.call, p, m);
      }), this.call.on("participant-updated", (g) => {
        g && this.emit("daily-participant-updated", g.participant);
      }), this.call.on("participant-left", (g) => {
        g && tu(g.participant.session_id);
      }), this.isMobileDevice() && await this.sleep(1e3), await this.call.join({
        // @ts-expect-error This exists
        url: c.webCallUrl,
        subscribeToTracksAutomatically: !1
      }), p) {
        const g = (/* @__PURE__ */ new Date()).getTime();
        this.call.startRecording({
          width: 1280,
          height: 720,
          backgroundColor: "#FF1F2D3D",
          layout: {
            preset: "default"
          }
        }), this.call.on("recording-started", () => {
          this.send({
            type: "control",
            control: "say-first-message",
            videoRecordingStartDelaySeconds: ((/* @__PURE__ */ new Date()).getTime() - g) / 1e3
          });
        });
      }
      return this.call.startRemoteParticipantsAudioLevelObserver(100), this.call.on("remote-participants-audio-level", (g) => {
        g && this.handleRemoteParticipantsAudioLevel(g);
      }), this.call.on("app-message", (g) => this.onAppMessage(g)), this.call.on("nonfatal-error", (g) => {
        var _;
        (g == null ? void 0 : g.type) === "audio-processor-error" && ((_ = this.call) == null || _.updateInputSettings({
          audio: {
            processor: {
              type: "none"
            }
          }
        }).then(() => {
          var w;
          (w = this.call) == null || w.setLocalAudio(!0);
        }));
      }), this.call.updateInputSettings({
        audio: {
          processor: {
            type: "noise-cancellation"
          }
        }
      }), c;
    } catch (c) {
      return console.error(c), this.emit("error", c), this.cleanup(), null;
    }
  }
  onAppMessage(e) {
    if (e)
      try {
        if (e.data === "listening")
          return this.emit("call-start");
        try {
          const n = JSON.parse(e.data);
          this.emit("message", n), n && "type" in n && "status" in n && n.type === "status-update" && n.status === "ended" && (this.hasEmittedCallEndedStatus = !0);
        } catch (n) {
          console.log("Error parsing message data: ", n);
        }
      } catch (n) {
        console.error(n);
      }
  }
  handleRemoteParticipantsAudioLevel(e) {
    const n = Object.values(e.participantsAudioLevel).reduce((o, a) => o + a, 0);
    this.emit("volume-level", Math.min(1, n / 0.15)), n > 0.01 && (this.speakingTimeout ? (clearTimeout(this.speakingTimeout), this.speakingTimeout = null) : this.emit("speech-start"), this.speakingTimeout = setTimeout(() => {
      this.emit("speech-end"), this.speakingTimeout = null;
    }, 1e3));
  }
  stop() {
    var e;
    this.started = !1, (e = this.call) == null || e.destroy(), this.call = null;
  }
  send(e) {
    var n;
    (n = this.call) == null || n.sendAppMessage(JSON.stringify(e));
  }
  setMuted(e) {
    if (!this.call)
      throw new Error("Call object is not available.");
    this.call.setLocalAudio(!e);
  }
  isMuted() {
    return this.call ? this.call.localAudio() === !1 : !1;
  }
  say(e, n, i) {
    this.send({
      type: "say",
      message: e,
      endCallAfterSpoken: n,
      interruptionsEnabled: i ?? !1
    });
  }
  setInputDevicesAsync(e) {
    var n;
    (n = this.call) == null || n.setInputDevicesAsync(e);
  }
  async increaseMicLevel(e) {
    if (!this.call)
      throw new Error("Call object is not available.");
    try {
      const n = await navigator.mediaDevices.getUserMedia({ audio: !0 }), i = new AudioContext(), o = i.createMediaStreamSource(n), a = i.createGain();
      a.gain.value = e, o.connect(a);
      const u = i.createMediaStreamDestination();
      a.connect(u);
      const [c] = u.stream.getAudioTracks();
      await this.call.setInputDevicesAsync({ audioSource: c });
    } catch (n) {
      console.error("Error adjusting microphone level:", n);
    }
  }
  setOutputDeviceAsync(e) {
    var n;
    (n = this.call) == null || n.setOutputDeviceAsync(e);
  }
  getDailyCallObject() {
    return this.call;
  }
  startScreenSharing(e, n) {
    var i;
    (i = this.call) == null || i.startScreenShare({
      displayMediaOptions: e,
      screenVideoSendSettings: n
    });
  }
  stopScreenSharing() {
    var e;
    (e = this.call) == null || e.stopScreenShare();
  }
}
var su = _s.default = iu;
const ou = ({
  idle: r,
  loading: t,
  active: e,
  width: n,
  height: i,
  position: o,
  offset: a
}) => {
  const u = parseInt(n) / 2, c = parseInt(i) / 2, p = {
    "bottom-right": `bottom: ${a}; right: ${a};`,
    "bottom-left": `bottom: ${a}; left: ${a};`,
    "top-right": `top: ${a}; right: ${a};`,
    "top-left": `top: ${a}; left: ${a};`,
    bottom: `bottom: ${a}; left: 50%; margin-left: -${u}px;`,
    right: `top: 50%; right: ${a}; margin-top: -${c}px;`,
    left: `top: 50%; left: ${a}; margin-top: -${c}px;`,
    top: `top: ${a}; left: 50%; margin-left: -${u}px;`
  }, m = document.createElement("style");
  m.innerText = `
    @keyframes bounce {
      30% {
        transform: translateY(0%);
      }
      40% {
        transform: translateY(-5%);
      }
      50% {
        transform: translateY(-10%);
      }
      60% {
        transform: translateY(-5%);
      }
      70% {
        transform: translateY(0%);
      }
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .vapi-btn {
      border-radius: 50%;
      min-width: ${n};
      height: ${i};
      color: white;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      display: flex;
      text-align: left;
      align-items: center;
      position: absolute;
      padding: 0;
      animation: bounce 2s ease-in-out infinite;
      ${p[o]}
    }
    .vapi-btn-round {
      justify-content: center;
    }
    .vapi-btn-pill {
      border-radius: 8px;
      color: black;
      background: white;
      justify-content: flex-start;
      padding: 0px 10px;
    }
    .vapi-btn:hover {
      animation: none;
      transform: translateY(-5px);
    }
    #vapi-icon-container {
      padding: 5px;
      margin: 5px;
      border-radius: 5px;
    }

    #vapi-title-container {
      padding: 5px 10px;
    }
    #vapi-title {
      font-size: 1.1em;
    }
    #vapi-subtitle {
      font-size: 0.9em;
    }

    .vapi-btn-is-loading > #vapi-icon-container > img {
      animation: spin 1s linear infinite;
    }

    .vapi-btn-is-active {
      background: ${e.color};
      box-shadow: 1px 1px 80px 20px ${e.color};
    }
    .vapi-btn-pill.vapi-btn-is-active {
      background: white;
    }
    .vapi-btn-pill.vapi-btn-is-active > #vapi-icon-container {
      background: ${e.color};
    }


    .vapi-btn-is-idle {
      background: ${r.color};
      box-shadow: 1px 1px 10px ${r.color};
    }
    .vapi-btn-pill.vapi-btn-is-idle {
      background: white;
    }
    .vapi-btn-pill.vapi-btn-is-idle > #vapi-icon-container {
      background: ${r.color};
    }

    .vapi-btn-is-loading {
      background: ${t.color};
      box-shadow: 1px 1px 80px 20px ${t.color};
    }
    .vapi-btn-pill.vapi-btn-is-loading {
      background: white;
    }
    .vapi-btn-pill.vapi-btn-is-loading > #vapi-icon-container {
      background: ${t.color};
    }
    .vapi-btn-is-speaking {
      // Add speaking styles if different from active/loading/idle
    }
    @font-face {
      font-family: 'LucideIcons';
      src: url(https://unpkg.com/lucide-static@latest/font/Lucide.ttf) format('truetype');
    }
  `;
  for (let g = 0; g <= 10; g++)
    m.innerText += `
      .vapi-btn-volume-${g} {
        box-shadow: 1px 1px ${5 + g * 2}px ${g * 2}px ${e.color}, inset 0px 0px 10px 0px rgba(0,0,0,0.1);
      }
    `;
  document.head.appendChild(m);
}, au = ({
  position: r = "bottom",
  offset: t = "40px",
  width: e = "50px",
  height: n = "50px",
  idle: i,
  loading: o,
  active: a
}, u = "vapi-support-btn") => {
  ou({ idle: i, loading: o, active: a, width: e, height: n, position: r, offset: t });
  const c = document.createElement("button");
  return c.id = u, c.className = "vapi-btn vapi-btn-round vapi-btn-is-idle", c.onclick = () => {
  }, c;
}, ys = "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg", cu = (r) => (t, e) => {
  const n = r[e];
  if (n) {
    if (t.className = `vapi-btn vapi-btn-is-${e} ${n.type === "pill" ? "vapi-btn-pill" : n.type === "round" ? "vapi-btn-round" : ""}`, t.innerHTML = "", t.title = n.title ?? "", n.type === "pill") {
      const i = document.createElement("div");
      i.id = "vapi-icon-container";
      const o = document.createElement("img");
      o.src = n.icon || ys, o.alt = "Icon", i.appendChild(o);
      const a = document.createElement("div");
      a.id = "vapi-title-container";
      const u = document.createElement("div");
      u.id = "vapi-title", u.textContent = n.title;
      const c = document.createElement("div");
      c.id = "vapi-subtitle", c.textContent = n.subtitle, a.appendChild(u), a.appendChild(c), t.appendChild(i), t.appendChild(a);
    } else if (n.type === "round") {
      const i = document.createElement("div");
      i.id = "vapi-icon-container";
      const o = document.createElement("img");
      o.src = n.icon || ys, o.alt = "Icon", i.appendChild(o), t.appendChild(i);
    }
  }
};
function lu(r, t, e, n, i, o) {
  let a = !1;
  const u = () => {
    o(t, "loading"), a ? (r.stop(), a = !1) : (e || n ? r.start(e, n) : (console.log("squad ,", i, e, n), r.start(void 0, void 0, i)), a = !0);
  };
  r.on("call-start", () => {
    o(t, "active");
  }), r.on("call-end", () => {
    o(t, "idle");
  }), r.on("speech-start", () => {
    t.classList.add("vapi-btn-is-speaking");
  }), r.on("speech-end", () => {
    t.classList.remove("vapi-btn-is-speaking");
  }), t.addEventListener("click", u), r.on("volume-level", (c) => {
    const p = Math.floor(c * 10);
    for (let m = 0; m <= 10; m++)
      t.classList.remove(`vapi-btn-volume-${m}`);
    t.classList.add(`vapi-btn-volume-${p}`);
  });
}
const uu = ({
  apiKey: r = "",
  assistant: t,
  assistantOverrides: e,
  squad: n,
  config: i = {},
  ...o
}) => {
  function a(p, m) {
    const g = { ...p };
    return Object.keys(m).forEach((_) => {
      typeof m[_] == "object" && m[_] !== null && !Array.isArray(m[_]) ? g[_] = a(
        p[_] || {},
        m[_]
      ) : g[_] = m[_];
    }), g;
  }
  const c = a({
    position: "bottom",
    offset: "40px",
    width: "50px",
    height: "50px",
    idle: {
      color: "rgb(93, 254, 202)",
      type: "round",
      title: "Have a quick question?",
      subtitle: "Talk with our AI assistant",
      icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg"
    },
    loading: {
      color: "rgb(93, 124, 202)",
      type: "round",
      title: "Connecting...",
      subtitle: "Please wait",
      icon: "https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg"
    },
    active: {
      color: "rgb(255, 0, 0)",
      type: "round",
      title: "Call is in progress...",
      subtitle: "End the call.",
      icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg"
    }
  }, i);
  if (r && (t || n)) {
    const p = new su(r), m = au(c), g = cu(c);
    return document.body.appendChild(m), g(m, "idle"), lu(p, m, t, e, n, g), window.vapiSDK.vapi = p, p;
  } else
    return console.error(
      "API Key and Assistant Configurations are required. are required"
    ), null;
};
window.vapiSDK = {
  run: uu
};
