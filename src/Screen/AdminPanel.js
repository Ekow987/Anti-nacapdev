import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { FlatList } from "native-base";
// import { ScrollView } from "native-base";
// import Card4 from "../lib/Card4";
// import Card5 from "../lib/Card5";
// import Card6 from "../lib/Card6";
// import Card7 from "../lib/Card7";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSummary } from "../store/slices/summary.slice";
import Axios from "axios";
import {baseURL} from '../lib/Api';
function AdminPanel() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.staff);
  const summary = useSelector((state) => state.summary.all);

 
  // const summaryArray =[
  //   {title:"Under Review", counter:summary.underReview},
  //   {title:"Reviewed", counter:summary.reviewed},
  //   {title:"Under Investigation", counter:summary.underInvestigation},
  //   {title:"Investigated", counter:summary.investigated},
  //   {title:"Forwarded", counter:summary.forwarded},
  // ]

  /**
   * [
   *  {title: "underReview", count: 16},
   *  {title: "reviewed", count: 2},
   *  ...
   * ]
   */
    
  useEffect(() => {
    async function getSummary() {
      try {
        let res = await Axios({
          method: "GET",
          url: `${baseURL}/cases/summary`,
        });

        dispatch(setSummary(res.data));
        console.log("New data", res.data);
      } catch (error) {
        console.log(error);
      }
    }


    getSummary();
  }, []);
  return (
    <View>
      <Text>Admin Panel </Text>

      <FlatList
        data={summary}
        renderItem={({ item }) => (
          <View>
            <Text>{JSON.stringify(item.title)}</Text> 
            {/* <Text>{item.counter}</Text> */}
          </View>
        )}
        keyExtractor={(item) => item}
      />

      {/* {summary.map((item) => (
        <Text>{JSON.stringify(item)}</Text>
      ))} */}
    </View>
  );
}

export default AdminPanel;
