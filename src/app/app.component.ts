import { Component, OnInit } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "calendar-demo";
  inputData: Date;
  colums = [];
  data = [
    {
      tuyau: "11 : RN-BIDHOC",
      planing: {
        item1: "P425",
        item2: "En prévision",
        item3: "BIHOC",
        item4: "Sortie",
        item5: "Butane",
        item6: "460 000 kg",
        item7: moment("17-07-2021 14:00", "DD-MM-YYYY HH:mm"),
        item8: moment("19-07-2021 08:00", "DD-MM-YYYY HH:mm"),
      },
    },
    {
      tuyau: "14 : TPF",
      planing: {
        item1: "P425",
        item2: "En prévision",
        item3: "BIHOC",
        item4: "Sortie",
        item5: "Butane",
        item6: "125 000 kg",
        item7: moment("17-07-2021 14:00", "DD-MM-YYYY HH:mm"),
        item8: moment("19-07-2021 08:00", "DD-MM-YYYY HH:mm"),
      },
    },
    {
      tuyau: "12 : RN-SIGALNOR",
      planing: {
        item1: "P425",
        item2: "En prévision",
        item3: "SIGALNOR",
        item4: "Sortie",
        item5: "Propane",
        item6: "37 560 kg",
        item7: moment("17-04-2020 22:00", "DD-MM-YYYY HH:mm"),
        item8: moment("18-07-2021 08:00", "DD-MM-YYYY HH:mm"),
      },
    },
  ];

  ngOnInit(): void {
    for (let i = 0; i < this.data.length; i++) {
      let item = this.data[i];
      item["others"] = this.getOthersProps(
        item.planing.item7,
        item.planing.item8,
        i
      );
    }
  }

  getOthersProps(from, to, index) {
    if (index === 0)
      return {
        colspan: "2",
        tdCount: ["", "", "", "", ""],
        with: "80%",
        marginLeft: "5%",
      };
    else if (index === 1)
      return {
        colspan: "1",
        tdCount: ["", "", "", "", "", ""],
        with: "100%",
        marginLeft: "0%",
      };
    return { colspan: "7", tdCount: [], with: "100%", marginLeft: "0%" };
  }

  onInputChange() {
    this.colums.length = 0;
    this.inputData = moment(this.inputData).toDate();
    for (let i = 0; i < 7; i++) {
      let newDate = new Date();
      newDate.setDate(this.inputData.getDate() + i);
      this.colums.push(
        (newDate.getDate() + 1).toString().padStart(2, "0") +
          "-" +
          (newDate.getMonth() + 1).toString().padStart(2, "0") +
          "-" +
          newDate.getFullYear()
      );
    }
  }
}
