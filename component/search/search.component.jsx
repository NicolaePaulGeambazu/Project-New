import React, {useState} from "react";
import { Button, Input } from "./search.styled";

export const Search = ({ areas }) => {
  const [newImage, setNewImage] = useState()
  const handleInput = e => setNewImage(e.target.value)
  
  return(
    <>
    <Input onChange={handleInput} type="text" placeholder="What yoy doing today ? "/>
    <Button>Search</Button>
    </>
  )
};
