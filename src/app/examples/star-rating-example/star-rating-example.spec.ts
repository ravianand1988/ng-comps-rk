import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarRatingExample } from './star-rating-example';

describe('StarRatingExample', () => {
  let component: StarRatingExample;
  let fixture: ComponentFixture<StarRatingExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarRatingExample],
    }).compileComponents();

    fixture = TestBed.createComponent(StarRatingExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
