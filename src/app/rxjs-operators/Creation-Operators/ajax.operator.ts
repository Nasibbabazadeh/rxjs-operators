import { ajax } from 'rxjs/ajax'
// ajax api endpointe request atib response-u Observable kimi qaytarmağa imkan verir amma httpClient daha effektiv olduğu üçün işlədilmir.


const response: any = ajax.getJSON('http-url')
const response2: any = ajax('http-url').subscribe(data => data)