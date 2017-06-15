import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostsService]
})

export class HomeComponent {
  posts: Post[];
  currentElement: number;

  constructor(private postsService: PostsService) {
    this.getPosts();
  }

  postToServer(userName) {
    if(!userName) return;
    this.postsService.storeService(userName, (err)=>{
      if(err) {
        console.log(err);
      } else {
        this.getPosts();
      }
    });
  }

  getPosts() {
    this.postsService.getPosts((err, data) => {
      if (err) {
        console.log(err);
      } else {
        this.posts = JSON.parse(data._body);
      }
    });
  }

  saveElement(post) {
    this.postsService.edit(post, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }
    })
  }

  deleteElement(uid) {
    this.postsService.delete(uid, (err) => {
      if(err) {
        console.log(err)
      } else {
        this.getPosts();
      }
    });
  }

  editElement(postId) {
    this.currentElement = postId
  }
}

interface Post {
  id: number;
  name: string;
}
