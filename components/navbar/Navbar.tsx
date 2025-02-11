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
import { Button } from "../Button/Button";

const mobileLinkMap: Record<string, string> = {
  "About Us": "/",
  Products: "/products",
  "Contact Us": "/contact",
};

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: "100vw" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List className="flex flex-col items-center">
        {Object.keys(mobileLinkMap).map((text) => (
          <ListItem key={text} disablePadding className="w-full">
            <Link href={mobileLinkMap[text]} passHref>
              <ListItemButton className="text-center justify-center w-full">
                <ListItemText primary={text} className="text-center" />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="w-screen border-b border-border bg-foreground">
      <div className="max-w-[1280px] max-h-24 min-h-20 m-auto w-full bg-background p-6 flex justify-between items-center bg-foreground">
        <div className="w-full flex items-center mx-auto p-6 text-sm">
          <Link className="cursor-pointer text-white" href="/">
            <Image
              className="rounded-full"
              src="/image/Bailey-logo-cropped.jpeg"
              alt="logo"
              width={60}
              height={60}
            />
          </Link>
          <div className="flex justify-evenly items-center gap-12 font-semibold ml-auto">
            <Link
              className="cursor-pointer hidden md:block text-white"
              href="/"
            >
              About Us
            </Link>
            <Link
              className="cursor-pointer hidden md:block text-white"
              href="/products"
            >
              Products
            </Link>
            <Link href="/contact" passHref>
              <Button>Contact Us</Button>
            </Link>
            <MenuIcon
              onClick={toggleDrawer(true)}
              className="cursor-pointer block md:hidden text-white"
            />
            <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
              {DrawerList}
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};
