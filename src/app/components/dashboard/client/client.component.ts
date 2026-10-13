import { Component, EventEmitter, input, output } from '@angular/core';

@Component({
  selector: 'app-client',
  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
})
export class ClientComponent {

  public infoClients = input.required<clientModel>();


  public banEvent = output<EventEmitter<any>>();

  public runBtnBan() {
    this.banEvent.emit(new EventEmitter);
  }

}
