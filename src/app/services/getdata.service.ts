import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from'@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entity/User.entity';

@Injectable()
export class GetdataService {
  postsUrl: string= 'http://sanvi.ap-south-1.elasticbeanstalk.com/user/1777183255667406?format=json';

  constructor(private http: HttpClient) { }

  getPosts() : Observable<User[]> {
    return this.http.get<User[]>(this.postsUrl);

  }
}
