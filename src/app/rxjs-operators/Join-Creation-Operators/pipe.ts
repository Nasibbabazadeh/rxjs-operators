// kod içərisində birdən çox operator istifadəsini təmin edir = pipe operator

import { filter, map, Observable } from "rxjs";


const obs1 = new Observable<number>(data => {
    data.next(1)
    data.next(2)
    data.next(3)
    data.next(4)
    data.next(5)
    data.next(6)
})

obs1.pipe(filter(data => data % 2 === 0), map(data => data + 'number')).subscribe((val) => console.log(val))