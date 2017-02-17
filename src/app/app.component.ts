import { Component,ViewChild } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ConfigService } from './config.service';
import { MecanicsService } from './mecanics.service';
import { CanvasGridComponent } from './canvas-grid/canvas-grid.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private cellsstart ;
  private cellsNumb ;
  	public colorChoice1 = 'black';
	public colorChoice2 = 'white';
	public timerSpeed = 300;
	public initialiseur;
	public sTimer;

  @ViewChild(CanvasGridComponent) private  canvasGridComponent: CanvasGridComponent;

  constructor(public configService: ConfigService, public mecanicsService: MecanicsService) {}


  setup() {
  	this.canvasGridComponent.setup1();
  }


  	 colorchoice(couleur,canvasGrid){
    this.colorChoice1 = couleur;
    document.getElementById('affichagecouleur1').innerHTML = couleur;
    document.getElementById('affichagecouleur1').style.backgroundColor = couleur;
    document.getElementById('affichagecouleur1').style.fontStyle = couleur;
    canvasGrid.setup();
   

  }
  colorchoice2(couleur,canvasGrid) {
    this.colorChoice2 = couleur;
    document.getElementById('affichagecouleur2').innerHTML = couleur;
    document.getElementById('affichagecouleur2').style.backgroundColor = couleur;
    document.getElementById('affichagecouleur2').style.fontStyle= couleur;
    canvasGrid.setup();
    

  }

  reconfiguration(canFunc,init) {
   init = 0;
   canFunc;
  }

  startTimer() {
  clearInterval(this.sTimer)
  this.timerSpeed = 300
  this.sTimer = setInterval(this.canvasGridComponent.setup1, this.timerSpeed)
  }

  stopTimer() {
   clearInterval(this.sTimer)
  }
  slowTimer() {
    this.timerSpeed = this.timerSpeed*1.5
    clearInterval(this.sTimer)
    this.sTimer = setInterval(this.setup, this.timerSpeed)

  }
  fastTimer(canFunc) {
    this.timerSpeed = this.timerSpeed/1.5
    clearInterval(this.sTimer)
    this.sTimer = setInterval(this.setup, this.timerSpeed)
  }

	}
 

