import React from 'react';
import {View} from 'react-native';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  ScrollView
} from "native-base"
function Investigate() {
  return (
   <View>
     <ScrollView>
  <Center flex={1} px="3">
    <Box
    style={{margin:20}}
      maxW="80"
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
    >
      <Box>
         <AspectRatio w="100%" ratio={16 / 9}>
           <Image source={require('../Assets/images/court.jpg')}alt='image'/> 
         </AspectRatio> 
        <Center
          bg="violet.500"
          _dark={{
            bg: "violet.400",
          }}
          _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs",
          }}
          position="absolute"
          bottom="0"
          px="3"
          py="1.5"
        >
          PHOTOS
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1" style={{color:"#FFFFFF"}}>
           Under Investigation
          </Heading>
        </Stack>
        <Text fontWeight="400" style={{color:"#FFFFFF"}}>
            TOTAL CASES INVESTIGATED
        </Text>
        <Text fontWeight="400" style={{fontSize:20, color:"#FFFFFF"}}>
            2
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400"
            >
              6 mins ago
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
    </Center>
    </ScrollView>
   </View>
  );
}

export default Investigate;




