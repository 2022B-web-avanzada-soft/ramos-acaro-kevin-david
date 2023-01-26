"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Componente = void 0;
var archivos_1 = require("./archivos");
var Componente = /** @class */ (function () {
    function Componente(nombre, marca, serial, precio, disponibilidad) {
        this.nombre = nombre;
        this.marca = marca;
        this.serial = serial;
        this.precio = precio;
        this.disponibilidad = disponibilidad;
    }
    Componente.obtenerComponentes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var contenidoArchivo, _a, _b, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, (0, archivos_1.leerArchivo)("./ListaDeComponentes.txt")];
                    case 1:
                        contenidoArchivo = _c.sent();
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, contenidoArchivo];
                    case 2: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                    case 3:
                        e_1 = _c.sent();
                        console.log(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Componente.obtenerComponente = function (nombre) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.obtenerComponentes()];
                    case 1: return [2 /*return*/, (_a.sent()).find(function (valorActual, indiceActual, arregloCompleto) {
                            return valorActual.nombre === nombre;
                        })];
                }
            });
        });
    };
    Componente.registrarComponente = function (componente) {
        return __awaiter(this, void 0, void 0, function () {
            var arregloComponentes, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.obtenerComponentes()];
                    case 1:
                        arregloComponentes = _a.sent();
                        arregloComponentes.push(componente);
                        return [4 /*yield*/, (0, archivos_1.escribirArchivo)("ListaDeComponentes.txt", JSON.stringify(arregloComponentes))];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        console.log(e_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Componente.actualizarComponente = function (componenteDesactualizado, componenteActualizado) {
        return __awaiter(this, void 0, void 0, function () {
            var arregloComponentes, arregloActualizado, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.obtenerComponentes()];
                    case 1:
                        arregloComponentes = _a.sent();
                        arregloActualizado = arregloComponentes.map(function (componentes) {
                            if (componentes.nombre === componenteDesactualizado) {
                                componentes = componenteActualizado;
                            }
                            return componentes;
                        });
                        return [4 /*yield*/, (0, archivos_1.escribirArchivo)("ListaDeComponentes.txt", JSON.stringify(arregloActualizado))];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _a.sent();
                        console.log(e_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Componente.eliminarComponente = function (componentePorEliminar) {
        return __awaiter(this, void 0, void 0, function () {
            var arregloComponentes, arregloActualizado, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.obtenerComponentes()];
                    case 1:
                        arregloComponentes = _a.sent();
                        arregloActualizado = arregloComponentes.filter(function (componente) {
                            return componente.nombre !== componentePorEliminar;
                        });
                        return [4 /*yield*/, (0, archivos_1.escribirArchivo)("ListaDeComponentes.txt", JSON.stringify(arregloActualizado))];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_4 = _a.sent();
                        console.log(e_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Componente;
}());
exports.Componente = Componente;
