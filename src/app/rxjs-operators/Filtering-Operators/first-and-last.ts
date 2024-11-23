//first operator => observable-daki ilk deyeri bize qaytarir

import { first, last, of } from "rxjs";


const obs = of(1, 2, 3, 4, 5)
obs.pipe(first()).subscribe((firstData) => console.log(firstData))


//Observable-daki sonuncu data



of(1, 2, 3, 4, 5).pipe(last()).subscribe((lastItem) => console.log(lastItem))