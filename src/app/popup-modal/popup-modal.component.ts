import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// interface DialogData {
//   title?: string;
//   classes?: PopupModalCSSClasses;
// }

interface PopupModalCSSClasses {
  title?: string;
}

@Component({
  selector: "app-popup-modal",
  templateUrl: "./popup-modal.component.html",
  styleUrls: ["./popup-modal.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class PopupModalComponent implements OnInit {
  faTimes = faTimes;
  @Input() title: string;

  constructor() {}

  ngOnInit() {
    console.log(this.title);
  }

  onNoClick = () => {
    console.log(this.title);
  };
}
