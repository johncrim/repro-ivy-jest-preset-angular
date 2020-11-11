import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExpandoPanelComponent } from './expando-panel.component';

@NgModule({
  declarations: [ExpandoPanelComponent],
  exports: [ ExpandoPanelComponent ],
  imports: [
    CommonModule
  ]
})
export class UiExpandoPanelModule { }
