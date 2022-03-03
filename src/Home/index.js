import React,{useContext} from 'react';
import { View, FlatList } from "react-native";
import Reported from '../Screen/Reported';
import {CaseContext } from "../context/data.context";

function New() {
    const { state, dispatch } = useContext(CaseContext);
const showCases= ({ item }) => {
     return (
        //   <Card fruit={item} navigation={navigation} deleteItem={deleteItem} />
        <Reported state={item}/>
        );
      };

    return (
        <View>
       <FlatList
        data={state}
        renderItem={showCases}
        keyExtractor={(item) => String(item.case_id)}
      />

     </View>
    );
}

export default New;