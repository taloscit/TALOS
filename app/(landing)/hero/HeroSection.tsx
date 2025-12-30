import Link from 'next/link';
import Container from '@/components/_core/layout/Container';

export default function HeroSection() {
  return (
    <section className='relative h-screen flex items-center justify-center overflow-hidden'>
      {/* Background with Red Glow */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black -z-10' />
      
      <Container className='text-center z-10'>
        <div className='inline-block mb-4 px-3 py-1 border border-red-500/30 rounded-full bg-red-500/10 backdrop-blur-sm'>
          <span className='text-red-400 text-xs font-semibold tracking-wider uppercase'>February 14-16, 2026</span>
        </div>
        
        <h1 className='text-7xl md:text-9xl font-extrabold mb-6 tracking-tighter text-white'>
          TALOS <span className="text-red-600 drop-shadow-[0_0_25px_rgba(220,38,38,0.6)]">2026</span>
        </h1>
        
        <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10'>
          The ultimate technical symposium. Unleash your potential, compete with the best, and witness the future of technology.
        </p>
        
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
         <Link
  href="/register"
  className="
    px-10 py-4
    rounded-full
    font-extrabold
    text-white
    bg-[#0b0b0b]
    border border-red-600/40
    tracking-wide
    shadow-[0_0_30px_rgba(220,38,38,0.35)]
    hover:shadow-[0_0_45px_rgba(220,38,38,0.6)]
    hover:border-red-500
    hover:scale-105
    transition-all duration-300
  "
>
            Register Now
          </Link>
          <Link 
            href='/about' 
            className='px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all'
          >
            Learn More
          </Link>
        </div>
      </Container>
    </section>
  );
}