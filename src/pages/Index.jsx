// Complete the Index page component here
// Use chakra-ui
import { Box, Flex, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { FaArrowRight, FaArrowLeft, FaRedo as FaRotateRight, FaUndo as FaRotateLeft } from "react-icons/fa";

const Index = () => {
  return (
    <VStack spacing={8} p={5}>
      <Heading as="h1" size="xl">
        Matrix Rotation Simulator
      </Heading>
      <Text>This interactive tool allows you to visualize the rotation of a matrix either clockwise or counterclockwise.</Text>
      <Flex align="center" justify="center">
        <Box p={5} borderWidth="2px" borderRadius="lg">
          <Heading as="h2" size="lg" mb={4}>
            Original Matrix
          </Heading>
          <Text>[[1, 2], [3, 4]]</Text>
        </Box>
        <Box p={5} ml={10} mr={10}>
          <FaArrowRight size="2em" />
          <FaRotateRight size="2em" style={{ marginLeft: 20 }} />
        </Box>
        <Box p={5} borderWidth="2px" borderRadius="lg">
          <Heading as="h2" size="lg" mb={4}>
            Rotated Matrix (Clockwise)
          </Heading>
          <Text>[[3, 1], [4, 2]]</Text>
        </Box>
      </Flex>
      <Flex align="center" justify="center">
        <Box p={5} borderWidth="2px" borderRadius="lg">
          <Heading as="h2" size="lg" mb={4}>
            Original Matrix
          </Heading>
          <Text>[[1, 2], [3, 4]]</Text>
        </Box>
        <Box p={5} ml={10} mr={10}>
          <FaArrowLeft size="2em" />
          <FaRotateLeft size="2em" style={{ marginLeft: 20 }} />
        </Box>
        <Box p={5} borderWidth="2px" borderRadius="lg">
          <Heading as="h2" size="lg" mb={4}>
            Rotated Matrix (Counterclockwise)
          </Heading>
          <Text>[[2, 4], [1, 3]]</Text>
        </Box>
      </Flex>
      <Image src="https://images.unsplash.com/photo-1506645292803-579c17d4ba6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXRyaXglMjByb3RhdGlvbiUyMHZpc3VhbGl6YXRpb258ZW58MHx8fHwxNzEzOTQ4MzU5fDA&ixlib=rb-4.0.3&q=80&w=1080" />
    </VStack>
  );
};

export default Index;
