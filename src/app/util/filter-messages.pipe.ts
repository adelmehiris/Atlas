import { Pipe, PipeTransform } from '@angular/core';
import { MessageList } from '../core/interfaces/message-list';

@Pipe({
  name: 'filterMessages'
})
export class FilterMessagesPipe implements PipeTransform {

  transform(messages: MessageList, term: string): MessageList {
    if(term.length < 3) return messages ;
    return messages.filter(msg => msg.content.includes(term));
  }

}
