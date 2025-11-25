"use client";
import {cn} from '@/lib/utils';
import React from 'react'
import Link from 'next/link';

export default function Navlink({
  href,
  children,
  className,
}:{
  href:string;
  children:React.ReactNode;
  className?:string;
}) {
  const isActive = true;
  
  return (
    <Link href={href}  className={cn('transition-colors text-sm duratuion-200 hover:text-gray-500',className)} 
    >
      {children}
    </Link>
  )
}

