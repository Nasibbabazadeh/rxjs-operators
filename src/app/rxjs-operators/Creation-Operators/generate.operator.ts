// condition tanimlayib ona uygun operation aparmaq 

import { generate } from "rxjs";

const conditionalObservable = generate(1, value => value <= 10, value => value += 5)


//deprecated!!!!