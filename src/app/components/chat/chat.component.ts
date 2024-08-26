import { Component } from '@angular/core';
import { SqlChatService } from 'src/app/services/sql-chat.service';
//import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',//'.chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  prompt: any = '';
  response: any = '';

  constructor(private apiService: SqlChatService) {}

  sendPrompt() {
    this.apiService.query(this.prompt).subscribe({

      next:  (data: any) => { this.response = data.dbResult; console.log(this.response); }, // Assuming the API response structure
      error:  (error: any) => { console.error('Error:', error); },
        
  });
  }
}

