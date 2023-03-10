import React from 'react'

interface PageContainerProps {
    children: React.ReactNode,
    loginPage: boolean
}

function PageContainer({ children, loginPage }: PageContainerProps) {
  return (
    <main className={`h-[100%] w-screen overflow-x-hidden m-auto min-h-screen text-primary text-smallSize flex flex-col justify-center items-center py-12 md:py-08 xl:text-bodySize ${loginPage ? 'bg-banner' : 'bg-background'} bg-cover bg-center bg-no-repeat contrast-125 hue-rotate-15`}>
    { children }
  </main>
  )
}

export default PageContainer
