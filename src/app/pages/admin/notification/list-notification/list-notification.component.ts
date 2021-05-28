import { NotificationService } from './../../../../services/notification/notification.service';
import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/modeles/notification/notification';

@Component({
  selector: 'app-list-notification',
  templateUrl: './list-notification.component.html',
  styleUrls: ['./list-notification.component.scss']
})
export class ListNotificationComponent implements OnInit {

  liste_notifi: Notification[] | any;

  constructor(public crudApiNoti: NotificationService ) { }

  ngOnInit(): void {
    this.getData();
    console.log(this.liste_notifi);
    
  }

  getData(): void{
    this.crudApiNoti.getAll().toPromise<Notification>().then((data)=>{
      this.liste_notifi = data;
    });
  }

}
