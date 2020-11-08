import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  @Input('appTimes') set render(numTimes: number) {
    this.viewContainer.clear();
    for (let i = 0; i < numTimes; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i
      });
    }
  }
}
