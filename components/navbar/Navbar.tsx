"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { Button } from "../button/Button";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: "100vw" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {["Home", "Products", "Contact Us"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton className="text-center">
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="max-h-24 min-h-20 w-full bg-background border-b border-border p-6 flex justify-between items-center">
      <div className="w-full flex items-center mx-auto p-6 text-sm">
        <Image
          src="/image/Bailey-logo-cropped.jpeg"
          alt="logo"
          width={60}
          height={60}
        />
        <div className="flex justify-evenly items-center gap-12 font-semibold ml-auto">
          <Link className="cursor-pointer hidden md:block" href="/about">
            About Us
          </Link>
          <Link className="cursor-pointer hidden md:block" href="/services">
            Products
          </Link>
          <Button>Contact Us</Button>
          <MenuIcon
            onClick={toggleDrawer(true)}
            className="cursor-pointer block md:hidden"
          >
            btn
          </MenuIcon>
          <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
            {DrawerList}
          </Drawer>
        </div>
      </div>
    </div>
  );
};
