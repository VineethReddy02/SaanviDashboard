import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from'@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entity/User.entity';

@Injectable()
export class GetdataService {
  postsUrl: string= 'http://sanvi.ap-south-1.elasticbeanstalk.com/user';

  constructor(private http: HttpClient) { }

  getPosts(id: string) : Observable<User[]> {
    const url = `${this.postsUrl}/${id}`;

    return this.http.get<User[]>(url);

  }
}
