// import React from 'react';
// import {View,Text} from 'react-native';
// import { Input,Button,Select,VStack,CheckIcon,} from "native-base";

// function AddUser({navigation}) {
//     let [service, setService] = React.useState("")
//     return (
//         <View>
       
//         <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>Add New User</Text>
//         <Input variant="filled" placeholder="EnterStaffID" style={{marginTop:100,margin:20}} 
//         />

//         <VStack alignItems="center" space={4} style={{margin:20}}>
//       <Select
//         selectedValue={service}
//         minWidth="200"
//         accessibilityLabel="Choose Service"
//         placeholder="Select Role"
//         _selectedItem={{
//           bg: "teal.600",
//           endIcon: <CheckIcon size="5" />,
//         }}
//         mt={1}
//         onValueChange={(itemValue) => setService(itemValue)}
//       >
//         <Select.Item label="Administrator" value="Administrator" />
//         <Select.Item label="Case Reviewer" value="Case Reviewer" />
//         <Select.Item label="Case investigator" value="Case investigator" />
//         <Select.Item label="Case Reporter" value="Case Reporter" />
        
//       </Select>
//     </VStack>
 
//         <Button size="sm" variant="subtle" colorScheme="secondary" 
//         onPress={() => {
//           navigation.navigate("UserInfo");
//         }}
//         style={{marginTop:15,width:270,marginLeft:40}}>
//             Submit
//           </Button> 
       
//         </View>
        
//     );
// }

// export default AddUser;