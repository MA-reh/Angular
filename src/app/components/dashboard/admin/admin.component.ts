import { Component, EventEmitter, input, output } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {

  public infoAdmin = input.required<AdminModel>();

  public banEvent = output<EventEmitter<any>>();

  public runBtnBan() {
    this.banEvent.emit(new EventEmitter);
  }

}
