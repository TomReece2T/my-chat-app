(self["webpackChunkconverse_js"] = self["webpackChunkconverse_js"] || []).push([[1107],{

/***/ 3418:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function (e, _) {
   true ? module.exports = _(__webpack_require__(2028)) : 0;
}(this, function (e) {
  "use strict";

  function _(e) {
    return e && "object" == typeof e && "default" in e ? e : {
      default: e
    };
  }
  var t = _(e),
    d = {
      name: "ja",
      weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
      weekdaysShort: "日_月_火_水_木_金_土".split("_"),
      weekdaysMin: "日_月_火_水_木_金_土".split("_"),
      months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
      monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
      ordinal: function (e) {
        return e + "日";
      },
      formats: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYY年M月D日",
        LLL: "YYYY年M月D日 HH:mm",
        LLLL: "YYYY年M月D日 dddd HH:mm",
        l: "YYYY/MM/DD",
        ll: "YYYY年M月D日",
        lll: "YYYY年M月D日 HH:mm",
        llll: "YYYY年M月D日(ddd) HH:mm"
      },
      meridiem: function (e) {
        return e < 12 ? "午前" : "午後";
      },
      relativeTime: {
        future: "%s後",
        past: "%s前",
        s: "数秒",
        m: "1分",
        mm: "%d分",
        h: "1時間",
        hh: "%d時間",
        d: "1日",
        dd: "%d日",
        M: "1ヶ月",
        MM: "%dヶ月",
        y: "1年",
        yy: "%d年"
      }
    };
  return t.default.locale(d, null, !0), d;
});

/***/ })

}]);
//# sourceMappingURL=ja-js.js.map