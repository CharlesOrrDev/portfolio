'use client'

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@radix-ui/react-navigation-menu'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'

const layout = ({ children }: { children: React.ReactNode }) =>
{
  const router = useRouter();

  const pathName = usePathname();

  const [currentlyEnterPage, setCurrentlyEnterPage] = useState(false);
  const [currentlyAboutPage, setCurrentlyAboutPage] = useState(false);
  const [currentlyContactPage, setCurrentlyContactPage] = useState(false);

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
    window.open("https://github.com/CharlesOrrDev/portfolio", "_blank", "noopener,noreferrer")
  }

  return (
    <div>
      <div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>

                <NavigationMenuLink
                  onClick={() => handleNavigation("/")}
                  className={`nav-link
                    ${isCurrentPath("/") ?
                    "active" :
                    ""}
                  `}
                  >HOME
                </NavigationMenuLink>

                <NavigationMenuLink
                  onClick={() => handleNavigation("/ENTER")}
                  className={`nav-link
                    ${isCurrentPath("/ENTER") ?
                    "hidden" :
                    ""}
                  `}
                  >MAIN
                </NavigationMenuLink>

                <NavigationMenuLink
                  onClick={() => handleNavigation("/ABOUT")}
                  className={`nav-link
                    ${isCurrentPath("/ABOUT") ?
                    "hidden" :
                    ""}  
                  `}
                  >ABOUT
                </NavigationMenuLink>

                <NavigationMenuLink
                  onClick={() => handleNavigation("/CONTACT")}
                  className={`nav-link
                    ${isCurrentPath("/CONTACT") ?
                    "hidden" :
                    ""}  
                  `}
                  >CONTACT
                </NavigationMenuLink>

                <NavigationMenuLink
                  onClick={RepositoryLink}
                  className="nav-link"
                  >REPOSITORY
                </NavigationMenuLink>

              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {children}
      </div>
    </div>
  )
}

export default layout