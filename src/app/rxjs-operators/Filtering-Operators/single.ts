// Condition təyin etmə və condition-a uyğun bir data gözləyər əgər birdən artıq gələrsə error heç gəlməzsə undefined qaytarır

import { range, single } from "rxjs";


const obs = range(1, 5)

obs.pipe(single(num => num === 5)).subscribe({
    next(value) {
        console.log(value)
    },
    error(errorMessage) {
        console.log(errorMessage)
    }
})