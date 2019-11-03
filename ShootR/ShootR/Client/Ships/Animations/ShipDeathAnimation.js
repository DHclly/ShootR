/// <reference path="../../../Scripts/endgate-0.2.1.d.ts" />
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
    var ShipDeathAnimation = /** @class */ (function (_super) {
        __extends(ShipDeathAnimation, _super);
        function ShipDeathAnimation(contentManager) {
            var _this = _super.call(this, eg.Vector2d.Zero, contentManager.GetImage("ShipExplosion"), ShipDeathAnimation.FPS, ShipDeathAnimation.FRAME_SIZE, ShipDeathAnimation.FRAME_COUNT) || this;
            _this.Rotation = (Math.random() * (Math.PI * 100)) / 100;
            _this.Visible = false;
            return _this;
        }
        ShipDeathAnimation.prototype.Play = function () {
            this.Visible = true;
            _super.prototype.Play.call(this);
        };
        ShipDeathAnimation.FRAME_SIZE = new eg.Size2d(128, 128);
        ShipDeathAnimation.FRAME_COUNT = 30;
        ShipDeathAnimation.FPS = 25;
        return ShipDeathAnimation;
    }(ShootR.Animation));
    ShootR.ShipDeathAnimation = ShipDeathAnimation;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=ShipDeathAnimation.js.map