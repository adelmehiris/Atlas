import { Component, inject } from '@angular/core';
import { MessageService } from './core/services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atlas';
  messageService = inject(MessageService);
}
