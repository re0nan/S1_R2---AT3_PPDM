import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, Alert, ScrollView } from 'react-native';

export default function Produtos() {

  const [qtd, setQtd] = useState({});

  const produtos = [
    { id: 1, nome: 'Camisa', preco: 100, pix: 45 },
    { id: 2, nome: 'Calça', preco: 150, pix: 110 },
    { id: 3, nome: 'Tênis', preco: 350, pix: 180 },
    { id: 5, nome: 'Blusa', preco: 300, pix: 220 }
  ];

  function mudarQtd(id, valor) {
    setQtd({
      ...qtd,
      [id]: (qtd[id] || 0) + valor
    });
  }

  function adicionar() {
    Alert.alert('Aviso', 'produto adicionado ao carrinho');
  }

  return (
    <ScrollView style={styles.container}>
      {produtos.map(p => (
        <View key={p.id} style={styles.card}>

          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.img}
          /> 

          Image

          <Text>{p.nome}</Text>
          <Text>R$ {p.preco}</Text>
          <Text style={{ color: 'blue' }}>PIX: R$ {p.pix}</Text>

          <View style={styles.qtd}>
            <Button title="-" onPress={() => mudarQtd(p.id, -1)} />
            <Text>{qtd[p.id] || 0}</Text>
            <Button title="+" onPress={() => mudarQtd(p.id, 1)} />
          </View>

          <Button title="Adicionar" onPress={adicionar} />

        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  card: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#eee'
  },
  img: {
    width: 80,
    height: 80,
    marginBottom: 5
  },
  qtd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10
  }
});