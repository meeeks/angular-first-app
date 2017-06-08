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

  constructor(private postsService: PostsService){
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}

interface Post {
  id: number;
  title: string;
  body: string;
}
