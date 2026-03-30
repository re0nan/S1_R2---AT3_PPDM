import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      <Image
        source={{ uri: 'https://via.placeholder.com/120' }}
        style={styles.logo}
      />

      
      <Text style={styles.titulo}>Loja Exemplo</Text>

      <Text style={styles.texto}>
        Bem-vindo à nossa loja! Aqui você encontra produtos com preços ótimos.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Produtos')}
      >
        <Text style={styles.botaoTexto}>Produtos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Contato')}
      >
        <Text style={styles.botaoTexto}>Contato</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 15
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  texto: {
    textAlign: 'center',
    marginVertical: 15
  },
  botao: {
    backgroundColor: '#333',
    padding: 10,
    marginTop: 10,
    width: '70%',
    alignItems: 'center',
    borderRadius: 5
  },
  botaoTexto: {
    color: '#fff'
  }
});