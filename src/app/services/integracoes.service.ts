import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormLoginComponent } from '../login/form-login/form-login.component';
import { QuestoesComponent } from '../questoes/questoes.component';

@Injectable({
  providedIn: 'root'
})
export class IntegracoesService {
 
  usuario = localStorage.getItem('user');
  senha =  localStorage.getItem('pass');

  
  
  entrada:any;
  token:any;
  private url:string;
  constructor(private http:HttpClient) { 
   
  }

  private cabecalho = {
    headers: new HttpHeaders({'Authorization': 'Bearer keyN3jqJEZr0P7Rgc','Content-Type':'application/json'})
  };

  logar(usuario,senha):Observable<FormLoginComponent[]>{
    
    
    this.url='https://api.airtable.com/v0/appNMqfxsnLCxxRdr/tblalxZw8lAvxtzCI?api_key=keyN3jqJEZr0P7Rgc&filterByFormula=(AND({Email}=%22'+usuario+'%22,{Senha}=%22'+senha+'%22))'
    this.entrada =this.http.get<FormLoginComponent[]>(this.url);
    
 
    return this.entrada;
    
  } 

  listar():Observable<Object[]>{
    
  
    this.url='https://api.airtable.com/v0/appNMqfxsnLCxxRdr/Question%C3%A1rio'
    
    return this.http.get<Object[]>(this.url,this.cabecalho);
    
 
   
    
  } 
  
  enviar(respostas:QuestoesComponent):Observable<Object>{
    this.url='https://api.airtable.com/v0/appNMqfxsnLCxxRdr/Question%C3%A1rio?key=keyN3jqJEZr0P7Rgc'
    return this.http.post(this.url,respostas,this.cabecalho);
  }

}

