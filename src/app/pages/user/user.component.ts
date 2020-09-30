import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/interface/services.test';
import {User} from '../user/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [],
  providers:[ConfigService]
})
export class UserComponent implements OnInit {


  user: User = new User;

  constructor( public configService: ConfigService) {
  }

  displayDialog: boolean;

    selectedUser: any;
    newUser: boolean;
    listUsers: any[];
    cols: any[];

ngOnInit() {

  this.displayDialog = false;
  this.cols = [
      { field: 'nombres', header: 'Nombre Completo' },
      { field: 'link', header: 'Link Github' },
      { field: 'tecnologias', header: 'Tecnologia Conocidas' },
  ];

  this.listUsers = [
    {
      nombres: 'Wladimir Freire',
      link: 'linkwladiiiiir',
      tecnologias: ['Angular', 'Node js'],
    }
  ];

  this.getUsers();
}

  showDialogToAdd() {
    this.newUser = true;
    this.displayDialog = true;
  }

  save() {
   const listUsers = [...this.listUsers];
   if (this.newUser) {    
  let arrayTecnologias = this.user.tecnologias.split(',');
  this.user.tecnologias = [];

  this.user.tecnologias=arrayTecnologias;
    this.configService.saveRegistros(this.user).subscribe(response => {
      this.getUsers();
      this.user = null;
      this.displayDialog = false;
     });
   }
    else {
      let arrayTecnologias = this.user.tecnologias.split(',');
      this.user.tecnologias = [];
      this.user.tecnologias=arrayTecnologias;
      this.configService.updateRegistros(this.user).subscribe(response => {
        this.getUsers();
        this.user = null;
        this.displayDialog = false;
       });
    }
  }

  delete() {
  this.configService.deleteRegistros(this.user).subscribe(response => {
     this.getUsers();
     this.user = null;
     this.displayDialog = false;
   });
  }

 
  onRowSelect(event) {
    this.newUser = false;
    this.user = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: any): any {
    const user = {};
    for (const prop in c) {
        user[prop] = c[prop];
    }
    return user;
  }

  getUsers() {
    this.configService.getRegistros().subscribe(response => {
        this.listUsers = response;
      });
  }

 
}


