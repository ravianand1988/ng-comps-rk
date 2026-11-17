import { Component, input } from '@angular/core';
import { IRedditComment } from './reddit-thread.config';

@Component({
  imports: [],
  selector: 'app-reddit-thread',
  styleUrl: './reddit-thread.scss',
  templateUrl: './reddit-thread.html',
})
export class RedditThread {
  comments = input.required<IRedditComment[]>();
}
