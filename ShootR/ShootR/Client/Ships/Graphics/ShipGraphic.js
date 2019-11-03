/// <reference path="../../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="ShipLifeGraphic.ts" />
/// <reference path="ShipDamageGraphic.ts" />
/// <reference path="ShipBodyGraphic.ts" />
/// <reference path="../Ship.ts" />
/// <reference path="../Levels/ShipLevelManager.ts" />
/// <reference path="ShipStatusTextGraphic.ts" />
/// <reference path="ShipNameGraphic.ts" />
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
    var ShipGraphic = /** @class */ (function (_super) {
        __extends(ShipGraphic, _super);
        function ShipGraphic(name, userControlled, levelManager, lifeController, position, rotation, size, contentManager) {
            var _this = 
            // The Graphic color is transparent because all graphics that represent a ship will be added as a child.
            _super.call(this, position.X, position.Y, size.Width, size.Height, eg.Graphics.Color.Transparent) || this;
            _this.Body = new ShootR.ShipBodyGraphic(levelManager);
            _this.RotateShip(rotation);
            _this._damageGraphic = new ShootR.ShipDamageGraphic(lifeController, contentManager);
            _this._statusGraphic = new ShootR.ShipStatusTextGraphic(levelManager, lifeController);
            _this.AddChild(_this.Body);
            _this.AddChild(_this._statusGraphic);
            _this.Body.AddChild(_this._damageGraphic);
            if (!userControlled) {
                _this._lifeBar = new ShootR.ShipLifeGraphic(lifeController);
                _this._nameGraphic = new ShootR.ShipNameGraphic(name);
                _this.AddChild(_this._lifeBar);
                _this.AddChild(_this._nameGraphic);
            }
            return _this;
        }
        ShipGraphic.prototype.Status = function (text, size, color, fadeDuration, reverseDirection) {
            this._statusGraphic.Status(text, size, color, fadeDuration, reverseDirection);
        };
        ShipGraphic.prototype.AddChildToShip = function (child) {
            this.Body.AddChild(child);
        };
        ShipGraphic.prototype.RotateShip = function (newRotation) {
            this.Body.Rotation = newRotation;
        };
        ShipGraphic.prototype.HideShip = function () {
            if (this._lifeBar) {
                this._lifeBar.Visible = false;
                this._nameGraphic.Visible = false;
            }
            this.Body.Visible = false;
        };
        ShipGraphic.prototype.Update = function (gameTime) {
            this._statusGraphic.Update(gameTime);
        };
        return ShipGraphic;
    }(eg.Graphics.Rectangle));
    ShootR.ShipGraphic = ShipGraphic;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=ShipGraphic.js.map