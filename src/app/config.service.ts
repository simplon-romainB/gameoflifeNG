import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
	public colorChoice1 = 'black';
	public colorChoice2 = 'white';
	public timerSpeed = 300;
	public initialiseur;
	public sTimer;
	
   

  constructor () {
  
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

  startTimer(canFunc) {
  clearInterval(this.sTimer)
  this.timerSpeed = 300
  this.sTimer = setInterval(canFunc, this.timerSpeed)
  }

  stopTimer() {
   clearInterval(this.sTimer)
  }
  slowTimer(canFunc) {
    this.timerSpeed = this.timerSpeed*1.5
    clearInterval(this.sTimer)
    this.sTimer = setInterval(canFunc, this.timerSpeed)

  }
  fastTimer(canFunc) {
    this.timerSpeed = this.timerSpeed/1.5
    clearInterval(this.sTimer)
    this.sTimer = setInterval(canFunc, this.timerSpeed)
  }

}