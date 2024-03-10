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
Object.defineProperty(exports, "__esModule", { value: true });
class TodoRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield fetch('https://jsonplaceholder.typicode.com/todos');
            return (yield result.json());
        });
    }
    save(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    completed: false,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            return (yield result.json());
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE',
            });
        });
    }
}
exports.default = TodoRepository;
//# sourceMappingURL=TodoRepository.js.map