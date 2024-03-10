import Todo from './Todo';

interface TodoRepositoryInterface {
  getAll(): Promise<Array<Todo>>;
  save(title: string): Promise<Todo>;
  delete(id: number): Promise<void>;
}

class TodoRepository implements TodoRepositoryInterface {
  async getAll(): Promise<Array<Todo>> {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos');
    return (await result.json()) as Array<Todo>;
  }

  async save(title: string): Promise<Todo> {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos', {
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

    return (await result.json()) as Todo;
  }

  async delete(id: number): Promise<void> {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    });
  }
}

export type { TodoRepositoryInterface };
export default TodoRepository;
