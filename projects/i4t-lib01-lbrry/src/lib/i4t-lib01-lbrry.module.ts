import { NgModule } from '@angular/core';
import { I4tLib01LbrryComponent } from './i4t-lib01-lbrry.component';
import { FooComponent } from './foo/foo.component';



@NgModule({
  declarations: [
    I4tLib01LbrryComponent, 
    FooComponent],
  imports: [
  ],
  exports: [
    I4tLib01LbrryComponent,
    FooComponent
  ]
})
export class I4tLib01LbrryModule { }
