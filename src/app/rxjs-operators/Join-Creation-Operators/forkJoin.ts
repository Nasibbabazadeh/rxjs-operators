// forkJoin operator combineLatest məntiqi ilə işləyir amma tək fərq =  ilk öncə bütün observable-ların tamamlanmasını gözləyir sonra sonuncu dəyərləri birləşdirir
import { forkJoin, of } from "rxjs";


forkJoin(of(1, 2, 3), of(1, 2, 5))

// əgər timer və ya intervalla inteqrasiyası olsa bitməsini gözləyir