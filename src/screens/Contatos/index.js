import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Contato() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Contato</Text>

      <Text>Telefone: (19) 99999-9999</Text>
      <Text>WhatsApp: (19) 98888-8888</Text>
      <Text>Endereço: Rua A, 123</Text>
      <Text>CNPJ: 00.000.000/0001-00</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  }
});