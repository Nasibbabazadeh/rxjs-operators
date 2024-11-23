// bir neçə observable-dakı eyni periodda olan dataları toplayıb bir array formasında observable yaradır

import { of, zip } from "rxjs";


zip(of(1, 2, 3), of(7, 8, 9)).subscribe((arr) => {
    console.log(arr) // [1,7] [2,8] [3,9]
})