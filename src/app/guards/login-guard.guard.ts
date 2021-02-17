import { IntegracoesService } from 'src/app/services/integracoes.service';

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  entrada;
  constructor(private servico: IntegracoesService,private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    

    console.log("ou entro"+this.entrada);

    if(this.entrada==0||this.entrada==undefined) {
      this.router.navigateByUrl('/login')
      return false;
    } else {
      return true;
    } 
  
     
      
    
    
    

  }  
 
  
}
