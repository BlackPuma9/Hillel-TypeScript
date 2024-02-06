"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(surname, name, password) {
        this.surname = surname;
        this.name = name;
        this.password = password;
    }
    getUserInfo() {
        return `User: ${this.surname} ${this.name}, password: ${this.password}`;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map