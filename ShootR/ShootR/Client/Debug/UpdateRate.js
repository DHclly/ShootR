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
        var UpdateRate = /** @class */ (function (_super) {
            __extends(UpdateRate, _super);
            function UpdateRate(informer, game) {
                return _super.call(this, UpdateRate.TITLE, informer, game.Configuration.UpdateRate) || this;
            }
            UpdateRate.prototype.Update = function (gameTime) {
                this.MarkRate();
                _super.prototype.Update.call(this, gameTime);
            };
            UpdateRate.TITLE = "Update Rate";
            return UpdateRate;
        }(Debug.RateMonitor));
        Debug.UpdateRate = UpdateRate;
    })(Debug = ShootR.Debug || (ShootR.Debug = {}));
})(ShootR || (ShootR = {}));
//# sourceMappingURL=UpdateRate.js.map