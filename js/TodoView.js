"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoView {
    constructor() {
        this.todoListSection = 'todoList';
        this.prepareRow = (todo) => {
            const container = document.createElement('tr');
            container.setAttribute('data-row-id', todo.id.toString());
            container.innerHTML = `
        <td>${todo.id}</td> 
        <td>${todo.title}</td> 
        <td>${todo.completed ? 'Yes' : 'No'}</td> 
        <td>
          <button 
            type="button" 
            class="btn-close delete" 
            aria-label="Close" 
            data-id="${todo.id}"
          >
          </button>
        </td>`;
            return container;
        };
    }
    renderList(todos) {
        const section = document.getElementById(this.todoListSection);
        if (section === null) {
            throw new Error('Can not render todoList section');
        }
        const thead = document.createElement('thead');
        thead.innerHTML = `
      <tr>
        <th scope="col">#</th>
        <th scope="col">Task Name</th>
        <th scope="col">Status</th>
        <th scope="col">Delete</th>
      </tr>`;
        const tbody = document.createElement('tbody');
        tbody.append(...todos.map(this.prepareRow));
        const table = document.createElement('table');
        table.className = 'table';
        table.append(thead);
        table.append(tbody);
        section.append(table);
    }
    removeRow(id) {
        const row = document.querySelector(`[data-row-id='${id}']`);
        row === null || row === void 0 ? void 0 : row.remove();
    }
    renderNewRow(todo) {
        var _a;
        (_a = document.querySelector('tbody')) === null || _a === void 0 ? void 0 : _a.append(this.prepareRow(todo));
    }
}
exports.default = TodoView;
//# sourceMappingURL=TodoView.js.map