// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Guid } from 'guid-typescript'
import { Pessoa } from '../models/pessoa.model';
import { PessoasService } from '../services/pessoas.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  peso : string
  altura : string
  escolha : string
  saida : string
  saida2 : string
  private pessoa : Pessoa
  // public pessoaForm : FormGroup
  
  constructor(
    // private formBuilder : FormBuilder,
    private pessoaService : PessoasService
  ) {}

  ngOnInit(){
    // this.pessoa = {id: Guid.createEmpty(), peso:"",altura:"",escolha:"",saida:"",saida2:""}

    // this.pessoaForm = this.formBuilder.group
    // ({
    //   id: [this.pessoa.id],
    //   peso: [this.pessoa.peso],
    //   altura: [this.pessoa.altura],
    //   escolha: [this.pessoa.escolha],
    //   saida: [this.pessoa.saida],
    //   saida2: [this.pessoa.saida2]
    // })
    
  }

  // enviar(){
  //   if (this.pessoaForm.valid){
  //     this.pessoaService.inserir(this.pessoaForm.value)
  //   }
  // }


calcular(){
  var n1 = parseFloat(this.peso)
  var n2 = parseFloat(this.altura)
  var resultado = (n1/(n2**2)).toFixed(2)
  if (this.escolha == "Homem"){
    if (Number(resultado) <= 19){
      this.saida = resultado.toString()
      this.saida2 = "Abaixo do Peso"
    
    }
    if (Number(resultado) > 19 && Number(resultado) < 27.3){
      this.saida = resultado.toString()
      this.saida2 = "Peso Ideal"
      
    }
    if (Number(resultado) > 27.3){
      this.saida = resultado.toString()
      this.saida2 = "Acima do Peso"
     
    }
  }
  else{
    if (Number(resultado) <= 19){
      this.saida = resultado.toString()
      this.saida2 = "Abaixo do Peso"
     
    }
    if (Number(resultado) > 19 && Number(resultado) < 27.3){
      this.saida = resultado.toString()
      this.saida2 = "Peso Ideal"
    
    }
    if (Number(resultado) > 27.3){
      this.saida = resultado.toString()
      this.saida2 = "Acima do Peso"
      
    }

    

   

  }

  this.pessoa = {
    id: Guid.createEmpty(),
    peso : this.peso,
    altura : this.altura,
    saida: this.saida.toString(),
    sexo : this.escolha,
    saida2 : this.saida2
    
  }
  

  this.pessoaService.inserir(this.pessoa)
}
}
