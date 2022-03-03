import React, { useContext } from "react";
import { FlatList, Text, View } from "native-base";
export const Details = () => {
  return (
    <FlatList
      data={state}
      renderItem={({ item }) => (
        <View>
          <Text>{item.case_id}</Text>
          <Text>{item.case_title}</Text>
        </View>
      )}
      keyExtractor={(item) => item.case_id}
    />
  );
};

export default Details;

// import React,{useContext} from 'react';
// import {View,Text} from 'react-native';
//  import {CaseContext} from '../context/data.context';

//  function ReportDetails() {
//    const { state } = useContext(CaseContext)

// //   //  <Text>{JSON.stringify(state)}</Text>

//   return (
//     <View>
//        {
//          state.map(item => (
//           <Text key={item.case_id}>
//             {item.case_title}
//           </Text>
//         ))
//       }
//     </View>
//   );
// }

//  export default ReportDetails;
