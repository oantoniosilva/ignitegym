import { Platform } from 'react-native';
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignIn() {
  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={Platform.OS === 'ios' ? 40 : 16}>
        <Image 
          source={BackgroundImg}
          alt="People training"
          resizeMode='contain'
          position='absolute'
        />

        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">Train your mind and body</Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">Access your account</Heading>
          
          <Input 
            placeholder='E-mail' 
            keyboardType='email-address'
            autoCapitalize='none'  
          />
          <Input 
            placeholder='Password' 
            secureTextEntry
          />

          <Button title='Access' />
        </Center>

        <Center mt={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Still don't have access?
          </Text>
          
          <Button 
            title='Create account' 
            variant="outline" 
          />
        </Center>

      </VStack>
    </ScrollView>
  )
}