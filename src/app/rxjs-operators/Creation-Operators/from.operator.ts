// from ilə array və ya collectional data-ları observable etmək üçün

import { from } from "rxjs";


const observableArr = from<number[]>([1, 2, 3, 4, 5, 6])
const observableMap = from(new Map())
observableArr.subscribe((arr) => {
    console.log(arr)
})

observableMap.subscribe((map) => {
    console.log(map)
})