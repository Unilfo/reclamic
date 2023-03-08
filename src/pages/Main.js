import {SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";

export const Main = () => {
  const arr = [
    {id: 1, url: '', title: 123, description: 'lorem klskldkslad askldklasdlk'},
    {id: 2, url: '', title: 123, description: 'asasdas'},
    {id: 3, url: '', title: 123, description: 'wsdcfc'},
    {id: 4, url: '', title: 123, description: 324},
    {id: 5, url: '', title: 123, description: 324},
    {id: 6, url: '', title: 123, description: 324},
    {id: 7, url: '', title: 123, description: 324},
    {id: 8, url: '', title: 123, description: 324},
    {id: 9, url: '', title: 123, description: 324},
    {id: 10, url: '', title: 123, description: 324},
    {id: 11, url: '', title: 123, description: 324},
    {id: 12, url: '', title: 123, description: 324},
    {id: 13, url: '', title: 123, description: 324},
    {id: 14, url: '', title: 123, description: 324},
    {id: 15, url: '', title: 123, description: 324},
    {id: 16, url: '', title: 123, description: 324},
    {id: 17, url: '', title: 123, description: 324},
    {id: 18, url: '', title: 123, description: 324},
    {id: 19, url: '', title: 123, description: 324},
    {id: 20, url: '', title: 123, description: 324},
  ];


  return (
    <SafeAreaView>
      <StatusBar barStyle='dark-content'/>
      {arr.map(el => {
        return (
          <View key={el.id} style={styles.post}>
            <Text key={el.id}>{el.description}</Text>
          </View>
        )
      })}
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  post: {
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});
