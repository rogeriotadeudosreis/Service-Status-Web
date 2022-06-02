// @ts-ignore

import {Pipe, PipeTransform} from "@angular/core";
import {ServiceStatus} from "../model/service-status";


@Pipe({name: 'statusIndisponivelPipe'})
export class StatusIndisponivelPipe implements PipeTransform {

  found: string = "Indisponível";

  transform(status: ServiceStatus[]): any {
    return status?.filter(disp =>
      disp.unavailable?.toUpperCase())
  }
}
