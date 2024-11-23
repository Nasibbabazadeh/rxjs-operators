// birdən çox obervable olduqdan combine edib ən sonuncu dəyərləri birləşdirir

import { combineLatest, concat, of } from "rxjs";

const combineLatestObservable = combineLatest(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9))

combineLatestObservable.subscribe((combinedData) => console.log(combinedData)) // ==>> result : 3,6,9

//concat ise sira ile hamisini yayib birlesdiri

const concatObservables = concat(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9)) //==>> hamısını birləşdirir

concatObservables.subscribe((concatData) => console.log(concatData)) // ==>> result : 1,2,3,4,5,6,7,8,9