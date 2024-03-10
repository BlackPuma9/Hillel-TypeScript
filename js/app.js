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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const TodoController_1 = __importDefault(require("./TodoController"));
const TodoRepository_1 = __importDefault(require("./TodoRepository"));
const TodoView_1 = __importDefault(require("./TodoView"));
const controller = new TodoController_1.default(new TodoRepository_1.default(), new TodoView_1.default());
document.addEventListener('DOMContentLoaded', () => {
    void (() => __awaiter(void 0, void 0, void 0, function* () {
        yield controller.showList();
    }))();
});
(_a = document.getElementById('todoList')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', event => {
    void (() => __awaiter(void 0, void 0, void 0, function* () {
        const target = event.target;
        if (target.classList.contains('delete') && target.hasAttribute('data-id')) {
            const rowId = target.getAttribute('data-id');
            yield controller.delete(Number(rowId));
        }
    }))();
});
(_b = document.getElementById('save-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    void (() => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const input = document.getElementById('title-input');
        yield controller.create(String(input === null || input === void 0 ? void 0 : input.value));
        (_a = document.getElementById('modal-close')) === null || _a === void 0 ? void 0 : _a.click();
    }))();
});
//# sourceMappingURL=app.js.map