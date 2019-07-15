import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      numero: 0,
      botao: 'Go!'
    };

    //variavle do relogio
    this.timer = null;

    this.go = this.go.bind(this);
    this.clean = this.clean.bind(this);
  }

  go() {
    let state = this.state;

    if (this.timer != null) {
      //Aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;

      state.botao = "Go!";

    } else {
      //Começa girar o timer
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      }, 100);

      state.botao = "Stop!";
    }

    this.setState(state);

  }

  clean() {
    if (this.timer != null) {

      //Aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;

    }
    let state = this.state;
    state.numero = 0;
    state.botao = "Go!";
    this.setState(state);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./image/cronometro.png')} />
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.botao} onPress={this.go}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={this.clean}>
            <Text style={styles.btnTexto}>Clean</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#5e1224'
  },
  timer: {
    marginTop: -160,
    color: '#FFFFFF',
    fontSize: 72,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#FFFFFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5e1224'
  }
});