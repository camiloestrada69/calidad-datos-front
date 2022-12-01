import {HttpParams} from '@angular/common/http';
import {Parametro} from '@app/core/models/parametro';

export class HttpUtils {

  public transformQueryParametersIterator(parameters: Parametro[]): HttpParams {
    let params = new HttpParams();
    parameters.forEach(param => {
      if (param && param.label && param.value) {
        params = params.set(param.label, param.value);
      }
    });
    return params;
  }
}
