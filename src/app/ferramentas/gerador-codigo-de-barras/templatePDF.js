'use client'
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Estilos para o PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center', // Centraliza na página
  },
  image: {
    width: '100%', // Ajuste para preencher o container e garantir alta qualidade
    paddingHorizontal: 15,
    height:'70px', 
   paddingVertical:5,
  },
  itemContainer: {
    width: '45%', // Ligeiramente menor que 50% para dar espaçamento entre as colunas
    border: '1 solid black',
    paddingVertical: 0,
    paddingHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3, // Espaçamento entre os itens
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 3, // Espaçamento entre o título e o código
    marginTop: 3,
  },
  barcode: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Courier', // Fonte monoespaçada para lembrar o estilo de código de barras
  },
});

// Função para dividir os dados em grupos de 18 itens
const paginate = (array, itemsPerPage) => {
  const pages = [];
  for (let i = 0; i < array.length; i += itemsPerPage) {
    pages.push(array.slice(i, i + itemsPerPage));
  }
  return pages;
};

// Documento PDF
const MyDocument = ({ dados }) => {
  const itemsPerPage = 18; // Quantidade de itens por página
  const pages = paginate(dados, itemsPerPage);

  return (
    <Document>
      {pages.map((pageItems, pageIndex) => (
        <Page key={pageIndex} style={styles.page}>
          {pageItems.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
              <Text style={styles.title}>{item.nome}</Text>
              <Text style={styles.barcode}>{item.codigo}</Text>
              <Image  src={item.url} style={styles.image} />
            </View>
          ))}
        </Page>
      ))}
    </Document>
  );
};

export default MyDocument;
