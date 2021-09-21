import { foo } from "./foo";
// Bar is imported but unused here, so we ignore it.
import { bar } from "./bar";

// JSON
import baz from "./baz.json";

const str = foo();
console.log(str);
console.log(baz);

import { VueElement } from "vue";
console.log(VueElement);

export const str_ = "situ2001";
