/// <reference path="../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../Server/IPayloadDefinitions.ts" />
/// <reference path="Abilities/AbilityHandlers/ShipAbilityHandler.ts" />
/// <reference path="Graphics/ShipGraphic.ts" />
/// <reference path="Animations/ShipAnimationHandler.ts" />
/// <reference path="ShipMovementController.ts" />
/// <reference path="ShipLifeController.ts" />
/// <reference path="Levels/ShipLevelManager.ts" />
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
    var Ship = /** @class */ (function (_super) {
        __extends(Ship, _super);
        function Ship(payload, contentManager) {
            var _this = this;
            var lifeController = new ShootR.ShipLifeController(payload);
            var levelManager = new ShootR.ShipLevelManager(payload);
            var graphic = new ShootR.ShipGraphic(payload.Name, payload.UserControlled, levelManager, lifeController, payload.MovementController.Position, payload.MovementController.Rotation, Ship.SIZE, contentManager);
            // Going to use the rectangle to "hold" all the other graphics
            _this = _super.call(this, graphic.GetDrawBounds()) || this;
            _this._destroyed = false;
            _this.OnExplosion = new eg.EventHandler();
            _this.LifeController = lifeController;
            _this.LevelManager = levelManager;
            _this.Graphic = graphic;
            _this.MovementController = new ShootR.ShipMovementController(new Array(_this.Bounds, _this.Graphic));
            _this.MovementController.UserControlled = payload.UserControlled;
            _this.AbilityHandler = new ShootR.ShipAbilityHandler(_this);
            _this.AnimationHandler = new ShootR.ShipAnimationHandler(_this, contentManager);
            _this.LoadPayload(payload, true);
            _this.Graphic.RotateShip(_this.MovementController.Rotation);
            return _this;
        }
        Ship.prototype.Update = function (gameTime) {
            this.AbilityHandler.Update(gameTime);
            this.MovementController.Update(gameTime);
            this.AnimationHandler.Update(gameTime);
            // Updates rotation
            this.Graphic.RotateShip(this.MovementController.Rotation);
            this.Graphic.Update(gameTime);
        };
        Ship.prototype.LoadPayload = function (payload, forceMovement) {
            this.ID = payload.ID;
            this.MovementController.LoadPayload(payload.MovementController, forceMovement);
            this.LifeController.LoadPayload(payload);
            this.LevelManager.LoadPayload(payload);
            this.AbilityHandler.LoadPayload(payload.Abilities);
        };
        Ship.prototype.Destroy = function (explode) {
            if (explode === void 0) { explode = false; }
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
        Ship.SIZE = new eg.Size2d(75);
        Ship.DAMAGE_INCREASE_RATE = .1;
        return Ship;
    }(eg.Collision.Collidable));
    ShootR.Ship = Ship;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=Ship.js.map