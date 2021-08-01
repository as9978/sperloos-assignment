import "./App.css";
import { Flex } from "@chakra-ui/react";

import { Card } from "./components";
import { useState } from "react";

function App() {
  const uselessArray = new Array(2).fill(0);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Flex flex={1} height="100vh" justifyContent="center" alignItems="center" flexWrap='wrap'>
      {uselessArray.map((_, index) => (
        <Card
          key={index}
          onClick={() => {
            if (selectedIndex === index) setSelectedIndex(-1);
            else setSelectedIndex(index);
          }}
          selected={selectedIndex === index}
        />
      ))}
    </Flex>
  );
}

export default App;
