/// <reference path="../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../Ships/Ship.ts" />
/// <reference path="Map.ts" />
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
    var MapBoundary = /** @class */ (function (_super) {
        __extends(MapBoundary, _super);
        function MapBoundary(from, to) {
            var _this = this;
            var graphic = new eg.Graphics.Line2d(from.X, from.Y, to.X, to.Y, 1, MapBoundary.Color);
            _this = _super.call(this, graphic.GetDrawBounds()) || this;
            _this.Graphic = graphic;
            _this.Graphic.LineWidth = MapBoundary.BoundaryWidth;
            // Left or right
            if (from.X - to.X === 0) {
                _this._bounceMultiplier = new eg.Vector2d(-ShootR.Map.BARRIER_DEPRECATION, ShootR.Map.BARRIER_DEPRECATION);
            }
            else { // Top or bottom
                _this._bounceMultiplier = new eg.Vector2d(ShootR.Map.BARRIER_DEPRECATION, -ShootR.Map.BARRIER_DEPRECATION);
            }
            return _this;
        }
        MapBoundary.prototype.Collided = function (data) {
            if (data.With instanceof ShootR.Ship) {
                this.HandleShipCollision(data.With);
            }
            // TODO: Add bullet
        };
        MapBoundary.prototype.Dispose = function () {
            _super.prototype.Dispose.call(this);
            this.Graphic.Dispose();
        };
        MapBoundary.prototype.HandleShipCollision = function (ship) {
            var bounceMultiplier;
            ship.MovementController.StopMoving("Forward");
            ship.MovementController.StopMoving("Backward");
            ship.AnimationHandler.StopAllAnimations();
            this.RepositionShipInBounds(ship);
            // Reverse velocity, aka bounce
            ship.MovementController.Forces = ship.MovementController.Forces.Multiply(this._bounceMultiplier);
            ship.MovementController.Velocity = ship.MovementController.Velocity.Multiply(this._bounceMultiplier);
        };
        // Ugly
        MapBoundary.prototype.RepositionShipInBounds = function (ship) {
            // Re-position to be in-bounds
            if (ship.MovementController.Position.X - ShootR.Ship.SIZE.HalfWidth <= 1) {
                ship.MovementController.Position.X = ShootR.Ship.SIZE.HalfWidth + 3;
            }
            else if (ship.MovementController.Position.X + ShootR.Ship.SIZE.HalfWidth >= ShootR.Map.SIZE.Width - 1) {
                ship.MovementController.Position.X = ShootR.Map.SIZE.Width - ShootR.Ship.SIZE.HalfWidth - 3;
            }
            if (ship.MovementController.Position.Y - ShootR.Ship.SIZE.HalfHeight <= 1) {
                ship.MovementController.Position.Y = ShootR.Ship.SIZE.HalfHeight + 3;
            }
            else if (ship.MovementController.Position.Y + ShootR.Ship.SIZE.HalfHeight >= ShootR.Map.SIZE.Height - 1) {
                ship.MovementController.Position.Y = ShootR.Map.SIZE.Height - ShootR.Ship.SIZE.HalfHeight - 3;
            }
        };
        MapBoundary.Color = eg.Graphics.Color.FromHex("#3fa9f5");
        MapBoundary.BoundaryWidth = 5;
        return MapBoundary;
    }(eg.Collision.Collidable));
    ShootR.MapBoundary = MapBoundary;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=MapBoundary.js.map