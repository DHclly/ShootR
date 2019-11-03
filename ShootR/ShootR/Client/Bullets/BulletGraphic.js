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
    var BulletGraphic = /** @class */ (function (_super) {
        __extends(BulletGraphic, _super);
        function BulletGraphic(position, size, contentManager) {
            var _this = 
            // The Graphic color is transparent because all graphics that represent a ship will be added as a child.
            _super.call(this, position.X, position.Y, size.Width, size.Height, eg.Graphics.Color.Transparent) || this;
            _this._bulletBody = new eg.Graphics.Sprite2d(0, 0, contentManager.GetImage("Bullet"));
            _this.AddChild(_this._bulletBody);
            return _this;
        }
        BulletGraphic.prototype.HideBullet = function () {
            this._bulletBody.Visible = false;
        };
        return BulletGraphic;
    }(eg.Graphics.Rectangle));
    ShootR.BulletGraphic = BulletGraphic;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=BulletGraphic.js.map