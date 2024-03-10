import { TodoRepositoryInterface } from './TodoRepository';
import { TodoViewInterface } from './TodoView';

class TodoController {
  constructor(
    private readonly todoRepository: TodoRepositoryInterface,
    private readonly todoView: TodoViewInterface,
  ) {}
  async showList(): Promise<void> {
    const todo = await this.todoRepository.getAll();

    this.todoView.renderList(todo);
  }

  async delete(id: number): Promise<void> {
    await this.todoRepository.delete(id);

    this.todoView.removeRow(id);
  }

  async create(title: string): Promise<void> {
    const todo = await this.todoRepository.save(title);

    this.todoView.renderNewRow(todo);
  }
}

export default TodoController;
