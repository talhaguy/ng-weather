import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AppMessageService {
  constructor(private messageService: MessageService) {}

  showError(msg: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: msg,
      icon: 'pi-exclamation-circle',
    });
  }
}
