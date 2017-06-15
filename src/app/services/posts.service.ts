import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable ()
export class PostsService {
  constructor(private http: Http){
    console.log('PostsService Initalized...');
  }

  getPosts(cb) {
    return this.http.get('http://localhost:3000/people')
      .subscribe(
        (response) => cb(null, response),
        (error) => cb(error)
      );
  }

  storeService(userName: string, cb) {
    return this.http.post('http://localhost:3000/people', {name:userName})
      .subscribe(
        () => cb(null),
        (error) => cb(error)
      );
  }

  edit(post: Post, cb) {
    return this.http.put('http://localhost:3000/people/' + post.id, post)
      .subscribe(
        () => cb(null),
        (error) => cb(error)
      );
  }

  delete(uid: number, cb) {
    return this.http.delete('http://localhost:3000/people/' + uid)
      .subscribe(
        (response) => {
          cb(null)
        },
        (error) => {
          cb(error)
        }
      );
  }

}

interface Post {
  id: number;
  name: string;
}
