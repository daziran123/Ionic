import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { EmojipickerComponent } from './emojipicker/emojipicker';
import { QuestionListComponent } from './question-list/question-list';
@NgModule({
	declarations: [EmojipickerComponent,
    QuestionListComponent],
	imports: [IonicPageModule .forChild(EmojipickerComponent),],
	exports: [EmojipickerComponent,
    QuestionListComponent]
})
export class ComponentsModule {}
//控制组件 ComponentsModule  导入全局 app.model。
//   注意引入imports: [IonicPageModule.forChild(EmojipickerComponent)],