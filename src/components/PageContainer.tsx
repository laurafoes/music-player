import React from 'react'

interface PageContainerProps {
    children: React.ReactNode
}

function PageContainer({ children }: PageContainerProps) {
  return (
    <main className="bg-background h-[100%] w-screen overflow-x-hidden m-auto text-primary text-smallSize flex justify-center items-center py-12 md:h-screen md:py-0 xl:text-bodySize bg-banner bg-cover bg-center bg-no-repeat contrast-125 hue-rotate-15 ">
    { children }
  </main>
  )
}

export default PageContainer
