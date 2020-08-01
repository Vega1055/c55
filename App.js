import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
export class RedButton extends Component{
render(){
return(
<Button color="red" title="Click Here"></Button>
)
}
}
export default class App extends Component {
  render() {
    return (
      <View>
      <RedButton/>
        <Text style={{marginTop:50}}>My first App</Text>
      </View>
    );

  }
}