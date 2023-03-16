import { Box, Button } from "@mui/material";
import React from "react";
import { useState } from 'react';

export default function AlertBox() {
  const [ promptAns, setPromptAns] = useState<null | string>("");
  const jsAlert = () => { 
    alert("I am a JS Alert")
    setPromptAns("I am a JS Alert")
  }


  const jsConfirm = () => { 
    const value = confirm("I am a JS Confirm");
    if (value) {
      setPromptAns("I am a JS Confirm")
    } else {
      setPromptAns("I cancelled a JS Confirm")
    }
  }


  const jsPrompt = () => {
    const answer = prompt("I am a JS Prompt?")
    if (answer) {
      setPromptAns(answer);
    } else {
      setPromptAns("I cancelled a JS Prompt")
    }
  }
  return (
    <Box component="section" sx={{ m: '10px' }}>
      <Box component="h1">Alerts Box Tests</Box>
      <Button id="alert-button" onClick={() => { jsAlert(); }}>JS Alert</Button>
      <Button id="confirm-button" onClick={() => { jsConfirm(); }}>JS Confirm</Button>
      <Button id="prompt-button" onClick={() => { jsPrompt(); }}>JS Prompt</Button>
      <Box component="p" id="answer">{promptAns}</Box>
    </Box>
  )
}