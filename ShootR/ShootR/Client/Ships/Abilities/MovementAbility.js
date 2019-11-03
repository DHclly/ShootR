/// <reference path="../../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../ShipMovementController.ts" />
/// <reference path="Ability.ts" />
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
    var MovementAbility = /** @class */ (function (_super) {
        __extends(MovementAbility, _super);
        function MovementAbility(name, MovementController) {
            var _this = _super.call(this, name) || this;
            _this.MovementController = MovementController;
            _this._initialPower = MovementController.Power;
            return _this;
        }
        MovementAbility.prototype.IncreaseSpeedBy = function (amount) {
            this.MovementController.Power += amount;
        };
        MovementAbility.prototype.MultiplySpeedBy = function (amount) {
            this.MovementController.Power *= amount;
        };
        MovementAbility.prototype.DecreaseSpeedBy = function (amount) {
            this.MovementController.Power -= amount;
        };
        MovementAbility.prototype.ResetSpeed = function () {
            this.MovementController.Power = this._initialPower;
        };
        return MovementAbility;
    }(ShootR.Ability));
    ShootR.MovementAbility = MovementAbility;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=MovementAbility.js.map