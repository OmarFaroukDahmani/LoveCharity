import type React from 'react'
import Nvabar from '../components/Nvabar'
import { Handshake, Earth , HandCoins , School, Check, Instagram , Youtube  } from 'lucide-react';


export default function Home() {

  type ActivityCard = {
    icon?: React.ReactNode;
    title?: string;
  };

  type CauseCard = {
    img: string,
    title : string,
    desc  : string
  }

  const activities: ActivityCard[] = [
    { icon : <Handshake /> , title: "Become a volunteer" },
    { icon : <Earth /> , title: "Caring Earth" },
    { icon : <HandCoins/> , title: "Make a Donation" },
    { icon : <School />  , title: "Scholarship Program" }
  ];

  const causes: CauseCard[] = [
    { 
      img: "/feeding.jpg", 
      title: "Feeding Children", 
      desc: "Providing nutritious meals to underprivileged children, ensuring they grow healthy and have the energy to learn and play." 
    },
    { 
      img: "/school.jpg", 
      title: "Children Education", 
      desc: "Supporting access to quality education, giving children the tools and opportunities to build brighter futures." 
    },
    { 
      img: "/water.jpg", 
      title: "Supply Drinking Water", 
      desc: "Delivering clean and safe drinking water to communities, improving health and reducing waterborne diseases." 
    }
  ];


  return (
    <>
        <Nvabar/>
        <section 
          className='relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center' 
          style={{ backgroundImage: 'url("/love.jpg")' }}
        >
          <div className='absolute inset-0 bg-black/50 backdrop-brightness-75'></div>

          <div className='relative z-10 max-w-4xl p-6 sm:p-8 space-y-8 text-white'>
            
            <h1 className='text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-lg animate-fade-in-up'>
              Giving Hope, Changing Lives.
            </h1>
            
            <p className='text-lg sm:text-xl md:text-2xl font-medium text-gray-100 leading-relaxed drop-shadow-md animate-fade-in delay-200'>
              Join us in making a profound difference in the world. Every act of kindness creates a ripple of positive change.
            </p>
            
            <div className='flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 animate-fade-in-up delay-400'>
              <button
                className="
                  px-8 py-4 rounded-full font-bold text-xl uppercase tracking-wider
                  bg-primary text-primary-foreground shadow-xl
                  hover:bg-primary/90 hover:shadow-2xl transition-all duration-300
                  ring-2 ring-transparent hover:ring-white/50
                "
              >
                Donate Now
              </button>
              
              <button
                className="
                  px-8 py-4 rounded-full font-bold text-xl uppercase tracking-wider
                  bg-transparent text-white border-2 border-white shadow-xl
                  hover:bg-white/20 hover:border-white/80 transition-all duration-300
                  ring-2 ring-transparent hover:ring-white/50
                "
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section className="h-screen w-full flex flex-col gap-10 items-center justify-center bg-background text-foreground">
          <h1 className="text-5xl font-extrabold text-center tracking-tight text-foreground drop-shadow-lg">
            Welcome to <span className="text-primary">Love Charity</span>
          </h1>

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
                {act.icon && (
                  <span className="text-4xl text-primary transition-colors duration-300">
                    {act.icon}
                  </span>
                )}
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
              
              <div className='flex flex-col gap-5 p-4 sm:p-6 lg:w-2/3 max-w-xl'>
                
                <h1 className='text-4xl sm:text-5xl font-extrabold tracking-tight text-primary'>
                  Avicii
                </h1>
                
                <h3 className='text-xl sm:text-2xl font-semibold text-foreground/70'>
                  Founding Partner
                </h3>
                
                <p className='text-muted-foreground leading-relaxed max-w-prose'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sint illo repellendus autem? Possimus et blanditiis aut asperiores. Repudiandae dignissimos amet tempora, vero natus ad!
                </p>
                
                <span className='text-lg font-bold uppercase tracking-widest text-destructive'>
                  R.I.P
                </span>
                
                <div>
                  <a 
                    href="https://www.youtube.com/channel/UCPHjpfnnGklkRBBTd0k6aHg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-ring transition-colors duration-200"
                  >
                    <span className="text-4xl inline-block transition-transform hover:scale-105">
                        <Youtube />
                    </span>
                  </a>
                </div>
              </div>
            </section>

            <div className="w-full h-[40vh] grid grid-cols-5 grid-rows-5 gap-2 p-4 bg-background text-foreground">
                
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

                <div
                    className="
                        flex flex-col items-center justify-center gap-6 sm:gap-10
                        col-start-2 row-start-2
                        col-span-3 row-span-3
                        rounded-xl  p-6
                    "
                >
                    <div className='text-center space-y-1'>
                        <h1 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground'>
                            Make an impact.
                        </h1>
                        <h1 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-primary'>
                            Save Lives.
                        </h1>
                    </div>
                    
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-5'>
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

                <div
                    className="
                        w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center
                        col-start-5 row-start-5
                        rounded-full border-4 border-accent outline-4 outline-ring/50 outline-dotted
                        animate-spin-slow
                    "
                >
                </div>
            </div>

            <section className='w-full min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8'>
              
              <h1 className='text-center text-4xl sm:text-6xl font-extrabold tracking-tight mb-12 text-primary'> 
                Our Causes 
              </h1>

              <div className='w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {causes.map((cause, index)=>(
                  <div 
                    key={cause.title || index}
                    className='
                      group flex flex-col overflow-hidden rounded-xl shadow-lg border border-border bg-card 
                      hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1
                    '
                  >
                    <div className="overflow-hidden h-48">
                        <img 
                            src={cause.img} 
                            alt={cause.title} 
                            className='w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500' 
                        />
                    </div>

                    <div className='p-6 flex flex-col flex-grow'>
                      <h2 className='text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300'> 
                        {cause.title} 
                      </h2>
                      
                      <p className='text-muted-foreground mb-6 flex-grow'> 
                        {cause.desc} 
                      </p>
                      
                      <button
                        className="
                          px-6 py-3 mt-auto rounded-lg font-bold text-base whitespace-nowrap
                          bg-primary text-primary-foreground shadow-md
                          hover:bg-primary/90 hover:shadow-lg transition-all duration-300
                          ring-2 ring-transparent hover:ring-primary/50
                        "
                      >
                        Donate
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
<section className='w-full min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8'>
  
  <div className='w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
    
    <div className='lg:order-1'>
      <h1 className='text-4xl font-extrabold tracking-tight text-primary mb-6'>Volunteer</h1>
      
      <form className='bg-card p-6 sm:p-8 rounded-xl shadow-2xl border border-border space-y-5'>
        <h2 className='text-2xl font-bold text-foreground mb-4'>Become a volunteer today</h2>
        
        <input 
          type="text" 
          placeholder='Name' 
          className='w-full p-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-primary/50 transition duration-200'
        />
        <input 
          type="email" 
          placeholder='email@email.com' 
          className='w-full p-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-primary/50 transition duration-200'
        />
        <input 
          type="text" 
          placeholder='Subject' 
          className='w-full p-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-primary/50 transition duration-200'
        />
        
        <label className='block w-full text-sm font-medium text-foreground/70 pt-2'>
            Upload your CV
            <input 
                type="file" 
                placeholder='Upload your Cv' 
                className='block w-full text-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 mt-1 transition duration-200'
            />
        </label>
        
        <textarea
          placeholder='Tell us why you want to volunteer...'
          rows={4}
          className='w-full p-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-primary/50 transition duration-200 resize-none'
        >
        </textarea>
        
        <button
          type="submit"
          className="
            w-full px-6 py-3 mt-4 rounded-lg font-bold text-base 
            bg-primary text-primary-foreground shadow-lg
            hover:bg-primary/90 hover:shadow-xl transition-all duration-300
            ring-2 ring-transparent hover:ring-primary/50
          "
        >
          Submit Application
        </button>
      </form>
    </div>
    
    <div className='lg:order-2 flex flex-col justify-start space-y-6 pt-10 lg:pt-0'>
      
      <div className="rounded-xl overflow-hidden shadow-xl border border-border bg-muted h-64 flex items-center justify-center">
        <img src="/volunteer.jpg" alt="Volunteering activity illustration" className='object-cover w-full h-full'/> 
      </div>
      
      <div className='space-y-3'>
        <h3 className='text-2xl font-bold text-foreground'>About Volunteering</h3>
        <p className='text-muted-foreground leading-relaxed'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magni provident tempora distinctio rem repellendus eligendi reprehenderit doloremque. Dignissimos dolor voluptas facilis, libero, nemo, et alias omnis.
        </p>
        <p className='text-sm text-primary/80 pt-2'>
          *Note: All applications are reviewed within 7 business days.
        </p>
      </div>
      
    </div>
  </div>
</section>


    </>
  )
}
