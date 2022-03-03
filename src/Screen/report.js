import React from "react";
import { ScrollView, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Myturn from "../lib/ImgPicker";

import {
  FormControl,
  Select,
  CheckIcon,
  WarningOutlineIcon,
  Input,
  Checkbox,
  Button,
  TextArea,
  useToast
} from "native-base";

import { useReportCaseContext } from "../context/reportCase.context";
// import MyBtn from "../lib/Button";

function Report({ navigation }) {
  const { report, person, setReport, setPerson, submitCase, clearForm } =
    useReportCaseContext();
  const toast = useToast();

  const handler = (callback, target, value) => {
    callback((prev) => ({
      ...prev,
      [target]: value
    }));
  };

  const handleSubmit = async () => {
    let { status, data} = await submitCase();

    if (!status) {
      toast.show({
        description: data
      });

      return;
    }else{
      toast.show({
        description: "Data inserted successfully"
      });
    }
   
  

    clearForm();
  };

  return (
    <ScrollView>
      <View style={{ margin: 30 }}>
        <FormControl isRequired>
          <FormControl.Label>Case category</FormControl.Label>
          <Select
            mt="1"
            minWidth="200"
            selectedValue={report.category}
            onValueChange={(val) => handler(setReport, "category", val)}
            accessibilityLabel="Choose Service"
            placeholder="Choose category"
            dropdownIcon={<AntDesign name="down" size={18} color="grey" />}
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />
            }}
          >
            <Select.Item label="Illegal Logging" value="Illegal Logging" />
            <Select.Item
              label="Unregistered Contractor"
              value="Unregistered Contractor"
            />
          </Select>

          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Please make a selection!
          </FormControl.ErrorMessage>
        </FormControl>
        <Text>Case Title</Text>
        <Input
          variant="filled"
          placeholder="Case Title"
          value={report.title}
          onChangeText={(txt) => handler(setReport, "title", txt)}
        />

        {/* details */}
        <Text>Case Details</Text>
        <TextArea
          style={{ marginTop: 10 }}
          aria-label="t1"
          numberOfLines={4}
          value={report.details}
          placeholder="Case Details"
          onChangeText={(txt) => handler(setReport, "details", txt)}
          isInvalid
          _dark={{
            placeholderTextColor: "gray.300"
          }}
          mb="5"
        />
        {/* <Myvoice /> TODO: refractor */}

        <Text>Case Region</Text>
        <Input
          variant="filled"
          value={report.region}
          onChangeText={(txt) => handler(setReport, "region", txt)}
          placeholder="Case Region"
          style={{ marginTop: 10 }}
        />
        <Myturn />
        <Text>Case Town</Text>
        <Input
          variant="filled"
          value={report.town}
          onChangeText={(txt) => handler(setReport, "town", txt)}
          placeholder="Case Town"
          style={{ marginTop: 10 }}
        />
        <Text>Case Location</Text>
        <Input
          variant="filled"
          value={report.location}
          onChangeText={(txt) => handler(setReport, "location", txt)}
          placeholder="Case Location"
          style={{ marginTop: 10 }}
        />
        <Checkbox
          isChecked={person.anon}
          onChange={(bool) => handler(setPerson, "anon", bool)}
        >
          Check if you want feedback
        </Checkbox>
        <View style={{ display: person.anon ? "flex" : "none" }}>
          <Text>Fullname</Text>
          <Input
            variant="filled"
            value={person.fullname}
            onChangeText={(txt) => handler(setPerson, "fullname", txt)}
            placeholder="Fullname"
            style={{ marginTop: 10 }}
          />
          <Text>Email</Text>
          <Input
            variant="filled"
            value={person.email}
            type="email"
            onChangeText={(txt) => handler(setPerson, "email", txt)}
            placeholder="Email"
            style={{ marginTop: 10 }}
          />
          <Text>Phone number</Text>
          <Input
            variant="filled"
            type="tel"
            value={person.phone}
            onChangeText={(txt) => handler(setPerson, "phone", txt)}
            placeholder="Phone number"
            style={{ marginTop: 10 }}
          />
        </View>
        <Button onPress={handleSubmit} style={{ marginTop: 10 }}>
          Send Report
        </Button>
      </View>
    </ScrollView>
  );
}

export default Report;
