import { Component } from '@angular/core';
import { RedditThread } from '../../shared/ui';
import { REDDIT_COMMENTS } from './reddit-thread.mock';

@Component({
  imports: [RedditThread],
  selector: 'app-reddit-thread-example',
  styleUrl: './reddit-thread-example.scss',
  templateUrl: './reddit-thread-example.html',
})
export class RedditThreadExample {
  comments = [...REDDIT_COMMENTS];
}
