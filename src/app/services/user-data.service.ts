import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
// url = 'https://jsonplaceholder.typicode.com/users'
url = 'https://jsonplaceholder.typicode.com/users'

  constructor(
    private http: HttpClient
  ) { }
  users()
  {
    return this.http.get(this.url)
  }

saveUser(data: any){
  return this.http.post(this.url, data)
}

}
