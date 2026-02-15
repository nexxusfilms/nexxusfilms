
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  AlertTriangle, 
  BarChart, 
  Camera, 
  Instagram, 
  Mail, 
  Phone,
  ChevronDown,
  Activity,
  Target,
  Users,
  TrendingUp
} from 'lucide-react';
import { Button } from './components/Button';

// -- Helper Hook for Scroll Animations --
const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

// -- Components --

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50">
    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent backdrop-blur-[2px]"></div>
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
    
    <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between border-b border-white/5 relative z-10">
      <div className="flex flex-col items-end group cursor-pointer select-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="flex items-center text-3xl font-black tracking-tighter leading-none">
          <span className="text-white">NE</span>
          <span className="text-cyan-400">XX</span>
          <span className="text-white">US</span>
        </div>
        <span className="text-white text-[10px] font-light tracking-[0.2em] -mt-1 mr-0.5 uppercase">Films</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <div className="flex items-center gap-3 text-[10px] font-mono text-cyan-400/80 border border-cyan-500/10 px-4 py-1.5 rounded-sm bg-cyan-950/5">
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.6)]"></span>
          OPERACIONAL: ONLINE
        </div>
        <a 
          href="https://wa.me/5511995945323" 
          target="_blank" 
          className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-all tracking-widest uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]"
        >
          Falar com um especialista
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  return (
    <section className="hero--bg pt-28 pb-20">
      <div className="hero__content max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        <div className="reveal inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-900/20 px-4 py-1.5 rounded-sm mb-8">
          <Activity className="w-4 h-4 text-cyan-400" />
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">Performance Visual & Escala</span>
        </div>
        
        <h1 className="reveal delay-100 text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-8 uppercase">
          DOMINE A ATENÇÃO <br className="hidden md:block"/> 
          DO SEU MERCADO COM <br className="hidden md:block"/>
          <span className="text-cyan-400 glow-text underline decoration-cyan-400/30">VÍDEOS QUE VENDEM</span>
        </h1>
        
        <p className="reveal delay-200 text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          Não poste apenas conteúdo. Implementamos um ecossistema cinematográfico desenhado para converter atenção em faturamento previsível através de tráfego pago.
        </p>
        
        <div className="reveal delay-300 flex flex-col items-center gap-6">
          <Button 
            variant="neon"
            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            SOLICITAR DIAGNÓSTICO DE ESCALA
          </Button>
          <div className="flex items-center gap-4 text-[10px] text-neutral-500 font-mono tracking-widest uppercase">
            <span>// ESTRATÉGIA</span>
            <span>// PRODUÇÃO</span>
            <span>// PERFORMANCE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const LeadFormSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', niche: '' });
  const [errors, setErrors] = useState({ name: '', phone: '', niche: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { name: '', phone: '', niche: '' };
    let hasError = false;

    if (!formData.name.trim()) {
      newErrors.name = 'Nome obrigatório';
      hasError = true;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone obrigatório';
      hasError = true;
    }
    if (!formData.niche.trim()) {
      newErrors.niche = 'Nicho obrigatório';
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      const message = `Olá! Quero receber o diagnóstico estratégico.
Nome: ${formData.name}
Telefone: ${formData.phone}
Nicho/Setor: ${formData.niche}
Vim pelo site.`;
      
      const whatsappUrl = `https://wa.me/5511995945323?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="lead-form" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-b border-cyan-400/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8 uppercase">
              RESERVE SEU <br />
              <span className="text-cyan-400">DIAGNÓSTICO</span>
            </h2>
            <p className="text-xl text-neutral-400 font-light mb-8 max-w-lg">
              Analisamos seu posicionamento atual e traçamos o plano de vídeos e anúncios necessário para sua escala.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-neutral-300">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span>Análise de perfil e audiência</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span>Viabilidade de tráfego pago</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span>Sugestão de linha editorial</span>
              </div>
            </div>
          </div>

          <div className="reveal bg-[#111] p-8 md:p-12 border border-white/5 relative">
            <div className="mb-8 text-center">
              <h3 className="text-xl font-bold text-white mb-2 uppercase">Identificação de Negócio</h3>
              <p className="text-neutral-500 text-[10px] font-mono uppercase tracking-widest">Protocolo de Captação Seguro</p>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Seu Nome</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ex: João Silva" 
                  className={`w-full bg-black border ${errors.name ? 'border-red-500' : 'border-white/10'} px-4 py-3 text-white focus:border-cyan-400 outline-none transition-colors`} 
                />
                {errors.name && <p className="text-[10px] text-red-500 font-mono mt-1 uppercase tracking-tighter">{errors.name}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Telefone Comercial</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(00) 00000-0000" 
                  className={`w-full bg-black border ${errors.phone ? 'border-red-500' : 'border-white/10'} px-4 py-3 text-white focus:border-cyan-400 outline-none transition-colors`} 
                />
                {errors.phone && <p className="text-[10px] text-red-500 font-mono mt-1 uppercase tracking-tighter">{errors.phone}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Nicho / Setor</label>
                <input 
                  type="text" 
                  name="niche"
                  value={formData.niche}
                  onChange={handleInputChange}
                  placeholder="Ex: Imobiliário, Estética..." 
                  className={`w-full bg-black border ${errors.niche ? 'border-red-500' : 'border-white/10'} px-4 py-3 text-white focus:border-cyan-400 outline-none transition-colors`} 
                />
                {errors.niche && <p className="text-[10px] text-red-500 font-mono mt-1 uppercase tracking-tighter">{errors.niche}</p>}
              </div>
              <div className="pt-4">
                <Button type="submit" variant="neon" fullWidth>RECEBER DIAGNÓSTICO ESTRATÉGICO</Button>
                <p className="mt-4 text-[10px] text-center text-neutral-600 font-mono uppercase">
                  Entre em contato e seja atendido agora mesmo
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  const [showAll, setShowAll] = useState(false);
  const symptoms = [
    { title: "Audiência Desqualificada", desc: "Atraindo curiosos em vez de compradores reais." },
    { title: "Baixa Percepção de Valor", desc: "O mercado não vê autoridade na sua imagem atual." },
    { title: "Escala Travada", desc: "Anúncios rodando sem um funil de vídeos eficiente." },
    { title: "Invisibilidade Algorítmica", desc: "Conteúdo sem retenção ignorado pelas plataformas." }
  ];

  return (
    <section className="py-12 md:py-16 bg-black relative border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-12 items-center">
          <div className="reveal">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="text-cyan-400 w-4 h-4" />
              <h3 className="font-mono text-neutral-500 uppercase tracking-widest text-[9px] font-bold">Protocolo de Diagnóstico</h3>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2 uppercase tracking-tighter">
              ONDE SUA EMPRESA ESTÁ PERDENDO <span className="text-cyan-400">LUCRO</span>
            </h2>
            <p className="text-neutral-400 font-light text-sm md:text-base mb-8 max-w-xl">
              Identificamos os gargalos técnicos que impedem sua escala e autoridade digital.
            </p>
            
            <div className="space-y-3 mb-8">
              {(showAll ? symptoms : symptoms.slice(0, 3)).map((item, i) => (
                <div key={i} className="flex gap-3 p-3 border border-white/5 bg-neutral-900/10 hover:border-cyan-500/20 transition-all group">
                  <div className="w-0.5 h-full bg-cyan-400 shrink-0 opacity-50"></div>
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                    <p className="text-neutral-500 text-[11px] leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
              <button 
                onClick={() => setShowAll(!showAll)}
                className="text-[10px] font-mono text-cyan-400/60 hover:text-cyan-400 uppercase tracking-widest flex items-center gap-1 pl-4"
              >
                {showAll ? "// ocultar sintomas" : "// ver todos os sintomas"}
                <ChevronDown className={`w-3 h-3 transition-transform ${showAll ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <Button variant="neon" onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}>
                RECEBER DIAGNÓSTICO ESTRATÉGICO
              </Button>
              <p className="text-[9px] text-neutral-600 font-mono uppercase tracking-widest pl-1">
                Análise personalizada em até 24h.
              </p>
            </div>
          </div>

          <div className="relative reveal hidden md:block">
            <div className="aspect-[4/3] flex items-center justify-center p-8">
              <div className="w-full max-w-[280px] aspect-square relative opacity-40">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="48" stroke="#22d3ee" strokeWidth="0.2" fill="none" opacity="0.3" />
                  <circle cx="50" cy="50" r="32" stroke="#22d3ee" strokeWidth="0.2" fill="none" opacity="0.2" />
                  <circle cx="50" cy="50" r="16" stroke="#22d3ee" strokeWidth="0.2" fill="none" opacity="0.1" />
                  <line x1="50" y1="2" x2="50" y2="98" stroke="#22d3ee" strokeWidth="0.1" opacity="0.2" />
                  <line x1="2" y1="50" x2="98" y2="50" stroke="#22d3ee" strokeWidth="0.1" opacity="0.2" />
                  <g className="origin-center animate-spin" style={{ animationDuration: '4s' }}>
                    <line x1="50" y1="50" x2="50" y2="2" stroke="#22d3ee" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
                    <path d="M50 50 L50 2 A48 48 0 0 1 85 18 Z" fill="url(#radarGrad)" opacity="0.3" />
                  </g>
                  <defs>
                    <linearGradient id="radarGrad" x1="50" y1="50" x2="80" y2="20" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <circle cx="75" cy="35" r="1.2" fill="#22d3ee" className="animate-pulse" opacity="0.8" />
                  <circle cx="30" cy="65" r="0.8" fill="#22d3ee" opacity="0.4" />
                </svg>
                <div className="absolute inset-0 flex items-end justify-center pb-4">
                  <span className="text-cyan-400/20 font-mono text-[8px] tracking-[0.3em] uppercase">Status: Searching...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Solution = () => (
  <section className="py-24 bg-black relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20 reveal">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase">
          A SOLUÇÃO <span className="text-cyan-400">NEXXUS FILMS</span>
        </h2>
        <p className="text-xl text-neutral-400 font-light">Implementamos o tripé necessário para converter audiência em receita previsível.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="reveal group border border-white/10 bg-neutral-900/20 p-8 hover:border-cyan-500/50 transition-all">
          <Camera className="w-12 h-12 text-cyan-400 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4 uppercase">Conteúdo Estratégico</h3>
          <p className="text-neutral-400 mb-6 leading-relaxed">Vídeos roteirizados para gerar desejo imediato. Foco em Reels, Shorts e TikTok para retenção de atenção.</p>
          <ul className="space-y-2 text-sm text-neutral-500 font-mono">
            <li>// ROTEIRIZAÇÃO PROFISSIONAL</li>
            <li>// DIREÇÃO DE CENA</li>
            <li>// EDIÇÃO CINEMATOGRÁFICA</li>
          </ul>
        </div>
        <div className="reveal group border border-white/10 bg-neutral-900/20 p-8 hover:border-cyan-500/50 transition-all">
          <TrendingUp className="w-12 h-12 text-cyan-400 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4 uppercase">Distribuição e Performance</h3>
          <p className="text-neutral-400 mb-6 leading-relaxed">Não dependa apenas do orgânico. Usamos tráfego pago para colocar seus melhores vídeos na frente de quem realmente compra.</p>
          <ul className="space-y-2 text-sm text-neutral-500 font-mono">
            <li>// GESTÃO DE TRÁFEGO PAGO</li>
            <li>// OTIMIZAÇÃO DE CONVERSÃO (CRO)</li>
            <li>// RELATÓRIOS DE PERFORMANCE</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Target, title: "Autoridade", desc: "Seja visto como a maior referência do seu nicho." },
          { icon: Users, title: "Escala", desc: "Alcance milhares de novos leads todos os meses." },
          { icon: BarChart, title: "Previsibilidade", desc: "Gere demanda com constância e previsibilidade." }
        ].map((item, i) => (
          <div key={i} className="reveal text-center">
            <item.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
            <h4 className="text-white font-bold mb-2 uppercase">{item.title}</h4>
            <p className="text-neutral-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Plans = () => {
  const [activePlanIndex, setActivePlanIndex] = useState<number | null>(1);

  const plans = [
    { id: 'start', title: "START", desc: "Ideal para marcas que precisam de presença e consistência mínima.", items: ["Roteirização Técnica", "Cadência semanal de vídeos", "Edição Profissional", "Suporte VIP WhatsApp"], price: "Essencial", cta: "RECEBER PROPOSTA START" },
    { id: 'conecta', title: "CONECTA", desc: "Foco total em autoridade e engajamento para marcas em expansão.", items: ["TUDO DO PLANO START", "Estratégia Multicanal", "Cadência acelerada de vídeos", "Calendário de Postagens", "Consultoria de Linha Editorial"], price: "pra quem está crescendo", cta: "RECEBER PROPOSTA CONECTA" },
    { id: 'profissional', title: "PROFISSIONAL", desc: "Ecossistema completo: produção + distribuição estratégica.", items: ["TUDO DO PLANO CONECTA", "Gestão de Tráfego Pago Inclusa", "Criação de Criativos de Alta Conversão", "Sessões de Fotos Inclusas", "Dashboard de Métricas Mensal", "Análise de Funil de Vendas"], price: "mais vendido", cta: "Falar com um especialista", featured: true, badge: "MAIS ESCOLHIDO", disclaimer: "*Verba de investimento para trafego pago definida pelo cliente." }
  ];

  return (
    <section id="plans" className="py-24 bg-neutral-950 border-t border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase leading-tight">SISTEMAS DE <br />TRABALHO</h2>
            <p className="text-neutral-400 max-w-md">Soluções modulares para cada estágio de crescimento do seu negócio.</p>
          </div>
          <div className="reveal flex items-center gap-2 text-cyan-400 font-mono text-xs border border-cyan-900 px-4 py-2">
            <span className="animate-pulse">●</span> Condição especial vigente
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8">
          {plans.map((plan, i) => {
            const isActive = activePlanIndex === i;
            const isOthersSelected = activePlanIndex !== null && !isActive;
            
            return (
              <div key={plan.id} className="reveal relative">
                {/* O container de estilo agora é separado da lógica de animação 'reveal' para evitar bugs de opacidade */}
                <div 
                  onClick={() => setActivePlanIndex(i)}
                  className={`p-8 border cursor-pointer relative flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] min-h-full
                    ${isActive 
                      ? 'border-cyan-400 bg-cyan-950/20 scale-105 z-10 shadow-[0_0_30px_rgba(34,211,238,0.25)]' 
                      : 'border-white/10 bg-black opacity-100'
                    }
                    ${isOthersSelected ? 'grayscale-[0.8] scale-95' : 'grayscale-0 scale-100'}
                  `}
                >
                  {plan.badge && (
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[10px] px-4 py-1.5 uppercase tracking-widest whitespace-nowrap z-20 transition-all duration-500
                      ${isActive ? 'bg-cyan-400 text-black shadow-[0_0_15px_rgba(34,211,238,0.4)] opacity-100' : 'bg-neutral-800 text-neutral-400 opacity-0'}
                    `}>
                      {plan.badge}
                    </div>
                  )}
                  
                  {/* Título: Sempre visível e nítido */}
                  <div className="relative z-20 mb-6">
                    <h3 className={`text-2xl font-black mb-1 uppercase transition-colors duration-500 ${isActive ? 'text-cyan-400' : 'text-white'}`}>
                      {plan.title}
                    </h3>
                    <p className={`text-neutral-500 text-[10px] font-mono uppercase tracking-widest transition-opacity duration-500 ${isOthersSelected ? 'opacity-30' : 'opacity-100'}`}>
                      {plan.price}
                    </p>
                  </div>

                  {/* Corpo do plano: Desfocado se outro plano estiver focado */}
                  <div className={`flex flex-col flex-1 transition-all duration-700 ${isOthersSelected ? 'blur-[10px] opacity-10 pointer-events-none' : 'blur-0 opacity-100'}`}>
                    <p className="text-neutral-400 text-sm mb-8 leading-relaxed md:min-h-[60px]">{plan.desc}</p>
                    <div className={`h-[1px] w-12 mb-8 transition-colors duration-500 ${isActive ? 'bg-cyan-400' : 'bg-white/20'}`}></div>
                    <ul className="space-y-4 mb-10 flex-1">
                      {plan.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs text-neutral-300">
                          <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 transition-colors duration-500 ${isActive ? 'text-cyan-400' : 'text-neutral-500'}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-4 pt-4">
                      <Button 
                        variant={isActive ? 'neon' : 'outline'} 
                        fullWidth 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          window.open(`https://wa.me/5511995945323?text=Olá! Gostaria de uma proposta para o sistema ${plan.title}`, '_blank'); 
                        }}
                      >
                        {plan.cta}
                      </Button>
                      {plan.disclaimer && <p className="text-[9px] text-neutral-600 uppercase font-mono leading-tight">{plan.disclaimer}</p>}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: "O investimento em anúncios está incluso no plano?", a: "No plano PROFISSIONAL, a GESTÃO e ESTRATÉGIA dos anúncios está inclusa. A verba de mídia paga (o dinheiro que vai para o Meta/Google) é definida por você e paga diretamente às plataformas." },
    { q: "Preciso aparecer nos vídeos?", a: "Não necessariamente. Criamos estratégias de conteúdo 'faceless' ou institucionais. No entanto, vídeos com o rosto do especialista tendem a gerar 3x mais conexão e autoridade." },
    { q: "Em quanto tempo recebo os primeiros vídeos?", a: "Após a assinatura do contrato e briefing, nosso protocolo de planejamento estratégico leva 10 dias úteis. A primeira entrega final costuma ocorrer em até 15 dias após a captação." },
    { q: "Tem contrato mínimo?", a: "Trabalhamos com ciclos semestrais para garantir que o algoritmo e o tráfego pago tenham tempo de maturação e tragam o ROI esperado." },
    { q: "Vocês fazem a roteirização?", a: "Sim. Todo o nosso sistema baseia-se em roteiros técnicos focados em conversão, para que você ou sua equipe apenas executem com perfeição sob nossa direção." }
  ];

  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-black text-white mb-12 text-center uppercase">Dúvidas Técnicas</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 bg-black">
              <button className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                <span className="font-bold text-neutral-200 uppercase text-sm tracking-tight">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && <div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-black pt-24 pb-12 border-t border-cyan-900/30">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid md:grid-cols-2 gap-16 mb-20 items-center">
        <div className="reveal">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase leading-tight">DOMINE o SEU <br /><span className="text-cyan-400 underline">MERCADO AGORA.</span></h2>
          <div className="space-y-6">
            <a href="https://wa.me/5511995945323" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-cyan-400 transition-colors group">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-cyan-400"><Phone className="w-5 h-5" /></div>
              <div><p className="text-[10px] text-neutral-500 uppercase font-mono">WhatsApp Comercial</p><span className="text-lg font-mono">(11) 99594‑5323</span></div>
            </a>
            <a href="https://instagram.com/nexxusfilms" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-cyan-400 transition-colors group">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-cyan-400"><Instagram className="w-5 h-5" /></div>
              <div><p className="text-[10px] text-neutral-500 uppercase font-mono">Instagram Oficial</p><span className="text-lg font-mono">@nexxusfilms</span></div>
            </a>
            <a href="mailto:nexxusfilms@gmail.com" className="flex items-center gap-4 text-white hover:text-cyan-400 transition-colors group">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-cyan-400"><Mail className="w-5 h-5" /></div>
              <div><p className="text-[10px] text-neutral-500 uppercase font-mono">E-mail de Negócios</p><span className="text-lg font-mono">nexxusfilms@gmail.com</span></div>
            </a>
          </div>
        </div>
        <div className="reveal bg-neutral-900/30 p-10 border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/5 blur-3xl"></div>
          <h3 className="text-2xl font-black text-white mb-6 uppercase">Pronto para escalar o seu negócio?</h3>
          <Button onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })} fullWidth variant="neon">RECEBER DIAGNÓSTICO ESTRATÉGICO</Button>
          <div className="mt-6 text-[9px] md:text-[10px] font-mono uppercase tracking-widest leading-relaxed">
            <span className="text-cyan-400/60 font-bold">// ATENDIMENTO REMOTO: TODO O BRASIL</span><br /><span className="text-neutral-600">// ATENDIMENTO PRESENCIAL: SÃO PAULO - SP</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-700 font-mono uppercase tracking-widest">
        <p>© {new Date().getFullYear()} NEXXUS FILMS // PERFORMANCE VISUAL</p>
        <div className="flex gap-6 mt-4 md:mt-0"><a href="#" className="hover:text-white">Termos</a><a href="#" className="hover:text-white">Privacidade</a></div>
      </div>
    </div>
  </footer>
);

const App = () => {
  useScrollReveal();

  return (
    <div className="bg-black text-white min-h-screen selection:bg-cyan-500 selection:text-black font-sans">
      <Navbar />
      <main><Hero /><LeadFormSection /><Problem /><Solution /><Plans /><FAQ /></main>
      <Footer />
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/90 backdrop-blur-md border-t border-cyan-500/30 md:hidden z-50">
        <Button fullWidth variant="neon" onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}>Receber Diagnóstico</Button>
      </div>
    </div>
  );
};

export default App;
