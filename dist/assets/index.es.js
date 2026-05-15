var qa = Object.defineProperty;
var Va = (r, e, t) => e in r ? qa(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var x = (r, e, t) => Va(r, typeof e != "symbol" ? e + "" : e, t);
var Jn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $a(r) {
  if (r.__esModule) return r;
  var e = r.default;
  if (typeof e == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(r).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(r, n);
    Object.defineProperty(t, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return r[n];
      }
    });
  }), t;
}
var Rs = {};
function Bn(r, e) {
  if (r == null) return {};
  var t, n, i = function(a, l) {
    if (a == null) return {};
    var u = {};
    for (var p in a) if ({}.hasOwnProperty.call(a, p)) {
      if (l.indexOf(p) !== -1) continue;
      u[p] = a[p];
    }
    return u;
  }(r, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    for (n = 0; n < o.length; n++) t = o[n], e.indexOf(t) === -1 && {}.propertyIsEnumerable.call(r, t) && (i[t] = r[t]);
  }
  return i;
}
function pe(r, e) {
  if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function B(r) {
  return B = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, B(r);
}
function xs(r) {
  var e = function(t, n) {
    if (B(t) != "object" || !t) return t;
    var i = t[Symbol.toPrimitive];
    if (i !== void 0) {
      var o = i.call(t, n);
      if (B(o) != "object") return o;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(t);
  }(r, "string");
  return B(e) == "symbol" ? e : e + "";
}
function Gn(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, xs(n.key), n);
  }
}
function he(r, e, t) {
  return e && Gn(r.prototype, e), t && Gn(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function dr(r, e) {
  if (e && (B(e) == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return function(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }(r);
}
function Ee(r) {
  return Ee = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, Ee(r);
}
function Pt(r, e) {
  return Pt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, Pt(r, e);
}
function pr(r, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && Pt(r, e);
}
function Ae(r, e, t) {
  return (e = xs(e)) in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Yn(r, e, t, n, i, o, a) {
  try {
    var l = r[o](a), u = l.value;
  } catch (p) {
    return void t(p);
  }
  l.done ? e(u) : Promise.resolve(u).then(n, i);
}
function N(r) {
  return function() {
    var e = this, t = arguments;
    return new Promise(function(n, i) {
      var o = r.apply(e, t);
      function a(u) {
        Yn(o, n, i, a, l, "next", u);
      }
      function l(u) {
        Yn(o, n, i, a, l, "throw", u);
      }
      a(void 0);
    });
  };
}
function Wn(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = Array(e); t < e; t++) n[t] = r[t];
  return n;
}
function se(r, e) {
  return function(t) {
    if (Array.isArray(t)) return t;
  }(r) || function(t, n) {
    var i = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (i != null) {
      var o, a, l, u, p = [], f = !0, v = !1;
      try {
        if (l = (i = i.call(t)).next, n === 0) {
          if (Object(i) !== i) return;
          f = !1;
        } else for (; !(f = (o = l.call(i)).done) && (p.push(o.value), p.length !== n); f = !0) ;
      } catch (k) {
        v = !0, a = k;
      } finally {
        try {
          if (!f && i.return != null && (u = i.return(), Object(u) !== u)) return;
        } finally {
          if (v) throw a;
        }
      }
      return p;
    }
  }(r, e) || function(t, n) {
    if (t) {
      if (typeof t == "string") return Wn(t, n);
      var i = {}.toString.call(t).slice(8, -1);
      return i === "Object" && t.constructor && (i = t.constructor.name), i === "Map" || i === "Set" ? Array.from(t) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Wn(t, n) : void 0;
    }
  }(r, e) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Ua(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var zn, Rt = { exports: {} }, Ur = function() {
  if (zn) return Rt.exports;
  zn = 1;
  var r, e = typeof Reflect == "object" ? Reflect : null, t = e && typeof e.apply == "function" ? e.apply : function(g, b, y) {
    return Function.prototype.apply.call(g, b, y);
  };
  r = e && typeof e.ownKeys == "function" ? e.ownKeys : Object.getOwnPropertySymbols ? function(g) {
    return Object.getOwnPropertyNames(g).concat(Object.getOwnPropertySymbols(g));
  } : function(g) {
    return Object.getOwnPropertyNames(g);
  };
  var n = Number.isNaN || function(g) {
    return g != g;
  };
  function i() {
    i.init.call(this);
  }
  Rt.exports = i, Rt.exports.once = function(g, b) {
    return new Promise(function(y, O) {
      function M(L) {
        g.removeListener(b, D), O(L);
      }
      function D() {
        typeof g.removeListener == "function" && g.removeListener("error", M), y([].slice.call(arguments));
      }
      S(g, b, D, { once: !0 }), b !== "error" && function(L, q, W) {
        typeof L.on == "function" && S(L, "error", q, W);
      }(g, M, { once: !0 });
    });
  }, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._eventsCount = 0, i.prototype._maxListeners = void 0;
  var o = 10;
  function a(g) {
    if (typeof g != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof g);
  }
  function l(g) {
    return g._maxListeners === void 0 ? i.defaultMaxListeners : g._maxListeners;
  }
  function u(g, b, y, O) {
    var M, D, L, q;
    if (a(y), (D = g._events) === void 0 ? (D = g._events = /* @__PURE__ */ Object.create(null), g._eventsCount = 0) : (D.newListener !== void 0 && (g.emit("newListener", b, y.listener ? y.listener : y), D = g._events), L = D[b]), L === void 0) L = D[b] = y, ++g._eventsCount;
    else if (typeof L == "function" ? L = D[b] = O ? [y, L] : [L, y] : O ? L.unshift(y) : L.push(y), (M = l(g)) > 0 && L.length > M && !L.warned) {
      L.warned = !0;
      var W = new Error("Possible EventEmitter memory leak detected. " + L.length + " " + String(b) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      W.name = "MaxListenersExceededWarning", W.emitter = g, W.type = b, W.count = L.length, q = W, console && console.warn && console.warn(q);
    }
    return g;
  }
  function p() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function f(g, b, y) {
    var O = { fired: !1, wrapFn: void 0, target: g, type: b, listener: y }, M = p.bind(O);
    return M.listener = y, O.wrapFn = M, M;
  }
  function v(g, b, y) {
    var O = g._events;
    if (O === void 0) return [];
    var M = O[b];
    return M === void 0 ? [] : typeof M == "function" ? y ? [M.listener || M] : [M] : y ? function(D) {
      for (var L = new Array(D.length), q = 0; q < L.length; ++q) L[q] = D[q].listener || D[q];
      return L;
    }(M) : T(M, M.length);
  }
  function k(g) {
    var b = this._events;
    if (b !== void 0) {
      var y = b[g];
      if (typeof y == "function") return 1;
      if (y !== void 0) return y.length;
    }
    return 0;
  }
  function T(g, b) {
    for (var y = new Array(b), O = 0; O < b; ++O) y[O] = g[O];
    return y;
  }
  function S(g, b, y, O) {
    if (typeof g.on == "function") O.once ? g.once(b, y) : g.on(b, y);
    else {
      if (typeof g.addEventListener != "function") throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof g);
      g.addEventListener(b, function M(D) {
        O.once && g.removeEventListener(b, M), y(D);
      });
    }
  }
  return Object.defineProperty(i, "defaultMaxListeners", { enumerable: !0, get: function() {
    return o;
  }, set: function(g) {
    if (typeof g != "number" || g < 0 || n(g)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + g + ".");
    o = g;
  } }), i.init = function() {
    this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, i.prototype.setMaxListeners = function(g) {
    if (typeof g != "number" || g < 0 || n(g)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + g + ".");
    return this._maxListeners = g, this;
  }, i.prototype.getMaxListeners = function() {
    return l(this);
  }, i.prototype.emit = function(g) {
    for (var b = [], y = 1; y < arguments.length; y++) b.push(arguments[y]);
    var O = g === "error", M = this._events;
    if (M !== void 0) O = O && M.error === void 0;
    else if (!O) return !1;
    if (O) {
      var D;
      if (b.length > 0 && (D = b[0]), D instanceof Error) throw D;
      var L = new Error("Unhandled error." + (D ? " (" + D.message + ")" : ""));
      throw L.context = D, L;
    }
    var q = M[g];
    if (q === void 0) return !1;
    if (typeof q == "function") t(q, this, b);
    else {
      var W = q.length, Z = T(q, W);
      for (y = 0; y < W; ++y) t(Z[y], this, b);
    }
    return !0;
  }, i.prototype.addListener = function(g, b) {
    return u(this, g, b, !1);
  }, i.prototype.on = i.prototype.addListener, i.prototype.prependListener = function(g, b) {
    return u(this, g, b, !0);
  }, i.prototype.once = function(g, b) {
    return a(b), this.on(g, f(this, g, b)), this;
  }, i.prototype.prependOnceListener = function(g, b) {
    return a(b), this.prependListener(g, f(this, g, b)), this;
  }, i.prototype.removeListener = function(g, b) {
    var y, O, M, D, L;
    if (a(b), (O = this._events) === void 0) return this;
    if ((y = O[g]) === void 0) return this;
    if (y === b || y.listener === b) --this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete O[g], O.removeListener && this.emit("removeListener", g, y.listener || b));
    else if (typeof y != "function") {
      for (M = -1, D = y.length - 1; D >= 0; D--) if (y[D] === b || y[D].listener === b) {
        L = y[D].listener, M = D;
        break;
      }
      if (M < 0) return this;
      M === 0 ? y.shift() : function(q, W) {
        for (; W + 1 < q.length; W++) q[W] = q[W + 1];
        q.pop();
      }(y, M), y.length === 1 && (O[g] = y[0]), O.removeListener !== void 0 && this.emit("removeListener", g, L || b);
    }
    return this;
  }, i.prototype.off = i.prototype.removeListener, i.prototype.removeAllListeners = function(g) {
    var b, y, O;
    if ((y = this._events) === void 0) return this;
    if (y.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : y[g] !== void 0 && (--this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete y[g]), this;
    if (arguments.length === 0) {
      var M, D = Object.keys(y);
      for (O = 0; O < D.length; ++O) (M = D[O]) !== "removeListener" && this.removeAllListeners(M);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (typeof (b = y[g]) == "function") this.removeListener(g, b);
    else if (b !== void 0) for (O = b.length - 1; O >= 0; O--) this.removeListener(g, b[O]);
    return this;
  }, i.prototype.listeners = function(g) {
    return v(this, g, !0);
  }, i.prototype.rawListeners = function(g) {
    return v(this, g, !1);
  }, i.listenerCount = function(g, b) {
    return typeof g.listenerCount == "function" ? g.listenerCount(b) : k.call(g, b);
  }, i.prototype.listenerCount = k, i.prototype.eventNames = function() {
    return this._eventsCount > 0 ? r(this._events) : [];
  }, Rt.exports;
}(), xt = Ua(Ur), Hn = Object.prototype.hasOwnProperty;
function Qn(r, e, t) {
  for (t of r.keys()) if (ce(t, e)) return t;
}
function ce(r, e) {
  var t, n, i;
  if (r === e) return !0;
  if (r && e && (t = r.constructor) === e.constructor) {
    if (t === Date) return r.getTime() === e.getTime();
    if (t === RegExp) return r.toString() === e.toString();
    if (t === Array) {
      if ((n = r.length) === e.length) for (; n-- && ce(r[n], e[n]); ) ;
      return n === -1;
    }
    if (t === Set) {
      if (r.size !== e.size) return !1;
      for (n of r)
        if ((i = n) && typeof i == "object" && !(i = Qn(e, i)) || !e.has(i)) return !1;
      return !0;
    }
    if (t === Map) {
      if (r.size !== e.size) return !1;
      for (n of r)
        if ((i = n[0]) && typeof i == "object" && !(i = Qn(e, i)) || !ce(n[1], e.get(i))) return !1;
      return !0;
    }
    if (t === ArrayBuffer) r = new Uint8Array(r), e = new Uint8Array(e);
    else if (t === DataView) {
      if ((n = r.byteLength) === e.byteLength) for (; n-- && r.getInt8(n) === e.getInt8(n); ) ;
      return n === -1;
    }
    if (ArrayBuffer.isView(r)) {
      if ((n = r.byteLength) === e.byteLength) for (; n-- && r[n] === e[n]; ) ;
      return n === -1;
    }
    if (!t || typeof r == "object") {
      for (t in n = 0, r)
        if (Hn.call(r, t) && ++n && !Hn.call(e, t) || !(t in e) || !ce(r[t], e[t])) return !1;
      return Object.keys(e).length === n;
    }
  }
  return r != r && e != e;
}
const Ja = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" }, Fs = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" }, X = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" }, ae = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" }, Re = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" };
class E {
  static getFirstMatch(e, t) {
    const n = t.match(e);
    return n && n.length > 0 && n[1] || "";
  }
  static getSecondMatch(e, t) {
    const n = t.match(e);
    return n && n.length > 1 && n[2] || "";
  }
  static matchAndReturnConst(e, t, n) {
    if (e.test(t)) return n;
  }
  static getWindowsVersionName(e) {
    switch (e) {
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
  static getMacOSVersionName(e) {
    const t = e.split(".").splice(0, 2).map((n) => parseInt(n, 10) || 0);
    if (t.push(0), t[0] === 10) switch (t[1]) {
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
  static getAndroidVersionName(e) {
    const t = e.split(".").splice(0, 2).map((n) => parseInt(n, 10) || 0);
    if (t.push(0), !(t[0] === 1 && t[1] < 5)) return t[0] === 1 && t[1] < 6 ? "Cupcake" : t[0] === 1 && t[1] >= 6 ? "Donut" : t[0] === 2 && t[1] < 2 ? "Eclair" : t[0] === 2 && t[1] === 2 ? "Froyo" : t[0] === 2 && t[1] > 2 ? "Gingerbread" : t[0] === 3 ? "Honeycomb" : t[0] === 4 && t[1] < 1 ? "Ice Cream Sandwich" : t[0] === 4 && t[1] < 4 ? "Jelly Bean" : t[0] === 4 && t[1] >= 4 ? "KitKat" : t[0] === 5 ? "Lollipop" : t[0] === 6 ? "Marshmallow" : t[0] === 7 ? "Nougat" : t[0] === 8 ? "Oreo" : t[0] === 9 ? "Pie" : void 0;
  }
  static getVersionPrecision(e) {
    return e.split(".").length;
  }
  static compareVersions(e, t, n = !1) {
    const i = E.getVersionPrecision(e), o = E.getVersionPrecision(t);
    let a = Math.max(i, o), l = 0;
    const u = E.map([e, t], (p) => {
      const f = a - E.getVersionPrecision(p), v = p + new Array(f + 1).join(".0");
      return E.map(v.split("."), (k) => new Array(20 - k.length).join("0") + k).reverse();
    });
    for (n && (l = a - Math.min(i, o)), a -= 1; a >= l; ) {
      if (u[0][a] > u[1][a]) return 1;
      if (u[0][a] === u[1][a]) {
        if (a === l) return 0;
        a -= 1;
      } else if (u[0][a] < u[1][a]) return -1;
    }
  }
  static map(e, t) {
    const n = [];
    let i;
    if (Array.prototype.map) return Array.prototype.map.call(e, t);
    for (i = 0; i < e.length; i += 1) n.push(t(e[i]));
    return n;
  }
  static find(e, t) {
    let n, i;
    if (Array.prototype.find) return Array.prototype.find.call(e, t);
    for (n = 0, i = e.length; n < i; n += 1) {
      const o = e[n];
      if (t(o, n)) return o;
    }
  }
  static assign(e, ...t) {
    const n = e;
    let i, o;
    if (Object.assign) return Object.assign(e, ...t);
    for (i = 0, o = t.length; i < o; i += 1) {
      const a = t[i];
      typeof a == "object" && a !== null && Object.keys(a).forEach((l) => {
        n[l] = a[l];
      });
    }
    return e;
  }
  static getBrowserAlias(e) {
    return Ja[e];
  }
  static getBrowserTypeByAlias(e) {
    return Fs[e] || "";
  }
}
const H = /version\/(\d+(\.?_?\d+)+)/i, Ba = [{ test: [/googlebot/i], describe(r) {
  const e = { name: "Googlebot" }, t = E.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, r) || E.getFirstMatch(H, r);
  return t && (e.version = t), e;
} }, { test: [/opera/i], describe(r) {
  const e = { name: "Opera" }, t = E.getFirstMatch(H, r) || E.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/opr\/|opios/i], describe(r) {
  const e = { name: "Opera" }, t = E.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, r) || E.getFirstMatch(H, r);
  return t && (e.version = t), e;
} }, { test: [/SamsungBrowser/i], describe(r) {
  const e = { name: "Samsung Internet for Android" }, t = E.getFirstMatch(H, r) || E.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/Whale/i], describe(r) {
  const e = { name: "NAVER Whale Browser" }, t = E.getFirstMatch(H, r) || E.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/MZBrowser/i], describe(r) {
  const e = { name: "MZ Browser" }, t = E.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, r) || E.getFirstMatch(H, r);
  return t && (e.version = t), e;
} }, { test: [/focus/i], describe(r) {
  const e = { name: "Focus" }, t = E.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, r) || E.getFirstMatch(H, r);
  return t && (e.version = t), e;
} }, { test: [/swing/i], describe(r) {
  const e = { name: "Swing" }, t = E.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, r) || E.getFirstMatch(H, r);
  return t && (e.version = t), e;
} }, { test: [/coast/i], describe(r) {
  const e = { name: "Opera Coast" }, t = E.getFirstMatch(H, r) || E.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe(r) {
  const e = { name: "Opera Touch" }, t = E.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, r) || E.getFirstMatch(H, r);
  return t && (e.version = t), e;
} }, { test: [/yabrowser/i], describe(r) {
  const e = { name: "Yandex Browser" }, t = E.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, r) || E.getFirstMatch(H, r);
  return t && (e.version = t), e;
} }, { test: [/ucbrowser/i], describe(r) {
  const e = { name: "UC Browser" }, t = E.getFirstMatch(H, r) || E.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/Maxthon|mxios/i], describe(r) {
  const e = { name: "Maxthon" }, t = E.getFirstMatch(H, r) || E.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/epiphany/i], describe(r) {
  const e = { name: "Epiphany" }, t = E.getFirstMatch(H, r) || E.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/puffin/i], describe(r) {
  const e = { name: "Puffin" }, t = E.getFirstMatch(H, r) || E.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/sleipnir/i], describe(r) {
  const e = { name: "Sleipnir" }, t = E.getFirstMatch(H, r) || E.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/k-meleon/i], describe(r) {
  const e = { name: "K-Meleon" }, t = E.getFirstMatch(H, r) || E.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/micromessenger/i], describe(r) {
  const e = { name: "WeChat" }, t = E.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, r) || E.getFirstMatch(H, r);
  return t && (e.version = t), e;
} }, { test: [/qqbrowser/i], describe(r) {
  const e = { name: /qqbrowserlite/i.test(r) ? "QQ Browser Lite" : "QQ Browser" }, t = E.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, r) || E.getFirstMatch(H, r);
  return t && (e.version = t), e;
} }, { test: [/msie|trident/i], describe(r) {
  const e = { name: "Internet Explorer" }, t = E.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/\sedg\//i], describe(r) {
  const e = { name: "Microsoft Edge" }, t = E.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/edg([ea]|ios)/i], describe(r) {
  const e = { name: "Microsoft Edge" }, t = E.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/vivaldi/i], describe(r) {
  const e = { name: "Vivaldi" }, t = E.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/seamonkey/i], describe(r) {
  const e = { name: "SeaMonkey" }, t = E.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/sailfish/i], describe(r) {
  const e = { name: "Sailfish" }, t = E.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, r);
  return t && (e.version = t), e;
} }, { test: [/silk/i], describe(r) {
  const e = { name: "Amazon Silk" }, t = E.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/phantom/i], describe(r) {
  const e = { name: "PhantomJS" }, t = E.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/slimerjs/i], describe(r) {
  const e = { name: "SlimerJS" }, t = E.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe(r) {
  const e = { name: "BlackBerry" }, t = E.getFirstMatch(H, r) || E.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/(web|hpw)[o0]s/i], describe(r) {
  const e = { name: "WebOS Browser" }, t = E.getFirstMatch(H, r) || E.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/bada/i], describe(r) {
  const e = { name: "Bada" }, t = E.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/tizen/i], describe(r) {
  const e = { name: "Tizen" }, t = E.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, r) || E.getFirstMatch(H, r);
  return t && (e.version = t), e;
} }, { test: [/qupzilla/i], describe(r) {
  const e = { name: "QupZilla" }, t = E.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, r) || E.getFirstMatch(H, r);
  return t && (e.version = t), e;
} }, { test: [/firefox|iceweasel|fxios/i], describe(r) {
  const e = { name: "Firefox" }, t = E.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/electron/i], describe(r) {
  const e = { name: "Electron" }, t = E.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/MiuiBrowser/i], describe(r) {
  const e = { name: "Miui" }, t = E.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/chromium/i], describe(r) {
  const e = { name: "Chromium" }, t = E.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, r) || E.getFirstMatch(H, r);
  return t && (e.version = t), e;
} }, { test: [/chrome|crios|crmo/i], describe(r) {
  const e = { name: "Chrome" }, t = E.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/GSA/i], describe(r) {
  const e = { name: "Google Search" }, t = E.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test(r) {
  const e = !r.test(/like android/i), t = r.test(/android/i);
  return e && t;
}, describe(r) {
  const e = { name: "Android Browser" }, t = E.getFirstMatch(H, r);
  return t && (e.version = t), e;
} }, { test: [/playstation 4/i], describe(r) {
  const e = { name: "PlayStation 4" }, t = E.getFirstMatch(H, r);
  return t && (e.version = t), e;
} }, { test: [/safari|applewebkit/i], describe(r) {
  const e = { name: "Safari" }, t = E.getFirstMatch(H, r);
  return t && (e.version = t), e;
} }, { test: [/.*/i], describe(r) {
  const e = r.search("\\(") !== -1 ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
  return { name: E.getFirstMatch(e, r), version: E.getSecondMatch(e, r) };
} }];
var Ga = [{ test: [/Roku\/DVP/], describe(r) {
  const e = E.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, r);
  return { name: ae.Roku, version: e };
} }, { test: [/windows phone/i], describe(r) {
  const e = E.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, r);
  return { name: ae.WindowsPhone, version: e };
} }, { test: [/windows /i], describe(r) {
  const e = E.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, r), t = E.getWindowsVersionName(e);
  return { name: ae.Windows, version: e, versionName: t };
} }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe(r) {
  const e = { name: ae.iOS }, t = E.getSecondMatch(/(Version\/)(\d[\d.]+)/, r);
  return t && (e.version = t), e;
} }, { test: [/macintosh/i], describe(r) {
  const e = E.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, r).replace(/[_\s]/g, "."), t = E.getMacOSVersionName(e), n = { name: ae.MacOS, version: e };
  return t && (n.versionName = t), n;
} }, { test: [/(ipod|iphone|ipad)/i], describe(r) {
  const e = E.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, r).replace(/[_\s]/g, ".");
  return { name: ae.iOS, version: e };
} }, { test(r) {
  const e = !r.test(/like android/i), t = r.test(/android/i);
  return e && t;
}, describe(r) {
  const e = E.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, r), t = E.getAndroidVersionName(e), n = { name: ae.Android, version: e };
  return t && (n.versionName = t), n;
} }, { test: [/(web|hpw)[o0]s/i], describe(r) {
  const e = E.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, r), t = { name: ae.WebOS };
  return e && e.length && (t.version = e), t;
} }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe(r) {
  const e = E.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, r) || E.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, r) || E.getFirstMatch(/\bbb(\d+)/i, r);
  return { name: ae.BlackBerry, version: e };
} }, { test: [/bada/i], describe(r) {
  const e = E.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, r);
  return { name: ae.Bada, version: e };
} }, { test: [/tizen/i], describe(r) {
  const e = E.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, r);
  return { name: ae.Tizen, version: e };
} }, { test: [/linux/i], describe: () => ({ name: ae.Linux }) }, { test: [/CrOS/], describe: () => ({ name: ae.ChromeOS }) }, { test: [/PlayStation 4/], describe(r) {
  const e = E.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, r);
  return { name: ae.PlayStation4, version: e };
} }], Ya = [{ test: [/googlebot/i], describe: () => ({ type: "bot", vendor: "Google" }) }, { test: [/huawei/i], describe(r) {
  const e = E.getFirstMatch(/(can-l01)/i, r) && "Nova", t = { type: X.mobile, vendor: "Huawei" };
  return e && (t.model = e), t;
} }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: () => ({ type: X.tablet, vendor: "Nexus" }) }, { test: [/ipad/i], describe: () => ({ type: X.tablet, vendor: "Apple", model: "iPad" }) }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: () => ({ type: X.tablet, vendor: "Apple", model: "iPad" }) }, { test: [/kftt build/i], describe: () => ({ type: X.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" }) }, { test: [/silk/i], describe: () => ({ type: X.tablet, vendor: "Amazon" }) }, { test: [/tablet(?! pc)/i], describe: () => ({ type: X.tablet }) }, { test(r) {
  const e = r.test(/ipod|iphone/i), t = r.test(/like (ipod|iphone)/i);
  return e && !t;
}, describe(r) {
  const e = E.getFirstMatch(/(ipod|iphone)/i, r);
  return { type: X.mobile, vendor: "Apple", model: e };
} }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: () => ({ type: X.mobile, vendor: "Nexus" }) }, { test: [/[^-]mobi/i], describe: () => ({ type: X.mobile }) }, { test: (r) => r.getBrowserName(!0) === "blackberry", describe: () => ({ type: X.mobile, vendor: "BlackBerry" }) }, { test: (r) => r.getBrowserName(!0) === "bada", describe: () => ({ type: X.mobile }) }, { test: (r) => r.getBrowserName() === "windows phone", describe: () => ({ type: X.mobile, vendor: "Microsoft" }) }, { test(r) {
  const e = Number(String(r.getOSVersion()).split(".")[0]);
  return r.getOSName(!0) === "android" && e >= 3;
}, describe: () => ({ type: X.tablet }) }, { test: (r) => r.getOSName(!0) === "android", describe: () => ({ type: X.mobile }) }, { test: (r) => r.getOSName(!0) === "macos", describe: () => ({ type: X.desktop, vendor: "Apple" }) }, { test: (r) => r.getOSName(!0) === "windows", describe: () => ({ type: X.desktop }) }, { test: (r) => r.getOSName(!0) === "linux", describe: () => ({ type: X.desktop }) }, { test: (r) => r.getOSName(!0) === "playstation 4", describe: () => ({ type: X.tv }) }, { test: (r) => r.getOSName(!0) === "roku", describe: () => ({ type: X.tv }) }], Wa = [{ test: (r) => r.getBrowserName(!0) === "microsoft edge", describe(r) {
  if (/\sedg\//i.test(r)) return { name: Re.Blink };
  const e = E.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, r);
  return { name: Re.EdgeHTML, version: e };
} }, { test: [/trident/i], describe(r) {
  const e = { name: Re.Trident }, t = E.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: (r) => r.test(/presto/i), describe(r) {
  const e = { name: Re.Presto }, t = E.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test(r) {
  const e = r.test(/gecko/i), t = r.test(/like gecko/i);
  return e && !t;
}, describe(r) {
  const e = { name: Re.Gecko }, t = E.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }, { test: [/(apple)?webkit\/537\.36/i], describe: () => ({ name: Re.Blink }) }, { test: [/(apple)?webkit/i], describe(r) {
  const e = { name: Re.WebKit }, t = E.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, r);
  return t && (e.version = t), e;
} }];
class Kn {
  constructor(e, t = !1) {
    if (e == null || e === "") throw new Error("UserAgent parameter can't be empty");
    this._ua = e, this.parsedResult = {}, t !== !0 && this.parse();
  }
  getUA() {
    return this._ua;
  }
  test(e) {
    return e.test(this._ua);
  }
  parseBrowser() {
    this.parsedResult.browser = {};
    const e = E.find(Ba, (t) => {
      if (typeof t.test == "function") return t.test(this);
      if (t.test instanceof Array) return t.test.some((n) => this.test(n));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.browser = e.describe(this.getUA())), this.parsedResult.browser;
  }
  getBrowser() {
    return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
  }
  getBrowserName(e) {
    return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
  }
  getBrowserVersion() {
    return this.getBrowser().version;
  }
  getOS() {
    return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
  }
  parseOS() {
    this.parsedResult.os = {};
    const e = E.find(Ga, (t) => {
      if (typeof t.test == "function") return t.test(this);
      if (t.test instanceof Array) return t.test.some((n) => this.test(n));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.os = e.describe(this.getUA())), this.parsedResult.os;
  }
  getOSName(e) {
    const { name: t } = this.getOS();
    return e ? String(t).toLowerCase() || "" : t || "";
  }
  getOSVersion() {
    return this.getOS().version;
  }
  getPlatform() {
    return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
  }
  getPlatformType(e = !1) {
    const { type: t } = this.getPlatform();
    return e ? String(t).toLowerCase() || "" : t || "";
  }
  parsePlatform() {
    this.parsedResult.platform = {};
    const e = E.find(Ya, (t) => {
      if (typeof t.test == "function") return t.test(this);
      if (t.test instanceof Array) return t.test.some((n) => this.test(n));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.platform = e.describe(this.getUA())), this.parsedResult.platform;
  }
  getEngine() {
    return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
  }
  getEngineName(e) {
    return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
  }
  parseEngine() {
    this.parsedResult.engine = {};
    const e = E.find(Wa, (t) => {
      if (typeof t.test == "function") return t.test(this);
      if (t.test instanceof Array) return t.test.some((n) => this.test(n));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.engine = e.describe(this.getUA())), this.parsedResult.engine;
  }
  parse() {
    return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
  }
  getResult() {
    return E.assign({}, this.parsedResult);
  }
  satisfies(e) {
    const t = {};
    let n = 0;
    const i = {};
    let o = 0;
    if (Object.keys(e).forEach((a) => {
      const l = e[a];
      typeof l == "string" ? (i[a] = l, o += 1) : typeof l == "object" && (t[a] = l, n += 1);
    }), n > 0) {
      const a = Object.keys(t), l = E.find(a, (p) => this.isOS(p));
      if (l) {
        const p = this.satisfies(t[l]);
        if (p !== void 0) return p;
      }
      const u = E.find(a, (p) => this.isPlatform(p));
      if (u) {
        const p = this.satisfies(t[u]);
        if (p !== void 0) return p;
      }
    }
    if (o > 0) {
      const a = Object.keys(i), l = E.find(a, (u) => this.isBrowser(u, !0));
      if (l !== void 0) return this.compareVersion(i[l]);
    }
  }
  isBrowser(e, t = !1) {
    const n = this.getBrowserName().toLowerCase();
    let i = e.toLowerCase();
    const o = E.getBrowserTypeByAlias(i);
    return t && o && (i = o.toLowerCase()), i === n;
  }
  compareVersion(e) {
    let t = [0], n = e, i = !1;
    const o = this.getBrowserVersion();
    if (typeof o == "string") return e[0] === ">" || e[0] === "<" ? (n = e.substr(1), e[1] === "=" ? (i = !0, n = e.substr(2)) : t = [], e[0] === ">" ? t.push(1) : t.push(-1)) : e[0] === "=" ? n = e.substr(1) : e[0] === "~" && (i = !0, n = e.substr(1)), t.indexOf(E.compareVersions(o, n, i)) > -1;
  }
  isOS(e) {
    return this.getOSName(!0) === String(e).toLowerCase();
  }
  isPlatform(e) {
    return this.getPlatformType(!0) === String(e).toLowerCase();
  }
  isEngine(e) {
    return this.getEngineName(!0) === String(e).toLowerCase();
  }
  is(e, t = !1) {
    return this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e);
  }
  some(e = []) {
    return e.some((t) => this.is(t));
  }
}
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */
class za {
  static getParser(e, t = !1) {
    if (typeof e != "string") throw new Error("UserAgent should be a string");
    return new Kn(e, t);
  }
  static parse(e) {
    return new Kn(e).getResult();
  }
  static get BROWSER_MAP() {
    return Fs;
  }
  static get ENGINE_MAP() {
    return Re;
  }
  static get OS_MAP() {
    return ae;
  }
  static get PLATFORMS_MAP() {
    return X;
  }
}
function hr() {
  return Date.now() + Math.random().toString();
}
function wt() {
  throw new Error("Method must be implemented in subclass");
}
function qs(r, e) {
  return e != null && e.proxyUrl ? e.proxyUrl + (e.proxyUrl.slice(-1) === "/" ? "" : "/") + r.substring(8) : r;
}
function tr(r) {
  return r != null && r.callObjectBundleUrlOverride ? r.callObjectBundleUrlOverride : qs("https://c.daily.co/call-machine/versioned/".concat("0.85.0", "/static/call-machine-object-bundle.js"), r);
}
function rr(r) {
  try {
    new URL(r);
  } catch {
    return !1;
  }
  return !0;
}
const K = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, Ke = "8.55.0", Y = globalThis;
function nr(r, e, t) {
  const n = Y, i = n.__SENTRY__ = n.__SENTRY__ || {}, o = i[Ke] = i[Ke] || {};
  return o[r] || (o[r] = e());
}
const it = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, Jr = ["debug", "info", "warn", "error", "log", "assert", "trace"], ir = {};
function Dt(r) {
  if (!("console" in Y)) return r();
  const e = Y.console, t = {}, n = Object.keys(ir);
  n.forEach((i) => {
    const o = ir[i];
    t[i] = e[i], e[i] = o;
  });
  try {
    return r();
  } finally {
    n.forEach((i) => {
      e[i] = t[i];
    });
  }
}
const R = nr("logger", function() {
  let r = !1;
  const e = { enable: () => {
    r = !0;
  }, disable: () => {
    r = !1;
  }, isEnabled: () => r };
  return it ? Jr.forEach((t) => {
    e[t] = (...n) => {
      r && Dt(() => {
        Y.console[t](`Sentry Logger [${t}]:`, ...n);
      });
    };
  }) : Jr.forEach((t) => {
    e[t] = () => {
    };
  }), e;
}), Qe = "?", Xn = /\(error: (.*)\)/, Zn = /captureMessage|captureException/;
function Ft(r) {
  return r[r.length - 1] || {};
}
const ei = "<anonymous>";
function $e(r) {
  try {
    return r && typeof r == "function" && r.name || ei;
  } catch {
    return ei;
  }
}
function ti(r) {
  const e = r.exception;
  if (e) {
    const t = [];
    try {
      return e.values.forEach((n) => {
        n.stacktrace.frames && t.push(...n.stacktrace.frames);
      }), t;
    } catch {
      return;
    }
  }
}
const Ht = {}, ri = {};
function Xe(r, e) {
  Ht[r] = Ht[r] || [], Ht[r].push(e);
}
function Ze(r, e) {
  if (!ri[r]) {
    ri[r] = !0;
    try {
      e();
    } catch (t) {
      it && R.error(`Error while instrumenting ${r}`, t);
    }
  }
}
function we(r, e) {
  const t = r && Ht[r];
  if (t) for (const n of t) try {
    n(e);
  } catch (i) {
    it && R.error(`Error while triggering instrumentation handler.
Type: ${r}
Name: ${$e(n)}
Error:`, i);
  }
}
let Sr = null;
function Ha() {
  Sr = Y.onerror, Y.onerror = function(r, e, t, n, i) {
    return we("error", { column: n, error: i, line: t, msg: r, url: e }), !!Sr && Sr.apply(this, arguments);
  }, Y.onerror.__SENTRY_INSTRUMENTED__ = !0;
}
let wr = null;
function Qa() {
  wr = Y.onunhandledrejection, Y.onunhandledrejection = function(r) {
    return we("unhandledrejection", r), !wr || wr.apply(this, arguments);
  }, Y.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
}
function fr() {
  return _n(Y), Y;
}
function _n(r) {
  const e = r.__SENTRY__ = r.__SENTRY__ || {};
  return e.version = e.version || Ke, e[Ke] = e[Ke] || {};
}
const Vs = Object.prototype.toString;
function Sn(r) {
  switch (Vs.call(r)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return !0;
    default:
      return et(r, Error);
  }
}
function gt(r, e) {
  return Vs.call(r) === `[object ${e}]`;
}
function $s(r) {
  return gt(r, "ErrorEvent");
}
function ni(r) {
  return gt(r, "DOMError");
}
function De(r) {
  return gt(r, "String");
}
function wn(r) {
  return typeof r == "object" && r !== null && "__sentry_template_string__" in r && "__sentry_template_values__" in r;
}
function Br(r) {
  return r === null || wn(r) || typeof r != "object" && typeof r != "function";
}
function dt(r) {
  return gt(r, "Object");
}
function mr(r) {
  return typeof Event < "u" && et(r, Event);
}
function gr(r) {
  return !!(r && r.then && typeof r.then == "function");
}
function et(r, e) {
  try {
    return r instanceof e;
  } catch {
    return !1;
  }
}
function Us(r) {
  return !(typeof r != "object" || r === null || !r.__isVue && !r._isVue);
}
const En = Y;
function Js(r, e = {}) {
  if (!r) return "<unknown>";
  try {
    let t = r;
    const n = 5, i = [];
    let o = 0, a = 0;
    const l = " > ", u = l.length;
    let p;
    const f = Array.isArray(e) ? e : e.keyAttrs, v = !Array.isArray(e) && e.maxStringLength || 80;
    for (; t && o++ < n && (p = Ka(t, f), !(p === "html" || o > 1 && a + i.length * u + p.length >= v)); ) i.push(p), a += p.length, t = t.parentNode;
    return i.reverse().join(l);
  } catch {
    return "<unknown>";
  }
}
function Ka(r, e) {
  const t = r, n = [];
  if (!t || !t.tagName) return "";
  if (En.HTMLElement && t instanceof HTMLElement && t.dataset) {
    if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
    if (t.dataset.sentryElement) return t.dataset.sentryElement;
  }
  n.push(t.tagName.toLowerCase());
  const i = e && e.length ? e.filter((a) => t.getAttribute(a)).map((a) => [a, t.getAttribute(a)]) : null;
  if (i && i.length) i.forEach((a) => {
    n.push(`[${a[0]}="${a[1]}"]`);
  });
  else {
    t.id && n.push(`#${t.id}`);
    const a = t.className;
    if (a && De(a)) {
      const l = a.split(/\s+/);
      for (const u of l) n.push(`.${u}`);
    }
  }
  const o = ["aria-label", "type", "name", "title", "alt"];
  for (const a of o) {
    const l = t.getAttribute(a);
    l && n.push(`[${a}="${l}"]`);
  }
  return n.join("");
}
function ct(r, e = 0) {
  return typeof r != "string" || e === 0 || r.length <= e ? r : `${r.slice(0, e)}...`;
}
function ii(r, e) {
  if (!Array.isArray(r)) return "";
  const t = [];
  for (let n = 0; n < r.length; n++) {
    const i = r[n];
    try {
      Us(i) ? t.push("[VueViewModel]") : t.push(String(i));
    } catch {
      t.push("[value cannot be serialized]");
    }
  }
  return t.join(e);
}
function Xa(r, e, t = !1) {
  return !!De(r) && (gt(e, "RegExp") ? e.test(r) : !!De(e) && (t ? r === e : r.includes(e)));
}
function qt(r, e = [], t = !1) {
  return e.some((n) => Xa(r, n, t));
}
function de(r, e, t) {
  if (!(e in r)) return;
  const n = r[e], i = t(n);
  typeof i == "function" && Bs(i, n);
  try {
    r[e] = i;
  } catch {
    it && R.log(`Failed to replace method "${e}" in object`, r);
  }
}
function tt(r, e, t) {
  try {
    Object.defineProperty(r, e, { value: t, writable: !0, configurable: !0 });
  } catch {
    it && R.log(`Failed to add non-enumerable property "${e}" to object`, r);
  }
}
function Bs(r, e) {
  try {
    const t = e.prototype || {};
    r.prototype = e.prototype = t, tt(r, "__sentry_original__", e);
  } catch {
  }
}
function kn(r) {
  return r.__sentry_original__;
}
function Gs(r) {
  if (Sn(r)) return { message: r.message, name: r.name, stack: r.stack, ...oi(r) };
  if (mr(r)) {
    const e = { type: r.type, target: si(r.target), currentTarget: si(r.currentTarget), ...oi(r) };
    return typeof CustomEvent < "u" && et(r, CustomEvent) && (e.detail = r.detail), e;
  }
  return r;
}
function si(r) {
  try {
    return e = r, typeof Element < "u" && et(e, Element) ? Js(r) : Object.prototype.toString.call(r);
  } catch {
    return "<unknown>";
  }
  var e;
}
function oi(r) {
  if (typeof r == "object" && r !== null) {
    const e = {};
    for (const t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
    return e;
  }
  return {};
}
function ve(r) {
  return Gr(r, /* @__PURE__ */ new Map());
}
function Gr(r, e) {
  if (function(t) {
    if (!dt(t)) return !1;
    try {
      const n = Object.getPrototypeOf(t).constructor.name;
      return !n || n === "Object";
    } catch {
      return !0;
    }
  }(r)) {
    const t = e.get(r);
    if (t !== void 0) return t;
    const n = {};
    e.set(r, n);
    for (const i of Object.getOwnPropertyNames(r)) r[i] !== void 0 && (n[i] = Gr(r[i], e));
    return n;
  }
  if (Array.isArray(r)) {
    const t = e.get(r);
    if (t !== void 0) return t;
    const n = [];
    return e.set(r, n), r.forEach((i) => {
      n.push(Gr(i, e));
    }), n;
  }
  return r;
}
function jt() {
  return Date.now() / 1e3;
}
const Le = function() {
  const { performance: r } = Y;
  if (!r || !r.now) return jt;
  const e = Date.now() - r.now(), t = r.timeOrigin == null ? e : r.timeOrigin;
  return () => (t + r.now()) / 1e3;
}();
function ye() {
  const r = Y, e = r.crypto || r.msCrypto;
  let t = () => 16 * Math.random();
  try {
    if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
    e && e.getRandomValues && (t = () => {
      const n = new Uint8Array(1);
      return e.getRandomValues(n), n[0];
    });
  } catch {
  }
  return ("10000000100040008000" + 1e11).replace(/[018]/g, (n) => (n ^ (15 & t()) >> n / 4).toString(16));
}
function Ys(r) {
  return r.exception && r.exception.values ? r.exception.values[0] : void 0;
}
function Fe(r) {
  const { message: e, event_id: t } = r;
  if (e) return e;
  const n = Ys(r);
  return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || t || "<unknown>" : t || "<unknown>";
}
function Yr(r, e, t) {
  const n = r.exception = r.exception || {}, i = n.values = n.values || [], o = i[0] = i[0] || {};
  o.value || (o.value = e || ""), o.type || (o.type = "Error");
}
function pt(r, e) {
  const t = Ys(r);
  if (!t) return;
  const n = t.mechanism;
  if (t.mechanism = { type: "generic", handled: !0, ...n, ...e }, e && "data" in e) {
    const i = { ...n && n.data, ...e.data };
    t.mechanism.data = i;
  }
}
function ai(r) {
  if (function(e) {
    try {
      return e.__sentry_captured__;
    } catch {
    }
  }(r)) return !0;
  try {
    tt(r, "__sentry_captured__", !0);
  } catch {
  }
  return !1;
}
var Pe;
function rt(r) {
  return new ge((e) => {
    e(r);
  });
}
function sr(r) {
  return new ge((e, t) => {
    t(r);
  });
}
(() => {
  const { performance: r } = Y;
  !r || !r.now || (r.now(), r.timing && r.timing.navigationStart);
})(), function(r) {
  r[r.PENDING = 0] = "PENDING", r[r.RESOLVED = 1] = "RESOLVED", r[r.REJECTED = 2] = "REJECTED";
}(Pe || (Pe = {}));
class ge {
  constructor(e) {
    ge.prototype.__init.call(this), ge.prototype.__init2.call(this), ge.prototype.__init3.call(this), ge.prototype.__init4.call(this), this._state = Pe.PENDING, this._handlers = [];
    try {
      e(this._resolve, this._reject);
    } catch (t) {
      this._reject(t);
    }
  }
  then(e, t) {
    return new ge((n, i) => {
      this._handlers.push([!1, (o) => {
        if (e) try {
          n(e(o));
        } catch (a) {
          i(a);
        }
        else n(o);
      }, (o) => {
        if (t) try {
          n(t(o));
        } catch (a) {
          i(a);
        }
        else i(o);
      }]), this._executeHandlers();
    });
  }
  catch(e) {
    return this.then((t) => t, e);
  }
  finally(e) {
    return new ge((t, n) => {
      let i, o;
      return this.then((a) => {
        o = !1, i = a, e && e();
      }, (a) => {
        o = !0, i = a, e && e();
      }).then(() => {
        o ? n(i) : t(i);
      });
    });
  }
  __init() {
    this._resolve = (e) => {
      this._setResult(Pe.RESOLVED, e);
    };
  }
  __init2() {
    this._reject = (e) => {
      this._setResult(Pe.REJECTED, e);
    };
  }
  __init3() {
    this._setResult = (e, t) => {
      this._state === Pe.PENDING && (gr(t) ? t.then(this._resolve, this._reject) : (this._state = e, this._value = t, this._executeHandlers()));
    };
  }
  __init4() {
    this._executeHandlers = () => {
      if (this._state === Pe.PENDING) return;
      const e = this._handlers.slice();
      this._handlers = [], e.forEach((t) => {
        t[0] || (this._state === Pe.RESOLVED && t[1](this._value), this._state === Pe.REJECTED && t[2](this._value), t[0] = !0);
      });
    };
  }
}
function Za(r) {
  const e = Le(), t = { sid: ye(), init: !0, timestamp: e, started: e, duration: 0, status: "ok", errors: 0, ignoreDuration: !1, toJSON: () => function(n) {
    return ve({ sid: `${n.sid}`, init: n.init, started: new Date(1e3 * n.started).toISOString(), timestamp: new Date(1e3 * n.timestamp).toISOString(), status: n.status, errors: n.errors, did: typeof n.did == "number" || typeof n.did == "string" ? `${n.did}` : void 0, duration: n.duration, abnormal_mechanism: n.abnormal_mechanism, attrs: { release: n.release, environment: n.environment, ip_address: n.ipAddress, user_agent: n.userAgent } });
  }(t) };
  return r && ht(t, r), t;
}
function ht(r, e = {}) {
  if (e.user && (!r.ipAddress && e.user.ip_address && (r.ipAddress = e.user.ip_address), r.did || e.did || (r.did = e.user.id || e.user.email || e.user.username)), r.timestamp = e.timestamp || Le(), e.abnormal_mechanism && (r.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (r.ignoreDuration = e.ignoreDuration), e.sid && (r.sid = e.sid.length === 32 ? e.sid : ye()), e.init !== void 0 && (r.init = e.init), !r.did && e.did && (r.did = `${e.did}`), typeof e.started == "number" && (r.started = e.started), r.ignoreDuration) r.duration = void 0;
  else if (typeof e.duration == "number") r.duration = e.duration;
  else {
    const t = r.timestamp - r.started;
    r.duration = t >= 0 ? t : 0;
  }
  e.release && (r.release = e.release), e.environment && (r.environment = e.environment), !r.ipAddress && e.ipAddress && (r.ipAddress = e.ipAddress), !r.userAgent && e.userAgent && (r.userAgent = e.userAgent), typeof e.errors == "number" && (r.errors = e.errors), e.status && (r.status = e.status);
}
function ci() {
  return ye();
}
function Wr() {
  return ye().substring(16);
}
function vr(r, e, t = 2) {
  if (!e || typeof e != "object" || t <= 0) return e;
  if (r && e && Object.keys(e).length === 0) return r;
  const n = { ...r };
  for (const i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = vr(n[i], e[i], t - 1));
  return n;
}
const zr = "_sentrySpan";
function li(r, e) {
  e ? tt(r, zr, e) : delete r[zr];
}
function ui(r) {
  return r[zr];
}
class Tn {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = { traceId: ci(), spanId: Wr() };
  }
  clone() {
    const e = new Tn();
    return e._breadcrumbs = [...this._breadcrumbs], e._tags = { ...this._tags }, e._extra = { ...this._extra }, e._contexts = { ...this._contexts }, this._contexts.flags && (e._contexts.flags = { values: [...this._contexts.flags.values] }), e._user = this._user, e._level = this._level, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._requestSession = this._requestSession, e._attachments = [...this._attachments], e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }, e._propagationContext = { ...this._propagationContext }, e._client = this._client, e._lastEventId = this._lastEventId, li(e, ui(this)), e;
  }
  setClient(e) {
    this._client = e;
  }
  setLastEventId(e) {
    this._lastEventId = e;
  }
  getClient() {
    return this._client;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addScopeListener(e) {
    this._scopeListeners.push(e);
  }
  addEventProcessor(e) {
    return this._eventProcessors.push(e), this;
  }
  setUser(e) {
    return this._user = e || { email: void 0, id: void 0, ip_address: void 0, username: void 0 }, this._session && ht(this._session, { user: e }), this._notifyScopeListeners(), this;
  }
  getUser() {
    return this._user;
  }
  getRequestSession() {
    return this._requestSession;
  }
  setRequestSession(e) {
    return this._requestSession = e, this;
  }
  setTags(e) {
    return this._tags = { ...this._tags, ...e }, this._notifyScopeListeners(), this;
  }
  setTag(e, t) {
    return this._tags = { ...this._tags, [e]: t }, this._notifyScopeListeners(), this;
  }
  setExtras(e) {
    return this._extra = { ...this._extra, ...e }, this._notifyScopeListeners(), this;
  }
  setExtra(e, t) {
    return this._extra = { ...this._extra, [e]: t }, this._notifyScopeListeners(), this;
  }
  setFingerprint(e) {
    return this._fingerprint = e, this._notifyScopeListeners(), this;
  }
  setLevel(e) {
    return this._level = e, this._notifyScopeListeners(), this;
  }
  setTransactionName(e) {
    return this._transactionName = e, this._notifyScopeListeners(), this;
  }
  setContext(e, t) {
    return t === null ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this;
  }
  setSession(e) {
    return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this;
  }
  getSession() {
    return this._session;
  }
  update(e) {
    if (!e) return this;
    const t = typeof e == "function" ? e(this) : e, [n, i] = t instanceof Ue ? [t.getScopeData(), t.getRequestSession()] : dt(t) ? [e, e.requestSession] : [], { tags: o, extra: a, user: l, contexts: u, level: p, fingerprint: f = [], propagationContext: v } = n || {};
    return this._tags = { ...this._tags, ...o }, this._extra = { ...this._extra, ...a }, this._contexts = { ...this._contexts, ...u }, l && Object.keys(l).length && (this._user = l), p && (this._level = p), f.length && (this._fingerprint = f), v && (this._propagationContext = v), i && (this._requestSession = i), this;
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._session = void 0, li(this, void 0), this._attachments = [], this.setPropagationContext({ traceId: ci() }), this._notifyScopeListeners(), this;
  }
  addBreadcrumb(e, t) {
    const n = typeof t == "number" ? t : 100;
    if (n <= 0) return this;
    const i = { timestamp: jt(), ...e };
    return this._breadcrumbs.push(i), this._breadcrumbs.length > n && (this._breadcrumbs = this._breadcrumbs.slice(-n), this._client && this._client.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this;
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    return this._breadcrumbs = [], this._notifyScopeListeners(), this;
  }
  addAttachment(e) {
    return this._attachments.push(e), this;
  }
  clearAttachments() {
    return this._attachments = [], this;
  }
  getScopeData() {
    return { breadcrumbs: this._breadcrumbs, attachments: this._attachments, contexts: this._contexts, tags: this._tags, extra: this._extra, user: this._user, level: this._level, fingerprint: this._fingerprint || [], eventProcessors: this._eventProcessors, propagationContext: this._propagationContext, sdkProcessingMetadata: this._sdkProcessingMetadata, transactionName: this._transactionName, span: ui(this) };
  }
  setSDKProcessingMetadata(e) {
    return this._sdkProcessingMetadata = vr(this._sdkProcessingMetadata, e, 2), this;
  }
  setPropagationContext(e) {
    return this._propagationContext = { spanId: Wr(), ...e }, this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(e, t) {
    const n = t && t.event_id ? t.event_id : ye();
    if (!this._client) return R.warn("No client configured on scope - will not capture exception!"), n;
    const i = new Error("Sentry syntheticException");
    return this._client.captureException(e, { originalException: e, syntheticException: i, ...t, event_id: n }, this), n;
  }
  captureMessage(e, t, n) {
    const i = n && n.event_id ? n.event_id : ye();
    if (!this._client) return R.warn("No client configured on scope - will not capture message!"), i;
    const o = new Error(e);
    return this._client.captureMessage(e, t, { originalException: e, syntheticException: o, ...n, event_id: i }, this), i;
  }
  captureEvent(e, t) {
    const n = t && t.event_id ? t.event_id : ye();
    return this._client ? (this._client.captureEvent(e, { ...t, event_id: n }, this), n) : (R.warn("No client configured on scope - will not capture event!"), n);
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((e) => {
      e(this);
    }), this._notifyingListeners = !1);
  }
}
const Ue = Tn;
class ec {
  constructor(e, t) {
    let n, i;
    n = e || new Ue(), i = t || new Ue(), this._stack = [{ scope: n }], this._isolationScope = i;
  }
  withScope(e) {
    const t = this._pushScope();
    let n;
    try {
      n = e(t);
    } catch (i) {
      throw this._popScope(), i;
    }
    return gr(n) ? n.then((i) => (this._popScope(), i), (i) => {
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
    const e = this.getScope().clone();
    return this._stack.push({ client: this.getClient(), scope: e }), e;
  }
  _popScope() {
    return !(this._stack.length <= 1) && !!this._stack.pop();
  }
}
function ft() {
  const r = _n(fr());
  return r.stack = r.stack || new ec(nr("defaultCurrentScope", () => new Ue()), nr("defaultIsolationScope", () => new Ue()));
}
function tc(r) {
  return ft().withScope(r);
}
function rc(r, e) {
  const t = ft();
  return t.withScope(() => (t.getStackTop().scope = r, e(r)));
}
function di(r) {
  return ft().withScope(() => r(ft().getIsolationScope()));
}
function Cn(r) {
  const e = _n(r);
  return e.acs ? e.acs : { withIsolationScope: di, withScope: tc, withSetScope: rc, withSetIsolationScope: (t, n) => di(n), getCurrentScope: () => ft().getScope(), getIsolationScope: () => ft().getIsolationScope() };
}
function st() {
  return Cn(fr()).getCurrentScope();
}
function Lt() {
  return Cn(fr()).getIsolationScope();
}
function ie() {
  return st().getClient();
}
function nc(r) {
  const e = r.getPropagationContext(), { traceId: t, spanId: n, parentSpanId: i } = e;
  return ve({ trace_id: t, span_id: n, parent_span_id: i });
}
function ic(r) {
  const e = r._sentryMetrics;
  if (!e) return;
  const t = {};
  for (const [, [n, i]] of e)
    (t[n] || (t[n] = [])).push(ve(i));
  return t;
}
const sc = /^sentry-/;
function oc(r) {
  const e = function(n) {
    if (!(!n || !De(n) && !Array.isArray(n)))
      return Array.isArray(n) ? n.reduce((i, o) => {
        const a = pi(o);
        return Object.entries(a).forEach(([l, u]) => {
          i[l] = u;
        }), i;
      }, {}) : pi(n);
  }(r);
  if (!e) return;
  const t = Object.entries(e).reduce((n, [i, o]) => (i.match(sc) && (n[i.slice(7)] = o), n), {});
  return Object.keys(t).length > 0 ? t : void 0;
}
function pi(r) {
  return r.split(",").map((e) => e.split("=").map((t) => decodeURIComponent(t.trim()))).reduce((e, [t, n]) => (t && n && (e[t] = n), e), {});
}
let hi = !1;
function ac(r) {
  const { spanId: e, traceId: t, isRemote: n } = r.spanContext();
  return ve({ parent_span_id: n ? e : On(r).parent_span_id, span_id: n ? Wr() : e, trace_id: t });
}
function fi(r) {
  return typeof r == "number" ? mi(r) : Array.isArray(r) ? r[0] + r[1] / 1e9 : r instanceof Date ? mi(r.getTime()) : Le();
}
function mi(r) {
  return r > 9999999999 ? r / 1e3 : r;
}
function On(r) {
  if (function(e) {
    return typeof e.getSpanJSON == "function";
  }(r)) return r.getSpanJSON();
  try {
    const { spanId: e, traceId: t } = r.spanContext();
    if (function(n) {
      const i = n;
      return !!(i.attributes && i.startTime && i.name && i.endTime && i.status);
    }(r)) {
      const { attributes: n, startTime: i, name: o, endTime: a, parentSpanId: l, status: u } = r;
      return ve({ span_id: e, trace_id: t, data: n, description: o, parent_span_id: l, start_timestamp: fi(i), timestamp: fi(a) || void 0, status: cc(u), op: n["sentry.op"], origin: n["sentry.origin"], _metrics_summary: ic(r) });
    }
    return { span_id: e, trace_id: t };
  } catch {
    return {};
  }
}
function cc(r) {
  if (r && r.code !== 0) return r.code === 1 ? "ok" : r.message || "unknown_error";
}
function Ws(r) {
  return r._sentryRootSpan || r;
}
function lc() {
  hi || (Dt(() => {
    console.warn("[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.");
  }), hi = !0);
}
const An = "production";
function zs(r, e) {
  const t = e.getOptions(), { publicKey: n } = e.getDsn() || {}, i = ve({ environment: t.environment || An, release: t.release, public_key: n, trace_id: r });
  return e.emit("createDsc", i), i;
}
function uc(r) {
  const e = ie();
  if (!e) return {};
  const t = Ws(r), n = t._frozenDsc;
  if (n) return n;
  const i = t.spanContext().traceState, o = i && i.get("sentry.dsc"), a = o && oc(o);
  if (a) return a;
  const l = zs(r.spanContext().traceId, e), u = On(t), p = u.data || {}, f = p["sentry.sample_rate"];
  f != null && (l.sample_rate = `${f}`);
  const v = p["sentry.source"], k = u.description;
  return v !== "url" && k && (l.transaction = k), function(T) {
    if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
    const S = ie(), g = S && S.getOptions();
    return !!g && (g.enableTracing || "tracesSampleRate" in g || "tracesSampler" in g);
  }() && (l.sampled = String(function(T) {
    const { traceFlags: S } = T.spanContext();
    return S === 1;
  }(t))), e.emit("createDsc", l, t), l;
}
const dc = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function or(r, e = !1) {
  const { host: t, path: n, pass: i, port: o, projectId: a, protocol: l, publicKey: u } = r;
  return `${l}://${u}${e && i ? `:${i}` : ""}@${t}${o ? `:${o}` : ""}/${n && `${n}/`}${a}`;
}
function gi(r) {
  return { protocol: r.protocol, publicKey: r.publicKey || "", pass: r.pass || "", host: r.host, port: r.port || "", path: r.path || "", projectId: r.projectId };
}
function pc(r) {
  const e = typeof r == "string" ? function(t) {
    const n = dc.exec(t);
    if (!n) return void Dt(() => {
      console.error(`Invalid Sentry Dsn: ${t}`);
    });
    const [i, o, a = "", l = "", u = "", p = ""] = n.slice(1);
    let f = "", v = p;
    const k = v.split("/");
    if (k.length > 1 && (f = k.slice(0, -1).join("/"), v = k.pop()), v) {
      const T = v.match(/^\d+/);
      T && (v = T[0]);
    }
    return gi({ host: l, pass: a, path: f, projectId: v, port: u, protocol: i, publicKey: o });
  }(r) : gi(r);
  if (e && function(t) {
    if (!it) return !0;
    const { port: n, projectId: i, protocol: o } = t;
    return !(["protocol", "publicKey", "host", "projectId"].find((a) => !t[a] && (R.error(`Invalid Sentry Dsn: ${a} missing`), !0)) || (i.match(/^\d+$/) ? /* @__PURE__ */ function(a) {
      return a === "http" || a === "https";
    }(o) ? n && isNaN(parseInt(n, 10)) && (R.error(`Invalid Sentry Dsn: Invalid port ${n}`), 1) : (R.error(`Invalid Sentry Dsn: Invalid protocol ${o}`), 1) : (R.error(`Invalid Sentry Dsn: Invalid projectId ${i}`), 1)));
  }(e)) return e;
}
function Ie(r, e = 100, t = 1 / 0) {
  try {
    return Hr("", r, e, t);
  } catch (n) {
    return { ERROR: `**non-serializable** (${n})` };
  }
}
function Hs(r, e = 3, t = 102400) {
  const n = Ie(r, e);
  return i = n, function(o) {
    return ~-encodeURI(o).split(/%..|./).length;
  }(JSON.stringify(i)) > t ? Hs(r, e - 1, t) : n;
  var i;
}
function Hr(r, e, t = 1 / 0, n = 1 / 0, i = /* @__PURE__ */ function() {
  const o = typeof WeakSet == "function", a = o ? /* @__PURE__ */ new WeakSet() : [];
  return [function(l) {
    if (o) return !!a.has(l) || (a.add(l), !1);
    for (let u = 0; u < a.length; u++) if (a[u] === l) return !0;
    return a.push(l), !1;
  }, function(l) {
    if (o) a.delete(l);
    else for (let u = 0; u < a.length; u++) if (a[u] === l) {
      a.splice(u, 1);
      break;
    }
  }];
}()) {
  const [o, a] = i;
  if (e == null || ["boolean", "string"].includes(typeof e) || typeof e == "number" && Number.isFinite(e)) return e;
  const l = function(T, S) {
    try {
      if (T === "domain" && S && typeof S == "object" && S._events) return "[Domain]";
      if (T === "domainEmitter") return "[DomainEmitter]";
      if (typeof global < "u" && S === global) return "[Global]";
      if (typeof window < "u" && S === window) return "[Window]";
      if (typeof document < "u" && S === document) return "[Document]";
      if (Us(S)) return "[VueViewModel]";
      if (dt(g = S) && "nativeEvent" in g && "preventDefault" in g && "stopPropagation" in g) return "[SyntheticEvent]";
      if (typeof S == "number" && !Number.isFinite(S)) return `[${S}]`;
      if (typeof S == "function") return `[Function: ${$e(S)}]`;
      if (typeof S == "symbol") return `[${String(S)}]`;
      if (typeof S == "bigint") return `[BigInt: ${String(S)}]`;
      const b = function(y) {
        const O = Object.getPrototypeOf(y);
        return O ? O.constructor.name : "null prototype";
      }(S);
      return /^HTML(\w*)Element$/.test(b) ? `[HTMLElement: ${b}]` : `[object ${b}]`;
    } catch (b) {
      return `**non-serializable** (${b})`;
    }
    var g;
  }(r, e);
  if (!l.startsWith("[object ")) return l;
  if (e.__sentry_skip_normalization__) return e;
  const u = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : t;
  if (u === 0) return l.replace("object ", "");
  if (o(e)) return "[Circular ~]";
  const p = e;
  if (p && typeof p.toJSON == "function") try {
    return Hr("", p.toJSON(), u - 1, n, i);
  } catch {
  }
  const f = Array.isArray(e) ? [] : {};
  let v = 0;
  const k = Gs(e);
  for (const T in k) {
    if (!Object.prototype.hasOwnProperty.call(k, T)) continue;
    if (v >= n) {
      f[T] = "[MaxProperties ~]";
      break;
    }
    const S = k[T];
    f[T] = Hr(T, S, u - 1, n, i), v++;
  }
  return a(e), f;
}
function It(r, e = []) {
  return [r, e];
}
function hc(r, e) {
  const [t, n] = r;
  return [t, [...n, e]];
}
function vi(r, e) {
  const t = r[1];
  for (const n of t)
    if (e(n, n[0].type)) return !0;
  return !1;
}
function Qr(r) {
  return Y.__SENTRY__ && Y.__SENTRY__.encodePolyfill ? Y.__SENTRY__.encodePolyfill(r) : new TextEncoder().encode(r);
}
function fc(r) {
  const [e, t] = r;
  let n = JSON.stringify(e);
  function i(o) {
    typeof n == "string" ? n = typeof o == "string" ? n + o : [Qr(n), o] : n.push(typeof o == "string" ? Qr(o) : o);
  }
  for (const o of t) {
    const [a, l] = o;
    if (i(`
${JSON.stringify(a)}
`), typeof l == "string" || l instanceof Uint8Array) i(l);
    else {
      let u;
      try {
        u = JSON.stringify(l);
      } catch {
        u = JSON.stringify(Ie(l));
      }
      i(u);
    }
  }
  return typeof n == "string" ? n : function(o) {
    const a = o.reduce((p, f) => p + f.length, 0), l = new Uint8Array(a);
    let u = 0;
    for (const p of o) l.set(p, u), u += p.length;
    return l;
  }(n);
}
function mc(r) {
  const e = typeof r.data == "string" ? Qr(r.data) : r.data;
  return [ve({ type: "attachment", length: e.length, filename: r.filename, content_type: r.contentType, attachment_type: r.attachmentType }), e];
}
const gc = { session: "session", sessions: "session", attachment: "attachment", transaction: "transaction", event: "error", client_report: "internal", user_report: "default", profile: "profile", profile_chunk: "profile", replay_event: "replay", replay_recording: "replay", check_in: "monitor", feedback: "feedback", span: "span", statsd: "metric_bucket", raw_security: "security" };
function yi(r) {
  return gc[r];
}
function Qs(r) {
  if (!r || !r.sdk) return;
  const { name: e, version: t } = r.sdk;
  return { name: e, version: t };
}
function vc(r, e, t, n) {
  const i = Qs(t), o = r.type && r.type !== "replay_event" ? r.type : "event";
  (function(l, u) {
    u && (l.sdk = l.sdk || {}, l.sdk.name = l.sdk.name || u.name, l.sdk.version = l.sdk.version || u.version, l.sdk.integrations = [...l.sdk.integrations || [], ...u.integrations || []], l.sdk.packages = [...l.sdk.packages || [], ...u.packages || []]);
  })(r, t && t.sdk);
  const a = function(l, u, p, f) {
    const v = l.sdkProcessingMetadata && l.sdkProcessingMetadata.dynamicSamplingContext;
    return { event_id: l.event_id, sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...u && { sdk: u }, ...!!p && f && { dsn: or(f) }, ...v && { trace: ve({ ...v }) } };
  }(r, i, n, e);
  return delete r.sdkProcessingMetadata, It(a, [[{ type: o }, r]]);
}
function Kr(r, e, t, n = 0) {
  return new ge((i, o) => {
    const a = r[n];
    if (e === null || typeof a != "function") i(e);
    else {
      const l = a({ ...e }, t);
      K && a.id && l === null && R.log(`Event processor "${a.id}" dropped event`), gr(l) ? l.then((u) => Kr(r, u, t, n + 1).then(i)).then(null, o) : Kr(r, l, t, n + 1).then(i).then(null, o);
    }
  });
}
let Vt, bi, Er;
function yc(r, e) {
  const { fingerprint: t, span: n, breadcrumbs: i, sdkProcessingMetadata: o } = e;
  (function(a, l) {
    const { extra: u, tags: p, user: f, contexts: v, level: k, transactionName: T } = l, S = ve(u);
    S && Object.keys(S).length && (a.extra = { ...S, ...a.extra });
    const g = ve(p);
    g && Object.keys(g).length && (a.tags = { ...g, ...a.tags });
    const b = ve(f);
    b && Object.keys(b).length && (a.user = { ...b, ...a.user });
    const y = ve(v);
    y && Object.keys(y).length && (a.contexts = { ...y, ...a.contexts }), k && (a.level = k), T && a.type !== "transaction" && (a.transaction = T);
  })(r, e), n && function(a, l) {
    a.contexts = { trace: ac(l), ...a.contexts }, a.sdkProcessingMetadata = { dynamicSamplingContext: uc(l), ...a.sdkProcessingMetadata };
    const u = Ws(l), p = On(u).description;
    p && !a.transaction && a.type === "transaction" && (a.transaction = p);
  }(r, n), function(a, l) {
    a.fingerprint = a.fingerprint ? Array.isArray(a.fingerprint) ? a.fingerprint : [a.fingerprint] : [], l && (a.fingerprint = a.fingerprint.concat(l)), a.fingerprint && !a.fingerprint.length && delete a.fingerprint;
  }(r, t), function(a, l) {
    const u = [...a.breadcrumbs || [], ...l];
    a.breadcrumbs = u.length ? u : void 0;
  }(r, i), function(a, l) {
    a.sdkProcessingMetadata = { ...a.sdkProcessingMetadata, ...l };
  }(r, o);
}
function _i(r, e) {
  const { extra: t, tags: n, user: i, contexts: o, level: a, sdkProcessingMetadata: l, breadcrumbs: u, fingerprint: p, eventProcessors: f, attachments: v, propagationContext: k, transactionName: T, span: S } = e;
  $t(r, "extra", t), $t(r, "tags", n), $t(r, "user", i), $t(r, "contexts", o), r.sdkProcessingMetadata = vr(r.sdkProcessingMetadata, l, 2), a && (r.level = a), T && (r.transactionName = T), S && (r.span = S), u.length && (r.breadcrumbs = [...r.breadcrumbs, ...u]), p.length && (r.fingerprint = [...r.fingerprint, ...p]), f.length && (r.eventProcessors = [...r.eventProcessors, ...f]), v.length && (r.attachments = [...r.attachments, ...v]), r.propagationContext = { ...r.propagationContext, ...k };
}
function $t(r, e, t) {
  r[e] = vr(r[e], t, 1);
}
function bc(r, e, t, n, i, o) {
  const { normalizeDepth: a = 3, normalizeMaxBreadth: l = 1e3 } = r, u = { ...e, event_id: e.event_id || t.event_id || ye(), timestamp: e.timestamp || jt() }, p = t.integrations || r.integrations.map((S) => S.name);
  (function(S, g) {
    const { environment: b, release: y, dist: O, maxValueLength: M = 250 } = g;
    S.environment = S.environment || b || An, !S.release && y && (S.release = y), !S.dist && O && (S.dist = O), S.message && (S.message = ct(S.message, M));
    const D = S.exception && S.exception.values && S.exception.values[0];
    D && D.value && (D.value = ct(D.value, M));
    const L = S.request;
    L && L.url && (L.url = ct(L.url, M));
  })(u, r), function(S, g) {
    g.length > 0 && (S.sdk = S.sdk || {}, S.sdk.integrations = [...S.sdk.integrations || [], ...g]);
  }(u, p), i && i.emit("applyFrameMetadata", e), e.type === void 0 && function(S, g) {
    const b = function(y) {
      const O = Y._sentryDebugIds;
      if (!O) return {};
      const M = Object.keys(O);
      return Er && M.length === bi || (bi = M.length, Er = M.reduce((D, L) => {
        Vt || (Vt = {});
        const q = Vt[L];
        if (q) D[q[0]] = q[1];
        else {
          const W = y(L);
          for (let Z = W.length - 1; Z >= 0; Z--) {
            const fe = W[Z], ke = fe && fe.filename, w = O[L];
            if (ke && w) {
              D[ke] = w, Vt[L] = [ke, w];
              break;
            }
          }
        }
        return D;
      }, {})), Er;
    }(g);
    try {
      S.exception.values.forEach((y) => {
        y.stacktrace.frames.forEach((O) => {
          b && O.filename && (O.debug_id = b[O.filename]);
        });
      });
    } catch {
    }
  }(u, r.stackParser);
  const f = function(S, g) {
    if (!g) return S;
    const b = S ? S.clone() : new Ue();
    return b.update(g), b;
  }(n, t.captureContext);
  t.mechanism && pt(u, t.mechanism);
  const v = i ? i.getEventProcessors() : [], k = nr("globalScope", () => new Ue()).getScopeData();
  o && _i(k, o.getScopeData()), f && _i(k, f.getScopeData());
  const T = [...t.attachments || [], ...k.attachments];
  return T.length && (t.attachments = T), yc(u, k), Kr([...v, ...k.eventProcessors], u, t).then((S) => (S && function(g) {
    const b = {};
    try {
      g.exception.values.forEach((O) => {
        O.stacktrace.frames.forEach((M) => {
          M.debug_id && (M.abs_path ? b[M.abs_path] = M.debug_id : M.filename && (b[M.filename] = M.debug_id), delete M.debug_id);
        });
      });
    } catch {
    }
    if (Object.keys(b).length === 0) return;
    g.debug_meta = g.debug_meta || {}, g.debug_meta.images = g.debug_meta.images || [];
    const y = g.debug_meta.images;
    Object.entries(b).forEach(([O, M]) => {
      y.push({ type: "sourcemap", code_file: O, debug_id: M });
    });
  }(S), typeof a == "number" && a > 0 ? function(g, b, y) {
    if (!g) return null;
    const O = { ...g, ...g.breadcrumbs && { breadcrumbs: g.breadcrumbs.map((M) => ({ ...M, ...M.data && { data: Ie(M.data, b, y) } })) }, ...g.user && { user: Ie(g.user, b, y) }, ...g.contexts && { contexts: Ie(g.contexts, b, y) }, ...g.extra && { extra: Ie(g.extra, b, y) } };
    return g.contexts && g.contexts.trace && O.contexts && (O.contexts.trace = g.contexts.trace, g.contexts.trace.data && (O.contexts.trace.data = Ie(g.contexts.trace.data, b, y))), g.spans && (O.spans = g.spans.map((M) => ({ ...M, ...M.data && { data: Ie(M.data, b, y) } }))), g.contexts && g.contexts.flags && O.contexts && (O.contexts.flags = Ie(g.contexts.flags, 3, y)), O;
  }(S, a, l) : S));
}
function Si(r, e) {
  return st().captureEvent(r, e);
}
function wi(r) {
  const e = ie(), t = Lt(), n = st(), { release: i, environment: o = An } = e && e.getOptions() || {}, { userAgent: a } = Y.navigator || {}, l = Za({ release: i, environment: o, user: n.getUser() || t.getUser(), ...a && { userAgent: a }, ...r }), u = t.getSession();
  return u && u.status === "ok" && ht(u, { status: "exited" }), Ks(), t.setSession(l), n.setSession(l), l;
}
function Ks() {
  const r = Lt(), e = st(), t = e.getSession() || r.getSession();
  t && function(n, i) {
    let o = {};
    n.status === "ok" && (o = { status: "exited" }), ht(n, o);
  }(t), Xs(), r.setSession(), e.setSession();
}
function Xs() {
  const r = Lt(), e = st(), t = ie(), n = e.getSession() || r.getSession();
  n && t && t.captureSession(n);
}
function Ei(r = !1) {
  r ? Ks() : Xs();
}
function _c(r, e, t) {
  return e || `${function(n) {
    return `${function(i) {
      const o = i.protocol ? `${i.protocol}:` : "", a = i.port ? `:${i.port}` : "";
      return `${o}//${i.host}${a}${i.path ? `/${i.path}` : ""}/api/`;
    }(n)}${n.projectId}/envelope/`;
  }(r)}?${function(n, i) {
    const o = { sentry_version: "7" };
    return n.publicKey && (o.sentry_key = n.publicKey), i && (o.sentry_client = `${i.name}/${i.version}`), new URLSearchParams(o).toString();
  }(r, t)}`;
}
const ki = [];
function Ti(r, e) {
  for (const t of e) t && t.afterAllSetup && t.afterAllSetup(r);
}
function Ci(r, e, t) {
  if (t[e.name]) K && R.log(`Integration skipped because it was already installed: ${e.name}`);
  else {
    if (t[e.name] = e, ki.indexOf(e.name) === -1 && typeof e.setupOnce == "function" && (e.setupOnce(), ki.push(e.name)), e.setup && typeof e.setup == "function" && e.setup(r), typeof e.preprocessEvent == "function") {
      const n = e.preprocessEvent.bind(e);
      r.on("preprocessEvent", (i, o) => n(i, o, r));
    }
    if (typeof e.processEvent == "function") {
      const n = e.processEvent.bind(e), i = Object.assign((o, a) => n(o, a, r), { id: e.name });
      r.addEventProcessor(i);
    }
    K && R.log(`Integration installed: ${e.name}`);
  }
}
class Se extends Error {
  constructor(e, t = "warn") {
    super(e), this.message = e, this.logLevel = t;
  }
}
const Oi = "Not capturing exception because it's already been captured.";
class Sc {
  constructor(e) {
    if (this._options = e, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], e.dsn ? this._dsn = pc(e.dsn) : K && R.warn("No DSN provided, client will not send events."), this._dsn) {
      const n = _c(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
      this._transport = e.transport({ tunnel: this._options.tunnel, recordDroppedEvent: this.recordDroppedEvent.bind(this), ...e.transportOptions, url: n });
    }
    const t = ["enableTracing", "tracesSampleRate", "tracesSampler"].find((n) => n in e && e[n] == null);
    t && Dt(() => {
      console.warn(`[Sentry] Deprecation warning: \`${t}\` is set to undefined, which leads to tracing being enabled. In v9, a value of \`undefined\` will result in tracing being disabled.`);
    });
  }
  captureException(e, t, n) {
    const i = ye();
    if (ai(e)) return K && R.log(Oi), i;
    const o = { event_id: i, ...t };
    return this._process(this.eventFromException(e, o).then((a) => this._captureEvent(a, o, n))), o.event_id;
  }
  captureMessage(e, t, n, i) {
    const o = { event_id: ye(), ...n }, a = wn(e) ? e : String(e), l = Br(e) ? this.eventFromMessage(a, t, o) : this.eventFromException(e, o);
    return this._process(l.then((u) => this._captureEvent(u, o, i))), o.event_id;
  }
  captureEvent(e, t, n) {
    const i = ye();
    if (t && t.originalException && ai(t.originalException)) return K && R.log(Oi), i;
    const o = { event_id: i, ...t }, a = (e.sdkProcessingMetadata || {}).capturedSpanScope;
    return this._process(this._captureEvent(e, o, a || n)), o.event_id;
  }
  captureSession(e) {
    typeof e.release != "string" ? K && R.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), ht(e, { init: !1 }));
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
  flush(e) {
    const t = this._transport;
    return t ? (this.emit("flush"), this._isClientDoneProcessing(e).then((n) => t.flush(e).then((i) => n && i))) : rt(!0);
  }
  close(e) {
    return this.flush(e).then((t) => (this.getOptions().enabled = !1, this.emit("close"), t));
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(e) {
    this._eventProcessors.push(e);
  }
  init() {
    (this._isEnabled() || this._options.integrations.some(({ name: e }) => e.startsWith("Spotlight"))) && this._setupIntegrations();
  }
  getIntegrationByName(e) {
    return this._integrations[e];
  }
  addIntegration(e) {
    const t = this._integrations[e.name];
    Ci(this, e, this._integrations), t || Ti(this, [e]);
  }
  sendEvent(e, t = {}) {
    this.emit("beforeSendEvent", e, t);
    let n = vc(e, this._dsn, this._options._metadata, this._options.tunnel);
    for (const o of t.attachments || []) n = hc(n, mc(o));
    const i = this.sendEnvelope(n);
    i && i.then((o) => this.emit("afterSendEvent", e, o), null);
  }
  sendSession(e) {
    const t = function(n, i, o, a) {
      const l = Qs(o);
      return It({ sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...l && { sdk: l }, ...!!a && i && { dsn: or(i) } }, ["aggregates" in n ? [{ type: "sessions" }, n] : [{ type: "session" }, n.toJSON()]]);
    }(e, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(t);
  }
  recordDroppedEvent(e, t, n) {
    if (this._options.sendClientReports) {
      const i = typeof n == "number" ? n : 1, o = `${e}:${t}`;
      K && R.log(`Recording outcome: "${o}"${i > 1 ? ` (${i} times)` : ""}`), this._outcomes[o] = (this._outcomes[o] || 0) + i;
    }
  }
  on(e, t) {
    const n = this._hooks[e] = this._hooks[e] || [];
    return n.push(t), () => {
      const i = n.indexOf(t);
      i > -1 && n.splice(i, 1);
    };
  }
  emit(e, ...t) {
    const n = this._hooks[e];
    n && n.forEach((i) => i(...t));
  }
  sendEnvelope(e) {
    return this.emit("beforeEnvelope", e), this._isEnabled() && this._transport ? this._transport.send(e).then(null, (t) => (K && R.error("Error while sending envelope:", t), t)) : (K && R.error("Transport disabled"), rt({}));
  }
  _setupIntegrations() {
    const { integrations: e } = this._options;
    this._integrations = function(t, n) {
      const i = {};
      return n.forEach((o) => {
        o && Ci(t, o, i);
      }), i;
    }(this, e), Ti(this, e);
  }
  _updateSessionFromEvent(e, t) {
    let n = t.level === "fatal", i = !1;
    const o = t.exception && t.exception.values;
    if (o) {
      i = !0;
      for (const l of o) {
        const u = l.mechanism;
        if (u && u.handled === !1) {
          n = !0;
          break;
        }
      }
    }
    const a = e.status === "ok";
    (a && e.errors === 0 || a && n) && (ht(e, { ...n && { status: "crashed" }, errors: e.errors || Number(i || n) }), this.captureSession(e));
  }
  _isClientDoneProcessing(e) {
    return new ge((t) => {
      let n = 0;
      const i = setInterval(() => {
        this._numProcessing == 0 ? (clearInterval(i), t(!0)) : (n += 1, e && n >= e && (clearInterval(i), t(!1)));
      }, 1);
    });
  }
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._transport !== void 0;
  }
  _prepareEvent(e, t, n = st(), i = Lt()) {
    const o = this.getOptions(), a = Object.keys(this._integrations);
    return !t.integrations && a.length > 0 && (t.integrations = a), this.emit("preprocessEvent", e, t), e.type || i.setLastEventId(e.event_id || t.event_id), bc(o, e, t, n, this, i).then((l) => {
      if (l === null) return l;
      l.contexts = { trace: nc(n), ...l.contexts };
      const u = function(p, f) {
        const v = f.getPropagationContext();
        return v.dsc || zs(v.traceId, p);
      }(this, n);
      return l.sdkProcessingMetadata = { dynamicSamplingContext: u, ...l.sdkProcessingMetadata }, l;
    });
  }
  _captureEvent(e, t = {}, n) {
    return this._processEvent(e, t, n).then((i) => i.event_id, (i) => {
      K && (i instanceof Se && i.logLevel === "log" ? R.log(i.message) : R.warn(i));
    });
  }
  _processEvent(e, t, n) {
    const i = this.getOptions(), { sampleRate: o } = i, a = Mi(e), l = Ai(e), u = e.type || "error", p = `before send for type \`${u}\``, f = o === void 0 ? void 0 : function(T) {
      if (typeof T == "boolean") return Number(T);
      const S = typeof T == "string" ? parseFloat(T) : T;
      if (!(typeof S != "number" || isNaN(S) || S < 0 || S > 1)) return S;
      K && R.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(T)} of type ${JSON.stringify(typeof T)}.`);
    }(o);
    if (l && typeof f == "number" && Math.random() > f) return this.recordDroppedEvent("sample_rate", "error", e), sr(new Se(`Discarding event because it's not included in the random sample (sampling rate = ${o})`, "log"));
    const v = u === "replay_event" ? "replay" : u, k = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
    return this._prepareEvent(e, t, n, k).then((T) => {
      if (T === null) throw this.recordDroppedEvent("event_processor", v, e), new Se("An event processor returned `null`, will not send event.", "log");
      if (t.data && t.data.__sentry__ === !0) return T;
      const S = function(g, b, y, O) {
        const { beforeSend: M, beforeSendTransaction: D, beforeSendSpan: L } = b;
        if (Ai(y) && M) return M(y, O);
        if (Mi(y)) {
          if (y.spans && L) {
            const q = [];
            for (const W of y.spans) {
              const Z = L(W);
              Z ? q.push(Z) : (lc(), g.recordDroppedEvent("before_send", "span"));
            }
            y.spans = q;
          }
          if (D) {
            if (y.spans) {
              const q = y.spans.length;
              y.sdkProcessingMetadata = { ...y.sdkProcessingMetadata, spanCountBeforeProcessing: q };
            }
            return D(y, O);
          }
        }
        return y;
      }(this, i, T, t);
      return function(g, b) {
        const y = `${b} must return \`null\` or a valid event.`;
        if (gr(g)) return g.then((O) => {
          if (!dt(O) && O !== null) throw new Se(y);
          return O;
        }, (O) => {
          throw new Se(`${b} rejected with ${O}`);
        });
        if (!dt(g) && g !== null) throw new Se(y);
        return g;
      }(S, p);
    }).then((T) => {
      if (T === null) {
        if (this.recordDroppedEvent("before_send", v, e), a) {
          const b = 1 + (e.spans || []).length;
          this.recordDroppedEvent("before_send", "span", b);
        }
        throw new Se(`${p} returned \`null\`, will not send event.`, "log");
      }
      const S = n && n.getSession();
      if (!a && S && this._updateSessionFromEvent(S, T), a) {
        const b = (T.sdkProcessingMetadata && T.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - (T.spans ? T.spans.length : 0);
        b > 0 && this.recordDroppedEvent("before_send", "span", b);
      }
      const g = T.transaction_info;
      if (a && g && T.transaction !== e.transaction) {
        const b = "custom";
        T.transaction_info = { ...g, source: b };
      }
      return this.sendEvent(T, t), T;
    }).then(null, (T) => {
      throw T instanceof Se ? T : (this.captureException(T, { data: { __sentry__: !0 }, originalException: T }), new Se(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${T}`));
    });
  }
  _process(e) {
    this._numProcessing++, e.then((t) => (this._numProcessing--, t), (t) => (this._numProcessing--, t));
  }
  _clearOutcomes() {
    const e = this._outcomes;
    return this._outcomes = {}, Object.entries(e).map(([t, n]) => {
      const [i, o] = t.split(":");
      return { reason: i, category: o, quantity: n };
    });
  }
  _flushOutcomes() {
    K && R.log("Flushing outcomes...");
    const e = this._clearOutcomes();
    if (e.length === 0) return void (K && R.log("No outcomes to send"));
    if (!this._dsn) return void (K && R.log("No dsn provided, will not send outcomes"));
    K && R.log("Sending outcomes:", e);
    const t = (n = e, It((i = this._options.tunnel && or(this._dsn)) ? { dsn: i } : {}, [[{ type: "client_report" }, { timestamp: o || jt(), discarded_events: n }]]));
    var n, i, o;
    this.sendEnvelope(t);
  }
}
function Ai(r) {
  return r.type === void 0;
}
function Mi(r) {
  return r.type === "transaction";
}
function wc(r) {
  const e = [];
  function t(n) {
    return e.splice(e.indexOf(n), 1)[0] || Promise.resolve(void 0);
  }
  return { $: e, add: function(n) {
    if (!(r === void 0 || e.length < r)) return sr(new Se("Not adding Promise because buffer limit was reached."));
    const i = n();
    return e.indexOf(i) === -1 && e.push(i), i.then(() => t(i)).then(null, () => t(i).then(null, () => {
    })), i;
  }, drain: function(n) {
    return new ge((i, o) => {
      let a = e.length;
      if (!a) return i(!0);
      const l = setTimeout(() => {
        n && n > 0 && i(!1);
      }, n);
      e.forEach((u) => {
        rt(u).then(() => {
          --a || (clearTimeout(l), i(!0));
        }, o);
      });
    });
  } };
}
function Ec(r, { statusCode: e, headers: t }, n = Date.now()) {
  const i = { ...r }, o = t && t["x-sentry-rate-limits"], a = t && t["retry-after"];
  if (o) for (const l of o.trim().split(",")) {
    const [u, p, , , f] = l.split(":", 5), v = parseInt(u, 10), k = 1e3 * (isNaN(v) ? 60 : v);
    if (p) for (const T of p.split(";")) T === "metric_bucket" && f && !f.split(";").includes("custom") || (i[T] = n + k);
    else i.all = n + k;
  }
  else a ? i.all = n + function(l, u = Date.now()) {
    const p = parseInt(`${l}`, 10);
    if (!isNaN(p)) return 1e3 * p;
    const f = Date.parse(`${l}`);
    return isNaN(f) ? 6e4 : f - u;
  }(a, n) : e === 429 && (i.all = n + 6e4);
  return i;
}
function kc(r, e, t = wc(r.bufferSize || 64)) {
  let n = {};
  return { send: function(i) {
    const o = [];
    if (vi(i, (u, p) => {
      const f = yi(p);
      if (function(v, k, T = Date.now()) {
        return function(S, g) {
          return S[g] || S.all || 0;
        }(v, k) > T;
      }(n, f)) {
        const v = Pi(u, p);
        r.recordDroppedEvent("ratelimit_backoff", f, v);
      } else o.push(u);
    }), o.length === 0) return rt({});
    const a = It(i[0], o), l = (u) => {
      vi(a, (p, f) => {
        const v = Pi(p, f);
        r.recordDroppedEvent(u, yi(f), v);
      });
    };
    return t.add(() => e({ body: fc(a) }).then((u) => (u.statusCode !== void 0 && (u.statusCode < 200 || u.statusCode >= 300) && K && R.warn(`Sentry responded with status code ${u.statusCode} to sent event.`), n = Ec(n, u), u), (u) => {
      throw l("network_error"), u;
    })).then((u) => u, (u) => {
      if (u instanceof Se) return K && R.error("Skipped sending event because buffer is full."), l("queue_overflow"), rt({});
      throw u;
    });
  }, flush: (i) => t.drain(i) };
}
function Pi(r, e) {
  if (e === "event" || e === "transaction") return Array.isArray(r) ? r[1] : void 0;
}
const Tc = 100;
function Ye(r, e) {
  const t = ie(), n = Lt();
  if (!t) return;
  const { beforeBreadcrumb: i = null, maxBreadcrumbs: o = Tc } = t.getOptions();
  if (o <= 0) return;
  const a = { timestamp: jt(), ...r }, l = i ? Dt(() => i(a, e)) : a;
  l !== null && (t.emit && t.emit("beforeAddBreadcrumb", l, e), n.addBreadcrumb(l, o));
}
let Ii;
const Di = /* @__PURE__ */ new WeakMap(), Cc = () => ({ name: "FunctionToString", setupOnce() {
  Ii = Function.prototype.toString;
  try {
    Function.prototype.toString = function(...r) {
      const e = kn(this), t = Di.has(ie()) && e !== void 0 ? e : this;
      return Ii.apply(t, r);
    };
  } catch {
  }
}, setup(r) {
  Di.set(r, !0);
} }), Oc = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/], Ac = (r = {}) => ({ name: "InboundFilters", processEvent(e, t, n) {
  const i = n.getOptions(), o = function(a = {}, l = {}) {
    return { allowUrls: [...a.allowUrls || [], ...l.allowUrls || []], denyUrls: [...a.denyUrls || [], ...l.denyUrls || []], ignoreErrors: [...a.ignoreErrors || [], ...l.ignoreErrors || [], ...a.disableErrorDefaults ? [] : Oc], ignoreTransactions: [...a.ignoreTransactions || [], ...l.ignoreTransactions || []], ignoreInternal: a.ignoreInternal === void 0 || a.ignoreInternal };
  }(r, i);
  return function(a, l) {
    return l.ignoreInternal && function(u) {
      try {
        return u.exception.values[0].type === "SentryError";
      } catch {
      }
      return !1;
    }(a) ? (K && R.warn(`Event dropped due to being internal Sentry Error.
Event: ${Fe(a)}`), !0) : function(u, p) {
      return u.type || !p || !p.length ? !1 : function(f) {
        const v = [];
        f.message && v.push(f.message);
        let k;
        try {
          k = f.exception.values[f.exception.values.length - 1];
        } catch {
        }
        return k && k.value && (v.push(k.value), k.type && v.push(`${k.type}: ${k.value}`)), v;
      }(u).some((f) => qt(f, p));
    }(a, l.ignoreErrors) ? (K && R.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Fe(a)}`), !0) : function(u) {
      return u.type || !u.exception || !u.exception.values || u.exception.values.length === 0 ? !1 : !u.message && !u.exception.values.some((p) => p.stacktrace || p.type && p.type !== "Error" || p.value);
    }(a) ? (K && R.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${Fe(a)}`), !0) : function(u, p) {
      if (u.type !== "transaction" || !p || !p.length) return !1;
      const f = u.transaction;
      return !!f && qt(f, p);
    }(a, l.ignoreTransactions) ? (K && R.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Fe(a)}`), !0) : function(u, p) {
      if (!p || !p.length) return !1;
      const f = Ut(u);
      return !!f && qt(f, p);
    }(a, l.denyUrls) ? (K && R.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Fe(a)}.
Url: ${Ut(a)}`), !0) : function(u, p) {
      if (!p || !p.length) return !0;
      const f = Ut(u);
      return !f || qt(f, p);
    }(a, l.allowUrls) ? !1 : (K && R.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Fe(a)}.
Url: ${Ut(a)}`), !0);
  }(e, o) ? null : e;
} });
function Ut(r) {
  try {
    let e;
    try {
      e = r.exception.values[0].stacktrace.frames;
    } catch {
    }
    return e ? function(t = []) {
      for (let n = t.length - 1; n >= 0; n--) {
        const i = t[n];
        if (i && i.filename !== "<anonymous>" && i.filename !== "[native code]") return i.filename || null;
      }
      return null;
    }(e) : null;
  } catch {
    return K && R.error(`Cannot extract url for event ${Fe(r)}`), null;
  }
}
function Mc(r, e, t = 250, n, i, o, a) {
  if (!(o.exception && o.exception.values && a && et(a.originalException, Error))) return;
  const l = o.exception.values.length > 0 ? o.exception.values[o.exception.values.length - 1] : void 0;
  var u, p;
  l && (o.exception.values = (u = Xr(r, e, i, a.originalException, n, o.exception.values, l, 0), p = t, u.map((f) => (f.value && (f.value = ct(f.value, p)), f))));
}
function Xr(r, e, t, n, i, o, a, l) {
  if (o.length >= t + 1) return o;
  let u = [...o];
  if (et(n[i], Error)) {
    ji(a, l);
    const p = r(e, n[i]), f = u.length;
    Li(p, i, f, l), u = Xr(r, e, t, n[i], i, [p, ...u], p, f);
  }
  return Array.isArray(n.errors) && n.errors.forEach((p, f) => {
    if (et(p, Error)) {
      ji(a, l);
      const v = r(e, p), k = u.length;
      Li(v, `errors[${f}]`, k, l), u = Xr(r, e, t, p, i, [v, ...u], v, k);
    }
  }), u;
}
function ji(r, e) {
  r.mechanism = r.mechanism || { type: "generic", handled: !0 }, r.mechanism = { ...r.mechanism, ...r.type === "AggregateError" && { is_exception_group: !0 }, exception_id: e };
}
function Li(r, e, t, n) {
  r.mechanism = r.mechanism || { type: "generic", handled: !0 }, r.mechanism = { ...r.mechanism, type: "chained", source: e, exception_id: t, parent_id: n };
}
function kr(r) {
  if (!r) return {};
  const e = r.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!e) return {};
  const t = e[6] || "", n = e[8] || "";
  return { host: e[4], path: e[5], protocol: e[2], search: t, hash: n, relative: e[5] + t + n };
}
function Pc() {
  "console" in Y && Jr.forEach(function(r) {
    r in Y.console && de(Y.console, r, function(e) {
      return ir[r] = e, function(...t) {
        we("console", { args: t, level: r });
        const n = ir[r];
        n && n.apply(Y.console, t);
      };
    });
  });
}
function Ic(r) {
  return r === "warn" ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(r) ? r : "log";
}
const Dc = () => {
  let r;
  return { name: "Dedupe", processEvent(e) {
    if (e.type) return e;
    try {
      if (function(t, n) {
        return n ? !!(function(i, o) {
          const a = i.message, l = o.message;
          return !(!a && !l || a && !l || !a && l || a !== l || !Ri(i, o) || !Ni(i, o));
        }(t, n) || function(i, o) {
          const a = xi(o), l = xi(i);
          return !(!a || !l || a.type !== l.type || a.value !== l.value || !Ri(i, o) || !Ni(i, o));
        }(t, n)) : !1;
      }(e, r)) return K && R.warn("Event dropped due to being a duplicate of previously captured event."), null;
    } catch {
    }
    return r = e;
  } };
};
function Ni(r, e) {
  let t = ti(r), n = ti(e);
  if (!t && !n) return !0;
  if (t && !n || !t && n || n.length !== t.length) return !1;
  for (let i = 0; i < n.length; i++) {
    const o = n[i], a = t[i];
    if (o.filename !== a.filename || o.lineno !== a.lineno || o.colno !== a.colno || o.function !== a.function) return !1;
  }
  return !0;
}
function Ri(r, e) {
  let t = r.fingerprint, n = e.fingerprint;
  if (!t && !n) return !0;
  if (t && !n || !t && n) return !1;
  try {
    return t.join("") === n.join("");
  } catch {
    return !1;
  }
}
function xi(r) {
  return r.exception && r.exception.values && r.exception.values[0];
}
function Fi(r) {
  return r === void 0 ? void 0 : r >= 400 && r < 500 ? "warning" : r >= 500 ? "error" : void 0;
}
const Tr = Y;
function Zr(r) {
  return r && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(r.toString());
}
function jc() {
  if (typeof EdgeRuntime == "string") return !0;
  if (!function() {
    if (!("fetch" in Tr)) return !1;
    try {
      return new Headers(), new Request("http://www.example.com"), new Response(), !0;
    } catch {
      return !1;
    }
  }()) return !1;
  if (Zr(Tr.fetch)) return !0;
  let r = !1;
  const e = Tr.document;
  if (e && typeof e.createElement == "function") try {
    const t = e.createElement("iframe");
    t.hidden = !0, e.head.appendChild(t), t.contentWindow && t.contentWindow.fetch && (r = Zr(t.contentWindow.fetch)), e.head.removeChild(t);
  } catch (t) {
    it && R.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t);
  }
  return r;
}
function Lc(r, e) {
  const t = "fetch";
  Xe(t, r), Ze(t, () => function(n, i = !1) {
    i && !jc() || de(Y, "fetch", function(o) {
      return function(...a) {
        const l = new Error(), { method: u, url: p } = function(v) {
          if (v.length === 0) return { method: "GET", url: "" };
          if (v.length === 2) {
            const [T, S] = v;
            return { url: qi(T), method: en(S, "method") ? String(S.method).toUpperCase() : "GET" };
          }
          const k = v[0];
          return { url: qi(k), method: en(k, "method") ? String(k.method).toUpperCase() : "GET" };
        }(a), f = { args: a, fetchData: { method: u, url: p }, startTimestamp: 1e3 * Le(), virtualError: l };
        return n || we("fetch", { ...f }), o.apply(Y, a).then(async (v) => (n ? n(v) : we("fetch", { ...f, endTimestamp: 1e3 * Le(), response: v }), v), (v) => {
          throw we("fetch", { ...f, endTimestamp: 1e3 * Le(), error: v }), Sn(v) && v.stack === void 0 && (v.stack = l.stack, tt(v, "framesToPop", 1)), v;
        });
      };
    });
  }(void 0, e));
}
function en(r, e) {
  return !!r && typeof r == "object" && !!r[e];
}
function qi(r) {
  return typeof r == "string" ? r : r ? en(r, "url") ? r.url : r.toString ? r.toString() : "" : "";
}
const Jt = Y, re = Y;
let tn = 0;
function Vi() {
  return tn > 0;
}
function mt(r, e = {}) {
  if (!/* @__PURE__ */ function(n) {
    return typeof n == "function";
  }(r)) return r;
  try {
    const n = r.__sentry_wrapped__;
    if (n) return typeof n == "function" ? n : r;
    if (kn(r)) return r;
  } catch {
    return r;
  }
  const t = function(...n) {
    try {
      const i = n.map((o) => mt(o, e));
      return r.apply(this, i);
    } catch (i) {
      throw tn++, setTimeout(() => {
        tn--;
      }), function(...o) {
        const a = Cn(fr());
        if (o.length === 2) {
          const [l, u] = o;
          return l ? a.withSetScope(l, u) : a.withScope(u);
        }
        a.withScope(o[0]);
      }((o) => {
        var a;
        o.addEventProcessor((l) => (e.mechanism && (Yr(l, void 0), pt(l, e.mechanism)), l.extra = { ...l.extra, arguments: n }, l)), a = i, st().captureException(a, void 0);
      }), i;
    }
  };
  try {
    for (const n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  } catch {
  }
  Bs(t, r), tt(r, "__sentry_wrapped__", t);
  try {
    Object.getOwnPropertyDescriptor(t, "name").configurable && Object.defineProperty(t, "name", { get: () => r.name });
  } catch {
  }
  return t;
}
const yr = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function Mn(r, e) {
  const t = Pn(r, e), n = { type: xc(e), value: Fc(e) };
  return t.length && (n.stacktrace = { frames: t }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n;
}
function Nc(r, e, t, n) {
  const i = ie(), o = i && i.getOptions().normalizeDepth, a = function(p) {
    for (const f in p) if (Object.prototype.hasOwnProperty.call(p, f)) {
      const v = p[f];
      if (v instanceof Error) return v;
    }
  }(e), l = { __serialized__: Hs(e, o) };
  if (a) return { exception: { values: [Mn(r, a)] }, extra: l };
  const u = { exception: { values: [{ type: mr(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error", value: qc(e, { isUnhandledRejection: n }) }] }, extra: l };
  if (t) {
    const p = Pn(r, t);
    p.length && (u.exception.values[0].stacktrace = { frames: p });
  }
  return u;
}
function Cr(r, e) {
  return { exception: { values: [Mn(r, e)] } };
}
function Pn(r, e) {
  const t = e.stacktrace || e.stack || "", n = function(o) {
    return o && Rc.test(o.message) ? 1 : 0;
  }(e), i = function(o) {
    return typeof o.framesToPop == "number" ? o.framesToPop : 0;
  }(e);
  try {
    return r(t, n, i);
  } catch {
  }
  return [];
}
const Rc = /Minified React error #\d+;/i;
function Zs(r) {
  return typeof WebAssembly < "u" && WebAssembly.Exception !== void 0 && r instanceof WebAssembly.Exception;
}
function xc(r) {
  const e = r && r.name;
  return !e && Zs(r) ? r.message && Array.isArray(r.message) && r.message.length == 2 ? r.message[0] : "WebAssembly.Exception" : e;
}
function Fc(r) {
  const e = r && r.message;
  return e ? e.error && typeof e.error.message == "string" ? e.error.message : Zs(r) && Array.isArray(r.message) && r.message.length == 2 ? r.message[1] : e : "No error message";
}
function rn(r, e, t, n, i) {
  let o;
  if ($s(e) && e.error)
    return Cr(r, e.error);
  if (ni(e) || gt(e, "DOMException")) {
    const a = e;
    if ("stack" in e) o = Cr(r, e);
    else {
      const l = a.name || (ni(a) ? "DOMError" : "DOMException"), u = a.message ? `${l}: ${a.message}` : l;
      o = nn(r, u, t, n), Yr(o, u);
    }
    return "code" in a && (o.tags = { ...o.tags, "DOMException.code": `${a.code}` }), o;
  }
  return Sn(e) ? Cr(r, e) : dt(e) || mr(e) ? (o = Nc(r, e, t, i), pt(o, { synthetic: !0 }), o) : (o = nn(r, e, t, n), Yr(o, `${e}`), pt(o, { synthetic: !0 }), o);
}
function nn(r, e, t, n) {
  const i = {};
  if (n && t) {
    const o = Pn(r, t);
    o.length && (i.exception = { values: [{ value: e, stacktrace: { frames: o } }] }), pt(i, { synthetic: !0 });
  }
  if (wn(e)) {
    const { __sentry_template_string__: o, __sentry_template_values__: a } = e;
    return i.logentry = { message: o, params: a }, i;
  }
  return i.message = e, i;
}
function qc(r, { isUnhandledRejection: e }) {
  const t = function(i, o = 40) {
    const a = Object.keys(Gs(i));
    a.sort();
    const l = a[0];
    if (!l) return "[object has no keys]";
    if (l.length >= o) return ct(l, o);
    for (let u = a.length; u > 0; u--) {
      const p = a.slice(0, u).join(", ");
      if (!(p.length > o)) return u === a.length ? p : ct(p, o);
    }
    return "";
  }(r), n = e ? "promise rejection" : "exception";
  return $s(r) ? `Event \`ErrorEvent\` captured as ${n} with message \`${r.message}\`` : mr(r) ? `Event \`${function(i) {
    try {
      const o = Object.getPrototypeOf(i);
      return o ? o.constructor.name : void 0;
    } catch {
    }
  }(r)}\` (type=${r.type}) captured as ${n}` : `Object captured as ${n} with keys: ${t}`;
}
class Vc extends Sc {
  constructor(e) {
    const t = { parentSpanIsAlwaysRootSpan: !0, ...e };
    (function(n, i, o = [i], a = "npm") {
      const l = n._metadata || {};
      l.sdk || (l.sdk = { name: `sentry.javascript.${i}`, packages: o.map((u) => ({ name: `${a}:@sentry/${u}`, version: Ke })), version: Ke }), n._metadata = l;
    })(t, "browser", ["browser"], re.SENTRY_SDK_SOURCE || "npm"), super(t), t.sendClientReports && re.document && re.document.addEventListener("visibilitychange", () => {
      re.document.visibilityState === "hidden" && this._flushOutcomes();
    });
  }
  eventFromException(e, t) {
    return function(n, i, o, a) {
      const l = rn(n, i, o && o.syntheticException || void 0, a);
      return pt(l), l.level = "error", o && o.event_id && (l.event_id = o.event_id), rt(l);
    }(this._options.stackParser, e, t, this._options.attachStacktrace);
  }
  eventFromMessage(e, t = "info", n) {
    return function(i, o, a = "info", l, u) {
      const p = nn(i, o, l && l.syntheticException || void 0, u);
      return p.level = a, l && l.event_id && (p.event_id = l.event_id), rt(p);
    }(this._options.stackParser, e, t, n, this._options.attachStacktrace);
  }
  captureUserFeedback(e) {
    if (!this._isEnabled()) return void (yr && R.warn("SDK not enabled, will not capture user feedback."));
    const t = function(n, { metadata: i, tunnel: o, dsn: a }) {
      const l = { event_id: n.event_id, sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...i && i.sdk && { sdk: { name: i.sdk.name, version: i.sdk.version } }, ...!!o && !!a && { dsn: or(a) } };
      return It(l, [/* @__PURE__ */ function(p) {
        return [{ type: "user_report" }, p];
      }(n)]);
    }(e, { metadata: this.getSdkMetadata(), dsn: this.getDsn(), tunnel: this.getOptions().tunnel });
    this.sendEnvelope(t);
  }
  _prepareEvent(e, t, n) {
    return e.platform = e.platform || "javascript", super._prepareEvent(e, t, n);
  }
}
const $c = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, le = Y;
let $i, Or, Ar, Bt;
function Uc() {
  if (!le.document) return;
  const r = we.bind(null, "dom"), e = Ui(r, !0);
  le.document.addEventListener("click", e, !1), le.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach((t) => {
    const n = le[t], i = n && n.prototype;
    i && i.hasOwnProperty && i.hasOwnProperty("addEventListener") && (de(i, "addEventListener", function(o) {
      return function(a, l, u) {
        if (a === "click" || a == "keypress") try {
          const p = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}, f = p[a] = p[a] || { refCount: 0 };
          if (!f.handler) {
            const v = Ui(r);
            f.handler = v, o.call(this, a, v, u);
          }
          f.refCount++;
        } catch {
        }
        return o.call(this, a, l, u);
      };
    }), de(i, "removeEventListener", function(o) {
      return function(a, l, u) {
        if (a === "click" || a == "keypress") try {
          const p = this.__sentry_instrumentation_handlers__ || {}, f = p[a];
          f && (f.refCount--, f.refCount <= 0 && (o.call(this, a, f.handler, u), f.handler = void 0, delete p[a]), Object.keys(p).length === 0 && delete this.__sentry_instrumentation_handlers__);
        } catch {
        }
        return o.call(this, a, l, u);
      };
    }));
  });
}
function Ui(r, e = !1) {
  return (t) => {
    if (!t || t._sentryCaptured) return;
    const n = function(o) {
      try {
        return o.target;
      } catch {
        return null;
      }
    }(t);
    if (function(o, a) {
      return o === "keypress" && (!a || !a.tagName || a.tagName !== "INPUT" && a.tagName !== "TEXTAREA" && !a.isContentEditable);
    }(t.type, n)) return;
    tt(t, "_sentryCaptured", !0), n && !n._sentryId && tt(n, "_sentryId", ye());
    const i = t.type === "keypress" ? "input" : t.type;
    (function(o) {
      if (o.type !== Or) return !1;
      try {
        if (!o.target || o.target._sentryId !== Ar) return !1;
      } catch {
      }
      return !0;
    })(t) || (r({ event: t, name: i, global: e }), Or = t.type, Ar = n ? n._sentryId : void 0), clearTimeout($i), $i = le.setTimeout(() => {
      Ar = void 0, Or = void 0;
    }, 1e3);
  };
}
function eo(r) {
  const e = "history";
  Xe(e, r), Ze(e, Jc);
}
function Jc() {
  if (!function() {
    const t = Jt.chrome, n = t && t.app && t.app.runtime, i = "history" in Jt && !!Jt.history.pushState && !!Jt.history.replaceState;
    return !n && i;
  }()) return;
  const r = le.onpopstate;
  function e(t) {
    return function(...n) {
      const i = n.length > 2 ? n[2] : void 0;
      if (i) {
        const o = Bt, a = String(i);
        Bt = a, we("history", { from: o, to: a });
      }
      return t.apply(this, n);
    };
  }
  le.onpopstate = function(...t) {
    const n = le.location.href, i = Bt;
    if (Bt = n, we("history", { from: i, to: n }), r) try {
      return r.apply(this, t);
    } catch {
    }
  }, de(le.history, "pushState", e), de(le.history, "replaceState", e);
}
const Qt = {};
function Ji(r) {
  Qt[r] = void 0;
}
const kt = "__sentry_xhr_v3__";
function Bc() {
  if (!le.XMLHttpRequest) return;
  const r = XMLHttpRequest.prototype;
  r.open = new Proxy(r.open, { apply(e, t, n) {
    const i = new Error(), o = 1e3 * Le(), a = De(n[0]) ? n[0].toUpperCase() : void 0, l = function(p) {
      if (De(p)) return p;
      try {
        return p.toString();
      } catch {
      }
    }(n[1]);
    if (!a || !l) return e.apply(t, n);
    t[kt] = { method: a, url: l, request_headers: {} }, a === "POST" && l.match(/sentry_key/) && (t.__sentry_own_request__ = !0);
    const u = () => {
      const p = t[kt];
      if (p && t.readyState === 4) {
        try {
          p.status_code = t.status;
        } catch {
        }
        we("xhr", { endTimestamp: 1e3 * Le(), startTimestamp: o, xhr: t, virtualError: i });
      }
    };
    return "onreadystatechange" in t && typeof t.onreadystatechange == "function" ? t.onreadystatechange = new Proxy(t.onreadystatechange, { apply: (p, f, v) => (u(), p.apply(f, v)) }) : t.addEventListener("readystatechange", u), t.setRequestHeader = new Proxy(t.setRequestHeader, { apply(p, f, v) {
      const [k, T] = v, S = f[kt];
      return S && De(k) && De(T) && (S.request_headers[k.toLowerCase()] = T), p.apply(f, v);
    } }), e.apply(t, n);
  } }), r.send = new Proxy(r.send, { apply(e, t, n) {
    const i = t[kt];
    return i ? (n[0] !== void 0 && (i.body = n[0]), we("xhr", { startTimestamp: 1e3 * Le(), xhr: t }), e.apply(t, n)) : e.apply(t, n);
  } });
}
function Gc(r, e = function(t) {
  const n = Qt[t];
  if (n) return n;
  let i = le[t];
  if (Zr(i)) return Qt[t] = i.bind(le);
  const o = le.document;
  if (o && typeof o.createElement == "function") try {
    const a = o.createElement("iframe");
    a.hidden = !0, o.head.appendChild(a);
    const l = a.contentWindow;
    l && l[t] && (i = l[t]), o.head.removeChild(a);
  } catch (a) {
    $c && R.warn(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `, a);
  }
  return i && (Qt[t] = i.bind(le));
}("fetch")) {
  let t = 0, n = 0;
  return kc(r, function(i) {
    const o = i.body.length;
    t += o, n++;
    const a = { body: i.body, method: "POST", referrerPolicy: "origin", headers: r.headers, keepalive: t <= 6e4 && n < 15, ...r.fetchOptions };
    if (!e) return Ji("fetch"), sr("No fetch implementation available");
    try {
      return e(r.url, a).then((l) => (t -= o, n--, { statusCode: l.status, headers: { "x-sentry-rate-limits": l.headers.get("X-Sentry-Rate-Limits"), "retry-after": l.headers.get("Retry-After") } }));
    } catch (l) {
      return Ji("fetch"), t -= o, n--, sr(l);
    }
  });
}
function Mr(r, e, t, n) {
  const i = { filename: r, function: e === "<anonymous>" ? Qe : e, in_app: !0 };
  return t !== void 0 && (i.lineno = t), n !== void 0 && (i.colno = n), i;
}
const Yc = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, Wc = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, zc = /\((\S*)(?::(\d+))(?::(\d+))\)/, Hc = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, Qc = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, Kc = function(...r) {
  const e = r.sort((t, n) => t[0] - n[0]).map((t) => t[1]);
  return (t, n = 0, i = 0) => {
    const o = [], a = t.split(`
`);
    for (let l = n; l < a.length; l++) {
      const u = a[l];
      if (u.length > 1024) continue;
      const p = Xn.test(u) ? u.replace(Xn, "$1") : u;
      if (!p.match(/\S*Error: /)) {
        for (const f of e) {
          const v = f(p);
          if (v) {
            o.push(v);
            break;
          }
        }
        if (o.length >= 50 + i) break;
      }
    }
    return function(l) {
      if (!l.length) return [];
      const u = Array.from(l);
      return /sentryWrapped/.test(Ft(u).function || "") && u.pop(), u.reverse(), Zn.test(Ft(u).function || "") && (u.pop(), Zn.test(Ft(u).function || "") && u.pop()), u.slice(0, 50).map((p) => ({ ...p, filename: p.filename || Ft(u).filename, function: p.function || Qe }));
    }(o.slice(i));
  };
}([30, (r) => {
  const e = Yc.exec(r);
  if (e) {
    const [, n, i, o] = e;
    return Mr(n, Qe, +i, +o);
  }
  const t = Wc.exec(r);
  if (t) {
    if (t[2] && t[2].indexOf("eval") === 0) {
      const o = zc.exec(t[2]);
      o && (t[2] = o[1], t[3] = o[2], t[4] = o[3]);
    }
    const [n, i] = Bi(t[1] || Qe, t[2]);
    return Mr(i, n, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0);
  }
}], [50, (r) => {
  const e = Hc.exec(r);
  if (e) {
    if (e[3] && e[3].indexOf(" > eval") > -1) {
      const i = Qc.exec(e[3]);
      i && (e[1] = e[1] || "eval", e[3] = i[1], e[4] = i[2], e[5] = "");
    }
    let t = e[3], n = e[1] || Qe;
    return [n, t] = Bi(n, t), Mr(t, n, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0);
  }
}]), Bi = (r, e) => {
  const t = r.indexOf("safari-extension") !== -1, n = r.indexOf("safari-web-extension") !== -1;
  return t || n ? [r.indexOf("@") !== -1 ? r.split("@")[0] : Qe, t ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [r, e];
}, Gi = 1024, Xc = (r = {}) => {
  const e = { console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0, ...r };
  return { name: "Breadcrumbs", setup(t) {
    var n;
    e.console && function(i) {
      const o = "console";
      Xe(o, i), Ze(o, Pc);
    }(/* @__PURE__ */ function(i) {
      return function(o) {
        if (ie() !== i) return;
        const a = { category: "console", data: { arguments: o.args, logger: "console" }, level: Ic(o.level), message: ii(o.args, " ") };
        if (o.level === "assert") {
          if (o.args[0] !== !1) return;
          a.message = `Assertion failed: ${ii(o.args.slice(1), " ") || "console.assert"}`, a.data.arguments = o.args.slice(1);
        }
        Ye(a, { input: o.args, level: o.level });
      };
    }(t)), e.dom && (n = /* @__PURE__ */ function(i, o) {
      return function(a) {
        if (ie() !== i) return;
        let l, u, p = typeof o == "object" ? o.serializeAttribute : void 0, f = typeof o == "object" && typeof o.maxStringLength == "number" ? o.maxStringLength : void 0;
        f && f > Gi && (yr && R.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${f} was configured. Sentry will use 1024 instead.`), f = Gi), typeof p == "string" && (p = [p]);
        try {
          const k = a.event, T = function(S) {
            return !!S && !!S.target;
          }(k) ? k.target : k;
          l = Js(T, { keyAttrs: p, maxStringLength: f }), u = function(S) {
            if (!En.HTMLElement) return null;
            let g = S;
            for (let b = 0; b < 5; b++) {
              if (!g) return null;
              if (g instanceof HTMLElement) {
                if (g.dataset.sentryComponent) return g.dataset.sentryComponent;
                if (g.dataset.sentryElement) return g.dataset.sentryElement;
              }
              g = g.parentNode;
            }
            return null;
          }(T);
        } catch {
          l = "<unknown>";
        }
        if (l.length === 0) return;
        const v = { category: `ui.${a.name}`, message: l };
        u && (v.data = { "ui.component_name": u }), Ye(v, { event: a.event, name: a.name, global: a.global });
      };
    }(t, e.dom), Xe("dom", n), Ze("dom", Uc)), e.xhr && function(i) {
      Xe("xhr", i), Ze("xhr", Bc);
    }(/* @__PURE__ */ function(i) {
      return function(o) {
        if (ie() !== i) return;
        const { startTimestamp: a, endTimestamp: l } = o, u = o.xhr[kt];
        if (!a || !l || !u) return;
        const { method: p, url: f, status_code: v, body: k } = u, T = { method: p, url: f, status_code: v }, S = { xhr: o.xhr, input: k, startTimestamp: a, endTimestamp: l };
        Ye({ category: "xhr", data: T, type: "http", level: Fi(v) }, S);
      };
    }(t)), e.fetch && Lc(/* @__PURE__ */ function(i) {
      return function(o) {
        if (ie() !== i) return;
        const { startTimestamp: a, endTimestamp: l } = o;
        if (l && (!o.fetchData.url.match(/sentry_key/) || o.fetchData.method !== "POST")) if (o.error)
          Ye({ category: "fetch", data: o.fetchData, level: "error", type: "http" }, { data: o.error, input: o.args, startTimestamp: a, endTimestamp: l });
        else {
          const u = o.response, p = { ...o.fetchData, status_code: u && u.status }, f = { input: o.args, response: u, startTimestamp: a, endTimestamp: l };
          Ye({ category: "fetch", data: p, type: "http", level: Fi(p.status_code) }, f);
        }
      };
    }(t)), e.history && eo(/* @__PURE__ */ function(i) {
      return function(o) {
        if (ie() !== i) return;
        let a = o.from, l = o.to;
        const u = kr(re.location.href);
        let p = a ? kr(a) : void 0;
        const f = kr(l);
        p && p.path || (p = u), u.protocol === f.protocol && u.host === f.host && (l = f.relative), u.protocol === p.protocol && u.host === p.host && (a = p.relative), Ye({ category: "navigation", data: { from: a, to: l } });
      };
    }(t)), e.sentry && t.on("beforeSendEvent", /* @__PURE__ */ function(i) {
      return function(o) {
        ie() === i && Ye({ category: "sentry." + (o.type === "transaction" ? "transaction" : "event"), event_id: o.event_id, level: o.level, message: Fe(o) }, { event: o });
      };
    }(t));
  } };
}, Zc = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], el = (r = {}) => {
  const e = { XMLHttpRequest: !0, eventTarget: !0, requestAnimationFrame: !0, setInterval: !0, setTimeout: !0, ...r };
  return { name: "BrowserApiErrors", setupOnce() {
    e.setTimeout && de(re, "setTimeout", Yi), e.setInterval && de(re, "setInterval", Yi), e.requestAnimationFrame && de(re, "requestAnimationFrame", tl), e.XMLHttpRequest && "XMLHttpRequest" in re && de(XMLHttpRequest.prototype, "send", rl);
    const t = e.eventTarget;
    t && (Array.isArray(t) ? t : Zc).forEach(nl);
  } };
};
function Yi(r) {
  return function(...e) {
    const t = e[0];
    return e[0] = mt(t, { mechanism: { data: { function: $e(r) }, handled: !1, type: "instrument" } }), r.apply(this, e);
  };
}
function tl(r) {
  return function(e) {
    return r.apply(this, [mt(e, { mechanism: { data: { function: "requestAnimationFrame", handler: $e(r) }, handled: !1, type: "instrument" } })]);
  };
}
function rl(r) {
  return function(...e) {
    const t = this;
    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((n) => {
      n in t && typeof t[n] == "function" && de(t, n, function(i) {
        const o = { mechanism: { data: { function: n, handler: $e(i) }, handled: !1, type: "instrument" } }, a = kn(i);
        return a && (o.mechanism.data.handler = $e(a)), mt(i, o);
      });
    }), r.apply(this, e);
  };
}
function nl(r) {
  const e = re[r], t = e && e.prototype;
  t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (de(t, "addEventListener", function(n) {
    return function(i, o, a) {
      try {
        typeof o.handleEvent == "function" && (o.handleEvent = mt(o.handleEvent, { mechanism: { data: { function: "handleEvent", handler: $e(o), target: r }, handled: !1, type: "instrument" } }));
      } catch {
      }
      return n.apply(this, [i, mt(o, { mechanism: { data: { function: "addEventListener", handler: $e(o), target: r }, handled: !1, type: "instrument" } }), a]);
    };
  }), de(t, "removeEventListener", function(n) {
    return function(i, o, a) {
      try {
        const l = o.__sentry_wrapped__;
        l && n.call(this, i, l, a);
      } catch {
      }
      return n.call(this, i, o, a);
    };
  }));
}
const il = () => ({ name: "BrowserSession", setupOnce() {
  re.document !== void 0 ? (wi({ ignoreDuration: !0 }), Ei(), eo(({ from: r, to: e }) => {
    r !== void 0 && r !== e && (wi({ ignoreDuration: !0 }), Ei());
  })) : yr && R.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
} }), sl = (r = {}) => {
  const e = { onerror: !0, onunhandledrejection: !0, ...r };
  return { name: "GlobalHandlers", setupOnce() {
    Error.stackTraceLimit = 50;
  }, setup(t) {
    e.onerror && (function(n) {
      (function(i) {
        const o = "error";
        Xe(o, i), Ze(o, Ha);
      })((i) => {
        const { stackParser: o, attachStacktrace: a } = zi();
        if (ie() !== n || Vi()) return;
        const { msg: l, url: u, line: p, column: f, error: v } = i, k = function(T, S, g, b) {
          const y = T.exception = T.exception || {}, O = y.values = y.values || [], M = O[0] = O[0] || {}, D = M.stacktrace = M.stacktrace || {}, L = D.frames = D.frames || [], q = b, W = g, Z = De(S) && S.length > 0 ? S : function() {
            try {
              return En.document.location.href;
            } catch {
              return "";
            }
          }();
          return L.length === 0 && L.push({ colno: q, filename: Z, function: Qe, in_app: !0, lineno: W }), T;
        }(rn(o, v || l, void 0, a, !1), u, p, f);
        k.level = "error", Si(k, { originalException: v, mechanism: { handled: !1, type: "onerror" } });
      });
    }(t), Wi("onerror")), e.onunhandledrejection && (function(n) {
      (function(i) {
        const o = "unhandledrejection";
        Xe(o, i), Ze(o, Qa);
      })((i) => {
        const { stackParser: o, attachStacktrace: a } = zi();
        if (ie() !== n || Vi()) return;
        const l = function(p) {
          if (Br(p)) return p;
          try {
            if ("reason" in p) return p.reason;
            if ("detail" in p && "reason" in p.detail) return p.detail.reason;
          } catch {
          }
          return p;
        }(i), u = Br(l) ? { exception: { values: [{ type: "UnhandledRejection", value: `Non-Error promise rejection captured with value: ${String(l)}` }] } } : rn(o, l, void 0, a, !0);
        u.level = "error", Si(u, { originalException: l, mechanism: { handled: !1, type: "onunhandledrejection" } });
      });
    }(t), Wi("onunhandledrejection"));
  } };
};
function Wi(r) {
  yr && R.log(`Global Handler attached: ${r}`);
}
function zi() {
  const r = ie();
  return r && r.getOptions() || { stackParser: () => [], attachStacktrace: !1 };
}
const ol = () => ({ name: "HttpContext", preprocessEvent(r) {
  if (!re.navigator && !re.location && !re.document) return;
  const e = r.request && r.request.url || re.location && re.location.href, { referrer: t } = re.document || {}, { userAgent: n } = re.navigator || {}, i = { ...r.request && r.request.headers, ...t && { Referer: t }, ...n && { "User-Agent": n } }, o = { ...r.request, ...e && { url: e }, headers: i };
  r.request = o;
} }), al = (r = {}) => {
  const e = r.limit || 5, t = r.key || "cause";
  return { name: "LinkedErrors", preprocessEvent(n, i, o) {
    const a = o.getOptions();
    Mc(Mn, a.stackParser, a.maxValueLength, t, e, n, i);
  } };
};
var sn = "new", Hi = "loading", Qi = "loaded", ar = "joining-meeting", qe = "joined-meeting", xe = "left-meeting", Me = "error", cl = "blocked", ll = "off", ul = "sendable", dl = "loading", pl = "interrupted", to = "playable", Kt = "unknown", ro = "full", hl = "lobby", fl = "none", no = "base", ml = "*", gl = "ejected", vl = "nbf-room", yl = "nbf-token", bl = "exp-room", _l = "exp-token", on = "no-room", Sl = "meeting-full", io = "end-of-life", wl = "not-allowed", so = "connection-error", El = "cam-in-use", kl = "mic-in-use", Tl = "cam-mic-in-use", Cl = "permissions", Ol = "undefined-mediadevices", Al = "not-found", Ml = "constraints", Pl = "unknown", oo = "iframe-ready-for-launch-config", ao = "iframe-launch-config", co = "theme-updated", lo = "loading", uo = "load-attempt-failed", an = "loaded", po = "started-camera", ho = "camera-error", fo = "joining-meeting", mo = "joined-meeting", go = "left-meeting", vo = "participant-joined", yo = "participant-updated", bo = "participant-left", _o = "participant-counts-updated", So = "access-state-updated", wo = "meeting-session-summary-updated", Eo = "meeting-session-state-updated", Il = "meeting-session-data-error", ko = "waiting-participant-added", To = "waiting-participant-updated", Co = "waiting-participant-removed", Oo = "track-started", Ao = "track-stopped", Mo = "transcription-started", Po = "transcription-stopped", Io = "transcription-error", cn = "recording-started", ln = "recording-stopped", Do = "recording-stats", jo = "recording-error", Lo = "recording-upload-completed", No = "recording-data", Ro = "app-message", xo = "transcription-message", Fo = "remote-media-player-started", qo = "remote-media-player-updated", Vo = "remote-media-player-stopped", $o = "local-screen-share-started", Uo = "local-screen-share-stopped", Jo = "local-screen-share-canceled", Bo = "active-speaker-change", Go = "active-speaker-mode-change", Yo = "network-quality-change", Wo = "network-connection", zo = "cpu-load-change", Ho = "face-counts-updated", Tt = "fullscreen", Ct = "exited-fullscreen", Qo = "live-streaming-started", Ko = "live-streaming-updated", Xo = "live-streaming-stopped", Zo = "live-streaming-error", ea = "lang-updated", ta = "receive-settings-updated", un = "input-settings-updated", dn = "nonfatal-error", pn = "error", Pr = 4096, Ki = 102400, Ir = "iframe-call-message", Xi = "local-screen-start", Zi = "daily-method-update-live-streaming-endpoints", Gt = "transmit-log", je = "daily-custom-track", Xt = { NONE: "none", BGBLUR: "background-blur", BGIMAGE: "background-image", FACE_DETECTION: "face-detection" }, ra = { NONE: "none", NOISE_CANCELLATION: "noise-cancellation" }, hn = { PLAY: "play", PAUSE: "pause" }, Dr = ["jpg", "png", "jpeg"], Dl = "add-endpoints", jl = "remove-endpoints", es = "sip-call-transfer";
function be() {
  return !U() && typeof window < "u" && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : "";
}
function U() {
  return typeof navigator < "u" && navigator.product && navigator.product === "ReactNative";
}
function na() {
  return navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
}
function Ll() {
  return !!(navigator && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) && (function(r, e) {
    if (!r || !e) return !0;
    switch (r) {
      case "Chrome":
        return e.major >= 75;
      case "Safari":
        return RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection") && !(e.major === 13 && e.minor === 0 && e.point === 0);
      case "Firefox":
        return e.major >= 67;
    }
    return !0;
  }(nt(), cr()) || U());
}
function ts() {
  if (U() || !document) return !1;
  var r = document.createElement("iframe");
  return !!r.requestFullscreen || !!r.webkitRequestFullscreen;
}
var fn = "none", Nl = "software", Rl = "hardware", xl = function() {
  try {
    var r, e = document.createElement("canvas"), t = !1;
    (r = e.getContext("webgl2", { failIfMajorPerformanceCaveat: !0 })) || (t = !0, r = e.getContext("webgl2"));
    var n = r != null;
    return e.remove(), n ? t ? Nl : Rl : fn;
  } catch {
    return fn;
  }
}();
function ia() {
  var r = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
  return !U() && xl !== fn && (r ? function() {
    return rs() ? !1 : ["Chrome", "Firefox"].includes(nt());
  }() : function() {
    if (rs()) return !1;
    var e = nt();
    if (e === "Safari") {
      var t = Dn();
      if (t.major < 15 || t.major === 15 && t.minor < 4) return !1;
    }
    return e === "Chrome" ? In().major >= 77 : e === "Firefox" ? jn().major >= 97 : ["Chrome", "Firefox", "Safari"].includes(e);
  }());
}
function sa() {
  if (U() || oa() || typeof AudioWorkletNode > "u") return !1;
  switch (nt()) {
    case "Chrome":
    case "Firefox":
      return !0;
    case "Safari":
      var r = cr();
      return r.major > 17 || r.major === 17 && r.minor >= 4;
  }
  return !1;
}
function jr() {
  return na() && typeof MediaStreamTrack < "u" && !function() {
    var r, e = nt();
    if (!be()) return !0;
    switch (e) {
      case "Chrome":
        return (r = In()).major && r.major > 0 && r.major < 75;
      case "Firefox":
        return (r = jn()).major < 91;
      case "Safari":
        return (r = Dn()).major < 13 || r.major === 13 && r.minor < 1;
      default:
        return !0;
    }
  }();
}
function oa() {
  return be().match(/Linux; Android/);
}
function rs() {
  var r, e = be(), t = e.match(/Mac/) && (!U() && typeof window < "u" && (r = window) !== null && r !== void 0 && (r = r.navigator) !== null && r !== void 0 && r.maxTouchPoints ? window.navigator.maxTouchPoints : 0) >= 5;
  return !!(e.match(/Mobi/) || e.match(/Android/) || t) || !!be().match(/DailyAnd\//) || void 0;
}
function nt() {
  if (typeof window < "u") {
    var r = be();
    return aa() ? "Safari" : r.indexOf("Edge") > -1 ? "Edge" : r.match(/Chrome\//) ? "Chrome" : r.indexOf("Safari") > -1 || ca() ? "Safari" : r.indexOf("Firefox") > -1 ? "Firefox" : r.indexOf("MSIE") > -1 || r.indexOf(".NET") > -1 ? "IE" : "Unknown Browser";
  }
}
function cr() {
  switch (nt()) {
    case "Chrome":
      return In();
    case "Safari":
      return Dn();
    case "Firefox":
      return jn();
    case "Edge":
      return function() {
        var r = 0, e = 0;
        if (typeof window < "u") {
          var t = be().match(/Edge\/(\d+).(\d+)/);
          if (t) try {
            r = parseInt(t[1]), e = parseInt(t[2]);
          } catch {
          }
        }
        return { major: r, minor: e };
      }();
  }
}
function In() {
  var r = 0, e = 0, t = 0, n = 0, i = !1;
  if (typeof window < "u") {
    var o = be(), a = o.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);
    if (a) try {
      r = parseInt(a[1]), e = parseInt(a[2]), t = parseInt(a[3]), n = parseInt(a[4]), i = o.indexOf("OPR/") > -1;
    } catch {
    }
  }
  return { major: r, minor: e, build: t, patch: n, opera: i };
}
function aa() {
  return !!be().match(/iPad|iPhone|iPod/i) && na();
}
function ca() {
  return be().indexOf("AppleWebKit/605.1.15") > -1;
}
function Dn() {
  var r = 0, e = 0, t = 0;
  if (typeof window < "u") {
    var n = be().match(/Version\/(\d+).(\d+)(.(\d+))?/);
    if (n) try {
      r = parseInt(n[1]), e = parseInt(n[2]), t = parseInt(n[4]);
    } catch {
    }
    else (aa() || ca()) && (r = 14, e = 0, t = 3);
  }
  return { major: r, minor: e, point: t };
}
function jn() {
  var r = 0, e = 0;
  if (typeof window < "u") {
    var t = be().match(/Firefox\/(\d+).(\d+)/);
    if (t) try {
      r = parseInt(t[1]), e = parseInt(t[2]);
    } catch {
    }
  }
  return { major: r, minor: e };
}
var la = function() {
  return he(function r() {
    pe(this, r);
  }, [{ key: "addListenerForMessagesFromCallMachine", value: function(r, e, t) {
    wt();
  } }, { key: "addListenerForMessagesFromDailyJs", value: function(r, e, t) {
    wt();
  } }, { key: "sendMessageToCallMachine", value: function(r, e, t, n) {
    wt();
  } }, { key: "sendMessageToDailyJs", value: function(r, e) {
    wt();
  } }, { key: "removeListener", value: function(r) {
    wt();
  } }]);
}();
function ns(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Lr(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ns(Object(t), !0).forEach(function(n) {
      Ae(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ns(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function ua() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ua = function() {
    return !!r;
  })();
}
var Fl = function() {
  function r() {
    var e, t, n, i;
    return pe(this, r), t = this, n = Ee(n = r), (e = dr(t, ua() ? Reflect.construct(n, [], Ee(t).constructor) : n.apply(t, i)))._wrappedListeners = {}, e._messageCallbacks = {}, e;
  }
  return pr(r, la), he(r, [{ key: "addListenerForMessagesFromCallMachine", value: function(e, t, n) {
    var i = this, o = function(a) {
      if (a.data && a.data.what === "iframe-call-message" && (!a.data.callClientId || a.data.callClientId === t) && (!a.data.from || a.data.from !== "module")) {
        var l = Lr({}, a.data);
        if (delete l.from, l.callbackStamp && i._messageCallbacks[l.callbackStamp]) {
          var u = l.callbackStamp;
          i._messageCallbacks[u].call(n, l), delete i._messageCallbacks[u];
        }
        delete l.what, delete l.callbackStamp, e.call(n, l);
      }
    };
    this._wrappedListeners[e] = o, window.addEventListener("message", o);
  } }, { key: "addListenerForMessagesFromDailyJs", value: function(e, t, n) {
    var i = function(o) {
      var a;
      if (!(!o.data || o.data.what !== Ir || !o.data.action || o.data.from && o.data.from !== "module" || o.data.callClientId && t && o.data.callClientId !== t || o != null && (a = o.data) !== null && a !== void 0 && a.callFrameId)) {
        var l = o.data;
        e.call(n, l);
      }
    };
    this._wrappedListeners[e] = i, window.addEventListener("message", i);
  } }, { key: "sendMessageToCallMachine", value: function(e, t, n, i) {
    if (!n) throw new Error("undefined callClientId. Are you trying to use a DailyCall instance previously destroyed?");
    var o = Lr({}, e);
    if (o.what = Ir, o.from = "module", o.callClientId = n, t) {
      var a = hr();
      this._messageCallbacks[a] = t, o.callbackStamp = a;
    }
    var l = i ? i.contentWindow : window, u = this._callMachineTargetOrigin(i);
    u && l.postMessage(o, u);
  } }, { key: "sendMessageToDailyJs", value: function(e, t) {
    e.what = Ir, e.callClientId = t, e.from = "embedded", window.postMessage(e, this._targetOriginFromWindowLocation());
  } }, { key: "removeListener", value: function(e) {
    var t = this._wrappedListeners[e];
    t && (window.removeEventListener("message", t), delete this._wrappedListeners[e]);
  } }, { key: "forwardPackagedMessageToCallMachine", value: function(e, t, n) {
    var i = Lr({}, e);
    i.callClientId = n;
    var o = t ? t.contentWindow : window, a = this._callMachineTargetOrigin(t);
    a && o.postMessage(i, a);
  } }, { key: "addListenerForPackagedMessagesFromCallMachine", value: function(e, t) {
    var n = function(i) {
      if (i.data && i.data.what === "iframe-call-message" && (!i.data.callClientId || i.data.callClientId === t) && (!i.data.from || i.data.from !== "module")) {
        var o = i.data;
        e(o);
      }
    };
    return this._wrappedListeners[e] = n, window.addEventListener("message", n), e;
  } }, { key: "removeListenerForPackagedMessagesFromCallMachine", value: function(e) {
    var t = this._wrappedListeners[e];
    t && (window.removeEventListener("message", t), delete this._wrappedListeners[e]);
  } }, { key: "_callMachineTargetOrigin", value: function(e) {
    return e ? e.src ? new URL(e.src).origin : void 0 : this._targetOriginFromWindowLocation();
  } }, { key: "_targetOriginFromWindowLocation", value: function() {
    return window.location.protocol === "file:" ? "*" : window.location.origin;
  } }]);
}();
function is(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function da() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (da = function() {
    return !!r;
  })();
}
var ql = function() {
  function r() {
    var e, t, n, i;
    return pe(this, r), t = this, n = Ee(n = r), e = dr(t, da() ? Reflect.construct(n, [], Ee(t).constructor) : n.apply(t, i)), global.callMachineToDailyJsEmitter = global.callMachineToDailyJsEmitter || new Ur.EventEmitter(), global.dailyJsToCallMachineEmitter = global.dailyJsToCallMachineEmitter || new Ur.EventEmitter(), e._wrappedListeners = {}, e._messageCallbacks = {}, e;
  }
  return pr(r, la), he(r, [{ key: "addListenerForMessagesFromCallMachine", value: function(e, t, n) {
    this._addListener(e, global.callMachineToDailyJsEmitter, t, n, "received call machine message");
  } }, { key: "addListenerForMessagesFromDailyJs", value: function(e, t, n) {
    this._addListener(e, global.dailyJsToCallMachineEmitter, t, n, "received daily-js message");
  } }, { key: "sendMessageToCallMachine", value: function(e, t, n) {
    this._sendMessage(e, global.dailyJsToCallMachineEmitter, n, t, "sending message to call machine");
  } }, { key: "sendMessageToDailyJs", value: function(e, t) {
    this._sendMessage(e, global.callMachineToDailyJsEmitter, t, null, "sending message to daily-js");
  } }, { key: "removeListener", value: function(e) {
    var t = this._wrappedListeners[e];
    t && (global.callMachineToDailyJsEmitter.removeListener("message", t), global.dailyJsToCallMachineEmitter.removeListener("message", t), delete this._wrappedListeners[e]);
  } }, { key: "_addListener", value: function(e, t, n, i, o) {
    var a = this, l = function(u) {
      if (u.callClientId === n) {
        if (u.callbackStamp && a._messageCallbacks[u.callbackStamp]) {
          var p = u.callbackStamp;
          a._messageCallbacks[p].call(i, u), delete a._messageCallbacks[p];
        }
        e.call(i, u);
      }
    };
    this._wrappedListeners[e] = l, t.addListener("message", l);
  } }, { key: "_sendMessage", value: function(e, t, n, i, o) {
    var a = function(u) {
      for (var p = 1; p < arguments.length; p++) {
        var f = arguments[p] != null ? arguments[p] : {};
        p % 2 ? is(Object(f), !0).forEach(function(v) {
          Ae(u, v, f[v]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(f)) : is(Object(f)).forEach(function(v) {
          Object.defineProperty(u, v, Object.getOwnPropertyDescriptor(f, v));
        });
      }
      return u;
    }({}, e);
    if (a.callClientId = n, i) {
      var l = hr();
      this._messageCallbacks[l] = i, a.callbackStamp = l;
    }
    t.emit("message", a);
  } }]);
}(), mn = "replace", gn = "shallow-merge", ss = [mn, gn], Vl = function() {
  function r() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.data, n = e.mergeStrategy, i = n === void 0 ? mn : n;
    pe(this, r), r._validateMergeStrategy(i), r._validateData(t, i), this.mergeStrategy = i, this.data = t;
  }
  return he(r, [{ key: "isNoOp", value: function() {
    return r.isNoOpUpdate(this.data, this.mergeStrategy);
  } }], [{ key: "isNoOpUpdate", value: function(e, t) {
    return Object.keys(e).length === 0 && t === gn;
  } }, { key: "_validateMergeStrategy", value: function(e) {
    if (!ss.includes(e)) throw Error("Unrecognized mergeStrategy provided. Options are: [".concat(ss, "]"));
  } }, { key: "_validateData", value: function(e, t) {
    if (!function(l) {
      if (l == null || B(l) !== "object") return !1;
      var u = Object.getPrototypeOf(l);
      return u == null || u === Object.prototype;
    }(e)) throw Error("Meeting session data must be a plain (map-like) object");
    var n;
    try {
      if (n = JSON.stringify(e), t === mn) {
        var i = JSON.parse(n);
        ce(i, e) || console.warn("The meeting session data provided will be modified when serialized.", i, e);
      } else if (t === gn) {
        for (var o in e) if (Object.hasOwnProperty.call(e, o) && e[o] !== void 0) {
          var a = JSON.parse(JSON.stringify(e[o]));
          ce(e[o], a) || console.warn("At least one key in the meeting session data provided will be modified when serialized.", a, e[o]);
        }
      }
    } catch (l) {
      throw Error("Meeting session data must be serializable to JSON: ".concat(l));
    }
    if (n.length > Ki) throw Error("Meeting session data is too large (".concat(n.length, " characters). Maximum size suppported is ").concat(Ki, "."));
  } }]);
}();
function pa() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (pa = function() {
    return !!r;
  })();
}
function vn(r) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return vn = function(t) {
    if (t === null || !function(i) {
      try {
        return Function.toString.call(i).indexOf("[native code]") !== -1;
      } catch {
        return typeof i == "function";
      }
    }(t)) return t;
    if (typeof t != "function") throw new TypeError("Super expression must either be null or a function");
    if (e !== void 0) {
      if (e.has(t)) return e.get(t);
      e.set(t, n);
    }
    function n() {
      return function(i, o, a) {
        if (pa()) return Reflect.construct.apply(null, arguments);
        var l = [null];
        l.push.apply(l, o);
        var u = new (i.bind.apply(i, l))();
        return a && Pt(u, a.prototype), u;
      }(t, arguments, Ee(this).constructor);
    }
    return n.prototype = Object.create(t.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), Pt(n, t);
  }, vn(r);
}
function ha() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ha = function() {
    return !!r;
  })();
}
function os(r) {
  var e, t = (e = window._daily) === null || e === void 0 ? void 0 : e.pendings;
  if (t) {
    var n = t.indexOf(r);
    n !== -1 && t.splice(n, 1);
  }
}
var $l = function() {
  return he(function r(e) {
    pe(this, r), this._currentLoad = null, this._callClientId = e;
  }, [{ key: "load", value: function() {
    var r, e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, i = arguments.length > 2 ? arguments[2] : void 0;
    if (this.loaded) return window._daily.instances[this._callClientId].callMachine.reset(), void n(!0);
    r = this._callClientId, window._daily.pendings.push(r), this._currentLoad && this._currentLoad.cancel(), this._currentLoad = new Ul(t, function() {
      n(!1);
    }, function(o, a) {
      a || os(e._callClientId), i(o, a);
    }), this._currentLoad.start();
  } }, { key: "cancel", value: function() {
    this._currentLoad && this._currentLoad.cancel(), os(this._callClientId);
  } }, { key: "loaded", get: function() {
    return this._currentLoad && this._currentLoad.succeeded;
  } }]);
}(), Ul = function() {
  return he(function r() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0;
    pe(this, r), this._attemptsRemaining = 3, this._currentAttempt = null, this._dailyConfig = e, this._successCallback = t, this._failureCallback = n;
  }, [{ key: "start", value: function() {
    var r = this;
    if (!this._currentAttempt) {
      var e = function(t) {
        r._currentAttempt.cancelled || (r._attemptsRemaining--, r._failureCallback(t, r._attemptsRemaining > 0), r._attemptsRemaining <= 0 || setTimeout(function() {
          r._currentAttempt.cancelled || (r._currentAttempt = new as(r._dailyConfig, r._successCallback, e), r._currentAttempt.start());
        }, 3e3));
      };
      this._currentAttempt = new as(this._dailyConfig, this._successCallback, e), this._currentAttempt.start();
    }
  } }, { key: "cancel", value: function() {
    this._currentAttempt && this._currentAttempt.cancel();
  } }, { key: "cancelled", get: function() {
    return this._currentAttempt && this._currentAttempt.cancelled;
  } }, { key: "succeeded", get: function() {
    return this._currentAttempt && this._currentAttempt.succeeded;
  } }]);
}(), Nr = function() {
  function r() {
    return pe(this, r), e = this, n = arguments, t = Ee(t = r), dr(e, ha() ? Reflect.construct(t, n || [], Ee(e).constructor) : t.apply(e, n));
    var e, t, n;
  }
  return pr(r, vn(Error)), he(r);
}(), lr = 2e4, as = function() {
  return he(function e(t, n, i) {
    pe(this, e), this._loadAttemptImpl = U() || !t.avoidEval ? new Jl(t, n, i) : new Bl(t, n, i);
  }, [{ key: "start", value: (r = N(function* () {
    return this._loadAttemptImpl.start();
  }), function() {
    return r.apply(this, arguments);
  }) }, { key: "cancel", value: function() {
    this._loadAttemptImpl.cancel();
  } }, { key: "cancelled", get: function() {
    return this._loadAttemptImpl.cancelled;
  } }, { key: "succeeded", get: function() {
    return this._loadAttemptImpl.succeeded;
  } }]);
  var r;
}(), Jl = function() {
  return he(function i(o, a, l) {
    pe(this, i), this.cancelled = !1, this.succeeded = !1, this._networkTimedOut = !1, this._networkTimeout = null, this._iosCache = typeof iOSCallObjectBundleCache < "u" && iOSCallObjectBundleCache, this._refetchHeaders = null, this._dailyConfig = o, this._successCallback = a, this._failureCallback = l;
  }, [{ key: "start", value: (n = N(function* () {
    var i = tr(this._dailyConfig);
    !(yield this._tryLoadFromIOSCache(i)) && this._loadFromNetwork(i);
  }), function() {
    return n.apply(this, arguments);
  }) }, { key: "cancel", value: function() {
    clearTimeout(this._networkTimeout), this.cancelled = !0;
  } }, { key: "_tryLoadFromIOSCache", value: (t = N(function* (i) {
    if (!this._iosCache) return !1;
    try {
      var o = yield this._iosCache.get(i);
      return !!this.cancelled || !!o && (o.code ? (Function('"use strict";' + o.code)(), this.succeeded = !0, this._successCallback(), !0) : (this._refetchHeaders = o.refetchHeaders, !1));
    } catch {
      return !1;
    }
  }), function(i) {
    return t.apply(this, arguments);
  }) }, { key: "_loadFromNetwork", value: (e = N(function* (i) {
    var o = this;
    this._networkTimeout = setTimeout(function() {
      o._networkTimedOut = !0, o._failureCallback({ msg: "Timed out (>".concat(lr, " ms) when loading call object bundle ").concat(i), type: "timeout" });
    }, lr);
    try {
      var a = this._refetchHeaders ? { headers: this._refetchHeaders } : {}, l = yield fetch(i, a);
      if (clearTimeout(this._networkTimeout), this.cancelled || this._networkTimedOut) throw new Nr();
      var u = yield this._getBundleCodeFromResponse(i, l);
      if (this.cancelled) throw new Nr();
      Function('"use strict";' + u)(), this._iosCache && this._iosCache.set(i, u, l.headers), this.succeeded = !0, this._successCallback();
    } catch (p) {
      if (clearTimeout(this._networkTimeout), p instanceof Nr || this.cancelled || this._networkTimedOut) return;
      this._failureCallback({ msg: "Failed to load call object bundle ".concat(i, ": ").concat(p), type: p.message });
    }
  }), function(i) {
    return e.apply(this, arguments);
  }) }, { key: "_getBundleCodeFromResponse", value: (r = N(function* (i, o) {
    if (o.ok) return yield o.text();
    if (this._iosCache && o.status === 304) return (yield this._iosCache.renew(i, o.headers)).code;
    throw new Error("Received ".concat(o.status, " response"));
  }), function(i, o) {
    return r.apply(this, arguments);
  }) }]);
  var r, e, t, n;
}(), Bl = function() {
  return he(function r(e, t, n) {
    pe(this, r), this.cancelled = !1, this.succeeded = !1, this._dailyConfig = e, this._successCallback = t, this._failureCallback = n, this._attemptId = hr(), this._networkTimeout = null, this._scriptElement = null;
  }, [{ key: "start", value: function() {
    window._dailyCallMachineLoadWaitlist || (window._dailyCallMachineLoadWaitlist = /* @__PURE__ */ new Set());
    var r = tr(this._dailyConfig);
    (typeof document > "u" ? "undefined" : B(document)) === "object" ? this._startLoading(r) : this._failureCallback({ msg: "Call object bundle must be loaded in a DOM/web context", type: "missing context" });
  } }, { key: "cancel", value: function() {
    this._stopLoading(), this.cancelled = !0;
  } }, { key: "_startLoading", value: function(r) {
    var e = this;
    this._signUpForCallMachineLoadWaitlist(), this._networkTimeout = setTimeout(function() {
      e._stopLoading(), e._failureCallback({ msg: "Timed out (>".concat(lr, " ms) when loading call object bundle ").concat(r), type: "timeout" });
    }, lr);
    var t = document.getElementsByTagName("head")[0], n = document.createElement("script");
    this._scriptElement = n, n.onload = function() {
      e._stopLoading(), e.succeeded = !0, e._successCallback();
    }, n.onerror = function(i) {
      e._stopLoading(), e._failureCallback({ msg: "Failed to load call object bundle ".concat(i.target.src), type: i.message });
    }, n.src = r, t.appendChild(n);
  } }, { key: "_stopLoading", value: function() {
    this._withdrawFromCallMachineLoadWaitlist(), clearTimeout(this._networkTimeout), this._scriptElement && (this._scriptElement.onload = null, this._scriptElement.onerror = null);
  } }, { key: "_signUpForCallMachineLoadWaitlist", value: function() {
    window._dailyCallMachineLoadWaitlist.add(this._attemptId);
  } }, { key: "_withdrawFromCallMachineLoadWaitlist", value: function() {
    window._dailyCallMachineLoadWaitlist.delete(this._attemptId);
  } }]);
}(), Yt = function(r, e, t) {
  return Yl(r.local, e, t) === !0;
}, Gl = function(r, e, t) {
  return r.local.streams && r.local.streams[e] && r.local.streams[e].stream && r.local.streams[e].stream["get".concat(t === "video" ? "Video" : "Audio", "Tracks")]()[0];
}, at = function(r, e, t, n) {
  var i = Wl(r, e, t, n);
  return i && i.pendingTrack;
}, Yl = function(r, e, t) {
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
  return i && i[e] ? ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo"].indexOf(t) === -1 && i[e].custom ? [!0, "staged"].includes(i[e].custom) ? n(i[e].custom) : n(i[e].custom[t]) : n(i[e][t]) : !i || n(i.ALL);
}, Wl = function(r, e, t, n) {
  var i = Object.values(r.streams || {}).filter(function(o) {
    return o.participantId === e && o.type === t && o.pendingTrack && o.pendingTrack.kind === n;
  }).sort(function(o, a) {
    return new Date(a.starttime) - new Date(o.starttime);
  });
  return i && i[0];
}, zl = function(r, e) {
  var t = r.local.public.customTracks;
  if (t && t[e]) return t[e].track;
};
function cs(r, e) {
  for (var t = e.getState(), n = 0, i = ["cam", "screen"]; n < i.length; n++) for (var o = i[n], a = 0, l = ["video", "audio"]; a < l.length; a++) {
    var u = l[a], p = o === "cam" ? u : "screen".concat(u.charAt(0).toUpperCase() + u.slice(1)), f = r.tracks[p];
    if (f) {
      var v = r.local ? Gl(t, o, u) : at(t, r.session_id, o, u);
      f.state === "playable" && (f.track = v), f.persistentTrack = v;
    }
  }
}
function ls(r, e) {
  try {
    var t = e.getState();
    for (var n in r.tracks) if (!Hl(n)) {
      var i = r.tracks[n].kind;
      if (i) {
        var o = r.tracks[n];
        if (o) {
          var a = r.local ? zl(t, n) : at(t, r.session_id, n, i);
          o.state === "playable" && (r.tracks[n].track = a), o.persistentTrack = a;
        }
      } else console.error("unknown type for custom track");
    }
  } catch (l) {
    console.error(l);
  }
}
function Hl(r) {
  return ["video", "audio", "screenVideo", "screenAudio"].includes(r);
}
function us(r, e, t) {
  var n = t.getState();
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
    } catch (f) {
      console.error(f);
    }
    if (!i) return r.audio = !1, r.audioTrack = !1, r.video = !1, r.videoTrack = !1, r.screen = !1, void (r.screenTrack = !1);
    try {
      if (n.streams, r.audio && Yt(n, r.session_id, "cam-audio")) {
        var a = at(n, r.session_id, "cam", "audio");
        a && (e && e.audioTrack && e.audioTrack.id === a.id ? r.audioTrack = a : a.muted || (r.audioTrack = a)), r.audioTrack || (r.audio = !1);
      }
      if (r.video && Yt(n, r.session_id, "cam-video")) {
        var l = at(n, r.session_id, "cam", "video");
        l && (e && e.videoTrack && e.videoTrack.id === l.id ? r.videoTrack = l : l.muted || (r.videoTrack = l)), r.videoTrack || (r.video = !1);
      }
      if (r.screen && Yt(n, r.session_id, "screen-audio")) {
        var u = at(n, r.session_id, "screen", "audio");
        u && (e && e.screenAudioTrack && e.screenAudioTrack.id === u.id ? r.screenAudioTrack = u : u.muted || (r.screenAudioTrack = u));
      }
      if (r.screen && Yt(n, r.session_id, "screen-video")) {
        var p = at(n, r.session_id, "screen", "video");
        p && (e && e.screenVideoTrack && e.screenVideoTrack.id === p.id ? r.screenVideoTrack = p : p.muted || (r.screenVideoTrack = p));
      }
      r.screenVideoTrack || r.screenAudioTrack || (r.screen = !1);
    } catch (f) {
      console.error("unexpected error matching up tracks", f);
    }
  }
}
function Ql(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = function(u, p) {
      if (u) {
        if (typeof u == "string") return ds(u, p);
        var f = {}.toString.call(u).slice(8, -1);
        return f === "Object" && u.constructor && (f = u.constructor.name), f === "Map" || f === "Set" ? Array.from(u) : f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? ds(u, p) : void 0;
      }
    }(r)) || e) {
      t && (r = t);
      var n = 0, i = function() {
      };
      return { s: i, n: function() {
        return n >= r.length ? { done: !0 } : { done: !1, value: r[n++] };
      }, e: function(u) {
        throw u;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o, a = !0, l = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var u = t.next();
    return a = u.done, u;
  }, e: function(u) {
    l = !0, o = u;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (l) throw o;
    }
  } };
}
function ds(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = Array(e); t < e; t++) n[t] = r[t];
  return n;
}
var Ce = /* @__PURE__ */ new Map(), lt = null;
function Kl(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = function(u, p) {
      if (u) {
        if (typeof u == "string") return ps(u, p);
        var f = {}.toString.call(u).slice(8, -1);
        return f === "Object" && u.constructor && (f = u.constructor.name), f === "Map" || f === "Set" ? Array.from(u) : f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? ps(u, p) : void 0;
      }
    }(r)) || e) {
      t && (r = t);
      var n = 0, i = function() {
      };
      return { s: i, n: function() {
        return n >= r.length ? { done: !0 } : { done: !1, value: r[n++] };
      }, e: function(u) {
        throw u;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o, a = !0, l = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var u = t.next();
    return a = u.done, u;
  }, e: function(u) {
    l = !0, o = u;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (l) throw o;
    }
  } };
}
function ps(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = Array(e); t < e; t++) n[t] = r[t];
  return n;
}
var Oe = /* @__PURE__ */ new Map(), At = null;
function Xl(r) {
  fa() ? function(e) {
    Ce.has(e) || (Ce.set(e, {}), navigator.mediaDevices.enumerateDevices().then(function(t) {
      Ce.has(e) && (Ce.get(e).lastDevicesString = JSON.stringify(t), lt || (lt = function() {
        var n = N(function* () {
          var i, o = yield navigator.mediaDevices.enumerateDevices(), a = Ql(Ce.keys());
          try {
            for (a.s(); !(i = a.n()).done; ) {
              var l = i.value, u = JSON.stringify(o);
              u !== Ce.get(l).lastDevicesString && (Ce.get(l).lastDevicesString = u, l(o));
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
      }(), navigator.mediaDevices.addEventListener("devicechange", lt)));
    }).catch(function() {
    }));
  }(r) : function(e) {
    Oe.has(e) || (Oe.set(e, {}), navigator.mediaDevices.enumerateDevices().then(function(t) {
      Oe.has(e) && (Oe.get(e).lastDevicesString = JSON.stringify(t), At || (At = setInterval(N(function* () {
        var n, i = yield navigator.mediaDevices.enumerateDevices(), o = Kl(Oe.keys());
        try {
          for (o.s(); !(n = o.n()).done; ) {
            var a = n.value, l = JSON.stringify(i);
            l !== Oe.get(a).lastDevicesString && (Oe.get(a).lastDevicesString = l, a(i));
          }
        } catch (u) {
          o.e(u);
        } finally {
          o.f();
        }
      }), 3e3)));
    }));
  }(r);
}
function Zl(r) {
  fa() ? function(e) {
    Ce.has(e) && (Ce.delete(e), Ce.size === 0 && lt && (navigator.mediaDevices.removeEventListener("devicechange", lt), lt = null));
  }(r) : function(e) {
    Oe.has(e) && (Oe.delete(e), Oe.size === 0 && At && (clearInterval(At), At = null));
  }(r);
}
function fa() {
  var r;
  return U() || ((r = navigator.mediaDevices) === null || r === void 0 ? void 0 : r.ondevicechange) !== void 0;
}
var eu = /* @__PURE__ */ new Set();
function tu(r, e) {
  return r && r.readyState === "live" && !function(t, n) {
    return t.muted && !eu.has(t.id);
  }(r);
}
function hs(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Ne(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? hs(Object(t), !0).forEach(function(n) {
      Ae(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : hs(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var Ot = Object.freeze({ VIDEO: "video", AUDIO: "audio", SCREEN_VIDEO: "screenVideo", SCREEN_AUDIO: "screenAudio", CUSTOM_VIDEO: "customVideo", CUSTOM_AUDIO: "customAudio" }), ru = Object.freeze({ PARTICIPANTS: "participants", STREAMING: "streaming", TRANSCRIPTION: "transcription" }), Mt = Object.values(Ot), fs = ["v", "a", "sv", "sa", "cv", "ca"];
Object.freeze(Mt.reduce(function(r, e, t) {
  return r[e] = fs[t], r;
}, {})), Object.freeze(fs.reduce(function(r, e, t) {
  return r[e] = Mt[t], r;
}, {}));
var nu = [Ot.VIDEO, Ot.AUDIO, Ot.SCREEN_VIDEO, Ot.SCREEN_AUDIO], ms = Object.values(ru), gs = ["p", "s", "t"];
Object.freeze(ms.reduce(function(r, e, t) {
  return r[e] = gs[t], r;
}, {})), Object.freeze(gs.reduce(function(r, e, t) {
  return r[e] = ms[t], r;
}, {}));
var ma = function() {
  function r() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.base, n = e.byUserId, i = e.byParticipantId;
    pe(this, r), this.base = t, this.byUserId = n, this.byParticipantId = i;
  }
  return he(r, [{ key: "clone", value: function() {
    var e = new r();
    if (this.base instanceof ne ? e.base = this.base.clone() : e.base = this.base, this.byUserId !== void 0) for (var t in e.byUserId = {}, this.byUserId) {
      var n = this.byUserId[t];
      e.byUserId[t] = n instanceof ne ? n.clone() : n;
    }
    if (this.byParticipantId !== void 0) for (var i in e.byParticipantId = {}, this.byParticipantId) {
      var o = this.byParticipantId[i];
      e.byParticipantId[i] = o instanceof ne ? o.clone() : o;
    }
    return e;
  } }, { key: "toJSONObject", value: function() {
    var e = {};
    if (typeof this.base == "boolean" ? e.base = this.base : this.base instanceof ne && (e.base = this.base.toJSONObject()), this.byUserId !== void 0) for (var t in e.byUserId = {}, this.byUserId) {
      var n = this.byUserId[t];
      e.byUserId[t] = n instanceof ne ? n.toJSONObject() : n;
    }
    if (this.byParticipantId !== void 0) for (var i in e.byParticipantId = {}, this.byParticipantId) {
      var o = this.byParticipantId[i];
      e.byParticipantId[i] = o instanceof ne ? o.toJSONObject() : o;
    }
    return e;
  } }, { key: "toMinifiedJSONObject", value: function() {
    var e = {};
    if (this.base !== void 0 && (typeof this.base == "boolean" ? e.b = this.base : e.b = this.base.toMinifiedJSONObject()), this.byUserId !== void 0) for (var t in e.u = {}, this.byUserId) {
      var n = this.byUserId[t];
      e.u[t] = typeof n == "boolean" ? n : n.toMinifiedJSONObject();
    }
    if (this.byParticipantId !== void 0) for (var i in e.p = {}, this.byParticipantId) {
      var o = this.byParticipantId[i];
      e.p[i] = typeof o == "boolean" ? o : o.toMinifiedJSONObject();
    }
    return e;
  } }, { key: "normalize", value: function() {
    return this.base instanceof ne && (this.base = this.base.normalize()), this.byUserId && (this.byUserId = Object.fromEntries(Object.entries(this.byUserId).map(function(e) {
      var t = se(e, 2), n = t[0], i = t[1];
      return [n, i instanceof ne ? i.normalize() : i];
    }))), this.byParticipantId && (this.byParticipantId = Object.fromEntries(Object.entries(this.byParticipantId).map(function(e) {
      var t = se(e, 2), n = t[0], i = t[1];
      return [n, i instanceof ne ? i.normalize() : i];
    }))), this;
  } }], [{ key: "fromJSONObject", value: function(e) {
    var t, n, i;
    if (e.base !== void 0 && (t = typeof e.base == "boolean" ? e.base : ne.fromJSONObject(e.base)), e.byUserId !== void 0) for (var o in n = {}, e.byUserId) {
      var a = e.byUserId[o];
      n[o] = typeof a == "boolean" ? a : ne.fromJSONObject(a);
    }
    if (e.byParticipantId !== void 0) for (var l in i = {}, e.byParticipantId) {
      var u = e.byParticipantId[l];
      i[l] = typeof u == "boolean" ? u : ne.fromJSONObject(u);
    }
    return new r({ base: t, byUserId: n, byParticipantId: i });
  } }, { key: "fromMinifiedJSONObject", value: function(e) {
    var t, n, i;
    if (e.b !== void 0 && (t = typeof e.b == "boolean" ? e.b : ne.fromMinifiedJSONObject(e.b)), e.u !== void 0) for (var o in n = {}, e.u) {
      var a = e.u[o];
      n[o] = typeof a == "boolean" ? a : ne.fromMinifiedJSONObject(a);
    }
    if (e.p !== void 0) for (var l in i = {}, e.p) {
      var u = e.p[l];
      i[l] = typeof u == "boolean" ? u : ne.fromMinifiedJSONObject(u);
    }
    return new r({ base: t, byUserId: n, byParticipantId: i });
  } }, { key: "validateJSONObject", value: function(e) {
    if (B(e) !== "object") return [!1, "canReceive must be an object"];
    for (var t = ["base", "byUserId", "byParticipantId"], n = 0, i = Object.keys(e); n < i.length; n++) {
      var o = i[n];
      if (!t.includes(o)) return [!1, "canReceive can only contain keys (".concat(t.join(", "), ")")];
      if (o === "base") {
        var a = se(ne.validateJSONObject(e.base, !0), 2), l = a[0], u = a[1];
        if (!l) return [!1, u];
      } else {
        if (B(e[o]) !== "object") return [!1, "invalid (non-object) value for field '".concat(o, "' in canReceive")];
        for (var p = 0, f = Object.values(e[o]); p < f.length; p++) {
          var v = f[p], k = se(ne.validateJSONObject(v), 2), T = k[0], S = k[1];
          if (!T) return [!1, S];
        }
      }
    }
    return [!0];
  } }]);
}(), ne = function() {
  function r() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.video, n = e.audio, i = e.screenVideo, o = e.screenAudio, a = e.customVideo, l = e.customAudio;
    pe(this, r), this.video = t, this.audio = n, this.screenVideo = i, this.screenAudio = o, this.customVideo = a, this.customAudio = l;
  }
  return he(r, [{ key: "clone", value: function() {
    var e = new r();
    return this.video !== void 0 && (e.video = this.video), this.audio !== void 0 && (e.audio = this.audio), this.screenVideo !== void 0 && (e.screenVideo = this.screenVideo), this.screenAudio !== void 0 && (e.screenAudio = this.screenAudio), this.customVideo !== void 0 && (e.customVideo = Ne({}, this.customVideo)), this.customAudio !== void 0 && (e.customAudio = Ne({}, this.customAudio)), e;
  } }, { key: "toJSONObject", value: function() {
    var e = {};
    return this.video !== void 0 && (e.video = this.video), this.audio !== void 0 && (e.audio = this.audio), this.screenVideo !== void 0 && (e.screenVideo = this.screenVideo), this.screenAudio !== void 0 && (e.screenAudio = this.screenAudio), this.customVideo !== void 0 && (e.customVideo = Ne({}, this.customVideo)), this.customAudio !== void 0 && (e.customAudio = Ne({}, this.customAudio)), e;
  } }, { key: "toMinifiedJSONObject", value: function() {
    var e = {};
    return this.video !== void 0 && (e.v = this.video), this.audio !== void 0 && (e.a = this.audio), this.screenVideo !== void 0 && (e.sv = this.screenVideo), this.screenAudio !== void 0 && (e.sa = this.screenAudio), this.customVideo !== void 0 && (e.cv = Ne({}, this.customVideo)), this.customAudio !== void 0 && (e.ca = Ne({}, this.customAudio)), e;
  } }, { key: "normalize", value: function() {
    function e(t, n) {
      return t && Object.keys(t).length === 1 && t["*"] === n;
    }
    return !(this.video !== !0 || this.audio !== !0 || this.screenVideo !== !0 || this.screenAudio !== !0 || !e(this.customVideo, !0) || !e(this.customAudio, !0)) || (this.video !== !1 || this.audio !== !1 || this.screenVideo !== !1 || this.screenAudio !== !1 || !e(this.customVideo, !1) || !e(this.customAudio, !1)) && this;
  } }], [{ key: "fromBoolean", value: function(e) {
    return new r({ video: e, audio: e, screenVideo: e, screenAudio: e, customVideo: { "*": e }, customAudio: { "*": e } });
  } }, { key: "fromJSONObject", value: function(e) {
    return new r({ video: e.video, audio: e.audio, screenVideo: e.screenVideo, screenAudio: e.screenAudio, customVideo: e.customVideo !== void 0 ? Ne({}, e.customVideo) : void 0, customAudio: e.customAudio !== void 0 ? Ne({}, e.customAudio) : void 0 });
  } }, { key: "fromMinifiedJSONObject", value: function(e) {
    return new r({ video: e.v, audio: e.a, screenVideo: e.sv, screenAudio: e.sa, customVideo: e.cv, customAudio: e.ca });
  } }, { key: "validateJSONObject", value: function(e, t) {
    if (typeof e == "boolean") return [!0];
    if (B(e) !== "object") return [!1, "invalid (non-object, non-boolean) value in canReceive"];
    for (var n = Object.keys(e), i = 0, o = n; i < o.length; i++) {
      var a = o[i];
      if (!Mt.includes(a)) return [!1, "invalid media type '".concat(a, "' in canReceive")];
      if (nu.includes(a)) {
        if (typeof e[a] != "boolean") return [!1, "invalid (non-boolean) value for media type '".concat(a, "' in canReceive")];
      } else {
        if (B(e[a]) !== "object") return [!1, "invalid (non-object) value for media type '".concat(a, "' in canReceive")];
        for (var l = 0, u = Object.values(e[a]); l < u.length; l++)
          if (typeof u[l] != "boolean") return [!1, "invalid (non-boolean) value for entry within '".concat(a, "' in canReceive")];
        if (t && e[a]["*"] === void 0) return [!1, `canReceive "base" permission must specify "*" as an entry within '`.concat(a, "'")];
      }
    }
    return t && n.length !== Mt.length ? [!1, 'canReceive "base" permission must specify all media types: '.concat(Mt.join(", "), " (or be set to a boolean shorthand)")] : [!0];
  } }]);
}(), iu = ["result"], su = ["preserveIframe"];
function vs(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function j(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? vs(Object(t), !0).forEach(function(n) {
      Ae(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : vs(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function ga() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ga = function() {
    return !!r;
  })();
}
function ys(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = function(u, p) {
      if (u) {
        if (typeof u == "string") return bs(u, p);
        var f = {}.toString.call(u).slice(8, -1);
        return f === "Object" && u.constructor && (f = u.constructor.name), f === "Map" || f === "Set" ? Array.from(u) : f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? bs(u, p) : void 0;
      }
    }(r)) || e) {
      t && (r = t);
      var n = 0, i = function() {
      };
      return { s: i, n: function() {
        return n >= r.length ? { done: !0 } : { done: !1, value: r[n++] };
      }, e: function(u) {
        throw u;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o, a = !0, l = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var u = t.next();
    return a = u.done, u;
  }, e: function(u) {
    l = !0, o = u;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (l) throw o;
    }
  } };
}
function bs(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = Array(e); t < e; t++) n[t] = r[t];
  return n;
}
var We = {}, _s = "video", ou = "voice", Ss = U() ? { data: {} } : { data: {}, topology: "none" }, ws = { present: 0, hidden: 0 }, va = { maxBitrate: { min: 1e5, max: 25e5 }, maxFramerate: { min: 1, max: 30 }, scaleResolutionDownBy: { min: 1, max: 8 } }, Rr = Object.keys(va), Es = ["state", "volume", "simulcastEncodings"], ks = { androidInCallNotification: { title: "string", subtitle: "string", iconName: "string", disableForCustomOverride: "boolean" }, disableAutoDeviceManagement: { audio: "boolean", video: "boolean" } }, ur = { id: { iconPath: "string", iconPathDarkMode: "string", label: "string", tooltip: "string", visualState: "'default' | 'sidebar-open' | 'active'" } }, yn = { id: { allow: "string", controlledBy: "'*' | 'owners' | string[]", csp: "string", iconURL: "string", label: "string", loading: "'eager' | 'lazy'", location: "'main' | 'sidebar'", name: "string", referrerPolicy: "string", sandbox: "string", src: "string", srcdoc: "string", shared: "string[] | 'owners' | boolean" } }, ze = { customIntegrations: { validate: Ta, help: Ea() }, customTrayButtons: { validate: ka, help: "customTrayButtons should be a dictionary of the type ".concat(JSON.stringify(ur)) }, url: { validate: function(r) {
  return typeof r == "string";
}, help: "url should be a string" }, baseUrl: { validate: function(r) {
  return typeof r == "string";
}, help: "baseUrl should be a string" }, token: { validate: function(r) {
  return typeof r == "string";
}, help: "token should be a string", queryString: "t" }, dailyConfig: { validate: function(r, e) {
  try {
    return e.validateDailyConfig(r), !0;
  } catch (t) {
    console.error("Failed to validate dailyConfig", t);
  }
  return !1;
}, help: "Unsupported dailyConfig. Check error logs for detailed info." }, reactNativeConfig: { validate: function(r) {
  return Ca(r, ks);
}, help: "reactNativeConfig should look like ".concat(JSON.stringify(ks), ", all fields optional") }, lang: { validate: function(r) {
  return ["da", "de", "en-us", "en", "es", "fi", "fr", "it", "jp", "ka", "nl", "no", "pl", "pt", "pt-BR", "ru", "sv", "tr", "user"].includes(r);
}, help: "language not supported. Options are: da, de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, pt-BR, ru, sv, tr, user" }, userName: !0, userData: { validate: function(r) {
  try {
    return ya(r), !0;
  } catch (e) {
    return console.error(e), !1;
  }
}, help: "invalid userData type provided" }, startVideoOff: !0, startAudioOff: !0, allowLocalVideo: !0, allowLocalAudio: !0, activeSpeakerMode: !0, showLeaveButton: !0, showLocalVideo: !0, showParticipantsBar: !0, showFullscreenButton: !0, showUserNameChangeUI: !0, iframeStyle: !0, customLayout: !0, cssFile: !0, cssText: !0, bodyClass: !0, videoSource: { validate: function(r, e) {
  if (typeof r == "boolean") return e._preloadCache.allowLocalVideo = r, !0;
  var t;
  if (r instanceof MediaStreamTrack) e._sharedTracks.videoTrack = r, t = { customTrack: je };
  else {
    if (delete e._sharedTracks.videoTrack, typeof r != "string") return console.error("videoSource must be a MediaStreamTrack, boolean, or a string"), !1;
    t = { deviceId: r };
  }
  return e._updatePreloadCacheInputSettings({ video: { settings: t } }, !1), !0;
} }, audioSource: { validate: function(r, e) {
  if (typeof r == "boolean") return e._preloadCache.allowLocalAudio = r, !0;
  var t;
  if (r instanceof MediaStreamTrack) e._sharedTracks.audioTrack = r, t = { customTrack: je };
  else {
    if (delete e._sharedTracks.audioTrack, typeof r != "string") return console.error("audioSource must be a MediaStreamTrack, boolean, or a string"), !1;
    t = { deviceId: r };
  }
  return e._updatePreloadCacheInputSettings({ audio: { settings: t } }, !1), !0;
} }, subscribeToTracksAutomatically: { validate: function(r, e) {
  return e._preloadCache.subscribeToTracksAutomatically = r, !0;
} }, theme: { validate: function(r) {
  var e = ["accent", "accentText", "background", "backgroundAccent", "baseText", "border", "mainAreaBg", "mainAreaBgAccent", "mainAreaText", "supportiveText"], t = function(n) {
    for (var i = 0, o = Object.keys(n); i < o.length; i++) {
      var a = o[i];
      if (!e.includes(a)) return console.error('unsupported color "'.concat(a, '". Valid colors: ').concat(e.join(", "))), !1;
      if (!n[a].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i)) return console.error("".concat(a, ' theme color should be provided in valid hex color format. Received: "').concat(n[a], '"')), !1;
    }
    return !0;
  };
  return B(r) === "object" && ("light" in r && "dark" in r || "colors" in r) ? "light" in r && "dark" in r ? "colors" in r.light ? "colors" in r.dark ? t(r.light.colors) && t(r.dark.colors) : (console.error('Dark theme is missing "colors" property.', r), !1) : (console.error('Light theme is missing "colors" property.', r), !1) : t(r.colors) : (console.error('Theme must contain either both "light" and "dark" properties, or "colors".', r), !1);
}, help: "unsupported theme configuration. Check error logs for detailed info." }, layoutConfig: { validate: function(r) {
  if ("grid" in r) {
    var e = r.grid;
    if ("maxTilesPerPage" in e) {
      if (!Number.isInteger(e.maxTilesPerPage)) return console.error("grid.maxTilesPerPage should be an integer. You passed ".concat(e.maxTilesPerPage, ".")), !1;
      if (e.maxTilesPerPage > 49) return console.error("grid.maxTilesPerPage can't be larger than 49 without sacrificing browser performance. Please contact us at https://www.daily.co/contact to talk about your use case."), !1;
    }
    if ("minTilesPerPage" in e) {
      if (!Number.isInteger(e.minTilesPerPage)) return console.error("grid.minTilesPerPage should be an integer. You passed ".concat(e.minTilesPerPage, ".")), !1;
      if (e.minTilesPerPage < 1) return console.error("grid.minTilesPerPage can't be lower than 1."), !1;
      if ("maxTilesPerPage" in e && e.minTilesPerPage > e.maxTilesPerPage) return console.error("grid.minTilesPerPage can't be higher than grid.maxTilesPerPage."), !1;
    }
  }
  return !0;
}, help: "unsupported layoutConfig. Check error logs for detailed info." }, receiveSettings: { validate: function(r) {
  return ba(r, { allowAllParticipantsKey: !1 });
}, help: wa({ allowAllParticipantsKey: !1 }) }, sendSettings: { validate: function(r, e) {
  return !!function(t, n) {
    try {
      return n.validateUpdateSendSettings(t), !0;
    } catch (i) {
      return console.error("Failed to validate send settings", i), !1;
    }
  }(r, e) && (e._preloadCache.sendSettings = r, !0);
}, help: "Invalid sendSettings provided. Check error logs for detailed info." }, inputSettings: { validate: function(r, e) {
  var t;
  return !!_a(r) && (e._inputSettings || (e._inputSettings = {}), Sa(r, (t = e.properties) === null || t === void 0 ? void 0 : t.dailyConfig, e._sharedTracks), e._updatePreloadCacheInputSettings(r, !0), !0);
}, help: bn() }, layout: { validate: function(r) {
  return r === "custom-v1" || r === "browser" || r === "none";
}, help: 'layout may only be set to "custom-v1"', queryString: "layout" }, emb: { queryString: "emb" }, embHref: { queryString: "embHref" }, dailyJsVersion: { queryString: "dailyJsVersion" }, proxy: { queryString: "proxy" }, strictMode: !0, allowMultipleCallInstances: !0 }, Wt = { styles: { validate: function(r) {
  for (var e in r) if (e !== "cam" && e !== "screen") return !1;
  if (r.cam) {
    for (var t in r.cam) if (t !== "div" && t !== "video") return !1;
  }
  if (r.screen) {
    for (var n in r.screen) if (n !== "div" && n !== "video") return !1;
  }
  return !0;
}, help: "styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }" }, setSubscribedTracks: { validate: function(r, e) {
  if (e._preloadCache.subscribeToTracksAutomatically) return !1;
  var t = [!0, !1, "staged"];
  if (t.includes(r) || !U() && r === "avatar") return !0;
  var n = ["audio", "video", "screenAudio", "screenVideo", "rmpAudio", "rmpVideo"], i = function(o) {
    var a = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    for (var l in o) if (l === "custom") {
      if (!t.includes(o[l]) && !i(o[l], !0)) return !1;
    } else {
      var u = !a && !n.includes(l), p = !t.includes(o[l]);
      if (u || p) return !1;
    }
    return !0;
  };
  return i(r);
}, help: "setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: " + "true".concat(U() ? "" : " | 'avatar'", " | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }") }, setAudio: !0, setVideo: !0, setScreenShare: { validate: function(r) {
  return r === !1;
}, help: "setScreenShare must be false, as it's only meant for stopping remote participants' screen shares" }, eject: !0, updatePermissions: { validate: function(r) {
  for (var e = 0, t = Object.entries(r); e < t.length; e++) {
    var n = se(t[e], 2), i = n[0], o = n[1];
    switch (i) {
      case "hasPresence":
        if (typeof o != "boolean") return !1;
        break;
      case "canSend":
        if (o instanceof Set || o instanceof Array || Array.isArray(o)) {
          var a, l = ["video", "audio", "screenVideo", "screenAudio", "customVideo", "customAudio"], u = ys(o);
          try {
            for (u.s(); !(a = u.n()).done; ) {
              var p = a.value;
              if (!l.includes(p)) return !1;
            }
          } catch (y) {
            u.e(y);
          } finally {
            u.f();
          }
        } else if (typeof o != "boolean") return !1;
        (o instanceof Array || Array.isArray(o)) && (r.canSend = new Set(o));
        break;
      case "canReceive":
        var f = se(ma.validateJSONObject(o), 2), v = f[0], k = f[1];
        if (!v) return console.error(k), !1;
        break;
      case "canAdmin":
        if (o instanceof Set || o instanceof Array || Array.isArray(o)) {
          var T, S = ["participants", "streaming", "transcription"], g = ys(o);
          try {
            for (g.s(); !(T = g.n()).done; ) {
              var b = T.value;
              if (!S.includes(b)) return !1;
            }
          } catch (y) {
            g.e(y);
          } finally {
            g.f();
          }
        } else if (typeof o != "boolean") return !1;
        (o instanceof Array || Array.isArray(o)) && (r.canAdmin = new Set(o));
        break;
      default:
        return !1;
    }
  }
  return !0;
}, help: "updatePermissions can take hasPresence, canSend, canReceive, and canAdmin permissions. hasPresence must be a boolean. canSend can be a boolean or an Array or Set of media types (video, audio, screenVideo, screenAudio, customVideo, customAudio). canReceive must be an object specifying base, byUserId, and/or byParticipantId fields (see documentation for more details). canAdmin can be a boolean or an Array or Set of admin types (participants, streaming, transcription)." } };
Promise.any || (Promise.any = function() {
  var r = N(function* (e) {
    return new Promise(function(t, n) {
      var i = [];
      e.forEach(function(o) {
        return Promise.resolve(o).then(function(a) {
          t(a);
        }).catch(function(a) {
          i.push(a), i.length === e.length && n(i);
        });
      });
    });
  });
  return function(e) {
    return r.apply(this, arguments);
  };
}());
var au = function() {
  function r(s) {
    var d, c, h, m, _, C, A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (pe(this, r), h = this, m = Ee(m = r), Ae(c = dr(h, ga() ? Reflect.construct(m, [], Ee(h).constructor) : m.apply(h, _)), "startListeningForDeviceChanges", function() {
      Xl(c.handleDeviceChange);
    }), Ae(c, "stopListeningForDeviceChanges", function() {
      Zl(c.handleDeviceChange);
    }), Ae(c, "handleDeviceChange", function(V) {
      V = V.map(function(J) {
        return JSON.parse(JSON.stringify(J));
      }), c.emitDailyJSEvent({ action: "available-devices-updated", availableDevices: V });
    }), Ae(c, "handleNativeAppStateChange", function() {
      var V = N(function* (J) {
        if (J === "destroyed") return console.warn("App has been destroyed before leaving the meeting. Cleaning up all the resources!"), void (yield c.destroy());
        var Te = J === "active";
        c.disableReactNativeAutoDeviceManagement("video") || (Te ? c.camUnmutedBeforeLosingNativeActiveState && c.setLocalVideo(!0) : (c.camUnmutedBeforeLosingNativeActiveState = c.localVideo(), c.camUnmutedBeforeLosingNativeActiveState && c.setLocalVideo(!1)));
      });
      return function(J) {
        return V.apply(this, arguments);
      };
    }()), Ae(c, "handleNativeAudioFocusChange", function(V) {
      c.disableReactNativeAutoDeviceManagement("audio") || (c._hasNativeAudioFocus = V, c.toggleParticipantAudioBasedOnNativeAudioFocus(), c._hasNativeAudioFocus ? c.micUnmutedBeforeLosingNativeAudioFocus && c.setLocalAudio(!0) : (c.micUnmutedBeforeLosingNativeAudioFocus = c.localAudio(), c.setLocalAudio(!1)));
    }), Ae(c, "handleNativeSystemScreenCaptureStop", function() {
      c.stopScreenShare();
    }), !jr() && !U()) throw new Error("WebRTC not supported or suppressed");
    if (c.strictMode = A.strictMode === void 0 || A.strictMode, c.allowMultipleCallInstances = (d = A.allowMultipleCallInstances) !== null && d !== void 0 && d, Object.keys(We).length && (c._logDuplicateInstanceAttempt(), !c.allowMultipleCallInstances)) {
      if (c.strictMode) throw new Error("Duplicate DailyIframe instances are not allowed");
      console.warn("Using strictMode: false to allow multiple call instances is now deprecated. Set `allowMultipleCallInstances: true`");
    }
    if (window._daily || (window._daily = { pendings: [], instances: {} }), c.callClientId = hr(), We[(C = c).callClientId] = C, window._daily.instances[c.callClientId] = {}, c._sharedTracks = {}, window._daily.instances[c.callClientId].tracks = c._sharedTracks, A.dailyJsVersion = r.version(), c._iframe = s, c._callObjectMode = A.layout === "none" && !c._iframe, c._preloadCache = { subscribeToTracksAutomatically: !0, outputDeviceId: null, inputSettings: null, sendSettings: null, videoTrackForNetworkConnectivityTest: null, videoTrackForConnectionQualityTest: null }, A.showLocalVideo !== void 0 ? c._callObjectMode ? console.error("showLocalVideo is not available in call object mode") : c._showLocalVideo = !!A.showLocalVideo : c._showLocalVideo = !0, A.showParticipantsBar !== void 0 ? c._callObjectMode ? console.error("showParticipantsBar is not available in call object mode") : c._showParticipantsBar = !!A.showParticipantsBar : c._showParticipantsBar = !0, A.customIntegrations !== void 0 ? c._callObjectMode ? console.error("customIntegrations is not available in call object mode") : c._customIntegrations = A.customIntegrations : c._customIntegrations = {}, A.customTrayButtons !== void 0 ? c._callObjectMode ? console.error("customTrayButtons is not available in call object mode") : c._customTrayButtons = A.customTrayButtons : c._customTrayButtons = {}, A.activeSpeakerMode !== void 0 ? c._callObjectMode ? console.error("activeSpeakerMode is not available in call object mode") : c._activeSpeakerMode = !!A.activeSpeakerMode : c._activeSpeakerMode = !1, A.receiveSettings ? c._callObjectMode ? c._receiveSettings = A.receiveSettings : console.error("receiveSettings is only available in call object mode") : c._receiveSettings = {}, c.validateProperties(A), c.properties = j({}, A), c._inputSettings || (c._inputSettings = {}), c._callObjectLoader = c._callObjectMode ? new $l(c.callClientId) : null, c._callState = sn, c._isPreparingToJoin = !1, c._accessState = { access: Kt }, c._meetingSessionSummary = {}, c._finalSummaryOfPrevSession = {}, c._meetingSessionState = qr(Ss, c._callObjectMode), c._nativeInCallAudioMode = _s, c._participants = {}, c._isScreenSharing = !1, c._participantCounts = ws, c._rmpPlayerState = {}, c._waitingParticipants = {}, c._network = { threshold: "good", quality: 100, networkState: "unknown", stats: {} }, c._activeSpeaker = {}, c._localAudioLevel = 0, c._isLocalAudioLevelObserverRunning = !1, c._remoteParticipantsAudioLevel = {}, c._isRemoteParticipantsAudioLevelObserverRunning = !1, c._maxAppMessageSize = Pr, c._messageChannel = U() ? new ql() : new Fl(), c._iframe && (c._iframe.requestFullscreen ? c._iframe.addEventListener("fullscreenchange", function() {
      document.fullscreenElement === c._iframe ? (c.emitDailyJSEvent({ action: Tt }), c.sendMessageToCallMachine({ action: Tt })) : (c.emitDailyJSEvent({ action: Ct }), c.sendMessageToCallMachine({ action: Ct }));
    }) : c._iframe.webkitRequestFullscreen && c._iframe.addEventListener("webkitfullscreenchange", function() {
      document.webkitFullscreenElement === c._iframe ? (c.emitDailyJSEvent({ action: Tt }), c.sendMessageToCallMachine({ action: Tt })) : (c.emitDailyJSEvent({ action: Ct }), c.sendMessageToCallMachine({ action: Ct }));
    })), U()) {
      var I = c.nativeUtils();
      I.addAudioFocusChangeListener && I.removeAudioFocusChangeListener && I.addAppStateChangeListener && I.removeAppStateChangeListener && I.addSystemScreenCaptureStopListener && I.removeSystemScreenCaptureStopListener || console.warn("expected (add|remove)(AudioFocusChange|AppActiveStateChange|SystemScreenCaptureStop)Listener to be available in React Native"), c._hasNativeAudioFocus = !0, I.addAudioFocusChangeListener(c.handleNativeAudioFocusChange), I.addAppStateChangeListener(c.handleNativeAppStateChange), I.addSystemScreenCaptureStopListener(c.handleNativeSystemScreenCaptureStop);
    }
    return c._callObjectMode && c.startListeningForDeviceChanges(), c._messageChannel.addListenerForMessagesFromCallMachine(c.handleMessageFromCallMachine, c.callClientId, c), c;
  }
  return pr(r, xt), he(r, [{ key: "destroy", value: ($n = N(function* () {
    var s;
    try {
      yield this.leave();
    } catch {
    }
    var d = this._iframe;
    if (d) {
      var c = d.parentElement;
      c && c.removeChild(d);
    }
    if (this._messageChannel.removeListener(this.handleMessageFromCallMachine), U()) {
      var h = this.nativeUtils();
      h.removeAudioFocusChangeListener(this.handleNativeAudioFocusChange), h.removeAppStateChangeListener(this.handleNativeAppStateChange), h.removeSystemScreenCaptureStopListener(this.handleNativeSystemScreenCaptureStop);
    }
    this._callObjectMode && this.stopListeningForDeviceChanges(), this.resetMeetingDependentVars(), this._destroyed = !0, this.emitDailyJSEvent({ action: "call-instance-destroyed" }), delete We[this.callClientId], !((s = window) === null || s === void 0 || (s = s._daily) === null || s === void 0) && s.instances && delete window._daily.instances[this.callClientId], this.strictMode && (this.callClientId = void 0);
  }), function() {
    return $n.apply(this, arguments);
  }) }, { key: "isDestroyed", value: function() {
    return !!this._destroyed;
  } }, { key: "loadCss", value: function(s) {
    var d = s.bodyClass, c = s.cssFile, h = s.cssText;
    return $(), this.sendMessageToCallMachine({ action: "load-css", cssFile: this.absoluteUrl(c), bodyClass: d, cssText: h }), this;
  } }, { key: "iframe", value: function() {
    return $(), this._iframe;
  } }, { key: "meetingState", value: function() {
    return this._callState;
  } }, { key: "accessState", value: function() {
    return _e(this._callObjectMode, "accessState()"), this._accessState;
  } }, { key: "participants", value: function() {
    return this._participants;
  } }, { key: "participantCounts", value: function() {
    return this._participantCounts;
  } }, { key: "waitingParticipants", value: function() {
    return _e(this._callObjectMode, "waitingParticipants()"), this._waitingParticipants;
  } }, { key: "validateParticipantProperties", value: function(s, d) {
    for (var c in d) {
      if (!Wt[c]) throw new Error("unrecognized updateParticipant property ".concat(c));
      if (Wt[c].validate && !Wt[c].validate(d[c], this, this._participants[s])) throw new Error(Wt[c].help);
    }
  } }, { key: "updateParticipant", value: function(s, d) {
    return this._participants.local && this._participants.local.session_id === s && (s = "local"), s && d && (this.validateParticipantProperties(s, d), this.sendMessageToCallMachine({ action: "update-participant", id: s, properties: d })), this;
  } }, { key: "updateParticipants", value: function(s) {
    var d = this._participants.local && this._participants.local.session_id;
    for (var c in s) c === d && (c = "local"), c && s[c] && this.validateParticipantProperties(c, s[c]);
    return this.sendMessageToCallMachine({ action: "update-participants", participants: s }), this;
  } }, { key: "updateWaitingParticipant", value: (Vn = N(function* () {
    var s = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (_e(this._callObjectMode, "updateWaitingParticipant()"), Q(this._callState, "updateWaitingParticipant()"), typeof d != "string" || B(c) !== "object") throw new Error("updateWaitingParticipant() must take an id string and a updates object");
    return new Promise(function(h, m) {
      s.sendMessageToCallMachine({ action: "daily-method-update-waiting-participant", id: d, updates: c }, function(_) {
        _.error && m(_.error), _.id || m(new Error("unknown error in updateWaitingParticipant()")), h({ id: _.id });
      });
    });
  }), function() {
    return Vn.apply(this, arguments);
  }) }, { key: "updateWaitingParticipants", value: (qn = N(function* () {
    var s = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (_e(this._callObjectMode, "updateWaitingParticipants()"), Q(this._callState, "updateWaitingParticipants()"), B(d) !== "object") throw new Error("updateWaitingParticipants() must take a mapping between ids and update objects");
    return new Promise(function(c, h) {
      s.sendMessageToCallMachine({ action: "daily-method-update-waiting-participants", updatesById: d }, function(m) {
        m.error && h(m.error), m.ids || h(new Error("unknown error in updateWaitingParticipants()")), c({ ids: m.ids });
      });
    });
  }), function() {
    return qn.apply(this, arguments);
  }) }, { key: "requestAccess", value: (Fn = N(function* () {
    var s = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = d.access, h = c === void 0 ? { level: ro } : c, m = d.name, _ = m === void 0 ? "" : m;
    return _e(this._callObjectMode, "requestAccess()"), Q(this._callState, "requestAccess()"), new Promise(function(C, A) {
      s.sendMessageToCallMachine({ action: "daily-method-request-access", access: h, name: _ }, function(I) {
        I.error && A(I.error), I.access || A(new Error("unknown error in requestAccess()")), C({ access: I.access, granted: I.granted });
      });
    });
  }), function() {
    return Fn.apply(this, arguments);
  }) }, { key: "localAudio", value: function() {
    return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.audio.state) : null;
  } }, { key: "localVideo", value: function() {
    return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.video.state) : null;
  } }, { key: "setLocalAudio", value: function(s) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return "forceDiscardTrack" in d && (U() ? (console.warn("forceDiscardTrack option not supported in React Native; ignoring"), d = {}) : s && (console.warn("forceDiscardTrack option only supported when calling setLocalAudio(false); ignoring"), d = {})), this.sendMessageToCallMachine({ action: "local-audio", state: s, options: d }), this;
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
  } }, { key: "getReceiveSettings", value: (xn = N(function* (s) {
    var d = this, c = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).showInheritedValues, h = c !== void 0 && c;
    if (_e(this._callObjectMode, "getReceiveSettings()"), !this._callMachineInitialized) return this._receiveSettings;
    switch (B(s)) {
      case "string":
        return new Promise(function(m) {
          d.sendMessageToCallMachine({ action: "get-single-participant-receive-settings", id: s, showInheritedValues: h }, function(_) {
            m(_.receiveSettings);
          });
        });
      case "undefined":
        return this._receiveSettings;
      default:
        throw new Error('first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments');
    }
  }), function(s) {
    return xn.apply(this, arguments);
  }) }, { key: "updateReceiveSettings", value: (Rn = N(function* (s) {
    var d = this;
    if (_e(this._callObjectMode, "updateReceiveSettings()"), !ba(s, { allowAllParticipantsKey: !0 })) throw new Error(wa({ allowAllParticipantsKey: !0 }));
    return Q(this._callState, "updateReceiveSettings()", "To specify receive settings earlier, use the receiveSettings config property."), new Promise(function(c) {
      d.sendMessageToCallMachine({ action: "update-receive-settings", receiveSettings: s }, function(h) {
        c({ receiveSettings: h.receiveSettings });
      });
    });
  }), function(s) {
    return Rn.apply(this, arguments);
  }) }, { key: "_prepInputSettingsForSharing", value: function(s, d) {
    if (s) {
      var c = {};
      if (s.audio) {
        var h, m, _;
        s.audio.settings && (!Object.keys(s.audio.settings).length && d || (c.audio = { settings: j({}, s.audio.settings) })), d && (h = c.audio) !== null && h !== void 0 && (h = h.settings) !== null && h !== void 0 && h.customTrack && (c.audio.settings = { customTrack: this._sharedTracks.audioTrack });
        var C = ((m = s.audio.processor) === null || m === void 0 ? void 0 : m.type) === "none" && ((_ = s.audio.processor) === null || _ === void 0 ? void 0 : _._isDefaultWhenNone);
        if (s.audio.processor && !C) {
          var A = j({}, s.audio.processor);
          delete A._isDefaultWhenNone, c.audio = j(j({}, c.audio), {}, { processor: A });
        }
      }
      if (s.video) {
        var I, V, J;
        s.video.settings && (!Object.keys(s.video.settings).length && d || (c.video = { settings: j({}, s.video.settings) })), d && (I = c.video) !== null && I !== void 0 && (I = I.settings) !== null && I !== void 0 && I.customTrack && (c.video.settings = { customTrack: this._sharedTracks.videoTrack });
        var Te = ((V = s.video.processor) === null || V === void 0 ? void 0 : V.type) === "none" && ((J = s.video.processor) === null || J === void 0 ? void 0 : J._isDefaultWhenNone);
        if (s.video.processor && !Te) {
          var Be = j({}, s.video.processor);
          delete Be._isDefaultWhenNone, c.video = j(j({}, c.video), {}, { processor: Be });
        }
      }
      return c;
    }
  } }, { key: "getInputSettings", value: function() {
    var s = this;
    return $(), new Promise(function(d) {
      d(s._getInputSettings());
    });
  } }, { key: "_getInputSettings", value: function() {
    var s, d, c, h, m, _, C = { processor: { type: "none", _isDefaultWhenNone: !0 } };
    this._inputSettings ? (s = ((c = this._inputSettings) === null || c === void 0 ? void 0 : c.video) || C, d = ((h = this._inputSettings) === null || h === void 0 ? void 0 : h.audio) || C) : (s = ((m = this._preloadCache) === null || m === void 0 || (m = m.inputSettings) === null || m === void 0 ? void 0 : m.video) || C, d = ((_ = this._preloadCache) === null || _ === void 0 || (_ = _.inputSettings) === null || _ === void 0 ? void 0 : _.audio) || C);
    var A = { audio: d, video: s };
    return this._prepInputSettingsForSharing(A, !0);
  } }, { key: "_updatePreloadCacheInputSettings", value: function(s, d) {
    var c = this._inputSettings || {}, h = {};
    if (s.video) {
      var m, _, C;
      h.video = {}, s.video.settings ? (h.video.settings = {}, d || s.video.settings.customTrack || (C = c.video) === null || C === void 0 || !C.settings ? h.video.settings = s.video.settings : h.video.settings = j(j({}, c.video.settings), s.video.settings), Object.keys(h.video.settings).length || delete h.video.settings) : (m = c.video) !== null && m !== void 0 && m.settings && (h.video.settings = c.video.settings), s.video.processor ? h.video.processor = s.video.processor : (_ = c.video) !== null && _ !== void 0 && _.processor && (h.video.processor = c.video.processor);
    } else c.video && (h.video = c.video);
    if (s.audio) {
      var A, I, V;
      h.audio = {}, s.audio.settings ? (h.audio.settings = {}, d || s.audio.settings.customTrack || (V = c.audio) === null || V === void 0 || !V.settings ? h.audio.settings = s.audio.settings : h.audio.settings = j(j({}, c.audio.settings), s.audio.settings), Object.keys(h.audio.settings).length || delete h.audio.settings) : (A = c.audio) !== null && A !== void 0 && A.settings && (h.audio.settings = c.audio.settings), s.audio.processor ? h.audio.processor = s.audio.processor : (I = c.audio) !== null && I !== void 0 && I.processor && (h.audio.processor = c.audio.processor);
    } else c.audio && (h.audio = c.audio);
    this._maybeUpdateInputSettings(h);
  } }, { key: "_devicesFromInputSettings", value: function(s) {
    var d, c, h = (s == null || (d = s.video) === null || d === void 0 || (d = d.settings) === null || d === void 0 ? void 0 : d.deviceId) || null, m = (s == null || (c = s.audio) === null || c === void 0 || (c = c.settings) === null || c === void 0 ? void 0 : c.deviceId) || null, _ = this._preloadCache.outputDeviceId || null;
    return { camera: h ? { deviceId: h } : {}, mic: m ? { deviceId: m } : {}, speaker: _ ? { deviceId: _ } : {} };
  } }, { key: "updateInputSettings", value: (Nn = N(function* (s) {
    var d = this;
    return $(), _a(s) ? s.video || s.audio ? (Sa(s, this.properties.dailyConfig, this._sharedTracks), this._callObjectMode && !this._callMachineInitialized ? (this._updatePreloadCacheInputSettings(s, !0), this._getInputSettings()) : new Promise(function(c, h) {
      d.sendMessageToCallMachine({ action: "update-input-settings", inputSettings: s }, function(m) {
        if (m.error) h(m.error);
        else {
          if (m.returnPreloadCache) return d._updatePreloadCacheInputSettings(s, !0), void c(d._getInputSettings());
          d._maybeUpdateInputSettings(m.inputSettings), c(d._prepInputSettingsForSharing(m.inputSettings, !0));
        }
      });
    })) : this._getInputSettings() : (console.error(bn()), Promise.reject(bn()));
  }), function(s) {
    return Nn.apply(this, arguments);
  }) }, { key: "setBandwidth", value: function(s) {
    var d = s.kbs, c = s.trackConstraints;
    if ($(), this._callMachineInitialized) return this.sendMessageToCallMachine({ action: "set-bandwidth", kbs: d, trackConstraints: c }), this;
  } }, { key: "getDailyLang", value: function() {
    var s = this;
    if ($(), this._callMachineInitialized) return new Promise(function(d) {
      s.sendMessageToCallMachine({ action: "get-daily-lang" }, function(c) {
        delete c.action, delete c.callbackStamp, d(c);
      });
    });
  } }, { key: "setDailyLang", value: function(s) {
    return $(), this.sendMessageToCallMachine({ action: "set-daily-lang", lang: s }), this;
  } }, { key: "setProxyUrl", value: function(s) {
    return this.sendMessageToCallMachine({ action: "set-proxy-url", proxyUrl: s }), this;
  } }, { key: "setIceConfig", value: function(s) {
    return this.sendMessageToCallMachine({ action: "set-ice-config", iceConfig: s }), this;
  } }, { key: "meetingSessionSummary", value: function() {
    return [xe, Me].includes(this._callState) ? this._finalSummaryOfPrevSession : this._meetingSessionSummary;
  } }, { key: "getMeetingSession", value: (Je = N(function* () {
    var s = this;
    return console.warn("getMeetingSession() is deprecated: use meetingSessionSummary(), which will return immediately"), Q(this._callState, "getMeetingSession()"), new Promise(function(d) {
      s.sendMessageToCallMachine({ action: "get-meeting-session" }, function(c) {
        delete c.action, delete c.callbackStamp, d(c);
      });
    });
  }), function() {
    return Je.apply(this, arguments);
  }) }, { key: "meetingSessionState", value: function() {
    return Q(this._callState, "meetingSessionState"), this._meetingSessionState;
  } }, { key: "setMeetingSessionData", value: function(s) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "replace";
    _e(this._callObjectMode, "setMeetingSessionData()"), Q(this._callState, "setMeetingSessionData");
    try {
      (function(c, h) {
        new Vl({ data: c, mergeStrategy: h });
      })(s, d);
    } catch (c) {
      throw console.error(c), c;
    }
    try {
      this.sendMessageToCallMachine({ action: "set-session-data", data: s, mergeStrategy: d });
    } catch (c) {
      throw new Error("Error setting meeting session data: ".concat(c));
    }
  } }, { key: "setUserName", value: function(s, d) {
    var c = this;
    return this.properties.userName = s, new Promise(function(h) {
      c.sendMessageToCallMachine({ action: "set-user-name", name: s ?? "", thisMeetingOnly: U() || !!d && !!d.thisMeetingOnly }, function(m) {
        delete m.action, delete m.callbackStamp, h(m);
      });
    });
  } }, { key: "setUserData", value: (ee = N(function* (s) {
    var d = this;
    try {
      ya(s);
    } catch (c) {
      throw console.error(c), c;
    }
    if (this.properties.userData = s, this._callMachineInitialized) return new Promise(function(c) {
      try {
        d.sendMessageToCallMachine({ action: "set-user-data", userData: s }, function(h) {
          delete h.action, delete h.callbackStamp, c(h);
        });
      } catch (h) {
        throw new Error("Error setting user data: ".concat(h));
      }
    });
  }), function(s) {
    return ee.apply(this, arguments);
  }) }, { key: "validateAudioLevelInterval", value: function(s) {
    if (s && (s < 100 || typeof s != "number")) throw new Error("The interval must be a number greater than or equal to 100 milliseconds.");
  } }, { key: "startLocalAudioLevelObserver", value: function(s) {
    var d = this;
    if (typeof AudioWorkletNode > "u" && !U()) throw new Error("startLocalAudioLevelObserver() is not supported on this browser");
    if (this.validateAudioLevelInterval(s), this._callMachineInitialized) return this._isLocalAudioLevelObserverRunning = !0, new Promise(function(c, h) {
      d.sendMessageToCallMachine({ action: "start-local-audio-level-observer", interval: s }, function(m) {
        d._isLocalAudioLevelObserverRunning = !m.error, m.error ? h({ error: m.error }) : c();
      });
    });
    this._preloadCache.localAudioLevelObserver = { enabled: !0, interval: s };
  } }, { key: "isLocalAudioLevelObserverRunning", value: function() {
    return this._isLocalAudioLevelObserverRunning;
  } }, { key: "stopLocalAudioLevelObserver", value: function() {
    this._preloadCache.localAudioLevelObserver = null, this._localAudioLevel = 0, this._isLocalAudioLevelObserverRunning = !1, this.sendMessageToCallMachine({ action: "stop-local-audio-level-observer" });
  } }, { key: "startRemoteParticipantsAudioLevelObserver", value: function(s) {
    var d = this;
    if (this.validateAudioLevelInterval(s), this._callMachineInitialized) return this._isRemoteParticipantsAudioLevelObserverRunning = !0, new Promise(function(c, h) {
      d.sendMessageToCallMachine({ action: "start-remote-participants-audio-level-observer", interval: s }, function(m) {
        d._isRemoteParticipantsAudioLevelObserverRunning = !m.error, m.error ? h({ error: m.error }) : c();
      });
    });
    this._preloadCache.remoteParticipantsAudioLevelObserver = { enabled: !0, interval: s };
  } }, { key: "isRemoteParticipantsAudioLevelObserverRunning", value: function() {
    return this._isRemoteParticipantsAudioLevelObserverRunning;
  } }, { key: "stopRemoteParticipantsAudioLevelObserver", value: function() {
    this._preloadCache.remoteParticipantsAudioLevelObserver = null, this._remoteParticipantsAudioLevel = {}, this._isRemoteParticipantsAudioLevelObserverRunning = !1, this.sendMessageToCallMachine({ action: "stop-remote-participants-audio-level-observer" });
  } }, { key: "startCamera", value: (G = N(function* () {
    var s = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (_e(this._callObjectMode, "startCamera()"), xr(this._callState, this._isPreparingToJoin, "startCamera()", "Did you mean to use setLocalAudio() and/or setLocalVideo() instead?"), this.needsLoad()) try {
      yield this.load(d);
    } catch (c) {
      return Promise.reject(c);
    }
    else {
      if (this._didPreAuth) {
        if (d.url && d.url !== this.properties.url) return console.error("url in startCamera() is different than the one used in preAuth()"), Promise.reject();
        if (d.token && d.token !== this.properties.token) return console.error("token in startCamera() is different than the one used in preAuth()"), Promise.reject();
      }
      this.validateProperties(d), this.properties = j(j({}, this.properties), d);
    }
    return new Promise(function(c) {
      s._preloadCache.inputSettings = s._prepInputSettingsForSharing(s._inputSettings, !1), s.sendMessageToCallMachine({ action: "start-camera", properties: ot(s.properties, s.callClientId), preloadCache: ot(s._preloadCache, s.callClientId) }, function(h) {
        c({ camera: h.camera, mic: h.mic, speaker: h.speaker });
      });
    });
  }), function() {
    return G.apply(this, arguments);
  }) }, { key: "validateCustomTrack", value: function(s, d, c) {
    if (c && c.length > 50) throw new Error("Custom track `trackName` must not be more than 50 characters");
    if (d && d !== "music" && d !== "speech" && !(d instanceof Object)) throw new Error("Custom track `mode` must be either `music` | `speech` | `DailyMicAudioModeSettings` or `undefined`");
    if (c && ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo", "customVideoDefaults"].includes(c)) throw new Error("Custom track `trackName` must not match a track name already used by daily: cam-audio, cam-video, customVideoDefaults, screen-video, screen-audio, rmpAudio, rmpVideo");
    if (!(s instanceof MediaStreamTrack)) throw new Error("Custom tracks provided must be instances of MediaStreamTrack");
  } }, { key: "startCustomTrack", value: function() {
    var s = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { track, mode, trackName, ignoreAudioLevel };
    return $(), Q(this._callState, "startCustomTrack()"), this.validateCustomTrack(d.track, d.mode, d.trackName), new Promise(function(c, h) {
      s._sharedTracks.customTrack = d.track, d.track = je, s.sendMessageToCallMachine({ action: "start-custom-track", properties: d }, function(m) {
        m.error ? h({ error: m.error }) : c(m.mediaTag);
      });
    });
  } }, { key: "stopCustomTrack", value: function(s) {
    var d = this;
    return $(), Q(this._callState, "stopCustomTrack()"), new Promise(function(c) {
      d.sendMessageToCallMachine({ action: "stop-custom-track", mediaTag: s }, function(h) {
        c(h.mediaTag);
      });
    });
  } }, { key: "setCamera", value: function(s) {
    var d = this;
    return Et(), zt(this._callMachineInitialized, "setCamera()"), new Promise(function(c) {
      d.sendMessageToCallMachine({ action: "set-camera", cameraDeviceId: s }, function(h) {
        c({ device: h.device });
      });
    });
  } }, { key: "setAudioDevice", value: (F = N(function* (s) {
    return Et(), this.nativeUtils().setAudioDevice(s), { deviceId: yield this.nativeUtils().getAudioDevice() };
  }), function(s) {
    return F.apply(this, arguments);
  }) }, { key: "cycleCamera", value: function() {
    var s = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return new Promise(function(c) {
      s.sendMessageToCallMachine({ action: "cycle-camera", properties: d }, function(h) {
        c({ device: h.device });
      });
    });
  } }, { key: "cycleMic", value: function() {
    var s = this;
    return $(), new Promise(function(d) {
      s.sendMessageToCallMachine({ action: "cycle-mic" }, function(c) {
        d({ device: c.device });
      });
    });
  } }, { key: "getCameraFacingMode", value: function() {
    var s = this;
    return Et(), new Promise(function(d) {
      s.sendMessageToCallMachine({ action: "get-camera-facing-mode" }, function(c) {
        d(c.facingMode);
      });
    });
  } }, { key: "setInputDevicesAsync", value: (w = N(function* (s) {
    var d = this, c = s.audioDeviceId, h = s.videoDeviceId, m = s.audioSource, _ = s.videoSource;
    if ($(), m !== void 0 && (c = m), _ !== void 0 && (h = _), typeof c == "boolean" && (this._setAllowLocalAudio(c), c = void 0), typeof h == "boolean" && (this._setAllowLocalVideo(h), h = void 0), !c && !h) return yield this.getInputDevices();
    var C = {};
    return c && (c instanceof MediaStreamTrack ? (this._sharedTracks.audioTrack = c, c = je, C.audio = { settings: { customTrack: c } }) : (delete this._sharedTracks.audioTrack, C.audio = { settings: { deviceId: c } })), h && (h instanceof MediaStreamTrack ? (this._sharedTracks.videoTrack = h, h = je, C.video = { settings: { customTrack: h } }) : (delete this._sharedTracks.videoTrack, C.video = { settings: { deviceId: h } })), this._callObjectMode && this.needsLoad() ? (this._updatePreloadCacheInputSettings(C, !1), this._devicesFromInputSettings(this._inputSettings)) : new Promise(function(A) {
      d.sendMessageToCallMachine({ action: "set-input-devices", audioDeviceId: c, videoDeviceId: h }, function(I) {
        if (delete I.action, delete I.callbackStamp, I.returnPreloadCache) return d._updatePreloadCacheInputSettings(C, !1), void A(d._devicesFromInputSettings(d._inputSettings));
        A(I);
      });
    });
  }), function(s) {
    return w.apply(this, arguments);
  }) }, { key: "setOutputDeviceAsync", value: (ke = N(function* (s) {
    var d = this, c = s.outputDeviceId;
    if ($(), !c || typeof c != "string") throw new Error("outputDeviceId must be provided and must be a valid device id");
    return this._preloadCache.outputDeviceId = c, this._callObjectMode && this.needsLoad() ? this._devicesFromInputSettings(this._inputSettings) : new Promise(function(h, m) {
      d.sendMessageToCallMachine({ action: "set-output-device", outputDeviceId: c }, function(_) {
        if (delete _.action, delete _.callbackStamp, _.error) {
          var C = new Error(_.error.message);
          return C.type = _.error.type, void m(C);
        }
        _.returnPreloadCache ? h(d._devicesFromInputSettings(d._inputSettings)) : h(_);
      });
    });
  }), function(s) {
    return ke.apply(this, arguments);
  }) }, { key: "getInputDevices", value: (fe = N(function* () {
    var s = this;
    return this._callObjectMode && this.needsLoad() ? this._devicesFromInputSettings(this._inputSettings) : new Promise(function(d) {
      s.sendMessageToCallMachine({ action: "get-input-devices" }, function(c) {
        c.returnPreloadCache ? d(s._devicesFromInputSettings(s._inputSettings)) : d({ camera: c.camera, mic: c.mic, speaker: c.speaker });
      });
    });
  }), function() {
    return fe.apply(this, arguments);
  }) }, { key: "nativeInCallAudioMode", value: function() {
    return Et(), this._nativeInCallAudioMode;
  } }, { key: "setNativeInCallAudioMode", value: function(s) {
    if (Et(), [_s, ou].includes(s)) {
      if (s !== this._nativeInCallAudioMode) return this._nativeInCallAudioMode = s, !this.disableReactNativeAutoDeviceManagement("audio") && Zt(this._callState, this._isPreparingToJoin) && this.nativeUtils().setAudioMode(this._nativeInCallAudioMode), this;
    } else console.error("invalid in-call audio mode specified: ", s);
  } }, { key: "preAuth", value: (Z = N(function* () {
    var s = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (_e(this._callObjectMode, "preAuth()"), xr(this._callState, this._isPreparingToJoin, "preAuth()"), this.needsLoad() && (yield this.load(d)), !d.url) throw new Error("preAuth() requires at least a url to be provided");
    return this.validateProperties(d), this.properties = j(j({}, this.properties), d), new Promise(function(c, h) {
      s._preloadCache.inputSettings = s._prepInputSettingsForSharing(s._inputSettings, !1), s.sendMessageToCallMachine({ action: "daily-method-preauth", properties: ot(s.properties, s.callClientId), preloadCache: ot(s._preloadCache, s.callClientId) }, function(m) {
        return m.error ? h(m.error) : m.access ? (s._didPreAuth = !0, void c({ access: m.access })) : h(new Error("unknown error in preAuth()"));
      });
    });
  }), function() {
    return Z.apply(this, arguments);
  }) }, { key: "load", value: (W = N(function* (s) {
    var d = this;
    if (this.needsLoad()) {
      if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
      if (s && (this.validateProperties(s), this.properties = j(j({}, this.properties), s)), !this._callObjectMode && !this.properties.url) throw new Error("can't load iframe meeting because url property isn't set");
      return this._updateCallState(Hi), this.emitDailyJSEvent({ action: lo }), this._callObjectMode ? new Promise(function(c, h) {
        d._callObjectLoader.cancel();
        var m = Date.now();
        d._callObjectLoader.load(d.properties.dailyConfig, function(_) {
          d._bundleLoadTime = _ ? "no-op" : Date.now() - m, d._updateCallState(Qi), _ && d.emitDailyJSEvent({ action: an }), c();
        }, function(_, C) {
          if (d.emitDailyJSEvent({ action: uo }), !C) {
            d._updateCallState(Me), d.resetMeetingDependentVars();
            var A = { action: pn, errorMsg: _.msg, error: { type: "connection-error", msg: "Failed to load call object bundle.", details: { on: "load", sourceError: _, bundleUrl: tr(d.properties.dailyConfig) } } };
            d._maybeSendToSentry(A), d.emitDailyJSEvent(A), h(_.msg);
          }
        });
      }) : (this._iframe.src = qs(this.assembleMeetingUrl(), this.properties.dailyConfig), new Promise(function(c, h) {
        d._loadedCallback = function(m) {
          d._callState !== Me ? (d._updateCallState(Qi), (d.properties.cssFile || d.properties.cssText) && d.loadCss(d.properties), c()) : h(m);
        };
      }));
    }
  }), function(s) {
    return W.apply(this, arguments);
  }) }, { key: "join", value: (q = N(function* () {
    var s = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this._testCallInProgress && this.stopTestCallQuality();
    var c = !1;
    if (this.needsLoad()) {
      this.updateIsPreparingToJoin(!0);
      try {
        yield this.load(d);
      } catch (h) {
        return this.updateIsPreparingToJoin(!1), Promise.reject(h);
      }
    } else {
      if (c = !(!this.properties.cssFile && !this.properties.cssText), this._didPreAuth) {
        if (d.url && d.url !== this.properties.url) return console.error("url in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject();
        if (d.token && d.token !== this.properties.token) return console.error("token in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject();
      }
      if (d.url && !this._callObjectMode && d.url && d.url !== this.properties.url) return console.error("url in join() is different than the one used in load() (".concat(this.properties.url, " -> ").concat(d.url, ")")), this.updateIsPreparingToJoin(!1), Promise.reject();
      this.validateProperties(d), this.properties = j(j({}, this.properties), d);
    }
    return d.showLocalVideo !== void 0 && (this._callObjectMode ? console.error("showLocalVideo is not available in callObject mode") : this._showLocalVideo = !!d.showLocalVideo), d.showParticipantsBar !== void 0 && (this._callObjectMode ? console.error("showParticipantsBar is not available in callObject mode") : this._showParticipantsBar = !!d.showParticipantsBar), this._callState === qe || this._callState === ar ? (console.warn("already joined meeting, call leave() before joining again"), void this.updateIsPreparingToJoin(!1)) : (this._updateCallState(ar, !1), this.emitDailyJSEvent({ action: fo }), this._preloadCache.inputSettings = this._prepInputSettingsForSharing(this._inputSettings || {}, !1), this.sendMessageToCallMachine({ action: "join-meeting", properties: ot(this.properties, this.callClientId), preloadCache: ot(this._preloadCache, this.callClientId) }), new Promise(function(h, m) {
      s._joinedCallback = function(_, C) {
        if (s._callState !== Me) {
          if (s._updateCallState(qe), _) for (var A in _) {
            if (s._callObjectMode) {
              var I = s._callMachine().store;
              cs(_[A], I), ls(_[A], I), us(_[A], s._participants[A], I);
            }
            s._participants[A] = j({}, _[A]), s.toggleParticipantAudioBasedOnNativeAudioFocus();
          }
          c && s.loadCss(s.properties), h(_);
        } else m(C);
      };
    }));
  }), function() {
    return q.apply(this, arguments);
  }) }, { key: "leave", value: (L = N(function* () {
    var s = this;
    return this._testCallInProgress && this.stopTestCallQuality(), new Promise(function(d) {
      s._callState === xe || s._callState === Me ? d() : s._callObjectLoader && !s._callObjectLoader.loaded ? (s._callObjectLoader.cancel(), s._updateCallState(xe), s.resetMeetingDependentVars(), s.emitDailyJSEvent({ action: xe }), d()) : (s._resolveLeave = d, s.sendMessageToCallMachine({ action: "leave-meeting" }));
    });
  }), function() {
    return L.apply(this, arguments);
  }) }, { key: "startScreenShare", value: (D = N(function* () {
    var s = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (zt(this._callMachineInitialized, "startScreenShare()"), d.screenVideoSendSettings && this._validateVideoSendSettings("screenVideo", d.screenVideoSendSettings), d.mediaStream && (this._sharedTracks.screenMediaStream = d.mediaStream, d.mediaStream = je), typeof DailyNativeUtils < "u" && DailyNativeUtils.isIOS !== void 0 && DailyNativeUtils.isIOS) {
      var c = this.nativeUtils();
      if (yield c.isScreenBeingCaptured()) return void this.emitDailyJSEvent({ action: dn, type: "screen-share-error", errorMsg: "Could not start the screen sharing. The screen is already been captured!" });
      c.setSystemScreenCaptureStartCallback(function() {
        c.setSystemScreenCaptureStartCallback(null), s.sendMessageToCallMachine({ action: Xi, captureOptions: d });
      }), c.presentSystemScreenCapturePrompt();
    } else this.sendMessageToCallMachine({ action: Xi, captureOptions: d });
  }), function() {
    return D.apply(this, arguments);
  }) }, { key: "stopScreenShare", value: function() {
    zt(this._callMachineInitialized, "stopScreenShare()"), this.sendMessageToCallMachine({ action: "local-screen-stop" });
  } }, { key: "startRecording", value: function() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = s.type;
    if (d && d !== "cloud" && d !== "raw-tracks" && d !== "local") throw new Error("invalid type: ".concat(d, ", allowed values 'cloud', 'raw-tracks', or 'local'"));
    this.sendMessageToCallMachine(j({ action: "local-recording-start" }, s));
  } }, { key: "updateRecording", value: function(s) {
    var d = s.layout, c = d === void 0 ? { preset: "default" } : d, h = s.instanceId;
    this.sendMessageToCallMachine({ action: "daily-method-update-recording", layout: c, instanceId: h });
  } }, { key: "stopRecording", value: function() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.sendMessageToCallMachine(j({ action: "local-recording-stop" }, s));
  } }, { key: "startLiveStreaming", value: function() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.sendMessageToCallMachine(j({ action: "daily-method-start-live-streaming" }, s));
  } }, { key: "updateLiveStreaming", value: function(s) {
    var d = s.layout, c = d === void 0 ? { preset: "default" } : d, h = s.instanceId;
    this.sendMessageToCallMachine({ action: "daily-method-update-live-streaming", layout: c, instanceId: h });
  } }, { key: "addLiveStreamingEndpoints", value: function(s) {
    var d = s.endpoints, c = s.instanceId;
    this.sendMessageToCallMachine({ action: Zi, endpointsOp: Dl, endpoints: d, instanceId: c });
  } }, { key: "removeLiveStreamingEndpoints", value: function(s) {
    var d = s.endpoints, c = s.instanceId;
    this.sendMessageToCallMachine({ action: Zi, endpointsOp: jl, endpoints: d, instanceId: c });
  } }, { key: "stopLiveStreaming", value: function() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.sendMessageToCallMachine(j({ action: "daily-method-stop-live-streaming" }, s));
  } }, { key: "validateDailyConfig", value: function(s) {
    s.camSimulcastEncodings && (console.warn("camSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide camera simulcast settings."), this.validateSimulcastEncodings(s.camSimulcastEncodings)), s.screenSimulcastEncodings && console.warn("screenSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide screen simulcast settings."), oa() && s.noAutoDefaultDeviceChange && console.warn("noAutoDefaultDeviceChange is not supported on Android, and will be ignored.");
  } }, { key: "validateSimulcastEncodings", value: function(s) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, c = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    if (s) {
      if (!(s instanceof Array || Array.isArray(s))) throw new Error("encodings must be an Array");
      if (!Ms(s.length, 1, 3)) throw new Error("encodings must be an Array with between 1 to ".concat(3, " layers"));
      for (var h = 0; h < s.length; h++) {
        var m = s[h];
        for (var _ in this._validateEncodingLayerHasValidProperties(m), m) if (Rr.includes(_)) {
          if (typeof m[_] != "number") throw new Error("".concat(_, " must be a number"));
          if (d) {
            var C = d[_], A = C.min, I = C.max;
            if (!Ms(m[_], A, I)) throw new Error("".concat(_, " value not in range. valid range: ").concat(A, " to ").concat(I));
          }
        } else if (!["active", "scalabilityMode"].includes(_)) throw new Error("Invalid key ".concat(_, ", valid keys are:") + Object.values(Rr));
        if (c && !m.hasOwnProperty("maxBitrate")) throw new Error("maxBitrate is not specified");
      }
    }
  } }, { key: "startRemoteMediaPlayer", value: (M = N(function* (s) {
    var d = this, c = s.url, h = s.settings, m = h === void 0 ? { state: hn.PLAY } : h;
    try {
      (function(_) {
        if (typeof _ != "string") throw new Error('url parameter must be "string" type');
      })(c), As(m), function(_) {
        for (var C in _) if (!Es.includes(C)) throw new Error("Invalid key ".concat(C, ", valid keys are: ").concat(Es));
        _.simulcastEncodings && this.validateSimulcastEncodings(_.simulcastEncodings, va, !0);
      }(m);
    } catch (_) {
      throw console.error("invalid argument Error: ".concat(_)), console.error(`startRemoteMediaPlayer arguments must be of the form:
  { url: "playback url",
  settings?:
  {state: "play"|"pause", simulcastEncodings?: [{}] } }`), _;
    }
    return new Promise(function(_, C) {
      d.sendMessageToCallMachine({ action: "daily-method-start-remote-media-player", url: c, settings: m }, function(A) {
        A.error ? C({ error: A.error, errorMsg: A.errorMsg }) : _({ session_id: A.session_id, remoteMediaPlayerState: { state: A.state, settings: A.settings } });
      });
    });
  }), function(s) {
    return M.apply(this, arguments);
  }) }, { key: "stopRemoteMediaPlayer", value: (O = N(function* (s) {
    var d = this;
    if (typeof s != "string") throw new Error(" remotePlayerID must be of type string");
    return new Promise(function(c, h) {
      d.sendMessageToCallMachine({ action: "daily-method-stop-remote-media-player", session_id: s }, function(m) {
        m.error ? h({ error: m.error, errorMsg: m.errorMsg }) : c();
      });
    });
  }), function(s) {
    return O.apply(this, arguments);
  }) }, { key: "updateRemoteMediaPlayer", value: (y = N(function* (s) {
    var d = this, c = s.session_id, h = s.settings;
    try {
      As(h);
    } catch (m) {
      throw console.error("invalid argument Error: ".concat(m)), console.error(`updateRemoteMediaPlayer arguments must be of the form:
  session_id: "participant session",
  { settings?: {state: "play"|"pause"} }`), m;
    }
    return new Promise(function(m, _) {
      d.sendMessageToCallMachine({ action: "daily-method-update-remote-media-player", session_id: c, settings: h }, function(C) {
        C.error ? _({ error: C.error, errorMsg: C.errorMsg }) : m({ session_id: C.session_id, remoteMediaPlayerState: { state: C.state, settings: C.settings } });
      });
    });
  }), function(s) {
    return y.apply(this, arguments);
  }) }, { key: "startTranscription", value: function(s) {
    Q(this._callState, "startTranscription()"), this.sendMessageToCallMachine(j({ action: "daily-method-start-transcription" }, s));
  } }, { key: "updateTranscription", value: function(s) {
    if (Q(this._callState, "updateTranscription()"), !s) throw new Error("updateTranscription Error: options is mandatory");
    if (B(s) !== "object") throw new Error("updateTranscription Error: options must be object type");
    if (s.participants && !Array.isArray(s.participants)) throw new Error("updateTranscription Error: participants must be an array");
    this.sendMessageToCallMachine(j({ action: "daily-method-update-transcription" }, s));
  } }, { key: "stopTranscription", value: function(s) {
    if (Q(this._callState, "stopTranscription()"), s && B(s) !== "object") throw new Error("stopTranscription Error: options must be object type");
    if (s && !s.instanceId) throw new Error('"instanceId" not provided');
    this.sendMessageToCallMachine(j({ action: "daily-method-stop-transcription" }, s));
  } }, { key: "startDialOut", value: (b = N(function* (s) {
    var d = this;
    Q(this._callState, "startDialOut()");
    var c = function(C) {
      if (C) {
        if (!Array.isArray(C)) throw new Error("Error starting dial out: audio codec must be an array");
        if (C.length <= 0) throw new Error("Error starting dial out: audio codec array specified but empty");
        C.forEach(function(A) {
          if (typeof A != "string") throw new Error("Error starting dial out: audio codec must be a string");
          if (A !== "OPUS" && A !== "PCMU" && A !== "PCMA" && A !== "G722") throw new Error("Error starting dial out: audio codec must be one of OPUS, PCMU, PCMA, G722");
        });
      }
    };
    if (!s.sipUri && !s.phoneNumber) throw new Error("Error starting dial out: either a sip uri or phone number must be provided");
    if (s.sipUri && s.phoneNumber) throw new Error("Error starting dial out: only one of sip uri or phone number must be provided");
    if (s.sipUri) {
      if (typeof s.sipUri != "string") throw new Error("Error starting dial out: sipUri must be a string");
      if (!s.sipUri.startsWith("sip:")) throw new Error("Error starting dial out: Invalid SIP URI, must start with 'sip:'");
      if (s.video && typeof s.video != "boolean") throw new Error("Error starting dial out: video must be a boolean value");
      (function(C) {
        if (C && (c(C.audio), C.video)) {
          if (!Array.isArray(C.video)) throw new Error("Error starting dial out: video codec must be an array");
          if (C.video.length <= 0) throw new Error("Error starting dial out: video codec array specified but empty");
          C.video.forEach(function(A) {
            if (typeof A != "string") throw new Error("Error starting dial out: video codec must be a string");
            if (A !== "H264" && A !== "VP8") throw new Error("Error starting dial out: video codec must be H264 or VP8");
          });
        }
      })(s.codecs);
    }
    if (s.phoneNumber) {
      if (typeof s.phoneNumber != "string") throw new Error("Error starting dial out: phoneNumber must be a string");
      if (!/^\+\d{1,}$/.test(s.phoneNumber)) throw new Error("Error starting dial out: Invalid phone number, must be valid phone number as per E.164");
      s.codecs && c(s.codecs.audio);
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
    if (Ts(s), s.permissions && s.permissions.canReceive) {
      var h = se(ma.validateJSONObject(s.permissions.canReceive), 2), m = h[0], _ = h[1];
      if (!m) throw new Error(_);
    }
    if (s.provider) {
      if (s.provider !== "daily") throw new Error("Error: provider can be set only to 'daily', got: ".concat(s.provider));
      if (s.phoneNumber) throw new Error("Error starting dial out: provider valid only for sipUri, not phoneNumber");
      console.warn("(pre-beta) provider=daily is currently in pre-beta, things might break!");
    }
    return new Promise(function(C, A) {
      d.sendMessageToCallMachine(j({ action: "dialout-start" }, s), function(I) {
        I.error ? A(I.error) : C(I);
      });
    });
  }), function(s) {
    return b.apply(this, arguments);
  }) }, { key: "stopDialOut", value: function(s) {
    var d = this;
    return Q(this._callState, "stopDialOut()"), new Promise(function(c, h) {
      d.sendMessageToCallMachine(j({ action: "dialout-stop" }, s), function(m) {
        m.error ? h(m.error) : c(m);
      });
    });
  } }, { key: "sipCallTransfer", value: (g = N(function* (s) {
    var d = this;
    if (Q(this._callState, "sipCallTransfer()"), !s) throw new Error("sipCallTransfer() requires a sessionId and toEndPoint");
    return s.useSipRefer = !1, Os(s, "sipCallTransfer"), Ts(s), new Promise(function(c, h) {
      d.sendMessageToCallMachine(j({ action: es }, s), function(m) {
        m.error ? h(m.error) : c(m);
      });
    });
  }), function(s) {
    return g.apply(this, arguments);
  }) }, { key: "sipRefer", value: (S = N(function* (s) {
    var d = this;
    if (Q(this._callState, "sipRefer()"), !s) throw new Error("sessionId and toEndPoint are mandatory parameter");
    return s.useSipRefer = !0, Os(s, "sipRefer"), new Promise(function(c, h) {
      d.sendMessageToCallMachine(j({ action: es }, s), function(m) {
        m.error ? h(m.error) : c(m);
      });
    });
  }), function(s) {
    return S.apply(this, arguments);
  }) }, { key: "sendDTMF", value: (T = N(function* (s) {
    var d = this;
    return Q(this._callState, "sendDTMF()"), function(c) {
      var h = c.sessionId, m = c.tones;
      if (!h || !m) throw new Error("sessionId and tones are mandatory parameter");
      if (typeof h != "string" || typeof m != "string") throw new Error("sessionId and tones should be of string type");
      if (m.length > 20) throw new Error("tones string must be upto 20 characters");
      var _ = /[^0-9A-D*#]/g, C = m.match(_);
      if (C && C[0]) throw new Error("".concat(C[0], " is not valid DTMF tone"));
    }(s), new Promise(function(c, h) {
      d.sendMessageToCallMachine(j({ action: "send-dtmf" }, s), function(m) {
        m.error ? h(m.error) : c(m);
      });
    });
  }), function(s) {
    return T.apply(this, arguments);
  }) }, { key: "getNetworkStats", value: function() {
    var s = this;
    return this._callState !== qe ? Promise.resolve(j({ stats: { latest: {} } }, this._network)) : new Promise(function(d) {
      s.sendMessageToCallMachine({ action: "get-calc-stats" }, function(c) {
        d(j(j({}, s._network), {}, { stats: c.stats }));
      });
    });
  } }, { key: "testWebsocketConnectivity", value: (k = N(function* () {
    var s = this;
    if (Fr(this._testCallInProgress, "testWebsocketConnectivity()"), this.needsLoad()) try {
      yield this.load();
    } catch (d) {
      return Promise.reject(d);
    }
    return new Promise(function(d, c) {
      s.sendMessageToCallMachine({ action: "test-websocket-connectivity" }, function(h) {
        h.error ? c(h.error) : d(h.results);
      });
    });
  }), function() {
    return k.apply(this, arguments);
  }) }, { key: "abortTestWebsocketConnectivity", value: function() {
    this.sendMessageToCallMachine({ action: "abort-test-websocket-connectivity" });
  } }, { key: "_validateVideoTrackForNetworkTests", value: function(s) {
    return s ? s instanceof MediaStreamTrack ? !!tu(s) || (console.error("Video track is not playable. This test needs a live video track."), !1) : (console.error("Video track needs to be of type `MediaStreamTrack`."), !1) : (console.error("Missing video track. You must provide a video track in order to run this test."), !1);
  } }, { key: "testCallQuality", value: (v = N(function* () {
    var s = this;
    $(), _e(this._callObjectMode, "testCallQuality()"), zt(this._callMachineInitialized, "testCallQuality()", null, !0), xr(this._callState, this._isPreparingToJoin, "testCallQuality()");
    var d = this._testCallAlreadyInProgress, c = function(m) {
      d || (s._testCallInProgress = m);
    };
    if (c(!0), this.needsLoad()) try {
      var h = this._callState;
      yield this.load(), this._callState = h;
    } catch (m) {
      return c(!1), Promise.reject(m);
    }
    return new Promise(function(m) {
      s.sendMessageToCallMachine({ action: "test-call-quality", dailyJsVersion: s.properties.dailyJsVersion }, function(_) {
        var C = _.results, A = C.result, I = Bn(C, iu);
        if (A === "failed") {
          var V, J = j({}, I);
          (V = I.error) !== null && V !== void 0 && V.details ? (I.error.details = JSON.parse(I.error.details), J.error = j(j({}, J.error), {}, { details: j({}, J.error.details) }), J.error.details.duringTest = "testCallQuality") : (J.error = J.error ? j({}, J.error) : {}, J.error.details = { duringTest: "testCallQuality" }), s._maybeSendToSentry(J);
        }
        c(!1), m(j({ result: A }, I));
      });
    });
  }), function() {
    return v.apply(this, arguments);
  }) }, { key: "stopTestCallQuality", value: function() {
    this.sendMessageToCallMachine({ action: "stop-test-call-quality" });
  } }, { key: "testConnectionQuality", value: (f = N(function* (s) {
    var d;
    U() ? (console.warn("testConnectionQuality() is deprecated: use testPeerToPeerCallQuality() instead"), d = yield this.testPeerToPeerCallQuality(s)) : (console.warn("testConnectionQuality() is deprecated: use testCallQuality() instead"), d = yield this.testCallQuality());
    var c = { result: d.result, secondsElapsed: d.secondsElapsed };
    return d.data && (c.data = { maxRTT: d.data.maxRoundTripTime, packetLoss: d.data.avgRecvPacketLoss }), c;
  }), function(s) {
    return f.apply(this, arguments);
  }) }, { key: "testPeerToPeerCallQuality", value: (p = N(function* (s) {
    var d = this;
    if (Fr(this._testCallInProgress, "testPeerToPeerCallQuality()"), this.needsLoad()) try {
      yield this.load();
    } catch (m) {
      return Promise.reject(m);
    }
    var c = s.videoTrack, h = s.duration;
    if (!this._validateVideoTrackForNetworkTests(c)) throw new Error("Video track error");
    return this._sharedTracks.videoTrackForConnectionQualityTest = c, new Promise(function(m, _) {
      d.sendMessageToCallMachine({ action: "test-p2p-call-quality", duration: h }, function(C) {
        C.error ? _(C.error) : m(C.results);
      });
    });
  }), function(s) {
    return p.apply(this, arguments);
  }) }, { key: "stopTestConnectionQuality", value: function() {
    U() ? (console.warn("stopTestConnectionQuality() is deprecated: use testPeerToPeerCallQuality() and stopTestPeerToPeerCallQuality() instead"), this.stopTestPeerToPeerCallQuality()) : (console.warn("stopTestConnectionQuality() is deprecated: use testCallQuality() and stopTestCallQuality() instead"), this.stopTestCallQuality());
  } }, { key: "stopTestPeerToPeerCallQuality", value: function() {
    this.sendMessageToCallMachine({ action: "stop-test-p2p-call-quality" });
  } }, { key: "testNetworkConnectivity", value: (u = N(function* (s) {
    var d = this;
    if (Fr(this._testCallInProgress, "testNetworkConnectivity()"), this.needsLoad()) try {
      yield this.load();
    } catch (c) {
      return Promise.reject(c);
    }
    if (!this._validateVideoTrackForNetworkTests(s)) throw new Error("Video track error");
    return this._sharedTracks.videoTrackForNetworkConnectivityTest = s, new Promise(function(c, h) {
      d.sendMessageToCallMachine({ action: "test-network-connectivity" }, function(m) {
        m.error ? h(m.error) : c(m.results);
      });
    });
  }), function(s) {
    return u.apply(this, arguments);
  }) }, { key: "abortTestNetworkConnectivity", value: function() {
    this.sendMessageToCallMachine({ action: "abort-test-network-connectivity" });
  } }, { key: "getCpuLoadStats", value: function() {
    var s = this;
    return new Promise(function(d) {
      s._callState === qe ? s.sendMessageToCallMachine({ action: "get-cpu-load-stats" }, function(c) {
        d(c.cpuStats);
      }) : d({ cpuLoadState: void 0, cpuLoadStateReason: void 0, stats: {} });
    });
  } }, { key: "_validateEncodingLayerHasValidProperties", value: function(s) {
    var d;
    if (!(((d = Object.keys(s)) === null || d === void 0 ? void 0 : d.length) > 0)) throw new Error("Empty encoding is not allowed. At least one of these valid keys should be specified:" + Object.values(Rr));
  } }, { key: "_validateVideoSendSettings", value: function(s, d) {
    var c = s === "screenVideo" ? ["default-screen-video", "detail-optimized", "motion-optimized", "motion-and-detail-balanced"] : ["default-video", "bandwidth-optimized", "bandwidth-and-quality-balanced", "quality-optimized", "adaptive-2-layers", "adaptive-3-layers"], h = "Video send settings should be either an object or one of the supported presets: ".concat(c.join());
    if (typeof d == "string") {
      if (!c.includes(d)) throw new Error(h);
    } else {
      if (B(d) !== "object") throw new Error(h);
      if (!d.maxQuality && !d.encodings && d.allowAdaptiveLayers === void 0) throw new Error("Video send settings must contain at least maxQuality, allowAdaptiveLayers or encodings attribute");
      if (d.maxQuality && ["low", "medium", "high"].indexOf(d.maxQuality) === -1) throw new Error("maxQuality must be either low, medium or high");
      if (d.encodings) {
        var m = !1;
        switch (Object.keys(d.encodings).length) {
          case 1:
            m = !d.encodings.low;
            break;
          case 2:
            m = !d.encodings.low || !d.encodings.medium;
            break;
          case 3:
            m = !d.encodings.low || !d.encodings.medium || !d.encodings.high;
            break;
          default:
            m = !0;
        }
        if (m) throw new Error("Encodings must be defined as: low, low and medium, or low, medium and high.");
        d.encodings.low && this._validateEncodingLayerHasValidProperties(d.encodings.low), d.encodings.medium && this._validateEncodingLayerHasValidProperties(d.encodings.medium), d.encodings.high && this._validateEncodingLayerHasValidProperties(d.encodings.high);
      }
    }
  } }, { key: "validateUpdateSendSettings", value: function(s) {
    var d = this;
    if (!s || Object.keys(s).length === 0) throw new Error("Send settings must contain at least information for one track!");
    Object.entries(s).forEach(function(c) {
      var h = se(c, 2), m = h[0], _ = h[1];
      d._validateVideoSendSettings(m, _);
    });
  } }, { key: "updateSendSettings", value: function(s) {
    var d = this;
    return this.validateUpdateSendSettings(s), this.needsLoad() ? (this._preloadCache.sendSettings = s, { sendSettings: this._preloadCache.sendSettings }) : new Promise(function(c, h) {
      d.sendMessageToCallMachine({ action: "update-send-settings", sendSettings: s }, function(m) {
        m.error ? h(m.error) : c(m.sendSettings);
      });
    });
  } }, { key: "getSendSettings", value: function() {
    return this._sendSettings || this._preloadCache.sendSettings;
  } }, { key: "getLocalAudioLevel", value: function() {
    return this._localAudioLevel;
  } }, { key: "getRemoteParticipantsAudioLevel", value: function() {
    return this._remoteParticipantsAudioLevel;
  } }, { key: "getActiveSpeaker", value: function() {
    return $(), this._activeSpeaker;
  } }, { key: "setActiveSpeakerMode", value: function(s) {
    return $(), this.sendMessageToCallMachine({ action: "set-active-speaker-mode", enabled: s }), this;
  } }, { key: "activeSpeakerMode", value: function() {
    return $(), this._activeSpeakerMode;
  } }, { key: "subscribeToTracksAutomatically", value: function() {
    return this._preloadCache.subscribeToTracksAutomatically;
  } }, { key: "setSubscribeToTracksAutomatically", value: function(s) {
    return Q(this._callState, "setSubscribeToTracksAutomatically()", "Use the subscribeToTracksAutomatically configuration property."), this._preloadCache.subscribeToTracksAutomatically = s, this.sendMessageToCallMachine({ action: "daily-method-subscribe-to-tracks-automatically", enabled: s }), this;
  } }, { key: "enumerateDevices", value: (l = N(function* () {
    var s = this;
    if (this._callObjectMode) {
      var d = yield navigator.mediaDevices.enumerateDevices();
      return nt() === "Firefox" && cr().major > 115 && cr().major < 123 && (d = d.filter(function(c) {
        return c.kind !== "audiooutput";
      })), { devices: d.map(function(c) {
        var h = JSON.parse(JSON.stringify(c));
        if (!U() && c.kind === "videoinput" && c.getCapabilities) {
          var m, _ = c.getCapabilities();
          h.facing = (_ == null || (m = _.facingMode) === null || m === void 0 ? void 0 : m.length) >= 1 ? _.facingMode[0] : void 0;
        }
        return h;
      }) };
    }
    return new Promise(function(c) {
      s.sendMessageToCallMachine({ action: "enumerate-devices" }, function(h) {
        c({ devices: h.devices });
      });
    });
  }), function() {
    return l.apply(this, arguments);
  }) }, { key: "sendAppMessage", value: function(s) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "*";
    if (Q(this._callState, "sendAppMessage()"), JSON.stringify(s).length > this._maxAppMessageSize) throw new Error("Message data too large. Max size is " + this._maxAppMessageSize);
    return this.sendMessageToCallMachine({ action: "app-msg", data: s, to: d }), this;
  } }, { key: "addFakeParticipant", value: function(s) {
    return $(), Q(this._callState, "addFakeParticipant()"), this.sendMessageToCallMachine(j({ action: "add-fake-participant" }, s)), this;
  } }, { key: "setShowNamesMode", value: function(s) {
    return ue(this._callObjectMode, "setShowNamesMode()"), $(), s && s !== "always" && s !== "never" ? (console.error('setShowNamesMode argument should be "always", "never", or false'), this) : (this.sendMessageToCallMachine({ action: "set-show-names", mode: s }), this);
  } }, { key: "setShowLocalVideo", value: function() {
    var s = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
    return ue(this._callObjectMode, "setShowLocalVideo()"), $(), Q(this._callState, "setShowLocalVideo()"), typeof s != "boolean" ? (console.error("setShowLocalVideo only accepts a boolean value"), this) : (this.sendMessageToCallMachine({ action: "set-show-local-video", show: s }), this._showLocalVideo = s, this);
  } }, { key: "showLocalVideo", value: function() {
    return ue(this._callObjectMode, "showLocalVideo()"), $(), this._showLocalVideo;
  } }, { key: "setShowParticipantsBar", value: function() {
    var s = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
    return ue(this._callObjectMode, "setShowParticipantsBar()"), $(), Q(this._callState, "setShowParticipantsBar()"), typeof s != "boolean" ? (console.error("setShowParticipantsBar only accepts a boolean value"), this) : (this.sendMessageToCallMachine({ action: "set-show-participants-bar", show: s }), this._showParticipantsBar = s, this);
  } }, { key: "showParticipantsBar", value: function() {
    return ue(this._callObjectMode, "showParticipantsBar()"), $(), this._showParticipantsBar;
  } }, { key: "customIntegrations", value: function() {
    return $(), ue(this._callObjectMode, "customIntegrations()"), this._customIntegrations;
  } }, { key: "setCustomIntegrations", value: function(s) {
    return $(), ue(this._callObjectMode, "setCustomIntegrations()"), Q(this._callState, "setCustomIntegrations()"), Ta(s) ? (this.sendMessageToCallMachine({ action: "set-custom-integrations", integrations: s }), this._customIntegrations = s, this) : this;
  } }, { key: "startCustomIntegrations", value: function(s) {
    var d = this;
    if ($(), ue(this._callObjectMode, "startCustomIntegrations()"), Q(this._callState, "startCustomIntegrations()"), Array.isArray(s) && s.some(function(m) {
      return typeof m != "string";
    }) || !Array.isArray(s) && typeof s != "string") return console.error("startCustomIntegrations() only accepts string | string[]"), this;
    var c = typeof s == "string" ? [s] : s, h = c.filter(function(m) {
      return !(m in d._customIntegrations);
    });
    return h.length ? (console.error(`Can't find custom integration(s): "`.concat(h.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "start-custom-integrations", ids: c }), this);
  } }, { key: "stopCustomIntegrations", value: function(s) {
    var d = this;
    if ($(), ue(this._callObjectMode, "stopCustomIntegrations()"), Q(this._callState, "stopCustomIntegrations()"), Array.isArray(s) && s.some(function(m) {
      return typeof m != "string";
    }) || !Array.isArray(s) && typeof s != "string") return console.error("stopCustomIntegrations() only accepts string | string[]"), this;
    var c = typeof s == "string" ? [s] : s, h = c.filter(function(m) {
      return !(m in d._customIntegrations);
    });
    return h.length ? (console.error(`Can't find custom integration(s): "`.concat(h.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "stop-custom-integrations", ids: c }), this);
  } }, { key: "customTrayButtons", value: function() {
    return ue(this._callObjectMode, "customTrayButtons()"), $(), this._customTrayButtons;
  } }, { key: "updateCustomTrayButtons", value: function(s) {
    return ue(this._callObjectMode, "updateCustomTrayButtons()"), $(), Q(this._callState, "updateCustomTrayButtons()"), ka(s) ? (this.sendMessageToCallMachine({ action: "update-custom-tray-buttons", btns: s }), this._customTrayButtons = s, this) : (console.error("updateCustomTrayButtons only accepts a dictionary of the type ".concat(JSON.stringify(ur))), this);
  } }, { key: "theme", value: function() {
    return ue(this._callObjectMode, "theme()"), this.properties.theme;
  } }, { key: "setTheme", value: function(s) {
    var d = this;
    return ue(this._callObjectMode, "setTheme()"), new Promise(function(c, h) {
      try {
        d.validateProperties({ theme: s }), d.properties.theme = j({}, s), d.sendMessageToCallMachine({ action: "set-theme", theme: d.properties.theme });
        try {
          d.emitDailyJSEvent({ action: co, theme: d.properties.theme });
        } catch (m) {
          console.log("could not emit 'theme-updated'", m);
        }
        c(d.properties.theme);
      } catch (m) {
        h(m);
      }
    });
  } }, { key: "requestFullscreen", value: (a = N(function* () {
    if ($(), this._iframe && !document.fullscreenElement && ts()) try {
      (yield this._iframe.requestFullscreen) ? this._iframe.requestFullscreen() : this._iframe.webkitRequestFullscreen();
    } catch (s) {
      console.log("could not make video call fullscreen", s);
    }
  }), function() {
    return a.apply(this, arguments);
  }) }, { key: "exitFullscreen", value: function() {
    $(), document.fullscreenElement ? document.exitFullscreen() : document.webkitFullscreenElement && document.webkitExitFullscreen();
  } }, { key: "getSidebarView", value: (o = N(function* () {
    var s = this;
    return this._callObjectMode ? (console.error("getSidebarView is not available in callObject mode"), Promise.resolve(null)) : new Promise(function(d) {
      s.sendMessageToCallMachine({ action: "get-sidebar-view" }, function(c) {
        d(c.view);
      });
    });
  }), function() {
    return o.apply(this, arguments);
  }) }, { key: "setSidebarView", value: function(s) {
    return this._callObjectMode ? (console.error("setSidebarView is not available in callObject mode"), this) : (this.sendMessageToCallMachine({ action: "set-sidebar-view", view: s }), this);
  } }, { key: "room", value: (i = N(function* () {
    var s = this, d = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).includeRoomConfigDefaults, c = d === void 0 || d;
    return this._accessState.access === Kt || this.needsLoad() ? this.properties.url ? { roomUrlPendingJoin: this.properties.url } : null : new Promise(function(h) {
      s.sendMessageToCallMachine({ action: "lib-room-info", includeRoomConfigDefaults: c }, function(m) {
        delete m.action, delete m.callbackStamp, h(m);
      });
    });
  }), function() {
    return i.apply(this, arguments);
  }) }, { key: "geo", value: (n = N(function* () {
    try {
      var s = yield fetch("https://gs.daily.co/_ks_/x-swsl/:");
      return { current: (yield s.json()).geo };
    } catch (d) {
      return console.error("geo lookup failed", d), { current: "" };
    }
  }), function() {
    return n.apply(this, arguments);
  }) }, { key: "setNetworkTopology", value: (t = N(function* (s) {
    var d = this;
    return $(), Q(this._callState, "setNetworkTopology()"), new Promise(function(c, h) {
      d.sendMessageToCallMachine({ action: "set-network-topology", opts: s }, function(m) {
        m.error ? h({ error: m.error }) : c({ workerId: m.workerId });
      });
    });
  }), function(s) {
    return t.apply(this, arguments);
  }) }, { key: "getNetworkTopology", value: (e = N(function* () {
    var s = this;
    return new Promise(function(d, c) {
      s.needsLoad() && d({ topology: "none" }), s.sendMessageToCallMachine({ action: "get-network-topology" }, function(h) {
        h.error ? c({ error: h.error }) : d({ topology: h.topology });
      });
    });
  }), function() {
    return e.apply(this, arguments);
  }) }, { key: "setPlayNewParticipantSound", value: function(s) {
    if ($(), typeof s != "number" && s !== !0 && s !== !1) throw new Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(s));
    this.sendMessageToCallMachine({ action: "daily-method-set-play-ding", arg: s });
  } }, { key: "on", value: function(s, d) {
    return xt.prototype.on.call(this, s, d);
  } }, { key: "once", value: function(s, d) {
    return xt.prototype.once.call(this, s, d);
  } }, { key: "off", value: function(s, d) {
    return xt.prototype.off.call(this, s, d);
  } }, { key: "validateProperties", value: function(s) {
    var d, c;
    if (s != null && (d = s.dailyConfig) !== null && d !== void 0 && d.userMediaAudioConstraints) {
      var h, m;
      U() || console.warn("userMediaAudioConstraints is deprecated. You can override constraints with inputSettings.audio.settings, found in DailyCallOptions.");
      var _ = s.inputSettings || {};
      _.audio = ((h = s.inputSettings) === null || h === void 0 ? void 0 : h.audio) || {}, _.audio.settings = ((m = s.inputSettings) === null || m === void 0 || (m = m.audio) === null || m === void 0 ? void 0 : m.settings) || {}, _.audio.settings = j(j({}, _.audio.settings), s.dailyConfig.userMediaAudioConstraints), s.inputSettings = _, delete s.dailyConfig.userMediaAudioConstraints;
    }
    if (s != null && (c = s.dailyConfig) !== null && c !== void 0 && c.userMediaVideoConstraints) {
      var C, A;
      U() || console.warn("userMediaVideoConstraints is deprecated. You can override constraints with inputSettings.video.settings, found in DailyCallOptions.");
      var I = s.inputSettings || {};
      I.video = ((C = s.inputSettings) === null || C === void 0 ? void 0 : C.video) || {}, I.video.settings = ((A = s.inputSettings) === null || A === void 0 || (A = A.video) === null || A === void 0 ? void 0 : A.settings) || {}, I.video.settings = j(j({}, I.video.settings), s.dailyConfig.userMediaVideoConstraints), s.inputSettings = I, delete s.dailyConfig.userMediaVideoConstraints;
    }
    for (var V in s) if (ze[V]) {
      if (ze[V].validate && !ze[V].validate(s[V], this)) throw new Error("property '".concat(V, "': ").concat(ze[V].help));
    } else console.warn("Ignoring unrecognized property '".concat(V, "'")), delete s[V];
  } }, { key: "assembleMeetingUrl", value: function() {
    var s, d, c = j(j({}, this.properties), {}, { emb: this.callClientId, embHref: encodeURIComponent(window.location.href), proxy: (s = this.properties.dailyConfig) !== null && s !== void 0 && s.proxyUrl ? encodeURIComponent((d = this.properties.dailyConfig) === null || d === void 0 ? void 0 : d.proxyUrl) : void 0 }), h = c.url.match(/\?/) ? "&" : "?";
    return c.url + h + Object.keys(ze).filter(function(m) {
      return ze[m].queryString && c[m] !== void 0;
    }).map(function(m) {
      return "".concat(ze[m].queryString, "=").concat(c[m]);
    }).join("&");
  } }, { key: "needsLoad", value: function() {
    return [sn, Hi, xe, Me].includes(this._callState);
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
      case oo:
        this.sendMessageToCallMachine(j({ action: ao }, this.properties));
        break;
      case "call-machine-initialized":
        this._callMachineInitialized = !0;
        var d = { action: Gt, level: "log", code: 1011, stats: { event: "bundle load", time: this._bundleLoadTime === "no-op" ? 0 : this._bundleLoadTime, preLoaded: this._bundleLoadTime === "no-op", url: tr(this.properties.dailyConfig) } };
        this.sendMessageToCallMachine(d), this._delayDuplicateInstanceLog && this._logDuplicateInstanceAttempt();
        break;
      case an:
        this._loadedCallback && (this._loadedCallback(), this._loadedCallback = null), this.emitDailyJSEvent(s);
        break;
      case mo:
        var c, h = j({}, s);
        delete h.internal, this._maxAppMessageSize = ((c = s.internal) === null || c === void 0 ? void 0 : c._maxAppMessageSize) || Pr, this._joinedCallback && (this._joinedCallback(s.participants), this._joinedCallback = null), this.emitDailyJSEvent(h);
        break;
      case vo:
      case yo:
        if (this._callState === xe) return;
        if (s.participant && s.participant.session_id) {
          var m = s.participant.local ? "local" : s.participant.session_id;
          if (this._callObjectMode) {
            var _ = this._callMachine().store;
            cs(s.participant, _), ls(s.participant, _), us(s.participant, this._participants[m], _);
          }
          try {
            this.maybeParticipantTracksStopped(this._participants[m], s.participant), this.maybeParticipantTracksStarted(this._participants[m], s.participant), this.maybeEventRecordingStopped(this._participants[m], s.participant), this.maybeEventRecordingStarted(this._participants[m], s.participant);
          } catch (Fa) {
            console.error("track events error", Fa);
          }
          this.compareEqualForParticipantUpdateEvent(s.participant, this._participants[m]) || (this._participants[m] = j({}, s.participant), this.toggleParticipantAudioBasedOnNativeAudioFocus(), this.emitDailyJSEvent(s));
        }
        break;
      case bo:
        if (s.participant && s.participant.session_id) {
          var C = this._participants[s.participant.session_id];
          C && this.maybeParticipantTracksStopped(C, null), delete this._participants[s.participant.session_id], this.emitDailyJSEvent(s);
        }
        break;
      case _o:
        ce(this._participantCounts, s.participantCounts) || (this._participantCounts = s.participantCounts, this.emitDailyJSEvent(s));
        break;
      case So:
        var A = { access: s.access };
        s.awaitingAccess && (A.awaitingAccess = s.awaitingAccess), ce(this._accessState, A) || (this._accessState = A, this.emitDailyJSEvent(s));
        break;
      case wo:
        if (s.meetingSession) {
          this._meetingSessionSummary = s.meetingSession, this.emitDailyJSEvent(s);
          var I = j(j({}, s), {}, { action: "meeting-session-updated" });
          this.emitDailyJSEvent(I);
        }
        break;
      case pn:
        var V;
        this._iframe && !s.preserveIframe && (this._iframe.src = ""), this._updateCallState(Me), this.resetMeetingDependentVars(), this._loadedCallback && (this._loadedCallback(s.errorMsg), this._loadedCallback = null), s.preserveIframe;
        var J = Bn(s, su);
        J != null && (V = J.error) !== null && V !== void 0 && V.details && (J.error.details = JSON.parse(J.error.details)), this._maybeSendToSentry(s), this._joinedCallback && (this._joinedCallback(null, J), this._joinedCallback = null), this.emitDailyJSEvent(J);
        break;
      case go:
        this._callState !== Me && this._updateCallState(xe), this.resetMeetingDependentVars(), this._resolveLeave && (this._resolveLeave(), this._resolveLeave = null), this.emitDailyJSEvent(s);
        break;
      case "selected-devices-updated":
        s.devices && this.emitDailyJSEvent(s);
        break;
      case Yo:
        var Te = s.state, Be = s.threshold, yt = s.quality, te = Te.state, me = Te.reasons;
        te === this._network.networkState && ce(me, this._network.networkStateReasons) && Be === this._network.threshold && yt === this._network.quality || (this._network.networkState = te, this._network.networkStateReasons = me, this._network.quality = yt, this._network.threshold = Be, s.networkState = te, me.length && (s.networkStateReasons = me), delete s.state, this.emitDailyJSEvent(s));
        break;
      case zo:
        s && s.cpuLoadState && this.emitDailyJSEvent(s);
        break;
      case Ho:
        s && s.faceCounts !== void 0 && this.emitDailyJSEvent(s);
        break;
      case Bo:
        var Ge = s.activeSpeaker;
        this._activeSpeaker.peerId !== Ge.peerId && (this._activeSpeaker.peerId = Ge.peerId, this.emitDailyJSEvent({ action: s.action, activeSpeaker: this._activeSpeaker }));
        break;
      case "show-local-video-changed":
        if (this._callObjectMode) return;
        var bt = s.show;
        this._showLocalVideo = bt, this.emitDailyJSEvent({ action: s.action, show: bt });
        break;
      case Go:
        var Nt = s.enabled;
        this._activeSpeakerMode !== Nt && (this._activeSpeakerMode = Nt, this.emitDailyJSEvent({ action: s.action, enabled: this._activeSpeakerMode }));
        break;
      case ko:
      case To:
      case Co:
        this._waitingParticipants = s.allWaitingParticipants, this.emitDailyJSEvent({ action: s.action, participant: s.participant });
        break;
      case ta:
        ce(this._receiveSettings, s.receiveSettings) || (this._receiveSettings = s.receiveSettings, this.emitDailyJSEvent({ action: s.action, receiveSettings: s.receiveSettings }));
        break;
      case un:
        this._maybeUpdateInputSettings(s.inputSettings);
        break;
      case "send-settings-updated":
        ce(this._sendSettings, s.sendSettings) || (this._sendSettings = s.sendSettings, this._preloadCache.sendSettings = null, this.emitDailyJSEvent({ action: s.action, sendSettings: s.sendSettings }));
        break;
      case "local-audio-level":
        this._localAudioLevel = s.audioLevel, this._preloadCache.localAudioLevelObserver = null, this.emitDailyJSEvent(s);
        break;
      case "remote-participants-audio-level":
        this._remoteParticipantsAudioLevel = s.participantsAudioLevel, this._preloadCache.remoteParticipantsAudioLevelObserver = null, this.emitDailyJSEvent(s);
        break;
      case Fo:
        var _t = s.session_id;
        this._rmpPlayerState[_t] = s.playerState, this.emitDailyJSEvent(s);
        break;
      case Vo:
        delete this._rmpPlayerState[s.session_id], this.emitDailyJSEvent(s);
        break;
      case qo:
        var St = s.session_id, Un = this._rmpPlayerState[St];
        Un && this.compareEqualForRMPUpdateEvent(Un, s.remoteMediaPlayerState) || (this._rmpPlayerState[St] = s.remoteMediaPlayerState, this.emitDailyJSEvent(s));
        break;
      case "custom-button-click":
      case "sidebar-view-changed":
      case "pip-started":
      case "pip-stopped":
        this.emitDailyJSEvent(s);
        break;
      case Eo:
        var xa = this._meetingSessionState.topology !== (s.meetingSessionState && s.meetingSessionState.topology);
        this._meetingSessionState = qr(s.meetingSessionState, this._callObjectMode), (this._callObjectMode || xa) && this.emitDailyJSEvent(s);
        break;
      case $o:
        this._isScreenSharing = !0, this.emitDailyJSEvent(s);
        break;
      case Uo:
      case Jo:
        this._isScreenSharing = !1, this.emitDailyJSEvent(s);
        break;
      case cn:
      case ln:
      case Do:
      case jo:
      case Lo:
      case Mo:
      case Po:
      case Io:
      case po:
      case ho:
      case Ro:
      case xo:
      case "test-completed":
      case Wo:
      case No:
      case Qo:
      case Ko:
      case Xo:
      case Zo:
      case dn:
      case ea:
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
    var c = "record";
    s && (d.local || d[c] !== !1 || s[c] === d[c] || this.emitDailyJSEvent({ action: ln }));
  } }, { key: "maybeEventRecordingStarted", value: function(s, d) {
    var c = "record";
    s && (d.local || d[c] !== !0 || s[c] === d[c] || this.emitDailyJSEvent({ action: cn }));
  } }, { key: "_trackStatePlayable", value: function(s) {
    return !(!s || s.state !== to);
  } }, { key: "_trackChanged", value: function(s, d) {
    return (s == null ? void 0 : s.id) !== (d == null ? void 0 : d.id);
  } }, { key: "maybeEventTrackStopped", value: function(s, d, c) {
    var h, m, _ = (h = d == null ? void 0 : d.tracks[s]) !== null && h !== void 0 ? h : null, C = (m = c == null ? void 0 : c.tracks[s]) !== null && m !== void 0 ? m : null, A = _ == null ? void 0 : _.track;
    if (A) {
      var I = this._trackStatePlayable(_), V = this._trackStatePlayable(C), J = this._trackChanged(A, C == null ? void 0 : C.track);
      I && (V && !J || this.emitDailyJSEvent({ action: Ao, track: A, participant: c ?? d, type: s }));
    }
  } }, { key: "maybeEventTrackStarted", value: function(s, d, c) {
    var h, m, _ = (h = d == null ? void 0 : d.tracks[s]) !== null && h !== void 0 ? h : null, C = (m = c == null ? void 0 : c.tracks[s]) !== null && m !== void 0 ? m : null, A = C == null ? void 0 : C.track;
    if (A) {
      var I = this._trackStatePlayable(_), V = this._trackStatePlayable(C), J = this._trackChanged(_ == null ? void 0 : _.track, A);
      V && (I && !J || this.emitDailyJSEvent({ action: Oo, track: A, participant: c, type: s }));
    }
  } }, { key: "maybeParticipantTracksStopped", value: function(s, d) {
    if (s) for (var c in s.tracks) this.maybeEventTrackStopped(c, s, d);
  } }, { key: "maybeParticipantTracksStarted", value: function(s, d) {
    if (d) for (var c in d.tracks) this.maybeEventTrackStarted(c, s, d);
  } }, { key: "compareEqualForRMPUpdateEvent", value: function(s, d) {
    var c, h;
    return s.state === d.state && ((c = s.settings) === null || c === void 0 ? void 0 : c.volume) === ((h = d.settings) === null || h === void 0 ? void 0 : h.volume);
  } }, { key: "emitDailyJSEvent", value: function(s) {
    try {
      s.callClientId = this.callClientId, this.emit(s.action, s);
    } catch (d) {
      console.log("could not emit", s, d);
    }
  } }, { key: "compareEqualForParticipantUpdateEvent", value: function(s, d) {
    return !!ce(s, d) && (!s.videoTrack || !d.videoTrack || s.videoTrack.id === d.videoTrack.id && s.videoTrack.muted === d.videoTrack.muted && s.videoTrack.enabled === d.videoTrack.enabled) && (!s.audioTrack || !d.audioTrack || s.audioTrack.id === d.audioTrack.id && s.audioTrack.muted === d.audioTrack.muted && s.audioTrack.enabled === d.audioTrack.enabled);
  } }, { key: "nativeUtils", value: function() {
    return U() ? typeof DailyNativeUtils > "u" ? (console.warn("in React Native, DailyNativeUtils is expected to be available"), null) : DailyNativeUtils : null;
  } }, { key: "updateIsPreparingToJoin", value: function(s) {
    this._updateCallState(this._callState, s);
  } }, { key: "_updateCallState", value: function(s) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._isPreparingToJoin;
    if (s !== this._callState || d !== this._isPreparingToJoin) {
      var c = this._callState, h = this._isPreparingToJoin;
      this._callState = s, this._isPreparingToJoin = d;
      var m = this._callState === qe;
      this.updateShowAndroidOngoingMeetingNotification(m);
      var _ = Zt(c, h), C = Zt(this._callState, this._isPreparingToJoin);
      _ !== C && (this.updateKeepDeviceAwake(C), this.updateDeviceAudioMode(C), this.updateNoOpRecordingEnsuringBackgroundContinuity(C));
    }
  } }, { key: "resetMeetingDependentVars", value: function() {
    this._participants = {}, this._participantCounts = ws, this._waitingParticipants = {}, this._activeSpeaker = {}, this._activeSpeakerMode = !1, this._didPreAuth = !1, this._accessState = { access: Kt }, this._finalSummaryOfPrevSession = this._meetingSessionSummary, this._meetingSessionSummary = {}, this._meetingSessionState = qr(Ss, this._callObjectMode), this._isScreenSharing = !1, this._receiveSettings = {}, this._inputSettings = void 0, this._sendSettings = {}, this._localAudioLevel = 0, this._isLocalAudioLevelObserverRunning = !1, this._remoteParticipantsAudioLevel = {}, this._isRemoteParticipantsAudioLevelObserverRunning = !1, this._maxAppMessageSize = Pr, this._callMachineInitialized = !1, this._bundleLoadTime = void 0, this._preloadCache;
  } }, { key: "updateKeepDeviceAwake", value: function(s) {
    U() && this.nativeUtils().setKeepDeviceAwake(s, this.callClientId);
  } }, { key: "updateDeviceAudioMode", value: function(s) {
    if (U() && !this.disableReactNativeAutoDeviceManagement("audio")) {
      var d = s ? this._nativeInCallAudioMode : "idle";
      this.nativeUtils().setAudioMode(d);
    }
  } }, { key: "updateShowAndroidOngoingMeetingNotification", value: function(s) {
    if (U() && this.nativeUtils().setShowOngoingMeetingNotification) {
      var d, c, h, m;
      if (this.properties.reactNativeConfig && this.properties.reactNativeConfig.androidInCallNotification) {
        var _ = this.properties.reactNativeConfig.androidInCallNotification;
        d = _.title, c = _.subtitle, h = _.iconName, m = _.disableForCustomOverride;
      }
      m && (s = !1), this.nativeUtils().setShowOngoingMeetingNotification(s, d, c, h, this.callClientId);
    }
  } }, { key: "updateNoOpRecordingEnsuringBackgroundContinuity", value: function(s) {
    U() && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(s);
  } }, { key: "toggleParticipantAudioBasedOnNativeAudioFocus", value: function() {
    var s;
    if (U()) {
      var d = (s = this._callMachine()) === null || s === void 0 || (s = s.store) === null || s === void 0 ? void 0 : s.getState();
      for (var c in d == null ? void 0 : d.streams) {
        var h = d.streams[c];
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
    var s = Object.values(We)[0];
    if (this.needsLoad())
      if (s && !s.needsLoad()) {
        var d = { action: Gt, level: "error", code: this.strictMode ? 9995 : 9997 };
        s.sendMessageToCallMachine(d);
      } else this.strictMode || console.error("You are are attempting to use a call instance that was previously destroyed, which is unsupported. Please remove `strictMode: false` from your constructor properties to enable strict mode to track down and fix this unsupported usage.");
    else {
      var c = { action: Gt, level: "error", code: this.strictMode ? 9995 : 9997 };
      this._messageChannel.sendMessageToCallMachine(c, null, this.callClientId, this._iframe);
    }
  } }, { key: "_logDuplicateInstanceAttempt", value: function() {
    for (var s = 0, d = Object.values(We); s < d.length; s++) {
      var c = d[s];
      c._callMachineInitialized ? (c.sendMessageToCallMachine({ action: Gt, level: "warn", code: this.allowMultipleCallInstances ? 9993 : 9992 }), c._delayDuplicateInstanceLog = !1) : c._delayDuplicateInstanceLog = !0;
    }
  } }, { key: "_maybeSendToSentry", value: function(s) {
    var d, c, h, m;
    if (!((d = s.error) !== null && d !== void 0 && d.type && (![so, io, on].includes(s.error.type) || s.error.type === on && s.error.msg.includes("deleted")))) {
      var _ = (c = this.properties) !== null && c !== void 0 && c.url ? new URL(this.properties.url) : void 0, C = "production";
      _ && _.host.includes(".staging.daily") && (C = "staging");
      var A, I, V, J, Te, Be = function(_t) {
        const St = [Ac(), Cc(), el(), Xc(), sl(), al(), Dc(), ol()];
        return _t.autoSessionTracking !== !1 && St.push(il()), St;
      }({}).filter(function(_t) {
        return !["BrowserApiErrors", "Breadcrumbs", "GlobalHandlers"].includes(_t.name);
      }), yt = new Vc({ dsn: "https://f10f1c81e5d44a4098416c0867a8b740@o77906.ingest.sentry.io/168844", transport: Gc, stackParser: Kc, integrations: Be, environment: C }), te = new Ue();
      if (te.setClient(yt), yt.init(), this.session_id && te.setExtra("sessionId", this.session_id), this.properties) {
        var me = j({}, this.properties);
        me.userName = me.userName ? "[Filtered]" : void 0, me.userData = me.userData ? "[Filtered]" : void 0, me.token = me.token ? "[Filtered]" : void 0, te.setExtra("properties", me);
      }
      if (_) {
        var Ge = _.searchParams.get("domain");
        if (!Ge) {
          var bt = _.host.match(/(.*?)\./);
          Ge = bt && bt[1] || "";
        }
        Ge && te.setTag("domain", Ge);
      }
      s.error && (te.setTag("fatalErrorType", s.error.type), te.setExtra("errorDetails", s.error.details), !((A = s.error.details) === null || A === void 0) && A.uri && te.setTag("serverAddress", s.error.details.uri), !((I = s.error.details) === null || I === void 0) && I.workerGroup && te.setTag("workerGroup", s.error.details.workerGroup), !((V = s.error.details) === null || V === void 0) && V.geoGroup && te.setTag("geoGroup", s.error.details.geoGroup), !((J = s.error.details) === null || J === void 0) && J.on && te.setTag("connectionAttempt", s.error.details.on), (Te = s.error.details) !== null && Te !== void 0 && Te.bundleUrl && (te.setTag("bundleUrl", s.error.details.bundleUrl), te.setTag("bundleError", s.error.details.sourceError.type))), te.setTags({ callMode: this._callObjectMode ? U() ? "reactNative" : (h = this.properties) !== null && h !== void 0 && (h = h.dailyConfig) !== null && h !== void 0 && (h = h.callMode) !== null && h !== void 0 && h.includes("prebuilt") ? this.properties.dailyConfig.callMode : "custom" : "prebuilt-frame", version: r.version() });
      var Nt = ((m = s.error) === null || m === void 0 ? void 0 : m.msg) || s.errorMsg;
      te.captureException(new Error(Nt));
    }
  } }, { key: "_callMachine", value: function() {
    var s;
    return (s = window._daily) === null || s === void 0 || (s = s.instances) === null || s === void 0 || (s = s[this.callClientId]) === null || s === void 0 ? void 0 : s.callMachine;
  } }, { key: "_maybeUpdateInputSettings", value: function(s) {
    if (!ce(this._inputSettings, s)) {
      var d = this._getInputSettings();
      this._inputSettings = s;
      var c = this._getInputSettings();
      ce(d, c) || this.emitDailyJSEvent({ action: un, inputSettings: c });
    }
  } }], [{ key: "supportedBrowser", value: function() {
    if (U()) return { supported: !0, mobile: !0, name: "React Native", version: null, supportsScreenShare: !0, supportsSfu: !0, supportsVideoProcessing: !1, supportsAudioProcessing: !1 };
    var s = za.getParser(be());
    return { supported: !!jr(), mobile: s.getPlatformType() === "mobile", name: s.getBrowserName(), version: s.getBrowserVersion(), supportsFullscreen: !!ts(), supportsScreenShare: !!Ll(), supportsSfu: !!jr(), supportsVideoProcessing: ia(), supportsAudioProcessing: sa() };
  } }, { key: "version", value: function() {
    return "0.85.0";
  } }, { key: "createCallObject", value: function() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return s.layout = "none", new r(null, s);
  } }, { key: "wrap", value: function(s) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if ($(), !s || !s.contentWindow || typeof s.src != "string") throw new Error("DailyIframe::Wrap needs an iframe-like first argument");
    return d.layout || (d.customLayout ? d.layout = "custom-v1" : d.layout = "browser"), new r(s, d);
  } }, { key: "createFrame", value: function(s, d) {
    var c, h;
    $(), s && d ? (c = s, h = d) : s && s.append ? (c = s, h = {}) : (c = document.body, h = s || {});
    var m = h.iframeStyle;
    m || (m = c === document.body ? { position: "fixed", border: "1px solid black", backgroundColor: "white", width: "375px", height: "450px", right: "1em", bottom: "1em" } : { border: 0, width: "100%", height: "100%" });
    var _ = document.createElement("iframe");
    window.navigator && window.navigator.userAgent.match(/Chrome\/61\./) ? _.allow = "microphone, camera" : _.allow = "microphone; camera; autoplay; display-capture; screen-wake-lock", _.style.visibility = "hidden", c.appendChild(_), _.style.visibility = null, Object.keys(m).forEach(function(C) {
      return _.style[C] = m[C];
    }), h.layout || (h.customLayout ? h.layout = "custom-v1" : h.layout = "browser");
    try {
      return new r(_, h);
    } catch (C) {
      throw c.removeChild(_), C;
    }
  } }, { key: "createTransparentFrame", value: function() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    $();
    var d = document.createElement("iframe");
    return d.allow = "microphone; camera; autoplay", d.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      pointer-events: none;
    `, document.body.appendChild(d), s.layout || (s.layout = "custom-v1"), r.wrap(d, s);
  } }, { key: "getCallInstance", value: function() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
    return s ? We[s] : Object.values(We)[0];
  } }]);
  var e, t, n, i, o, a, l, u, p, f, v, k, T, S, g, b, y, O, M, D, L, q, W, Z, fe, ke, w, F, G, ee, Je, Nn, Rn, xn, Fn, qn, Vn, $n;
}();
function Ts(r) {
  if (r.extension) {
    if (typeof r.extension != "string") throw new Error("Error starting dial out: extension must be a string");
    if (r.extension.length > 20) throw new Error("Error starting dial out: extension length must be less than or equal to 20");
  }
  if (r.waitBeforeExtensionDialSec) {
    if (typeof r.waitBeforeExtensionDialSec != "number") throw new Error("Error starting dial out: waitBeforeExtensionDialSec must be a number");
    if (r.waitBeforeExtensionDialSec > 60) throw new Error("Error starting dial out: waitBeforeExtensionDialSec must be less than or equal to 60");
    if (!r.extension) throw new Error("Error starting dial out: waitBeforeExtensionDialSec requires a phoneNumber and extension");
  }
}
function ot(r, e) {
  var t = {};
  for (var n in r) if (r[n] instanceof MediaStreamTrack) console.warn("MediaStreamTrack found in props or cache.", n), t[n] = je;
  else if (n === "dailyConfig") {
    if (r[n].modifyLocalSdpHook) {
      var i = window._daily.instances[e].customCallbacks || {};
      i.modifyLocalSdpHook = r[n].modifyLocalSdpHook, window._daily.instances[e].customCallbacks = i, delete r[n].modifyLocalSdpHook;
    }
    if (r[n].modifyRemoteSdpHook) {
      var o = window._daily.instances[e].customCallbacks || {};
      o.modifyRemoteSdpHook = r[n].modifyRemoteSdpHook, window._daily.instances[e].customCallbacks = o, delete r[n].modifyRemoteSdpHook;
    }
    t[n] = r[n];
  } else t[n] = r[n];
  return t;
}
function Q(r) {
  var e = arguments.length > 2 ? arguments[2] : void 0;
  if (r !== qe) {
    var t = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " only supported after join.");
    throw e && (t += " ".concat(e)), console.error(t), new Error(t);
  }
}
function Zt(r, e) {
  return [ar, qe].includes(r) || e;
}
function xr(r, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "This daily-js method", n = arguments.length > 3 ? arguments[3] : void 0;
  if (Zt(r, e)) {
    var i = "".concat(t, " not supported after joining a meeting.");
    throw n && (i += " ".concat(n)), console.error(i), new Error(i);
  }
}
function zt(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", t = arguments.length > 2 ? arguments[2] : void 0;
  if (!r) {
    var n = "".concat(e, arguments.length > 3 && arguments[3] !== void 0 && arguments[3] ? " requires preAuth() or startCamera() to initialize call state." : " requires preAuth(), startCamera(), or join() to initialize call state.");
    throw t && (n += " ".concat(t)), console.error(n), new Error(n);
  }
}
function Fr(r) {
  if (r) {
    var e = "A pre-call quality test is in progress. Please try ".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " again once testing has completed. Use stopTestCallQuality() to end it early.");
    throw console.error(e), new Error(e);
  }
}
function _e(r) {
  if (!r) {
    var e = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " is only supported on custom callObject instances");
    throw console.error(e), new Error(e);
  }
}
function ue(r) {
  if (r) {
    var e = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " is only supported as part of Daily's Prebuilt");
    throw console.error(e), new Error(e);
  }
}
function $() {
  if (U()) throw new Error("This daily-js method is not currently supported in React Native");
}
function Et() {
  if (!U()) throw new Error("This daily-js method is only supported in React Native");
}
function ya(r) {
  if (r === void 0) return !0;
  var e;
  if (typeof r == "string") e = r;
  else try {
    e = JSON.stringify(r), ce(JSON.parse(e), r) || console.warn("The userData provided will be modified when serialized.");
  } catch (t) {
    throw Error("userData must be serializable to JSON: ".concat(t));
  }
  if (e.length > 4096) throw Error("userData is too large (".concat(e.length, " characters). Maximum size suppported is ").concat(4096, "."));
  return !0;
}
function ba(r, e) {
  for (var t = e.allowAllParticipantsKey, n = function(v) {
    var k = ["local"];
    return t || k.push("*"), v && !k.includes(v);
  }, i = function(v) {
    return !!(v.layer === void 0 || Number.isInteger(v.layer) && v.layer >= 0 || v.layer === "inherit");
  }, o = function(v) {
    return !!v && !(v.video && !i(v.video)) && !(v.screenVideo && !i(v.screenVideo));
  }, a = 0, l = Object.entries(r); a < l.length; a++) {
    var u = se(l[a], 2), p = u[0], f = u[1];
    if (!n(p) || !o(f)) return !1;
  }
  return !0;
}
function _a(r) {
  if (B(r) !== "object") return !1;
  for (var e = 0, t = Object.entries(r); e < t.length; e++) {
    var n = se(t[e], 2), i = n[0], o = n[1];
    switch (i) {
      case "video":
        if (B(o) !== "object") return !1;
        for (var a = 0, l = Object.entries(o); a < l.length; a++) {
          var u = se(l[a], 2), p = u[0], f = u[1];
          switch (p) {
            case "processor":
              if (!lu(f)) return !1;
              break;
            case "settings":
              if (!Cs(f)) return !1;
              break;
            default:
              return !1;
          }
        }
        break;
      case "audio":
        if (B(o) !== "object") return !1;
        for (var v = 0, k = Object.entries(o); v < k.length; v++) {
          var T = se(k[v], 2), S = T[0], g = T[1];
          switch (S) {
            case "processor":
              if (!cu(g)) return !1;
              break;
            case "settings":
              if (!Cs(g)) return !1;
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
function Sa(r, e, t) {
  var n, i = [];
  r.video && r.video.processor && (ia((n = e == null ? void 0 : e.useLegacyVideoProcessor) !== null && n !== void 0 && n) || (r.video.settings ? delete r.video.processor : delete r.video, i.push("video"))), r.audio && r.audio.processor && (sa() || (r.audio.settings ? delete r.audio.processor : delete r.audio, i.push("audio"))), i.length > 0 && console.error("Ignoring settings for browser- or platform-unsupported input processor(s): ".concat(i.join(", "))), r.audio && r.audio.settings && (r.audio.settings.customTrack ? (t.audioTrack = r.audio.settings.customTrack, r.audio.settings = { customTrack: je }) : delete t.audioTrack), r.video && r.video.settings && (r.video.settings.customTrack ? (t.videoTrack = r.video.settings.customTrack, r.video.settings = { customTrack: je }) : delete t.videoTrack);
}
function cu(r) {
  if (U()) return console.warn("Video processing is not yet supported in React Native"), !1;
  var e = ["type"];
  return !!r && B(r) === "object" && (Object.keys(r).filter(function(t) {
    return !e.includes(t);
  }).forEach(function(t) {
    console.warn("invalid key inputSettings -> audio -> processor : ".concat(t)), delete r[t];
  }), !!function(t) {
    return typeof t != "string" ? !1 : Object.values(ra).includes(t) ? !0 : (console.error("inputSettings audio processor type invalid"), !1);
  }(r.type));
}
function lu(r) {
  if (U()) return console.warn("Video processing is not yet supported in React Native"), !1;
  var e = ["type", "config"];
  return !r || B(r) !== "object" || !function(t) {
    return typeof t != "string" ? !1 : Object.values(Xt).includes(t) ? !0 : (console.error("inputSettings video processor type invalid"), !1);
  }(r.type) || r.config && (B(r.config) !== "object" || !function(t, n) {
    var i = Object.keys(n);
    if (i.length === 0) return !0;
    var o = "invalid object in inputSettings -> video -> processor -> config";
    switch (t) {
      case Xt.BGBLUR:
        return i.length > 1 || i[0] !== "strength" ? (console.error(o), !1) : !(typeof n.strength != "number" || n.strength <= 0 || n.strength > 1 || isNaN(n.strength)) || (console.error("".concat(o, "; expected: {0 < strength <= 1}, got: ").concat(n.strength)), !1);
      case Xt.BGIMAGE:
        return !(n.source !== void 0 && !function(a) {
          if (a.source === "default") return a.type = "default", !0;
          if (a.source instanceof ArrayBuffer) return !0;
          if (rr(a.source)) return a.type = "url", !!function(p) {
            var f = new URL(p), v = f.pathname;
            if (f.protocol === "data:") try {
              var k = v.substring(v.indexOf(":") + 1, v.indexOf(";")).split("/")[1];
              return Dr.includes(k);
            } catch (S) {
              return console.error("failed to deduce blob content type", S), !1;
            }
            var T = v.split(".").at(-1).toLowerCase().trim();
            return Dr.includes(T);
          }(a.source) || (console.error("invalid image type; supported types: [".concat(Dr.join(", "), "]")), !1);
          return l = a.source, u = Number(l), isNaN(u) || !Number.isInteger(u) || u <= 0 || u > 10 ? (console.error("invalid image selection; must be an int, > 0, <= ".concat(10)), !1) : (a.type = "daily-preselect", !0);
          var l, u;
        }(n));
      default:
        return !0;
    }
  }(r.type, r.config)) ? !1 : (Object.keys(r).filter(function(t) {
    return !e.includes(t);
  }).forEach(function(t) {
    console.warn("invalid key inputSettings -> video -> processor : ".concat(t)), delete r[t];
  }), !0);
}
function Cs(r) {
  return B(r) === "object" && (!r.customTrack || r.customTrack instanceof MediaStreamTrack);
}
function bn() {
  var r = Object.values(Xt).join(" | "), e = Object.values(ra).join(" | ");
  return "inputSettings must be of the form: { video?: { processor?: { type: [ ".concat(r, " ], config?: {} } }, audio?: { processor: {type: [ ").concat(e, " ] } } }");
}
function wa(r) {
  var e = r.allowAllParticipantsKey;
  return "receiveSettings must be of the form { [<remote participant id> | ".concat(no).concat(e ? ' | "'.concat("*", '"') : "", "]: ") + '{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}';
}
function Ea() {
  return "customIntegrations should be an object of type ".concat(JSON.stringify(yn), ".");
}
function ka(r) {
  if (r && B(r) !== "object" || Array.isArray(r)) return console.error("customTrayButtons should be an Object of the type ".concat(JSON.stringify(ur), ".")), !1;
  if (r) for (var e = 0, t = Object.entries(r); e < t.length; e++) for (var n = se(t[e], 1)[0], i = 0, o = Object.entries(r[n]); i < o.length; i++) {
    var a = se(o[i], 2), l = a[0], u = a[1], p = ur.id[l];
    if (!p) return console.error("customTrayButton does not support key ".concat(l)), !1;
    switch (l) {
      case "iconPath":
      case "iconPathDarkMode":
        if (!rr(u)) return console.error("customTrayButton ".concat(l, " should be a url.")), !1;
        break;
      case "visualState":
        if (!["default", "sidebar-open", "active"].includes(u)) return console.error("customTrayButton ".concat(l, " should be ").concat(p, ". Got: ").concat(u)), !1;
        break;
      default:
        if (B(u) !== p) return console.error("customTrayButton ".concat(l, " should be a ").concat(p, ".")), !1;
    }
  }
  return !0;
}
function Ta(r) {
  if (!r || r && B(r) !== "object" || Array.isArray(r)) return console.error(Ea()), !1;
  for (var e = function(v) {
    return "".concat(v, " should be ").concat(yn.id[v]);
  }, t = function(v, k) {
    return console.error("customIntegration ".concat(v, ": ").concat(k));
  }, n = 0, i = Object.entries(r); n < i.length; n++) {
    var o = se(i[n], 1)[0];
    if (!("label" in r[o])) return t(o, "label is required"), !1;
    if (!("location" in r[o])) return t(o, "location is required"), !1;
    if (!("src" in r[o]) && !("srcdoc" in r[o])) return t(o, "src or srcdoc is required"), !1;
    for (var a = 0, l = Object.entries(r[o]); a < l.length; a++) {
      var u = se(l[a], 2), p = u[0], f = u[1];
      switch (p) {
        case "allow":
        case "csp":
        case "name":
        case "referrerPolicy":
        case "sandbox":
          if (typeof f != "string") return t(o, e(p)), !1;
          break;
        case "iconURL":
          if (!rr(f)) return t(o, "".concat(p, " should be a url")), !1;
          break;
        case "src":
          if ("srcdoc" in r[o]) return t(o, "cannot have both src and srcdoc"), !1;
          if (!rr(f)) return t(o, 'src "'.concat(f, '" is not a valid URL')), !1;
          break;
        case "srcdoc":
          if ("src" in r[o]) return t(o, "cannot have both src and srcdoc"), !1;
          if (typeof f != "string") return t(o, e(p)), !1;
          break;
        case "location":
          if (!["main", "sidebar"].includes(f)) return t(o, e(p)), !1;
          break;
        case "controlledBy":
          if (f !== "*" && f !== "owners" && (!Array.isArray(f) || f.some(function(v) {
            return typeof v != "string";
          }))) return t(o, e(p)), !1;
          break;
        case "shared":
          if ((!Array.isArray(f) || f.some(function(v) {
            return typeof v != "string";
          })) && f !== "owners" && typeof f != "boolean") return t(o, e(p)), !1;
          break;
        default:
          if (!yn.id[p]) return console.error("customIntegration does not support key ".concat(p)), !1;
      }
    }
  }
  return !0;
}
function Ca(r, e) {
  if (e === void 0) return !1;
  switch (B(e)) {
    case "string":
      return B(r) === e;
    case "object":
      if (B(r) !== "object") return !1;
      for (var t in r) if (!Ca(r[t], e[t])) return !1;
      return !0;
    default:
      return !1;
  }
}
function Os(r, e) {
  var t = r.sessionId, n = r.toEndPoint, i = r.callerId, o = r.useSipRefer;
  if (!t || !n) throw new Error("".concat(e, "() requires a sessionId and toEndPoint"));
  if (typeof t != "string" || typeof n != "string") throw new Error("Invalid paramater: sessionId and toEndPoint must be of type string");
  if (o && !n.startsWith("sip:")) throw new Error('"toEndPoint" must be a "sip" address');
  if (!n.startsWith("sip:") && !n.startsWith("+")) throw new Error("toEndPoint: ".concat(n, ' must starts with either "sip:" or "+"'));
  if (i && typeof i != "string") throw new Error("callerId must be of type string");
  if (i && !n.startsWith("+")) throw new Error("callerId is only valid when transferring to a PSTN number");
}
function As(r) {
  if (B(r) !== "object") throw new Error('RemoteMediaPlayerSettings: must be "object" type');
  if (r.state && !Object.values(hn).includes(r.state)) throw new Error("Invalid value for RemoteMediaPlayerSettings.state, valid values are: " + JSON.stringify(hn));
  if (r.volume) {
    if (typeof r.volume != "number") throw new Error('RemoteMediaPlayerSettings.volume: must be "number" type');
    if (r.volume < 0 || r.volume > 2) throw new Error("RemoteMediaPlayerSettings.volume: must be between 0.0 - 2.0");
  }
}
function Ms(r, e, t) {
  return !(typeof r != "number" || r < e || r > t);
}
function qr(r, e) {
  return r && !e && delete r.data, r;
}
const uu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DAILY_ACCESS_LEVEL_FULL: ro,
  DAILY_ACCESS_LEVEL_LOBBY: hl,
  DAILY_ACCESS_LEVEL_NONE: fl,
  DAILY_ACCESS_UNKNOWN: Kt,
  DAILY_CAMERA_ERROR_CAM_AND_MIC_IN_USE: Tl,
  DAILY_CAMERA_ERROR_CAM_IN_USE: El,
  DAILY_CAMERA_ERROR_CONSTRAINTS: Ml,
  DAILY_CAMERA_ERROR_MIC_IN_USE: kl,
  DAILY_CAMERA_ERROR_NOT_FOUND: Al,
  DAILY_CAMERA_ERROR_PERMISSIONS: Cl,
  DAILY_CAMERA_ERROR_UNDEF_MEDIADEVICES: Ol,
  DAILY_CAMERA_ERROR_UNKNOWN: Pl,
  DAILY_EVENT_ACCESS_STATE_UPDATED: So,
  DAILY_EVENT_ACTIVE_SPEAKER_CHANGE: Bo,
  DAILY_EVENT_ACTIVE_SPEAKER_MODE_CHANGE: Go,
  DAILY_EVENT_APP_MSG: Ro,
  DAILY_EVENT_CAMERA_ERROR: ho,
  DAILY_EVENT_CPU_LOAD_CHANGE: zo,
  DAILY_EVENT_ERROR: pn,
  DAILY_EVENT_EXIT_FULLSCREEN: Ct,
  DAILY_EVENT_FACE_COUNTS_UPDATED: Ho,
  DAILY_EVENT_FULLSCREEN: Tt,
  DAILY_EVENT_IFRAME_LAUNCH_CONFIG: ao,
  DAILY_EVENT_IFRAME_READY_FOR_LAUNCH_CONFIG: oo,
  DAILY_EVENT_INPUT_SETTINGS_UPDATED: un,
  DAILY_EVENT_JOINED_MEETING: mo,
  DAILY_EVENT_JOINING_MEETING: fo,
  DAILY_EVENT_LANG_UPDATED: ea,
  DAILY_EVENT_LEFT_MEETING: go,
  DAILY_EVENT_LIVE_STREAMING_ERROR: Zo,
  DAILY_EVENT_LIVE_STREAMING_STARTED: Qo,
  DAILY_EVENT_LIVE_STREAMING_STOPPED: Xo,
  DAILY_EVENT_LIVE_STREAMING_UPDATED: Ko,
  DAILY_EVENT_LOADED: an,
  DAILY_EVENT_LOADING: lo,
  DAILY_EVENT_LOAD_ATTEMPT_FAILED: uo,
  DAILY_EVENT_LOCAL_SCREEN_SHARE_CANCELED: Jo,
  DAILY_EVENT_LOCAL_SCREEN_SHARE_STARTED: $o,
  DAILY_EVENT_LOCAL_SCREEN_SHARE_STOPPED: Uo,
  DAILY_EVENT_MEETING_SESSION_DATA_ERROR: Il,
  DAILY_EVENT_MEETING_SESSION_STATE_UPDATED: Eo,
  DAILY_EVENT_MEETING_SESSION_SUMMARY_UPDATED: wo,
  DAILY_EVENT_NETWORK_CONNECTION: Wo,
  DAILY_EVENT_NETWORK_QUALITY_CHANGE: Yo,
  DAILY_EVENT_NONFATAL_ERROR: dn,
  DAILY_EVENT_PARTICIPANT_COUNTS_UPDATED: _o,
  DAILY_EVENT_PARTICIPANT_JOINED: vo,
  DAILY_EVENT_PARTICIPANT_LEFT: bo,
  DAILY_EVENT_PARTICIPANT_UPDATED: yo,
  DAILY_EVENT_RECEIVE_SETTINGS_UPDATED: ta,
  DAILY_EVENT_RECORDING_DATA: No,
  DAILY_EVENT_RECORDING_ERROR: jo,
  DAILY_EVENT_RECORDING_STARTED: cn,
  DAILY_EVENT_RECORDING_STATS: Do,
  DAILY_EVENT_RECORDING_STOPPED: ln,
  DAILY_EVENT_RECORDING_UPLOAD_COMPLETED: Lo,
  DAILY_EVENT_REMOTE_MEDIA_PLAYER_STARTED: Fo,
  DAILY_EVENT_REMOTE_MEDIA_PLAYER_STOPPED: Vo,
  DAILY_EVENT_REMOTE_MEDIA_PLAYER_UPDATED: qo,
  DAILY_EVENT_STARTED_CAMERA: po,
  DAILY_EVENT_THEME_UPDATED: co,
  DAILY_EVENT_TRACK_STARTED: Oo,
  DAILY_EVENT_TRACK_STOPPED: Ao,
  DAILY_EVENT_TRANSCRIPTION_ERROR: Io,
  DAILY_EVENT_TRANSCRIPTION_MSG: xo,
  DAILY_EVENT_TRANSCRIPTION_STARTED: Mo,
  DAILY_EVENT_TRANSCRIPTION_STOPPED: Po,
  DAILY_EVENT_WAITING_PARTICIPANT_ADDED: ko,
  DAILY_EVENT_WAITING_PARTICIPANT_REMOVED: Co,
  DAILY_EVENT_WAITING_PARTICIPANT_UPDATED: To,
  DAILY_FATAL_ERROR_CONNECTION: so,
  DAILY_FATAL_ERROR_EJECTED: gl,
  DAILY_FATAL_ERROR_EOL: io,
  DAILY_FATAL_ERROR_EXP_ROOM: bl,
  DAILY_FATAL_ERROR_EXP_TOKEN: _l,
  DAILY_FATAL_ERROR_MEETING_FULL: Sl,
  DAILY_FATAL_ERROR_NBF_ROOM: vl,
  DAILY_FATAL_ERROR_NBF_TOKEN: yl,
  DAILY_FATAL_ERROR_NOT_ALLOWED: wl,
  DAILY_FATAL_ERROR_NO_ROOM: on,
  DAILY_RECEIVE_SETTINGS_ALL_PARTICIPANTS_KEY: ml,
  DAILY_RECEIVE_SETTINGS_BASE_KEY: no,
  DAILY_STATE_ERROR: Me,
  DAILY_STATE_JOINED: qe,
  DAILY_STATE_JOINING: ar,
  DAILY_STATE_LEFT: xe,
  DAILY_STATE_NEW: sn,
  DAILY_TRACK_STATE_BLOCKED: cl,
  DAILY_TRACK_STATE_INTERRUPTED: pl,
  DAILY_TRACK_STATE_LOADING: dl,
  DAILY_TRACK_STATE_OFF: ll,
  DAILY_TRACK_STATE_PLAYABLE: to,
  DAILY_TRACK_STATE_SENDABLE: ul,
  default: au
}, Symbol.toStringTag, { value: "Module" })), du = /* @__PURE__ */ $a(uu);
var Ln = { exports: {} }, ut = typeof Reflect == "object" ? Reflect : null, Ps = ut && typeof ut.apply == "function" ? ut.apply : function(e, t, n) {
  return Function.prototype.apply.call(e, t, n);
}, er;
ut && typeof ut.ownKeys == "function" ? er = ut.ownKeys : Object.getOwnPropertySymbols ? er = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : er = function(e) {
  return Object.getOwnPropertyNames(e);
};
function pu(r) {
  console && console.warn && console.warn(r);
}
var Oa = Number.isNaN || function(e) {
  return e !== e;
};
function z() {
  z.init.call(this);
}
Ln.exports = z;
Ln.exports.once = gu;
z.EventEmitter = z;
z.prototype._events = void 0;
z.prototype._eventsCount = 0;
z.prototype._maxListeners = void 0;
var Is = 10;
function br(r) {
  if (typeof r != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof r);
}
Object.defineProperty(z, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Is;
  },
  set: function(r) {
    if (typeof r != "number" || r < 0 || Oa(r))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + r + ".");
    Is = r;
  }
});
z.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
z.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || Oa(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function Aa(r) {
  return r._maxListeners === void 0 ? z.defaultMaxListeners : r._maxListeners;
}
z.prototype.getMaxListeners = function() {
  return Aa(this);
};
z.prototype.emit = function(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
  var i = e === "error", o = this._events;
  if (o !== void 0)
    i = i && o.error === void 0;
  else if (!i)
    return !1;
  if (i) {
    var a;
    if (t.length > 0 && (a = t[0]), a instanceof Error)
      throw a;
    var l = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
    throw l.context = a, l;
  }
  var u = o[e];
  if (u === void 0)
    return !1;
  if (typeof u == "function")
    Ps(u, this, t);
  else
    for (var p = u.length, f = ja(u, p), n = 0; n < p; ++n)
      Ps(f[n], this, t);
  return !0;
};
function Ma(r, e, t, n) {
  var i, o, a;
  if (br(t), o = r._events, o === void 0 ? (o = r._events = /* @__PURE__ */ Object.create(null), r._eventsCount = 0) : (o.newListener !== void 0 && (r.emit(
    "newListener",
    e,
    t.listener ? t.listener : t
  ), o = r._events), a = o[e]), a === void 0)
    a = o[e] = t, ++r._eventsCount;
  else if (typeof a == "function" ? a = o[e] = n ? [t, a] : [a, t] : n ? a.unshift(t) : a.push(t), i = Aa(r), i > 0 && a.length > i && !a.warned) {
    a.warned = !0;
    var l = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    l.name = "MaxListenersExceededWarning", l.emitter = r, l.type = e, l.count = a.length, pu(l);
  }
  return r;
}
z.prototype.addListener = function(e, t) {
  return Ma(this, e, t, !1);
};
z.prototype.on = z.prototype.addListener;
z.prototype.prependListener = function(e, t) {
  return Ma(this, e, t, !0);
};
function hu() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Pa(r, e, t) {
  var n = { fired: !1, wrapFn: void 0, target: r, type: e, listener: t }, i = hu.bind(n);
  return i.listener = t, n.wrapFn = i, i;
}
z.prototype.once = function(e, t) {
  return br(t), this.on(e, Pa(this, e, t)), this;
};
z.prototype.prependOnceListener = function(e, t) {
  return br(t), this.prependListener(e, Pa(this, e, t)), this;
};
z.prototype.removeListener = function(e, t) {
  var n, i, o, a, l;
  if (br(t), i = this._events, i === void 0)
    return this;
  if (n = i[e], n === void 0)
    return this;
  if (n === t || n.listener === t)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || t));
  else if (typeof n != "function") {
    for (o = -1, a = n.length - 1; a >= 0; a--)
      if (n[a] === t || n[a].listener === t) {
        l = n[a].listener, o = a;
        break;
      }
    if (o < 0)
      return this;
    o === 0 ? n.shift() : fu(n, o), n.length === 1 && (i[e] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", e, l || t);
  }
  return this;
};
z.prototype.off = z.prototype.removeListener;
z.prototype.removeAllListeners = function(e) {
  var t, n, i;
  if (n = this._events, n === void 0)
    return this;
  if (n.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[e]), this;
  if (arguments.length === 0) {
    var o = Object.keys(n), a;
    for (i = 0; i < o.length; ++i)
      a = o[i], a !== "removeListener" && this.removeAllListeners(a);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (t = n[e], typeof t == "function")
    this.removeListener(e, t);
  else if (t !== void 0)
    for (i = t.length - 1; i >= 0; i--)
      this.removeListener(e, t[i]);
  return this;
};
function Ia(r, e, t) {
  var n = r._events;
  if (n === void 0)
    return [];
  var i = n[e];
  return i === void 0 ? [] : typeof i == "function" ? t ? [i.listener || i] : [i] : t ? mu(i) : ja(i, i.length);
}
z.prototype.listeners = function(e) {
  return Ia(this, e, !0);
};
z.prototype.rawListeners = function(e) {
  return Ia(this, e, !1);
};
z.listenerCount = function(r, e) {
  return typeof r.listenerCount == "function" ? r.listenerCount(e) : Da.call(r, e);
};
z.prototype.listenerCount = Da;
function Da(r) {
  var e = this._events;
  if (e !== void 0) {
    var t = e[r];
    if (typeof t == "function")
      return 1;
    if (t !== void 0)
      return t.length;
  }
  return 0;
}
z.prototype.eventNames = function() {
  return this._eventsCount > 0 ? er(this._events) : [];
};
function ja(r, e) {
  for (var t = new Array(e), n = 0; n < e; ++n)
    t[n] = r[n];
  return t;
}
function fu(r, e) {
  for (; e + 1 < r.length; e++)
    r[e] = r[e + 1];
  r.pop();
}
function mu(r) {
  for (var e = new Array(r.length), t = 0; t < e.length; ++t)
    e[t] = r[t].listener || r[t];
  return e;
}
function gu(r, e) {
  return new Promise(function(t, n) {
    function i(a) {
      r.removeListener(e, o), n(a);
    }
    function o() {
      typeof r.removeListener == "function" && r.removeListener("error", i), t([].slice.call(arguments));
    }
    La(r, e, o, { once: !0 }), e !== "error" && vu(r, i, { once: !0 });
  });
}
function vu(r, e, t) {
  typeof r.on == "function" && La(r, "error", e, t);
}
function La(r, e, t, n) {
  if (typeof r.on == "function")
    n.once ? r.once(e, t) : r.on(e, t);
  else if (typeof r.addEventListener == "function")
    r.addEventListener(e, function i(o) {
      n.once && r.removeEventListener(e, i), t(o);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof r);
}
var yu = Ln.exports, _r = {}, Ve = {};
Object.defineProperty(Ve, "__esModule", { value: !0 });
Ve.Api = Ve.HttpClient = Ve.ContentType = void 0;
var P;
(function(r) {
  r.Json = "application/json", r.JsonApi = "application/vnd.api+json", r.FormData = "multipart/form-data", r.UrlEncoded = "application/x-www-form-urlencoded", r.Text = "text/plain";
})(P || (Ve.ContentType = P = {}));
class Na {
  constructor(e = {}) {
    x(this, "baseUrl", "https://api.vapi.ai");
    x(this, "securityData", null);
    x(this, "securityWorker");
    x(this, "abortControllers", /* @__PURE__ */ new Map());
    x(this, "customFetch", (...e) => fetch(...e));
    x(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    x(this, "setSecurityData", (e) => {
      this.securityData = e;
    });
    x(this, "contentFormatters", {
      [P.Json]: (e) => e !== null && (typeof e == "object" || typeof e == "string") ? JSON.stringify(e) : e,
      [P.JsonApi]: (e) => e !== null && (typeof e == "object" || typeof e == "string") ? JSON.stringify(e) : e,
      [P.Text]: (e) => e !== null && typeof e != "string" ? JSON.stringify(e) : e,
      [P.FormData]: (e) => e instanceof FormData ? e : Object.keys(e || {}).reduce((t, n) => {
        const i = e[n];
        return t.append(n, i instanceof Blob ? i : typeof i == "object" && i !== null ? JSON.stringify(i) : `${i}`), t;
      }, new FormData()),
      [P.UrlEncoded]: (e) => this.toQueryString(e)
    });
    x(this, "createAbortSignal", (e) => {
      if (this.abortControllers.has(e)) {
        const n = this.abortControllers.get(e);
        return n ? n.signal : void 0;
      }
      const t = new AbortController();
      return this.abortControllers.set(e, t), t.signal;
    });
    x(this, "abortRequest", (e) => {
      const t = this.abortControllers.get(e);
      t && (t.abort(), this.abortControllers.delete(e));
    });
    x(this, "request", async ({ body: e, secure: t, path: n, type: i, query: o, format: a, baseUrl: l, cancelToken: u, ...p }) => {
      const f = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {}, v = this.mergeRequestParams(p, f), k = o && this.toQueryString(o), T = this.contentFormatters[i || P.Json], S = a || v.format;
      return this.customFetch(`${l || this.baseUrl || ""}${n}${k ? `?${k}` : ""}`, {
        ...v,
        headers: {
          ...v.headers || {},
          ...i && i !== P.FormData ? { "Content-Type": i } : {}
        },
        signal: (u ? this.createAbortSignal(u) : v.signal) || null,
        body: typeof e > "u" || e === null ? null : T(e)
      }).then(async (g) => {
        const b = g;
        b.data = null, b.error = null;
        const y = S ? g.clone() : g, O = S ? await y[S]().then((M) => (b.ok ? b.data = M : b.error = M, b)).catch((M) => (b.error = M, b)) : b;
        if (u && this.abortControllers.delete(u), !g.ok)
          throw O;
        return O;
      });
    });
    Object.assign(this, e);
  }
  encodeQueryParam(e, t) {
    return `${encodeURIComponent(e)}=${encodeURIComponent(typeof t == "number" ? t : `${t}`)}`;
  }
  addQueryParam(e, t) {
    return this.encodeQueryParam(t, e[t]);
  }
  addArrayQueryParam(e, t) {
    return e[t].map((i) => this.encodeQueryParam(t, i)).join("&");
  }
  toQueryString(e) {
    const t = e || {};
    return Object.keys(t).filter((i) => typeof t[i] < "u").map((i) => Array.isArray(t[i]) ? this.addArrayQueryParam(t, i) : this.addQueryParam(t, i)).join("&");
  }
  addQueryParams(e) {
    const t = this.toQueryString(e);
    return t ? `?${t}` : "";
  }
  mergeRequestParams(e, t) {
    return {
      ...this.baseApiParams,
      ...e,
      ...t || {},
      headers: {
        ...this.baseApiParams.headers || {},
        ...e.headers || {},
        ...t && t.headers || {}
      }
    };
  }
}
Ve.HttpClient = Na;
class bu extends Na {
  constructor() {
    super(...arguments);
    x(this, "assistant", {
      /**
       * No description
       *
       * @tags Assistants
       * @name AssistantControllerCreate
       * @summary Create Assistant
       * @request POST:/assistant
       * @secure
       */
      assistantControllerCreate: (t, n = {}) => this.request({
        path: "/assistant",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
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
      assistantControllerFindAll: (t, n = {}) => this.request({
        path: "/assistant",
        method: "GET",
        query: t,
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
      assistantControllerFindOne: (t, n = {}) => this.request({
        path: `/assistant/${t}`,
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
      assistantControllerUpdate: (t, n, i = {}) => this.request({
        path: `/assistant/${t}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: P.Json,
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
      assistantControllerReplace: (t, n, i = {}) => this.request({
        path: `/assistant/${t}`,
        method: "PUT",
        body: n,
        secure: !0,
        type: P.Json,
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
      assistantControllerRemove: (t, n = {}) => this.request({
        path: `/assistant/${t}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Assistants
       * @name AssistantControllerFindVersions
       * @summary List Assistant Versions
       * @request GET:/assistant/{id}/version
       * @secure
       */
      assistantControllerFindVersions: (t, n, i = {}) => this.request({
        path: `/assistant/${t}/version`,
        method: "GET",
        query: n,
        secure: !0,
        format: "json",
        ...i
      })
    });
    x(this, "v2", {
      /**
       * No description
       *
       * @tags Assistants
       * @name AssistantControllerFindAllPaginated
       * @summary List Assistants with pagination
       * @request GET:/v2/assistant
       * @secure
       */
      assistantControllerFindAllPaginated: (t, n = {}) => this.request({
        path: "/v2/assistant",
        method: "GET",
        query: t,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Calls
       * @name CallControllerCallsExport
       * @summary Export Calls to CSV
       * @request GET:/v2/call/export
       * @secure
       */
      callControllerCallsExport: (t, n = {}) => this.request({
        path: "/v2/call/export",
        method: "GET",
        query: t,
        secure: !0,
        ...n
      }),
      /**
       * No description
       *
       * @tags Calls
       * @name CallControllerFindAllPaginated
       * @summary List Calls
       * @request GET:/v2/call
       * @secure
       */
      callControllerFindAllPaginated: (t, n = {}) => this.request({
        path: "/v2/call",
        method: "GET",
        query: t,
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
      callControllerFindAllMetadataPaginated: (t, n = {}) => this.request({
        path: "/v2/call/metadata",
        method: "GET",
        query: t,
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
      phoneNumberControllerFindAllPaginated: (t, n = {}) => this.request({
        path: "/v2/phone-number",
        method: "GET",
        query: t,
        secure: !0,
        format: "json",
        ...n
      })
    });
    x(this, "squad", {
      /**
       * No description
       *
       * @tags Squads
       * @name SquadControllerCreate
       * @summary Create Squad
       * @request POST:/squad
       * @secure
       */
      squadControllerCreate: (t, n = {}) => this.request({
        path: "/squad",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
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
      squadControllerFindAll: (t, n = {}) => this.request({
        path: "/squad",
        method: "GET",
        query: t,
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
      squadControllerFindOne: (t, n = {}) => this.request({
        path: `/squad/${t}`,
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
      squadControllerUpdate: (t, n, i = {}) => this.request({
        path: `/squad/${t}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: P.Json,
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
      squadControllerRemove: (t, n = {}) => this.request({
        path: `/squad/${t}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      })
    });
    x(this, "workflow", {
      /**
       * No description
       *
       * @tags Workflow
       * @name WorkflowControllerFindAll
       * @summary Get Workflows
       * @request GET:/workflow
       * @secure
       */
      workflowControllerFindAll: (t = {}) => this.request({
        path: "/workflow",
        method: "GET",
        secure: !0,
        format: "json",
        ...t
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
      workflowControllerCreate: (t, n = {}) => this.request({
        path: "/workflow",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
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
      workflowControllerFindOne: (t, n = {}) => this.request({
        path: `/workflow/${t}`,
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
      workflowControllerDelete: (t, n = {}) => this.request({
        path: `/workflow/${t}`,
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
      workflowControllerUpdate: (t, n, i = {}) => this.request({
        path: `/workflow/${t}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: P.Json,
        format: "json",
        ...i
      })
    });
    x(this, "call", {
      /**
       * No description
       *
       * @tags Calls
       * @name CallControllerCreate
       * @summary Create Call
       * @request POST:/call
       * @secure
       */
      callControllerCreate: (t, n = {}) => this.request({
        path: "/call",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
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
      callControllerFindAll: (t, n = {}) => this.request({
        path: "/call",
        method: "GET",
        query: t,
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
      callControllerFindOne: (t, n = {}) => this.request({
        path: `/call/${t}`,
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
      callControllerUpdate: (t, n, i = {}) => this.request({
        path: `/call/${t}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: P.Json,
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
      callControllerDeleteCallData: (t, n, i = {}) => this.request({
        path: `/call/${t}`,
        method: "DELETE",
        body: n,
        secure: !0,
        type: P.Json,
        format: "json",
        ...i
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
      callControllerCreatePhoneCall: (t, n = {}) => this.request({
        path: "/call/phone",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
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
      callControllerCreateWebCall: (t, n = {}) => this.request({
        path: "/call/web",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
        format: "json",
        ...n
      })
    });
    x(this, "chat", {
      /**
       * No description
       *
       * @tags Chats
       * @name ChatControllerListChats
       * @summary List Chats
       * @request GET:/chat
       * @secure
       */
      chatControllerListChats: (t, n = {}) => this.request({
        path: "/chat",
        method: "GET",
        query: t,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * @description Creates a new chat with optional SMS delivery via transport field. Requires at least one of: assistantId/assistant, sessionId, or previousChatId. Note: sessionId and previousChatId are mutually exclusive. Transport field enables SMS delivery with two modes: (1) New conversation - provide transport.phoneNumberId and transport.customer to create a new session, (2) Existing conversation - provide sessionId to use existing session data. Cannot specify both sessionId and transport fields together. The transport.useLLMGeneratedMessageForOutbound flag controls whether input is processed by LLM (true, default) or forwarded directly as SMS (false).
       *
       * @tags Chats
       * @name ChatControllerCreateChat
       * @summary Create Chat
       * @request POST:/chat
       * @secure
       */
      chatControllerCreateChat: (t, n = {}) => this.request({
        path: "/chat",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Chats
       * @name ChatControllerGetChat
       * @summary Get Chat
       * @request GET:/chat/{id}
       * @secure
       */
      chatControllerGetChat: (t, n = {}) => this.request({
        path: `/chat/${t}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Chats
       * @name ChatControllerDeleteChat
       * @summary Delete Chat
       * @request DELETE:/chat/{id}
       * @secure
       */
      chatControllerDeleteChat: (t, n = {}) => this.request({
        path: `/chat/${t}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Chats
       * @name ChatControllerCreateOpenAiChat
       * @summary Create Chat (OpenAI Compatible)
       * @request POST:/chat/responses
       * @secure
       */
      chatControllerCreateOpenAiChat: (t, n = {}) => this.request({
        path: "/chat/responses",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Chats
       * @name ChatControllerCreateWebChat
       * @summary Create WebChat
       * @request POST:/chat/web
       * @secure
       */
      chatControllerCreateWebChat: (t, n = {}) => this.request({
        path: "/chat/web",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Chats
       * @name ChatControllerCreateOpenAiWebChat
       * @summary Create WebChat (OpenAI Compatible)
       * @request POST:/chat/web/responses
       * @secure
       */
      chatControllerCreateOpenAiWebChat: (t, n = {}) => this.request({
        path: "/chat/web/responses",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
        format: "json",
        ...n
      })
    });
    x(this, "campaign", {
      /**
       * No description
       *
       * @tags Campaigns
       * @name CampaignControllerCreate
       * @summary Create Campaign
       * @request POST:/campaign
       * @secure
       */
      campaignControllerCreate: (t, n = {}) => this.request({
        path: "/campaign",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Campaigns
       * @name CampaignControllerFindAll
       * @summary List Campaigns
       * @request GET:/campaign
       * @secure
       */
      campaignControllerFindAll: (t, n = {}) => this.request({
        path: "/campaign",
        method: "GET",
        query: t,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Campaigns
       * @name CampaignControllerFindOne
       * @summary Get Campaign
       * @request GET:/campaign/{id}
       * @secure
       */
      campaignControllerFindOne: (t, n = {}) => this.request({
        path: `/campaign/${t}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Campaigns
       * @name CampaignControllerUpdate
       * @summary Update Campaign
       * @request PATCH:/campaign/{id}
       * @secure
       */
      campaignControllerUpdate: (t, n, i = {}) => this.request({
        path: `/campaign/${t}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: P.Json,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Campaigns
       * @name CampaignControllerRemove
       * @summary Delete Campaign
       * @request DELETE:/campaign/{id}
       * @secure
       */
      campaignControllerRemove: (t, n = {}) => this.request({
        path: `/campaign/${t}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      })
    });
    x(this, "session", {
      /**
       * No description
       *
       * @tags Sessions
       * @name SessionControllerCreate
       * @summary Create Session
       * @request POST:/session
       * @secure
       */
      sessionControllerCreate: (t, n = {}) => this.request({
        path: "/session",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Sessions
       * @name SessionControllerFindAllPaginated
       * @summary List Sessions
       * @request GET:/session
       * @secure
       */
      sessionControllerFindAllPaginated: (t, n = {}) => this.request({
        path: "/session",
        method: "GET",
        query: t,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Sessions
       * @name SessionControllerFindOne
       * @summary Get Session
       * @request GET:/session/{id}
       * @secure
       */
      sessionControllerFindOne: (t, n = {}) => this.request({
        path: `/session/${t}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Sessions
       * @name SessionControllerUpdate
       * @summary Update Session
       * @request PATCH:/session/{id}
       * @secure
       */
      sessionControllerUpdate: (t, n, i = {}) => this.request({
        path: `/session/${t}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: P.Json,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Sessions
       * @name SessionControllerRemove
       * @summary Delete Session
       * @request DELETE:/session/{id}
       * @secure
       */
      sessionControllerRemove: (t, n = {}) => this.request({
        path: `/session/${t}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      })
    });
    x(this, "phoneNumber", {
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
      phoneNumberControllerImportTwilio: (t, n = {}) => this.request({
        path: "/phone-number/import/twilio",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
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
      phoneNumberControllerImportVonage: (t, n = {}) => this.request({
        path: "/phone-number/import/vonage",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
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
      phoneNumberControllerCreate: (t, n = {}) => this.request({
        path: "/phone-number",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
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
      phoneNumberControllerFindAll: (t, n = {}) => this.request({
        path: "/phone-number",
        method: "GET",
        query: t,
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
      phoneNumberControllerFindOne: (t, n = {}) => this.request({
        path: `/phone-number/${t}`,
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
      phoneNumberControllerUpdate: (t, n, i = {}) => this.request({
        path: `/phone-number/${t}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: P.Json,
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
      phoneNumberControllerRemove: (t, n = {}) => this.request({
        path: `/phone-number/${t}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      })
    });
    x(this, "tool", {
      /**
       * No description
       *
       * @tags Tools
       * @name ToolControllerCreate
       * @summary Create Tool
       * @request POST:/tool
       * @secure
       */
      toolControllerCreate: (t, n = {}) => this.request({
        path: "/tool",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
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
      toolControllerFindAll: (t, n = {}) => this.request({
        path: "/tool",
        method: "GET",
        query: t,
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
      toolControllerFindOne: (t, n = {}) => this.request({
        path: `/tool/${t}`,
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
      toolControllerUpdate: (t, n, i = {}) => this.request({
        path: `/tool/${t}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: P.Json,
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
      toolControllerRemove: (t, n = {}) => this.request({
        path: `/tool/${t}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      })
    });
    x(this, "file", {
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
      fileControllerCreateDeprecated: (t, n = {}) => this.request({
        path: "/file/upload",
        method: "POST",
        body: t,
        secure: !0,
        type: P.FormData,
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
      fileControllerCreate: (t, n = {}) => this.request({
        path: "/file",
        method: "POST",
        body: t,
        secure: !0,
        type: P.FormData,
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
      fileControllerFindAll: (t = {}) => this.request({
        path: "/file",
        method: "GET",
        secure: !0,
        format: "json",
        ...t
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
      fileControllerFindOne: (t, n = {}) => this.request({
        path: `/file/${t}`,
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
      fileControllerUpdate: (t, n, i = {}) => this.request({
        path: `/file/${t}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: P.Json,
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
      fileControllerRemove: (t, n = {}) => this.request({
        path: `/file/${t}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      })
    });
    x(this, "knowledgeBase", {
      /**
       * No description
       *
       * @tags Knowledge Base
       * @name KnowledgeBaseControllerCreate
       * @summary Create Knowledge Base
       * @request POST:/knowledge-base
       * @secure
       */
      knowledgeBaseControllerCreate: (t, n = {}) => this.request({
        path: "/knowledge-base",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
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
      knowledgeBaseControllerFindAll: (t, n = {}) => this.request({
        path: "/knowledge-base",
        method: "GET",
        query: t,
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
      knowledgeBaseControllerFindOne: (t, n = {}) => this.request({
        path: `/knowledge-base/${t}`,
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
      knowledgeBaseControllerUpdate: (t, n, i = {}) => this.request({
        path: `/knowledge-base/${t}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: P.Json,
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
      knowledgeBaseControllerRemove: (t, n = {}) => this.request({
        path: `/knowledge-base/${t}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      })
    });
    x(this, "structuredOutput", {
      /**
       * No description
       *
       * @tags Structured Outputs
       * @name StructuredOutputControllerFindAll
       * @summary List Structured Outputs
       * @request GET:/structured-output
       * @secure
       */
      structuredOutputControllerFindAll: (t, n = {}) => this.request({
        path: "/structured-output",
        method: "GET",
        query: t,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Structured Outputs
       * @name StructuredOutputControllerCreate
       * @summary Create Structured Output
       * @request POST:/structured-output
       * @secure
       */
      structuredOutputControllerCreate: (t, n = {}) => this.request({
        path: "/structured-output",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Structured Outputs
       * @name StructuredOutputControllerFindOne
       * @summary Get Structured Output
       * @request GET:/structured-output/{id}
       * @secure
       */
      structuredOutputControllerFindOne: (t, n = {}) => this.request({
        path: `/structured-output/${t}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Structured Outputs
       * @name StructuredOutputControllerUpdate
       * @summary Update Structured Output
       * @request PATCH:/structured-output/{id}
       * @secure
       */
      structuredOutputControllerUpdate: (t, n, i, o = {}) => this.request({
        path: `/structured-output/${t}`,
        method: "PATCH",
        query: n,
        body: i,
        secure: !0,
        type: P.Json,
        format: "json",
        ...o
      }),
      /**
       * No description
       *
       * @tags Structured Outputs
       * @name StructuredOutputControllerRemove
       * @summary Delete Structured Output
       * @request DELETE:/structured-output/{id}
       * @secure
       */
      structuredOutputControllerRemove: (t, n = {}) => this.request({
        path: `/structured-output/${t}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Structured Outputs
       * @name StructuredOutputControllerRun
       * @summary Run Structured Output
       * @request POST:/structured-output/run
       * @secure
       */
      structuredOutputControllerRun: (t, n = {}) => this.request({
        path: "/structured-output/run",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
        format: "json",
        ...n
      })
    });
    x(this, "testSuite", {
      /**
       * No description
       *
       * @tags Test Suites
       * @name TestSuiteControllerFindAllPaginated
       * @summary List Test Suites
       * @request GET:/test-suite
       * @secure
       */
      testSuiteControllerFindAllPaginated: (t, n = {}) => this.request({
        path: "/test-suite",
        method: "GET",
        query: t,
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
      testSuiteControllerCreate: (t, n = {}) => this.request({
        path: "/test-suite",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
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
      testSuiteControllerFindOne: (t, n = {}) => this.request({
        path: `/test-suite/${t}`,
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
      testSuiteControllerUpdate: (t, n, i = {}) => this.request({
        path: `/test-suite/${t}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: P.Json,
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
      testSuiteControllerRemove: (t, n = {}) => this.request({
        path: `/test-suite/${t}`,
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
      testSuiteTestControllerFindAllPaginated: (t, n, i = {}) => this.request({
        path: `/test-suite/${t}/test`,
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
      testSuiteTestControllerCreate: (t, n, i = {}) => this.request({
        path: `/test-suite/${t}/test`,
        method: "POST",
        body: n,
        secure: !0,
        type: P.Json,
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
      testSuiteTestControllerFindOne: (t, n, i = {}) => this.request({
        path: `/test-suite/${t}/test/${n}`,
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
      testSuiteTestControllerUpdate: (t, n, i, o = {}) => this.request({
        path: `/test-suite/${t}/test/${n}`,
        method: "PATCH",
        body: i,
        secure: !0,
        type: P.Json,
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
      testSuiteTestControllerRemove: (t, n, i = {}) => this.request({
        path: `/test-suite/${t}/test/${n}`,
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
      testSuiteRunControllerFindAllPaginated: (t, n, i = {}) => this.request({
        path: `/test-suite/${t}/run`,
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
      testSuiteRunControllerCreate: (t, n, i = {}) => this.request({
        path: `/test-suite/${t}/run`,
        method: "POST",
        body: n,
        secure: !0,
        type: P.Json,
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
      testSuiteRunControllerFindOne: (t, n, i = {}) => this.request({
        path: `/test-suite/${t}/run/${n}`,
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
      testSuiteRunControllerUpdate: (t, n, i, o = {}) => this.request({
        path: `/test-suite/${t}/run/${n}`,
        method: "PATCH",
        body: i,
        secure: !0,
        type: P.Json,
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
      testSuiteRunControllerRemove: (t, n, i = {}) => this.request({
        path: `/test-suite/${t}/run/${n}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...i
      })
    });
    x(this, "reporting", {
      /**
       * No description
       *
       * @tags Insight
       * @name InsightControllerCreate
       * @summary Create Insight
       * @request POST:/reporting/insight
       * @secure
       */
      insightControllerCreate: (t, n = {}) => this.request({
        path: "/reporting/insight",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Insight
       * @name InsightControllerFindAll
       * @summary Get Insights
       * @request GET:/reporting/insight
       * @secure
       */
      insightControllerFindAll: (t, n = {}) => this.request({
        path: "/reporting/insight",
        method: "GET",
        query: t,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Insight
       * @name InsightControllerUpdate
       * @summary Update Insight
       * @request PATCH:/reporting/insight/{id}
       * @secure
       */
      insightControllerUpdate: (t, n, i = {}) => this.request({
        path: `/reporting/insight/${t}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: P.Json,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Insight
       * @name InsightControllerFindOne
       * @summary Get Insight
       * @request GET:/reporting/insight/{id}
       * @secure
       */
      insightControllerFindOne: (t, n = {}) => this.request({
        path: `/reporting/insight/${t}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Insight
       * @name InsightControllerRemove
       * @summary Delete Insight
       * @request DELETE:/reporting/insight/{id}
       * @secure
       */
      insightControllerRemove: (t, n = {}) => this.request({
        path: `/reporting/insight/${t}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Insight
       * @name InsightControllerRun
       * @summary Run Insight
       * @request POST:/reporting/insight/{id}/run
       * @secure
       */
      insightControllerRun: (t, n, i = {}) => this.request({
        path: `/reporting/insight/${t}/run`,
        method: "POST",
        body: n,
        secure: !0,
        type: P.Json,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Insight
       * @name InsightControllerPreview
       * @summary Preview Insight
       * @request POST:/reporting/insight/preview
       * @secure
       */
      insightControllerPreview: (t, n = {}) => this.request({
        path: "/reporting/insight/preview",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
        format: "json",
        ...n
      })
    });
    x(this, "eval", {
      /**
       * No description
       *
       * @tags Eval
       * @name EvalControllerCreate
       * @summary Create Eval
       * @request POST:/eval
       * @secure
       */
      evalControllerCreate: (t, n = {}) => this.request({
        path: "/eval",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Eval
       * @name EvalControllerGetPaginated
       * @summary List Evals
       * @request GET:/eval
       * @secure
       */
      evalControllerGetPaginated: (t, n = {}) => this.request({
        path: "/eval",
        method: "GET",
        query: t,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Eval
       * @name EvalControllerUpdate
       * @summary Update Eval
       * @request PATCH:/eval/{id}
       * @secure
       */
      evalControllerUpdate: (t, n, i = {}) => this.request({
        path: `/eval/${t}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: P.Json,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Eval
       * @name EvalControllerRemove
       * @summary Delete Eval
       * @request DELETE:/eval/{id}
       * @secure
       */
      evalControllerRemove: (t, n = {}) => this.request({
        path: `/eval/${t}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Eval
       * @name EvalControllerGet
       * @summary Get Eval
       * @request GET:/eval/{id}
       * @secure
       */
      evalControllerGet: (t, n = {}) => this.request({
        path: `/eval/${t}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Eval
       * @name EvalControllerRemoveRun
       * @summary Delete Eval Run
       * @request DELETE:/eval/run/{id}
       * @secure
       */
      evalControllerRemoveRun: (t, n = {}) => this.request({
        path: `/eval/run/${t}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Eval
       * @name EvalControllerGetRun
       * @summary Get Eval Run
       * @request GET:/eval/run/{id}
       * @secure
       */
      evalControllerGetRun: (t, n = {}) => this.request({
        path: `/eval/run/${t}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Eval
       * @name EvalControllerRun
       * @summary Create Eval Run
       * @request POST:/eval/run
       * @secure
       */
      evalControllerRun: (t, n = {}) => this.request({
        path: "/eval/run",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
        ...n
      }),
      /**
       * No description
       *
       * @tags Eval
       * @name EvalControllerGetRunsPaginated
       * @summary List Eval Runs
       * @request GET:/eval/run
       * @secure
       */
      evalControllerGetRunsPaginated: (t, n = {}) => this.request({
        path: "/eval/run",
        method: "GET",
        query: t,
        secure: !0,
        format: "json",
        ...n
      })
    });
    x(this, "observability", {
      /**
       * No description
       *
       * @tags Observability/Scorecard
       * @name ScorecardControllerGet
       * @summary Get Scorecard
       * @request GET:/observability/scorecard/{id}
       * @secure
       */
      scorecardControllerGet: (t, n = {}) => this.request({
        path: `/observability/scorecard/${t}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Observability/Scorecard
       * @name ScorecardControllerUpdate
       * @summary Update Scorecard
       * @request PATCH:/observability/scorecard/{id}
       * @secure
       */
      scorecardControllerUpdate: (t, n, i = {}) => this.request({
        path: `/observability/scorecard/${t}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: P.Json,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Observability/Scorecard
       * @name ScorecardControllerRemove
       * @summary Delete Scorecard
       * @request DELETE:/observability/scorecard/{id}
       * @secure
       */
      scorecardControllerRemove: (t, n = {}) => this.request({
        path: `/observability/scorecard/${t}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Observability/Scorecard
       * @name ScorecardControllerGetPaginated
       * @summary List Scorecards
       * @request GET:/observability/scorecard
       * @secure
       */
      scorecardControllerGetPaginated: (t, n = {}) => this.request({
        path: "/observability/scorecard",
        method: "GET",
        query: t,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Observability/Scorecard
       * @name ScorecardControllerCreate
       * @summary Create Scorecard
       * @request POST:/observability/scorecard
       * @secure
       */
      scorecardControllerCreate: (t, n = {}) => this.request({
        path: "/observability/scorecard",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
        format: "json",
        ...n
      })
    });
    x(this, "org", {
      /**
       * No description
       *
       * @tags Orgs
       * @name OrgControllerCreate
       * @summary Create Org
       * @request POST:/org
       * @secure
       */
      orgControllerCreate: (t, n = {}) => this.request({
        path: "/org",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
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
      orgControllerFindAll: (t = {}) => this.request({
        path: "/org",
        method: "GET",
        secure: !0,
        format: "json",
        ...t
      }),
      /**
       * No description
       *
       * @tags Orgs
       * @name OrgControllerFeatureFlagEnabled
       * @summary Check if Feature Flag is enabled
       * @request GET:/org/feature-flag
       * @secure
       */
      orgControllerFeatureFlagEnabled: (t, n = {}) => this.request({
        path: "/org/feature-flag",
        method: "GET",
        query: t,
        secure: !0,
        format: "json",
        ...n
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
      orgControllerFindOne: (t, n = {}) => this.request({
        path: `/org/${t}`,
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
      orgControllerUpdate: (t, n, i = {}) => this.request({
        path: `/org/${t}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: P.Json,
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
      orgControllerDeleteOrg: (t, n = {}) => this.request({
        path: `/org/${t}`,
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
      orgControllerFindAllUsers: (t, n = {}) => this.request({
        path: `/org/${t}/user`,
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
      orgControllerOrgLeave: (t, n = {}) => this.request({
        path: `/org/${t}/leave`,
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
      orgControllerOrgRemoveUser: (t, n, i = {}) => this.request({
        path: `/org/${t}/member/${n}/leave`,
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
      orgControllerUsersInvite: (t, n, i = {}) => this.request({
        path: `/org/${t}/invite`,
        method: "POST",
        body: n,
        secure: !0,
        type: P.Json,
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
      orgControllerUserUpdate: (t, n, i = {}) => this.request({
        path: `/org/${t}/role`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: P.Json,
        ...i
      }),
      /**
       * No description
       *
       * @tags Orgs
       * @name OrgControllerOrgToken
       * @summary Generate User Org JWT
       * @request GET:/org/{id}/auth
       * @secure
       */
      orgControllerOrgToken: (t, n = {}) => this.request({
        path: `/org/${t}/auth`,
        method: "GET",
        secure: !0,
        format: "json",
        ...n
      })
    });
    x(this, "token", {
      /**
       * No description
       *
       * @tags Tokens
       * @name TokenControllerCreate
       * @summary Create Token
       * @request POST:/token
       * @secure
       */
      tokenControllerCreate: (t, n = {}) => this.request({
        path: "/token",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
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
      tokenControllerFindAll: (t, n = {}) => this.request({
        path: "/token",
        method: "GET",
        query: t,
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
      tokenControllerFindOne: (t, n = {}) => this.request({
        path: `/token/${t}`,
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
      tokenControllerUpdate: (t, n, i = {}) => this.request({
        path: `/token/${t}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: P.Json,
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
      tokenControllerRemove: (t, n = {}) => this.request({
        path: `/token/${t}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      })
    });
    x(this, "credential", {
      /**
       * No description
       *
       * @tags Credentials
       * @name CredentialControllerCreate
       * @summary Create Credential
       * @request POST:/credential
       * @secure
       */
      credentialControllerCreate: (t, n = {}) => this.request({
        path: "/credential",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
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
      credentialControllerFindAll: (t, n = {}) => this.request({
        path: "/credential",
        method: "GET",
        query: t,
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
      credentialControllerFindOne: (t, n = {}) => this.request({
        path: `/credential/${t}`,
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
      credentialControllerUpdate: (t, n, i = {}) => this.request({
        path: `/credential/${t}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: P.Json,
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
      credentialControllerRemove: (t, n = {}) => this.request({
        path: `/credential/${t}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      })
    });
    x(this, "template", {
      /**
       * No description
       *
       * @tags Templates
       * @name TemplateControllerCreate
       * @summary Create Template
       * @request POST:/template
       * @secure
       */
      templateControllerCreate: (t, n = {}) => this.request({
        path: "/template",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
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
      templateControllerFindAll: (t, n = {}) => this.request({
        path: "/template",
        method: "GET",
        query: t,
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
      templateControllerFindAllPinned: (t = {}) => this.request({
        path: "/template/pinned",
        method: "GET",
        secure: !0,
        format: "json",
        ...t
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
      templateControllerFindOne: (t, n = {}) => this.request({
        path: `/template/${t}`,
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
      templateControllerUpdate: (t, n, i = {}) => this.request({
        path: `/template/${t}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: P.Json,
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
      templateControllerRemove: (t, n = {}) => this.request({
        path: `/template/${t}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      })
    });
    x(this, "voiceLibrary", {
      /**
       * No description
       *
       * @tags Voice Library
       * @name VoiceLibraryControllerVoiceGetByProvider
       * @summary Get voices in Voice Library by Provider
       * @request GET:/voice-library/{provider}
       * @secure
       */
      voiceLibraryControllerVoiceGetByProvider: (t, n, i = {}) => this.request({
        path: `/voice-library/${t}`,
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
      voiceLibraryControllerVoiceGetAccentsByProvider: (t, n = {}) => this.request({
        path: `/voice-library/${t}/accents`,
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
      voiceLibraryControllerVoiceLibrarySyncByProvider: (t, n = {}) => this.request({
        path: `/voice-library/sync/${t}`,
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
      voiceLibraryControllerVoiceLibrarySyncDefaultVoices: (t, n = {}) => this.request({
        path: "/voice-library/sync",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Voice Library
       * @name VoiceLibraryControllerVoiceLibraryCreateSesameVoice
       * @summary Create a new voice in the Voice Library using Sesame
       * @request POST:/voice-library/create-sesame-voice
       * @secure
       */
      voiceLibraryControllerVoiceLibraryCreateSesameVoice: (t, n = {}) => this.request({
        path: "/voice-library/create-sesame-voice",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
        ...n
      })
    });
    x(this, "provider", {
      /**
       * No description
       *
       * @tags Provider Resources
       * @name ProviderResourceControllerCreateProviderResource
       * @summary Create Provider Resource
       * @request POST:/provider/{provider}/{resourceName}
       * @secure
       */
      providerResourceControllerCreateProviderResource: (t, n, i = {}) => this.request({
        path: `/provider/${t}/${n}`,
        method: "POST",
        secure: !0,
        format: "json",
        ...i
      }),
      /**
       * No description
       *
       * @tags Provider Resources
       * @name ProviderResourceControllerGetProviderResourcesPaginated
       * @summary List Provider Resources
       * @request GET:/provider/{provider}/{resourceName}
       * @secure
       */
      providerResourceControllerGetProviderResourcesPaginated: (t, n, i, o = {}) => this.request({
        path: `/provider/${t}/${n}`,
        method: "GET",
        query: i,
        secure: !0,
        format: "json",
        ...o
      }),
      /**
       * No description
       *
       * @tags Provider Resources
       * @name ProviderResourceControllerGetProviderResource
       * @summary Get Provider Resource
       * @request GET:/provider/{provider}/{resourceName}/{id}
       * @secure
       */
      providerResourceControllerGetProviderResource: (t, n, i, o = {}) => this.request({
        path: `/provider/${t}/${n}/${i}`,
        method: "GET",
        secure: !0,
        format: "json",
        ...o
      }),
      /**
       * No description
       *
       * @tags Provider Resources
       * @name ProviderResourceControllerDeleteProviderResource
       * @summary Delete Provider Resource
       * @request DELETE:/provider/{provider}/{resourceName}/{id}
       * @secure
       */
      providerResourceControllerDeleteProviderResource: (t, n, i, o = {}) => this.request({
        path: `/provider/${t}/${n}/${i}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...o
      }),
      /**
       * No description
       *
       * @tags Provider Resources
       * @name ProviderResourceControllerUpdateProviderResource
       * @summary Update Provider Resource
       * @request PATCH:/provider/{provider}/{resourceName}/{id}
       * @secure
       */
      providerResourceControllerUpdateProviderResource: (t, n, i, o = {}) => this.request({
        path: `/provider/${t}/${n}/${i}`,
        method: "PATCH",
        secure: !0,
        format: "json",
        ...o
      }),
      /**
       * No description
       *
       * @tags Providers
       * @name ProviderControllerGetWorkflows
       * @request GET:/{provider}/workflows
       * @secure
       */
      providerControllerGetWorkflows: (t, n, i = {}) => this.request({
        path: `/${t}/workflows`,
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
      providerControllerGetWorkflowTriggerHook: (t, n, i = {}) => this.request({
        path: `/${t}/workflows/${n}/hooks`,
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
      providerControllerGetLocations: (t, n = {}) => this.request({
        path: `/${t}/locations`,
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
      voiceProviderControllerSearchVoices: (t, n, i = {}) => this.request({
        path: `/${t}/voices/search`,
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
      voiceProviderControllerSearchVoice: (t, n, i = {}) => this.request({
        path: `/${t}/voice/search`,
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
      voiceProviderControllerAddVoices: (t, n, i = {}) => this.request({
        path: `/${t}/voices/add`,
        method: "POST",
        body: n,
        secure: !0,
        type: P.Json,
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
      voiceProviderControllerAddVoice: (t, n, i = {}) => this.request({
        path: `/${t}/voice/add`,
        method: "POST",
        body: n,
        secure: !0,
        type: P.Json,
        format: "json",
        ...i
      })
    });
    x(this, "v11Labs", {
      /**
       * No description
       *
       * @tags Providers
       * @name VoiceProviderControllerCloneVoices
       * @summary Clone a voice to the provider account and add to Vapi Voice Library.
       * @request POST:/11labs/voice/clone
       * @secure
       */
      voiceProviderControllerCloneVoices: (t, n = {}) => this.request({
        path: "/11labs/voice/clone",
        method: "POST",
        body: t,
        secure: !0,
        type: P.FormData,
        ...n
      })
    });
    x(this, "analytics", {
      /**
       * No description
       *
       * @tags Analytics
       * @name AnalyticsControllerQuery
       * @summary Create Analytics Queries
       * @request POST:/analytics
       * @secure
       */
      analyticsControllerQuery: (t, n = {}) => this.request({
        path: "/analytics",
        method: "POST",
        body: t,
        secure: !0,
        type: P.Json,
        format: "json",
        ...n
      })
    });
  }
}
Ve.Api = bu;
Object.defineProperty(_r, "__esModule", { value: !0 });
_r.client = void 0;
const _u = Ve, Su = new _u.Api({
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
_r.client = Su;
var vt = {};
Object.defineProperty(vt, "__esModule", { value: !0 });
vt.createSafeDailyConfig = wu;
vt.safeSetLocalAudio = Eu;
vt.safeSetInputDevicesAsync = ku;
vt.createSafeDailyFactoryOptions = Tu;
function wu(r) {
  if (!r)
    return {};
  const { alwaysIncludeMicInPermissionPrompt: e, ...t } = r;
  return e === !1 ? (console.warn("[Vapi] alwaysIncludeMicInPermissionPrompt:false detected. This can cause Chrome 140+ issues. Removing the property."), t) : r;
}
function Eu(r, e) {
  if (!r)
    throw new Error("Call object is not available.");
  r.setLocalAudio(e);
}
async function ku(r, e) {
  if (!r)
    throw new Error("Call object is not available.");
  if ("audioSource" in e && e.audioSource === !1) {
    console.warn("[Vapi] setInputDevicesAsync with audioSource:false detected. This can cause Chrome 140+ issues. Using default device instead.");
    const { audioSource: t, ...n } = e;
    await r.setInputDevicesAsync(n);
    return;
  }
  await r.setInputDevicesAsync(e);
}
function Tu(r) {
  return r ? r.audioSource === !1 ? (console.warn("[Vapi] audioSource:false detected in factory options. This can cause Chrome 140+ issues. Defaulting to true."), { ...r, audioSource: !0 }) : r : {};
}
var Ra = Jn && Jn.__importDefault || function(r) {
  return r && r.__esModule ? r : { default: r };
};
Object.defineProperty(Rs, "__esModule", { value: !0 });
const Vr = Ra(du), Cu = Ra(yu), $r = _r, He = vt;
function oe(r) {
  if (r == null)
    return { message: "Unknown error (null or undefined)" };
  if (r instanceof Error) {
    const e = {
      message: r.message,
      name: r.name,
      stack: r.stack
    }, t = r;
    return t.code !== void 0 && (e.code = t.code), t.cause !== void 0 && (e.cause = String(t.cause)), t.reason !== void 0 && (e.reason = t.reason), t.details !== void 0 && (e.details = t.details), t.errorMsg !== void 0 && (e.errorMsg = t.errorMsg), t.error !== void 0 && typeof t.error == "string" && (e.errorDetail = t.error), e;
  }
  if (typeof r == "string")
    return { message: r };
  if (typeof r == "object") {
    const e = r;
    return {
      message: e.message || e.error || JSON.stringify(r),
      ...e
    };
  }
  return { message: String(r) };
}
async function Ou(r, e) {
  r.muted = !1, r.autoplay = !0, e != null && (r.srcObject = new MediaStream([e]), await r.play());
}
async function Ds(r, e) {
  const t = document.createElement("audio");
  return t.dataset.participantId = e, document.body.appendChild(t), await Ou(t, r), t;
}
function js(r) {
  const e = document.querySelector(`audio[data-participant-id="${r}"]`);
  e == null || e.remove();
}
function Ls(r, e, t, n) {
  r.participant.local || e.updateParticipant(r.participant.session_id, {
    setSubscribedTracks: {
      audio: !0,
      video: t || n
    }
  });
}
class Au extends Cu.default {
  on(e, t) {
    return super.on(e, t), this;
  }
  once(e, t) {
    return super.once(e, t), this;
  }
  emit(e, ...t) {
    return super.emit(e, ...t);
  }
  removeListener(e, t) {
    return super.removeListener(e, t), this;
  }
  removeAllListeners(e) {
    return super.removeAllListeners(e), this;
  }
}
class Mu extends Au {
  constructor(t, n, i, o) {
    super();
    x(this, "started", !1);
    x(this, "call", null);
    x(this, "speakingTimeout", null);
    x(this, "dailyCallConfig", {});
    x(this, "dailyCallObject", {});
    x(this, "hasEmittedCallEndedStatus", !1);
    $r.client.baseUrl = n ?? "https://api.vapi.ai", $r.client.setSecurityData(t), this.dailyCallConfig = (0, He.createSafeDailyConfig)(i), this.dailyCallObject = (0, He.createSafeDailyFactoryOptions)(o);
  }
  async cleanup() {
    this.started = !1, this.hasEmittedCallEndedStatus = !1, this.call && (await this.call.destroy(), this.call = null), this.speakingTimeout = null;
  }
  isMobileDevice() {
    if (typeof navigator > "u")
      return !1;
    const t = navigator.userAgent;
    return /android|iphone|ipad|ipod|iemobile|blackberry|bada/i.test(t.toLowerCase());
  }
  async sleep(t) {
    return new Promise((n) => setTimeout(n, t));
  }
  async start(t, n, i, o, a, l) {
    var p, f, v, k, T, S, g;
    const u = Date.now();
    if (!t && !i && !o) {
      const b = new Error("Assistant or Squad or Workflow must be provided.");
      throw this.emit("error", {
        type: "validation-error",
        stage: "input-validation",
        error: oe(b),
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }), b;
    }
    if (this.started)
      return this.emit("call-start-progress", {
        stage: "validation",
        status: "failed",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        metadata: { reason: "already-started" }
      }), null;
    this.emit("call-start-progress", {
      stage: "initialization",
      status: "started",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      metadata: {
        hasAssistant: !!t,
        hasSquad: !!i,
        hasWorkflow: !!o
      }
    }), this.started = !0;
    try {
      this.emit("call-start-progress", {
        stage: "web-call-creation",
        status: "started",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
      const b = Date.now(), y = (await $r.client.call.callControllerCreateWebCall({
        assistant: typeof t == "string" ? void 0 : t,
        assistantId: typeof t == "string" ? t : void 0,
        assistantOverrides: n,
        squad: typeof i == "string" ? void 0 : i,
        squadId: typeof i == "string" ? i : void 0,
        workflow: typeof o == "string" ? void 0 : o,
        workflowId: typeof o == "string" ? o : void 0,
        workflowOverrides: a,
        roomDeleteOnUserLeaveEnabled: l == null ? void 0 : l.roomDeleteOnUserLeaveEnabled
      })).data, O = Date.now() - b;
      this.emit("call-start-progress", {
        stage: "web-call-creation",
        status: "completed",
        duration: O,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        metadata: {
          callId: (y == null ? void 0 : y.id) || "unknown",
          videoRecordingEnabled: ((p = y == null ? void 0 : y.artifactPlan) == null ? void 0 : p.videoRecordingEnabled) ?? !1,
          voiceProvider: ((v = (f = y == null ? void 0 : y.assistant) == null ? void 0 : f.voice) == null ? void 0 : v.provider) || "unknown"
        }
      }), this.call && (this.emit("call-start-progress", {
        stage: "daily-call-object-creation",
        status: "started",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        metadata: { action: "cleanup-existing" }
      }), await this.cleanup());
      const M = ((k = y == null ? void 0 : y.artifactPlan) == null ? void 0 : k.videoRecordingEnabled) ?? !1, D = ((S = (T = y == null ? void 0 : y.assistant) == null ? void 0 : T.voice) == null ? void 0 : S.provider) === "tavus";
      this.emit("call-start-progress", {
        stage: "daily-call-object-creation",
        status: "started",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        metadata: {
          audioSource: this.dailyCallObject.audioSource ?? !0,
          videoSource: this.dailyCallObject.videoSource ?? M,
          isVideoRecordingEnabled: M,
          isVideoEnabled: D
        }
      });
      const L = Date.now();
      try {
        this.call = Vr.default.createCallObject({
          audioSource: this.dailyCallObject.audioSource ?? !0,
          videoSource: this.dailyCallObject.videoSource ?? M,
          dailyConfig: this.dailyCallConfig
        });
        const w = Date.now() - L;
        this.emit("call-start-progress", {
          stage: "daily-call-object-creation",
          status: "completed",
          duration: w,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
      } catch (w) {
        const F = Date.now() - L, G = oe(w);
        throw this.emit("call-start-progress", {
          stage: "daily-call-object-creation",
          status: "failed",
          duration: F,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          metadata: { error: G.message }
        }), this.emit("error", {
          type: "daily-call-object-creation-error",
          stage: "daily-call-object-creation",
          error: G,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }), w;
      }
      (g = this.call.iframe()) == null || g.style.setProperty("display", "none"), this.call.on("left-meeting", () => {
        var w;
        this.emit("call-end"), this.hasEmittedCallEndedStatus || (this.emit("message", {
          type: "status-update",
          status: "ended",
          endedReason: "customer-ended-call"
        }), this.hasEmittedCallEndedStatus = !0), M && ((w = this.call) == null || w.stopRecording()), this.cleanup().catch(console.error);
      }), this.call.on("error", (w) => {
        var F;
        this.emit("error", {
          type: "daily-error",
          error: oe(w),
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }), M && ((F = this.call) == null || F.stopRecording());
      }), this.call.on("camera-error", (w) => {
        this.emit("camera-error", {
          type: "camera-error",
          error: oe(w),
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
      }), this.call.on("network-quality-change", (w) => {
        this.emit("network-quality-change", w);
      }), this.call.on("network-connection", (w) => {
        this.emit("network-connection", w);
      }), this.call.on("track-started", async (w) => {
        var F, G, ee;
        !w || !w.participant || (F = w.participant) != null && F.local || ((G = w.participant) == null ? void 0 : G.user_name) === "Vapi Speaker" && (w.track.kind === "video" && this.emit("video", w.track), w.track.kind === "audio" && await Ds(w.track, w.participant.session_id), (ee = this.call) == null || ee.sendAppMessage("playable"));
      }), this.call.on("participant-joined", (w) => {
        !w || !this.call || Ls(w, this.call, M, D);
      }), this.call.on("participant-updated", (w) => {
        w && this.emit("daily-participant-updated", w.participant);
      }), this.call.on("participant-left", (w) => {
        w && js(w.participant.session_id);
      });
      const q = this.isMobileDevice();
      if (this.emit("call-start-progress", {
        stage: "mobile-permissions",
        status: "started",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        metadata: { isMobile: q }
      }), q) {
        const w = Date.now();
        await this.sleep(1e3);
        const F = Date.now() - w;
        this.emit("call-start-progress", {
          stage: "mobile-permissions",
          status: "completed",
          duration: F,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          metadata: { action: "permissions-wait" }
        });
      } else
        this.emit("call-start-progress", {
          stage: "mobile-permissions",
          status: "completed",
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          metadata: { action: "skipped-not-mobile" }
        });
      this.emit("call-start-progress", {
        stage: "daily-call-join",
        status: "started",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
      const W = Date.now();
      try {
        await this.call.join({
          // @ts-expect-error This exists
          url: y.webCallUrl,
          subscribeToTracksAutomatically: !1
        });
        const w = Date.now() - W;
        this.emit("call-start-progress", {
          stage: "daily-call-join",
          status: "completed",
          duration: w,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
      } catch (w) {
        const F = Date.now() - W, G = oe(w);
        throw this.emit("call-start-progress", {
          stage: "daily-call-join",
          status: "failed",
          duration: F,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          metadata: { error: G.message }
        }), this.emit("error", {
          type: "daily-call-join-error",
          stage: "daily-call-join",
          error: G,
          duration: F,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }), w;
      }
      if (M) {
        this.emit("call-start-progress", {
          stage: "video-recording-setup",
          status: "started",
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
        const w = (/* @__PURE__ */ new Date()).getTime(), F = Date.now();
        try {
          this.call.startRecording({
            width: 1280,
            height: 720,
            backgroundColor: "#FF1F2D3D",
            layout: {
              preset: "default"
            }
          });
          const G = Date.now() - F;
          this.emit("call-start-progress", {
            stage: "video-recording-setup",
            status: "completed",
            duration: G,
            timestamp: (/* @__PURE__ */ new Date()).toISOString()
          }), this.call.on("recording-started", () => {
            const ee = ((/* @__PURE__ */ new Date()).getTime() - w) / 1e3;
            this.emit("call-start-progress", {
              stage: "video-recording-started",
              status: "completed",
              timestamp: (/* @__PURE__ */ new Date()).toISOString(),
              metadata: { delaySeconds: ee }
            }), this.send({
              type: "control",
              control: "say-first-message",
              videoRecordingStartDelaySeconds: ee
            });
          });
        } catch (G) {
          const ee = Date.now() - F, Je = oe(G);
          this.emit("call-start-progress", {
            stage: "video-recording-setup",
            status: "failed",
            duration: ee,
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            metadata: { error: Je.message }
          }), this.emit("error", {
            type: "video-recording-setup-error",
            stage: "video-recording-setup",
            error: Je,
            timestamp: (/* @__PURE__ */ new Date()).toISOString()
          });
        }
      } else
        this.emit("call-start-progress", {
          stage: "video-recording-setup",
          status: "completed",
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          metadata: { action: "skipped-not-enabled" }
        });
      this.emit("call-start-progress", {
        stage: "audio-observer-setup",
        status: "started",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
      const Z = Date.now();
      try {
        this.call.startRemoteParticipantsAudioLevelObserver(100);
        const w = Date.now() - Z;
        this.emit("call-start-progress", {
          stage: "audio-observer-setup",
          status: "completed",
          duration: w,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
      } catch (w) {
        const F = Date.now() - Z, G = oe(w);
        this.emit("call-start-progress", {
          stage: "audio-observer-setup",
          status: "failed",
          duration: F,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          metadata: { error: G.message }
        }), this.emit("error", {
          type: "audio-observer-setup-error",
          stage: "audio-observer-setup",
          error: G,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
      this.call.on("remote-participants-audio-level", (w) => {
        w && this.handleRemoteParticipantsAudioLevel(w);
      }), this.call.on("app-message", (w) => this.onAppMessage(w)), this.call.on("nonfatal-error", (w) => {
        var F;
        (w == null ? void 0 : w.type) === "audio-processor-error" && ((F = this.call) == null || F.updateInputSettings({
          audio: {
            processor: {
              type: "none"
            }
          }
        }).then(() => {
          (0, He.safeSetLocalAudio)(this.call, !0);
        }));
      }), this.emit("call-start-progress", {
        stage: "audio-processing-setup",
        status: "started",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
      const fe = Date.now();
      try {
        this.call.updateInputSettings({
          audio: {
            processor: {
              type: "noise-cancellation"
            }
          }
        });
        const w = Date.now() - fe;
        this.emit("call-start-progress", {
          stage: "audio-processing-setup",
          status: "completed",
          duration: w,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
      } catch (w) {
        const F = Date.now() - fe, G = oe(w);
        this.emit("call-start-progress", {
          stage: "audio-processing-setup",
          status: "failed",
          duration: F,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          metadata: { error: G.message }
        }), this.emit("error", {
          type: "audio-processing-setup-error",
          stage: "audio-processing-setup",
          error: G,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
      const ke = Date.now() - u;
      return this.emit("call-start-success", {
        totalDuration: ke,
        callId: (y == null ? void 0 : y.id) || "unknown",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }), y;
    } catch (b) {
      const y = Date.now() - u, O = oe(b);
      return this.emit("call-start-failed", {
        stage: "unknown",
        totalDuration: y,
        error: O.message,
        errorStack: O.stack || "No stack trace available",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        context: {
          hasAssistant: !!t,
          hasSquad: !!i,
          hasWorkflow: !!o,
          isMobile: this.isMobileDevice()
        }
      }), this.emit("error", {
        type: "start-method-error",
        stage: "unknown",
        error: O,
        totalDuration: y,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        context: {
          hasAssistant: !!t,
          hasSquad: !!i,
          hasWorkflow: !!o,
          isMobile: this.isMobileDevice()
        }
      }), await this.cleanup(), null;
    }
  }
  onAppMessage(t) {
    if (t)
      try {
        if (t.data === "listening")
          return this.emit("call-start");
        try {
          const n = JSON.parse(t.data);
          this.emit("message", n), n && "type" in n && "status" in n && n.type === "status-update" && n.status === "ended" && (this.hasEmittedCallEndedStatus = !0);
        } catch (n) {
          console.log("Error parsing message data: ", n);
        }
      } catch (n) {
        console.error(n);
      }
  }
  handleRemoteParticipantsAudioLevel(t) {
    const n = Object.values(t.participantsAudioLevel).reduce((o, a) => o + a, 0);
    this.emit("volume-level", Math.min(1, n / 0.15)), n > 0.01 && (this.speakingTimeout ? (clearTimeout(this.speakingTimeout), this.speakingTimeout = null) : this.emit("speech-start"), this.speakingTimeout = setTimeout(() => {
      this.emit("speech-end"), this.speakingTimeout = null;
    }, 1e3));
  }
  /**
   * Stops the call by destroying the Daily call object.
   *
   * If `roomDeleteOnUserLeaveEnabled` is set to `false`, the Vapi call will be kept alive, allowing reconnections to the same call using the `reconnect` method.
   * If `roomDeleteOnUserLeaveEnabled` is set to `true`, the Vapi call will also be destroyed, preventing any reconnections.
   */
  async stop() {
    this.started = !1, this.call && (await this.call.destroy(), this.call = null), this.speakingTimeout = null;
  }
  /**
   * Sends a Live Call Control message to the Vapi server.
   *
   * Docs: https://docs.vapi.ai/calls/call-features
   */
  send(t) {
    var n;
    (n = this.call) == null || n.sendAppMessage(JSON.stringify(t));
  }
  setMuted(t) {
    (0, He.safeSetLocalAudio)(this.call, !t);
  }
  isMuted() {
    return this.call ? this.call.localAudio() === !1 : !1;
  }
  say(t, n, i, o) {
    this.send({
      type: "say",
      message: t,
      endCallAfterSpoken: n,
      interruptionsEnabled: i ?? !1,
      interruptAssistantEnabled: o ?? !1
    });
  }
  /**
   * Ends the call immediately by sending a `end-call` message using Live Call Control, and destroys the Daily call object.
   *
   * This method always ends the call, regardless of the `roomDeleteOnUserLeaveEnabled` option.
   */
  end() {
    this.send({
      type: "end-call"
    }), this.stop();
  }
  setInputDevicesAsync(t) {
    return (0, He.safeSetInputDevicesAsync)(this.call, t);
  }
  async increaseMicLevel(t) {
    if (!this.call)
      throw new Error("Call object is not available.");
    try {
      const n = await navigator.mediaDevices.getUserMedia({ audio: !0 }), i = new AudioContext(), o = i.createMediaStreamSource(n), a = i.createGain();
      a.gain.value = t, o.connect(a);
      const l = i.createMediaStreamDestination();
      a.connect(l);
      const [u] = l.stream.getAudioTracks();
      await (0, He.safeSetInputDevicesAsync)(this.call, { audioSource: u });
    } catch (n) {
      console.error("Error adjusting microphone level:", n);
    }
  }
  setOutputDeviceAsync(t) {
    var n;
    (n = this.call) == null || n.setOutputDeviceAsync(t);
  }
  getDailyCallObject() {
    return this.call;
  }
  startScreenSharing(t, n) {
    var i;
    (i = this.call) == null || i.startScreenShare({
      displayMediaOptions: t,
      screenVideoSendSettings: n
    });
  }
  stopScreenSharing() {
    var t;
    (t = this.call) == null || t.stopScreenShare();
  }
  /**
   * Reconnects to an active call.
   *
   *
   * @param webCall
   */
  async reconnect(t) {
    var i, o, a, l, u, p, f, v, k, T, S, g, b;
    const n = Date.now();
    if (this.started)
      throw new Error("Cannot reconnect while a call is already in progress. Call stop() first.");
    if (!t.webCallUrl)
      throw new Error("webCallUrl is required for reconnection.");
    this.emit("call-start-progress", {
      stage: "reconnect-initialization",
      status: "started",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      metadata: {
        callId: t.id || "unknown",
        hasVideoRecording: !!((i = t == null ? void 0 : t.artifactPlan) != null && i.videoRecordingEnabled),
        voiceProvider: ((a = (o = t == null ? void 0 : t.assistant) == null ? void 0 : o.voice) == null ? void 0 : a.provider) || "unknown"
      }
    }), this.started = !0;
    try {
      this.call && (this.emit("call-start-progress", {
        stage: "cleanup-existing-call",
        status: "started",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }), await this.cleanup(), this.emit("call-start-progress", {
        stage: "cleanup-existing-call",
        status: "completed",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }));
      const y = ((l = t == null ? void 0 : t.artifactPlan) == null ? void 0 : l.videoRecordingEnabled) ?? !1, O = ((p = (u = t == null ? void 0 : t.assistant) == null ? void 0 : u.voice) == null ? void 0 : p.provider) === "tavus";
      this.emit("call-start-progress", {
        stage: "daily-call-object-creation",
        status: "started",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        metadata: {
          audioSource: this.dailyCallObject.audioSource ?? !0,
          videoSource: this.dailyCallObject.videoSource ?? y,
          isVideoRecordingEnabled: y,
          isVideoEnabled: O
        }
      });
      const M = Date.now();
      this.call = Vr.default.createCallObject({
        audioSource: this.dailyCallObject.audioSource ?? !0,
        videoSource: this.dailyCallObject.videoSource ?? y,
        dailyConfig: this.dailyCallConfig
      });
      const D = Date.now() - M;
      this.emit("call-start-progress", {
        stage: "daily-call-object-creation",
        status: "completed",
        duration: D,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }), (f = this.call.iframe()) == null || f.style.setProperty("display", "none"), this.call.on("left-meeting", () => {
        var w;
        this.emit("call-end"), this.hasEmittedCallEndedStatus || (this.emit("message", {
          type: "status-update",
          status: "ended",
          endedReason: "customer-ended-call"
        }), this.hasEmittedCallEndedStatus = !0), y && ((w = this.call) == null || w.stopRecording()), this.cleanup().catch(console.error);
      }), this.call.on("error", (w) => {
        var F;
        this.emit("error", {
          type: "daily-error",
          error: oe(w),
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }), y && ((F = this.call) == null || F.stopRecording());
      }), this.call.on("camera-error", (w) => {
        this.emit("camera-error", {
          type: "camera-error",
          error: oe(w),
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
      }), this.call.on("network-quality-change", (w) => {
        this.emit("network-quality-change", w);
      }), this.call.on("network-connection", (w) => {
        this.emit("network-connection", w);
      }), this.call.on("track-started", async (w) => {
        var F, G, ee;
        !w || !w.participant || (F = w.participant) != null && F.local || ((G = w.participant) == null ? void 0 : G.user_name) === "Vapi Speaker" && (w.track.kind === "video" && this.emit("video", w.track), w.track.kind === "audio" && await Ds(w.track, w.participant.session_id), (ee = this.call) == null || ee.sendAppMessage("playable"));
      }), this.call.on("participant-joined", (w) => {
        !w || !this.call || Ls(w, this.call, y, O);
      }), this.call.on("participant-updated", (w) => {
        w && this.emit("daily-participant-updated", w.participant);
      }), this.call.on("participant-left", (w) => {
        w && js(w.participant.session_id);
      }), this.call.on("remote-participants-audio-level", (w) => {
        w && this.handleRemoteParticipantsAudioLevel(w);
      }), this.call.on("app-message", (w) => this.onAppMessage(w)), this.call.on("nonfatal-error", (w) => {
        var F;
        (w == null ? void 0 : w.type) === "audio-processor-error" && ((F = this.call) == null || F.updateInputSettings({
          audio: {
            processor: {
              type: "none"
            }
          }
        }).then(() => {
          (0, He.safeSetLocalAudio)(this.call, !0);
        }));
      });
      const L = this.isMobileDevice();
      if (this.emit("call-start-progress", {
        stage: "mobile-permissions",
        status: "started",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        metadata: { isMobile: L }
      }), L) {
        const w = Date.now();
        await this.sleep(1e3);
        const F = Date.now() - w;
        this.emit("call-start-progress", {
          stage: "mobile-permissions",
          status: "completed",
          duration: F,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          metadata: { action: "permissions-wait" }
        });
      } else
        this.emit("call-start-progress", {
          stage: "mobile-permissions",
          status: "completed",
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          metadata: { action: "skipped-not-mobile" }
        });
      this.emit("call-start-progress", {
        stage: "daily-call-join",
        status: "started",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
      const q = Date.now();
      await this.call.join({
        url: t.webCallUrl,
        subscribeToTracksAutomatically: !1
      });
      const W = Date.now() - q;
      if (this.emit("call-start-progress", {
        stage: "daily-call-join",
        status: "completed",
        duration: W,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }), y) {
        this.emit("call-start-progress", {
          stage: "video-recording-setup",
          status: "started",
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
        const w = Date.now(), F = (/* @__PURE__ */ new Date()).getTime();
        try {
          this.call.startRecording({
            width: 1280,
            height: 720,
            backgroundColor: "#FF1F2D3D",
            layout: {
              preset: "default"
            }
          });
          const G = Date.now() - w;
          this.emit("call-start-progress", {
            stage: "video-recording-setup",
            status: "completed",
            duration: G,
            timestamp: (/* @__PURE__ */ new Date()).toISOString()
          }), this.call.on("recording-started", () => {
            const ee = ((/* @__PURE__ */ new Date()).getTime() - F) / 1e3;
            this.emit("call-start-progress", {
              stage: "video-recording-started",
              status: "completed",
              timestamp: (/* @__PURE__ */ new Date()).toISOString(),
              metadata: { delaySeconds: ee }
            }), this.send({
              type: "control",
              control: "say-first-message",
              videoRecordingStartDelaySeconds: ee
            });
          });
        } catch (G) {
          const ee = Date.now() - w, Je = oe(G);
          this.emit("call-start-progress", {
            stage: "video-recording-setup",
            status: "failed",
            duration: ee,
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            metadata: { error: Je.message }
          });
        }
      } else
        this.emit("call-start-progress", {
          stage: "video-recording-setup",
          status: "completed",
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          metadata: { action: "skipped-not-enabled" }
        });
      this.emit("call-start-progress", {
        stage: "audio-observer-setup",
        status: "started",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
      const Z = Date.now();
      try {
        this.call.startRemoteParticipantsAudioLevelObserver(100);
        const w = Date.now() - Z;
        this.emit("call-start-progress", {
          stage: "audio-observer-setup",
          status: "completed",
          duration: w,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
      } catch (w) {
        const F = Date.now() - Z, G = oe(w);
        this.emit("call-start-progress", {
          stage: "audio-observer-setup",
          status: "failed",
          duration: F,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          metadata: { error: G.message }
        });
      }
      this.emit("call-start-progress", {
        stage: "audio-processing-setup",
        status: "started",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
      const fe = Date.now();
      try {
        this.call.updateInputSettings({
          audio: {
            processor: {
              type: "noise-cancellation"
            }
          }
        });
        const w = Date.now() - fe;
        this.emit("call-start-progress", {
          stage: "audio-processing-setup",
          status: "completed",
          duration: w,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
      } catch (w) {
        const F = Date.now() - fe, G = oe(w);
        this.emit("call-start-progress", {
          stage: "audio-processing-setup",
          status: "failed",
          duration: F,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          metadata: { error: G.message }
        });
      }
      const ke = Date.now() - n;
      this.emit("call-start-success", {
        totalDuration: ke,
        callId: (t == null ? void 0 : t.id) || "unknown",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }), this.emit("call-start");
    } catch (y) {
      const O = Date.now() - n, M = oe(y);
      throw this.emit("call-start-failed", {
        stage: "reconnect",
        totalDuration: O,
        error: M.message,
        errorStack: M.stack || "No stack trace available",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        context: {
          isReconnect: !0,
          callId: (t == null ? void 0 : t.id) || "unknown",
          hasVideoRecording: !!((v = t == null ? void 0 : t.artifactPlan) != null && v.videoRecordingEnabled),
          voiceProvider: ((T = (k = t == null ? void 0 : t.assistant) == null ? void 0 : k.voice) == null ? void 0 : T.provider) || "unknown",
          isMobile: this.isMobileDevice()
        }
      }), this.emit("error", {
        type: "reconnect-error",
        error: M,
        totalDuration: O,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        context: {
          isReconnect: !0,
          callId: (t == null ? void 0 : t.id) || "unknown",
          hasVideoRecording: !!((S = t == null ? void 0 : t.artifactPlan) != null && S.videoRecordingEnabled),
          voiceProvider: ((b = (g = t == null ? void 0 : t.assistant) == null ? void 0 : g.voice) == null ? void 0 : b.provider) || "unknown",
          isMobile: this.isMobileDevice()
        }
      }), await this.cleanup(), y;
    }
  }
  /**
   * Runs all network connectivity tests for pre-call diagnostics.
   * Creates a temporary Daily call object for testing purposes.
   *
   * Tests performed:
   * 1. Network connectivity (TURN server) - Tests if traffic can be relayed through TURN servers
   * 2. Websocket connectivity - Tests if websocket connections can be established
   * 3. Call quality - Tests overall call quality metrics (if available in SDK version)
   *
   * @returns {Promise<Record<string, any>>} Test results object with status for each test
   *
   * @example
   * // Run pre-call network diagnostics
   * const results = await Vapi.runNetworkTestsStandalone();
   * if (results.networkConnectivity?.result === 'failed') {
   *   console.warn('Network issues detected - calls may not work properly');
   * }
   *
   * @static
   */
  static async runNetworkTestsStandalone() {
    console.log("Starting standalone network connectivity tests...");
    const t = {};
    let n = null;
    try {
      console.log("Creating temporary call object for testing..."), n = Vr.default.createCallObject({
        audioSource: !0,
        videoSource: !0
      }), console.log(`
1. Testing network connectivity (TURN server)...`);
      let i = null;
      try {
        i = (await navigator.mediaDevices.getUserMedia({ video: !0 })).getVideoTracks()[0];
        const a = await n.testNetworkConnectivity(i);
        t.networkConnectivity = a, console.log("Network connectivity test result:", a);
      } catch (o) {
        t.networkConnectivity = { result: "error", error: o == null ? void 0 : o.toString() }, console.error("Network connectivity test error:", o);
      } finally {
        i && i.stop();
      }
      console.log(`
2. Testing websocket connectivity...`);
      try {
        const o = await n.testWebsocketConnectivity();
        t.websocketConnectivity = o, console.log("Websocket connectivity test result:", o);
      } catch (o) {
        t.websocketConnectivity = { result: "error", error: o == null ? void 0 : o.toString() }, console.error("Websocket connectivity test error:", o);
      }
      console.log(`
3. Testing call quality...`);
      try {
        if (typeof n.testCallQuality == "function")
          try {
            console.log("Initializing call state with startCamera..."), await n.startCamera();
            const o = await n.testCallQuality();
            t.callQuality = o, console.log("Call quality test result:", o);
          } catch (o) {
            console.error("Failed to start camera for call quality test:", o), t.callQuality = {
              result: "error",
              error: o == null ? void 0 : o.toString(),
              message: "Failed to initialize camera for call quality test. Check camera permissions."
            };
          }
        else
          t.callQuality = { result: "not-available", message: "testCallQuality method not available" }, console.log("Call quality test not available in current Daily.co version");
      } catch (o) {
        t.callQuality = { result: "error", error: o == null ? void 0 : o.toString() }, console.error("Call quality test error:", o);
      }
    } catch (i) {
      console.error("Failed to create temporary call object:", i), t.error = i == null ? void 0 : i.toString();
    } finally {
      if (n)
        try {
          console.log("Cleaning up temporary call object..."), await n.destroy();
        } catch (i) {
          console.error("Error destroying temporary call object:", i);
        }
    }
    return console.log(`
=== Network Test Summary ===`), console.log("Results:", JSON.stringify(t, null, 2)), t;
  }
}
var Pu = Rs.default = Mu;
const Iu = ({
  idle: r,
  loading: e,
  active: t,
  width: n,
  height: i,
  position: o,
  offset: a
}) => {
  const l = parseInt(n) / 2, u = parseInt(i) / 2, p = {
    "bottom-right": `bottom: ${a}; right: ${a};`,
    "bottom-left": `bottom: ${a}; left: ${a};`,
    "top-right": `top: ${a}; right: ${a};`,
    "top-left": `top: ${a}; left: ${a};`,
    bottom: `bottom: ${a}; left: 50%; margin-left: -${l}px;`,
    right: `top: 50%; right: ${a}; margin-top: -${u}px;`,
    left: `top: 50%; left: ${a}; margin-top: -${u}px;`,
    top: `top: ${a}; left: 50%; margin-left: -${l}px;`
  }, f = document.createElement("style");
  f.innerText = `
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
      background: ${t.color};
      box-shadow: 1px 1px 80px 20px ${t.color};
    }
    .vapi-btn-pill.vapi-btn-is-active {
      background: white;
    }
    .vapi-btn-pill.vapi-btn-is-active > #vapi-icon-container {
      background: ${t.color};
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
      background: ${e.color};
      box-shadow: 1px 1px 80px 20px ${e.color};
    }
    .vapi-btn-pill.vapi-btn-is-loading {
      background: white;
    }
    .vapi-btn-pill.vapi-btn-is-loading > #vapi-icon-container {
      background: ${e.color};
    }
    .vapi-btn-is-speaking {
      // Add speaking styles if different from active/loading/idle
    }
    @font-face {
      font-family: 'LucideIcons';
      src: url(https://unpkg.com/lucide-static@latest/font/Lucide.ttf) format('truetype');
    }
  `;
  for (let v = 0; v <= 10; v++)
    f.innerText += `
      .vapi-btn-volume-${v} {
        box-shadow: 1px 1px ${5 + v * 2}px ${v * 2}px ${t.color}, inset 0px 0px 10px 0px rgba(0,0,0,0.1);
      }
    `;
  document.head.appendChild(f);
}, Du = ({
  position: r = "bottom",
  offset: e = "40px",
  width: t = "50px",
  height: n = "50px",
  idle: i,
  loading: o,
  active: a
}, l = "vapi-support-btn") => {
  Iu({ idle: i, loading: o, active: a, width: t, height: n, position: r, offset: e });
  const u = document.createElement("button");
  return u.id = l, u.className = "vapi-btn vapi-btn-round vapi-btn-is-idle", u.onclick = () => {
  }, u;
}, Ns = "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg", ju = (r) => (e, t) => {
  const n = r[t];
  if (n) {
    if (e.className = `vapi-btn vapi-btn-is-${t} ${n.type === "pill" ? "vapi-btn-pill" : n.type === "round" ? "vapi-btn-round" : ""}`, e.innerHTML = "", e.title = n.title ?? "", n.type === "pill") {
      const i = document.createElement("div");
      i.id = "vapi-icon-container";
      const o = document.createElement("img");
      o.src = n.icon || Ns, o.alt = "Icon", i.appendChild(o);
      const a = document.createElement("div");
      a.id = "vapi-title-container";
      const l = document.createElement("div");
      l.id = "vapi-title", l.textContent = n.title;
      const u = document.createElement("div");
      u.id = "vapi-subtitle", u.textContent = n.subtitle, a.appendChild(l), a.appendChild(u), e.appendChild(i), e.appendChild(a);
    } else if (n.type === "round") {
      const i = document.createElement("div");
      i.id = "vapi-icon-container";
      const o = document.createElement("img");
      o.src = n.icon || Ns, o.alt = "Icon", i.appendChild(o), e.appendChild(i);
    }
  }
};
function Lu(r, e, t, n, i, o) {
  let a = !1;
  const l = () => {
    o(e, "loading"), a ? (r.stop(), a = !1) : (t || n ? r.start(t, n) : (console.log("squad ,", i, t, n), r.start(void 0, void 0, i)), a = !0);
  };
  r.on("call-start", () => {
    o(e, "active");
  }), r.on("call-end", () => {
    o(e, "idle");
  }), r.on("speech-start", () => {
    e.classList.add("vapi-btn-is-speaking");
  }), r.on("speech-end", () => {
    e.classList.remove("vapi-btn-is-speaking");
  }), e.addEventListener("click", l), r.on("volume-level", (u) => {
    const p = Math.floor(u * 10);
    for (let f = 0; f <= 10; f++)
      e.classList.remove(`vapi-btn-volume-${f}`);
    e.classList.add(`vapi-btn-volume-${p}`);
  });
}
const Nu = ({
  apiKey: r = "",
  assistant: e,
  assistantOverrides: t,
  squad: n,
  config: i = {},
  ...o
}) => {
  function a(p, f) {
    const v = { ...p };
    return Object.keys(f).forEach((k) => {
      typeof f[k] == "object" && f[k] !== null && !Array.isArray(f[k]) ? v[k] = a(
        p[k] || {},
        f[k]
      ) : v[k] = f[k];
    }), v;
  }
  const u = a({
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
  if (r && (e || n)) {
    const p = new Pu(r), f = Du(u), v = ju(u);
    return document.body.appendChild(f), v(f, "idle"), Lu(p, f, e, t, n, v), window.vapiSDK.vapi = p, p;
  } else
    return console.error(
      "API Key and Assistant Configurations are required. are required"
    ), null;
};
window.vapiSDK = {
  run: Nu
};
