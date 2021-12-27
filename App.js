import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';

import Recipe from './Recipe';
import recipes from './recipes.json';

export default class App extends Component {
  state = { modalVisible: false, item: null };

  onPress = (item) => {
    this.setState({ item, modalVisible: true });
  };

  renderItem = ({ item, index }) => (
    <TouchableOpacity style={styles.cell} onPress={() => this.onPress(item)}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={{ uri: item.image }}
          style={{
            width: 140,
            height: 140,
            resizeMode: 'contain',
            borderRadius: 10,
          }}
        />
        <View style={{ justifyContent: 'space-around', flex: 1 }}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subTitle}>Chef: {item.chef}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: 'rgb(254, 193, 101)',
          marginVertical: 5,
        }}
      />
    </TouchableOpacity>
  );

  renderRecipe = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={() => this.setState({ modalVisible: false })}
        visible={this.state.modalVisible}>
        <Recipe
          recipe={this.state.item}
          onBackTapped={() => this.setState({ modalVisible: false })}
        />
      </Modal>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderRecipe()}
        <View
          style={{
            height: 84,
            paddingTop: 20,
            backgroundColor: 'rgb(138,127,255)',
          }}>
          <Text style={styles.container}>All Recipes</Text>
        </View>
        <FlatList
          data={recipes}
          renderItem={this.renderItem}
          style={{ flex: 1 }}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    paddingTop: 25,
    padding: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  cell: {
    height: 150,
    padding: 5,
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'black',
    fontSize: 14,
  },
  date: {
    color: 'black',
    fontSize: 12,
  },
});
