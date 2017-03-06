import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ConnexionService {
public requestParameters;
public snomconfig;
public sviecells;
public scellsstart;
public scellswide;

  constructor(public http:Http) {}

  test(){
    return this.http.get('http://exos.yysh.fr/users/'+ this.requestParameters +'').map(v => v.json());
  }

  save(){
    console.log('http://exos.yysh.fr/save/'+this.snomconfig+ '-'+this.sviecells+ '-'+this.scellsstart+'-'+this.scellswide + '')
     return this.http.get('http://exos.yysh.fr/save/'+this.snomconfig+ '-'+this.sviecells+ '-'+this.scellsstart+'-'+this.scellswide + '').map(c=>c.json());
      

  }
}