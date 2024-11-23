import { throwError } from "rxjs";

throwError(new Error('errorMessage example')).subscribe((errorMessage) => console.log(errorMessage))


//deprecated!!!!