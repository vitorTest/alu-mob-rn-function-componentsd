/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {Text, Image, ScrollView, Dimensions, StyleSheet, FlatList} from 'react-native';

const largura = Dimensions.get('screen').width;
const informacoes = [
  {usuario: 'Vitor'},
  {usuario: 'Marina'},
  {usuario: 'Rogério'}
];

const App = () => {
  return (
    <ScrollView>
      <FlatList 
        data={informacoes}
        renderItem={ ({ item }) => 
          <Fragment>
            <Text>{item.usuario}</Text>
            <Image 
              source={require('./res/img/alura.jpg')} 
              style={estilo.imagem}
            />
          </Fragment>
        }
        keyExtractor={item => item.usuario}
      />
        
    </ScrollView>
  );
};

const estilo = StyleSheet.create({
  imagem: {
    width: largura,
    height: largura
  }
});

export default App;
