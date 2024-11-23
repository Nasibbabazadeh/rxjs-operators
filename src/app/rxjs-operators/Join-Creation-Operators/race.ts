// race operator bir neçə observable arasından ilk axışa başlayan observable-ı catch edir

import { of, race } from "rxjs";

const obs1 = of('data', 'data', 'data', 'data', 'data',)
const obs2 = of('anotherData', 'anotherData', 'anotherData', 'anotherData', 'anotherData',)
const obs3 = of('urlPaths', 'urlPaths', 'urlPaths', 'urlPaths', 'urlPaths',)
const obs4 = of('otherObservableDatas', 'otherObservableDatas', 'otherObservableDatas', 'otherObservableDatas', 'otherObservableDatas',)
const obs5 = of('1', '1', '1', '1', '1',)

race(obs1, obs2, obs3, obs4, obs5).subscribe((firstObs) => {
    console.log(firstObs)
})