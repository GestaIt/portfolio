"use client"

import {Lato} from 'next/font/google'
import './globals.css'
import Head from "next/head";
import React from "react";

const inter = Lato({ weight: ['100', '300', '400', '700'], subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5"/>
    </Head>
    <body className={inter.className}>{children}</body>
    </html>
  )
}
