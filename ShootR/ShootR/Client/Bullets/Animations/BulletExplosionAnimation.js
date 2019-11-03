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
    var BulletExplosionAnimation = /** @class */ (function (_super) {
        __extends(BulletExplosionAnimation, _super);
        function BulletExplosionAnimation(contentManager) {
            var _this = _super.call(this, eg.Vector2d.Zero, contentManager.GetImage("BulletExplosion"), BulletExplosionAnimation.FPS, BulletExplosionAnimation.FRAME_SIZE, BulletExplosionAnimation.FRAME_COUNT) || this;
            _this.Rotation = (Math.random() * (Math.PI * 100)) / 100;
            _this.Visible = false;
            return _this;
        }
        BulletExplosionAnimation.prototype.Play = function () {
            this.Visible = true;
            _super.prototype.Play.call(this);
        };
        BulletExplosionAnimation.FRAME_SIZE = new eg.Size2d(64, 64);
        BulletExplosionAnimation.FRAME_COUNT = 24;
        BulletExplosionAnimation.FPS = 24;
        return BulletExplosionAnimation;
    }(ShootR.Animation));
    ShootR.BulletExplosionAnimation = BulletExplosionAnimation;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=BulletExplosionAnimation.js.map