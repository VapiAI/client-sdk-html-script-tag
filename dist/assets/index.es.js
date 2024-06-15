var Ka = Object.defineProperty;
var Qa = (n, e, t) => e in n ? Ka(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Xa = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var D = (n, e, t) => (Qa(n, typeof e != "symbol" ? e + "" : e, t), t);
var Il = Xa((Rl, Ja) => {
  var Er = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function Za(n) {
    if (n.__esModule)
      return n;
    var e = n.default;
    if (typeof e == "function") {
      var t = function r() {
        return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
      };
      t.prototype = e.prototype;
    } else
      t = {};
    return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(n).forEach(function(r) {
      var i = Object.getOwnPropertyDescriptor(n, r);
      Object.defineProperty(t, r, i.get ? i : {
        enumerable: !0,
        get: function() {
          return n[r];
        }
      });
    }), t;
  }
  var Hi = {};
  function sn(n, e) {
    if (n == null)
      return {};
    var t, r, i = function(s, l) {
      if (s == null)
        return {};
      var u, p, h = {}, m = Object.keys(s);
      for (p = 0; p < m.length; p++)
        u = m[p], l.indexOf(u) >= 0 || (h[u] = s[u]);
      return h;
    }(n, e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(n);
      for (r = 0; r < a.length; r++)
        t = a[r], e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(n, t) && (i[t] = n[t]);
    }
    return i;
  }
  function kr(n, e, t, r, i, a, s) {
    try {
      var l = n[a](s), u = l.value;
    } catch (p) {
      return void t(p);
    }
    l.done ? e(u) : Promise.resolve(u).then(r, i);
  }
  function C(n) {
    return function() {
      var e = this, t = arguments;
      return new Promise(function(r, i) {
        var a = n.apply(e, t);
        function s(u) {
          kr(a, r, i, s, l, "next", u);
        }
        function l(u) {
          kr(a, r, i, s, l, "throw", u);
        }
        s(void 0);
      });
    };
  }
  function ce(n, e) {
    if (!(n instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function F(n) {
    return F = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, F(n);
  }
  function Ki(n) {
    var e = function(t, r) {
      if (F(t) !== "object" || t === null)
        return t;
      var i = t[Symbol.toPrimitive];
      if (i !== void 0) {
        var a = i.call(t, r || "default");
        if (F(a) !== "object")
          return a;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(t);
    }(n, "string");
    return F(e) === "symbol" ? e : String(e);
  }
  function Tr(n, e) {
    for (var t = 0; t < e.length; t++) {
      var r = e[t];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, Ki(r.key), r);
    }
  }
  function le(n, e, t) {
    return e && Tr(n.prototype, e), t && Tr(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
  }
  function ve(n) {
    if (n === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n;
  }
  function ft(n, e) {
    return ft = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
      return t.__proto__ = r, t;
    }, ft(n, e);
  }
  function Xt(n, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function");
    n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), e && ft(n, e);
  }
  function Zt(n, e) {
    if (e && (F(e) === "object" || typeof e == "function"))
      return e;
    if (e !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return ve(n);
  }
  function se(n) {
    return se = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, se(n);
  }
  function ke(n, e, t) {
    return (e = Ki(e)) in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
  }
  function Cr(n, e) {
    (e == null || e > n.length) && (e = n.length);
    for (var t = 0, r = new Array(e); t < e; t++)
      r[t] = n[t];
    return r;
  }
  function Be(n, e) {
    return function(t) {
      if (Array.isArray(t))
        return t;
    }(n) || function(t, r) {
      var i = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
      if (i != null) {
        var a, s, l, u, p = [], h = !0, m = !1;
        try {
          if (l = (i = i.call(t)).next, r === 0) {
            if (Object(i) !== i)
              return;
            h = !1;
          } else
            for (; !(h = (a = l.call(i)).done) && (p.push(a.value), p.length !== r); h = !0)
              ;
        } catch (y) {
          m = !0, s = y;
        } finally {
          try {
            if (!h && i.return != null && (u = i.return(), Object(u) !== u))
              return;
          } finally {
            if (m)
              throw s;
          }
        }
        return p;
      }
    }(n, e) || function(t, r) {
      if (t) {
        if (typeof t == "string")
          return Cr(t, r);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        return i === "Object" && t.constructor && (i = t.constructor.name), i === "Map" || i === "Set" ? Array.from(t) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Cr(t, r) : void 0;
      }
    }(n, e) || function() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  var Qi, we = {}, es = { get exports() {
    return we;
  }, set exports(n) {
    we = n;
  } }, We = typeof Reflect == "object" ? Reflect : null, Mr = We && typeof We.apply == "function" ? We.apply : function(n, e, t) {
    return Function.prototype.apply.call(n, e, t);
  };
  Qi = We && typeof We.ownKeys == "function" ? We.ownKeys : Object.getOwnPropertySymbols ? function(n) {
    return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
  } : function(n) {
    return Object.getOwnPropertyNames(n);
  };
  var Ar = Number.isNaN || function(n) {
    return n != n;
  };
  function I() {
    I.init.call(this);
  }
  es.exports = I, we.once = function(n, e) {
    return new Promise(function(t, r) {
      function i(s) {
        n.removeListener(e, a), r(s);
      }
      function a() {
        typeof n.removeListener == "function" && n.removeListener("error", i), t([].slice.call(arguments));
      }
      Nr(n, e, a, { once: !0 }), e !== "error" && function(s, l, u) {
        typeof s.on == "function" && Nr(s, "error", l, u);
      }(n, i, { once: !0 });
    });
  }, I.EventEmitter = I, I.prototype._events = void 0, I.prototype._eventsCount = 0, I.prototype._maxListeners = void 0;
  var Or = 10;
  function It(n) {
    if (typeof n != "function")
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
  }
  function Xi(n) {
    return n._maxListeners === void 0 ? I.defaultMaxListeners : n._maxListeners;
  }
  function Lr(n, e, t, r) {
    var i, a, s, l;
    if (It(t), (a = n._events) === void 0 ? (a = n._events = /* @__PURE__ */ Object.create(null), n._eventsCount = 0) : (a.newListener !== void 0 && (n.emit("newListener", e, t.listener ? t.listener : t), a = n._events), s = a[e]), s === void 0)
      s = a[e] = t, ++n._eventsCount;
    else if (typeof s == "function" ? s = a[e] = r ? [t, s] : [s, t] : r ? s.unshift(t) : s.push(t), (i = Xi(n)) > 0 && s.length > i && !s.warned) {
      s.warned = !0;
      var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      u.name = "MaxListenersExceededWarning", u.emitter = n, u.type = e, u.count = s.length, l = u, console && console.warn && console.warn(l);
    }
    return n;
  }
  function ts() {
    if (!this.fired)
      return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function Pr(n, e, t) {
    var r = { fired: !1, wrapFn: void 0, target: n, type: e, listener: t }, i = ts.bind(r);
    return i.listener = t, r.wrapFn = i, i;
  }
  function Dr(n, e, t) {
    var r = n._events;
    if (r === void 0)
      return [];
    var i = r[e];
    return i === void 0 ? [] : typeof i == "function" ? t ? [i.listener || i] : [i] : t ? function(a) {
      for (var s = new Array(a.length), l = 0; l < s.length; ++l)
        s[l] = a[l].listener || a[l];
      return s;
    }(i) : Zi(i, i.length);
  }
  function Ir(n) {
    var e = this._events;
    if (e !== void 0) {
      var t = e[n];
      if (typeof t == "function")
        return 1;
      if (t !== void 0)
        return t.length;
    }
    return 0;
  }
  function Zi(n, e) {
    for (var t = new Array(e), r = 0; r < e; ++r)
      t[r] = n[r];
    return t;
  }
  function Nr(n, e, t, r) {
    if (typeof n.on == "function")
      r.once ? n.once(e, t) : n.on(e, t);
    else {
      if (typeof n.addEventListener != "function")
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof n);
      n.addEventListener(e, function i(a) {
        r.once && n.removeEventListener(e, i), t(a);
      });
    }
  }
  Object.defineProperty(I, "defaultMaxListeners", { enumerable: !0, get: function() {
    return Or;
  }, set: function(n) {
    if (typeof n != "number" || n < 0 || Ar(n))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + n + ".");
    Or = n;
  } }), I.init = function() {
    this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, I.prototype.setMaxListeners = function(n) {
    if (typeof n != "number" || n < 0 || Ar(n))
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
    return this._maxListeners = n, this;
  }, I.prototype.getMaxListeners = function() {
    return Xi(this);
  }, I.prototype.emit = function(n) {
    for (var e = [], t = 1; t < arguments.length; t++)
      e.push(arguments[t]);
    var r = n === "error", i = this._events;
    if (i !== void 0)
      r = r && i.error === void 0;
    else if (!r)
      return !1;
    if (r) {
      var a;
      if (e.length > 0 && (a = e[0]), a instanceof Error)
        throw a;
      var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
      throw s.context = a, s;
    }
    var l = i[n];
    if (l === void 0)
      return !1;
    if (typeof l == "function")
      Mr(l, this, e);
    else {
      var u = l.length, p = Zi(l, u);
      for (t = 0; t < u; ++t)
        Mr(p[t], this, e);
    }
    return !0;
  }, I.prototype.addListener = function(n, e) {
    return Lr(this, n, e, !1);
  }, I.prototype.on = I.prototype.addListener, I.prototype.prependListener = function(n, e) {
    return Lr(this, n, e, !0);
  }, I.prototype.once = function(n, e) {
    return It(e), this.on(n, Pr(this, n, e)), this;
  }, I.prototype.prependOnceListener = function(n, e) {
    return It(e), this.prependListener(n, Pr(this, n, e)), this;
  }, I.prototype.removeListener = function(n, e) {
    var t, r, i, a, s;
    if (It(e), (r = this._events) === void 0)
      return this;
    if ((t = r[n]) === void 0)
      return this;
    if (t === e || t.listener === e)
      --this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete r[n], r.removeListener && this.emit("removeListener", n, t.listener || e));
    else if (typeof t != "function") {
      for (i = -1, a = t.length - 1; a >= 0; a--)
        if (t[a] === e || t[a].listener === e) {
          s = t[a].listener, i = a;
          break;
        }
      if (i < 0)
        return this;
      i === 0 ? t.shift() : function(l, u) {
        for (; u + 1 < l.length; u++)
          l[u] = l[u + 1];
        l.pop();
      }(t, i), t.length === 1 && (r[n] = t[0]), r.removeListener !== void 0 && this.emit("removeListener", n, s || e);
    }
    return this;
  }, I.prototype.off = I.prototype.removeListener, I.prototype.removeAllListeners = function(n) {
    var e, t, r;
    if ((t = this._events) === void 0)
      return this;
    if (t.removeListener === void 0)
      return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : t[n] !== void 0 && (--this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete t[n]), this;
    if (arguments.length === 0) {
      var i, a = Object.keys(t);
      for (r = 0; r < a.length; ++r)
        (i = a[r]) !== "removeListener" && this.removeAllListeners(i);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (typeof (e = t[n]) == "function")
      this.removeListener(n, e);
    else if (e !== void 0)
      for (r = e.length - 1; r >= 0; r--)
        this.removeListener(n, e[r]);
    return this;
  }, I.prototype.listeners = function(n) {
    return Dr(this, n, !0);
  }, I.prototype.rawListeners = function(n) {
    return Dr(this, n, !1);
  }, I.listenerCount = function(n, e) {
    return typeof n.listenerCount == "function" ? n.listenerCount(e) : Ir.call(n, e);
  }, I.prototype.listenerCount = Ir, I.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Qi(this._events) : [];
  };
  var Rr = Object.prototype.hasOwnProperty;
  function xr(n, e, t) {
    for (t of n.keys())
      if (Z(t, e))
        return t;
  }
  function Z(n, e) {
    var t, r, i;
    if (n === e)
      return !0;
    if (n && e && (t = n.constructor) === e.constructor) {
      if (t === Date)
        return n.getTime() === e.getTime();
      if (t === RegExp)
        return n.toString() === e.toString();
      if (t === Array) {
        if ((r = n.length) === e.length)
          for (; r-- && Z(n[r], e[r]); )
            ;
        return r === -1;
      }
      if (t === Set) {
        if (n.size !== e.size)
          return !1;
        for (r of n)
          if ((i = r) && typeof i == "object" && !(i = xr(e, i)) || !e.has(i))
            return !1;
        return !0;
      }
      if (t === Map) {
        if (n.size !== e.size)
          return !1;
        for (r of n)
          if ((i = r[0]) && typeof i == "object" && !(i = xr(e, i)) || !Z(r[1], e.get(i)))
            return !1;
        return !0;
      }
      if (t === ArrayBuffer)
        n = new Uint8Array(n), e = new Uint8Array(e);
      else if (t === DataView) {
        if ((r = n.byteLength) === e.byteLength)
          for (; r-- && n.getInt8(r) === e.getInt8(r); )
            ;
        return r === -1;
      }
      if (ArrayBuffer.isView(n)) {
        if ((r = n.byteLength) === e.byteLength)
          for (; r-- && n[r] === e[r]; )
            ;
        return r === -1;
      }
      if (!t || typeof n == "object") {
        for (t in r = 0, n)
          if (Rr.call(n, t) && ++r && !Rr.call(e, t) || !(t in e) || !Z(n[t], e[t]))
            return !1;
        return Object.keys(e).length === r;
      }
    }
    return n != n && e != e;
  }
  const ns = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" }, eo = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" }, $ = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" }, Q = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" }, Ee = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" };
  class v {
    static getFirstMatch(e, t) {
      const r = t.match(e);
      return r && r.length > 0 && r[1] || "";
    }
    static getSecondMatch(e, t) {
      const r = t.match(e);
      return r && r.length > 1 && r[2] || "";
    }
    static matchAndReturnConst(e, t, r) {
      if (e.test(t))
        return r;
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
      const t = e.split(".").splice(0, 2).map((r) => parseInt(r, 10) || 0);
      if (t.push(0), t[0] === 10)
        switch (t[1]) {
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
      const t = e.split(".").splice(0, 2).map((r) => parseInt(r, 10) || 0);
      if (t.push(0), !(t[0] === 1 && t[1] < 5))
        return t[0] === 1 && t[1] < 6 ? "Cupcake" : t[0] === 1 && t[1] >= 6 ? "Donut" : t[0] === 2 && t[1] < 2 ? "Eclair" : t[0] === 2 && t[1] === 2 ? "Froyo" : t[0] === 2 && t[1] > 2 ? "Gingerbread" : t[0] === 3 ? "Honeycomb" : t[0] === 4 && t[1] < 1 ? "Ice Cream Sandwich" : t[0] === 4 && t[1] < 4 ? "Jelly Bean" : t[0] === 4 && t[1] >= 4 ? "KitKat" : t[0] === 5 ? "Lollipop" : t[0] === 6 ? "Marshmallow" : t[0] === 7 ? "Nougat" : t[0] === 8 ? "Oreo" : t[0] === 9 ? "Pie" : void 0;
    }
    static getVersionPrecision(e) {
      return e.split(".").length;
    }
    static compareVersions(e, t, r = !1) {
      const i = v.getVersionPrecision(e), a = v.getVersionPrecision(t);
      let s = Math.max(i, a), l = 0;
      const u = v.map([e, t], (p) => {
        const h = s - v.getVersionPrecision(p), m = p + new Array(h + 1).join(".0");
        return v.map(m.split("."), (y) => new Array(20 - y.length).join("0") + y).reverse();
      });
      for (r && (l = s - Math.min(i, a)), s -= 1; s >= l; ) {
        if (u[0][s] > u[1][s])
          return 1;
        if (u[0][s] === u[1][s]) {
          if (s === l)
            return 0;
          s -= 1;
        } else if (u[0][s] < u[1][s])
          return -1;
      }
    }
    static map(e, t) {
      const r = [];
      let i;
      if (Array.prototype.map)
        return Array.prototype.map.call(e, t);
      for (i = 0; i < e.length; i += 1)
        r.push(t(e[i]));
      return r;
    }
    static find(e, t) {
      let r, i;
      if (Array.prototype.find)
        return Array.prototype.find.call(e, t);
      for (r = 0, i = e.length; r < i; r += 1) {
        const a = e[r];
        if (t(a, r))
          return a;
      }
    }
    static assign(e, ...t) {
      const r = e;
      let i, a;
      if (Object.assign)
        return Object.assign(e, ...t);
      for (i = 0, a = t.length; i < a; i += 1) {
        const s = t[i];
        typeof s == "object" && s !== null && Object.keys(s).forEach((l) => {
          r[l] = s[l];
        });
      }
      return e;
    }
    static getBrowserAlias(e) {
      return ns[e];
    }
    static getBrowserTypeByAlias(e) {
      return eo[e] || "";
    }
  }
  const x = /version\/(\d+(\.?_?\d+)+)/i, rs = [{ test: [/googlebot/i], describe(n) {
    const e = { name: "Googlebot" }, t = v.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, n) || v.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/opera/i], describe(n) {
    const e = { name: "Opera" }, t = v.getFirstMatch(x, n) || v.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/opr\/|opios/i], describe(n) {
    const e = { name: "Opera" }, t = v.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, n) || v.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/SamsungBrowser/i], describe(n) {
    const e = { name: "Samsung Internet for Android" }, t = v.getFirstMatch(x, n) || v.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/Whale/i], describe(n) {
    const e = { name: "NAVER Whale Browser" }, t = v.getFirstMatch(x, n) || v.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/MZBrowser/i], describe(n) {
    const e = { name: "MZ Browser" }, t = v.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, n) || v.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/focus/i], describe(n) {
    const e = { name: "Focus" }, t = v.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, n) || v.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/swing/i], describe(n) {
    const e = { name: "Swing" }, t = v.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, n) || v.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/coast/i], describe(n) {
    const e = { name: "Opera Coast" }, t = v.getFirstMatch(x, n) || v.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe(n) {
    const e = { name: "Opera Touch" }, t = v.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, n) || v.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/yabrowser/i], describe(n) {
    const e = { name: "Yandex Browser" }, t = v.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, n) || v.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/ucbrowser/i], describe(n) {
    const e = { name: "UC Browser" }, t = v.getFirstMatch(x, n) || v.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/Maxthon|mxios/i], describe(n) {
    const e = { name: "Maxthon" }, t = v.getFirstMatch(x, n) || v.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/epiphany/i], describe(n) {
    const e = { name: "Epiphany" }, t = v.getFirstMatch(x, n) || v.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/puffin/i], describe(n) {
    const e = { name: "Puffin" }, t = v.getFirstMatch(x, n) || v.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/sleipnir/i], describe(n) {
    const e = { name: "Sleipnir" }, t = v.getFirstMatch(x, n) || v.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/k-meleon/i], describe(n) {
    const e = { name: "K-Meleon" }, t = v.getFirstMatch(x, n) || v.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/micromessenger/i], describe(n) {
    const e = { name: "WeChat" }, t = v.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, n) || v.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/qqbrowser/i], describe(n) {
    const e = { name: /qqbrowserlite/i.test(n) ? "QQ Browser Lite" : "QQ Browser" }, t = v.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, n) || v.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/msie|trident/i], describe(n) {
    const e = { name: "Internet Explorer" }, t = v.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/\sedg\//i], describe(n) {
    const e = { name: "Microsoft Edge" }, t = v.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/edg([ea]|ios)/i], describe(n) {
    const e = { name: "Microsoft Edge" }, t = v.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/vivaldi/i], describe(n) {
    const e = { name: "Vivaldi" }, t = v.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/seamonkey/i], describe(n) {
    const e = { name: "SeaMonkey" }, t = v.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/sailfish/i], describe(n) {
    const e = { name: "Sailfish" }, t = v.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/silk/i], describe(n) {
    const e = { name: "Amazon Silk" }, t = v.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/phantom/i], describe(n) {
    const e = { name: "PhantomJS" }, t = v.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/slimerjs/i], describe(n) {
    const e = { name: "SlimerJS" }, t = v.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe(n) {
    const e = { name: "BlackBerry" }, t = v.getFirstMatch(x, n) || v.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/(web|hpw)[o0]s/i], describe(n) {
    const e = { name: "WebOS Browser" }, t = v.getFirstMatch(x, n) || v.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/bada/i], describe(n) {
    const e = { name: "Bada" }, t = v.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/tizen/i], describe(n) {
    const e = { name: "Tizen" }, t = v.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, n) || v.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/qupzilla/i], describe(n) {
    const e = { name: "QupZilla" }, t = v.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, n) || v.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/firefox|iceweasel|fxios/i], describe(n) {
    const e = { name: "Firefox" }, t = v.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/electron/i], describe(n) {
    const e = { name: "Electron" }, t = v.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/MiuiBrowser/i], describe(n) {
    const e = { name: "Miui" }, t = v.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/chromium/i], describe(n) {
    const e = { name: "Chromium" }, t = v.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, n) || v.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/chrome|crios|crmo/i], describe(n) {
    const e = { name: "Chrome" }, t = v.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/GSA/i], describe(n) {
    const e = { name: "Google Search" }, t = v.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test(n) {
    const e = !n.test(/like android/i), t = n.test(/android/i);
    return e && t;
  }, describe(n) {
    const e = { name: "Android Browser" }, t = v.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/playstation 4/i], describe(n) {
    const e = { name: "PlayStation 4" }, t = v.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/safari|applewebkit/i], describe(n) {
    const e = { name: "Safari" }, t = v.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/.*/i], describe(n) {
    const e = n.search("\\(") !== -1 ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
    return { name: v.getFirstMatch(e, n), version: v.getSecondMatch(e, n) };
  } }];
  var is = [{ test: [/Roku\/DVP/], describe(n) {
    const e = v.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, n);
    return { name: Q.Roku, version: e };
  } }, { test: [/windows phone/i], describe(n) {
    const e = v.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, n);
    return { name: Q.WindowsPhone, version: e };
  } }, { test: [/windows /i], describe(n) {
    const e = v.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, n), t = v.getWindowsVersionName(e);
    return { name: Q.Windows, version: e, versionName: t };
  } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe(n) {
    const e = { name: Q.iOS }, t = v.getSecondMatch(/(Version\/)(\d[\d.]+)/, n);
    return t && (e.version = t), e;
  } }, { test: [/macintosh/i], describe(n) {
    const e = v.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, n).replace(/[_\s]/g, "."), t = v.getMacOSVersionName(e), r = { name: Q.MacOS, version: e };
    return t && (r.versionName = t), r;
  } }, { test: [/(ipod|iphone|ipad)/i], describe(n) {
    const e = v.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, n).replace(/[_\s]/g, ".");
    return { name: Q.iOS, version: e };
  } }, { test(n) {
    const e = !n.test(/like android/i), t = n.test(/android/i);
    return e && t;
  }, describe(n) {
    const e = v.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, n), t = v.getAndroidVersionName(e), r = { name: Q.Android, version: e };
    return t && (r.versionName = t), r;
  } }, { test: [/(web|hpw)[o0]s/i], describe(n) {
    const e = v.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, n), t = { name: Q.WebOS };
    return e && e.length && (t.version = e), t;
  } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe(n) {
    const e = v.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, n) || v.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, n) || v.getFirstMatch(/\bbb(\d+)/i, n);
    return { name: Q.BlackBerry, version: e };
  } }, { test: [/bada/i], describe(n) {
    const e = v.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, n);
    return { name: Q.Bada, version: e };
  } }, { test: [/tizen/i], describe(n) {
    const e = v.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, n);
    return { name: Q.Tizen, version: e };
  } }, { test: [/linux/i], describe: () => ({ name: Q.Linux }) }, { test: [/CrOS/], describe: () => ({ name: Q.ChromeOS }) }, { test: [/PlayStation 4/], describe(n) {
    const e = v.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, n);
    return { name: Q.PlayStation4, version: e };
  } }], os = [{ test: [/googlebot/i], describe: () => ({ type: "bot", vendor: "Google" }) }, { test: [/huawei/i], describe(n) {
    const e = v.getFirstMatch(/(can-l01)/i, n) && "Nova", t = { type: $.mobile, vendor: "Huawei" };
    return e && (t.model = e), t;
  } }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: () => ({ type: $.tablet, vendor: "Nexus" }) }, { test: [/ipad/i], describe: () => ({ type: $.tablet, vendor: "Apple", model: "iPad" }) }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: () => ({ type: $.tablet, vendor: "Apple", model: "iPad" }) }, { test: [/kftt build/i], describe: () => ({ type: $.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" }) }, { test: [/silk/i], describe: () => ({ type: $.tablet, vendor: "Amazon" }) }, { test: [/tablet(?! pc)/i], describe: () => ({ type: $.tablet }) }, { test(n) {
    const e = n.test(/ipod|iphone/i), t = n.test(/like (ipod|iphone)/i);
    return e && !t;
  }, describe(n) {
    const e = v.getFirstMatch(/(ipod|iphone)/i, n);
    return { type: $.mobile, vendor: "Apple", model: e };
  } }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: () => ({ type: $.mobile, vendor: "Nexus" }) }, { test: [/[^-]mobi/i], describe: () => ({ type: $.mobile }) }, { test: (n) => n.getBrowserName(!0) === "blackberry", describe: () => ({ type: $.mobile, vendor: "BlackBerry" }) }, { test: (n) => n.getBrowserName(!0) === "bada", describe: () => ({ type: $.mobile }) }, { test: (n) => n.getBrowserName() === "windows phone", describe: () => ({ type: $.mobile, vendor: "Microsoft" }) }, { test(n) {
    const e = Number(String(n.getOSVersion()).split(".")[0]);
    return n.getOSName(!0) === "android" && e >= 3;
  }, describe: () => ({ type: $.tablet }) }, { test: (n) => n.getOSName(!0) === "android", describe: () => ({ type: $.mobile }) }, { test: (n) => n.getOSName(!0) === "macos", describe: () => ({ type: $.desktop, vendor: "Apple" }) }, { test: (n) => n.getOSName(!0) === "windows", describe: () => ({ type: $.desktop }) }, { test: (n) => n.getOSName(!0) === "linux", describe: () => ({ type: $.desktop }) }, { test: (n) => n.getOSName(!0) === "playstation 4", describe: () => ({ type: $.tv }) }, { test: (n) => n.getOSName(!0) === "roku", describe: () => ({ type: $.tv }) }], as = [{ test: (n) => n.getBrowserName(!0) === "microsoft edge", describe(n) {
    if (/\sedg\//i.test(n))
      return { name: Ee.Blink };
    const e = v.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, n);
    return { name: Ee.EdgeHTML, version: e };
  } }, { test: [/trident/i], describe(n) {
    const e = { name: Ee.Trident }, t = v.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: (n) => n.test(/presto/i), describe(n) {
    const e = { name: Ee.Presto }, t = v.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test(n) {
    const e = n.test(/gecko/i), t = n.test(/like gecko/i);
    return e && !t;
  }, describe(n) {
    const e = { name: Ee.Gecko }, t = v.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/(apple)?webkit\/537\.36/i], describe: () => ({ name: Ee.Blink }) }, { test: [/(apple)?webkit/i], describe(n) {
    const e = { name: Ee.WebKit }, t = v.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }];
  class jr {
    constructor(e, t = !1) {
      if (e == null || e === "")
        throw new Error("UserAgent parameter can't be empty");
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
      const e = v.find(rs, (t) => {
        if (typeof t.test == "function")
          return t.test(this);
        if (t.test instanceof Array)
          return t.test.some((r) => this.test(r));
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
      const e = v.find(is, (t) => {
        if (typeof t.test == "function")
          return t.test(this);
        if (t.test instanceof Array)
          return t.test.some((r) => this.test(r));
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
      const e = v.find(os, (t) => {
        if (typeof t.test == "function")
          return t.test(this);
        if (t.test instanceof Array)
          return t.test.some((r) => this.test(r));
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
      const e = v.find(as, (t) => {
        if (typeof t.test == "function")
          return t.test(this);
        if (t.test instanceof Array)
          return t.test.some((r) => this.test(r));
        throw new Error("Browser's test function is not valid");
      });
      return e && (this.parsedResult.engine = e.describe(this.getUA())), this.parsedResult.engine;
    }
    parse() {
      return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
    }
    getResult() {
      return v.assign({}, this.parsedResult);
    }
    satisfies(e) {
      const t = {};
      let r = 0;
      const i = {};
      let a = 0;
      if (Object.keys(e).forEach((s) => {
        const l = e[s];
        typeof l == "string" ? (i[s] = l, a += 1) : typeof l == "object" && (t[s] = l, r += 1);
      }), r > 0) {
        const s = Object.keys(t), l = v.find(s, (p) => this.isOS(p));
        if (l) {
          const p = this.satisfies(t[l]);
          if (p !== void 0)
            return p;
        }
        const u = v.find(s, (p) => this.isPlatform(p));
        if (u) {
          const p = this.satisfies(t[u]);
          if (p !== void 0)
            return p;
        }
      }
      if (a > 0) {
        const s = Object.keys(i), l = v.find(s, (u) => this.isBrowser(u, !0));
        if (l !== void 0)
          return this.compareVersion(i[l]);
      }
    }
    isBrowser(e, t = !1) {
      const r = this.getBrowserName().toLowerCase();
      let i = e.toLowerCase();
      const a = v.getBrowserTypeByAlias(i);
      return t && a && (i = a.toLowerCase()), i === r;
    }
    compareVersion(e) {
      let t = [0], r = e, i = !1;
      const a = this.getBrowserVersion();
      if (typeof a == "string")
        return e[0] === ">" || e[0] === "<" ? (r = e.substr(1), e[1] === "=" ? (i = !0, r = e.substr(2)) : t = [], e[0] === ">" ? t.push(1) : t.push(-1)) : e[0] === "=" ? r = e.substr(1) : e[0] === "~" && (i = !0, r = e.substr(1)), t.indexOf(v.compareVersions(a, r, i)) > -1;
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
  class ss {
    static getParser(e, t = !1) {
      if (typeof e != "string")
        throw new Error("UserAgent should be a string");
      return new jr(e, t);
    }
    static parse(e) {
      return new jr(e).getResult();
    }
    static get BROWSER_MAP() {
      return eo;
    }
    static get ENGINE_MAP() {
      return Ee;
    }
    static get OS_MAP() {
      return Q;
    }
    static get PLATFORMS_MAP() {
      return $;
    }
  }
  function en() {
    return Date.now() + Math.random().toString();
  }
  function at() {
    throw new Error("Method must be implemented in subclass");
  }
  function to(n) {
    return window._dailyConfig && window._dailyConfig.proxyUrl ? window._dailyConfig.proxyUrl + (window._dailyConfig.proxyUrl.slice(-1) === "/" ? "" : "/") + n.substring(8) : n;
  }
  function $t() {
    return window._dailyConfig && window._dailyConfig.callObjectBundleUrlOverride ? window._dailyConfig.callObjectBundleUrlOverride : to("https://c.daily.co/call-machine/versioned/".concat("0.58.0", "/static/call-machine-object-bundle.js"));
  }
  function mt(n) {
    try {
      new URL(n);
    } catch {
      return !1;
    }
    return !0;
  }
  const no = Object.prototype.toString;
  function ro(n) {
    switch (no.call(n)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
        return !0;
      default:
        return Ve(n, Error);
    }
  }
  function it(n, e) {
    return no.call(n) === `[object ${e}]`;
  }
  function Hn(n) {
    return it(n, "ErrorEvent");
  }
  function Fr(n) {
    return it(n, "DOMError");
  }
  function Ue(n) {
    return it(n, "String");
  }
  function io(n) {
    return n === null || typeof n != "object" && typeof n != "function";
  }
  function tt(n) {
    return it(n, "Object");
  }
  function Gt(n) {
    return typeof Event < "u" && Ve(n, Event);
  }
  function Kn(n) {
    return !!(n && n.then && typeof n.then == "function");
  }
  function Ve(n, e) {
    try {
      return n instanceof e;
    } catch {
      return !1;
    }
  }
  function ze(n, e = 0) {
    return typeof n != "string" || e === 0 || n.length <= e ? n : `${n.slice(0, e)}...`;
  }
  function Br(n, e) {
    if (!Array.isArray(n))
      return "";
    const t = [];
    for (let r = 0; r < n.length; r++) {
      const i = n[r];
      try {
        t.push(String(i));
      } catch {
        t.push("[value cannot be serialized]");
      }
    }
    return t.join(e);
  }
  function cs(n, e, t = !1) {
    return !!Ue(n) && (it(e, "RegExp") ? e.test(n) : !!Ue(e) && (t ? n === e : n.includes(e)));
  }
  function St(n, e = [], t = !1) {
    return e.some((r) => cs(n, r, t));
  }
  function ls(n, e, t = 250, r, i, a, s) {
    if (!(a.exception && a.exception.values && s && Ve(s.originalException, Error)))
      return;
    const l = a.exception.values.length > 0 ? a.exception.values[a.exception.values.length - 1] : void 0;
    var u, p;
    l && (a.exception.values = (u = wn(n, e, i, s.originalException, r, a.exception.values, l, 0), p = t, u.map((h) => (h.value && (h.value = ze(h.value, p)), h))));
  }
  function wn(n, e, t, r, i, a, s, l) {
    if (a.length >= t + 1)
      return a;
    let u = [...a];
    if (Ve(r[i], Error)) {
      Ur(s, l);
      const p = n(e, r[i]), h = u.length;
      Vr(p, i, h, l), u = wn(n, e, t, r[i], i, [p, ...u], p, h);
    }
    return Array.isArray(r.errors) && r.errors.forEach((p, h) => {
      if (Ve(p, Error)) {
        Ur(s, l);
        const m = n(e, p), y = u.length;
        Vr(m, `errors[${h}]`, y, l), u = wn(n, e, t, p, i, [m, ...u], m, y);
      }
    }), u;
  }
  function Ur(n, e) {
    n.mechanism = n.mechanism || { type: "generic", handled: !0 }, n.mechanism = { ...n.mechanism, is_exception_group: !0, exception_id: e };
  }
  function Vr(n, e, t, r) {
    n.mechanism = n.mechanism || { type: "generic", handled: !0 }, n.mechanism = { ...n.mechanism, type: "chained", source: e, exception_id: t, parent_id: r };
  }
  function Et(n) {
    return n && n.Math == Math ? n : void 0;
  }
  const ie = typeof globalThis == "object" && Et(globalThis) || typeof window == "object" && Et(window) || typeof self == "object" && Et(self) || typeof global == "object" && Et(global) || /* @__PURE__ */ function() {
    return this;
  }() || {};
  function wt() {
    return ie;
  }
  function Qn(n, e, t) {
    const r = t || ie, i = r.__SENTRY__ = r.__SENTRY__ || {};
    return i[n] || (i[n] = e());
  }
  const us = wt(), ds = 80;
  function Sn(n, e = {}) {
    try {
      let t = n;
      const r = 5, i = [];
      let a = 0, s = 0;
      const l = " > ", u = l.length;
      let p;
      const h = Array.isArray(e) ? e : e.keyAttrs, m = !Array.isArray(e) && e.maxStringLength || ds;
      for (; t && a++ < r && (p = hs(t, h), !(p === "html" || a > 1 && s + i.length * u + p.length >= m)); )
        i.push(p), s += p.length, t = t.parentNode;
      return i.reverse().join(l);
    } catch {
      return "<unknown>";
    }
  }
  function hs(n, e) {
    const t = n, r = [];
    let i, a, s, l, u;
    if (!t || !t.tagName)
      return "";
    r.push(t.tagName.toLowerCase());
    const p = e && e.length ? e.filter((m) => t.getAttribute(m)).map((m) => [m, t.getAttribute(m)]) : null;
    if (p && p.length)
      p.forEach((m) => {
        r.push(`[${m[0]}="${m[1]}"]`);
      });
    else if (t.id && r.push(`#${t.id}`), i = t.className, i && Ue(i))
      for (a = i.split(/\s+/), u = 0; u < a.length; u++)
        r.push(`.${a[u]}`);
    const h = ["aria-label", "type", "name", "title", "alt"];
    for (u = 0; u < h.length; u++)
      s = h[u], l = t.getAttribute(s), l && r.push(`[${s}="${l}"]`);
    return r.join("");
  }
  const qt = ["debug", "info", "warn", "error", "log", "assert", "trace"];
  function oo(n) {
    if (!("console" in ie))
      return n();
    const e = ie.console, t = {};
    qt.forEach((r) => {
      const i = e[r] && e[r].__sentry_original__;
      r in e && i && (t[r] = e[r], e[r] = i);
    });
    try {
      return n();
    } finally {
      Object.keys(t).forEach((r) => {
        e[r] = t[r];
      });
    }
  }
  function Yr() {
    let n = !1;
    const e = { enable: () => {
      n = !0;
    }, disable: () => {
      n = !1;
    } };
    return typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? qt.forEach((t) => {
      e[t] = (...r) => {
        n && oo(() => {
          ie.console[t](`Sentry Logger [${t}]:`, ...r);
        });
      };
    }) : qt.forEach((t) => {
      e[t] = () => {
      };
    }), e;
  }
  let L;
  L = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? Qn("logger", Yr) : Yr();
  const ps = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
  function Jt(n, e = !1) {
    const { host: t, path: r, pass: i, port: a, projectId: s, protocol: l, publicKey: u } = n;
    return `${l}://${u}${e && i ? `:${i}` : ""}@${t}${a ? `:${a}` : ""}/${r && `${r}/`}${s}`;
  }
  function $r(n) {
    return { protocol: n.protocol, publicKey: n.publicKey || "", pass: n.pass || "", host: n.host, port: n.port || "", path: n.path || "", projectId: n.projectId };
  }
  function fs(n) {
    const e = typeof n == "string" ? function(t) {
      const r = ps.exec(t);
      if (!r)
        return void console.error(`Invalid Sentry Dsn: ${t}`);
      const [i, a, s = "", l, u = "", p] = r.slice(1);
      let h = "", m = p;
      const y = m.split("/");
      if (y.length > 1 && (h = y.slice(0, -1).join("/"), m = y.pop()), m) {
        const S = m.match(/^\d+/);
        S && (m = S[0]);
      }
      return $r({ host: l, pass: s, path: h, projectId: m, port: u, protocol: i, publicKey: a });
    }(n) : $r(n);
    if (e && function(t) {
      if (typeof __SENTRY_DEBUG__ < "u" && !__SENTRY_DEBUG__)
        return !0;
      const { port: r, projectId: i, protocol: a } = t;
      return !(["protocol", "publicKey", "host", "projectId"].find((s) => !t[s] && (L.error(`Invalid Sentry Dsn: ${s} missing`), !0)) || (i.match(/^\d+$/) ? /* @__PURE__ */ function(s) {
        return s === "http" || s === "https";
      }(a) ? r && isNaN(parseInt(r, 10)) && (L.error(`Invalid Sentry Dsn: Invalid port ${r}`), 1) : (L.error(`Invalid Sentry Dsn: Invalid protocol ${a}`), 1) : (L.error(`Invalid Sentry Dsn: Invalid projectId ${i}`), 1)));
    }(e))
      return e;
  }
  class ae extends Error {
    constructor(e, t = "warn") {
      super(e), this.message = e, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = t;
    }
  }
  function W(n, e, t) {
    if (!(e in n))
      return;
    const r = n[e], i = t(r);
    if (typeof i == "function")
      try {
        ao(i, r);
      } catch {
      }
    n[e] = i;
  }
  function Xn(n, e, t) {
    Object.defineProperty(n, e, { value: t, writable: !0, configurable: !0 });
  }
  function ao(n, e) {
    const t = e.prototype || {};
    n.prototype = e.prototype = t, Xn(n, "__sentry_original__", e);
  }
  function Zn(n) {
    return n.__sentry_original__;
  }
  function so(n) {
    if (ro(n))
      return { message: n.message, name: n.name, stack: n.stack, ...qr(n) };
    if (Gt(n)) {
      const e = { type: n.type, target: Gr(n.target), currentTarget: Gr(n.currentTarget), ...qr(n) };
      return typeof CustomEvent < "u" && Ve(n, CustomEvent) && (e.detail = n.detail), e;
    }
    return n;
  }
  function Gr(n) {
    try {
      return e = n, typeof Element < "u" && Ve(e, Element) ? Sn(n) : Object.prototype.toString.call(n);
    } catch {
      return "<unknown>";
    }
    var e;
  }
  function qr(n) {
    if (typeof n == "object" && n !== null) {
      const e = {};
      for (const t in n)
        Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
      return e;
    }
    return {};
  }
  function tn(n) {
    return En(n, /* @__PURE__ */ new Map());
  }
  function En(n, e) {
    if (tt(n)) {
      const t = e.get(n);
      if (t !== void 0)
        return t;
      const r = {};
      e.set(n, r);
      for (const i of Object.keys(n))
        n[i] !== void 0 && (r[i] = En(n[i], e));
      return r;
    }
    if (Array.isArray(n)) {
      const t = e.get(n);
      if (t !== void 0)
        return t;
      const r = [];
      return e.set(n, r), n.forEach((i) => {
        r.push(En(i, e));
      }), r;
    }
    return n;
  }
  const Jr = "<anonymous>";
  function Oe(n) {
    try {
      return n && typeof n == "function" && n.name || Jr;
    } catch {
      return Jr;
    }
  }
  const cn = wt();
  function kn(n) {
    return n && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(n.toString());
  }
  function ms() {
    if (!function() {
      if (!("fetch" in cn))
        return !1;
      try {
        return new Headers(), new Request("http://www.example.com"), new Response(), !0;
      } catch {
        return !1;
      }
    }())
      return !1;
    if (kn(cn.fetch))
      return !0;
    let n = !1;
    const e = cn.document;
    if (e && typeof e.createElement == "function")
      try {
        const t = e.createElement("iframe");
        t.hidden = !0, e.head.appendChild(t), t.contentWindow && t.contentWindow.fetch && (n = kn(t.contentWindow.fetch)), e.head.removeChild(t);
      } catch (t) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t);
      }
    return n;
  }
  const kt = wt(), U = wt(), ut = "__sentry_xhr_v2__", ht = {}, Wr = {};
  function gs(n) {
    if (!Wr[n])
      switch (Wr[n] = !0, n) {
        case "console":
          (function() {
            "console" in U && qt.forEach(function(e) {
              e in U.console && W(U.console, e, function(t) {
                return function(...r) {
                  oe("console", { args: r, level: e }), t && t.apply(U.console, r);
                };
              });
            });
          })();
          break;
        case "dom":
          (function() {
            if (!("document" in U))
              return;
            const e = oe.bind(null, "dom"), t = Hr(e, !0);
            U.document.addEventListener("click", t, !1), U.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach((r) => {
              const i = U[r] && U[r].prototype;
              i && i.hasOwnProperty && i.hasOwnProperty("addEventListener") && (W(i, "addEventListener", function(a) {
                return function(s, l, u) {
                  if (s === "click" || s == "keypress")
                    try {
                      const p = this, h = p.__sentry_instrumentation_handlers__ = p.__sentry_instrumentation_handlers__ || {}, m = h[s] = h[s] || { refCount: 0 };
                      if (!m.handler) {
                        const y = Hr(e);
                        m.handler = y, a.call(this, s, y, u);
                      }
                      m.refCount++;
                    } catch {
                    }
                  return a.call(this, s, l, u);
                };
              }), W(i, "removeEventListener", function(a) {
                return function(s, l, u) {
                  if (s === "click" || s == "keypress")
                    try {
                      const p = this, h = p.__sentry_instrumentation_handlers__ || {}, m = h[s];
                      m && (m.refCount--, m.refCount <= 0 && (a.call(this, s, m.handler, u), m.handler = void 0, delete h[s]), Object.keys(h).length === 0 && delete p.__sentry_instrumentation_handlers__);
                    } catch {
                    }
                  return a.call(this, s, l, u);
                };
              }));
            });
          })();
          break;
        case "xhr":
          (function() {
            if (!("XMLHttpRequest" in U))
              return;
            const e = XMLHttpRequest.prototype;
            W(e, "open", function(t) {
              return function(...r) {
                const i = r[1], a = this[ut] = { method: Ue(r[0]) ? r[0].toUpperCase() : r[0], url: r[1], request_headers: {} };
                Ue(i) && a.method === "POST" && i.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                const s = () => {
                  const l = this[ut];
                  if (l && this.readyState === 4) {
                    try {
                      l.status_code = this.status;
                    } catch {
                    }
                    oe("xhr", { args: r, endTimestamp: Date.now(), startTimestamp: Date.now(), xhr: this });
                  }
                };
                return "onreadystatechange" in this && typeof this.onreadystatechange == "function" ? W(this, "onreadystatechange", function(l) {
                  return function(...u) {
                    return s(), l.apply(this, u);
                  };
                }) : this.addEventListener("readystatechange", s), W(this, "setRequestHeader", function(l) {
                  return function(...u) {
                    const [p, h] = u, m = this[ut];
                    return m && (m.request_headers[p.toLowerCase()] = h), l.apply(this, u);
                  };
                }), t.apply(this, r);
              };
            }), W(e, "send", function(t) {
              return function(...r) {
                const i = this[ut];
                return i && r[0] !== void 0 && (i.body = r[0]), oe("xhr", { args: r, startTimestamp: Date.now(), xhr: this }), t.apply(this, r);
              };
            });
          })();
          break;
        case "fetch":
          (function() {
            ms() && W(U, "fetch", function(e) {
              return function(...t) {
                const { method: r, url: i } = function(s) {
                  if (s.length === 0)
                    return { method: "GET", url: "" };
                  if (s.length === 2) {
                    const [u, p] = s;
                    return { url: zr(u), method: Tn(p, "method") ? String(p.method).toUpperCase() : "GET" };
                  }
                  const l = s[0];
                  return { url: zr(l), method: Tn(l, "method") ? String(l.method).toUpperCase() : "GET" };
                }(t), a = { args: t, fetchData: { method: r, url: i }, startTimestamp: Date.now() };
                return oe("fetch", { ...a }), e.apply(U, t).then((s) => (oe("fetch", { ...a, endTimestamp: Date.now(), response: s }), s), (s) => {
                  throw oe("fetch", { ...a, endTimestamp: Date.now(), error: s }), s;
                });
              };
            });
          })();
          break;
        case "history":
          (function() {
            if (!function() {
              const r = kt.chrome, i = r && r.app && r.app.runtime, a = "history" in kt && !!kt.history.pushState && !!kt.history.replaceState;
              return !i && a;
            }())
              return;
            const e = U.onpopstate;
            function t(r) {
              return function(...i) {
                const a = i.length > 2 ? i[2] : void 0;
                if (a) {
                  const s = Tt, l = String(a);
                  Tt = l, oe("history", { from: s, to: l });
                }
                return r.apply(this, i);
              };
            }
            U.onpopstate = function(...r) {
              const i = U.location.href, a = Tt;
              if (Tt = i, oe("history", { from: a, to: i }), e)
                try {
                  return e.apply(this, r);
                } catch {
                }
            }, W(U.history, "pushState", t), W(U.history, "replaceState", t);
          })();
          break;
        case "error":
          Mt = U.onerror, U.onerror = function(e, t, r, i, a) {
            return oe("error", { column: i, error: a, line: r, msg: e, url: t }), !(!Mt || Mt.__SENTRY_LOADER__) && Mt.apply(this, arguments);
          }, U.onerror.__SENTRY_INSTRUMENTED__ = !0;
          break;
        case "unhandledrejection":
          At = U.onunhandledrejection, U.onunhandledrejection = function(e) {
            return oe("unhandledrejection", e), !(At && !At.__SENTRY_LOADER__) || At.apply(this, arguments);
          }, U.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
          break;
        default:
          return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn("unknown instrumentation type:", n));
      }
  }
  function Re(n, e) {
    ht[n] = ht[n] || [], ht[n].push(e), gs(n);
  }
  function oe(n, e) {
    if (n && ht[n])
      for (const t of ht[n] || [])
        try {
          t(e);
        } catch (r) {
          (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.error(`Error while triggering instrumentation handler.
Type: ${n}
Name: ${Oe(t)}
Error:`, r);
        }
  }
  function Tn(n, e) {
    return !!n && typeof n == "object" && !!n[e];
  }
  function zr(n) {
    return typeof n == "string" ? n : n ? Tn(n, "url") ? n.url : n.toString ? n.toString() : "" : "";
  }
  let Tt;
  const vs = 1e3;
  let Ct, ln;
  function Hr(n, e = !1) {
    return (t) => {
      if (!t || ln === t || function(i) {
        if (i.type !== "keypress")
          return !1;
        try {
          const a = i.target;
          if (!a || !a.tagName)
            return !0;
          if (a.tagName === "INPUT" || a.tagName === "TEXTAREA" || a.isContentEditable)
            return !1;
        } catch {
        }
        return !0;
      }(t))
        return;
      const r = t.type === "keypress" ? "input" : t.type;
      (Ct === void 0 || function(i, a) {
        if (!i || i.type !== a.type)
          return !0;
        try {
          if (i.target !== a.target)
            return !0;
        } catch {
        }
        return !1;
      }(ln, t)) && (n({ event: t, name: r, global: e }), ln = t), clearTimeout(Ct), Ct = U.setTimeout(() => {
        Ct = void 0;
      }, vs);
    };
  }
  let Mt = null, At = null;
  function Me() {
    const n = ie, e = n.crypto || n.msCrypto;
    if (e && e.randomUUID)
      return e.randomUUID().replace(/-/g, "");
    const t = e && e.getRandomValues ? () => e.getRandomValues(new Uint8Array(1))[0] : () => 16 * Math.random();
    return ("10000000100040008000" + 1e11).replace(/[018]/g, (r) => (r ^ (15 & t()) >> r / 4).toString(16));
  }
  function co(n) {
    return n.exception && n.exception.values ? n.exception.values[0] : void 0;
  }
  function Te(n) {
    const { message: e, event_id: t } = n;
    if (e)
      return e;
    const r = co(n);
    return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || t || "<unknown>" : t || "<unknown>";
  }
  function Cn(n, e, t) {
    const r = n.exception = n.exception || {}, i = r.values = r.values || [], a = i[0] = i[0] || {};
    a.value || (a.value = e || ""), a.type || (a.type = t || "Error");
  }
  function gt(n, e) {
    const t = co(n);
    if (!t)
      return;
    const r = t.mechanism;
    if (t.mechanism = { type: "generic", handled: !0, ...r, ...e }, e && "data" in e) {
      const i = { ...r && r.data, ...e.data };
      t.mechanism.data = i;
    }
  }
  function Kr(n) {
    if (n && n.__sentry_captured__)
      return !0;
    try {
      Xn(n, "__sentry_captured__", !0);
    } catch {
    }
    return !1;
  }
  function Ce(n, e = 100, t = 1 / 0) {
    try {
      return Mn("", n, e, t);
    } catch (r) {
      return { ERROR: `**non-serializable** (${r})` };
    }
  }
  function lo(n, e = 3, t = 102400) {
    const r = Ce(n, e);
    return i = r, function(a) {
      return ~-encodeURI(a).split(/%..|./).length;
    }(JSON.stringify(i)) > t ? lo(n, e - 1, t) : r;
    var i;
  }
  function Mn(n, e, t = 1 / 0, r = 1 / 0, i = /* @__PURE__ */ function() {
    const a = typeof WeakSet == "function", s = a ? /* @__PURE__ */ new WeakSet() : [];
    return [function(l) {
      if (a)
        return !!s.has(l) || (s.add(l), !1);
      for (let u = 0; u < s.length; u++)
        if (s[u] === l)
          return !0;
      return s.push(l), !1;
    }, function(l) {
      if (a)
        s.delete(l);
      else
        for (let u = 0; u < s.length; u++)
          if (s[u] === l) {
            s.splice(u, 1);
            break;
          }
    }];
  }()) {
    const [a, s] = i;
    if (e == null || ["number", "boolean", "string"].includes(typeof e) && (typeof (l = e) != "number" || l == l))
      return e;
    var l;
    const u = function(b, w) {
      try {
        if (b === "domain" && w && typeof w == "object" && w._events)
          return "[Domain]";
        if (b === "domainEmitter")
          return "[DomainEmitter]";
        if (typeof global < "u" && w === global)
          return "[Global]";
        if (typeof window < "u" && w === window)
          return "[Window]";
        if (typeof document < "u" && w === document)
          return "[Document]";
        if (function(O) {
          return tt(O) && "nativeEvent" in O && "preventDefault" in O && "stopPropagation" in O;
        }(w))
          return "[SyntheticEvent]";
        if (typeof w == "number" && w != w)
          return "[NaN]";
        if (typeof w == "function")
          return `[Function: ${Oe(w)}]`;
        if (typeof w == "symbol")
          return `[${String(w)}]`;
        if (typeof w == "bigint")
          return `[BigInt: ${String(w)}]`;
        const T = function(O) {
          const Y = Object.getPrototypeOf(O);
          return Y ? Y.constructor.name : "null prototype";
        }(w);
        return /^HTML(\w*)Element$/.test(T) ? `[HTMLElement: ${T}]` : `[object ${T}]`;
      } catch (T) {
        return `**non-serializable** (${T})`;
      }
    }(n, e);
    if (!u.startsWith("[object "))
      return u;
    if (e.__sentry_skip_normalization__)
      return e;
    const p = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : t;
    if (p === 0)
      return u.replace("object ", "");
    if (a(e))
      return "[Circular ~]";
    const h = e;
    if (h && typeof h.toJSON == "function")
      try {
        return Mn("", h.toJSON(), p - 1, r, i);
      } catch {
      }
    const m = Array.isArray(e) ? [] : {};
    let y = 0;
    const S = so(e);
    for (const b in S) {
      if (!Object.prototype.hasOwnProperty.call(S, b))
        continue;
      if (y >= r) {
        m[b] = "[MaxProperties ~]";
        break;
      }
      const w = S[b];
      m[b] = Mn(b, w, p - 1, r, i), y++;
    }
    return s(e), m;
  }
  var be;
  function Ye(n) {
    return new X((e) => {
      e(n);
    });
  }
  function Wt(n) {
    return new X((e, t) => {
      t(n);
    });
  }
  (function(n) {
    n[n.PENDING = 0] = "PENDING", n[n.RESOLVED = 1] = "RESOLVED", n[n.REJECTED = 2] = "REJECTED";
  })(be || (be = {}));
  class X {
    __init() {
      this._state = be.PENDING;
    }
    __init2() {
      this._handlers = [];
    }
    constructor(e) {
      X.prototype.__init.call(this), X.prototype.__init2.call(this), X.prototype.__init3.call(this), X.prototype.__init4.call(this), X.prototype.__init5.call(this), X.prototype.__init6.call(this);
      try {
        e(this._resolve, this._reject);
      } catch (t) {
        this._reject(t);
      }
    }
    then(e, t) {
      return new X((r, i) => {
        this._handlers.push([!1, (a) => {
          if (e)
            try {
              r(e(a));
            } catch (s) {
              i(s);
            }
          else
            r(a);
        }, (a) => {
          if (t)
            try {
              r(t(a));
            } catch (s) {
              i(s);
            }
          else
            i(a);
        }]), this._executeHandlers();
      });
    }
    catch(e) {
      return this.then((t) => t, e);
    }
    finally(e) {
      return new X((t, r) => {
        let i, a;
        return this.then((s) => {
          a = !1, i = s, e && e();
        }, (s) => {
          a = !0, i = s, e && e();
        }).then(() => {
          a ? r(i) : t(i);
        });
      });
    }
    __init3() {
      this._resolve = (e) => {
        this._setResult(be.RESOLVED, e);
      };
    }
    __init4() {
      this._reject = (e) => {
        this._setResult(be.REJECTED, e);
      };
    }
    __init5() {
      this._setResult = (e, t) => {
        this._state === be.PENDING && (Kn(t) ? t.then(this._resolve, this._reject) : (this._state = e, this._value = t, this._executeHandlers()));
      };
    }
    __init6() {
      this._executeHandlers = () => {
        if (this._state === be.PENDING)
          return;
        const e = this._handlers.slice();
        this._handlers = [], e.forEach((t) => {
          t[0] || (this._state === be.RESOLVED && t[1](this._value), this._state === be.REJECTED && t[2](this._value), t[0] = !0);
        });
      };
    }
  }
  function _s(n) {
    const e = [];
    function t(r) {
      return e.splice(e.indexOf(r), 1)[0];
    }
    return { $: e, add: function(r) {
      if (!(n === void 0 || e.length < n))
        return Wt(new ae("Not adding Promise because buffer limit was reached."));
      const i = r();
      return e.indexOf(i) === -1 && e.push(i), i.then(() => t(i)).then(null, () => t(i).then(null, () => {
      })), i;
    }, drain: function(r) {
      return new X((i, a) => {
        let s = e.length;
        if (!s)
          return i(!0);
        const l = setTimeout(() => {
          r && r > 0 && i(!1);
        }, r);
        e.forEach((u) => {
          Ye(u).then(() => {
            --s || (clearTimeout(l), i(!0));
          }, a);
        });
      });
    } };
  }
  function un(n) {
    if (!n)
      return {};
    const e = n.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!e)
      return {};
    const t = e[6] || "", r = e[8] || "";
    return { host: e[4], path: e[5], protocol: e[2], search: t, hash: r, relative: e[5] + t + r };
  }
  const ys = ["fatal", "error", "warning", "log", "info", "debug"], uo = wt(), An = { nowSeconds: () => Date.now() / 1e3 }, dn = typeof __SENTRY_BROWSER_BUNDLE__ < "u" && __SENTRY_BROWSER_BUNDLE__ || Object.prototype.toString.call(typeof process < "u" ? process : 0) !== "[object process]" ? function() {
    const { performance: n } = uo;
    if (!(!n || !n.now))
      return { now: () => n.now(), timeOrigin: Date.now() - n.now() };
  }() : function() {
    try {
      return (n = Ja, e = "perf_hooks", n.require(e)).performance;
    } catch {
      return;
    }
    var n, e;
  }(), Qr = dn === void 0 ? An : { nowSeconds: () => (dn.timeOrigin + dn.now()) / 1e3 }, nn = An.nowSeconds.bind(An), ho = Qr.nowSeconds.bind(Qr);
  function vt(n, e = []) {
    return [n, e];
  }
  function bs(n, e) {
    const [t, r] = n;
    return [t, [...r, e]];
  }
  function Xr(n, e) {
    const t = n[1];
    for (const r of t)
      if (e(r, r[0].type))
        return !0;
    return !1;
  }
  function On(n, e) {
    return (e || new TextEncoder()).encode(n);
  }
  function ws(n, e) {
    const [t, r] = n;
    let i = JSON.stringify(t);
    function a(s) {
      typeof i == "string" ? i = typeof s == "string" ? i + s : [On(i, e), s] : i.push(typeof s == "string" ? On(s, e) : s);
    }
    for (const s of r) {
      const [l, u] = s;
      if (a(`
${JSON.stringify(l)}
`), typeof u == "string" || u instanceof Uint8Array)
        a(u);
      else {
        let p;
        try {
          p = JSON.stringify(u);
        } catch {
          p = JSON.stringify(Ce(u));
        }
        a(p);
      }
    }
    return typeof i == "string" ? i : function(s) {
      const l = s.reduce((h, m) => h + m.length, 0), u = new Uint8Array(l);
      let p = 0;
      for (const h of s)
        u.set(h, p), p += h.length;
      return u;
    }(i);
  }
  function Ss(n, e) {
    const t = typeof n.data == "string" ? On(n.data, e) : n.data;
    return [tn({ type: "attachment", length: t.length, filename: n.filename, content_type: n.contentType, attachment_type: n.attachmentType }), t];
  }
  (() => {
    const { performance: n } = uo;
    if (!n || !n.now)
      return;
    const e = 36e5, t = n.now(), r = Date.now(), i = n.timeOrigin ? Math.abs(n.timeOrigin + t - r) : e, a = i < e, s = n.timing && n.timing.navigationStart, l = typeof s == "number" ? Math.abs(s + t - r) : e;
    (a || l < e) && i <= l && n.timeOrigin;
  })();
  const Es = { session: "session", sessions: "session", attachment: "attachment", transaction: "transaction", event: "error", client_report: "internal", user_report: "default", profile: "profile", replay_event: "replay", replay_recording: "replay", check_in: "monitor" };
  function Zr(n) {
    return Es[n];
  }
  function po(n) {
    if (!n || !n.sdk)
      return;
    const { name: e, version: t } = n.sdk;
    return { name: e, version: t };
  }
  const ks = 6e4;
  function Ts(n, { statusCode: e, headers: t }, r = Date.now()) {
    const i = { ...n }, a = t && t["x-sentry-rate-limits"], s = t && t["retry-after"];
    if (a)
      for (const l of a.trim().split(",")) {
        const [u, p] = l.split(":", 2), h = parseInt(u, 10), m = 1e3 * (isNaN(h) ? 60 : h);
        if (p)
          for (const y of p.split(";"))
            i[y] = r + m;
        else
          i.all = r + m;
      }
    else
      s ? i.all = r + function(l, u = Date.now()) {
        const p = parseInt(`${l}`, 10);
        if (!isNaN(p))
          return 1e3 * p;
        const h = Date.parse(`${l}`);
        return isNaN(h) ? ks : h - u;
      }(s, r) : e === 429 && (i.all = r + 6e4);
    return i;
  }
  const er = "production";
  function Cs(n) {
    const e = ho(), t = { sid: Me(), init: !0, timestamp: e, started: e, duration: 0, status: "ok", errors: 0, ignoreDuration: !1, toJSON: () => function(r) {
      return tn({ sid: `${r.sid}`, init: r.init, started: new Date(1e3 * r.started).toISOString(), timestamp: new Date(1e3 * r.timestamp).toISOString(), status: r.status, errors: r.errors, did: typeof r.did == "number" || typeof r.did == "string" ? `${r.did}` : void 0, duration: r.duration, attrs: { release: r.release, environment: r.environment, ip_address: r.ipAddress, user_agent: r.userAgent } });
    }(t) };
    return n && nt(t, n), t;
  }
  function nt(n, e = {}) {
    if (e.user && (!n.ipAddress && e.user.ip_address && (n.ipAddress = e.user.ip_address), n.did || e.did || (n.did = e.user.id || e.user.email || e.user.username)), n.timestamp = e.timestamp || ho(), e.ignoreDuration && (n.ignoreDuration = e.ignoreDuration), e.sid && (n.sid = e.sid.length === 32 ? e.sid : Me()), e.init !== void 0 && (n.init = e.init), !n.did && e.did && (n.did = `${e.did}`), typeof e.started == "number" && (n.started = e.started), n.ignoreDuration)
      n.duration = void 0;
    else if (typeof e.duration == "number")
      n.duration = e.duration;
    else {
      const t = n.timestamp - n.started;
      n.duration = t >= 0 ? t : 0;
    }
    e.release && (n.release = e.release), e.environment && (n.environment = e.environment), !n.ipAddress && e.ipAddress && (n.ipAddress = e.ipAddress), !n.userAgent && e.userAgent && (n.userAgent = e.userAgent), typeof e.errors == "number" && (n.errors = e.errors), e.status && (n.status = e.status);
  }
  class Fe {
    constructor() {
      this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = ei();
    }
    static clone(e) {
      const t = new Fe();
      return e && (t._breadcrumbs = [...e._breadcrumbs], t._tags = { ...e._tags }, t._extra = { ...e._extra }, t._contexts = { ...e._contexts }, t._user = e._user, t._level = e._level, t._span = e._span, t._session = e._session, t._transactionName = e._transactionName, t._fingerprint = e._fingerprint, t._eventProcessors = [...e._eventProcessors], t._requestSession = e._requestSession, t._attachments = [...e._attachments], t._sdkProcessingMetadata = { ...e._sdkProcessingMetadata }, t._propagationContext = { ...e._propagationContext }), t;
    }
    addScopeListener(e) {
      this._scopeListeners.push(e);
    }
    addEventProcessor(e) {
      return this._eventProcessors.push(e), this;
    }
    setUser(e) {
      return this._user = e || {}, this._session && nt(this._session, { user: e }), this._notifyScopeListeners(), this;
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
    setSpan(e) {
      return this._span = e, this._notifyScopeListeners(), this;
    }
    getSpan() {
      return this._span;
    }
    getTransaction() {
      const e = this.getSpan();
      return e && e.transaction;
    }
    setSession(e) {
      return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this;
    }
    getSession() {
      return this._session;
    }
    update(e) {
      if (!e)
        return this;
      if (typeof e == "function") {
        const t = e(this);
        return t instanceof Fe ? t : this;
      }
      return e instanceof Fe ? (this._tags = { ...this._tags, ...e._tags }, this._extra = { ...this._extra, ...e._extra }, this._contexts = { ...this._contexts, ...e._contexts }, e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession), e._propagationContext && (this._propagationContext = e._propagationContext)) : tt(e) && (this._tags = { ...this._tags, ...e.tags }, this._extra = { ...this._extra, ...e.extra }, this._contexts = { ...this._contexts, ...e.contexts }, e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession), e.propagationContext && (this._propagationContext = e.propagationContext)), this;
    }
    clear() {
      return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = ei(), this;
    }
    addBreadcrumb(e, t) {
      const r = typeof t == "number" ? t : 100;
      if (r <= 0)
        return this;
      const i = { timestamp: nn(), ...e };
      return this._breadcrumbs = [...this._breadcrumbs, i].slice(-r), this._notifyScopeListeners(), this;
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
    getAttachments() {
      return this._attachments;
    }
    clearAttachments() {
      return this._attachments = [], this;
    }
    applyToEvent(e, t = {}) {
      if (this._extra && Object.keys(this._extra).length && (e.extra = { ...this._extra, ...e.extra }), this._tags && Object.keys(this._tags).length && (e.tags = { ...this._tags, ...e.tags }), this._user && Object.keys(this._user).length && (e.user = { ...this._user, ...e.user }), this._contexts && Object.keys(this._contexts).length && (e.contexts = { ...this._contexts, ...e.contexts }), this._level && (e.level = this._level), this._transactionName && (e.transaction = this._transactionName), this._span) {
        e.contexts = { trace: this._span.getTraceContext(), ...e.contexts };
        const r = this._span.transaction;
        if (r) {
          e.sdkProcessingMetadata = { dynamicSamplingContext: r.getDynamicSamplingContext(), ...e.sdkProcessingMetadata };
          const i = r.name;
          i && (e.tags = { transaction: i, ...e.tags });
        }
      }
      return this._applyFingerprint(e), e.breadcrumbs = [...e.breadcrumbs || [], ...this._breadcrumbs], e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0, e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...this._sdkProcessingMetadata, propagationContext: this._propagationContext }, this._notifyEventProcessors([...fo(), ...this._eventProcessors], e, t);
    }
    setSDKProcessingMetadata(e) {
      return this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...e }, this;
    }
    setPropagationContext(e) {
      return this._propagationContext = e, this;
    }
    getPropagationContext() {
      return this._propagationContext;
    }
    _notifyEventProcessors(e, t, r, i = 0) {
      return new X((a, s) => {
        const l = e[i];
        if (t === null || typeof l != "function")
          a(t);
        else {
          const u = l({ ...t }, r);
          (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && l.id && u === null && L.log(`Event processor "${l.id}" dropped event`), Kn(u) ? u.then((p) => this._notifyEventProcessors(e, p, r, i + 1).then(a)).then(null, s) : this._notifyEventProcessors(e, u, r, i + 1).then(a).then(null, s);
        }
      });
    }
    _notifyScopeListeners() {
      this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((e) => {
        e(this);
      }), this._notifyingListeners = !1);
    }
    _applyFingerprint(e) {
      var t;
      e.fingerprint = e.fingerprint ? (t = e.fingerprint, Array.isArray(t) ? t : [t]) : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
    }
  }
  function fo() {
    return Qn("globalEventProcessors", () => []);
  }
  function mo(n) {
    fo().push(n);
  }
  function ei() {
    return { traceId: Me(), spanId: Me().substring(16), sampled: !1 };
  }
  const go = 4, Ms = 100;
  class tr {
    constructor(e, t = new Fe(), r = go) {
      this._version = r, this._stack = [{ scope: t }], e && this.bindClient(e);
    }
    isOlderThan(e) {
      return this._version < e;
    }
    bindClient(e) {
      this.getStackTop().client = e, e && e.setupIntegrations && e.setupIntegrations();
    }
    pushScope() {
      const e = Fe.clone(this.getScope());
      return this.getStack().push({ client: this.getClient(), scope: e }), e;
    }
    popScope() {
      return !(this.getStack().length <= 1) && !!this.getStack().pop();
    }
    withScope(e) {
      const t = this.pushScope();
      try {
        e(t);
      } finally {
        this.popScope();
      }
    }
    getClient() {
      return this.getStackTop().client;
    }
    getScope() {
      return this.getStackTop().scope;
    }
    getStack() {
      return this._stack;
    }
    getStackTop() {
      return this._stack[this._stack.length - 1];
    }
    captureException(e, t) {
      const r = this._lastEventId = t && t.event_id ? t.event_id : Me(), i = new Error("Sentry syntheticException");
      return this._withClient((a, s) => {
        a.captureException(e, { originalException: e, syntheticException: i, ...t, event_id: r }, s);
      }), r;
    }
    captureMessage(e, t, r) {
      const i = this._lastEventId = r && r.event_id ? r.event_id : Me(), a = new Error(e);
      return this._withClient((s, l) => {
        s.captureMessage(e, t, { originalException: e, syntheticException: a, ...r, event_id: i }, l);
      }), i;
    }
    captureEvent(e, t) {
      const r = t && t.event_id ? t.event_id : Me();
      return e.type || (this._lastEventId = r), this._withClient((i, a) => {
        i.captureEvent(e, { ...t, event_id: r }, a);
      }), r;
    }
    lastEventId() {
      return this._lastEventId;
    }
    addBreadcrumb(e, t) {
      const { scope: r, client: i } = this.getStackTop();
      if (!i)
        return;
      const { beforeBreadcrumb: a = null, maxBreadcrumbs: s = Ms } = i.getOptions && i.getOptions() || {};
      if (s <= 0)
        return;
      const l = { timestamp: nn(), ...e }, u = a ? oo(() => a(l, t)) : l;
      u !== null && (i.emit && i.emit("beforeAddBreadcrumb", u, t), r.addBreadcrumb(u, s));
    }
    setUser(e) {
      this.getScope().setUser(e);
    }
    setTags(e) {
      this.getScope().setTags(e);
    }
    setExtras(e) {
      this.getScope().setExtras(e);
    }
    setTag(e, t) {
      this.getScope().setTag(e, t);
    }
    setExtra(e, t) {
      this.getScope().setExtra(e, t);
    }
    setContext(e, t) {
      this.getScope().setContext(e, t);
    }
    configureScope(e) {
      const { scope: t, client: r } = this.getStackTop();
      r && e(t);
    }
    run(e) {
      const t = ti(this);
      try {
        e(this);
      } finally {
        ti(t);
      }
    }
    getIntegration(e) {
      const t = this.getClient();
      if (!t)
        return null;
      try {
        return t.getIntegration(e);
      } catch {
        return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn(`Cannot retrieve integration ${e.id} from the current Hub`), null;
      }
    }
    startTransaction(e, t) {
      const r = this._callExtensionMethod("startTransaction", e, t);
      return typeof __SENTRY_DEBUG__ < "u" && !__SENTRY_DEBUG__ || r || console.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`), r;
    }
    traceHeaders() {
      return this._callExtensionMethod("traceHeaders");
    }
    captureSession(e = !1) {
      if (e)
        return this.endSession();
      this._sendSessionUpdate();
    }
    endSession() {
      const e = this.getStackTop().scope, t = e.getSession();
      t && function(r, i) {
        let a = {};
        i ? a = { status: i } : r.status === "ok" && (a = { status: "exited" }), nt(r, a);
      }(t), this._sendSessionUpdate(), e.setSession();
    }
    startSession(e) {
      const { scope: t, client: r } = this.getStackTop(), { release: i, environment: a = er } = r && r.getOptions() || {}, { userAgent: s } = ie.navigator || {}, l = Cs({ release: i, environment: a, user: t.getUser(), ...s && { userAgent: s }, ...e }), u = t.getSession && t.getSession();
      return u && u.status === "ok" && nt(u, { status: "exited" }), this.endSession(), t.setSession(l), l;
    }
    shouldSendDefaultPii() {
      const e = this.getClient(), t = e && e.getOptions();
      return !!(t && t.sendDefaultPii);
    }
    _sendSessionUpdate() {
      const { scope: e, client: t } = this.getStackTop(), r = e.getSession();
      r && t && t.captureSession && t.captureSession(r);
    }
    _withClient(e) {
      const { scope: t, client: r } = this.getStackTop();
      r && e(r, t);
    }
    _callExtensionMethod(e, ...t) {
      const r = zt().__SENTRY__;
      if (r && r.extensions && typeof r.extensions[e] == "function")
        return r.extensions[e].apply(this, t);
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn(`Extension method ${e} couldn't be found, doing nothing.`);
    }
  }
  function zt() {
    return ie.__SENTRY__ = ie.__SENTRY__ || { extensions: {}, hub: void 0 }, ie;
  }
  function ti(n) {
    const e = zt(), t = Ln(e);
    return vo(e, n), t;
  }
  function te() {
    const n = zt();
    if (n.__SENTRY__ && n.__SENTRY__.acs) {
      const e = n.__SENTRY__.acs.getCurrentHub();
      if (e)
        return e;
    }
    return function(e = zt()) {
      t = e, t && t.__SENTRY__ && t.__SENTRY__.hub && !Ln(e).isOlderThan(go) || vo(e, new tr());
      var t;
      return Ln(e);
    }(n);
  }
  function Ln(n) {
    return Qn("hub", () => new tr(), n);
  }
  function vo(n, e) {
    return n ? ((n.__SENTRY__ = n.__SENTRY__ || {}).hub = e, !0) : !1;
  }
  const As = "7";
  function Os(n, e) {
    return t = { sentry_key: n.publicKey, sentry_version: As, ...e && { sentry_client: `${e.name}/${e.version}` } }, Object.keys(t).map((r) => `${encodeURIComponent(r)}=${encodeURIComponent(t[r])}`).join("&");
    var t;
  }
  function Ls(n, e, t, r) {
    const i = po(t), a = n.type && n.type !== "replay_event" ? n.type : "event";
    (function(l, u) {
      u && (l.sdk = l.sdk || {}, l.sdk.name = l.sdk.name || u.name, l.sdk.version = l.sdk.version || u.version, l.sdk.integrations = [...l.sdk.integrations || [], ...u.integrations || []], l.sdk.packages = [...l.sdk.packages || [], ...u.packages || []]);
    })(n, t && t.sdk);
    const s = function(l, u, p, h) {
      const m = l.sdkProcessingMetadata && l.sdkProcessingMetadata.dynamicSamplingContext;
      return { event_id: l.event_id, sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...u && { sdk: u }, ...!!p && { dsn: Jt(h) }, ...m && { trace: tn({ ...m }) } };
    }(n, i, r, e);
    return delete n.sdkProcessingMetadata, vt(s, [[{ type: a }, n]]);
  }
  const ni = [];
  function ri(n, e) {
    e[n.name] = n, ni.indexOf(n.name) === -1 && (n.setupOnce(mo, te), ni.push(n.name), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.log(`Integration installed: ${n.name}`));
  }
  function Ps(n, e, t, r) {
    const { normalizeDepth: i = 3, normalizeMaxBreadth: a = 1e3 } = n, s = { ...e, event_id: e.event_id || t.event_id || Me(), timestamp: e.timestamp || nn() }, l = t.integrations || n.integrations.map((h) => h.name);
    (function(h, m) {
      const { environment: y, release: S, dist: b, maxValueLength: w = 250 } = m;
      "environment" in h || (h.environment = "environment" in m ? y : er), h.release === void 0 && S !== void 0 && (h.release = S), h.dist === void 0 && b !== void 0 && (h.dist = b), h.message && (h.message = ze(h.message, w));
      const T = h.exception && h.exception.values && h.exception.values[0];
      T && T.value && (T.value = ze(T.value, w));
      const O = h.request;
      O && O.url && (O.url = ze(O.url, w));
    })(s, n), function(h, m) {
      m.length > 0 && (h.sdk = h.sdk || {}, h.sdk.integrations = [...h.sdk.integrations || [], ...m]);
    }(s, l), e.type === void 0 && function(h, m) {
      const y = ie._sentryDebugIds;
      if (!y)
        return;
      let S;
      const b = ii.get(m);
      b ? S = b : (S = /* @__PURE__ */ new Map(), ii.set(m, S));
      const w = Object.keys(y).reduce((T, O) => {
        let Y;
        const Se = S.get(O);
        Se ? Y = Se : (Y = m(O), S.set(O, Y));
        for (let $e = Y.length - 1; $e >= 0; $e--) {
          const ot = Y[$e];
          if (ot.filename) {
            T[ot.filename] = y[O];
            break;
          }
        }
        return T;
      }, {});
      try {
        h.exception.values.forEach((T) => {
          T.stacktrace.frames.forEach((O) => {
            O.filename && (O.debug_id = w[O.filename]);
          });
        });
      } catch {
      }
    }(s, n.stackParser);
    let u = r;
    t.captureContext && (u = Fe.clone(u).update(t.captureContext));
    let p = Ye(s);
    if (u) {
      if (u.getAttachments) {
        const h = [...t.attachments || [], ...u.getAttachments()];
        h.length && (t.attachments = h);
      }
      p = u.applyToEvent(s, t);
    }
    return p.then((h) => (h && function(m) {
      const y = {};
      try {
        m.exception.values.forEach((b) => {
          b.stacktrace.frames.forEach((w) => {
            w.debug_id && (w.abs_path ? y[w.abs_path] = w.debug_id : w.filename && (y[w.filename] = w.debug_id), delete w.debug_id);
          });
        });
      } catch {
      }
      if (Object.keys(y).length === 0)
        return;
      m.debug_meta = m.debug_meta || {}, m.debug_meta.images = m.debug_meta.images || [];
      const S = m.debug_meta.images;
      Object.keys(y).forEach((b) => {
        S.push({ type: "sourcemap", code_file: b, debug_id: y[b] });
      });
    }(h), typeof i == "number" && i > 0 ? function(m, y, S) {
      if (!m)
        return null;
      const b = { ...m, ...m.breadcrumbs && { breadcrumbs: m.breadcrumbs.map((w) => ({ ...w, ...w.data && { data: Ce(w.data, y, S) } })) }, ...m.user && { user: Ce(m.user, y, S) }, ...m.contexts && { contexts: Ce(m.contexts, y, S) }, ...m.extra && { extra: Ce(m.extra, y, S) } };
      return m.contexts && m.contexts.trace && b.contexts && (b.contexts.trace = m.contexts.trace, m.contexts.trace.data && (b.contexts.trace.data = Ce(m.contexts.trace.data, y, S))), m.spans && (b.spans = m.spans.map((w) => (w.data && (w.data = Ce(w.data, y, S)), w))), b;
    }(h, i, a) : h));
  }
  const ii = /* @__PURE__ */ new WeakMap(), oi = "Not capturing exception because it's already been captured.";
  class xe {
    __init() {
      this._integrations = {};
    }
    __init2() {
      this._integrationsInitialized = !1;
    }
    __init3() {
      this._numProcessing = 0;
    }
    __init4() {
      this._outcomes = {};
    }
    __init5() {
      this._hooks = {};
    }
    constructor(e) {
      if (xe.prototype.__init.call(this), xe.prototype.__init2.call(this), xe.prototype.__init3.call(this), xe.prototype.__init4.call(this), xe.prototype.__init5.call(this), this._options = e, e.dsn ? this._dsn = fs(e.dsn) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn("No DSN provided, client will not do anything."), this._dsn) {
        const t = function(r, i = {}) {
          const a = typeof i == "string" ? i : i.tunnel, s = typeof i != "string" && i._metadata ? i._metadata.sdk : void 0;
          return a || `${function(l) {
            return `${function(u) {
              const p = u.protocol ? `${u.protocol}:` : "", h = u.port ? `:${u.port}` : "";
              return `${p}//${u.host}${h}${u.path ? `/${u.path}` : ""}/api/`;
            }(l)}${l.projectId}/envelope/`;
          }(r)}?${Os(r, s)}`;
        }(this._dsn, e);
        this._transport = e.transport({ recordDroppedEvent: this.recordDroppedEvent.bind(this), ...e.transportOptions, url: t });
      }
    }
    captureException(e, t, r) {
      if (Kr(e))
        return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.log(oi));
      let i = t && t.event_id;
      return this._process(this.eventFromException(e, t).then((a) => this._captureEvent(a, t, r)).then((a) => {
        i = a;
      })), i;
    }
    captureMessage(e, t, r, i) {
      let a = r && r.event_id;
      const s = io(e) ? this.eventFromMessage(String(e), t, r) : this.eventFromException(e, r);
      return this._process(s.then((l) => this._captureEvent(l, r, i)).then((l) => {
        a = l;
      })), a;
    }
    captureEvent(e, t, r) {
      if (t && t.originalException && Kr(t.originalException))
        return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.log(oi));
      let i = t && t.event_id;
      return this._process(this._captureEvent(e, t, r).then((a) => {
        i = a;
      })), i;
    }
    captureSession(e) {
      this._isEnabled() ? typeof e.release != "string" ? (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), nt(e, { init: !1 })) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn("SDK not enabled, will not capture session.");
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
      return t ? this._isClientDoneProcessing(e).then((r) => t.flush(e).then((i) => r && i)) : Ye(!0);
    }
    close(e) {
      return this.flush(e).then((t) => (this.getOptions().enabled = !1, t));
    }
    setupIntegrations() {
      this._isEnabled() && !this._integrationsInitialized && (this._integrations = function(e) {
        const t = {};
        return e.forEach((r) => {
          r && ri(r, t);
        }), t;
      }(this._options.integrations), this._integrationsInitialized = !0);
    }
    getIntegrationById(e) {
      return this._integrations[e];
    }
    getIntegration(e) {
      try {
        return this._integrations[e.id] || null;
      } catch {
        return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn(`Cannot retrieve integration ${e.id} from the current Client`), null;
      }
    }
    addIntegration(e) {
      ri(e, this._integrations);
    }
    sendEvent(e, t = {}) {
      if (this._dsn) {
        let r = Ls(e, this._dsn, this._options._metadata, this._options.tunnel);
        for (const a of t.attachments || [])
          r = bs(r, Ss(a, this._options.transportOptions && this._options.transportOptions.textEncoder));
        const i = this._sendEnvelope(r);
        i && i.then((a) => this.emit("afterSendEvent", e, a), null);
      }
    }
    sendSession(e) {
      if (this._dsn) {
        const t = function(r, i, a, s) {
          const l = po(a);
          return vt({ sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...l && { sdk: l }, ...!!s && { dsn: Jt(i) } }, ["aggregates" in r ? [{ type: "sessions" }, r] : [{ type: "session" }, r.toJSON()]]);
        }(e, this._dsn, this._options._metadata, this._options.tunnel);
        this._sendEnvelope(t);
      }
    }
    recordDroppedEvent(e, t, r) {
      if (this._options.sendClientReports) {
        const i = `${e}:${t}`;
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.log(`Adding outcome: "${i}"`), this._outcomes[i] = this._outcomes[i] + 1 || 1;
      }
    }
    on(e, t) {
      this._hooks[e] || (this._hooks[e] = []), this._hooks[e].push(t);
    }
    emit(e, ...t) {
      this._hooks[e] && this._hooks[e].forEach((r) => r(...t));
    }
    _updateSessionFromEvent(e, t) {
      let r = !1, i = !1;
      const a = t.exception && t.exception.values;
      if (a) {
        i = !0;
        for (const l of a) {
          const u = l.mechanism;
          if (u && u.handled === !1) {
            r = !0;
            break;
          }
        }
      }
      const s = e.status === "ok";
      (s && e.errors === 0 || s && r) && (nt(e, { ...r && { status: "crashed" }, errors: e.errors || Number(i || r) }), this.captureSession(e));
    }
    _isClientDoneProcessing(e) {
      return new X((t) => {
        let r = 0;
        const i = setInterval(() => {
          this._numProcessing == 0 ? (clearInterval(i), t(!0)) : (r += 1, e && r >= e && (clearInterval(i), t(!1)));
        }, 1);
      });
    }
    _isEnabled() {
      return this.getOptions().enabled !== !1 && this._dsn !== void 0;
    }
    _prepareEvent(e, t, r) {
      const i = this.getOptions(), a = Object.keys(this._integrations);
      return !t.integrations && a.length > 0 && (t.integrations = a), Ps(i, e, t, r).then((s) => {
        if (s === null)
          return s;
        const { propagationContext: l } = s.sdkProcessingMetadata || {};
        if (!(s.contexts && s.contexts.trace) && l) {
          const { traceId: u, spanId: p, parentSpanId: h, dsc: m } = l;
          s.contexts = { trace: { trace_id: u, span_id: p, parent_span_id: h }, ...s.contexts };
          const y = m || function(S, b, w) {
            const T = b.getOptions(), { publicKey: O } = b.getDsn() || {}, { segment: Y } = w && w.getUser() || {}, Se = tn({ environment: T.environment || er, release: T.release, user_segment: Y, public_key: O, trace_id: S });
            return b.emit && b.emit("createDsc", Se), Se;
          }(u, this, r);
          s.sdkProcessingMetadata = { dynamicSamplingContext: y, ...s.sdkProcessingMetadata };
        }
        return s;
      });
    }
    _captureEvent(e, t = {}, r) {
      return this._processEvent(e, t, r).then((i) => i.event_id, (i) => {
        if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
          const a = i;
          a.logLevel === "log" ? L.log(a.message) : L.warn(a);
        }
      });
    }
    _processEvent(e, t, r) {
      const i = this.getOptions(), { sampleRate: a } = i;
      if (!this._isEnabled())
        return Wt(new ae("SDK not enabled, will not capture event.", "log"));
      const s = si(e), l = ai(e), u = e.type || "error", p = `before send for type \`${u}\``;
      if (l && typeof a == "number" && Math.random() > a)
        return this.recordDroppedEvent("sample_rate", "error", e), Wt(new ae(`Discarding event because it's not included in the random sample (sampling rate = ${a})`, "log"));
      const h = u === "replay_event" ? "replay" : u;
      return this._prepareEvent(e, t, r).then((m) => {
        if (m === null)
          throw this.recordDroppedEvent("event_processor", h, e), new ae("An event processor returned `null`, will not send event.", "log");
        if (t.data && t.data.__sentry__ === !0)
          return m;
        const y = function(S, b, w) {
          const { beforeSend: T, beforeSendTransaction: O } = S;
          return ai(b) && T ? T(b, w) : si(b) && O ? O(b, w) : b;
        }(i, m, t);
        return function(S, b) {
          const w = `${b} must return \`null\` or a valid event.`;
          if (Kn(S))
            return S.then((T) => {
              if (!tt(T) && T !== null)
                throw new ae(w);
              return T;
            }, (T) => {
              throw new ae(`${b} rejected with ${T}`);
            });
          if (!tt(S) && S !== null)
            throw new ae(w);
          return S;
        }(y, p);
      }).then((m) => {
        if (m === null)
          throw this.recordDroppedEvent("before_send", h, e), new ae(`${p} returned \`null\`, will not send event.`, "log");
        const y = r && r.getSession();
        !s && y && this._updateSessionFromEvent(y, m);
        const S = m.transaction_info;
        if (s && S && m.transaction !== e.transaction) {
          const b = "custom";
          m.transaction_info = { ...S, source: b };
        }
        return this.sendEvent(m, t), m;
      }).then(null, (m) => {
        throw m instanceof ae ? m : (this.captureException(m, { data: { __sentry__: !0 }, originalException: m }), new ae(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${m}`));
      });
    }
    _process(e) {
      this._numProcessing++, e.then((t) => (this._numProcessing--, t), (t) => (this._numProcessing--, t));
    }
    _sendEnvelope(e) {
      if (this._transport && this._dsn)
        return this.emit("beforeEnvelope", e), this._transport.send(e).then(null, (t) => {
          (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.error("Error while sending event:", t);
        });
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.error("Transport disabled");
    }
    _clearOutcomes() {
      const e = this._outcomes;
      return this._outcomes = {}, Object.keys(e).map((t) => {
        const [r, i] = t.split(":");
        return { reason: r, category: i, quantity: e[t] };
      });
    }
  }
  function ai(n) {
    return n.type === void 0;
  }
  function si(n) {
    return n.type === "transaction";
  }
  const Ds = 30;
  function Is(n, e, t = _s(n.bufferSize || Ds)) {
    let r = {};
    function i(a) {
      const s = [];
      if (Xr(a, (p, h) => {
        const m = Zr(h);
        if (function(y, S, b = Date.now()) {
          return function(w, T) {
            return w[T] || w.all || 0;
          }(y, S) > b;
        }(r, m)) {
          const y = ci(p, h);
          n.recordDroppedEvent("ratelimit_backoff", m, y);
        } else
          s.push(p);
      }), s.length === 0)
        return Ye();
      const l = vt(a[0], s), u = (p) => {
        Xr(l, (h, m) => {
          const y = ci(h, m);
          n.recordDroppedEvent(p, Zr(m), y);
        });
      };
      return t.add(() => e({ body: ws(l, n.textEncoder) }).then((p) => (p.statusCode !== void 0 && (p.statusCode < 200 || p.statusCode >= 300) && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn(`Sentry responded with status code ${p.statusCode} to sent event.`), r = Ts(r, p), p), (p) => {
        throw u("network_error"), p;
      })).then((p) => p, (p) => {
        if (p instanceof ae)
          return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.error("Skipped sending event because buffer is full."), u("queue_overflow"), Ye();
        throw p;
      });
    }
    return i.__sentry__baseTransport__ = !0, { send: i, flush: (a) => t.drain(a) };
  }
  function ci(n, e) {
    if (e === "event" || e === "transaction")
      return Array.isArray(n) ? n[1] : void 0;
  }
  const li = "7.60.1";
  let ui;
  class _t {
    constructor() {
      _t.prototype.__init.call(this);
    }
    static __initStatic() {
      this.id = "FunctionToString";
    }
    __init() {
      this.name = _t.id;
    }
    setupOnce() {
      ui = Function.prototype.toString;
      try {
        Function.prototype.toString = function(...e) {
          const t = Zn(this) || this;
          return ui.apply(t, e);
        };
      } catch {
      }
    }
  }
  _t.__initStatic();
  const Ns = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/], Rs = [/^.*healthcheck.*$/, /^.*healthy.*$/, /^.*live.*$/, /^.*ready.*$/, /^.*heartbeat.*$/, /^.*\/health$/, /^.*\/healthz$/];
  class He {
    static __initStatic() {
      this.id = "InboundFilters";
    }
    __init() {
      this.name = He.id;
    }
    constructor(e = {}) {
      this._options = e, He.prototype.__init.call(this);
    }
    setupOnce(e, t) {
      const r = (i) => {
        const a = t();
        if (a) {
          const s = a.getIntegration(He);
          if (s) {
            const l = a.getClient(), u = l ? l.getOptions() : {}, p = function(h = {}, m = {}) {
              return { allowUrls: [...h.allowUrls || [], ...m.allowUrls || []], denyUrls: [...h.denyUrls || [], ...m.denyUrls || []], ignoreErrors: [...h.ignoreErrors || [], ...m.ignoreErrors || [], ...h.disableErrorDefaults ? [] : Ns], ignoreTransactions: [...h.ignoreTransactions || [], ...m.ignoreTransactions || [], ...h.disableTransactionDefaults ? [] : Rs], ignoreInternal: h.ignoreInternal === void 0 || h.ignoreInternal };
            }(s._options, u);
            return function(h, m) {
              return m.ignoreInternal && function(y) {
                try {
                  return y.exception.values[0].type === "SentryError";
                } catch {
                }
                return !1;
              }(h) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn(`Event dropped due to being internal Sentry Error.
Event: ${Te(h)}`), !0) : function(y, S) {
                return y.type || !S || !S.length ? !1 : function(b) {
                  if (b.message)
                    return [b.message];
                  if (b.exception) {
                    const { values: w } = b.exception;
                    try {
                      const { type: T = "", value: O = "" } = w && w[w.length - 1] || {};
                      return [`${O}`, `${T}: ${O}`];
                    } catch {
                      return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.error(`Cannot extract message for event ${Te(b)}`), [];
                    }
                  }
                  return [];
                }(y).some((b) => St(b, S));
              }(h, m.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Te(h)}`), !0) : function(y, S) {
                if (y.type !== "transaction" || !S || !S.length)
                  return !1;
                const b = y.transaction;
                return !!b && St(b, S);
              }(h, m.ignoreTransactions) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Te(h)}`), !0) : function(y, S) {
                if (!S || !S.length)
                  return !1;
                const b = Ot(y);
                return !!b && St(b, S);
              }(h, m.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Te(h)}.
Url: ${Ot(h)}`), !0) : function(y, S) {
                if (!S || !S.length)
                  return !0;
                const b = Ot(y);
                return !b || St(b, S);
              }(h, m.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Te(h)}.
Url: ${Ot(h)}`), !0);
            }(i, p) ? null : i;
          }
        }
        return i;
      };
      r.id = this.name, e(r);
    }
  }
  function Ot(n) {
    try {
      let e;
      try {
        e = n.exception.values[0].stacktrace.frames;
      } catch {
      }
      return e ? function(t = []) {
        for (let r = t.length - 1; r >= 0; r--) {
          const i = t[r];
          if (i && i.filename !== "<anonymous>" && i.filename !== "[native code]")
            return i.filename || null;
        }
        return null;
      }(e) : null;
    } catch {
      return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.error(`Cannot extract url for event ${Te(n)}`), null;
    }
  }
  He.__initStatic();
  var xs = Object.freeze({ __proto__: null, FunctionToString: _t, InboundFilters: He });
  const j = ie;
  let Pn = 0;
  function _o() {
    return Pn > 0;
  }
  function rt(n, e = {}, t) {
    if (typeof n != "function")
      return n;
    try {
      const i = n.__sentry_wrapped__;
      if (i)
        return i;
      if (Zn(n))
        return n;
    } catch {
      return n;
    }
    const r = function() {
      const i = Array.prototype.slice.call(arguments);
      try {
        t && typeof t == "function" && t.apply(this, arguments);
        const s = i.map((l) => rt(l, e));
        return n.apply(this, s);
      } catch (s) {
        throw Pn++, setTimeout(() => {
          Pn--;
        }), a = (l) => {
          var u, p;
          l.addEventProcessor((h) => (e.mechanism && (Cn(h, void 0, void 0), gt(h, e.mechanism)), h.extra = { ...h.extra, arguments: i }, h)), u = s, te().captureException(u, { captureContext: p });
        }, te().withScope(a), s;
      }
      var a;
    };
    try {
      for (const i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
    } catch {
    }
    ao(r, n), Xn(n, "__sentry_wrapped__", r);
    try {
      Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", { get: () => n.name });
    } catch {
    }
    return r;
  }
  function yo(n, e) {
    const t = nr(n, e), r = { type: e && e.name, value: Fs(e) };
    return t.length && (r.stacktrace = { frames: t }), r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"), r;
  }
  function hn(n, e) {
    return { exception: { values: [yo(n, e)] } };
  }
  function nr(n, e) {
    const t = e.stacktrace || e.stack || "", r = function(i) {
      if (i) {
        if (typeof i.framesToPop == "number")
          return i.framesToPop;
        if (js.test(i.message))
          return 1;
      }
      return 0;
    }(e);
    try {
      return n(t, r);
    } catch {
    }
    return [];
  }
  const js = /Minified React error #\d+;/i;
  function Fs(n) {
    const e = n && n.message;
    return e ? e.error && typeof e.error.message == "string" ? e.error.message : e : "No error message";
  }
  function rr(n, e, t, r, i) {
    let a;
    if (Hn(e) && e.error)
      return hn(n, e.error);
    if (Fr(e) || it(e, "DOMException")) {
      const s = e;
      if ("stack" in e)
        a = hn(n, e);
      else {
        const l = s.name || (Fr(s) ? "DOMError" : "DOMException"), u = s.message ? `${l}: ${s.message}` : l;
        a = Dn(n, u, t, r), Cn(a, u);
      }
      return "code" in s && (a.tags = { ...a.tags, "DOMException.code": `${s.code}` }), a;
    }
    return ro(e) ? hn(n, e) : tt(e) || Gt(e) ? (a = function(s, l, u, p) {
      const h = te().getClient(), m = h && h.getOptions().normalizeDepth, y = { exception: { values: [{ type: Gt(l) ? l.constructor.name : p ? "UnhandledRejection" : "Error", value: Bs(l, { isUnhandledRejection: p }) }] }, extra: { __serialized__: lo(l, m) } };
      if (u) {
        const S = nr(s, u);
        S.length && (y.exception.values[0].stacktrace = { frames: S });
      }
      return y;
    }(n, e, t, i), gt(a, { synthetic: !0 }), a) : (a = Dn(n, e, t, r), Cn(a, `${e}`, void 0), gt(a, { synthetic: !0 }), a);
  }
  function Dn(n, e, t, r) {
    const i = { message: e };
    if (r && t) {
      const a = nr(n, t);
      a.length && (i.exception = { values: [{ value: e, stacktrace: { frames: a } }] });
    }
    return i;
  }
  function Bs(n, { isUnhandledRejection: e }) {
    const t = function(i, a = 40) {
      const s = Object.keys(so(i));
      if (s.sort(), !s.length)
        return "[object has no keys]";
      if (s[0].length >= a)
        return ze(s[0], a);
      for (let l = s.length; l > 0; l--) {
        const u = s.slice(0, l).join(", ");
        if (!(u.length > a))
          return l === s.length ? u : ze(u, a);
      }
      return "";
    }(n), r = e ? "promise rejection" : "exception";
    return Hn(n) ? `Event \`ErrorEvent\` captured as ${r} with message \`${n.message}\`` : Gt(n) ? `Event \`${function(i) {
      try {
        const a = Object.getPrototypeOf(i);
        return a ? a.constructor.name : void 0;
      } catch {
      }
    }(n)}\` (type=${n.type}) captured as ${r}` : `Object captured as ${r} with keys: ${t}`;
  }
  const di = 1024, bo = "Breadcrumbs";
  class yt {
    static __initStatic() {
      this.id = bo;
    }
    __init() {
      this.name = yt.id;
    }
    constructor(e) {
      yt.prototype.__init.call(this), this.options = { console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0, ...e };
    }
    setupOnce() {
      this.options.console && Re("console", Us), this.options.dom && Re("dom", /* @__PURE__ */ function(e) {
        function t(r) {
          let i, a = typeof e == "object" ? e.serializeAttribute : void 0, s = typeof e == "object" && typeof e.maxStringLength == "number" ? e.maxStringLength : void 0;
          s && s > di && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${s} was configured. Sentry will use 1024 instead.`), s = di), typeof a == "string" && (a = [a]);
          try {
            const l = r.event;
            i = function(u) {
              return !!u && !!u.target;
            }(l) ? Sn(l.target, { keyAttrs: a, maxStringLength: s }) : Sn(l, { keyAttrs: a, maxStringLength: s });
          } catch {
            i = "<unknown>";
          }
          i.length !== 0 && te().addBreadcrumb({ category: `ui.${r.name}`, message: i }, { event: r.event, name: r.name, global: r.global });
        }
        return t;
      }(this.options.dom)), this.options.xhr && Re("xhr", Vs), this.options.fetch && Re("fetch", Ys), this.options.history && Re("history", $s);
    }
    addSentryBreadcrumb(e) {
      this.options.sentry && te().addBreadcrumb({ category: "sentry." + (e.type === "transaction" ? "transaction" : "event"), event_id: e.event_id, level: e.level, message: Te(e) }, { event: e });
    }
  }
  function Us(n) {
    for (let r = 0; r < n.args.length; r++)
      if (n.args[r] === "ref=Ref<") {
        n.args[r + 1] = "viewRef";
        break;
      }
    const e = { category: "console", data: { arguments: n.args, logger: "console" }, level: (t = n.level, t === "warn" ? "warning" : ys.includes(t) ? t : "log"), message: Br(n.args, " ") };
    var t;
    if (n.level === "assert") {
      if (n.args[0] !== !1)
        return;
      e.message = `Assertion failed: ${Br(n.args.slice(1), " ") || "console.assert"}`, e.data.arguments = n.args.slice(1);
    }
    te().addBreadcrumb(e, { input: n.args, level: n.level });
  }
  function Vs(n) {
    const { startTimestamp: e, endTimestamp: t } = n, r = n.xhr[ut];
    if (!e || !t || !r)
      return;
    const { method: i, url: a, status_code: s, body: l } = r, u = { method: i, url: a, status_code: s }, p = { xhr: n.xhr, input: l, startTimestamp: e, endTimestamp: t };
    te().addBreadcrumb({ category: "xhr", data: u, type: "http" }, p);
  }
  function Ys(n) {
    const { startTimestamp: e, endTimestamp: t } = n;
    if (t && (!n.fetchData.url.match(/sentry_key/) || n.fetchData.method !== "POST"))
      if (n.error) {
        const r = n.fetchData, i = { data: n.error, input: n.args, startTimestamp: e, endTimestamp: t };
        te().addBreadcrumb({ category: "fetch", data: r, level: "error", type: "http" }, i);
      } else {
        const r = { ...n.fetchData, status_code: n.response && n.response.status }, i = { input: n.args, response: n.response, startTimestamp: e, endTimestamp: t };
        te().addBreadcrumb({ category: "fetch", data: r, type: "http" }, i);
      }
  }
  function $s(n) {
    let e = n.from, t = n.to;
    const r = un(j.location.href);
    let i = un(e);
    const a = un(t);
    i.path || (i = r), r.protocol === a.protocol && r.host === a.host && (t = a.relative), r.protocol === i.protocol && r.host === i.host && (e = i.relative), te().addBreadcrumb({ category: "navigation", data: { from: e, to: t } });
  }
  yt.__initStatic();
  class Gs extends xe {
    constructor(e) {
      const t = j.SENTRY_SDK_SOURCE || "npm";
      e._metadata = e._metadata || {}, e._metadata.sdk = e._metadata.sdk || { name: "sentry.javascript.browser", packages: [{ name: `${t}:@sentry/browser`, version: li }], version: li }, super(e), e.sendClientReports && j.document && j.document.addEventListener("visibilitychange", () => {
        j.document.visibilityState === "hidden" && this._flushOutcomes();
      });
    }
    eventFromException(e, t) {
      return function(r, i, a, s) {
        const l = rr(r, i, a && a.syntheticException || void 0, s);
        return gt(l), l.level = "error", a && a.event_id && (l.event_id = a.event_id), Ye(l);
      }(this._options.stackParser, e, t, this._options.attachStacktrace);
    }
    eventFromMessage(e, t = "info", r) {
      return function(i, a, s = "info", l, u) {
        const p = Dn(i, a, l && l.syntheticException || void 0, u);
        return p.level = s, l && l.event_id && (p.event_id = l.event_id), Ye(p);
      }(this._options.stackParser, e, t, r, this._options.attachStacktrace);
    }
    sendEvent(e, t) {
      const r = this.getIntegrationById(bo);
      r && r.addSentryBreadcrumb && r.addSentryBreadcrumb(e), super.sendEvent(e, t);
    }
    captureUserFeedback(e) {
      if (!this._isEnabled())
        return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn("SDK not enabled, will not capture user feedback."));
      const t = function(r, { metadata: i, tunnel: a, dsn: s }) {
        const l = { event_id: r.event_id, sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...i && i.sdk && { sdk: { name: i.sdk.name, version: i.sdk.version } }, ...!!a && !!s && { dsn: Jt(s) } };
        return vt(l, [/* @__PURE__ */ function(p) {
          return [{ type: "user_report" }, p];
        }(r)]);
      }(e, { metadata: this.getSdkMetadata(), dsn: this.getDsn(), tunnel: this.getOptions().tunnel });
      this._sendEnvelope(t);
    }
    _prepareEvent(e, t, r) {
      return e.platform = e.platform || "javascript", super._prepareEvent(e, t, r);
    }
    _flushOutcomes() {
      const e = this._clearOutcomes();
      if (e.length === 0)
        return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.log("No outcomes to send"));
      if (!this._dsn)
        return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.log("No dsn provided, will not send outcomes"));
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.log("Sending outcomes:", e);
      const t = (r = e, vt((i = this._options.tunnel && Jt(this._dsn)) ? { dsn: i } : {}, [[{ type: "client_report" }, { timestamp: a || nn(), discarded_events: r }]]));
      var r, i, a;
      this._sendEnvelope(t);
    }
  }
  let st;
  function qs(n, e = function() {
    if (st)
      return st;
    if (kn(j.fetch))
      return st = j.fetch.bind(j);
    const t = j.document;
    let r = j.fetch;
    if (t && typeof t.createElement == "function")
      try {
        const i = t.createElement("iframe");
        i.hidden = !0, t.head.appendChild(i);
        const a = i.contentWindow;
        a && a.fetch && (r = a.fetch), t.head.removeChild(i);
      } catch (i) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", i);
      }
    return st = r.bind(j);
  }()) {
    let t = 0, r = 0;
    return Is(n, function(i) {
      const a = i.body.length;
      t += a, r++;
      const s = { body: i.body, method: "POST", referrerPolicy: "origin", headers: n.headers, keepalive: t <= 6e4 && r < 15, ...n.fetchOptions };
      try {
        return e(n.url, s).then((l) => (t -= a, r--, { statusCode: l.status, headers: { "x-sentry-rate-limits": l.headers.get("X-Sentry-Rate-Limits"), "retry-after": l.headers.get("Retry-After") } }));
      } catch (l) {
        return st = void 0, t -= a, r--, Wt(l);
      }
    });
  }
  class Ae {
    static __initStatic() {
      this.id = "GlobalHandlers";
    }
    __init() {
      this.name = Ae.id;
    }
    __init2() {
      this._installFunc = { onerror: Js, onunhandledrejection: Ws };
    }
    constructor(e) {
      Ae.prototype.__init.call(this), Ae.prototype.__init2.call(this), this._options = { onerror: !0, onunhandledrejection: !0, ...e };
    }
    setupOnce() {
      Error.stackTraceLimit = 50;
      const e = this._options;
      for (const r in e) {
        const i = this._installFunc[r];
        i && e[r] && (t = r, (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.log(`Global Handler attached: ${t}`), i(), this._installFunc[r] = void 0);
      }
      var t;
    }
  }
  function Js() {
    Re("error", (n) => {
      const [e, t, r] = So();
      if (!e.getIntegration(Ae))
        return;
      const { msg: i, url: a, line: s, column: l, error: u } = n;
      if (_o() || u && u.__sentry_own_request__)
        return;
      const p = u === void 0 && Ue(i) ? function(h, m, y, S) {
        const b = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let w = Hn(h) ? h.message : h, T = "Error";
        const O = w.match(b);
        return O && (T = O[1], w = O[2]), hi({ exception: { values: [{ type: T, value: w }] } }, m, y, S);
      }(i, a, s, l) : hi(rr(t, u || i, void 0, r, !1), a, s, l);
      p.level = "error", wo(e, u, p, "onerror");
    });
  }
  function Ws() {
    Re("unhandledrejection", (n) => {
      const [e, t, r] = So();
      if (!e.getIntegration(Ae))
        return;
      let i = n;
      try {
        "reason" in n ? i = n.reason : "detail" in n && "reason" in n.detail && (i = n.detail.reason);
      } catch {
      }
      if (_o() || i && i.__sentry_own_request__)
        return !0;
      const a = io(i) ? { exception: { values: [{ type: "UnhandledRejection", value: `Non-Error promise rejection captured with value: ${String(i)}` }] } } : rr(t, i, void 0, r, !0);
      a.level = "error", wo(e, i, a, "onunhandledrejection");
    });
  }
  function hi(n, e, t, r) {
    const i = n.exception = n.exception || {}, a = i.values = i.values || [], s = a[0] = a[0] || {}, l = s.stacktrace = s.stacktrace || {}, u = l.frames = l.frames || [], p = isNaN(parseInt(r, 10)) ? void 0 : r, h = isNaN(parseInt(t, 10)) ? void 0 : t, m = Ue(e) && e.length > 0 ? e : function() {
      try {
        return us.document.location.href;
      } catch {
        return "";
      }
    }();
    return u.length === 0 && u.push({ colno: p, filename: m, function: "?", in_app: !0, lineno: h }), n;
  }
  function wo(n, e, t, r) {
    gt(t, { handled: !1, type: r }), n.captureEvent(t, { originalException: e });
  }
  function So() {
    const n = te(), e = n.getClient(), t = e && e.getOptions() || { stackParser: () => [], attachStacktrace: !1 };
    return [n, t.stackParser, t.attachStacktrace];
  }
  Ae.__initStatic();
  const zs = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
  class bt {
    static __initStatic() {
      this.id = "TryCatch";
    }
    __init() {
      this.name = bt.id;
    }
    constructor(e) {
      bt.prototype.__init.call(this), this._options = { XMLHttpRequest: !0, eventTarget: !0, requestAnimationFrame: !0, setInterval: !0, setTimeout: !0, ...e };
    }
    setupOnce() {
      this._options.setTimeout && W(j, "setTimeout", pi), this._options.setInterval && W(j, "setInterval", pi), this._options.requestAnimationFrame && W(j, "requestAnimationFrame", Hs), this._options.XMLHttpRequest && "XMLHttpRequest" in j && W(XMLHttpRequest.prototype, "send", Ks);
      const e = this._options.eventTarget;
      e && (Array.isArray(e) ? e : zs).forEach(Qs);
    }
  }
  function pi(n) {
    return function(...e) {
      const t = e[0];
      return e[0] = rt(t, { mechanism: { data: { function: Oe(n) }, handled: !0, type: "instrument" } }), n.apply(this, e);
    };
  }
  function Hs(n) {
    return function(e) {
      return n.apply(this, [rt(e, { mechanism: { data: { function: "requestAnimationFrame", handler: Oe(n) }, handled: !0, type: "instrument" } })]);
    };
  }
  function Ks(n) {
    return function(...e) {
      const t = this;
      return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((r) => {
        r in t && typeof t[r] == "function" && W(t, r, function(i) {
          const a = { mechanism: { data: { function: r, handler: Oe(i) }, handled: !0, type: "instrument" } }, s = Zn(i);
          return s && (a.mechanism.data.handler = Oe(s)), rt(i, a);
        });
      }), n.apply(this, e);
    };
  }
  function Qs(n) {
    const e = j, t = e[n] && e[n].prototype;
    t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (W(t, "addEventListener", function(r) {
      return function(i, a, s) {
        try {
          typeof a.handleEvent == "function" && (a.handleEvent = rt(a.handleEvent, { mechanism: { data: { function: "handleEvent", handler: Oe(a), target: n }, handled: !0, type: "instrument" } }));
        } catch {
        }
        return r.apply(this, [i, rt(a, { mechanism: { data: { function: "addEventListener", handler: Oe(a), target: n }, handled: !0, type: "instrument" } }), s]);
      };
    }), W(t, "removeEventListener", function(r) {
      return function(i, a, s) {
        const l = a;
        try {
          const u = l && l.__sentry_wrapped__;
          u && r.call(this, i, u, s);
        } catch {
        }
        return r.call(this, i, l, s);
      };
    }));
  }
  bt.__initStatic();
  class Ke {
    static __initStatic() {
      this.id = "LinkedErrors";
    }
    __init() {
      this.name = Ke.id;
    }
    constructor(e = {}) {
      Ke.prototype.__init.call(this), this._key = e.key || "cause", this._limit = e.limit || 5;
    }
    setupOnce(e, t) {
      e((r, i) => {
        const a = t(), s = a.getClient(), l = a.getIntegration(Ke);
        if (!s || !l)
          return r;
        const u = s.getOptions();
        return ls(yo, u.stackParser, u.maxValueLength, l._key, l._limit, r, i), r;
      });
    }
  }
  Ke.__initStatic();
  class Qe {
    constructor() {
      Qe.prototype.__init.call(this);
    }
    static __initStatic() {
      this.id = "HttpContext";
    }
    __init() {
      this.name = Qe.id;
    }
    setupOnce() {
      mo((e) => {
        if (te().getIntegration(Qe)) {
          if (!j.navigator && !j.location && !j.document)
            return e;
          const t = e.request && e.request.url || j.location && j.location.href, { referrer: r } = j.document || {}, { userAgent: i } = j.navigator || {}, a = { ...e.request && e.request.headers, ...r && { Referer: r }, ...i && { "User-Agent": i } }, s = { ...e.request, ...t && { url: t }, headers: a };
          return { ...e, request: s };
        }
        return e;
      });
    }
  }
  Qe.__initStatic();
  class Xe {
    constructor() {
      Xe.prototype.__init.call(this);
    }
    static __initStatic() {
      this.id = "Dedupe";
    }
    __init() {
      this.name = Xe.id;
    }
    setupOnce(e, t) {
      const r = (i) => {
        if (i.type)
          return i;
        const a = t().getIntegration(Xe);
        if (a) {
          try {
            if (function(s, l) {
              return l ? !!(function(u, p) {
                const h = u.message, m = p.message;
                return !(!h && !m || h && !m || !h && m || h !== m || !mi(u, p) || !fi(u, p));
              }(s, l) || function(u, p) {
                const h = gi(p), m = gi(u);
                return !(!h || !m || h.type !== m.type || h.value !== m.value || !mi(u, p) || !fi(u, p));
              }(s, l)) : !1;
            }(i, a._previousEvent))
              return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn("Event dropped due to being a duplicate of previously captured event."), null;
          } catch {
            return a._previousEvent = i;
          }
          return a._previousEvent = i;
        }
        return i;
      };
      r.id = this.name, e(r);
    }
  }
  function fi(n, e) {
    let t = vi(n), r = vi(e);
    if (!t && !r)
      return !0;
    if (t && !r || !t && r || r.length !== t.length)
      return !1;
    for (let i = 0; i < r.length; i++) {
      const a = r[i], s = t[i];
      if (a.filename !== s.filename || a.lineno !== s.lineno || a.colno !== s.colno || a.function !== s.function)
        return !1;
    }
    return !0;
  }
  function mi(n, e) {
    let t = n.fingerprint, r = e.fingerprint;
    if (!t && !r)
      return !0;
    if (t && !r || !t && r)
      return !1;
    try {
      return t.join("") === r.join("");
    } catch {
      return !1;
    }
  }
  function gi(n) {
    return n.exception && n.exception.values && n.exception.values[0];
  }
  function vi(n) {
    const e = n.exception;
    if (e)
      try {
        return e.values[0].stacktrace.frames;
      } catch {
        return;
      }
  }
  Xe.__initStatic();
  var Xs = Object.freeze({ __proto__: null, Breadcrumbs: yt, Dedupe: Xe, GlobalHandlers: Ae, HttpContext: Qe, LinkedErrors: Ke, TryCatch: bt });
  let Eo = {};
  j.Sentry && j.Sentry.Integrations && (Eo = j.Sentry.Integrations);
  const Zs = { ...Eo, ...xs, ...Xs };
  var In = "new", _i = "loading", yi = "loaded", Ht = "joining-meeting", je = "joined-meeting", _e = "left-meeting", ye = "error", ec = "blocked", tc = "off", nc = "sendable", rc = "loading", ic = "interrupted", oc = "playable", Nt = "unknown", ko = "full", ac = "lobby", sc = "none", To = "base", Co = "*", cc = "ejected", lc = "nbf-room", uc = "nbf-token", dc = "exp-room", hc = "exp-token", pc = "no-room", fc = "meeting-full", mc = "end-of-life", gc = "not-allowed", vc = "connection-error", _c = "cam-in-use", yc = "mic-in-use", bc = "cam-mic-in-use", wc = "permissions", Sc = "undefined-mediadevices", Ec = "not-found", kc = "constraints", Tc = "unknown", Mo = "iframe-ready-for-launch-config", Ao = "iframe-launch-config", Nn = "theme-updated", Rn = "loading", xn = "load-attempt-failed", Rt = "loaded", Oo = "started-camera", Lo = "camera-error", jn = "joining-meeting", Po = "joined-meeting", Do = "left-meeting", bi = "available-devices-updated", Io = "participant-joined", No = "participant-updated", Ro = "participant-left", xo = "participant-counts-updated", jo = "access-state-updated", Fo = "meeting-session-summary-updated", Bo = "meeting-session-state-updated", Cc = "meeting-session-data-error", Uo = "waiting-participant-added", Vo = "waiting-participant-updated", Yo = "waiting-participant-removed", Fn = "track-started", Bn = "track-stopped", $o = "transcription-started", Go = "transcription-stopped", qo = "transcription-error", xt = "recording-started", jt = "recording-stopped", Jo = "recording-stats", Wo = "recording-error", zo = "recording-upload-completed", Ho = "recording-data", Ko = "app-message", Qo = "transcription-message", Xo = "remote-media-player-started", Zo = "remote-media-player-updated", ea = "remote-media-player-stopped", ta = "local-screen-share-started", na = "local-screen-share-stopped", ra = "local-screen-share-canceled", ia = "active-speaker-change", oa = "active-speaker-mode-change", aa = "network-quality-change", sa = "network-connection", ca = "cpu-load-change", Ie = "fullscreen", Ne = "exited-fullscreen", la = "live-streaming-started", ua = "live-streaming-updated", da = "live-streaming-stopped", ha = "live-streaming-error", pa = "lang-updated", fa = "receive-settings-updated", ma = "input-settings-updated", Ft = "nonfatal-error", Bt = "error", wi = 102400, pn = "iframe-call-message", Si = "local-screen-start", Lt = "register-input-handler", Ei = "daily-method-update-live-streaming-endpoints", ct = "transmit-log", dt = "daily-custom-track", Ut = { NONE: "none", BGBLUR: "background-blur", BGIMAGE: "background-image" }, ga = { NONE: "none", NOISE_CANCELLATION: "noise-cancellation" }, Un = { PLAY: "play", PAUSE: "pause" }, ki = 10, fn = ["jpg", "png", "jpeg"], Mc = "add-endpoints", Ac = "remove-endpoints";
  function ge() {
    return !B() && typeof window < "u" && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : "";
  }
  function B() {
    return typeof navigator < "u" && navigator.product && navigator.product === "ReactNative";
  }
  function va() {
    return !!ge().match(/iPad|iPhone|iPod/i);
  }
  function _a() {
    return navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
  }
  function Oc() {
    return !!(navigator && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) && (function(n, e) {
      if (!n || !e)
        return !0;
      switch (n) {
        case "Chrome":
          return e.major >= 75;
        case "Safari":
          return RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection") && !(e.major === 13 && e.minor === 0 && e.point === 0);
        case "Firefox":
          return e.major >= 67;
      }
      return !0;
    }(Le(), wa()) || B());
  }
  function Ti() {
    if (B() || !document)
      return !1;
    var n = document.createElement("iframe");
    return !!n.requestFullscreen || !!n.webkitRequestFullscreen;
  }
  function ya() {
    var n = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
    return !B() && (n ? function() {
      return Vn() ? !1 : ["Chrome", "Firefox"].includes(Le());
    }() : function() {
      if (Vn())
        return !1;
      var e = Le();
      if (va() && e === "Safari") {
        var t = ir();
        if (t.major === 15 && t.minor < 4)
          return !1;
      }
      return ["Chrome", "Firefox", "Safari"].includes(e);
    }());
  }
  var Lc = ["Chrome", "Firefox"];
  function ba() {
    return !B() && !Vn() && typeof AudioWorkletNode < "u" && Lc.includes(Le());
  }
  function Ci() {
    return _a() && !function() {
      var n, e = Le();
      if (!ge())
        return !0;
      switch (e) {
        case "Chrome":
          return (n = Sa()).major && n.major > 0 && n.major < 61;
        case "Firefox":
          return (n = ka()).major < 78;
        case "Safari":
          return (n = ir()).major < 12;
        default:
          return !0;
      }
    }();
  }
  function Vn() {
    var n, e, t = ge(), r = t.match(/Mac/) && (!B() && typeof window < "u" && (n = window) !== null && n !== void 0 && (e = n.navigator) !== null && e !== void 0 && e.maxTouchPoints ? window.navigator.maxTouchPoints : 0) >= 5;
    return !!(t.match(/Mobi/) || t.match(/Android/) || r) || !!ge().match(/DailyAnd\//) || void 0;
  }
  function Le() {
    if (typeof window < "u") {
      var n = ge();
      return Ea() ? "Safari" : n.indexOf("Edge") > -1 ? "Edge" : n.match(/Chrome\//) ? "Chrome" : n.indexOf("Safari") > -1 ? "Safari" : n.indexOf("Firefox") > -1 ? "Firefox" : n.indexOf("MSIE") > -1 || n.indexOf(".NET") > -1 ? "IE" : "Unknown Browser";
    }
  }
  function wa() {
    switch (Le()) {
      case "Chrome":
        return Sa();
      case "Safari":
        return ir();
      case "Firefox":
        return ka();
      case "Edge":
        return function() {
          var n = 0, e = 0;
          if (typeof window < "u") {
            var t = ge().match(/Edge\/(\d+).(\d+)/);
            if (t)
              try {
                n = parseInt(t[1]), e = parseInt(t[2]);
              } catch {
              }
          }
          return { major: n, minor: e };
        }();
    }
  }
  function Sa() {
    var n = 0, e = 0, t = 0, r = 0, i = !1;
    if (typeof window < "u") {
      var a = ge(), s = a.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);
      if (s)
        try {
          n = parseInt(s[1]), e = parseInt(s[2]), t = parseInt(s[3]), r = parseInt(s[4]), i = a.indexOf("OPR/") > -1;
        } catch {
        }
    }
    return { major: n, minor: e, build: t, patch: r, opera: i };
  }
  function Ea() {
    return va() && _a();
  }
  function ir() {
    var n = 0, e = 0, t = 0;
    if (typeof window < "u") {
      var r = ge().match(/Version\/(\d+).(\d+)(.(\d+))?/);
      if (r)
        try {
          n = parseInt(r[1]), e = parseInt(r[2]), t = parseInt(r[4]);
        } catch {
        }
      else
        Ea() && (n = 14, e = 0, t = 3);
    }
    return { major: n, minor: e, point: t };
  }
  function ka() {
    var n = 0, e = 0;
    if (typeof window < "u") {
      var t = ge().match(/Firefox\/(\d+).(\d+)/);
      if (t)
        try {
          n = parseInt(t[1]), e = parseInt(t[2]);
        } catch {
        }
    }
    return { major: n, minor: e };
  }
  var Ta = function() {
    function n() {
      ce(this, n);
    }
    return le(n, [{ key: "addListenerForMessagesFromCallMachine", value: function(e, t, r) {
      at();
    } }, { key: "addListenerForMessagesFromDailyJs", value: function(e, t, r) {
      at();
    } }, { key: "sendMessageToCallMachine", value: function(e, t, r, i) {
      at();
    } }, { key: "sendMessageToDailyJs", value: function(e, t) {
      at();
    } }, { key: "removeListener", value: function(e) {
      at();
    } }]), n;
  }();
  function Mi(n, e) {
    var t = Object.keys(n);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(n);
      e && (r = r.filter(function(i) {
        return Object.getOwnPropertyDescriptor(n, i).enumerable;
      })), t.push.apply(t, r);
    }
    return t;
  }
  function mn(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e] != null ? arguments[e] : {};
      e % 2 ? Mi(Object(t), !0).forEach(function(r) {
        ke(n, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Mi(Object(t)).forEach(function(r) {
        Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return n;
  }
  function Pc(n) {
    var e = function() {
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
      var t, r = se(n);
      if (e) {
        var i = se(this).constructor;
        t = Reflect.construct(r, arguments, i);
      } else
        t = r.apply(this, arguments);
      return Zt(this, t);
    };
  }
  var Dc = function(n) {
    Xt(t, Ta);
    var e = Pc(t);
    function t() {
      var r;
      return ce(this, t), (r = e.call(this))._wrappedListeners = {}, r._messageCallbacks = {}, r;
    }
    return le(t, [{ key: "addListenerForMessagesFromCallMachine", value: function(r, i, a) {
      var s = this, l = function(u) {
        if (u.data && u.data.what === "iframe-call-message" && (!u.data.callFrameId || u.data.callFrameId === i) && (!u.data.from || u.data.from !== "module")) {
          var p = mn({}, u.data);
          if (delete p.from, p.callbackStamp && s._messageCallbacks[p.callbackStamp]) {
            var h = p.callbackStamp;
            s._messageCallbacks[h].call(a, p), delete s._messageCallbacks[h];
          }
          delete p.what, delete p.callbackStamp, r.call(a, p);
        }
      };
      this._wrappedListeners[r] = l, window.addEventListener("message", l);
    } }, { key: "addListenerForMessagesFromDailyJs", value: function(r, i, a) {
      var s = function(l) {
        if (!(!l.data || l.data.what !== pn || !l.data.action || l.data.from && l.data.from !== "module" || l.data.callFrameId && i && l.data.callFrameId !== i)) {
          var u = l.data;
          r.call(a, u);
        }
      };
      this._wrappedListeners[r] = s, window.addEventListener("message", s);
    } }, { key: "sendMessageToCallMachine", value: function(r, i, a, s) {
      if (!s)
        throw new Error("undefined callFrameId. Are you trying to use a DailyCall instance previously destroyed?");
      var l = mn({}, r);
      if (l.what = pn, l.from = "module", l.callFrameId = s, i) {
        var u = en();
        this._messageCallbacks[u] = i, l.callbackStamp = u;
      }
      var p = a ? a.contentWindow : window, h = this._callMachineTargetOrigin(a);
      h && p.postMessage(l, h);
    } }, { key: "sendMessageToDailyJs", value: function(r, i) {
      r.what = pn, r.callFrameId = i, r.from = "embedded", window.postMessage(r, this._targetOriginFromWindowLocation());
    } }, { key: "removeListener", value: function(r) {
      var i = this._wrappedListeners[r];
      i && (window.removeEventListener("message", i), delete this._wrappedListeners[r]);
    } }, { key: "forwardPackagedMessageToCallMachine", value: function(r, i, a) {
      var s = mn({}, r);
      s.callFrameId = a;
      var l = i ? i.contentWindow : window, u = this._callMachineTargetOrigin(i);
      u && l.postMessage(s, u);
    } }, { key: "addListenerForPackagedMessagesFromCallMachine", value: function(r, i) {
      var a = function(s) {
        if (s.data && s.data.what === "iframe-call-message" && (!s.data.callFrameId || s.data.callFrameId === i) && (!s.data.from || s.data.from !== "module")) {
          var l = s.data;
          r(l);
        }
      };
      return this._wrappedListeners[r] = a, window.addEventListener("message", a), r;
    } }, { key: "removeListenerForPackagedMessagesFromCallMachine", value: function(r) {
      var i = this._wrappedListeners[r];
      i && (window.removeEventListener("message", i), delete this._wrappedListeners[r]);
    } }, { key: "_callMachineTargetOrigin", value: function(r) {
      return r ? r.src ? new URL(r.src).origin : void 0 : this._targetOriginFromWindowLocation();
    } }, { key: "_targetOriginFromWindowLocation", value: function() {
      return window.location.protocol === "file:" ? "*" : window.location.origin;
    } }]), t;
  }();
  function Ic(n) {
    var e = function() {
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
      var t, r = se(n);
      if (e) {
        var i = se(this).constructor;
        t = Reflect.construct(r, arguments, i);
      } else
        t = r.apply(this, arguments);
      return Zt(this, t);
    };
  }
  var Nc = function(n) {
    Xt(t, Ta);
    var e = Ic(t);
    function t() {
      var r;
      return ce(this, t), r = e.call(this), global.callMachineToDailyJsEmitter = global.callMachineToDailyJsEmitter || new we.EventEmitter(), global.dailyJsToCallMachineEmitter = global.dailyJsToCallMachineEmitter || new we.EventEmitter(), r._wrappedListeners = {}, r._messageCallbacks = {}, r;
    }
    return le(t, [{ key: "addListenerForMessagesFromCallMachine", value: function(r, i, a) {
      this._addListener(r, global.callMachineToDailyJsEmitter, a, "received call machine message");
    } }, { key: "addListenerForMessagesFromDailyJs", value: function(r, i, a) {
      this._addListener(r, global.dailyJsToCallMachineEmitter, a, "received daily-js message");
    } }, { key: "sendMessageToCallMachine", value: function(r, i) {
      this._sendMessage(r, global.dailyJsToCallMachineEmitter, "sending message to call machine", i);
    } }, { key: "sendMessageToDailyJs", value: function(r) {
      this._sendMessage(r, global.callMachineToDailyJsEmitter, "sending message to daily-js");
    } }, { key: "removeListener", value: function(r) {
      var i = this._wrappedListeners[r];
      i && (global.callMachineToDailyJsEmitter.removeListener("message", i), global.dailyJsToCallMachineEmitter.removeListener("message", i), delete this._wrappedListeners[r]);
    } }, { key: "_addListener", value: function(r, i, a, s) {
      var l = this, u = function(p) {
        if (p.callbackStamp && l._messageCallbacks[p.callbackStamp]) {
          var h = p.callbackStamp;
          l._messageCallbacks[h].call(a, p), delete l._messageCallbacks[h];
        }
        r.call(a, p);
      };
      this._wrappedListeners[r] = u, i.addListener("message", u);
    } }, { key: "_sendMessage", value: function(r, i, a, s) {
      if (s) {
        var l = en();
        this._messageCallbacks[l] = s, r.callbackStamp = l;
      }
      i.emit("message", r);
    } }]), t;
  }(), Yn = "replace", $n = "shallow-merge", Ai = [Yn, $n], Rc = function() {
    function n() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.data, r = e.mergeStrategy, i = r === void 0 ? Yn : r;
      ce(this, n), n._validateMergeStrategy(i), n._validateData(t, i), this.mergeStrategy = i, this.data = t;
    }
    return le(n, [{ key: "isNoOp", value: function() {
      return n.isNoOpUpdate(this.data, this.mergeStrategy);
    } }], [{ key: "isNoOpUpdate", value: function(e, t) {
      return Object.keys(e).length === 0 && t === $n;
    } }, { key: "_validateMergeStrategy", value: function(e) {
      if (!Ai.includes(e))
        throw Error("Unrecognized mergeStrategy provided. Options are: [".concat(Ai, "]"));
    } }, { key: "_validateData", value: function(e, t) {
      if (!function(l) {
        if (l == null || F(l) !== "object")
          return !1;
        var u = Object.getPrototypeOf(l);
        return u == null || u === Object.prototype;
      }(e))
        throw Error("Meeting session data must be a plain (map-like) object");
      var r;
      try {
        if (r = JSON.stringify(e), t === Yn) {
          var i = JSON.parse(r);
          Z(i, e) || console.warn("The meeting session data provided will be modified when serialized.", i, e);
        } else if (t === $n) {
          for (var a in e)
            if (Object.hasOwnProperty.call(e, a) && e[a] !== void 0) {
              var s = JSON.parse(JSON.stringify(e[a]));
              Z(e[a], s) || console.warn("At least one key in the meeting session data provided will be modified when serialized.", s, e[a]);
            }
        }
      } catch (l) {
        throw Error("Meeting session data must be serializable to JSON: ".concat(l));
      }
      if (r.length > wi)
        throw Error("Meeting session data is too large (".concat(r.length, " characters). Maximum size suppported is ").concat(wi, "."));
    } }]), n;
  }();
  function Gn(n, e, t) {
    return Gn = function() {
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
    }() ? Reflect.construct.bind() : function(r, i, a) {
      var s = [null];
      s.push.apply(s, i);
      var l = new (Function.bind.apply(r, s))();
      return a && ft(l, a.prototype), l;
    }, Gn.apply(null, arguments);
  }
  function qn(n) {
    var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return qn = function(t) {
      if (t === null || (r = t, Function.toString.call(r).indexOf("[native code]") === -1))
        return t;
      var r;
      if (typeof t != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (e !== void 0) {
        if (e.has(t))
          return e.get(t);
        e.set(t, i);
      }
      function i() {
        return Gn(t, arguments, se(this).constructor);
      }
      return i.prototype = Object.create(t.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), ft(i, t);
    }, qn(n);
  }
  function xc(n) {
    var e = function() {
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
      var t, r = se(n);
      if (e) {
        var i = se(this).constructor;
        t = Reflect.construct(r, arguments, i);
      } else
        t = r.apply(this, arguments);
      return Zt(this, t);
    };
  }
  var jc = function() {
    function n() {
      ce(this, n), this._currentLoad = null;
    }
    return le(n, [{ key: "load", value: function(e, t, r, i) {
      if (this.loaded)
        return window._dailyCallObjectSetup(e), void r(!0);
      (function(a, s) {
        window._dailyConfig || (window._dailyConfig = {}), window._dailyConfig.callFrameId = a, window._dailyConfig.avoidEval = s;
      })(e, t), this._currentLoad && this._currentLoad.cancel(), this._currentLoad = new Fc(function() {
        r(!1);
      }, i), this._currentLoad.start();
    } }, { key: "cancel", value: function() {
      this._currentLoad && this._currentLoad.cancel();
    } }, { key: "loaded", get: function() {
      return this._currentLoad && this._currentLoad.succeeded;
    } }]), n;
  }(), Fc = function() {
    function n(e, t) {
      ce(this, n), this._attemptsRemaining = 3, this._currentAttempt = null, this._successCallback = e, this._failureCallback = t;
    }
    return le(n, [{ key: "start", value: function() {
      var e = this;
      this._currentAttempt || (this._currentAttempt = new Oi(this._successCallback, function t(r) {
        e._currentAttempt.cancelled || (e._attemptsRemaining--, e._failureCallback(r, e._attemptsRemaining > 0), e._attemptsRemaining <= 0 || setTimeout(function() {
          e._currentAttempt.cancelled || (e._currentAttempt = new Oi(e._successCallback, t), e._currentAttempt.start());
        }, 3e3));
      }), this._currentAttempt.start());
    } }, { key: "cancel", value: function() {
      this._currentAttempt && this._currentAttempt.cancel();
    } }, { key: "cancelled", get: function() {
      return this._currentAttempt && this._currentAttempt.cancelled;
    } }, { key: "succeeded", get: function() {
      return this._currentAttempt && this._currentAttempt.succeeded;
    } }]), n;
  }(), gn = function(n) {
    Xt(t, qn(Error));
    var e = xc(t);
    function t() {
      return ce(this, t), e.apply(this, arguments);
    }
    return le(t);
  }(), Kt = 2e4, Oi = function() {
    function n(t, r) {
      ce(this, n), this._loadAttemptImpl = B() || !_dailyConfig.avoidEval ? new Bc(t, r) : new Uc(t, r);
    }
    var e;
    return le(n, [{ key: "start", value: (e = C(function* () {
      return this._loadAttemptImpl.start();
    }), function() {
      return e.apply(this, arguments);
    }) }, { key: "cancel", value: function() {
      this._loadAttemptImpl.cancel();
    } }, { key: "cancelled", get: function() {
      return this._loadAttemptImpl.cancelled;
    } }, { key: "succeeded", get: function() {
      return this._loadAttemptImpl.succeeded;
    } }]), n;
  }(), Bc = function() {
    function n(a, s) {
      ce(this, n), this.cancelled = !1, this.succeeded = !1, this._networkTimedOut = !1, this._networkTimeout = null, this._iosCache = typeof iOSCallObjectBundleCache < "u" && iOSCallObjectBundleCache, this._refetchHeaders = null, this._successCallback = a, this._failureCallback = s;
    }
    var e, t, r, i;
    return le(n, [{ key: "start", value: (i = C(function* () {
      var a = $t();
      !(yield this._tryLoadFromIOSCache(a)) && this._loadFromNetwork(a);
    }), function() {
      return i.apply(this, arguments);
    }) }, { key: "cancel", value: function() {
      clearTimeout(this._networkTimeout), this.cancelled = !0;
    } }, { key: "_tryLoadFromIOSCache", value: (r = C(function* (a) {
      if (!this._iosCache)
        return !1;
      try {
        var s = yield this._iosCache.get(a);
        return !!this.cancelled || !!s && (s.code ? (Function('"use strict";' + s.code)(), this.succeeded = !0, this._successCallback(), !0) : (this._refetchHeaders = s.refetchHeaders, !1));
      } catch {
        return !1;
      }
    }), function(a) {
      return r.apply(this, arguments);
    }) }, { key: "_loadFromNetwork", value: (t = C(function* (a) {
      var s = this;
      this._networkTimeout = setTimeout(function() {
        s._networkTimedOut = !0, s._failureCallback("Timed out (>".concat(Kt, " ms) when loading call object bundle ").concat(a));
      }, Kt);
      try {
        var l = this._refetchHeaders ? { headers: this._refetchHeaders } : {}, u = yield fetch(a, l);
        if (clearTimeout(this._networkTimeout), this.cancelled || this._networkTimedOut)
          throw new gn();
        var p = yield this._getBundleCodeFromResponse(a, u);
        if (this.cancelled)
          throw new gn();
        Function('"use strict";' + p)(), this._iosCache && this._iosCache.set(a, p, u.headers), this.succeeded = !0, this._successCallback();
      } catch (h) {
        if (clearTimeout(this._networkTimeout), h instanceof gn || this.cancelled || this._networkTimedOut)
          return;
        this._failureCallback("Failed to load call object bundle ".concat(a, ": ").concat(h));
      }
    }), function(a) {
      return t.apply(this, arguments);
    }) }, { key: "_getBundleCodeFromResponse", value: (e = C(function* (a, s) {
      if (s.ok)
        return yield s.text();
      if (this._iosCache && s.status === 304)
        return (yield this._iosCache.renew(a, s.headers)).code;
      throw new Error("Received ".concat(s.status, " response"));
    }), function(a, s) {
      return e.apply(this, arguments);
    }) }]), n;
  }(), Uc = function() {
    function n(t, r) {
      ce(this, n), this.cancelled = !1, this.succeeded = !1, this._successCallback = t, this._failureCallback = r, this._attemptId = en(), this._networkTimeout = null, this._scriptElement = null;
    }
    var e;
    return le(n, [{ key: "start", value: (e = C(function* () {
      window._dailyCallMachineLoadWaitlist || (window._dailyCallMachineLoadWaitlist = /* @__PURE__ */ new Set());
      var t = $t();
      (typeof document > "u" ? "undefined" : F(document)) === "object" ? this._startLoading(t) : this._failureCallback("Call object bundle must be loaded in a DOM/web context");
    }), function() {
      return e.apply(this, arguments);
    }) }, { key: "cancel", value: function() {
      this._stopLoading(), this.cancelled = !0;
    } }, { key: "_startLoading", value: function(t) {
      var r = this;
      this._signUpForCallMachineLoadWaitlist(), this._networkTimeout = setTimeout(function() {
        r._stopLoading(), r._failureCallback("Timed out (>".concat(Kt, " ms) when loading call object bundle ").concat(t));
      }, Kt);
      var i = document.getElementsByTagName("head")[0], a = document.createElement("script");
      this._scriptElement = a, a.onload = C(function* () {
        r._stopLoading(), r.succeeded = !0, r._successCallback();
      }), a.onerror = function() {
        var s = C(function* (l) {
          r._stopLoading(), r._failureCallback("Failed to load call object bundle ".concat(l.target.src));
        });
        return function(l) {
          return s.apply(this, arguments);
        };
      }(), a.src = t, i.appendChild(a);
    } }, { key: "_stopLoading", value: function() {
      this._withdrawFromCallMachineLoadWaitlist(), clearTimeout(this._networkTimeout), this._scriptElement && (this._scriptElement.onload = null, this._scriptElement.onerror = null);
    } }, { key: "_signUpForCallMachineLoadWaitlist", value: function() {
      window._dailyCallMachineLoadWaitlist.add(this._attemptId);
    } }, { key: "_withdrawFromCallMachineLoadWaitlist", value: function() {
      window._dailyCallMachineLoadWaitlist.delete(this._attemptId);
    } }]), n;
  }(), Pt = function(n, e, t) {
    return Yc(n.local, e, t) === !0;
  }, Vc = function(n, e, t) {
    return n.local.streams && n.local.streams[e] && n.local.streams[e].stream && n.local.streams[e].stream["get".concat(t === "video" ? "Video" : "Audio", "Tracks")]()[0];
  }, Je = function(n, e, t, r) {
    var i = $c(n, e, t, r);
    return i && i.pendingTrack;
  }, Yc = function(n, e, t) {
    if (!n)
      return !1;
    var r = function(a) {
      switch (a) {
        case "avatar":
          return !0;
        case "staged":
          return a;
        default:
          return !!a;
      }
    }, i = n.public.subscribedTracks;
    return i && i[e] ? ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo"].indexOf(t) === -1 && i[e].custom ? [!0, "staged"].includes(i[e].custom) ? r(i[e].custom) : r(i[e].custom[t]) : r(i[e][t]) : !i || r(i.ALL);
  }, $c = function(n, e, t, r) {
    var i = Object.values(n.streams || {}).filter(function(a) {
      return a.participantId === e && a.type === t && a.pendingTrack && a.pendingTrack.kind === r;
    }).sort(function(a, s) {
      return new Date(s.starttime) - new Date(a.starttime);
    });
    return i && i[0];
  }, Gc = function(n, e) {
    var t = n.local.public.customTracks;
    if (t && t[e])
      return t[e].track;
  };
  function Li(n) {
    for (var e = store.getState(), t = 0, r = ["cam", "screen"]; t < r.length; t++)
      for (var i = r[t], a = 0, s = ["video", "audio"]; a < s.length; a++) {
        var l = s[a], u = i === "cam" ? l : "screen".concat(l.charAt(0).toUpperCase() + l.slice(1)), p = n.tracks[u];
        if (p) {
          var h = n.local ? Vc(e, i, l) : Je(e, n.session_id, i, l);
          p.state === "playable" && (p.track = h), p.persistentTrack = h;
        }
      }
  }
  function Pi(n) {
    try {
      var e = store.getState();
      for (var t in n.tracks)
        if (!qc(t)) {
          var r = n.tracks[t].kind;
          if (r) {
            var i = n.tracks[t];
            if (i) {
              var a = n.local ? Gc(e, t) : Je(e, n.session_id, t, r);
              i.state === "playable" && (n.tracks[t].track = a), i.persistentTrack = a;
            }
          } else
            console.error("unknown type for custom track");
        }
    } catch (s) {
      console.error(s);
    }
  }
  function qc(n) {
    return ["video", "audio", "screenVideo", "screenAudio"].includes(n);
  }
  function Di(n, e) {
    var t = store.getState();
    if (n.local) {
      if (n.audio)
        try {
          n.audioTrack = t.local.streams.cam.stream.getAudioTracks()[0], n.audioTrack || (n.audio = !1);
        } catch {
        }
      if (n.video)
        try {
          n.videoTrack = t.local.streams.cam.stream.getVideoTracks()[0], n.videoTrack || (n.video = !1);
        } catch {
        }
      if (n.screen)
        try {
          n.screenVideoTrack = t.local.streams.screen.stream.getVideoTracks()[0], n.screenAudioTrack = t.local.streams.screen.stream.getAudioTracks()[0], n.screenVideoTrack || n.screenAudioTrack || (n.screen = !1);
        } catch {
        }
    } else {
      var r = !0;
      try {
        var i = t.participants[n.session_id];
        i && i.public && i.public.rtcType && i.public.rtcType.impl === "peer-to-peer" && i.private && !["connected", "completed"].includes(i.private.peeringState) && (r = !1);
      } catch (p) {
        console.error(p);
      }
      if (!r)
        return n.audio = !1, n.audioTrack = !1, n.video = !1, n.videoTrack = !1, n.screen = !1, void (n.screenTrack = !1);
      try {
        if (t.streams, n.audio && Pt(t, n.session_id, "cam-audio")) {
          var a = Je(t, n.session_id, "cam", "audio");
          a && (e && e.audioTrack && e.audioTrack.id === a.id ? n.audioTrack = a : a.muted || (n.audioTrack = a)), n.audioTrack || (n.audio = !1);
        }
        if (n.video && Pt(t, n.session_id, "cam-video")) {
          var s = Je(t, n.session_id, "cam", "video");
          s && (e && e.videoTrack && e.videoTrack.id === s.id ? n.videoTrack = s : s.muted || (n.videoTrack = s)), n.videoTrack || (n.video = !1);
        }
        if (n.screen && Pt(t, n.session_id, "screen-audio")) {
          var l = Je(t, n.session_id, "screen", "audio");
          l && (e && e.screenAudioTrack && e.screenAudioTrack.id === l.id ? n.screenAudioTrack = l : l.muted || (n.screenAudioTrack = l));
        }
        if (n.screen && Pt(t, n.session_id, "screen-video")) {
          var u = Je(t, n.session_id, "screen", "video");
          u && (e && e.screenVideoTrack && e.screenVideoTrack.id === u.id ? n.screenVideoTrack = u : u.muted || (n.screenVideoTrack = u));
        }
        n.screenVideoTrack || n.screenAudioTrack || (n.screen = !1);
      } catch (p) {
        console.error("unexpected error matching up tracks", p);
      }
    }
  }
  function Jc(n, e) {
    var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (!t) {
      if (Array.isArray(n) || (t = function(u, p) {
        if (u) {
          if (typeof u == "string")
            return Ii(u, p);
          var h = Object.prototype.toString.call(u).slice(8, -1);
          if (h === "Object" && u.constructor && (h = u.constructor.name), h === "Map" || h === "Set")
            return Array.from(u);
          if (h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))
            return Ii(u, p);
        }
      }(n)) || e && n && typeof n.length == "number") {
        t && (n = t);
        var r = 0, i = function() {
        };
        return { s: i, n: function() {
          return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] };
        }, e: function(u) {
          throw u;
        }, f: i };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var a, s = !0, l = !1;
    return { s: function() {
      t = t.call(n);
    }, n: function() {
      var u = t.next();
      return s = u.done, u;
    }, e: function(u) {
      l = !0, a = u;
    }, f: function() {
      try {
        s || t.return == null || t.return();
      } finally {
        if (l)
          throw a;
      }
    } };
  }
  function Ii(n, e) {
    (e == null || e > n.length) && (e = n.length);
    for (var t = 0, r = new Array(e); t < e; t++)
      r[t] = n[t];
    return r;
  }
  var pe = /* @__PURE__ */ new Map(), Ze = null;
  function Wc(n, e) {
    var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (!t) {
      if (Array.isArray(n) || (t = function(u, p) {
        if (u) {
          if (typeof u == "string")
            return Ni(u, p);
          var h = Object.prototype.toString.call(u).slice(8, -1);
          if (h === "Object" && u.constructor && (h = u.constructor.name), h === "Map" || h === "Set")
            return Array.from(u);
          if (h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))
            return Ni(u, p);
        }
      }(n)) || e && n && typeof n.length == "number") {
        t && (n = t);
        var r = 0, i = function() {
        };
        return { s: i, n: function() {
          return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] };
        }, e: function(u) {
          throw u;
        }, f: i };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var a, s = !0, l = !1;
    return { s: function() {
      t = t.call(n);
    }, n: function() {
      var u = t.next();
      return s = u.done, u;
    }, e: function(u) {
      l = !0, a = u;
    }, f: function() {
      try {
        s || t.return == null || t.return();
      } finally {
        if (l)
          throw a;
      }
    } };
  }
  function Ni(n, e) {
    (e == null || e > n.length) && (e = n.length);
    for (var t = 0, r = new Array(e); t < e; t++)
      r[t] = n[t];
    return r;
  }
  var fe = /* @__PURE__ */ new Map(), pt = null, zc = 3e3;
  function Hc(n) {
    Ca() ? function(e) {
      pe.has(e) || (pe.set(e, {}), navigator.mediaDevices.enumerateDevices().then(function(t) {
        pe.has(e) && (pe.get(e).lastDevicesString = JSON.stringify(t), Ze || (Ze = function() {
          var r = C(function* () {
            var i, a = yield navigator.mediaDevices.enumerateDevices(), s = Jc(pe.keys());
            try {
              for (s.s(); !(i = s.n()).done; ) {
                var l = i.value, u = JSON.stringify(a);
                u !== pe.get(l).lastDevicesString && (pe.get(l).lastDevicesString = u, l(a));
              }
            } catch (p) {
              s.e(p);
            } finally {
              s.f();
            }
          });
          return function() {
            return r.apply(this, arguments);
          };
        }(), navigator.mediaDevices.addEventListener("devicechange", Ze)));
      }));
    }(n) : function(e) {
      fe.has(e) || (fe.set(e, {}), navigator.mediaDevices.enumerateDevices().then(function(t) {
        fe.has(e) && (fe.get(e).lastDevicesString = JSON.stringify(t), pt || (pt = setInterval(C(function* () {
          var r, i = yield navigator.mediaDevices.enumerateDevices(), a = Wc(fe.keys());
          try {
            for (a.s(); !(r = a.n()).done; ) {
              var s = r.value, l = JSON.stringify(i);
              l !== fe.get(s).lastDevicesString && (fe.get(s).lastDevicesString = l, s(i));
            }
          } catch (u) {
            a.e(u);
          } finally {
            a.f();
          }
        }), zc)));
      }));
    }(n);
  }
  function Kc(n) {
    Ca() ? function(e) {
      pe.has(e) && (pe.delete(e), pe.size === 0 && Ze && (navigator.mediaDevices.removeEventListener("devicechange", Ze), Ze = null));
    }(n) : function(e) {
      fe.has(e) && (fe.delete(e), fe.size === 0 && pt && (clearInterval(pt), pt = null));
    }(n);
  }
  function Ca() {
    return B() || navigator.mediaDevices.ondevicechange !== void 0;
  }
  var Qc = /* @__PURE__ */ new Set();
  function Xc(n, e) {
    var t = e.isLocalScreenVideo;
    return n && n.readyState === "live" && !function(r, i) {
      return (!i.isLocalScreenVideo || Le() !== "Chrome") && r.muted && !Qc.has(r.id);
    }(n, { isLocalScreenVideo: t });
  }
  var de, Zc = ["videoTrack"], el = ["result"], tl = ["preserveIframe"];
  function Ri(n, e) {
    var t = Object.keys(n);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(n);
      e && (r = r.filter(function(i) {
        return Object.getOwnPropertyDescriptor(n, i).enumerable;
      })), t.push.apply(t, r);
    }
    return t;
  }
  function A(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e] != null ? arguments[e] : {};
      e % 2 ? Ri(Object(t), !0).forEach(function(r) {
        ke(n, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Ri(Object(t)).forEach(function(r) {
        Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return n;
  }
  function nl(n) {
    var e = function() {
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
      var t, r = se(n);
      if (e) {
        var i = se(this).constructor;
        t = Reflect.construct(r, arguments, i);
      } else
        t = r.apply(this, arguments);
      return Zt(this, t);
    };
  }
  function xi(n, e) {
    var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (!t) {
      if (Array.isArray(n) || (t = function(u, p) {
        if (u) {
          if (typeof u == "string")
            return ji(u, p);
          var h = Object.prototype.toString.call(u).slice(8, -1);
          if (h === "Object" && u.constructor && (h = u.constructor.name), h === "Map" || h === "Set")
            return Array.from(u);
          if (h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))
            return ji(u, p);
        }
      }(n)) || e && n && typeof n.length == "number") {
        t && (n = t);
        var r = 0, i = function() {
        };
        return { s: i, n: function() {
          return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] };
        }, e: function(u) {
          throw u;
        }, f: i };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var a, s = !0, l = !1;
    return { s: function() {
      t = t.call(n);
    }, n: function() {
      var u = t.next();
      return s = u.done, u;
    }, e: function(u) {
      l = !0, a = u;
    }, f: function() {
      try {
        s || t.return == null || t.return();
      } finally {
        if (l)
          throw a;
      }
    } };
  }
  function ji(n, e) {
    (e == null || e > n.length) && (e = n.length);
    for (var t = 0, r = new Array(e); t < e; t++)
      r[t] = n[t];
    return r;
  }
  var Fi = "video", rl = "voice", Bi = B() ? { data: {} } : { data: {}, topology: "none" }, Ui = { present: 0, hidden: 0 }, Ma = { maxBitrate: { min: 1e5, max: 25e5 }, maxFramerate: { min: 1, max: 30 }, scaleResolutionDownBy: { min: 1, max: 8 } }, vn = Object.keys(Ma), Vi = ["state", "volume", "simulcastEncodings"], Yi = { androidInCallNotification: { title: "string", subtitle: "string", iconName: "string", disableForCustomOverride: "boolean" }, disableAutoDeviceManagement: { audio: "boolean", video: "boolean" } }, Qt = { id: { iconPath: "string", iconPathDarkMode: "string", label: "string", tooltip: "string" } }, Jn = { id: { allow: "string", controlledBy: "'*' | 'owners' | string[]", csp: "string", iconURL: "string", label: "string", loading: "'eager' | 'lazy'", location: "'main' | 'sidebar'", name: "string", referrerPolicy: "string", sandbox: "string", src: "string", srcdoc: "string", shared: "string[] | 'owners' | boolean" } }, Pe = { customIntegrations: { validate: Na, help: Da() }, customTrayButtons: { validate: Ia, help: "customTrayButtons should be a dictionary of the type ".concat(JSON.stringify(Qt)) }, url: { validate: function(n) {
    return typeof n == "string";
  }, help: "url should be a string" }, baseUrl: { validate: function(n) {
    return typeof n == "string";
  }, help: "baseUrl should be a string" }, token: { validate: function(n) {
    return typeof n == "string";
  }, help: "token should be a string", queryString: "t" }, dailyConfig: { validate: function(n, e) {
    try {
      return e.validateDailyConfig(n), window._dailyConfig || (window._dailyConfig = {}), window._dailyConfig.experimentalGetUserMediaConstraintsModify = n.experimentalGetUserMediaConstraintsModify, window._dailyConfig.userMediaVideoConstraints = n.userMediaVideoConstraints, window._dailyConfig.userMediaAudioConstraints = n.userMediaAudioConstraints, window._dailyConfig.callObjectBundleUrlOverride = n.callObjectBundleUrlOverride, window._dailyConfig.proxyUrl = n.proxyUrl, window._dailyConfig.iceConfig = n.iceConfig, !0;
    } catch (t) {
      console.error("Failed to validate dailyConfig", t);
    }
    return !1;
  }, help: "Unsupported dailyConfig. Check error logs for detailed info." }, reactNativeConfig: { validate: function(n) {
    return Ra(n, Yi);
  }, help: "reactNativeConfig should look like ".concat(JSON.stringify(Yi), ", all fields optional") }, lang: { validate: function(n) {
    return ["de", "en-us", "en", "es", "fi", "fr", "it", "jp", "ka", "nl", "no", "pl", "pt", "pt-BR", "ru", "sv", "tr", "user"].includes(n);
  }, help: "language not supported. Options are: de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, pt-BR, ru, sv, tr, user" }, userName: !0, userData: { validate: function(n) {
    try {
      return Aa(n), !0;
    } catch (e) {
      return console.error(e), !1;
    }
  }, help: "invalid userData type provided" }, startVideoOff: !0, startAudioOff: !0, activeSpeakerMode: !0, showLeaveButton: !0, showLocalVideo: !0, showParticipantsBar: !0, showFullscreenButton: !0, showUserNameChangeUI: !0, iframeStyle: !0, customLayout: !0, cssFile: !0, cssText: !0, bodyClass: !0, videoSource: { validate: function(n, e) {
    return e._preloadCache.videoDeviceId = n, !0;
  } }, audioSource: { validate: function(n, e) {
    return e._preloadCache.audioDeviceId = n, !0;
  } }, subscribeToTracksAutomatically: { validate: function(n, e) {
    return e._preloadCache.subscribeToTracksAutomatically = n, !0;
  } }, theme: { validate: function(n) {
    var e = ["accent", "accentText", "background", "backgroundAccent", "baseText", "border", "mainAreaBg", "mainAreaBgAccent", "mainAreaText", "supportiveText"], t = function(r) {
      for (var i = 0, a = Object.keys(r); i < a.length; i++) {
        var s = a[i];
        if (!e.includes(s))
          return console.error('unsupported color "'.concat(s, '". Valid colors: ').concat(e.join(", "))), !1;
        if (!r[s].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i))
          return console.error("".concat(s, ' theme color should be provided in valid hex color format. Received: "').concat(r[s], '"')), !1;
      }
      return !0;
    };
    return F(n) === "object" && ("light" in n && "dark" in n || "colors" in n) ? "light" in n && "dark" in n ? "colors" in n.light ? "colors" in n.dark ? t(n.light.colors) && t(n.dark.colors) : (console.error('Dark theme is missing "colors" property.', n), !1) : (console.error('Light theme is missing "colors" property.', n), !1) : t(n.colors) : (console.error('Theme must contain either both "light" and "dark" properties, or "colors".', n), !1);
  }, help: "unsupported theme configuration. Check error logs for detailed info." }, layoutConfig: { validate: function(n) {
    if ("grid" in n) {
      var e = n.grid;
      if ("maxTilesPerPage" in e) {
        if (!Number.isInteger(e.maxTilesPerPage))
          return console.error("grid.maxTilesPerPage should be an integer. You passed ".concat(e.maxTilesPerPage, ".")), !1;
        if (e.maxTilesPerPage > 49)
          return console.error("grid.maxTilesPerPage can't be larger than 49 without sacrificing browser performance. Please contact us at https://www.daily.co/contact to talk about your use case."), !1;
      }
      if ("minTilesPerPage" in e) {
        if (!Number.isInteger(e.minTilesPerPage))
          return console.error("grid.minTilesPerPage should be an integer. You passed ".concat(e.minTilesPerPage, ".")), !1;
        if (e.minTilesPerPage < 1)
          return console.error("grid.minTilesPerPage can't be lower than 1."), !1;
        if ("maxTilesPerPage" in e && e.minTilesPerPage > e.maxTilesPerPage)
          return console.error("grid.minTilesPerPage can't be higher than grid.maxTilesPerPage."), !1;
      }
    }
    return !0;
  }, help: "unsupported layoutConfig. Check error logs for detailed info." }, receiveSettings: { validate: function(n) {
    return Oa(n, { allowAllParticipantsKey: !1 });
  }, help: Pa({ allowAllParticipantsKey: !1 }) }, sendSettings: { validate: function(n, e) {
    return !!function(t, r) {
      try {
        return r.validateUpdateSendSettings(t), !0;
      } catch (i) {
        return console.error("Failed to validate send settings", i), !1;
      }
    }(n, e) && (e._preloadCache.sendSettings = n, !0);
  }, help: "Invalid sendSettings provided. Check error logs for detailed info." }, inputSettings: { validate: function(n, e) {
    return !!Wn(n) && (e._preloadCache.inputSettings || (e._preloadCache.inputSettings = {}), La(n), n.audio && (e._preloadCache.inputSettings.audio = n.audio), n.video && (e._preloadCache.inputSettings.video = n.video), !0);
  }, help: zn() }, layout: { validate: function(n) {
    return n === "custom-v1" || n === "browser" || n === "none";
  }, help: 'layout may only be set to "custom-v1"', queryString: "layout" }, emb: { queryString: "emb" }, embHref: { queryString: "embHref" }, dailyJsVersion: { queryString: "dailyJsVersion" }, proxy: { queryString: "proxy" }, strictMode: !0 }, Dt = { styles: { validate: function(n) {
    for (var e in n)
      if (e !== "cam" && e !== "screen")
        return !1;
    if (n.cam) {
      for (var t in n.cam)
        if (t !== "div" && t !== "video")
          return !1;
    }
    if (n.screen) {
      for (var r in n.screen)
        if (r !== "div" && r !== "video")
          return !1;
    }
    return !0;
  }, help: "styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }" }, setSubscribedTracks: { validate: function(n, e) {
    if (e._preloadCache.subscribeToTracksAutomatically)
      return !1;
    var t = [!0, !1, "staged"];
    if (t.includes(n) || !B() && n === "avatar")
      return !0;
    var r = ["audio", "video", "screenAudio", "screenVideo", "rmpAudio", "rmpVideo"];
    return function i(a) {
      var s = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
      for (var l in a)
        if (l === "custom") {
          if (!t.includes(a[l]) && !i(a[l], !0))
            return !1;
        } else {
          var u = !s && !r.includes(l), p = !t.includes(a[l]);
          if (u || p)
            return !1;
        }
      return !0;
    }(n);
  }, help: "setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: " + "true".concat(B() ? "" : " | 'avatar'", " | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }") }, setAudio: !0, setVideo: !0, setScreenShare: { validate: function(n) {
    return n === !1;
  }, help: "setScreenShare must be false, as it's only meant for stopping remote participants' screen shares" }, eject: !0, updatePermissions: { validate: function(n) {
    for (var e = 0, t = Object.entries(n); e < t.length; e++) {
      var r = Be(t[e], 2), i = r[0], a = r[1];
      switch (i) {
        case "hasPresence":
          if (typeof a != "boolean")
            return !1;
          break;
        case "canSend":
          if (a instanceof Set || a instanceof Array) {
            var s, l = ["video", "audio", "screenVideo", "screenAudio", "customVideo", "customAudio"], u = xi(a);
            try {
              for (u.s(); !(s = u.n()).done; ) {
                var p = s.value;
                if (!l.includes(p))
                  return !1;
              }
            } catch (b) {
              u.e(b);
            } finally {
              u.f();
            }
          } else if (typeof a != "boolean")
            return !1;
          a instanceof Array && (n.canSend = new Set(a));
          break;
        case "canAdmin":
          if (a instanceof Set || a instanceof Array) {
            var h, m = ["participants", "streaming", "transcription"], y = xi(a);
            try {
              for (y.s(); !(h = y.n()).done; ) {
                var S = h.value;
                if (!m.includes(S))
                  return !1;
              }
            } catch (b) {
              y.e(b);
            } finally {
              y.f();
            }
          } else if (typeof a != "boolean")
            return !1;
          a instanceof Array && (n.canAdmin = new Set(a));
          break;
        default:
          return !1;
      }
    }
    return !0;
  }, help: "updatePermissions can take hasPresence, canSend, and canAdmin permissions. hasPresence must be a boolean. canSend can be a boolean or an Array or Set of media types (video, audio, screenVideo, screenAudio, customVideo, customAudio). canAdmin can be a boolean or an Array or Set of admin types (participants, streaming, transcription)." } }, il = function(n) {
    Xt(ne, we);
    var e, t, r, i, a, s, l, u, p, h, m, y, S, b, w, T, O, Y, Se, $e, ot, ar, sr, cr, lr, ur, dr, hr, pr, fr, mr, gr, vr, _r, yr, br, wr, Sr, Wa = nl(ne);
    function ne(o) {
      var c, d, f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (ce(this, ne), ke(ve(c = Wa.call(this)), "startListeningForDeviceChanges", function() {
        Hc(c.handleDeviceChange);
      }), ke(ve(c), "stopListeningForDeviceChanges", function() {
        Kc(c.handleDeviceChange);
      }), ke(ve(c), "handleDeviceChange", function(_) {
        _ = _.map(function(E) {
          return JSON.parse(JSON.stringify(E));
        }), c.emit(bi, { action: bi, availableDevices: _ });
      }), ke(ve(c), "handleNativeAppActiveStateChange", function(_) {
        c.disableReactNativeAutoDeviceManagement("video") || (_ ? c.camUnmutedBeforeLosingNativeActiveState && c.setLocalVideo(!0) : (c.camUnmutedBeforeLosingNativeActiveState = c.localVideo(), c.camUnmutedBeforeLosingNativeActiveState && c.setLocalVideo(!1)));
      }), ke(ve(c), "handleNativeAudioFocusChange", function(_) {
        c.disableReactNativeAutoDeviceManagement("audio") || (c._hasNativeAudioFocus = _, c.toggleParticipantAudioBasedOnNativeAudioFocus(), c._hasNativeAudioFocus ? c.micUnmutedBeforeLosingNativeAudioFocus && c.setLocalAudio(!0) : (c.micUnmutedBeforeLosingNativeAudioFocus = c.localAudio(), c.setLocalAudio(!1)));
      }), ke(ve(c), "handleNativeSystemScreenCaptureStop", function() {
        c.stopScreenShare();
      }), c.strictMode = f.strictMode === void 0 || f.strictMode, de) {
        if (c._logDuplicateInstanceAttempt(), c.strictMode)
          throw new Error("Duplicate DailyIframe instances are not allowed");
      } else
        d = ve(c), de = d;
      if (f.dailyJsVersion = ne.version(), c._iframe = o, c._callObjectMode = f.layout === "none" && !c._iframe, c._preloadCache = { subscribeToTracksAutomatically: !0, audioDeviceId: null, videoDeviceId: null, outputDeviceId: null, inputSettings: null, sendSettings: null, videoTrackForNetworkConnectivityTest: null, videoTrackForConnectionQualityTest: null }, c._callObjectMode && (window._dailyPreloadCache = c._preloadCache), f.showLocalVideo !== void 0 ? c._callObjectMode ? console.error("showLocalVideo is not available in call object mode") : c._showLocalVideo = !!f.showLocalVideo : c._showLocalVideo = !0, f.showParticipantsBar !== void 0 ? c._callObjectMode ? console.error("showParticipantsBar is not available in call object mode") : c._showParticipantsBar = !!f.showParticipantsBar : c._showParticipantsBar = !0, f.customIntegrations !== void 0 ? c._callObjectMode ? console.error("customIntegrations is not available in call object mode") : c._customIntegrations = f.customIntegrations : c._customIntegrations = {}, f.customTrayButtons !== void 0 ? c._callObjectMode ? console.error("customTrayButtons is not available in call object mode") : c._customTrayButtons = f.customTrayButtons : c._customTrayButtons = {}, f.activeSpeakerMode !== void 0 ? c._callObjectMode ? console.error("activeSpeakerMode is not available in call object mode") : c._activeSpeakerMode = !!f.activeSpeakerMode : c._activeSpeakerMode = !1, f.receiveSettings ? c._callObjectMode ? c._receiveSettings = f.receiveSettings : console.error("receiveSettings is only available in call object mode") : c._receiveSettings = {}, c.validateProperties(f), c.properties = A({}, f), c._preloadCache.inputSettings || (c._preloadCache.inputSettings = {}), f.inputSettings && f.inputSettings.audio && (c._preloadCache.inputSettings.audio = f.inputSettings.audio), f.inputSettings && f.inputSettings.video && (c._preloadCache.inputSettings.video = f.inputSettings.video), c._callObjectLoader = c._callObjectMode ? new jc() : null, c._callState = In, c._isPreparingToJoin = !1, c._accessState = { access: Nt }, c._meetingSessionSummary = {}, c._finalSummaryOfPrevSession = {}, c._meetingSessionState = yn(Bi, c._callObjectMode), c._nativeInCallAudioMode = Fi, c._participants = {}, c._participantCounts = Ui, c._rmpPlayerState = {}, c._waitingParticipants = {}, c._inputEventsOn = {}, c._network = { threshold: "good", quality: 100 }, c._activeSpeaker = {}, c._callFrameId = en(), c._localAudioLevel = 0, c._remoteParticipantsAudioLevel = {}, c._messageChannel = B() ? new Nc() : new Dc(), c._iframe && (c._iframe.requestFullscreen ? c._iframe.addEventListener("fullscreenchange", function() {
        document.fullscreenElement === c._iframe ? (c.emit(Ie, { action: Ie }), c.sendMessageToCallMachine({ action: Ie })) : (c.emit(Ne, { action: Ne }), c.sendMessageToCallMachine({ action: Ne }));
      }) : c._iframe.webkitRequestFullscreen && c._iframe.addEventListener("webkitfullscreenchange", function() {
        document.webkitFullscreenElement === c._iframe ? (c.emit(Ie, { action: Ie }), c.sendMessageToCallMachine({ action: Ie })) : (c.emit(Ne, { action: Ne }), c.sendMessageToCallMachine({ action: Ne }));
      })), B()) {
        var g = c.nativeUtils();
        g.addAudioFocusChangeListener && g.removeAudioFocusChangeListener && g.addAppActiveStateChangeListener && g.removeAppActiveStateChangeListener && g.addSystemScreenCaptureStopListener && g.removeSystemScreenCaptureStopListener || console.warn("expected (add|remove)(AudioFocusChange|AppActiveStateChange|SystemScreenCaptureStop)Listener to be available in React Native"), c._hasNativeAudioFocus = !0, g.addAudioFocusChangeListener(c.handleNativeAudioFocusChange), g.addAppActiveStateChangeListener(c.handleNativeAppActiveStateChange), g.addSystemScreenCaptureStopListener(c.handleNativeSystemScreenCaptureStop);
      }
      return c._callObjectMode && c.startListeningForDeviceChanges(), c._messageChannel.addListenerForMessagesFromCallMachine(c.handleMessageFromCallMachine, c._callFrameId, ve(c)), c;
    }
    return le(ne, [{ key: "destroy", value: (Sr = C(function* () {
      try {
        yield this.leave();
      } catch {
      }
      var o = this._iframe;
      if (o) {
        var c = o.parentElement;
        c && c.removeChild(o);
      }
      if (this._messageChannel.removeListener(this.handleMessageFromCallMachine), B()) {
        var d = this.nativeUtils();
        d.removeAudioFocusChangeListener(this.handleNativeAudioFocusChange), d.removeAppActiveStateChangeListener(this.handleNativeAppActiveStateChange), d.removeSystemScreenCaptureStopListener(this.handleNativeSystemScreenCaptureStop);
      }
      this._callObjectMode && this.stopListeningForDeviceChanges(), this.resetMeetingDependentVars(), this._destroyed = !0;
      try {
        this.emit("call-instance-destroyed", { action: "call-instance-destroyed" });
      } catch {
        console.log("could not emit call-instance-destroyed");
      }
      this.strictMode && (this._callFrameId = void 0), de = void 0;
    }), function() {
      return Sr.apply(this, arguments);
    }) }, { key: "isDestroyed", value: function() {
      return !!this._destroyed;
    } }, { key: "loadCss", value: function(o) {
      var c = o.bodyClass, d = o.cssFile, f = o.cssText;
      return P(), this.sendMessageToCallMachine({ action: "load-css", cssFile: this.absoluteUrl(d), bodyClass: c, cssText: f }), this;
    } }, { key: "iframe", value: function() {
      return P(), this._iframe;
    } }, { key: "meetingState", value: function() {
      return this._callState;
    } }, { key: "accessState", value: function() {
      return he(this._callObjectMode, "accessState()"), this._accessState;
    } }, { key: "participants", value: function() {
      return this._participants;
    } }, { key: "participantCounts", value: function() {
      return this._participantCounts;
    } }, { key: "waitingParticipants", value: function() {
      return he(this._callObjectMode, "waitingParticipants()"), this._waitingParticipants;
    } }, { key: "validateParticipantProperties", value: function(o, c) {
      for (var d in c) {
        if (!Dt[d])
          throw new Error("unrecognized updateParticipant property ".concat(d));
        if (Dt[d].validate && !Dt[d].validate(c[d], this, this._participants[o]))
          throw new Error(Dt[d].help);
      }
    } }, { key: "updateParticipant", value: function(o, c) {
      return this._participants.local && this._participants.local.session_id === o && (o = "local"), o && c && (this.validateParticipantProperties(o, c), this.sendMessageToCallMachine({ action: "update-participant", id: o, properties: c })), this;
    } }, { key: "updateParticipants", value: function(o) {
      var c = this._participants.local && this._participants.local.session_id;
      for (var d in o)
        d === c && (d = "local"), d && o[d] && this.validateParticipantProperties(d, o[d]);
      return this.sendMessageToCallMachine({ action: "update-participants", participants: o }), this;
    } }, { key: "updateWaitingParticipant", value: (wr = C(function* () {
      var o = this, c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (he(this._callObjectMode, "updateWaitingParticipant()"), V(this._callState, "updateWaitingParticipant()"), typeof c != "string" || F(d) !== "object")
        throw new Error("updateWaitingParticipant() must take an id string and a updates object");
      return new Promise(function(f, g) {
        o.sendMessageToCallMachine({ action: "daily-method-update-waiting-participant", id: c, updates: d }, function(_) {
          _.error && g(_.error), _.id || g(new Error("unknown error in updateWaitingParticipant()")), f({ id: _.id });
        });
      });
    }), function() {
      return wr.apply(this, arguments);
    }) }, { key: "updateWaitingParticipants", value: (br = C(function* () {
      var o = this, c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (he(this._callObjectMode, "updateWaitingParticipants()"), V(this._callState, "updateWaitingParticipants()"), F(c) !== "object")
        throw new Error("updateWaitingParticipants() must take a mapping between ids and update objects");
      return new Promise(function(d, f) {
        o.sendMessageToCallMachine({ action: "daily-method-update-waiting-participants", updatesById: c }, function(g) {
          g.error && f(g.error), g.ids || f(new Error("unknown error in updateWaitingParticipants()")), d({ ids: g.ids });
        });
      });
    }), function() {
      return br.apply(this, arguments);
    }) }, { key: "requestAccess", value: (yr = C(function* () {
      var o = this, c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = c.access, f = d === void 0 ? { level: ko } : d, g = c.name, _ = g === void 0 ? "" : g;
      return he(this._callObjectMode, "requestAccess()"), V(this._callState, "requestAccess()"), new Promise(function(E, k) {
        o.sendMessageToCallMachine({ action: "daily-method-request-access", access: f, name: _ }, function(R) {
          R.error && k(R.error), R.access || k(new Error("unknown error in requestAccess()")), E({ access: R.access, granted: R.granted });
        });
      });
    }), function() {
      return yr.apply(this, arguments);
    }) }, { key: "localAudio", value: function() {
      return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.audio.state) : null;
    } }, { key: "localVideo", value: function() {
      return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.video.state) : null;
    } }, { key: "setLocalAudio", value: function(o) {
      return this.sendMessageToCallMachine({ action: "local-audio", state: o }), this;
    } }, { key: "setLocalVideo", value: function(o) {
      return this.sendMessageToCallMachine({ action: "local-video", state: o }), this;
    } }, { key: "getReceiveSettings", value: (_r = C(function* (o) {
      var c = this, d = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).showInheritedValues, f = d !== void 0 && d;
      if (he(this._callObjectMode, "getReceiveSettings()"), !this._dailyMainExecuted)
        return this._receiveSettings;
      switch (F(o)) {
        case "string":
          return new Promise(function(g) {
            c.sendMessageToCallMachine({ action: "get-single-participant-receive-settings", id: o, showInheritedValues: f }, function(_) {
              g(_.receiveSettings);
            });
          });
        case "undefined":
          return this._receiveSettings;
        default:
          throw new Error('first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments');
      }
    }), function(o) {
      return _r.apply(this, arguments);
    }) }, { key: "updateReceiveSettings", value: (vr = C(function* (o) {
      var c = this;
      if (he(this._callObjectMode, "updateReceiveSettings()"), !Oa(o, { allowAllParticipantsKey: !0 }))
        throw new Error(Pa({ allowAllParticipantsKey: !0 }));
      return V(this._callState, "updateReceiveSettings()", "To specify receive settings earlier, use the receiveSettings config property."), new Promise(function(d) {
        c.sendMessageToCallMachine({ action: "update-receive-settings", receiveSettings: o }, function(f) {
          d({ receiveSettings: f.receiveSettings });
        });
      });
    }), function(o) {
      return vr.apply(this, arguments);
    }) }, { key: "_prepInputSettingsToPresentToUser", value: function(o) {
      var c, d, f, g, _, E, k, R;
      if (o) {
        var q = {}, z = ((c = o.audio) === null || c === void 0 || (d = c.processor) === null || d === void 0 ? void 0 : d.type) === "none" && ((f = o.audio) === null || f === void 0 || (g = f.processor) === null || g === void 0 ? void 0 : g._isDefaultWhenNone);
        if (o.audio && !z) {
          var H = A({}, o.audio.processor);
          delete H._isDefaultWhenNone, q.audio = A(A({}, o.audio), {}, { processor: H });
        }
        var re = ((_ = o.video) === null || _ === void 0 || (E = _.processor) === null || E === void 0 ? void 0 : E.type) === "none" && ((k = o.video) === null || k === void 0 || (R = k.processor) === null || R === void 0 ? void 0 : R._isDefaultWhenNone);
        if (o.video && !re) {
          var J = A({}, o.video.processor);
          delete J._isDefaultWhenNone, q.video = A(A({}, o.video), {}, { processor: J });
        }
        return q;
      }
    } }, { key: "getInputSettings", value: function() {
      var o = this;
      return new Promise(function(c) {
        c(o._getInputSettings());
      });
    } }, { key: "_getInputSettings", value: function() {
      var o, c, d, f, g, _, E, k, R = { processor: { type: "none", _isDefaultWhenNone: !0 } };
      this._inputSettings ? (o = ((d = this._inputSettings) === null || d === void 0 ? void 0 : d.video) || R, c = ((f = this._inputSettings) === null || f === void 0 ? void 0 : f.audio) || R) : (o = ((g = this._preloadCache) === null || g === void 0 || (_ = g.inputSettings) === null || _ === void 0 ? void 0 : _.video) || R, c = ((E = this._preloadCache) === null || E === void 0 || (k = E.inputSettings) === null || k === void 0 ? void 0 : k.audio) || R);
      var q = { audio: c, video: o };
      return this._prepInputSettingsToPresentToUser(q);
    } }, { key: "updateInputSettings", value: (gr = C(function* (o) {
      var c = this;
      return Wn(o) ? (o && (this._preloadCache.inputSettings || (this._preloadCache.inputSettings = {}), La(o), o.audio && (this._preloadCache.inputSettings.audio = o.audio), o.video && (this._preloadCache.inputSettings.video = o.video)), Wn(o) ? this._callObjectMode && this.needsLoad() ? this._getInputSettings() : new Promise(function(d, f) {
        c.sendMessageToCallMachine({ action: "update-input-settings", inputSettings: o }, function(g) {
          g.error ? f(g.error) : d({ inputSettings: c._prepInputSettingsToPresentToUser(g.inputSettings) });
        });
      }) : this._getInputSettings()) : (console.error(zn()), Promise.reject(zn()));
    }), function(o) {
      return gr.apply(this, arguments);
    }) }, { key: "setBandwidth", value: function(o) {
      var c = o.kbs, d = o.trackConstraints;
      if (P(), this._dailyMainExecuted)
        return this.sendMessageToCallMachine({ action: "set-bandwidth", kbs: c, trackConstraints: d }), this;
    } }, { key: "getDailyLang", value: function() {
      var o = this;
      if (P(), this._dailyMainExecuted)
        return new Promise(function(c) {
          o.sendMessageToCallMachine({ action: "get-daily-lang" }, function(d) {
            delete d.action, delete d.callbackStamp, c(d);
          });
        });
    } }, { key: "setDailyLang", value: function(o) {
      return P(), this.sendMessageToCallMachine({ action: "set-daily-lang", lang: o }), this;
    } }, { key: "setProxyUrl", value: function(o) {
      return this.sendMessageToCallMachine({ action: "set-proxy-url", proxyUrl: o }), this;
    } }, { key: "setIceConfig", value: function(o) {
      return this.sendMessageToCallMachine({ action: "set-ice-config", iceConfig: o }), this;
    } }, { key: "meetingSessionSummary", value: function() {
      return [_e, ye].includes(this._callState) ? this._finalSummaryOfPrevSession : this._meetingSessionSummary;
    } }, { key: "getMeetingSession", value: (mr = C(function* () {
      var o = this;
      return console.warn("getMeetingSession() is deprecated: use meetingSessionSummary(), which will return immediately"), V(this._callState, "getMeetingSession()"), new Promise(function(c) {
        o.sendMessageToCallMachine({ action: "get-meeting-session" }, function(d) {
          delete d.action, delete d.callbackStamp, delete d.callFrameId, c(d);
        });
      });
    }), function() {
      return mr.apply(this, arguments);
    }) }, { key: "meetingSessionState", value: function() {
      return V(this._callState, "meetingSessionState"), this._meetingSessionState;
    } }, { key: "setMeetingSessionData", value: function(o) {
      var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "replace";
      he(this._callObjectMode, "setMeetingSessionData()"), V(this._callState, "setMeetingSessionData");
      try {
        (function(d, f) {
          new Rc({ data: d, mergeStrategy: f });
        })(o, c);
      } catch (d) {
        throw console.error(d), d;
      }
      try {
        this.sendMessageToCallMachine({ action: "set-session-data", data: o, mergeStrategy: c });
      } catch (d) {
        throw new Error("Error setting meeting session data: ".concat(d));
      }
    } }, { key: "setUserName", value: function(o, c) {
      var d = this;
      return this.properties.userName = o, new Promise(function(f) {
        d.sendMessageToCallMachine({ action: "set-user-name", name: o ?? "", thisMeetingOnly: B() || !!c && !!c.thisMeetingOnly }, function(g) {
          delete g.action, delete g.callbackStamp, f(g);
        });
      });
    } }, { key: "setUserData", value: (fr = C(function* (o) {
      var c = this;
      try {
        Aa(o);
      } catch (d) {
        throw console.error(d), d;
      }
      if (this.properties.userData = o, this._dailyMainExecuted)
        return new Promise(function(d) {
          try {
            c.sendMessageToCallMachine({ action: "set-user-data", userData: o }, function(f) {
              delete f.action, delete f.callbackStamp, delete f.callFrameId, d(f);
            });
          } catch (f) {
            throw new Error("Error setting user data: ".concat(f));
          }
        });
    }), function(o) {
      return fr.apply(this, arguments);
    }) }, { key: "validateAudioLevelInterval", value: function(o) {
      if (o && (o < 100 || typeof o != "number"))
        throw new Error("The interval must be a number greater than or equal to 100 milliseconds.");
    } }, { key: "startLocalAudioLevelObserver", value: function(o) {
      var c = this;
      if (P(), this.validateAudioLevelInterval(o), this._dailyMainExecuted)
        return new Promise(function(d, f) {
          c.sendMessageToCallMachine({ action: "start-local-audio-level-observer", interval: o }, function(g) {
            g.error ? f({ error: g.error }) : d();
          });
        });
      this._preloadCache.localAudioLevelObserver = { enabled: !0, interval: o };
    } }, { key: "stopLocalAudioLevelObserver", value: (pr = C(function* () {
      P(), this._preloadCache.localAudioLevelObserver = null, this._localAudioLevel = 0, this.sendMessageToCallMachine({ action: "stop-local-audio-level-observer" });
    }), function() {
      return pr.apply(this, arguments);
    }) }, { key: "startRemoteParticipantsAudioLevelObserver", value: function(o) {
      var c = this;
      if (P(), this.validateAudioLevelInterval(o), this._dailyMainExecuted)
        return new Promise(function(d, f) {
          c.sendMessageToCallMachine({ action: "start-remote-participants-audio-level-observer", interval: o }, function(g) {
            g.error ? f({ error: g.error }) : d();
          });
        });
      this._preloadCache.remoteParticipantsAudioLevelObserver = { enabled: !0, interval: o };
    } }, { key: "stopRemoteParticipantsAudioLevelObserver", value: (hr = C(function* () {
      P(), this._preloadCache.remoteParticipantsAudioLevelObserver = null, this._remoteParticipantsAudioLevel = {}, this.sendMessageToCallMachine({ action: "stop-remote-participants-audio-level-observer" });
    }), function() {
      return hr.apply(this, arguments);
    }) }, { key: "startCamera", value: (dr = C(function* () {
      var o = this, c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (he(this._callObjectMode, "startCamera()"), $i(this._callState, this._isPreparingToJoin, "startCamera()", "Did you mean to use setLocalAudio() and/or setLocalVideo() instead?"), De(this._testCallInProgress, "startCamera()"), this.needsLoad())
        try {
          yield this.load(c);
        } catch (d) {
          return Promise.reject(d);
        }
      else {
        if (this._didPreAuth) {
          if (c.url && c.url !== this.properties.url)
            return console.error("url in startCamera() is different than the one used in preAuth()"), Promise.reject();
          if (c.token && c.token !== this.properties.token)
            return console.error("token in startCamera() is different than the one used in preAuth()"), Promise.reject();
        }
        this.validateProperties(c), this.properties = A(A({}, this.properties), c);
      }
      return new Promise(function(d) {
        o.sendMessageToCallMachine({ action: "start-camera", properties: qe(o.properties), preloadCache: qe(o._preloadCache) }, function(f) {
          delete f.action, delete f.callbackStamp, d(f);
        });
      });
    }), function() {
      return dr.apply(this, arguments);
    }) }, { key: "validateCustomTrack", value: function(o, c, d) {
      if (d && d.length > 50)
        throw new Error("Custom track `trackName` must not be more than 50 characters");
      if (c && c !== "music" && c !== "speech" && !(c instanceof Object))
        throw new Error("Custom track `mode` must be either `music` | `speech` | `DailyMicAudioModeSettings` or `undefined`");
      if (d && ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo", "customVideoDefaults"].includes(d))
        throw new Error("Custom track `trackName` must not match a track name already used by daily: cam-audio, cam-video, customVideoDefaults, screen-video, screen-audio, rmpAudio, rmpVideo");
      if (!(o instanceof MediaStreamTrack))
        throw new Error("Custom tracks provided must be instances of MediaStreamTrack");
    } }, { key: "startCustomTrack", value: function() {
      var o = this, c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { track, mode, trackName };
      return P(), V(this._callState, "startCustomTrack()"), this.validateCustomTrack(c.track, c.mode, c.trackName), new Promise(function(d, f) {
        window._dailyPreloadCache.customTrack = c.track, c.track = dt, o.sendMessageToCallMachine({ action: "start-custom-track", properties: c }, function(g) {
          g.error ? f({ error: g.error }) : d(g.mediaTag);
        });
      });
    } }, { key: "stopCustomTrack", value: function(o) {
      var c = this;
      return P(), V(this._callState, "stopCustomTrack()"), new Promise(function(d) {
        c.sendMessageToCallMachine({ action: "stop-custom-track", mediaTag: o }, function(f) {
          d(f.mediaTag);
        });
      });
    } }, { key: "setCamera", value: function(o) {
      var c = this;
      return lt(), _n(this._dailyMainExecuted, "setCamera()"), new Promise(function(d) {
        c.sendMessageToCallMachine({ action: "set-camera", cameraDeviceId: o }, function(f) {
          d({ device: f.device });
        });
      });
    } }, { key: "setAudioDevice", value: (ur = C(function* (o) {
      return lt(), this.nativeUtils().setAudioDevice(o), { deviceId: yield this.nativeUtils().getAudioDevice() };
    }), function(o) {
      return ur.apply(this, arguments);
    }) }, { key: "cycleCamera", value: function() {
      var o = this;
      return new Promise(function(c) {
        o.sendMessageToCallMachine({ action: "cycle-camera" }, function(d) {
          c({ device: d.device });
        });
      });
    } }, { key: "cycleMic", value: function() {
      var o = this;
      return P(), new Promise(function(c) {
        o.sendMessageToCallMachine({ action: "cycle-mic" }, function(d) {
          c({ device: d.device });
        });
      });
    } }, { key: "getCameraFacingMode", value: function() {
      var o = this;
      return lt(), new Promise(function(c) {
        o.sendMessageToCallMachine({ action: "get-camera-facing-mode" }, function(d) {
          c(d.facingMode);
        });
      });
    } }, { key: "setInputDevicesAsync", value: (lr = C(function* (o) {
      var c = this, d = o.audioDeviceId, f = o.videoDeviceId, g = o.audioSource, _ = o.videoSource;
      return P(), g !== void 0 && (d = g), _ !== void 0 && (f = _), d && (this._preloadCache.audioDeviceId = d), f && (this._preloadCache.videoDeviceId = f), this._callObjectMode && this.needsLoad() ? { camera: { deviceId: this._preloadCache.videoDeviceId }, mic: { deviceId: this._preloadCache.audioDeviceId }, speaker: { deviceId: this._preloadCache.outputDeviceId } } : (d instanceof MediaStreamTrack && (d = dt), f instanceof MediaStreamTrack && (f = dt), new Promise(function(E) {
        c.sendMessageToCallMachine({ action: "set-input-devices", audioDeviceId: d, videoDeviceId: f }, function(k) {
          delete k.action, delete k.callbackStamp, k.returnPreloadCache ? E({ camera: { deviceId: c._preloadCache.videoDeviceId }, mic: { deviceId: c._preloadCache.audioDeviceId }, speaker: { deviceId: c._preloadCache.outputDeviceId } }) : E(k);
        });
      }));
    }), function(o) {
      return lr.apply(this, arguments);
    }) }, { key: "setOutputDeviceAsync", value: (cr = C(function* (o) {
      var c = this, d = o.outputDeviceId;
      return P(), d && (this._preloadCache.outputDeviceId = d), this._callObjectMode && this.needsLoad() ? { camera: { deviceId: this._preloadCache.videoDeviceId }, mic: { deviceId: this._preloadCache.audioDeviceId }, speaker: { deviceId: this._preloadCache.outputDeviceId } } : new Promise(function(f) {
        c.sendMessageToCallMachine({ action: "set-output-device", outputDeviceId: d }, function(g) {
          delete g.action, delete g.callbackStamp, g.returnPreloadCache ? f({ camera: { deviceId: c._preloadCache.videoDeviceId }, mic: { deviceId: c._preloadCache.audioDeviceId }, speaker: { deviceId: c._preloadCache.outputDeviceId } }) : f(g);
        });
      });
    }), function(o) {
      return cr.apply(this, arguments);
    }) }, { key: "getInputDevices", value: (sr = C(function* () {
      var o = this;
      return this._callObjectMode && this.needsLoad() ? { camera: { deviceId: this._preloadCache.videoDeviceId }, mic: { deviceId: this._preloadCache.audioDeviceId }, speaker: { deviceId: this._preloadCache.outputDeviceId } } : new Promise(function(c) {
        o.sendMessageToCallMachine({ action: "get-input-devices" }, function(d) {
          delete d.action, delete d.callbackStamp, d.returnPreloadCache ? c({ camera: { deviceId: o._preloadCache.videoDeviceId }, mic: { deviceId: o._preloadCache.audioDeviceId }, speaker: { deviceId: o._preloadCache.outputDeviceId } }) : c(d);
        });
      });
    }), function() {
      return sr.apply(this, arguments);
    }) }, { key: "nativeInCallAudioMode", value: function() {
      return lt(), this._nativeInCallAudioMode;
    } }, { key: "setNativeInCallAudioMode", value: function(o) {
      if (lt(), [Fi, rl].includes(o)) {
        if (o !== this._nativeInCallAudioMode)
          return this._nativeInCallAudioMode = o, !this.disableReactNativeAutoDeviceManagement("audio") && Vt(this._callState, this._isPreparingToJoin) && this.nativeUtils().setAudioMode(this._nativeInCallAudioMode), this;
      } else
        console.error("invalid in-call audio mode specified: ", o);
    } }, { key: "preAuth", value: (ar = C(function* () {
      var o = this, c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (he(this._callObjectMode, "preAuth()"), $i(this._callState, this._isPreparingToJoin, "preAuth()"), De(this._testCallInProgress, "preAuth()"), this.needsLoad() && (yield this.load(c)), !c.url)
        throw new Error("preAuth() requires at least a url to be provided");
      return this.validateProperties(c), this.properties = A(A({}, this.properties), c), new Promise(function(d, f) {
        o.sendMessageToCallMachine({ action: "daily-method-preauth", properties: qe(o.properties), preloadCache: qe(o._preloadCache) }, function(g) {
          return g.error ? f(g.error) : g.access ? (o._didPreAuth = !0, void d({ access: g.access })) : f(new Error("unknown error in preAuth()"));
        });
      });
    }), function() {
      return ar.apply(this, arguments);
    }) }, { key: "load", value: (ot = C(function* (o) {
      var c = this;
      if (this.needsLoad()) {
        if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode))
          throw new Error("Use after destroy");
        if (o && (this.validateProperties(o), this.properties = A(A({}, this.properties), o)), !this._callObjectMode && !this.properties.url)
          throw new Error("can't load iframe meeting because url property isn't set");
        this._updateCallState(_i);
        try {
          this.emit(Rn, { action: Rn });
        } catch (d) {
          console.log("could not emit 'loading'", d);
        }
        return this._callObjectMode ? new Promise(function(d, f) {
          c._callObjectLoader.cancel();
          var g = Date.now();
          c._callObjectLoader.load(c._callFrameId, c.properties.dailyConfig && c.properties.dailyConfig.avoidEval, function(_) {
            c._bundleLoadTime = _ ? "no-op" : Date.now() - g, c._updateCallState(yi), _ && c.emit(Rt, { action: Rt }), d();
          }, function(_, E) {
            if (c.emit(xn, { action: xn, errorMsg: _ }), !E) {
              c._updateCallState(ye), c.resetMeetingDependentVars();
              var k = { action: Bt, errorMsg: _, error: { type: "connection-error", msg: "Failed to load call object bundle.", details: { on: "load", sourceError: new Error(_), bundleUrl: $t() } } };
              c._maybeSendToSentry(k), c.emit(Bt, k), f(_);
            }
          });
        }) : (this._iframe.src = to(this.assembleMeetingUrl()), new Promise(function(d, f) {
          c._loadedCallback = function(g) {
            if (c._callState !== ye) {
              for (var _ in c._updateCallState(yi), (c.properties.cssFile || c.properties.cssText) && c.loadCss(c.properties), c._inputEventsOn)
                c.sendMessageToCallMachine({ action: Lt, on: _ });
              d();
            } else
              f(g);
          };
        }));
      }
    }), function(o) {
      return ot.apply(this, arguments);
    }) }, { key: "join", value: ($e = C(function* () {
      var o = this, c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      De(this._testCallInProgress, "join()");
      var d = !1;
      if (this.needsLoad()) {
        this.updateIsPreparingToJoin(!0);
        try {
          yield this.load(c);
        } catch (f) {
          return this.updateIsPreparingToJoin(!1), Promise.reject(f);
        }
      } else {
        if (d = !(!this.properties.cssFile && !this.properties.cssText), this._didPreAuth) {
          if (c.url && c.url !== this.properties.url)
            return console.error("url in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject();
          if (c.token && c.token !== this.properties.token)
            return console.error("token in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject();
        }
        if (c.url && !this._callObjectMode && c.url && c.url !== this.properties.url)
          return console.error("url in join() is different than the one used in load() (".concat(this.properties.url, " -> ").concat(c.url, ")")), this.updateIsPreparingToJoin(!1), Promise.reject();
        this.validateProperties(c), this.properties = A(A({}, this.properties), c);
      }
      if (c.showLocalVideo !== void 0 && (this._callObjectMode ? console.error("showLocalVideo is not available in callObject mode") : this._showLocalVideo = !!c.showLocalVideo), c.showParticipantsBar !== void 0 && (this._callObjectMode ? console.error("showParticipantsBar is not available in callObject mode") : this._showParticipantsBar = !!c.showParticipantsBar), this._callState === je || this._callState === Ht)
        return console.warn("already joined meeting, call leave() before joining again"), void this.updateIsPreparingToJoin(!1);
      this._updateCallState(Ht, !1);
      try {
        this.emit(jn, { action: jn });
      } catch (f) {
        console.log("could not emit 'joining-meeting'", f);
      }
      return this._preloadCache.inputSettings || (this._preloadCache.inputSettings = {}), c.inputSettings && c.inputSettings.audio && (this._preloadCache.inputSettings.audio = c.inputSettings.audio), c.inputSettings && c.inputSettings.video && (this._preloadCache.inputSettings.video = c.inputSettings.video), this.sendMessageToCallMachine({ action: "join-meeting", properties: qe(this.properties), preloadCache: qe(this._preloadCache) }), new Promise(function(f, g) {
        o._joinedCallback = function(_, E) {
          if (o._callState !== ye) {
            if (o._updateCallState(je), _)
              for (var k in _)
                o._callObjectMode && (Li(_[k]), Pi(_[k]), Di(_[k], o._participants[k])), o._participants[k] = A({}, _[k]), o.toggleParticipantAudioBasedOnNativeAudioFocus();
            d && o.loadCss(o.properties), f(_);
          } else
            g(E);
        };
      });
    }), function() {
      return $e.apply(this, arguments);
    }) }, { key: "leave", value: (Se = C(function* () {
      var o = this;
      return De(this._testCallInProgress, "leave()"), new Promise(function(c) {
        if (o._callState === _e || o._callState === ye)
          c();
        else if (o._callObjectLoader && !o._callObjectLoader.loaded) {
          o._callObjectLoader.cancel(), o._updateCallState(_e), o.resetMeetingDependentVars();
          try {
            o.emit(_e, { action: _e });
          } catch (d) {
            console.log("could not emit 'left-meeting'", d);
          }
          c();
        } else
          o._resolveLeave = c, o.sendMessageToCallMachine({ action: "leave-meeting" });
      });
    }), function() {
      return Se.apply(this, arguments);
    }) }, { key: "startScreenShare", value: (Y = C(function* () {
      var o = this, c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (_n(this._dailyMainExecuted, "startScreenShare()"), c.screenVideoSendSettings && this._validateVideoSendSettings("screenVideo", c.screenVideoSendSettings), c.mediaStream && (this._preloadCache.screenMediaStream = c.mediaStream, c.mediaStream = dt), typeof DailyNativeUtils < "u" && DailyNativeUtils.isIOS !== void 0 && DailyNativeUtils.isIOS) {
        var d = this.nativeUtils();
        if (yield d.isScreenBeingCaptured())
          return void this.emit(Ft, { action: Ft, type: "screen-share-error", errorMsg: "Could not start the screen sharing. The screen is already been captured!" });
        d.setSystemScreenCaptureStartCallback(function() {
          d.setSystemScreenCaptureStartCallback(null), o.sendMessageToCallMachine({ action: Si, captureOptions: c });
        }), d.presentSystemScreenCapturePrompt();
      } else
        this.sendMessageToCallMachine({ action: Si, captureOptions: c });
    }), function() {
      return Y.apply(this, arguments);
    }) }, { key: "stopScreenShare", value: function() {
      _n(this._dailyMainExecuted, "stopScreenShare()"), this.sendMessageToCallMachine({ action: "local-screen-stop" });
    } }, { key: "startRecording", value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this.sendMessageToCallMachine(A({ action: "local-recording-start" }, o));
    } }, { key: "updateRecording", value: function(o) {
      var c = o.layout, d = c === void 0 ? { preset: "default" } : c, f = o.instanceId;
      this.sendMessageToCallMachine({ action: "daily-method-update-recording", layout: d, instanceId: f });
    } }, { key: "stopRecording", value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this.sendMessageToCallMachine(A({ action: "local-recording-stop" }, o));
    } }, { key: "startLiveStreaming", value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this.sendMessageToCallMachine(A({ action: "daily-method-start-live-streaming" }, o));
    } }, { key: "updateLiveStreaming", value: function(o) {
      var c = o.layout, d = c === void 0 ? { preset: "default" } : c, f = o.instanceId;
      this.sendMessageToCallMachine({ action: "daily-method-update-live-streaming", layout: d, instanceId: f });
    } }, { key: "addLiveStreamingEndpoints", value: function(o) {
      var c = o.endpoints, d = o.instanceId;
      this.sendMessageToCallMachine({ action: Ei, endpointsOp: Mc, endpoints: c, instanceId: d });
    } }, { key: "removeLiveStreamingEndpoints", value: function(o) {
      var c = o.endpoints, d = o.instanceId;
      this.sendMessageToCallMachine({ action: Ei, endpointsOp: Ac, endpoints: c, instanceId: d });
    } }, { key: "stopLiveStreaming", value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this.sendMessageToCallMachine(A({ action: "daily-method-stop-live-streaming" }, o));
    } }, { key: "validateDailyConfig", value: function(o) {
      o.camSimulcastEncodings && (console.warn("camSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide camera simulcast settings."), this.validateSimulcastEncodings(o.camSimulcastEncodings)), o.screenSimulcastEncodings && console.warn("screenSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide screen simulcast settings.");
    } }, { key: "validateSimulcastEncodings", value: function(o) {
      var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, d = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
      if (o) {
        if (!(o instanceof Array))
          throw new Error("encodings must be an Array");
        if (!qi(o.length, 1, 3))
          throw new Error("encodings must be an Array with between 1 to ".concat(3, " layers"));
        for (var f = 0; f < o.length; f++) {
          var g = o[f];
          for (var _ in this._validateEncodingLayerHasValidProperties(g), g) {
            if (!vn.includes(_))
              throw new Error("Invalid key ".concat(_, ", valid keys are:") + Object.values(vn));
            if (typeof g[_] != "number")
              throw new Error("".concat(_, " must be a number"));
            if (c) {
              var E = c[_], k = E.min, R = E.max;
              if (!qi(g[_], k, R))
                throw new Error("".concat(_, " value not in range. valid range: ").concat(k, " to ").concat(R));
            }
          }
          if (d && !g.hasOwnProperty("maxBitrate"))
            throw new Error("maxBitrate is not specified");
        }
      }
    } }, { key: "startRemoteMediaPlayer", value: (O = C(function* (o) {
      var c = this, d = o.url, f = o.settings, g = f === void 0 ? { state: Un.PLAY } : f;
      try {
        (function(_) {
          if (typeof _ != "string")
            throw new Error('url parameter must be "string" type');
        })(d), Gi(g), function(_) {
          for (var E in _)
            if (!Vi.includes(E))
              throw new Error("Invalid key ".concat(E, ", valid keys are: ").concat(Vi));
          _.simulcastEncodings && this.validateSimulcastEncodings(_.simulcastEncodings, Ma, !0);
        }(g);
      } catch (_) {
        throw console.error("invalid argument Error: ".concat(_)), console.error(`startRemoteMediaPlayer arguments must be of the form:
  { url: "playback url",
  settings?:
  {state: "play"|"pause", simulcastEncodings?: [{}] } }`), _;
      }
      return new Promise(function(_, E) {
        c.sendMessageToCallMachine({ action: "daily-method-start-remote-media-player", url: d, settings: g }, function(k) {
          k.error ? E({ error: k.error, errorMsg: k.errorMsg }) : _({ session_id: k.session_id, remoteMediaPlayerState: { state: k.state, settings: k.settings } });
        });
      });
    }), function(o) {
      return O.apply(this, arguments);
    }) }, { key: "stopRemoteMediaPlayer", value: (T = C(function* (o) {
      var c = this;
      if (typeof o != "string")
        throw new Error(" remotePlayerID must be of type string");
      return new Promise(function(d, f) {
        c.sendMessageToCallMachine({ action: "daily-method-stop-remote-media-player", session_id: o }, function(g) {
          g.error ? f({ error: g.error, errorMsg: g.errorMsg }) : d();
        });
      });
    }), function(o) {
      return T.apply(this, arguments);
    }) }, { key: "updateRemoteMediaPlayer", value: (w = C(function* (o) {
      var c = this, d = o.session_id, f = o.settings;
      try {
        Gi(f);
      } catch (g) {
        throw console.error("invalid argument Error: ".concat(g)), console.error(`updateRemoteMediaPlayer arguments must be of the form:
  session_id: "participant session",
  { settings?: {state: "play"|"pause"} }`), g;
      }
      return new Promise(function(g, _) {
        c.sendMessageToCallMachine({ action: "daily-method-update-remote-media-player", session_id: d, settings: f }, function(E) {
          E.error ? _({ error: E.error, errorMsg: E.errorMsg }) : g({ session_id: E.session_id, remoteMediaPlayerState: { state: E.state, settings: E.settings } });
        });
      });
    }), function(o) {
      return w.apply(this, arguments);
    }) }, { key: "startTranscription", value: function(o) {
      this.sendMessageToCallMachine(A({ action: "daily-method-start-transcription" }, o));
    } }, { key: "stopTranscription", value: function() {
      this.sendMessageToCallMachine({ action: "daily-method-stop-transcription" });
    } }, { key: "startDialOut", value: (b = C(function* (o) {
      var c = this;
      V(this._callState, "startDialOut()");
      var d = function(f) {
        if (f) {
          if (!Array.isArray(f))
            throw new Error("Error starting dial out: audio codec must be an array");
          if (f.length <= 0)
            throw new Error("Error starting dial out: audio codec array specified but empty");
          f.forEach(function(g) {
            if (typeof g != "string")
              throw new Error("Error starting dial out: audio codec must be a string");
            if (g !== "OPUS" && g !== "PCMU" && g !== "PCMA" && g !== "G722")
              throw new Error("Error starting dial out: audio codec must be one of OPUS, PCMU, PCMA, G722");
          });
        }
      };
      if (!o.sipUri && !o.phoneNumber)
        throw new Error("Error starting dial out: either a sip uri or phone number must be provided");
      if (o.sipUri && o.phoneNumber)
        throw new Error("Error starting dial out: only one of sip uri or phone number must be provided");
      if (o.sipUri) {
        if (typeof o.sipUri != "string")
          throw new Error("Error starting dial out: sipUri must be a string");
        if (!o.sipUri.startsWith("sip:"))
          throw new Error("Error starting dial out: Invalid SIP URI, must start with 'sip:'");
        if (o.video && typeof o.video != "boolean")
          throw new Error("Error starting dial out: video must be a boolean value");
        (function(f) {
          if (f && (d(f.audio), f.video)) {
            if (!Array.isArray(f.video))
              throw new Error("Error starting dial out: video codec must be an array");
            if (f.video.length <= 0)
              throw new Error("Error starting dial out: video codec array specified but empty");
            f.video.forEach(function(g) {
              if (typeof g != "string")
                throw new Error("Error starting dial out: video codec must be a string");
              if (g !== "H264" && g !== "VP8")
                throw new Error("Error starting dial out: video codec must be H264 or VP8");
            });
          }
        })(o.codecs);
      }
      if (o.phoneNumber) {
        if (typeof o.phoneNumber != "string")
          throw new Error("Error starting dial out: phoneNumber must be a string");
        if (!/^\+\d{1,}$/.test(o.phoneNumber))
          throw new Error("Error starting dial out: Invalid phone number, must be valid phone number as per E.164");
        o.codecs && d(o.codecs.audio);
      }
      return new Promise(function(f, g) {
        c.sendMessageToCallMachine(A({ action: "dialout-start" }, o), function(_) {
          _.error ? g(_.error) : f(_);
        });
      });
    }), function(o) {
      return b.apply(this, arguments);
    }) }, { key: "stopDialOut", value: function(o) {
      var c = this;
      return V(this._callState, "stopDialOut()"), new Promise(function(d, f) {
        c.sendMessageToCallMachine(A({ action: "dialout-stop" }, o), function(g) {
          g.error ? f(g.error) : d(g);
        });
      });
    } }, { key: "sendDTMF", value: (S = C(function* (o) {
      var c = this;
      return V(this._callState, "sendDTMF()"), function(d) {
        var f = d.sessionId, g = d.tones;
        if (!f || !g)
          throw new Error("sessionId and tones are mandatory parameter");
        if (typeof f != "string" || typeof g != "string")
          throw new Error("sessionId and tones should be of string type");
        if (g.length > 20)
          throw new Error("tones string must be upto 20 characters");
        var _ = /[^0-9A-D*#]/g, E = g.match(_);
        if (E && E[0])
          throw new Error("".concat(E[0], " is not valid DTMF tone"));
      }(o), new Promise(function(d, f) {
        c.sendMessageToCallMachine(A({ action: "send-dtmf" }, o), function(g) {
          g.error ? f(g.error) : d(g);
        });
      });
    }), function(o) {
      return S.apply(this, arguments);
    }) }, { key: "getNetworkStats", value: function() {
      var o = this;
      return this._callState !== je ? { stats: { latest: {} } } : new Promise(function(c) {
        o.sendMessageToCallMachine({ action: "get-calc-stats" }, function(d) {
          c(A({ stats: d.stats }, o._network));
        });
      });
    } }, { key: "testWebsocketConnectivity", value: (y = C(function* () {
      var o = this;
      if (De(this._testCallInProgress, "testWebsocketConnectivity()"), this.needsLoad())
        try {
          yield this.load();
        } catch (c) {
          return Promise.reject(c);
        }
      return new Promise(function(c, d) {
        o.sendMessageToCallMachine({ action: "test-websocket-connectivity" }, function(f) {
          f.error ? d(f.error) : c(f.results);
        });
      });
    }), function() {
      return y.apply(this, arguments);
    }) }, { key: "abortTestWebsocketConnectivity", value: function() {
      this.sendMessageToCallMachine({ action: "abort-test-websocket-connectivity" });
    } }, { key: "_validateVideoTrackForNetworkTests", value: function(o) {
      return o ? o instanceof MediaStreamTrack ? !!Xc(o, { isLocalScreenVideo: !1 }) || (console.error("Video track is not playable. This test needs a live video track."), !1) : (console.error("Video track needs to be of type `MediaStreamTrack`."), !1) : (console.error("Missing video track. You must provide a video track in order to run this test."), !1);
    } }, { key: "testCallQuality", value: (m = C(function* (o) {
      var c = this;
      if (function(k) {
        var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", q = arguments.length > 2 ? arguments[2] : void 0;
        if (k) {
          var z = "".concat(R, " can not be called after preAuth(), startCamera(), or join() and call state has been initialized.");
          throw q && (z += " ".concat(q)), console.error(z), new Error(z);
        }
      }(this._dailyMainExecuted, "testCallQuality()"), o.videoTrack && !this._validateVideoTrackForNetworkTests(o.videoTrack))
        throw new Error("Video track error");
      var d = this._testCallAlreadyInProgress, f = function(k) {
        d || (c._testCallInProgress = k);
      };
      f(!0);
      var g = o.videoTrack, _ = sn(o, Zc);
      if (this._preloadCache.videoTrackForConnectionQualityTest = g, this.needsLoad())
        try {
          var E = this._callState;
          yield this.load(), this._callState = E;
        } catch (k) {
          return f(!1), Promise.reject(k);
        }
      return new Promise(function(k) {
        c.sendMessageToCallMachine(A(A({ action: "test-call-quality" }, _), {}, { dailyJsVersion: c.properties.dailyJsVersion }), function(R) {
          var q = R.results, z = q.result, H = sn(q, el);
          if (z === "failed") {
            var re, J = A({}, H);
            (re = H.error) !== null && re !== void 0 && re.details ? (H.error.details = JSON.parse(H.error.details), J.error = A(A({}, J.error), {}, { details: A({}, J.error.details) }), J.error.details.duringTest = "testCallQuality") : (J.error = J.error ? A({}, J.error) : {}, J.error.details = { duringTest: "testCallQuality" }), c._maybeSendToSentry(J);
          }
          f(!1), k(A({ result: z }, H));
        });
      });
    }), function(o) {
      return m.apply(this, arguments);
    }) }, { key: "stopTestCallQuality", value: function() {
      this.sendMessageToCallMachine({ action: "stop-test-call-quality" });
    } }, { key: "testConnectionQuality", value: (h = C(function* (o) {
      console.warn("testConnectionQuality() is deprecated: use testPeerToPeerCallQuality() instead");
      var c = yield this.testPeerToPeerCallQuality(o), d = { result: c.result, secondsElapsed: c.secondsElapsed };
      return c.data && (d.data = { maxRTT: c.data.maxRoundTripTime, packetLoss: c.data.avgRecvPacketLoss }), d;
    }), function(o) {
      return h.apply(this, arguments);
    }) }, { key: "testPeerToPeerCallQuality", value: (p = C(function* (o) {
      var c = this;
      if (De(this._testCallInProgress, "testConnectionQuality()"), this.needsLoad())
        try {
          yield this.load();
        } catch (g) {
          return Promise.reject(g);
        }
      var d = o.videoTrack, f = o.duration;
      if (!this._validateVideoTrackForNetworkTests(d))
        throw new Error("Video track error");
      return this._preloadCache.videoTrackForConnectionQualityTest = d, new Promise(function(g, _) {
        c.sendMessageToCallMachine({ action: "test-p2p-call-quality", duration: f }, function(E) {
          E.error ? _(E.error) : g(E.results);
        });
      });
    }), function(o) {
      return p.apply(this, arguments);
    }) }, { key: "stopTestConnectionQuality", value: function() {
      console.warn("stopTestConnectionQuality() is deprecated: use stopTestPeerToPeerCallQuality() instead"), this.stopTestPeerToPeerCallQuality();
    } }, { key: "stopTestPeerToPeerCallQuality", value: function() {
      this.sendMessageToCallMachine({ action: "stop-test-p2p-call-quality" });
    } }, { key: "testNetworkConnectivity", value: (u = C(function* (o) {
      var c = this;
      if (De(this._testCallInProgress, "testNetworkConnectivity()"), this.needsLoad())
        try {
          yield this.load();
        } catch (d) {
          return Promise.reject(d);
        }
      if (!this._validateVideoTrackForNetworkTests(o))
        throw new Error("Video track error");
      return this._preloadCache.videoTrackForNetworkConnectivityTest = o, new Promise(function(d, f) {
        c.sendMessageToCallMachine({ action: "test-network-connectivity" }, function(g) {
          g.error ? f(g.error) : d(g.results);
        });
      });
    }), function(o) {
      return u.apply(this, arguments);
    }) }, { key: "abortTestNetworkConnectivity", value: function() {
      this.sendMessageToCallMachine({ action: "abort-test-network-connectivity" });
    } }, { key: "getCpuLoadStats", value: function() {
      var o = this;
      return new Promise(function(c, d) {
        o._callState === je ? o.sendMessageToCallMachine({ action: "get-cpu-load-stats" }, function(f) {
          c(f.cpuStats);
        }) : c({ cpuLoadState: void 0, cpuLoadStateReason: void 0, stats: {} });
      });
    } }, { key: "_validateEncodingLayerHasValidProperties", value: function(o) {
      var c;
      if (!(((c = Object.keys(o)) === null || c === void 0 ? void 0 : c.length) > 0))
        throw new Error("Empty encoding is not allowed. At least one of these valid keys should be specified:" + Object.values(vn));
    } }, { key: "_validateVideoSendSettings", value: function(o, c) {
      var d = o === "screenVideo" ? ["default-screen-video", "detail-optimized", "motion-optimized", "motion-and-detail-balanced"] : ["default-video", "bandwidth-optimized", "bandwidth-and-quality-balanced", "quality-optimized", "adaptive-2-layers", "adaptive-3-layers"], f = "Video send settings should be either an object or one of the supported presets: ".concat(d.join());
      if (typeof c == "string") {
        if (!d.includes(c))
          throw new Error(f);
      } else {
        if (F(c) !== "object")
          throw new Error(f);
        if (!c.maxQuality && !c.encodings && c.allowAdaptiveLayers === void 0)
          throw new Error("Video send settings must contain at least maxQuality, allowAdaptiveLayers or encodings attribute");
        if (c.maxQuality && ["low", "medium", "high"].indexOf(c.maxQuality) === -1)
          throw new Error("maxQuality must be either low, medium or high");
        if (c.encodings) {
          var g = !1;
          switch (Object.keys(c.encodings).length) {
            case 1:
              g = !c.encodings.low;
              break;
            case 2:
              g = !c.encodings.low || !c.encodings.medium;
              break;
            case 3:
              g = !c.encodings.low || !c.encodings.medium || !c.encodings.high;
              break;
            default:
              g = !0;
          }
          if (g)
            throw new Error("Encodings must be defined as: low, low and medium, or low, medium and high.");
          c.encodings.low && this._validateEncodingLayerHasValidProperties(c.encodings.low), c.encodings.medium && this._validateEncodingLayerHasValidProperties(c.encodings.medium), c.encodings.high && this._validateEncodingLayerHasValidProperties(c.encodings.high);
        }
      }
    } }, { key: "validateUpdateSendSettings", value: function(o) {
      var c = this;
      if (!o || Object.keys(o).length === 0)
        throw new Error("Send settings must contain at least information for one track!");
      Object.entries(o).forEach(function(d) {
        var f = Be(d, 2), g = f[0], _ = f[1];
        c._validateVideoSendSettings(g, _);
      });
    } }, { key: "updateSendSettings", value: function(o) {
      var c = this;
      return this.validateUpdateSendSettings(o), this.needsLoad() ? (this._preloadCache.sendSettings = o, { sendSettings: this._preloadCache.sendSettings }) : new Promise(function(d, f) {
        c.sendMessageToCallMachine({ action: "update-send-settings", sendSettings: o }, function(g) {
          g.error ? f(g.error) : d(g.sendSettings);
        });
      });
    } }, { key: "getSendSettings", value: function() {
      return this._sendSettings || this._preloadCache.sendSettings;
    } }, { key: "getLocalAudioLevel", value: function() {
      return this._localAudioLevel;
    } }, { key: "getRemoteParticipantsAudioLevel", value: function() {
      return this._remoteParticipantsAudioLevel;
    } }, { key: "getActiveSpeaker", value: function() {
      return P(), this._activeSpeaker;
    } }, { key: "setActiveSpeakerMode", value: function(o) {
      return P(), this.sendMessageToCallMachine({ action: "set-active-speaker-mode", enabled: o }), this;
    } }, { key: "activeSpeakerMode", value: function() {
      return P(), this._activeSpeakerMode;
    } }, { key: "subscribeToTracksAutomatically", value: function() {
      return this._preloadCache.subscribeToTracksAutomatically;
    } }, { key: "setSubscribeToTracksAutomatically", value: function(o) {
      return V(this._callState, "setSubscribeToTracksAutomatically()", "Use the subscribeToTracksAutomatically configuration property."), this._preloadCache.subscribeToTracksAutomatically = o, this.sendMessageToCallMachine({ action: "daily-method-subscribe-to-tracks-automatically", enabled: o }), this;
    } }, { key: "enumerateDevices", value: (l = C(function* () {
      var o = this;
      if (this._callObjectMode) {
        var c = yield navigator.mediaDevices.enumerateDevices();
        return Le() === "Firefox" && wa().major > 115 && (c = c.filter(function(d) {
          return d.kind !== "audiooutput";
        })), { devices: c.map(function(d) {
          return JSON.parse(JSON.stringify(d));
        }) };
      }
      return new Promise(function(d) {
        o.sendMessageToCallMachine({ action: "enumerate-devices" }, function(f) {
          d({ devices: f.devices });
        });
      });
    }), function() {
      return l.apply(this, arguments);
    }) }, { key: "sendAppMessage", value: function(o) {
      var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "*";
      if (V(this._callState, "sendAppMessage()"), JSON.stringify(o).length > 4096)
        throw new Error("Message data too large. Max size is 4096");
      return this.sendMessageToCallMachine({ action: "app-msg", data: o, to: c }), this;
    } }, { key: "addFakeParticipant", value: function(o) {
      return P(), V(this._callState, "addFakeParticipant()"), this.sendMessageToCallMachine(A({ action: "add-fake-participant" }, o)), this;
    } }, { key: "setShowNamesMode", value: function(o) {
      return ee(this._callObjectMode, "setShowNamesMode()"), P(), o && o !== "always" && o !== "never" ? (console.error('setShowNamesMode argument should be "always", "never", or false'), this) : (this.sendMessageToCallMachine({ action: "set-show-names", mode: o }), this);
    } }, { key: "setShowLocalVideo", value: function() {
      var o = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
      return ee(this._callObjectMode, "setShowLocalVideo()"), P(), V(this._callState, "setShowLocalVideo()"), typeof o != "boolean" ? (console.error("setShowLocalVideo only accepts a boolean value"), this) : (this.sendMessageToCallMachine({ action: "set-show-local-video", show: o }), this._showLocalVideo = o, this);
    } }, { key: "showLocalVideo", value: function() {
      return ee(this._callObjectMode, "showLocalVideo()"), P(), this._showLocalVideo;
    } }, { key: "setShowParticipantsBar", value: function() {
      var o = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
      return ee(this._callObjectMode, "setShowParticipantsBar()"), P(), V(this._callState, "setShowParticipantsBar()"), typeof o != "boolean" ? (console.error("setShowParticipantsBar only accepts a boolean value"), this) : (this.sendMessageToCallMachine({ action: "set-show-participants-bar", show: o }), this._showParticipantsBar = o, this);
    } }, { key: "showParticipantsBar", value: function() {
      return ee(this._callObjectMode, "showParticipantsBar()"), P(), this._showParticipantsBar;
    } }, { key: "customIntegrations", value: function() {
      return P(), ee(this._callObjectMode, "customIntegrations()"), this._customIntegrations;
    } }, { key: "setCustomIntegrations", value: function(o) {
      return P(), ee(this._callObjectMode, "setCustomIntegrations()"), V(this._callState, "setCustomIntegrations()"), Na(o) ? (this.sendMessageToCallMachine({ action: "set-custom-integrations", integrations: o }), this._customIntegrations = o, this) : this;
    } }, { key: "startCustomIntegrations", value: function(o) {
      var c = this;
      if (P(), ee(this._callObjectMode, "startCustomIntegrations()"), V(this._callState, "startCustomIntegrations()"), Array.isArray(o) && o.some(function(g) {
        return typeof g != "string";
      }) || !Array.isArray(o) && typeof o != "string")
        return console.error("startCustomIntegrations() only accepts string | string[]"), this;
      var d = typeof o == "string" ? [o] : o, f = d.filter(function(g) {
        return !(g in c._customIntegrations);
      });
      return f.length ? (console.error(`Can't find custom integration(s): "`.concat(f.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "start-custom-integrations", ids: d }), this);
    } }, { key: "stopCustomIntegrations", value: function(o) {
      var c = this;
      if (P(), ee(this._callObjectMode, "stopCustomIntegrations()"), V(this._callState, "stopCustomIntegrations()"), Array.isArray(o) && o.some(function(g) {
        return typeof g != "string";
      }) || !Array.isArray(o) && typeof o != "string")
        return console.error("stopCustomIntegrations() only accepts string | string[]"), this;
      var d = typeof o == "string" ? [o] : o, f = d.filter(function(g) {
        return !(g in c._customIntegrations);
      });
      return f.length ? (console.error(`Can't find custom integration(s): "`.concat(f.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "stop-custom-integrations", ids: d }), this);
    } }, { key: "customTrayButtons", value: function() {
      return ee(this._callObjectMode, "customTrayButtons()"), P(), this._customTrayButtons;
    } }, { key: "updateCustomTrayButtons", value: function(o) {
      return ee(this._callObjectMode, "updateCustomTrayButtons()"), P(), V(this._callState, "updateCustomTrayButtons()"), Ia(o) ? (this.sendMessageToCallMachine({ action: "update-custom-tray-buttons", btns: o }), this._customTrayButtons = o, this) : (console.error("updateCustomTrayButtons only accepts a dictionary of the type ".concat(JSON.stringify(Qt))), this);
    } }, { key: "theme", value: function() {
      return ee(this._callObjectMode, "theme()"), this.properties.theme;
    } }, { key: "setTheme", value: function(o) {
      var c = this;
      return ee(this._callObjectMode, "setTheme()"), new Promise(function(d, f) {
        try {
          c.validateProperties({ theme: o }), c.properties.theme = A({}, o), c.sendMessageToCallMachine({ action: "set-theme", theme: c.properties.theme });
          try {
            c.emit(Nn, { action: Nn, theme: c.properties.theme });
          } catch (g) {
            console.log("could not emit 'theme-updated'", g);
          }
          d(c.properties.theme);
        } catch (g) {
          f(g);
        }
      });
    } }, { key: "requestFullscreen", value: (s = C(function* () {
      if (P(), this._iframe && !document.fullscreenElement && Ti())
        try {
          (yield this._iframe.requestFullscreen) ? this._iframe.requestFullscreen() : this._iframe.webkitRequestFullscreen();
        } catch (o) {
          console.log("could not make video call fullscreen", o);
        }
    }), function() {
      return s.apply(this, arguments);
    }) }, { key: "exitFullscreen", value: function() {
      P(), document.fullscreenElement ? document.exitFullscreen() : document.webkitFullscreenElement && document.webkitExitFullscreen();
    } }, { key: "getSidebarView", value: (a = C(function* () {
      var o = this;
      return this._callObjectMode ? (console.error("getSidebarView is not available in callObject mode"), Promise.resolve(null)) : new Promise(function(c) {
        o.sendMessageToCallMachine({ action: "get-sidebar-view" }, function(d) {
          c(d.view);
        });
      });
    }), function() {
      return a.apply(this, arguments);
    }) }, { key: "setSidebarView", value: function(o) {
      return this._callObjectMode ? (console.error("setSidebarView is not available in callObject mode"), this) : (this.sendMessageToCallMachine({ action: "set-sidebar-view", view: o }), this);
    } }, { key: "room", value: (i = C(function* () {
      var o = this, c = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).includeRoomConfigDefaults, d = c === void 0 || c;
      return this._accessState.access === Nt || this.needsLoad() ? this.properties.url ? { roomUrlPendingJoin: this.properties.url } : null : new Promise(function(f) {
        o.sendMessageToCallMachine({ action: "lib-room-info", includeRoomConfigDefaults: d }, function(g) {
          delete g.action, delete g.callbackStamp, f(g);
        });
      });
    }), function() {
      return i.apply(this, arguments);
    }) }, { key: "geo", value: (r = C(function* () {
      try {
        var o = yield fetch("https://gs.daily.co/_ks_/x-swsl/:");
        return { current: (yield o.json()).geo };
      } catch (c) {
        return console.error("geo lookup failed", c), { current: "" };
      }
    }), function() {
      return r.apply(this, arguments);
    }) }, { key: "setNetworkTopology", value: (t = C(function* (o) {
      var c = this;
      return P(), V(this._callState, "setNetworkTopology()"), new Promise(function(d, f) {
        c.sendMessageToCallMachine({ action: "set-network-topology", opts: o }, function(g) {
          g.error ? f({ error: g.error }) : d({ workerId: g.workerId });
        });
      });
    }), function(o) {
      return t.apply(this, arguments);
    }) }, { key: "getNetworkTopology", value: (e = C(function* () {
      var o = this;
      return new Promise(function(c, d) {
        o.needsLoad() && c({ topology: "none" }), o.sendMessageToCallMachine({ action: "get-network-topology" }, function(f) {
          f.error ? d({ error: f.error }) : c({ topology: f.topology });
        });
      });
    }), function() {
      return e.apply(this, arguments);
    }) }, { key: "setPlayNewParticipantSound", value: function(o) {
      if (P(), typeof o != "number" && o !== !0 && o !== !1)
        throw new Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(o));
      this.sendMessageToCallMachine({ action: "daily-method-set-play-ding", arg: o });
    } }, { key: "on", value: function(o, c) {
      return this._inputEventsOn[o] = {}, this.sendMessageToCallMachine({ action: Lt, on: o }), we.prototype.on.call(this, o, c);
    } }, { key: "once", value: function(o, c) {
      return this._inputEventsOn[o] = {}, this.sendMessageToCallMachine({ action: Lt, on: o }), we.prototype.once.call(this, o, c);
    } }, { key: "off", value: function(o, c) {
      return delete this._inputEventsOn[o], this.isDestroyed() || this.sendMessageToCallMachine({ action: Lt, off: o }), we.prototype.off.call(this, o, c);
    } }, { key: "validateProperties", value: function(o) {
      for (var c in o) {
        if (!Pe[c])
          throw new Error("unrecognized property '".concat(c, "'"));
        if (Pe[c].validate && !Pe[c].validate(o[c], this))
          throw new Error("property '".concat(c, "': ").concat(Pe[c].help));
      }
    } }, { key: "assembleMeetingUrl", value: function() {
      var o, c, d = A(A({}, this.properties), {}, { emb: this._callFrameId, embHref: encodeURIComponent(window.location.href), proxy: (o = window._dailyConfig) !== null && o !== void 0 && o.proxyUrl ? encodeURIComponent((c = window._dailyConfig) === null || c === void 0 ? void 0 : c.proxyUrl) : void 0 }), f = d.url.match(/\?/) ? "&" : "?";
      return d.url + f + Object.keys(Pe).filter(function(g) {
        return Pe[g].queryString && d[g] !== void 0;
      }).map(function(g) {
        return "".concat(Pe[g].queryString, "=").concat(d[g]);
      }).join("&");
    } }, { key: "needsLoad", value: function() {
      return [In, _i, _e, ye].includes(this._callState);
    } }, { key: "sendMessageToCallMachine", value: function(o, c) {
      if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode))
        throw new Error("Use after destroy");
      this._messageChannel.sendMessageToCallMachine(o, c, this._iframe, this._callFrameId);
    } }, { key: "forwardPackagedMessageToCallMachine", value: function(o) {
      this._messageChannel.forwardPackagedMessageToCallMachine(o, this._iframe, this._callFrameId);
    } }, { key: "addListenerForPackagedMessagesFromCallMachine", value: function(o) {
      return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(o, this._callFrameId);
    } }, { key: "removeListenerForPackagedMessagesFromCallMachine", value: function(o) {
      this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(o);
    } }, { key: "handleMessageFromCallMachine", value: function(o) {
      switch (o.action) {
        case Mo:
          this.sendMessageToCallMachine(A({ action: Ao }, this.properties));
          break;
        case "daily-main-executed":
          this._dailyMainExecuted = !0;
          var c = { action: ct, level: "log", code: 1011, stats: { event: "bundle load", time: this._bundleLoadTime === "no-op" ? 0 : this._bundleLoadTime, preLoaded: this._bundleLoadTime === "no-op", url: $t() } };
          this.sendMessageToCallMachine(c), this._delayDuplicateInstanceLog && this._logDuplicateInstanceAttempt();
          break;
        case Rt:
          this._loadedCallback && (this._loadedCallback(), this._loadedCallback = null);
          try {
            this.emit(o.action, o);
          } catch (M) {
            console.log("could not emit", o, M);
          }
          break;
        case Po:
          this._joinedCallback && (this._joinedCallback(o.participants), this._joinedCallback = null);
          try {
            this.emit(o.action, o);
          } catch (M) {
            console.log("could not emit", o, M);
          }
          break;
        case Io:
        case No:
          if (this._callState === _e)
            return;
          if (o.participant && o.participant.session_id) {
            var d = o.participant.local ? "local" : o.participant.session_id;
            this._callObjectMode && (Li(o.participant), Pi(o.participant), Di(o.participant, this._participants[d]));
            try {
              this.maybeParticipantTracksStopped(this._participants[d], o.participant), this.maybeParticipantTracksStarted(this._participants[d], o.participant), this.maybeEventRecordingStopped(this._participants[d], o.participant), this.maybeEventRecordingStarted(this._participants[d], o.participant);
            } catch (M) {
              console.error("track events error", M);
            }
            if (!this.compareEqualForParticipantUpdateEvent(o.participant, this._participants[d])) {
              this._participants[d] = A({}, o.participant), this.toggleParticipantAudioBasedOnNativeAudioFocus();
              try {
                this.emit(o.action, o);
              } catch (M) {
                console.log("could not emit", o, M);
              }
            }
          }
          break;
        case Ro:
          if (o.participant && o.participant.session_id) {
            var f = this._participants[o.participant.session_id];
            f && this.maybeParticipantTracksStopped(f, null), delete this._participants[o.participant.session_id];
            try {
              this.emit(o.action, o);
            } catch (M) {
              console.log("could not emit", o, M);
            }
          }
          break;
        case xo:
          if (!Z(this._participantCounts, o.participantCounts)) {
            this._participantCounts = o.participantCounts;
            try {
              this.emit(o.action, o);
            } catch (M) {
              console.log("could not emit", o, M);
            }
          }
          break;
        case jo:
          var g = { access: o.access };
          if (o.awaitingAccess && (g.awaitingAccess = o.awaitingAccess), !Z(this._accessState, g)) {
            this._accessState = g;
            try {
              this.emit(o.action, o);
            } catch (M) {
              console.log("could not emit", o, M);
            }
          }
          break;
        case Fo:
          if (o.meetingSession) {
            this._meetingSessionSummary = o.meetingSession;
            try {
              delete o.callFrameId, this.emit(o.action, o);
              var _ = A(A({}, o), {}, { action: "meeting-session-updated" });
              this.emit(_.action, _);
            } catch (M) {
              console.log("could not emit", o, M);
            }
          }
          break;
        case Bt:
          var E;
          this._iframe && !o.preserveIframe && (this._iframe.src = ""), this._updateCallState(ye), this.resetMeetingDependentVars(), this._loadedCallback && (this._loadedCallback(o.errorMsg), this._loadedCallback = null), o.preserveIframe;
          var k = sn(o, tl);
          k != null && (E = k.error) !== null && E !== void 0 && E.details && (k.error.details = JSON.parse(k.error.details)), this._maybeSendToSentry(o), this._joinedCallback && (this._joinedCallback(null, k), this._joinedCallback = null);
          try {
            this.emit(o.action, k);
          } catch (M) {
            console.log("could not emit", o, M);
          }
          break;
        case Do:
          this._callState !== ye && this._updateCallState(_e), this.resetMeetingDependentVars(), this._resolveLeave && (this._resolveLeave(), this._resolveLeave = null);
          try {
            this.emit(o.action, o);
          } catch (M) {
            console.log("could not emit", o, M);
          }
          break;
        case "selected-devices-updated":
          if (o.devices)
            try {
              this.emit(o.action, o);
            } catch (M) {
              console.log("could not emit", o, M);
            }
          break;
        case aa:
          var R = o.threshold, q = o.quality;
          if (R !== this._network.threshold || q !== this._network.quality) {
            this._network.quality = q, this._network.threshold = R;
            try {
              this.emit(o.action, o);
            } catch (M) {
              console.log("could not emit", o, M);
            }
          }
          break;
        case ca:
          if (o && o.cpuLoadState)
            try {
              this.emit(o.action, o);
            } catch (M) {
              console.log("could not emit", o, M);
            }
          break;
        case ia:
          var z = o.activeSpeaker;
          if (this._activeSpeaker.peerId !== z.peerId) {
            this._activeSpeaker.peerId = z.peerId;
            try {
              this.emit(o.action, { action: o.action, activeSpeaker: this._activeSpeaker });
            } catch (M) {
              console.log("could not emit", o, M);
            }
          }
          break;
        case "show-local-video-changed":
          if (this._callObjectMode)
            return;
          var H = o.show;
          this._showLocalVideo = H;
          try {
            this.emit(o.action, { action: o.action, show: H });
          } catch (M) {
            console.log("could not emit", o, M);
          }
          break;
        case oa:
          var re = o.enabled;
          if (this._activeSpeakerMode !== re) {
            this._activeSpeakerMode = re;
            try {
              this.emit(o.action, { action: o.action, enabled: this._activeSpeakerMode });
            } catch (M) {
              console.log("could not emit", o, M);
            }
          }
          break;
        case Uo:
        case Vo:
        case Yo:
          this._waitingParticipants = o.allWaitingParticipants;
          try {
            this.emit(o.action, { action: o.action, participant: o.participant });
          } catch (M) {
            console.log("could not emit", o, M);
          }
          break;
        case fa:
          if (!Z(this._receiveSettings, o.receiveSettings)) {
            this._receiveSettings = o.receiveSettings;
            try {
              this.emit(o.action, { action: o.action, receiveSettings: o.receiveSettings });
            } catch (M) {
              console.log("could not emit", o, M);
            }
          }
          break;
        case ma:
          if (!Z(this._inputSettings, o.inputSettings)) {
            var J = this._getInputSettings();
            if (this._inputSettings = o.inputSettings, this._preloadCache.inputSettings = {}, !Z(J, this._getInputSettings()))
              try {
                this.emit(o.action, { action: o.action, inputSettings: this._getInputSettings() });
              } catch (M) {
                console.log("could not emit", o, M);
              }
          }
          break;
        case "send-settings-updated":
          if (!Z(this._sendSettings, o.sendSettings)) {
            this._sendSettings = o.sendSettings, this._preloadCache.sendSettings = null;
            try {
              this.emit(o.action, { action: o.action, sendSettings: o.sendSettings });
            } catch (M) {
              console.log("could not emit", o, M);
            }
          }
          break;
        case "local-audio-level":
          this._localAudioLevel = o.audioLevel, this.emitDailyJSEvent(o);
          break;
        case "remote-participants-audio-level":
          this._remoteParticipantsAudioLevel = o.participantsAudioLevel, this.emitDailyJSEvent(o);
          break;
        case Xo:
          var an = o.session_id;
          this._rmpPlayerState[an] = o.playerState, this.emitDailyJSEvent(o);
          break;
        case ea:
          delete this._rmpPlayerState[o.session_id], this.emitDailyJSEvent(o);
          break;
        case Zo:
          var K = o.session_id, ue = this._rmpPlayerState[K];
          ue && this.compareEqualForRMPUpdateEvent(ue, o.remoteMediaPlayerState) || (this._rmpPlayerState[K] = o.remoteMediaPlayerState, this.emitDailyJSEvent(o));
          break;
        case "custom-button-click":
        case "sidebar-view-changed":
          this.emitDailyJSEvent(o);
          break;
        case Bo:
          var Ge = this._meetingSessionState.topology !== (o.meetingSessionState && o.meetingSessionState.topology);
          this._meetingSessionState = yn(o.meetingSessionState, this._callObjectMode), (this._callObjectMode || Ge) && this.emitDailyJSEvent(o);
          break;
        case xt:
        case jt:
        case Jo:
        case Wo:
        case zo:
        case $o:
        case Go:
        case qo:
        case Oo:
        case Lo:
        case Ko:
        case Qo:
        case ta:
        case na:
        case ra:
        case sa:
        case Ho:
        case la:
        case ua:
        case da:
        case ha:
        case Ft:
        case pa:
        case "dialin-connected":
        case "dialin-error":
        case "dialin-stopped":
        case "dialin-warning":
        case "dialout-connected":
        case "dialout-error":
        case "dialout-stopped":
        case "dialout-warning":
          try {
            this.emit(o.action, o);
          } catch (M) {
            console.log("could not emit", o, M);
          }
          break;
        case "request-fullscreen":
          this.requestFullscreen();
          break;
        case "request-exit-fullscreen":
          this.exitFullscreen();
      }
    } }, { key: "maybeEventRecordingStopped", value: function(o, c) {
      var d = "record";
      if (o && !c.local && c[d] === !1 && o[d] !== c[d])
        try {
          this.emit(jt, { action: jt });
        } catch (f) {
          console.log("could not emit", f);
        }
    } }, { key: "maybeEventRecordingStarted", value: function(o, c) {
      var d = "record";
      if (o && !c.local && c[d] === !0 && o[d] !== c[d])
        try {
          this.emit(xt, { action: xt });
        } catch (f) {
          console.log("could not emit", f);
        }
    } }, { key: "maybeEventTrackStopped", value: function(o, c, d, f) {
      if (o && (o.readyState === "ended" || !c || o.id !== c.id))
        try {
          this.emit(Bn, { action: Bn, track: o, participant: d, type: f });
        } catch (g) {
          console.log("maybeEventTrackStopped: could not emit", g);
        }
    } }, { key: "maybeEventTrackStarted", value: function(o, c, d, f) {
      if (c && (!o || o.readyState === "ended" || c.id !== o.id))
        try {
          this.emit(Fn, { action: Fn, track: c, participant: d, type: f });
        } catch (g) {
          console.log("maybeEventTrackStarted: could not emit", g);
        }
    } }, { key: "maybeParticipantTracksStopped", value: function(o, c) {
      if (o)
        for (var d in o.tracks)
          this.maybeEventTrackStopped(o.tracks[d].track, c && c.tracks[d] ? c.tracks[d].track : null, c, d);
    } }, { key: "maybeParticipantTracksStarted", value: function(o, c) {
      if (c)
        for (var d in c.tracks)
          this.maybeEventTrackStarted(o && o.tracks[d] ? o.tracks[d].track : null, c.tracks[d].track, c, d);
    } }, { key: "compareEqualForRMPUpdateEvent", value: function(o, c) {
      var d, f;
      return o.state === c.state && ((d = o.settings) === null || d === void 0 ? void 0 : d.volume) === ((f = c.settings) === null || f === void 0 ? void 0 : f.volume);
    } }, { key: "emitDailyJSEvent", value: function(o) {
      try {
        this.emit(o.action, o);
      } catch (c) {
        console.log("could not emit", o, c);
      }
    } }, { key: "compareEqualForParticipantUpdateEvent", value: function(o, c) {
      return !!Z(o, c) && (!o.videoTrack || !c.videoTrack || o.videoTrack.id === c.videoTrack.id && o.videoTrack.muted === c.videoTrack.muted && o.videoTrack.enabled === c.videoTrack.enabled) && (!o.audioTrack || !c.audioTrack || o.audioTrack.id === c.audioTrack.id && o.audioTrack.muted === c.audioTrack.muted && o.audioTrack.enabled === c.audioTrack.enabled);
    } }, { key: "nativeUtils", value: function() {
      return B() ? typeof DailyNativeUtils > "u" ? (console.warn("in React Native, DailyNativeUtils is expected to be available"), null) : DailyNativeUtils : null;
    } }, { key: "updateIsPreparingToJoin", value: function(o) {
      this._updateCallState(this._callState, o);
    } }, { key: "_updateCallState", value: function(o) {
      var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._isPreparingToJoin;
      if (o !== this._callState || c !== this._isPreparingToJoin) {
        var d = this._callState, f = this._isPreparingToJoin;
        this._callState = o, this._isPreparingToJoin = c;
        var g = Vt(d, f), _ = Vt(this._callState, this._isPreparingToJoin);
        g !== _ && (this.updateKeepDeviceAwake(_), this.updateDeviceAudioMode(_), this.updateShowAndroidOngoingMeetingNotification(_), this.updateNoOpRecordingEnsuringBackgroundContinuity(_));
      }
    } }, { key: "resetMeetingDependentVars", value: function() {
      this._participants = {}, this._participantCounts = Ui, this._waitingParticipants = {}, this._activeSpeaker = {}, this._activeSpeakerMode = !1, this._didPreAuth = !1, this._accessState = { access: Nt }, this._finalSummaryOfPrevSession = this._meetingSessionSummary, this._meetingSessionSummary = {}, this._meetingSessionState = yn(Bi, this._callObjectMode), this._receiveSettings = {}, this._inputSettings = void 0, this._sendSettings = {}, this._localAudioLevel = 0, this._remoteParticipantsAudioLevel = {}, this._dailyMainExecuted = !1, this._bundleLoadTime = void 0, this._preloadCache;
    } }, { key: "updateKeepDeviceAwake", value: function(o) {
      B() && this.nativeUtils().setKeepDeviceAwake(o, this._callFrameId);
    } }, { key: "updateDeviceAudioMode", value: function(o) {
      if (B() && !this.disableReactNativeAutoDeviceManagement("audio")) {
        var c = o ? this._nativeInCallAudioMode : "idle";
        this.nativeUtils().setAudioMode(c);
      }
    } }, { key: "updateShowAndroidOngoingMeetingNotification", value: function(o) {
      if (B() && this.nativeUtils().setShowOngoingMeetingNotification) {
        var c, d, f, g;
        if (this.properties.reactNativeConfig && this.properties.reactNativeConfig.androidInCallNotification) {
          var _ = this.properties.reactNativeConfig.androidInCallNotification;
          c = _.title, d = _.subtitle, f = _.iconName, g = _.disableForCustomOverride;
        }
        g && (o = !1), this.nativeUtils().setShowOngoingMeetingNotification(o, c, d, f, this._callFrameId);
      }
    } }, { key: "updateNoOpRecordingEnsuringBackgroundContinuity", value: function(o) {
      B() && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(o);
    } }, { key: "toggleParticipantAudioBasedOnNativeAudioFocus", value: function() {
      if (B()) {
        var o = window.store.getState();
        for (var c in o.streams) {
          var d = o.streams[c];
          d && d.pendingTrack && d.pendingTrack.kind === "audio" && (d.pendingTrack.enabled = this._hasNativeAudioFocus);
        }
      }
    } }, { key: "disableReactNativeAutoDeviceManagement", value: function(o) {
      return this.properties.reactNativeConfig && this.properties.reactNativeConfig.disableAutoDeviceManagement && this.properties.reactNativeConfig.disableAutoDeviceManagement[o];
    } }, { key: "absoluteUrl", value: function(o) {
      if (o !== void 0) {
        var c = document.createElement("a");
        return c.href = o, c.href;
      }
    } }, { key: "sayHello", value: function() {
      var o = "hello, world.";
      return console.log(o), o;
    } }, { key: "_logCallQualityTestResults", value: function(o) {
      if (this._dailyMainExecuted) {
        var c = { action: ct, level: "info", code: 1012, results: o };
        this.sendMessageToCallMachine(c);
      } else
        console.warn("_logCallQualityTestResults() must be called after daily initialization");
    } }, { key: "_logUseAfterDestroy", value: function() {
      if (this.needsLoad())
        if (de && !de.needsLoad()) {
          var o = { action: ct, level: "error", code: this.strictMode ? 9995 : 9997 };
          de.sendMessageToCallMachine(o);
        } else
          this.strictMode || console.error("You are are attempting to use a call instance that was previously destroyed, which is unsupported. Please remove `strictMode: false` from your constructor properties to enable strict mode to track down and fix this unsupported usage.");
      else {
        var c = { action: ct, level: "error", code: this.strictMode ? 9995 : 9997 };
        this._messageChannel.sendMessageToCallMachine(c, null, this._iframe, this._callFrameId);
      }
    } }, { key: "_logDuplicateInstanceAttempt", value: function() {
      var o = de._dailyMainExecuted ? de : this._dailyMainExecuted ? this : void 0;
      o ? o.sendMessageToCallMachine({ action: ct, level: "error", code: this.strictMode ? 9990 : 9992 }) : (this._delayDuplicateInstanceLog = !0, de._delayDuplicateInstanceLog = !0);
    } }, { key: "_maybeSendToSentry", value: function(o) {
      var c, d, f, g, _, E;
      if (!((c = o.error) !== null && c !== void 0 && c.type && !["connection-error", "end-of-life", "no-room"].includes(o.error.type))) {
        var k = (d = this.properties) !== null && d !== void 0 && d.url ? new URL(this.properties.url) : void 0, R = "production";
        k && k.host.includes(".staging.daily") && (R = "staging");
        var q, z, H, re, J, an = new Gs({ dsn: "https://f10f1c81e5d44a4098416c0867a8b740@o77906.ingest.sentry.io/168844", transport: qs, integrations: [new Zs.GlobalHandlers({ onunhandledrejection: !1 })], environment: R }), K = new tr(an, void 0, ne.version());
        if (this.session_id && K.setExtra("sessionId", this.session_id), this.properties) {
          var ue = A({}, this.properties);
          ue.userName = ue.userName ? "[Filtered]" : void 0, ue.userData = ue.userData ? "[Filtered]" : void 0, ue.token = ue.token ? "[Filtered]" : void 0, K.setExtra("properties", ue);
        }
        if (k) {
          var Ge = k.searchParams.get("domain");
          if (!Ge) {
            var M = k.host.match(/(.*?)\./);
            Ge = M && M[1] || "";
          }
          Ge && K.setTag("domain", Ge);
        }
        o.error && (K.setTag("fatalErrorType", o.error.type), K.setExtra("errorDetails", o.error.details), !((q = o.error.details) === null || q === void 0) && q.uri && K.setTag("serverAddress", o.error.details.uri), !((z = o.error.details) === null || z === void 0) && z.workerGroup && K.setTag("workerGroup", o.error.details.workerGroup), !((H = o.error.details) === null || H === void 0) && H.geoGroup && K.setTag("geoGroup", o.error.details.geoGroup), !((re = o.error.details) === null || re === void 0) && re.bundleUrl && K.setTag("bundleUrl", o.error.details.bundleUrl), !((J = o.error.details) === null || J === void 0) && J.on && K.setTag("connectionAttempt", o.error.details.on)), K.setTags({ callMode: this._callObjectMode ? B() ? "reactNative" : (f = this.properties) !== null && f !== void 0 && (g = f.dailyConfig) !== null && g !== void 0 && (_ = g.callMode) !== null && _ !== void 0 && _.includes("prebuilt") ? this.properties.dailyConfig.callMode : "custom" : "prebuilt-frame", version: ne.version() });
        var za = ((E = o.error) === null || E === void 0 ? void 0 : E.msg) || o.errorMsg;
        K.run(function(Ha) {
          Ha.captureException(new Error(za));
        });
      }
    } }], [{ key: "supportedBrowser", value: function() {
      if (B())
        return { supported: !0, mobile: !0, name: "React Native", version: null, supportsScreenShare: !0, supportsSfu: !0, supportsVideoProcessing: !1, supportsAudioProcessing: !1 };
      var o = ss.getParser(ge());
      return { supported: !!Ci(), mobile: o.getPlatformType() === "mobile", name: o.getBrowserName(), version: o.getBrowserVersion(), supportsFullscreen: !!Ti(), supportsScreenShare: !!Oc(), supportsSfu: !!Ci(), supportsVideoProcessing: ya(), supportsAudioProcessing: ba() };
    } }, { key: "version", value: function() {
      return "0.58.0";
    } }, { key: "createCallObject", value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return o.layout = "none", new ne(null, o);
    } }, { key: "wrap", value: function(o) {
      var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (P(), !o || !o.contentWindow || typeof o.src != "string")
        throw new Error("DailyIframe::Wrap needs an iframe-like first argument");
      return c.layout || (c.customLayout ? c.layout = "custom-v1" : c.layout = "browser"), new ne(o, c);
    } }, { key: "createFrame", value: function(o, c) {
      var d, f;
      P(), o && c ? (d = o, f = c) : o && o.append ? (d = o, f = {}) : (d = document.body, f = o || {});
      var g = f.iframeStyle;
      g || (g = d === document.body ? { position: "fixed", border: "1px solid black", backgroundColor: "white", width: "375px", height: "450px", right: "1em", bottom: "1em" } : { border: 0, width: "100%", height: "100%" });
      var _ = document.createElement("iframe");
      window.navigator && window.navigator.userAgent.match(/Chrome\/61\./) ? _.allow = "microphone, camera" : _.allow = "microphone; camera; autoplay; display-capture; screen-wake-lock", _.style.visibility = "hidden", d.appendChild(_), _.style.visibility = null, Object.keys(g).forEach(function(E) {
        return _.style[E] = g[E];
      }), f.layout || (f.customLayout ? f.layout = "custom-v1" : f.layout = "browser");
      try {
        return new ne(_, f);
      } catch (E) {
        throw d.removeChild(_), E;
      }
    } }, { key: "createTransparentFrame", value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      P();
      var c = document.createElement("iframe");
      return c.allow = "microphone; camera; autoplay", c.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      pointer-events: none;
    `, document.body.appendChild(c), o.layout || (o.layout = "custom-v1"), ne.wrap(c, o);
    } }, { key: "getCallInstance", value: function() {
      return de;
    } }]), ne;
  }();
  function qe(n) {
    var e = {};
    for (var t in n)
      n[t] instanceof MediaStreamTrack ? e[t] = dt : (t === "dailyConfig" && (n[t].modifyLocalSdpHook && (window._dailyConfig && (window._dailyConfig.modifyLocalSdpHook = n[t].modifyLocalSdpHook), delete n[t].modifyLocalSdpHook), n[t].modifyRemoteSdpHook && (window._dailyConfig && (window._dailyConfig.modifyRemoteSdpHook = n[t].modifyRemoteSdpHook), delete n[t].modifyRemoteSdpHook)), e[t] = n[t]);
    return e;
  }
  function V(n) {
    var e = arguments.length > 2 ? arguments[2] : void 0;
    if (n !== je) {
      var t = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " only supported after join.");
      throw e && (t += " ".concat(e)), console.error(t), new Error(t);
    }
  }
  function Vt(n, e) {
    return [Ht, je].includes(n) || e;
  }
  function $i(n, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "This daily-js method", r = arguments.length > 3 ? arguments[3] : void 0;
    if (Vt(n, e)) {
      var i = "".concat(t, " not supported after joining a meeting.");
      throw r && (i += " ".concat(r)), console.error(i), new Error(i);
    }
  }
  function _n(n) {
    var e = arguments.length > 2 ? arguments[2] : void 0;
    if (!n) {
      var t = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " requires preAuth(), startCamera(), or join() to initialize call state.");
      throw e && (t += " ".concat(e)), console.error(t), new Error(t);
    }
  }
  function De(n) {
    if (n) {
      var e = "A pre-call quality test is in progress. Please try ".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " again once testing has completed. Use stopTestCallQuality() to end it early.");
      throw console.error(e), new Error(e);
    }
  }
  function he(n) {
    if (!n) {
      var e = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " is only supported on custom callObject instances");
      throw console.error(e), new Error(e);
    }
  }
  function ee(n) {
    if (n) {
      var e = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " is only supported as part of Daily's Prebuilt");
      throw console.error(e), new Error(e);
    }
  }
  function P() {
    if (B())
      throw new Error("This daily-js method is not currently supported in React Native");
  }
  function lt() {
    if (!B())
      throw new Error("This daily-js method is only supported in React Native");
  }
  function Aa(n) {
    if (n === void 0)
      return !0;
    var e;
    if (typeof n == "string")
      e = n;
    else
      try {
        e = JSON.stringify(n), Z(JSON.parse(e), n) || console.warn("The userData provided will be modified when serialized.");
      } catch (t) {
        throw Error("userData must be serializable to JSON: ".concat(t));
      }
    if (e.length > 4096)
      throw Error("userData is too large (".concat(e.length, " characters). Maximum size suppported is ").concat(4096, "."));
    return !0;
  }
  function Oa(n, e) {
    for (var t = e.allowAllParticipantsKey, r = function(m) {
      var y = ["local"];
      return t || y.push("*"), m && !y.includes(m);
    }, i = function(m) {
      return !!(m.layer === void 0 || Number.isInteger(m.layer) && m.layer >= 0 || m.layer === "inherit");
    }, a = function(m) {
      return !!m && !(m.video && !i(m.video)) && !(m.screenVideo && !i(m.screenVideo));
    }, s = 0, l = Object.entries(n); s < l.length; s++) {
      var u = Be(l[s], 2), p = u[0], h = u[1];
      if (!r(p) || !a(h))
        return !1;
    }
    return !0;
  }
  function Wn(n) {
    return F(n) === "object" && !!(n.video && F(n.video) === "object" || n.audio && F(n.audio) === "object") && !(n.video && !function(i) {
      var a = ["type", "config"];
      return !i || F(i) !== "object" || !function(s) {
        return typeof s != "string" ? !1 : Object.values(Ut).includes(s) ? !0 : (console.error("inputSettings video processor type invalid"), !1);
      }(i.type) || i.config && (F(i.config) !== "object" || !function(s, l) {
        var u = Object.keys(l);
        if (u.length === 0)
          return !0;
        var p = "invalid object in inputSettings -> video -> processor -> config";
        switch (s) {
          case Ut.BGBLUR:
            return u.length > 1 || u[0] !== "strength" ? (console.error(p), !1) : !(typeof l.strength != "number" || l.strength <= 0 || l.strength > 1 || isNaN(l.strength)) || (console.error("".concat(p, "; expected: {0 < strength <= 1}, got: ").concat(l.strength)), !1);
          case Ut.BGIMAGE:
            return !(l.source !== void 0 && !function(h) {
              if (h.source === "default")
                return h.type = "default", !0;
              if (h.source instanceof ArrayBuffer)
                return !0;
              if (mt(h.source))
                return h.type = "url", !!function(S) {
                  var b = new URL(S), w = b.pathname;
                  if (b.protocol === "data:")
                    try {
                      var T = w.substring(w.indexOf(":") + 1, w.indexOf(";")).split("/")[1];
                      return fn.includes(T);
                    } catch (Y) {
                      return console.error("failed to deduce blob content type", Y), !1;
                    }
                  var O = w.split(".").at(-1).toLowerCase().trim();
                  return fn.includes(O);
                }(h.source) || (console.error("invalid image type; supported types: [".concat(fn.join(", "), "]")), !1);
              return m = h.source, y = Number(m), isNaN(y) || !Number.isInteger(y) || y <= 0 || y > ki ? (console.error("invalid image selection; must be an int, > 0, <= ".concat(ki)), !1) : (h.type = "daily-preselect", !0);
              var m, y;
            }(l));
          default:
            return !0;
        }
      }(i.type, i.config)) ? !1 : (Object.keys(i).filter(function(s) {
        return !a.includes(s);
      }).forEach(function(s) {
        console.warn("invalid key inputSettings -> video -> processor : ".concat(s)), delete i[s];
      }), !0);
    }(n.video.processor)) && !(n.audio && (t = n.audio.processor, r = ["type"], !t || F(t) !== "object" || (Object.keys(t).filter(function(i) {
      return !r.includes(i);
    }).forEach(function(i) {
      console.warn("invalid key inputSettings -> audio -> processor : ".concat(i)), delete t[i];
    }), e = t.type, typeof e != "string" || !Object.values(ga).includes(e) && (console.error("inputSettings audio processor type invalid"), 1))));
    var e, t, r;
  }
  function La(n) {
    var e, t, r = [];
    n.video && !ya((e = (t = window._dailyConfig) === null || t === void 0 ? void 0 : t.useLegacyVideoProcessor) !== null && e !== void 0 && e) && (delete n.video, r.push("video")), n.audio && !ba() && (delete n.audio, r.push("audio")), r.length > 0 && console.error("Ignoring settings for browser- or platform-unsupported input processor(s): ".concat(r.join(", ")));
  }
  function zn() {
    var n = Object.values(Ut).join(" | "), e = Object.values(ga).join(" | ");
    return "inputSettings must be of the form: { video?: { processor: { type: [ ".concat(n, " ], config?: {} } }, audio?: { processor: {type: [ ").concat(e, " ] } } }");
  }
  function Pa(n) {
    var e = n.allowAllParticipantsKey;
    return "receiveSettings must be of the form { [<remote participant id> | ".concat(To).concat(e ? ' | "'.concat(Co, '"') : "", "]: ") + '{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}';
  }
  function Da() {
    return "customIntegrations should be an object of type ".concat(JSON.stringify(Jn), ".");
  }
  function Ia(n) {
    if (n && F(n) !== "object" || Array.isArray(n))
      return console.error("customTrayButtons should be an Object of the type ".concat(JSON.stringify(Qt), ".")), !1;
    if (n)
      for (var e = 0, t = Object.entries(n); e < t.length; e++)
        for (var r = Be(t[e], 1)[0], i = 0, a = Object.entries(n[r]); i < a.length; i++) {
          var s = Be(a[i], 2), l = s[0], u = s[1];
          if (l === "iconPath" && !mt(u) || l === "iconPathDarkMode" && !mt(u))
            return console.error("customTrayButton ".concat(l, " should be a url.")), !1;
          var p = Qt.id[l];
          if (!p)
            return console.error("customTrayButton does not support key ".concat(l)), !1;
          if (F(u) !== p)
            return console.error("customTrayButton ".concat(l, " should be a ").concat(p, ".")), !1;
        }
    return !0;
  }
  function Na(n) {
    if (!n || n && F(n) !== "object" || Array.isArray(n))
      return console.error(Da()), !1;
    for (var e = function(m) {
      return "".concat(m, " should be ").concat(Jn.id[m]);
    }, t = function(m, y) {
      return console.error("customIntegration ".concat(m, ": ").concat(y));
    }, r = 0, i = Object.entries(n); r < i.length; r++) {
      var a = Be(i[r], 1)[0];
      if (!("label" in n[a]))
        return t(a, "label is required"), !1;
      if (!("location" in n[a]))
        return t(a, "location is required"), !1;
      if (!("src" in n[a]) && !("srcdoc" in n[a]))
        return t(a, "src or srcdoc is required"), !1;
      for (var s = 0, l = Object.entries(n[a]); s < l.length; s++) {
        var u = Be(l[s], 2), p = u[0], h = u[1];
        switch (p) {
          case "allow":
          case "csp":
          case "name":
          case "referrerPolicy":
          case "sandbox":
            if (typeof h != "string")
              return t(a, e(p)), !1;
            break;
          case "iconURL":
            if (!mt(h))
              return t(a, "".concat(p, " should be a url")), !1;
            break;
          case "src":
            if ("srcdoc" in n[a])
              return t(a, "cannot have both src and srcdoc"), !1;
            if (!mt(h))
              return t(a, 'src "'.concat(h, '" is not a valid URL')), !1;
            break;
          case "srcdoc":
            if ("src" in n[a])
              return t(a, "cannot have both src and srcdoc"), !1;
            if (typeof h != "string")
              return t(a, e(p)), !1;
            break;
          case "location":
            if (!["main", "sidebar"].includes(h))
              return t(a, e(p)), !1;
            break;
          case "controlledBy":
            if (h !== "*" && h !== "owners" && (!Array.isArray(h) || h.some(function(m) {
              return typeof m != "string";
            })))
              return t(a, e(p)), !1;
            break;
          case "shared":
            if ((!Array.isArray(h) || h.some(function(m) {
              return typeof m != "string";
            })) && h !== "owners" && typeof h != "boolean")
              return t(a, e(p)), !1;
            break;
          default:
            if (!Jn.id[p])
              return console.error("customIntegration does not support key ".concat(p)), !1;
        }
      }
    }
    return !0;
  }
  function Ra(n, e) {
    if (e === void 0)
      return !1;
    switch (F(e)) {
      case "string":
        return F(n) === e;
      case "object":
        if (F(n) !== "object")
          return !1;
        for (var t in n)
          if (!Ra(n[t], e[t]))
            return !1;
        return !0;
      default:
        return !1;
    }
  }
  function Gi(n) {
    if (F(n) !== "object")
      throw new Error('RemoteMediaPlayerSettings: must be "object" type');
    if (n.state && !Object.values(Un).includes(n.state))
      throw new Error("Invalid value for RemoteMediaPlayerSettings.state, valid values are: " + JSON.stringify(Un));
    if (n.volume) {
      if (typeof n.volume != "number")
        throw new Error('RemoteMediaPlayerSettings.volume: must be "number" type');
      if (n.volume < 0 || n.volume > 2)
        throw new Error("RemoteMediaPlayerSettings.volume: must be between 0.0 - 2.0");
    }
  }
  function qi(n, e, t) {
    return !(typeof n != "number" || n < e || n > t);
  }
  function yn(n, e) {
    return n && !e && delete n.data, n;
  }
  const ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    DAILY_ACCESS_LEVEL_FULL: ko,
    DAILY_ACCESS_LEVEL_LOBBY: ac,
    DAILY_ACCESS_LEVEL_NONE: sc,
    DAILY_ACCESS_UNKNOWN: Nt,
    DAILY_CAMERA_ERROR_CAM_AND_MIC_IN_USE: bc,
    DAILY_CAMERA_ERROR_CAM_IN_USE: _c,
    DAILY_CAMERA_ERROR_CONSTRAINTS: kc,
    DAILY_CAMERA_ERROR_MIC_IN_USE: yc,
    DAILY_CAMERA_ERROR_NOT_FOUND: Ec,
    DAILY_CAMERA_ERROR_PERMISSIONS: wc,
    DAILY_CAMERA_ERROR_UNDEF_MEDIADEVICES: Sc,
    DAILY_CAMERA_ERROR_UNKNOWN: Tc,
    DAILY_EVENT_ACCESS_STATE_UPDATED: jo,
    DAILY_EVENT_ACTIVE_SPEAKER_CHANGE: ia,
    DAILY_EVENT_ACTIVE_SPEAKER_MODE_CHANGE: oa,
    DAILY_EVENT_APP_MSG: Ko,
    DAILY_EVENT_CAMERA_ERROR: Lo,
    DAILY_EVENT_CPU_LOAD_CHANGE: ca,
    DAILY_EVENT_ERROR: Bt,
    DAILY_EVENT_EXIT_FULLSCREEN: Ne,
    DAILY_EVENT_FULLSCREEN: Ie,
    DAILY_EVENT_IFRAME_LAUNCH_CONFIG: Ao,
    DAILY_EVENT_IFRAME_READY_FOR_LAUNCH_CONFIG: Mo,
    DAILY_EVENT_INPUT_SETTINGS_UPDATED: ma,
    DAILY_EVENT_JOINED_MEETING: Po,
    DAILY_EVENT_JOINING_MEETING: jn,
    DAILY_EVENT_LANG_UPDATED: pa,
    DAILY_EVENT_LEFT_MEETING: Do,
    DAILY_EVENT_LIVE_STREAMING_ERROR: ha,
    DAILY_EVENT_LIVE_STREAMING_STARTED: la,
    DAILY_EVENT_LIVE_STREAMING_STOPPED: da,
    DAILY_EVENT_LIVE_STREAMING_UPDATED: ua,
    DAILY_EVENT_LOADED: Rt,
    DAILY_EVENT_LOADING: Rn,
    DAILY_EVENT_LOAD_ATTEMPT_FAILED: xn,
    DAILY_EVENT_LOCAL_SCREEN_SHARE_CANCELED: ra,
    DAILY_EVENT_LOCAL_SCREEN_SHARE_STARTED: ta,
    DAILY_EVENT_LOCAL_SCREEN_SHARE_STOPPED: na,
    DAILY_EVENT_MEETING_SESSION_DATA_ERROR: Cc,
    DAILY_EVENT_MEETING_SESSION_STATE_UPDATED: Bo,
    DAILY_EVENT_MEETING_SESSION_SUMMARY_UPDATED: Fo,
    DAILY_EVENT_NETWORK_CONNECTION: sa,
    DAILY_EVENT_NETWORK_QUALITY_CHANGE: aa,
    DAILY_EVENT_NONFATAL_ERROR: Ft,
    DAILY_EVENT_PARTICIPANT_COUNTS_UPDATED: xo,
    DAILY_EVENT_PARTICIPANT_JOINED: Io,
    DAILY_EVENT_PARTICIPANT_LEFT: Ro,
    DAILY_EVENT_PARTICIPANT_UPDATED: No,
    DAILY_EVENT_RECEIVE_SETTINGS_UPDATED: fa,
    DAILY_EVENT_RECORDING_DATA: Ho,
    DAILY_EVENT_RECORDING_ERROR: Wo,
    DAILY_EVENT_RECORDING_STARTED: xt,
    DAILY_EVENT_RECORDING_STATS: Jo,
    DAILY_EVENT_RECORDING_STOPPED: jt,
    DAILY_EVENT_RECORDING_UPLOAD_COMPLETED: zo,
    DAILY_EVENT_REMOTE_MEDIA_PLAYER_STARTED: Xo,
    DAILY_EVENT_REMOTE_MEDIA_PLAYER_STOPPED: ea,
    DAILY_EVENT_REMOTE_MEDIA_PLAYER_UPDATED: Zo,
    DAILY_EVENT_STARTED_CAMERA: Oo,
    DAILY_EVENT_THEME_UPDATED: Nn,
    DAILY_EVENT_TRACK_STARTED: Fn,
    DAILY_EVENT_TRACK_STOPPED: Bn,
    DAILY_EVENT_TRANSCRIPTION_ERROR: qo,
    DAILY_EVENT_TRANSCRIPTION_MSG: Qo,
    DAILY_EVENT_TRANSCRIPTION_STARTED: $o,
    DAILY_EVENT_TRANSCRIPTION_STOPPED: Go,
    DAILY_EVENT_WAITING_PARTICIPANT_ADDED: Uo,
    DAILY_EVENT_WAITING_PARTICIPANT_REMOVED: Yo,
    DAILY_EVENT_WAITING_PARTICIPANT_UPDATED: Vo,
    DAILY_FATAL_ERROR_CONNECTION: vc,
    DAILY_FATAL_ERROR_EJECTED: cc,
    DAILY_FATAL_ERROR_EOL: mc,
    DAILY_FATAL_ERROR_EXP_ROOM: dc,
    DAILY_FATAL_ERROR_EXP_TOKEN: hc,
    DAILY_FATAL_ERROR_MEETING_FULL: fc,
    DAILY_FATAL_ERROR_NBF_ROOM: lc,
    DAILY_FATAL_ERROR_NBF_TOKEN: uc,
    DAILY_FATAL_ERROR_NOT_ALLOWED: gc,
    DAILY_FATAL_ERROR_NO_ROOM: pc,
    DAILY_RECEIVE_SETTINGS_ALL_PARTICIPANTS_KEY: Co,
    DAILY_RECEIVE_SETTINGS_BASE_KEY: To,
    DAILY_STATE_ERROR: ye,
    DAILY_STATE_JOINED: je,
    DAILY_STATE_JOINING: Ht,
    DAILY_STATE_LEFT: _e,
    DAILY_STATE_NEW: In,
    DAILY_TRACK_STATE_BLOCKED: ec,
    DAILY_TRACK_STATE_INTERRUPTED: ic,
    DAILY_TRACK_STATE_LOADING: rc,
    DAILY_TRACK_STATE_OFF: tc,
    DAILY_TRACK_STATE_PLAYABLE: oc,
    DAILY_TRACK_STATE_SENDABLE: nc,
    default: il
  }, Symbol.toStringTag, { value: "Module" })), al = /* @__PURE__ */ Za(ol);
  var or = { exports: {} }, et = typeof Reflect == "object" ? Reflect : null, Ji = et && typeof et.apply == "function" ? et.apply : function(e, t, r) {
    return Function.prototype.apply.call(e, t, r);
  }, Yt;
  et && typeof et.ownKeys == "function" ? Yt = et.ownKeys : Object.getOwnPropertySymbols ? Yt = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
  } : Yt = function(e) {
    return Object.getOwnPropertyNames(e);
  };
  function sl(n) {
    console && console.warn && console.warn(n);
  }
  var xa = Number.isNaN || function(e) {
    return e !== e;
  };
  function N() {
    N.init.call(this);
  }
  or.exports = N;
  or.exports.once = dl;
  N.EventEmitter = N;
  N.prototype._events = void 0;
  N.prototype._eventsCount = 0;
  N.prototype._maxListeners = void 0;
  var Wi = 10;
  function rn(n) {
    if (typeof n != "function")
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
  }
  Object.defineProperty(N, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
      return Wi;
    },
    set: function(n) {
      if (typeof n != "number" || n < 0 || xa(n))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + n + ".");
      Wi = n;
    }
  });
  N.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  };
  N.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || xa(e))
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this;
  };
  function ja(n) {
    return n._maxListeners === void 0 ? N.defaultMaxListeners : n._maxListeners;
  }
  N.prototype.getMaxListeners = function() {
    return ja(this);
  };
  N.prototype.emit = function(e) {
    for (var t = [], r = 1; r < arguments.length; r++)
      t.push(arguments[r]);
    var i = e === "error", a = this._events;
    if (a !== void 0)
      i = i && a.error === void 0;
    else if (!i)
      return !1;
    if (i) {
      var s;
      if (t.length > 0 && (s = t[0]), s instanceof Error)
        throw s;
      var l = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
      throw l.context = s, l;
    }
    var u = a[e];
    if (u === void 0)
      return !1;
    if (typeof u == "function")
      Ji(u, this, t);
    else
      for (var p = u.length, h = Ya(u, p), r = 0; r < p; ++r)
        Ji(h[r], this, t);
    return !0;
  };
  function Fa(n, e, t, r) {
    var i, a, s;
    if (rn(t), a = n._events, a === void 0 ? (a = n._events = /* @__PURE__ */ Object.create(null), n._eventsCount = 0) : (a.newListener !== void 0 && (n.emit(
      "newListener",
      e,
      t.listener ? t.listener : t
    ), a = n._events), s = a[e]), s === void 0)
      s = a[e] = t, ++n._eventsCount;
    else if (typeof s == "function" ? s = a[e] = r ? [t, s] : [s, t] : r ? s.unshift(t) : s.push(t), i = ja(n), i > 0 && s.length > i && !s.warned) {
      s.warned = !0;
      var l = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      l.name = "MaxListenersExceededWarning", l.emitter = n, l.type = e, l.count = s.length, sl(l);
    }
    return n;
  }
  N.prototype.addListener = function(e, t) {
    return Fa(this, e, t, !1);
  };
  N.prototype.on = N.prototype.addListener;
  N.prototype.prependListener = function(e, t) {
    return Fa(this, e, t, !0);
  };
  function cl() {
    if (!this.fired)
      return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function Ba(n, e, t) {
    var r = { fired: !1, wrapFn: void 0, target: n, type: e, listener: t }, i = cl.bind(r);
    return i.listener = t, r.wrapFn = i, i;
  }
  N.prototype.once = function(e, t) {
    return rn(t), this.on(e, Ba(this, e, t)), this;
  };
  N.prototype.prependOnceListener = function(e, t) {
    return rn(t), this.prependListener(e, Ba(this, e, t)), this;
  };
  N.prototype.removeListener = function(e, t) {
    var r, i, a, s, l;
    if (rn(t), i = this._events, i === void 0)
      return this;
    if (r = i[e], r === void 0)
      return this;
    if (r === t || r.listener === t)
      --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, r.listener || t));
    else if (typeof r != "function") {
      for (a = -1, s = r.length - 1; s >= 0; s--)
        if (r[s] === t || r[s].listener === t) {
          l = r[s].listener, a = s;
          break;
        }
      if (a < 0)
        return this;
      a === 0 ? r.shift() : ll(r, a), r.length === 1 && (i[e] = r[0]), i.removeListener !== void 0 && this.emit("removeListener", e, l || t);
    }
    return this;
  };
  N.prototype.off = N.prototype.removeListener;
  N.prototype.removeAllListeners = function(e) {
    var t, r, i;
    if (r = this._events, r === void 0)
      return this;
    if (r.removeListener === void 0)
      return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : r[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete r[e]), this;
    if (arguments.length === 0) {
      var a = Object.keys(r), s;
      for (i = 0; i < a.length; ++i)
        s = a[i], s !== "removeListener" && this.removeAllListeners(s);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (t = r[e], typeof t == "function")
      this.removeListener(e, t);
    else if (t !== void 0)
      for (i = t.length - 1; i >= 0; i--)
        this.removeListener(e, t[i]);
    return this;
  };
  function Ua(n, e, t) {
    var r = n._events;
    if (r === void 0)
      return [];
    var i = r[e];
    return i === void 0 ? [] : typeof i == "function" ? t ? [i.listener || i] : [i] : t ? ul(i) : Ya(i, i.length);
  }
  N.prototype.listeners = function(e) {
    return Ua(this, e, !0);
  };
  N.prototype.rawListeners = function(e) {
    return Ua(this, e, !1);
  };
  N.listenerCount = function(n, e) {
    return typeof n.listenerCount == "function" ? n.listenerCount(e) : Va.call(n, e);
  };
  N.prototype.listenerCount = Va;
  function Va(n) {
    var e = this._events;
    if (e !== void 0) {
      var t = e[n];
      if (typeof t == "function")
        return 1;
      if (t !== void 0)
        return t.length;
    }
    return 0;
  }
  N.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Yt(this._events) : [];
  };
  function Ya(n, e) {
    for (var t = new Array(e), r = 0; r < e; ++r)
      t[r] = n[r];
    return t;
  }
  function ll(n, e) {
    for (; e + 1 < n.length; e++)
      n[e] = n[e + 1];
    n.pop();
  }
  function ul(n) {
    for (var e = new Array(n.length), t = 0; t < e.length; ++t)
      e[t] = n[t].listener || n[t];
    return e;
  }
  function dl(n, e) {
    return new Promise(function(t, r) {
      function i(s) {
        n.removeListener(e, a), r(s);
      }
      function a() {
        typeof n.removeListener == "function" && n.removeListener("error", i), t([].slice.call(arguments));
      }
      $a(n, e, a, { once: !0 }), e !== "error" && hl(n, i, { once: !0 });
    });
  }
  function hl(n, e, t) {
    typeof n.on == "function" && $a(n, "error", e, t);
  }
  function $a(n, e, t, r) {
    if (typeof n.on == "function")
      r.once ? n.once(e, t) : n.on(e, t);
    else if (typeof n.addEventListener == "function")
      n.addEventListener(e, function i(a) {
        r.once && n.removeEventListener(e, i), t(a);
      });
    else
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof n);
  }
  var pl = or.exports, on = {}, me = {};
  Object.defineProperty(me, "__esModule", { value: !0 });
  me.Api = me.HttpClient = me.ContentType = me.CreateWebCallDTO = void 0;
  class fl {
    constructor() {
      /**
       * This is the assistant that will be used for the call. To use a transient assistant, use `assistant` instead.
       */
      D(this, "assistantId");
      /**
       * Overrides for the assistant's settings and template variables.
       */
      D(this, "assistantOverrides");
      /**
       * This is the assistant that will be used for the call. To use an existing assistant, use `assistantId` instead.
       */
      D(this, "assistant");
      /**
       * This will expose SIP URI you can use to connect to the call. Disabled by default.
       */
      D(this, "sipEnabled");
      /**
       * This is the metadata associated with the call.
       */
      D(this, "metadata");
    }
  }
  me.CreateWebCallDTO = fl;
  var G;
  (function(n) {
    n.Json = "application/json", n.FormData = "multipart/form-data", n.UrlEncoded = "application/x-www-form-urlencoded", n.Text = "text/plain";
  })(G || (me.ContentType = G = {}));
  class Ga {
    constructor(e = {}) {
      D(this, "baseUrl", "https://api.vapi.ai");
      D(this, "securityData", null);
      D(this, "securityWorker");
      D(this, "abortControllers", /* @__PURE__ */ new Map());
      D(this, "customFetch", (...e) => fetch(...e));
      D(this, "baseApiParams", {
        credentials: "same-origin",
        headers: {},
        redirect: "follow",
        referrerPolicy: "no-referrer"
      });
      D(this, "setSecurityData", (e) => {
        this.securityData = e;
      });
      D(this, "contentFormatters", {
        [G.Json]: (e) => e !== null && (typeof e == "object" || typeof e == "string") ? JSON.stringify(e) : e,
        [G.Text]: (e) => e !== null && typeof e != "string" ? JSON.stringify(e) : e,
        [G.FormData]: (e) => Object.keys(e || {}).reduce((t, r) => {
          const i = e[r];
          return t.append(r, i instanceof Blob ? i : typeof i == "object" && i !== null ? JSON.stringify(i) : `${i}`), t;
        }, new FormData()),
        [G.UrlEncoded]: (e) => this.toQueryString(e)
      });
      D(this, "createAbortSignal", (e) => {
        if (this.abortControllers.has(e)) {
          const r = this.abortControllers.get(e);
          return r ? r.signal : void 0;
        }
        const t = new AbortController();
        return this.abortControllers.set(e, t), t.signal;
      });
      D(this, "abortRequest", (e) => {
        const t = this.abortControllers.get(e);
        t && (t.abort(), this.abortControllers.delete(e));
      });
      D(this, "request", async ({ body: e, secure: t, path: r, type: i, query: a, format: s, baseUrl: l, cancelToken: u, ...p }) => {
        const h = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {}, m = this.mergeRequestParams(p, h), y = a && this.toQueryString(a), S = this.contentFormatters[i || G.Json], b = s || m.format;
        return this.customFetch(`${l || this.baseUrl || ""}${r}${y ? `?${y}` : ""}`, {
          ...m,
          headers: {
            ...m.headers || {},
            ...i && i !== G.FormData ? { "Content-Type": i } : {}
          },
          signal: (u ? this.createAbortSignal(u) : m.signal) || null,
          body: typeof e > "u" || e === null ? null : S(e)
        }).then(async (w) => {
          const T = w;
          T.data = null, T.error = null;
          const O = b ? await w[b]().then((Y) => (T.ok ? T.data = Y : T.error = Y, T)).catch((Y) => (T.error = Y, T)) : T;
          if (u && this.abortControllers.delete(u), !w.ok)
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
  me.HttpClient = Ga;
  class ml extends Ga {
    constructor() {
      super(...arguments);
      D(this, "assistant", {
        /**
         * No description
         *
         * @tags Assistants
         * @name AssistantControllerCreate
         * @summary Create Assistant
         * @request POST:/assistant
         * @secure
         */
        assistantControllerCreate: (t, r = {}) => this.request({
          path: "/assistant",
          method: "POST",
          body: t,
          secure: !0,
          type: G.Json,
          format: "json",
          ...r
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
        assistantControllerFindAll: (t, r = {}) => this.request({
          path: "/assistant",
          method: "GET",
          query: t,
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
        assistantControllerFindOne: (t, r = {}) => this.request({
          path: `/assistant/${t}`,
          method: "GET",
          secure: !0,
          format: "json",
          ...r
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
        assistantControllerUpdate: (t, r, i = {}) => this.request({
          path: `/assistant/${t}`,
          method: "PATCH",
          body: r,
          secure: !0,
          type: G.Json,
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
        assistantControllerReplace: (t, r, i = {}) => this.request({
          path: `/assistant/${t}`,
          method: "PUT",
          body: r,
          secure: !0,
          type: G.Json,
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
        assistantControllerRemove: (t, r = {}) => this.request({
          path: `/assistant/${t}`,
          method: "DELETE",
          secure: !0,
          format: "json",
          ...r
        })
      });
      D(this, "call", {
        /**
         * No description
         *
         * @tags Calls
         * @name CallControllerFindAll
         * @summary List Calls
         * @request GET:/call
         * @secure
         */
        callControllerFindAll: (t, r = {}) => this.request({
          path: "/call",
          method: "GET",
          query: t,
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
        callControllerFindOne: (t, r = {}) => this.request({
          path: `/call/${t}`,
          method: "GET",
          secure: !0,
          format: "json",
          ...r
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
        callControllerCreatePhoneCall: (t, r = {}) => this.request({
          path: "/call/phone",
          method: "POST",
          body: t,
          secure: !0,
          type: G.Json,
          format: "json",
          ...r
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
        callControllerCreateWebCall: (t, r = {}) => this.request({
          path: "/call/web",
          method: "POST",
          body: t,
          secure: !0,
          type: G.Json,
          format: "json",
          ...r
        })
      });
      D(this, "credential", {
        /**
         * No description
         *
         * @tags Credentials
         * @name CredentialControllerCreate
         * @summary Create Credential
         * @request POST:/credential
         * @secure
         */
        credentialControllerCreate: (t, r = {}) => this.request({
          path: "/credential",
          method: "POST",
          body: t,
          secure: !0,
          type: G.Json,
          format: "json",
          ...r
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
        credentialControllerFindAll: (t, r = {}) => this.request({
          path: "/credential",
          method: "GET",
          query: t,
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
        credentialControllerFindOne: (t, r = {}) => this.request({
          path: `/credential/${t}`,
          method: "GET",
          secure: !0,
          format: "json",
          ...r
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
        credentialControllerUpdate: (t, r, i = {}) => this.request({
          path: `/credential/${t}`,
          method: "PUT",
          body: r,
          secure: !0,
          type: G.Json,
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
        credentialControllerRemove: (t, r = {}) => this.request({
          path: `/credential/${t}`,
          method: "DELETE",
          secure: !0,
          format: "json",
          ...r
        })
      });
      D(this, "phoneNumber", {
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerBuy
         * @summary Buy Phone Number
         * @request POST:/phone-number/buy
         * @secure
         */
        phoneNumberControllerBuy: (t, r = {}) => this.request({
          path: "/phone-number/buy",
          method: "POST",
          body: t,
          secure: !0,
          type: G.Json,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerImportTwilio
         * @summary Import Twilio Number
         * @request POST:/phone-number/import/twilio
         * @secure
         */
        phoneNumberControllerImportTwilio: (t, r = {}) => this.request({
          path: "/phone-number/import/twilio",
          method: "POST",
          body: t,
          secure: !0,
          type: G.Json,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerImportVonage
         * @summary Import Vonage Number
         * @request POST:/phone-number/import/vonage
         * @secure
         */
        phoneNumberControllerImportVonage: (t, r = {}) => this.request({
          path: "/phone-number/import/vonage",
          method: "POST",
          body: t,
          secure: !0,
          type: G.Json,
          format: "json",
          ...r
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
        phoneNumberControllerFindAll: (t, r = {}) => this.request({
          path: "/phone-number",
          method: "GET",
          query: t,
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
        phoneNumberControllerFindOne: (t, r = {}) => this.request({
          path: `/phone-number/${t}`,
          method: "GET",
          secure: !0,
          format: "json",
          ...r
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
        phoneNumberControllerUpdate: (t, r, i = {}) => this.request({
          path: `/phone-number/${t}`,
          method: "PATCH",
          body: r,
          secure: !0,
          type: G.Json,
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
        phoneNumberControllerRemove: (t, r = {}) => this.request({
          path: `/phone-number/${t}`,
          method: "DELETE",
          secure: !0,
          format: "json",
          ...r
        })
      });
      D(this, "metrics", {
        /**
         * No description
         *
         * @tags Metrics
         * @name MetricsControllerFindAll
         * @summary List Metrics
         * @request GET:/metrics
         * @secure
         */
        metricsControllerFindAll: (t, r = {}) => this.request({
          path: "/metrics",
          method: "GET",
          query: t,
          secure: !0,
          format: "json",
          ...r
        })
      });
      D(this, "voiceLibrary", {
        /**
         * No description
         *
         * @tags Voice Library
         * @name VoiceLibraryControllerVoiceGetByProvider
         * @summary Get voices in Voice Library by Providers
         * @request GET:/voice-library/{provider}
         * @secure
         */
        voiceLibraryControllerVoiceGetByProvider: (t, r = {}) => this.request({
          path: `/voice-library/${t}`,
          method: "GET",
          secure: !0,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Voice Library
         * @name VoiceLibraryControllerVoiceLibrarySyncByProvider
         * @summary Sync voices in Voice Library by Providers
         * @request POST:/voice-library/sync/{provider}
         * @secure
         */
        voiceLibraryControllerVoiceLibrarySyncByProvider: (t, r = {}) => this.request({
          path: `/voice-library/sync/${t}`,
          method: "POST",
          secure: !0,
          format: "json",
          ...r
        })
      });
      D(this, "logging", {
        /**
         * No description
         *
         * @tags Logging
         * @name LoggingControllerGetLogs
         * @summary Get Logging Logs
         * @request GET:/logging
         * @secure
         */
        loggingControllerGetLogs: (t, r = {}) => this.request({
          path: "/logging",
          method: "GET",
          query: t,
          secure: !0,
          format: "json",
          ...r
        })
      });
    }
  }
  me.Api = ml;
  Object.defineProperty(on, "__esModule", { value: !0 });
  on.client = void 0;
  const gl = me, vl = new gl.Api({
    baseUrl: "https://api.vapi.ai",
    baseApiParams: {
      secure: !0
    },
    securityWorker: async (n) => {
      if (n)
        return {
          headers: {
            Authorization: `Bearer ${n}`
          }
        };
    }
  });
  on.client = vl;
  var qa = Er && Er.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(Hi, "__esModule", { value: !0 });
  const _l = qa(al), yl = qa(pl), bn = on;
  function bl(n) {
    const e = document.querySelector(`audio[data-participant-id="${n}"]`);
    e == null || e.remove();
  }
  async function wl(n, e) {
    n.muted = !1, n.autoplay = !0, e != null && (n.srcObject = new MediaStream([e]), await n.play());
  }
  async function Sl(n, e) {
    const t = document.createElement("audio");
    return t.dataset.participantId = e, document.body.appendChild(t), await wl(t, n), t;
  }
  function El(n, e) {
    n.participant.local || e.updateParticipant(n.participant.session_id, {
      setSubscribedTracks: {
        audio: !0,
        video: !1
      }
    });
  }
  class kl extends yl.default {
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
  class Tl extends kl {
    constructor(t, r) {
      super();
      D(this, "started", !1);
      D(this, "call", null);
      D(this, "speakingTimeout", null);
      D(this, "averageSpeechLevel", 0);
      bn.client.baseUrl = r ?? "https://api.vapi.ai", bn.client.setSecurityData(t);
    }
    cleanup() {
      var t;
      this.started = !1, (t = this.call) == null || t.destroy(), this.call = null, this.speakingTimeout = null;
    }
    async start(t, r) {
      var i;
      if (this.started)
        return null;
      this.started = !0;
      try {
        const a = (await bn.client.call.callControllerCreateWebCall({
          assistant: typeof t == "string" ? void 0 : t,
          assistantId: typeof t == "string" ? t : void 0,
          assistantOverrides: r
        })).data;
        return this.call && this.cleanup(), this.call = _l.default.createCallObject({
          audioSource: !0,
          videoSource: !1
        }), (i = this.call.iframe()) == null || i.style.setProperty("display", "none"), this.call.on("left-meeting", () => {
          this.emit("call-end"), this.cleanup();
        }), this.call.on("participant-left", (s) => {
          s && bl(s.participant.session_id);
        }), this.call.on("error", (s) => {
          this.emit("error", s);
        }), this.call.on("camera-error", (s) => {
          this.emit("error", s);
        }), this.call.on("track-started", async (s) => {
          var l, u, p;
          !s || !s.participant || (l = s.participant) != null && l.local || s.track.kind === "audio" && (await Sl(s.track, s.participant.session_id), ((u = s == null ? void 0 : s.participant) == null ? void 0 : u.user_name) === "Vapi Speaker" && ((p = this.call) == null || p.sendAppMessage("playable")));
        }), this.call.on("participant-joined", (s) => {
          !s || !this.call || El(s, this.call);
        }), await this.call.join({
          url: a.webCallUrl,
          subscribeToTracksAutomatically: !1
        }), this.call.startRemoteParticipantsAudioLevelObserver(100), this.call.on("remote-participants-audio-level", (s) => {
          s && this.handleRemoteParticipantsAudioLevel(s);
        }), this.call.on("app-message", (s) => this.onAppMessage(s)), this.call.updateInputSettings({
          audio: {
            processor: {
              type: "noise-cancellation"
            }
          }
        }), a;
      } catch (a) {
        return console.error(a), this.emit("error", a), this.cleanup(), null;
      }
    }
    onAppMessage(t) {
      if (t)
        try {
          if (t.data === "listening")
            return this.emit("call-start");
          try {
            const r = JSON.parse(t.data);
            this.emit("message", r);
          } catch (r) {
            console.log("Error parsing message data: ", r);
          }
        } catch (r) {
          console.error(r);
        }
    }
    handleRemoteParticipantsAudioLevel(t) {
      const r = Object.values(t.participantsAudioLevel).reduce((a, s) => a + s, 0);
      this.emit("volume-level", Math.min(1, r / 0.15)), r > 0.01 && (this.speakingTimeout ? (clearTimeout(this.speakingTimeout), this.speakingTimeout = null) : this.emit("speech-start"), this.speakingTimeout = setTimeout(() => {
        this.emit("speech-end"), this.speakingTimeout = null;
      }, 1e3));
    }
    stop() {
      var t;
      this.started = !1, (t = this.call) == null || t.destroy(), this.call = null;
    }
    send(t) {
      var r;
      (r = this.call) == null || r.sendAppMessage(JSON.stringify(t));
    }
    setMuted(t) {
      try {
        if (!this.call)
          throw new Error("Call object is not available.");
        this.call.setLocalAudio(!t);
      } catch (r) {
        throw r;
      }
    }
    isMuted() {
      try {
        return this.call ? this.call.localAudio() === !1 : !1;
      } catch (t) {
        throw t;
      }
    }
    say(t, r) {
      this.send({
        type: "say",
        message: t,
        endCallAfterSpoken: r
      });
    }
  }
  var Cl = Hi.default = Tl;
  const Ml = () => ({
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
  }), Al = ({
    idle: n,
    loading: e,
    active: t,
    width: r,
    height: i,
    position: a,
    offset: s
  }) => {
    const l = parseInt(r) / 2, u = parseInt(i) / 2, p = {
      "bottom-right": `bottom: ${s}; right: ${s};`,
      "bottom-left": `bottom: ${s}; left: ${s};`,
      "top-right": `top: ${s}; right: ${s};`,
      "top-left": `top: ${s}; left: ${s};`,
      bottom: `bottom: ${s}; left: 50%; margin-left: -${l}px;`,
      right: `top: 50%; right: ${s}; margin-top: -${u}px;`,
      left: `top: 50%; left: ${s}; margin-top: -${u}px;`,
      top: `top: ${s}; left: 50%; margin-left: -${l}px;`
    }, h = document.createElement("style");
    h.innerText = `
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
      min-width: ${r};
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
      ${p[a]}
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
      background: ${n.color};
      box-shadow: 1px 1px 10px ${n.color};
    }
    .vapi-btn-pill.vapi-btn-is-idle {
      background: white;
    }
    .vapi-btn-pill.vapi-btn-is-idle > #vapi-icon-container {
      background: ${n.color};
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
    for (let m = 0; m <= 10; m++)
      h.innerText += `
      .vapi-btn-volume-${m} {
        box-shadow: 1px 1px ${5 + m * 2}px ${m * 2}px ${t.color}, inset 0px 0px 10px 0px rgba(0,0,0,0.1);
      }
    `;
    document.head.appendChild(h);
  }, Ol = ({
    position: n = "bottom",
    offset: e = "40px",
    width: t = "50px",
    height: r = "50px",
    idle: i,
    loading: a,
    active: s
  }, l = "vapi-support-btn") => {
    Al({ idle: i, loading: a, active: s, width: t, height: r, position: n, offset: e });
    const u = document.createElement("button");
    return u.id = l, u.className = "vapi-btn vapi-btn-round vapi-btn-is-idle", u.onclick = () => {
    }, u;
  }, zi = "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg", Ll = (n) => (e, t) => {
    const r = n[t];
    if (r) {
      if (e.className = `vapi-btn vapi-btn-is-${t} ${r.type === "pill" ? "vapi-btn-pill" : r.type === "round" ? "vapi-btn-round" : ""}`, e.innerHTML = "", e.title = r.title ?? "", r.type === "pill") {
        const i = document.createElement("div");
        i.id = "vapi-icon-container";
        const a = document.createElement("img");
        a.src = r.icon || zi, a.alt = "Icon", i.appendChild(a);
        const s = document.createElement("div");
        s.id = "vapi-title-container";
        const l = document.createElement("div");
        l.id = "vapi-title", l.textContent = r.title;
        const u = document.createElement("div");
        u.id = "vapi-subtitle", u.textContent = r.subtitle, s.appendChild(l), s.appendChild(u), e.appendChild(i), e.appendChild(s);
      } else if (r.type === "round") {
        const i = document.createElement("div");
        i.id = "vapi-icon-container";
        const a = document.createElement("img");
        a.src = r.icon || zi, a.alt = "Icon", i.appendChild(a), e.appendChild(i);
      }
    }
  };
  function Pl(n, e, t, r = {}, i, a) {
    let s = !1;
    const l = () => {
      a(e, "loading"), s ? (n.stop(), s = !1) : (n.start(t, r, i), s = !0);
    };
    n.on("call-start", () => {
      a(e, "active");
    }), n.on("call-end", () => {
      a(e, "idle");
    }), n.on("speech-start", () => {
      e.classList.add("vapi-btn-is-speaking");
    }), n.on("speech-end", () => {
      e.classList.remove("vapi-btn-is-speaking");
    }), e.addEventListener("click", l), n.on("volume-level", (u) => {
      const p = Math.floor(u * 10);
      for (let h = 0; h <= 10; h++)
        e.classList.remove(`vapi-btn-volume-${h}`);
      e.classList.add(`vapi-btn-volume-${p}`);
    });
  }
  const Dl = ({
    apiKey: n = "",
    assistant: e = Ml(),
    assistantOverrides: t = {},
    squad: r,
    config: i = {},
    ...a
  }) => {
    function s(p, h) {
      const m = { ...p };
      return Object.keys(h).forEach((y) => {
        typeof h[y] == "object" && h[y] !== null && !Array.isArray(h[y]) ? m[y] = s(
          p[y] || {},
          h[y]
        ) : m[y] = h[y];
      }), m;
    }
    const u = s({
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
    if (n && e) {
      const p = new Cl(n), h = Ol(u), m = Ll(u);
      return document.body.appendChild(h), m(h, "idle"), Pl(p, h, e, t, r, m), window.vapiSDK.vapi = p, p;
    } else
      return console.error(
        "API Key and Assistant Configurations are required. are required"
      ), null;
  };
  window.vapiSDK = {
    run: Dl
  };
});
export default Il();
