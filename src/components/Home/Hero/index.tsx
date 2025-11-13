'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getImgPath } from '@/utils/image'

const faqs = [
  {
    question: 'O que é a GuardBroker?',
    answer:
      'A GuardBroker é uma corretora focada em proteção de capital, transparência e estrutura para você operar com muito mais segurança.'
  },
  {
    question: 'Como faço para começar?',
    answer:
      'Crie sua conta, faça o primeiro depósito e siga o passo a passo dentro da plataforma para começar a operar com proteção de capital.'
  },
  {
    question: 'Em quanto tempo vejo resultados?',
    answer:
      'Depende do seu perfil, estratégia e disciplina. A plataforma mostra os resultados em tempo real, para você acompanhar sua evolução.'
  },
  {
    question: 'É seguro operar com a GuardBroker?',
    answer:
      'Toda a proposta é reduzir ao máximo o risco de perdas definitivas, aliando proteção de capital com regras claras e gestão de risco.'
  },
  {
    question: 'Existe limite de ganhos?',
    answer:
      'Não há um limite travado: seus resultados dependem do valor investido, das operações e da forma como você gerencia o risco.'
  }
]

const benefits = [
  {
    title: 'Proteção de capital',
    description:
      'Modelos pensados para reduzir o impacto de perdas bruscas e preservar o dinheiro que você levou tempo para conquistar.'
  },
  {
    title: 'Transparência total',
    description:
      'Você acompanha saldos, operações e histórico em tempo real, sem taxas escondidas ou pegadinhas.'
  },
  {
    title: 'Cashback de operações',
    description:
      'Parte do fluxo financeiro volta para você, criando um ciclo mais saudável de operações ao longo do tempo.'
  },
  {
    title: 'Saques rápidos',
    description:
      'Solicitações simples, processo direto e acompanhamento do status dentro do painel da GuardBroker.'
  }
]

const howItWorks = [
  {
    title: 'Escolha o mercado',
    description:
      'Selecione o ativo ou mercado em que deseja atuar, de acordo com seu perfil e estratégia.'
  },
  {
    title: 'Defina seu plano',
    description:
      'Estabeleça valores, metas de ganho, limites de perda e ative as camadas de proteção de capital.'
  },
  {
    title: 'Execute as operações',
    description:
      'Abra e feche operações seguindo o plano, com suporte visual do painel da GuardBroker em tempo real.'
  },
  {
    title: 'Ajuste e evolua',
    description:
      'Revise resultados, ajuste a estratégia e utilize os relatórios para tomar decisões mais inteligentes.'
  }
]

const steps = [
  {
    title: 'Crie sua conta',
    description:
      'Leva poucos minutos: informe seus dados, confirme o cadastro e acesse seu painel GuardBroker.'
  },
  {
    title: 'Proteja seu capital',
    description:
      'Realize o primeiro aporte e configure seus limites de risco, metas e preferência de operação.'
  },
  {
    title: 'Comece a operar',
    description:
      'Siga o passo a passo, opere com proteção de capital e acompanhe seus resultados diretamente no painel.'
  }
]

