import { Directive, ElementRef, Input } from '@angular/core';

/**
 * A base class for components that can be disabled.
 */
@Directive()
export abstract class DisableableDirective {

  private _disabled = false;

  @Input()
  public set disabled(v: boolean) {

    // Trace statement just to dump the call stack in Jest - allows us to see whether UMD or other formats are used.
    console.trace(`Setting disabled: ${v}`);

    this._disabled = v;
  }
  public get disabled(): boolean {
    return this._disabled;
  }

  constructor(private _elementRef: ElementRef<HTMLElement>) {
  }

  public getNativeElement() {
    return this._elementRef.nativeElement;
  }

  public getElement() {
    return this._elementRef;
  }

}
