import {Component} from '@angular/core';
import {CustomService} from '../services/custom.service';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  providers: [
    CustomService,
    PostsService
  ]
})

export class DashboardComponent {
  posts: Post[];

  constructor(
    private customService: CustomService,
    private postsService: PostsService) {

    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  showAlert() {
    this.customService.showAlert();
  }

  addition() {
    this.customService.addition(10,20);
  }

  division() {
    this.customService.division(500,25);
  }

  customMathExpression() {
    this.customService.customMathExpression(1000,100,5);
  }

}

interface Post {
  id: number;
  title: string;
  body: string;
}
