import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { DerivedComponent } from '@this/ui-lib/derived';

describe('A component that subclasses a base class in another sub-module', () => {

  // This test fails when DerivedComponent and DisableableDirective are imported from UMD modules
  it('Base class properties can be overridden', () => {
    TestBed.configureTestingModule({
      declarations: [DerivedComponent]
    });
    const fixture = TestBed.createComponent(DerivedComponent);
    expect(fixture.componentInstance.disabled).toBe(false);

    const subject = new Subject<boolean>();
    fixture.componentInstance.toggleOn(subject);

    subject.next(true);
    expect(fixture.componentInstance.on).toBe(true);

    fixture.componentInstance.disabled = true;
    expect(fixture.componentInstance.disabled).toBe(false);

    subject.next(false);

    fixture.componentInstance.disabled = true;
    expect(fixture.componentInstance.disabled).toBe(true);
  })

});
