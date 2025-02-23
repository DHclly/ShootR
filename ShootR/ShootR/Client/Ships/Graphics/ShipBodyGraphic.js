/// <reference path="../../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../Levels/ShipLevelManager.ts" />
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
    var ShipBodyGraphic = /** @class */ (function (_super) {
        __extends(ShipBodyGraphic, _super);
        function ShipBodyGraphic(levelManager) {
            var _this = this;
            var body = ShipBodyGraphic._bodyGraphics[Math.min(levelManager.Level, 13)];
            _this = _super.call(this, 0, 0, body) || this;
            levelManager.OnLevelChange.Bind(function (newLevel) {
                _this.Image = _this.DetermineBody(levelManager);
            });
            return _this;
        }
        ShipBodyGraphic.prototype.DetermineBody = function (levelManager) {
            return ShipBodyGraphic._bodyGraphics[Math.min(levelManager.Level, 13)];
        };
        // Made as a static so we don't have to construct the ship bodies every time a new ship is created.
        ShipBodyGraphic.LoadShipBodies = function (contentManager) {
            ShipBodyGraphic._bodyGraphics = new Array();
            ShipBodyGraphic._bodyGraphics[1] = ShipBodyGraphic._bodyGraphics[2] = contentManager.GetImage("Ship1");
            ShipBodyGraphic._bodyGraphics[3] = ShipBodyGraphic._bodyGraphics[4] = contentManager.GetImage("Ship3");
            ShipBodyGraphic._bodyGraphics[5] = ShipBodyGraphic._bodyGraphics[6] = contentManager.GetImage("Ship5");
            ShipBodyGraphic._bodyGraphics[7] = contentManager.GetImage("Ship7");
            ShipBodyGraphic._bodyGraphics[8] = contentManager.GetImage("Ship8");
            ShipBodyGraphic._bodyGraphics[9] = contentManager.GetImage("Ship9");
            ShipBodyGraphic._bodyGraphics[10] = ShipBodyGraphic._bodyGraphics[11] = contentManager.GetImage("Ship10");
            ShipBodyGraphic._bodyGraphics[12] = contentManager.GetImage("Ship12");
            ShipBodyGraphic._bodyGraphics[13] = contentManager.GetImage("Ship10");
        };
        return ShipBodyGraphic;
    }(eg.Graphics.Sprite2d));
    ShootR.ShipBodyGraphic = ShipBodyGraphic;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=ShipBodyGraphic.js.map