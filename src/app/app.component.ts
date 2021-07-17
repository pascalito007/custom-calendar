import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'calendar-demo';
  inputData: Date = new Date();
  colums = [];
  data = [
    {
      tuyau: '11 : RN-BIDHOC',
      planing: {
        item1: 'P425',
        item2: 'En prévision',
        item3: 'BIHOC',
        item4: 'Sortie',
        item5: 'Butane',
        item6: '460 000 kg',
        item7: moment('17-07-2021 14:00', 'DD-MM-YYYY HH:mm'),
        item8: moment('19-07-2021 08:00', 'DD-MM-YYYY HH:mm'),
      },
    },
    {
      tuyau: '14 : TPF',
      planing: {
        item1: 'P425',
        item2: 'En prévision',
        item3: 'BIHOC',
        item4: 'Sortie',
        item5: 'Butane',
        item6: '125 000 kg',
        item7: moment('17-07-2021 14:00', 'DD-MM-YYYY HH:mm'),
        item8: moment('19-07-2021 08:00', 'DD-MM-YYYY HH:mm'),
      },
    },
    {
      tuyau: '12 : RN-SIGALNOR',
      planing: {
        item1: 'P425',
        item2: 'En prévision',
        item3: 'SIGALNOR',
        item4: 'Sortie',
        item5: 'Propane',
        item6: '37 560 kg',
        item7: moment('17-04-2020 22:00', 'DD-MM-YYYY HH:mm'),
        item8: moment('18-07-2021 08:00', 'DD-MM-YYYY HH:mm'),
      },
    },
  ];

  ngOnInit(): void {
    console.log('moment value');
    console.log(moment(this.inputData));
    for (const item of this.data) {
      item['colspan'] = this.getColSpan(item.planing.item7, item.planing.item8);
    }
  }

  getColSpan(from, to) {
    if (
      moment(this.inputData).isAfter(from) &&
      moment(this.inputData).isBefore(to)
    ) {
      return '2';
    }
    return '7';
  }

  onInputChange() {
    this.colums.length = 0;
    this.inputData = new Date(new Date(this.inputData).toISOString());
    console.log(this.inputData);
    for (let i = 0; i < 7; i++) {
      let newDate = new Date();
      newDate.setDate(this.inputData.getDate() + i);
      this.colums.push(
        (newDate.getDate() + 1).toString().padStart(2, '0') +
          '-' +
          (newDate.getMonth() + 1).toString().padStart(2, '0') +
          '-' +
          newDate.getFullYear()
      );
    }
    console.log(this.colums);
  }
}
