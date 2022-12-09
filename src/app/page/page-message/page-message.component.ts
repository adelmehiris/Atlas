import { Component,inject } from '@angular/core';
import { MessageService } from 'src/app/core/services/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-message',
  templateUrl: './page-message.component.html',
  styleUrls: ['./page-message.component.css']
})
export class PageMessageComponent {

  search = "";
  // Angular 15 uniquement
  // public messageService = inject(MessageService);

  sub : Subscription;
  constructor( public messageService : MessageService) {
    this.sub = messageService.state$.subscribe(console.log);
   }

   ngOnDestroy(){
    this.sub.unsubscribe();
   }
}
