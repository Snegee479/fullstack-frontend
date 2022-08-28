import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'sanitize'
})

export class SanitizePipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) { }

  transform(value: string):SafeResourceUrl {

    return this._sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
