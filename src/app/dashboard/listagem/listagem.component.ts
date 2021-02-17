import { IntegracoesService } from 'src/app/services/integracoes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  teste;
  json1;
  constructor(private servico:IntegracoesService) { }
  entrada;
  lista: any;
 
  ngOnInit(): void {
    this.servico.listar()
    .subscribe(dados=>{ this.entrada=dados;  
      console.log(this.entrada);
      for(let attr in this.entrada) {
        this.lista=this.entrada[attr];
        
    }
      
    
    
    

    })  
     
    

}

}
