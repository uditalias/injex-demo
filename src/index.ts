import { Injex } from "@injex/node";

Injex.create({
    rootDirs: [__dirname],

    // Changed the `globPattern` since ts-node running
    // the ts version of the files.
    globPattern: "/**/*.ts",
}).bootstrap();