// axışda araya bir əməliyyat salıb sonuncu dəyəri döndürmək üçün istifadə olunur

import { audit, auditTime, map, timer } from "rxjs";


const obs1 = timer(1000)
obs1.pipe(audit(value => timer(2000)), map(x => x + 1)).subscribe((x) => console.log(x))

//auditTime => audit-in parametr qebul eden formasidir

const obs2 = timer(1000)
obs2.pipe(auditTime(2000), map(x => x + 1)).subscribe((x) => console.log(x))