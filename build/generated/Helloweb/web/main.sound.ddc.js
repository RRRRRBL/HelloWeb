define(['dart_sdk'], (function load__web__main(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var main = Object.create(dart.library);
  var $innerHtml = dartx.innerHtml;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  main.main = function main$() {
    let a = 1;
    let b = 2;
    let c = a + b;
    dart.nullCheck(html.querySelector("#RipVanWinkle"))[$innerHtml] = "诶,如果看到这句话,说明Dart已经集成到了HTML中了！<br/> " + dart.str(c) + " = " + dart.str(a) + " + " + dart.str(b);
  };
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;AAKM,YAAI;AACJ,YAAI;AACJ,YAAI,AAAE,CAAD,GAAG,CAAC;AAEwC,IADvB,AAAE,eAAhC,mBAAc,gCACV,AAAiD,iDAAZ,CAAC,qBAAI,CAAC,qBAAI,CAAC;EACtD","file":"main.sound.ddc.js"}');
  // Exports:
  return {
    web__main: main
  };
}));

//# sourceMappingURL=main.sound.ddc.js.map
