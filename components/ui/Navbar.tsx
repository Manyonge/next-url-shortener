"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { NavigationMenu, NavigationMenuLink, navigationMenuTriggerStyle } from "./navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./sheet";
export function Navbar(){
  const pathname = usePathname()
  const publicRoutes = useMemo(()=>!pathname?.includes('admin')?[{label: 'Sign up', route: '/signup'},{label: 'Login', route: '/login'}]: [], [pathname])
  const privateRoutes = useMemo(()=>pathname?.includes('admin')?[{label: 'My Links', route: '/admin/my-links'},{label: 'Create Link', route: '/admin/create'}]: [], [pathname])

  return (
    <nav className="flex items-center justify-between px-2">
      <Link href={'/'}>
      <h1>Next.js URL Shortener :)</h1>
      </Link>
    <NavigationMenu className="hidden md:block ml-auto" >
      {[...publicRoutes, ...privateRoutes].map(({label, route})=>(
        <Link key={route} href={route} legacyBehavior passHref >
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {label}
          </NavigationMenuLink>
        </Link>
      ))}
    </NavigationMenu>
      <Sheet>
    <SheetTrigger className="md:hidden" >Phone Menu</SheetTrigger>
<SheetContent className="w-1/3" >
    <SheetHeader>
      <SheetTitle>URL Shortener</SheetTitle>
    </SheetHeader>
      <NavigationMenu className="flex flex-col items-center justify-start" >
        {[...publicRoutes, ...privateRoutes].map(({label, route})=>(
          <Link key={route} href={route} legacyBehavior passHref className="" >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {label}
            </NavigationMenuLink>
          </Link>
        ))}
      </NavigationMenu>
    </SheetContent>
    </Sheet>

    </nav>
  )
}
