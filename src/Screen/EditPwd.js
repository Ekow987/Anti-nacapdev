import React from 'react';
import {View,Text} from 'react-native';
import { Input,Button} from "native-base";

function AddNew() {
    return (
        <View>
       
        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:20}}>Change Staff Password</Text>
<Input variant="filled" placeholder="EnterStaffID" style={{marginTop:130}} />
<Input variant="filled" placeholder="Enter New Password" style={{marginTop:20}} />
<Input variant="filled" placeholder="Confirm New Password" style={{marginTop:20}}/>
    <Button size="sm" variant="subtle" colorScheme="secondary" style={{marginTop:15,width:270,marginLeft:47}}>
            Change
          </Button>
       
        </View>
        
    );
}

export default AddNew;