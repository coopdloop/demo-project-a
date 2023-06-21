import SignInButton from "./SignInButton";
import * as React from "react";
import Link from "next/link";
// import { Icons } from "@/"

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
const Navbar = () => {
  return (
    // <header className='flex h-24 flex-col justify-center bg-stone-100'>
    //   <nav className='container'>
    //     <ul className='flex items-center justify-between gap-8 font-medium tracking-wider text-stone-500'>
    //       <li className='text-sm'>
    //         <Link href='/'>Home</Link>
    //       </li>
    //       <li className='text-sm'>
    //         <Link href='/protected/server'>Protected (server)</Link>
    //       </li>
    //       <li className='text-sm'>
    //         <Link href='/protected/client'>Protected (client)</Link>
    //       </li>
    //       <li>
    //         <SignInButton />
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
    <NavigationMenu>
      <NavigationMenuList className="p-4">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Protected (server)</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {protectedServerMenu.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Protected (client)</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {protectedClientMenu.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="https://github.com/coopdloop" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Github
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <SignInButton />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const protectedServerMenu: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "protected/server",
    href: "/protected/server",
    description: "View the example protected server page.",
  },
];
const protectedClientMenu: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "protected/client",
    href: "/protected/client",
    description: "View the example protected client page.",
  },
];
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
