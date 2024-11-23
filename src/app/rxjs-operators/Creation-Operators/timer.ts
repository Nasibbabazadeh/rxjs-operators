
import { interval, timer } from "rxjs";


// setIntervalin alternativ Observable qaytaran operator

const intervalByObservable = interval(2000)
intervalByObservable.subscribe((data: number) => console.log('interval', data))


// setTimeout alternative

timer(1000).subscribe(() => console.log('hello'))
timer(2000, 250).subscribe(() => console.log('250 ms bir təkrar edəcək'))