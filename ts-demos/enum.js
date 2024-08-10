"use strict";
var Providers;
(function (Providers) {
    Providers[Providers["huawei"] = 0] = "huawei";
    Providers[Providers["apple"] = 1] = "apple";
    Providers[Providers["google"] = 2] = "google";
})(Providers || (Providers = {}));
console.log(Providers.huawei);
console.log(Providers[0]);
