import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IntegracoesService } from '../services/integracoes.service';
import { Location } from '@angular/common'


@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.css']
})
export class QuestoesComponent implements OnInit {

  
  http:HttpClient;
  @ViewChild('nome') nValue:ElementRef;
  @ViewChild('email') nEmail:ElementRef;
  @ViewChild('telefone') nZap:ElementRef;
  @ViewChild('msg') nMsg:ElementRef;

  nome='';
  email=''
  telefone=''
  msg='';
  
  open1=true;
  open2=false; 
  open3=false; 
  open4=false; 
  open5=false;  
  cont = 0;

  resposta1='';
  resposta2='';
  resposta3='';
  listaResposta={};
  respostas;


  constructor(private servico:IntegracoesService,private location: Location) {
  }
 

 
 
 ngOnInit(): void {}
  changedNotSelected = (index,evt) => {
    this.listaChecks[index].tick = true;
  }
  changed = (index,evt) => {
   
    this.listaChecks[index].tick=!this.listaChecks[index].tick;
    for (let key in this.listaChecks) {
         let check = this.listaChecks[key];
         console.log(check);
         if(this.listaChecks[index] != check){
            check.tick=false;  
         }
    }
    this.resposta1=this.listaChecks[index].name;
  }

  changedNotSelected2 = (index,evt) => {
    this.listaChecks2[index].tick = true;
  }
  changed2 = (index,evt) => {
   
    this.listaChecks2[index].tick=!this.listaChecks2[index].tick;
    for (let key in this.listaChecks2) {
         let check = this.listaChecks2[key];
         
         
         if(this.listaChecks2[index] != check){
        
            check.tick=false;

           
         }
    }
    this.resposta2=this.listaChecks2[index].name;
    
  }

  changedNotSelected3 = (index,evt) => {
    this.listaChecks3[index].tick = true;
  }
  changed3 = (index,evt) => {
   
    this.listaChecks3[index].tick=!this.listaChecks3[index].tick;
    for (let key in this.listaChecks3) {
         let check = this.listaChecks3[key];
         
         
         if(this.listaChecks3[index] != check){
        
            check.tick=false;

           
         }
    }
    this.resposta3=this.listaChecks3[index].name;
    
  }
 
  
    
  onSubmit(form) {

    this.nome=this.nValue.nativeElement.value;
    this.email=this.nEmail.nativeElement.value;
    this.telefone=this.nZap.nativeElement.value;
    this.msg=this.nMsg.nativeElement.value;
    this.listaResposta={
      reposta01:this.resposta1,
      reposta02:this.resposta2,
      resposta03:this.resposta3,
      nome:this.nome,
      email:this.email,
      telefone:this.telefone,
      msg:this.msg
    }
   // 
    console.log(this.nome);
    console.log(this.email);
    console.log(this.telefone);
    console.log(this.msg);
    console.log(this.listaResposta);

    

    

    console.log(this.resposta3);

    this.respostas={
      "records": [
        {
          "fields":{
            "Nome":this.nome,
            "Email":this.email,
            "Telefone":this.telefone,
            "Forma de contato":this.resposta2,
            "Disponibilidade para contato":this.resposta3,
            "Assunto":this.resposta1,
            "Conteúdo":this.msg
          }
        }
      ]
    }

    this.servico.enviar(this.respostas)
        .subscribe(
          ()=>{
            console.log("Salvo");
          }
          ,erro=> console.log(erro)   
        );

        this.nValue.nativeElement.value="";
        this.nEmail.nativeElement.value="";
        this.nZap.nativeElement.value="";
     this.nMsg.nativeElement.value="";
     setInterval(()=>{
      this.load();
     },5000)
    
  }

  proximo() {
    this.cont++;
    if(this.cont==1) {
      this.open1=false;
      this.open2=true;
      console.log("teste"+this.resposta1);
    }
    if(this.cont==2) {
      this.open2=false;
      this.open3=true;
      console.log(this.cont);
      console.log("teste"+this.resposta2);
    }

    if(this.cont==3) {
      this.open3=false;
      this.open4=true;
      console.log("teste"+this.resposta3);
    }


    
   

   //this.toggleEstado.emit(this.open);
  }

  listaChecks = [
    { id:1, name:'Sites Responsivos', img:'./assets/images/responsivo.svg', tick:false},
    { id:2, name:'Landing Pages', img:'./assets/images/landing-page.svg', tick:false},
    { id:3, name:'Aplicativos Móveis', img:'./assets/images/aplicativos.svg', tick:false},
    { id:4, name:'Sistemas Web', img:'./assets/images/sistemas.svg', tick:false}
  ]; 

  listaChecks2 = [
    { id:1, name:'E-mail', img:'./assets/images/email.svg', tick:false},
    { id:2, name:'Telefone', img:'./assets/images/telefone.svg', tick:false},
    { id:3, name:'WhatsApp', img:'./assets/images/whatsapp.svg', tick:false},
  ];

  listaChecks3 = [
    { id:1, name:'Manhã', img:'./assets/images/manha.svg', tick:false},
    { id:2, name:'Tarde', img:'./assets/images/tarde.svg', tick:false},
    { id:3, name:'Noite', img:'./assets/images/noite.svg', tick:false},
  ];
  
 
  load() {
  location.reload();
  }
 

}
