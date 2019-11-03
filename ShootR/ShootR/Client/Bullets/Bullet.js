/// <reference path="../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../Server/IPayloadDefinitions.ts" />
/// <reference path="BulletGraphic.ts" />
/// <reference path="BulletMovementController.ts" />
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
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        function Bullet(payload, contentManager) {
            var _this = this;
            // Going to use the rectangle to "hold" all the other graphics
            var bulletGraphic = new ShootR.BulletGraphic(payload.MovementController.Position, Bullet.SIZE, contentManager);
            _this = _super.call(this, bulletGraphic.GetDrawBounds()) || this;
            _this.Graphic = bulletGraphic;
            _this.OnExplosion = new eg.EventHandler();
            _this.MovementController = new ShootR.BulletMovementController(new Array(_this.Bounds, _this.Graphic), payload.MovementController);
            _this.AnimationHandler = new ShootR.BulletAnimationHandler(_this, contentManager);
            _this._spawnedAt = new Date().getTime();
            _this._destroyed = false;
            _this.LoadPayload(payload);
            return _this;
        }
        Bullet.prototype.Update = function (gameTime) {
            this.MovementController.Update(gameTime);
            this.AnimationHandler.Update(gameTime);
            // Bullets been alive too long
            if ((new Date().getTime() - this._spawnedAt) >= Bullet.BULLET_DIE_AFTER.Milliseconds) {
                this.Destroy(false);
            }
        };
        Bullet.prototype.LoadPayload = function (payload) {
            this.ID = payload.ID;
            this.MovementController.LoadPayload(payload.MovementController);
            // Ensure that our position matches the movement controllers position
            this.Bounds.Position = this.Graphic.Position = this.MovementController.Position;
        };
        Bullet.prototype.Destroy = function (explode) {
            if (explode === void 0) { explode = true; }
            if (!this._destroyed) {
                this._destroyed = true;
                this.MovementController.Dispose();
                if (!explode) {
                    this.Graphic.Dispose();
                    this.Dispose();
                }
                else {
                    // We rely on the completion of the explosion to finish disposing the bounds and graphic
                    this.OnExplosion.Trigger();
                }
            }
        };
        Bullet.SIZE = new eg.Size2d(13);
        Bullet.BULLET_DIE_AFTER = eg.TimeSpan.FromSeconds(2);
        return Bullet;
    }(eg.Collision.Collidable));
    ShootR.Bullet = Bullet;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=Bullet.js.map