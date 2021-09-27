import * as React from 'react';
import {Text, TouchableOpacity, TextInput, View, Stylesheet, StatusBar} from 'react-native';

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

  //primeiro text(gambiarra pra descer os inputs)
  render(){
    return(
      <View>
        
        <Text>
        {this.state.titleText}
          {"\n"}
          {"\n"}
        </Text>

        <StatusBar backgroundColor="black"/>
          <TextInput underlineColorAndroid="transparent" 
          placeholder="digite o valor 1" placeholderTextColor="black"
          autoCapitalize="none"
          onChangeText={this.atualizaValor1}
          keyboardType="numeric"/> 

          <TextInput underlineColorAndroid="transparent" 
          placeholder="digite o valor 2" placeholderTextColor="black"
          autoCapitalize="none"
          onChangeText={this.atualizaValor2}
          keyboardType="numeric"/> 

        <TouchableOpacity onPress={()=>this.soma(this.state.valor1,this.state.valor2,this.state.resultado)} >
        <Text>Somar</Text>
        </TouchableOpacity>

      </View>
    )
  };

}
