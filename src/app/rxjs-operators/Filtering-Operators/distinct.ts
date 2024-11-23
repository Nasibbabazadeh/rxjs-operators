// flow-daki eyni datalari legv edib tekrarsiz bir observable qaytarir

import { distinct, distinctUntilChanged, distinctUntilKeyChanged, of } from "rxjs";


const obs = of(1, 2, 3, 45, 6, 1, 2, 3, 54, 5, 215, 45, 54, 1)

obs.pipe(distinct(value => value)).subscribe(data => console.log(data))


//!distinctUntilChanged => burda Observable-da flow-da olan datalari parçalayaraq eyni olanları ayırır
// məsələn => (1,1,2,2,1,1, 3,4) => birinci (1,1) => 1 sonra (2,2) => 2 sonra (1,1) => 1 sonra (3) => 3 sonra (4) => 4  ====>>> nəticə : (1,2,1,3,4) olaraq bütün eyniləri silmir


//!distinctUntilKeyChanged => key üçün işləyir objectlər üçün
interface Person {
    name: string
}

const objObservable = of<Person[]>(
    { name: 'ali' },
    { name: 'ali' },
    { name: 'atas' },
)

objObservable.pipe(distinctUntilChanged((prev: Person, current: Person) => prev.name === current.name)).subscribe((data) => console.log(data))

objObservable.pipe(distinctUntilKeyChanged('name')).subscribe((data) => console.log(data))

