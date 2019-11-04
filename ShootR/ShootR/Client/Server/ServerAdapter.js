/// <reference path="../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../../Scripts/typings/signalr/signalr.d.ts" />
/// <reference path="IPayloadDefinitions.ts" />
/// <reference path="PayloadDecompressor.ts" />
/// <reference path="ServerConnectionManager.ts" />
/// <reference path="IUserInformation.ts" />
/// <reference path="IClientInitialization.ts" />
/// <reference path="../HUD/Chat.ts" />
var ShootR;
(function (ShootR) {
    var Server;
    (function (Server) {
        var ServerAdapter = /** @class */ (function () {
            function ServerAdapter(Connection, Proxy, authCookieName) {
                var _this = this;
                this.Connection = Connection;
                this.Proxy = Proxy;
                var savedProxyInvoke = this.Proxy.invoke;
                this.OnPayload = new eg.EventHandler1();
                this.OnLeaderboardUpdate = new eg.EventHandler1();
                this.OnForcedDisconnct = new eg.EventHandler();
                this.OnControlTransferred = new eg.EventHandler();
                this.OnPingRequest = new eg.EventHandler();
                this.OnMapResize = new eg.EventHandler1();
                this.OnMessageReceived = new eg.EventHandler1();
                this._connectionManager = new Server.ServerConnectionManager(authCookieName);
                this.Proxy.invoke = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this.Connection.state === $.signalR.connectionState.connected) {
                        return savedProxyInvoke.bind.apply(savedProxyInvoke, [_this.Proxy].concat(args));
                    }
                };
            }
            ServerAdapter.prototype.Negotiate = function () {
                var _this = this;
                var userInformation = this._connectionManager.PrepareRegistration(), result = $.Deferred();
                this.Wire();
                this.Connection.start().done(function () {
                    _this.TryInitialize(userInformation, function (initialization) {
                        initialization.UserInformation = userInformation;
                        _this._payloadDecompressor = new Server.PayloadDecompressor(initialization.CompressionContracts);
                        result.resolve(initialization);
                        _this.Proxy.invoke("readyForPayloads");
                    });
                });
                return result.promise();
            };
            ServerAdapter.prototype.Stop = function () {
                this.Connection.stop();
            };
            ServerAdapter.prototype.TryInitialize = function (userInformation, onComplete, count) {
                var _this = this;
                if (count === void 0) { count = 0; }
                var p = this.Proxy.invoke("initializeClient", [userInformation.RegistrationID]);
                p.done(function (initialization) {
                    if (!initialization) {
                        if (count >= ServerAdapter.NEGOTIATE_RETRIES) {
                            console.log("Could not negotiate with server, refreshing the page.");
                            window.location.reload();
                        }
                        else {
                            setTimeout(function () {
                                _this.TryInitialize(userInformation, onComplete, count + 1);
                            }, ServerAdapter.RETRY_DELAY.Milliseconds);
                        }
                    }
                    else {
                        onComplete(initialization);
                    }
                }).fail(function (err) { return console.log(err); });
            };
            ServerAdapter.prototype.Wire = function () {
                var _this = this;
                this.Proxy.on("d", function (payload) {
                    _this.OnPayload.Trigger(_this._payloadDecompressor.Decompress(payload));
                });
                this.Proxy.on("l", function (leaderboardUpdate) {
                    _this.OnLeaderboardUpdate.Trigger(_this._payloadDecompressor.DecompressLeaderboard(leaderboardUpdate));
                });
                this.Proxy.on("disconnect", function () {
                    _this.OnForcedDisconnct.Trigger();
                });
                this.Proxy.on("controlTransferred", function () {
                    _this.OnControlTransferred.Trigger();
                });
                this.Proxy.on("pingBack", function () {
                    _this.OnPingRequest.Trigger();
                });
                this.Proxy.on("mapSizeIncreased", function (size) {
                    _this.OnMapResize.Trigger(new eg.Size2d(size.Width, size.Height));
                });
                this.Proxy.on("chatMessage", function (from, message, type) {
                    _this.OnMessageReceived.Trigger(new ShootR.ChatMessage(from, message, type));
                });
            };
            ServerAdapter.NEGOTIATE_RETRIES = 3;
            ServerAdapter.RETRY_DELAY = eg.TimeSpan.FromSeconds(1);
            return ServerAdapter;
        }());
        Server.ServerAdapter = ServerAdapter;
    })(Server = ShootR.Server || (ShootR.Server = {}));
})(ShootR || (ShootR = {}));
//# sourceMappingURL=ServerAdapter.js.map