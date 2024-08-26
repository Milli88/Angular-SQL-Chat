import { TestBed } from '@angular/core/testing';

import { SqlChatService } from './sql-chat.service';

describe('SqlChatService', () => {
  let service: SqlChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqlChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
