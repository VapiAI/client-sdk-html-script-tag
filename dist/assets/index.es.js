var ao = Object.defineProperty;
var oo = (e, t, r) => t in e ? ao(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var V = (e, t, r) => (oo(e, typeof t != "symbol" ? t + "" : t, r), r);
var Lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function so(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var oi = {};
function co(e, t) {
  if (e == null)
    return {};
  var r, n, o = function(c, u) {
    if (c == null)
      return {};
    var d, p, m = {}, y = Object.keys(c);
    for (p = 0; p < y.length; p++)
      d = y[p], u.indexOf(d) >= 0 || (m[d] = c[d]);
    return m;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (n = 0; n < s.length; n++)
      r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function Pr(e, t, r, n, o, s, c) {
  try {
    var u = e[s](c), d = u.value;
  } catch (p) {
    return void r(p);
  }
  u.done ? t(d) : Promise.resolve(d).then(n, o);
}
function b(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, o) {
      var s = e.apply(t, r);
      function c(d) {
        Pr(s, n, o, c, u, "next", d);
      }
      function u(d) {
        Pr(s, n, o, c, u, "throw", d);
      }
      c(void 0);
    });
  };
}
function Q(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function I(e) {
  return I = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, I(e);
}
function si(e) {
  var t = function(r, n) {
    if (I(r) !== "object" || r === null)
      return r;
    var o = r[Symbol.toPrimitive];
    if (o !== void 0) {
      var s = o.call(r, n || "default");
      if (I(s) !== "object")
        return s;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (n === "string" ? String : Number)(r);
  }(e, "string");
  return I(t) === "symbol" ? t : String(t);
}
function jr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, si(n.key), n);
  }
}
function Z(e, t, r) {
  return t && jr(e.prototype, t), r && jr(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ce(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ge(e, t) {
  return Ge = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Ge(e, t);
}
function yt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ge(e, t);
}
function bt(e, t) {
  if (t && (I(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ce(e);
}
function H(e) {
  return H = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, H(e);
}
function ge(e, t, r) {
  return (t = si(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ir(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function ke(e, t) {
  return function(r) {
    if (Array.isArray(r))
      return r;
  }(e) || function(r, n) {
    var o = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
    if (o != null) {
      var s, c, u, d, p = [], m = !0, y = !1;
      try {
        if (u = (o = o.call(r)).next, n === 0) {
          if (Object(o) !== o)
            return;
          m = !1;
        } else
          for (; !(m = (s = u.call(o)).done) && (p.push(s.value), p.length !== n); m = !0)
            ;
      } catch (_) {
        y = !0, c = _;
      } finally {
        try {
          if (!m && o.return != null && (d = o.return(), Object(d) !== d))
            return;
        } finally {
          if (y)
            throw c;
        }
      }
      return p;
    }
  }(e, t) || function(r, n) {
    if (r) {
      if (typeof r == "string")
        return Ir(r, n);
      var o = Object.prototype.toString.call(r).slice(8, -1);
      return o === "Object" && r.constructor && (o = r.constructor.name), o === "Map" || o === "Set" ? Array.from(r) : o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? Ir(r, n) : void 0;
    }
  }(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
var ci, et = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, le = {}, lo = { get exports() {
  return le;
}, set exports(e) {
  le = e;
} }, je = typeof Reflect == "object" ? Reflect : null, Dr = je && typeof je.apply == "function" ? je.apply : function(e, t, r) {
  return Function.prototype.apply.call(e, t, r);
};
ci = je && typeof je.ownKeys == "function" ? je.ownKeys : Object.getOwnPropertySymbols ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : function(e) {
  return Object.getOwnPropertyNames(e);
};
var Nr = Number.isNaN || function(e) {
  return e != e;
};
function A() {
  A.init.call(this);
}
lo.exports = A, le.once = function(e, t) {
  return new Promise(function(r, n) {
    function o(c) {
      e.removeListener(t, s), n(c);
    }
    function s() {
      typeof e.removeListener == "function" && e.removeListener("error", o), r([].slice.call(arguments));
    }
    Ur(e, t, s, { once: !0 }), t !== "error" && function(c, u, d) {
      typeof c.on == "function" && Ur(c, "error", u, d);
    }(e, o, { once: !0 });
  });
}, A.EventEmitter = A, A.prototype._events = void 0, A.prototype._eventsCount = 0, A.prototype._maxListeners = void 0;
var Rr = 10;
function at(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
function li(e) {
  return e._maxListeners === void 0 ? A.defaultMaxListeners : e._maxListeners;
}
function Fr(e, t, r, n) {
  var o, s, c, u;
  if (at(r), (s = e._events) === void 0 ? (s = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (s.newListener !== void 0 && (e.emit("newListener", t, r.listener ? r.listener : r), s = e._events), c = s[t]), c === void 0)
    c = s[t] = r, ++e._eventsCount;
  else if (typeof c == "function" ? c = s[t] = n ? [r, c] : [c, r] : n ? c.unshift(r) : c.push(r), (o = li(e)) > 0 && c.length > o && !c.warned) {
    c.warned = !0;
    var d = new Error("Possible EventEmitter memory leak detected. " + c.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    d.name = "MaxListenersExceededWarning", d.emitter = e, d.type = t, d.count = c.length, u = d, console && console.warn && console.warn(u);
  }
  return e;
}
function uo() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function xr(e, t, r) {
  var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r }, o = uo.bind(n);
  return o.listener = r, n.wrapFn = o, o;
}
function Vr(e, t, r) {
  var n = e._events;
  if (n === void 0)
    return [];
  var o = n[t];
  return o === void 0 ? [] : typeof o == "function" ? r ? [o.listener || o] : [o] : r ? function(s) {
    for (var c = new Array(s.length), u = 0; u < c.length; ++u)
      c[u] = s[u].listener || s[u];
    return c;
  }(o) : ui(o, o.length);
}
function Br(e) {
  var t = this._events;
  if (t !== void 0) {
    var r = t[e];
    if (typeof r == "function")
      return 1;
    if (r !== void 0)
      return r.length;
  }
  return 0;
}
function ui(e, t) {
  for (var r = new Array(t), n = 0; n < t; ++n)
    r[n] = e[n];
  return r;
}
function Ur(e, t, r, n) {
  if (typeof e.on == "function")
    n.once ? e.once(t, r) : e.on(t, r);
  else {
    if (typeof e.addEventListener != "function")
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
    e.addEventListener(t, function o(s) {
      n.once && e.removeEventListener(t, o), r(s);
    });
  }
}
Object.defineProperty(A, "defaultMaxListeners", { enumerable: !0, get: function() {
  return Rr;
}, set: function(e) {
  if (typeof e != "number" || e < 0 || Nr(e))
    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
  Rr = e;
} }), A.init = function() {
  this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, A.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || Nr(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
}, A.prototype.getMaxListeners = function() {
  return li(this);
}, A.prototype.emit = function(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t.push(arguments[r]);
  var n = e === "error", o = this._events;
  if (o !== void 0)
    n = n && o.error === void 0;
  else if (!n)
    return !1;
  if (n) {
    var s;
    if (t.length > 0 && (s = t[0]), s instanceof Error)
      throw s;
    var c = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
    throw c.context = s, c;
  }
  var u = o[e];
  if (u === void 0)
    return !1;
  if (typeof u == "function")
    Dr(u, this, t);
  else {
    var d = u.length, p = ui(u, d);
    for (r = 0; r < d; ++r)
      Dr(p[r], this, t);
  }
  return !0;
}, A.prototype.addListener = function(e, t) {
  return Fr(this, e, t, !1);
}, A.prototype.on = A.prototype.addListener, A.prototype.prependListener = function(e, t) {
  return Fr(this, e, t, !0);
}, A.prototype.once = function(e, t) {
  return at(t), this.on(e, xr(this, e, t)), this;
}, A.prototype.prependOnceListener = function(e, t) {
  return at(t), this.prependListener(e, xr(this, e, t)), this;
}, A.prototype.removeListener = function(e, t) {
  var r, n, o, s, c;
  if (at(t), (n = this._events) === void 0)
    return this;
  if ((r = n[e]) === void 0)
    return this;
  if (r === t || r.listener === t)
    --this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, r.listener || t));
  else if (typeof r != "function") {
    for (o = -1, s = r.length - 1; s >= 0; s--)
      if (r[s] === t || r[s].listener === t) {
        c = r[s].listener, o = s;
        break;
      }
    if (o < 0)
      return this;
    o === 0 ? r.shift() : function(u, d) {
      for (; d + 1 < u.length; d++)
        u[d] = u[d + 1];
      u.pop();
    }(r, o), r.length === 1 && (n[e] = r[0]), n.removeListener !== void 0 && this.emit("removeListener", e, c || t);
  }
  return this;
}, A.prototype.off = A.prototype.removeListener, A.prototype.removeAllListeners = function(e) {
  var t, r, n;
  if ((r = this._events) === void 0)
    return this;
  if (r.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : r[e] !== void 0 && (--this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete r[e]), this;
  if (arguments.length === 0) {
    var o, s = Object.keys(r);
    for (n = 0; n < s.length; ++n)
      (o = s[n]) !== "removeListener" && this.removeAllListeners(o);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (typeof (t = r[e]) == "function")
    this.removeListener(e, t);
  else if (t !== void 0)
    for (n = t.length - 1; n >= 0; n--)
      this.removeListener(e, t[n]);
  return this;
}, A.prototype.listeners = function(e) {
  return Vr(this, e, !0);
}, A.prototype.rawListeners = function(e) {
  return Vr(this, e, !1);
}, A.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Br.call(e, t);
}, A.prototype.listenerCount = Br, A.prototype.eventNames = function() {
  return this._eventsCount > 0 ? ci(this._events) : [];
};
var ho = typeof Map == "function", fo = typeof Set == "function", po = typeof WeakSet == "function", Yr = Object.keys, qr = function(e, t) {
  return e && typeof e == "object" && t.add(e);
}, Jr = function(e, t, r, n) {
  for (var o, s = 0; s < e.length; s++)
    if (r((o = e[s])[0], t[0], n) && r(o[1], t[1], n))
      return !0;
  return !1;
}, Yt = function(e, t, r, n) {
  for (var o = 0; o < e.length; o++)
    if (r(e[o], t, n))
      return !0;
  return !1;
}, $e = function(e, t) {
  return e === t || e != e && t != t;
}, zr = function(e) {
  return e.constructor === Object;
}, Wr = function(e) {
  return typeof e.then == "function";
}, Gr = function(e) {
  return !(!e.$$typeof || !e._store);
}, $r = function(e) {
  return function(t) {
    var r = e || t;
    return function(n, o, s) {
      s === void 0 && (s = po ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ Object.create({ _values: [], add: function(d) {
        this._values.push(d);
      }, has: function(d) {
        return !!~this._values.indexOf(d);
      } }));
      var c = s.has(n), u = s.has(o);
      return c || u ? c && u : (qr(n, s), qr(o, s), r(n, o, s));
    };
  };
}, Kr = function(e) {
  var t = [];
  return e.forEach(function(r, n) {
    return t.push([n, r]);
  }), t;
}, Hr = function(e) {
  var t = [];
  return e.forEach(function(r) {
    return t.push(r);
  }), t;
}, Qr = function(e, t, r, n) {
  var o, s = Yr(e), c = Yr(t);
  if (s.length !== c.length)
    return !1;
  for (var u = 0; u < s.length; u++)
    if (o = s[u], !Yt(c, o, $e) || (o !== "_owner" || !Gr(e) || !Gr(t)) && !r(e[o], t[o], n))
      return !1;
  return !0;
}, Zr = Array.isArray, vt = function(e) {
  var t = typeof e == "function" ? e(r) : r;
  function r(n, o, s) {
    if ($e(n, o))
      return !0;
    var c = typeof n;
    if (c !== typeof o || c !== "object" || !n || !o)
      return !1;
    if (zr(n) && zr(o))
      return Qr(n, o, t, s);
    var u = Zr(n), d = Zr(o);
    if (u || d)
      return u === d && function(U, K, ee, te) {
        if (U.length !== K.length)
          return !1;
        for (var q = 0; q < U.length; q++)
          if (!ee(U[q], K[q], te))
            return !1;
        return !0;
      }(n, o, t, s);
    var p = n instanceof Date, m = o instanceof Date;
    if (p || m)
      return p === m && $e(n.getTime(), o.getTime());
    var y, _, R = n instanceof RegExp, M = o instanceof RegExp;
    if (R || M)
      return R === M && (_ = o, (y = n).source === _.source && y.global === _.global && y.ignoreCase === _.ignoreCase && y.multiline === _.multiline && y.unicode === _.unicode && y.sticky === _.sticky && y.lastIndex === _.lastIndex);
    if (Wr(n) || Wr(o))
      return n === o;
    if (ho) {
      var j = n instanceof Map, O = o instanceof Map;
      if (j || O)
        return j === O && function(U, K, ee, te) {
          if (U.size !== K.size)
            return !1;
          for (var q = Kr(U), de = Kr(K), G = 0; G < q.length; G++)
            if (!Jr(de, q[G], ee, te) || !Jr(q, de[G], ee, te))
              return !1;
          return !0;
        }(n, o, t, s);
    }
    if (fo) {
      var Y = n instanceof Set, x = o instanceof Set;
      if (Y || x)
        return Y === x && function(U, K, ee, te) {
          if (U.size !== K.size)
            return !1;
          for (var q = Hr(U), de = Hr(K), G = 0; G < q.length; G++)
            if (!Yt(de, q[G], ee, te) || !Yt(q, de[G], ee, te))
              return !1;
          return !0;
        }(n, o, t, s);
    }
    return Qr(n, o, t, s);
  }
  return r;
};
vt($r()), vt($r($e));
var fe = vt();
vt(function() {
  return $e;
});
const vo = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" }, di = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" }, F = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" }, J = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" }, pe = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" };
class v {
  static getFirstMatch(t, r) {
    const n = r.match(t);
    return n && n.length > 0 && n[1] || "";
  }
  static getSecondMatch(t, r) {
    const n = r.match(t);
    return n && n.length > 1 && n[2] || "";
  }
  static matchAndReturnConst(t, r, n) {
    if (t.test(r))
      return n;
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
    const r = t.split(".").splice(0, 2).map((n) => parseInt(n, 10) || 0);
    if (r.push(0), r[0] === 10)
      switch (r[1]) {
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
    const r = t.split(".").splice(0, 2).map((n) => parseInt(n, 10) || 0);
    if (r.push(0), !(r[0] === 1 && r[1] < 5))
      return r[0] === 1 && r[1] < 6 ? "Cupcake" : r[0] === 1 && r[1] >= 6 ? "Donut" : r[0] === 2 && r[1] < 2 ? "Eclair" : r[0] === 2 && r[1] === 2 ? "Froyo" : r[0] === 2 && r[1] > 2 ? "Gingerbread" : r[0] === 3 ? "Honeycomb" : r[0] === 4 && r[1] < 1 ? "Ice Cream Sandwich" : r[0] === 4 && r[1] < 4 ? "Jelly Bean" : r[0] === 4 && r[1] >= 4 ? "KitKat" : r[0] === 5 ? "Lollipop" : r[0] === 6 ? "Marshmallow" : r[0] === 7 ? "Nougat" : r[0] === 8 ? "Oreo" : r[0] === 9 ? "Pie" : void 0;
  }
  static getVersionPrecision(t) {
    return t.split(".").length;
  }
  static compareVersions(t, r, n = !1) {
    const o = v.getVersionPrecision(t), s = v.getVersionPrecision(r);
    let c = Math.max(o, s), u = 0;
    const d = v.map([t, r], (p) => {
      const m = c - v.getVersionPrecision(p), y = p + new Array(m + 1).join(".0");
      return v.map(y.split("."), (_) => new Array(20 - _.length).join("0") + _).reverse();
    });
    for (n && (u = c - Math.min(o, s)), c -= 1; c >= u; ) {
      if (d[0][c] > d[1][c])
        return 1;
      if (d[0][c] === d[1][c]) {
        if (c === u)
          return 0;
        c -= 1;
      } else if (d[0][c] < d[1][c])
        return -1;
    }
  }
  static map(t, r) {
    const n = [];
    let o;
    if (Array.prototype.map)
      return Array.prototype.map.call(t, r);
    for (o = 0; o < t.length; o += 1)
      n.push(r(t[o]));
    return n;
  }
  static find(t, r) {
    let n, o;
    if (Array.prototype.find)
      return Array.prototype.find.call(t, r);
    for (n = 0, o = t.length; n < o; n += 1) {
      const s = t[n];
      if (r(s, n))
        return s;
    }
  }
  static assign(t, ...r) {
    const n = t;
    let o, s;
    if (Object.assign)
      return Object.assign(t, ...r);
    for (o = 0, s = r.length; o < s; o += 1) {
      const c = r[o];
      typeof c == "object" && c !== null && Object.keys(c).forEach((u) => {
        n[u] = c[u];
      });
    }
    return t;
  }
  static getBrowserAlias(t) {
    return vo[t];
  }
  static getBrowserTypeByAlias(t) {
    return di[t] || "";
  }
}
const P = /version\/(\d+(\.?_?\d+)+)/i, mo = [{ test: [/googlebot/i], describe(e) {
  const t = { name: "Googlebot" }, r = v.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || v.getFirstMatch(P, e);
  return r && (t.version = r), t;
} }, { test: [/opera/i], describe(e) {
  const t = { name: "Opera" }, r = v.getFirstMatch(P, e) || v.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/opr\/|opios/i], describe(e) {
  const t = { name: "Opera" }, r = v.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || v.getFirstMatch(P, e);
  return r && (t.version = r), t;
} }, { test: [/SamsungBrowser/i], describe(e) {
  const t = { name: "Samsung Internet for Android" }, r = v.getFirstMatch(P, e) || v.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/Whale/i], describe(e) {
  const t = { name: "NAVER Whale Browser" }, r = v.getFirstMatch(P, e) || v.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/MZBrowser/i], describe(e) {
  const t = { name: "MZ Browser" }, r = v.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || v.getFirstMatch(P, e);
  return r && (t.version = r), t;
} }, { test: [/focus/i], describe(e) {
  const t = { name: "Focus" }, r = v.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || v.getFirstMatch(P, e);
  return r && (t.version = r), t;
} }, { test: [/swing/i], describe(e) {
  const t = { name: "Swing" }, r = v.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || v.getFirstMatch(P, e);
  return r && (t.version = r), t;
} }, { test: [/coast/i], describe(e) {
  const t = { name: "Opera Coast" }, r = v.getFirstMatch(P, e) || v.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe(e) {
  const t = { name: "Opera Touch" }, r = v.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || v.getFirstMatch(P, e);
  return r && (t.version = r), t;
} }, { test: [/yabrowser/i], describe(e) {
  const t = { name: "Yandex Browser" }, r = v.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || v.getFirstMatch(P, e);
  return r && (t.version = r), t;
} }, { test: [/ucbrowser/i], describe(e) {
  const t = { name: "UC Browser" }, r = v.getFirstMatch(P, e) || v.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/Maxthon|mxios/i], describe(e) {
  const t = { name: "Maxthon" }, r = v.getFirstMatch(P, e) || v.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/epiphany/i], describe(e) {
  const t = { name: "Epiphany" }, r = v.getFirstMatch(P, e) || v.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/puffin/i], describe(e) {
  const t = { name: "Puffin" }, r = v.getFirstMatch(P, e) || v.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/sleipnir/i], describe(e) {
  const t = { name: "Sleipnir" }, r = v.getFirstMatch(P, e) || v.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/k-meleon/i], describe(e) {
  const t = { name: "K-Meleon" }, r = v.getFirstMatch(P, e) || v.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/micromessenger/i], describe(e) {
  const t = { name: "WeChat" }, r = v.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || v.getFirstMatch(P, e);
  return r && (t.version = r), t;
} }, { test: [/qqbrowser/i], describe(e) {
  const t = { name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser" }, r = v.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || v.getFirstMatch(P, e);
  return r && (t.version = r), t;
} }, { test: [/msie|trident/i], describe(e) {
  const t = { name: "Internet Explorer" }, r = v.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/\sedg\//i], describe(e) {
  const t = { name: "Microsoft Edge" }, r = v.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/edg([ea]|ios)/i], describe(e) {
  const t = { name: "Microsoft Edge" }, r = v.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/vivaldi/i], describe(e) {
  const t = { name: "Vivaldi" }, r = v.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/seamonkey/i], describe(e) {
  const t = { name: "SeaMonkey" }, r = v.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/sailfish/i], describe(e) {
  const t = { name: "Sailfish" }, r = v.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
  return r && (t.version = r), t;
} }, { test: [/silk/i], describe(e) {
  const t = { name: "Amazon Silk" }, r = v.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/phantom/i], describe(e) {
  const t = { name: "PhantomJS" }, r = v.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/slimerjs/i], describe(e) {
  const t = { name: "SlimerJS" }, r = v.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe(e) {
  const t = { name: "BlackBerry" }, r = v.getFirstMatch(P, e) || v.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/(web|hpw)[o0]s/i], describe(e) {
  const t = { name: "WebOS Browser" }, r = v.getFirstMatch(P, e) || v.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/bada/i], describe(e) {
  const t = { name: "Bada" }, r = v.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/tizen/i], describe(e) {
  const t = { name: "Tizen" }, r = v.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || v.getFirstMatch(P, e);
  return r && (t.version = r), t;
} }, { test: [/qupzilla/i], describe(e) {
  const t = { name: "QupZilla" }, r = v.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || v.getFirstMatch(P, e);
  return r && (t.version = r), t;
} }, { test: [/firefox|iceweasel|fxios/i], describe(e) {
  const t = { name: "Firefox" }, r = v.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/electron/i], describe(e) {
  const t = { name: "Electron" }, r = v.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/MiuiBrowser/i], describe(e) {
  const t = { name: "Miui" }, r = v.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/chromium/i], describe(e) {
  const t = { name: "Chromium" }, r = v.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || v.getFirstMatch(P, e);
  return r && (t.version = r), t;
} }, { test: [/chrome|crios|crmo/i], describe(e) {
  const t = { name: "Chrome" }, r = v.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/GSA/i], describe(e) {
  const t = { name: "Google Search" }, r = v.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test(e) {
  const t = !e.test(/like android/i), r = e.test(/android/i);
  return t && r;
}, describe(e) {
  const t = { name: "Android Browser" }, r = v.getFirstMatch(P, e);
  return r && (t.version = r), t;
} }, { test: [/playstation 4/i], describe(e) {
  const t = { name: "PlayStation 4" }, r = v.getFirstMatch(P, e);
  return r && (t.version = r), t;
} }, { test: [/safari|applewebkit/i], describe(e) {
  const t = { name: "Safari" }, r = v.getFirstMatch(P, e);
  return r && (t.version = r), t;
} }, { test: [/.*/i], describe(e) {
  const t = e.search("\\(") !== -1 ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
  return { name: v.getFirstMatch(t, e), version: v.getSecondMatch(t, e) };
} }];
var go = [{ test: [/Roku\/DVP/], describe(e) {
  const t = v.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
  return { name: J.Roku, version: t };
} }, { test: [/windows phone/i], describe(e) {
  const t = v.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
  return { name: J.WindowsPhone, version: t };
} }, { test: [/windows /i], describe(e) {
  const t = v.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e), r = v.getWindowsVersionName(t);
  return { name: J.Windows, version: t, versionName: r };
} }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe(e) {
  const t = { name: J.iOS }, r = v.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
  return r && (t.version = r), t;
} }, { test: [/macintosh/i], describe(e) {
  const t = v.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."), r = v.getMacOSVersionName(t), n = { name: J.MacOS, version: t };
  return r && (n.versionName = r), n;
} }, { test: [/(ipod|iphone|ipad)/i], describe(e) {
  const t = v.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
  return { name: J.iOS, version: t };
} }, { test(e) {
  const t = !e.test(/like android/i), r = e.test(/android/i);
  return t && r;
}, describe(e) {
  const t = v.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e), r = v.getAndroidVersionName(t), n = { name: J.Android, version: t };
  return r && (n.versionName = r), n;
} }, { test: [/(web|hpw)[o0]s/i], describe(e) {
  const t = v.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e), r = { name: J.WebOS };
  return t && t.length && (r.version = t), r;
} }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe(e) {
  const t = v.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || v.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || v.getFirstMatch(/\bbb(\d+)/i, e);
  return { name: J.BlackBerry, version: t };
} }, { test: [/bada/i], describe(e) {
  const t = v.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
  return { name: J.Bada, version: t };
} }, { test: [/tizen/i], describe(e) {
  const t = v.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
  return { name: J.Tizen, version: t };
} }, { test: [/linux/i], describe: () => ({ name: J.Linux }) }, { test: [/CrOS/], describe: () => ({ name: J.ChromeOS }) }, { test: [/PlayStation 4/], describe(e) {
  const t = v.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
  return { name: J.PlayStation4, version: t };
} }], yo = [{ test: [/googlebot/i], describe: () => ({ type: "bot", vendor: "Google" }) }, { test: [/huawei/i], describe(e) {
  const t = v.getFirstMatch(/(can-l01)/i, e) && "Nova", r = { type: F.mobile, vendor: "Huawei" };
  return t && (r.model = t), r;
} }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: () => ({ type: F.tablet, vendor: "Nexus" }) }, { test: [/ipad/i], describe: () => ({ type: F.tablet, vendor: "Apple", model: "iPad" }) }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: () => ({ type: F.tablet, vendor: "Apple", model: "iPad" }) }, { test: [/kftt build/i], describe: () => ({ type: F.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" }) }, { test: [/silk/i], describe: () => ({ type: F.tablet, vendor: "Amazon" }) }, { test: [/tablet(?! pc)/i], describe: () => ({ type: F.tablet }) }, { test(e) {
  const t = e.test(/ipod|iphone/i), r = e.test(/like (ipod|iphone)/i);
  return t && !r;
}, describe(e) {
  const t = v.getFirstMatch(/(ipod|iphone)/i, e);
  return { type: F.mobile, vendor: "Apple", model: t };
} }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: () => ({ type: F.mobile, vendor: "Nexus" }) }, { test: [/[^-]mobi/i], describe: () => ({ type: F.mobile }) }, { test: (e) => e.getBrowserName(!0) === "blackberry", describe: () => ({ type: F.mobile, vendor: "BlackBerry" }) }, { test: (e) => e.getBrowserName(!0) === "bada", describe: () => ({ type: F.mobile }) }, { test: (e) => e.getBrowserName() === "windows phone", describe: () => ({ type: F.mobile, vendor: "Microsoft" }) }, { test(e) {
  const t = Number(String(e.getOSVersion()).split(".")[0]);
  return e.getOSName(!0) === "android" && t >= 3;
}, describe: () => ({ type: F.tablet }) }, { test: (e) => e.getOSName(!0) === "android", describe: () => ({ type: F.mobile }) }, { test: (e) => e.getOSName(!0) === "macos", describe: () => ({ type: F.desktop, vendor: "Apple" }) }, { test: (e) => e.getOSName(!0) === "windows", describe: () => ({ type: F.desktop }) }, { test: (e) => e.getOSName(!0) === "linux", describe: () => ({ type: F.desktop }) }, { test: (e) => e.getOSName(!0) === "playstation 4", describe: () => ({ type: F.tv }) }, { test: (e) => e.getOSName(!0) === "roku", describe: () => ({ type: F.tv }) }], bo = [{ test: (e) => e.getBrowserName(!0) === "microsoft edge", describe(e) {
  if (/\sedg\//i.test(e))
    return { name: pe.Blink };
  const t = v.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
  return { name: pe.EdgeHTML, version: t };
} }, { test: [/trident/i], describe(e) {
  const t = { name: pe.Trident }, r = v.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: (e) => e.test(/presto/i), describe(e) {
  const t = { name: pe.Presto }, r = v.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test(e) {
  const t = e.test(/gecko/i), r = e.test(/like gecko/i);
  return t && !r;
}, describe(e) {
  const t = { name: pe.Gecko }, r = v.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }, { test: [/(apple)?webkit\/537\.36/i], describe: () => ({ name: pe.Blink }) }, { test: [/(apple)?webkit/i], describe(e) {
  const t = { name: pe.WebKit }, r = v.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
  return r && (t.version = r), t;
} }];
class Xr {
  constructor(t, r = !1) {
    if (t == null || t === "")
      throw new Error("UserAgent parameter can't be empty");
    this._ua = t, this.parsedResult = {}, r !== !0 && this.parse();
  }
  getUA() {
    return this._ua;
  }
  test(t) {
    return t.test(this._ua);
  }
  parseBrowser() {
    this.parsedResult.browser = {};
    const t = v.find(mo, (r) => {
      if (typeof r.test == "function")
        return r.test(this);
      if (r.test instanceof Array)
        return r.test.some((n) => this.test(n));
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
    const t = v.find(go, (r) => {
      if (typeof r.test == "function")
        return r.test(this);
      if (r.test instanceof Array)
        return r.test.some((n) => this.test(n));
      throw new Error("Browser's test function is not valid");
    });
    return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os;
  }
  getOSName(t) {
    const { name: r } = this.getOS();
    return t ? String(r).toLowerCase() || "" : r || "";
  }
  getOSVersion() {
    return this.getOS().version;
  }
  getPlatform() {
    return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
  }
  getPlatformType(t = !1) {
    const { type: r } = this.getPlatform();
    return t ? String(r).toLowerCase() || "" : r || "";
  }
  parsePlatform() {
    this.parsedResult.platform = {};
    const t = v.find(yo, (r) => {
      if (typeof r.test == "function")
        return r.test(this);
      if (r.test instanceof Array)
        return r.test.some((n) => this.test(n));
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
    const t = v.find(bo, (r) => {
      if (typeof r.test == "function")
        return r.test(this);
      if (r.test instanceof Array)
        return r.test.some((n) => this.test(n));
      throw new Error("Browser's test function is not valid");
    });
    return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine;
  }
  parse() {
    return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
  }
  getResult() {
    return v.assign({}, this.parsedResult);
  }
  satisfies(t) {
    const r = {};
    let n = 0;
    const o = {};
    let s = 0;
    if (Object.keys(t).forEach((c) => {
      const u = t[c];
      typeof u == "string" ? (o[c] = u, s += 1) : typeof u == "object" && (r[c] = u, n += 1);
    }), n > 0) {
      const c = Object.keys(r), u = v.find(c, (p) => this.isOS(p));
      if (u) {
        const p = this.satisfies(r[u]);
        if (p !== void 0)
          return p;
      }
      const d = v.find(c, (p) => this.isPlatform(p));
      if (d) {
        const p = this.satisfies(r[d]);
        if (p !== void 0)
          return p;
      }
    }
    if (s > 0) {
      const c = Object.keys(o), u = v.find(c, (d) => this.isBrowser(d, !0));
      if (u !== void 0)
        return this.compareVersion(o[u]);
    }
  }
  isBrowser(t, r = !1) {
    const n = this.getBrowserName().toLowerCase();
    let o = t.toLowerCase();
    const s = v.getBrowserTypeByAlias(o);
    return r && s && (o = s.toLowerCase()), o === n;
  }
  compareVersion(t) {
    let r = [0], n = t, o = !1;
    const s = this.getBrowserVersion();
    if (typeof s == "string")
      return t[0] === ">" || t[0] === "<" ? (n = t.substr(1), t[1] === "=" ? (o = !0, n = t.substr(2)) : r = [], t[0] === ">" ? r.push(1) : r.push(-1)) : t[0] === "=" ? n = t.substr(1) : t[0] === "~" && (o = !0, n = t.substr(1)), r.indexOf(v.compareVersions(s, n, o)) > -1;
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
  is(t, r = !1) {
    return this.isBrowser(t, r) || this.isOS(t) || this.isPlatform(t);
  }
  some(t = []) {
    return t.some((r) => this.is(r));
  }
}
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */
class _o {
  static getParser(t, r = !1) {
    if (typeof t != "string")
      throw new Error("UserAgent should be a string");
    return new Xr(t, r);
  }
  static parse(t) {
    return new Xr(t).getResult();
  }
  static get BROWSER_MAP() {
    return di;
  }
  static get ENGINE_MAP() {
    return pe;
  }
  static get OS_MAP() {
    return J;
  }
  static get PLATFORMS_MAP() {
    return F;
  }
}
function _t() {
  return Date.now() + Math.random().toString();
}
function Be() {
  throw new Error("Method must be implemented in subclass");
}
function hi(e) {
  return window._dailyConfig && window._dailyConfig.proxyUrl ? window._dailyConfig.proxyUrl + (window._dailyConfig.proxyUrl.slice(-1) === "/" ? "" : "/") + e.substring(8) : e;
}
function fi() {
  return window._dailyConfig && window._dailyConfig.callObjectBundleUrlOverride ? window._dailyConfig.callObjectBundleUrlOverride : hi("https://c.daily.co/call-machine/versioned/".concat("0.53.0", "/static/call-machine-object-bundle.js"));
}
function Ke(e) {
  try {
    new URL(e);
  } catch {
    return !1;
  }
  return !0;
}
var qt = "new", en = "loading", tn = "loaded", Te = "joining-meeting", W = "joined-meeting", ve = "left-meeting", me = "error", wo = "blocked", So = "off", ko = "sendable", Co = "loading", Mo = "interrupted", To = "playable", ot = "unknown", pi = "full", Ao = "lobby", Eo = "none", vi = "base", mi = "*", Oo = "ejected", Lo = "nbf-room", Po = "nbf-token", jo = "exp-room", Io = "exp-token", Do = "meeting-full", No = "end-of-life", Ro = "not-allowed", Fo = "connection-error", xo = "cam-in-use", Vo = "mic-in-use", Bo = "cam-mic-in-use", Uo = "permissions", Yo = "undefined-mediadevices", qo = "not-found", Jo = "constraints", zo = "unknown", gi = "iframe-ready-for-launch-config", yi = "iframe-launch-config", Jt = "theme-updated", zt = "loading", Wt = "load-attempt-failed", st = "loaded", bi = "started-camera", _i = "camera-error", Gt = "joining-meeting", wi = "joined-meeting", Si = "left-meeting", rn = "available-devices-updated", ki = "participant-joined", Ci = "participant-updated", Mi = "participant-left", Ti = "participant-counts-updated", Ai = "access-state-updated", Ei = "meeting-session-updated", Oi = "meeting-session-state-updated", Wo = "meeting-session-data-error", Li = "waiting-participant-added", Pi = "waiting-participant-updated", ji = "waiting-participant-removed", $t = "track-started", Kt = "track-stopped", Ii = "transcription-started", Di = "transcription-stopped", Ni = "transcription-error", ct = "recording-started", lt = "recording-stopped", Ri = "recording-stats", Fi = "recording-error", xi = "recording-upload-completed", Vi = "recording-data", Bi = "app-message", Ui = "remote-media-player-started", Yi = "remote-media-player-updated", qi = "remote-media-player-stopped", Ji = "local-screen-share-started", zi = "local-screen-share-stopped", Wi = "active-speaker-change", Gi = "active-speaker-mode-change", $i = "network-quality-change", Ki = "network-connection", Hi = "cpu-load-change", _e = "fullscreen", we = "exited-fullscreen", Qi = "live-streaming-started", Zi = "live-streaming-updated", Xi = "live-streaming-stopped", ea = "live-streaming-error", ta = "lang-updated", ra = "receive-settings-updated", na = "input-settings-updated", ut = "nonfatal-error", dt = "error", nn = 102400, Lt = "iframe-call-message", an = "local-screen-start", tt = "register-input-handler", on = "daily-method-update-live-streaming-endpoints", Pt = "transmit-log", qe = "daily-custom-track", ht = { NONE: "none", BGBLUR: "background-blur", BGIMAGE: "background-image" }, ia = { NONE: "none", NOISE_CANCELLATION: "noise-cancellation" }, Ht = { PLAY: "play", PAUSE: "pause" }, sn = 10, jt = ["jpg", "png", "jpeg"], Go = "add-endpoints", $o = "remove-endpoints";
function oe() {
  return !N() && typeof window < "u" && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : "";
}
function N() {
  return typeof navigator < "u" && navigator.product && navigator.product === "ReactNative";
}
function aa() {
  return navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
}
function Ko() {
  return !!(navigator && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) && (function(e, t) {
    if (!e || !t)
      return !0;
    switch (e) {
      case "Chrome":
        return t.major >= 75;
      case "Safari":
        return RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection") && !(t.major === 13 && t.minor === 0 && t.point === 0);
      case "Firefox":
        return t.major >= 67;
    }
    return !0;
  }(Re(), function() {
    switch (Re()) {
      case "Chrome":
        return la();
      case "Safari":
        return da();
      case "Firefox":
        return ha();
      case "Edge":
        return function() {
          var e = 0, t = 0;
          if (typeof window < "u") {
            var r = oe().match(/Edge\/(\d+).(\d+)/);
            if (r)
              try {
                e = parseInt(r[1]), t = parseInt(r[2]);
              } catch {
              }
          }
          return { major: e, minor: t };
        }();
    }
  }()) || N());
}
function cn() {
  if (N() || !document)
    return !1;
  var e = document.createElement("iframe");
  return !!e.requestFullscreen || !!e.webkitRequestFullscreen;
}
var Ho = ["Chrome", "Firefox"];
function oa() {
  return !N() && !ca() && Ho.includes(Re());
}
var Qo = ["Chrome", "Firefox"];
function sa() {
  return !N() && !ca() && typeof AudioWorkletNode < "u" && Qo.includes(Re());
}
function ln() {
  return aa() && !function() {
    var e, t = Re();
    if (!oe())
      return !0;
    switch (t) {
      case "Chrome":
        return (e = la()).major && e.major > 0 && e.major < 61;
      case "Firefox":
        return (e = ha()).major < 78;
      case "Safari":
        return (e = da()).major < 12;
      default:
        return !0;
    }
  }();
}
function ca() {
  var e, t, r = oe(), n = r.match(/Mac/) && (!N() && typeof window < "u" && (e = window) !== null && e !== void 0 && (t = e.navigator) !== null && t !== void 0 && t.maxTouchPoints ? window.navigator.maxTouchPoints : 0) >= 5;
  return !!(r.match(/Mobi/) || r.match(/Android/) || n) || !!oe().match(/DailyAnd\//) || void 0;
}
function Re() {
  if (typeof window < "u") {
    var e = oe();
    return ua() ? "Safari" : e.indexOf("Edge") > -1 ? "Edge" : e.match(/Chrome\//) ? "Chrome" : e.indexOf("Safari") > -1 ? "Safari" : e.indexOf("Firefox") > -1 ? "Firefox" : e.indexOf("MSIE") > -1 || e.indexOf(".NET") > -1 ? "IE" : "Unknown Browser";
  }
}
function la() {
  var e = 0, t = 0, r = 0, n = 0, o = !1;
  if (typeof window < "u") {
    var s = oe(), c = s.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);
    if (c)
      try {
        e = parseInt(c[1]), t = parseInt(c[2]), r = parseInt(c[3]), n = parseInt(c[4]), o = s.indexOf("OPR/") > -1;
      } catch {
      }
  }
  return { major: e, minor: t, build: r, patch: n, opera: o };
}
function ua() {
  return !!oe().match(/iPad|iPhone|iPod/i) && aa();
}
function da() {
  var e = 0, t = 0, r = 0;
  if (typeof window < "u") {
    var n = oe().match(/Version\/(\d+).(\d+)(.(\d+))?/);
    if (n)
      try {
        e = parseInt(n[1]), t = parseInt(n[2]), r = parseInt(n[4]);
      } catch {
      }
    else
      ua() && (e = 14, t = 0, r = 3);
  }
  return { major: e, minor: t, point: r };
}
function ha() {
  var e = 0, t = 0;
  if (typeof window < "u") {
    var r = oe().match(/Firefox\/(\d+).(\d+)/);
    if (r)
      try {
        e = parseInt(r[1]), t = parseInt(r[2]);
      } catch {
      }
  }
  return { major: e, minor: t };
}
var fa = function() {
  function e() {
    Q(this, e);
  }
  return Z(e, [{ key: "addListenerForMessagesFromCallMachine", value: function(t, r, n) {
    Be();
  } }, { key: "addListenerForMessagesFromDailyJs", value: function(t, r, n) {
    Be();
  } }, { key: "sendMessageToCallMachine", value: function(t, r, n, o) {
    Be();
  } }, { key: "sendMessageToDailyJs", value: function(t, r) {
    Be();
  } }, { key: "removeListener", value: function(t) {
    Be();
  } }]), e;
}();
function un(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function It(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? un(Object(r), !0).forEach(function(n) {
      ge(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : un(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Zo(e) {
  var t = function() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }();
  return function() {
    var r, n = H(e);
    if (t) {
      var o = H(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else
      r = n.apply(this, arguments);
    return bt(this, r);
  };
}
var Xo = function(e) {
  yt(r, fa);
  var t = Zo(r);
  function r() {
    var n;
    return Q(this, r), (n = t.call(this))._wrappedListeners = {}, n._messageCallbacks = {}, n;
  }
  return Z(r, [{ key: "addListenerForMessagesFromCallMachine", value: function(n, o, s) {
    var c = this, u = function(d) {
      if (d.data && d.data.what === "iframe-call-message" && (!d.data.callFrameId || d.data.callFrameId === o) && (!d.data.from || d.data.from !== "module")) {
        var p = It({}, d.data);
        if (delete p.from, p.callbackStamp && c._messageCallbacks[p.callbackStamp]) {
          var m = p.callbackStamp;
          c._messageCallbacks[m].call(s, p), delete c._messageCallbacks[m];
        }
        delete p.what, delete p.callbackStamp, n.call(s, p);
      }
    };
    this._wrappedListeners[n] = u, window.addEventListener("message", u);
  } }, { key: "addListenerForMessagesFromDailyJs", value: function(n, o, s) {
    var c = function(u) {
      if (!(!u.data || u.data.what !== Lt || !u.data.action || u.data.from && u.data.from !== "module" || u.data.callFrameId && o && u.data.callFrameId !== o)) {
        var d = u.data;
        n.call(s, d);
      }
    };
    this._wrappedListeners[n] = c, window.addEventListener("message", c);
  } }, { key: "sendMessageToCallMachine", value: function(n, o, s, c) {
    if (!c)
      throw new Error("undefined callFrameId. Are you trying to use a dailyIFrame instance previously destroyed?");
    var u = It({}, n);
    if (u.what = Lt, u.from = "module", u.callFrameId = c, o) {
      var d = _t();
      this._messageCallbacks[d] = o, u.callbackStamp = d;
    }
    (s ? s.contentWindow : window).postMessage(u, "*");
  } }, { key: "sendMessageToDailyJs", value: function(n, o) {
    n.what = Lt, n.callFrameId = o, n.from = "embedded", window.postMessage(n, "*");
  } }, { key: "removeListener", value: function(n) {
    var o = this._wrappedListeners[n];
    o && (window.removeEventListener("message", o), delete this._wrappedListeners[n]);
  } }, { key: "forwardPackagedMessageToCallMachine", value: function(n, o, s) {
    var c = It({}, n);
    c.callFrameId = s, (o ? o.contentWindow : window).postMessage(c, "*");
  } }, { key: "addListenerForPackagedMessagesFromCallMachine", value: function(n, o) {
    var s = function(c) {
      if (c.data && c.data.what === "iframe-call-message" && (!c.data.callFrameId || c.data.callFrameId === o) && (!c.data.from || c.data.from !== "module")) {
        var u = c.data;
        n(u);
      }
    };
    return this._wrappedListeners[n] = s, window.addEventListener("message", s), n;
  } }, { key: "removeListenerForPackagedMessagesFromCallMachine", value: function(n) {
    var o = this._wrappedListeners[n];
    o && (window.removeEventListener("message", o), delete this._wrappedListeners[n]);
  } }]), r;
}();
function es(e) {
  var t = function() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }();
  return function() {
    var r, n = H(e);
    if (t) {
      var o = H(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else
      r = n.apply(this, arguments);
    return bt(this, r);
  };
}
var ts = function(e) {
  yt(r, fa);
  var t = es(r);
  function r() {
    var n;
    return Q(this, r), n = t.call(this), global.callMachineToDailyJsEmitter = global.callMachineToDailyJsEmitter || new le.EventEmitter(), global.dailyJsToCallMachineEmitter = global.dailyJsToCallMachineEmitter || new le.EventEmitter(), n._wrappedListeners = {}, n._messageCallbacks = {}, n;
  }
  return Z(r, [{ key: "addListenerForMessagesFromCallMachine", value: function(n, o, s) {
    this._addListener(n, global.callMachineToDailyJsEmitter, s, "received call machine message");
  } }, { key: "addListenerForMessagesFromDailyJs", value: function(n, o, s) {
    this._addListener(n, global.dailyJsToCallMachineEmitter, s, "received daily-js message");
  } }, { key: "sendMessageToCallMachine", value: function(n, o) {
    this._sendMessage(n, global.dailyJsToCallMachineEmitter, "sending message to call machine", o);
  } }, { key: "sendMessageToDailyJs", value: function(n) {
    this._sendMessage(n, global.callMachineToDailyJsEmitter, "sending message to daily-js");
  } }, { key: "removeListener", value: function(n) {
    var o = this._wrappedListeners[n];
    o && (global.callMachineToDailyJsEmitter.removeListener("message", o), global.dailyJsToCallMachineEmitter.removeListener("message", o), delete this._wrappedListeners[n]);
  } }, { key: "_addListener", value: function(n, o, s, c) {
    var u = this, d = function(p) {
      if (p.callbackStamp && u._messageCallbacks[p.callbackStamp]) {
        var m = p.callbackStamp;
        u._messageCallbacks[m].call(s, p), delete u._messageCallbacks[m];
      }
      n.call(s, p);
    };
    this._wrappedListeners[n] = d, o.addListener("message", d);
  } }, { key: "_sendMessage", value: function(n, o, s, c) {
    if (c) {
      var u = _t();
      this._messageCallbacks[u] = c, n.callbackStamp = u;
    }
    o.emit("message", n);
  } }]), r;
}(), dn = Object.prototype.hasOwnProperty;
function hn(e, t, r) {
  for (r of e.keys())
    if (Ie(r, t))
      return r;
}
function Ie(e, t) {
  var r, n, o;
  if (e === t)
    return !0;
  if (e && t && (r = e.constructor) === t.constructor) {
    if (r === Date)
      return e.getTime() === t.getTime();
    if (r === RegExp)
      return e.toString() === t.toString();
    if (r === Array) {
      if ((n = e.length) === t.length)
        for (; n-- && Ie(e[n], t[n]); )
          ;
      return n === -1;
    }
    if (r === Set) {
      if (e.size !== t.size)
        return !1;
      for (n of e)
        if ((o = n) && typeof o == "object" && !(o = hn(t, o)) || !t.has(o))
          return !1;
      return !0;
    }
    if (r === Map) {
      if (e.size !== t.size)
        return !1;
      for (n of e)
        if ((o = n[0]) && typeof o == "object" && !(o = hn(t, o)) || !Ie(n[1], t.get(o)))
          return !1;
      return !0;
    }
    if (r === ArrayBuffer)
      e = new Uint8Array(e), t = new Uint8Array(t);
    else if (r === DataView) {
      if ((n = e.byteLength) === t.byteLength)
        for (; n-- && e.getInt8(n) === t.getInt8(n); )
          ;
      return n === -1;
    }
    if (ArrayBuffer.isView(e)) {
      if ((n = e.byteLength) === t.byteLength)
        for (; n-- && e[n] === t[n]; )
          ;
      return n === -1;
    }
    if (!r || typeof e == "object") {
      for (r in n = 0, e)
        if (dn.call(e, r) && ++n && !dn.call(t, r) || !(r in t) || !Ie(e[r], t[r]))
          return !1;
      return Object.keys(t).length === n;
    }
  }
  return e != e && t != t;
}
var Qt = "replace", Zt = "shallow-merge", fn = [Qt, Zt], rs = function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.data, n = t.mergeStrategy, o = n === void 0 ? Qt : n;
    Q(this, e), e._validateMergeStrategy(o), e._validateData(r, o), this.mergeStrategy = o, this.data = r;
  }
  return Z(e, [{ key: "isNoOp", value: function() {
    return e.isNoOpUpdate(this.data, this.mergeStrategy);
  } }], [{ key: "isNoOpUpdate", value: function(t, r) {
    return Object.keys(t).length === 0 && r === Zt;
  } }, { key: "_validateMergeStrategy", value: function(t) {
    if (!fn.includes(t))
      throw Error("Unrecognized mergeStrategy provided. Options are: [".concat(fn, "]"));
  } }, { key: "_validateData", value: function(t, r) {
    if (!function(u) {
      if (u == null || I(u) !== "object")
        return !1;
      var d = Object.getPrototypeOf(u);
      return d == null || d === Object.prototype;
    }(t))
      throw Error("Meeting session data must be a plain (map-like) object");
    var n;
    try {
      if (n = JSON.stringify(t), r === Qt) {
        var o = JSON.parse(n);
        Ie(o, t) || console.warn("The meeting session data provided will be modified when serialized.", o, t);
      } else if (r === Zt) {
        for (var s in t)
          if (Object.hasOwnProperty.call(t, s) && t[s] !== void 0) {
            var c = JSON.parse(JSON.stringify(t[s]));
            Ie(t[s], c) || console.warn("At least one key in the meeting session data provided will be modified when serialized.", c, t[s]);
          }
      }
    } catch (u) {
      throw Error("Meeting session data must be serializable to JSON: ".concat(u));
    }
    if (n.length > nn)
      throw Error("Meeting session data is too large (".concat(n.length, " characters). Maximum size suppported is ").concat(nn, "."));
  } }]), e;
}();
function Xt(e, t, r) {
  return Xt = function() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }() ? Reflect.construct.bind() : function(n, o, s) {
    var c = [null];
    c.push.apply(c, o);
    var u = new (Function.bind.apply(n, c))();
    return s && Ge(u, s.prototype), u;
  }, Xt.apply(null, arguments);
}
function er(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return er = function(r) {
    if (r === null || (n = r, Function.toString.call(n).indexOf("[native code]") === -1))
      return r;
    var n;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(r))
        return t.get(r);
      t.set(r, o);
    }
    function o() {
      return Xt(r, arguments, H(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), Ge(o, r);
  }, er(e);
}
function ns(e) {
  var t = function() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }();
  return function() {
    var r, n = H(e);
    if (t) {
      var o = H(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else
      r = n.apply(this, arguments);
    return bt(this, r);
  };
}
var is = function() {
  function e() {
    Q(this, e), this._currentLoad = null;
  }
  return Z(e, [{ key: "load", value: function(t, r, n, o) {
    if (this.loaded)
      return window._dailyCallObjectSetup(t), void n(!0);
    (function(s, c) {
      window._dailyConfig || (window._dailyConfig = {}), window._dailyConfig.callFrameId = s, window._dailyConfig.avoidEval = c;
    })(t, r), this._currentLoad && this._currentLoad.cancel(), this._currentLoad = new as(function() {
      n(!1);
    }, o), this._currentLoad.start();
  } }, { key: "cancel", value: function() {
    this._currentLoad && this._currentLoad.cancel();
  } }, { key: "loaded", get: function() {
    return this._currentLoad && this._currentLoad.succeeded;
  } }]), e;
}(), as = function() {
  function e(t, r) {
    Q(this, e), this._attemptsRemaining = 3, this._currentAttempt = null, this._successCallback = t, this._failureCallback = r;
  }
  return Z(e, [{ key: "start", value: function() {
    var t = this;
    this._currentAttempt || (this._currentAttempt = new pn(this._successCallback, function r(n) {
      t._currentAttempt.cancelled || (t._attemptsRemaining--, t._failureCallback(n, t._attemptsRemaining > 0), t._attemptsRemaining <= 0 || setTimeout(function() {
        t._currentAttempt.cancelled || (t._currentAttempt = new pn(t._successCallback, r), t._currentAttempt.start());
      }, 3e3));
    }), this._currentAttempt.start());
  } }, { key: "cancel", value: function() {
    this._currentAttempt && this._currentAttempt.cancel();
  } }, { key: "cancelled", get: function() {
    return this._currentAttempt && this._currentAttempt.cancelled;
  } }, { key: "succeeded", get: function() {
    return this._currentAttempt && this._currentAttempt.succeeded;
  } }]), e;
}(), Dt = function(e) {
  yt(r, er(Error));
  var t = ns(r);
  function r() {
    return Q(this, r), t.apply(this, arguments);
  }
  return Z(r);
}(), mt = 2e4, pn = function() {
  function e(r, n) {
    Q(this, e), this._loadAttemptImpl = N() || !_dailyConfig.avoidEval ? new os(r, n) : new ss(r, n);
  }
  var t;
  return Z(e, [{ key: "start", value: (t = b(function* () {
    return this._loadAttemptImpl.start();
  }), function() {
    return t.apply(this, arguments);
  }) }, { key: "cancel", value: function() {
    this._loadAttemptImpl.cancel();
  } }, { key: "cancelled", get: function() {
    return this._loadAttemptImpl.cancelled;
  } }, { key: "succeeded", get: function() {
    return this._loadAttemptImpl.succeeded;
  } }]), e;
}(), os = function() {
  function e(s, c) {
    Q(this, e), this.cancelled = !1, this.succeeded = !1, this._networkTimedOut = !1, this._networkTimeout = null, this._iosCache = typeof iOSCallObjectBundleCache < "u" && iOSCallObjectBundleCache, this._refetchHeaders = null, this._successCallback = s, this._failureCallback = c;
  }
  var t, r, n, o;
  return Z(e, [{ key: "start", value: (o = b(function* () {
    var s = fi();
    !(yield this._tryLoadFromIOSCache(s)) && this._loadFromNetwork(s);
  }), function() {
    return o.apply(this, arguments);
  }) }, { key: "cancel", value: function() {
    clearTimeout(this._networkTimeout), this.cancelled = !0;
  } }, { key: "_tryLoadFromIOSCache", value: (n = b(function* (s) {
    if (!this._iosCache)
      return !1;
    try {
      var c = yield this._iosCache.get(s);
      return !!this.cancelled || !!c && (c.code ? (Function('"use strict";' + c.code)(), this.succeeded = !0, this._successCallback(), !0) : (this._refetchHeaders = c.refetchHeaders, !1));
    } catch {
      return !1;
    }
  }), function(s) {
    return n.apply(this, arguments);
  }) }, { key: "_loadFromNetwork", value: (r = b(function* (s) {
    var c = this;
    this._networkTimeout = setTimeout(function() {
      c._networkTimedOut = !0, c._failureCallback("Timed out (>".concat(mt, " ms) when loading call object bundle ").concat(s));
    }, mt);
    try {
      var u = this._refetchHeaders ? { headers: this._refetchHeaders } : {}, d = yield fetch(s, u);
      if (clearTimeout(this._networkTimeout), this.cancelled || this._networkTimedOut)
        throw new Dt();
      var p = yield this._getBundleCodeFromResponse(s, d);
      if (this.cancelled)
        throw new Dt();
      Function('"use strict";' + p)(), this._iosCache && this._iosCache.set(s, p, d.headers), this.succeeded = !0, this._successCallback();
    } catch (m) {
      if (clearTimeout(this._networkTimeout), m instanceof Dt || this.cancelled || this._networkTimedOut)
        return;
      this._failureCallback("Failed to load call object bundle ".concat(s, ": ").concat(m));
    }
  }), function(s) {
    return r.apply(this, arguments);
  }) }, { key: "_getBundleCodeFromResponse", value: (t = b(function* (s, c) {
    if (c.ok)
      return yield c.text();
    if (this._iosCache && c.status === 304)
      return (yield this._iosCache.renew(s, c.headers)).code;
    throw new Error("Received ".concat(c.status, " response"));
  }), function(s, c) {
    return t.apply(this, arguments);
  }) }]), e;
}(), ss = function() {
  function e(r, n) {
    Q(this, e), this.cancelled = !1, this.succeeded = !1, this._successCallback = r, this._failureCallback = n, this._attemptId = _t(), this._networkTimeout = null, this._scriptElement = null;
  }
  var t;
  return Z(e, [{ key: "start", value: (t = b(function* () {
    window._dailyCallMachineLoadWaitlist || (window._dailyCallMachineLoadWaitlist = /* @__PURE__ */ new Set());
    var r = fi();
    (typeof document > "u" ? "undefined" : I(document)) === "object" ? this._startLoading(r) : this._failureCallback("Call object bundle must be loaded in a DOM/web context");
  }), function() {
    return t.apply(this, arguments);
  }) }, { key: "cancel", value: function() {
    this._stopLoading(), this.cancelled = !0;
  } }, { key: "_startLoading", value: function(r) {
    var n = this;
    this._signUpForCallMachineLoadWaitlist(), this._networkTimeout = setTimeout(function() {
      n._stopLoading(), n._failureCallback("Timed out (>".concat(mt, " ms) when loading call object bundle ").concat(r));
    }, mt);
    var o = document.getElementsByTagName("head")[0], s = document.createElement("script");
    this._scriptElement = s, s.onload = b(function* () {
      n._stopLoading(), n.succeeded = !0, n._successCallback();
    }), s.onerror = function() {
      var c = b(function* (u) {
        n._stopLoading(), n._failureCallback("Failed to load call object bundle ".concat(u.target.src));
      });
      return function(u) {
        return c.apply(this, arguments);
      };
    }(), s.src = r, o.appendChild(s);
  } }, { key: "_stopLoading", value: function() {
    this._withdrawFromCallMachineLoadWaitlist(), clearTimeout(this._networkTimeout), this._scriptElement && (this._scriptElement.onload = null, this._scriptElement.onerror = null);
  } }, { key: "_signUpForCallMachineLoadWaitlist", value: function() {
    window._dailyCallMachineLoadWaitlist.add(this._attemptId);
  } }, { key: "_withdrawFromCallMachineLoadWaitlist", value: function() {
    window._dailyCallMachineLoadWaitlist.delete(this._attemptId);
  } }]), e;
}(), pa = function(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, s = []; ++r < n; ) {
    var c = e[r];
    t(c, r, e) && (s[o++] = c);
  }
  return s;
}, cs = /* @__PURE__ */ function(e) {
  return function(t, r, n) {
    for (var o = -1, s = Object(t), c = n(t), u = c.length; u--; ) {
      var d = c[e ? u : ++o];
      if (r(s[d], d, s) === !1)
        break;
    }
    return t;
  };
}(), ls = function(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}, va = typeof et == "object" && et && et.Object === Object && et, us = va, ds = typeof self == "object" && self && self.Object === Object && self, ue = us || ds || Function("return this")(), Ce = ue.Symbol, vn = Ce, ma = Object.prototype, hs = ma.hasOwnProperty, fs = ma.toString, Ue = vn ? vn.toStringTag : void 0, ps = function(e) {
  var t = hs.call(e, Ue), r = e[Ue];
  try {
    e[Ue] = void 0;
    var n = !0;
  } catch {
  }
  var o = fs.call(e);
  return n && (t ? e[Ue] = r : delete e[Ue]), o;
}, vs = Object.prototype.toString, ms = ps, gs = function(e) {
  return vs.call(e);
}, mn = Ce ? Ce.toStringTag : void 0, He = function(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : mn && mn in Object(e) ? ms(e) : gs(e);
}, Qe = function(e) {
  return e != null && typeof e == "object";
}, ys = He, bs = Qe, gn = function(e) {
  return bs(e) && ys(e) == "[object Arguments]";
}, _s = Qe, ga = Object.prototype, ws = ga.hasOwnProperty, Ss = ga.propertyIsEnumerable, ya = gn(/* @__PURE__ */ function() {
  return arguments;
}()) ? gn : function(e) {
  return _s(e) && ws.call(e, "callee") && !Ss.call(e, "callee");
}, X = Array.isArray, Je = {}, ks = function() {
  return !1;
};
(function(e, t) {
  var r = ue, n = ks, o = t && !t.nodeType && t, s = o && e && !e.nodeType && e, c = s && s.exports === o ? r.Buffer : void 0, u = (c ? c.isBuffer : void 0) || n;
  e.exports = u;
})({ get exports() {
  return Je;
}, set exports(e) {
  Je = e;
} }, Je);
var Cs = /^(?:0|[1-9]\d*)$/, ba = function(e, t) {
  var r = typeof e;
  return !!(t = t ?? 9007199254740991) && (r == "number" || r != "symbol" && Cs.test(e)) && e > -1 && e % 1 == 0 && e < t;
}, lr = function(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= 9007199254740991;
}, Ms = He, Ts = lr, As = Qe, D = {};
D["[object Float32Array]"] = D["[object Float64Array]"] = D["[object Int8Array]"] = D["[object Int16Array]"] = D["[object Int32Array]"] = D["[object Uint8Array]"] = D["[object Uint8ClampedArray]"] = D["[object Uint16Array]"] = D["[object Uint32Array]"] = !0, D["[object Arguments]"] = D["[object Array]"] = D["[object ArrayBuffer]"] = D["[object Boolean]"] = D["[object DataView]"] = D["[object Date]"] = D["[object Error]"] = D["[object Function]"] = D["[object Map]"] = D["[object Number]"] = D["[object Object]"] = D["[object RegExp]"] = D["[object Set]"] = D["[object String]"] = D["[object WeakMap]"] = !1;
var Es = function(e) {
  return As(e) && Ts(e.length) && !!D[Ms(e)];
}, _a = function(e) {
  return function(t) {
    return e(t);
  };
}, ze = {};
(function(e, t) {
  var r = va, n = t && !t.nodeType && t, o = n && e && !e.nodeType && e, s = o && o.exports === n && r.process, c = function() {
    try {
      var u = o && o.require && o.require("util").types;
      return u || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = c;
})({ get exports() {
  return ze;
}, set exports(e) {
  ze = e;
} }, ze);
var Os = Es, Ls = _a, yn = ze && ze.isTypedArray, wa = yn ? Ls(yn) : Os, Ps = ls, js = ya, Is = X, Ds = Je, Ns = ba, Rs = wa, Fs = Object.prototype.hasOwnProperty, xs = function(e, t) {
  var r = Is(e), n = !r && js(e), o = !r && !n && Ds(e), s = !r && !n && !o && Rs(e), c = r || n || o || s, u = c ? Ps(e.length, String) : [], d = u.length;
  for (var p in e)
    !t && !Fs.call(e, p) || c && (p == "length" || o && (p == "offset" || p == "parent") || s && (p == "buffer" || p == "byteLength" || p == "byteOffset") || Ns(p, d)) || u.push(p);
  return u;
}, Vs = Object.prototype, Bs = function(e) {
  var t = e && e.constructor;
  return e === (typeof t == "function" && t.prototype || Vs);
}, Us = /* @__PURE__ */ function(e, t) {
  return function(r) {
    return e(t(r));
  };
}(Object.keys, Object), Ys = Bs, qs = Us, Js = Object.prototype.hasOwnProperty, ur = function(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}, zs = He, Ws = ur, Sa = function(e) {
  if (!Ws(e))
    return !1;
  var t = zs(e);
  return t == "[object Function]" || t == "[object GeneratorFunction]" || t == "[object AsyncFunction]" || t == "[object Proxy]";
}, Gs = Sa, $s = lr, dr = function(e) {
  return e != null && $s(e.length) && !Gs(e);
}, Ks = xs, Hs = function(e) {
  if (!Ys(e))
    return qs(e);
  var t = [];
  for (var r in Object(e))
    Js.call(e, r) && r != "constructor" && t.push(r);
  return t;
}, Qs = dr, hr = function(e) {
  return Qs(e) ? Ks(e) : Hs(e);
}, Zs = cs, Xs = hr, ec = dr, ka = /* @__PURE__ */ function(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!ec(r))
      return e(r, n);
    for (var o = r.length, s = t ? o : -1, c = Object(r); (t ? s-- : ++s < o) && n(c[s], s, c) !== !1; )
      ;
    return r;
  };
}(function(e, t) {
  return e && Zs(e, t, Xs);
}), tc = ka, rc = function(e, t) {
  var r = [];
  return tc(e, function(n, o, s) {
    t(n, o, s) && r.push(n);
  }), r;
}, nc = function() {
  this.__data__ = [], this.size = 0;
}, Ca = function(e, t) {
  return e === t || e != e && t != t;
}, ic = Ca, wt = function(e, t) {
  for (var r = e.length; r--; )
    if (ic(e[r][0], t))
      return r;
  return -1;
}, ac = wt, oc = Array.prototype.splice, sc = wt, cc = wt, lc = wt, uc = nc, dc = function(e) {
  var t = this.__data__, r = ac(t, e);
  return !(r < 0) && (r == t.length - 1 ? t.pop() : oc.call(t, r, 1), --this.size, !0);
}, hc = function(e) {
  var t = this.__data__, r = sc(t, e);
  return r < 0 ? void 0 : t[r][1];
}, fc = function(e) {
  return cc(this.__data__, e) > -1;
}, pc = function(e, t) {
  var r = this.__data__, n = lc(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
};
function Ae(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ae.prototype.clear = uc, Ae.prototype.delete = dc, Ae.prototype.get = hc, Ae.prototype.has = fc, Ae.prototype.set = pc;
var St = Ae, vc = St, mc = function() {
  this.__data__ = new vc(), this.size = 0;
}, gc = function(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}, yc = function(e) {
  return this.__data__.get(e);
}, bn, bc = function(e) {
  return this.__data__.has(e);
}, Nt = ue["__core-js_shared__"], _n = (bn = /[^.]+$/.exec(Nt && Nt.keys && Nt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + bn : "", _c = function(e) {
  return !!_n && _n in e;
}, wc = Function.prototype.toString, Ma = function(e) {
  if (e != null) {
    try {
      return wc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}, Sc = Sa, kc = _c, Cc = ur, Mc = Ma, Tc = /^\[object .+?Constructor\]$/, Ac = Function.prototype, Ec = Object.prototype, Oc = Ac.toString, Lc = Ec.hasOwnProperty, Pc = RegExp("^" + Oc.call(Lc).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), jc = function(e) {
  return !(!Cc(e) || kc(e)) && (Sc(e) ? Pc : Tc).test(Mc(e));
}, Ic = function(e, t) {
  return e == null ? void 0 : e[t];
}, Fe = function(e, t) {
  var r = Ic(e, t);
  return jc(r) ? r : void 0;
}, fr = Fe(ue, "Map"), kt = Fe(Object, "create"), wn = kt, Dc = function() {
  this.__data__ = wn ? wn(null) : {}, this.size = 0;
}, Nc = function(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}, Rc = kt, Fc = Object.prototype.hasOwnProperty, xc = function(e) {
  var t = this.__data__;
  if (Rc) {
    var r = t[e];
    return r === "__lodash_hash_undefined__" ? void 0 : r;
  }
  return Fc.call(t, e) ? t[e] : void 0;
}, Vc = kt, Bc = Object.prototype.hasOwnProperty, Uc = kt, Yc = Dc, qc = Nc, Jc = xc, zc = function(e) {
  var t = this.__data__;
  return Vc ? t[e] !== void 0 : Bc.call(t, e);
}, Wc = function(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Uc && t === void 0 ? "__lodash_hash_undefined__" : t, this;
};
function Ee(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ee.prototype.clear = Yc, Ee.prototype.delete = qc, Ee.prototype.get = Jc, Ee.prototype.has = zc, Ee.prototype.set = Wc;
var Sn = Ee, Gc = St, $c = fr, Kc = function(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}, Ct = function(e, t) {
  var r = e.__data__;
  return Kc(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}, Hc = Ct, Qc = Ct, Zc = Ct, Xc = Ct, el = function() {
  this.size = 0, this.__data__ = { hash: new Sn(), map: new ($c || Gc)(), string: new Sn() };
}, tl = function(e) {
  var t = Hc(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}, rl = function(e) {
  return Qc(this, e).get(e);
}, nl = function(e) {
  return Zc(this, e).has(e);
}, il = function(e, t) {
  var r = Xc(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
};
function Oe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Oe.prototype.clear = el, Oe.prototype.delete = tl, Oe.prototype.get = rl, Oe.prototype.has = nl, Oe.prototype.set = il;
var pr = Oe, al = St, ol = fr, sl = pr, cl = St, ll = mc, ul = gc, dl = yc, hl = bc, fl = function(e, t) {
  var r = this.__data__;
  if (r instanceof al) {
    var n = r.__data__;
    if (!ol || n.length < 199)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new sl(n);
  }
  return r.set(e, t), this.size = r.size, this;
};
function Le(e) {
  var t = this.__data__ = new cl(e);
  this.size = t.size;
}
Le.prototype.clear = ll, Le.prototype.delete = ul, Le.prototype.get = dl, Le.prototype.has = hl, Le.prototype.set = fl;
var Ta = Le, pl = pr, vl = function(e) {
  return this.__data__.set(e, "__lodash_hash_undefined__"), this;
}, ml = function(e) {
  return this.__data__.has(e);
};
function ft(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new pl(); ++t < r; )
    this.add(e[t]);
}
ft.prototype.add = ft.prototype.push = vl, ft.prototype.has = ml;
var gl = ft, yl = function(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}, bl = function(e, t) {
  return e.has(t);
}, Aa = function(e, t, r, n, o, s) {
  var c = 1 & r, u = e.length, d = t.length;
  if (u != d && !(c && d > u))
    return !1;
  var p = s.get(e), m = s.get(t);
  if (p && m)
    return p == t && m == e;
  var y = -1, _ = !0, R = 2 & r ? new gl() : void 0;
  for (s.set(e, t), s.set(t, e); ++y < u; ) {
    var M = e[y], j = t[y];
    if (n)
      var O = c ? n(j, M, y, t, e, s) : n(M, j, y, e, t, s);
    if (O !== void 0) {
      if (O)
        continue;
      _ = !1;
      break;
    }
    if (R) {
      if (!yl(t, function(Y, x) {
        if (!bl(R, x) && (M === Y || o(M, Y, r, n, s)))
          return R.push(x);
      })) {
        _ = !1;
        break;
      }
    } else if (M !== j && !o(M, j, r, n, s)) {
      _ = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), _;
}, kn = ue.Uint8Array, _l = Ca, wl = Aa, Sl = function(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, o) {
    r[++t] = [o, n];
  }), r;
}, kl = function(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}, Cn = Ce ? Ce.prototype : void 0, Rt = Cn ? Cn.valueOf : void 0, Cl = function(e, t, r, n, o, s, c) {
  switch (r) {
    case "[object DataView]":
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case "[object ArrayBuffer]":
      return !(e.byteLength != t.byteLength || !s(new kn(e), new kn(t)));
    case "[object Boolean]":
    case "[object Date]":
    case "[object Number]":
      return _l(+e, +t);
    case "[object Error]":
      return e.name == t.name && e.message == t.message;
    case "[object RegExp]":
    case "[object String]":
      return e == t + "";
    case "[object Map]":
      var u = Sl;
    case "[object Set]":
      var d = 1 & n;
      if (u || (u = kl), e.size != t.size && !d)
        return !1;
      var p = c.get(e);
      if (p)
        return p == t;
      n |= 2, c.set(e, t);
      var m = wl(u(e), u(t), n, o, s, c);
      return c.delete(e), m;
    case "[object Symbol]":
      if (Rt)
        return Rt.call(e) == Rt.call(t);
  }
  return !1;
}, Ml = function(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}, Tl = X, Al = function(e, t, r) {
  var n = t(e);
  return Tl(e) ? n : Ml(n, r(e));
}, El = pa, Ol = function() {
  return [];
}, Ll = Object.prototype.propertyIsEnumerable, Mn = Object.getOwnPropertySymbols, Pl = Al, jl = Mn ? function(e) {
  return e == null ? [] : (e = Object(e), El(Mn(e), function(t) {
    return Ll.call(e, t);
  }));
} : Ol, Il = hr, Tn = function(e) {
  return Pl(e, Il, jl);
}, Dl = Object.prototype.hasOwnProperty, Nl = function(e, t, r, n, o, s) {
  var c = 1 & r, u = Tn(e), d = u.length;
  if (d != Tn(t).length && !c)
    return !1;
  for (var p = d; p--; ) {
    var m = u[p];
    if (!(c ? m in t : Dl.call(t, m)))
      return !1;
  }
  var y = s.get(e), _ = s.get(t);
  if (y && _)
    return y == t && _ == e;
  var R = !0;
  s.set(e, t), s.set(t, e);
  for (var M = c; ++p < d; ) {
    var j = e[m = u[p]], O = t[m];
    if (n)
      var Y = c ? n(O, j, m, t, e, s) : n(j, O, m, e, t, s);
    if (!(Y === void 0 ? j === O || o(j, O, r, n, s) : Y)) {
      R = !1;
      break;
    }
    M || (M = m == "constructor");
  }
  if (R && !M) {
    var x = e.constructor, U = t.constructor;
    x == U || !("constructor" in e) || !("constructor" in t) || typeof x == "function" && x instanceof x && typeof U == "function" && U instanceof U || (R = !1);
  }
  return s.delete(e), s.delete(t), R;
}, tr = Fe(ue, "DataView"), rr = fr, nr = Fe(ue, "Promise"), ir = Fe(ue, "Set"), ar = Fe(ue, "WeakMap"), Ea = He, xe = Ma, An = "[object Map]", En = "[object Promise]", On = "[object Set]", Ln = "[object WeakMap]", Pn = "[object DataView]", Rl = xe(tr), Fl = xe(rr), xl = xe(nr), Vl = xe(ir), Bl = xe(ar), Se = Ea;
(tr && Se(new tr(new ArrayBuffer(1))) != Pn || rr && Se(new rr()) != An || nr && Se(nr.resolve()) != En || ir && Se(new ir()) != On || ar && Se(new ar()) != Ln) && (Se = function(e) {
  var t = Ea(e), r = t == "[object Object]" ? e.constructor : void 0, n = r ? xe(r) : "";
  if (n)
    switch (n) {
      case Rl:
        return Pn;
      case Fl:
        return An;
      case xl:
        return En;
      case Vl:
        return On;
      case Bl:
        return Ln;
    }
  return t;
});
var Ft = Ta, Ul = Aa, Yl = Cl, ql = Nl, jn = Se, In = X, Dn = Je, Jl = wa, Nn = "[object Arguments]", Rn = "[object Array]", rt = "[object Object]", Fn = Object.prototype.hasOwnProperty, zl = function(e, t, r, n, o, s) {
  var c = In(e), u = In(t), d = c ? Rn : jn(e), p = u ? Rn : jn(t), m = (d = d == Nn ? rt : d) == rt, y = (p = p == Nn ? rt : p) == rt, _ = d == p;
  if (_ && Dn(e)) {
    if (!Dn(t))
      return !1;
    c = !0, m = !1;
  }
  if (_ && !m)
    return s || (s = new Ft()), c || Jl(e) ? Ul(e, t, r, n, o, s) : Yl(e, t, d, r, n, o, s);
  if (!(1 & r)) {
    var R = m && Fn.call(e, "__wrapped__"), M = y && Fn.call(t, "__wrapped__");
    if (R || M) {
      var j = R ? e.value() : e, O = M ? t.value() : t;
      return s || (s = new Ft()), o(j, O, r, n, s);
    }
  }
  return !!_ && (s || (s = new Ft()), ql(e, t, r, n, o, s));
}, xn = Qe, Oa = function e(t, r, n, o, s) {
  return t === r || (t == null || r == null || !xn(t) && !xn(r) ? t != t && r != r : zl(t, r, n, o, e, s));
}, Wl = Ta, Gl = Oa, $l = ur, La = function(e) {
  return e == e && !$l(e);
}, Kl = La, Hl = hr, Pa = function(e, t) {
  return function(r) {
    return r != null && r[e] === t && (t !== void 0 || e in Object(r));
  };
}, Ql = function(e, t, r, n) {
  var o = r.length, s = o, c = !n;
  if (e == null)
    return !s;
  for (e = Object(e); o--; ) {
    var u = r[o];
    if (c && u[2] ? u[1] !== e[u[0]] : !(u[0] in e))
      return !1;
  }
  for (; ++o < s; ) {
    var d = (u = r[o])[0], p = e[d], m = u[1];
    if (c && u[2]) {
      if (p === void 0 && !(d in e))
        return !1;
    } else {
      var y = new Wl();
      if (n)
        var _ = n(p, m, d, e, t, y);
      if (!(_ === void 0 ? Gl(m, p, 3, n, y) : _))
        return !1;
    }
  }
  return !0;
}, Zl = function(e) {
  for (var t = Hl(e), r = t.length; r--; ) {
    var n = t[r], o = e[n];
    t[r] = [n, o, Kl(o)];
  }
  return t;
}, Xl = Pa, eu = function(e) {
  var t = Zl(e);
  return t.length == 1 && t[0][2] ? Xl(t[0][0], t[0][1]) : function(r) {
    return r === e || Ql(r, e, t);
  };
}, tu = He, ru = Qe, Mt = function(e) {
  return typeof e == "symbol" || ru(e) && tu(e) == "[object Symbol]";
}, nu = X, iu = Mt, au = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ou = /^\w*$/, vr = function(e, t) {
  if (nu(e))
    return !1;
  var r = typeof e;
  return !(r != "number" && r != "symbol" && r != "boolean" && e != null && !iu(e)) || ou.test(e) || !au.test(e) || t != null && e in Object(t);
}, ja = pr;
function mr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError("Expected a function");
  var r = function() {
    var n = arguments, o = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(o))
      return s.get(o);
    var c = e.apply(this, n);
    return r.cache = s.set(o, c) || s, c;
  };
  return r.cache = new (mr.Cache || ja)(), r;
}
mr.Cache = ja;
var su = mr, cu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, lu = /\\(\\)?/g, uu = function(e) {
  var t = su(e, function(n) {
    return r.size === 500 && r.clear(), n;
  }), r = t.cache;
  return t;
}(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(cu, function(r, n, o, s) {
    t.push(o ? s.replace(lu, "$1") : n || r);
  }), t;
}), Ia = function(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
    o[r] = t(e[r], r, e);
  return o;
}, du = Ia, hu = X, fu = Mt, Vn = Ce ? Ce.prototype : void 0, Bn = Vn ? Vn.toString : void 0, pu = function e(t) {
  if (typeof t == "string")
    return t;
  if (hu(t))
    return du(t, e) + "";
  if (fu(t))
    return Bn ? Bn.call(t) : "";
  var r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}, vu = pu, mu = X, gu = vr, yu = uu, bu = function(e) {
  return e == null ? "" : vu(e);
}, Da = function(e, t) {
  return mu(e) ? e : gu(e, t) ? [e] : yu(bu(e));
}, _u = Mt, Tt = function(e) {
  if (typeof e == "string" || _u(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}, wu = Da, Su = Tt, gr = function(e, t) {
  for (var r = 0, n = (t = wu(t, e)).length; e != null && r < n; )
    e = e[Su(t[r++])];
  return r && r == n ? e : void 0;
}, ku = gr, Cu = Da, Mu = ya, Tu = X, Au = ba, Eu = lr, Ou = Tt, Lu = function(e, t) {
  return e != null && t in Object(e);
}, Pu = function(e, t, r) {
  for (var n = -1, o = (t = Cu(t, e)).length, s = !1; ++n < o; ) {
    var c = Ou(t[n]);
    if (!(s = e != null && r(e, c)))
      break;
    e = e[c];
  }
  return s || ++n != o ? s : !!(o = e == null ? 0 : e.length) && Eu(o) && Au(c, o) && (Tu(e) || Mu(e));
}, ju = Oa, Iu = function(e, t, r) {
  var n = e == null ? void 0 : ku(e, t);
  return n === void 0 ? r : n;
}, Du = function(e, t) {
  return e != null && Pu(e, t, Lu);
}, Nu = vr, Ru = La, Fu = Pa, xu = Tt, Na = function(e) {
  return e;
}, Vu = gr, Bu = function(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}, Uu = function(e) {
  return function(t) {
    return Vu(t, e);
  };
}, Yu = vr, qu = Tt, Ju = eu, zu = function(e, t) {
  return Nu(e) && Ru(t) ? Fu(xu(e), t) : function(r) {
    var n = Iu(r, e);
    return n === void 0 && n === t ? Du(r, e) : ju(t, n, 3);
  };
}, Wu = Na, Gu = X, $u = function(e) {
  return Yu(e) ? Bu(qu(e)) : Uu(e);
}, Ra = function(e) {
  return typeof e == "function" ? e : e == null ? Wu : typeof e == "object" ? Gu(e) ? zu(e[0], e[1]) : Ju(e) : $u(e);
}, Ku = pa, Hu = rc, Qu = Ra, Zu = X, Xu = function(e, t) {
  return (Zu(e) ? Ku : Hu)(e, Qu(t));
}, ed = ka, td = dr, Un = Mt, rd = function(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, o = e == e, s = Un(e), c = t !== void 0, u = t === null, d = t == t, p = Un(t);
    if (!u && !p && !s && e > t || s && c && d && !u && !p || n && c && d || !r && d || !o)
      return 1;
    if (!n && !s && !p && e < t || p && r && o && !n && !s || u && r && o || !c && o || !d)
      return -1;
  }
  return 0;
}, xt = Ia, nd = gr, id = Ra, ad = function(e, t) {
  var r = -1, n = td(e) ? Array(e.length) : [];
  return ed(e, function(o, s, c) {
    n[++r] = t(o, s, c);
  }), n;
}, od = function(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}, sd = _a, cd = function(e, t, r) {
  for (var n = -1, o = e.criteria, s = t.criteria, c = o.length, u = r.length; ++n < c; ) {
    var d = rd(o[n], s[n]);
    if (d)
      return n >= u ? d : d * (r[n] == "desc" ? -1 : 1);
  }
  return e.index - t.index;
}, ld = Na, ud = X, dd = function(e, t, r) {
  t = t.length ? xt(t, function(s) {
    return ud(s) ? function(c) {
      return nd(c, s.length === 1 ? s[0] : s);
    } : s;
  }) : [ld];
  var n = -1;
  t = xt(t, sd(id));
  var o = ad(e, function(s, c, u) {
    return { criteria: xt(t, function(d) {
      return d(s);
    }), index: ++n, value: s };
  });
  return od(o, function(s, c) {
    return cd(s, c, r);
  });
}, Yn = X, hd = function(e, t, r, n) {
  return e == null ? [] : (Yn(t) || (t = t == null ? [] : [t]), Yn(r = n ? void 0 : r) || (r = r == null ? [] : [r]), dd(e, t, r));
}, nt = function(e, t, r) {
  return pd(e.local, t, r) === !0;
}, fd = function(e, t, r) {
  return e.local.streams && e.local.streams[t] && e.local.streams[t].stream && e.local.streams[t].stream["get".concat(r === "video" ? "Video" : "Audio", "Tracks")]()[0];
}, Pe = function(e, t, r, n) {
  var o = vd(e, t, r, n);
  return o && o.pendingTrack;
}, pd = function(e, t, r) {
  if (!e)
    return !1;
  var n = function(s) {
    switch (s) {
      case "avatar":
        return !0;
      case "staged":
        return s;
      default:
        return !!s;
    }
  }, o = e.public.subscribedTracks;
  return o && o[t] ? ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo"].indexOf(r) === -1 && o[t].custom ? [!0, "staged"].includes(o[t].custom) ? n(o[t].custom) : n(o[t].custom[r]) : n(o[t][r]) : !o || n(o.ALL);
}, vd = function(e, t, r, n) {
  var o = hd(Xu(e.streams, function(s) {
    return s.participantId === t && s.type === r && s.pendingTrack && s.pendingTrack.kind === n;
  }), "starttime", "desc");
  return o && o[0];
}, md = function(e, t) {
  var r = e.local.public.customTracks;
  if (r && r[t])
    return r[t].track;
};
function qn(e) {
  for (var t = store.getState(), r = 0, n = ["cam", "screen"]; r < n.length; r++)
    for (var o = n[r], s = 0, c = ["video", "audio"]; s < c.length; s++) {
      var u = c[s], d = o === "cam" ? u : "screen".concat(u.charAt(0).toUpperCase() + u.slice(1)), p = e.tracks[d];
      if (p) {
        var m = e.local ? fd(t, o, u) : Pe(t, e.session_id, o, u);
        p.state === "playable" && (p.track = m), p.persistentTrack = m;
      }
    }
}
function Jn(e) {
  try {
    var t = store.getState();
    for (var r in e.tracks)
      if (!gd(r)) {
        var n = e.tracks[r].kind;
        if (n) {
          var o = e.tracks[r];
          if (o) {
            var s = e.local ? md(t, r) : Pe(t, e.session_id, r, n);
            o.state === "playable" && (e.tracks[r].track = s), o.persistentTrack = s;
          }
        } else
          console.error("unknown type for custom track");
      }
  } catch (c) {
    console.error(c);
  }
}
function gd(e) {
  return ["video", "audio", "screenVideo", "screenAudio"].includes(e);
}
function zn(e, t) {
  var r = store.getState();
  if (e.local) {
    if (e.audio)
      try {
        e.audioTrack = r.local.streams.cam.stream.getAudioTracks()[0], e.audioTrack || (e.audio = !1);
      } catch {
      }
    if (e.video)
      try {
        e.videoTrack = r.local.streams.cam.stream.getVideoTracks()[0], e.videoTrack || (e.video = !1);
      } catch {
      }
    if (e.screen)
      try {
        e.screenVideoTrack = r.local.streams.screen.stream.getVideoTracks()[0], e.screenAudioTrack = r.local.streams.screen.stream.getAudioTracks()[0], e.screenVideoTrack || e.screenAudioTrack || (e.screen = !1);
      } catch {
      }
  } else {
    var n = !0;
    try {
      var o = r.participants[e.session_id];
      o && o.public && o.public.rtcType && o.public.rtcType.impl === "peer-to-peer" && o.private && !["connected", "completed"].includes(o.private.peeringState) && (n = !1);
    } catch (p) {
      console.error(p);
    }
    if (!n)
      return e.audio = !1, e.audioTrack = !1, e.video = !1, e.videoTrack = !1, e.screen = !1, void (e.screenTrack = !1);
    try {
      if (r.streams, e.audio && nt(r, e.session_id, "cam-audio")) {
        var s = Pe(r, e.session_id, "cam", "audio");
        s && (t && t.audioTrack && t.audioTrack.id === s.id ? e.audioTrack = s : s.muted || (e.audioTrack = s)), e.audioTrack || (e.audio = !1);
      }
      if (e.video && nt(r, e.session_id, "cam-video")) {
        var c = Pe(r, e.session_id, "cam", "video");
        c && (t && t.videoTrack && t.videoTrack.id === c.id ? e.videoTrack = c : c.muted || (e.videoTrack = c)), e.videoTrack || (e.video = !1);
      }
      if (e.screen && nt(r, e.session_id, "screen-audio")) {
        var u = Pe(r, e.session_id, "screen", "audio");
        u && (t && t.screenAudioTrack && t.screenAudioTrack.id === u.id ? e.screenAudioTrack = u : u.muted || (e.screenAudioTrack = u));
      }
      if (e.screen && nt(r, e.session_id, "screen-video")) {
        var d = Pe(r, e.session_id, "screen", "video");
        d && (t && t.screenVideoTrack && t.screenVideoTrack.id === d.id ? e.screenVideoTrack = d : d.muted || (e.screenVideoTrack = d));
      }
      e.screenVideoTrack || e.screenAudioTrack || (e.screen = !1);
    } catch (p) {
      console.error("unexpected error matching up tracks", p);
    }
  }
}
function yd(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = function(d, p) {
      if (d) {
        if (typeof d == "string")
          return Wn(d, p);
        var m = Object.prototype.toString.call(d).slice(8, -1);
        if (m === "Object" && d.constructor && (m = d.constructor.name), m === "Map" || m === "Set")
          return Array.from(d);
        if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))
          return Wn(d, p);
      }
    }(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var n = 0, o = function() {
      };
      return { s: o, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(d) {
        throw d;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s, c = !0, u = !1;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var d = r.next();
    return c = d.done, d;
  }, e: function(d) {
    u = !0, s = d;
  }, f: function() {
    try {
      c || r.return == null || r.return();
    } finally {
      if (u)
        throw s;
    }
  } };
}
function Wn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var ie = /* @__PURE__ */ new Map(), De = null;
function bd(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = function(d, p) {
      if (d) {
        if (typeof d == "string")
          return Gn(d, p);
        var m = Object.prototype.toString.call(d).slice(8, -1);
        if (m === "Object" && d.constructor && (m = d.constructor.name), m === "Map" || m === "Set")
          return Array.from(d);
        if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))
          return Gn(d, p);
      }
    }(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var n = 0, o = function() {
      };
      return { s: o, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(d) {
        throw d;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s, c = !0, u = !1;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var d = r.next();
    return c = d.done, d;
  }, e: function(d) {
    u = !0, s = d;
  }, f: function() {
    try {
      c || r.return == null || r.return();
    } finally {
      if (u)
        throw s;
    }
  } };
}
function Gn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var ae = /* @__PURE__ */ new Map(), We = null, _d = 3e3;
function wd(e) {
  Fa() ? function(t) {
    ie.has(t) || (ie.set(t, {}), navigator.mediaDevices.enumerateDevices().then(function(r) {
      ie.has(t) && (ie.get(t).lastDevicesString = JSON.stringify(r), De || (De = function() {
        var n = b(function* () {
          var o, s = yield navigator.mediaDevices.enumerateDevices(), c = yd(ie.keys());
          try {
            for (c.s(); !(o = c.n()).done; ) {
              var u = o.value, d = JSON.stringify(s);
              d !== ie.get(u).lastDevicesString && (ie.get(u).lastDevicesString = d, u(s));
            }
          } catch (p) {
            c.e(p);
          } finally {
            c.f();
          }
        });
        return function() {
          return n.apply(this, arguments);
        };
      }(), navigator.mediaDevices.addEventListener("devicechange", De)));
    }));
  }(e) : function(t) {
    ae.has(t) || (ae.set(t, {}), navigator.mediaDevices.enumerateDevices().then(function(r) {
      ae.has(t) && (ae.get(t).lastDevicesString = JSON.stringify(r), We || (We = setInterval(b(function* () {
        var n, o = yield navigator.mediaDevices.enumerateDevices(), s = bd(ae.keys());
        try {
          for (s.s(); !(n = s.n()).done; ) {
            var c = n.value, u = JSON.stringify(o);
            u !== ae.get(c).lastDevicesString && (ae.get(c).lastDevicesString = u, c(o));
          }
        } catch (d) {
          s.e(d);
        } finally {
          s.f();
        }
      }), _d)));
    }));
  }(e);
}
function Sd(e) {
  Fa() ? function(t) {
    ie.has(t) && (ie.delete(t), ie.size === 0 && De && (navigator.mediaDevices.removeEventListener("devicechange", De), De = null));
  }(e) : function(t) {
    ae.has(t) && (ae.delete(t), ae.size === 0 && We && (clearInterval(We), We = null));
  }(e);
}
function Fa() {
  return N() || navigator.mediaDevices.ondevicechange !== void 0;
}
var kd = /* @__PURE__ */ new Set();
function Cd(e, t) {
  var r = t.isLocalScreenVideo;
  return e && e.readyState === "live" && !function(n, o) {
    return (!o.isLocalScreenVideo || Re() !== "Chrome") && n.muted && !kd.has(n.id);
  }(e, { isLocalScreenVideo: r });
}
var se, Md = ["preserveIframe"];
function $n(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $n(Object(r), !0).forEach(function(n) {
      ge(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $n(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Td(e) {
  var t = function() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }();
  return function() {
    var r, n = H(e);
    if (t) {
      var o = H(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else
      r = n.apply(this, arguments);
    return bt(this, r);
  };
}
function Kn(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = function(d, p) {
      if (d) {
        if (typeof d == "string")
          return Hn(d, p);
        var m = Object.prototype.toString.call(d).slice(8, -1);
        if (m === "Object" && d.constructor && (m = d.constructor.name), m === "Map" || m === "Set")
          return Array.from(d);
        if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))
          return Hn(d, p);
      }
    }(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var n = 0, o = function() {
      };
      return { s: o, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(d) {
        throw d;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s, c = !0, u = !1;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var d = r.next();
    return c = d.done, d;
  }, e: function(d) {
    u = !0, s = d;
  }, f: function() {
    try {
      c || r.return == null || r.return();
    } finally {
      if (u)
        throw s;
    }
  } };
}
function Hn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var Qn = "video", Ad = "voice", Zn = N() ? { data: {} } : { data: {}, topology: "none" }, Xn = { present: 0, hidden: 0 }, xa = { maxBitrate: { min: 1e5, max: 25e5 }, maxFramerate: { min: 1, max: 30 }, scaleResolutionDownBy: { min: 1, max: 8 } }, Vt = Object.keys(xa), ei = ["state", "volume", "simulcastEncodings"], ti = { androidInCallNotification: { title: "string", subtitle: "string", iconName: "string", disableForCustomOverride: "boolean" }, disableAutoDeviceManagement: { audio: "boolean", video: "boolean" } }, gt = { id: { iconPath: "string", iconPathDarkMode: "string", label: "string", tooltip: "string" } }, or = { id: { allow: "string", controlledBy: "'*' | 'owners' | string[]", csp: "string", iconURL: "string", label: "string", loading: "'eager' | 'lazy'", location: "'main' | 'sidebar'", name: "string", referrerPolicy: "string", sandbox: "string", src: "string", srcdoc: "string", shared: "string[] | 'owners' | boolean" } }, be = { customIntegrations: { validate: za, help: qa() }, customTrayButtons: { validate: Ja, help: "customTrayButtons should be a dictionary of the type ".concat(JSON.stringify(gt)) }, url: { validate: function(e) {
  return typeof e == "string";
}, help: "url should be a string" }, baseUrl: { validate: function(e) {
  return typeof e == "string";
}, help: "baseUrl should be a string" }, token: { validate: function(e) {
  return typeof e == "string";
}, help: "token should be a string", queryString: "t" }, dailyConfig: { validate: function(e, t) {
  try {
    return t.validateDailyConfig(e), window._dailyConfig || (window._dailyConfig = {}), window._dailyConfig.experimentalGetUserMediaConstraintsModify = e.experimentalGetUserMediaConstraintsModify, window._dailyConfig.userMediaVideoConstraints = e.userMediaVideoConstraints, window._dailyConfig.userMediaAudioConstraints = e.userMediaAudioConstraints, window._dailyConfig.callObjectBundleUrlOverride = e.callObjectBundleUrlOverride, window._dailyConfig.proxyUrl = e.proxyUrl, window._dailyConfig.iceConfig = e.iceConfig, !0;
  } catch (r) {
    console.error("Failed to validate dailyConfig", r);
  }
  return !1;
}, help: "Unsupported dailyConfig. Check error logs for detailed info." }, reactNativeConfig: { validate: function(e) {
  return Wa(e, ti);
}, help: "reactNativeConfig should look like ".concat(JSON.stringify(ti), ", all fields optional") }, lang: { validate: function(e) {
  return ["de", "en-us", "en", "es", "fi", "fr", "it", "jp", "ka", "nl", "no", "pl", "pt", "pt-BR", "ru", "sv", "tr", "user"].includes(e);
}, help: "language not supported. Options are: de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, pt-BR, ru, sv, tr, user" }, userName: !0, userData: { validate: function(e) {
  try {
    return Va(e), !0;
  } catch (t) {
    return console.error(t), !1;
  }
}, help: "invalid userData type provided" }, startVideoOff: !0, startAudioOff: !0, activeSpeakerMode: !0, showLeaveButton: !0, showLocalVideo: !0, showParticipantsBar: !0, showFullscreenButton: !0, showUserNameChangeUI: !0, iframeStyle: !0, customLayout: !0, cssFile: !0, cssText: !0, bodyClass: !0, videoSource: { validate: function(e, t) {
  return t._preloadCache.videoDeviceId = e, !0;
} }, audioSource: { validate: function(e, t) {
  return t._preloadCache.audioDeviceId = e, !0;
} }, subscribeToTracksAutomatically: { validate: function(e, t) {
  return t._preloadCache.subscribeToTracksAutomatically = e, !0;
} }, theme: { validate: function(e) {
  var t = ["accent", "accentText", "background", "backgroundAccent", "baseText", "border", "mainAreaBg", "mainAreaBgAccent", "mainAreaText", "supportiveText"], r = function(n) {
    for (var o = 0, s = Object.keys(n); o < s.length; o++) {
      var c = s[o];
      if (!t.includes(c))
        return console.error('unsupported color "'.concat(c, '". Valid colors: ').concat(t.join(", "))), !1;
      if (!n[c].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i))
        return console.error("".concat(c, ' theme color should be provided in valid hex color format. Received: "').concat(n[c], '"')), !1;
    }
    return !0;
  };
  return I(e) === "object" && ("light" in e && "dark" in e || "colors" in e) ? "light" in e && "dark" in e ? "colors" in e.light ? "colors" in e.dark ? r(e.light.colors) && r(e.dark.colors) : (console.error('Dark theme is missing "colors" property.', e), !1) : (console.error('Light theme is missing "colors" property.', e), !1) : r(e.colors) : (console.error('Theme must contain either both "light" and "dark" properties, or "colors".', e), !1);
}, help: "unsupported theme configuration. Check error logs for detailed info." }, layoutConfig: { validate: function(e) {
  if ("grid" in e) {
    var t = e.grid;
    if ("maxTilesPerPage" in t) {
      if (!Number.isInteger(t.maxTilesPerPage))
        return console.error("grid.maxTilesPerPage should be an integer. You passed ".concat(t.maxTilesPerPage, ".")), !1;
      if (t.maxTilesPerPage > 49)
        return console.error("grid.maxTilesPerPage can't be larger than 49 without sacrificing browser performance. Please contact us at https://www.daily.co/contact to talk about your use case."), !1;
    }
    if ("minTilesPerPage" in t) {
      if (!Number.isInteger(t.minTilesPerPage))
        return console.error("grid.minTilesPerPage should be an integer. You passed ".concat(t.minTilesPerPage, ".")), !1;
      if (t.minTilesPerPage < 1)
        return console.error("grid.minTilesPerPage can't be lower than 1."), !1;
      if ("maxTilesPerPage" in t && t.minTilesPerPage > t.maxTilesPerPage)
        return console.error("grid.minTilesPerPage can't be higher than grid.maxTilesPerPage."), !1;
    }
  }
  return !0;
}, help: "unsupported layoutConfig. Check error logs for detailed info." }, receiveSettings: { validate: function(e) {
  return Ba(e, { allowAllParticipantsKey: !1 });
}, help: Ya({ allowAllParticipantsKey: !1 }) }, sendSettings: { validate: function(e, t) {
  return !!function(r, n) {
    try {
      return n.validateUpdateSendSettings(r), !0;
    } catch (o) {
      return console.error("Failed to validate send settings", o), !1;
    }
  }(e, t) && (t._preloadCache.sendSettings = e, !0);
}, help: "Invalid sendSettings provided. Check error logs for detailed info." }, inputSettings: { validate: function(e, t) {
  return !!sr(e) && (t._preloadCache.inputSettings || (t._preloadCache.inputSettings = {}), Ua(e), e.audio && (t._preloadCache.inputSettings.audio = e.audio), e.video && (t._preloadCache.inputSettings.video = e.video), !0);
}, help: cr() }, layout: { validate: function(e) {
  return e === "custom-v1" || e === "browser" || e === "none";
}, help: 'layout may only be set to "custom-v1"', queryString: "layout" }, emb: { queryString: "emb" }, embHref: { queryString: "embHref" }, dailyJsVersion: { queryString: "dailyJsVersion" }, proxy: { queryString: "proxy" }, strictMode: !0 }, it = { styles: { validate: function(e) {
  for (var t in e)
    if (t !== "cam" && t !== "screen")
      return !1;
  if (e.cam) {
    for (var r in e.cam)
      if (r !== "div" && r !== "video")
        return !1;
  }
  if (e.screen) {
    for (var n in e.screen)
      if (n !== "div" && n !== "video")
        return !1;
  }
  return !0;
}, help: "styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }" }, setSubscribedTracks: { validate: function(e, t) {
  if (t._preloadCache.subscribeToTracksAutomatically)
    return !1;
  var r = [!0, !1, "staged"];
  if (r.includes(e) || !N() && e === "avatar")
    return !0;
  var n = ["audio", "video", "screenAudio", "screenVideo", "rmpAudio", "rmpVideo"];
  return function o(s) {
    var c = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    for (var u in s)
      if (u === "custom") {
        if (!r.includes(s[u]) && !o(s[u], !0))
          return !1;
      } else {
        var d = !c && !n.includes(u), p = !r.includes(s[u]);
        if (d || p)
          return !1;
      }
    return !0;
  }(e);
}, help: "setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: " + "true".concat(N() ? "" : " | 'avatar'", " | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }") }, setAudio: !0, setVideo: !0, setScreenShare: { validate: function(e) {
  return e === !1;
}, help: "setScreenShare must be false, as it's only meant for stopping remote participants' screen shares" }, eject: !0, updatePermissions: { validate: function(e) {
  for (var t = 0, r = Object.entries(e); t < r.length; t++) {
    var n = ke(r[t], 2), o = n[0], s = n[1];
    switch (o) {
      case "hasPresence":
        if (typeof s != "boolean")
          return !1;
        break;
      case "canSend":
        if (s instanceof Set || s instanceof Array) {
          var c, u = ["video", "audio", "screenVideo", "screenAudio", "customVideo", "customAudio"], d = Kn(s);
          try {
            for (d.s(); !(c = d.n()).done; ) {
              var p = c.value;
              if (!u.includes(p))
                return !1;
            }
          } catch (M) {
            d.e(M);
          } finally {
            d.f();
          }
        } else if (typeof s != "boolean")
          return !1;
        s instanceof Array && (e.canSend = new Set(s));
        break;
      case "canAdmin":
        if (s instanceof Set || s instanceof Array) {
          var m, y = ["participants", "streaming", "transcription"], _ = Kn(s);
          try {
            for (_.s(); !(m = _.n()).done; ) {
              var R = m.value;
              if (!y.includes(R))
                return !1;
            }
          } catch (M) {
            _.e(M);
          } finally {
            _.f();
          }
        } else if (typeof s != "boolean")
          return !1;
        s instanceof Array && (e.canAdmin = new Set(s));
        break;
      default:
        return !1;
    }
  }
  return !0;
}, help: "updatePermissions can take hasPresence, canSend, and canAdmin permissions. hasPresence must be a boolean. canSend can be a boolean or an Array or Set of media types (video, audio, screenVideo, screenAudio, customVideo, customAudio). canAdmin can be a boolean or an Array or Set of admin types (participants, streaming, transcription)." } }, Ed = function(e) {
  yt(re, le);
  var t, r, n, o, s, c, u, d, p, m, y, _, R, M, j, O, Y, x, U, K, ee, te, q, de, G, br, _r, wr, Sr, kr, Cr, Mr, Tr, Ar, no = Td(re);
  function re(i) {
    var a, l, h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Q(this, re), ge(ce(a = no.call(this)), "startListeningForDeviceChanges", function() {
      wd(a.handleDeviceChange);
    }), ge(ce(a), "stopListeningForDeviceChanges", function() {
      Sd(a.handleDeviceChange);
    }), ge(ce(a), "handleDeviceChange", function(g) {
      g = g.map(function(w) {
        return JSON.parse(JSON.stringify(w));
      }), a.emit(rn, { action: rn, availableDevices: g });
    }), ge(ce(a), "handleNativeAppActiveStateChange", function(g) {
      a.disableReactNativeAutoDeviceManagement("video") || (g ? a.camUnmutedBeforeLosingNativeActiveState && a.setLocalVideo(!0) : (a.camUnmutedBeforeLosingNativeActiveState = a.localVideo(), a.camUnmutedBeforeLosingNativeActiveState && a.setLocalVideo(!1)));
    }), ge(ce(a), "handleNativeAudioFocusChange", function(g) {
      a.disableReactNativeAutoDeviceManagement("audio") || (a._hasNativeAudioFocus = g, a.toggleParticipantAudioBasedOnNativeAudioFocus(), a._hasNativeAudioFocus ? a.micUnmutedBeforeLosingNativeAudioFocus && a.setLocalAudio(!0) : (a.micUnmutedBeforeLosingNativeAudioFocus = a.localAudio(), a.setLocalAudio(!1)));
    }), ge(ce(a), "handleNativeSystemScreenCaptureStop", function() {
      a.stopScreenShare();
    }), a.strictMode = h.strictMode === void 0 || h.strictMode, se) {
      if (a._logDuplicateInstanceAttempt(), a.strictMode)
        throw new Error("Duplicate DailyIframe instances are not allowed");
    } else
      l = ce(a), se = l;
    if (h.dailyJsVersion = re.version(), a._iframe = i, a._callObjectMode = h.layout === "none" && !a._iframe, a._preloadCache = { subscribeToTracksAutomatically: !0, audioDeviceId: null, videoDeviceId: null, outputDeviceId: null, inputSettings: null, sendSettings: null, videoTrackForNetworkConnectivityTest: null, videoTrackForConnectionQualityTest: null }, a._callObjectMode && (window._dailyPreloadCache = a._preloadCache), h.showLocalVideo !== void 0 ? a._callObjectMode ? console.error("showLocalVideo is not available in call object mode") : a._showLocalVideo = !!h.showLocalVideo : a._showLocalVideo = !0, h.showParticipantsBar !== void 0 ? a._callObjectMode ? console.error("showParticipantsBar is not available in call object mode") : a._showParticipantsBar = !!h.showParticipantsBar : a._showParticipantsBar = !0, h.customIntegrations !== void 0 ? a._callObjectMode ? console.error("customIntegrations is not available in call object mode") : a._customIntegrations = h.customIntegrations : a._customIntegrations = {}, h.customTrayButtons !== void 0 ? a._callObjectMode ? console.error("customTrayButtons is not available in call object mode") : a._customTrayButtons = h.customTrayButtons : a._customTrayButtons = {}, h.activeSpeakerMode !== void 0 ? a._callObjectMode ? console.error("activeSpeakerMode is not available in call object mode") : a._activeSpeakerMode = !!h.activeSpeakerMode : a._activeSpeakerMode = !1, h.receiveSettings ? a._callObjectMode ? a._receiveSettings = h.receiveSettings : console.error("receiveSettings is only available in call object mode") : a._receiveSettings = {}, a.validateProperties(h), a.properties = T({}, h), a._preloadCache.inputSettings || (a._preloadCache.inputSettings = {}), h.inputSettings && h.inputSettings.audio && (a._preloadCache.inputSettings.audio = h.inputSettings.audio), h.inputSettings && h.inputSettings.video && (a._preloadCache.inputSettings.video = h.inputSettings.video), a._callObjectLoader = a._callObjectMode ? new is() : null, a._callState = qt, a._isPreparingToJoin = !1, a._accessState = { access: ot }, a._meetingSessionState = Bt(Zn, a._callObjectMode), a._nativeInCallAudioMode = Qn, a._participants = {}, a._participantCounts = Xn, a._rmpPlayerState = {}, a._waitingParticipants = {}, a._inputEventsOn = {}, a._network = { threshold: "good", quality: 100 }, a._activeSpeaker = {}, a._callFrameId = _t(), a._localAudioLevel = 0, a._remoteParticipantsAudioLevel = {}, a._messageChannel = N() ? new ts() : new Xo(), a._iframe && (a._iframe.requestFullscreen ? a._iframe.addEventListener("fullscreenchange", function() {
      document.fullscreenElement === a._iframe ? (a.emit(_e, { action: _e }), a.sendMessageToCallMachine({ action: _e })) : (a.emit(we, { action: we }), a.sendMessageToCallMachine({ action: we }));
    }) : a._iframe.webkitRequestFullscreen && a._iframe.addEventListener("webkitfullscreenchange", function() {
      document.webkitFullscreenElement === a._iframe ? (a.emit(_e, { action: _e }), a.sendMessageToCallMachine({ action: _e })) : (a.emit(we, { action: we }), a.sendMessageToCallMachine({ action: we }));
    })), N()) {
      var f = a.nativeUtils();
      f.addAudioFocusChangeListener && f.removeAudioFocusChangeListener && f.addAppActiveStateChangeListener && f.removeAppActiveStateChangeListener && f.addSystemScreenCaptureStopListener && f.removeSystemScreenCaptureStopListener || console.warn("expected (add|remove)(AudioFocusChange|AppActiveStateChange|SystemScreenCaptureStop)Listener to be available in React Native"), a._hasNativeAudioFocus = !0, f.addAudioFocusChangeListener(a.handleNativeAudioFocusChange), f.addAppActiveStateChangeListener(a.handleNativeAppActiveStateChange), f.addSystemScreenCaptureStopListener(a.handleNativeSystemScreenCaptureStop);
    }
    return a._callObjectMode && a.startListeningForDeviceChanges(), a._messageChannel.addListenerForMessagesFromCallMachine(a.handleMessageFromCallMachine, a._callFrameId, ce(a)), a;
  }
  return Z(re, [{ key: "destroy", value: (Ar = b(function* () {
    try {
      yield this.leave();
    } catch {
    }
    var i = this._iframe;
    if (i) {
      var a = i.parentElement;
      a && a.removeChild(i);
    }
    if (this._messageChannel.removeListener(this.handleMessageFromCallMachine), N()) {
      var l = this.nativeUtils();
      l.removeAudioFocusChangeListener(this.handleNativeAudioFocusChange), l.removeAppActiveStateChangeListener(this.handleNativeAppActiveStateChange), l.removeSystemScreenCaptureStopListener(this.handleNativeSystemScreenCaptureStop);
    }
    this._callObjectMode && this.stopListeningForDeviceChanges(), this.resetMeetingDependentVars(), this._destroyed = !0;
    try {
      this.emit("call-instance-destroyed", { action: "call-instance-destroyed" });
    } catch {
      console.log("could not emit call-instance-destroyed");
    }
    this.strictMode && (this._callFrameId = void 0), se = void 0;
  }), function() {
    return Ar.apply(this, arguments);
  }) }, { key: "isDestroyed", value: function() {
    return !!this._destroyed;
  } }, { key: "loadCss", value: function(i) {
    var a = i.bodyClass, l = i.cssFile, h = i.cssText;
    return C(), this.sendMessageToCallMachine({ action: "load-css", cssFile: this.absoluteUrl(l), bodyClass: a, cssText: h }), this;
  } }, { key: "iframe", value: function() {
    return C(), this._iframe;
  } }, { key: "meetingState", value: function() {
    return this._callState;
  } }, { key: "accessState", value: function() {
    return ne(this._callObjectMode, "accessState()"), this._accessState;
  } }, { key: "participants", value: function() {
    return this._participants;
  } }, { key: "participantCounts", value: function() {
    return this._participantCounts;
  } }, { key: "waitingParticipants", value: function() {
    return ne(this._callObjectMode, "waitingParticipants()"), this._waitingParticipants;
  } }, { key: "validateParticipantProperties", value: function(i, a) {
    for (var l in a) {
      if (!it[l])
        throw new Error("unrecognized updateParticipant property ".concat(l));
      if (it[l].validate && !it[l].validate(a[l], this, this._participants[i]))
        throw new Error(it[l].help);
    }
  } }, { key: "updateParticipant", value: function(i, a) {
    return this._participants.local && this._participants.local.session_id === i && (i = "local"), i && a && (this.validateParticipantProperties(i, a), this.sendMessageToCallMachine({ action: "update-participant", id: i, properties: a })), this;
  } }, { key: "updateParticipants", value: function(i) {
    var a = this._participants.local && this._participants.local.session_id;
    for (var l in i)
      l === a && (l = "local"), l && i[l] && this.validateParticipantProperties(l, i[l]);
    return this.sendMessageToCallMachine({ action: "update-participants", participants: i }), this;
  } }, { key: "updateWaitingParticipant", value: (Tr = b(function* () {
    var i = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (ne(this._callObjectMode, "updateWaitingParticipant()"), $(this._callState, "updateWaitingParticipant()"), typeof a != "string" || I(l) !== "object")
      throw new Error("updateWaitingParticipant() must take an id string and a updates object");
    return new Promise(function(h, f) {
      i.sendMessageToCallMachine({ action: "daily-method-update-waiting-participant", id: a, updates: l }, function(g) {
        g.error && f(g.error), g.id || f(new Error("unknown error in updateWaitingParticipant()")), h({ id: g.id });
      });
    });
  }), function() {
    return Tr.apply(this, arguments);
  }) }, { key: "updateWaitingParticipants", value: (Mr = b(function* () {
    var i = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ne(this._callObjectMode, "updateWaitingParticipants()"), $(this._callState, "updateWaitingParticipants()"), I(a) !== "object")
      throw new Error("updateWaitingParticipants() must take a mapping between ids and update objects");
    return new Promise(function(l, h) {
      i.sendMessageToCallMachine({ action: "daily-method-update-waiting-participants", updatesById: a }, function(f) {
        f.error && h(f.error), f.ids || h(new Error("unknown error in updateWaitingParticipants()")), l({ ids: f.ids });
      });
    });
  }), function() {
    return Mr.apply(this, arguments);
  }) }, { key: "requestAccess", value: (Cr = b(function* () {
    var i = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = a.access, h = l === void 0 ? { level: pi } : l, f = a.name, g = f === void 0 ? "" : f;
    return ne(this._callObjectMode, "requestAccess()"), $(this._callState, "requestAccess()"), new Promise(function(w, k) {
      i.sendMessageToCallMachine({ action: "daily-method-request-access", access: h, name: g }, function(L) {
        L.error && k(L.error), L.access || k(new Error("unknown error in requestAccess()")), w({ access: L.access, granted: L.granted });
      });
    });
  }), function() {
    return Cr.apply(this, arguments);
  }) }, { key: "localAudio", value: function() {
    return this._participants.local ? this._participants.local.audio : null;
  } }, { key: "localVideo", value: function() {
    return this._participants.local ? this._participants.local.video : null;
  } }, { key: "setLocalAudio", value: function(i) {
    return this.sendMessageToCallMachine({ action: "local-audio", state: i }), this;
  } }, { key: "setLocalVideo", value: function(i) {
    return this.sendMessageToCallMachine({ action: "local-video", state: i }), this;
  } }, { key: "getReceiveSettings", value: (kr = b(function* (i) {
    var a = this, l = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).showInheritedValues, h = l !== void 0 && l;
    switch (ne(this._callObjectMode, "getReceiveSettings()"), I(i)) {
      case "string":
        return new Promise(function(f) {
          a.sendMessageToCallMachine({ action: "get-single-participant-receive-settings", id: i, showInheritedValues: h }, function(g) {
            f(g.receiveSettings);
          });
        });
      case "undefined":
        return this._receiveSettings;
      default:
        throw new Error('first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments');
    }
  }), function(i) {
    return kr.apply(this, arguments);
  }) }, { key: "updateReceiveSettings", value: (Sr = b(function* (i) {
    var a = this;
    if (ne(this._callObjectMode, "updateReceiveSettings()"), !Ba(i, { allowAllParticipantsKey: !0 }))
      throw new Error(Ya({ allowAllParticipantsKey: !0 }));
    return $(this._callState, "updateReceiveSettings()", "To specify receive settings earlier, use the receiveSettings config property."), new Promise(function(l) {
      a.sendMessageToCallMachine({ action: "update-receive-settings", receiveSettings: i }, function(h) {
        l({ receiveSettings: h.receiveSettings });
      });
    });
  }), function(i) {
    return Sr.apply(this, arguments);
  }) }, { key: "_prepInputSettingsToPresentToUser", value: function(i) {
    var a, l, h, f, g, w, k, L;
    if (i) {
      var he = {}, Ze = ((a = i.audio) === null || a === void 0 || (l = a.processor) === null || l === void 0 ? void 0 : l.type) === "none" && ((h = i.audio) === null || h === void 0 || (f = h.processor) === null || f === void 0 ? void 0 : f._isDefaultWhenNone);
      if (i.audio && !Ze) {
        var Ve = T({}, i.audio.processor);
        delete Ve._isDefaultWhenNone, he.audio = T(T({}, i.audio), {}, { processor: Ve });
      }
      var Ot = ((g = i.video) === null || g === void 0 || (w = g.processor) === null || w === void 0 ? void 0 : w.type) === "none" && ((k = i.video) === null || k === void 0 || (L = k.processor) === null || L === void 0 ? void 0 : L._isDefaultWhenNone);
      if (i.video && !Ot) {
        var Xe = T({}, i.video.processor);
        delete Xe._isDefaultWhenNone, he.video = T(T({}, i.video), {}, { processor: Xe });
      }
      return he;
    }
  } }, { key: "getInputSettings", value: function() {
    var i = this;
    return new Promise(function(a) {
      a(i._getInputSettings());
    });
  } }, { key: "_getInputSettings", value: function() {
    var i, a, l, h, f, g, w, k, L = { processor: { type: "none", _isDefaultWhenNone: !0 } };
    this._inputSettings ? (i = ((l = this._inputSettings) === null || l === void 0 ? void 0 : l.video) || L, a = ((h = this._inputSettings) === null || h === void 0 ? void 0 : h.audio) || L) : (i = ((f = this._preloadCache) === null || f === void 0 || (g = f.inputSettings) === null || g === void 0 ? void 0 : g.video) || L, a = ((w = this._preloadCache) === null || w === void 0 || (k = w.inputSettings) === null || k === void 0 ? void 0 : k.audio) || L);
    var he = { audio: a, video: i };
    return this._prepInputSettingsToPresentToUser(he);
  } }, { key: "updateInputSettings", value: (wr = b(function* (i) {
    var a = this;
    return sr(i) ? (i && (this._preloadCache.inputSettings || (this._preloadCache.inputSettings = {}), Ua(i), i.audio && (this._preloadCache.inputSettings.audio = i.audio), i.video && (this._preloadCache.inputSettings.video = i.video)), sr(i) ? this._callObjectMode && this.needsLoad() ? this._getInputSettings() : new Promise(function(l, h) {
      a.sendMessageToCallMachine({ action: "update-input-settings", inputSettings: i }, function(f) {
        f.error ? h(f.error) : l({ inputSettings: a._prepInputSettingsToPresentToUser(f.inputSettings) });
      });
    }) : this._getInputSettings()) : (console.error(cr()), Promise.reject(cr()));
  }), function(i) {
    return wr.apply(this, arguments);
  }) }, { key: "setBandwidth", value: function(i) {
    var a = i.kbs, l = i.trackConstraints;
    return C(), this.sendMessageToCallMachine({ action: "set-bandwidth", kbs: a, trackConstraints: l }), this;
  } }, { key: "getDailyLang", value: function() {
    var i = this;
    return C(), new Promise(function() {
      var a = b(function* (l) {
        i.sendMessageToCallMachine({ action: "get-daily-lang" }, function(h) {
          delete h.action, delete h.callbackStamp, l(h);
        });
      });
      return function(l) {
        return a.apply(this, arguments);
      };
    }());
  } }, { key: "setDailyLang", value: function(i) {
    return C(), this.sendMessageToCallMachine({ action: "set-daily-lang", lang: i }), this;
  } }, { key: "setProxyUrl", value: function(i) {
    return this.sendMessageToCallMachine({ action: "set-proxy-url", proxyUrl: i }), this;
  } }, { key: "setIceConfig", value: function(i) {
    return this.sendMessageToCallMachine({ action: "set-ice-config", iceConfig: i }), this;
  } }, { key: "getMeetingSession", value: (_r = b(function* () {
    var i = this;
    return $(this._callState, "getMeetingSession()"), new Promise(function() {
      var a = b(function* (l) {
        i.sendMessageToCallMachine({ action: "get-meeting-session" }, function(h) {
          delete h.action, delete h.callbackStamp, delete h.callFrameId, l(h);
        });
      });
      return function(l) {
        return a.apply(this, arguments);
      };
    }());
  }), function() {
    return _r.apply(this, arguments);
  }) }, { key: "meetingSessionState", value: function() {
    if (this._callState !== W)
      throw new Error("meetingSessionState() is only available when joined");
    return this._meetingSessionState;
  } }, { key: "setMeetingSessionData", value: function(i) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "replace";
    if (ne(this._callObjectMode, "setMeetingSessionData()"), this._callState !== W)
      throw new Error("setMeetingSessionData() is only available when joined");
    try {
      (function(l, h) {
        new rs({ data: l, mergeStrategy: h });
      })(i, a);
    } catch (l) {
      throw console.error(l), l;
    }
    try {
      this.sendMessageToCallMachine({ action: "set-session-data", data: i, mergeStrategy: a });
    } catch (l) {
      throw new Error("Error setting meeting session data: ".concat(l));
    }
  } }, { key: "setUserName", value: function(i, a) {
    var l = this;
    return this.properties.userName = i, new Promise(function(h) {
      l.sendMessageToCallMachine({ action: "set-user-name", name: i ?? "", thisMeetingOnly: N() || !!a && !!a.thisMeetingOnly }, function(f) {
        delete f.action, delete f.callbackStamp, h(f);
      });
    });
  } }, { key: "setUserData", value: (br = b(function* (i) {
    var a = this;
    try {
      Va(i);
    } catch (l) {
      throw console.error(l), l;
    }
    return this.properties.userData = i, new Promise(function(l) {
      try {
        a.sendMessageToCallMachine({ action: "set-user-data", userData: i }, function(h) {
          delete h.action, delete h.callbackStamp, delete h.callFrameId, l(h);
        });
      } catch (h) {
        throw new Error("Error setting user data: ".concat(h));
      }
    });
  }), function(i) {
    return br.apply(this, arguments);
  }) }, { key: "validateAudioLevelInterval", value: function(i) {
    if (i && (i < 100 || typeof i != "number"))
      throw new Error("The interval must be a number greater than or equal to 100 milliseconds.");
  } }, { key: "startLocalAudioLevelObserver", value: function(i) {
    var a = this;
    if (C(), this.validateAudioLevelInterval(i), this._dailyMainExecuted)
      return new Promise(function(l, h) {
        a.sendMessageToCallMachine({ action: "start-local-audio-level-observer", interval: i }, function(f) {
          f.error ? h({ error: f.error }) : l();
        });
      });
    this._preloadCache.localAudioLevelObserver = { enabled: !0, interval: i };
  } }, { key: "stopLocalAudioLevelObserver", value: (G = b(function* () {
    C(), this._preloadCache.localAudioLevelObserver = null, this._localAudioLevel = 0, this.sendMessageToCallMachine({ action: "stop-local-audio-level-observer" });
  }), function() {
    return G.apply(this, arguments);
  }) }, { key: "startRemoteParticipantsAudioLevelObserver", value: function(i) {
    var a = this;
    if (C(), this.validateAudioLevelInterval(i), this._dailyMainExecuted)
      return new Promise(function(l, h) {
        a.sendMessageToCallMachine({ action: "start-remote-participants-audio-level-observer", interval: i }, function(f) {
          f.error ? h({ error: f.error }) : l();
        });
      });
    this._preloadCache.remoteParticipantsAudioLevelObserver = { enabled: !0, interval: i };
  } }, { key: "stopRemoteParticipantsAudioLevelObserver", value: (de = b(function* () {
    C(), this._preloadCache.remoteParticipantsAudioLevelObserver = null, this._remoteParticipantsAudioLevel = {}, this.sendMessageToCallMachine({ action: "stop-remote-participants-audio-level-observer" });
  }), function() {
    return de.apply(this, arguments);
  }) }, { key: "startCamera", value: (q = b(function* () {
    var i = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ne(this._callObjectMode, "startCamera()"), [Te, W].includes(this._callState))
      throw new Error("startCamera() not supported after joining a meeting: did you mean to use setLocalAudio() and/or setLocalVideo() instead?");
    if (this.needsLoad())
      try {
        yield this.load(a);
      } catch (l) {
        return Promise.reject(l);
      }
    else {
      if (this._didPreAuth) {
        if (a.url && a.url !== this.properties.url)
          return console.error("url in startCamera() is different than the one used in preAuth()"), Promise.reject();
        if (a.token && a.token !== this.properties.token)
          return console.error("token in startCamera() is different than the one used in preAuth()"), Promise.reject();
      }
      this.validateProperties(a), this.properties = T(T({}, this.properties), a);
    }
    return new Promise(function(l) {
      i.sendMessageToCallMachine({ action: "start-camera", properties: Me(i.properties), preloadCache: Me(i._preloadCache) }, function(h) {
        delete h.action, delete h.callbackStamp, l(h);
      });
    });
  }), function() {
    return q.apply(this, arguments);
  }) }, { key: "validateCustomTrack", value: function(i, a, l) {
    if (l && l.length > 50)
      throw new Error("Custom track `trackName` must not be more than 50 characters");
    if (a && a !== "music" && a !== "speech" && !(a instanceof Object))
      throw new Error("Custom track `mode` must be either `music` | `speech` | `DailyMicAudioModeSettings` or `undefined`");
    if (l && ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo", "customVideoDefaults"].includes(l))
      throw new Error("Custom track `trackName` must not match a track name already used by daily: cam-audio, cam-video, customVideoDefaults, screen-video, screen-audio, rmpAudio, rmpVideo");
    if (!(i instanceof MediaStreamTrack))
      throw new Error("Custom tracks provided must be instances of MediaStreamTrack");
  } }, { key: "startCustomTrack", value: function() {
    var i = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { track, mode, trackName };
    if (C(), this.validateCustomTrack(a.track, a.mode, a.trackName), this._callState !== W)
      throw new Error("startCustomTrack() is only allowed when joined");
    return new Promise(function(l, h) {
      window._dailyPreloadCache.customTrack = a.track, a.track = qe, i.sendMessageToCallMachine({ action: "start-custom-track", properties: a }, function(f) {
        f.error ? h({ error: f.error }) : l(f.mediaTag);
      });
    });
  } }, { key: "stopCustomTrack", value: function(i) {
    var a = this;
    if (C(), this._callState !== W)
      throw new Error("stopCustomTrack() is only allowed when joined");
    return new Promise(function(l) {
      a.sendMessageToCallMachine({ action: "stop-custom-track", mediaTag: i }, function(h) {
        l(h.mediaTag);
      });
    });
  } }, { key: "setCamera", value: function(i) {
    var a = this;
    if (Ye(), this.needsLoad())
      throw new Error("Before you can invoke setCamera, first you need to invoke one of these methods: join, startCamera, or preAuth");
    return new Promise(function(l) {
      a.sendMessageToCallMachine({ action: "set-camera", cameraDeviceId: i }, function(h) {
        l({ device: h.device });
      });
    });
  } }, { key: "setAudioDevice", value: (te = b(function* (i) {
    return Ye(), this.nativeUtils().setAudioDevice(i), { deviceId: yield this.nativeUtils().getAudioDevice() };
  }), function(i) {
    return te.apply(this, arguments);
  }) }, { key: "cycleCamera", value: function() {
    var i = this;
    return new Promise(function(a) {
      i.sendMessageToCallMachine({ action: "cycle-camera" }, function(l) {
        a({ device: l.device });
      });
    });
  } }, { key: "cycleMic", value: function() {
    var i = this;
    return C(), new Promise(function(a) {
      i.sendMessageToCallMachine({ action: "cycle-mic" }, function(l) {
        a({ device: l.device });
      });
    });
  } }, { key: "getCameraFacingMode", value: function() {
    var i = this;
    return Ye(), new Promise(function(a) {
      i.sendMessageToCallMachine({ action: "get-camera-facing-mode" }, function(l) {
        a(l.facingMode);
      });
    });
  } }, { key: "setInputDevices", value: function(i) {
    var a = i.audioDeviceId, l = i.videoDeviceId, h = i.audioSource, f = i.videoSource;
    return console.warn("setInputDevices() is deprecated: instead use setInputDevicesAsync(), which returns a Promise"), this.setInputDevicesAsync({ audioDeviceId: a, videoDeviceId: l, audioSource: h, videoSource: f }), this;
  } }, { key: "setInputDevicesAsync", value: (ee = b(function* (i) {
    var a = this, l = i.audioDeviceId, h = i.videoDeviceId, f = i.audioSource, g = i.videoSource;
    return C(), f !== void 0 && (l = f), g !== void 0 && (h = g), l && (this._preloadCache.audioDeviceId = l), h && (this._preloadCache.videoDeviceId = h), this._callObjectMode && this.needsLoad() ? { camera: { deviceId: this._preloadCache.videoDeviceId }, mic: { deviceId: this._preloadCache.audioDeviceId }, speaker: { deviceId: this._preloadCache.outputDeviceId } } : (l instanceof MediaStreamTrack && (l = qe), h instanceof MediaStreamTrack && (h = qe), new Promise(function(w) {
      a.sendMessageToCallMachine({ action: "set-input-devices", audioDeviceId: l, videoDeviceId: h }, function(k) {
        delete k.action, delete k.callbackStamp, k.returnPreloadCache ? w({ camera: { deviceId: a._preloadCache.videoDeviceId }, mic: { deviceId: a._preloadCache.audioDeviceId }, speaker: { deviceId: a._preloadCache.outputDeviceId } }) : w(k);
      });
    }));
  }), function(i) {
    return ee.apply(this, arguments);
  }) }, { key: "setOutputDevice", value: function(i) {
    var a = i.outputDeviceId;
    return console.warn("setOutputDevice() is deprecated: instead use setOutputDeviceAsync(), which returns a Promise"), this.setOutputDeviceAsync({ outputDeviceId: a }), this;
  } }, { key: "setOutputDeviceAsync", value: (K = b(function* (i) {
    var a = this, l = i.outputDeviceId;
    return C(), l && (this._preloadCache.outputDeviceId = l), this._callObjectMode && this.needsLoad() ? { camera: { deviceId: this._preloadCache.videoDeviceId }, mic: { deviceId: this._preloadCache.audioDeviceId }, speaker: { deviceId: this._preloadCache.outputDeviceId } } : new Promise(function(h) {
      a.sendMessageToCallMachine({ action: "set-output-device", outputDeviceId: l }, function(f) {
        delete f.action, delete f.callbackStamp, f.returnPreloadCache ? h({ camera: { deviceId: a._preloadCache.videoDeviceId }, mic: { deviceId: a._preloadCache.audioDeviceId }, speaker: { deviceId: a._preloadCache.outputDeviceId } }) : h(f);
      });
    });
  }), function(i) {
    return K.apply(this, arguments);
  }) }, { key: "getInputDevices", value: (U = b(function* () {
    var i = this;
    return this._callObjectMode && this.needsLoad() ? { camera: { deviceId: this._preloadCache.videoDeviceId }, mic: { deviceId: this._preloadCache.audioDeviceId }, speaker: { deviceId: this._preloadCache.outputDeviceId } } : new Promise(function(a) {
      i.sendMessageToCallMachine({ action: "get-input-devices" }, function(l) {
        delete l.action, delete l.callbackStamp, l.returnPreloadCache ? a({ camera: { deviceId: i._preloadCache.videoDeviceId }, mic: { deviceId: i._preloadCache.audioDeviceId }, speaker: { deviceId: i._preloadCache.outputDeviceId } }) : a(l);
      });
    });
  }), function() {
    return U.apply(this, arguments);
  }) }, { key: "nativeInCallAudioMode", value: function() {
    return Ye(), this._nativeInCallAudioMode;
  } }, { key: "setNativeInCallAudioMode", value: function(i) {
    if (Ye(), [Qn, Ad].includes(i)) {
      if (i !== this._nativeInCallAudioMode)
        return this._nativeInCallAudioMode = i, !this.disableReactNativeAutoDeviceManagement("audio") && this._isCallPendingOrOngoing(this._callState, this._isPreparingToJoin) && this.nativeUtils().setAudioMode(this._nativeInCallAudioMode), this;
    } else
      console.error("invalid in-call audio mode specified: ", i);
  } }, { key: "preAuth", value: (x = b(function* () {
    var i = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ne(this._callObjectMode, "preAuth()"), [Te, W].includes(this._callState))
      throw new Error("preAuth() not supported after joining a meeting");
    if (this.needsLoad() && (yield this.load(a)), !a.url)
      throw new Error("preAuth() requires at least a url to be provided");
    return this.validateProperties(a), this.properties = T(T({}, this.properties), a), new Promise(function(l, h) {
      i.sendMessageToCallMachine({ action: "daily-method-preauth", properties: Me(i.properties), preloadCache: Me(i._preloadCache) }, function(f) {
        return f.error ? h(f.error) : f.access ? (i._didPreAuth = !0, void l({ access: f.access })) : h(new Error("unknown error in preAuth()"));
      });
    });
  }), function() {
    return x.apply(this, arguments);
  }) }, { key: "load", value: (Y = b(function* (i) {
    var a = this;
    if (this.needsLoad()) {
      if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode))
        throw new Error("Use after destroy");
      if (i && (this.validateProperties(i), this.properties = T(T({}, this.properties), i)), !this._callObjectMode && !this.properties.url)
        throw new Error("can't load iframe meeting because url property isn't set");
      this._updateCallState(en);
      try {
        this.emit(zt, { action: zt });
      } catch (l) {
        console.log("could not emit 'loading'", l);
      }
      return this._callObjectMode ? new Promise(function(l, h) {
        a._callObjectLoader.cancel(), a._callObjectLoader.load(a._callFrameId, a.properties.dailyConfig && a.properties.dailyConfig.avoidEval, function(f) {
          a._updateCallState(tn), f && a.emit(st, { action: st }), l();
        }, function(f, g) {
          a.emit(Wt, { action: Wt, errorMsg: f }), g || (a._updateCallState(me), a.resetMeetingDependentVars(), a.emit(dt, { action: dt, errorMsg: f }), h(f));
        });
      }) : (this._iframe.src = hi(this.assembleMeetingUrl()), new Promise(function(l, h) {
        a._loadedCallback = function(f) {
          if (a._callState !== me) {
            for (var g in a._updateCallState(tn), (a.properties.cssFile || a.properties.cssText) && a.loadCss(a.properties), a._inputEventsOn)
              a.sendMessageToCallMachine({ action: tt, on: g });
            l();
          } else
            h(f);
        };
      }));
    }
  }), function(i) {
    return Y.apply(this, arguments);
  }) }, { key: "join", value: (O = b(function* () {
    var i = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = !1;
    if (this.needsLoad()) {
      this.updateIsPreparingToJoin(!0);
      try {
        yield this.load(a);
      } catch (h) {
        return this.updateIsPreparingToJoin(!1), Promise.reject(h);
      }
    } else {
      if (l = !(!this.properties.cssFile && !this.properties.cssText), this._didPreAuth) {
        if (a.url && a.url !== this.properties.url)
          return console.error("url in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject();
        if (a.token && a.token !== this.properties.token)
          return console.error("token in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject();
      }
      if (a.url && !this._callObjectMode && a.url && a.url !== this.properties.url)
        return console.error("url in join() is different than the one used in load() (".concat(this.properties.url, " -> ").concat(a.url, ")")), this.updateIsPreparingToJoin(!1), Promise.reject();
      this.validateProperties(a), this.properties = T(T({}, this.properties), a);
    }
    if (a.showLocalVideo !== void 0 && (this._callObjectMode ? console.error("showLocalVideo is not available in callObject mode") : this._showLocalVideo = !!a.showLocalVideo), a.showParticipantsBar !== void 0 && (this._callObjectMode ? console.error("showParticipantsBar is not available in callObject mode") : this._showParticipantsBar = !!a.showParticipantsBar), this._callState === W || this._callState === Te)
      return console.warn("already joined meeting, call leave() before joining again"), void this.updateIsPreparingToJoin(!1);
    this._updateCallState(Te, !1);
    try {
      this.emit(Gt, { action: Gt });
    } catch (h) {
      console.log("could not emit 'joining-meeting'", h);
    }
    return this._preloadCache.inputSettings || (this._preloadCache.inputSettings = {}), a.inputSettings && a.inputSettings.audio && (this._preloadCache.inputSettings.audio = a.inputSettings.audio), a.inputSettings && a.inputSettings.video && (this._preloadCache.inputSettings.video = a.inputSettings.video), this.sendMessageToCallMachine({ action: "join-meeting", properties: Me(this.properties), preloadCache: Me(this._preloadCache) }), new Promise(function(h, f) {
      i._joinedCallback = function(g, w) {
        if (i._callState !== me) {
          if (i._updateCallState(W), g)
            for (var k in g)
              i._callObjectMode && (qn(g[k]), Jn(g[k]), zn(g[k], i._participants[k])), i._participants[k] = T({}, g[k]), i.toggleParticipantAudioBasedOnNativeAudioFocus();
          l && i.loadCss(i.properties), h(g);
        } else
          f(w);
      };
    });
  }), function() {
    return O.apply(this, arguments);
  }) }, { key: "leave", value: (j = b(function* () {
    var i = this;
    return new Promise(function(a) {
      if (i._callState === ve || i._callState === me)
        a();
      else if (i._callObjectLoader && !i._callObjectLoader.loaded) {
        i._callObjectLoader.cancel(), i._updateCallState(ve), i.resetMeetingDependentVars();
        try {
          i.emit(ve, { action: ve });
        } catch (l) {
          console.log("could not emit 'left-meeting'", l);
        }
        a();
      } else
        i._resolveLeave = a, i.sendMessageToCallMachine({ action: "leave-meeting" });
    });
  }), function() {
    return j.apply(this, arguments);
  }) }, { key: "startScreenShare", value: (M = b(function* () {
    var i = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (a.screenVideoSendSettings && this._validateVideoSendSettings("screenVideo", a.screenVideoSendSettings), a.mediaStream && (this._preloadCache.screenMediaStream = a.mediaStream, a.mediaStream = qe), typeof DailyNativeUtils < "u" && DailyNativeUtils.isIOS !== void 0 && DailyNativeUtils.isIOS) {
      var l = this.nativeUtils();
      if (yield l.isScreenBeingCaptured())
        return void this.emit(ut, { action: ut, type: "screen-share-error", errorMsg: "Could not start the screen sharing. The screen is already been captured!" });
      l.setSystemScreenCaptureStartCallback(function() {
        l.setSystemScreenCaptureStartCallback(null), i.sendMessageToCallMachine({ action: an, captureOptions: a });
      }), l.presentSystemScreenCapturePrompt();
    } else
      this.sendMessageToCallMachine({ action: an, captureOptions: a });
  }), function() {
    return M.apply(this, arguments);
  }) }, { key: "stopScreenShare", value: function() {
    this.sendMessageToCallMachine({ action: "local-screen-stop" });
  } }, { key: "startRecording", value: function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.sendMessageToCallMachine(T({ action: "local-recording-start" }, i));
  } }, { key: "updateRecording", value: function(i) {
    var a = i.layout, l = a === void 0 ? { preset: "default" } : a, h = i.instanceId;
    this.sendMessageToCallMachine({ action: "daily-method-update-recording", layout: l, instanceId: h });
  } }, { key: "stopRecording", value: function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.sendMessageToCallMachine(T({ action: "local-recording-stop" }, i));
  } }, { key: "startLiveStreaming", value: function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.sendMessageToCallMachine(T({ action: "daily-method-start-live-streaming" }, i));
  } }, { key: "updateLiveStreaming", value: function(i) {
    var a = i.layout, l = a === void 0 ? { preset: "default" } : a, h = i.instanceId;
    this.sendMessageToCallMachine({ action: "daily-method-update-live-streaming", layout: l, instanceId: h });
  } }, { key: "addLiveStreamingEndpoints", value: function(i) {
    var a = i.endpoints, l = i.instanceId;
    this.sendMessageToCallMachine({ action: on, endpointsOp: Go, endpoints: a, instanceId: l });
  } }, { key: "removeLiveStreamingEndpoints", value: function(i) {
    var a = i.endpoints, l = i.instanceId;
    this.sendMessageToCallMachine({ action: on, endpointsOp: $o, endpoints: a, instanceId: l });
  } }, { key: "stopLiveStreaming", value: function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.sendMessageToCallMachine(T({ action: "daily-method-stop-live-streaming" }, i));
  } }, { key: "validateDailyConfig", value: function(i) {
    i.camSimulcastEncodings && (console.warn("camSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide camera simulcast settings."), this.validateSimulcastEncodings(i.camSimulcastEncodings)), i.screenSimulcastEncodings && console.warn("screenSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide screen simulcast settings.");
  } }, { key: "validateSimulcastEncodings", value: function(i) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, l = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    if (i) {
      if (!(i instanceof Array))
        throw new Error("encodings must be an Array");
      if (!ni(i.length, 1, 3))
        throw new Error("encodings must be an Array with between 1 to ".concat(3, " layers"));
      for (var h = 0; h < i.length; h++) {
        var f = i[h];
        for (var g in this._validateEncodingLayerHasValidProperties(f), f) {
          if (!Vt.includes(g))
            throw new Error("Invalid key ".concat(g, ", valid keys are:") + Object.values(Vt));
          if (typeof f[g] != "number")
            throw new Error("".concat(g, " must be a number"));
          if (a) {
            var w = a[g], k = w.min, L = w.max;
            if (!ni(f[g], k, L))
              throw new Error("".concat(g, " value not in range. valid range: ").concat(k, " to ").concat(L));
          }
        }
        if (l && !f.hasOwnProperty("maxBitrate"))
          throw new Error("maxBitrate is not specified");
      }
    }
  } }, { key: "startRemoteMediaPlayer", value: (R = b(function* (i) {
    var a = this, l = i.url, h = i.settings, f = h === void 0 ? { state: Ht.PLAY } : h;
    try {
      (function(g) {
        if (typeof g != "string")
          throw new Error('url parameter must be "string" type');
      })(l), ri(f), function(g) {
        for (var w in g)
          if (!ei.includes(w))
            throw new Error("Invalid key ".concat(w, ", valid keys are: ").concat(ei));
        g.simulcastEncodings && this.validateSimulcastEncodings(g.simulcastEncodings, xa, !0);
      }(f);
    } catch (g) {
      throw console.error("invalid argument Error: ".concat(g)), console.error(`startRemoteMediaPlayer arguments must be of the form: 
  { url: "playback url", 
  settings?: 
  {state: "play"|"pause", simulcastEncodings?: [{}] } }`), g;
    }
    return new Promise(function() {
      var g = b(function* (w, k) {
        a.sendMessageToCallMachine({ action: "daily-method-start-remote-media-player", url: l, settings: f }, function(L) {
          L.error ? k({ error: L.error, errorMsg: L.errorMsg }) : w({ session_id: L.session_id, remoteMediaPlayerState: { state: L.state, settings: L.settings } });
        });
      });
      return function(w, k) {
        return g.apply(this, arguments);
      };
    }());
  }), function(i) {
    return R.apply(this, arguments);
  }) }, { key: "stopRemoteMediaPlayer", value: (_ = b(function* (i) {
    var a = this;
    if (typeof i != "string")
      throw new Error(" remotePlayerID must be of type string");
    return new Promise(function() {
      var l = b(function* (h, f) {
        a.sendMessageToCallMachine({ action: "daily-method-stop-remote-media-player", session_id: i }, function(g) {
          g.error ? f({ error: g.error, errorMsg: g.errorMsg }) : h();
        });
      });
      return function(h, f) {
        return l.apply(this, arguments);
      };
    }());
  }), function(i) {
    return _.apply(this, arguments);
  }) }, { key: "updateRemoteMediaPlayer", value: (y = b(function* (i) {
    var a = this, l = i.session_id, h = i.settings;
    try {
      ri(h);
    } catch (f) {
      throw console.error("invalid argument Error: ".concat(f)), console.error(`updateRemoteMediaPlayer arguments must be of the form: 
  session_id: "participant session", 
  { settings?: {state: "play"|"pause"} }`), f;
    }
    return new Promise(function() {
      var f = b(function* (g, w) {
        a.sendMessageToCallMachine({ action: "daily-method-update-remote-media-player", session_id: l, settings: h }, function(k) {
          k.error ? w({ error: k.error, errorMsg: k.errorMsg }) : g({ session_id: k.session_id, remoteMediaPlayerState: { state: k.state, settings: k.settings } });
        });
      });
      return function(g, w) {
        return f.apply(this, arguments);
      };
    }());
  }), function(i) {
    return y.apply(this, arguments);
  }) }, { key: "startTranscription", value: function(i) {
    this.sendMessageToCallMachine(T({ action: "daily-method-start-transcription" }, i));
  } }, { key: "stopTranscription", value: function() {
    this.sendMessageToCallMachine({ action: "daily-method-stop-transcription" });
  } }, { key: "getNetworkStats", value: function() {
    var i = this;
    return this._callState !== W ? { stats: { latest: {} } } : new Promise(function(a) {
      i.sendMessageToCallMachine({ action: "get-calc-stats" }, function(l) {
        a(T({ stats: l.stats }, i._network));
      });
    });
  } }, { key: "testWebsocketConnectivity", value: (m = b(function* () {
    var i = this;
    if (this.needsLoad())
      try {
        yield this.load();
      } catch (a) {
        return Promise.reject(a);
      }
    return new Promise(function(a, l) {
      i.sendMessageToCallMachine({ action: "test-websocket-connectivity" }, function(h) {
        h.error ? l(h.error) : a(h.results);
      });
    });
  }), function() {
    return m.apply(this, arguments);
  }) }, { key: "abortTestWebsocketConnectivity", value: function() {
    this.sendMessageToCallMachine({ action: "abort-test-websocket-connectivity" });
  } }, { key: "_validateVideoTrackForNetworkTests", value: function(i) {
    return i ? i instanceof MediaStreamTrack ? !!Cd(i, { isLocalScreenVideo: !1 }) || (console.error("Video track is not playable. This test needs a live video track."), !1) : (console.error("Video track needs to be of type `MediaStreamTrack`."), !1) : (console.error("Missing video track. You must provide a video track in order to run this test."), !1);
  } }, { key: "testConnectionQuality", value: (p = b(function* (i) {
    var a = this;
    if (this.needsLoad())
      try {
        yield this.load();
      } catch (f) {
        return Promise.reject(f);
      }
    var l = i.videoTrack, h = i.duration;
    if (!this._validateVideoTrackForNetworkTests(l))
      throw new Error("Video track error");
    return this._preloadCache.videoTrackForConnectionQualityTest = l, new Promise(function(f, g) {
      a.sendMessageToCallMachine({ action: "test-connection-quality", duration: h }, function(w) {
        w.error ? g(w.error) : f(w.results);
      });
    });
  }), function(i) {
    return p.apply(this, arguments);
  }) }, { key: "stopTestConnectionQuality", value: function() {
    this.sendMessageToCallMachine({ action: "stop-test-connection-quality" });
  } }, { key: "testNetworkConnectivity", value: (d = b(function* (i) {
    var a = this;
    if (this.needsLoad())
      try {
        yield this.load();
      } catch (l) {
        return Promise.reject(l);
      }
    if (!this._validateVideoTrackForNetworkTests(i))
      throw new Error("Video track error");
    return this._preloadCache.videoTrackForNetworkConnectivityTest = i, new Promise(function(l, h) {
      a.sendMessageToCallMachine({ action: "test-network-connectivity" }, function(f) {
        f.error ? h(f.error) : l(f.results);
      });
    });
  }), function(i) {
    return d.apply(this, arguments);
  }) }, { key: "abortTestNetworkConnectivity", value: function() {
    this.sendMessageToCallMachine({ action: "abort-test-network-connectivity" });
  } }, { key: "getCpuLoadStats", value: function() {
    var i = this;
    return new Promise(function(a, l) {
      i._callState === W ? i.sendMessageToCallMachine({ action: "get-cpu-load-stats" }, function(h) {
        a(h.cpuStats);
      }) : a({ cpuLoadState: void 0, cpuLoadStateReason: void 0, stats: {} });
    });
  } }, { key: "_validateEncodingLayerHasValidProperties", value: function(i) {
    var a;
    if (!(((a = Object.keys(i)) === null || a === void 0 ? void 0 : a.length) > 0))
      throw new Error("Empty encoding is not allowed. At least one of these valid keys should be specified:" + Object.values(Vt));
  } }, { key: "_validateVideoSendSettings", value: function(i, a) {
    var l = i === "screenVideo" ? ["default-screen-video", "detail-optimized", "motion-optimized", "motion-and-detail-balanced"] : ["default-video", "bandwidth-optimized", "bandwidth-and-quality-balanced", "quality-optimized"], h = "Video send settings should be either an object or one of the supported presets: ".concat(l.join());
    if (typeof a == "string") {
      if (!l.includes(a))
        throw new Error(h);
    } else {
      if (I(a) !== "object")
        throw new Error(h);
      if (!a.maxQuality && !a.encodings)
        throw new Error("Video send settings must contain at least maxQuality or encodings attribute");
      if (a.maxQuality && ["low", "medium", "high"].indexOf(a.maxQuality) === -1)
        throw new Error("maxQuality must be either low, medium or high");
      if (a.encodings) {
        var f = !1;
        switch (Object.keys(a.encodings).length) {
          case 1:
            f = !a.encodings.low;
            break;
          case 2:
            f = !a.encodings.low || !a.encodings.medium;
            break;
          case 3:
            f = !a.encodings.low || !a.encodings.medium || !a.encodings.high;
            break;
          default:
            f = !0;
        }
        if (f)
          throw new Error("Encodings must be defined as: low, low and medium, or low, medium and high.");
        a.encodings.low && this._validateEncodingLayerHasValidProperties(a.encodings.low), a.encodings.medium && this._validateEncodingLayerHasValidProperties(a.encodings.medium), a.encodings.high && this._validateEncodingLayerHasValidProperties(a.encodings.high);
      }
    }
  } }, { key: "validateUpdateSendSettings", value: function(i) {
    var a = this;
    if (!i || Object.keys(i).length === 0)
      throw new Error("Send settings must contain at least information for one track!");
    Object.entries(i).forEach(function(l) {
      var h = ke(l, 2), f = h[0], g = h[1];
      a._validateVideoSendSettings(f, g);
    });
  } }, { key: "updateSendSettings", value: function(i) {
    var a = this;
    return this.validateUpdateSendSettings(i), this.needsLoad() ? (this._preloadCache.sendSettings = i, { sendSettings: this._preloadCache.sendSettings }) : new Promise(function(l, h) {
      a.sendMessageToCallMachine({ action: "update-send-settings", sendSettings: i }, function(f) {
        f.error ? h(f.error) : l(f.sendSettings);
      });
    });
  } }, { key: "getSendSettings", value: function() {
    return this._sendSettings || this._preloadCache.sendSettings;
  } }, { key: "getLocalAudioLevel", value: function() {
    return this._localAudioLevel;
  } }, { key: "getRemoteParticipantsAudioLevel", value: function() {
    return this._remoteParticipantsAudioLevel;
  } }, { key: "getActiveSpeaker", value: function() {
    return C(), this._activeSpeaker;
  } }, { key: "setActiveSpeakerMode", value: function(i) {
    return C(), this.sendMessageToCallMachine({ action: "set-active-speaker-mode", enabled: i }), this;
  } }, { key: "activeSpeakerMode", value: function() {
    return C(), this._activeSpeakerMode;
  } }, { key: "subscribeToTracksAutomatically", value: function() {
    return this._preloadCache.subscribeToTracksAutomatically;
  } }, { key: "setSubscribeToTracksAutomatically", value: function(i) {
    return $(this._callState, "setSubscribeToTracksAutomatically()", "Use the subscribeToTracksAutomatically configuration property."), this._preloadCache.subscribeToTracksAutomatically = i, this.sendMessageToCallMachine({ action: "daily-method-subscribe-to-tracks-automatically", enabled: i }), this;
  } }, { key: "enumerateDevices", value: (u = b(function* () {
    var i = this;
    return this._callObjectMode ? { devices: (yield navigator.mediaDevices.enumerateDevices()).map(function(a) {
      return JSON.parse(JSON.stringify(a));
    }) } : new Promise(function(a) {
      i.sendMessageToCallMachine({ action: "enumerate-devices" }, function(l) {
        a({ devices: l.devices });
      });
    });
  }), function() {
    return u.apply(this, arguments);
  }) }, { key: "sendAppMessage", value: function(i) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "*";
    if (JSON.stringify(i).length > 4096)
      throw new Error("Message data too large. Max size is 4096");
    return this.sendMessageToCallMachine({ action: "app-msg", data: i, to: a }), this;
  } }, { key: "addFakeParticipant", value: function(i) {
    return C(), this.sendMessageToCallMachine(T({ action: "add-fake-participant" }, i)), this;
  } }, { key: "setShowNamesMode", value: function(i) {
    return z(this._callObjectMode, "setShowNamesMode()"), C(), i && i !== "always" && i !== "never" ? (console.error('setShowNamesMode argument should be "always", "never", or false'), this) : (this.sendMessageToCallMachine({ action: "set-show-names", mode: i }), this);
  } }, { key: "setShowLocalVideo", value: function() {
    var i = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
    return z(this._callObjectMode, "setShowLocalVideo()"), C(), $(this._callState, "setShowLocalVideo()"), typeof i != "boolean" ? (console.error("setShowLocalVideo only accepts a boolean value"), this) : (this.sendMessageToCallMachine({ action: "set-show-local-video", show: i }), this._showLocalVideo = i, this);
  } }, { key: "showLocalVideo", value: function() {
    return z(this._callObjectMode, "showLocalVideo()"), C(), this._showLocalVideo;
  } }, { key: "setShowParticipantsBar", value: function() {
    var i = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
    return z(this._callObjectMode, "setShowParticipantsBar()"), C(), $(this._callState, "setShowParticipantsBar()"), typeof i != "boolean" ? (console.error("setShowParticipantsBar only accepts a boolean value"), this) : (this.sendMessageToCallMachine({ action: "set-show-participants-bar", show: i }), this._showParticipantsBar = i, this);
  } }, { key: "showParticipantsBar", value: function() {
    return z(this._callObjectMode, "showParticipantsBar()"), C(), this._showParticipantsBar;
  } }, { key: "customIntegrations", value: function() {
    return C(), z(this._callObjectMode, "customIntegrations()"), this._customIntegrations;
  } }, { key: "setCustomIntegrations", value: function(i) {
    return C(), z(this._callObjectMode, "setCustomIntegrations()"), $(this._callState, "setCustomIntegrations()"), za(i) ? (this.sendMessageToCallMachine({ action: "set-custom-integrations", integrations: i }), this._customIntegrations = i, this) : this;
  } }, { key: "startCustomIntegrations", value: function(i) {
    var a = this;
    if (C(), z(this._callObjectMode, "startCustomIntegrations()"), $(this._callState, "startCustomIntegrations()"), Array.isArray(i) && i.some(function(f) {
      return typeof f != "string";
    }) || !Array.isArray(i) && typeof i != "string")
      return console.error("startCustomIntegrations() only accepts string | string[]"), this;
    var l = typeof i == "string" ? [i] : i, h = l.filter(function(f) {
      return !(f in a._customIntegrations);
    });
    return h.length ? (console.error(`Can't find custom integration(s): "`.concat(h.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "start-custom-integrations", ids: l }), this);
  } }, { key: "stopCustomIntegrations", value: function(i) {
    var a = this;
    if (C(), z(this._callObjectMode, "stopCustomIntegrations()"), $(this._callState, "stopCustomIntegrations()"), Array.isArray(i) && i.some(function(f) {
      return typeof f != "string";
    }) || !Array.isArray(i) && typeof i != "string")
      return console.error("stopCustomIntegrations() only accepts string | string[]"), this;
    var l = typeof i == "string" ? [i] : i, h = l.filter(function(f) {
      return !(f in a._customIntegrations);
    });
    return h.length ? (console.error(`Can't find custom integration(s): "`.concat(h.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "stop-custom-integrations", ids: l }), this);
  } }, { key: "customTrayButtons", value: function() {
    return z(this._callObjectMode, "customTrayButtons()"), C(), this._customTrayButtons;
  } }, { key: "updateCustomTrayButtons", value: function(i) {
    return z(this._callObjectMode, "updateCustomTrayButtons()"), C(), $(this._callState, "updateCustomTrayButtons()"), Ja(i) ? (this.sendMessageToCallMachine({ action: "update-custom-tray-buttons", btns: i }), this._customTrayButtons = i, this) : (console.error("updateCustomTrayButtons only accepts a dictionary of the type ".concat(JSON.stringify(gt))), this);
  } }, { key: "theme", value: function() {
    return z(this._callObjectMode, "theme()"), this.properties.theme;
  } }, { key: "setTheme", value: function(i) {
    var a = this;
    return z(this._callObjectMode, "setTheme()"), new Promise(function(l, h) {
      try {
        a.validateProperties({ theme: i }), a.properties.theme = T({}, i), a.sendMessageToCallMachine({ action: "set-theme", theme: a.properties.theme });
        try {
          a.emit(Jt, { action: Jt, theme: a.properties.theme });
        } catch (f) {
          console.log("could not emit 'theme-updated'", f);
        }
        l(a.properties.theme);
      } catch (f) {
        h(f);
      }
    });
  } }, { key: "detectAllFaces", value: function() {
    var i = this;
    return C(), new Promise(function(a) {
      i.sendMessageToCallMachine({ action: "detect-all-faces" }, function(l) {
        delete l.action, delete l.callbackStamp, a(l);
      });
    });
  } }, { key: "requestFullscreen", value: (c = b(function* () {
    if (C(), this._iframe && !document.fullscreenElement && cn())
      try {
        (yield this._iframe.requestFullscreen) ? this._iframe.requestFullscreen() : this._iframe.webkitRequestFullscreen();
      } catch (i) {
        console.log("could not make video call fullscreen", i);
      }
  }), function() {
    return c.apply(this, arguments);
  }) }, { key: "exitFullscreen", value: function() {
    C(), document.fullscreenElement ? document.exitFullscreen() : document.webkitFullscreenElement && document.webkitExitFullscreen();
  } }, { key: "getSidebarView", value: (s = b(function* () {
    var i = this;
    return this._callObjectMode ? (console.error("getSidebarView is not available in callObject mode"), Promise.resolve(null)) : new Promise(function(a) {
      i.sendMessageToCallMachine({ action: "get-sidebar-view" }, function(l) {
        a(l.view);
      });
    });
  }), function() {
    return s.apply(this, arguments);
  }) }, { key: "setSidebarView", value: function(i) {
    return this._callObjectMode ? (console.error("setSidebarView is not available in callObject mode"), this) : (this.sendMessageToCallMachine({ action: "set-sidebar-view", view: i }), this);
  } }, { key: "room", value: (o = b(function* () {
    var i = this, a = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).includeRoomConfigDefaults, l = a === void 0 || a;
    return this._accessState.access === ot || this.needsLoad() ? this.properties.url ? { roomUrlPendingJoin: this.properties.url } : null : new Promise(function(h) {
      i.sendMessageToCallMachine({ action: "lib-room-info", includeRoomConfigDefaults: l }, function(f) {
        delete f.action, delete f.callbackStamp, h(f);
      });
    });
  }), function() {
    return o.apply(this, arguments);
  }) }, { key: "geo", value: (n = b(function* () {
    return new Promise(function() {
      var i = b(function* (a) {
        try {
          var l = yield fetch("https://gs.daily.co/_ks_/x-swsl/:");
          a({ current: (yield l.json()).geo });
        } catch (h) {
          console.error("geo lookup failed", h), a({ current: "" });
        }
      });
      return function(a) {
        return i.apply(this, arguments);
      };
    }());
  }), function() {
    return n.apply(this, arguments);
  }) }, { key: "setNetworkTopology", value: (r = b(function* (i) {
    var a = this;
    return C(), new Promise(function() {
      var l = b(function* (h, f) {
        a.sendMessageToCallMachine({ action: "set-network-topology", opts: i }, function(g) {
          g.error ? f({ error: g.error }) : h({ workerId: g.workerId });
        });
      });
      return function(h, f) {
        return l.apply(this, arguments);
      };
    }());
  }), function(i) {
    return r.apply(this, arguments);
  }) }, { key: "getNetworkTopology", value: (t = b(function* () {
    var i = this;
    return new Promise(function() {
      var a = b(function* (l, h) {
        i.sendMessageToCallMachine({ action: "get-network-topology" }, function(f) {
          f.error ? h({ error: f.error }) : l({ topology: f.topology });
        });
      });
      return function(l, h) {
        return a.apply(this, arguments);
      };
    }());
  }), function() {
    return t.apply(this, arguments);
  }) }, { key: "setPlayNewParticipantSound", value: function(i) {
    if (C(), typeof i != "number" && i !== !0 && i !== !1)
      throw new Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(i));
    this.sendMessageToCallMachine({ action: "daily-method-set-play-ding", arg: i });
  } }, { key: "on", value: function(i, a) {
    return this._inputEventsOn[i] = {}, this.sendMessageToCallMachine({ action: tt, on: i }), le.prototype.on.call(this, i, a);
  } }, { key: "once", value: function(i, a) {
    return this._inputEventsOn[i] = {}, this.sendMessageToCallMachine({ action: tt, on: i }), le.prototype.once.call(this, i, a);
  } }, { key: "off", value: function(i, a) {
    return delete this._inputEventsOn[i], this.isDestroyed() || this.sendMessageToCallMachine({ action: tt, off: i }), le.prototype.off.call(this, i, a);
  } }, { key: "validateProperties", value: function(i) {
    for (var a in i) {
      if (!be[a])
        throw new Error("unrecognized property '".concat(a, "'"));
      if (be[a].validate && !be[a].validate(i[a], this))
        throw new Error("property '".concat(a, "': ").concat(be[a].help));
    }
  } }, { key: "assembleMeetingUrl", value: function() {
    var i, a, l = T(T({}, this.properties), {}, { emb: this._callFrameId, embHref: encodeURIComponent(window.location.href), proxy: (i = window._dailyConfig) !== null && i !== void 0 && i.proxyUrl ? encodeURIComponent((a = window._dailyConfig) === null || a === void 0 ? void 0 : a.proxyUrl) : void 0 }), h = l.url.match(/\?/) ? "&" : "?";
    return l.url + h + Object.keys(be).filter(function(f) {
      return be[f].queryString && l[f] !== void 0;
    }).map(function(f) {
      return "".concat(be[f].queryString, "=").concat(l[f]);
    }).join("&");
  } }, { key: "needsLoad", value: function() {
    return [qt, en, ve, me].includes(this._callState);
  } }, { key: "sendMessageToCallMachine", value: function(i, a) {
    if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode))
      throw new Error("Use after destroy");
    this._messageChannel.sendMessageToCallMachine(i, a, this._iframe, this._callFrameId);
  } }, { key: "forwardPackagedMessageToCallMachine", value: function(i) {
    this._messageChannel.forwardPackagedMessageToCallMachine(i, this._iframe, this._callFrameId);
  } }, { key: "addListenerForPackagedMessagesFromCallMachine", value: function(i) {
    return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(i, this._callFrameId);
  } }, { key: "removeListenerForPackagedMessagesFromCallMachine", value: function(i) {
    this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(i);
  } }, { key: "handleMessageFromCallMachine", value: function(i) {
    switch (i.action) {
      case gi:
        this.sendMessageToCallMachine(T({ action: yi }, this.properties));
        break;
      case "daily-main-executed":
        this._dailyMainExecuted = !0;
      case st:
        this._loadedCallback && (this._loadedCallback(), this._loadedCallback = null);
        try {
          this.emit(i.action, i);
        } catch (S) {
          console.log("could not emit", i, S);
        }
        break;
      case wi:
        this._joinedCallback && (this._joinedCallback(i.participants), this._joinedCallback = null);
        try {
          this.emit(i.action, i);
        } catch (S) {
          console.log("could not emit", i, S);
        }
        break;
      case ki:
      case Ci:
        if (this._callState === ve)
          return;
        if (i.participant && i.participant.session_id) {
          var a = i.participant.local ? "local" : i.participant.session_id;
          this._callObjectMode && (qn(i.participant), Jn(i.participant), zn(i.participant, this._participants[a]));
          try {
            this.maybeParticipantTracksStopped(this._participants[a], i.participant), this.maybeParticipantTracksStarted(this._participants[a], i.participant), this.maybeEventRecordingStopped(this._participants[a], i.participant), this.maybeEventRecordingStarted(this._participants[a], i.participant);
          } catch (S) {
            console.error("track events error", S);
          }
          if (!this.compareEqualForParticipantUpdateEvent(i.participant, this._participants[a])) {
            this._participants[a] = T({}, i.participant), this.toggleParticipantAudioBasedOnNativeAudioFocus();
            try {
              this.emit(i.action, i);
            } catch (S) {
              console.log("could not emit", i, S);
            }
          }
        }
        break;
      case Mi:
        if (i.participant && i.participant.session_id) {
          var l = this._participants[i.participant.session_id];
          l && this.maybeParticipantTracksStopped(l, null), delete this._participants[i.participant.session_id];
          try {
            this.emit(i.action, i);
          } catch (S) {
            console.log("could not emit", i, S);
          }
        }
        break;
      case Ti:
        if (!fe(this._participantCounts, i.participantCounts)) {
          this._participantCounts = i.participantCounts;
          try {
            this.emit(i.action, i);
          } catch (S) {
            console.log("could not emit", i, S);
          }
        }
        break;
      case Ai:
        var h = { access: i.access };
        if (i.awaitingAccess && (h.awaitingAccess = i.awaitingAccess), !fe(this._accessState, h)) {
          this._accessState = h;
          try {
            this.emit(i.action, i);
          } catch (S) {
            console.log("could not emit", i, S);
          }
        }
        break;
      case Ei:
        if (i.meetingSession)
          try {
            delete i.callFrameId, this.emit(i.action, i);
          } catch (S) {
            console.log("could not emit", i, S);
          }
        break;
      case dt:
        var f, g;
        this._iframe && !i.preserveIframe && (this._iframe.src = ""), this._updateCallState(me), this.resetMeetingDependentVars(), this._loadedCallback && (this._loadedCallback(i.errorMsg), this._loadedCallback = null), i.preserveIframe;
        var w = co(i, Md);
        w != null && (f = w.error) !== null && f !== void 0 && (g = f.details) !== null && g !== void 0 && g.sourceError && (w.error.details.sourceError = JSON.parse(w.error.details.sourceError)), this._joinedCallback && (this._joinedCallback(null, w), this._joinedCallback = null);
        try {
          this.emit(i.action, w);
        } catch (S) {
          console.log("could not emit", i, S);
        }
        break;
      case Si:
        this._callState !== me && this._updateCallState(ve), this.resetMeetingDependentVars(), this._resolveLeave && (this._resolveLeave(), this._resolveLeave = null);
        try {
          this.emit(i.action, i);
        } catch (S) {
          console.log("could not emit", i, S);
        }
        break;
      case "selected-devices-updated":
        if (i.devices)
          try {
            this.emit(i.action, i);
          } catch (S) {
            console.log("could not emit", i, S);
          }
        break;
      case $i:
        var k = i.threshold, L = i.quality;
        if (k !== this._network.threshold || L !== this._network.quality) {
          this._network.quality = L, this._network.threshold = k;
          try {
            this.emit(i.action, i);
          } catch (S) {
            console.log("could not emit", i, S);
          }
        }
        break;
      case Hi:
        if (i && i.cpuLoadState)
          try {
            this.emit(i.action, i);
          } catch (S) {
            console.log("could not emit", i, S);
          }
        break;
      case Wi:
        var he = i.activeSpeaker;
        if (this._activeSpeaker.peerId !== he.peerId) {
          this._activeSpeaker.peerId = he.peerId;
          try {
            this.emit(i.action, { action: i.action, activeSpeaker: this._activeSpeaker });
          } catch (S) {
            console.log("could not emit", i, S);
          }
        }
        break;
      case "show-local-video-changed":
        if (this._callObjectMode)
          return;
        var Ze = i.show;
        this._showLocalVideo = Ze;
        try {
          this.emit(i.action, { action: i.action, show: Ze });
        } catch (S) {
          console.log("could not emit", i, S);
        }
        break;
      case Gi:
        var Ve = i.enabled;
        if (this._activeSpeakerMode !== Ve) {
          this._activeSpeakerMode = Ve;
          try {
            this.emit(i.action, { action: i.action, enabled: this._activeSpeakerMode });
          } catch (S) {
            console.log("could not emit", i, S);
          }
        }
        break;
      case Li:
      case Pi:
      case ji:
        this._waitingParticipants = i.allWaitingParticipants;
        try {
          this.emit(i.action, { action: i.action, participant: i.participant });
        } catch (S) {
          console.log("could not emit", i, S);
        }
        break;
      case ra:
        if (!fe(this._receiveSettings, i.receiveSettings)) {
          this._receiveSettings = i.receiveSettings;
          try {
            this.emit(i.action, { action: i.action, receiveSettings: i.receiveSettings });
          } catch (S) {
            console.log("could not emit", i, S);
          }
        }
        break;
      case na:
        if (!fe(this._inputSettings, i.inputSettings)) {
          var Ot = this._getInputSettings();
          if (this._inputSettings = i.inputSettings, this._preloadCache.inputSettings = {}, !fe(Ot, this._getInputSettings()))
            try {
              this.emit(i.action, { action: i.action, inputSettings: this._getInputSettings() });
            } catch (S) {
              console.log("could not emit", i, S);
            }
        }
        break;
      case "send-settings-updated":
        if (!fe(this._sendSettings, i.sendSettings)) {
          this._sendSettings = i.sendSettings, this._preloadCache.sendSettings = null;
          try {
            this.emit(i.action, { action: i.action, sendSettings: i.sendSettings });
          } catch (S) {
            console.log("could not emit", i, S);
          }
        }
        break;
      case "local-audio-level":
        this._localAudioLevel = i.audioLevel, this.emitDailyJSEvent(i);
        break;
      case "remote-participants-audio-level":
        this._remoteParticipantsAudioLevel = i.participantsAudioLevel, this.emitDailyJSEvent(i);
        break;
      case Ui:
        var Xe = i.session_id;
        this._rmpPlayerState[Xe] = i.playerState, this.emitDailyJSEvent(i);
        break;
      case qi:
        delete this._rmpPlayerState[i.session_id], this.emitDailyJSEvent(i);
        break;
      case Yi:
        var Er = i.session_id, Or = this._rmpPlayerState[Er];
        Or && this.compareEqualForRMPUpdateEvent(Or, i.remoteMediaPlayerState) || (this._rmpPlayerState[Er] = i.remoteMediaPlayerState, this.emitDailyJSEvent(i));
        break;
      case "custom-button-click":
      case "sidebar-view-changed":
        this.emitDailyJSEvent(i);
        break;
      case Oi:
        var io = this._meetingSessionState.topology !== (i.meetingSessionState && i.meetingSessionState.topology);
        this._meetingSessionState = Bt(i.meetingSessionState, this._callObjectMode), (this._callObjectMode || io) && this.emitDailyJSEvent(i);
        break;
      case ct:
      case lt:
      case Ri:
      case Fi:
      case xi:
      case Ii:
      case Di:
      case Ni:
      case bi:
      case _i:
      case Bi:
      case Ji:
      case zi:
      case Ki:
      case Vi:
      case Qi:
      case Zi:
      case Xi:
      case ea:
      case ut:
      case ta:
        try {
          this.emit(i.action, i);
        } catch (S) {
          console.log("could not emit", i, S);
        }
        break;
      case "request-fullscreen":
        this.requestFullscreen();
        break;
      case "request-exit-fullscreen":
        this.exitFullscreen();
    }
  } }, { key: "maybeEventRecordingStopped", value: function(i, a) {
    var l = "record";
    if (i && !a.local && a[l] === !1 && i[l] !== a[l])
      try {
        this.emit(lt, { action: lt });
      } catch (h) {
        console.log("could not emit", h);
      }
  } }, { key: "maybeEventRecordingStarted", value: function(i, a) {
    var l = "record";
    if (i && !a.local && a[l] === !0 && i[l] !== a[l])
      try {
        this.emit(ct, { action: ct });
      } catch (h) {
        console.log("could not emit", h);
      }
  } }, { key: "maybeEventTrackStopped", value: function(i, a, l, h) {
    if (i && (i.readyState === "ended" || !a || i.id !== a.id))
      try {
        this.emit(Kt, { action: Kt, track: i, participant: l, type: h });
      } catch (f) {
        console.log("maybeEventTrackStopped: could not emit", f);
      }
  } }, { key: "maybeEventTrackStarted", value: function(i, a, l, h) {
    if (a && (!i || i.readyState === "ended" || a.id !== i.id))
      try {
        this.emit($t, { action: $t, track: a, participant: l, type: h });
      } catch (f) {
        console.log("maybeEventTrackStarted: could not emit", f);
      }
  } }, { key: "maybeParticipantTracksStopped", value: function(i, a) {
    if (i)
      for (var l in i.tracks)
        this.maybeEventTrackStopped(i.tracks[l].track, a && a.tracks[l] ? a.tracks[l].track : null, a, l);
  } }, { key: "maybeParticipantTracksStarted", value: function(i, a) {
    if (a)
      for (var l in a.tracks)
        this.maybeEventTrackStarted(i && i.tracks[l] ? i.tracks[l].track : null, a.tracks[l].track, a, l);
  } }, { key: "compareEqualForRMPUpdateEvent", value: function(i, a) {
    var l, h;
    return i.state === a.state && ((l = i.settings) === null || l === void 0 ? void 0 : l.volume) === ((h = a.settings) === null || h === void 0 ? void 0 : h.volume);
  } }, { key: "emitDailyJSEvent", value: function(i) {
    try {
      this.emit(i.action, i);
    } catch (a) {
      console.log("could not emit", i, a);
    }
  } }, { key: "compareEqualForParticipantUpdateEvent", value: function(i, a) {
    return !!fe(i, a) && (!i.videoTrack || !a.videoTrack || i.videoTrack.id === a.videoTrack.id && i.videoTrack.muted === a.videoTrack.muted && i.videoTrack.enabled === a.videoTrack.enabled) && (!i.audioTrack || !a.audioTrack || i.audioTrack.id === a.audioTrack.id && i.audioTrack.muted === a.audioTrack.muted && i.audioTrack.enabled === a.audioTrack.enabled);
  } }, { key: "nativeUtils", value: function() {
    return N() ? typeof DailyNativeUtils > "u" ? (console.warn("in React Native, DailyNativeUtils is expected to be available"), null) : DailyNativeUtils : null;
  } }, { key: "updateIsPreparingToJoin", value: function(i) {
    this._updateCallState(this._callState, i);
  } }, { key: "_updateCallState", value: function(i) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._isPreparingToJoin;
    if (i !== this._callState || a !== this._isPreparingToJoin) {
      var l = this._callState, h = this._isPreparingToJoin;
      this._callState = i, this._isPreparingToJoin = a;
      var f = this._isCallPendingOrOngoing(l, h), g = this._isCallPendingOrOngoing(this._callState, this._isPreparingToJoin);
      f !== g && (this.updateKeepDeviceAwake(g), this.updateDeviceAudioMode(g), this.updateShowAndroidOngoingMeetingNotification(g), this.updateNoOpRecordingEnsuringBackgroundContinuity(g));
    }
  } }, { key: "resetMeetingDependentVars", value: function() {
    this._participants = {}, this._participantCounts = Xn, this._waitingParticipants = {}, this._activeSpeaker = {}, this._activeSpeakerMode = !1, this._didPreAuth = !1, this._accessState = { access: ot }, this._meetingSessionState = Bt(Zn, this._callObjectMode), this._receiveSettings = {}, this._inputSettings = void 0, this._sendSettings = {}, this._localAudioLevel = 0, this._remoteParticipantsAudioLevel = {}, this._dailyMainExecuted = !1, this._preloadCache;
  } }, { key: "updateKeepDeviceAwake", value: function(i) {
    N() && this.nativeUtils().setKeepDeviceAwake(i, this._callFrameId);
  } }, { key: "updateDeviceAudioMode", value: function(i) {
    if (N() && !this.disableReactNativeAutoDeviceManagement("audio")) {
      var a = i ? this._nativeInCallAudioMode : "idle";
      this.nativeUtils().setAudioMode(a);
    }
  } }, { key: "updateShowAndroidOngoingMeetingNotification", value: function(i) {
    if (N() && this.nativeUtils().setShowOngoingMeetingNotification) {
      var a, l, h, f;
      if (this.properties.reactNativeConfig && this.properties.reactNativeConfig.androidInCallNotification) {
        var g = this.properties.reactNativeConfig.androidInCallNotification;
        a = g.title, l = g.subtitle, h = g.iconName, f = g.disableForCustomOverride;
      }
      f && (i = !1), this.nativeUtils().setShowOngoingMeetingNotification(i, a, l, h, this._callFrameId);
    }
  } }, { key: "updateNoOpRecordingEnsuringBackgroundContinuity", value: function(i) {
    N() && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(i);
  } }, { key: "_isCallPendingOrOngoing", value: function(i, a) {
    return [Te, W].includes(i) || a;
  } }, { key: "toggleParticipantAudioBasedOnNativeAudioFocus", value: function() {
    if (N()) {
      var i = store.getState();
      for (var a in i.streams) {
        var l = i.streams[a];
        l && l.pendingTrack && l.pendingTrack.kind === "audio" && (l.pendingTrack.enabled = this._hasNativeAudioFocus);
      }
    }
  } }, { key: "disableReactNativeAutoDeviceManagement", value: function(i) {
    return this.properties.reactNativeConfig && this.properties.reactNativeConfig.disableAutoDeviceManagement && this.properties.reactNativeConfig.disableAutoDeviceManagement[i];
  } }, { key: "absoluteUrl", value: function(i) {
    if (i !== void 0) {
      var a = document.createElement("a");
      return a.href = i, a.href;
    }
  } }, { key: "sayHello", value: function() {
    var i = "hello, world.";
    return console.log(i), i;
  } }, { key: "_logUseAfterDestroy", value: function() {
    if (this.needsLoad())
      if (se && !se.needsLoad()) {
        var i = { action: Pt, level: "error", code: this.strictMode ? 9995 : 9997 };
        se.sendMessageToCallMachine(i);
      } else
        this.strictMode || console.error("You are are attempting to use a call instance that was previously destroyed, which is unsupported. Please remove `strictMode: false` from your constructor properties to enable strict mode to track down and fix this unsupported usage.");
    else {
      var a = { action: Pt, level: "error", code: this.strictMode ? 9995 : 9997 };
      this._messageChannel.sendMessageToCallMachine(a, null, this._iframe, this._callFrameId);
    }
  } }, { key: "_logDuplicateInstanceAttempt", value: function() {
    se.needsLoad() ? this.strictMode || console.error("You are attempting to use multiple call instances simultaneously. This is unsupported and will result in unknown errors. Previous instances should be destroyed before creating new ones. Please remove `strictMode: false` from your constructor properties to enable strict mode to track down and fix these attempts.") : se.sendMessageToCallMachine({ action: Pt, level: "error", code: this.strictMode ? 9990 : 9992 });
  } }], [{ key: "supportedBrowser", value: function() {
    if (N())
      return { supported: !0, mobile: !0, name: "React Native", version: null, supportsScreenShare: !1, supportsSfu: !0, supportsVideoProcessing: !1, supportsAudioProcessing: !1 };
    var i = _o.getParser(oe());
    return { supported: !!ln(), mobile: i.getPlatformType() === "mobile", name: i.getBrowserName(), version: i.getBrowserVersion(), supportsFullscreen: !!cn(), supportsScreenShare: !!Ko(), supportsSfu: !!ln(), supportsVideoProcessing: oa(), supportsAudioProcessing: sa() };
  } }, { key: "version", value: function() {
    return "0.53.0";
  } }, { key: "createCallObject", value: function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return i.layout = "none", new re(null, i);
  } }, { key: "wrap", value: function(i) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (C(), !i || !i.contentWindow || typeof i.src != "string")
      throw new Error("DailyIframe::Wrap needs an iframe-like first argument");
    return a.layout || (a.customLayout ? a.layout = "custom-v1" : a.layout = "browser"), new re(i, a);
  } }, { key: "createFrame", value: function(i, a) {
    var l, h;
    C(), i && a ? (l = i, h = a) : i && i.append ? (l = i, h = {}) : (l = document.body, h = i || {});
    var f = h.iframeStyle;
    f || (f = l === document.body ? { position: "fixed", border: "1px solid black", backgroundColor: "white", width: "375px", height: "450px", right: "1em", bottom: "1em" } : { border: 0, width: "100%", height: "100%" });
    var g = document.createElement("iframe");
    window.navigator && window.navigator.userAgent.match(/Chrome\/61\./) ? g.allow = "microphone, camera" : g.allow = "microphone; camera; autoplay; display-capture; screen-wake-lock", g.style.visibility = "hidden", l.appendChild(g), g.style.visibility = null, Object.keys(f).forEach(function(w) {
      return g.style[w] = f[w];
    }), h.layout || (h.customLayout ? h.layout = "custom-v1" : h.layout = "browser");
    try {
      return new re(g, h);
    } catch (w) {
      throw l.removeChild(g), w;
    }
  } }, { key: "createTransparentFrame", value: function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    C();
    var a = document.createElement("iframe");
    return a.allow = "microphone; camera; autoplay", a.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      pointer-events: none;
    `, document.body.appendChild(a), i.layout || (i.layout = "custom-v1"), re.wrap(a, i);
  } }, { key: "getCallInstance", value: function() {
    return se;
  } }]), re;
}();
function Me(e) {
  var t = {};
  for (var r in e)
    e[r] instanceof MediaStreamTrack ? t[r] = qe : (r === "dailyConfig" && (e[r].modifyLocalSdpHook && (window._dailyConfig && (window._dailyConfig.modifyLocalSdpHook = e[r].modifyLocalSdpHook), delete e[r].modifyLocalSdpHook), e[r].modifyRemoteSdpHook && (window._dailyConfig && (window._dailyConfig.modifyRemoteSdpHook = e[r].modifyRemoteSdpHook), delete e[r].modifyRemoteSdpHook)), t[r] = e[r]);
  return t;
}
function $(e) {
  var t = arguments.length > 2 ? arguments[2] : void 0;
  if (e !== W) {
    var r = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " only supported after join.");
    throw t && (r += " ".concat(t)), console.error(r), new Error(r);
  }
}
function ne(e) {
  if (!e) {
    var t = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " is only supported on custom callObject instances");
    throw console.error(t), new Error(t);
  }
}
function z(e) {
  if (e) {
    var t = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " is only supported as part of Daily's Prebuilt");
    throw console.error(t), new Error(t);
  }
}
function C() {
  if (N())
    throw new Error("This daily-js method is not currently supported in React Native");
}
function Ye() {
  if (!N())
    throw new Error("This daily-js method is only supported in React Native");
}
function Va(e) {
  if (e === void 0)
    return !0;
  var t;
  if (typeof e == "string")
    t = e;
  else
    try {
      t = JSON.stringify(e), fe(JSON.parse(t), e) || console.warn("The userData provided will be modified when serialized.");
    } catch (r) {
      throw Error("userData must be serializable to JSON: ".concat(r));
    }
  if (t.length > 4096)
    throw Error("userData is too large (".concat(t.length, " characters). Maximum size suppported is ").concat(4096, "."));
  return !0;
}
function Ba(e, t) {
  for (var r = t.allowAllParticipantsKey, n = function(y) {
    var _ = ["local"];
    return r || _.push("*"), y && !_.includes(y);
  }, o = function(y) {
    return !!(y.layer === void 0 || Number.isInteger(y.layer) && y.layer >= 0 || y.layer === "inherit");
  }, s = function(y) {
    return !!y && !(y.video && !o(y.video)) && !(y.screenVideo && !o(y.screenVideo));
  }, c = 0, u = Object.entries(e); c < u.length; c++) {
    var d = ke(u[c], 2), p = d[0], m = d[1];
    if (!n(p) || !s(m))
      return !1;
  }
  return !0;
}
function sr(e) {
  return I(e) === "object" && !!(e.video && I(e.video) === "object" || e.audio && I(e.audio) === "object") && !(e.video && !function(o) {
    var s = ["type", "config", "publish"];
    return !o || I(o) !== "object" || !function(c) {
      return typeof c != "string" ? !1 : Object.values(ht).includes(c) ? !0 : (console.error("inputSettings video processor type invalid"), !1);
    }(o.type) || o.publish !== void 0 && typeof o.publish != "boolean" || (typeof o.publish == "boolean" && console.warn("inputSettings.video.processor: publish key has been deprecated; it will be ignored"), o.config && (I(o.config) !== "object" || !function(c, u) {
      var d = Object.keys(u);
      if (d.length === 0)
        return !0;
      var p = "invalid object in inputSettings -> video -> processor -> config";
      switch (c) {
        case ht.BGBLUR:
          return d.length > 1 || d[0] !== "strength" ? (console.error(p), !1) : !(typeof u.strength != "number" || u.strength <= 0 || u.strength > 1 || isNaN(u.strength)) || (console.error("".concat(p, "; expected: {0 < strength <= 1}, got: ").concat(u.strength)), !1);
        case ht.BGIMAGE:
          return !(u.source !== void 0 && !function(m) {
            if (m.source === "default")
              return m.type = "default", !0;
            if (Ke(m.source))
              return m.type = "url", !!function(R) {
                var M = new URL(R), j = M.pathname;
                if (M.protocol === "data:")
                  try {
                    var O = j.substring(j.indexOf(":") + 1, j.indexOf(";")).split("/")[1];
                    return jt.includes(O);
                  } catch (x) {
                    return console.error("failed to deduce blob content type", x), !1;
                  }
                var Y = j.split(".").at(-1).toLowerCase().trim();
                return jt.includes(Y);
              }(m.source) || (console.error("invalid image type; supported types: [".concat(jt.join(", "), "]")), !1);
            return y = m.source, _ = Number(y), isNaN(_) || !Number.isInteger(_) || _ <= 0 || _ > sn ? (console.error("invalid image selection; must be an int, > 0, <= ".concat(sn)), !1) : (m.type = "daily-preselect", !0);
            var y, _;
          }(u));
        default:
          return !0;
      }
    }(o.type, o.config))) ? !1 : (Object.keys(o).filter(function(c) {
      return !s.includes(c);
    }).forEach(function(c) {
      console.warn("invalid key inputSettings -> video -> processor : ".concat(c)), delete o[c];
    }), !0);
  }(e.video.processor)) && !(e.audio && (r = e.audio.processor, n = ["type"], !r || I(r) !== "object" || (Object.keys(r).filter(function(o) {
    return !n.includes(o);
  }).forEach(function(o) {
    console.warn("invalid key inputSettings -> audio -> processor : ".concat(o)), delete r[o];
  }), t = r.type, typeof t != "string" || !Object.values(ia).includes(t) && (console.error("inputSettings audio processor type invalid"), 1))));
  var t, r, n;
}
function Ua(e) {
  var t = [];
  e.video && !oa() && (delete e.video, t.push("video")), e.audio && !sa() && (delete e.audio, t.push("audio")), t.length > 0 && console.error("Ignoring settings for browser- or platform-unsupported input processor(s): ".concat(t.join(", ")));
}
function cr() {
  var e = Object.values(ht).join(" | "), t = Object.values(ia).join(" | ");
  return "inputSettings must be of the form: { video?: { processor: { type: [ ".concat(e, " ], config?: {} } }, audio?: { processor: {type: [ ").concat(t, " ] } } }");
}
function Ya(e) {
  var t = e.allowAllParticipantsKey;
  return "receiveSettings must be of the form { [<remote participant id> | ".concat(vi).concat(t ? ' | "'.concat(mi, '"') : "", "]: ") + '{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}';
}
function qa() {
  return "customIntegrations should be an object of type ".concat(JSON.stringify(or), ".");
}
function Ja(e) {
  if (e && I(e) !== "object" || Array.isArray(e))
    return console.error("customTrayButtons should be an Object of the type ".concat(JSON.stringify(gt), ".")), !1;
  if (e)
    for (var t = 0, r = Object.entries(e); t < r.length; t++)
      for (var n = ke(r[t], 1)[0], o = 0, s = Object.entries(e[n]); o < s.length; o++) {
        var c = ke(s[o], 2), u = c[0], d = c[1];
        if (u === "iconPath" && !Ke(d) || u === "iconPathDarkMode" && !Ke(d))
          return console.error("customTrayButton ".concat(u, " should be a url.")), !1;
        var p = gt.id[u];
        if (!p)
          return console.error("customTrayButton does not support key ".concat(u)), !1;
        if (I(d) !== p)
          return console.error("customTrayButton ".concat(u, " should be a ").concat(p, ".")), !1;
      }
  return !0;
}
function za(e) {
  if (!e || e && I(e) !== "object" || Array.isArray(e))
    return console.error(qa()), !1;
  for (var t = function(y) {
    return "".concat(y, " should be ").concat(or.id[y]);
  }, r = function(y, _) {
    return console.error("customIntegration ".concat(y, ": ").concat(_));
  }, n = 0, o = Object.entries(e); n < o.length; n++) {
    var s = ke(o[n], 1)[0];
    if (!("label" in e[s]))
      return r(s, "label is required"), !1;
    if (!("location" in e[s]))
      return r(s, "location is required"), !1;
    if (!("src" in e[s]) && !("srcdoc" in e[s]))
      return r(s, "src or srcdoc is required"), !1;
    for (var c = 0, u = Object.entries(e[s]); c < u.length; c++) {
      var d = ke(u[c], 2), p = d[0], m = d[1];
      switch (p) {
        case "allow":
        case "csp":
        case "name":
        case "referrerPolicy":
        case "sandbox":
          if (typeof m != "string")
            return r(s, t(p)), !1;
          break;
        case "iconURL":
          if (!Ke(m))
            return r(s, "".concat(p, " should be a url")), !1;
          break;
        case "src":
          if ("srcdoc" in e[s])
            return r(s, "cannot have both src and srcdoc"), !1;
          if (!Ke(m))
            return r(s, 'src "'.concat(m, '" is not a valid URL')), !1;
          break;
        case "srcdoc":
          if ("src" in e[s])
            return r(s, "cannot have both src and srcdoc"), !1;
          if (typeof m != "string")
            return r(s, t(p)), !1;
          break;
        case "location":
          if (!["main", "sidebar"].includes(m))
            return r(s, t(p)), !1;
          break;
        case "controlledBy":
          if (m !== "*" && m !== "owners" && (!Array.isArray(m) || m.some(function(y) {
            return typeof y != "string";
          })))
            return r(s, t(p)), !1;
          break;
        case "shared":
          if ((!Array.isArray(m) || m.some(function(y) {
            return typeof y != "string";
          })) && m !== "owners" && typeof m != "boolean")
            return r(s, t(p)), !1;
          break;
        default:
          if (!or.id[p])
            return console.error("customIntegration does not support key ".concat(p)), !1;
      }
    }
  }
  return !0;
}
function Wa(e, t) {
  if (t === void 0)
    return !1;
  switch (I(t)) {
    case "string":
      return I(e) === t;
    case "object":
      if (I(e) !== "object")
        return !1;
      for (var r in e)
        if (!Wa(e[r], t[r]))
          return !1;
      return !0;
    default:
      return !1;
  }
}
function ri(e) {
  if (I(e) !== "object")
    throw new Error('RemoteMediaPlayerSettings: must be "object" type');
  if (e.state && !Object.values(Ht).includes(e.state))
    throw new Error("Invalid value for RemoteMediaPlayerSettings.state, valid values are: " + JSON.stringify(Ht));
  if (e.volume) {
    if (typeof e.volume != "number")
      throw new Error('RemoteMediaPlayerSettings.volume: must be "number" type');
    if (e.volume < 0 || e.volume > 2)
      throw new Error("RemoteMediaPlayerSettings.volume: must be between 0.0 - 2.0");
  }
}
function ni(e, t, r) {
  return !(typeof e != "number" || e < t || e > r);
}
function Bt(e, t) {
  return e && !t && delete e.data, e;
}
const Od = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DAILY_ACCESS_LEVEL_FULL: pi,
  DAILY_ACCESS_LEVEL_LOBBY: Ao,
  DAILY_ACCESS_LEVEL_NONE: Eo,
  DAILY_ACCESS_UNKNOWN: ot,
  DAILY_CAMERA_ERROR_CAM_AND_MIC_IN_USE: Bo,
  DAILY_CAMERA_ERROR_CAM_IN_USE: xo,
  DAILY_CAMERA_ERROR_CONSTRAINTS: Jo,
  DAILY_CAMERA_ERROR_MIC_IN_USE: Vo,
  DAILY_CAMERA_ERROR_NOT_FOUND: qo,
  DAILY_CAMERA_ERROR_PERMISSIONS: Uo,
  DAILY_CAMERA_ERROR_UNDEF_MEDIADEVICES: Yo,
  DAILY_CAMERA_ERROR_UNKNOWN: zo,
  DAILY_EVENT_ACCESS_STATE_UPDATED: Ai,
  DAILY_EVENT_ACTIVE_SPEAKER_CHANGE: Wi,
  DAILY_EVENT_ACTIVE_SPEAKER_MODE_CHANGE: Gi,
  DAILY_EVENT_APP_MSG: Bi,
  DAILY_EVENT_CAMERA_ERROR: _i,
  DAILY_EVENT_CPU_LOAD_CHANGE: Hi,
  DAILY_EVENT_ERROR: dt,
  DAILY_EVENT_EXIT_FULLSCREEN: we,
  DAILY_EVENT_FULLSCREEN: _e,
  DAILY_EVENT_IFRAME_LAUNCH_CONFIG: yi,
  DAILY_EVENT_IFRAME_READY_FOR_LAUNCH_CONFIG: gi,
  DAILY_EVENT_INPUT_SETTINGS_UPDATED: na,
  DAILY_EVENT_JOINED_MEETING: wi,
  DAILY_EVENT_JOINING_MEETING: Gt,
  DAILY_EVENT_LANG_UPDATED: ta,
  DAILY_EVENT_LEFT_MEETING: Si,
  DAILY_EVENT_LIVE_STREAMING_ERROR: ea,
  DAILY_EVENT_LIVE_STREAMING_STARTED: Qi,
  DAILY_EVENT_LIVE_STREAMING_STOPPED: Xi,
  DAILY_EVENT_LIVE_STREAMING_UPDATED: Zi,
  DAILY_EVENT_LOADED: st,
  DAILY_EVENT_LOADING: zt,
  DAILY_EVENT_LOAD_ATTEMPT_FAILED: Wt,
  DAILY_EVENT_LOCAL_SCREEN_SHARE_STARTED: Ji,
  DAILY_EVENT_LOCAL_SCREEN_SHARE_STOPPED: zi,
  DAILY_EVENT_MEETING_SESSION_DATA_ERROR: Wo,
  DAILY_EVENT_MEETING_SESSION_STATE_UPDATED: Oi,
  DAILY_EVENT_MEETING_SESSION_UPDATED: Ei,
  DAILY_EVENT_NETWORK_CONNECTION: Ki,
  DAILY_EVENT_NETWORK_QUALITY_CHANGE: $i,
  DAILY_EVENT_NONFATAL_ERROR: ut,
  DAILY_EVENT_PARTICIPANT_COUNTS_UPDATED: Ti,
  DAILY_EVENT_PARTICIPANT_JOINED: ki,
  DAILY_EVENT_PARTICIPANT_LEFT: Mi,
  DAILY_EVENT_PARTICIPANT_UPDATED: Ci,
  DAILY_EVENT_RECEIVE_SETTINGS_UPDATED: ra,
  DAILY_EVENT_RECORDING_DATA: Vi,
  DAILY_EVENT_RECORDING_ERROR: Fi,
  DAILY_EVENT_RECORDING_STARTED: ct,
  DAILY_EVENT_RECORDING_STATS: Ri,
  DAILY_EVENT_RECORDING_STOPPED: lt,
  DAILY_EVENT_RECORDING_UPLOAD_COMPLETED: xi,
  DAILY_EVENT_REMOTE_MEDIA_PLAYER_STARTED: Ui,
  DAILY_EVENT_REMOTE_MEDIA_PLAYER_STOPPED: qi,
  DAILY_EVENT_REMOTE_MEDIA_PLAYER_UPDATED: Yi,
  DAILY_EVENT_STARTED_CAMERA: bi,
  DAILY_EVENT_THEME_UPDATED: Jt,
  DAILY_EVENT_TRACK_STARTED: $t,
  DAILY_EVENT_TRACK_STOPPED: Kt,
  DAILY_EVENT_TRANSCRIPTION_ERROR: Ni,
  DAILY_EVENT_TRANSCRIPTION_STARTED: Ii,
  DAILY_EVENT_TRANSCRIPTION_STOPPED: Di,
  DAILY_EVENT_WAITING_PARTICIPANT_ADDED: Li,
  DAILY_EVENT_WAITING_PARTICIPANT_REMOVED: ji,
  DAILY_EVENT_WAITING_PARTICIPANT_UPDATED: Pi,
  DAILY_FATAL_ERROR_CONNECTION: Fo,
  DAILY_FATAL_ERROR_EJECTED: Oo,
  DAILY_FATAL_ERROR_EOL: No,
  DAILY_FATAL_ERROR_EXP_ROOM: jo,
  DAILY_FATAL_ERROR_EXP_TOKEN: Io,
  DAILY_FATAL_ERROR_MEETING_FULL: Do,
  DAILY_FATAL_ERROR_NBF_ROOM: Lo,
  DAILY_FATAL_ERROR_NBF_TOKEN: Po,
  DAILY_FATAL_ERROR_NOT_ALLOWED: Ro,
  DAILY_RECEIVE_SETTINGS_ALL_PARTICIPANTS_KEY: mi,
  DAILY_RECEIVE_SETTINGS_BASE_KEY: vi,
  DAILY_STATE_ERROR: me,
  DAILY_STATE_JOINED: W,
  DAILY_STATE_JOINING: Te,
  DAILY_STATE_LEFT: ve,
  DAILY_STATE_NEW: qt,
  DAILY_TRACK_STATE_BLOCKED: wo,
  DAILY_TRACK_STATE_INTERRUPTED: Mo,
  DAILY_TRACK_STATE_LOADING: Co,
  DAILY_TRACK_STATE_OFF: So,
  DAILY_TRACK_STATE_PLAYABLE: To,
  DAILY_TRACK_STATE_SENDABLE: ko,
  default: Ed
}, Symbol.toStringTag, { value: "Module" })), Ld = /* @__PURE__ */ so(Od);
var yr = { exports: {} }, Ne = typeof Reflect == "object" ? Reflect : null, ii = Ne && typeof Ne.apply == "function" ? Ne.apply : function(t, r, n) {
  return Function.prototype.apply.call(t, r, n);
}, pt;
Ne && typeof Ne.ownKeys == "function" ? pt = Ne.ownKeys : Object.getOwnPropertySymbols ? pt = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : pt = function(t) {
  return Object.getOwnPropertyNames(t);
};
function Pd(e) {
  console && console.warn && console.warn(e);
}
var Ga = Number.isNaN || function(t) {
  return t !== t;
};
function E() {
  E.init.call(this);
}
yr.exports = E;
yr.exports.once = Nd;
E.EventEmitter = E;
E.prototype._events = void 0;
E.prototype._eventsCount = 0;
E.prototype._maxListeners = void 0;
var ai = 10;
function At(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(E, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return ai;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || Ga(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    ai = e;
  }
});
E.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
E.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || Ga(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function $a(e) {
  return e._maxListeners === void 0 ? E.defaultMaxListeners : e._maxListeners;
}
E.prototype.getMaxListeners = function() {
  return $a(this);
};
E.prototype.emit = function(t) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r.push(arguments[n]);
  var o = t === "error", s = this._events;
  if (s !== void 0)
    o = o && s.error === void 0;
  else if (!o)
    return !1;
  if (o) {
    var c;
    if (r.length > 0 && (c = r[0]), c instanceof Error)
      throw c;
    var u = new Error("Unhandled error." + (c ? " (" + c.message + ")" : ""));
    throw u.context = c, u;
  }
  var d = s[t];
  if (d === void 0)
    return !1;
  if (typeof d == "function")
    ii(d, this, r);
  else
    for (var p = d.length, m = Xa(d, p), n = 0; n < p; ++n)
      ii(m[n], this, r);
  return !0;
};
function Ka(e, t, r, n) {
  var o, s, c;
  if (At(r), s = e._events, s === void 0 ? (s = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (s.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    r.listener ? r.listener : r
  ), s = e._events), c = s[t]), c === void 0)
    c = s[t] = r, ++e._eventsCount;
  else if (typeof c == "function" ? c = s[t] = n ? [r, c] : [c, r] : n ? c.unshift(r) : c.push(r), o = $a(e), o > 0 && c.length > o && !c.warned) {
    c.warned = !0;
    var u = new Error("Possible EventEmitter memory leak detected. " + c.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = c.length, Pd(u);
  }
  return e;
}
E.prototype.addListener = function(t, r) {
  return Ka(this, t, r, !1);
};
E.prototype.on = E.prototype.addListener;
E.prototype.prependListener = function(t, r) {
  return Ka(this, t, r, !0);
};
function jd() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Ha(e, t, r) {
  var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r }, o = jd.bind(n);
  return o.listener = r, n.wrapFn = o, o;
}
E.prototype.once = function(t, r) {
  return At(r), this.on(t, Ha(this, t, r)), this;
};
E.prototype.prependOnceListener = function(t, r) {
  return At(r), this.prependListener(t, Ha(this, t, r)), this;
};
E.prototype.removeListener = function(t, r) {
  var n, o, s, c, u;
  if (At(r), o = this._events, o === void 0)
    return this;
  if (n = o[t], n === void 0)
    return this;
  if (n === r || n.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete o[t], o.removeListener && this.emit("removeListener", t, n.listener || r));
  else if (typeof n != "function") {
    for (s = -1, c = n.length - 1; c >= 0; c--)
      if (n[c] === r || n[c].listener === r) {
        u = n[c].listener, s = c;
        break;
      }
    if (s < 0)
      return this;
    s === 0 ? n.shift() : Id(n, s), n.length === 1 && (o[t] = n[0]), o.removeListener !== void 0 && this.emit("removeListener", t, u || r);
  }
  return this;
};
E.prototype.off = E.prototype.removeListener;
E.prototype.removeAllListeners = function(t) {
  var r, n, o;
  if (n = this._events, n === void 0)
    return this;
  if (n.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[t]), this;
  if (arguments.length === 0) {
    var s = Object.keys(n), c;
    for (o = 0; o < s.length; ++o)
      c = s[o], c !== "removeListener" && this.removeAllListeners(c);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = n[t], typeof r == "function")
    this.removeListener(t, r);
  else if (r !== void 0)
    for (o = r.length - 1; o >= 0; o--)
      this.removeListener(t, r[o]);
  return this;
};
function Qa(e, t, r) {
  var n = e._events;
  if (n === void 0)
    return [];
  var o = n[t];
  return o === void 0 ? [] : typeof o == "function" ? r ? [o.listener || o] : [o] : r ? Dd(o) : Xa(o, o.length);
}
E.prototype.listeners = function(t) {
  return Qa(this, t, !0);
};
E.prototype.rawListeners = function(t) {
  return Qa(this, t, !1);
};
E.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Za.call(e, t);
};
E.prototype.listenerCount = Za;
function Za(e) {
  var t = this._events;
  if (t !== void 0) {
    var r = t[e];
    if (typeof r == "function")
      return 1;
    if (r !== void 0)
      return r.length;
  }
  return 0;
}
E.prototype.eventNames = function() {
  return this._eventsCount > 0 ? pt(this._events) : [];
};
function Xa(e, t) {
  for (var r = new Array(t), n = 0; n < t; ++n)
    r[n] = e[n];
  return r;
}
function Id(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function Dd(e) {
  for (var t = new Array(e.length), r = 0; r < t.length; ++r)
    t[r] = e[r].listener || e[r];
  return t;
}
function Nd(e, t) {
  return new Promise(function(r, n) {
    function o(c) {
      e.removeListener(t, s), n(c);
    }
    function s() {
      typeof e.removeListener == "function" && e.removeListener("error", o), r([].slice.call(arguments));
    }
    eo(e, t, s, { once: !0 }), t !== "error" && Rd(e, o, { once: !0 });
  });
}
function Rd(e, t, r) {
  typeof e.on == "function" && eo(e, "error", t, r);
}
function eo(e, t, r, n) {
  if (typeof e.on == "function")
    n.once ? e.once(t, r) : e.on(t, r);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function o(s) {
      n.once && e.removeEventListener(t, o), r(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var Fd = yr.exports, Et = {}, ye = {};
Object.defineProperty(ye, "__esModule", { value: !0 });
ye.Api = ye.HttpClient = ye.ContentType = void 0;
var B;
(function(e) {
  e.Json = "application/json", e.FormData = "multipart/form-data", e.UrlEncoded = "application/x-www-form-urlencoded", e.Text = "text/plain";
})(B || (ye.ContentType = B = {}));
class to {
  constructor(t = {}) {
    V(this, "baseUrl", "https://api.vapi.ai");
    V(this, "securityData", null);
    V(this, "securityWorker");
    V(this, "abortControllers", /* @__PURE__ */ new Map());
    V(this, "customFetch", (...t) => fetch(...t));
    V(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    V(this, "setSecurityData", (t) => {
      this.securityData = t;
    });
    V(this, "contentFormatters", {
      [B.Json]: (t) => t !== null && (typeof t == "object" || typeof t == "string") ? JSON.stringify(t) : t,
      [B.Text]: (t) => t !== null && typeof t != "string" ? JSON.stringify(t) : t,
      [B.FormData]: (t) => Object.keys(t || {}).reduce((r, n) => {
        const o = t[n];
        return r.append(n, o instanceof Blob ? o : typeof o == "object" && o !== null ? JSON.stringify(o) : `${o}`), r;
      }, new FormData()),
      [B.UrlEncoded]: (t) => this.toQueryString(t)
    });
    V(this, "createAbortSignal", (t) => {
      if (this.abortControllers.has(t)) {
        const n = this.abortControllers.get(t);
        return n ? n.signal : void 0;
      }
      const r = new AbortController();
      return this.abortControllers.set(t, r), r.signal;
    });
    V(this, "abortRequest", (t) => {
      const r = this.abortControllers.get(t);
      r && (r.abort(), this.abortControllers.delete(t));
    });
    V(this, "request", async ({ body: t, secure: r, path: n, type: o, query: s, format: c, baseUrl: u, cancelToken: d, ...p }) => {
      const m = (typeof r == "boolean" ? r : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {}, y = this.mergeRequestParams(p, m), _ = s && this.toQueryString(s), R = this.contentFormatters[o || B.Json], M = c || y.format;
      return this.customFetch(`${u || this.baseUrl || ""}${n}${_ ? `?${_}` : ""}`, {
        ...y,
        headers: {
          ...y.headers || {},
          ...o && o !== B.FormData ? { "Content-Type": o } : {}
        },
        signal: (d ? this.createAbortSignal(d) : y.signal) || null,
        body: typeof t > "u" || t === null ? null : R(t)
      }).then(async (j) => {
        const O = j;
        O.data = null, O.error = null;
        const Y = M ? await j[M]().then((x) => (O.ok ? O.data = x : O.error = x, O)).catch((x) => (O.error = x, O)) : O;
        if (d && this.abortControllers.delete(d), !j.ok)
          throw Y;
        return Y;
      });
    });
    Object.assign(this, t);
  }
  encodeQueryParam(t, r) {
    return `${encodeURIComponent(t)}=${encodeURIComponent(typeof r == "number" ? r : `${r}`)}`;
  }
  addQueryParam(t, r) {
    return this.encodeQueryParam(r, t[r]);
  }
  addArrayQueryParam(t, r) {
    return t[r].map((o) => this.encodeQueryParam(r, o)).join("&");
  }
  toQueryString(t) {
    const r = t || {};
    return Object.keys(r).filter((o) => typeof r[o] < "u").map((o) => Array.isArray(r[o]) ? this.addArrayQueryParam(r, o) : this.addQueryParam(r, o)).join("&");
  }
  addQueryParams(t) {
    const r = this.toQueryString(t);
    return r ? `?${r}` : "";
  }
  mergeRequestParams(t, r) {
    return {
      ...this.baseApiParams,
      ...t,
      ...r || {},
      headers: {
        ...this.baseApiParams.headers || {},
        ...t.headers || {},
        ...r && r.headers || {}
      }
    };
  }
}
ye.HttpClient = to;
class xd extends to {
  constructor() {
    super(...arguments);
    V(this, "assistant", {
      /**
       * No description
       *
       * @tags Assistants
       * @name AssistantControllerCreate
       * @summary Create Assistant
       * @request POST:/assistant
       * @secure
       */
      assistantControllerCreate: (r, n = {}) => this.request({
        path: "/assistant",
        method: "POST",
        body: r,
        secure: !0,
        type: B.Json,
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
      assistantControllerFindAll: (r = {}) => this.request({
        path: "/assistant",
        method: "GET",
        secure: !0,
        format: "json",
        ...r
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
      assistantControllerFindOne: (r, n = {}) => this.request({
        path: `/assistant/${r}`,
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
      assistantControllerUpdate: (r, n, o = {}) => this.request({
        path: `/assistant/${r}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: B.Json,
        format: "json",
        ...o
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
      assistantControllerReplace: (r, n, o = {}) => this.request({
        path: `/assistant/${r}`,
        method: "PUT",
        body: n,
        secure: !0,
        type: B.Json,
        format: "json",
        ...o
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
      assistantControllerRemove: (r, n = {}) => this.request({
        path: `/assistant/${r}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      })
    });
    V(this, "call", {
      /**
       * No description
       *
       * @tags Calls
       * @name CallControllerFindAll
       * @summary List Calls
       * @request GET:/call
       * @secure
       */
      callControllerFindAll: (r = {}) => this.request({
        path: "/call",
        method: "GET",
        secure: !0,
        format: "json",
        ...r
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
      callControllerFindOne: (r, n = {}) => this.request({
        path: `/call/${r}`,
        method: "GET",
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
       * @secure
       */
      callControllerCreatePhoneCall: (r, n = {}) => this.request({
        path: "/call/phone",
        method: "POST",
        body: r,
        secure: !0,
        type: B.Json,
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
      callControllerCreateWebCall: (r, n = {}) => this.request({
        path: "/call/web",
        method: "POST",
        body: r,
        secure: !0,
        type: B.Json,
        format: "json",
        ...n
      })
    });
    V(this, "credential", {
      /**
       * No description
       *
       * @tags Credentials
       * @name CredentialControllerCreate
       * @summary Create Credential
       * @request POST:/credential
       * @secure
       */
      credentialControllerCreate: (r, n = {}) => this.request({
        path: "/credential",
        method: "POST",
        body: r,
        secure: !0,
        type: B.Json,
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
      credentialControllerFindAll: (r = {}) => this.request({
        path: "/credential",
        method: "GET",
        secure: !0,
        format: "json",
        ...r
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
      credentialControllerFindOne: (r, n = {}) => this.request({
        path: `/credential/${r}`,
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
       * @request PUT:/credential/{id}
       * @secure
       */
      credentialControllerUpdate: (r, n, o = {}) => this.request({
        path: `/credential/${r}`,
        method: "PUT",
        body: n,
        secure: !0,
        type: B.Json,
        format: "json",
        ...o
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
      credentialControllerRemove: (r, n = {}) => this.request({
        path: `/credential/${r}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      })
    });
    V(this, "phoneNumber", {
      /**
       * No description
       *
       * @tags Phone Numbers
       * @name PhoneNumberControllerBuy
       * @summary Buy Phone Number
       * @request POST:/phone-number/buy
       * @secure
       */
      phoneNumberControllerBuy: (r, n = {}) => this.request({
        path: "/phone-number/buy",
        method: "POST",
        body: r,
        secure: !0,
        type: B.Json,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Phone Numbers
       * @name PhoneNumberControllerImport
       * @summary Import Twilio Number
       * @request POST:/phone-number/import
       * @secure
       */
      phoneNumberControllerImport: (r, n = {}) => this.request({
        path: "/phone-number/import",
        method: "POST",
        body: r,
        secure: !0,
        type: B.Json,
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
      phoneNumberControllerFindAll: (r = {}) => this.request({
        path: "/phone-number",
        method: "GET",
        secure: !0,
        format: "json",
        ...r
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
      phoneNumberControllerFindOne: (r, n = {}) => this.request({
        path: `/phone-number/${r}`,
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
      phoneNumberControllerUpdate: (r, n, o = {}) => this.request({
        path: `/phone-number/${r}`,
        method: "PATCH",
        body: n,
        secure: !0,
        type: B.Json,
        format: "json",
        ...o
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
      phoneNumberControllerRemove: (r, n = {}) => this.request({
        path: `/phone-number/${r}`,
        method: "DELETE",
        secure: !0,
        format: "json",
        ...n
      })
    });
  }
}
ye.Api = xd;
Object.defineProperty(Et, "__esModule", { value: !0 });
Et.client = void 0;
const Vd = ye, Bd = new Vd.Api({
  baseUrl: "https://api.vapi.ai",
  baseApiParams: {
    secure: !0
  },
  securityWorker: async (e) => {
    if (e)
      return {
        headers: {
          Authorization: `Bearer ${e}`
        }
      };
  }
});
Et.client = Bd;
var ro = Lr && Lr.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(oi, "__esModule", { value: !0 });
const Ud = ro(Ld), Yd = ro(Fd), Ut = Et;
function qd(e) {
  const t = document.querySelector(`audio[data-participant-id="${e}"]`);
  t == null || t.remove();
}
async function Jd(e, t) {
  e.muted = !1, e.autoplay = !0, t != null && (e.srcObject = new MediaStream([t]), await e.play());
}
async function zd(e, t) {
  const r = document.createElement("audio");
  return r.dataset.participantId = t, document.body.appendChild(r), await Jd(r, e), r;
}
function Wd(e, t) {
  e.participant.local || t.updateParticipant(e.participant.session_id, {
    setSubscribedTracks: {
      audio: !0,
      video: !1
    }
  });
}
class Gd extends Yd.default {
  on(t, r) {
    return super.on(t, r), this;
  }
  once(t, r) {
    return super.once(t, r), this;
  }
  emit(t, ...r) {
    return super.emit(t, ...r);
  }
  removeListener(t, r) {
    return super.removeListener(t, r), this;
  }
  removeAllListeners(t) {
    return super.removeAllListeners(t), this;
  }
}
class $d extends Gd {
  constructor(r, n) {
    super();
    V(this, "started", !1);
    V(this, "call", null);
    V(this, "speakingTimeout", null);
    V(this, "averageSpeechLevel", 0);
    Ut.client.baseUrl = n ?? "https://api.vapi.ai", Ut.client.setSecurityData(r);
  }
  cleanup() {
    var r;
    this.started = !1, (r = this.call) == null || r.destroy(), this.call = null, this.speakingTimeout = null;
  }
  async start(r) {
    var n;
    if (this.started)
      return null;
    this.started = !0;
    try {
      const o = (await Ut.client.call.callControllerCreateWebCall({
        assistant: typeof r == "string" ? void 0 : r,
        assistantId: typeof r == "string" ? r : void 0
      })).data;
      return this.call = Ud.default.createCallObject({
        audioSource: !0,
        videoSource: !1
      }), (n = this.call.iframe()) == null || n.style.setProperty("display", "none"), this.call.on("left-meeting", () => {
        this.emit("call-end"), this.cleanup();
      }), this.call.on("participant-left", (s) => {
        s && qd(s.participant.session_id);
      }), this.call.on("error", () => {
      }), this.call.on("track-started", async (s) => {
        var c, u, d;
        !s || !s.participant || (c = s.participant) != null && c.local || s.track.kind === "audio" && (await zd(s.track, s.participant.session_id), ((u = s == null ? void 0 : s.participant) == null ? void 0 : u.user_name) === "Vapi Speaker" && ((d = this.call) == null || d.sendAppMessage("playable")));
      }), this.call.on("participant-joined", (s) => {
        !s || !this.call || Wd(s, this.call);
      }), await this.call.join({
        url: o.webCallUrl,
        subscribeToTracksAutomatically: !1
      }), this.call.startRemoteParticipantsAudioLevelObserver(100), this.call.on("remote-participants-audio-level", (s) => this.handleRemoteParticipantsAudioLevel(s)), this.call.on("app-message", (s) => this.onAppMessage(s)), this.call.updateInputSettings({
        audio: {
          processor: {
            type: "noise-cancellation"
          }
        }
      }), o;
    } catch (o) {
      return console.error(o), this.emit("error", o), this.cleanup(), null;
    }
  }
  onAppMessage(r) {
    if (r)
      try {
        if (r.data === "listening")
          return this.emit("call-start");
        const n = JSON.parse(r.data);
        this.emit("message", n);
      } catch (n) {
        console.error(n);
      }
  }
  handleRemoteParticipantsAudioLevel(r) {
    const n = Object.values(r.participantsAudioLevel).reduce((s, c) => s + c, 0);
    this.emit("volume-level", Math.min(1, n / 0.15)), n > 0.01 && (this.speakingTimeout ? (clearTimeout(this.speakingTimeout), this.speakingTimeout = null) : this.emit("speech-start"), this.speakingTimeout = setTimeout(() => {
      this.emit("speech-end"), this.speakingTimeout = null;
    }, 1e3));
  }
  stop() {
    var r;
    this.started = !1, (r = this.call) == null || r.destroy(), this.call = null;
  }
  send(r) {
    var n;
    (n = this.call) == null || n.sendAppMessage(JSON.stringify(r));
  }
}
var Kd = oi.default = $d;
const Hd = () => ({
  name: "Mary",
  model: {
    provider: "openai",
    model: "gpt-3.5-turbo",
    temperature: 0.7,
    systemPrompt: "You're Mary, an AI assistant who can help an author design characters for their story. You can also help the author to generate name using function getRandomName. Understand their intention and help them define the character. You can use functions if author requests something which function is designed for. For example: to generate name in case the author doesn't have any particular name in mind, you can use getRandomName function. Also each time some aspect of the character is finalised, you should call the finalizeDetail function",
    functions: [
      {
        name: "finalizeDetail",
        description: "Each time a detail has been finalized, this function should be called so that the author can be informed about the same.",
        parameters: {
          type: "object",
          properties: {
            key: {
              type: "string",
              description: "This is the key or detail for which the values have been set. For example, key can be name, short description, personality traits, physical appearance, likes, dislikes, etc."
            },
            value: {
              type: "string",
              description: "This is the value of the detail which the author is finalizing. For example, if the key is name, then the value can be John Doe if author has decided that."
            }
          }
        }
      },
      {
        name: "getRandomName",
        description: "Generates a random name based on optional gender and nationality",
        parameters: {
          type: "object",
          properties: {
            gender: {
              type: "string",
              enum: ["male", "female"],
              description: "The gender for which to generate a name."
            },
            nat: {
              type: "string",
              description: "The nationality based on which to generate a name. Example: IN for India, US for United States of America or USA and so on."
            }
          }
        }
      },
      {
        name: "getCharacterInspiration",
        description: "Provides character inspiration based on a given query provided by the author.",
        parameters: {
          type: "object",
          properties: {
            inspiration: {
              type: "string",
              description: "Based on the user query, this defines the inspiration that the author is looking for. It could be some kind of similarity or something else as well. It should be detailed."
            }
          }
        }
      }
    ]
  },
  voice: {
    provider: "11labs",
    voiceId: "paula"
  },
  firstMessage: "Hi. I'm Mary, your personal character sketch pad."
}), Qd = () => {
  const e = document.createElement("style");
  e.innerText = `
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

    .vapi-btn {
      border-radius: 50%;
      width: 50px;
      height: 50px;
      color: white;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      animation: bounce 2s ease-in-out infinite;
    }
    .vapi-btn:hover {
      animation: none;
      transform: translateY(-5px);
    }

    .vapi-btn-is-active,
    .vapi-btn-is-loading,
    .vapi-btn-is-speaking {
      animation: none;
    }
  `, document.head.appendChild(e);
}, Zd = ({ position: e = "bottom", color: t = "rgb(93, 254, 202)", offset: r = "40px" }, n = "vapi-support-btn") => {
  Qd();
  var o = (c) => ({
    "bottom-right": `bottom: ${c};right: ${c};`,
    "bottom-left": `bottom: ${c};left: ${c};`,
    "top-right": `top: ${c};right: ${c};`,
    "top-left": `top: ${c};left: ${c};`,
    bottom: `bottom: ${c};left: 50%;margin-left: -25px;`,
    right: `top: 50%;right: ${c};margin-top: -25px;`,
    left: `top: 50%;left: ${c};margin-top: -25px;`,
    top: `top: ${c};left: 50%;margin-left: -25px;`
  });
  const s = document.createElement("button");
  return s.id = n, s.onclick = () => {
  }, s.style.cssText = `
    background: radial-gradient(circle, rgba(255,255,255,0.2) -40%, ${t} 100%);
    box-shadow: 1px 1px 10px 0px ${t};
    ${o(r)[e]}
    &:hover {animation: none;}
  `, s.className = "vapi-btn is-idle", s;
};
function Xd(e, t, r, n) {
  let o = !1;
  function s() {
    t.classList.add("vapi-btn-is-loading"), o ? (e.stop(), o = !1) : (e.start(n), o = !0, t.style.boxShadow = `1px 1px 80px 20px ${r}`);
  }
  e.on("call-start", () => {
    t.classList.remove("vapi-btn-is-loading"), t.classList.add("vapi-btn-is-active");
  }), e.on("call-end", () => {
    t.classList.remove("vapi-btn-is-loading"), t.classList.remove("vapi-btn-is-active"), t.style.boxShadow = `1px 1px 10px ${r}`;
  }), e.on("speech-start", () => {
    t.classList.add("vapi-btn-is-speaking");
  }), e.on("speech-end", () => {
    t.classList.remove("vapi-btn-is-speaking");
  }), t.addEventListener("click", s), e.on("volume-level", (c) => {
    t.style.boxShadow = `1px 1px ${10 + c * 40}px ${c * 30}px ${r}, inset 0px 0px 10px 0px rgba(0,0,0,0.1)`;
  });
}
const eh = ({
  apiKey: e = "",
  assistant: t = Hd(),
  position: r = "bottom",
  color: n = "rgb(93, 254, 202)",
  offset: o = "40px"
}) => {
  const s = new Kd(e), c = Zd({ position: r, color: n, offset: o });
  Xd(s, c, n, t), document.body.appendChild(c), window.vapiSDK.on = s.on;
};
window.vapiSDK = {
  run: eh
};
