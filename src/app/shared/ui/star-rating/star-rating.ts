import { Component, input, OnInit, signal } from '@angular/core';

const STAR_EMOJI = '⭐️';

@Component({
  imports: [],
  selector: 'app-star-rating',
  styleUrl: './star-rating.scss',
  templateUrl: './star-rating.html',
})
export class StarRating implements OnInit {
  public stars = input<number>(5);
  public ratingDefault = input<number>(0);
  public disabled = input<boolean>(false);

  public hoverRating = signal<number>(0);
  public rating = signal<number>(0);
  public star = STAR_EMOJI;

  ngOnInit(): void {
    this.rating.set(this.ratingDefault());
  }

  public setHoverRating(index: number) {
    this.hoverRating.set(index);
  }

  public setRating(index: number) {
    // Address toggle on first star
    if (index === 0 && this.rating() === 1) {
      this.rating.set(0);
      return;
    }

    this.rating.set(index + 1);
  }
}
