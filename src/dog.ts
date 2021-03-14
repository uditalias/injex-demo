import { define, inject, injectAlias, singleton } from "@injex/core";
import { Animal } from "./animal";
import { Person } from "./person";

@define()
@singleton()
export class Dog implements Animal {
  @injectAlias("Person") private owner!: Person;

  sleep() {
    return true;
  }

  eat() {
    return true;
  }

  bark() {
    return true;
  }

  ownersName() {
    return this.owner.getName();
  }
}
