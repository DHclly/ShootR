/// <reference path="../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../Server/IPayloadDefinitions.ts" />
/// <reference path="../Common/LifeController.ts" />
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
    var ShipLifeController = /** @class */ (function (_super) {
        __extends(ShipLifeController, _super);
        function ShipLifeController(payload) {
            return _super.call(this, payload.LifeController.Health, payload.MaxLife) || this;
        }
        ShipLifeController.START_LIFE = 100;
        ShipLifeController.BAD_COLOR = eg.Graphics.Color.FromHex("#ED1E79");
        ShipLifeController.HURT_COLOR = eg.Graphics.Color.FromHex("#FF931E");
        ShipLifeController.GOOD_COLOR = eg.Graphics.Color.FromHex("#7AC943");
        ShipLifeController.BAD_THRESHOLD = .3;
        ShipLifeController.HURT_THRESHOLD = .6;
        return ShipLifeController;
    }(ShootR.LifeController));
    ShootR.ShipLifeController = ShipLifeController;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=ShipLifeController.js.map