// müəyyən bir condition veririk və partition bizə iki observable yaradır birini parçalayaraq 1.Conditiona uyğun olan və 2.Condition-a uyğun olmayan

import { of, partition } from "rxjs";

const observation = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


const [evenValue, oddValue] = partition(observation, value => value % 2 === 0)

evenValue.subscribe((evenNum) => {
    console.log(evenNum)
})


oddValue.subscribe((oddNum) => {
    console.log(oddNum)
})