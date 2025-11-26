import type React from 'react'
import Nvabar from '../components/Nvabar'
import { Handshake, Earth , HandCoins , School, Check, Instagram , Youtube  } from 'lucide-react';


export default function Home() {

type ActivityCard = {
  icon?: React.ReactNode;
  title?: string;
};

const activities: ActivityCard[] = [
  { icon : <Handshake /> , title: "Become a volunteer" },
  { icon : <Earth /> , title: "Caring Earth" },
  { icon : <HandCoins/> , title: "Make a Donation" },
  { icon : <School />  , title: "Scholarship Program" }
];

  return (
    <>
        <Nvabar/>
        <section className=' bg-[url("/love.jpg")] w-full h-screen bg-cover '>
        </section>
        {/*  */}
        <section className="h-screen w-full flex flex-col gap-10 items-center justify-center bg-background text-foreground">
          {/* Header: Enhanced Typography and Color */}
          <h1 className="text-5xl font-extrabold text-center tracking-tight text-foreground drop-shadow-lg">
            Welcome to <span className="text-primary">Love Charity</span>
          </h1>

          {/* Activities Container */}
          <div className="flex flex-wrap items-center justify-center gap-8 px-4">
            {activities.map((act) => (
              <div
                key={act.title}
                className="
                  /* Original Structure */
                  w-[22vw] min-w-[280px] h-[20vh] min-h-[160px] flex flex-col justify-center items-center 
                  
                  /* Themed Styling & Modernization */
                  shadow-lg rounded-lg border border-border bg-card text-card-foreground
                  hover:border-primary/50
                  hover:shadow-xl hover:scale-[1.02] transition-transform duration-300
                  cursor-pointer p-4
                "
              >
                {/* Icon: Styled with Primary Color */}
                {act.icon && (
                  <span className="text-4xl text-primary transition-colors duration-300">
                    {act.icon}
                  </span>
                )}
                {/* Title: Themed Text */}
                <span className="text-lg font-semibold text-foreground mt-2">
                  {act.title}
                </span>
              </div>
            ))}
          </div>
        </section>
        <section className='w-full min-h-screen flex items-center justify-center bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8'>
              
              <div className='w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12'>
                
                <div className='w-full lg:w-2/5 flex justify-center'>
                  <img 
                    src="/aide.jpg" 
                    alt="Charity assistance" 
                    className='w-full max-w-md h-auto lg:h-[60vh] object-cover rounded-xl shadow-2xl border-4 border-primary/20 transform hover:scale-[1.01] transition-transform duration-500' 
                  />
                </div>
                
                <div className='w-full lg:w-3/5 flex flex-col gap-6 p-4'>
                  
                  <div className='space-y-4'>
                    <h1 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-primary'>
                      Our Story
                    </h1>
                    <h3 className='text-xl sm:text-2xl font-semibold text-foreground/80'>
                      Love Charity, Non-Profit Organization
                    </h3>
                    <p className='text-muted-foreground leading-relaxed'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nostrum dolorum et cumque ipsa maiores. Dignissimos, vero eveniet. Expedita, dolores voluptatibus!
                    </p>
                  </div>
                  
                  <div className='bg-card p-6 sm:p-8 rounded-xl shadow-xl border border-border flex flex-col md:flex-row gap-8 mt-6'>
                    
                    <div className='md:w-3/5 space-y-4'>
                      <h2 className='text-2xl font-bold text-foreground'>
                        Our Mission
                      </h2>
                      <p className='text-sm text-muted-foreground'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium veniam numquam.
                      </p>
                      
                      <ul className='space-y-2 pt-2'>
                        <li className='flex items-center gap-2 text-foreground font-medium'>
                          <span className='text-primary'><Check/></span> Mission 1 
                        </li>
                        <li className='flex items-center gap-2 text-foreground font-medium'>
                          <span className='text-primary'><Check/></span> Mission 2 
                        </li>
                      </ul>
                    </div>
                    
                    <div className='md:w-2/5 flex flex-col gap-6 md:pl-8 md:border-l border-border'>
                      
                      <div className='space-y-1'>
                        <h1 className='text-4xl font-extrabold text-primary'>2025</h1>
                        <h3 className='text-sm uppercase tracking-wider text-foreground/70'>Founded</h3>
                      </div>
                      
                      <div className='space-y-1'>
                        <h1 className='text-4xl font-extrabold text-primary'>120B</h1>
                        <h3 className='text-sm uppercase tracking-wider text-foreground/70'>Donations</h3>
                      </div>
                      
                    </div>
                    
                  </div>
                  
                </div>
              </div>
            </section>

            <section className='w-full min-h-screen flex items-center justify-center bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8 gap-5'>
              
              {/* Image (Left Side) - Responsive Sizing and Themed Effects */}
              <img 
                src="/avicci.jpg" 
                alt="Avicii" 
                className='
                  w-full max-w-sm h-auto 
                  lg:w-1/3 lg:h-[60vh] object-cover 
                  rounded-xl shadow-2xl border-4 border-primary/20 
                  transform hover:scale-[1.01] transition-transform duration-500
                ' 
              />
              
              {/* Text Content (Right Side) - Themed and Structured */}
              <div className='flex flex-col gap-5 p-4 sm:p-6 lg:w-2/3 max-w-xl'>
                
                {/* Name: Large, Primary Color */}
                <h1 className='text-4xl sm:text-5xl font-extrabold tracking-tight text-primary'>
                  Avicii
                </h1>
                
                {/* Role: Subheading */}
                <h3 className='text-xl sm:text-2xl font-semibold text-foreground/70'>
                  Founding Partner
                </h3>
                
                {/* Description: Standard Text, Muted for readability */}
                <p className='text-muted-foreground leading-relaxed max-w-prose'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sint illo repellendus autem? Possimus et blanditiis aut asperiores. Repudiandae dignissimos amet tempora, vero natus ad!
                </p>
                
                {/* Memorial/Closing Text */}
                <span className='text-lg font-bold uppercase tracking-widest text-destructive'>
                  R.I.P
                </span>
                
                {/* Social Link */}
                <div>
                  <a 
                    href="https://www.youtube.com/channel/UCPHjpfnnGklkRBBTd0k6aHg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-ring transition-colors duration-200"
                  >
                    {/* Icon: Styled for visibility */}
                    <span className="text-4xl inline-block transition-transform hover:scale-105">
                        <Youtube />
                    </span>
                  </a>
                </div>
              </div>
            </section>

<div className="w-full h-[40vh] grid grid-cols-5 grid-rows-5 gap-2 p-4 bg-background text-foreground">
    
    {/* Abstract Shape 1: Top Left - Primary Accent */}
    <div 
        className="
            w-24 h-24 sm:w-30 sm:h-30 
            bg-primary rounded-full 
            flex items-center justify-center 
            col-span-1 row-span-1 
            shadow-md
        "
    >
    </div>

    {/* Main Content: Centered over the grid span */}
    <div
        className="
            flex flex-col items-center justify-center gap-6 sm:gap-10
            col-start-2 row-start-2
            col-span-3 row-span-3
            rounded-xl  p-6
        "
    >
        <div className='text-center space-y-1'>
            {/* Headlines: Bold and Prominent */}
            <h1 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground'>
                Make an impact.
            </h1>
            <h1 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-primary'>
                Save Lives.
            </h1>
        </div>
        
        {/* Buttons: Themed for Action */}
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-5'>
            {/* Primary Button: Make a Donation */}
            <button
                className="
                    px-6 py-3 rounded-lg font-bold text-base whitespace-nowrap
                    bg-primary text-primary-foreground shadow-lg
                    hover:bg-primary/90 hover:shadow-xl transition-all duration-300
                    ring-2 ring-transparent hover:ring-primary/50
                "
            >
                Make a donation
            </button>
            
            {/* Secondary Button: Become a Volunteer */}
            <button
                className="
                    px-6 py-3 rounded-lg font-semibold text-base whitespace-nowrap
                    bg-secondary text-secondary-foreground border border-border
                    hover:bg-accent hover:text-accent-foreground transition-all duration-300
                    ring-2 ring-transparent hover:ring-secondary/50
                "
            >
                Become a volunteer
            </button>
        </div>
    </div>

    {/* Abstract Shape 2: Bottom Right - Accent Outline */}
    <div
        className="
            w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center
            col-start-4 row-start-5
            rounded-full border-4 border-accent outline-4 outline-ring/50 outline-dotted
            animate-spin-slow
        "
    >
    </div>
</div>

                <section className='h-screen w-full' >

                </section>


    </>
  )
}
