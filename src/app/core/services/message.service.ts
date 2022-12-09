import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageList } from '../interfaces/message-list';
import { BehaviorSubject, Observable, of, catchError, Subject } from 'rxjs';
import { Credentials } from '../interfaces/credentials';
import { environement } from 'src/envirenement';

@Injectable()
export class MessageService {

  private user: Credentials | null = null;
  private TOKEN: string | null = null;
  private messages : MessageList= []
  // messages$ = new BehaviorSubject<MessageList>(this.messages);

  state$ = new BehaviorSubject<{messages:MessageList, user:Credentials | null}>({
    messages : this.messages,
    user : this.user
  });

  constructor(private http : HttpClient) {
    this.init();
  }

  public isAuth():boolean{
    return !!this.TOKEN;
  }
  private init(){
    setInterval(() => this.getMessages() , 3000);
  }

  public setCreendentials(credentials:Credentials):Observable<{accepted:boolean}>{

    if(!credentials.email.includes('@orsys.fr')) return of({accepted:false});

    const URL = environement.API_ENDPOINT + "/auth/login"

    const acceptances$ = new Subject<{ accepted : boolean}>();

    this.http
      .post<{access_token:string}>(URL,credentials)
      .pipe( catchError( err => of(null)))
      .subscribe(data => {
        if (data?.access_token){
          this.TOKEN = data.access_token;

          this.state$.next({...this.state$.value , user:credentials});

          acceptances$.next({ accepted:true });
        }else{
          acceptances$.next({ accepted:false });
        }
      });


    return acceptances$;
  }

  private getMessages(){
    if(!this.TOKEN)return;

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization : 'Bearer ' + this.TOKEN
      })
    };

    this.http
      .get<MessageList>(environement.API_ENDPOINT + "/messages", options)
      .subscribe( data => {
        this.messages = data;
        // Notification
        this.state$.next(
          {...this.state$.value , messages:this.messages}
          );
      });
  }
}
