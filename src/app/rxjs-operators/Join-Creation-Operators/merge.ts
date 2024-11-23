//concat-a oxsayir amma behaviour ferqi var
// datalar sirali sekilde gelmir concat kimi!!!

import { merge, of } from "rxjs";


const mergedObservable = merge(of(1, 2), of(3, 4))