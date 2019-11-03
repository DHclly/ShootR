/// <reference path="../../../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../../../Space/MapBoundary.ts" />
/// <reference path="../../../Server/IPayloadDefinitions.ts" />
/// <reference path="../../Ship.ts" />
/// <reference path="../Boost.ts" />
/// <reference path="AbilityHandler.ts" />
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
    var ShipAbilityHandler = /** @class */ (function (_super) {
        __extends(ShipAbilityHandler, _super);
        function ShipAbilityHandler(myShip) {
            var _this = this;
            var boost = new ShootR.Boost(myShip.MovementController);
            _this = _super.call(this, [boost]) || this;
            _this.Boost = boost;
            myShip.OnCollision.Bind(function (data) {
                if (data.With instanceof ShootR.MapBoundary) {
                    _this.Boost.Deactivate();
                }
            });
            return _this;
        }
        ShipAbilityHandler.prototype.LoadPayload = function (payload) {
            if (payload.Boost && !this.Boost.Active) {
                this.Boost.Activate();
            }
            else if (!payload.Boost) {
                this.Boost.Deactivate();
            }
        };
        return ShipAbilityHandler;
    }(ShootR.AbilityHandler));
    ShootR.ShipAbilityHandler = ShipAbilityHandler;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=ShipAbilityHandler.js.map