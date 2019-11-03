/// <reference path="../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="GameInformer.ts" />
/// <reference path="RateMonitor.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ShootR;
(function (ShootR) {
    var Debug;
    (function (Debug) {
        var DrawRate = /** @class */ (function (_super) {
            __extends(DrawRate, _super);
            function DrawRate(informer) {
                return _super.call(this, DrawRate.TITLE, informer, 60) || this;
            }
            DrawRate.prototype.Draw = function (context) {
                this.MarkRate();
            };
            DrawRate.TITLE = "Draw Rate";
            return DrawRate;
        }(Debug.RateMonitor));
        Debug.DrawRate = DrawRate;
    })(Debug = ShootR.Debug || (ShootR.Debug = {}));
})(ShootR || (ShootR = {}));
//# sourceMappingURL=DrawRate.js.map