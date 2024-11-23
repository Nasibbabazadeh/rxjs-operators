import { range } from "rxjs";


const rangeData = range(10, 20) // from and count

rangeData.subscribe((data) => console.log(data))