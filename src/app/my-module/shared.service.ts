import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

// 參考：(1) https://blog.johnwu.cc/article/angular-4-services.html
// 參考：(2) https://www.itdaan.com/tw/648c564a025d8c810f5bf84ee5dca17b

// @Injectable({
//   providedIn: 'root',
// })
@Injectable()
export class SharedService {

  constructor() {
    console.log(` ============ SharedService 建立 =========== `);
  }

  // Observable
  private dataBePass = new Subject<any>();

  // Observable number streams
  data$: Observable<any> = this.dataBePass.asObservable();

  // Service commands
  setData(val: any): void {
    this.dataBePass.next(val);
  }

  getData(): Observable<any> {
    return this.data$;
  }

}
