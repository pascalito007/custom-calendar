import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaningItemBlockComponent } from './planing-item-block/planing-item-block.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PlaningItemBlockComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
