/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PostsPageService } from './posts-page.service';

describe('Service: PostsPage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsPageService]
    });
  });

  it('should ...', inject([PostsPageService], (service: PostsPageService) => {
    expect(service).toBeTruthy();
  }));
});
