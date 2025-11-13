import React from 'react'
import HeroSub from '@/components/SharedComponent/HeroSub'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre nós | GuardBroker',
}

const Page = () => {
  const breadcrumbLinks = [
    { href: '/', text: 'Início' },
    { href: '/about', text: 'Sobre nós' },
  ]

  return (
    <>
      <HeroSub
        title='Sobre nós'
        description='Conheça mais sobre a GuardBroker.'
        breadcrumbLinks={breadcrumbLinks}
      />

      <main className='bg-white dark:bg-darklight'>
        <section className='container mx-auto max-w-4xl px-4 py-12 sm:py-16 md:py-20'>
          {/* QUEM SOMOS */}
          <div className='space-y-3 sm:space-y-4 mb-10 sm:mb-12'>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-midnight_text dark:text-white'>
              Quem é a GuardBroker
            </h2>
            <p className='text-sm sm:text-base text-grey dark:text-white/70 leading-relaxed'>
              A GuardBroker nasceu com um objetivo claro: oferecer uma experiência de negociação
              em que a proteção de capital não é um detalhe, e sim o ponto de partida. Sabemos que
              muitos investidores entram no mercado sem estrutura, sem plano e, muitas vezes, sem
              entender o risco real das decisões que estão tomando.
            </p>
            <p className='text-sm sm:text-base text-grey dark:text-white/70 leading-relaxed'>
              Por isso, construímos uma corretora com foco em clareza, disciplina e processos
              simples de entender. Nada de promessas irreais ou atalhos duvidosos. O que entregamos
              são ferramentas, regras e acompanhamento para que você consiga tomar decisões mais
              conscientes.
            </p>
          </div>

          {/* MISSÃO, VISÃO, VALORES */}
          <div className='grid gap-8 md:grid-cols-3 mb-10 sm:mb-12'>
            <div className='space-y-2'>
              <h3 className='text-base sm:text-lg font-semibold text-midnight_text dark:text-white'>
                Nossa missão
              </h3>
              <p className='text-sm sm:text-base text-grey dark:text-white/70 leading-relaxed'>
                Tornar a proteção de capital acessível a qualquer investidor, ajudando pessoas
                comuns a se manterem no jogo por mais tempo, com mais consciência e menos
                improviso.
              </p>
            </div>
            <div className='space-y-2'>
              <h3 className='text-base sm:text-lg font-semibold text-midnight_text dark:text-white'>
                Nossa visão
              </h3>
              <p className='text-sm sm:text-base text-grey dark:text-white/70 leading-relaxed'>
                Ser referência em experiência segura de negociação, unindo tecnologia,
                transparência e educação para formar investidores mais preparados e consistentes.
              </p>
            </div>
            <div className='space-y-2'>
              <h3 className='text-base sm:text-lg font-semibold text-midnight_text dark:text-white'>
                Nossos valores
              </h3>
              <ul className='list-disc list-inside text-sm sm:text-base text-grey dark:text-white/70 leading-relaxed space-y-1'>
                <li>Transparência em cada etapa do processo.</li>
                <li>Responsabilidade ao falar de risco e retorno.</li>
                <li>Foco no longo prazo, não em ganhos imediatos.</li>
              </ul>
            </div>
          </div>

          {/* COMO TRABALHAMOS */}
          <div className='space-y-3 sm:space-y-4 mb-10 sm:mb-12'>
            <h2 className='text-xl sm:text-2xl font-bold text-midnight_text dark:text-white'>
              Como trabalhamos
            </h2>
            <p className='text-sm sm:text-base text-grey dark:text-white/70 leading-relaxed'>
              A GuardBroker foi pensada para quem leva o mercado a sério. Isso significa juntar
              tecnologia com regras claras, para que você não dependa apenas de emoção ou sorte na
              hora de atuar. Nosso foco está em construir um ambiente em que:
            </p>
            <ul className='list-disc list-inside text-sm sm:text-base text-grey dark:text-white/70 leading-relaxed space-y-1'>
              <li>Você entende o que está fazendo e por que está fazendo.</li>
              <li>A proteção de capital faz parte do processo, e não é opcional.</li>
              <li>As informações são apresentadas de maneira simples e objetiva.</li>
            </ul>
          </div>

          {/* O QUE NOS DIFERENCIA */}
          <div className='space-y-3 sm:space-y-4'>
            <h2 className='text-xl sm:text-2xl font-bold text-midnight_text dark:text-white'>
              O que diferencia a GuardBroker
            </h2>
            <p className='text-sm sm:text-base text-grey dark:text-white/70 leading-relaxed'>
              Existem muitas plataformas falando de ganhos rápidos, mas poucas estão dispostas a
              colocar a conversa sobre risco no centro da estratégia. Na GuardBroker, preferimos ser
              diretos: operar em mercados financeiros envolve risco, e nosso trabalho é ajudar você
              a entender e administrar esse risco da melhor forma possível.
            </p>
            <p className='text-sm sm:text-base text-grey dark:text-white/70 leading-relaxed'>
              Acreditamos que a combinação de proteção de capital, disciplina e informação clara é
              o que permite ao investidor permanecer ativo no mercado sem comprometer tudo aquilo
              que levou anos para construir.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Page
