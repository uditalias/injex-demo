import { Animal } from "./animal";

export class Cat implements Animal {
  eat() {
    return false;
  }

  sleep() {
    return true;
  }
}
