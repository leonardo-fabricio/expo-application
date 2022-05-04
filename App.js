import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.content}>
      <View style={styles.navTop}>
        <Text style={styles.text}>Menu</Text>
        <Text style={styles.text}>Logs</Text>
        <Text style={styles.text}>Credits</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.div2}>
            <View style={styles.div3}>
                <Text style={styles.preto1}></Text>
                <Text style={styles.preto1}></Text>
                <Text style={styles.preto1}></Text>
            </View>
            <View style={styles.div4}>
                <Text style={styles.preto2}></Text>
                <Text style={styles.preto2}></Text>
                <Text style={styles.preto2}></Text>
            </View>
            <View style={styles.div5}>
              <View style={styles.div6}>
                <Text style={styles.preto3}></Text>
                <Text style={styles.preto3}></Text>
                <Text style={styles.preto3}></Text>
                <Text style={styles.preto3}></Text>
                <Text style={styles.preto3}></Text>
              </View>
              <View style={styles.div6}>
                <Text style={styles.preto3}></Text>
                <Text style={styles.preto3}></Text>
                <Text style={styles.preto3}></Text>
                <Text style={styles.preto3}></Text>
                <Text style={styles.preto3}></Text>
              </View>
              <View style={styles.div6}>
                <Text style={styles.preto3}></Text>
                <Text style={styles.preto3}></Text>
                <Text style={styles.preto3}></Text>
                <Text style={styles.preto3}></Text>
                <Text style={styles.preto3}></Text>
              </View>
            </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>Exercício 1 - DDM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    backgroundColor:'#b8bce3',
    height: '82%',
    padding: '10%',
  },
  navTop:{
    marginTop: '9%',
    backgroundColor: '#c4c4c4',
    width: '100%',
    height:56,
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 20,
    backgroundColor: '#000000', 
    color: '#fff',
    padding: 5,
    borderRadius: 10,
    marginLeft: 11,
    marginRight: 11,
    width: 77,
    textAlign:'center',
  },
  footer:{
    backgroundColor: '#4e466a',
    height: '8%',
    alignItems: 'center',
  },
  textFooter:{
    color: '#fff',
    fontSize:20,
    marginTop: 8
  },
  div2:{
    backgroundColor: '#8a8fc3',
    height: '100%',
    borderRadius:20,
    alignItems: 'center',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-around'
  },
  div3:{
    backgroundColor:'#B2B9FF',
    width: 230,
    height: 124,
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    
  },
  div4:{
    backgroundColor:'#B2B9FF',
    width: 230,
    height: 124,
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    
  },
  div5:{
    backgroundColor:'#B2B9FF',
    width: 230,
    height: 124,
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-around'
    
  },
  div6:{
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  preto1:{
    backgroundColor: '#000000',
    width: 45,
    height:106,
  },
  preto2:{
    backgroundColor: '#000000',
    width: 209,
    height:31,
  },
  preto3:{
    backgroundColor: '#000000',
    width: 35,
    height:31,
  },

});