export default function GuardBrokerHome() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(prev => (prev === index ? -1 : index))
  }

  return (
    <main className='bg-white dark:bg-darklight text-midnight_text dark:text-white'>

      {/* HERO */}
      <section
        id='inicio'
        className='relative pt-24 sm:pt-28 md:pt-36 pb-14 md:pb-20 bg-white dark:bg-darklight bg-cover'>
        <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-6 sm:gap-8 md:gap-10 items-center'>
          {/* TEXTO */}
          <div
            className='md:col-span-6 col-span-12 space-y-4 sm:space-y-5 md:space-y-6'
            data-aos='fade-right'
            data-aos-delay='150'
            data-aos-duration='900'>
            <div className='inline-flex items-center gap-2 rounded-full border border-slate-200/80 dark:border-white/15 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs md:text-sm'>
              <span className='w-2 h-2 rounded-full bg-green-500'></span>
              <span className='font-medium text-slate-700 dark:text-white/70 truncate'>
                GuardBroker • Proteção de capital em primeiro lugar
              </span>
            </div>

            <h1 className='text-midnight_text dark:text-white font-extrabold text-2xl sm:text-3xl md:text-5xl leading-snug md:leading-tight'>
              A corretora que{' '}
              <span className='text-blue-800 dark:text-primary'>protege seu capital</span> enquanto
              você opera.
            </h1>

            <p className='text-grey dark:text-white/70 text-sm sm:text-base md:text-lg max-w-xl'>
              Com a GuardBroker, você não entra no mercado sozinho: opera com estrutura de proteção,
              transparência e foco em resultados consistentes.
            </p>

            <div className='flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4'>
              <Link
                href='https://trade.guardbroker.com/pt/register'
                className='inline-flex items-center justify-center rounded-md bg-blue-800 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition'>
                Criar conta na GuardBroker
              </Link>
              <Link
                href='https://trade.guardbroker.com/pt/login'
                className='inline-flex items-center justify-center rounded-md border border-slate-200 dark:border-white/20 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-blue-800 dark:text-white hover:bg-slate-50/80 dark:hover:bg-white/10 transition'>
                Já sou cliente
              </Link>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 pt-4 sm:pt-5'>
  <div className='flex -space-x-3 justify-center md:justify-start'> {/* Mantém o overlap original, centraliza em col */}
    <Image
      src={getImgPath('/images/hero/hero-profile-1.jpg')}
      alt='Cliente GuardBroker'
      width={40}
      height={40}
      quality={100}
      className='w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white dark:border-darklight object-cover'
    />
    <Image
      src={getImgPath('/images/hero/hero-profile-2.jpg')}
      alt='Cliente GuardBroker'
      width={40}
      height={40}
      quality={100}
      className='w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white dark:border-darklight object-cover'
    />
    <Image
      src={getImgPath('/images/hero/hero-profile-3.jpg')}
      alt='Cliente GuardBroker'
      width={40}
      height={40}
      quality={100}
      className='w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white dark:border-darklight object-cover'
    />
  </div>
  <p className='text-[11px] sm:text-xs md:text-sm text-grey dark:text-white/70 max-w-xs mx-auto md:mx-0 text-center md:text-left'>
    Nossa missão é reduzir o risco de quem opera usando proteção de capital como base.
  </p>
</div>
          </div>

          {/* IMAGEM HERO */}
          <div
            className='md:col-span-6 col-span-12 relative mt-6 md:mt-0'
            data-aos='fade-left'
            data-aos-delay='250'
            data-aos-duration='900'>
            <div className='absolute -top-6 -right-4 md:-top-10 md:-right-8 w-24 sm:w-32 md:w-36 h-24 sm:h-32 md:h-36 rounded-full bg-blue-100 dark:bg-blue-500/20 blur-3xl -z-10'></div>
            <div className='absolute bottom-0 -left-6 sm:-left-8 md:-left-10 w-28 sm:w-36 md:w-40 h-28 sm:h-36 md:h-40 rounded-full bg-emerald-100 dark:bg-emerald-500/20 blur-3xl -z-10'></div>

            <div className='relative rounded-2xl dark:bg-black/60 p-0  shadow-xl'>
              <Image
                src={getImgPath('/images/hero/hero-image.png')}
                alt='Painel da GuardBroker'
                width={600}
                height={420}
                quality={100}
                className='w-full h-auto rounded-xl object-cover'
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section
        id='beneficios'
        className='py-14 md:py-20 bg-slate-50 dark:bg-darklight/60'
        data-aos='fade-up'
        data-aos-delay='150'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12'>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-extrabold text-midnight_text dark:text-white mb-2 sm:mb-3'>
              Por que operar com a GuardBroker?
            </h2>
            <p className='text-xs sm:text-sm md:text-base text-grey dark:text-white/70'>
              Uma corretora pensada para quem quer crescer no mercado sem abrir mão da proteção de
              capital e da clareza em cada operação.
            </p>
          </div>

          <div className='grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {benefits.map((item, index) => (
              <div
                key={item.title}
                className='flex flex-col rounded-xl bg-white dark:bg-[#13141b] border border-slate-100 dark:border-white/10 p-4 sm:p-5 shadow-sm'>
 
                <h3 className='font-semibold text-sm sm:text-base md:text-lg mb-1.5 sm:mb-2'>
                  {item.title}
                </h3>
                <p className='text-xs sm:text-sm text-grey dark:text-white/70'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section
        id='como-funciona'
        className='py-14 md:py-20 bg-white dark:bg-darklight'
        data-aos='fade-up'
        data-aos-delay='150'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='grid md:grid-cols-2 gap-8 md:gap-10 items-center'>
            <div>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-extrabold text-midnight_text dark:text-white mb-3 sm:mb-4'>
                Como a GuardBroker funciona na prática?
              </h2>
              <p className='text-xs sm:text-sm md:text-base text-grey dark:text-white/70 mb-3 sm:mb-4'>
                Construímos um fluxo simples para que você não dependa de “feeling” o tempo todo.
                Você planeja, executa e analisa tudo dentro da mesma plataforma.
              </p>
              <p className='text-xs sm:text-sm md:text-base text-grey dark:text-white/70'>
                O foco é sempre o mesmo: preservar seu capital, reduzir decisões emocionais e abrir
                espaço para resultados consistentes no longo prazo.
              </p>
            </div>

            <div className='grid gap-3 sm:gap-4'>
              {howItWorks.map((step, index) => (
                <div
                  key={step.title}
                  className='flex gap-3 sm:gap-4 rounded-xl bg-slate-50 dark:bg-[#13141b] border border-slate-100 dark:border-white/10 p-3 sm:p-4'>
                  <div className='flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-blue-800 text-white text-xs sm:text-sm font-bold shrink-0'>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className='font-semibold text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1'>
                      {step.title}
                    </h3>
                    <p className='text-xs sm:text-sm text-grey dark:text-white/70'>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section
        id='depoimentos'
        className='py-14 md:py-20 bg-slate-50 dark:bg-darklight/60'
        data-aos='fade-up'
        data-aos-delay='150'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12'>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-extrabold text-midnight_text dark:text-white mb-2 sm:mb-3'>
              Quem já opera com proteção de capital
            </h2>
            <p className='text-xs sm:text-sm md:text-base text-grey dark:text-white/70'>
              Relatos de pessoas que saíram do improviso e passaram a operar com mais estrutura,
              disciplina e clareza.
            </p>
          </div>

          <div className='grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-3'>
            <TestimonialCard
              name='João Vieira'
              role='Investidor'
              text='Com a GuardBroker consegui organizar minha rotina de operações e parar de me expor de forma desnecessária. Hoje sigo o plano com mais tranquilidade.'
              avatar='/images/hero/hero-profile-1.jpg'
            />
            <TestimonialCard
              name='Juliana Silva'
              role='Trader'
              text='A ideia de operar com foco em proteção de capital fez total diferença. Me sinto muito mais confortável para aumentar posição com responsabilidade.'
              avatar='/images/hero/hero-profile-2.jpg'
            />
            <TestimonialCard
              name='Ryan Matos'
              role='Trader iniciante'
              text='Pra quem está começando, ter uma corretora que não vende “dinheiro fácil” e fala de risco com clareza é um baita diferencial.'
              avatar='/images/hero/hero-profile-3.jpg'
            />
          </div>
        </div>
      </section>

      {/* PASSO A PASSO */}
      <section
        id='cadastro'
        className='py-14 md:py-20 bg-white dark:bg-darklight'
        data-aos='fade-up'
        data-aos-delay='150'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12'>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-extrabold text-midnight_text dark:text-white mb-2 sm:mb-3'>
              Comece com a GuardBroker em 3 passos
            </h2>
            <p className='text-xs sm:text-sm md:text-base text-grey dark:text-white/70'>
              Sem burocracia e sem promessas irreais: apenas um fluxo claro para você entrar no
              mercado de forma mais protegida.
            </p>
          </div>

          <div className='grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-3'>
            {steps.map((step, index) => (
              <div
                key={step.title}
                className='relative rounded-xl bg-slate-50 dark:bg-[#13141b] border border-slate-100 dark:border-white/10 p-4 sm:p-5 md:p-6'>
                <div className='absolute -top-3 left-4 rounded-full bg-blue-800 text-white w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-bold'>
                  {index + 1}
                </div>
                <h3 className='mt-3 sm:mt-4 font-semibold text-sm sm:text-base md:text-lg mb-1.5 sm:mb-2'>
                  {step.title}
                </h3>
                <p className='text-xs sm:text-sm text-grey dark:text-white/70'>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className='text-center mt-8 sm:mt-9 md:mt-10'>
            <Link
              href='https://trade.guardbroker.com/pt/register'
              className='inline-flex items-center justify-center rounded-md bg-blue-800 px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition'>
              Abrir conta agora
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id='faq'
        className='py-14 md:py-20 bg-slate-50 dark:bg-darklight/60'
        data-aos='fade-up'
        data-aos-delay='150'>
        <div className='container mx-auto max-w-4xl px-4'>
          <div className='text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12'>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-extrabold text-midnight_text dark:text-white mb-2 sm:mb-3'>
              Perguntas frequentes
            </h2>
            <p className='text-xs sm:text-sm md:text-base text-grey dark:text-white/70'>
              Se você está começando agora com a GuardBroker, essas respostas podem ajudar a clarear
              bastante o caminho.
            </p>
          </div>

          <div className='space-y-2.5 sm:space-y-3'>
            {faqs.map((item, index) => {
              const isOpen = openFaqIndex === index
              return (
                <button
                  key={item.question}
                  type='button'
                  onClick={() => toggleFaq(index)}
                  className='w-full text-left rounded-xl bg-white dark:bg-[#13141b] border border-slate-100 dark:border-white/10 px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/60'>
                  <div className='flex items-center justify-between gap-3'>
                    <span className='font-medium text-sm sm:text-base'>{item.question}</span>
                    <span className='text-lg sm:text-xl leading-none'>{isOpen ? '−' : '+'}</span>
                  </div>
                  {isOpen && (
                    <p className='mt-2 text-xs sm:text-sm text-grey dark:text-white/70'>
                      {item.answer}
                    </p>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className='py-12 md:py-16 bg-gradient-to-r from-blue-800 to-blue-700 text-white'
        data-aos='fade-up'
        data-aos-delay='150'>
        <div className='container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-6'>
          <div>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 sm:mb-3'>
              Proteja hoje o capital que você levou anos para construir.
            </h2>
            <p className='text-xs sm:text-sm md:text-base text-blue-50 max-w-xl'>
              GuardBroker foi pensada para o investidor que quer crescer com responsabilidade:
              gestão de risco, proteção e clareza em cada operação.
            </p>
          </div>
          <div className='flex flex-col sm:flex-row flex-wrap gap-3'>
            <Link
              href='https://trade.guardbroker.com/pt/register'
              className='inline-flex items-center justify-center rounded-md bg-white px-6 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-blue-700 hover:bg-blue-50 transition'>
              Abrir conta gratuita
            </Link>
            
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/* ---------------------- COMPONENTES AUXILIARES ---------------------- */

type TestimonialCardProps = {
  name: string
  role: string
  text: string
  avatar: string
}

const TestimonialCard = ({ name, role, text, avatar }: TestimonialCardProps) => {
  return (
    <div className='flex flex-col rounded-xl bg-white dark:bg-[#13141b] border border-slate-100 dark:border-white/10 p-4 sm:p-5 shadow-sm h-full'>
      <div className='flex items-center gap-3 mb-2.5 sm:mb-3'>
        <Image
          src={getImgPath(avatar)}
          alt={name}
          width={44}
          height={44}
          className='w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border border-slate-100 dark:border-white/20'
        />
        <div>
          <p className='font-semibold text-xs sm:text-sm'>{name}</p>
          <p className='text-[11px] sm:text-xs text-grey dark:text-white/60'>{role}</p>
        </div>
      </div>
      <p className='text-xs sm:text-sm text-grey dark:text-white/70 leading-relaxed flex-1'>
        &quot;{text}&quot;
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <footer id='contato' className='bg-[#050816] text-white py-8 md:py-10'>
      <div className='container mx-auto max-w-6xl px-4 grid gap-6 sm:gap-8 md:grid-cols-4 text-xs sm:text-sm'>
        <div className='md:col-span-2 space-y-2'>
          <h3 className='font-semibold'>GuardBroker</h3>
          <p className='text-white/70 max-w-sm'>
            Corretora criada para quem leva o mercado a sério: proteção de capital, transparência e
            decisões mais consistentes.
          </p>
        </div>

       {/* <div>
          <h4 className='font-semibold mb-2'>Links úteis</h4>
          <ul className='space-y-1 text-white/70'>
            <li>
              <Link href='/termos-de-uso' className='hover:text-white'>
                Termos de uso
              </Link>
            </li>
            <li>
              <Link href='/politica-de-privacidade' className='hover:text-white'>
                Política de privacidade
              </Link>
            </li>
            <li>
              <Link href='/afiliados' className='hover:text-white'>
                Programa de afiliados
              </Link>
            </li>
          </ul>
        </div> */}

        <div>
          <h4 className='font-semibold mb-2'>Contato</h4>
          <p className='text-white/70 mb-1'>Suporte GuardBroker</p>
          <a href='mailto:contato@guardbroker.com' className='text-white hover:underline'>
            contato@guardbroker.com
          </a>
        </div>
      </div>

      <div className='border-t border-white/10 mt-6 md:mt-8 pt-4 md:pt-6'>
        <div className='container mx-auto max-w-6xl px-4 flex flex-col md:flex-row gap-2.5 md:gap-3 items-start md:items-center justify-between text-[11px] sm:text-xs text-white/60'>
          <p>© {new Date().getFullYear()} GuardBroker. Todos os direitos reservados.</p>
          <p className='max-w-xl md:text-right'>
            Aviso: operações em mercados financeiros envolvem riscos e podem resultar em perdas.
            Avalie seu perfil de investidor e, se necessário, busque orientação profissional.
          </p>
        </div>
      </div>
    </footer>
  )
}
