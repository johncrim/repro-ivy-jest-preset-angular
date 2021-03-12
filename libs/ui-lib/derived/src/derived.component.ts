import { Component, ElementRef, Input, OnDestroy } from '@angular/core';
import { DisableableDirective } from '@this/ui-lib/base';
import { Observable, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

/** A test component which doesn't work when DisableableDirective is imported from a UMD module. */
@Component({
  selector: 'ui-derived',
  template: '<ng-content></ng-content>'
})
export class DerivedComponent
  extends DisableableDirective
  implements OnDestroy {

  @Input()
  on: boolean = false;

  /**
   * Override disabled, but state is held in base class.
   * NOTE: Base class properties can't be overridden in ES5; this requires ES 2015+.
   * So, this will fail when using UMD modules (in non-simple use-cases, eg the Observable below), which are ES5.
   */
  get disabled() {
    return super.disabled;
  }
  set disabled(value: boolean) {
    if (!this.on) {
      super.disabled = value;
    }
  }

  private _sub?: Subscription;

  constructor(elementRef: ElementRef<HTMLElement>) {
    super(elementRef);
    console.warn('Creating DerivedComponent');
  }

  ngOnDestroy() {
    this._sub?.unsubscribe();
  }

  toggleOn(observable: Observable<boolean>) {
    this._sub = observable.pipe(
      // Only emit changes + while enabled
      filter(v => !this.disabled)
    ).subscribe(v => this.on = v);
  }
}
