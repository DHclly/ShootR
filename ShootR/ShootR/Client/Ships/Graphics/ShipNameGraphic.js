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
    var ShipNameGraphic = /** @class */ (function (_super) {
        __extends(ShipNameGraphic, _super);
        function ShipNameGraphic(name) {
            var _this = _super.call(this, 0, ShootR.Ship.SIZE.HalfHeight + ShipNameGraphic.Y_OFFSET, name, ShipNameGraphic.NAME_COLOR) || this;
            _this.FontSettings.FontSize = ShipNameGraphic.FONT_SIZE;
            _this.FontSettings.FontFamily = eg.Graphics.Assets.FontFamily.Arial;
            _this.FontSettings.FontWeight = "bold";
            return _this;
        }
        ShipNameGraphic.FONT_SIZE = "15px";
        ShipNameGraphic.Y_OFFSET = 33;
        ShipNameGraphic.NAME_COLOR = eg.Graphics.Color.White;
        return ShipNameGraphic;
    }(eg.Graphics.Text2d));
    ShootR.ShipNameGraphic = ShipNameGraphic;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=ShipNameGraphic.js.map