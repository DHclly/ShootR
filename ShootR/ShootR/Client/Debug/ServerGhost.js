/// <reference path="../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../Ships/Ship.ts" />
/// <reference path="../Server/IPayloadDefinitions.ts" />
var ShootR;
(function (ShootR) {
    var Debug;
    (function (Debug) {
        var ServerGhost = /** @class */ (function () {
            function ServerGhost(_myShipId, _scene, _content) {
                this._myShipId = _myShipId;
                this._scene = _scene;
                this._content = _content;
            }
            ServerGhost.prototype.LoadPayload = function (payload) {
                var shipPayload;
                for (var i = 0; i < payload.length; i++) {
                    shipPayload = payload[i];
                    if (shipPayload.ID === this._myShipId) {
                        if (!this._ghost) {
                            this._ghost = new ShootR.Ship(shipPayload, this._content);
                            this._ghost.MovementController.UserControlled = false;
                            this._ghost.Graphic.Body.Opacity = .5;
                            this._scene.Add(this._ghost.Graphic);
                        }
                        else {
                            this._ghost.LoadPayload(shipPayload);
                        }
                    }
                }
            };
            ServerGhost.prototype.Update = function (gameTime) {
                if (this._ghost) {
                    this._ghost.Update(gameTime);
                }
            };
            return ServerGhost;
        }());
        Debug.ServerGhost = ServerGhost;
    })(Debug = ShootR.Debug || (ShootR.Debug = {}));
})(ShootR || (ShootR = {}));
//# sourceMappingURL=ServerGhost.js.map