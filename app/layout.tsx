"use client"
import { useState } from "react";
import "../styles/globals.css"
import Navbar from '@/components/Navbar'
import LoadingScreen from "@/components/LoadingScreen";
import { ThemeProvider } from "next-themes"
import Footer from "@/components/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-zinc-900 ">
        <ThemeProvider enableSystem={true} attribute="class">
                    {loading ? (
            <LoadingScreen finishLoading={() => setLoading(false)} />
          ) : (
            <>
          <Navbar />
          {children}
          <Footer />
          </>)}
        </ThemeProvider>
      </body>
    </html>
  )
}
