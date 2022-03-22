import React from 'react';
import styled from "styled-components";

interface InputProps {
  width: string;
  height: string;
  id?: string;
  onChange?: (e: any) => void;
}

export default function Input({width, height, id, onChange}: InputProps) {
  return (
    <CustomInput type="text" width={width} height={height} id={id} onChange={onChange} />
  )
}

const CustomInput = styled.input<{ width: string, height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 24px;
  border-radius: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;