import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { DisableableDirective } from '@this/ui-lib/base';
import { expandoPanelAnimations } from './expando.animations';

/** A panel that expands down and back up. */
@Component({
  selector: 'ui-expando-panel',
  template: `<div @openClose *ngIf="expanded" >
                <ng-content></ng-content>
             </div>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [expandoPanelAnimations.openClose],
  host: {
    // tslint:disable-next-line: no-host-metadata-property
    'style': 'display:block; overflow:hidden'
  }
})
export class ExpandoPanelComponent
  extends DisableableDirective {

  @Input()
  public expanded = false;

  constructor(
    elementRef: ElementRef<HTMLElement>,
    private _changeDetector: ChangeDetectorRef
  ) {
    super(elementRef);
  }

  public toggle() {
    if (!super.disabled) {
      this.expanded = !(this.expanded);
      this._changeDetector.markForCheck();
    }
  }

  public expand() {
    if (!super.disabled && !this.expanded) {
      this.expanded = true;
      this._changeDetector.markForCheck();
    }
  }

  public collapse() {
    if (!super.disabled && this.expanded) {
      this.expanded = false;
      this._changeDetector.markForCheck();
    }
  }
}
