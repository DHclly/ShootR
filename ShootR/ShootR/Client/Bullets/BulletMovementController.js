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
    var BulletMovementController = /** @class */ (function (_super) {
        __extends(BulletMovementController, _super);
        function BulletMovementController(movables, payload) {
            var _this = _super.call(this, movables) || this;
            _this.LoadPayload(payload);
            return _this;
        }
        BulletMovementController.prototype.LoadPayload = function (payload) {
            this.Position = payload.Position;
            this.Velocity = payload.Velocity;
        };
        BulletMovementController.prototype.Update = function (gameTime) {
            this.Position = this.Position.Add(this.Velocity.Multiply(gameTime.Elapsed.Seconds));
            _super.prototype.Update.call(this, gameTime);
        };
        BulletMovementController.prototype.Dispose = function () {
            // Make all active functions no-op
            this.Update = function () { };
            this.LoadPayload = function () { };
        };
        return BulletMovementController;
    }(eg.MovementControllers.MovementController));
    ShootR.BulletMovementController = BulletMovementController;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=BulletMovementController.js.map