// index ile datani qaytarir

import { elementAt, of } from "rxjs";


const data = of(1, 2, 3)
data.pipe(elementAt(2)).subscribe((data) => console.log(data)) // return : 3