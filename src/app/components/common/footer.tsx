import React from 'react'

const  Footer = () => {
  return (
    <footer className="bg-background text-foreground">
        <div className="container mx-auto px-4 py-8">
            <p className="text-sm text-center">
                &copy; {new Date().getFullYear()} Summarizer. All rights reserved.
            </p>


            
        </div>
    </footer>
  )
}

export default Footer

