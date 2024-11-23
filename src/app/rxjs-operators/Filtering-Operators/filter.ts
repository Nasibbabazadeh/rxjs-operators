// observable data-ni filter etmek ucun

import { filter, of } from "rxjs";


of(1, 2, 3, 4).pipe(filter(data => data % 2 === 0)).subscribe((data) => console.log(data))