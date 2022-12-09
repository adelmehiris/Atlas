import { Component, inject } from '@angular/core';
import { MessageService } from 'src/app/core/services/message.service';
import { Credentials } from '../../core/interfaces/credentials';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent {

  messageService = inject(MessageService);
  sub : Subscription | null = null;

  private _feedbackMessage = '';
  get feedbackMessage(){
    return this._feedbackMessage;
  }
  set feedbackMessage(value : string){
    this._feedbackMessage = value;
    if(value) setTimeout( () => this._feedbackMessage = '',2000)
  }

  credentials : Credentials = {
    email : '',
    password : ''
  };

  sendLoginRequest(){
    if(!this.credentials.email || !this.credentials.password){
      this.feedbackMessage = 'Please complete all fields';
      return
    }
    if(this.sub) this.feedbackMessage= 'busy'

    this.sub = this.messageService
                  .setCreendentials(this.credentials)
                  .subscribe(
                    response => this.feedbackMessage = response.accepted ? 'Welcome' : 'Invalid credentials'
                  )
  }
}
