import { MessageI } from '../models/message.model';
import { Pipe } from '@angular/core';

@Pipe({ name: 'status' })

export class StatusPipe {
  transform(array: MessageI[], status) {
    // array.sort((a: any, b: any) => {
    //   return a.isDone - b.isDone;
    // });

    switch (status) {
      case 'all':
        return array;
      case 'started':
        return array.filter(item => !item.isDone);
      case 'completed':
		    return array.filter(item => item.isDone);
      
      default:
        return array;
    }
  }
}
