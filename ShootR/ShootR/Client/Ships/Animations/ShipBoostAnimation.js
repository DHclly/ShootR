/// <reference path="../../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../Ship.ts" />
/// <reference path="../../Common/Animation.ts" />
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
    var ShipBoostAnimation = /** @class */ (function (_super) {
        __extends(ShipBoostAnimation, _super);
        function ShipBoostAnimation(contentManager) {
            var _this = _super.call(this, new eg.Vector2d(-ShootR.Ship.SIZE.HalfWidth - ShipBoostAnimation.FRAME_SIZE.HalfWidth, -2), contentManager.GetImage("Boost"), ShipBoostAnimation.FPS, ShipBoostAnimation.FRAME_SIZE, ShipBoostAnimation.FRAME_COUNT) || this;
            _this.Visible = false;
            return _this;
        }
        ShipBoostAnimation.prototype.Play = function () {
            this.Visible = true;
            _super.prototype.Play.call(this, true);
        };
        ShipBoostAnimation.prototype.Stop = function () {
            this.Visible = false;
            _super.prototype.Stop.call(this);
        };
        ShipBoostAnimation.FRAME_SIZE = new eg.Size2d(102, 50);
        ShipBoostAnimation.FRAME_COUNT = 10;
        ShipBoostAnimation.FPS = 12;
        return ShipBoostAnimation;
    }(ShootR.Animation));
    ShootR.ShipBoostAnimation = ShipBoostAnimation;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=ShipBoostAnimation.js.map