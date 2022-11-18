import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';
import { Platform } from 'react-native';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignUp() {

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={Platform.OS === 'ios' ? 40 : 16}>
        <Image 
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="People training"
          resizeMode='contain'
          position='absolute'
        />

        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">Train your mind and body</Text>
        </Center>

        <Center>
          <Heading 
            color="gray.100" 
            fontSize="xl" 
            mb={6} 
            fontFamily="heading"
          >
            Create account
          </Heading>

          <Input 
            placeholder='Name'   
          />
          
          <Input 
            placeholder='E-mail' 
            keyboardType='email-address'
            autoCapitalize='none'  
          />
          <Input 
            placeholder='Password' 
            secureTextEntry
          />

          <Button title='Create and access' />
        </Center>
                    
        <Button
          mt={24} 
          title='Back to login' 
          variant="outline"
          onPress={handleGoBack} 
        />

      </VStack>
    </ScrollView>
  )
}