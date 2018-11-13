import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { EmojipickerComponent } from './emojipicker/emojipicker';
@NgModule({
	declarations: [EmojipickerComponent],
	imports: [IonicPageModule .forChild(EmojipickerComponent),],
	exports: [EmojipickerComponent]
})
export class ComponentsModule {}
//控制组件 ComponentsModule  导入全局 app.model。
//   注意引入imports: [IonicPageModule.forChild(EmojipickerComponent)],