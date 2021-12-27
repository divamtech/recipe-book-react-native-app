import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default ({ recipe, onBackTapped }) => (
  <View style={{ flex: 1 }}>
    <View
      style={{
        height: 84,
        paddingTop: 20,
        backgroundColor: 'rgb(138,127,255)',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <Text style={styles.title}>{recipe.name}</Text>
      <TouchableOpacity
        style={{
          position: 'absolute',
          left: 0,
          bottom: 18,
          paddingVertical: 5,
          paddingHorizontal: 20,
        }}
        onPress={onBackTapped}>
        <Text style={{ color: 'white' }}>Back</Text>
      </TouchableOpacity>
    </View>

    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(254, 193, 101)',
        padding: 4,
      }}>
      <Text style={{ textAlign: 'left' }}>CHEF: {recipe.chef}</Text>
      <Text
        style={{
          textAlign: 'right',
        }}>
        DATE: {recipe.date}
      </Text>
    </View>
    <ScrollView style={{ backgroundColor: '#d8d8d8', flex: 1 }}>
      <Image
        source={{ uri: recipe.image }}
        style={{
          width: 250,
          height: 250,
          resizeMode: 'contain',
          backgroundColor: 'white',
          borderRadius: 10,
          margin: 10,
          alignSelf: 'center',
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgb(230, 45, 93)',
          padding: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white',
          }}>
          Ingredients
        </Text>
        <FlatList
          data={recipe.ingredients}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Text style={styles.item}>
              {index + 1}. {item}
            </Text>
          )}
        />
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: '#737683',
          padding: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white',
          }}>
          Instruction
        </Text>
        <FlatList
          data={recipe.instruction}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Text style={styles.item}>
              {index + 1}. {item}
            </Text>
          )}
        />
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    width: '75%',
    paddingBottom: 8,
    textAlignVertical: 'center',
  },
  item: {
    textAlign: 'left',
    color: 'white',
    paddingHorizontal: 4,
  },
});
