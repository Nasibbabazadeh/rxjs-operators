// DOM üzərindən elementi seçərək Observable olaraq event işləmək üçün

import { fromEvent } from "rxjs"

const button: HTMLElement = document.getElementById('btn')!

const handleButtonObservable = fromEvent(button, 'click')

handleButtonObservable.subscribe((event) => {
    console.log(event)
})