import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PopupModalComponent } from "./popup-modal/popup-modal.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TestModalComponent } from "./test-modal/test-modal.component";
import { PopupModalButtonComponent } from './popup-modal-button/popup-modal-button.component';

@NgModule({
  declarations: [AppComponent, PopupModalComponent, TestModalComponent, PopupModalButtonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    FontAwesomeModule
  ],
  providers: [],
  entryComponents: [TestModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
