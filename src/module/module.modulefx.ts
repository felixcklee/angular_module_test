import { NgModule } from '@angular/core';
import { ModuleComfx } from './module.comfx';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [ModuleComfx],
    imports: [CommonModule],
    exports: [ModuleComfx]
})
export class ModuleModulefx {}
