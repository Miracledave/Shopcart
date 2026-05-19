import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) => {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "group text-2xl text-shop_btn_dark_green font-black tracking-wider uppercase hover:text-shop_light_green",
          className,
        )}
      >
        Shopcar
        <span
          className={
            (cn(
              "text-shop_light_green group-hover:text-shop_btn_dark_green group-hover:cursor-pointer hoverEffect", spanDesign
            ))
          }
        >
          t
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
