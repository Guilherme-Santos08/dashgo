import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Guilherme Ribeiro</Text>
          <Text color="gray.300">augusto.gui.2208@gmail.com</Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Guilherme Ribeiro"
        src="https://github.com/guilherme-santos08.png"
      />
    </Flex>
  )
}
