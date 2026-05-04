import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    name: "Ricardo Silva",
    role: "CEO",
    company: "TechSolutions",
    text: "A Galax mudou completamente nosso jogo. Saímos de leads desqualificados para reuniões de fechamento todos os dias. O ROI foi de 5x em 3 meses."
  },
  {
    name: "Fernanda Costa",
    role: "CMO",
    company: "Moda & Estilo",
    text: "Profissionalismo raro. Eles não apenas rodam anúncios, eles entendem do negócio e trazem insights que melhoraram até nosso produto."
  },
  {
    name: "Carlos Mendes",
    role: "Fundador",
    company: "EducaMais",
    text: "A transparência deles é incrível. Tenho acesso a tudo e sei exatamente para onde vai cada centavo. Resultado previsível e escala consistente."
  },
  {
    name: "Juliana Martins",
    role: "Proprietária",
    company: "Clínica Belle",
    text: "Minha agenda está lotada pelos próximos 45 dias. A estratégia de tráfego local que implementaram foi um divisor de águas para a clínica."
  },
  {
    name: "Roberto Almeida",
    role: "Diretor Comercial",
    company: "Peças Express",
    text: "Já passamos por 4 agências antes da Galax. Nenhuma teve a agilidade e a profundidade técnica que eles entregam. O LTV dos nossos clientes subiu 40%."
  },
  {
    name: "Amanda Souza",
    role: "Co-Founder",
    company: "SaaS Flow",
    text: "O trabalho de Inbound Marketing e automação reduziu nosso ciclo de vendas pela metade. Eles realmente entendem de B2B e jornada do cliente."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 relative overflow-hidden bg-[#050505]">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 mb-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
             Veja o que nossos clientes dizem
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Resultados reais geram <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Histórias Reais</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Não acredite apenas na nossa palavra. Veja o que nossos clientes dizem sobre o serviço da Galax Digital.
          </p>
        </div>
      </div>

      <div className="relative flex justify-center container mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="w-full max-w-4xl aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_-15px_rgba(83,0,255,0.3)] bg-black/50 relative group">
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
            {/* If you have a specific video URL, replace the src below. Using a placeholder for now */}
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=ABC" 
              title="Depoimento de Cliente Galax Digital" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Helper Components ---

interface MarqueeProps {
  children: React.ReactNode;
  direction: 'normal' | 'reverse';
}

const Marquee: React.FC<MarqueeProps> = ({ children, direction }) => {
  return (
    <div className="flex overflow-hidden group select-none">
      <div 
        className={`flex shrink-0 gap-6 py-4 ${direction === 'normal' ? 'animate-scroll' : 'animate-scroll-reverse'} group-hover:[animation-play-state:paused]`}
      >
        <div className="flex gap-6 px-3">
          {children}
        </div>
        {/* Duplicate content for seamless loop */}
        <div className="flex gap-6 px-3">
          {children}
        </div>
        <div className="flex gap-6 px-3">
          {children}
        </div>
         <div className="flex gap-6 px-3">
          {children}
        </div>
      </div>
    </div>
  );
};

interface TestimonialCardProps {
  item: TestimonialItem;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ item }) => (
  <div className="w-[350px] md:w-[450px] p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(83,0,255,0.15)] flex flex-col justify-between shrink-0 group/card relative overflow-hidden">
    
    {/* Subtle Shine Effect on Card */}
    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover/card:animate-[shine_1s_ease-in-out]"></div>

    <div>
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={14} className="fill-primary text-primary" />
          ))}
        </div>
        <Quote size={24} className="text-gray-700 group-hover/card:text-primary/40 transition-colors" />
      </div>

      <p className="text-gray-300 leading-relaxed text-sm md:text-base font-light mb-8">
        "{item.text}"
      </p>
    </div>

    <div className="flex items-center gap-4 pt-6 border-t border-white/5">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-inner">
        {item.name.split(' ').map(n => n[0]).join('').substring(0,2)}
      </div>
      <div>
        <p className="text-white font-bold text-sm">{item.name}</p>
        <div className="flex items-center gap-1.5">
           <p className="text-xs text-gray-500 font-medium">
             {item.role}, {item.company}
           </p>
           {/* Verified Badge */}
           <CheckCircle2 size={12} className="text-green-500/80" />
        </div>
      </div>
    </div>
  </div>
);