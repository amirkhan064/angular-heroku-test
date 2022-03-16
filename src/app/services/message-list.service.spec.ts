import { TestBed } from '@angular/core/testing';

import { MessageListService } from './message-list.service';

describe('MessageListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageListService = TestBed.get(MessageListService);
    expect(service).toBeTruthy();
  });
});
