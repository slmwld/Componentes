import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNAci: Date = new Date();
  custonPickerOptions;
  customDate;

  constructor() { }

  ngOnInit() {

    this.custonPickerOptions = {
      buttons: [{
            text: 'Save',
            handler: ( evento)  => {
                                  console.log('CLiked Save!');
                                  console.log(evento);
            }
      }, {
            text: 'Log',
            handler: () => {
              console.log('Clicked Log. Do not Dismiss.');
              return false;
            }
      }]
    };
  }
  cambioFecha( event ) {
    console.log('ionChange', event );
    console.log('Date', new Date(event.detail.value)  );

  }

}
