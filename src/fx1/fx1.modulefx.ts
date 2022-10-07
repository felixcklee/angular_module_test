import { NgModule } from '@angular/core';
import { Comfx } from './fx1.comfx';
import { CommonModule } from '@angular/common';
import { ModuleFx2 } from './fx1.modulefx2';
@NgModule({
    declarations: [Comfx],
    imports: [CommonModule, ModuleFx2],
    exports: [Comfx]
})
export class ModuleFx1 {}
