/// <reference path="../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="GameInformer.ts" />
/// <reference path="../Game.ts" />
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
        var PayloadRate = /** @class */ (function (_super) {
            __extends(PayloadRate, _super);
            function PayloadRate(informer) {
                return _super.call(this, PayloadRate.TITLE, informer, 1000 / ShootR.Game.GameConfiguration.gameConfig.DRAW_INTERVAL) || this;
            }
            PayloadRate.prototype.LoadPayload = function (payload) {
                this.MarkRate();
            };
            PayloadRate.TITLE = "Payload Rate";
            return PayloadRate;
        }(Debug.RateMonitor));
        Debug.PayloadRate = PayloadRate;
    })(Debug = ShootR.Debug || (ShootR.Debug = {}));
})(ShootR || (ShootR = {}));
//# sourceMappingURL=PayloadRate.js.map