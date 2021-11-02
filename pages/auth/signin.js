import { signIn, providers } from 'next-auth/client';
import { Box, Button, Stack } from '@chakra-ui/react';
import WomanyLogo from '@components/icons/icon-womany';

const Renderer = {
  // eslint-disable-next-line react/display-name
  google: ({ provider }) => (
    <Button
      rightIcon={<WomanyLogo width={256} />}
      h="6rem"
      fontSize="2rem"
      variant="outline"
      onClick={() => signIn(provider.id, { callbackUrl: process.env.NEXT_PUBLIC_HOSTNAME })}
    >
      Sign in with
    </Button>
  )
  // // eslint-disable-next-line react/display-name
  // facebook: ({ provider }) => (
  //   <Button
  //     w='32rem'
  //     h='4rem'
  //     fontSize='2rem'
  //     variant='outline'
  //     onClick={() => signIn(provider.id)}
  //   >
  //     Sign in with
  //     {' '}
  //     {provider.name}
  //   </Button>
  // ),
};

export default function SignIn({ providers: allProviders }) {
  return (
    <Stack spacing={8} justify="center" align="center" h="100vh" direction="column">
      {Object.values(allProviders).map(provider => (
        <Box key={provider.name}>{Renderer[provider.id]({ provider })}</Box>
      ))}
    </Stack>
  );
}

export async function getServerSideProps(context) {
  const allProviders = await providers(context);
  console.log(allProviders);
  return {
    props: {
      providers: allProviders
    }
  };
}
