// 2 Observable arasinda condition müəyyən etmək üçün istifadə olunur (conditional rendering-e oxsayir)

import { iif, of } from "rxjs";

const state: boolean = false

iif(() => state, of('true olarsa bura run olunur'), of('false olarsa bura run olunur')).subscribe((res) => console.log(res))