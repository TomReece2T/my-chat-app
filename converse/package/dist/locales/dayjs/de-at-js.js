(self["webpackChunkconverse_js"] = self["webpackChunkconverse_js"] || []).push([[7175],{

/***/ 7692:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function (e, n) {
   true ? module.exports = n(__webpack_require__(2028)) : 0;
}(this, function (e) {
  "use strict";

  function n(e) {
    return e && "object" == typeof e && "default" in e ? e : {
      default: e
    };
  }
  var t = n(e),
    i = {
      s: "ein paar Sekunden",
      m: ["eine Minute", "einer Minute"],
      mm: "%d Minuten",
      h: ["eine Stunde", "einer Stunde"],
      hh: "%d Stunden",
      d: ["ein Tag", "einem Tag"],
      dd: ["%d Tage", "%d Tagen"],
      M: ["ein Monat", "einem Monat"],
      MM: ["%d Monate", "%d Monaten"],
      y: ["ein Jahr", "einem Jahr"],
      yy: ["%d Jahre", "%d Jahren"]
    };
  function a(e, n, t) {
    var a = i[t];
    return Array.isArray(a) && (a = a[n ? 0 : 1]), a.replace("%d", e);
  }
  var r = {
    name: "de-at",
    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
    weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
    months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
    monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
    ordinal: function (e) {
      return e + ".";
    },
    weekStart: 1,
    formats: {
      LTS: "HH:mm:ss",
      LT: "HH:mm",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY HH:mm",
      LLLL: "dddd, D. MMMM YYYY HH:mm"
    },
    relativeTime: {
      future: "in %s",
      past: "vor %s",
      s: a,
      m: a,
      mm: a,
      h: a,
      hh: a,
      d: a,
      dd: a,
      M: a,
      MM: a,
      y: a,
      yy: a
    }
  };
  return t.default.locale(r, null, !0), r;
});

/***/ })

}]);
//# sourceMappingURL=de-at-js.js.map