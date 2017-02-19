import { Component, OnInit, Input,ElementRef, ViewChild } from '@angular/core';

import { MecanicsService} from '../mecanics.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-canvas-grid',
  templateUrl: './canvas-grid.component.html',
  styleUrls: ['./canvas-grid.component.css']
})
export class CanvasGridComponent implements OnInit {

public config
public validTab = 0
public comptage: number;
public renderTab = []
public initialiseur = 0;
public gridSize
public containerSize
public canvasGrid;
public v = 1
public comptageTab = []
public heightC;
public widthC;
public ctx;
public contain;
public mortcells;
public verifTab;
public resultatsFiltre;



@ViewChild("myCanvas") myCanvas;
@ViewChild("canvascontainer") canvascontainer;
 @Input() cellsstart;
 @Input() cellsNumb;
   constructor(public configService: ConfigService, public mecanicsService: MecanicsService) { }

  setup2(){
  	this.initialiseur = 0;
  	this.setup1();
  }
  
  setup1(){
	
  /* cadre externe */
 
  this.comptage = -1;
  
  this.mecanicsService.cellsstart= this.cellsstart;
  this.mecanicsService.cellsNumb= this.cellsNumb;
  this.mecanicsService.comptageTab = this.comptageTab;
  
  

  /* cellules individuelles */
  /* initialisation des cellules ET mise en place du tableau qui sera render plus tard */
  if (this.validTab == 1) {this.renderTab = []; this.mecanicsService.renderTab = this.renderTab}
  	
  for (var i=(this.heightC/this.cellsNumb); i < this.heightC - this.heightC/this.cellsNumb; i+=(this.heightC/this.cellsNumb)){
    for(var s=(this.widthC/this.cellsNumb); s < this.widthC - this.widthC/this.cellsNumb; s+=(this.widthC/this.cellsNumb)){
        this.comptage ++
        this.mecanicsService.comptage = this.comptage;
        
        if (this.initialiseur == 0){
          this.mecanicsService.fillGrid()
          
        }
        else {
          this.mecanicsService.gameOfLife()
        }
      }
  }
    this.validTab = 1
    this.comptage = -1
    this.initialiseur = 1
    for (var i=(this.heightC/this.cellsNumb); i < this.heightC- this.heightC/this.cellsNumb; i+=(this.heightC/this.cellsNumb)){
      for(var s=(this.widthC/this.cellsNumb); s < this.widthC- this.widthC/this.cellsNumb; s+=(this.widthC/this.cellsNumb)){
            this.comptage ++
          if ( this.renderTab[this.comptage] == 1){
            
            this.ctx.strokeRect((s-(this.widthC/this.cellsNumb)),i,(this.widthC/this.cellsNumb),(this.heightC/this.cellsNumb));
            this.ctx.strokeStyle= "black"
            this.ctx.fillStyle =  "black"
            this.ctx.fillRect((s-(this.widthC/this.cellsNumb)),i,(this.widthC/this.cellsNumb),(this.heightC/this.cellsNumb));
           
            this.comptageTab[this.comptage].etat = 1
        }
          else if ( this.renderTab[this.comptage] == 0) {
            this.ctx.strokeRect((s-(this.widthC/this.cellsNumb)),i,(this.widthC/this.cellsNumb),(this.heightC/this.cellsNumb));
            this.ctx.strokeStyle= "black"
            this.ctx.fillStyle= "white"
            this.ctx.fillRect((s-(this.widthC/this.cellsNumb)),i,(this.widthC/this.cellsNumb),(this.heightC/this.cellsNumb));

            
            this.comptageTab[this.comptage].etat = 0
          }
        }
      }
    }
  

  

  ngOnInit() {
 this.contain = document.getElementById('canvasContainer')
  this.ctx =this.myCanvas.nativeElement.getContext("2d");
  this.heightC = this.canvascontainer.nativeElement.offsetHeight;
  this.widthC = this.canvascontainer.nativeElement.offsetWidth;
  this.myCanvas.nativeElement.width = this.widthC;
  this.myCanvas.nativeElement.height = this.heightC;

this.mecanicsService.comptage = this.comptage;
this.mecanicsService.resultatsFiltre= this.resultatsFiltre;
this.mecanicsService.mortcells=this.mortcells;
this.mecanicsService.verifTab= this.verifTab;
this.mecanicsService.cellsNumb= this.cellsNumb;
this.mecanicsService.renderTab= this.renderTab;
this.mecanicsService.cellsstart= this.cellsstart;
this.mecanicsService.comptageTab = this.comptageTab;

	this.configService.colorChoice1 = 'black';
	this.configService.colorChoice2 = 'white';
	this.configService.timerSpeed = 300;
	this.configService.initialiseur;
	this.configService.sTimer; 
  }

}
