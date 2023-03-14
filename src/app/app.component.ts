import { Component, OnInit } from '@angular/core';
import { User } from './Models/User';
import { ServicioService } from './servicio/servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Recipe-Book';

  userList : User[] | undefined;

  constructor(private servicio : ServicioService){

  }

  ngOnInit(): void {

    this.servicio.getUsers().subscribe(x=> {
      this.userList= JSON.parse(x);
      console.log(this.userList); 
    });
    
  }
}
