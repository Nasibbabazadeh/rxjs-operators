// periodic olaraq bir zaman intervalinda sonuncu olan deyeri bize qaytarir
// debounce-a oxsayir amma ferq => debounce-da meselen 2s ara qoymusuqsa 2 saniye arasinda ne qeder click etsek bele sonuncu click-den sonra hesablayir amma sample-da click etdikde 2s araliqla oturur ard-arda click-de amma 2s altinda olanlari her sefer catch etmir !

import { fromEvent, interval, sample, sampleTime } from "rxjs";


const seconds = interval(250)
const handleClick = fromEvent(document, 'click')
handleClick.pipe(sample(seconds)).subscribe((e) => console.log(e.target))


//sampleTime => sample-in parametr goturen veziyyeti 


handleClick.pipe(sampleTime(250)).subscribe((e) => console.log(e.target))