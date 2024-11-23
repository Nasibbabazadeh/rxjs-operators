// observable yaradir

import { of } from "rxjs";

const observableCreation = of(1, 2, 3, 4, 5, 6, [1, 2, 3], new Map(), { key: 'value' })

observableCreation.subscribe((data) => console.log(data))