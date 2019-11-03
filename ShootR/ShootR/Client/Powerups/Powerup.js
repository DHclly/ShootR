/// <reference path="../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../Server/IPayloadDefinitions.ts" />
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
    var Powerup = /** @class */ (function (_super) {
        __extends(Powerup, _super);
        function Powerup(payload, graphic) {
            var _this = _super.call(this, graphic.GetDrawBounds()) || this;
            _this.ID = payload.ID;
            _this.Graphic = graphic;
            return _this;
        }
        Powerup.prototype.LoadPayload = function (payload) {
            this.Bounds.Position = this.Graphic.Position = payload.MovementController.Position;
        };
        Powerup.prototype.Update = function (gameTime) {
        };
        Powerup.prototype.Destroy = function () {
            if (!this._destroyed) {
                this._destroyed = true;
                this.Dispose();
                this.Graphic.Dispose();
            }
        };
        return Powerup;
    }(eg.Collision.Collidable));
    ShootR.Powerup = Powerup;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=Powerup.js.map