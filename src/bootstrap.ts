import { Dog } from "./dog";

import { bootstrap, inject, IBootstrap } from "@injex/core";

@bootstrap()
export class Bootstrap implements IBootstrap {
  @inject() private dog!: Dog;

  public run() {
    console.log("owner: ", this.dog.ownersName());
  }
}
