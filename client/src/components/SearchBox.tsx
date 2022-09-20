import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

import useDebounce from "../hooks/useDebounce";

interface TCompoProps {
  onSearch: (val: string) => void;
}
const SearchBox = ({ onSearch }: TCompoProps) => {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchTerm = useDebounce(searchText, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      onSearch(debouncedSearchTerm);
    } else {
      onSearch("");
    }
  }, [debouncedSearchTerm, onSearch]);

  const handleChangeText = useCallback(
    (e: React.FormEvent<HTMLInputElement>): void =>
      setSearchText(e.currentTarget.value),
    []
  );

  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        onChange={handleChangeText}
        type="text"
        placeholder="Search here..."
        name="searchBox"
      />
    </InputGroup>
  );
};

export default SearchBox;
