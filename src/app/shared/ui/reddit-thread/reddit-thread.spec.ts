import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RedditThread } from './reddit-thread';

describe('RedditThread', () => {
  let component: RedditThread;
  let fixture: ComponentFixture<RedditThread>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedditThread],
    }).compileComponents();

    fixture = TestBed.createComponent(RedditThread);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
