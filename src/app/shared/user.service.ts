
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  formData: User;
  proxyurl = "https://cors-anywhere.herokuapp.com/";

   //rootURL = this.proxyurl + 'https://service-user-io.cfapps.io/user-service/'
   rootURL = 'http://localhost:9090/user-service/'

  list: User[];

  constructor(private http: HttpClient) { }

  postUser() {

    return this.http.post(this.rootURL + 'saveuser/', this.formData);
  }

  putUser() {
    return this.http.put(this.rootURL + 'saveuser/', this.formData);
  }


  deleteUser(id) {
    return this.http.delete(this.rootURL + 'deleteuser/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL + 'fetchusers/')
      .toPromise()
      .then(res => this.list = res as User[]);
  }
}
