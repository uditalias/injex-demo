import { define, singleton } from "@injex/core";

export interface IPerson {
  getName(): string;
  setName(value: string): void;
}

@define()
@singleton()
export class Person implements IPerson {
  private name!: string;

  setName(value: string) {
    this.name = value;
  }

  getName(): string {
    return "SOME_NAME";
  }
}
