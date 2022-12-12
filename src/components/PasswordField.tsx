import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

const PasswordInput = ({
  isRequired,
  value = "",
  onChange = () => {},
  error = false,
  label,
  placeholder,
}: any) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl isInvalid={error}>
      <FormLabel htmlFor="email">
        {label} {isRequired && <span style={{ color: "red" }}> *</span>}
      </FormLabel>

      <InputGroup size="md">
        <Input
          borderColor={"blue"}
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <InputRightElement width="4.5rem">
          <div style={{ cursor: "pointer" }} onClick={handleClick}>
            {show ? (
              <ViewOffIcon color={!error ? "blue" : "red"} />
            ) : (
              <ViewIcon color={!error ? "blue" : "red"} />
            )}
          </div>
        </InputRightElement>
      </InputGroup>
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      {!error && <FormHelperText>This field is required.</FormHelperText>}
    </FormControl>
  );
};

export { PasswordInput };
