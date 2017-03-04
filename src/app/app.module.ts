import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CanvasGridComponent } from './canvas-grid/canvas-grid.component';
import { ConfigService } from './config.service';
import { MecanicsService } from './mecanics.service' ;
import { ConnexionService } from './connexion.service';

@NgModule({
  declarations: [
    AppComponent,
    CanvasGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [ConfigService, MecanicsService, ConnexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
