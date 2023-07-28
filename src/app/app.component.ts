import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hostingTest';

  sendData(){
    const message = {
      action: 'buttonClicked',
      data: 'Some data you want to send to Ionic app',
      success:true
    };
    window.postMessage(message, '*');
  }
}
