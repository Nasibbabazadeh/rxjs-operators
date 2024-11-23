//Observable-daki bütün axışı yoxa sayır və sadəcə ERROR VƏ COMPLETE dəyərləri catch etmək üçün istifadə olunur

import { ignoreElements, of } from "rxjs";


of('flow', 'flow', 'flow', 'flox').pipe(ignoreElements()).subscribe({
    error: error => console.log('error happened during data flow', error),
    complete: () => console.log(
        'complete data flow'
    )
})