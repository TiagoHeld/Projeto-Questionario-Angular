import { Router, GuardsCheckEnd } from '@angular/router';
import {NgForm}  from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IntegracoesService } from 'src/app/services/integracoes.service';
import { stringify } from 'querystring';
import { LoginGuardGuard } from 'src/app/guards/login-guard.guard';



@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  @ViewChild('usuario') user:ElementRef;
  @ViewChild('senha') password:ElementRef;

  usuario;
  senha;
  entrada:any={};
  isToken;
  resp;

  

  constructor(private servico:IntegracoesService,private router:Router,private guard: LoginGuardGuard ) {
   

   }

   onValidacao(form:NgForm) {
 
    console.log(form.value);
    let usuario=this.user.nativeElement.value;
    let senha=this.password.nativeElement.value;
    //localStorage.setItem("user",usuario);
    //localStorage.setItem("pass",senha);
   
 
    this.servico.logar(usuario,senha)
        .subscribe(
          entradaApi =>{ this.entrada=entradaApi; console.log(this.entrada);
            if(JSON.stringify(this.entrada) === '{"records":[]}'){
              this.isToken=0;
              this.guard.entrada=this.isToken;
              this.router.navigateByUrl('/dashboard')
            }else {
              this.isToken=1;
              this.guard.entrada=this.isToken;
              this.router.navigateByUrl('/dashboard')
            }

          })
          , erro=>{console.log(erro);
          }

         
       
   }
  
 
  ngOnInit(): void {
  }

}
