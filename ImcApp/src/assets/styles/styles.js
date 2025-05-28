//Importação do StyleSheet do react-native para utilização externa.
import { StyleSheet } from "react-native";
//Exportação das estilizações.
export const styles = StyleSheet.create({
  container: {
    flex: 1, //display-flex
    backgroundColor: '#442d1c', //cor COWHIDE COCOA
    justifyContent: 'center', //tudo ao centro
    alignItems: 'center', //itens ao centro
    padding: 20, //preenchimento de 20px
  },
  titulo: {
    fontSize: 24, //tamanho da letra em 24px
    fontWeight: 'bold', //'peso', fonte mais 'gordinha'
    fontStyle: 'italic', //estilização italica
    marginBottom: 20, //espaçamento de 20px na parte de baixo
    color: '#e8d1a7', // cor Toasted Caramel
  },
  input: {
    height: 40, //altura em 40px
    borderColor: '#9d9167', //cor da borda como Olive Harvest
    color: "#e8d1a7", // cor Toasted Caramel
    borderWidth: 2, // borda com tamanho de 2px
    marginBottom: 20, //espaçamento de 20px na parte de baixo
    paddingLeft: 20, //preenchimento da esquerda para a direita de 20px
    width: '70%', //comprimento? largura de 70% da largura total da tela
    borderRadius: 40, // arredondamento das bordas do imput em 40px

  },
  modalBackground: {
    flex: 1, //display-flex
    justifyContent: 'center', //tudo ao centro
    alignItems: 'center', //itens ao centro
    backgroundColor: '#743014', // cor de fundo Spiced Wine
  },
  modalContainer: {
    padding: 20, // preenchimento de 20px
    borderRadius: 40, //arredondamento de 40px nas bordas do resultado do imc
    width: '80%', //largura de 80% em relação ao total
    alignItems: 'center', //itens ao centro
    backgroundColor: '#84592b', //cor de fundo Toasted Caramel.
  },
});
