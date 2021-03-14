export interface Animal {
  eat(): boolean;
  sleep(): boolean;
}

export class Animal implements Animal {
  eat() {
    return true;
  }

  sleep() {
    return false;
  }
}
