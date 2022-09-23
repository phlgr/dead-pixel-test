import {
  Button,
  Center,
  Container,
  Group,
  Kbd,
  Popover,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Container>
      <Stack align="center" justify="space-evenly" sx={{ minHeight: "60vh" }}>
        <Center>
          <Title order={1}>Dead Pixel Test</Title>
        </Center>
        <Text
          sx={{
            "@media (min-width: 667px)": {
              width: "30rem",
            },
          }}
        >
          On this site you can check for dead pixels! This is particulary useful
          after you have bought a new monitor or after transporting your
          monitor.
        </Text>
        <Group>
          <Popover withArrow>
            <Popover.Target>
              <Button variant="default">How To</Button>
            </Popover.Target>
            <Popover.Dropdown>
              <Stack spacing="xs">
                Next Color:
                <Group>
                  <Kbd>LClick</Kbd>or<Kbd>Enter</Kbd>or<Kbd>{">"}</Kbd>
                </Group>
                Previous Color:
                <Group>
                  <Kbd>RClick</Kbd>or<Kbd>Backspace</Kbd>or<Kbd>{"<"}</Kbd>
                </Group>
              </Stack>
            </Popover.Dropdown>
          </Popover>
          <Link href="/test" passHref>
            <Button>Start Test</Button>
          </Link>
        </Group>
      </Stack>
    </Container>
  );
};

export default Home;
