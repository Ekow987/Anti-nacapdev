import React from 'react';
import { View } from 'react-native';
import {Button} from 'native-base';

function MyBtn({navigation}) {
    return (
        <View>
     <Button  onPress={() => {
          navigation.navigate("Email");
        }}>Send Email</Button>  
        </View>
    );
}

export default MyBtn;