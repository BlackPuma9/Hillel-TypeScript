import TodoController from './TodoController';
import TodoRepository from './TodoRepository';
import TodoView from './TodoView';

const controller = new TodoController(new TodoRepository(), new TodoView());
document.addEventListener('DOMContentLoaded', () => {
  void (async () => {
    await controller.showList();
  })();
});

document.getElementById('todoList')?.addEventListener('click', event => {
  void (async () => {
    const target = event.target as Element;
    if (target.classList.contains('delete') && target.hasAttribute('data-id')) {
      const rowId = target.getAttribute('data-id');
      await controller.delete(Number(rowId));
    }
  })();
});

document.getElementById('save-btn')?.addEventListener('click', () => {
  void (async () => {
    const input = document.getElementById('title-input') as HTMLInputElement | null;
    await controller.create(String(input?.value));

    document.getElementById('modal-close')?.click();
  })();
});
