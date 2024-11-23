// bir Observable obyekti ona suscribe olunduğu zaman yaranır

import { defer, Observable, of, timer } from "rxjs";

// suscribe olmadan observable yaradilir
const observable1 = new Observable((data) => {
    data.next(new Date())
    data.complete()
})
// or
const observable2 = of(new Date())


// !DEFER OPERATOR
// suscribe olunduqdan sonra observable yaradilir
const observableByDefer = defer(() => of(new Date()))

// or
const observableByDefer2 = defer(() => new Observable((data) => {
    data.next(new Date())
    data.complete()
}))
// 5saniye ferq
timer(5000).subscribe(() => {
    observable1.subscribe((data) => console.log(data))
    observableByDefer.subscribe((data) => console.log(data))
})