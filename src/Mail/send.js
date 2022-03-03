import React,{useState} from 'react';
import {View,Text} from 'react-native';
import {Input,FormControl,Select,CheckIcon,WarningOutlineIcon,TextArea,Button,useToast } from 'native-base';
import emailjs from '@emailjs/browser';

function Mail() {
    const toast = useToast();
    const [value,setValue] = useState({
        fullname:"",
        email:"",
        role:"",
        message:""
    })
    console.log(value);

    const handleNameChange = (value) =>{
           setValue((prev)=>({
             ...prev,
             fullname:value,
           }));
        }
           const handleEmailChange = (value) =>{
            setValue((prev)=>({
              ...prev,
              email:value,
            }));
        }
        const handleRoleChange = (value) =>{
            setValue((prev)=>({
              ...prev,
              role:value,
            }));
        }
        const handleMessageChange = (value) =>{
            setValue((prev)=>({
              ...prev,
              message:value,
            }));
        }
        const handleSubmit =(e)=>{
           e.preventDefault();
           emailjs.send('service_5omgi1j','contact_form',value,'user_2aifOdope6hJEYLCjXqnR')
           .then(response=>{
               console.log('SUCCESS!', response);
               setValue({
                fullname:"",
                email:"",
                role:"",
                message:"" 
               })
               toast.show({
                status: "success",
                description: "Email sent sucessfully",
                duration: 2000,
                placement: "top-right",
              });
              // 
           },error=>{
               console.log('FAILED', error);
           });
        }
        // if (!value.fullname || !value.email || !value.role || !value.message) {
        //     toast.show({
        //        title: "Oops!... ",
        //       status: "error",
        //       description: "there is nothing to add",
        //        placement: "top-right",
        //      });
      
        //      return;
        //    }
        //    if (!value.fullname || !value.email || !value.role || !value.message) {
          
      
        //     return;
        //   }

        //   setTimeout(() => {
            
        //   }, 1000);
           
        // }
      
        
    return (
        <View>
            
    <Text style={{textAlign:"center",fontWeight:"bold"}}>Send Email To FC Ghana</Text>
    <Text style={{textAlign:"center",fontWeight:"bold"}}>Default Email (ansahalbert039@gmail.com)</Text>

    <Text>Fullname</Text>
<Input variant="filled" placeholder="fullname" onChangeText={handleNameChange} value={value.fullname}/>
     <Text>Email</Text>
<Input variant="filled" placeholder="email" onChangeText={handleEmailChange}/>
<FormControl isRequired isInvalid value={value.role} onChangeText={handleRoleChange}>
        <FormControl.Label>Choose Role</FormControl.Label>
        <Select
          minWidth="200"
          accessibilityLabel="Choose Role"
          placeholder="Choose Role"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />,
          }}
          mt="1"
        >
          <Select.Item label="Frontend" value="Frontend" />
          <Select.Item label="Backend" value="Backend" />
          <Select.Item label="qa" value="QA" />
        </Select>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage>
        </FormControl>
        <TextArea
         value={value.message}
         onChangeText={handleMessageChange}
          h={20}
          placeholder={"Type here ...."}
          variant="filled"
          mb={5}
        />
        <Button size="sm" variant="subtle" colorScheme="secondary" onPress={handleSubmit}>
            SEND
          </Button>
        </View>
       
    );
}



export default Mail;