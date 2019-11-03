/// <reference path="../../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="MovementAbility.ts" />
/// <reference path="../ShipMovementController.ts" />
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
    var Boost = /** @class */ (function (_super) {
        __extends(Boost, _super);
        function Boost(_movementController) {
            var _this = _super.call(this, Boost.NAME, _movementController) || this;
            _this._movementController = _movementController;
            _this.OnStart = new eg.EventHandler();
            _this.OnStop = new eg.EventHandler();
            return _this;
        }
        Boost.prototype.Activate = function () {
            this._movementController.StopAllMovement();
            this._movementController.Moving.Forward = true;
            this._movementController.Controllable = false;
            if (!this.Active) {
                this.MultiplySpeedBy(Boost.SPEED_INCREASE);
                this.OnStart.Trigger();
            }
            _super.prototype.Activate.call(this);
        };
        Boost.prototype.Deactivate = function () {
            if (this.Active) {
                this.ResetSpeed();
                _super.prototype.Deactivate.call(this);
                this._movementController.Moving.Forward = false;
                this._movementController.Controllable = true;
                this.OnStop.Trigger();
            }
        };
        Boost.prototype.Update = function (gameTime) {
            if (this.Active && eg.TimeSpan.DateSpan(this.ActivatedAt, gameTime.Now).Milliseconds >= Boost.DURATION.Milliseconds) {
                this.Deactivate();
            }
        };
        Boost.NAME = "Boost";
        Boost.SPEED_INCREASE = 3; // Updated by server configuration value
        Boost.DURATION = eg.TimeSpan.FromSeconds(3); // Updated by server configuration value
        return Boost;
    }(ShootR.MovementAbility));
    ShootR.Boost = Boost;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=Boost.js.map