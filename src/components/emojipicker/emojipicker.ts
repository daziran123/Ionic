import { Component,forwardRef} from '@angular/core';
import {ControlValueAccessor,NG_VALUE_ACCESSOR} from '@angular/forms';
import {EmojiProvider} from '../../providers/emoji/emoji';

/**
 * Generated class for the EmojipickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
// 实现emojipickerComponent 的providers
export const EMOJI_ACCESSOR:any={
  provide:NG_VALUE_ACCESSOR,
  useExisting: forwardRef(()=>EmojipickerComponent),
  multi:true,
} 
@Component({
  selector: 'emojipicker',
  templateUrl: 'emojipicker.html',
  providers:[EmojiProvider],
})
// 实现接口
export class EmojipickerComponent implements ControlValueAccessor {
  // 定义
  emojiArray=[];
  content:string;
  onChanged:Function;
  onTouched:Function;
  constructor(emojiProvider:EmojiProvider) {
    this.emojiArray=emojiProvider.getEmojis();
   }
 
  writeValue(obj: any): void {
    // Writes a new value to the element.
   this.content=obj;
  }
  registerOnChange(fn: any): void {
   this.onChanged=fn;
  //  新的内容会做一个更改
   this.setValue(this.content);
  //  setValue 不仅仅是值做一个更改 还要绑定onChanged的function
  }
  registerOnTouched(fn: any): void {
  this.onTouched=fn;
  }
// 再次处理新的内容赋值以及函数的绑定
setValue(val:any):any{
  // 定义 setValue  接受一个参数，返回是 any
  this.content+=val;//对值做变更，赋上值
  if(this.content){
    this.onChanged(this.content);
  }
  // 如果这个内容不为空，则把 新的内容onChange给绑定上去
}
}
