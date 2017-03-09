/* service dont le rôle sera de gerer les règles du game ofl ife */

import { Injectable } from '@angular/core';

@Injectable()
export class MecanicsService {

  constructor() { }
public comptageTab;
public comptage: number;
public resultatsFiltre;
public mortcells;
public verifTab;
public cellsNumb;
public renderTab;
public cellsstart ;
public viecells;
  gameOfLife() {

/*algorithme  qui sera different selon que l'on soit sur une case vivante ou une case morte */
if (this.comptageTab[this.comptage].etat == 0){
   
   let verif = 0;
   if (this.comptageTab[(this.comptage)+(this.cellsNumb-1)+1] != undefined){verif = verif +((this.comptageTab[(this.comptage)+(this.cellsNumb-1)+1].etat))}
   if (this.comptageTab[(this.comptage)+(this.cellsNumb-1)] != undefined){verif = verif +((this.comptageTab[(this.comptage)+(this.cellsNumb-1)].etat))}
   if (this.comptageTab[(this.comptage)+(this.cellsNumb-1)-1] != undefined){verif = verif +((this.comptageTab[(this.comptage)+(this.cellsNumb-1)-1].etat))}
   if (this.comptageTab[this.comptage-1] != undefined){(verif = verif +(this.comptageTab[this.comptage-1].etat))}
   if (this.comptageTab[(this.comptage)-(this.cellsNumb-1)+1] != undefined){verif = verif +((this.comptageTab[(this.comptage)-(this.cellsNumb-1)+1].etat))}
   if (this.comptageTab[(this.comptage)-(this.cellsNumb-1)] != undefined){verif = verif +((this.comptageTab[(this.comptage)-(this.cellsNumb-1)].etat))}
   if (this.comptageTab[(this.comptage)-(this.cellsNumb-1)-1] != undefined){verif = verif +((this.comptageTab[(this.comptage)-(this.cellsNumb-1)-1].etat))}
   if (this.comptageTab[this.comptage+1] != undefined){(verif = verif +(this.comptageTab[this.comptage+1].etat))}
   

    if (verif == this.viecells){
      this.renderTab.push(1)
    }
    else {
      this.renderTab.push(0)
    }

}
else if ((this.comptageTab[this.comptage].etat) == 1) {
   this.verifTab = []
   let verif = 0;
  if (this.comptageTab[(this.comptage)+(this.cellsNumb-1)+1] != undefined){verif = verif +((this.comptageTab[(this.comptage)+(this.cellsNumb-1)+1].etat))}
  if (this.comptageTab[(this.comptage)+(this.cellsNumb-1)] != undefined){verif = verif +((this.comptageTab[(this.comptage)+(this.cellsNumb-1)].etat))}
  if (this.comptageTab[(this.comptage)+(this.cellsNumb-1)-1] != undefined){verif = verif +((this.comptageTab[(this.comptage)+(this.cellsNumb-1)-1].etat))}
  if (this.comptageTab[this.comptage-1] != undefined){verif = verif +((this.comptageTab[this.comptage-1].etat))}
  if (this.comptageTab[(this.comptage)-(this.cellsNumb-1)+1] != undefined){verif = verif +((this.comptageTab[(this.comptage)-(this.cellsNumb-1)+1].etat))}
  if (this.comptageTab[(this.comptage)-(this.cellsNumb-1)] != undefined){verif = verif +((this.comptageTab[(this.comptage)-(this.cellsNumb-1)].etat))}
  if (this.comptageTab[(this.comptage)-(this.cellsNumb-1)-1] != undefined){verif = verif +((this.comptageTab[(this.comptage)-(this.cellsNumb-1)-1].etat))}
  if (this.comptageTab[this.comptage+1] != undefined){(verif = verif +(this.comptageTab[this.comptage+1].etat))}
  	
   

  if ((verif == 2)||(verif == 3)) {
    this.renderTab.push(1)
  }
  else {
    this.renderTab.push(0)
  }

                                    }
  }
  
  /* fonction remplit la grille de départ suivant le pourcentage que l'on choisit dans la configuration */
  fillGrid(){
  let hasard = Math.floor(Math.random()*100)
  
  if (hasard <= this.cellsstart){
     this.renderTab.push(1)
     this.comptageTab.push({etat: 1})
     
            }
  else  {
    this.renderTab.push(0)
     this.comptageTab.push({etat: 0})
    
        }
            }

}
