// axış zamanı müəyyən əməliyyatların sonuncu dəyərlərini qaytarmaq üçün istifadə olunur

import { debounce, fromEvent, interval, timer } from "rxjs";


const eventObs = fromEvent(document, 'click')
eventObs.subscribe((e) => { console.log('clicked') }) // sürətli olaraq click edərsə ard-arda biz müəyyən zaman intervalı vermək istəyərik ki ondan sonra icra et


eventObs.pipe(debounce(value => interval(250))).subscribe((e) => console.log('clicked')) // biz nə qədər ard-arda click etsək də 250ms altındadırsa click vaxtı sonuncu click-i gözləyir və ondan sonra suscribe olur


//input onChange keyup üçün istifadə edilə bilər(app.ts)


//debounceTime => debounce-in parametrli versiyasi


