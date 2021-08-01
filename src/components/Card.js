import React, { useState } from "react";
import {
  Text,
  Flex,
  IconButton,
  useDisclosure,
  Divider,
  ScaleFade,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import "./Card.css";

const Card = ({ onClick, selected }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  return (
    <Flex
      flexDirection="column"
      margin="24px"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        paddingY="16px"
        borderColor="#EAEAEA"
        borderWidth={1}
        borderRadius="md"
        zIndex={2}
        backgroundColor={selected ? "facebook.400" : "white"}
        className={isOpen ? "icon-container-hovered" : "icon-container-default"}
      >
        <IconButton
          variant="ghost"
          color={selected ? "white" : "facebook.400"}
          aria-label="add"
          fontSize="20px"
          icon={<AddIcon />}
          zIndex={1}
          {...{ onClick }}
        />
      </Flex>
      {selected ? (
        <ScaleFade
          initialScale={0.6}
          in={selected}
          style={{ zIndex: 3, transition: "100ms" }}
        >
          <Flex
            backgroundColor="white"
            minWidth="250"
            minHeight="160"
            flexDirection="column"
            borderRadius="md"
            paddingX="24px"
            paddingY="16px"
            borderColor="#EAEAEA"
            borderWidth={1}
            justifyContent="space-around"
            paddingBottom="80px"
          >
            <Flex justifyContent="center" marginTop="8px">
              <Text fontFamily="arial" fontSize="10px">
                CREATE BOOST
              </Text>
            </Flex>
            <Flex
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              marginTop="8px"
            >
              <Divider maxWidth="30%" />
              <Text
                fontFamily="arial"
                fontSize="10px"
                marginX="4px"
                textColor="gray"
              >
                Date Period
              </Text>
              <Divider maxWidth="30%" />
            </Flex>
            <Flex justifyContent="center" marginTop="8px">
              <Text fontFamily="arial" fontSize="10px">
                Pick Date Range :
              </Text>
            </Flex>
            <Flex
              justifyContent="center"
              marginTop="8px"
              flexDirection="column-reverse"
            >
              <input
                type="date"
                value={start}
                onChange={(e) => setStart(e.target.value)}
              />
            </Flex>
            <Flex justifyContent="center" marginTop="8px">
              <Text fontFamily="arial" fontSize="10px">
                TO
              </Text>
            </Flex>
            <Flex
              justifyContent="center"
              marginTop="8px"
              flexDirection="column-reverse"
            >
              <input
                type="date"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
              />
            </Flex>
          </Flex>
        </ScaleFade>
      ) : (
        <Flex
          backgroundColor="white"
          minWidth="250"
          minHeight="160"
          flexDirection="column"
          borderRadius="md"
          paddingX="24px"
          paddingY="16px"
          borderColor="#EAEAEA"
          borderWidth={1}
          justifyContent="space-around"
          zIndex={3}
        >
          <Flex
            paddingY="4px"
            paddingX="16px"
            alignSelf="flex-start"
            borderWidth={5}
            borderRadius="3xl"
            color="gray"
          >
            <Text fontFamily="arial" fontSize="10px">
              BOOST
            </Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text fontFamily="arial" fontSize="10px">
              LIKING
            </Text>
            <Text fontFamily="arial" fontSize="16px" fontWeight="bold">
              100
            </Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default Card;
