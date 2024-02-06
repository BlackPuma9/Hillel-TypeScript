export class Book {
  constructor(
    public title: string,
    public author: string,
    public publishedYear: number,
  ) {}
  getInfo(): string {
    return `${this.author}, ${this.title}, ${this.publishedYear}`;
  }
}
