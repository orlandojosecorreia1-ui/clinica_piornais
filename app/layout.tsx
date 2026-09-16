import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Clínica Dentária dos Piornais · Funchal',
  description:
    'Portal e aplicação de agendamento da Clínica Dentária dos Piornais no Funchal, com especialidades, equipa médica e marcação de consultas.',
  openGraph: {
    title: 'Clínica Dentária dos Piornais · Funchal',
    description:
      'Portal e aplicação de agendamento da Clínica Dentária dos Piornais no Funchal, com especialidades, equipa médica e marcação de consultas.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clínica Dentária dos Piornais · Funchal',
    description:
      'Portal e aplicação de agendamento da Clínica Dentária dos Piornais no Funchal, com especialidades, equipa médica e marcação de consultas.',
  },
};

const patchFetchScript = `(function(){try{var g=typeof window!=='undefined'?window:(typeof self!=='undefined'?self:null);if(!g)return;if(typeof g.addEventListener==='function'){g.addEventListener('error',function(ev){if(ev&&ev.message&&ev.message.indexOf('fetch')!==-1&&ev.message.indexOf('getter')!==-1){if(typeof ev.preventDefault==='function')ev.preventDefault();if(typeof ev.stopImmediatePropagation==='function')ev.stopImmediatePropagation();return true;}},true);}var orig=g.fetch;if(typeof orig==='function'){var current=function(){return orig.apply(g,arguments);};try{Object.defineProperty(g,'fetch',{get:function(){return current;},set:function(v){current=v;},configurable:true,enumerable:true});}catch(e1){try{Object.defineProperty(g,'fetch',{value:current,writable:true,configurable:true,enumerable:true});}catch(e2){}}}}catch(e){}})();`;

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt">
      <head>
        <script dangerouslySetInnerHTML={{__html: patchFetchScript}} />
      </head>
      <body suppressHydrationWarning className="bg-[#f8f9ff] text-[#0b1c30] antialiased">
        {children}
      </body>
    </html>
  );
}
