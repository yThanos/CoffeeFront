import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{//define quem pode acessar a página

  constructor(private service: AppComponent, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const usuario_logado = localStorage.getItem("jwt");

    if(usuario_logado == null){
      if(state.url.endsWith('login')){
        return true;
      }
      this.router.navigate(['login']);
    }else {
      if(state.url.endsWith('login')){
        this.router.navigate(['inicio'])
      }
    }
    return true;
  }
}

