/// <reference path="../../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../../Common/Animation.ts" />
/// <reference path="../HealthPack.ts" />
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
    var HealthPackGraphic = /** @class */ (function (_super) {
        __extends(HealthPackGraphic, _super);
        function HealthPackGraphic(position, contentManager) {
            var _this = _super.call(this, position, contentManager.GetImage("HealthPack"), HealthPackGraphic.FPS, ShootR.HealthPack.SIZE, HealthPackGraphic.FRAME_COUNT) || this;
            _this.Play(true);
            return _this;
        }
        HealthPackGraphic.FRAME_COUNT = 18;
        HealthPackGraphic.FPS = 18;
        return HealthPackGraphic;
    }(ShootR.Animation));
    ShootR.HealthPackGraphic = HealthPackGraphic;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=HealthPackGraphic.js.map