import { TestBed } from '@angular/core/testing';

import { SaveCommentsService } from './save-comments.service';

describe('SaveCommentsService', () => {
  let service: SaveCommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveCommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
