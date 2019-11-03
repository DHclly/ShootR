/// <reference path="../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../Server/IPayloadDefinitions.ts" />
/// <reference path="Powerup.ts" />
/// <reference path="Graphics/HealthPackGraphic.ts" />
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
    var HealthPack = /** @class */ (function (_super) {
        __extends(HealthPack, _super);
        function HealthPack(payload, contentManager) {
            var _this = _super.call(this, payload, new ShootR.HealthPackGraphic(payload.MovementController.Position, contentManager)) || this;
            _this._spawnedAt = new Date();
            return _this;
        }
        HealthPack.prototype.Update = function (gameTime) {
            if (eg.TimeSpan.DateSpan(this._spawnedAt, gameTime.Now).Milliseconds >= HealthPack.LIFE_SPAN.Milliseconds) {
                this.Destroy();
                return;
            }
            this.Graphic.Update(gameTime);
        };
        HealthPack.SIZE = new eg.Size2d(50);
        HealthPack.LIFE_SPAN = eg.TimeSpan.FromSeconds(6);
        return HealthPack;
    }(ShootR.Powerup));
    ShootR.HealthPack = HealthPack;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=HealthPack.js.map