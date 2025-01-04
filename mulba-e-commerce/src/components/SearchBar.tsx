import { Search } from "lucide-react";
import React from "react";
import { Dialog, DialogTrigger } from "./ui/dialog";

const SearchBar = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Search className="w-5 h-5 cursor-pointer" />
        </DialogTrigger>
      </Dialog>
    </>
  );
};

export default SearchBar;
