"use client"
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import {Button} from "@nextui-org/react";
import { Sun, MoonStar } from 'lucide-react';

export default function ThemeSwitcher( {className}: {className: string} ) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div className={className}>
      <div>
        { theme === 'dark' ? <Button isIconOnly size="sm" variant="light" color="warning" onClick={() => setTheme('light')}>
          <Sun />
        </Button> : <Button isIconOnly size="sm" variant="light" color="primary" onClick={() => setTheme('dark')}>
          <MoonStar />
        </Button> }
      </div>
    </div>

  );
}