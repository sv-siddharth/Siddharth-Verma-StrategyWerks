import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo.svg"


import { cn } from "@/lib/utils"
import { NavItem } from "@/app/types/nav"
import { siteConfig } from "../config/site"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10 mx-4">
      <Link href="/" className="flex items-center space-x-2">
        <Image src={logo} alt="Binder.so" width={32} height={32} />
        <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-xl font-semibold text-transparent">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
