import { name, age, widthdrow } from "./modules/user.js";
// import { widthdrow } from "./modules/account.js";

console.log(name);
console.log(age);
widthdrow();

console.log("=========Short cut=====================");

import * as usr from "./modules/account.js";
console.log(usr.accounr_no);
console.log(usr.accout_type);
usr.widthdrow();
console.log("==============Default =========");
import { default as amit } from "./modules/account.js";
amit();
