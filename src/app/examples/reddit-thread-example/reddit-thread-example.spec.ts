import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RedditThreadExample } from './reddit-thread-example';

describe('RedditThreadExample', () => {
  let component: RedditThreadExample;
  let fixture: ComponentFixture<RedditThreadExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedditThreadExample],
    }).compileComponents();

    fixture = TestBed.createComponent(RedditThreadExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
