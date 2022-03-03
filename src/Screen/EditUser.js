import React from 'react';
import {View,Text} from 'react-native';
import { Input,Center,Button,Select,VStack,CheckIcon,} from "native-base";

function AddNew({navigation}) {
    let [service, setService] = React.useState("")
    return (
        <View>
      <Text style={{textAlign:"center",fontWeight:"bold",fontSize:20}}>Change User role</Text>
        <Input variant="filled" placeholder="EnterStaffID" style={{marginTop:150,margin:30}} />

        <VStack alignItems="center" space={4}  style={{marginTop:20}}>
      <Select
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Select Role"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setService(itemValue)}
      >
        <Select.Item label="Administrator" value="Administrator" />
        <Select.Item label="Case Reviewer" value="Case Reviewer" />
        <Select.Item label="Case investigator" value="Case investigator" />
        <Select.Item label="Case Reporter" value="Case Reporter" />
        
      </Select>
    </VStack>
 
    <Button size="sm" variant="subtle" colorScheme="secondary"  
    onPress={() => {
          navigation.navigate("UserInfo");
        }} style={{width:200,marginTop:25, marginLeft:87}}>
            Submit
         </Button>
        </View>
        
    );
}

export default AddNew;