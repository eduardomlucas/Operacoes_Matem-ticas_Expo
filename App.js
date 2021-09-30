import * as React from 'react';
import {Text, TouchableOpacity, TextInput, View, Stylesheet, StatusBar} from 'react-native';
import meuEstilo from './src/components/meuEstilo';

import MeuEstilo from './src/components/meuEstilo';

export default class App extends React.Component{
  state={
    valor1:0.0,
    valor2:0.0,
    resultado:0.0,
  }

  //recebe um number e atualiza o estado da varialve 'valor1' para o número recebido
  //função de soma (padrão)
  atualizaValor1=(number)=>{
    this.setState({valor1:number})
  }
  atualizaValor2=(number)=>{
    this.setState({valor2:number})
  }
  soma(){
    this.state.resultado=parseFloat(this.state.valor1)+
                          parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }
  subtrair(){
    this.state.resultado=parseFloat(this.state.valor1)-
                          parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }
  multiplicacao(){
    this.state.resultado=parseFloat(this.state.valor1)*
                          parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }
  divisao(){
    this.state.resultado=parseFloat(this.state.valor1)/
                          parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }

  //primeiro text(gambiarra pra descer os inputs)
  render(){
    return(
      <View style={meuEstilo.container}>
        
        <Text>
        {this.state.titleText}
          {"\n"}
          {"\n"}
        </Text>

        <StatusBar backgroundColor="black"/>
          <TextInput style={MeuEstilo.input} underlineColorAndroid="transparent" 
          placeholder="digite o valor 1" placeholderTextColor="black"
          autoCapitalize="none"
          onChangeText={this.atualizaValor1}
          keyboardType="numeric"/> 

          <TextInput style={MeuEstilo.input}underlineColorAndroid="transparent" 
          placeholder="digite o valor 2" placeholderTextColor="black"
          autoCapitalize="none"
          onChangeText={this.atualizaValor2}
          keyboardType="numeric"/> 

        <TouchableOpacity style={MeuEstilo.submitButton }  onPress={()=>this.soma(this.state.valor1,this.state.valor2,this.state.resultado)} >
        <Text style={MeuEstilo.submitButtonText} > SOMA </Text>
        </TouchableOpacity>
        <TouchableOpacity style={MeuEstilo.submitButton} onPress={()=>this.subtrair(this.state.valor1,this.state.valor2,this.state.resultado)} >
        <Text style={MeuEstilo.submitButtonText} > SUBTRAÇÃO </Text>
        </TouchableOpacity>
        <TouchableOpacity style={MeuEstilo.submitButton} onPress={()=>this.multiplicacao(this.state.valor1,this.state.valor2,this.state.resultado)} >
        <Text style={MeuEstilo.submitButtonText} > MULTIPLICAÇÃO </Text>
        </TouchableOpacity>
        <TouchableOpacity style={MeuEstilo.submitButton} onPress={()=>this.divisao(this.state.valor1,this.state.valor2,this.state.resultado)} >
        <Text style={MeuEstilo.submitButtonText} > DIVISÃO </Text>
        </TouchableOpacity>

      </View>
    )
  };

}

//export default operacoesMatematicas;