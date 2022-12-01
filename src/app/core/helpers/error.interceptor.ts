import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthenticationService} from '@service/auth.service';
import Swal from 'sweetalert2';
import {TIME_DIALOG} from '@utils/constants';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      switch (err.status) {
        case 401:
          this.authenticationService.logout();
          location.reload();
          break;
        case 409:
          this.alertMessage(err.error);
          break;
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }

  alertMessage(error: any): void {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: error.message,
      showConfirmButton: false,
      timer: TIME_DIALOG,
    });
  }
}
