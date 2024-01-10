'use client';

import siteMetadata from "@/data/siteMetadata";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Logo() {

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  const logoPath = theme === 'dark' ? '/static/images/logo.dark.svg' : '/static/images/logo.svg';

  return (
    <Image
      src={logoPath}
      width={60}
      height={60}
      alt={siteMetadata.title}
    />
  )
}