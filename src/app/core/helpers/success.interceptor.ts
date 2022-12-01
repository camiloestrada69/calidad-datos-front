import {HttpEvent, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import Swal from 'sweetalert2';
import {StandardResponse} from '@app/core/models/standarResponse';
import 'rxjs/add/operator/do';
import {TIME_DIALOG} from '@utils/constants';

export class SuccessInterceptor{
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<StandardResponse>> {
    return next.handle(request)
      .do(event => {
        if (event instanceof HttpResponse && event.body && event.body.status >= 200 && event.body.status < 300) {
          switch (event.body.status) {
            case 201:
              this.succesfulMessage(event.body);
              break;

            case 202:
              this.succesfulMessage(event.body);
              break;
          }
        }
      });

  }

  succesfulMessage(resques: any): void {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: resques.message,
      showConfirmButton: false,
      timer: TIME_DIALOG,
    });
  }
}
