import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

const MATERIAL_MODULES = [

  MatCheckboxModule,

];

@NgModule({
  declarations: [],
  imports: [
    ...MATERIAL_MODULES
  ],
  exports: [
    ...MATERIAL_MODULES
  ]
})
export class SharedModule { }
