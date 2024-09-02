"use client";

import { useMenuStore } from "@/store/toggleMenuStore";
import { motion } from "framer-motion";
import MenuLinks from "./menu-links";
import LogOutButton from "../authenticate/logout-button";

export default function Sidebar() {
  const { isOpen } = useMenuStore();
  return (
    <motion.div
      initial={{ width: isOpen ? 80 : 250 }}
      animate={{ width: isOpen ? 80 : 250 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`sticky z-10 top-0 flex flex-col h-screen items-center overflow-hidden py-10 border-r md:max-w-[200px] ${
        isOpen
          ? "max-md:hidden gap-10"
          : "block justify-between"
      }`}
    >
      <MenuLinks isOpen={isOpen} />
      <LogOutButton />
    </motion.div>
  );
}