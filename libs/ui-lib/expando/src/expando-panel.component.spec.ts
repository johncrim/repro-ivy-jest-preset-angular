import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ExpandoPanelComponent } from './expando-panel.component';

/** A panel that expands down and back up. */
@Component({
  template: `<button (click)="p.toggle()">Click me</button>
            <ui-expando-panel #p>
            Panel content here.
            </ui-expando-panel>`,
})
class TestHostComponent { }

describe('ui-expando-panel', () => {
  let host: TestHostComponent;
  let component: ExpandoPanelComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExpandoPanelComponent,
        TestHostComponent
      ],
      imports: [
        NoopAnimationsModule,
        CommonModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    component = fixture.debugElement.query(By.directive(ExpandoPanelComponent))!.componentInstance;
    fixture.detectChanges();
  });

  it('panel should be hidden by default', () => {
    expect(component.expanded).toBe(false);

    const panelDiv = fixture.debugElement.query(By.css('div'));
    expect(panelDiv).toBe(null);
  });

  it('should expand on toggle', waitForAsync(() => {
    expect(component.expanded).toBe(false);

    fixture.debugElement.query(By.css('button')).nativeElement.click();
    expect(component.expanded).toBe(true);
    fixture.detectChanges();

    const panelDiv = fixture.debugElement.query(By.css('div'));
    expect(panelDiv.nativeElement.innerHTML).toContain('Panel content here.');
  }));

});
