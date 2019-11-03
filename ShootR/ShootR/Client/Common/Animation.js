/// <reference path="../../Scripts/endgate-0.2.1.d.ts" />
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
    var Animation = /** @class */ (function (_super) {
        __extends(Animation, _super);
        function Animation(position, spriteSheet, fps, frameSize, frameCount) {
            var _this = _super.call(this, position.X, position.Y, spriteSheet, frameSize.Width, frameSize.Height) || this;
            _this._animator = new eg.Graphics.SpriteAnimation(spriteSheet, fps, frameSize, frameCount);
            _this._animator.Step(1);
            return _this;
        }
        Object.defineProperty(Animation.prototype, "OnComplete", {
            get: function () {
                return this._animator.OnComplete;
            },
            enumerable: true,
            configurable: true
        });
        Animation.prototype.Play = function (repeat) {
            if (repeat === void 0) { repeat = false; }
            this._animator.Play(repeat);
        };
        Animation.prototype.Stop = function () {
            this._animator.Stop();
        };
        Animation.prototype.Update = function (gameTime) {
            this._animator.Update(gameTime);
        };
        return Animation;
    }(eg.Graphics.Sprite2d));
    ShootR.Animation = Animation;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=Animation.js.map