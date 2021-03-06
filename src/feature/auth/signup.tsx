
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';

const SignUpComponent = () => {

  return (
      <section flowy-module="auth">
        <Container size={420} my={40}>
          <Title
            align="center"
            sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
          >
            Create Account
          </Title>
          <Text color="dimmed" size="sm" align="center" mt={5}>
            Already have an account?{' '}
            <Anchor<'a'> href="/auth/signin" size="sm">
              Sign in
            </Anchor>
          </Text>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Name" placeholder="Your Name" required/>
            <TextInput label="Email" placeholder="you@yourmail.com" required mt="md"/>
            <PasswordInput label="Password" placeholder="Your password" required mt="md" />
            <PasswordInput label="Repeat password" placeholder="Your password" required mt="md" />
            <Group position="apart" mt="md">
              <Checkbox label="Remember me" />
              <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button fullWidth mt="xl">
              Sign up
            </Button>
          </Paper>
        </Container>
      </section>
  );
};

export default SignUpComponent;
