import { define, inject, injectAlias, singleton } from "@injex/core";
import { Animal } from "./animal";
import { Person } from "./person";

@define()
@singleton()
export class Dog implements Animal {

  // Using `inject` instead of `injectAlias`
  // The `injectAlias` is for cases where you have many classes
  // with the same `@alias(NAME)` and you want to inject them into
  // a keyd object or an array.
  // Also, I'm passing the Person class and not the name "Person".
  // Note that `@inject()` can be set with the module name or it's Type,
  // since the Person module name is "person", you can choose between Person or "person"
  @inject(Person) private owner!: Person; // Works
  //@inject("person") private owner!: Person; // Works
  //@inject("Person") private owner!: Person; // Won't work

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
