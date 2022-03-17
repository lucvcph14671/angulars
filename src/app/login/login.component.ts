import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [
    {
      id: 1,
      sdt: '0978942425',
      name: 'Lan',
      sex: 'nữ',
      img: 'https://scontent.fhan12-1.fna.fbcdn.net/v/t39.30808-6/275247501_1284084788796169_3981712060515164505_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=zNXhoCXf8iUAX_yQklL&tn=wpIU2QF6-FVecfC-&_nc_ht=scontent.fhan12-1.fna&oh=00_AT-7TT4-SdhdfUsvNj8MFPpf1Z9wpDCuQpR6rH1zaSttjg&oe=622FACAF',
    },
    {
      id: 2,
      sdt: '0978942425',
      name: 'Linh',
      sex: 'nữ',
      img: 'https://scontent.fhan12-1.fna.fbcdn.net/v/t39.30808-6/275247501_1284084788796169_3981712060515164505_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=zNXhoCXf8iUAX_yQklL&tn=wpIU2QF6-FVecfC-&_nc_ht=scontent.fhan12-1.fna&oh=00_AT-7TT4-SdhdfUsvNj8MFPpf1Z9wpDCuQpR6rH1zaSttjg&oe=622FACAF',
    },
  ]

  users_fillter = this.users;

  xoa(users_id :number){
    this.users_fillter = this.users_fillter.filter(function(user){
      return user.id !== users_id
    });
  }

  search(event :any){
    const value = event.target.value;
    const text_hoa = value.toLowerCase();
    const text_trim = text_hoa.trim();
    
    this.users_fillter = this.users.filter(function(user){

      const text_name = user.name.toLowerCase();
      return text_name.indexOf(text_trim) !== -1;
    });
  }

  new_user ={
    id: 0,
    sdt: '',
    name: '',
    sex: '',
    img: '',
  }

  on_change(event:any, key:string){

    this.new_user = {
      ...this.new_user,
      [key]: event.target.value
    };
    
  }
  on_submit(){

    if(!this.on_validate(this.new_user)){

      return;
    }

    if(this.is_edit){

      for(let i = 0; i < this.users.length; i++){
        if(this.users[i].id === this.new_user.id){

          this.users[i] = this.new_user;
        }
      }
      this.is_edit = false;

    }else{

      this.new_user.id = this.users.length + 1;

      this.users.push(this.new_user);
    }
    

    this.new_user ={
      id: 0,
      sdt: '',
      name: '',
      sex: '',
      img: '',
    }

  }

on_validate(obj: any){

  if(!obj.name || !obj.sdt || !obj.sex || !obj.img){
    
    return false;
  }

  return true;
}

is_edit = false;
sua(obj :any){

  this.new_user = obj;
  this.is_edit = true;

}

}
