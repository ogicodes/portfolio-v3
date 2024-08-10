"use client"
import { Navbar, NavbarItem, NavbarContent } from '@nextui-org/react';
import ThemeSwitcher from './ThemeSwitcher';

export default function Nav() {
    return (
        <Navbar position='static' maxWidth='full' >
            <NavbarContent justify='end'>
                <NavbarItem>
                    <ThemeSwitcher className='mt-80' />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}