import React, { useState } from "react";
import { Area, Box, Frame, Image, Title, Wrapper } from "./main.styled.js";
import { FaDumbbell } from "react-icons/fa";

export const Main = ({ title, description, woman, man, areas }) => {
  const [isMale, setIsMale] = useState(true);

  return (
    <Wrapper>
      
      <Title>
        <FaDumbbell /> {title}
      </Title>

      <Box>
        <Area>{areas}</Area>
        {!isMale && <Image onClick={() => setIsMale(true)} src={woman.image} />}
        {isMale && <Image onClick={() => setIsMale(false)} src={man.image} />}
      </Box>

      <Frame>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </Frame>
    </Wrapper>
  );
};
