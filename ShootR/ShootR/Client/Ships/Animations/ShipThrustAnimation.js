/// <reference path="../../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../Ship.ts" />
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
    var ShipThrustAnimation = /** @class */ (function (_super) {
        __extends(ShipThrustAnimation, _super);
        function ShipThrustAnimation(contentManager) {
            var _this = this;
            var thrustStartSpriteSheet = contentManager.GetImage("ThrustStart");
            var thrustSpriteSheet = contentManager.GetImage("Thrust");
            _this = _super.call(this, -ShootR.Ship.SIZE.HalfWidth - ShipThrustAnimation.FRAME_SIZE.HalfWidth, 0, thrustSpriteSheet, ShipThrustAnimation.FRAME_SIZE.Width, ShipThrustAnimation.FRAME_SIZE.Height) || this;
            _this._thrustStartSpriteSheet = thrustStartSpriteSheet;
            _this._thrustSpriteSheet = thrustSpriteSheet;
            _this._thrustStartAnimator = new eg.Graphics.SpriteAnimation(_this._thrustStartSpriteSheet, ShipThrustAnimation.FPS, ShipThrustAnimation.FRAME_SIZE, ShipThrustAnimation.FRAME_COUNT);
            _this._thrustAnimator = new eg.Graphics.SpriteAnimation(_this._thrustSpriteSheet, ShipThrustAnimation.FPS, ShipThrustAnimation.FRAME_SIZE, ShipThrustAnimation.FRAME_COUNT);
            _this._thrustStartAnimator.OnComplete.Bind(function () {
                _this.Image = _this._thrustSpriteSheet;
                _this._thrustAnimator.Play(true);
            });
            _this.Visible = false;
            return _this;
        }
        ShipThrustAnimation.prototype.Play = function () {
            this.Image = this._thrustStartSpriteSheet;
            this._thrustStartAnimator.Play();
            this.Visible = true;
        };
        ShipThrustAnimation.prototype.IsPlaying = function () {
            return this._thrustAnimator.IsPlaying() || this._thrustStartAnimator.IsPlaying();
        };
        ShipThrustAnimation.prototype.Stop = function () {
            this._thrustStartAnimator.Stop();
            this._thrustAnimator.Stop();
            this.Visible = false;
        };
        ShipThrustAnimation.prototype.Update = function (gameTime) {
            this._thrustStartAnimator.Update(gameTime);
            this._thrustAnimator.Update(gameTime);
        };
        ShipThrustAnimation.FRAME_SIZE = new eg.Size2d(52, 50);
        ShipThrustAnimation.FRAME_COUNT = 18;
        ShipThrustAnimation.FPS = 18;
        return ShipThrustAnimation;
    }(eg.Graphics.Sprite2d));
    ShootR.ShipThrustAnimation = ShipThrustAnimation;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=ShipThrustAnimation.js.map