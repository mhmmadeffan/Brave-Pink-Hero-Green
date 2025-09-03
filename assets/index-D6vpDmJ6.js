var xc = e => {
    throw TypeError(e)
}
;
var dl = (e, t, n) => t.has(e) || xc("Cannot " + n);
var b = (e, t, n) => (dl(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , Z = (e, t, n) => t.has(e) ? xc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , V = (e, t, n, r) => (dl(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Pe = (e, t, n) => (dl(e, t, "access private method"),
n);
var gi = (e, t, n, r) => ({
    set _(o) {
        V(e, t, o, n)
    },
    get _() {
        return b(e, t, r)
    }
});
function Fg(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
function Tf(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Nf = {
    exports: {}
}
  , js = {}
  , Rf = {
    exports: {}
}
  , Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oi = Symbol.for("react.element")
  , zg = Symbol.for("react.portal")
  , $g = Symbol.for("react.fragment")
  , Ug = Symbol.for("react.strict_mode")
  , Bg = Symbol.for("react.profiler")
  , Vg = Symbol.for("react.provider")
  , Hg = Symbol.for("react.context")
  , Wg = Symbol.for("react.forward_ref")
  , Qg = Symbol.for("react.suspense")
  , Kg = Symbol.for("react.memo")
  , Gg = Symbol.for("react.lazy")
  , Sc = Symbol.iterator;
function Yg(e) {
    return e === null || typeof e != "object" ? null : (e = Sc && e[Sc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Of = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , _f = Object.assign
  , jf = {};
function to(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = jf,
    this.updater = n || Of
}
to.prototype.isReactComponent = {};
to.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
to.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Af() {}
Af.prototype = to.prototype;
function tu(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = jf,
    this.updater = n || Of
}
var nu = tu.prototype = new Af;
nu.constructor = tu;
_f(nu, to.prototype);
nu.isPureReactComponent = !0;
var Ec = Array.isArray
  , Lf = Object.prototype.hasOwnProperty
  , ru = {
    current: null
}
  , Mf = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Df(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            Lf.call(t, r) && !Mf.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        o.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        o.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: oi,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: ru.current
    }
}
function Xg(e, t) {
    return {
        $$typeof: oi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function ou(e) {
    return typeof e == "object" && e !== null && e.$$typeof === oi
}
function qg(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Cc = /\/+/g;
function fl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? qg("" + e.key) : t.toString(36)
}
function zi(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case oi:
            case zg:
                s = !0
            }
        }
    if (s)
        return s = e,
        o = o(s),
        e = r === "" ? "." + fl(s, 0) : r,
        Ec(o) ? (n = "",
        e != null && (n = e.replace(Cc, "$&/") + "/"),
        zi(o, t, n, "", function(u) {
            return u
        })) : o != null && (ou(o) && (o = Xg(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Cc, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    Ec(e))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var a = r + fl(i, l);
            s += zi(i, t, n, a, o)
        }
    else if (a = Yg(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(i = e.next()).done; )
            i = i.value,
            a = r + fl(i, l++),
            s += zi(i, t, n, a, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function vi(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return zi(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function Zg(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ie = {
    current: null
}
  , $i = {
    transition: null
}
  , Jg = {
    ReactCurrentDispatcher: Ie,
    ReactCurrentBatchConfig: $i,
    ReactCurrentOwner: ru
};
function If() {
    throw Error("act(...) is not supported in production builds of React.")
}
Y.Children = {
    map: vi,
    forEach: function(e, t, n) {
        vi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return vi(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return vi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ou(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Y.Component = to;
Y.Fragment = $g;
Y.Profiler = Bg;
Y.PureComponent = tu;
Y.StrictMode = Ug;
Y.Suspense = Qg;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jg;
Y.act = If;
Y.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = _f({}, e.props)
      , o = e.key
      , i = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        s = ru.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            Lf.call(t, a) && !Mf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: oi,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
}
;
Y.createContext = function(e) {
    return e = {
        $$typeof: Hg,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Vg,
        _context: e
    },
    e.Consumer = e
}
;
Y.createElement = Df;
Y.createFactory = function(e) {
    var t = Df.bind(null, e);
    return t.type = e,
    t
}
;
Y.createRef = function() {
    return {
        current: null
    }
}
;
Y.forwardRef = function(e) {
    return {
        $$typeof: Wg,
        render: e
    }
}
;
Y.isValidElement = ou;
Y.lazy = function(e) {
    return {
        $$typeof: Gg,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Zg
    }
}
;
Y.memo = function(e, t) {
    return {
        $$typeof: Kg,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
Y.startTransition = function(e) {
    var t = $i.transition;
    $i.transition = {};
    try {
        e()
    } finally {
        $i.transition = t
    }
}
;
Y.unstable_act = If;
Y.useCallback = function(e, t) {
    return Ie.current.useCallback(e, t)
}
;
Y.useContext = function(e) {
    return Ie.current.useContext(e)
}
;
Y.useDebugValue = function() {}
;
Y.useDeferredValue = function(e) {
    return Ie.current.useDeferredValue(e)
}
;
Y.useEffect = function(e, t) {
    return Ie.current.useEffect(e, t)
}
;
Y.useId = function() {
    return Ie.current.useId()
}
;
Y.useImperativeHandle = function(e, t, n) {
    return Ie.current.useImperativeHandle(e, t, n)
}
;
Y.useInsertionEffect = function(e, t) {
    return Ie.current.useInsertionEffect(e, t)
}
;
Y.useLayoutEffect = function(e, t) {
    return Ie.current.useLayoutEffect(e, t)
}
;
Y.useMemo = function(e, t) {
    return Ie.current.useMemo(e, t)
}
;
Y.useReducer = function(e, t, n) {
    return Ie.current.useReducer(e, t, n)
}
;
Y.useRef = function(e) {
    return Ie.current.useRef(e)
}
;
Y.useState = function(e) {
    return Ie.current.useState(e)
}
;
Y.useSyncExternalStore = function(e, t, n) {
    return Ie.current.useSyncExternalStore(e, t, n)
}
;
Y.useTransition = function() {
    return Ie.current.useTransition()
}
;
Y.version = "18.3.1";
Rf.exports = Y;
var y = Rf.exports;
const j = Tf(y)
  , Ff = Fg({
    __proto__: null,
    default: j
}, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ev = y
  , tv = Symbol.for("react.element")
  , nv = Symbol.for("react.fragment")
  , rv = Object.prototype.hasOwnProperty
  , ov = ev.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , iv = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function zf(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        rv.call(t, r) && !iv.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: tv,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: ov.current
    }
}
js.Fragment = nv;
js.jsx = zf;
js.jsxs = zf;
Nf.exports = js;
var E = Nf.exports
  , $f = {
    exports: {}
}
  , Je = {}
  , Uf = {
    exports: {}
}
  , Bf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(T, N) {
        var D = T.length;
        T.push(N);
        e: for (; 0 < D; ) {
            var W = D - 1 >>> 1
              , z = T[W];
            if (0 < o(z, N))
                T[W] = N,
                T[D] = z,
                D = W;
            else
                break e
        }
    }
    function n(T) {
        return T.length === 0 ? null : T[0]
    }
    function r(T) {
        if (T.length === 0)
            return null;
        var N = T[0]
          , D = T.pop();
        if (D !== N) {
            T[0] = D;
            e: for (var W = 0, z = T.length, G = z >>> 1; W < G; ) {
                var X = 2 * (W + 1) - 1
                  , he = T[X]
                  , ke = X + 1
                  , J = T[ke];
                if (0 > o(he, D))
                    ke < z && 0 > o(J, he) ? (T[W] = J,
                    T[ke] = D,
                    W = ke) : (T[W] = he,
                    T[X] = D,
                    W = X);
                else if (ke < z && 0 > o(J, D))
                    T[W] = J,
                    T[ke] = D,
                    W = ke;
                else
                    break e
            }
        }
        return N
    }
    function o(T, N) {
        var D = T.sortIndex - N.sortIndex;
        return D !== 0 ? D : T.id - N.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date
          , l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = []
      , u = []
      , c = 1
      , d = null
      , p = 3
      , f = !1
      , x = !1
      , g = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(T) {
        for (var N = n(u); N !== null; ) {
            if (N.callback === null)
                r(u);
            else if (N.startTime <= T)
                r(u),
                N.sortIndex = N.expirationTime,
                t(a, N);
            else
                break;
            N = n(u)
        }
    }
    function S(T) {
        if (g = !1,
        v(T),
        !x)
            if (n(a) !== null)
                x = !0,
                U(C);
            else {
                var N = n(u);
                N !== null && H(S, N.startTime - T)
            }
    }
    function C(T, N) {
        x = !1,
        g && (g = !1,
        m(R),
        R = -1),
        f = !0;
        var D = p;
        try {
            for (v(N),
            d = n(a); d !== null && (!(d.expirationTime > N) || T && !$()); ) {
                var W = d.callback;
                if (typeof W == "function") {
                    d.callback = null,
                    p = d.priorityLevel;
                    var z = W(d.expirationTime <= N);
                    N = e.unstable_now(),
                    typeof z == "function" ? d.callback = z : d === n(a) && r(a),
                    v(N)
                } else
                    r(a);
                d = n(a)
            }
            if (d !== null)
                var G = !0;
            else {
                var X = n(u);
                X !== null && H(S, X.startTime - N),
                G = !1
            }
            return G
        } finally {
            d = null,
            p = D,
            f = !1
        }
    }
    var k = !1
      , P = null
      , R = -1
      , L = 5
      , A = -1;
    function $() {
        return !(e.unstable_now() - A < L)
    }
    function M() {
        if (P !== null) {
            var T = e.unstable_now();
            A = T;
            var N = !0;
            try {
                N = P(!0, T)
            } finally {
                N ? F() : (k = !1,
                P = null)
            }
        } else
            k = !1
    }
    var F;
    if (typeof h == "function")
        F = function() {
            h(M)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var _ = new MessageChannel
          , Q = _.port2;
        _.port1.onmessage = M,
        F = function() {
            Q.postMessage(null)
        }
    } else
        F = function() {
            w(M, 0)
        }
        ;
    function U(T) {
        P = T,
        k || (k = !0,
        F())
    }
    function H(T, N) {
        R = w(function() {
            T(e.unstable_now())
        }, N)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(T) {
        T.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        x || f || (x = !0,
        U(C))
    }
    ,
    e.unstable_forceFrameRate = function(T) {
        0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < T ? Math.floor(1e3 / T) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return p
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(T) {
        switch (p) {
        case 1:
        case 2:
        case 3:
            var N = 3;
            break;
        default:
            N = p
        }
        var D = p;
        p = N;
        try {
            return T()
        } finally {
            p = D
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(T, N) {
        switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            T = 3
        }
        var D = p;
        p = T;
        try {
            return N()
        } finally {
            p = D
        }
    }
    ,
    e.unstable_scheduleCallback = function(T, N, D) {
        var W = e.unstable_now();
        switch (typeof D == "object" && D !== null ? (D = D.delay,
        D = typeof D == "number" && 0 < D ? W + D : W) : D = W,
        T) {
        case 1:
            var z = -1;
            break;
        case 2:
            z = 250;
            break;
        case 5:
            z = 1073741823;
            break;
        case 4:
            z = 1e4;
            break;
        default:
            z = 5e3
        }
        return z = D + z,
        T = {
            id: c++,
            callback: N,
            priorityLevel: T,
            startTime: D,
            expirationTime: z,
            sortIndex: -1
        },
        D > W ? (T.sortIndex = D,
        t(u, T),
        n(a) === null && T === n(u) && (g ? (m(R),
        R = -1) : g = !0,
        H(S, D - W))) : (T.sortIndex = z,
        t(a, T),
        x || f || (x = !0,
        U(C))),
        T
    }
    ,
    e.unstable_shouldYield = $,
    e.unstable_wrapCallback = function(T) {
        var N = p;
        return function() {
            var D = p;
            p = N;
            try {
                return T.apply(this, arguments)
            } finally {
                p = D
            }
        }
    }
}
)(Bf);
Uf.exports = Bf;
var sv = Uf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lv = y
  , qe = sv;
function O(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Vf = new Set
  , Mo = {};
function sr(e, t) {
    Qr(e, t),
    Qr(e + "Capture", t)
}
function Qr(e, t) {
    for (Mo[e] = t,
    e = 0; e < t.length; e++)
        Vf.add(t[e])
}
var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Ql = Object.prototype.hasOwnProperty
  , av = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , kc = {}
  , Pc = {};
function uv(e) {
    return Ql.call(Pc, e) ? !0 : Ql.call(kc, e) ? !1 : av.test(e) ? Pc[e] = !0 : (kc[e] = !0,
    !1)
}
function cv(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function dv(e, t, n, r) {
    if (t === null || typeof t > "u" || cv(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Fe(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = s
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ce[e] = new Fe(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ce[t] = new Fe(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ce[e] = new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ce[e] = new Fe(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ce[e] = new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ce[e] = new Fe(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Ce[e] = new Fe(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ce[e] = new Fe(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Ce[e] = new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var iu = /[\-:]([a-z])/g;
function su(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(iu, su);
    Ce[t] = new Fe(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(iu, su);
    Ce[t] = new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(iu, su);
    Ce[t] = new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ce[e] = new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ce.xlinkHref = new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ce[e] = new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function lu(e, t, n, r) {
    var o = Ce.hasOwnProperty(t) ? Ce[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (dv(t, n, o, r) && (n = null),
    r || o === null ? uv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var qt = lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , yi = Symbol.for("react.element")
  , mr = Symbol.for("react.portal")
  , gr = Symbol.for("react.fragment")
  , au = Symbol.for("react.strict_mode")
  , Kl = Symbol.for("react.profiler")
  , Hf = Symbol.for("react.provider")
  , Wf = Symbol.for("react.context")
  , uu = Symbol.for("react.forward_ref")
  , Gl = Symbol.for("react.suspense")
  , Yl = Symbol.for("react.suspense_list")
  , cu = Symbol.for("react.memo")
  , un = Symbol.for("react.lazy")
  , Qf = Symbol.for("react.offscreen")
  , bc = Symbol.iterator;
function co(e) {
    return e === null || typeof e != "object" ? null : (e = bc && e[bc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ce = Object.assign, pl;
function So(e) {
    if (pl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            pl = t && t[1] || ""
        }
    return `
` + pl + e
}
var hl = !1;
function ml(e, t) {
    if (!e || hl)
        return "";
    hl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l]; )
                l--;
            for (; 1 <= s && 0 <= l; s--,
            l--)
                if (o[s] !== i[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--,
                            l--,
                            0 > l || o[s] !== i[l]) {
                                var a = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        hl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? So(e) : ""
}
function fv(e) {
    switch (e.tag) {
    case 5:
        return So(e.type);
    case 16:
        return So("Lazy");
    case 13:
        return So("Suspense");
    case 19:
        return So("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = ml(e.type, !1),
        e;
    case 11:
        return e = ml(e.type.render, !1),
        e;
    case 1:
        return e = ml(e.type, !0),
        e;
    default:
        return ""
    }
}
function Xl(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case gr:
        return "Fragment";
    case mr:
        return "Portal";
    case Kl:
        return "Profiler";
    case au:
        return "StrictMode";
    case Gl:
        return "Suspense";
    case Yl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Wf:
            return (e.displayName || "Context") + ".Consumer";
        case Hf:
            return (e._context.displayName || "Context") + ".Provider";
        case uu:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case cu:
            return t = e.displayName || null,
            t !== null ? t : Xl(e.type) || "Memo";
        case un:
            t = e._payload,
            e = e._init;
            try {
                return Xl(e(t))
            } catch {}
        }
    return null
}
function pv(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Xl(t);
    case 8:
        return t === au ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Rn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Kf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function hv(e) {
    var t = Kf(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s,
                i.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function wi(e) {
    e._valueTracker || (e._valueTracker = hv(e))
}
function Gf(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Kf(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function es(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function ql(e, t) {
    var n = t.checked;
    return ce({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Tc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Rn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Yf(e, t) {
    t = t.checked,
    t != null && lu(e, "checked", t, !1)
}
function Zl(e, t) {
    Yf(e, t);
    var n = Rn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Jl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Jl(e, t.type, Rn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Nc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Jl(e, t, n) {
    (t !== "number" || es(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Eo = Array.isArray;
function Rr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Rn(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function ea(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(O(91));
    return ce({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Rc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(O(92));
            if (Eo(n)) {
                if (1 < n.length)
                    throw Error(O(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Rn(n)
    }
}
function Xf(e, t) {
    var n = Rn(t.value)
      , r = Rn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Oc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function qf(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function ta(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? qf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var xi, Zf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (xi = xi || document.createElement("div"),
        xi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = xi.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Do(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Po = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , mv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Po).forEach(function(e) {
    mv.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Po[t] = Po[e]
    })
});
function Jf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Po.hasOwnProperty(e) && Po[e] ? ("" + t).trim() : t + "px"
}
function ep(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = Jf(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var gv = ce({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function na(e, t) {
    if (t) {
        if (gv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(O(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(O(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(O(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(O(62))
    }
}
function ra(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var oa = null;
function du(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var ia = null
  , Or = null
  , _r = null;
function _c(e) {
    if (e = li(e)) {
        if (typeof ia != "function")
            throw Error(O(280));
        var t = e.stateNode;
        t && (t = Is(t),
        ia(e.stateNode, e.type, t))
    }
}
function tp(e) {
    Or ? _r ? _r.push(e) : _r = [e] : Or = e
}
function np() {
    if (Or) {
        var e = Or
          , t = _r;
        if (_r = Or = null,
        _c(e),
        t)
            for (e = 0; e < t.length; e++)
                _c(t[e])
    }
}
function rp(e, t) {
    return e(t)
}
function op() {}
var gl = !1;
function ip(e, t, n) {
    if (gl)
        return e(t, n);
    gl = !0;
    try {
        return rp(e, t, n)
    } finally {
        gl = !1,
        (Or !== null || _r !== null) && (op(),
        np())
    }
}
function Io(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Is(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(O(231, t, typeof n));
    return n
}
var sa = !1;
if (Wt)
    try {
        var fo = {};
        Object.defineProperty(fo, "passive", {
            get: function() {
                sa = !0
            }
        }),
        window.addEventListener("test", fo, fo),
        window.removeEventListener("test", fo, fo)
    } catch {
        sa = !1
    }
function vv(e, t, n, r, o, i, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var bo = !1
  , ts = null
  , ns = !1
  , la = null
  , yv = {
    onError: function(e) {
        bo = !0,
        ts = e
    }
};
function wv(e, t, n, r, o, i, s, l, a) {
    bo = !1,
    ts = null,
    vv.apply(yv, arguments)
}
function xv(e, t, n, r, o, i, s, l, a) {
    if (wv.apply(this, arguments),
    bo) {
        if (bo) {
            var u = ts;
            bo = !1,
            ts = null
        } else
            throw Error(O(198));
        ns || (ns = !0,
        la = u)
    }
}
function lr(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function sp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function jc(e) {
    if (lr(e) !== e)
        throw Error(O(188))
}
function Sv(e) {
    var t = e.alternate;
    if (!t) {
        if (t = lr(e),
        t === null)
            throw Error(O(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return jc(o),
                    e;
                if (i === r)
                    return jc(o),
                    t;
                i = i.sibling
            }
            throw Error(O(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var s = !1, l = o.child; l; ) {
                if (l === n) {
                    s = !0,
                    n = o,
                    r = i;
                    break
                }
                if (l === r) {
                    s = !0,
                    r = o,
                    n = i;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = i.child; l; ) {
                    if (l === n) {
                        s = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (l === r) {
                        s = !0,
                        r = i,
                        n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!s)
                    throw Error(O(189))
            }
        }
        if (n.alternate !== r)
            throw Error(O(190))
    }
    if (n.tag !== 3)
        throw Error(O(188));
    return n.stateNode.current === n ? e : t
}
function lp(e) {
    return e = Sv(e),
    e !== null ? ap(e) : null
}
function ap(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = ap(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var up = qe.unstable_scheduleCallback
  , Ac = qe.unstable_cancelCallback
  , Ev = qe.unstable_shouldYield
  , Cv = qe.unstable_requestPaint
  , pe = qe.unstable_now
  , kv = qe.unstable_getCurrentPriorityLevel
  , fu = qe.unstable_ImmediatePriority
  , cp = qe.unstable_UserBlockingPriority
  , rs = qe.unstable_NormalPriority
  , Pv = qe.unstable_LowPriority
  , dp = qe.unstable_IdlePriority
  , As = null
  , jt = null;
function bv(e) {
    if (jt && typeof jt.onCommitFiberRoot == "function")
        try {
            jt.onCommitFiberRoot(As, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var xt = Math.clz32 ? Math.clz32 : Rv
  , Tv = Math.log
  , Nv = Math.LN2;
function Rv(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Tv(e) / Nv | 0) | 0
}
var Si = 64
  , Ei = 4194304;
function Co(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function os(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var l = s & ~o;
        l !== 0 ? r = Co(l) : (i &= s,
        i !== 0 && (r = Co(i)))
    } else
        s = n & ~o,
        s !== 0 ? r = Co(s) : i !== 0 && (r = Co(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - xt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function Ov(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function _v(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - xt(i)
          , l = 1 << s
          , a = o[s];
        a === -1 ? (!(l & n) || l & r) && (o[s] = Ov(l, t)) : a <= t && (e.expiredLanes |= l),
        i &= ~l
    }
}
function aa(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function fp() {
    var e = Si;
    return Si <<= 1,
    !(Si & 4194240) && (Si = 64),
    e
}
function vl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ii(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - xt(t),
    e[t] = n
}
function jv(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - xt(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function pu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - xt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var ee = 0;
function pp(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var hp, hu, mp, gp, vp, ua = !1, Ci = [], Sn = null, En = null, Cn = null, Fo = new Map, zo = new Map, dn = [], Av = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Lc(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Sn = null;
        break;
    case "dragenter":
    case "dragleave":
        En = null;
        break;
    case "mouseover":
    case "mouseout":
        Cn = null;
        break;
    case "pointerover":
    case "pointerout":
        Fo.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        zo.delete(t.pointerId)
    }
}
function po(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = li(t),
    t !== null && hu(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function Lv(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return Sn = po(Sn, e, t, n, r, o),
        !0;
    case "dragenter":
        return En = po(En, e, t, n, r, o),
        !0;
    case "mouseover":
        return Cn = po(Cn, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return Fo.set(i, po(Fo.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        zo.set(i, po(zo.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function yp(e) {
    var t = Vn(e.target);
    if (t !== null) {
        var n = lr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = sp(n),
                t !== null) {
                    e.blockedOn = t,
                    vp(e.priority, function() {
                        mp(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Ui(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ca(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            oa = r,
            n.target.dispatchEvent(r),
            oa = null
        } else
            return t = li(n),
            t !== null && hu(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Mc(e, t, n) {
    Ui(e) && n.delete(t)
}
function Mv() {
    ua = !1,
    Sn !== null && Ui(Sn) && (Sn = null),
    En !== null && Ui(En) && (En = null),
    Cn !== null && Ui(Cn) && (Cn = null),
    Fo.forEach(Mc),
    zo.forEach(Mc)
}
function ho(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    ua || (ua = !0,
    qe.unstable_scheduleCallback(qe.unstable_NormalPriority, Mv)))
}
function $o(e) {
    function t(o) {
        return ho(o, e)
    }
    if (0 < Ci.length) {
        ho(Ci[0], e);
        for (var n = 1; n < Ci.length; n++) {
            var r = Ci[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Sn !== null && ho(Sn, e),
    En !== null && ho(En, e),
    Cn !== null && ho(Cn, e),
    Fo.forEach(t),
    zo.forEach(t),
    n = 0; n < dn.length; n++)
        r = dn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < dn.length && (n = dn[0],
    n.blockedOn === null); )
        yp(n),
        n.blockedOn === null && dn.shift()
}
var jr = qt.ReactCurrentBatchConfig
  , is = !0;
function Dv(e, t, n, r) {
    var o = ee
      , i = jr.transition;
    jr.transition = null;
    try {
        ee = 1,
        mu(e, t, n, r)
    } finally {
        ee = o,
        jr.transition = i
    }
}
function Iv(e, t, n, r) {
    var o = ee
      , i = jr.transition;
    jr.transition = null;
    try {
        ee = 4,
        mu(e, t, n, r)
    } finally {
        ee = o,
        jr.transition = i
    }
}
function mu(e, t, n, r) {
    if (is) {
        var o = ca(e, t, n, r);
        if (o === null)
            Tl(e, t, r, ss, n),
            Lc(e, r);
        else if (Lv(o, e, t, n, r))
            r.stopPropagation();
        else if (Lc(e, r),
        t & 4 && -1 < Av.indexOf(e)) {
            for (; o !== null; ) {
                var i = li(o);
                if (i !== null && hp(i),
                i = ca(e, t, n, r),
                i === null && Tl(e, t, r, ss, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            Tl(e, t, r, null, n)
    }
}
var ss = null;
function ca(e, t, n, r) {
    if (ss = null,
    e = du(r),
    e = Vn(e),
    e !== null)
        if (t = lr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = sp(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return ss = e,
    null
}
function wp(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (kv()) {
        case fu:
            return 1;
        case cp:
            return 4;
        case rs:
        case Pv:
            return 16;
        case dp:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var yn = null
  , gu = null
  , Bi = null;
function xp() {
    if (Bi)
        return Bi;
    var e, t = gu, n = t.length, r, o = "value"in yn ? yn.value : yn.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
        ;
    return Bi = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Vi(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function ki() {
    return !0
}
function Dc() {
    return !1
}
function et(e) {
    function t(n, r, o, i, s) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = s,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ki : Dc,
        this.isPropagationStopped = Dc,
        this
    }
    return ce(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = ki)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = ki)
        },
        persist: function() {},
        isPersistent: ki
    }),
    t
}
var no = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, vu = et(no), si = ce({}, no, {
    view: 0,
    detail: 0
}), Fv = et(si), yl, wl, mo, Ls = ce({}, si, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: yu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== mo && (mo && e.type === "mousemove" ? (yl = e.screenX - mo.screenX,
        wl = e.screenY - mo.screenY) : wl = yl = 0,
        mo = e),
        yl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : wl
    }
}), Ic = et(Ls), zv = ce({}, Ls, {
    dataTransfer: 0
}), $v = et(zv), Uv = ce({}, si, {
    relatedTarget: 0
}), xl = et(Uv), Bv = ce({}, no, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Vv = et(Bv), Hv = ce({}, no, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Wv = et(Hv), Qv = ce({}, no, {
    data: 0
}), Fc = et(Qv), Kv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Gv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Yv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Xv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Yv[e]) ? !!t[e] : !1
}
function yu() {
    return Xv
}
var qv = ce({}, si, {
    key: function(e) {
        if (e.key) {
            var t = Kv[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Vi(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Gv[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: yu,
    charCode: function(e) {
        return e.type === "keypress" ? Vi(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Vi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Zv = et(qv)
  , Jv = ce({}, Ls, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , zc = et(Jv)
  , ey = ce({}, si, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yu
})
  , ty = et(ey)
  , ny = ce({}, no, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , ry = et(ny)
  , oy = ce({}, Ls, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , iy = et(oy)
  , sy = [9, 13, 27, 32]
  , wu = Wt && "CompositionEvent"in window
  , To = null;
Wt && "documentMode"in document && (To = document.documentMode);
var ly = Wt && "TextEvent"in window && !To
  , Sp = Wt && (!wu || To && 8 < To && 11 >= To)
  , $c = " "
  , Uc = !1;
function Ep(e, t) {
    switch (e) {
    case "keyup":
        return sy.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Cp(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var vr = !1;
function ay(e, t) {
    switch (e) {
    case "compositionend":
        return Cp(t);
    case "keypress":
        return t.which !== 32 ? null : (Uc = !0,
        $c);
    case "textInput":
        return e = t.data,
        e === $c && Uc ? null : e;
    default:
        return null
    }
}
function uy(e, t) {
    if (vr)
        return e === "compositionend" || !wu && Ep(e, t) ? (e = xp(),
        Bi = gu = yn = null,
        vr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Sp && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var cy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Bc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!cy[e.type] : t === "textarea"
}
function kp(e, t, n, r) {
    tp(r),
    t = ls(t, "onChange"),
    0 < t.length && (n = new vu("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var No = null
  , Uo = null;
function dy(e) {
    Mp(e, 0)
}
function Ms(e) {
    var t = xr(e);
    if (Gf(t))
        return e
}
function fy(e, t) {
    if (e === "change")
        return t
}
var Pp = !1;
if (Wt) {
    var Sl;
    if (Wt) {
        var El = "oninput"in document;
        if (!El) {
            var Vc = document.createElement("div");
            Vc.setAttribute("oninput", "return;"),
            El = typeof Vc.oninput == "function"
        }
        Sl = El
    } else
        Sl = !1;
    Pp = Sl && (!document.documentMode || 9 < document.documentMode)
}
function Hc() {
    No && (No.detachEvent("onpropertychange", bp),
    Uo = No = null)
}
function bp(e) {
    if (e.propertyName === "value" && Ms(Uo)) {
        var t = [];
        kp(t, Uo, e, du(e)),
        ip(dy, t)
    }
}
function py(e, t, n) {
    e === "focusin" ? (Hc(),
    No = t,
    Uo = n,
    No.attachEvent("onpropertychange", bp)) : e === "focusout" && Hc()
}
function hy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ms(Uo)
}
function my(e, t) {
    if (e === "click")
        return Ms(t)
}
function gy(e, t) {
    if (e === "input" || e === "change")
        return Ms(t)
}
function vy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Et = typeof Object.is == "function" ? Object.is : vy;
function Bo(e, t) {
    if (Et(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Ql.call(t, o) || !Et(e[o], t[o]))
            return !1
    }
    return !0
}
function Wc(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Qc(e, t) {
    var n = Wc(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Wc(n)
    }
}
function Tp(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Tp(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Np() {
    for (var e = window, t = es(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = es(e.document)
    }
    return t
}
function xu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function yy(e) {
    var t = Np()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Tp(n.ownerDocument.documentElement, n)) {
        if (r !== null && xu(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = Qc(n, i);
                var s = Qc(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var wy = Wt && "documentMode"in document && 11 >= document.documentMode
  , yr = null
  , da = null
  , Ro = null
  , fa = !1;
function Kc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fa || yr == null || yr !== es(r) || (r = yr,
    "selectionStart"in r && xu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Ro && Bo(Ro, r) || (Ro = r,
    r = ls(da, "onSelect"),
    0 < r.length && (t = new vu("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = yr)))
}
function Pi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var wr = {
    animationend: Pi("Animation", "AnimationEnd"),
    animationiteration: Pi("Animation", "AnimationIteration"),
    animationstart: Pi("Animation", "AnimationStart"),
    transitionend: Pi("Transition", "TransitionEnd")
}
  , Cl = {}
  , Rp = {};
Wt && (Rp = document.createElement("div").style,
"AnimationEvent"in window || (delete wr.animationend.animation,
delete wr.animationiteration.animation,
delete wr.animationstart.animation),
"TransitionEvent"in window || delete wr.transitionend.transition);
function Ds(e) {
    if (Cl[e])
        return Cl[e];
    if (!wr[e])
        return e;
    var t = wr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Rp)
            return Cl[e] = t[n];
    return e
}
var Op = Ds("animationend")
  , _p = Ds("animationiteration")
  , jp = Ds("animationstart")
  , Ap = Ds("transitionend")
  , Lp = new Map
  , Gc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Mn(e, t) {
    Lp.set(e, t),
    sr(t, [e])
}
for (var kl = 0; kl < Gc.length; kl++) {
    var Pl = Gc[kl]
      , xy = Pl.toLowerCase()
      , Sy = Pl[0].toUpperCase() + Pl.slice(1);
    Mn(xy, "on" + Sy)
}
Mn(Op, "onAnimationEnd");
Mn(_p, "onAnimationIteration");
Mn(jp, "onAnimationStart");
Mn("dblclick", "onDoubleClick");
Mn("focusin", "onFocus");
Mn("focusout", "onBlur");
Mn(Ap, "onTransitionEnd");
Qr("onMouseEnter", ["mouseout", "mouseover"]);
Qr("onMouseLeave", ["mouseout", "mouseover"]);
Qr("onPointerEnter", ["pointerout", "pointerover"]);
Qr("onPointerLeave", ["pointerout", "pointerover"]);
sr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
sr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
sr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
sr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
sr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ko = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Ey = new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));
function Yc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    xv(r, t, void 0, e),
    e.currentTarget = null
}
function Mp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    Yc(o, l, u),
                    i = a
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (l = r[s],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    Yc(o, l, u),
                    i = a
                }
        }
    }
    if (ns)
        throw e = la,
        ns = !1,
        la = null,
        e
}
function oe(e, t) {
    var n = t[va];
    n === void 0 && (n = t[va] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Dp(t, e, 2, !1),
    n.add(r))
}
function bl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Dp(n, e, r, t)
}
var bi = "_reactListening" + Math.random().toString(36).slice(2);
function Vo(e) {
    if (!e[bi]) {
        e[bi] = !0,
        Vf.forEach(function(n) {
            n !== "selectionchange" && (Ey.has(n) || bl(n, !1, e),
            bl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[bi] || (t[bi] = !0,
        bl("selectionchange", !1, t))
    }
}
function Dp(e, t, n, r) {
    switch (wp(t)) {
    case 1:
        var o = Dv;
        break;
    case 4:
        o = Iv;
        break;
    default:
        o = mu
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !sa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Tl(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === o || l.nodeType === 8 && l.parentNode === o)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var a = s.tag;
                        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo,
                        a === o || a.nodeType === 8 && a.parentNode === o))
                            return;
                        s = s.return
                    }
                for (; l !== null; ) {
                    if (s = Vn(l),
                    s === null)
                        return;
                    if (a = s.tag,
                    a === 5 || a === 6) {
                        r = i = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    ip(function() {
        var u = i
          , c = du(n)
          , d = [];
        e: {
            var p = Lp.get(e);
            if (p !== void 0) {
                var f = vu
                  , x = e;
                switch (e) {
                case "keypress":
                    if (Vi(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    f = Zv;
                    break;
                case "focusin":
                    x = "focus",
                    f = xl;
                    break;
                case "focusout":
                    x = "blur",
                    f = xl;
                    break;
                case "beforeblur":
                case "afterblur":
                    f = xl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    f = Ic;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    f = $v;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    f = ty;
                    break;
                case Op:
                case _p:
                case jp:
                    f = Vv;
                    break;
                case Ap:
                    f = ry;
                    break;
                case "scroll":
                    f = Fv;
                    break;
                case "wheel":
                    f = iy;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    f = Wv;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    f = zc
                }
                var g = (t & 4) !== 0
                  , w = !g && e === "scroll"
                  , m = g ? p !== null ? p + "Capture" : null : p;
                g = [];
                for (var h = u, v; h !== null; ) {
                    v = h;
                    var S = v.stateNode;
                    if (v.tag === 5 && S !== null && (v = S,
                    m !== null && (S = Io(h, m),
                    S != null && g.push(Ho(h, S, v)))),
                    w)
                        break;
                    h = h.return
                }
                0 < g.length && (p = new f(p,x,null,n,c),
                d.push({
                    event: p,
                    listeners: g
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (p = e === "mouseover" || e === "pointerover",
                f = e === "mouseout" || e === "pointerout",
                p && n !== oa && (x = n.relatedTarget || n.fromElement) && (Vn(x) || x[Qt]))
                    break e;
                if ((f || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window,
                f ? (x = n.relatedTarget || n.toElement,
                f = u,
                x = x ? Vn(x) : null,
                x !== null && (w = lr(x),
                x !== w || x.tag !== 5 && x.tag !== 6) && (x = null)) : (f = null,
                x = u),
                f !== x)) {
                    if (g = Ic,
                    S = "onMouseLeave",
                    m = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (g = zc,
                    S = "onPointerLeave",
                    m = "onPointerEnter",
                    h = "pointer"),
                    w = f == null ? p : xr(f),
                    v = x == null ? p : xr(x),
                    p = new g(S,h + "leave",f,n,c),
                    p.target = w,
                    p.relatedTarget = v,
                    S = null,
                    Vn(c) === u && (g = new g(m,h + "enter",x,n,c),
                    g.target = v,
                    g.relatedTarget = w,
                    S = g),
                    w = S,
                    f && x)
                        t: {
                            for (g = f,
                            m = x,
                            h = 0,
                            v = g; v; v = hr(v))
                                h++;
                            for (v = 0,
                            S = m; S; S = hr(S))
                                v++;
                            for (; 0 < h - v; )
                                g = hr(g),
                                h--;
                            for (; 0 < v - h; )
                                m = hr(m),
                                v--;
                            for (; h--; ) {
                                if (g === m || m !== null && g === m.alternate)
                                    break t;
                                g = hr(g),
                                m = hr(m)
                            }
                            g = null
                        }
                    else
                        g = null;
                    f !== null && Xc(d, p, f, g, !1),
                    x !== null && w !== null && Xc(d, w, x, g, !0)
                }
            }
            e: {
                if (p = u ? xr(u) : window,
                f = p.nodeName && p.nodeName.toLowerCase(),
                f === "select" || f === "input" && p.type === "file")
                    var C = fy;
                else if (Bc(p))
                    if (Pp)
                        C = gy;
                    else {
                        C = hy;
                        var k = py
                    }
                else
                    (f = p.nodeName) && f.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (C = my);
                if (C && (C = C(e, u))) {
                    kp(d, C, n, c);
                    break e
                }
                k && k(e, p, u),
                e === "focusout" && (k = p._wrapperState) && k.controlled && p.type === "number" && Jl(p, "number", p.value)
            }
            switch (k = u ? xr(u) : window,
            e) {
            case "focusin":
                (Bc(k) || k.contentEditable === "true") && (yr = k,
                da = u,
                Ro = null);
                break;
            case "focusout":
                Ro = da = yr = null;
                break;
            case "mousedown":
                fa = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                fa = !1,
                Kc(d, n, c);
                break;
            case "selectionchange":
                if (wy)
                    break;
            case "keydown":
            case "keyup":
                Kc(d, n, c)
            }
            var P;
            if (wu)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var R = "onCompositionStart";
                        break e;
                    case "compositionend":
                        R = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        R = "onCompositionUpdate";
                        break e
                    }
                    R = void 0
                }
            else
                vr ? Ep(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
            R && (Sp && n.locale !== "ko" && (vr || R !== "onCompositionStart" ? R === "onCompositionEnd" && vr && (P = xp()) : (yn = c,
            gu = "value"in yn ? yn.value : yn.textContent,
            vr = !0)),
            k = ls(u, R),
            0 < k.length && (R = new Fc(R,e,null,n,c),
            d.push({
                event: R,
                listeners: k
            }),
            P ? R.data = P : (P = Cp(n),
            P !== null && (R.data = P)))),
            (P = ly ? ay(e, n) : uy(e, n)) && (u = ls(u, "onBeforeInput"),
            0 < u.length && (c = new Fc("onBeforeInput","beforeinput",null,n,c),
            d.push({
                event: c,
                listeners: u
            }),
            c.data = P))
        }
        Mp(d, t)
    })
}
function Ho(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function ls(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = Io(e, n),
        i != null && r.unshift(Ho(e, i, o)),
        i = Io(e, t),
        i != null && r.push(Ho(e, i, o))),
        e = e.return
    }
    return r
}
function hr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Xc(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        o ? (a = Io(n, i),
        a != null && s.unshift(Ho(n, a, l))) : o || (a = Io(n, i),
        a != null && s.push(Ho(n, a, l)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var Cy = /\r\n?/g
  , ky = /\u0000|\uFFFD/g;
function qc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Cy, `
`).replace(ky, "")
}
function Ti(e, t, n) {
    if (t = qc(t),
    qc(e) !== t && n)
        throw Error(O(425))
}
function as() {}
var pa = null
  , ha = null;
function ma(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ga = typeof setTimeout == "function" ? setTimeout : void 0
  , Py = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Zc = typeof Promise == "function" ? Promise : void 0
  , by = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zc < "u" ? function(e) {
    return Zc.resolve(null).then(e).catch(Ty)
}
: ga;
function Ty(e) {
    setTimeout(function() {
        throw e
    })
}
function Nl(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    $o(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    $o(t)
}
function kn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Jc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ro = Math.random().toString(36).slice(2)
  , Ot = "__reactFiber$" + ro
  , Wo = "__reactProps$" + ro
  , Qt = "__reactContainer$" + ro
  , va = "__reactEvents$" + ro
  , Ny = "__reactListeners$" + ro
  , Ry = "__reactHandles$" + ro;
function Vn(e) {
    var t = e[Ot];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Qt] || n[Ot]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Jc(e); e !== null; ) {
                    if (n = e[Ot])
                        return n;
                    e = Jc(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function li(e) {
    return e = e[Ot] || e[Qt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function xr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(O(33))
}
function Is(e) {
    return e[Wo] || null
}
var ya = []
  , Sr = -1;
function Dn(e) {
    return {
        current: e
    }
}
function ie(e) {
    0 > Sr || (e.current = ya[Sr],
    ya[Sr] = null,
    Sr--)
}
function ne(e, t) {
    Sr++,
    ya[Sr] = e.current,
    e.current = t
}
var On = {}
  , Oe = Dn(On)
  , Be = Dn(!1)
  , er = On;
function Kr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return On;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function Ve(e) {
    return e = e.childContextTypes,
    e != null
}
function us() {
    ie(Be),
    ie(Oe)
}
function ed(e, t, n) {
    if (Oe.current !== On)
        throw Error(O(168));
    ne(Oe, t),
    ne(Be, n)
}
function Ip(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(O(108, pv(e) || "Unknown", o));
    return ce({}, n, r)
}
function cs(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || On,
    er = Oe.current,
    ne(Oe, e),
    ne(Be, Be.current),
    !0
}
function td(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(O(169));
    n ? (e = Ip(e, t, er),
    r.__reactInternalMemoizedMergedChildContext = e,
    ie(Be),
    ie(Oe),
    ne(Oe, e)) : ie(Be),
    ne(Be, n)
}
var $t = null
  , Fs = !1
  , Rl = !1;
function Fp(e) {
    $t === null ? $t = [e] : $t.push(e)
}
function Oy(e) {
    Fs = !0,
    Fp(e)
}
function In() {
    if (!Rl && $t !== null) {
        Rl = !0;
        var e = 0
          , t = ee;
        try {
            var n = $t;
            for (ee = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            $t = null,
            Fs = !1
        } catch (o) {
            throw $t !== null && ($t = $t.slice(e + 1)),
            up(fu, In),
            o
        } finally {
            ee = t,
            Rl = !1
        }
    }
    return null
}
var Er = []
  , Cr = 0
  , ds = null
  , fs = 0
  , rt = []
  , ot = 0
  , tr = null
  , Bt = 1
  , Vt = "";
function Un(e, t) {
    Er[Cr++] = fs,
    Er[Cr++] = ds,
    ds = e,
    fs = t
}
function zp(e, t, n) {
    rt[ot++] = Bt,
    rt[ot++] = Vt,
    rt[ot++] = tr,
    tr = e;
    var r = Bt;
    e = Vt;
    var o = 32 - xt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - xt(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32),
        r >>= s,
        o -= s,
        Bt = 1 << 32 - xt(t) + o | n << o | r,
        Vt = i + e
    } else
        Bt = 1 << i | n << o | r,
        Vt = e
}
function Su(e) {
    e.return !== null && (Un(e, 1),
    zp(e, 1, 0))
}
function Eu(e) {
    for (; e === ds; )
        ds = Er[--Cr],
        Er[Cr] = null,
        fs = Er[--Cr],
        Er[Cr] = null;
    for (; e === tr; )
        tr = rt[--ot],
        rt[ot] = null,
        Vt = rt[--ot],
        rt[ot] = null,
        Bt = rt[--ot],
        rt[ot] = null
}
var Ye = null
  , Ge = null
  , le = !1
  , wt = null;
function $p(e, t) {
    var n = it(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function nd(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ye = e,
        Ge = kn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ye = e,
        Ge = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = tr !== null ? {
            id: Bt,
            overflow: Vt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = it(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ye = e,
        Ge = null,
        !0) : !1;
    default:
        return !1
    }
}
function wa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function xa(e) {
    if (le) {
        var t = Ge;
        if (t) {
            var n = t;
            if (!nd(e, t)) {
                if (wa(e))
                    throw Error(O(418));
                t = kn(n.nextSibling);
                var r = Ye;
                t && nd(e, t) ? $p(r, n) : (e.flags = e.flags & -4097 | 2,
                le = !1,
                Ye = e)
            }
        } else {
            if (wa(e))
                throw Error(O(418));
            e.flags = e.flags & -4097 | 2,
            le = !1,
            Ye = e
        }
    }
}
function rd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ye = e
}
function Ni(e) {
    if (e !== Ye)
        return !1;
    if (!le)
        return rd(e),
        le = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !ma(e.type, e.memoizedProps)),
    t && (t = Ge)) {
        if (wa(e))
            throw Up(),
            Error(O(418));
        for (; t; )
            $p(e, t),
            t = kn(t.nextSibling)
    }
    if (rd(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(O(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ge = kn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ge = null
        }
    } else
        Ge = Ye ? kn(e.stateNode.nextSibling) : null;
    return !0
}
function Up() {
    for (var e = Ge; e; )
        e = kn(e.nextSibling)
}
function Gr() {
    Ge = Ye = null,
    le = !1
}
function Cu(e) {
    wt === null ? wt = [e] : wt.push(e)
}
var _y = qt.ReactCurrentBatchConfig;
function go(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(O(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(O(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var l = o.refs;
                s === null ? delete l[i] : l[i] = s
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(O(284));
        if (!n._owner)
            throw Error(O(290, e))
    }
    return e
}
function Ri(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function od(e) {
    var t = e._init;
    return t(e._payload)
}
function Bp(e) {
    function t(m, h) {
        if (e) {
            var v = m.deletions;
            v === null ? (m.deletions = [h],
            m.flags |= 16) : v.push(h)
        }
    }
    function n(m, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(m, h),
            h = h.sibling;
        return null
    }
    function r(m, h) {
        for (m = new Map; h !== null; )
            h.key !== null ? m.set(h.key, h) : m.set(h.index, h),
            h = h.sibling;
        return m
    }
    function o(m, h) {
        return m = Nn(m, h),
        m.index = 0,
        m.sibling = null,
        m
    }
    function i(m, h, v) {
        return m.index = v,
        e ? (v = m.alternate,
        v !== null ? (v = v.index,
        v < h ? (m.flags |= 2,
        h) : v) : (m.flags |= 2,
        h)) : (m.flags |= 1048576,
        h)
    }
    function s(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function l(m, h, v, S) {
        return h === null || h.tag !== 6 ? (h = Dl(v, m.mode, S),
        h.return = m,
        h) : (h = o(h, v),
        h.return = m,
        h)
    }
    function a(m, h, v, S) {
        var C = v.type;
        return C === gr ? c(m, h, v.props.children, S, v.key) : h !== null && (h.elementType === C || typeof C == "object" && C !== null && C.$$typeof === un && od(C) === h.type) ? (S = o(h, v.props),
        S.ref = go(m, h, v),
        S.return = m,
        S) : (S = Xi(v.type, v.key, v.props, null, m.mode, S),
        S.ref = go(m, h, v),
        S.return = m,
        S)
    }
    function u(m, h, v, S) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = Il(v, m.mode, S),
        h.return = m,
        h) : (h = o(h, v.children || []),
        h.return = m,
        h)
    }
    function c(m, h, v, S, C) {
        return h === null || h.tag !== 7 ? (h = Jn(v, m.mode, S, C),
        h.return = m,
        h) : (h = o(h, v),
        h.return = m,
        h)
    }
    function d(m, h, v) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = Dl("" + h, m.mode, v),
            h.return = m,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case yi:
                return v = Xi(h.type, h.key, h.props, null, m.mode, v),
                v.ref = go(m, null, h),
                v.return = m,
                v;
            case mr:
                return h = Il(h, m.mode, v),
                h.return = m,
                h;
            case un:
                var S = h._init;
                return d(m, S(h._payload), v)
            }
            if (Eo(h) || co(h))
                return h = Jn(h, m.mode, v, null),
                h.return = m,
                h;
            Ri(m, h)
        }
        return null
    }
    function p(m, h, v, S) {
        var C = h !== null ? h.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return C !== null ? null : l(m, h, "" + v, S);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case yi:
                return v.key === C ? a(m, h, v, S) : null;
            case mr:
                return v.key === C ? u(m, h, v, S) : null;
            case un:
                return C = v._init,
                p(m, h, C(v._payload), S)
            }
            if (Eo(v) || co(v))
                return C !== null ? null : c(m, h, v, S, null);
            Ri(m, v)
        }
        return null
    }
    function f(m, h, v, S, C) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return m = m.get(v) || null,
            l(h, m, "" + S, C);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case yi:
                return m = m.get(S.key === null ? v : S.key) || null,
                a(h, m, S, C);
            case mr:
                return m = m.get(S.key === null ? v : S.key) || null,
                u(h, m, S, C);
            case un:
                var k = S._init;
                return f(m, h, v, k(S._payload), C)
            }
            if (Eo(S) || co(S))
                return m = m.get(v) || null,
                c(h, m, S, C, null);
            Ri(h, S)
        }
        return null
    }
    function x(m, h, v, S) {
        for (var C = null, k = null, P = h, R = h = 0, L = null; P !== null && R < v.length; R++) {
            P.index > R ? (L = P,
            P = null) : L = P.sibling;
            var A = p(m, P, v[R], S);
            if (A === null) {
                P === null && (P = L);
                break
            }
            e && P && A.alternate === null && t(m, P),
            h = i(A, h, R),
            k === null ? C = A : k.sibling = A,
            k = A,
            P = L
        }
        if (R === v.length)
            return n(m, P),
            le && Un(m, R),
            C;
        if (P === null) {
            for (; R < v.length; R++)
                P = d(m, v[R], S),
                P !== null && (h = i(P, h, R),
                k === null ? C = P : k.sibling = P,
                k = P);
            return le && Un(m, R),
            C
        }
        for (P = r(m, P); R < v.length; R++)
            L = f(P, m, R, v[R], S),
            L !== null && (e && L.alternate !== null && P.delete(L.key === null ? R : L.key),
            h = i(L, h, R),
            k === null ? C = L : k.sibling = L,
            k = L);
        return e && P.forEach(function($) {
            return t(m, $)
        }),
        le && Un(m, R),
        C
    }
    function g(m, h, v, S) {
        var C = co(v);
        if (typeof C != "function")
            throw Error(O(150));
        if (v = C.call(v),
        v == null)
            throw Error(O(151));
        for (var k = C = null, P = h, R = h = 0, L = null, A = v.next(); P !== null && !A.done; R++,
        A = v.next()) {
            P.index > R ? (L = P,
            P = null) : L = P.sibling;
            var $ = p(m, P, A.value, S);
            if ($ === null) {
                P === null && (P = L);
                break
            }
            e && P && $.alternate === null && t(m, P),
            h = i($, h, R),
            k === null ? C = $ : k.sibling = $,
            k = $,
            P = L
        }
        if (A.done)
            return n(m, P),
            le && Un(m, R),
            C;
        if (P === null) {
            for (; !A.done; R++,
            A = v.next())
                A = d(m, A.value, S),
                A !== null && (h = i(A, h, R),
                k === null ? C = A : k.sibling = A,
                k = A);
            return le && Un(m, R),
            C
        }
        for (P = r(m, P); !A.done; R++,
        A = v.next())
            A = f(P, m, R, A.value, S),
            A !== null && (e && A.alternate !== null && P.delete(A.key === null ? R : A.key),
            h = i(A, h, R),
            k === null ? C = A : k.sibling = A,
            k = A);
        return e && P.forEach(function(M) {
            return t(m, M)
        }),
        le && Un(m, R),
        C
    }
    function w(m, h, v, S) {
        if (typeof v == "object" && v !== null && v.type === gr && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case yi:
                e: {
                    for (var C = v.key, k = h; k !== null; ) {
                        if (k.key === C) {
                            if (C = v.type,
                            C === gr) {
                                if (k.tag === 7) {
                                    n(m, k.sibling),
                                    h = o(k, v.props.children),
                                    h.return = m,
                                    m = h;
                                    break e
                                }
                            } else if (k.elementType === C || typeof C == "object" && C !== null && C.$$typeof === un && od(C) === k.type) {
                                n(m, k.sibling),
                                h = o(k, v.props),
                                h.ref = go(m, k, v),
                                h.return = m,
                                m = h;
                                break e
                            }
                            n(m, k);
                            break
                        } else
                            t(m, k);
                        k = k.sibling
                    }
                    v.type === gr ? (h = Jn(v.props.children, m.mode, S, v.key),
                    h.return = m,
                    m = h) : (S = Xi(v.type, v.key, v.props, null, m.mode, S),
                    S.ref = go(m, h, v),
                    S.return = m,
                    m = S)
                }
                return s(m);
            case mr:
                e: {
                    for (k = v.key; h !== null; ) {
                        if (h.key === k)
                            if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                                n(m, h.sibling),
                                h = o(h, v.children || []),
                                h.return = m,
                                m = h;
                                break e
                            } else {
                                n(m, h);
                                break
                            }
                        else
                            t(m, h);
                        h = h.sibling
                    }
                    h = Il(v, m.mode, S),
                    h.return = m,
                    m = h
                }
                return s(m);
            case un:
                return k = v._init,
                w(m, h, k(v._payload), S)
            }
            if (Eo(v))
                return x(m, h, v, S);
            if (co(v))
                return g(m, h, v, S);
            Ri(m, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        h !== null && h.tag === 6 ? (n(m, h.sibling),
        h = o(h, v),
        h.return = m,
        m = h) : (n(m, h),
        h = Dl(v, m.mode, S),
        h.return = m,
        m = h),
        s(m)) : n(m, h)
    }
    return w
}
var Yr = Bp(!0)
  , Vp = Bp(!1)
  , ps = Dn(null)
  , hs = null
  , kr = null
  , ku = null;
function Pu() {
    ku = kr = hs = null
}
function bu(e) {
    var t = ps.current;
    ie(ps),
    e._currentValue = t
}
function Sa(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Ar(e, t) {
    hs = e,
    ku = kr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ue = !0),
    e.firstContext = null)
}
function lt(e) {
    var t = e._currentValue;
    if (ku !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        kr === null) {
            if (hs === null)
                throw Error(O(308));
            kr = e,
            hs.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            kr = kr.next = e;
    return t
}
var Hn = null;
function Tu(e) {
    Hn === null ? Hn = [e] : Hn.push(e)
}
function Hp(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    Tu(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    Kt(e, r)
}
function Kt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var cn = !1;
function Nu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Wp(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Ht(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Pn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    q & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        Kt(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    Tu(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    Kt(e, n)
}
function Hi(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        pu(e, n)
    }
}
function id(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function ms(e, t, n, r) {
    var o = e.updateQueue;
    cn = !1;
    var i = o.firstBaseUpdate
      , s = o.lastBaseUpdate
      , l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        s === null ? i = u : s.next = u,
        s = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        l = c.lastBaseUpdate,
        l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u,
        c.lastBaseUpdate = a))
    }
    if (i !== null) {
        var d = o.baseState;
        s = 0,
        c = u = a = null,
        l = i;
        do {
            var p = l.lane
              , f = l.eventTime;
            if ((r & p) === p) {
                c !== null && (c = c.next = {
                    eventTime: f,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var x = e
                      , g = l;
                    switch (p = t,
                    f = n,
                    g.tag) {
                    case 1:
                        if (x = g.payload,
                        typeof x == "function") {
                            d = x.call(f, d, p);
                            break e
                        }
                        d = x;
                        break e;
                    case 3:
                        x.flags = x.flags & -65537 | 128;
                    case 0:
                        if (x = g.payload,
                        p = typeof x == "function" ? x.call(f, d, p) : x,
                        p == null)
                            break e;
                        d = ce({}, d, p);
                        break e;
                    case 2:
                        cn = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                p = o.effects,
                p === null ? o.effects = [l] : p.push(l))
            } else
                f = {
                    eventTime: f,
                    lane: p,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                c === null ? (u = c = f,
                a = d) : c = c.next = f,
                s |= p;
            if (l = l.next,
            l === null) {
                if (l = o.shared.pending,
                l === null)
                    break;
                p = l,
                l = p.next,
                p.next = null,
                o.lastBaseUpdate = p,
                o.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = d),
        o.baseState = a,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = c,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                s |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        rr |= s,
        e.lanes = s,
        e.memoizedState = d
    }
}
function sd(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(O(191, o));
                o.call(r)
            }
        }
}
var ai = {}
  , At = Dn(ai)
  , Qo = Dn(ai)
  , Ko = Dn(ai);
function Wn(e) {
    if (e === ai)
        throw Error(O(174));
    return e
}
function Ru(e, t) {
    switch (ne(Ko, t),
    ne(Qo, e),
    ne(At, ai),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ta(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = ta(t, e)
    }
    ie(At),
    ne(At, t)
}
function Xr() {
    ie(At),
    ie(Qo),
    ie(Ko)
}
function Qp(e) {
    Wn(Ko.current);
    var t = Wn(At.current)
      , n = ta(t, e.type);
    t !== n && (ne(Qo, e),
    ne(At, n))
}
function Ou(e) {
    Qo.current === e && (ie(At),
    ie(Qo))
}
var ae = Dn(0);
function gs(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Ol = [];
function _u() {
    for (var e = 0; e < Ol.length; e++)
        Ol[e]._workInProgressVersionPrimary = null;
    Ol.length = 0
}
var Wi = qt.ReactCurrentDispatcher
  , _l = qt.ReactCurrentBatchConfig
  , nr = 0
  , ue = null
  , ve = null
  , we = null
  , vs = !1
  , Oo = !1
  , Go = 0
  , jy = 0;
function be() {
    throw Error(O(321))
}
function ju(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Et(e[n], t[n]))
            return !1;
    return !0
}
function Au(e, t, n, r, o, i) {
    if (nr = i,
    ue = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Wi.current = e === null || e.memoizedState === null ? Dy : Iy,
    e = n(r, o),
    Oo) {
        i = 0;
        do {
            if (Oo = !1,
            Go = 0,
            25 <= i)
                throw Error(O(301));
            i += 1,
            we = ve = null,
            t.updateQueue = null,
            Wi.current = Fy,
            e = n(r, o)
        } while (Oo)
    }
    if (Wi.current = ys,
    t = ve !== null && ve.next !== null,
    nr = 0,
    we = ve = ue = null,
    vs = !1,
    t)
        throw Error(O(300));
    return e
}
function Lu() {
    var e = Go !== 0;
    return Go = 0,
    e
}
function bt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return we === null ? ue.memoizedState = we = e : we = we.next = e,
    we
}
function at() {
    if (ve === null) {
        var e = ue.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ve.next;
    var t = we === null ? ue.memoizedState : we.next;
    if (t !== null)
        we = t,
        ve = e;
    else {
        if (e === null)
            throw Error(O(310));
        ve = e,
        e = {
            memoizedState: ve.memoizedState,
            baseState: ve.baseState,
            baseQueue: ve.baseQueue,
            queue: ve.queue,
            next: null
        },
        we === null ? ue.memoizedState = we = e : we = we.next = e
    }
    return we
}
function Yo(e, t) {
    return typeof t == "function" ? t(e) : t
}
function jl(e) {
    var t = at()
      , n = t.queue;
    if (n === null)
        throw Error(O(311));
    n.lastRenderedReducer = e;
    var r = ve
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next,
            i.next = s
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var l = s = null
          , a = null
          , u = i;
        do {
            var c = u.lane;
            if ((nr & c) === c)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = d,
                s = r) : a = a.next = d,
                ue.lanes |= c,
                rr |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        a === null ? s = r : a.next = l,
        Et(r, t.memoizedState) || (Ue = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            ue.lanes |= i,
            rr |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Al(e) {
    var t = at()
      , n = t.queue;
    if (n === null)
        throw Error(O(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do
            i = e(i, s.action),
            s = s.next;
        while (s !== o);
        Et(i, t.memoizedState) || (Ue = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Kp() {}
function Gp(e, t) {
    var n = ue
      , r = at()
      , o = t()
      , i = !Et(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    Ue = !0),
    r = r.queue,
    Mu(qp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || we !== null && we.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Xo(9, Xp.bind(null, n, r, o, t), void 0, null),
        xe === null)
            throw Error(O(349));
        nr & 30 || Yp(n, t, o)
    }
    return o
}
function Yp(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ue.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ue.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Xp(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Zp(t) && Jp(e)
}
function qp(e, t, n) {
    return n(function() {
        Zp(t) && Jp(e)
    })
}
function Zp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Et(e, n)
    } catch {
        return !0
    }
}
function Jp(e) {
    var t = Kt(e, 1);
    t !== null && St(t, e, 1, -1)
}
function ld(e) {
    var t = bt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yo,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = My.bind(null, ue, e),
    [t.memoizedState, e]
}
function Xo(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ue.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ue.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function eh() {
    return at().memoizedState
}
function Qi(e, t, n, r) {
    var o = bt();
    ue.flags |= e,
    o.memoizedState = Xo(1 | t, n, void 0, r === void 0 ? null : r)
}
function zs(e, t, n, r) {
    var o = at();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ve !== null) {
        var s = ve.memoizedState;
        if (i = s.destroy,
        r !== null && ju(r, s.deps)) {
            o.memoizedState = Xo(t, n, i, r);
            return
        }
    }
    ue.flags |= e,
    o.memoizedState = Xo(1 | t, n, i, r)
}
function ad(e, t) {
    return Qi(8390656, 8, e, t)
}
function Mu(e, t) {
    return zs(2048, 8, e, t)
}
function th(e, t) {
    return zs(4, 2, e, t)
}
function nh(e, t) {
    return zs(4, 4, e, t)
}
function rh(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function oh(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    zs(4, 4, rh.bind(null, t, e), n)
}
function Du() {}
function ih(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ju(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function sh(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ju(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function lh(e, t, n) {
    return nr & 21 ? (Et(n, t) || (n = fp(),
    ue.lanes |= n,
    rr |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ue = !0),
    e.memoizedState = n)
}
function Ay(e, t) {
    var n = ee;
    ee = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = _l.transition;
    _l.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ee = n,
        _l.transition = r
    }
}
function ah() {
    return at().memoizedState
}
function Ly(e, t, n) {
    var r = Tn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    uh(e))
        ch(t, n);
    else if (n = Hp(e, t, n, r),
    n !== null) {
        var o = De();
        St(n, e, r, o),
        dh(n, t, r)
    }
}
function My(e, t, n) {
    var r = Tn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (uh(e))
        ch(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var s = t.lastRenderedState
                  , l = i(s, n);
                if (o.hasEagerState = !0,
                o.eagerState = l,
                Et(l, s)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o,
                    Tu(t)) : (o.next = a.next,
                    a.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Hp(e, t, o, r),
        n !== null && (o = De(),
        St(n, e, r, o),
        dh(n, t, r))
    }
}
function uh(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue
}
function ch(e, t) {
    Oo = vs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function dh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        pu(e, n)
    }
}
var ys = {
    readContext: lt,
    useCallback: be,
    useContext: be,
    useEffect: be,
    useImperativeHandle: be,
    useInsertionEffect: be,
    useLayoutEffect: be,
    useMemo: be,
    useReducer: be,
    useRef: be,
    useState: be,
    useDebugValue: be,
    useDeferredValue: be,
    useTransition: be,
    useMutableSource: be,
    useSyncExternalStore: be,
    useId: be,
    unstable_isNewReconciler: !1
}
  , Dy = {
    readContext: lt,
    useCallback: function(e, t) {
        return bt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: lt,
    useEffect: ad,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Qi(4194308, 4, rh.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Qi(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Qi(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = bt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = bt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Ly.bind(null, ue, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = bt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: ld,
    useDebugValue: Du,
    useDeferredValue: function(e) {
        return bt().memoizedState = e
    },
    useTransition: function() {
        var e = ld(!1)
          , t = e[0];
        return e = Ay.bind(null, e[1]),
        bt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ue
          , o = bt();
        if (le) {
            if (n === void 0)
                throw Error(O(407));
            n = n()
        } else {
            if (n = t(),
            xe === null)
                throw Error(O(349));
            nr & 30 || Yp(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        ad(qp.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        Xo(9, Xp.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = bt()
          , t = xe.identifierPrefix;
        if (le) {
            var n = Vt
              , r = Bt;
            n = (r & ~(1 << 32 - xt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Go++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = jy++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Iy = {
    readContext: lt,
    useCallback: ih,
    useContext: lt,
    useEffect: Mu,
    useImperativeHandle: oh,
    useInsertionEffect: th,
    useLayoutEffect: nh,
    useMemo: sh,
    useReducer: jl,
    useRef: eh,
    useState: function() {
        return jl(Yo)
    },
    useDebugValue: Du,
    useDeferredValue: function(e) {
        var t = at();
        return lh(t, ve.memoizedState, e)
    },
    useTransition: function() {
        var e = jl(Yo)[0]
          , t = at().memoizedState;
        return [e, t]
    },
    useMutableSource: Kp,
    useSyncExternalStore: Gp,
    useId: ah,
    unstable_isNewReconciler: !1
}
  , Fy = {
    readContext: lt,
    useCallback: ih,
    useContext: lt,
    useEffect: Mu,
    useImperativeHandle: oh,
    useInsertionEffect: th,
    useLayoutEffect: nh,
    useMemo: sh,
    useReducer: Al,
    useRef: eh,
    useState: function() {
        return Al(Yo)
    },
    useDebugValue: Du,
    useDeferredValue: function(e) {
        var t = at();
        return ve === null ? t.memoizedState = e : lh(t, ve.memoizedState, e)
    },
    useTransition: function() {
        var e = Al(Yo)[0]
          , t = at().memoizedState;
        return [e, t]
    },
    useMutableSource: Kp,
    useSyncExternalStore: Gp,
    useId: ah,
    unstable_isNewReconciler: !1
};
function ht(e, t) {
    if (e && e.defaultProps) {
        t = ce({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Ea(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : ce({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var $s = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? lr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = De()
          , o = Tn(e)
          , i = Ht(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = Pn(e, i, o),
        t !== null && (St(t, e, o, r),
        Hi(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = De()
          , o = Tn(e)
          , i = Ht(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = Pn(e, i, o),
        t !== null && (St(t, e, o, r),
        Hi(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = De()
          , r = Tn(e)
          , o = Ht(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = Pn(e, o, r),
        t !== null && (St(t, e, r, n),
        Hi(t, e, r))
    }
};
function ud(e, t, n, r, o, i, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Bo(n, r) || !Bo(o, i) : !0
}
function fh(e, t, n) {
    var r = !1
      , o = On
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = lt(i) : (o = Ve(t) ? er : Oe.current,
    r = t.contextTypes,
    i = (r = r != null) ? Kr(e, o) : On),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = $s,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function cd(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && $s.enqueueReplaceState(t, t.state, null)
}
function Ca(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    Nu(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = lt(i) : (i = Ve(t) ? er : Oe.current,
    o.context = Kr(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Ea(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && $s.enqueueReplaceState(o, o.state, null),
    ms(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function qr(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += fv(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Ll(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function ka(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var zy = typeof WeakMap == "function" ? WeakMap : Map;
function ph(e, t, n) {
    n = Ht(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        xs || (xs = !0,
        La = r),
        ka(e, t)
    }
    ,
    n
}
function hh(e, t, n) {
    n = Ht(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            ka(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        ka(e, t),
        typeof r != "function" && (bn === null ? bn = new Set([this]) : bn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function dd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new zy;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = Jy.bind(null, e, t, n),
    t.then(e, e))
}
function fd(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function pd(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ht(-1, 1),
    t.tag = 2,
    Pn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var $y = qt.ReactCurrentOwner
  , Ue = !1;
function Le(e, t, n, r) {
    t.child = e === null ? Vp(t, null, n, r) : Yr(t, e.child, n, r)
}
function hd(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Ar(t, o),
    r = Au(e, t, n, r, i, o),
    n = Lu(),
    e !== null && !Ue ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Gt(e, t, o)) : (le && n && Su(t),
    t.flags |= 1,
    Le(e, t, r, o),
    t.child)
}
function md(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Hu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        mh(e, t, i, r, o)) : (e = Xi(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Bo,
        n(s, r) && e.ref === t.ref)
            return Gt(e, t, o)
    }
    return t.flags |= 1,
    e = Nn(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function mh(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Bo(i, r) && e.ref === t.ref)
            if (Ue = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Ue = !0);
            else
                return t.lanes = e.lanes,
                Gt(e, t, o)
    }
    return Pa(e, t, n, r, o)
}
function gh(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ne(br, Qe),
            Qe |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ne(br, Qe),
                Qe |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            ne(br, Qe),
            Qe |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        ne(br, Qe),
        Qe |= r;
    return Le(e, t, o, n),
    t.child
}
function vh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Pa(e, t, n, r, o) {
    var i = Ve(n) ? er : Oe.current;
    return i = Kr(t, i),
    Ar(t, o),
    n = Au(e, t, n, r, i, o),
    r = Lu(),
    e !== null && !Ue ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Gt(e, t, o)) : (le && r && Su(t),
    t.flags |= 1,
    Le(e, t, n, o),
    t.child)
}
function gd(e, t, n, r, o) {
    if (Ve(n)) {
        var i = !0;
        cs(t)
    } else
        i = !1;
    if (Ar(t, o),
    t.stateNode === null)
        Ki(e, t),
        fh(t, n, r),
        Ca(t, n, r, o),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , l = t.memoizedProps;
        s.props = l;
        var a = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = lt(u) : (u = Ve(n) ? er : Oe.current,
        u = Kr(t, u));
        var c = n.getDerivedStateFromProps
          , d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && cd(t, s, r, u),
        cn = !1;
        var p = t.memoizedState;
        s.state = p,
        ms(t, r, s, o),
        a = t.memoizedState,
        l !== r || p !== a || Be.current || cn ? (typeof c == "function" && (Ea(t, n, c, r),
        a = t.memoizedState),
        (l = cn || ud(t, n, l, r, p, a, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        s.props = r,
        s.state = a,
        s.context = u,
        r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        Wp(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : ht(t.type, l),
        s.props = u,
        d = t.pendingProps,
        p = s.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = lt(a) : (a = Ve(n) ? er : Oe.current,
        a = Kr(t, a));
        var f = n.getDerivedStateFromProps;
        (c = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== d || p !== a) && cd(t, s, r, a),
        cn = !1,
        p = t.memoizedState,
        s.state = p,
        ms(t, r, s, o);
        var x = t.memoizedState;
        l !== d || p !== x || Be.current || cn ? (typeof f == "function" && (Ea(t, n, f, r),
        x = t.memoizedState),
        (u = cn || ud(t, n, u, r, p, x, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, a),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, a)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = x),
        s.props = r,
        s.state = x,
        s.context = a,
        r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return ba(e, t, n, r, i, o)
}
function ba(e, t, n, r, o, i) {
    vh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return o && td(t, n, !1),
        Gt(e, t, i);
    r = t.stateNode,
    $y.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = Yr(t, e.child, null, i),
    t.child = Yr(t, null, l, i)) : Le(e, t, l, i),
    t.memoizedState = r.state,
    o && td(t, n, !0),
    t.child
}
function yh(e) {
    var t = e.stateNode;
    t.pendingContext ? ed(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ed(e, t.context, !1),
    Ru(e, t.containerInfo)
}
function vd(e, t, n, r, o) {
    return Gr(),
    Cu(o),
    t.flags |= 256,
    Le(e, t, n, r),
    t.child
}
var Ta = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Na(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function wh(e, t, n) {
    var r = t.pendingProps, o = ae.current, i = !1, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    ne(ae, o & 1),
    e === null)
        return xa(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = s) : i = Vs(s, r, 0, null),
        e = Jn(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Na(n),
        t.memoizedState = Ta,
        e) : Iu(t, s));
    if (o = e.memoizedState,
    o !== null && (l = o.dehydrated,
    l !== null))
        return Uy(e, t, s, r, l, o, n);
    if (i) {
        i = r.fallback,
        s = t.mode,
        o = e.child,
        l = o.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = Nn(o, a),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        l !== null ? i = Nn(l, i) : (i = Jn(i, s, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        s = e.child.memoizedState,
        s = s === null ? Na(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        i.memoizedState = s,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = Ta,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = Nn(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Iu(e, t) {
    return t = Vs({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Oi(e, t, n, r) {
    return r !== null && Cu(r),
    Yr(t, e.child, null, n),
    e = Iu(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Uy(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Ll(Error(O(422))),
        Oi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = Vs({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = Jn(i, o, s, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && Yr(t, e.child, null, s),
        t.child.memoizedState = Na(s),
        t.memoizedState = Ta,
        i);
    if (!(t.mode & 1))
        return Oi(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        i = Error(O(419)),
        r = Ll(i, r, void 0),
        Oi(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0,
    Ue || l) {
        if (r = xe,
        r !== null) {
            switch (s & -s) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            Kt(e, o),
            St(r, e, o, -1))
        }
        return Vu(),
        r = Ll(Error(O(421))),
        Oi(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = e0.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    Ge = kn(o.nextSibling),
    Ye = t,
    le = !0,
    wt = null,
    e !== null && (rt[ot++] = Bt,
    rt[ot++] = Vt,
    rt[ot++] = tr,
    Bt = e.id,
    Vt = e.overflow,
    tr = t),
    t = Iu(t, r.children),
    t.flags |= 4096,
    t)
}
function yd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Sa(e.return, t, n)
}
function Ml(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function xh(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if (Le(e, t, r.children, n),
    r = ae.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && yd(e, n, t);
                else if (e.tag === 19)
                    yd(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ne(ae, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && gs(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            Ml(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && gs(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            Ml(t, !0, n, null, i);
            break;
        case "together":
            Ml(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ki(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Gt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    rr |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(O(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Nn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Nn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function By(e, t, n) {
    switch (t.tag) {
    case 3:
        yh(t),
        Gr();
        break;
    case 5:
        Qp(t);
        break;
    case 1:
        Ve(t.type) && cs(t);
        break;
    case 4:
        Ru(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        ne(ps, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ne(ae, ae.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? wh(e, t, n) : (ne(ae, ae.current & 1),
            e = Gt(e, t, n),
            e !== null ? e.sibling : null);
        ne(ae, ae.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return xh(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        ne(ae, ae.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        gh(e, t, n)
    }
    return Gt(e, t, n)
}
var Sh, Ra, Eh, Ch;
Sh = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Ra = function() {}
;
Eh = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        Wn(At.current);
        var i = null;
        switch (n) {
        case "input":
            o = ql(e, o),
            r = ql(e, r),
            i = [];
            break;
        case "select":
            o = ce({}, o, {
                value: void 0
            }),
            r = ce({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = ea(e, o),
            r = ea(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = as)
        }
        na(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Mo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in a)
                            a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}),
                            n[s] = a[s])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Mo.hasOwnProperty(u) ? (a != null && u === "onScroll" && oe("scroll", e),
                    i || l === a || (i = [])) : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Ch = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function vo(e, t) {
    if (!le)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Te(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Vy(e, t, n) {
    var r = t.pendingProps;
    switch (Eu(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Te(t),
        null;
    case 1:
        return Ve(t.type) && us(),
        Te(t),
        null;
    case 3:
        return r = t.stateNode,
        Xr(),
        ie(Be),
        ie(Oe),
        _u(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Ni(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        wt !== null && (Ia(wt),
        wt = null))),
        Ra(e, t),
        Te(t),
        null;
    case 5:
        Ou(t);
        var o = Wn(Ko.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Eh(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(O(166));
                return Te(t),
                null
            }
            if (e = Wn(At.current),
            Ni(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[Ot] = t,
                r[Wo] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    oe("cancel", r),
                    oe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    oe("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < ko.length; o++)
                        oe(ko[o], r);
                    break;
                case "source":
                    oe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    oe("error", r),
                    oe("load", r);
                    break;
                case "details":
                    oe("toggle", r);
                    break;
                case "input":
                    Tc(r, i),
                    oe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    oe("invalid", r);
                    break;
                case "textarea":
                    Rc(r, i),
                    oe("invalid", r)
                }
                na(n, i),
                o = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var l = i[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Ti(r.textContent, l, e),
                        o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Ti(r.textContent, l, e),
                        o = ["children", "" + l]) : Mo.hasOwnProperty(s) && l != null && s === "onScroll" && oe("scroll", r)
                    }
                switch (n) {
                case "input":
                    wi(r),
                    Nc(r, i, !0);
                    break;
                case "textarea":
                    wi(r),
                    Oc(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = as)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = qf(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[Ot] = t,
                e[Wo] = r,
                Sh(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = ra(n, r),
                    n) {
                    case "dialog":
                        oe("cancel", e),
                        oe("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        oe("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < ko.length; o++)
                            oe(ko[o], e);
                        o = r;
                        break;
                    case "source":
                        oe("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        oe("error", e),
                        oe("load", e),
                        o = r;
                        break;
                    case "details":
                        oe("toggle", e),
                        o = r;
                        break;
                    case "input":
                        Tc(e, r),
                        o = ql(e, r),
                        oe("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = ce({}, r, {
                            value: void 0
                        }),
                        oe("invalid", e);
                        break;
                    case "textarea":
                        Rc(e, r),
                        o = ea(e, r),
                        oe("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    na(n, o),
                    l = o;
                    for (i in l)
                        if (l.hasOwnProperty(i)) {
                            var a = l[i];
                            i === "style" ? ep(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Zf(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Do(e, a) : typeof a == "number" && Do(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Mo.hasOwnProperty(i) ? a != null && i === "onScroll" && oe("scroll", e) : a != null && lu(e, i, a, s))
                        }
                    switch (n) {
                    case "input":
                        wi(e),
                        Nc(e, r, !1);
                        break;
                    case "textarea":
                        wi(e),
                        Oc(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Rn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? Rr(e, !!r.multiple, i, !1) : r.defaultValue != null && Rr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = as)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Te(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Ch(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(O(166));
            if (n = Wn(Ko.current),
            Wn(At.current),
            Ni(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Ot] = t,
                (i = r.nodeValue !== n) && (e = Ye,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Ti(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Ti(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Ot] = t,
                t.stateNode = r
        }
        return Te(t),
        null;
    case 13:
        if (ie(ae),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (le && Ge !== null && t.mode & 1 && !(t.flags & 128))
                Up(),
                Gr(),
                t.flags |= 98560,
                i = !1;
            else if (i = Ni(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(O(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(O(317));
                    i[Ot] = t
                } else
                    Gr(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Te(t),
                i = !1
            } else
                wt !== null && (Ia(wt),
                wt = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ae.current & 1 ? ye === 0 && (ye = 3) : Vu())),
        t.updateQueue !== null && (t.flags |= 4),
        Te(t),
        null);
    case 4:
        return Xr(),
        Ra(e, t),
        e === null && Vo(t.stateNode.containerInfo),
        Te(t),
        null;
    case 10:
        return bu(t.type._context),
        Te(t),
        null;
    case 17:
        return Ve(t.type) && us(),
        Te(t),
        null;
    case 19:
        if (ie(ae),
        i = t.memoizedState,
        i === null)
            return Te(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = i.rendering,
        s === null)
            if (r)
                vo(i, !1);
            else {
                if (ye !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = gs(e),
                        s !== null) {
                            for (t.flags |= 128,
                            vo(i, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                s = i.alternate,
                                s === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = s.childLanes,
                                i.lanes = s.lanes,
                                i.child = s.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = s.memoizedProps,
                                i.memoizedState = s.memoizedState,
                                i.updateQueue = s.updateQueue,
                                i.type = s.type,
                                e = s.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ne(ae, ae.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && pe() > Zr && (t.flags |= 128,
                r = !0,
                vo(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = gs(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    vo(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !s.alternate && !le)
                        return Te(t),
                        null
                } else
                    2 * pe() - i.renderingStartTime > Zr && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    vo(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = i.last,
            n !== null ? n.sibling = s : t.child = s,
            i.last = s)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = pe(),
        t.sibling = null,
        n = ae.current,
        ne(ae, r ? n & 1 | 2 : n & 1),
        t) : (Te(t),
        null);
    case 22:
    case 23:
        return Bu(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Qe & 1073741824 && (Te(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(O(156, t.tag))
}
function Hy(e, t) {
    switch (Eu(t),
    t.tag) {
    case 1:
        return Ve(t.type) && us(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Xr(),
        ie(Be),
        ie(Oe),
        _u(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Ou(t),
        null;
    case 13:
        if (ie(ae),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(O(340));
            Gr()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ie(ae),
        null;
    case 4:
        return Xr(),
        null;
    case 10:
        return bu(t.type._context),
        null;
    case 22:
    case 23:
        return Bu(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var _i = !1
  , Re = !1
  , Wy = typeof WeakSet == "function" ? WeakSet : Set
  , I = null;
function Pr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                fe(e, t, r)
            }
        else
            n.current = null
}
function Oa(e, t, n) {
    try {
        n()
    } catch (r) {
        fe(e, t, r)
    }
}
var wd = !1;
function Qy(e, t) {
    if (pa = is,
    e = Np(),
    xu(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , c = 0
                      , d = e
                      , p = null;
                    t: for (; ; ) {
                        for (var f; d !== n || o !== 0 && d.nodeType !== 3 || (l = s + o),
                        d !== i || r !== 0 && d.nodeType !== 3 || (a = s + r),
                        d.nodeType === 3 && (s += d.nodeValue.length),
                        (f = d.firstChild) !== null; )
                            p = d,
                            d = f;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (p === n && ++u === o && (l = s),
                            p === i && ++c === r && (a = s),
                            (f = d.nextSibling) !== null)
                                break;
                            d = p,
                            p = d.parentNode
                        }
                        d = f
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (ha = {
        focusedElem: e,
        selectionRange: n
    },
    is = !1,
    I = t; I !== null; )
        if (t = I,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            I = e;
        else
            for (; I !== null; ) {
                t = I;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var g = x.memoizedProps
                                  , w = x.memoizedState
                                  , m = t.stateNode
                                  , h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : ht(t.type, g), w);
                                m.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(O(163))
                        }
                } catch (S) {
                    fe(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    I = e;
                    break
                }
                I = t.return
            }
    return x = wd,
    wd = !1,
    x
}
function _o(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && Oa(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function Us(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function _a(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function kh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    kh(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Ot],
    delete t[Wo],
    delete t[va],
    delete t[Ny],
    delete t[Ry])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Ph(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function xd(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Ph(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function ja(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = as));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ja(e, t, n),
        e = e.sibling; e !== null; )
            ja(e, t, n),
            e = e.sibling
}
function Aa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Aa(e, t, n),
        e = e.sibling; e !== null; )
            Aa(e, t, n),
            e = e.sibling
}
var Se = null
  , yt = !1;
function on(e, t, n) {
    for (n = n.child; n !== null; )
        bh(e, t, n),
        n = n.sibling
}
function bh(e, t, n) {
    if (jt && typeof jt.onCommitFiberUnmount == "function")
        try {
            jt.onCommitFiberUnmount(As, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Re || Pr(n, t);
    case 6:
        var r = Se
          , o = yt;
        Se = null,
        on(e, t, n),
        Se = r,
        yt = o,
        Se !== null && (yt ? (e = Se,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Se.removeChild(n.stateNode));
        break;
    case 18:
        Se !== null && (yt ? (e = Se,
        n = n.stateNode,
        e.nodeType === 8 ? Nl(e.parentNode, n) : e.nodeType === 1 && Nl(e, n),
        $o(e)) : Nl(Se, n.stateNode));
        break;
    case 4:
        r = Se,
        o = yt,
        Se = n.stateNode.containerInfo,
        yt = !0,
        on(e, t, n),
        Se = r,
        yt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Re && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , s = i.destroy;
                i = i.tag,
                s !== void 0 && (i & 2 || i & 4) && Oa(n, t, s),
                o = o.next
            } while (o !== r)
        }
        on(e, t, n);
        break;
    case 1:
        if (!Re && (Pr(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                fe(n, t, l)
            }
        on(e, t, n);
        break;
    case 21:
        on(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Re = (r = Re) || n.memoizedState !== null,
        on(e, t, n),
        Re = r) : on(e, t, n);
        break;
    default:
        on(e, t, n)
    }
}
function Sd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Wy),
        t.forEach(function(r) {
            var o = t0.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function ft(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , s = t
                  , l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        Se = l.stateNode,
                        yt = !1;
                        break e;
                    case 3:
                        Se = l.stateNode.containerInfo,
                        yt = !0;
                        break e;
                    case 4:
                        Se = l.stateNode.containerInfo,
                        yt = !0;
                        break e
                    }
                    l = l.return
                }
                if (Se === null)
                    throw Error(O(160));
                bh(i, s, o),
                Se = null,
                yt = !1;
                var a = o.alternate;
                a !== null && (a.return = null),
                o.return = null
            } catch (u) {
                fe(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Th(t, e),
            t = t.sibling
}
function Th(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (ft(t, e),
        Pt(e),
        r & 4) {
            try {
                _o(3, e, e.return),
                Us(3, e)
            } catch (g) {
                fe(e, e.return, g)
            }
            try {
                _o(5, e, e.return)
            } catch (g) {
                fe(e, e.return, g)
            }
        }
        break;
    case 1:
        ft(t, e),
        Pt(e),
        r & 512 && n !== null && Pr(n, n.return);
        break;
    case 5:
        if (ft(t, e),
        Pt(e),
        r & 512 && n !== null && Pr(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Do(o, "")
            } catch (g) {
                fe(e, e.return, g)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , s = n !== null ? n.memoizedProps : i
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && i.type === "radio" && i.name != null && Yf(o, i),
                    ra(l, s);
                    var u = ra(l, i);
                    for (s = 0; s < a.length; s += 2) {
                        var c = a[s]
                          , d = a[s + 1];
                        c === "style" ? ep(o, d) : c === "dangerouslySetInnerHTML" ? Zf(o, d) : c === "children" ? Do(o, d) : lu(o, c, d, u)
                    }
                    switch (l) {
                    case "input":
                        Zl(o, i);
                        break;
                    case "textarea":
                        Xf(o, i);
                        break;
                    case "select":
                        var p = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var f = i.value;
                        f != null ? Rr(o, !!i.multiple, f, !1) : p !== !!i.multiple && (i.defaultValue != null ? Rr(o, !!i.multiple, i.defaultValue, !0) : Rr(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Wo] = i
                } catch (g) {
                    fe(e, e.return, g)
                }
        }
        break;
    case 6:
        if (ft(t, e),
        Pt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(O(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (g) {
                fe(e, e.return, g)
            }
        }
        break;
    case 3:
        if (ft(t, e),
        Pt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                $o(t.containerInfo)
            } catch (g) {
                fe(e, e.return, g)
            }
        break;
    case 4:
        ft(t, e),
        Pt(e);
        break;
    case 13:
        ft(t, e),
        Pt(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || ($u = pe())),
        r & 4 && Sd(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Re = (u = Re) || c,
        ft(t, e),
        Re = u) : ft(t, e),
        Pt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (I = e,
                c = e.child; c !== null; ) {
                    for (d = I = c; I !== null; ) {
                        switch (p = I,
                        f = p.child,
                        p.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            _o(4, p, p.return);
                            break;
                        case 1:
                            Pr(p, p.return);
                            var x = p.stateNode;
                            if (typeof x.componentWillUnmount == "function") {
                                r = p,
                                n = p.return;
                                try {
                                    t = r,
                                    x.props = t.memoizedProps,
                                    x.state = t.memoizedState,
                                    x.componentWillUnmount()
                                } catch (g) {
                                    fe(r, n, g)
                                }
                            }
                            break;
                        case 5:
                            Pr(p, p.return);
                            break;
                        case 22:
                            if (p.memoizedState !== null) {
                                Cd(d);
                                continue
                            }
                        }
                        f !== null ? (f.return = p,
                        I = f) : Cd(d)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (c === null) {
                        c = d;
                        try {
                            o = d.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = d.stateNode,
                            a = d.memoizedProps.style,
                            s = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = Jf("display", s))
                        } catch (g) {
                            fe(e, e.return, g)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (g) {
                            fe(e, e.return, g)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    c === d && (c = null),
                    d = d.return
                }
                c === d && (c = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        ft(t, e),
        Pt(e),
        r & 4 && Sd(e);
        break;
    case 21:
        break;
    default:
        ft(t, e),
        Pt(e)
    }
}
function Pt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Ph(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(O(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Do(o, ""),
                r.flags &= -33);
                var i = xd(e);
                Aa(e, i, o);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , l = xd(e);
                ja(e, l, s);
                break;
            default:
                throw Error(O(161))
            }
        } catch (a) {
            fe(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Ky(e, t, n) {
    I = e,
    Nh(e)
}
function Nh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; I !== null; ) {
        var o = I
          , i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || _i;
            if (!s) {
                var l = o.alternate
                  , a = l !== null && l.memoizedState !== null || Re;
                l = _i;
                var u = Re;
                if (_i = s,
                (Re = a) && !u)
                    for (I = o; I !== null; )
                        s = I,
                        a = s.child,
                        s.tag === 22 && s.memoizedState !== null ? kd(o) : a !== null ? (a.return = s,
                        I = a) : kd(o);
                for (; i !== null; )
                    I = i,
                    Nh(i),
                    i = i.sibling;
                I = o,
                _i = l,
                Re = u
            }
            Ed(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            I = i) : Ed(e)
    }
}
function Ed(e) {
    for (; I !== null; ) {
        var t = I;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Re || Us(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Re)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : ht(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && sd(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            sd(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && $o(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(O(163))
                    }
                Re || t.flags & 512 && _a(t)
            } catch (p) {
                fe(t, t.return, p)
            }
        }
        if (t === e) {
            I = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            I = n;
            break
        }
        I = t.return
    }
}
function Cd(e) {
    for (; I !== null; ) {
        var t = I;
        if (t === e) {
            I = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            I = n;
            break
        }
        I = t.return
    }
}
function kd(e) {
    for (; I !== null; ) {
        var t = I;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Us(4, t)
                } catch (a) {
                    fe(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        fe(t, o, a)
                    }
                }
                var i = t.return;
                try {
                    _a(t)
                } catch (a) {
                    fe(t, i, a)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    _a(t)
                } catch (a) {
                    fe(t, s, a)
                }
            }
        } catch (a) {
            fe(t, t.return, a)
        }
        if (t === e) {
            I = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            I = l;
            break
        }
        I = t.return
    }
}
var Gy = Math.ceil
  , ws = qt.ReactCurrentDispatcher
  , Fu = qt.ReactCurrentOwner
  , st = qt.ReactCurrentBatchConfig
  , q = 0
  , xe = null
  , ge = null
  , Ee = 0
  , Qe = 0
  , br = Dn(0)
  , ye = 0
  , qo = null
  , rr = 0
  , Bs = 0
  , zu = 0
  , jo = null
  , $e = null
  , $u = 0
  , Zr = 1 / 0
  , zt = null
  , xs = !1
  , La = null
  , bn = null
  , ji = !1
  , wn = null
  , Ss = 0
  , Ao = 0
  , Ma = null
  , Gi = -1
  , Yi = 0;
function De() {
    return q & 6 ? pe() : Gi !== -1 ? Gi : Gi = pe()
}
function Tn(e) {
    return e.mode & 1 ? q & 2 && Ee !== 0 ? Ee & -Ee : _y.transition !== null ? (Yi === 0 && (Yi = fp()),
    Yi) : (e = ee,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : wp(e.type)),
    e) : 1
}
function St(e, t, n, r) {
    if (50 < Ao)
        throw Ao = 0,
        Ma = null,
        Error(O(185));
    ii(e, n, r),
    (!(q & 2) || e !== xe) && (e === xe && (!(q & 2) && (Bs |= n),
    ye === 4 && fn(e, Ee)),
    He(e, r),
    n === 1 && q === 0 && !(t.mode & 1) && (Zr = pe() + 500,
    Fs && In()))
}
function He(e, t) {
    var n = e.callbackNode;
    _v(e, t);
    var r = os(e, e === xe ? Ee : 0);
    if (r === 0)
        n !== null && Ac(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Ac(n),
        t === 1)
            e.tag === 0 ? Oy(Pd.bind(null, e)) : Fp(Pd.bind(null, e)),
            by(function() {
                !(q & 6) && In()
            }),
            n = null;
        else {
            switch (pp(r)) {
            case 1:
                n = fu;
                break;
            case 4:
                n = cp;
                break;
            case 16:
                n = rs;
                break;
            case 536870912:
                n = dp;
                break;
            default:
                n = rs
            }
            n = Dh(n, Rh.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Rh(e, t) {
    if (Gi = -1,
    Yi = 0,
    q & 6)
        throw Error(O(327));
    var n = e.callbackNode;
    if (Lr() && e.callbackNode !== n)
        return null;
    var r = os(e, e === xe ? Ee : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Es(e, r);
    else {
        t = r;
        var o = q;
        q |= 2;
        var i = _h();
        (xe !== e || Ee !== t) && (zt = null,
        Zr = pe() + 500,
        Zn(e, t));
        do
            try {
                qy();
                break
            } catch (l) {
                Oh(e, l)
            }
        while (!0);
        Pu(),
        ws.current = i,
        q = o,
        ge !== null ? t = 0 : (xe = null,
        Ee = 0,
        t = ye)
    }
    if (t !== 0) {
        if (t === 2 && (o = aa(e),
        o !== 0 && (r = o,
        t = Da(e, o))),
        t === 1)
            throw n = qo,
            Zn(e, 0),
            fn(e, r),
            He(e, pe()),
            n;
        if (t === 6)
            fn(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !Yy(o) && (t = Es(e, r),
            t === 2 && (i = aa(e),
            i !== 0 && (r = i,
            t = Da(e, i))),
            t === 1))
                throw n = qo,
                Zn(e, 0),
                fn(e, r),
                He(e, pe()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(O(345));
            case 2:
                Bn(e, $e, zt);
                break;
            case 3:
                if (fn(e, r),
                (r & 130023424) === r && (t = $u + 500 - pe(),
                10 < t)) {
                    if (os(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        De(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = ga(Bn.bind(null, e, $e, zt), t);
                    break
                }
                Bn(e, $e, zt);
                break;
            case 4:
                if (fn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var s = 31 - xt(r);
                    i = 1 << s,
                    s = t[s],
                    s > o && (o = s),
                    r &= ~i
                }
                if (r = o,
                r = pe() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Gy(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = ga(Bn.bind(null, e, $e, zt), r);
                    break
                }
                Bn(e, $e, zt);
                break;
            case 5:
                Bn(e, $e, zt);
                break;
            default:
                throw Error(O(329))
            }
        }
    }
    return He(e, pe()),
    e.callbackNode === n ? Rh.bind(null, e) : null
}
function Da(e, t) {
    var n = jo;
    return e.current.memoizedState.isDehydrated && (Zn(e, t).flags |= 256),
    e = Es(e, t),
    e !== 2 && (t = $e,
    $e = n,
    t !== null && Ia(t)),
    e
}
function Ia(e) {
    $e === null ? $e = e : $e.push.apply($e, e)
}
function Yy(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Et(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function fn(e, t) {
    for (t &= ~zu,
    t &= ~Bs,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - xt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Pd(e) {
    if (q & 6)
        throw Error(O(327));
    Lr();
    var t = os(e, 0);
    if (!(t & 1))
        return He(e, pe()),
        null;
    var n = Es(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = aa(e);
        r !== 0 && (t = r,
        n = Da(e, r))
    }
    if (n === 1)
        throw n = qo,
        Zn(e, 0),
        fn(e, t),
        He(e, pe()),
        n;
    if (n === 6)
        throw Error(O(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Bn(e, $e, zt),
    He(e, pe()),
    null
}
function Uu(e, t) {
    var n = q;
    q |= 1;
    try {
        return e(t)
    } finally {
        q = n,
        q === 0 && (Zr = pe() + 500,
        Fs && In())
    }
}
function or(e) {
    wn !== null && wn.tag === 0 && !(q & 6) && Lr();
    var t = q;
    q |= 1;
    var n = st.transition
      , r = ee;
    try {
        if (st.transition = null,
        ee = 1,
        e)
            return e()
    } finally {
        ee = r,
        st.transition = n,
        q = t,
        !(q & 6) && In()
    }
}
function Bu() {
    Qe = br.current,
    ie(br)
}
function Zn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Py(n)),
    ge !== null)
        for (n = ge.return; n !== null; ) {
            var r = n;
            switch (Eu(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && us();
                break;
            case 3:
                Xr(),
                ie(Be),
                ie(Oe),
                _u();
                break;
            case 5:
                Ou(r);
                break;
            case 4:
                Xr();
                break;
            case 13:
                ie(ae);
                break;
            case 19:
                ie(ae);
                break;
            case 10:
                bu(r.type._context);
                break;
            case 22:
            case 23:
                Bu()
            }
            n = n.return
        }
    if (xe = e,
    ge = e = Nn(e.current, null),
    Ee = Qe = t,
    ye = 0,
    qo = null,
    zu = Bs = rr = 0,
    $e = jo = null,
    Hn !== null) {
        for (t = 0; t < Hn.length; t++)
            if (n = Hn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o,
                    r.next = s
                }
                n.pending = r
            }
        Hn = null
    }
    return e
}
function Oh(e, t) {
    do {
        var n = ge;
        try {
            if (Pu(),
            Wi.current = ys,
            vs) {
                for (var r = ue.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                vs = !1
            }
            if (nr = 0,
            we = ve = ue = null,
            Oo = !1,
            Go = 0,
            Fu.current = null,
            n === null || n.return === null) {
                ye = 1,
                qo = t,
                ge = null;
                break
            }
            e: {
                var i = e
                  , s = n.return
                  , l = n
                  , a = t;
                if (t = Ee,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , c = l
                      , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var p = c.alternate;
                        p ? (c.updateQueue = p.updateQueue,
                        c.memoizedState = p.memoizedState,
                        c.lanes = p.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var f = fd(s);
                    if (f !== null) {
                        f.flags &= -257,
                        pd(f, s, l, i, t),
                        f.mode & 1 && dd(i, u, t),
                        t = f,
                        a = u;
                        var x = t.updateQueue;
                        if (x === null) {
                            var g = new Set;
                            g.add(a),
                            t.updateQueue = g
                        } else
                            x.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            dd(i, u, t),
                            Vu();
                            break e
                        }
                        a = Error(O(426))
                    }
                } else if (le && l.mode & 1) {
                    var w = fd(s);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        pd(w, s, l, i, t),
                        Cu(qr(a, l));
                        break e
                    }
                }
                i = a = qr(a, l),
                ye !== 4 && (ye = 2),
                jo === null ? jo = [i] : jo.push(i),
                i = s;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var m = ph(i, a, t);
                        id(i, m);
                        break e;
                    case 1:
                        l = a;
                        var h = i.type
                          , v = i.stateNode;
                        if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (bn === null || !bn.has(v)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var S = hh(i, l, t);
                            id(i, S);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            Ah(n)
        } catch (C) {
            t = C,
            ge === n && n !== null && (ge = n = n.return);
            continue
        }
        break
    } while (!0)
}
function _h() {
    var e = ws.current;
    return ws.current = ys,
    e === null ? ys : e
}
function Vu() {
    (ye === 0 || ye === 3 || ye === 2) && (ye = 4),
    xe === null || !(rr & 268435455) && !(Bs & 268435455) || fn(xe, Ee)
}
function Es(e, t) {
    var n = q;
    q |= 2;
    var r = _h();
    (xe !== e || Ee !== t) && (zt = null,
    Zn(e, t));
    do
        try {
            Xy();
            break
        } catch (o) {
            Oh(e, o)
        }
    while (!0);
    if (Pu(),
    q = n,
    ws.current = r,
    ge !== null)
        throw Error(O(261));
    return xe = null,
    Ee = 0,
    ye
}
function Xy() {
    for (; ge !== null; )
        jh(ge)
}
function qy() {
    for (; ge !== null && !Ev(); )
        jh(ge)
}
function jh(e) {
    var t = Mh(e.alternate, e, Qe);
    e.memoizedProps = e.pendingProps,
    t === null ? Ah(e) : ge = t,
    Fu.current = null
}
function Ah(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Hy(n, t),
            n !== null) {
                n.flags &= 32767,
                ge = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ye = 6,
                ge = null;
                return
            }
        } else if (n = Vy(n, t, Qe),
        n !== null) {
            ge = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ge = t;
            return
        }
        ge = t = e
    } while (t !== null);
    ye === 0 && (ye = 5)
}
function Bn(e, t, n) {
    var r = ee
      , o = st.transition;
    try {
        st.transition = null,
        ee = 1,
        Zy(e, t, n, r)
    } finally {
        st.transition = o,
        ee = r
    }
    return null
}
function Zy(e, t, n, r) {
    do
        Lr();
    while (wn !== null);
    if (q & 6)
        throw Error(O(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(O(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (jv(e, i),
    e === xe && (ge = xe = null,
    Ee = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ji || (ji = !0,
    Dh(rs, function() {
        return Lr(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = st.transition,
        st.transition = null;
        var s = ee;
        ee = 1;
        var l = q;
        q |= 4,
        Fu.current = null,
        Qy(e, n),
        Th(n, e),
        yy(ha),
        is = !!pa,
        ha = pa = null,
        e.current = n,
        Ky(n),
        Cv(),
        q = l,
        ee = s,
        st.transition = i
    } else
        e.current = n;
    if (ji && (ji = !1,
    wn = e,
    Ss = o),
    i = e.pendingLanes,
    i === 0 && (bn = null),
    bv(n.stateNode),
    He(e, pe()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (xs)
        throw xs = !1,
        e = La,
        La = null,
        e;
    return Ss & 1 && e.tag !== 0 && Lr(),
    i = e.pendingLanes,
    i & 1 ? e === Ma ? Ao++ : (Ao = 0,
    Ma = e) : Ao = 0,
    In(),
    null
}
function Lr() {
    if (wn !== null) {
        var e = pp(Ss)
          , t = st.transition
          , n = ee;
        try {
            if (st.transition = null,
            ee = 16 > e ? 16 : e,
            wn === null)
                var r = !1;
            else {
                if (e = wn,
                wn = null,
                Ss = 0,
                q & 6)
                    throw Error(O(331));
                var o = q;
                for (q |= 4,
                I = e.current; I !== null; ) {
                    var i = I
                      , s = i.child;
                    if (I.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (I = u; I !== null; ) {
                                    var c = I;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        _o(8, c, i)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        I = d;
                                    else
                                        for (; I !== null; ) {
                                            c = I;
                                            var p = c.sibling
                                              , f = c.return;
                                            if (kh(c),
                                            c === u) {
                                                I = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = f,
                                                I = p;
                                                break
                                            }
                                            I = f
                                        }
                                }
                            }
                            var x = i.alternate;
                            if (x !== null) {
                                var g = x.child;
                                if (g !== null) {
                                    x.child = null;
                                    do {
                                        var w = g.sibling;
                                        g.sibling = null,
                                        g = w
                                    } while (g !== null)
                                }
                            }
                            I = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        s.return = i,
                        I = s;
                    else
                        e: for (; I !== null; ) {
                            if (i = I,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    _o(9, i, i.return)
                                }
                            var m = i.sibling;
                            if (m !== null) {
                                m.return = i.return,
                                I = m;
                                break e
                            }
                            I = i.return
                        }
                }
                var h = e.current;
                for (I = h; I !== null; ) {
                    s = I;
                    var v = s.child;
                    if (s.subtreeFlags & 2064 && v !== null)
                        v.return = s,
                        I = v;
                    else
                        e: for (s = h; I !== null; ) {
                            if (l = I,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Us(9, l)
                                    }
                                } catch (C) {
                                    fe(l, l.return, C)
                                }
                            if (l === s) {
                                I = null;
                                break e
                            }
                            var S = l.sibling;
                            if (S !== null) {
                                S.return = l.return,
                                I = S;
                                break e
                            }
                            I = l.return
                        }
                }
                if (q = o,
                In(),
                jt && typeof jt.onPostCommitFiberRoot == "function")
                    try {
                        jt.onPostCommitFiberRoot(As, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ee = n,
            st.transition = t
        }
    }
    return !1
}
function bd(e, t, n) {
    t = qr(n, t),
    t = ph(e, t, 1),
    e = Pn(e, t, 1),
    t = De(),
    e !== null && (ii(e, 1, t),
    He(e, t))
}
function fe(e, t, n) {
    if (e.tag === 3)
        bd(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                bd(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (bn === null || !bn.has(r))) {
                    e = qr(n, e),
                    e = hh(t, e, 1),
                    t = Pn(t, e, 1),
                    e = De(),
                    t !== null && (ii(t, 1, e),
                    He(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Jy(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = De(),
    e.pingedLanes |= e.suspendedLanes & n,
    xe === e && (Ee & n) === n && (ye === 4 || ye === 3 && (Ee & 130023424) === Ee && 500 > pe() - $u ? Zn(e, 0) : zu |= n),
    He(e, t)
}
function Lh(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ei,
    Ei <<= 1,
    !(Ei & 130023424) && (Ei = 4194304)) : t = 1);
    var n = De();
    e = Kt(e, t),
    e !== null && (ii(e, t, n),
    He(e, n))
}
function e0(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Lh(e, n)
}
function t0(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(O(314))
    }
    r !== null && r.delete(t),
    Lh(e, n)
}
var Mh;
Mh = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Be.current)
            Ue = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ue = !1,
                By(e, t, n);
            Ue = !!(e.flags & 131072)
        }
    else
        Ue = !1,
        le && t.flags & 1048576 && zp(t, fs, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Ki(e, t),
        e = t.pendingProps;
        var o = Kr(t, Oe.current);
        Ar(t, n),
        o = Au(null, t, r, e, o, n);
        var i = Lu();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ve(r) ? (i = !0,
        cs(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Nu(t),
        o.updater = $s,
        t.stateNode = o,
        o._reactInternals = t,
        Ca(t, r, e, n),
        t = ba(null, t, r, !0, i, n)) : (t.tag = 0,
        le && i && Su(t),
        Le(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ki(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = r0(r),
            e = ht(r, e),
            o) {
            case 0:
                t = Pa(null, t, r, e, n);
                break e;
            case 1:
                t = gd(null, t, r, e, n);
                break e;
            case 11:
                t = hd(null, t, r, e, n);
                break e;
            case 14:
                t = md(null, t, r, ht(r.type, e), n);
                break e
            }
            throw Error(O(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ht(r, o),
        Pa(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ht(r, o),
        gd(e, t, r, o, n);
    case 3:
        e: {
            if (yh(t),
            e === null)
                throw Error(O(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            Wp(e, t),
            ms(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = qr(Error(O(423)), t),
                    t = vd(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = qr(Error(O(424)), t),
                    t = vd(e, t, r, n, o);
                    break e
                } else
                    for (Ge = kn(t.stateNode.containerInfo.firstChild),
                    Ye = t,
                    le = !0,
                    wt = null,
                    n = Vp(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Gr(),
                r === o) {
                    t = Gt(e, t, n);
                    break e
                }
                Le(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Qp(t),
        e === null && xa(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        s = o.children,
        ma(r, o) ? s = null : i !== null && ma(r, i) && (t.flags |= 32),
        vh(e, t),
        Le(e, t, s, n),
        t.child;
    case 6:
        return e === null && xa(t),
        null;
    case 13:
        return wh(e, t, n);
    case 4:
        return Ru(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Yr(t, null, r, n) : Le(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ht(r, o),
        hd(e, t, r, o, n);
    case 7:
        return Le(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Le(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Le(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            s = o.value,
            ne(ps, r._currentValue),
            r._currentValue = s,
            i !== null)
                if (Et(i.value, s)) {
                    if (i.children === o.children && !Be.current) {
                        t = Gt(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var l = i.dependencies;
                        if (l !== null) {
                            s = i.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (i.tag === 1) {
                                        a = Ht(-1, n & -n),
                                        a.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next,
                                            c.next = a),
                                            u.pending = a
                                        }
                                    }
                                    i.lanes |= n,
                                    a = i.alternate,
                                    a !== null && (a.lanes |= n),
                                    Sa(i.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (i.tag === 10)
                            s = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return,
                            s === null)
                                throw Error(O(341));
                            s.lanes |= n,
                            l = s.alternate,
                            l !== null && (l.lanes |= n),
                            Sa(s, n, t),
                            s = i.sibling
                        } else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (i = s.sibling,
                                i !== null) {
                                    i.return = s.return,
                                    s = i;
                                    break
                                }
                                s = s.return
                            }
                        i = s
                    }
            Le(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Ar(t, n),
        o = lt(o),
        r = r(o),
        t.flags |= 1,
        Le(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = ht(r, t.pendingProps),
        o = ht(r.type, o),
        md(e, t, r, o, n);
    case 15:
        return mh(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ht(r, o),
        Ki(e, t),
        t.tag = 1,
        Ve(r) ? (e = !0,
        cs(t)) : e = !1,
        Ar(t, n),
        fh(t, r, o),
        Ca(t, r, o, n),
        ba(null, t, r, !0, e, n);
    case 19:
        return xh(e, t, n);
    case 22:
        return gh(e, t, n)
    }
    throw Error(O(156, t.tag))
}
;
function Dh(e, t) {
    return up(e, t)
}
function n0(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function it(e, t, n, r) {
    return new n0(e,t,n,r)
}
function Hu(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function r0(e) {
    if (typeof e == "function")
        return Hu(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === uu)
            return 11;
        if (e === cu)
            return 14
    }
    return 2
}
function Nn(e, t) {
    var n = e.alternate;
    return n === null ? (n = it(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Xi(e, t, n, r, o, i) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        Hu(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case gr:
            return Jn(n.children, o, i, t);
        case au:
            s = 8,
            o |= 8;
            break;
        case Kl:
            return e = it(12, n, t, o | 2),
            e.elementType = Kl,
            e.lanes = i,
            e;
        case Gl:
            return e = it(13, n, t, o),
            e.elementType = Gl,
            e.lanes = i,
            e;
        case Yl:
            return e = it(19, n, t, o),
            e.elementType = Yl,
            e.lanes = i,
            e;
        case Qf:
            return Vs(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Hf:
                    s = 10;
                    break e;
                case Wf:
                    s = 9;
                    break e;
                case uu:
                    s = 11;
                    break e;
                case cu:
                    s = 14;
                    break e;
                case un:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(O(130, e == null ? e : typeof e, ""))
        }
    return t = it(s, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function Jn(e, t, n, r) {
    return e = it(7, e, r, t),
    e.lanes = n,
    e
}
function Vs(e, t, n, r) {
    return e = it(22, e, r, t),
    e.elementType = Qf,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Dl(e, t, n) {
    return e = it(6, e, null, t),
    e.lanes = n,
    e
}
function Il(e, t, n) {
    return t = it(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function o0(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = vl(0),
    this.expirationTimes = vl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = vl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Wu(e, t, n, r, o, i, s, l, a) {
    return e = new o0(e,t,n,l,a),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = it(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Nu(i),
    e
}
function i0(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: mr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Ih(e) {
    if (!e)
        return On;
    e = e._reactInternals;
    e: {
        if (lr(e) !== e || e.tag !== 1)
            throw Error(O(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ve(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(O(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ve(n))
            return Ip(e, n, t)
    }
    return t
}
function Fh(e, t, n, r, o, i, s, l, a) {
    return e = Wu(n, r, !0, e, o, i, s, l, a),
    e.context = Ih(null),
    n = e.current,
    r = De(),
    o = Tn(n),
    i = Ht(r, o),
    i.callback = t ?? null,
    Pn(n, i, o),
    e.current.lanes = o,
    ii(e, o, r),
    He(e, r),
    e
}
function Hs(e, t, n, r) {
    var o = t.current
      , i = De()
      , s = Tn(o);
    return n = Ih(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Ht(i, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Pn(o, t, s),
    e !== null && (St(e, o, s, i),
    Hi(e, o, s)),
    s
}
function Cs(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Td(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Qu(e, t) {
    Td(e, t),
    (e = e.alternate) && Td(e, t)
}
function s0() {
    return null
}
var zh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Ku(e) {
    this._internalRoot = e
}
Ws.prototype.render = Ku.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(O(409));
    Hs(e, t, null, null)
}
;
Ws.prototype.unmount = Ku.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        or(function() {
            Hs(null, e, null, null)
        }),
        t[Qt] = null
    }
}
;
function Ws(e) {
    this._internalRoot = e
}
Ws.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = gp();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < dn.length && t !== 0 && t < dn[n].priority; n++)
            ;
        dn.splice(n, 0, e),
        n === 0 && yp(e)
    }
}
;
function Gu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Qs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Nd() {}
function l0(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = Cs(s);
                i.call(u)
            }
        }
        var s = Fh(t, r, e, 0, null, !1, !1, "", Nd);
        return e._reactRootContainer = s,
        e[Qt] = s.current,
        Vo(e.nodeType === 8 ? e.parentNode : e),
        or(),
        s
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = Cs(a);
            l.call(u)
        }
    }
    var a = Wu(e, 0, !1, null, null, !1, !1, "", Nd);
    return e._reactRootContainer = a,
    e[Qt] = a.current,
    Vo(e.nodeType === 8 ? e.parentNode : e),
    or(function() {
        Hs(t, a, n, r)
    }),
    a
}
function Ks(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var a = Cs(s);
                l.call(a)
            }
        }
        Hs(t, s, e, o)
    } else
        s = l0(n, t, e, o, r);
    return Cs(s)
}
hp = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Co(t.pendingLanes);
            n !== 0 && (pu(t, n | 1),
            He(t, pe()),
            !(q & 6) && (Zr = pe() + 500,
            In()))
        }
        break;
    case 13:
        or(function() {
            var r = Kt(e, 1);
            if (r !== null) {
                var o = De();
                St(r, e, 1, o)
            }
        }),
        Qu(e, 1)
    }
}
;
hu = function(e) {
    if (e.tag === 13) {
        var t = Kt(e, 134217728);
        if (t !== null) {
            var n = De();
            St(t, e, 134217728, n)
        }
        Qu(e, 134217728)
    }
}
;
mp = function(e) {
    if (e.tag === 13) {
        var t = Tn(e)
          , n = Kt(e, t);
        if (n !== null) {
            var r = De();
            St(n, e, t, r)
        }
        Qu(e, t)
    }
}
;
gp = function() {
    return ee
}
;
vp = function(e, t) {
    var n = ee;
    try {
        return ee = e,
        t()
    } finally {
        ee = n
    }
}
;
ia = function(e, t, n) {
    switch (t) {
    case "input":
        if (Zl(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = Is(r);
                    if (!o)
                        throw Error(O(90));
                    Gf(r),
                    Zl(r, o)
                }
            }
        }
        break;
    case "textarea":
        Xf(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Rr(e, !!n.multiple, t, !1)
    }
}
;
rp = Uu;
op = or;
var a0 = {
    usingClientEntryPoint: !1,
    Events: [li, xr, Is, tp, np, Uu]
}
  , yo = {
    findFiberByHostInstance: Vn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , u0 = {
    bundleType: yo.bundleType,
    version: yo.version,
    rendererPackageName: yo.rendererPackageName,
    rendererConfig: yo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: qt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = lp(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: yo.findFiberByHostInstance || s0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ai.isDisabled && Ai.supportsFiber)
        try {
            As = Ai.inject(u0),
            jt = Ai
        } catch {}
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = a0;
Je.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Gu(t))
        throw Error(O(200));
    return i0(e, t, null, n)
}
;
Je.createRoot = function(e, t) {
    if (!Gu(e))
        throw Error(O(299));
    var n = !1
      , r = ""
      , o = zh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Wu(e, 1, !1, null, null, n, !1, r, o),
    e[Qt] = t.current,
    Vo(e.nodeType === 8 ? e.parentNode : e),
    new Ku(t)
}
;
Je.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","),
        Error(O(268, e)));
    return e = lp(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Je.flushSync = function(e) {
    return or(e)
}
;
Je.hydrate = function(e, t, n) {
    if (!Qs(t))
        throw Error(O(200));
    return Ks(null, e, t, !0, n)
}
;
Je.hydrateRoot = function(e, t, n) {
    if (!Gu(e))
        throw Error(O(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , s = zh;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Fh(t, null, e, 1, n ?? null, o, !1, i, s),
    e[Qt] = t.current,
    Vo(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Ws(t)
}
;
Je.render = function(e, t, n) {
    if (!Qs(t))
        throw Error(O(200));
    return Ks(null, e, t, !1, n)
}
;
Je.unmountComponentAtNode = function(e) {
    if (!Qs(e))
        throw Error(O(40));
    return e._reactRootContainer ? (or(function() {
        Ks(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Qt] = null
        })
    }),
    !0) : !1
}
;
Je.unstable_batchedUpdates = Uu;
Je.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Qs(n))
        throw Error(O(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(O(38));
    return Ks(e, t, n, !1, r)
}
;
Je.version = "18.3.1-next-f1338f8080-20240426";
function $h() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($h)
        } catch (e) {
            console.error(e)
        }
}
$h(),
$f.exports = Je;
var ui = $f.exports;
const Uh = Tf(ui);
var Bh, Rd = ui;
Bh = Rd.createRoot,
Rd.hydrateRoot;
const c0 = 1
  , d0 = 1e6;
let Fl = 0;
function f0() {
    return Fl = (Fl + 1) % Number.MAX_SAFE_INTEGER,
    Fl.toString()
}
const zl = new Map
  , Od = e => {
    if (zl.has(e))
        return;
    const t = setTimeout( () => {
        zl.delete(e),
        Lo({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , d0);
    zl.set(e, t)
}
  , p0 = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, c0)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? Od(n) : e.toasts.forEach(r => {
                Od(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , qi = [];
let Zi = {
    toasts: []
};
function Lo(e) {
    Zi = p0(Zi, e),
    qi.forEach(t => {
        t(Zi)
    }
    )
}
function h0({...e}) {
    const t = f0()
      , n = o => Lo({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => Lo({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Lo({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function m0() {
    const [e,t] = y.useState(Zi);
    return y.useEffect( () => (qi.push(t),
    () => {
        const n = qi.indexOf(t);
        n > -1 && qi.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: h0,
        dismiss: n => Lo({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function me(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function _d(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function Vh(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const i = _d(o, t);
            return !n && typeof i == "function" && (n = !0),
            i
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const i = r[o];
                    typeof i == "function" ? i() : _d(e[o], null)
                }
            }
    }
}
function Ze(...e) {
    return y.useCallback(Vh(...e), e)
}
function ci(e, t=[]) {
    let n = [];
    function r(i, s) {
        const l = y.createContext(s)
          , a = n.length;
        n = [...n, s];
        const u = d => {
            var m;
            const {scope: p, children: f, ...x} = d
              , g = ((m = p == null ? void 0 : p[e]) == null ? void 0 : m[a]) || l
              , w = y.useMemo( () => x, Object.values(x));
            return E.jsx(g.Provider, {
                value: w,
                children: f
            })
        }
        ;
        u.displayName = i + "Provider";
        function c(d, p) {
            var g;
            const f = ((g = p == null ? void 0 : p[e]) == null ? void 0 : g[a]) || l
              , x = y.useContext(f);
            if (x)
                return x;
            if (s !== void 0)
                return s;
            throw new Error(`\`${d}\` must be used within \`${i}\``)
        }
        return [u, c]
    }
    const o = () => {
        const i = n.map(s => y.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return y.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: a
                }
            }), [l, a])
        }
    }
    ;
    return o.scopeName = e,
    [r, g0(o, ...t)]
}
function g0(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (l, {useScope: a, scopeName: u}) => {
                const d = a(i)[`__scope${u}`];
                return {
                    ...l,
                    ...d
                }
            }
            , {});
            return y.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function ks(e) {
    const t = y0(e)
      , n = y.forwardRef( (r, o) => {
        const {children: i, ...s} = r
          , l = y.Children.toArray(i)
          , a = l.find(x0);
        if (a) {
            const u = a.props.children
              , c = l.map(d => d === a ? y.Children.count(u) > 1 ? y.Children.only(null) : y.isValidElement(u) ? u.props.children : null : d);
            return E.jsx(t, {
                ...s,
                ref: o,
                children: y.isValidElement(u) ? y.cloneElement(u, void 0, c) : null
            })
        }
        return E.jsx(t, {
            ...s,
            ref: o,
            children: i
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var v0 = ks("Slot");
function y0(e) {
    const t = y.forwardRef( (n, r) => {
        const {children: o, ...i} = n;
        if (y.isValidElement(o)) {
            const s = E0(o)
              , l = S0(i, o.props);
            return o.type !== y.Fragment && (l.ref = r ? Vh(r, s) : s),
            y.cloneElement(o, l)
        }
        return y.Children.count(o) > 1 ? y.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var Hh = Symbol("radix.slottable");
function w0(e) {
    const t = ({children: n}) => E.jsx(E.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = Hh,
    t
}
function x0(e) {
    return y.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === Hh
}
function S0(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
            const a = i(...l);
            return o(...l),
            a
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function E0(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function C0(e) {
    const t = e + "CollectionProvider"
      , [n,r] = ci(t)
      , [o,i] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , s = g => {
        const {scope: w, children: m} = g
          , h = j.useRef(null)
          , v = j.useRef(new Map).current;
        return E.jsx(o, {
            scope: w,
            itemMap: v,
            collectionRef: h,
            children: m
        })
    }
    ;
    s.displayName = t;
    const l = e + "CollectionSlot"
      , a = ks(l)
      , u = j.forwardRef( (g, w) => {
        const {scope: m, children: h} = g
          , v = i(l, m)
          , S = Ze(w, v.collectionRef);
        return E.jsx(a, {
            ref: S,
            children: h
        })
    }
    );
    u.displayName = l;
    const c = e + "CollectionItemSlot"
      , d = "data-radix-collection-item"
      , p = ks(c)
      , f = j.forwardRef( (g, w) => {
        const {scope: m, children: h, ...v} = g
          , S = j.useRef(null)
          , C = Ze(w, S)
          , k = i(c, m);
        return j.useEffect( () => (k.itemMap.set(S, {
            ref: S,
            ...v
        }),
        () => void k.itemMap.delete(S))),
        E.jsx(p, {
            [d]: "",
            ref: C,
            children: h
        })
    }
    );
    f.displayName = c;
    function x(g) {
        const w = i(e + "CollectionConsumer", g);
        return j.useCallback( () => {
            const h = w.collectionRef.current;
            if (!h)
                return [];
            const v = Array.from(h.querySelectorAll(`[${d}]`));
            return Array.from(w.itemMap.values()).sort( (k, P) => v.indexOf(k.ref.current) - v.indexOf(P.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: s,
        Slot: u,
        ItemSlot: f
    }, x, r]
}
var k0 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , je = k0.reduce( (e, t) => {
    const n = ks(`Primitive.${t}`)
      , r = y.forwardRef( (o, i) => {
        const {asChild: s, ...l} = o
          , a = s ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        E.jsx(a, {
            ...l,
            ref: i
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function Wh(e, t) {
    e && ui.flushSync( () => e.dispatchEvent(t))
}
function _n(e) {
    const t = y.useRef(e);
    return y.useEffect( () => {
        t.current = e
    }
    ),
    y.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function P0(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = _n(e);
    y.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var b0 = "DismissableLayer", Fa = "dismissableLayer.update", T0 = "dismissableLayer.pointerDownOutside", N0 = "dismissableLayer.focusOutside", jd, Qh = y.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Yu = y.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: l, ...a} = e
      , u = y.useContext(Qh)
      , [c,d] = y.useState(null)
      , p = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,f] = y.useState({})
      , x = Ze(t, P => d(P))
      , g = Array.from(u.layers)
      , [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , m = g.indexOf(w)
      , h = c ? g.indexOf(c) : -1
      , v = u.layersWithOutsidePointerEventsDisabled.size > 0
      , S = h >= m
      , C = O0(P => {
        const R = P.target
          , L = [...u.branches].some(A => A.contains(R));
        !S || L || (o == null || o(P),
        s == null || s(P),
        P.defaultPrevented || l == null || l())
    }
    , p)
      , k = _0(P => {
        const R = P.target;
        [...u.branches].some(A => A.contains(R)) || (i == null || i(P),
        s == null || s(P),
        P.defaultPrevented || l == null || l())
    }
    , p);
    return P0(P => {
        h === u.layers.size - 1 && (r == null || r(P),
        !P.defaultPrevented && l && (P.preventDefault(),
        l()))
    }
    , p),
    y.useEffect( () => {
        if (c)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (jd = p.body.style.pointerEvents,
            p.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Ad(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = jd)
            }
    }
    , [c, p, n, u]),
    y.useEffect( () => () => {
        c && (u.layers.delete(c),
        u.layersWithOutsidePointerEventsDisabled.delete(c),
        Ad())
    }
    , [c, u]),
    y.useEffect( () => {
        const P = () => f({});
        return document.addEventListener(Fa, P),
        () => document.removeEventListener(Fa, P)
    }
    , []),
    E.jsx(je.div, {
        ...a,
        ref: x,
        style: {
            pointerEvents: v ? S ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: me(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: me(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: me(e.onPointerDownCapture, C.onPointerDownCapture)
    })
}
);
Yu.displayName = b0;
var R0 = "DismissableLayerBranch"
  , Kh = y.forwardRef( (e, t) => {
    const n = y.useContext(Qh)
      , r = y.useRef(null)
      , o = Ze(t, r);
    return y.useEffect( () => {
        const i = r.current;
        if (i)
            return n.branches.add(i),
            () => {
                n.branches.delete(i)
            }
    }
    , [n.branches]),
    E.jsx(je.div, {
        ...e,
        ref: o
    })
}
);
Kh.displayName = R0;
function O0(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = _n(e)
      , r = y.useRef(!1)
      , o = y.useRef( () => {}
    );
    return y.useEffect( () => {
        const i = l => {
            if (l.target && !r.current) {
                let a = function() {
                    Gh(T0, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: l
                };
                l.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = a,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : a()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , s = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(s),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function _0(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = _n(e)
      , r = y.useRef(!1);
    return y.useEffect( () => {
        const o = i => {
            i.target && !r.current && Gh(N0, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function Ad() {
    const e = new CustomEvent(Fa);
    document.dispatchEvent(e)
}
function Gh(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Wh(o, i) : o.dispatchEvent(i)
}
var j0 = Yu
  , A0 = Kh
  , jn = globalThis != null && globalThis.document ? y.useLayoutEffect : () => {}
  , L0 = "Portal"
  , Yh = y.forwardRef( (e, t) => {
    var l;
    const {container: n, ...r} = e
      , [o,i] = y.useState(!1);
    jn( () => i(!0), []);
    const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return s ? Uh.createPortal(E.jsx(je.div, {
        ...r,
        ref: t
    }), s) : null
}
);
Yh.displayName = L0;
function M0(e, t) {
    return y.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Xu = e => {
    const {present: t, children: n} = e
      , r = D0(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : y.Children.only(n)
      , i = Ze(r.ref, I0(o));
    return typeof n == "function" || r.isPresent ? y.cloneElement(o, {
        ref: i
    }) : null
}
;
Xu.displayName = "Presence";
function D0(e) {
    const [t,n] = y.useState()
      , r = y.useRef(null)
      , o = y.useRef(e)
      , i = y.useRef("none")
      , s = e ? "mounted" : "unmounted"
      , [l,a] = M0(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return y.useEffect( () => {
        const u = Li(r.current);
        i.current = l === "mounted" ? u : "none"
    }
    , [l]),
    jn( () => {
        const u = r.current
          , c = o.current;
        if (c !== e) {
            const p = i.current
              , f = Li(u);
            e ? a("MOUNT") : f === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(c && p !== f ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, a]),
    jn( () => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window
              , d = f => {
                const g = Li(r.current).includes(f.animationName);
                if (f.target === t && g && (a("ANIMATION_END"),
                !o.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = c.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , p = f => {
                f.target === t && (i.current = Li(r.current))
            }
            ;
            return t.addEventListener("animationstart", p),
            t.addEventListener("animationcancel", d),
            t.addEventListener("animationend", d),
            () => {
                c.clearTimeout(u),
                t.removeEventListener("animationstart", p),
                t.removeEventListener("animationcancel", d),
                t.removeEventListener("animationend", d)
            }
        } else
            a("ANIMATION_END")
    }
    , [t, a]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: y.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function Li(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function I0(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var F0 = Ff[" useInsertionEffect ".trim().toString()] || jn;
function Xh({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [o,i,s] = z0({
        defaultProp: t,
        onChange: n
    })
      , l = e !== void 0
      , a = l ? e : o;
    {
        const c = y.useRef(e !== void 0);
        y.useEffect( () => {
            const d = c.current;
            d !== l && console.warn(`${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            c.current = l
        }
        , [l, r])
    }
    const u = y.useCallback(c => {
        var d;
        if (l) {
            const p = $0(c) ? c(e) : c;
            p !== e && ((d = s.current) == null || d.call(s, p))
        } else
            i(c)
    }
    , [l, e, i, s]);
    return [a, u]
}
function z0({defaultProp: e, onChange: t}) {
    const [n,r] = y.useState(e)
      , o = y.useRef(n)
      , i = y.useRef(t);
    return F0( () => {
        i.current = t
    }
    , [t]),
    y.useEffect( () => {
        var s;
        o.current !== n && ((s = i.current) == null || s.call(i, n),
        o.current = n)
    }
    , [n, o]),
    [n, r, i]
}
function $0(e) {
    return typeof e == "function"
}
var U0 = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , B0 = "VisuallyHidden"
  , Gs = y.forwardRef( (e, t) => E.jsx(je.span, {
    ...e,
    ref: t,
    style: {
        ...U0,
        ...e.style
    }
}));
Gs.displayName = B0;
var V0 = Gs
  , qu = "ToastProvider"
  , [Zu,H0,W0] = C0("Toast")
  , [qh,tC] = ci("Toast", [W0])
  , [Q0,Ys] = qh(qu)
  , Zh = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: i=50, children: s} = e
      , [l,a] = y.useState(null)
      , [u,c] = y.useState(0)
      , d = y.useRef(!1)
      , p = y.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${qu}\`. Expected non-empty \`string\`.`),
    E.jsx(Zu.Provider, {
        scope: t,
        children: E.jsx(Q0, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: i,
            toastCount: u,
            viewport: l,
            onViewportChange: a,
            onToastAdd: y.useCallback( () => c(f => f + 1), []),
            onToastRemove: y.useCallback( () => c(f => f - 1), []),
            isFocusedToastEscapeKeyDownRef: d,
            isClosePausedRef: p,
            children: s
        })
    })
}
;
Zh.displayName = qu;
var Jh = "ToastViewport"
  , K0 = ["F8"]
  , za = "toast.viewportPause"
  , $a = "toast.viewportResume"
  , em = y.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=K0, label: o="Notifications ({hotkey})", ...i} = e
      , s = Ys(Jh, n)
      , l = H0(n)
      , a = y.useRef(null)
      , u = y.useRef(null)
      , c = y.useRef(null)
      , d = y.useRef(null)
      , p = Ze(t, d, s.onViewportChange)
      , f = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , x = s.toastCount > 0;
    y.useEffect( () => {
        const w = m => {
            var v;
            r.length !== 0 && r.every(S => m[S] || m.code === S) && ((v = d.current) == null || v.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [r]),
    y.useEffect( () => {
        const w = a.current
          , m = d.current;
        if (x && w && m) {
            const h = () => {
                if (!s.isClosePausedRef.current) {
                    const k = new CustomEvent(za);
                    m.dispatchEvent(k),
                    s.isClosePausedRef.current = !0
                }
            }
              , v = () => {
                if (s.isClosePausedRef.current) {
                    const k = new CustomEvent($a);
                    m.dispatchEvent(k),
                    s.isClosePausedRef.current = !1
                }
            }
              , S = k => {
                !w.contains(k.relatedTarget) && v()
            }
              , C = () => {
                w.contains(document.activeElement) || v()
            }
            ;
            return w.addEventListener("focusin", h),
            w.addEventListener("focusout", S),
            w.addEventListener("pointermove", h),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", h),
            window.addEventListener("focus", v),
            () => {
                w.removeEventListener("focusin", h),
                w.removeEventListener("focusout", S),
                w.removeEventListener("pointermove", h),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", v)
            }
        }
    }
    , [x, s.isClosePausedRef]);
    const g = y.useCallback( ({tabbingDirection: w}) => {
        const h = l().map(v => {
            const S = v.ref.current
              , C = [S, ...sw(S)];
            return w === "forwards" ? C : C.reverse()
        }
        );
        return (w === "forwards" ? h.reverse() : h).flat()
    }
    , [l]);
    return y.useEffect( () => {
        const w = d.current;
        if (w) {
            const m = h => {
                var C, k, P;
                const v = h.altKey || h.ctrlKey || h.metaKey;
                if (h.key === "Tab" && !v) {
                    const R = document.activeElement
                      , L = h.shiftKey;
                    if (h.target === w && L) {
                        (C = u.current) == null || C.focus();
                        return
                    }
                    const M = g({
                        tabbingDirection: L ? "backwards" : "forwards"
                    })
                      , F = M.findIndex(_ => _ === R);
                    $l(M.slice(F + 1)) ? h.preventDefault() : L ? (k = u.current) == null || k.focus() : (P = c.current) == null || P.focus()
                }
            }
            ;
            return w.addEventListener("keydown", m),
            () => w.removeEventListener("keydown", m)
        }
    }
    , [l, g]),
    E.jsxs(A0, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", f),
        tabIndex: -1,
        style: {
            pointerEvents: x ? void 0 : "none"
        },
        children: [x && E.jsx(Ua, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const w = g({
                    tabbingDirection: "forwards"
                });
                $l(w)
            }
        }), E.jsx(Zu.Slot, {
            scope: n,
            children: E.jsx(je.ol, {
                tabIndex: -1,
                ...i,
                ref: p
            })
        }), x && E.jsx(Ua, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const w = g({
                    tabbingDirection: "backwards"
                });
                $l(w)
            }
        })]
    })
}
);
em.displayName = Jh;
var tm = "ToastFocusProxy"
  , Ua = y.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , i = Ys(tm, n);
    return E.jsx(Gs, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: s => {
            var u;
            const l = s.relatedTarget;
            !((u = i.viewport) != null && u.contains(l)) && r()
        }
    })
}
);
Ua.displayName = tm;
var di = "Toast"
  , G0 = "toast.swipeStart"
  , Y0 = "toast.swipeMove"
  , X0 = "toast.swipeCancel"
  , q0 = "toast.swipeEnd"
  , nm = y.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s} = e
      , [l,a] = Xh({
        prop: r,
        defaultProp: o ?? !0,
        onChange: i,
        caller: di
    });
    return E.jsx(Xu, {
        present: n || l,
        children: E.jsx(ew, {
            open: l,
            ...s,
            ref: t,
            onClose: () => a(!1),
            onPause: _n(e.onPause),
            onResume: _n(e.onResume),
            onSwipeStart: me(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: me(e.onSwipeMove, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
            }
            ),
            onSwipeCancel: me(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: me(e.onSwipeEnd, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                a(!1)
            }
            )
        })
    })
}
);
nm.displayName = di;
var [Z0,J0] = qh(di, {
    onClose() {}
})
  , ew = y.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: i, onClose: s, onEscapeKeyDown: l, onPause: a, onResume: u, onSwipeStart: c, onSwipeMove: d, onSwipeCancel: p, onSwipeEnd: f, ...x} = e
      , g = Ys(di, n)
      , [w,m] = y.useState(null)
      , h = Ze(t, _ => m(_))
      , v = y.useRef(null)
      , S = y.useRef(null)
      , C = o || g.duration
      , k = y.useRef(0)
      , P = y.useRef(C)
      , R = y.useRef(0)
      , {onToastAdd: L, onToastRemove: A} = g
      , $ = _n( () => {
        var Q;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((Q = g.viewport) == null || Q.focus()),
        s()
    }
    )
      , M = y.useCallback(_ => {
        !_ || _ === 1 / 0 || (window.clearTimeout(R.current),
        k.current = new Date().getTime(),
        R.current = window.setTimeout($, _))
    }
    , [$]);
    y.useEffect( () => {
        const _ = g.viewport;
        if (_) {
            const Q = () => {
                M(P.current),
                u == null || u()
            }
              , U = () => {
                const H = new Date().getTime() - k.current;
                P.current = P.current - H,
                window.clearTimeout(R.current),
                a == null || a()
            }
            ;
            return _.addEventListener(za, U),
            _.addEventListener($a, Q),
            () => {
                _.removeEventListener(za, U),
                _.removeEventListener($a, Q)
            }
        }
    }
    , [g.viewport, C, a, u, M]),
    y.useEffect( () => {
        i && !g.isClosePausedRef.current && M(C)
    }
    , [i, C, g.isClosePausedRef, M]),
    y.useEffect( () => (L(),
    () => A()), [L, A]);
    const F = y.useMemo( () => w ? um(w) : null, [w]);
    return g.viewport ? E.jsxs(E.Fragment, {
        children: [F && E.jsx(tw, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: F
        }), E.jsx(Z0, {
            scope: n,
            onClose: $,
            children: ui.createPortal(E.jsx(Zu.ItemSlot, {
                scope: n,
                children: E.jsx(j0, {
                    asChild: !0,
                    onEscapeKeyDown: me(l, () => {
                        g.isFocusedToastEscapeKeyDownRef.current || $(),
                        g.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: E.jsx(je.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": g.swipeDirection,
                        ...x,
                        ref: h,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: me(e.onKeyDown, _ => {
                            _.key === "Escape" && (l == null || l(_.nativeEvent),
                            _.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = !0,
                            $()))
                        }
                        ),
                        onPointerDown: me(e.onPointerDown, _ => {
                            _.button === 0 && (v.current = {
                                x: _.clientX,
                                y: _.clientY
                            })
                        }
                        ),
                        onPointerMove: me(e.onPointerMove, _ => {
                            if (!v.current)
                                return;
                            const Q = _.clientX - v.current.x
                              , U = _.clientY - v.current.y
                              , H = !!S.current
                              , T = ["left", "right"].includes(g.swipeDirection)
                              , N = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max
                              , D = T ? N(0, Q) : 0
                              , W = T ? 0 : N(0, U)
                              , z = _.pointerType === "touch" ? 10 : 2
                              , G = {
                                x: D,
                                y: W
                            }
                              , X = {
                                originalEvent: _,
                                delta: G
                            };
                            H ? (S.current = G,
                            Mi(Y0, d, X, {
                                discrete: !1
                            })) : Ld(G, g.swipeDirection, z) ? (S.current = G,
                            Mi(G0, c, X, {
                                discrete: !1
                            }),
                            _.target.setPointerCapture(_.pointerId)) : (Math.abs(Q) > z || Math.abs(U) > z) && (v.current = null)
                        }
                        ),
                        onPointerUp: me(e.onPointerUp, _ => {
                            const Q = S.current
                              , U = _.target;
                            if (U.hasPointerCapture(_.pointerId) && U.releasePointerCapture(_.pointerId),
                            S.current = null,
                            v.current = null,
                            Q) {
                                const H = _.currentTarget
                                  , T = {
                                    originalEvent: _,
                                    delta: Q
                                };
                                Ld(Q, g.swipeDirection, g.swipeThreshold) ? Mi(q0, f, T, {
                                    discrete: !0
                                }) : Mi(X0, p, T, {
                                    discrete: !0
                                }),
                                H.addEventListener("click", N => N.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), g.viewport)
        })]
    }) : null
}
)
  , tw = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = Ys(di, t)
      , [i,s] = y.useState(!1)
      , [l,a] = y.useState(!1);
    return ow( () => s(!0)),
    y.useEffect( () => {
        const u = window.setTimeout( () => a(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    l ? null : E.jsx(Yh, {
        asChild: !0,
        children: E.jsx(Gs, {
            ...r,
            children: i && E.jsxs(E.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , nw = "ToastTitle"
  , rm = y.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return E.jsx(je.div, {
        ...r,
        ref: t
    })
}
);
rm.displayName = nw;
var rw = "ToastDescription"
  , om = y.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return E.jsx(je.div, {
        ...r,
        ref: t
    })
}
);
om.displayName = rw;
var im = "ToastAction"
  , sm = y.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? E.jsx(am, {
        altText: n,
        asChild: !0,
        children: E.jsx(Ju, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${im}\`. Expected non-empty \`string\`.`),
    null)
}
);
sm.displayName = im;
var lm = "ToastClose"
  , Ju = y.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = J0(lm, n);
    return E.jsx(am, {
        asChild: !0,
        children: E.jsx(je.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: me(e.onClick, o.onClose)
        })
    })
}
);
Ju.displayName = lm;
var am = y.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return E.jsx(je.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function um(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        iw(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else
                    t.push(...um(r))
        }
    }
    ),
    t
}
function Mi(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , i = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Wh(o, i) : o.dispatchEvent(i)
}
var Ld = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
}
;
function ow(e= () => {}
) {
    const t = _n(e);
    jn( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function iw(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function sw(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function $l(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var lw = Zh
  , cm = em
  , dm = nm
  , fm = rm
  , pm = om
  , hm = sm
  , mm = Ju;
function gm(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = gm(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function vm() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = gm(e)) && (r && (r += " "),
        r += t);
    return r
}
const Md = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Dd = vm
  , ym = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return Dd(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: i} = t
      , s = Object.keys(o).map(u => {
        const c = n == null ? void 0 : n[u]
          , d = i == null ? void 0 : i[u];
        if (c === null)
            return null;
        const p = Md(c) || Md(d);
        return o[u][p]
    }
    )
      , l = n && Object.entries(n).reduce( (u, c) => {
        let[d,p] = c;
        return p === void 0 || (u[d] = p),
        u
    }
    , {})
      , a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, c) => {
        let {class: d, className: p, ...f} = c;
        return Object.entries(f).every(x => {
            let[g,w] = x;
            return Array.isArray(w) ? w.includes({
                ...i,
                ...l
            }[g]) : {
                ...i,
                ...l
            }[g] === w
        }
        ) ? [...u, d, p] : u
    }
    , []);
    return Dd(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aw = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , wm = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var uw = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cw = y.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: i, iconNode: s, ...l}, a) => y.createElement("svg", {
    ref: a,
    ...uw,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: wm("lucide", o),
    ...l
}, [...s.map( ([u,c]) => y.createElement(u, c)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oo = (e, t) => {
    const n = y.forwardRef( ({className: r, ...o}, i) => y.createElement(cw, {
        ref: i,
        iconNode: t,
        className: wm(`lucide-${aw(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Id = oo("Download", [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "7 10 12 15 17 10",
    key: "2ggqvy"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "15",
    y2: "3",
    key: "1vk2je"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ba = oo("Image", [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    ry: "2",
    key: "1m3agn"
}], ["circle", {
    cx: "9",
    cy: "9",
    r: "2",
    key: "af1f0g"
}], ["path", {
    d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
    key: "1xmnt7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dw = oo("LoaderCircle", [["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fd = oo("RotateCcw", [["path", {
    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
    key: "1357e3"
}], ["path", {
    d: "M3 3v5h5",
    key: "1xhq8a"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fw = oo("Upload", [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "17 8 12 3 7 8",
    key: "t8dd8p"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "3",
    y2: "15",
    key: "widbto"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pw = oo("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , ec = "-"
  , hw = e => {
    const t = gw(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: s => {
            const l = s.split(ec);
            return l[0] === "" && l.length !== 1 && l.shift(),
            xm(l, t) || mw(s)
        }
        ,
        getConflictingClassGroupIds: (s, l) => {
            const a = n[s] || [];
            return l && r[s] ? [...a, ...r[s]] : a
        }
    }
}
  , xm = (e, t) => {
    var s;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? xm(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const i = e.join(ec);
    return (s = t.validators.find( ({validator: l}) => l(i))) == null ? void 0 : s.classGroupId
}
  , zd = /^\[(.+)\]$/
  , mw = e => {
    if (zd.test(e)) {
        const t = zd.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , gw = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return yw(Object.entries(e.classGroups), n).forEach( ([i,s]) => {
        Va(s, r, i, t)
    }
    ),
    r
}
  , Va = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const i = o === "" ? t : $d(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (vw(o)) {
                Va(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([i,s]) => {
            Va(s, $d(t, i), n, r)
        }
        )
    }
    )
}
  , $d = (e, t) => {
    let n = e;
    return t.split(ec).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , vw = e => e.isThemeGetter
  , yw = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map( ([s,l]) => [t + s, l])) : i);
    return [n, o]
}
) : e
  , ww = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (i, s) => {
        n.set(i, s),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(i) {
            let s = n.get(i);
            if (s !== void 0)
                return s;
            if ((s = r.get(i)) !== void 0)
                return o(i, s),
                s
        },
        set(i, s) {
            n.has(i) ? n.set(i, s) : o(i, s)
        }
    }
}
  , Sm = "!"
  , xw = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , i = t.length
      , s = l => {
        const a = [];
        let u = 0, c = 0, d;
        for (let w = 0; w < l.length; w++) {
            let m = l[w];
            if (u === 0) {
                if (m === o && (r || l.slice(w, w + i) === t)) {
                    a.push(l.slice(c, w)),
                    c = w + i;
                    continue
                }
                if (m === "/") {
                    d = w;
                    continue
                }
            }
            m === "[" ? u++ : m === "]" && u--
        }
        const p = a.length === 0 ? l : l.substring(c)
          , f = p.startsWith(Sm)
          , x = f ? p.substring(1) : p
          , g = d && d > c ? d - c : void 0;
        return {
            modifiers: a,
            hasImportantModifier: f,
            baseClassName: x,
            maybePostfixModifierPosition: g
        }
    }
    ;
    return n ? l => n({
        className: l,
        parseClassName: s
    }) : s
}
  , Sw = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , Ew = e => ({
    cache: ww(e.cacheSize),
    parseClassName: xw(e),
    ...hw(e)
})
  , Cw = /\s+/
  , kw = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , i = []
      , s = e.trim().split(Cw);
    let l = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
        const u = s[a]
          , {modifiers: c, hasImportantModifier: d, baseClassName: p, maybePostfixModifierPosition: f} = n(u);
        let x = !!f
          , g = r(x ? p.substring(0, f) : p);
        if (!g) {
            if (!x) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            if (g = r(p),
            !g) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            x = !1
        }
        const w = Sw(c).join(":")
          , m = d ? w + Sm : w
          , h = m + g;
        if (i.includes(h))
            continue;
        i.push(h);
        const v = o(g, x);
        for (let S = 0; S < v.length; ++S) {
            const C = v[S];
            i.push(m + C)
        }
        l = u + (l.length > 0 ? " " + l : l)
    }
    return l
}
;
function Pw() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = Em(t)) && (r && (r += " "),
        r += n);
    return r
}
const Em = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = Em(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function bw(e, ...t) {
    let n, r, o, i = s;
    function s(a) {
        const u = t.reduce( (c, d) => d(c), e());
        return n = Ew(u),
        r = n.cache.get,
        o = n.cache.set,
        i = l,
        l(a)
    }
    function l(a) {
        const u = r(a);
        if (u)
            return u;
        const c = kw(a, n);
        return o(a, c),
        c
    }
    return function() {
        return i(Pw.apply(null, arguments))
    }
}
const re = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , Cm = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , Tw = /^\d+\/\d+$/
  , Nw = new Set(["px", "full", "screen"])
  , Rw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , Ow = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , _w = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , jw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , Aw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , It = e => Mr(e) || Nw.has(e) || Tw.test(e)
  , sn = e => io(e, "length", Uw)
  , Mr = e => !!e && !Number.isNaN(Number(e))
  , Ul = e => io(e, "number", Mr)
  , wo = e => !!e && Number.isInteger(Number(e))
  , Lw = e => e.endsWith("%") && Mr(e.slice(0, -1))
  , K = e => Cm.test(e)
  , ln = e => Rw.test(e)
  , Mw = new Set(["length", "size", "percentage"])
  , Dw = e => io(e, Mw, km)
  , Iw = e => io(e, "position", km)
  , Fw = new Set(["image", "url"])
  , zw = e => io(e, Fw, Vw)
  , $w = e => io(e, "", Bw)
  , xo = () => !0
  , io = (e, t, n) => {
    const r = Cm.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , Uw = e => Ow.test(e) && !_w.test(e)
  , km = () => !1
  , Bw = e => jw.test(e)
  , Vw = e => Aw.test(e)
  , Hw = () => {
    const e = re("colors")
      , t = re("spacing")
      , n = re("blur")
      , r = re("brightness")
      , o = re("borderColor")
      , i = re("borderRadius")
      , s = re("borderSpacing")
      , l = re("borderWidth")
      , a = re("contrast")
      , u = re("grayscale")
      , c = re("hueRotate")
      , d = re("invert")
      , p = re("gap")
      , f = re("gradientColorStops")
      , x = re("gradientColorStopPositions")
      , g = re("inset")
      , w = re("margin")
      , m = re("opacity")
      , h = re("padding")
      , v = re("saturate")
      , S = re("scale")
      , C = re("sepia")
      , k = re("skew")
      , P = re("space")
      , R = re("translate")
      , L = () => ["auto", "contain", "none"]
      , A = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , $ = () => ["auto", K, t]
      , M = () => [K, t]
      , F = () => ["", It, sn]
      , _ = () => ["auto", Mr, K]
      , Q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , U = () => ["solid", "dashed", "dotted", "double", "none"]
      , H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , T = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , N = () => ["", "0", K]
      , D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , W = () => [Mr, K];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [xo],
            spacing: [It, sn],
            blur: ["none", "", ln, K],
            brightness: W(),
            borderColor: [e],
            borderRadius: ["none", "", "full", ln, K],
            borderSpacing: M(),
            borderWidth: F(),
            contrast: W(),
            grayscale: N(),
            hueRotate: W(),
            invert: N(),
            gap: M(),
            gradientColorStops: [e],
            gradientColorStopPositions: [Lw, sn],
            inset: $(),
            margin: $(),
            opacity: W(),
            padding: M(),
            saturate: W(),
            scale: W(),
            sepia: N(),
            skew: W(),
            space: M(),
            translate: M()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", K]
            }],
            container: ["container"],
            columns: [{
                columns: [ln]
            }],
            "break-after": [{
                "break-after": D()
            }],
            "break-before": [{
                "break-before": D()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...Q(), K]
            }],
            overflow: [{
                overflow: A()
            }],
            "overflow-x": [{
                "overflow-x": A()
            }],
            "overflow-y": [{
                "overflow-y": A()
            }],
            overscroll: [{
                overscroll: L()
            }],
            "overscroll-x": [{
                "overscroll-x": L()
            }],
            "overscroll-y": [{
                "overscroll-y": L()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [g]
            }],
            "inset-x": [{
                "inset-x": [g]
            }],
            "inset-y": [{
                "inset-y": [g]
            }],
            start: [{
                start: [g]
            }],
            end: [{
                end: [g]
            }],
            top: [{
                top: [g]
            }],
            right: [{
                right: [g]
            }],
            bottom: [{
                bottom: [g]
            }],
            left: [{
                left: [g]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", wo, K]
            }],
            basis: [{
                basis: $()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", K]
            }],
            grow: [{
                grow: N()
            }],
            shrink: [{
                shrink: N()
            }],
            order: [{
                order: ["first", "last", "none", wo, K]
            }],
            "grid-cols": [{
                "grid-cols": [xo]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", wo, K]
                }, K]
            }],
            "col-start": [{
                "col-start": _()
            }],
            "col-end": [{
                "col-end": _()
            }],
            "grid-rows": [{
                "grid-rows": [xo]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [wo, K]
                }, K]
            }],
            "row-start": [{
                "row-start": _()
            }],
            "row-end": [{
                "row-end": _()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", K]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", K]
            }],
            gap: [{
                gap: [p]
            }],
            "gap-x": [{
                "gap-x": [p]
            }],
            "gap-y": [{
                "gap-y": [p]
            }],
            "justify-content": [{
                justify: ["normal", ...T()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...T(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...T(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [h]
            }],
            px: [{
                px: [h]
            }],
            py: [{
                py: [h]
            }],
            ps: [{
                ps: [h]
            }],
            pe: [{
                pe: [h]
            }],
            pt: [{
                pt: [h]
            }],
            pr: [{
                pr: [h]
            }],
            pb: [{
                pb: [h]
            }],
            pl: [{
                pl: [h]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [P]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [P]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", K, t]
            }],
            "min-w": [{
                "min-w": [K, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [K, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [ln]
                }, ln]
            }],
            h: [{
                h: [K, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [K, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", ln, sn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ul]
            }],
            "font-family": [{
                font: [xo]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", K]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Mr, Ul]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", It, K]
            }],
            "list-image": [{
                "list-image": ["none", K]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", K]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [m]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [m]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...U(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", It, sn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", It, K]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: M()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", K]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", K]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [m]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...Q(), Iw]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", Dw]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, zw]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [x]
            }],
            "gradient-via-pos": [{
                via: [x]
            }],
            "gradient-to-pos": [{
                to: [x]
            }],
            "gradient-from": [{
                from: [f]
            }],
            "gradient-via": [{
                via: [f]
            }],
            "gradient-to": [{
                to: [f]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [l]
            }],
            "border-w-x": [{
                "border-x": [l]
            }],
            "border-w-y": [{
                "border-y": [l]
            }],
            "border-w-s": [{
                "border-s": [l]
            }],
            "border-w-e": [{
                "border-e": [l]
            }],
            "border-w-t": [{
                "border-t": [l]
            }],
            "border-w-r": [{
                "border-r": [l]
            }],
            "border-w-b": [{
                "border-b": [l]
            }],
            "border-w-l": [{
                "border-l": [l]
            }],
            "border-opacity": [{
                "border-opacity": [m]
            }],
            "border-style": [{
                border: [...U(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [l]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [l]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [m]
            }],
            "divide-style": [{
                divide: U()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...U()]
            }],
            "outline-offset": [{
                "outline-offset": [It, K]
            }],
            "outline-w": [{
                outline: [It, sn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: F()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [m]
            }],
            "ring-offset-w": [{
                "ring-offset": [It, sn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", ln, $w]
            }],
            "shadow-color": [{
                shadow: [xo]
            }],
            opacity: [{
                opacity: [m]
            }],
            "mix-blend": [{
                "mix-blend": [...H(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": H()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [a]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", ln, K]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [v]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [a]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [m]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [v]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", K]
            }],
            duration: [{
                duration: W()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", K]
            }],
            delay: [{
                delay: W()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", K]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [S]
            }],
            "scale-x": [{
                "scale-x": [S]
            }],
            "scale-y": [{
                "scale-y": [S]
            }],
            rotate: [{
                rotate: [wo, K]
            }],
            "translate-x": [{
                "translate-x": [R]
            }],
            "translate-y": [{
                "translate-y": [R]
            }],
            "skew-x": [{
                "skew-x": [k]
            }],
            "skew-y": [{
                "skew-y": [k]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", K]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", K]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": M()
            }],
            "scroll-mx": [{
                "scroll-mx": M()
            }],
            "scroll-my": [{
                "scroll-my": M()
            }],
            "scroll-ms": [{
                "scroll-ms": M()
            }],
            "scroll-me": [{
                "scroll-me": M()
            }],
            "scroll-mt": [{
                "scroll-mt": M()
            }],
            "scroll-mr": [{
                "scroll-mr": M()
            }],
            "scroll-mb": [{
                "scroll-mb": M()
            }],
            "scroll-ml": [{
                "scroll-ml": M()
            }],
            "scroll-p": [{
                "scroll-p": M()
            }],
            "scroll-px": [{
                "scroll-px": M()
            }],
            "scroll-py": [{
                "scroll-py": M()
            }],
            "scroll-ps": [{
                "scroll-ps": M()
            }],
            "scroll-pe": [{
                "scroll-pe": M()
            }],
            "scroll-pt": [{
                "scroll-pt": M()
            }],
            "scroll-pr": [{
                "scroll-pr": M()
            }],
            "scroll-pb": [{
                "scroll-pb": M()
            }],
            "scroll-pl": [{
                "scroll-pl": M()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", K]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [It, sn, Ul]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , Ww = bw(Hw);
function _e(...e) {
    return Ww(vm(e))
}
const Qw = lw
  , Pm = y.forwardRef( ({className: e, ...t}, n) => E.jsx(cm, {
    ref: n,
    className: _e("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
Pm.displayName = cm.displayName;
const Kw = ym("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , bm = y.forwardRef( ({className: e, variant: t, ...n}, r) => E.jsx(dm, {
    ref: r,
    className: _e(Kw({
        variant: t
    }), e),
    ...n
}));
bm.displayName = dm.displayName;
const Gw = y.forwardRef( ({className: e, ...t}, n) => E.jsx(hm, {
    ref: n,
    className: _e("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
Gw.displayName = hm.displayName;
const Tm = y.forwardRef( ({className: e, ...t}, n) => E.jsx(mm, {
    ref: n,
    className: _e("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: E.jsx(pw, {
        className: "h-4 w-4"
    })
}));
Tm.displayName = mm.displayName;
const Nm = y.forwardRef( ({className: e, ...t}, n) => E.jsx(fm, {
    ref: n,
    className: _e("text-sm font-semibold", e),
    ...t
}));
Nm.displayName = fm.displayName;
const Rm = y.forwardRef( ({className: e, ...t}, n) => E.jsx(pm, {
    ref: n,
    className: _e("text-sm opacity-90", e),
    ...t
}));
Rm.displayName = pm.displayName;
function Yw() {
    const {toasts: e} = m0();
    return E.jsxs(Qw, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...i}) {
            return E.jsxs(bm, {
                ...i,
                children: [E.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && E.jsx(Nm, {
                        children: n
                    }), r && E.jsx(Rm, {
                        children: r
                    })]
                }), o, E.jsx(Tm, {})]
            }, t)
        }), E.jsx(Pm, {})]
    })
}
var Ud = ["light", "dark"]
  , Xw = "(prefers-color-scheme: dark)"
  , qw = y.createContext(void 0)
  , Zw = {
    setTheme: e => {}
    ,
    themes: []
}
  , Jw = () => {
    var e;
    return (e = y.useContext(qw)) != null ? e : Zw
}
;
y.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: i, value: s, attrs: l, nonce: a}) => {
    let u = i === "system"
      , c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map(x => `'${x}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , d = o ? Ud.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , p = (x, g=!1, w=!0) => {
        let m = s ? s[x] : x
          , h = g ? x + "|| ''" : `'${m}'`
          , v = "";
        return o && w && !g && Ud.includes(x) && (v += `d.style.colorScheme = '${x}';`),
        n === "class" ? g || m ? v += `c.add(${h})` : v += "null" : m && (v += `d[s](n,${h})`),
        v
    }
      , f = e ? `!function(){${c}${p(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Xw}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${p(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + p(i, !1, !1) + "}"}${d}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${p(s ? "x[e]" : "e", !0)}}else{${p(i, !1, !1)};}${d}}catch(t){}}();`;
    return y.createElement("script", {
        nonce: a,
        dangerouslySetInnerHTML: {
            __html: f
        }
    })
}
);
var ex = e => {
    switch (e) {
    case "success":
        return rx;
    case "info":
        return ix;
    case "warning":
        return ox;
    case "error":
        return sx;
    default:
        return null
    }
}
  , tx = Array(12).fill(0)
  , nx = ({visible: e, className: t}) => j.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, j.createElement("div", {
    className: "sonner-spinner"
}, tx.map( (n, r) => j.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , rx = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, j.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , ox = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, j.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , ix = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, j.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , sx = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, j.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , lx = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, j.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), j.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , ax = () => {
    let[e,t] = j.useState(document.hidden);
    return j.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Ha = 1
  , ux = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Ha++
              , i = this.toasts.find(l => l.id === o)
              , s = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            i ? this.toasts = this.toasts.map(l => l.id === o ? (this.publish({
                ...l,
                ...e,
                id: o,
                title: n
            }),
            {
                ...l,
                ...e,
                id: o,
                dismissible: s,
                title: n
            }) : l) : this.addToast({
                title: n,
                ...r,
                dismissible: s,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), o = n !== void 0, i, s = r.then(async a => {
                if (i = ["resolve", a],
                j.isValidElement(a))
                    o = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: a
                    });
                else if (dx(a) && !a.ok) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${a.status}`) : t.error
                      , c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${a.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let u = typeof t.success == "function" ? await t.success(a) : t.success
                      , c = typeof t.description == "function" ? await t.description(a) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: c
                    })
                }
            }
            ).catch(async a => {
                if (i = ["reject", a],
                t.error !== void 0) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(a) : t.error
                      , c = typeof t.description == "function" ? await t.description(a) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                }
            }
            ).finally( () => {
                var a;
                o && (this.dismiss(n),
                n = void 0),
                (a = t.finally) == null || a.call(t)
            }
            ), l = () => new Promise( (a, u) => s.then( () => i[0] === "reject" ? u(i[1]) : a(i[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: l
            } : Object.assign(n, {
                unwrap: l
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Ha++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , ze = new ux
  , cx = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Ha++;
    return ze.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , dx = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , fx = cx
  , px = () => ze.toasts
  , hx = () => ze.getActiveToasts();
Object.assign(fx, {
    success: ze.success,
    info: ze.info,
    warning: ze.warning,
    error: ze.error,
    custom: ze.custom,
    message: ze.message,
    promise: ze.promise,
    dismiss: ze.dismiss,
    loading: ze.loading
}, {
    getHistory: px,
    getToasts: hx
});
function mx(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
mx(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Di(e) {
    return e.label !== void 0
}
var gx = 3
  , vx = "32px"
  , yx = "16px"
  , Bd = 4e3
  , wx = 356
  , xx = 14
  , Sx = 20
  , Ex = 200;
function pt(...e) {
    return e.filter(Boolean).join(" ")
}
function Cx(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var kx = e => {
    var t, n, r, o, i, s, l, a, u, c, d;
    let {invert: p, toast: f, unstyled: x, interacting: g, setHeights: w, visibleToasts: m, heights: h, index: v, toasts: S, expanded: C, removeToast: k, defaultRichColors: P, closeButton: R, style: L, cancelButtonStyle: A, actionButtonStyle: $, className: M="", descriptionClassName: F="", duration: _, position: Q, gap: U, loadingIcon: H, expandByDefault: T, classNames: N, icons: D, closeButtonAriaLabel: W="Close toast", pauseWhenPageIsHidden: z} = e
      , [G,X] = j.useState(null)
      , [he,ke] = j.useState(null)
      , [J,ar] = j.useState(!1)
      , [Zt,Fn] = j.useState(!1)
      , [Jt,ur] = j.useState(!1)
      , [en,pi] = j.useState(!1)
      , [ll,hi] = j.useState(!1)
      , [al,ao] = j.useState(0)
      , [cr,hc] = j.useState(0)
      , uo = j.useRef(f.duration || _ || Bd)
      , mc = j.useRef(null)
      , zn = j.useRef(null)
      , Rg = v === 0
      , Og = v + 1 <= m
      , tt = f.type
      , dr = f.dismissible !== !1
      , _g = f.className || ""
      , jg = f.descriptionClassName || ""
      , mi = j.useMemo( () => h.findIndex(B => B.toastId === f.id) || 0, [h, f.id])
      , Ag = j.useMemo( () => {
        var B;
        return (B = f.closeButton) != null ? B : R
    }
    , [f.closeButton, R])
      , gc = j.useMemo( () => f.duration || _ || Bd, [f.duration, _])
      , ul = j.useRef(0)
      , fr = j.useRef(0)
      , vc = j.useRef(0)
      , pr = j.useRef(null)
      , [Lg,Mg] = Q.split("-")
      , yc = j.useMemo( () => h.reduce( (B, te, se) => se >= mi ? B : B + te.height, 0), [h, mi])
      , wc = ax()
      , Dg = f.invert || p
      , cl = tt === "loading";
    fr.current = j.useMemo( () => mi * U + yc, [mi, yc]),
    j.useEffect( () => {
        uo.current = gc
    }
    , [gc]),
    j.useEffect( () => {
        ar(!0)
    }
    , []),
    j.useEffect( () => {
        let B = zn.current;
        if (B) {
            let te = B.getBoundingClientRect().height;
            return hc(te),
            w(se => [{
                toastId: f.id,
                height: te,
                position: f.position
            }, ...se]),
            () => w(se => se.filter(ut => ut.toastId !== f.id))
        }
    }
    , [w, f.id]),
    j.useLayoutEffect( () => {
        if (!J)
            return;
        let B = zn.current
          , te = B.style.height;
        B.style.height = "auto";
        let se = B.getBoundingClientRect().height;
        B.style.height = te,
        hc(se),
        w(ut => ut.find(ct => ct.toastId === f.id) ? ut.map(ct => ct.toastId === f.id ? {
            ...ct,
            height: se
        } : ct) : [{
            toastId: f.id,
            height: se,
            position: f.position
        }, ...ut])
    }
    , [J, f.title, f.description, w, f.id]);
    let tn = j.useCallback( () => {
        Fn(!0),
        ao(fr.current),
        w(B => B.filter(te => te.toastId !== f.id)),
        setTimeout( () => {
            k(f)
        }
        , Ex)
    }
    , [f, k, w, fr]);
    j.useEffect( () => {
        if (f.promise && tt === "loading" || f.duration === 1 / 0 || f.type === "loading")
            return;
        let B;
        return C || g || z && wc ? ( () => {
            if (vc.current < ul.current) {
                let te = new Date().getTime() - ul.current;
                uo.current = uo.current - te
            }
            vc.current = new Date().getTime()
        }
        )() : uo.current !== 1 / 0 && (ul.current = new Date().getTime(),
        B = setTimeout( () => {
            var te;
            (te = f.onAutoClose) == null || te.call(f, f),
            tn()
        }
        , uo.current)),
        () => clearTimeout(B)
    }
    , [C, g, f, tt, z, wc, tn]),
    j.useEffect( () => {
        f.delete && tn()
    }
    , [tn, f.delete]);
    function Ig() {
        var B, te, se;
        return D != null && D.loading ? j.createElement("div", {
            className: pt(N == null ? void 0 : N.loader, (B = f == null ? void 0 : f.classNames) == null ? void 0 : B.loader, "sonner-loader"),
            "data-visible": tt === "loading"
        }, D.loading) : H ? j.createElement("div", {
            className: pt(N == null ? void 0 : N.loader, (te = f == null ? void 0 : f.classNames) == null ? void 0 : te.loader, "sonner-loader"),
            "data-visible": tt === "loading"
        }, H) : j.createElement(nx, {
            className: pt(N == null ? void 0 : N.loader, (se = f == null ? void 0 : f.classNames) == null ? void 0 : se.loader),
            visible: tt === "loading"
        })
    }
    return j.createElement("li", {
        tabIndex: 0,
        ref: zn,
        className: pt(M, _g, N == null ? void 0 : N.toast, (t = f == null ? void 0 : f.classNames) == null ? void 0 : t.toast, N == null ? void 0 : N.default, N == null ? void 0 : N[tt], (n = f == null ? void 0 : f.classNames) == null ? void 0 : n[tt]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = f.richColors) != null ? r : P,
        "data-styled": !(f.jsx || f.unstyled || x),
        "data-mounted": J,
        "data-promise": !!f.promise,
        "data-swiped": ll,
        "data-removed": Zt,
        "data-visible": Og,
        "data-y-position": Lg,
        "data-x-position": Mg,
        "data-index": v,
        "data-front": Rg,
        "data-swiping": Jt,
        "data-dismissible": dr,
        "data-type": tt,
        "data-invert": Dg,
        "data-swipe-out": en,
        "data-swipe-direction": he,
        "data-expanded": !!(C || T && J),
        style: {
            "--index": v,
            "--toasts-before": v,
            "--z-index": S.length - v,
            "--offset": `${Zt ? al : fr.current}px`,
            "--initial-height": T ? "auto" : `${cr}px`,
            ...L,
            ...f.style
        },
        onDragEnd: () => {
            ur(!1),
            X(null),
            pr.current = null
        }
        ,
        onPointerDown: B => {
            cl || !dr || (mc.current = new Date,
            ao(fr.current),
            B.target.setPointerCapture(B.pointerId),
            B.target.tagName !== "BUTTON" && (ur(!0),
            pr.current = {
                x: B.clientX,
                y: B.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var B, te, se, ut;
            if (en || !dr)
                return;
            pr.current = null;
            let ct = Number(((B = zn.current) == null ? void 0 : B.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , nn = Number(((te = zn.current) == null ? void 0 : te.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , $n = new Date().getTime() - ((se = mc.current) == null ? void 0 : se.getTime())
              , dt = G === "x" ? ct : nn
              , rn = Math.abs(dt) / $n;
            if (Math.abs(dt) >= Sx || rn > .11) {
                ao(fr.current),
                (ut = f.onDismiss) == null || ut.call(f, f),
                ke(G === "x" ? ct > 0 ? "right" : "left" : nn > 0 ? "down" : "up"),
                tn(),
                pi(!0),
                hi(!1);
                return
            }
            ur(!1),
            X(null)
        }
        ,
        onPointerMove: B => {
            var te, se, ut, ct;
            if (!pr.current || !dr || ((te = window.getSelection()) == null ? void 0 : te.toString().length) > 0)
                return;
            let nn = B.clientY - pr.current.y
              , $n = B.clientX - pr.current.x
              , dt = (se = e.swipeDirections) != null ? se : Cx(Q);
            !G && (Math.abs($n) > 1 || Math.abs(nn) > 1) && X(Math.abs($n) > Math.abs(nn) ? "x" : "y");
            let rn = {
                x: 0,
                y: 0
            };
            G === "y" ? (dt.includes("top") || dt.includes("bottom")) && (dt.includes("top") && nn < 0 || dt.includes("bottom") && nn > 0) && (rn.y = nn) : G === "x" && (dt.includes("left") || dt.includes("right")) && (dt.includes("left") && $n < 0 || dt.includes("right") && $n > 0) && (rn.x = $n),
            (Math.abs(rn.x) > 0 || Math.abs(rn.y) > 0) && hi(!0),
            (ut = zn.current) == null || ut.style.setProperty("--swipe-amount-x", `${rn.x}px`),
            (ct = zn.current) == null || ct.style.setProperty("--swipe-amount-y", `${rn.y}px`)
        }
    }, Ag && !f.jsx ? j.createElement("button", {
        "aria-label": W,
        "data-disabled": cl,
        "data-close-button": !0,
        onClick: cl || !dr ? () => {}
        : () => {
            var B;
            tn(),
            (B = f.onDismiss) == null || B.call(f, f)
        }
        ,
        className: pt(N == null ? void 0 : N.closeButton, (o = f == null ? void 0 : f.classNames) == null ? void 0 : o.closeButton)
    }, (i = D == null ? void 0 : D.close) != null ? i : lx) : null, f.jsx || y.isValidElement(f.title) ? f.jsx ? f.jsx : typeof f.title == "function" ? f.title() : f.title : j.createElement(j.Fragment, null, tt || f.icon || f.promise ? j.createElement("div", {
        "data-icon": "",
        className: pt(N == null ? void 0 : N.icon, (s = f == null ? void 0 : f.classNames) == null ? void 0 : s.icon)
    }, f.promise || f.type === "loading" && !f.icon ? f.icon || Ig() : null, f.type !== "loading" ? f.icon || (D == null ? void 0 : D[tt]) || ex(tt) : null) : null, j.createElement("div", {
        "data-content": "",
        className: pt(N == null ? void 0 : N.content, (l = f == null ? void 0 : f.classNames) == null ? void 0 : l.content)
    }, j.createElement("div", {
        "data-title": "",
        className: pt(N == null ? void 0 : N.title, (a = f == null ? void 0 : f.classNames) == null ? void 0 : a.title)
    }, typeof f.title == "function" ? f.title() : f.title), f.description ? j.createElement("div", {
        "data-description": "",
        className: pt(F, jg, N == null ? void 0 : N.description, (u = f == null ? void 0 : f.classNames) == null ? void 0 : u.description)
    }, typeof f.description == "function" ? f.description() : f.description) : null), y.isValidElement(f.cancel) ? f.cancel : f.cancel && Di(f.cancel) ? j.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: f.cancelButtonStyle || A,
        onClick: B => {
            var te, se;
            Di(f.cancel) && dr && ((se = (te = f.cancel).onClick) == null || se.call(te, B),
            tn())
        }
        ,
        className: pt(N == null ? void 0 : N.cancelButton, (c = f == null ? void 0 : f.classNames) == null ? void 0 : c.cancelButton)
    }, f.cancel.label) : null, y.isValidElement(f.action) ? f.action : f.action && Di(f.action) ? j.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: f.actionButtonStyle || $,
        onClick: B => {
            var te, se;
            Di(f.action) && ((se = (te = f.action).onClick) == null || se.call(te, B),
            !B.defaultPrevented && tn())
        }
        ,
        className: pt(N == null ? void 0 : N.actionButton, (d = f == null ? void 0 : f.classNames) == null ? void 0 : d.actionButton)
    }, f.action.label) : null))
}
;
function Vd() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function Px(e, t) {
    let n = {};
    return [e, t].forEach( (r, o) => {
        let i = o === 1
          , s = i ? "--mobile-offset" : "--offset"
          , l = i ? yx : vx;
        function a(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? a(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${s}-${u}`] = l : n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : a(l)
    }
    ),
    n
}
var bx = y.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: o=["altKey", "KeyT"], expand: i, closeButton: s, className: l, offset: a, mobileOffset: u, theme: c="light", richColors: d, duration: p, style: f, visibleToasts: x=gx, toastOptions: g, dir: w=Vd(), gap: m=xx, loadingIcon: h, icons: v, containerAriaLabel: S="Notifications", pauseWhenPageIsHidden: C} = e
      , [k,P] = j.useState([])
      , R = j.useMemo( () => Array.from(new Set([r].concat(k.filter(z => z.position).map(z => z.position)))), [k, r])
      , [L,A] = j.useState([])
      , [$,M] = j.useState(!1)
      , [F,_] = j.useState(!1)
      , [Q,U] = j.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , H = j.useRef(null)
      , T = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , N = j.useRef(null)
      , D = j.useRef(!1)
      , W = j.useCallback(z => {
        P(G => {
            var X;
            return (X = G.find(he => he.id === z.id)) != null && X.delete || ze.dismiss(z.id),
            G.filter( ({id: he}) => he !== z.id)
        }
        )
    }
    , []);
    return j.useEffect( () => ze.subscribe(z => {
        if (z.dismiss) {
            P(G => G.map(X => X.id === z.id ? {
                ...X,
                delete: !0
            } : X));
            return
        }
        setTimeout( () => {
            Uh.flushSync( () => {
                P(G => {
                    let X = G.findIndex(he => he.id === z.id);
                    return X !== -1 ? [...G.slice(0, X), {
                        ...G[X],
                        ...z
                    }, ...G.slice(X + 1)] : [z, ...G]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    j.useEffect( () => {
        if (c !== "system") {
            U(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? U("dark") : U("light")),
        typeof window > "u")
            return;
        let z = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            z.addEventListener("change", ({matches: G}) => {
                U(G ? "dark" : "light")
            }
            )
        } catch {
            z.addListener( ({matches: X}) => {
                try {
                    U(X ? "dark" : "light")
                } catch (he) {
                    console.error(he)
                }
            }
            )
        }
    }
    , [c]),
    j.useEffect( () => {
        k.length <= 1 && M(!1)
    }
    , [k]),
    j.useEffect( () => {
        let z = G => {
            var X, he;
            o.every(ke => G[ke] || G.code === ke) && (M(!0),
            (X = H.current) == null || X.focus()),
            G.code === "Escape" && (document.activeElement === H.current || (he = H.current) != null && he.contains(document.activeElement)) && M(!1)
        }
        ;
        return document.addEventListener("keydown", z),
        () => document.removeEventListener("keydown", z)
    }
    , [o]),
    j.useEffect( () => {
        if (H.current)
            return () => {
                N.current && (N.current.focus({
                    preventScroll: !0
                }),
                N.current = null,
                D.current = !1)
            }
    }
    , [H.current]),
    j.createElement("section", {
        ref: t,
        "aria-label": `${S} ${T}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, R.map( (z, G) => {
        var X;
        let[he,ke] = z.split("-");
        return k.length ? j.createElement("ol", {
            key: z,
            dir: w === "auto" ? Vd() : w,
            tabIndex: -1,
            ref: H,
            className: l,
            "data-sonner-toaster": !0,
            "data-theme": Q,
            "data-y-position": he,
            "data-lifted": $ && k.length > 1 && !i,
            "data-x-position": ke,
            style: {
                "--front-toast-height": `${((X = L[0]) == null ? void 0 : X.height) || 0}px`,
                "--width": `${wx}px`,
                "--gap": `${m}px`,
                ...f,
                ...Px(a, u)
            },
            onBlur: J => {
                D.current && !J.currentTarget.contains(J.relatedTarget) && (D.current = !1,
                N.current && (N.current.focus({
                    preventScroll: !0
                }),
                N.current = null))
            }
            ,
            onFocus: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || D.current || (D.current = !0,
                N.current = J.relatedTarget)
            }
            ,
            onMouseEnter: () => M(!0),
            onMouseMove: () => M(!0),
            onMouseLeave: () => {
                F || M(!1)
            }
            ,
            onDragEnd: () => M(!1),
            onPointerDown: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || _(!0)
            }
            ,
            onPointerUp: () => _(!1)
        }, k.filter(J => !J.position && G === 0 || J.position === z).map( (J, ar) => {
            var Zt, Fn;
            return j.createElement(kx, {
                key: J.id,
                icons: v,
                index: ar,
                toast: J,
                defaultRichColors: d,
                duration: (Zt = g == null ? void 0 : g.duration) != null ? Zt : p,
                className: g == null ? void 0 : g.className,
                descriptionClassName: g == null ? void 0 : g.descriptionClassName,
                invert: n,
                visibleToasts: x,
                closeButton: (Fn = g == null ? void 0 : g.closeButton) != null ? Fn : s,
                interacting: F,
                position: z,
                style: g == null ? void 0 : g.style,
                unstyled: g == null ? void 0 : g.unstyled,
                classNames: g == null ? void 0 : g.classNames,
                cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                removeToast: W,
                toasts: k.filter(Jt => Jt.position == J.position),
                heights: L.filter(Jt => Jt.position == J.position),
                setHeights: A,
                expandByDefault: i,
                gap: m,
                loadingIcon: h,
                expanded: $,
                pauseWhenPageIsHidden: C,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const Tx = ({...e}) => {
    const {theme: t="system"} = Jw();
    return E.jsx(bx, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
  , Nx = ["top", "right", "bottom", "left"]
  , An = Math.min
  , Ke = Math.max
  , Ps = Math.round
  , Ii = Math.floor
  , Lt = e => ({
    x: e,
    y: e
})
  , Rx = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , Ox = {
    start: "end",
    end: "start"
};
function Wa(e, t, n) {
    return Ke(e, An(t, n))
}
function Yt(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Xt(e) {
    return e.split("-")[0]
}
function so(e) {
    return e.split("-")[1]
}
function tc(e) {
    return e === "x" ? "y" : "x"
}
function nc(e) {
    return e === "y" ? "height" : "width"
}
const _x = new Set(["top", "bottom"]);
function _t(e) {
    return _x.has(Xt(e)) ? "y" : "x"
}
function rc(e) {
    return tc(_t(e))
}
function jx(e, t, n) {
    n === void 0 && (n = !1);
    const r = so(e)
      , o = rc(e)
      , i = nc(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = bs(s)),
    [s, bs(s)]
}
function Ax(e) {
    const t = bs(e);
    return [Qa(e), t, Qa(t)]
}
function Qa(e) {
    return e.replace(/start|end/g, t => Ox[t])
}
const Hd = ["left", "right"]
  , Wd = ["right", "left"]
  , Lx = ["top", "bottom"]
  , Mx = ["bottom", "top"];
function Dx(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? Wd : Hd : t ? Hd : Wd;
    case "left":
    case "right":
        return t ? Lx : Mx;
    default:
        return []
    }
}
function Ix(e, t, n, r) {
    const o = so(e);
    let i = Dx(Xt(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o),
    t && (i = i.concat(i.map(Qa)))),
    i
}
function bs(e) {
    return e.replace(/left|right|bottom|top/g, t => Rx[t])
}
function Fx(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Om(e) {
    return typeof e != "number" ? Fx(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Ts(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function Qd(e, t, n) {
    let {reference: r, floating: o} = e;
    const i = _t(t)
      , s = rc(t)
      , l = nc(s)
      , a = Xt(t)
      , u = i === "y"
      , c = r.x + r.width / 2 - o.width / 2
      , d = r.y + r.height / 2 - o.height / 2
      , p = r[l] / 2 - o[l] / 2;
    let f;
    switch (a) {
    case "top":
        f = {
            x: c,
            y: r.y - o.height
        };
        break;
    case "bottom":
        f = {
            x: c,
            y: r.y + r.height
        };
        break;
    case "right":
        f = {
            x: r.x + r.width,
            y: d
        };
        break;
    case "left":
        f = {
            x: r.x - o.width,
            y: d
        };
        break;
    default:
        f = {
            x: r.x,
            y: r.y
        }
    }
    switch (so(t)) {
    case "start":
        f[s] -= p * (n && u ? -1 : 1);
        break;
    case "end":
        f[s] += p * (n && u ? -1 : 1);
        break
    }
    return f
}
const zx = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: s} = n
      , l = i.filter(Boolean)
      , a = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: c, y: d} = Qd(u, r, a)
      , p = r
      , f = {}
      , x = 0;
    for (let g = 0; g < l.length; g++) {
        const {name: w, fn: m} = l[g]
          , {x: h, y: v, data: S, reset: C} = await m({
            x: c,
            y: d,
            initialPlacement: r,
            placement: p,
            strategy: o,
            middlewareData: f,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = h ?? c,
        d = v ?? d,
        f = {
            ...f,
            [w]: {
                ...f[w],
                ...S
            }
        },
        C && x <= 50 && (x++,
        typeof C == "object" && (C.placement && (p = C.placement),
        C.rects && (u = C.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects),
        {x: c, y: d} = Qd(u, p, a)),
        g = -1)
    }
    return {
        x: c,
        y: d,
        placement: p,
        strategy: o,
        middlewareData: f
    }
}
;
async function Zo(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: i, rects: s, elements: l, strategy: a} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: d="floating", altBoundary: p=!1, padding: f=0} = Yt(t, e)
      , x = Om(f)
      , w = l[p ? d === "floating" ? "reference" : "floating" : d]
      , m = Ts(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: a
    }))
      , h = d === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference
      , v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating))
      , S = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , C = Ts(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: l,
        rect: h,
        offsetParent: v,
        strategy: a
    }) : h);
    return {
        top: (m.top - C.top + x.top) / S.y,
        bottom: (C.bottom - m.bottom + x.bottom) / S.y,
        left: (m.left - C.left + x.left) / S.x,
        right: (C.right - m.right + x.right) / S.x
    }
}
const $x = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: i, platform: s, elements: l, middlewareData: a} = t
          , {element: u, padding: c=0} = Yt(e, t) || {};
        if (u == null)
            return {};
        const d = Om(c)
          , p = {
            x: n,
            y: r
        }
          , f = rc(o)
          , x = nc(f)
          , g = await s.getDimensions(u)
          , w = f === "y"
          , m = w ? "top" : "left"
          , h = w ? "bottom" : "right"
          , v = w ? "clientHeight" : "clientWidth"
          , S = i.reference[x] + i.reference[f] - p[f] - i.floating[x]
          , C = p[f] - i.reference[f]
          , k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
        let P = k ? k[v] : 0;
        (!P || !await (s.isElement == null ? void 0 : s.isElement(k))) && (P = l.floating[v] || i.floating[x]);
        const R = S / 2 - C / 2
          , L = P / 2 - g[x] / 2 - 1
          , A = An(d[m], L)
          , $ = An(d[h], L)
          , M = A
          , F = P - g[x] - $
          , _ = P / 2 - g[x] / 2 + R
          , Q = Wa(M, _, F)
          , U = !a.arrow && so(o) != null && _ !== Q && i.reference[x] / 2 - (_ < M ? A : $) - g[x] / 2 < 0
          , H = U ? _ < M ? _ - M : _ - F : 0;
        return {
            [f]: p[f] + H,
            data: {
                [f]: Q,
                centerOffset: _ - Q - H,
                ...U && {
                    alignmentOffset: H
                }
            },
            reset: U
        }
    }
})
  , Ux = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: i, rects: s, initialPlacement: l, platform: a, elements: u} = t
              , {mainAxis: c=!0, crossAxis: d=!0, fallbackPlacements: p, fallbackStrategy: f="bestFit", fallbackAxisSideDirection: x="none", flipAlignment: g=!0, ...w} = Yt(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            const m = Xt(o)
              , h = _t(l)
              , v = Xt(l) === l
              , S = await (a.isRTL == null ? void 0 : a.isRTL(u.floating))
              , C = p || (v || !g ? [bs(l)] : Ax(l))
              , k = x !== "none";
            !p && k && C.push(...Ix(l, g, x, S));
            const P = [l, ...C]
              , R = await Zo(t, w)
              , L = [];
            let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (c && L.push(R[m]),
            d) {
                const _ = jx(o, s, S);
                L.push(R[_[0]], R[_[1]])
            }
            if (A = [...A, {
                placement: o,
                overflows: L
            }],
            !L.every(_ => _ <= 0)) {
                var $, M;
                const _ = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1
                  , Q = P[_];
                if (Q && (!(d === "alignment" ? h !== _t(Q) : !1) || A.every(T => T.overflows[0] > 0 && _t(T.placement) === h)))
                    return {
                        data: {
                            index: _,
                            overflows: A
                        },
                        reset: {
                            placement: Q
                        }
                    };
                let U = (M = A.filter(H => H.overflows[0] <= 0).sort( (H, T) => H.overflows[1] - T.overflows[1])[0]) == null ? void 0 : M.placement;
                if (!U)
                    switch (f) {
                    case "bestFit":
                        {
                            var F;
                            const H = (F = A.filter(T => {
                                if (k) {
                                    const N = _t(T.placement);
                                    return N === h || N === "y"
                                }
                                return !0
                            }
                            ).map(T => [T.placement, T.overflows.filter(N => N > 0).reduce( (N, D) => N + D, 0)]).sort( (T, N) => T[1] - N[1])[0]) == null ? void 0 : F[0];
                            H && (U = H);
                            break
                        }
                    case "initialPlacement":
                        U = l;
                        break
                    }
                if (o !== U)
                    return {
                        reset: {
                            placement: U
                        }
                    }
            }
            return {}
        }
    }
};
function Kd(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Gd(e) {
    return Nx.some(t => e[t] >= 0)
}
const Bx = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = Yt(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const i = await Zo(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , s = Kd(i, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: s,
                            referenceHidden: Gd(s)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await Zo(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , s = Kd(i, n.floating);
                    return {
                        data: {
                            escapedOffsets: s,
                            escaped: Gd(s)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , _m = new Set(["left", "top"]);
async function Vx(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , s = Xt(n)
      , l = so(n)
      , a = _t(n) === "y"
      , u = _m.has(s) ? -1 : 1
      , c = i && a ? -1 : 1
      , d = Yt(t, e);
    let {mainAxis: p, crossAxis: f, alignmentAxis: x} = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return l && typeof x == "number" && (f = l === "end" ? x * -1 : x),
    a ? {
        x: f * c,
        y: p * u
    } : {
        x: p * u,
        y: f * c
    }
}
const Hx = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: i, placement: s, middlewareData: l} = t
              , a = await Vx(t, e);
            return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
                x: o + a.x,
                y: i + a.y,
                data: {
                    ...a,
                    placement: s
                }
            }
        }
    }
}
  , Wx = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: i=!0, crossAxis: s=!1, limiter: l={
                fn: w => {
                    let {x: m, y: h} = w;
                    return {
                        x: m,
                        y: h
                    }
                }
            }, ...a} = Yt(e, t)
              , u = {
                x: n,
                y: r
            }
              , c = await Zo(t, a)
              , d = _t(Xt(o))
              , p = tc(d);
            let f = u[p]
              , x = u[d];
            if (i) {
                const w = p === "y" ? "top" : "left"
                  , m = p === "y" ? "bottom" : "right"
                  , h = f + c[w]
                  , v = f - c[m];
                f = Wa(h, f, v)
            }
            if (s) {
                const w = d === "y" ? "top" : "left"
                  , m = d === "y" ? "bottom" : "right"
                  , h = x + c[w]
                  , v = x - c[m];
                x = Wa(h, x, v)
            }
            const g = l.fn({
                ...t,
                [p]: f,
                [d]: x
            });
            return {
                ...g,
                data: {
                    x: g.x - n,
                    y: g.y - r,
                    enabled: {
                        [p]: i,
                        [d]: s
                    }
                }
            }
        }
    }
}
  , Qx = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: i, middlewareData: s} = t
              , {offset: l=0, mainAxis: a=!0, crossAxis: u=!0} = Yt(e, t)
              , c = {
                x: n,
                y: r
            }
              , d = _t(o)
              , p = tc(d);
            let f = c[p]
              , x = c[d];
            const g = Yt(l, t)
              , w = typeof g == "number" ? {
                mainAxis: g,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...g
            };
            if (a) {
                const v = p === "y" ? "height" : "width"
                  , S = i.reference[p] - i.floating[v] + w.mainAxis
                  , C = i.reference[p] + i.reference[v] - w.mainAxis;
                f < S ? f = S : f > C && (f = C)
            }
            if (u) {
                var m, h;
                const v = p === "y" ? "width" : "height"
                  , S = _m.has(Xt(o))
                  , C = i.reference[d] - i.floating[v] + (S && ((m = s.offset) == null ? void 0 : m[d]) || 0) + (S ? 0 : w.crossAxis)
                  , k = i.reference[d] + i.reference[v] + (S ? 0 : ((h = s.offset) == null ? void 0 : h[d]) || 0) - (S ? w.crossAxis : 0);
                x < C ? x = C : x > k && (x = k)
            }
            return {
                [p]: f,
                [d]: x
            }
        }
    }
}
  , Kx = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: i, platform: s, elements: l} = t
              , {apply: a= () => {}
            , ...u} = Yt(e, t)
              , c = await Zo(t, u)
              , d = Xt(o)
              , p = so(o)
              , f = _t(o) === "y"
              , {width: x, height: g} = i.floating;
            let w, m;
            d === "top" || d === "bottom" ? (w = d,
            m = p === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (m = d,
            w = p === "end" ? "top" : "bottom");
            const h = g - c.top - c.bottom
              , v = x - c.left - c.right
              , S = An(g - c[w], h)
              , C = An(x - c[m], v)
              , k = !t.middlewareData.shift;
            let P = S
              , R = C;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (R = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (P = h),
            k && !p) {
                const A = Ke(c.left, 0)
                  , $ = Ke(c.right, 0)
                  , M = Ke(c.top, 0)
                  , F = Ke(c.bottom, 0);
                f ? R = x - 2 * (A !== 0 || $ !== 0 ? A + $ : Ke(c.left, c.right)) : P = g - 2 * (M !== 0 || F !== 0 ? M + F : Ke(c.top, c.bottom))
            }
            await a({
                ...t,
                availableWidth: R,
                availableHeight: P
            });
            const L = await s.getDimensions(l.floating);
            return x !== L.width || g !== L.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Xs() {
    return typeof window < "u"
}
function lo(e) {
    return jm(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function Xe(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Dt(e) {
    var t;
    return (t = (jm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function jm(e) {
    return Xs() ? e instanceof Node || e instanceof Xe(e).Node : !1
}
function Ct(e) {
    return Xs() ? e instanceof Element || e instanceof Xe(e).Element : !1
}
function Mt(e) {
    return Xs() ? e instanceof HTMLElement || e instanceof Xe(e).HTMLElement : !1
}
function Yd(e) {
    return !Xs() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Xe(e).ShadowRoot
}
const Gx = new Set(["inline", "contents"]);
function fi(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = kt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Gx.has(o)
}
const Yx = new Set(["table", "td", "th"]);
function Xx(e) {
    return Yx.has(lo(e))
}
const qx = [":popover-open", ":modal"];
function qs(e) {
    return qx.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const Zx = ["transform", "translate", "scale", "rotate", "perspective"]
  , Jx = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , e1 = ["paint", "layout", "strict", "content"];
function oc(e) {
    const t = ic()
      , n = Ct(e) ? kt(e) : e;
    return Zx.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Jx.some(r => (n.willChange || "").includes(r)) || e1.some(r => (n.contain || "").includes(r))
}
function t1(e) {
    let t = Ln(e);
    for (; Mt(t) && !Jr(t); ) {
        if (oc(t))
            return t;
        if (qs(t))
            return null;
        t = Ln(t)
    }
    return null
}
function ic() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const n1 = new Set(["html", "body", "#document"]);
function Jr(e) {
    return n1.has(lo(e))
}
function kt(e) {
    return Xe(e).getComputedStyle(e)
}
function Zs(e) {
    return Ct(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Ln(e) {
    if (lo(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Yd(e) && e.host || Dt(e);
    return Yd(t) ? t.host : t
}
function Am(e) {
    const t = Ln(e);
    return Jr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Mt(t) && fi(t) ? t : Am(t)
}
function Jo(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = Am(e)
      , i = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , s = Xe(o);
    if (i) {
        const l = Ka(s);
        return t.concat(s, s.visualViewport || [], fi(o) ? o : [], l && n ? Jo(l) : [])
    }
    return t.concat(o, Jo(o, [], n))
}
function Ka(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Lm(e) {
    const t = kt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = Mt(e)
      , i = o ? e.offsetWidth : n
      , s = o ? e.offsetHeight : r
      , l = Ps(n) !== i || Ps(r) !== s;
    return l && (n = i,
    r = s),
    {
        width: n,
        height: r,
        $: l
    }
}
function sc(e) {
    return Ct(e) ? e : e.contextElement
}
function Dr(e) {
    const t = sc(e);
    if (!Mt(t))
        return Lt(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: i} = Lm(t);
    let s = (i ? Ps(n.width) : n.width) / r
      , l = (i ? Ps(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    {
        x: s,
        y: l
    }
}
const r1 = Lt(0);
function Mm(e) {
    const t = Xe(e);
    return !ic() || !t.visualViewport ? r1 : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function o1(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== Xe(e) ? !1 : t
}
function ir(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , i = sc(e);
    let s = Lt(1);
    t && (r ? Ct(r) && (s = Dr(r)) : s = Dr(e));
    const l = o1(i, n, r) ? Mm(i) : Lt(0);
    let a = (o.left + l.x) / s.x
      , u = (o.top + l.y) / s.y
      , c = o.width / s.x
      , d = o.height / s.y;
    if (i) {
        const p = Xe(i)
          , f = r && Ct(r) ? Xe(r) : r;
        let x = p
          , g = Ka(x);
        for (; g && r && f !== x; ) {
            const w = Dr(g)
              , m = g.getBoundingClientRect()
              , h = kt(g)
              , v = m.left + (g.clientLeft + parseFloat(h.paddingLeft)) * w.x
              , S = m.top + (g.clientTop + parseFloat(h.paddingTop)) * w.y;
            a *= w.x,
            u *= w.y,
            c *= w.x,
            d *= w.y,
            a += v,
            u += S,
            x = Xe(g),
            g = Ka(x)
        }
    }
    return Ts({
        width: c,
        height: d,
        x: a,
        y: u
    })
}
function lc(e, t) {
    const n = Zs(e).scrollLeft;
    return t ? t.left + n : ir(Dt(e)).left + n
}
function Dm(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , o = r.left + t.scrollLeft - (n ? 0 : lc(e, r))
      , i = r.top + t.scrollTop;
    return {
        x: o,
        y: i
    }
}
function i1(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const i = o === "fixed"
      , s = Dt(r)
      , l = t ? qs(t.floating) : !1;
    if (r === s || l && i)
        return n;
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = Lt(1);
    const c = Lt(0)
      , d = Mt(r);
    if ((d || !d && !i) && ((lo(r) !== "body" || fi(s)) && (a = Zs(r)),
    Mt(r))) {
        const f = ir(r);
        u = Dr(r),
        c.x = f.x + r.clientLeft,
        c.y = f.y + r.clientTop
    }
    const p = s && !d && !i ? Dm(s, a, !0) : Lt(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - a.scrollLeft * u.x + c.x + p.x,
        y: n.y * u.y - a.scrollTop * u.y + c.y + p.y
    }
}
function s1(e) {
    return Array.from(e.getClientRects())
}
function l1(e) {
    const t = Dt(e)
      , n = Zs(e)
      , r = e.ownerDocument.body
      , o = Ke(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , i = Ke(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + lc(e);
    const l = -n.scrollTop;
    return kt(r).direction === "rtl" && (s += Ke(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: i,
        x: s,
        y: l
    }
}
function a1(e, t) {
    const n = Xe(e)
      , r = Dt(e)
      , o = n.visualViewport;
    let i = r.clientWidth
      , s = r.clientHeight
      , l = 0
      , a = 0;
    if (o) {
        i = o.width,
        s = o.height;
        const u = ic();
        (!u || u && t === "fixed") && (l = o.offsetLeft,
        a = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: l,
        y: a
    }
}
const u1 = new Set(["absolute", "fixed"]);
function c1(e, t) {
    const n = ir(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , i = Mt(e) ? Dr(e) : Lt(1)
      , s = e.clientWidth * i.x
      , l = e.clientHeight * i.y
      , a = o * i.x
      , u = r * i.y;
    return {
        width: s,
        height: l,
        x: a,
        y: u
    }
}
function Xd(e, t, n) {
    let r;
    if (t === "viewport")
        r = a1(e, n);
    else if (t === "document")
        r = l1(Dt(e));
    else if (Ct(t))
        r = c1(t, n);
    else {
        const o = Mm(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return Ts(r)
}
function Im(e, t) {
    const n = Ln(e);
    return n === t || !Ct(n) || Jr(n) ? !1 : kt(n).position === "fixed" || Im(n, t)
}
function d1(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Jo(e, [], !1).filter(l => Ct(l) && lo(l) !== "body")
      , o = null;
    const i = kt(e).position === "fixed";
    let s = i ? Ln(e) : e;
    for (; Ct(s) && !Jr(s); ) {
        const l = kt(s)
          , a = oc(s);
        !a && l.position === "fixed" && (o = null),
        (i ? !a && !o : !a && l.position === "static" && !!o && u1.has(o.position) || fi(s) && !a && Im(e, s)) ? r = r.filter(c => c !== s) : o = l,
        s = Ln(s)
    }
    return t.set(e, r),
    r
}
function f1(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const s = [...n === "clippingAncestors" ? qs(t) ? [] : d1(t, this._c) : [].concat(n), r]
      , l = s[0]
      , a = s.reduce( (u, c) => {
        const d = Xd(t, c, o);
        return u.top = Ke(d.top, u.top),
        u.right = An(d.right, u.right),
        u.bottom = An(d.bottom, u.bottom),
        u.left = Ke(d.left, u.left),
        u
    }
    , Xd(t, l, o));
    return {
        width: a.right - a.left,
        height: a.bottom - a.top,
        x: a.left,
        y: a.top
    }
}
function p1(e) {
    const {width: t, height: n} = Lm(e);
    return {
        width: t,
        height: n
    }
}
function h1(e, t, n) {
    const r = Mt(t)
      , o = Dt(t)
      , i = n === "fixed"
      , s = ir(e, !0, i, t);
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = Lt(0);
    function u() {
        a.x = lc(o)
    }
    if (r || !r && !i)
        if ((lo(t) !== "body" || fi(o)) && (l = Zs(t)),
        r) {
            const f = ir(t, !0, i, t);
            a.x = f.x + t.clientLeft,
            a.y = f.y + t.clientTop
        } else
            o && u();
    i && !r && o && u();
    const c = o && !r && !i ? Dm(o, l) : Lt(0)
      , d = s.left + l.scrollLeft - a.x - c.x
      , p = s.top + l.scrollTop - a.y - c.y;
    return {
        x: d,
        y: p,
        width: s.width,
        height: s.height
    }
}
function Bl(e) {
    return kt(e).position === "static"
}
function qd(e, t) {
    if (!Mt(e) || kt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return Dt(e) === n && (n = n.ownerDocument.body),
    n
}
function Fm(e, t) {
    const n = Xe(e);
    if (qs(e))
        return n;
    if (!Mt(e)) {
        let o = Ln(e);
        for (; o && !Jr(o); ) {
            if (Ct(o) && !Bl(o))
                return o;
            o = Ln(o)
        }
        return n
    }
    let r = qd(e, t);
    for (; r && Xx(r) && Bl(r); )
        r = qd(r, t);
    return r && Jr(r) && Bl(r) && !oc(r) ? n : r || t1(e) || n
}
const m1 = async function(e) {
    const t = this.getOffsetParent || Fm
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: h1(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function g1(e) {
    return kt(e).direction === "rtl"
}
const v1 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: i1,
    getDocumentElement: Dt,
    getClippingRect: f1,
    getOffsetParent: Fm,
    getElementRects: m1,
    getClientRects: s1,
    getDimensions: p1,
    getScale: Dr,
    isElement: Ct,
    isRTL: g1
};
function zm(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function y1(e, t) {
    let n = null, r;
    const o = Dt(e);
    function i() {
        var l;
        clearTimeout(r),
        (l = n) == null || l.disconnect(),
        n = null
    }
    function s(l, a) {
        l === void 0 && (l = !1),
        a === void 0 && (a = 1),
        i();
        const u = e.getBoundingClientRect()
          , {left: c, top: d, width: p, height: f} = u;
        if (l || t(),
        !p || !f)
            return;
        const x = Ii(d)
          , g = Ii(o.clientWidth - (c + p))
          , w = Ii(o.clientHeight - (d + f))
          , m = Ii(c)
          , v = {
            rootMargin: -x + "px " + -g + "px " + -w + "px " + -m + "px",
            threshold: Ke(0, An(1, a)) || 1
        };
        let S = !0;
        function C(k) {
            const P = k[0].intersectionRatio;
            if (P !== a) {
                if (!S)
                    return s();
                P ? s(!1, P) : r = setTimeout( () => {
                    s(!1, 1e-7)
                }
                , 1e3)
            }
            P === 1 && !zm(u, e.getBoundingClientRect()) && s(),
            S = !1
        }
        try {
            n = new IntersectionObserver(C,{
                ...v,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(C,v)
        }
        n.observe(e)
    }
    return s(!0),
    i
}
function w1(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: i=!0, elementResize: s=typeof ResizeObserver == "function", layoutShift: l=typeof IntersectionObserver == "function", animationFrame: a=!1} = r
      , u = sc(e)
      , c = o || i ? [...u ? Jo(u) : [], ...Jo(t)] : [];
    c.forEach(m => {
        o && m.addEventListener("scroll", n, {
            passive: !0
        }),
        i && m.addEventListener("resize", n)
    }
    );
    const d = u && l ? y1(u, n) : null;
    let p = -1
      , f = null;
    s && (f = new ResizeObserver(m => {
        let[h] = m;
        h && h.target === u && f && (f.unobserve(t),
        cancelAnimationFrame(p),
        p = requestAnimationFrame( () => {
            var v;
            (v = f) == null || v.observe(t)
        }
        )),
        n()
    }
    ),
    u && !a && f.observe(u),
    f.observe(t));
    let x, g = a ? ir(e) : null;
    a && w();
    function w() {
        const m = ir(e);
        g && !zm(g, m) && n(),
        g = m,
        x = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var m;
        c.forEach(h => {
            o && h.removeEventListener("scroll", n),
            i && h.removeEventListener("resize", n)
        }
        ),
        d == null || d(),
        (m = f) == null || m.disconnect(),
        f = null,
        a && cancelAnimationFrame(x)
    }
}
const x1 = Hx
  , S1 = Wx
  , E1 = Ux
  , C1 = Kx
  , k1 = Bx
  , Zd = $x
  , P1 = Qx
  , b1 = (e, t, n) => {
    const r = new Map
      , o = {
        platform: v1,
        ...n
    }
      , i = {
        ...o.platform,
        _c: r
    };
    return zx(e, t, {
        ...o,
        platform: i
    })
}
;
var T1 = typeof document < "u"
  , N1 = function() {}
  , Ji = T1 ? y.useLayoutEffect : N1;
function Ns(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Ns(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !Ns(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function $m(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Jd(e, t) {
    const n = $m(e);
    return Math.round(t * n) / n
}
function Vl(e) {
    const t = y.useRef(e);
    return Ji( () => {
        t.current = e
    }
    ),
    t
}
function R1(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: i, floating: s}={}, transform: l=!0, whileElementsMounted: a, open: u} = e
      , [c,d] = y.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [p,f] = y.useState(r);
    Ns(p, r) || f(r);
    const [x,g] = y.useState(null)
      , [w,m] = y.useState(null)
      , h = y.useCallback(T => {
        T !== k.current && (k.current = T,
        g(T))
    }
    , [])
      , v = y.useCallback(T => {
        T !== P.current && (P.current = T,
        m(T))
    }
    , [])
      , S = i || x
      , C = s || w
      , k = y.useRef(null)
      , P = y.useRef(null)
      , R = y.useRef(c)
      , L = a != null
      , A = Vl(a)
      , $ = Vl(o)
      , M = Vl(u)
      , F = y.useCallback( () => {
        if (!k.current || !P.current)
            return;
        const T = {
            placement: t,
            strategy: n,
            middleware: p
        };
        $.current && (T.platform = $.current),
        b1(k.current, P.current, T).then(N => {
            const D = {
                ...N,
                isPositioned: M.current !== !1
            };
            _.current && !Ns(R.current, D) && (R.current = D,
            ui.flushSync( () => {
                d(D)
            }
            ))
        }
        )
    }
    , [p, t, n, $, M]);
    Ji( () => {
        u === !1 && R.current.isPositioned && (R.current.isPositioned = !1,
        d(T => ({
            ...T,
            isPositioned: !1
        })))
    }
    , [u]);
    const _ = y.useRef(!1);
    Ji( () => (_.current = !0,
    () => {
        _.current = !1
    }
    ), []),
    Ji( () => {
        if (S && (k.current = S),
        C && (P.current = C),
        S && C) {
            if (A.current)
                return A.current(S, C, F);
            F()
        }
    }
    , [S, C, F, A, L]);
    const Q = y.useMemo( () => ({
        reference: k,
        floating: P,
        setReference: h,
        setFloating: v
    }), [h, v])
      , U = y.useMemo( () => ({
        reference: S,
        floating: C
    }), [S, C])
      , H = y.useMemo( () => {
        const T = {
            position: n,
            left: 0,
            top: 0
        };
        if (!U.floating)
            return T;
        const N = Jd(U.floating, c.x)
          , D = Jd(U.floating, c.y);
        return l ? {
            ...T,
            transform: "translate(" + N + "px, " + D + "px)",
            ...$m(U.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: N,
            top: D
        }
    }
    , [n, l, U.floating, c.x, c.y]);
    return y.useMemo( () => ({
        ...c,
        update: F,
        refs: Q,
        elements: U,
        floatingStyles: H
    }), [c, F, Q, U, H])
}
const O1 = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Zd({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? Zd({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , _1 = (e, t) => ({
    ...x1(e),
    options: [e, t]
})
  , j1 = (e, t) => ({
    ...S1(e),
    options: [e, t]
})
  , A1 = (e, t) => ({
    ...P1(e),
    options: [e, t]
})
  , L1 = (e, t) => ({
    ...E1(e),
    options: [e, t]
})
  , M1 = (e, t) => ({
    ...C1(e),
    options: [e, t]
})
  , D1 = (e, t) => ({
    ...k1(e),
    options: [e, t]
})
  , I1 = (e, t) => ({
    ...O1(e),
    options: [e, t]
});
var F1 = "Arrow"
  , Um = y.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...i} = e;
    return E.jsx(je.svg, {
        ...i,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : E.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Um.displayName = F1;
var z1 = Um;
function Bm(e) {
    const [t,n] = y.useState(void 0);
    return jn( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const i = o[0];
                let s, l;
                if ("borderBoxSize"in i) {
                    const a = i.borderBoxSize
                      , u = Array.isArray(a) ? a[0] : a;
                    s = u.inlineSize,
                    l = u.blockSize
                } else
                    s = e.offsetWidth,
                    l = e.offsetHeight;
                n({
                    width: s,
                    height: l
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var Vm = "Popper"
  , [Hm,Wm] = ci(Vm)
  , [nC,Qm] = Hm(Vm)
  , Km = "PopperAnchor"
  , Gm = y.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , i = Qm(Km, n)
      , s = y.useRef(null)
      , l = Ze(t, s);
    return y.useEffect( () => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
    }
    ),
    r ? null : E.jsx(je.div, {
        ...o,
        ref: l
    })
}
);
Gm.displayName = Km;
var ac = "PopperContent"
  , [$1,U1] = Hm(ac)
  , Ym = y.forwardRef( (e, t) => {
    var J, ar, Zt, Fn, Jt, ur;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: i="center", alignOffset: s=0, arrowPadding: l=0, avoidCollisions: a=!0, collisionBoundary: u=[], collisionPadding: c=0, sticky: d="partial", hideWhenDetached: p=!1, updatePositionStrategy: f="optimized", onPlaced: x, ...g} = e
      , w = Qm(ac, n)
      , [m,h] = y.useState(null)
      , v = Ze(t, en => h(en))
      , [S,C] = y.useState(null)
      , k = Bm(S)
      , P = (k == null ? void 0 : k.width) ?? 0
      , R = (k == null ? void 0 : k.height) ?? 0
      , L = r + (i !== "center" ? "-" + i : "")
      , A = typeof c == "number" ? c : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...c
    }
      , $ = Array.isArray(u) ? u : [u]
      , M = $.length > 0
      , F = {
        padding: A,
        boundary: $.filter(V1),
        altBoundary: M
    }
      , {refs: _, floatingStyles: Q, placement: U, isPositioned: H, middlewareData: T} = R1({
        strategy: "fixed",
        placement: L,
        whileElementsMounted: (...en) => w1(...en, {
            animationFrame: f === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [_1({
            mainAxis: o + R,
            alignmentAxis: s
        }), a && j1({
            mainAxis: !0,
            crossAxis: !1,
            limiter: d === "partial" ? A1() : void 0,
            ...F
        }), a && L1({
            ...F
        }), M1({
            ...F,
            apply: ({elements: en, rects: pi, availableWidth: ll, availableHeight: hi}) => {
                const {width: al, height: ao} = pi.reference
                  , cr = en.floating.style;
                cr.setProperty("--radix-popper-available-width", `${ll}px`),
                cr.setProperty("--radix-popper-available-height", `${hi}px`),
                cr.setProperty("--radix-popper-anchor-width", `${al}px`),
                cr.setProperty("--radix-popper-anchor-height", `${ao}px`)
            }
        }), S && I1({
            element: S,
            padding: l
        }), H1({
            arrowWidth: P,
            arrowHeight: R
        }), p && D1({
            strategy: "referenceHidden",
            ...F
        })]
    })
      , [N,D] = Zm(U)
      , W = _n(x);
    jn( () => {
        H && (W == null || W())
    }
    , [H, W]);
    const z = (J = T.arrow) == null ? void 0 : J.x
      , G = (ar = T.arrow) == null ? void 0 : ar.y
      , X = ((Zt = T.arrow) == null ? void 0 : Zt.centerOffset) !== 0
      , [he,ke] = y.useState();
    return jn( () => {
        m && ke(window.getComputedStyle(m).zIndex)
    }
    , [m]),
    E.jsx("div", {
        ref: _.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...Q,
            transform: H ? Q.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: he,
            "--radix-popper-transform-origin": [(Fn = T.transformOrigin) == null ? void 0 : Fn.x, (Jt = T.transformOrigin) == null ? void 0 : Jt.y].join(" "),
            ...((ur = T.hide) == null ? void 0 : ur.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: E.jsx($1, {
            scope: n,
            placedSide: N,
            onArrowChange: C,
            arrowX: z,
            arrowY: G,
            shouldHideArrow: X,
            children: E.jsx(je.div, {
                "data-side": N,
                "data-align": D,
                ...g,
                ref: v,
                style: {
                    ...g.style,
                    animation: H ? void 0 : "none"
                }
            })
        })
    })
}
);
Ym.displayName = ac;
var Xm = "PopperArrow"
  , B1 = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , qm = y.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , i = U1(Xm, r)
      , s = B1[i.placedSide];
    return E.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [s]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: E.jsx(z1, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
qm.displayName = Xm;
function V1(e) {
    return e !== null
}
var H1 = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, m, h;
        const {placement: n, rects: r, middlewareData: o} = t
          , s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0
          , l = s ? 0 : e.arrowWidth
          , a = s ? 0 : e.arrowHeight
          , [u,c] = Zm(n)
          , d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c]
          , p = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + l / 2
          , f = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + a / 2;
        let x = ""
          , g = "";
        return u === "bottom" ? (x = s ? d : `${p}px`,
        g = `${-a}px`) : u === "top" ? (x = s ? d : `${p}px`,
        g = `${r.floating.height + a}px`) : u === "right" ? (x = `${-a}px`,
        g = s ? d : `${f}px`) : u === "left" && (x = `${r.floating.width + a}px`,
        g = s ? d : `${f}px`),
        {
            data: {
                x,
                y: g
            }
        }
    }
});
function Zm(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var W1 = Gm
  , Q1 = Ym
  , K1 = qm
  , [Js,rC] = ci("Tooltip", [Wm])
  , uc = Wm()
  , Jm = "TooltipProvider"
  , G1 = 700
  , ef = "tooltip.open"
  , [Y1,eg] = Js(Jm)
  , tg = e => {
    const {__scopeTooltip: t, delayDuration: n=G1, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: i} = e
      , s = y.useRef(!0)
      , l = y.useRef(!1)
      , a = y.useRef(0);
    return y.useEffect( () => {
        const u = a.current;
        return () => window.clearTimeout(u)
    }
    , []),
    E.jsx(Y1, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: y.useCallback( () => {
            window.clearTimeout(a.current),
            s.current = !1
        }
        , []),
        onClose: y.useCallback( () => {
            window.clearTimeout(a.current),
            a.current = window.setTimeout( () => s.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: y.useCallback(u => {
            l.current = u
        }
        , []),
        disableHoverableContent: o,
        children: i
    })
}
;
tg.displayName = Jm;
var ng = "Tooltip"
  , [oC,el] = Js(ng)
  , Ga = "TooltipTrigger"
  , X1 = y.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = el(Ga, n)
      , i = eg(Ga, n)
      , s = uc(n)
      , l = y.useRef(null)
      , a = Ze(t, l, o.onTriggerChange)
      , u = y.useRef(!1)
      , c = y.useRef(!1)
      , d = y.useCallback( () => u.current = !1, []);
    return y.useEffect( () => () => document.removeEventListener("pointerup", d), [d]),
    E.jsx(W1, {
        asChild: !0,
        ...s,
        children: E.jsx(je.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: a,
            onPointerMove: me(e.onPointerMove, p => {
                p.pointerType !== "touch" && !c.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(),
                c.current = !0)
            }
            ),
            onPointerLeave: me(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                c.current = !1
            }
            ),
            onPointerDown: me(e.onPointerDown, () => {
                o.open && o.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", d, {
                    once: !0
                })
            }
            ),
            onFocus: me(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: me(e.onBlur, o.onClose),
            onClick: me(e.onClick, o.onClose)
        })
    })
}
);
X1.displayName = Ga;
var q1 = "TooltipPortal"
  , [iC,Z1] = Js(q1, {
    forceMount: void 0
})
  , eo = "TooltipContent"
  , rg = y.forwardRef( (e, t) => {
    const n = Z1(eo, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...i} = e
      , s = el(eo, e.__scopeTooltip);
    return E.jsx(Xu, {
        present: r || s.open,
        children: s.disableHoverableContent ? E.jsx(og, {
            side: o,
            ...i,
            ref: t
        }) : E.jsx(J1, {
            side: o,
            ...i,
            ref: t
        })
    })
}
)
  , J1 = y.forwardRef( (e, t) => {
    const n = el(eo, e.__scopeTooltip)
      , r = eg(eo, e.__scopeTooltip)
      , o = y.useRef(null)
      , i = Ze(t, o)
      , [s,l] = y.useState(null)
      , {trigger: a, onClose: u} = n
      , c = o.current
      , {onPointerInTransitChange: d} = r
      , p = y.useCallback( () => {
        l(null),
        d(!1)
    }
    , [d])
      , f = y.useCallback( (x, g) => {
        const w = x.currentTarget
          , m = {
            x: x.clientX,
            y: x.clientY
        }
          , h = oS(m, w.getBoundingClientRect())
          , v = iS(m, h)
          , S = sS(g.getBoundingClientRect())
          , C = aS([...v, ...S]);
        l(C),
        d(!0)
    }
    , [d]);
    return y.useEffect( () => () => p(), [p]),
    y.useEffect( () => {
        if (a && c) {
            const x = w => f(w, c)
              , g = w => f(w, a);
            return a.addEventListener("pointerleave", x),
            c.addEventListener("pointerleave", g),
            () => {
                a.removeEventListener("pointerleave", x),
                c.removeEventListener("pointerleave", g)
            }
        }
    }
    , [a, c, f, p]),
    y.useEffect( () => {
        if (s) {
            const x = g => {
                const w = g.target
                  , m = {
                    x: g.clientX,
                    y: g.clientY
                }
                  , h = (a == null ? void 0 : a.contains(w)) || (c == null ? void 0 : c.contains(w))
                  , v = !lS(m, s);
                h ? p() : v && (p(),
                u())
            }
            ;
            return document.addEventListener("pointermove", x),
            () => document.removeEventListener("pointermove", x)
        }
    }
    , [a, c, s, u, p]),
    E.jsx(og, {
        ...e,
        ref: i
    })
}
)
  , [eS,tS] = Js(ng, {
    isInside: !1
})
  , nS = w0("TooltipContent")
  , og = y.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: s, ...l} = e
      , a = el(eo, n)
      , u = uc(n)
      , {onClose: c} = a;
    return y.useEffect( () => (document.addEventListener(ef, c),
    () => document.removeEventListener(ef, c)), [c]),
    y.useEffect( () => {
        if (a.trigger) {
            const d = p => {
                const f = p.target;
                f != null && f.contains(a.trigger) && c()
            }
            ;
            return window.addEventListener("scroll", d, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", d, {
                capture: !0
            })
        }
    }
    , [a.trigger, c]),
    E.jsx(Yu, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: d => d.preventDefault(),
        onDismiss: c,
        children: E.jsxs(Q1, {
            "data-state": a.stateAttribute,
            ...u,
            ...l,
            ref: t,
            style: {
                ...l.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [E.jsx(nS, {
                children: r
            }), E.jsx(eS, {
                scope: n,
                isInside: !0,
                children: E.jsx(V0, {
                    id: a.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
rg.displayName = eo;
var ig = "TooltipArrow"
  , rS = y.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = uc(n);
    return tS(ig, n).isInside ? null : E.jsx(K1, {
        ...o,
        ...r,
        ref: t
    })
}
);
rS.displayName = ig;
function oS(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
    case i:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function iS(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function sS(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function lS(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const l = t[i]
          , a = t[s]
          , u = l.x
          , c = l.y
          , d = a.x
          , p = a.y;
        c > r != p > r && n < (d - u) * (r - c) / (p - c) + u && (o = !o)
    }
    return o
}
function aS(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    uS(t)
}
function uS(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1]
              , s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1]
              , s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var cS = tg
  , sg = rg;
const dS = cS
  , fS = y.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => E.jsx(sg, {
    ref: r,
    sideOffset: t,
    className: _e("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
fS.displayName = sg.displayName;
var tl = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , nl = typeof window > "u" || "Deno"in globalThis;
function mt() {}
function pS(e, t) {
    return typeof e == "function" ? e(t) : e
}
function hS(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function mS(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Ya(e, t) {
    return typeof e == "function" ? e(t) : e
}
function gS(e, t) {
    return typeof e == "function" ? e(t) : e
}
function tf(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: l} = e;
    if (s) {
        if (r) {
            if (t.queryHash !== cc(s, t.options))
                return !1
        } else if (!ti(t.queryKey, s))
            return !1
    }
    if (n !== "all") {
        const a = t.isActive();
        if (n === "active" && !a || n === "inactive" && a)
            return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || i && !i(t))
}
function nf(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: i} = e;
    if (i) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (ei(t.options.mutationKey) !== ei(i))
                return !1
        } else if (!ti(t.options.mutationKey, i))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function cc(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || ei)(e)
}
function ei(e) {
    return JSON.stringify(e, (t, n) => Xa(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function ti(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => ti(e[n], t[n])) : !1
}
function lg(e, t) {
    if (e === t)
        return e;
    const n = rf(e) && rf(t);
    if (n || Xa(e) && Xa(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , i = n ? t : Object.keys(t)
          , s = i.length
          , l = n ? [] : {}
          , a = new Set(r);
        let u = 0;
        for (let c = 0; c < s; c++) {
            const d = n ? c : i[c];
            (!n && a.has(d) || n) && e[d] === void 0 && t[d] === void 0 ? (l[d] = void 0,
            u++) : (l[d] = lg(e[d], t[d]),
            l[d] === e[d] && e[d] !== void 0 && u++)
        }
        return o === s && u === o ? e : l
    }
    return t
}
function rf(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Xa(e) {
    if (!of(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!of(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function of(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function vS(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function yS(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? lg(e, t) : t
}
function wS(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function xS(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var dc = Symbol();
function ag(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === dc ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Qn, pn, Fr, wf, SS = (wf = class extends tl {
    constructor() {
        super();
        Z(this, Qn);
        Z(this, pn);
        Z(this, Fr);
        V(this, Fr, t => {
            if (!nl && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        b(this, pn) || this.setEventListener(b(this, Fr))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = b(this, pn)) == null || t.call(this),
        V(this, pn, void 0))
    }
    setEventListener(t) {
        var n;
        V(this, Fr, t),
        (n = b(this, pn)) == null || n.call(this),
        V(this, pn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        b(this, Qn) !== t && (V(this, Qn, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof b(this, Qn) == "boolean" ? b(this, Qn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Qn = new WeakMap,
pn = new WeakMap,
Fr = new WeakMap,
wf), ug = new SS, zr, hn, $r, xf, ES = (xf = class extends tl {
    constructor() {
        super();
        Z(this, zr, !0);
        Z(this, hn);
        Z(this, $r);
        V(this, $r, t => {
            if (!nl && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        b(this, hn) || this.setEventListener(b(this, $r))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = b(this, hn)) == null || t.call(this),
        V(this, hn, void 0))
    }
    setEventListener(t) {
        var n;
        V(this, $r, t),
        (n = b(this, hn)) == null || n.call(this),
        V(this, hn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        b(this, zr) !== t && (V(this, zr, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return b(this, zr)
    }
}
,
zr = new WeakMap,
hn = new WeakMap,
$r = new WeakMap,
xf), Rs = new ES;
function CS() {
    let e, t;
    const n = new Promise( (o, i) => {
        e = o,
        t = i
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function kS(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function cg(e) {
    return (e ?? "online") === "online" ? Rs.isOnline() : !0
}
var dg = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Hl(e) {
    return e instanceof dg
}
function fg(e) {
    let t = !1, n = 0, r = !1, o;
    const i = CS()
      , s = g => {
        var w;
        r || (p(new dg(g)),
        (w = e.abort) == null || w.call(e))
    }
      , l = () => {
        t = !0
    }
      , a = () => {
        t = !1
    }
      , u = () => ug.isFocused() && (e.networkMode === "always" || Rs.isOnline()) && e.canRun()
      , c = () => cg(e.networkMode) && e.canRun()
      , d = g => {
        var w;
        r || (r = !0,
        (w = e.onSuccess) == null || w.call(e, g),
        o == null || o(),
        i.resolve(g))
    }
      , p = g => {
        var w;
        r || (r = !0,
        (w = e.onError) == null || w.call(e, g),
        o == null || o(),
        i.reject(g))
    }
      , f = () => new Promise(g => {
        var w;
        o = m => {
            (r || u()) && g(m)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var g;
        o = void 0,
        r || (g = e.onContinue) == null || g.call(e)
    }
    )
      , x = () => {
        if (r)
            return;
        let g;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            g = w ?? e.fn()
        } catch (m) {
            g = Promise.reject(m)
        }
        Promise.resolve(g).then(d).catch(m => {
            var k;
            if (r)
                return;
            const h = e.retry ?? (nl ? 0 : 3)
              , v = e.retryDelay ?? kS
              , S = typeof v == "function" ? v(n, m) : v
              , C = h === !0 || typeof h == "number" && n < h || typeof h == "function" && h(n, m);
            if (t || !C) {
                p(m);
                return
            }
            n++,
            (k = e.onFail) == null || k.call(e, n, m),
            vS(S).then( () => u() ? void 0 : f()).then( () => {
                t ? p(m) : x()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        cancel: s,
        continue: () => (o == null || o(),
        i),
        cancelRetry: l,
        continueRetry: a,
        canStart: c,
        start: () => (c() ? x() : f().then(x),
        i)
    }
}
var PS = e => setTimeout(e, 0);
function bS() {
    let e = []
      , t = 0
      , n = l => {
        l()
    }
      , r = l => {
        l()
    }
      , o = PS;
    const i = l => {
        t ? e.push(l) : o( () => {
            n(l)
        }
        )
    }
      , s = () => {
        const l = e;
        e = [],
        l.length && o( () => {
            r( () => {
                l.forEach(a => {
                    n(a)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: l => {
            let a;
            t++;
            try {
                a = l()
            } finally {
                t--,
                t || s()
            }
            return a
        }
        ,
        batchCalls: l => (...a) => {
            i( () => {
                l(...a)
            }
            )
        }
        ,
        schedule: i,
        setNotifyFunction: l => {
            n = l
        }
        ,
        setBatchNotifyFunction: l => {
            r = l
        }
        ,
        setScheduler: l => {
            o = l
        }
    }
}
var Me = bS(), Kn, Sf, pg = (Sf = class {
    constructor() {
        Z(this, Kn)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        hS(this.gcTime) && V(this, Kn, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (nl ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        b(this, Kn) && (clearTimeout(b(this, Kn)),
        V(this, Kn, void 0))
    }
}
,
Kn = new WeakMap,
Sf), Ur, Gn, nt, Yn, Ne, ni, Xn, gt, Ft, Ef, TS = (Ef = class extends pg {
    constructor(t) {
        super();
        Z(this, gt);
        Z(this, Ur);
        Z(this, Gn);
        Z(this, nt);
        Z(this, Yn);
        Z(this, Ne);
        Z(this, ni);
        Z(this, Xn);
        V(this, Xn, !1),
        V(this, ni, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        V(this, Yn, t.client),
        V(this, nt, b(this, Yn).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        V(this, Ur, RS(this.options)),
        this.state = t.state ?? b(this, Ur),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = b(this, Ne)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...b(this, ni),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && b(this, nt).remove(this)
    }
    setData(t, n) {
        const r = yS(this.state.data, t, this.options);
        return Pe(this, gt, Ft).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Pe(this, gt, Ft).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = b(this, Ne)) == null ? void 0 : r.promise;
        return (o = b(this, Ne)) == null || o.cancel(t),
        n ? n.then(mt).catch(mt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(b(this, Ur))
    }
    isActive() {
        return this.observers.some(t => gS(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === dc || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => Ya(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !mS(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = b(this, Ne)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = b(this, Ne)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        b(this, nt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (b(this, Ne) && (b(this, Xn) ? b(this, Ne).cancel({
            revert: !0
        }) : b(this, Ne).cancelRetry()),
        this.scheduleGc()),
        b(this, nt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Pe(this, gt, Ft).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (b(this, Ne))
                return b(this, Ne).continueRetry(),
                b(this, Ne).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const p = this.observers.find(f => f.options.queryFn);
            p && this.setOptions(p.options)
        }
        const r = new AbortController
          , o = p => {
            Object.defineProperty(p, "signal", {
                enumerable: !0,
                get: () => (V(this, Xn, !0),
                r.signal)
            })
        }
          , i = () => {
            const p = ag(this.options, n)
              , x = ( () => {
                const g = {
                    client: b(this, Yn),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(g),
                g
            }
            )();
            return V(this, Xn, !1),
            this.options.persister ? this.options.persister(p, x, this) : p(x)
        }
          , l = ( () => {
            const p = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: b(this, Yn),
                state: this.state,
                fetchFn: i
            };
            return o(p),
            p
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(l, this),
        V(this, Gn, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = l.fetchOptions) == null ? void 0 : c.meta)) && Pe(this, gt, Ft).call(this, {
            type: "fetch",
            meta: (d = l.fetchOptions) == null ? void 0 : d.meta
        });
        const a = p => {
            var f, x, g, w;
            Hl(p) && p.silent || Pe(this, gt, Ft).call(this, {
                type: "error",
                error: p
            }),
            Hl(p) || ((x = (f = b(this, nt).config).onError) == null || x.call(f, p, this),
            (w = (g = b(this, nt).config).onSettled) == null || w.call(g, this.state.data, p, this)),
            this.scheduleGc()
        }
        ;
        return V(this, Ne, fg({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: l.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: p => {
                var f, x, g, w;
                if (p === void 0) {
                    a(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(p)
                } catch (m) {
                    a(m);
                    return
                }
                (x = (f = b(this, nt).config).onSuccess) == null || x.call(f, p, this),
                (w = (g = b(this, nt).config).onSettled) == null || w.call(g, p, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: a,
            onFail: (p, f) => {
                Pe(this, gt, Ft).call(this, {
                    type: "failed",
                    failureCount: p,
                    error: f
                })
            }
            ,
            onPause: () => {
                Pe(this, gt, Ft).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Pe(this, gt, Ft).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: l.options.retry,
            retryDelay: l.options.retryDelay,
            networkMode: l.options.networkMode,
            canRun: () => !0
        })),
        b(this, Ne).start()
    }
}
,
Ur = new WeakMap,
Gn = new WeakMap,
nt = new WeakMap,
Yn = new WeakMap,
Ne = new WeakMap,
ni = new WeakMap,
Xn = new WeakMap,
gt = new WeakSet,
Ft = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...NS(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return V(this, Gn, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return Hl(o) && o.revert && b(this, Gn) ? {
                ...b(this, Gn),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    Me.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        b(this, nt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Ef);
function NS(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: cg(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function RS(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Tt, Cf, OS = (Cf = class extends tl {
    constructor(t={}) {
        super();
        Z(this, Tt);
        this.config = t,
        V(this, Tt, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , i = n.queryHash ?? cc(o, n);
        let s = this.get(i);
        return s || (s = new TS({
            client: t,
            queryKey: o,
            queryHash: i,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(s)),
        s
    }
    add(t) {
        b(this, Tt).has(t.queryHash) || (b(this, Tt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = b(this, Tt).get(t.queryHash);
        n && (t.destroy(),
        n === t && b(this, Tt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        Me.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return b(this, Tt).get(t)
    }
    getAll() {
        return [...b(this, Tt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => tf(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => tf(t, r)) : n
    }
    notify(t) {
        Me.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        Me.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Me.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Tt = new WeakMap,
Cf), Nt, Ae, qn, Rt, an, kf, _S = (kf = class extends pg {
    constructor(t) {
        super();
        Z(this, Rt);
        Z(this, Nt);
        Z(this, Ae);
        Z(this, qn);
        this.mutationId = t.mutationId,
        V(this, Ae, t.mutationCache),
        V(this, Nt, []),
        this.state = t.state || jS(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        b(this, Nt).includes(t) || (b(this, Nt).push(t),
        this.clearGcTimeout(),
        b(this, Ae).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        V(this, Nt, b(this, Nt).filter(n => n !== t)),
        this.scheduleGc(),
        b(this, Ae).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        b(this, Nt).length || (this.state.status === "pending" ? this.scheduleGc() : b(this, Ae).remove(this))
    }
    continue() {
        var t;
        return ((t = b(this, qn)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var i, s, l, a, u, c, d, p, f, x, g, w, m, h, v, S, C, k, P, R;
        const n = () => {
            Pe(this, Rt, an).call(this, {
                type: "continue"
            })
        }
        ;
        V(this, qn, fg({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (L, A) => {
                Pe(this, Rt, an).call(this, {
                    type: "failed",
                    failureCount: L,
                    error: A
                })
            }
            ,
            onPause: () => {
                Pe(this, Rt, an).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => b(this, Ae).canRun(this)
        }));
        const r = this.state.status === "pending"
          , o = !b(this, qn).canStart();
        try {
            if (r)
                n();
            else {
                Pe(this, Rt, an).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: o
                }),
                await ((s = (i = b(this, Ae).config).onMutate) == null ? void 0 : s.call(i, t, this));
                const A = await ((a = (l = this.options).onMutate) == null ? void 0 : a.call(l, t));
                A !== this.state.context && Pe(this, Rt, an).call(this, {
                    type: "pending",
                    context: A,
                    variables: t,
                    isPaused: o
                })
            }
            const L = await b(this, qn).start();
            return await ((c = (u = b(this, Ae).config).onSuccess) == null ? void 0 : c.call(u, L, t, this.state.context, this)),
            await ((p = (d = this.options).onSuccess) == null ? void 0 : p.call(d, L, t, this.state.context)),
            await ((x = (f = b(this, Ae).config).onSettled) == null ? void 0 : x.call(f, L, null, this.state.variables, this.state.context, this)),
            await ((w = (g = this.options).onSettled) == null ? void 0 : w.call(g, L, null, t, this.state.context)),
            Pe(this, Rt, an).call(this, {
                type: "success",
                data: L
            }),
            L
        } catch (L) {
            try {
                throw await ((h = (m = b(this, Ae).config).onError) == null ? void 0 : h.call(m, L, t, this.state.context, this)),
                await ((S = (v = this.options).onError) == null ? void 0 : S.call(v, L, t, this.state.context)),
                await ((k = (C = b(this, Ae).config).onSettled) == null ? void 0 : k.call(C, void 0, L, this.state.variables, this.state.context, this)),
                await ((R = (P = this.options).onSettled) == null ? void 0 : R.call(P, void 0, L, t, this.state.context)),
                L
            } finally {
                Pe(this, Rt, an).call(this, {
                    type: "error",
                    error: L
                })
            }
        } finally {
            b(this, Ae).runNext(this)
        }
    }
}
,
Nt = new WeakMap,
Ae = new WeakMap,
qn = new WeakMap,
Rt = new WeakSet,
an = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    Me.batch( () => {
        b(this, Nt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        b(this, Ae).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
kf);
function jS() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Ut, vt, ri, Pf, AS = (Pf = class extends tl {
    constructor(t={}) {
        super();
        Z(this, Ut);
        Z(this, vt);
        Z(this, ri);
        this.config = t,
        V(this, Ut, new Set),
        V(this, vt, new Map),
        V(this, ri, 0)
    }
    build(t, n, r) {
        const o = new _S({
            mutationCache: this,
            mutationId: ++gi(this, ri)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        b(this, Ut).add(t);
        const n = Fi(t);
        if (typeof n == "string") {
            const r = b(this, vt).get(n);
            r ? r.push(t) : b(this, vt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (b(this, Ut).delete(t)) {
            const n = Fi(t);
            if (typeof n == "string") {
                const r = b(this, vt).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else
                        r[0] === t && b(this, vt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = Fi(t);
        if (typeof n == "string") {
            const r = b(this, vt).get(n)
              , o = r == null ? void 0 : r.find(i => i.state.status === "pending");
            return !o || o === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = Fi(t);
        if (typeof n == "string") {
            const o = (r = b(this, vt).get(n)) == null ? void 0 : r.find(i => i !== t && i.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        Me.batch( () => {
            b(this, Ut).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            b(this, Ut).clear(),
            b(this, vt).clear()
        }
        )
    }
    getAll() {
        return Array.from(b(this, Ut))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => nf(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => nf(t, n))
    }
    notify(t) {
        Me.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Me.batch( () => Promise.all(t.map(n => n.continue().catch(mt))))
    }
}
,
Ut = new WeakMap,
vt = new WeakMap,
ri = new WeakMap,
Pf);
function Fi(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function sf(e) {
    return {
        onFetch: (t, n) => {
            var c, d, p, f, x;
            const r = t.options
              , o = (p = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : p.direction
              , i = ((f = t.state.data) == null ? void 0 : f.pages) || []
              , s = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
            let l = {
                pages: [],
                pageParams: []
            }
              , a = 0;
            const u = async () => {
                let g = !1;
                const w = v => {
                    Object.defineProperty(v, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? g = !0 : t.signal.addEventListener("abort", () => {
                            g = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , m = ag(t.options, t.fetchOptions)
                  , h = async (v, S, C) => {
                    if (g)
                        return Promise.reject();
                    if (S == null && v.pages.length)
                        return Promise.resolve(v);
                    const P = ( () => {
                        const $ = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: S,
                            direction: C ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return w($),
                        $
                    }
                    )()
                      , R = await m(P)
                      , {maxPages: L} = t.options
                      , A = C ? xS : wS;
                    return {
                        pages: A(v.pages, R, L),
                        pageParams: A(v.pageParams, S, L)
                    }
                }
                ;
                if (o && i.length) {
                    const v = o === "backward"
                      , S = v ? LS : lf
                      , C = {
                        pages: i,
                        pageParams: s
                    }
                      , k = S(r, C);
                    l = await h(C, k, v)
                } else {
                    const v = e ?? i.length;
                    do {
                        const S = a === 0 ? s[0] ?? r.initialPageParam : lf(r, l);
                        if (a > 0 && S == null)
                            break;
                        l = await h(l, S),
                        a++
                    } while (a < v)
                }
                return l
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var g, w;
                return (w = (g = t.options).persister) == null ? void 0 : w.call(g, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function lf(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function LS(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var de, mn, gn, Br, Vr, vn, Hr, Wr, bf, MS = (bf = class {
    constructor(e={}) {
        Z(this, de);
        Z(this, mn);
        Z(this, gn);
        Z(this, Br);
        Z(this, Vr);
        Z(this, vn);
        Z(this, Hr);
        Z(this, Wr);
        V(this, de, e.queryCache || new OS),
        V(this, mn, e.mutationCache || new AS),
        V(this, gn, e.defaultOptions || {}),
        V(this, Br, new Map),
        V(this, Vr, new Map),
        V(this, vn, 0)
    }
    mount() {
        gi(this, vn)._++,
        b(this, vn) === 1 && (V(this, Hr, ug.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            b(this, de).onFocus())
        }
        )),
        V(this, Wr, Rs.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            b(this, de).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        gi(this, vn)._--,
        b(this, vn) === 0 && ((e = b(this, Hr)) == null || e.call(this),
        V(this, Hr, void 0),
        (t = b(this, Wr)) == null || t.call(this),
        V(this, Wr, void 0))
    }
    isFetching(e) {
        return b(this, de).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return b(this, mn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = b(this, de).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = b(this, de).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Ya(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return b(this, de).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = b(this, de).get(r.queryHash)
          , i = o == null ? void 0 : o.state.data
          , s = pS(t, i);
        if (s !== void 0)
            return b(this, de).build(this, r).setData(s, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return Me.batch( () => b(this, de).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = b(this, de).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = b(this, de);
        Me.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = b(this, de);
        return Me.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = Me.batch( () => b(this, de).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(mt).catch(mt)
    }
    invalidateQueries(e, t={}) {
        return Me.batch( () => (b(this, de).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = Me.batch( () => b(this, de).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let i = o.fetch(void 0, n);
            return n.throwOnError || (i = i.catch(mt)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : i
        }
        ));
        return Promise.all(r).then(mt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = b(this, de).build(this, t);
        return n.isStaleByTime(Ya(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(mt).catch(mt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = sf(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(mt).catch(mt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = sf(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Rs.isOnline() ? b(this, mn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return b(this, de)
    }
    getMutationCache() {
        return b(this, mn)
    }
    getDefaultOptions() {
        return b(this, gn)
    }
    setDefaultOptions(e) {
        V(this, gn, e)
    }
    setQueryDefaults(e, t) {
        b(this, Br).set(ei(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...b(this, Br).values()]
          , n = {};
        return t.forEach(r => {
            ti(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        b(this, Vr).set(ei(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...b(this, Vr).values()]
          , n = {};
        return t.forEach(r => {
            ti(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...b(this, gn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = cc(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === dc && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...b(this, gn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        b(this, de).clear(),
        b(this, mn).clear()
    }
}
,
de = new WeakMap,
mn = new WeakMap,
gn = new WeakMap,
Br = new WeakMap,
Vr = new WeakMap,
vn = new WeakMap,
Hr = new WeakMap,
Wr = new WeakMap,
bf), DS = y.createContext(void 0), IS = ({client: e, children: t}) => (y.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
E.jsx(DS.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Os() {
    return Os = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Os.apply(this, arguments)
}
var xn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(xn || (xn = {}));
const af = "popstate";
function FS(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: i, search: s, hash: l} = r.location;
        return qa("", {
            pathname: i,
            search: s,
            hash: l
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : mg(o)
    }
    return $S(t, n, null, e)
}
function We(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function hg(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function zS() {
    return Math.random().toString(36).substr(2, 8)
}
function uf(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function qa(e, t, n, r) {
    return n === void 0 && (n = null),
    Os({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? rl(t) : t, {
        state: n,
        key: t && t.key || r || zS()
    })
}
function mg(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function rl(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function $S(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: i=!1} = r
      , s = o.history
      , l = xn.Pop
      , a = null
      , u = c();
    u == null && (u = 0,
    s.replaceState(Os({}, s.state, {
        idx: u
    }), ""));
    function c() {
        return (s.state || {
            idx: null
        }).idx
    }
    function d() {
        l = xn.Pop;
        let w = c()
          , m = w == null ? null : w - u;
        u = w,
        a && a({
            action: l,
            location: g.location,
            delta: m
        })
    }
    function p(w, m) {
        l = xn.Push;
        let h = qa(g.location, w, m);
        u = c() + 1;
        let v = uf(h, u)
          , S = g.createHref(h);
        try {
            s.pushState(v, "", S)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError")
                throw C;
            o.location.assign(S)
        }
        i && a && a({
            action: l,
            location: g.location,
            delta: 1
        })
    }
    function f(w, m) {
        l = xn.Replace;
        let h = qa(g.location, w, m);
        u = c();
        let v = uf(h, u)
          , S = g.createHref(h);
        s.replaceState(v, "", S),
        i && a && a({
            action: l,
            location: g.location,
            delta: 0
        })
    }
    function x(w) {
        let m = o.location.origin !== "null" ? o.location.origin : o.location.href
          , h = typeof w == "string" ? w : mg(w);
        return h = h.replace(/ $/, "%20"),
        We(m, "No window.location.(origin|href) available to create URL for href: " + h),
        new URL(h,m)
    }
    let g = {
        get action() {
            return l
        },
        get location() {
            return e(o, s)
        },
        listen(w) {
            if (a)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(af, d),
            a = w,
            () => {
                o.removeEventListener(af, d),
                a = null
            }
        },
        createHref(w) {
            return t(o, w)
        },
        createURL: x,
        encodeLocation(w) {
            let m = x(w);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: p,
        replace: f,
        go(w) {
            return s.go(w)
        }
    };
    return g
}
var cf;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(cf || (cf = {}));
function US(e, t, n) {
    return n === void 0 && (n = "/"),
    BS(e, t, n, !1)
}
function BS(e, t, n, r) {
    let o = typeof t == "string" ? rl(t) : t
      , i = yg(o.pathname || "/", n);
    if (i == null)
        return null;
    let s = gg(e);
    VS(s);
    let l = null;
    for (let a = 0; l == null && a < s.length; ++a) {
        let u = eE(i);
        l = ZS(s[a], u, r)
    }
    return l
}
function gg(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (i, s, l) => {
        let a = {
            relativePath: l === void 0 ? i.path || "" : l,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        a.relativePath.startsWith("/") && (We(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        a.relativePath = a.relativePath.slice(r.length));
        let u = Ir([r, a.relativePath])
          , c = n.concat(a);
        i.children && i.children.length > 0 && (We(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        gg(i.children, t, c, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: XS(u, i.index),
            routesMeta: c
        })
    }
    ;
    return e.forEach( (i, s) => {
        var l;
        if (i.path === "" || !((l = i.path) != null && l.includes("?")))
            o(i, s);
        else
            for (let a of vg(i.path))
                o(i, s, a)
    }
    ),
    t
}
function vg(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [i, ""] : [i];
    let s = vg(r.join("/"))
      , l = [];
    return l.push(...s.map(a => a === "" ? i : [i, a].join("/"))),
    o && l.push(...s),
    l.map(a => e.startsWith("/") && a === "" ? "/" : a)
}
function VS(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : qS(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const HS = /^:[\w-]+$/
  , WS = 3
  , QS = 2
  , KS = 1
  , GS = 10
  , YS = -2
  , df = e => e === "*";
function XS(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(df) && (r += YS),
    t && (r += QS),
    n.filter(o => !df(o)).reduce( (o, i) => o + (HS.test(i) ? WS : i === "" ? KS : GS), r)
}
function qS(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function ZS(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , i = "/"
      , s = [];
    for (let l = 0; l < r.length; ++l) {
        let a = r[l]
          , u = l === r.length - 1
          , c = i === "/" ? t : t.slice(i.length) || "/"
          , d = ff({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: u
        }, c)
          , p = a.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = ff({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: !1
        }, c)),
        !d)
            return null;
        Object.assign(o, d.params),
        s.push({
            params: o,
            pathname: Ir([i, d.pathname]),
            pathnameBase: tE(Ir([i, d.pathnameBase])),
            route: p
        }),
        d.pathnameBase !== "/" && (i = Ir([i, d.pathnameBase]))
    }
    return s
}
function ff(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = JS(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let i = o[0]
      , s = i.replace(/(.)\/+$/, "$1")
      , l = o.slice(1);
    return {
        params: r.reduce( (u, c, d) => {
            let {paramName: p, isOptional: f} = c;
            if (p === "*") {
                let g = l[d] || "";
                s = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const x = l[d];
            return f && !x ? u[p] = void 0 : u[p] = (x || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}
function JS(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    hg(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, l, a) => (r.push({
        paramName: l,
        isOptional: a != null
    }),
    a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function eE(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return hg(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function yg(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const Ir = e => e.join("/").replace(/\/\/+/g, "/")
  , tE = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function nE(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const wg = ["post", "put", "patch", "delete"];
new Set(wg);
const rE = ["get", ...wg];
new Set(rE);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _s() {
    return _s = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    _s.apply(this, arguments)
}
const oE = y.createContext(null)
  , iE = y.createContext(null)
  , xg = y.createContext(null)
  , ol = y.createContext(null)
  , il = y.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Sg = y.createContext(null);
function fc() {
    return y.useContext(ol) != null
}
function Eg() {
    return fc() || We(!1),
    y.useContext(ol).location
}
function sE(e, t) {
    return lE(e, t)
}
function lE(e, t, n, r) {
    fc() || We(!1);
    let {navigator: o} = y.useContext(xg)
      , {matches: i} = y.useContext(il)
      , s = i[i.length - 1]
      , l = s ? s.params : {};
    s && s.pathname;
    let a = s ? s.pathnameBase : "/";
    s && s.route;
    let u = Eg(), c;
    if (t) {
        var d;
        let w = typeof t == "string" ? rl(t) : t;
        a === "/" || (d = w.pathname) != null && d.startsWith(a) || We(!1),
        c = w
    } else
        c = u;
    let p = c.pathname || "/"
      , f = p;
    if (a !== "/") {
        let w = a.replace(/^\//, "").split("/");
        f = "/" + p.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let x = US(e, {
        pathname: f
    })
      , g = fE(x && x.map(w => Object.assign({}, w, {
        params: Object.assign({}, l, w.params),
        pathname: Ir([a, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? a : Ir([a, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), i, n, r);
    return t && g ? y.createElement(ol.Provider, {
        value: {
            location: _s({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: xn.Pop
        }
    }, g) : g
}
function aE() {
    let e = gE()
      , t = nE(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return y.createElement(y.Fragment, null, y.createElement("h2", null, "Unexpected Application Error!"), y.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? y.createElement("pre", {
        style: o
    }, n) : null, null)
}
const uE = y.createElement(aE, null);
class cE extends y.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? y.createElement(il.Provider, {
            value: this.props.routeContext
        }, y.createElement(Sg.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function dE(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = y.useContext(oE);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(il.Provider, {
        value: t
    }, r)
}
function fE(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
      , l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
        let c = s.findIndex(d => d.route.id && (l == null ? void 0 : l[d.route.id]) !== void 0);
        c >= 0 || We(!1),
        s = s.slice(0, Math.min(s.length, c + 1))
    }
    let a = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < s.length; c++) {
            let d = s[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
            d.route.id) {
                let {loaderData: p, errors: f} = n
                  , x = d.route.loader && p[d.route.id] === void 0 && (!f || f[d.route.id] === void 0);
                if (d.route.lazy || x) {
                    a = !0,
                    u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (c, d, p) => {
        let f, x = !1, g = null, w = null;
        n && (f = l && d.route.id ? l[d.route.id] : void 0,
        g = d.route.errorElement || uE,
        a && (u < 0 && p === 0 ? (x = !0,
        w = null) : u === p && (x = !0,
        w = d.route.hydrateFallbackElement || null)));
        let m = t.concat(s.slice(0, p + 1))
          , h = () => {
            let v;
            return f ? v = g : x ? v = w : d.route.Component ? v = y.createElement(d.route.Component, null) : d.route.element ? v = d.route.element : v = c,
            y.createElement(dE, {
                match: d,
                routeContext: {
                    outlet: c,
                    matches: m,
                    isDataRoute: n != null
                },
                children: v
            })
        }
        ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0) ? y.createElement(cE, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: f,
            children: h(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : h()
    }
    , null)
}
var Za = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Za || {});
function pE(e) {
    let t = y.useContext(iE);
    return t || We(!1),
    t
}
function hE(e) {
    let t = y.useContext(il);
    return t || We(!1),
    t
}
function mE(e) {
    let t = hE()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || We(!1),
    n.route.id
}
function gE() {
    var e;
    let t = y.useContext(Sg)
      , n = pE(Za.UseRouteError)
      , r = mE(Za.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function vE(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function Ja(e) {
    We(!1)
}
function yE(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=xn.Pop, navigator: i, static: s=!1, future: l} = e;
    fc() && We(!1);
    let a = t.replace(/^\/*/, "/")
      , u = y.useMemo( () => ({
        basename: a,
        navigator: i,
        static: s,
        future: _s({
            v7_relativeSplatPath: !1
        }, l)
    }), [a, l, i, s]);
    typeof r == "string" && (r = rl(r));
    let {pathname: c="/", search: d="", hash: p="", state: f=null, key: x="default"} = r
      , g = y.useMemo( () => {
        let w = yg(c, a);
        return w == null ? null : {
            location: {
                pathname: w,
                search: d,
                hash: p,
                state: f,
                key: x
            },
            navigationType: o
        }
    }
    , [a, c, d, p, f, x, o]);
    return g == null ? null : y.createElement(xg.Provider, {
        value: u
    }, y.createElement(ol.Provider, {
        children: n,
        value: g
    }))
}
function wE(e) {
    let {children: t, location: n} = e;
    return sE(eu(t), n)
}
new Promise( () => {}
);
function eu(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return y.Children.forEach(e, (r, o) => {
        if (!y.isValidElement(r))
            return;
        let i = [...t, o];
        if (r.type === y.Fragment) {
            n.push.apply(n, eu(r.props.children, i));
            return
        }
        r.type !== Ja && We(!1),
        !r.props.index || !r.props.children || We(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = eu(r.props.children, i)),
        n.push(s)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const xE = "6";
try {
    window.__reactRouterVersion = xE
} catch {}
const SE = "startTransition"
  , pf = Ff[SE];
function EE(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , i = y.useRef();
    i.current == null && (i.current = FS({
        window: o,
        v5Compat: !0
    }));
    let s = i.current
      , [l,a] = y.useState({
        action: s.action,
        location: s.location
    })
      , {v7_startTransition: u} = r || {}
      , c = y.useCallback(d => {
        u && pf ? pf( () => a(d)) : a(d)
    }
    , [a, u]);
    return y.useLayoutEffect( () => s.listen(c), [s, c]),
    y.useEffect( () => vE(r), [r]),
    y.createElement(yE, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s,
        future: r
    })
}
var hf;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(hf || (hf = {}));
var mf;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(mf || (mf = {}));
function CE(e, t, n, r) {
    var o = this
      , i = y.useRef(null)
      , s = y.useRef(0)
      , l = y.useRef(0)
      , a = y.useRef(null)
      , u = y.useRef([])
      , c = y.useRef()
      , d = y.useRef()
      , p = y.useRef(e)
      , f = y.useRef(!0);
    p.current = e;
    var x = typeof window < "u"
      , g = !t && t !== 0 && x;
    if (typeof e != "function")
        throw new TypeError("Expected a function");
    t = +t || 0;
    var w = !!(n = n || {}).leading
      , m = !("trailing"in n) || !!n.trailing
      , h = "maxWait"in n
      , v = "debounceOnServer"in n && !!n.debounceOnServer
      , S = h ? Math.max(+n.maxWait || 0, t) : null;
    y.useEffect(function() {
        return f.current = !0,
        function() {
            f.current = !1
        }
    }, []);
    var C = y.useMemo(function() {
        var k = function(F) {
            var _ = u.current
              , Q = c.current;
            return u.current = c.current = null,
            s.current = F,
            l.current = l.current || F,
            d.current = p.current.apply(Q, _)
        }
          , P = function(F, _) {
            g && cancelAnimationFrame(a.current),
            a.current = g ? requestAnimationFrame(F) : setTimeout(F, _)
        }
          , R = function(F) {
            if (!f.current)
                return !1;
            var _ = F - i.current;
            return !i.current || _ >= t || _ < 0 || h && F - s.current >= S
        }
          , L = function(F) {
            return a.current = null,
            m && u.current ? k(F) : (u.current = c.current = null,
            d.current)
        }
          , A = function F() {
            var _ = Date.now();
            if (w && l.current === s.current && $(),
            R(_))
                return L(_);
            if (f.current) {
                var Q = t - (_ - i.current)
                  , U = h ? Math.min(Q, S - (_ - s.current)) : Q;
                P(F, U)
            }
        }
          , $ = function() {
            r && r({})
        }
          , M = function() {
            if (x || v) {
                var F = Date.now()
                  , _ = R(F);
                if (u.current = [].slice.call(arguments),
                c.current = o,
                i.current = F,
                _) {
                    if (!a.current && f.current)
                        return s.current = i.current,
                        P(A, t),
                        w ? k(i.current) : d.current;
                    if (h)
                        return P(A, t),
                        k(i.current)
                }
                return a.current || P(A, t),
                d.current
            }
        };
        return M.cancel = function() {
            var F = a.current;
            F && (g ? cancelAnimationFrame(a.current) : clearTimeout(a.current)),
            s.current = 0,
            u.current = i.current = c.current = a.current = null,
            F && r && r({})
        }
        ,
        M.isPending = function() {
            return !!a.current
        }
        ,
        M.flush = function() {
            return a.current ? L(Date.now()) : d.current
        }
        ,
        M
    }, [w, h, t, S, m, g, x, v, r]);
    return C
}
function kE(e, t) {
    return e === t
}
function gf(e, t, n) {
    var r = kE
      , o = y.useRef(e)
      , i = y.useState({})[1]
      , s = CE(y.useCallback(function(a) {
        o.current = a,
        i({})
    }, [i]), t, n, i)
      , l = y.useRef(e);
    return r(l.current, e) || (s(e),
    l.current = e),
    [o.current, s]
}
const PE = ym("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , Tr = y.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, i) => {
    const s = r ? v0 : "button";
    return E.jsx(s, {
        className: _e(PE({
            variant: t,
            size: n,
            className: e
        })),
        ref: i,
        ...o
    })
}
);
Tr.displayName = "Button";
const bE = 25 * 1024 * 1024
  , vf = ["image/jpeg", "image/jpg", "image/png", "image/webp"]
  , TE = ({onFileSelect: e}) => {
    const [t,n] = y.useState(!1)
      , [r,o] = y.useState(null)
      , i = d => vf.includes(d.type) ? d.size > bE ? "File size must be less than 25MB" : null : "Please select a valid image file (JPEG, PNG, or WebP)"
      , s = d => {
        const p = i(d);
        if (p) {
            o(p);
            return
        }
        o(null),
        e(d)
    }
      , l = y.useCallback(d => {
        d.preventDefault(),
        n(!0)
    }
    , [])
      , a = y.useCallback(d => {
        d.preventDefault(),
        n(!1)
    }
    , [])
      , u = y.useCallback(d => {
        d.preventDefault(),
        n(!1);
        const p = Array.from(d.dataTransfer.files);
        p.length > 0 && s(p[0])
    }
    , [])
      , c = d => {
        const p = d.target.files;
        p && p.length > 0 && s(p[0])
    }
    ;
    return E.jsxs("div", {
        className: "space-y-4",
        children: [E.jsx("div", {
            className: `drop-zone ${t ? "drag-over" : ""}`,
            onDragOver: l,
            onDragLeave: a,
            onDrop: u,
            children: E.jsxs("div", {
                className: "flex flex-col items-center space-y-4",
                children: [E.jsx("div", {
                    className: "p-4 rounded-full bg-gradient-duotone",
                    children: E.jsx(Ba, {
                        className: "w-8 h-8 text-white"
                    })
                }), E.jsxs("div", {
                    className: "text-center",
                    children: [E.jsx("h3", {
                        className: "text-xl font-semibold mb-2",
                        children: "Drop your image here"
                    }), E.jsx("p", {
                        className: "text-muted-foreground mb-4",
                        children: "or click to browse your files"
                    })]
                }), E.jsxs(Tr, {
                    size: "lg",
                    className: "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg",
                    onClick: () => {
                        var d;
                        return (d = document.getElementById("file-input")) == null ? void 0 : d.click()
                    }
                    ,
                    children: [E.jsx(fw, {
                        className: "w-4 h-4 mr-2"
                    }), "Choose Image"]
                }), E.jsx("input", {
                    id: "file-input",
                    type: "file",
                    accept: vf.join(","),
                    onChange: c,
                    className: "hidden"
                }), E.jsxs("div", {
                    className: "text-xs text-muted-foreground text-center",
                    children: [E.jsx("p", {
                        children: "Supports JPEG, PNG, WebP"
                    }), E.jsx("p", {
                        children: "Maximum file size: 25MB"
                    })]
                })]
            })
        }), r && E.jsx("div", {
            className: "p-4 bg-destructive/10 border border-destructive/20 rounded-md",
            children: E.jsx("p", {
                className: "text-destructive text-sm text-center",
                children: r
            })
        })]
    })
}
  , NE = {
    r: 22,
    g: 80,
    b: 39
}
  , RE = {
    r: 249,
    g: 159,
    b: 210
}
  , OE = {
    r: 27,
    g: 96,
    b: 47
}
  , _E = {
    r: 247,
    g: 132,
    b: 197
}
  , Wl = 3e3
  , jE = e => e < .5 ? Math.pow(e * 2, 1.8) / 2 : 1 - Math.pow((1 - e) * 2, 1.8) / 2
  , AE = async (e, t, n=!1, r=!1) => new Promise( (o, i) => {
    const s = new Image
      , l = URL.createObjectURL(e);
    s.onload = () => {
        URL.revokeObjectURL(l);
        try {
            const a = LE(s, t, n, r);
            o(a)
        } catch (a) {
            i(a)
        }
    }
    ,
    s.onerror = () => {
        URL.revokeObjectURL(l),
        i(new Error("Failed to load image"))
    }
    ,
    s.src = l
}
)
  , LE = (e, t, n=!1, r=!1) => {
    const o = t.getContext("2d", {
        willReadFrequently: !0
    });
    if (!o)
        throw new Error("Could not get canvas context");
    let {width: i, height: s} = ME(e.naturalWidth, e.naturalHeight);
    t.width = i,
    t.height = s,
    o.drawImage(e, 0, 0, i, s);
    const l = o.getImageData(0, 0, i, s)
      , a = l.data;
    let u = 255
      , c = 0;
    for (let g = 0; g < a.length; g += 4) {
        const w = a[g]
          , m = a[g + 1]
          , h = a[g + 2]
          , v = .2126 * w + .7152 * m + .0722 * h;
        v < u && (u = v),
        v > c && (c = v)
    }
    const d = c - u || 1
      , p = r ? {
        shadow: OE,
        highlight: _E
    } : {
        shadow: NE,
        highlight: RE
    }
      , f = n ? p.highlight : p.shadow
      , x = n ? p.shadow : p.highlight;
    for (let g = 0; g < a.length; g += 4) {
        const w = a[g]
          , m = a[g + 1]
          , h = a[g + 2]
          , v = .2126 * w + .7152 * m + .0722 * h;
        let S = Math.max(0, Math.min(1, (v - u) / d));
        S = jE(S),
        a[g] = Math.round(f.r + S * (x.r - f.r)),
        a[g + 1] = Math.round(f.g + S * (x.g - f.g)),
        a[g + 2] = Math.round(f.b + S * (x.b - f.b))
    }
    return o.putImageData(l, 0, 0),
    {
        processedCanvas: t,
        dimensions: {
            width: i,
            height: s
        }
    }
}
  , ME = (e, t) => {
    if (e <= Wl && t <= Wl)
        return {
            width: e,
            height: t
        };
    const n = Wl / Math.max(e, t);
    return {
        width: Math.round(e * n),
        height: Math.round(t * n)
    }
}
  , DE = ({file: e, onProcessingComplete: t, onProcessingError: n, isProcessing: r, isReversed: o=!1, useClassicColors: i=!1}) => {
    const s = y.useRef(null)
      , l = y.useCallback(t, [])
      , a = y.useCallback(n, []);
    return y.useEffect( () => {
        let u = !1;
        return (async () => {
            const d = s.current;
            if (!(!d || !e || u))
                try {
                    const {processedCanvas: p, dimensions: f} = await AE(e, d, o, i);
                    if (u)
                        return;
                    p.toBlob(x => {
                        if (u || !x)
                            return;
                        const g = URL.createObjectURL(x);
                        l(g, f)
                    }
                    , "image/png", .92)
                } catch (p) {
                    if (u)
                        return;
                    console.error("Processing error:", p),
                    a(p instanceof Error ? p.message : "Failed to process image")
                }
        }
        )(),
        () => {
            u = !0
        }
    }
    , [e, o, i, l, a]),
    E.jsxs("div", {
        className: "space-y-4",
        children: [E.jsxs("div", {
            className: "text-center",
            children: [E.jsx("h3", {
                className: "text-base sm:text-lg font-semibold mb-2",
                children: "Processing Image"
            }), E.jsxs("p", {
                className: "text-sm text-muted-foreground break-words px-2",
                children: [e.name, " • ", Math.round(e.size / 1024), "KB"]
            })]
        }), E.jsxs("div", {
            className: "relative bg-muted rounded-lg overflow-hidden",
            children: [r && E.jsx("div", {
                className: "absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10",
                children: E.jsxs("div", {
                    className: "flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 text-muted-foreground px-4 text-center",
                    children: [E.jsx(dw, {
                        className: "w-6 h-6 animate-spin flex-shrink-0"
                    }), E.jsx("span", {
                        className: "font-medium text-sm sm:text-base",
                        children: "Applying duotone effect..."
                    })]
                })
            }), E.jsx("canvas", {
                ref: s,
                className: "w-full h-auto max-h-[50vh] sm:max-h-96 object-contain",
                style: {
                    display: "block"
                }
            }), !r && E.jsx("div", {
                className: "absolute inset-0 processing-overlay pointer-events-none"
            })]
        }), !r && E.jsx("div", {
            className: "text-center text-sm text-muted-foreground px-2",
            children: E.jsxs("p", {
                children: ["✨ Duotone effect applied with ", o ? "pink shadows and green highlights" : "green shadows and pink highlights"]
            })
        })]
    })
}
  , Nr = y.forwardRef( ({className: e, ...t}, n) => E.jsx("div", {
    ref: n,
    className: _e("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
}));
Nr.displayName = "Card";
const IE = y.forwardRef( ({className: e, ...t}, n) => E.jsx("div", {
    ref: n,
    className: _e("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
IE.displayName = "CardHeader";
const FE = y.forwardRef( ({className: e, ...t}, n) => E.jsx("h3", {
    ref: n,
    className: _e("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
FE.displayName = "CardTitle";
const zE = y.forwardRef( ({className: e, ...t}, n) => E.jsx("p", {
    ref: n,
    className: _e("text-sm text-muted-foreground", e),
    ...t
}));
zE.displayName = "CardDescription";
const $E = y.forwardRef( ({className: e, ...t}, n) => E.jsx("div", {
    ref: n,
    className: _e("p-6 pt-0", e),
    ...t
}));
$E.displayName = "CardContent";
const UE = y.forwardRef( ({className: e, ...t}, n) => E.jsx("div", {
    ref: n,
    className: _e("flex items-center p-6 pt-0", e),
    ...t
}));
UE.displayName = "CardFooter";
const yf = ({processedImage: e, onReset: t, isMobile: n=!1}) => {
    const r = async () => {
        try {
            const s = `${e.filename.replace(/\.[^/.]+$/, "")}_brave-pink-hero-green-1312.png`
              , l = document.createElement("a");
            l.href = e.url,
            l.download = s,
            document.body.appendChild(l),
            l.click(),
            document.body.removeChild(l)
        } catch (i) {
            console.error("Download failed:", i)
        }
    }
      , o = Math.round(e.url.length * .75 / 1024);
    return n ? E.jsxs("div", {
        className: "flex items-center justify-between gap-3",
        children: [E.jsxs("div", {
            className: "flex items-center space-x-3 flex-1 min-w-0",
            children: [E.jsxs("div", {
                className: "relative flex-shrink-0",
                children: [E.jsx("img", {
                    src: e.url,
                    alt: "Processed duotone image",
                    className: "w-12 h-12 object-cover rounded-lg shadow-sm border"
                }), E.jsx("div", {
                    className: "absolute -top-1 -right-1 p-0.5 bg-primary rounded-full",
                    children: E.jsx(Ba, {
                        className: "w-2 h-2 text-primary-foreground"
                    })
                })]
            }), E.jsxs("div", {
                className: "text-left min-w-0 flex-1",
                children: [E.jsx("h4", {
                    className: "font-medium text-foreground text-sm truncate",
                    children: e.filename
                }), E.jsxs("p", {
                    className: "text-xs text-muted-foreground",
                    children: [e.dimensions.width, " × ", e.dimensions.height, "px"]
                })]
            })]
        }), E.jsxs("div", {
            className: "flex items-center space-x-2 flex-shrink-0",
            children: [E.jsxs(Tr, {
                variant: "outline",
                size: "sm",
                onClick: t,
                className: "min-h-[44px] px-3",
                children: [E.jsx(Fd, {
                    className: "w-4 h-4"
                }), E.jsx("span", {
                    className: "sr-only",
                    children: "Replace Photo"
                })]
            }), E.jsxs(Tr, {
                size: "sm",
                onClick: r,
                className: "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg min-h-[44px] px-4",
                children: [E.jsx(Id, {
                    className: "w-4 h-4 mr-2"
                }), E.jsx("span", {
                    children: "Download"
                })]
            })]
        })]
    }) : E.jsx(Nr, {
        className: "p-6 shadow-card mx-2 sm:mx-0",
        children: E.jsxs("div", {
            className: "flex flex-col lg:flex-row items-center justify-between gap-6",
            children: [E.jsxs("div", {
                className: "flex items-center space-x-4",
                children: [E.jsxs("div", {
                    className: "relative",
                    children: [E.jsx("img", {
                        src: e.url,
                        alt: "Processed duotone image",
                        className: "w-20 h-20 object-cover rounded-lg shadow-sm border"
                    }), E.jsx("div", {
                        className: "absolute -top-2 -right-2 p-1 bg-primary rounded-full",
                        children: E.jsx(Ba, {
                            className: "w-3 h-3 text-primary-foreground"
                        })
                    })]
                }), E.jsxs("div", {
                    className: "text-left",
                    children: [E.jsx("h4", {
                        className: "font-semibold text-foreground",
                        children: e.filename
                    }), E.jsxs("p", {
                        className: "text-sm text-muted-foreground",
                        children: [e.dimensions.width, " × ", e.dimensions.height, "px"]
                    }), E.jsxs("p", {
                        className: "text-xs text-muted-foreground",
                        children: ["~", o, "KB PNG"]
                    })]
                })]
            }), E.jsxs("div", {
                className: "flex items-center space-x-3",
                children: [E.jsxs(Tr, {
                    variant: "outline",
                    size: "lg",
                    onClick: t,
                    className: "flex items-center space-x-2 min-h-[44px]",
                    children: [E.jsx(Fd, {
                        className: "w-4 h-4"
                    }), E.jsx("span", {
                        children: "Replace Photo"
                    })]
                }), E.jsxs(Tr, {
                    size: "lg",
                    onClick: r,
                    className: "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg flex items-center space-x-2 min-h-[44px]",
                    children: [E.jsx(Id, {
                        className: "w-4 h-4"
                    }), E.jsx("span", {
                        children: "Download PNG"
                    })]
                })]
            })]
        })
    })
}
;
function BE(e) {
    const t = y.useRef({
        value: e,
        previous: e
    });
    return y.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
    t.current.value = e),
    t.current.previous), [e])
}
var sl = "Switch"
  , [VE,sC] = ci(sl)
  , [HE,WE] = VE(sl)
  , Cg = y.forwardRef( (e, t) => {
    const {__scopeSwitch: n, name: r, checked: o, defaultChecked: i, required: s, disabled: l, value: a="on", onCheckedChange: u, form: c, ...d} = e
      , [p,f] = y.useState(null)
      , x = Ze(t, v => f(v))
      , g = y.useRef(!1)
      , w = p ? c || !!p.closest("form") : !0
      , [m,h] = Xh({
        prop: o,
        defaultProp: i ?? !1,
        onChange: u,
        caller: sl
    });
    return E.jsxs(HE, {
        scope: n,
        checked: m,
        disabled: l,
        children: [E.jsx(je.button, {
            type: "button",
            role: "switch",
            "aria-checked": m,
            "aria-required": s,
            "data-state": Tg(m),
            "data-disabled": l ? "" : void 0,
            disabled: l,
            value: a,
            ...d,
            ref: x,
            onClick: me(e.onClick, v => {
                h(S => !S),
                w && (g.current = v.isPropagationStopped(),
                g.current || v.stopPropagation())
            }
            )
        }), w && E.jsx(bg, {
            control: p,
            bubbles: !g.current,
            name: r,
            value: a,
            checked: m,
            required: s,
            disabled: l,
            form: c,
            style: {
                transform: "translateX(-100%)"
            }
        })]
    })
}
);
Cg.displayName = sl;
var kg = "SwitchThumb"
  , Pg = y.forwardRef( (e, t) => {
    const {__scopeSwitch: n, ...r} = e
      , o = WE(kg, n);
    return E.jsx(je.span, {
        "data-state": Tg(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
    })
}
);
Pg.displayName = kg;
var QE = "SwitchBubbleInput"
  , bg = y.forwardRef( ({__scopeSwitch: e, control: t, checked: n, bubbles: r=!0, ...o}, i) => {
    const s = y.useRef(null)
      , l = Ze(s, i)
      , a = BE(n)
      , u = Bm(t);
    return y.useEffect( () => {
        const c = s.current;
        if (!c)
            return;
        const d = window.HTMLInputElement.prototype
          , f = Object.getOwnPropertyDescriptor(d, "checked").set;
        if (a !== n && f) {
            const x = new Event("click",{
                bubbles: r
            });
            f.call(c, n),
            c.dispatchEvent(x)
        }
    }
    , [a, n, r]),
    E.jsx("input", {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: l,
        style: {
            ...o.style,
            ...u,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
        }
    })
}
);
bg.displayName = QE;
function Tg(e) {
    return e ? "checked" : "unchecked"
}
var Ng = Cg
  , KE = Pg;
const pc = y.forwardRef( ({className: e, ...t}, n) => E.jsx(Ng, {
    className: _e("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", e),
    ...t,
    ref: n,
    children: E.jsx(KE, {
        className: _e("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
    })
}));
pc.displayName = Ng.displayName;
const GE = ({checked: e, onCheckedChange: t, disabled: n=!1}) => E.jsxs("div", {
    className: "flex items-center space-x-3 min-h-[44px]",
    children: [E.jsx(pc, {
        id: "reverse-toggle",
        checked: e,
        onCheckedChange: t,
        disabled: n,
        className: "data-[state=checked]:bg-primary",
        "aria-describedby": "reverse-description"
    }), E.jsxs("div", {
        className: "flex flex-col",
        children: [E.jsx("label", {
            htmlFor: "reverse-toggle",
            className: "text-sm font-medium text-foreground cursor-pointer select-none",
            children: "Reverse duotone"
        }), E.jsx("p", {
            id: "reverse-description",
            className: "text-xs text-muted-foreground",
            children: e ? "Pink shadows, Green highlights" : "Green shadows, Pink highlights"
        })]
    })]
})
  , YE = ({useClassicColors: e, onToggle: t, disabled: n=!1}) => E.jsxs("div", {
    className: "flex items-center space-x-3 min-h-[44px]",
    children: [E.jsx(pc, {
        id: "color-toggle",
        checked: e,
        onCheckedChange: t,
        disabled: n,
        className: "data-[state=checked]:bg-primary",
        "aria-describedby": "color-description"
    }), E.jsxs("div", {
        className: "flex flex-col",
        children: [E.jsx("label", {
            htmlFor: "color-toggle",
            className: "text-sm font-medium text-foreground cursor-pointer select-none",
            children: "Classic colors"
        }), E.jsx("p", {
            id: "color-description",
            className: "text-xs text-muted-foreground",
            children: e ? "Original pink/green shades" : "Optimized color-blind friendly"
        })]
    })]
})
  , XE = () => {
    const [e,t] = y.useState(null)
      , [n,r] = y.useState(null)
      , [o,i] = y.useState(!1)
      , [s,l] = y.useState(null)
      , [a,u] = y.useState(!1)
      , [c,d] = y.useState(!1)
      , [p] = gf(a, 200)
      , [f] = gf(c, 200)
      , x = y.useCallback(S => {
        l(null),
        r(C => (C != null && C.url && URL.revokeObjectURL(C.url),
        null)),
        t(S),
        i(!0)
    }
    , [])
      , g = y.useCallback(S => {
        u(S)
    }
    , [])
      , w = y.useCallback(S => {
        d(S)
    }
    , [])
      , m = y.useCallback( (S, C) => {
        r(k => (k != null && k.url && URL.revokeObjectURL(k.url),
        e ? {
            url: S,
            filename: e.name,
            dimensions: C
        } : null)),
        i(!1)
    }
    , [e])
      , h = y.useCallback(S => {
        l(S),
        i(!1)
    }
    , [])
      , v = y.useCallback( () => {
        r(S => (S != null && S.url && URL.revokeObjectURL(S.url),
        null)),
        t(null),
        l(null),
        i(!1),
        u(!1),
        d(!1)
    }
    , []);
    return y.useEffect( () => () => {
        r(S => (S != null && S.url && URL.revokeObjectURL(S.url),
        null))
    }
    , []),
    E.jsxs("div", {
        className: "min-h-screen bg-gradient-surface pb-safe",
        children: [E.jsxs("div", {
            className: "container mx-auto px-4 py-4 sm:py-8 max-w-4xl",
            children: [E.jsxs("header", {
                className: "text-center mb-6 sm:mb-12",
                children: [E.jsx("h1", {
                    className: "text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-duotone bg-clip-text text-transparent mb-2 sm:mb-4",
                    children: "Brave Pink Hero Green 1312"
                }), E.jsx("p", {
                    className: "text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2",
                    children: "Pink × Green duotone. Local & private."
                }), E.jsx("p", {
                    className: "text-sm text-muted-foreground mt-2 px-2",
                    children: "Transform your photos with beautiful duotone effects. All processing happens in your browser."
                }), E.jsx("p", {
                    className: "text-sm text-muted-foreground mt-1 px-2",
                    children: "Now color-blind friendly — switch to classic if you prefer the original look."
                })]
            }), E.jsxs("main", {
                className: "space-y-4 sm:space-y-8 pb-20 sm:pb-8",
                children: [!e && !n && E.jsx(Nr, {
                    className: "p-4 sm:p-8 shadow-card mx-2 sm:mx-0",
                    children: E.jsx(TE, {
                        onFileSelect: x
                    })
                }), s && E.jsx(Nr, {
                    className: "p-4 sm:p-6 border-destructive bg-destructive/5 mx-2 sm:mx-0",
                    children: E.jsxs("div", {
                        className: "text-center",
                        children: [E.jsx("p", {
                            className: "text-destructive font-medium mb-4",
                            children: s
                        }), E.jsx("button", {
                            onClick: v,
                            className: "px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors min-h-[44px]",
                            children: "Try Again"
                        })]
                    })
                }), e && E.jsxs(E.Fragment, {
                    children: [E.jsx(Nr, {
                        className: "p-4 sm:p-6 shadow-card mx-2 sm:mx-0",
                        children: E.jsx(DE, {
                            file: e,
                            onProcessingComplete: m,
                            onProcessingError: h,
                            isProcessing: o,
                            isReversed: p,
                            useClassicColors: f
                        })
                    }), E.jsx(Nr, {
                        className: "p-4 sm:p-6 shadow-card mx-2 sm:mx-0",
                        children: E.jsxs("div", {
                            className: "space-y-4",
                            children: [E.jsx(YE, {
                                useClassicColors: c,
                                onToggle: w,
                                disabled: o
                            }), E.jsx(GE, {
                                checked: a,
                                onCheckedChange: g,
                                disabled: o
                            })]
                        })
                    })]
                })]
            }), E.jsxs("footer", {
                className: "text-center mt-8 sm:mt-16 pt-8 border-t border-border px-2",
                children: [E.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: "All processing happens locally in your browser. Your photos never leave your device."
                }), E.jsxs("p", {
                    className: "text-xs text-muted-foreground/70 mt-2",
                    children: ["developed by ", E.jsx("a", {
                        href: "https://instagram.com/mhmmadeffan",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-primary hover:text-primary/80 transition-colors underline",
                        children: "Muhammad Effan Choirunanda"
                    })]
                })]
            }), E.jsx("div", {
                className: "h-20 sm:hidden",
                "aria-hidden": "true"
            })]
        }), n && E.jsx("div", {
            className: "fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border pb-safe sm:hidden",
            children: E.jsx("div", {
                className: "p-4 pb-6",
                children: E.jsx(yf, {
                    processedImage: n,
                    onReset: v,
                    isMobile: !0
                })
            })
        }), n && E.jsx("div", {
            className: "hidden sm:block",
            children: E.jsx(yf, {
                processedImage: n,
                onReset: v,
                isMobile: !1
            })
        })]
    })
}
  , qE = () => {
    const e = Eg();
    return y.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    E.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: E.jsxs("div", {
            className: "text-center",
            children: [E.jsx("h1", {
                className: "text-4xl font-bold mb-4",
                children: "404"
            }), E.jsx("p", {
                className: "text-xl text-gray-600 mb-4",
                children: "Oops! Page not found"
            }), E.jsx("a", {
                href: "/",
                className: "text-blue-500 hover:text-blue-700 underline",
                children: "Return to Home"
            })]
        })
    })
}
  , ZE = new MS
  , JE = () => E.jsx(IS, {
    client: ZE,
    children: E.jsxs(dS, {
        children: [E.jsx(Yw, {}), E.jsx(Tx, {}), E.jsx(EE, {
            children: E.jsxs(wE, {
                children: [E.jsx(Ja, {
                    path: "/",
                    element: E.jsx(XE, {})
                }), E.jsx(Ja, {
                    path: "*",
                    element: E.jsx(qE, {})
                })]
            })
        })]
    })
});
Bh(document.getElementById("root")).render(E.jsx(JE, {}));
