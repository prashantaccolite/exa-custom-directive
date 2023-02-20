import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(private _renderer: Renderer2, private ref: ElementRef) { }

  @HostBinding('attr.role') role = 'admin';

  @HostListener('click') onClickFun() {
    this.role = this.role == 'admin' ? 'guest' : 'admin';
  }

  @HostListener('mouseenter') mouseenterFun() {
    this._renderer.setStyle(this.ref.nativeElement, 'backgroundColor', 'red')
  }

  @HostListener('mouseleave') mouseleaveFun() {
    this._renderer.setStyle(this.ref.nativeElement, 'backgroundColor', 'yellow')
  }

}
