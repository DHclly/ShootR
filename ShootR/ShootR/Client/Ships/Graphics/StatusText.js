/// <reference path="../../../Scripts/endgate-0.2.1.d.ts" />
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
    var StatusText = /** @class */ (function (_super) {
        __extends(StatusText, _super);
        function StatusText(text, size, color, fadeDuration, reverseDirection) {
            if (fadeDuration === void 0) { fadeDuration = StatusText.DEFAULT_FADE_DURATION; }
            if (reverseDirection === void 0) { reverseDirection = false; }
            var _this = _super.call(this, 0, 0, text, color) || this;
            var directionMultipler = reverseDirection ? -1 : 1;
            _this.FontSettings.FontSize = size + "px";
            _this.FontSettings.FontFamily = eg.Graphics.Assets.FontFamily.Verdana;
            _this.FontSettings.FontWeight = "bold";
            _this._movementTween = new eg.Tweening.Vector2dTween(_this.Position, new eg.Vector2d(directionMultipler * eg.Particles.Range.RandomNumber(StatusText.MOVE_X_RANGE), directionMultipler * eg.Particles.Range.RandomNumber(StatusText.MOVE_Y_RANGE)), fadeDuration, eg.Tweening.Functions.Cubic.EaseOut);
            _this._fadeTween = new eg.Tweening.NumberTween(100, 0, fadeDuration, eg.Tweening.Functions.Cubic.EaseOut);
            _this._active = false;
            _this._movementTween.OnChange.Bind(function (newPosition) {
                _this.Position = newPosition;
            });
            _this._fadeTween.OnChange.Bind(function (fade) {
                _this.Opacity = fade / 100;
            });
            _this._movementTween.OnComplete.Bind(function (movementTween) {
                _this.Dispose();
            });
            _this._movementTween.Play();
            _this._fadeTween.Play();
            return _this;
        }
        StatusText.prototype.Update = function (gameTime) {
            this._movementTween.Update(gameTime);
            this._fadeTween.Update(gameTime);
        };
        StatusText.prototype.Dispose = function () {
            if (!this._active) {
                this._active = true;
                this._movementTween.Dispose();
                this._fadeTween.Dispose();
                _super.prototype.Dispose.call(this);
            }
        };
        StatusText.MOVE_Y_RANGE = new eg.Particles.Range(-50, -200);
        StatusText.MOVE_X_RANGE = new eg.Particles.Range(-50, 50);
        StatusText.DEFAULT_FADE_DURATION = eg.TimeSpan.FromSeconds(1);
        return StatusText;
    }(eg.Graphics.Text2d));
    ShootR.StatusText = StatusText;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=StatusText.js.map