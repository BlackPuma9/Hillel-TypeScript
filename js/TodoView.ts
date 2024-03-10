import Todo from './Todo';

interface TodoViewInterface {
  renderList(todos: Array<Todo>): void;
  removeRow(id: number): void;
  renderNewRow(todo: Todo): void;
}

class TodoView implements TodoViewInterface {
  private readonly todoListSection = 'todoList';
  renderList(todos: Array<Todo>): void {
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

  removeRow(id: number): void {
    const row = document.querySelector(`[data-row-id='${id}']`);
    row?.remove();
  }

  renderNewRow(todo: Todo) {
    document.querySelector('tbody')?.append(this.prepareRow(todo));
  }

  private prepareRow = (todo: Todo): HTMLTableRowElement => {
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

export type { TodoViewInterface };
export default TodoView;
