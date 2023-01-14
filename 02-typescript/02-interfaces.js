"use strict";
var _this = this;
exports.__esModule = true;
exports.A = void 0;
//02-interfaces
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
exports.A = A;
var user = {
    nombre: 'Marco',
    apellido: 'Salazar',
    casado: 0,
    sueldo: 11.2,
    estado: 'AC',
    imprimirUsuario: function (mensaje) {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: function (impuesto) {
        // @ts-ignore
        return user.sueldo + _this.sueldo * impuesto;
    },
    estadoActual: function () {
        // @ts-ignore
        switch (_this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
};
