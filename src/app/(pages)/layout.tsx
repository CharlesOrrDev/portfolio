'use client'

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@radix-ui/react-navigation-menu'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) =>
{
  const router = useRouter();

  const pathName = usePathname();

  const isCurrentPath = (path: string) =>
  {
    return pathName === path || pathName.startsWith(`${path}/`);
  }

  const handleNavigation = (path: string) =>
  {
    router.push(path);
  }

  const RepositoryLink = () =>
  {
    window.open("https://github.com/CharlesOrrDev/portfolio")
  }

  return (
    <div>

      <div className="fixed text-white text-lg font-[CalSans] py-[10px] bg-gray-900 w-full shadow-[0_0_2rem_0.1em_rgba(40,40,40,1)]">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>

              <NavigationMenuLink
                onClick={() => handleNavigation("/")}
                className={`cursor-pointer ml-[100px] mr-[20px]
                  ${isCurrentPath("/") ?
                  "active" :
                  ""}
                `}
                >HOME
              </NavigationMenuLink>

              <NavigationMenuLink
                onClick={() => handleNavigation("/ENTER")}
                className={`cursor-pointer mr-[20px]
                  ${isCurrentPath("/ENTER") ?
                  "hidden" :
                  ""}
                `}
                >MAIN
              </NavigationMenuLink>

              <NavigationMenuLink
                onClick={() => handleNavigation("/ABOUT")}
                className={`cursor-pointer mr-[20px]
                  ${isCurrentPath("/ABOUT") ?
                  "hidden" :
                  ""}  
                `}
                >ABOUT
              </NavigationMenuLink>

              <NavigationMenuLink
                onClick={() => handleNavigation("/CONTACT")}
                className={`cursor-pointer mr-[20px]
                  ${isCurrentPath("/CONTACT") ?
                  "hidden" :
                  ""}  
                `}
                >CONTACT
              </NavigationMenuLink>

              <NavigationMenuLink
                onClick={RepositoryLink}
                className="cursor-pointer"
                >REPOSITORY
              </NavigationMenuLink>

            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      
      <div>
        {children}
      </div>

    </div>
  )
}

export default Layout