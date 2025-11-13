import React from 'react'
import HeroSub from '@/components/SharedComponent/HeroSub'
import ContactForm from '@/components/Contact/Form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato | GuardBroker',
}

const page = () => {
  const breadcrumbLinks = [
    { href: '/', text: 'Início' },
    { href: '/contact', text: 'Contato' },
  ]

  return (
    <>
      <HeroSub
        title='Contato'
        description='Entre em contato com a equipe GuardBroker.'
        breadcrumbLinks={breadcrumbLinks}
      />

      <main className='bg-white dark:bg-darklight'>
        <section className='container mx-auto max-w-4xl px-4 py-12 sm:py-16 md:py-20'>
          {/* TEXTO EXPLICATIVO */}
          <div className='space-y-3 sm:space-y-4 mb-10 sm:mb-12'>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-midnight_text dark:text-white'>
              Fale com a GuardBroker
            </h2>
            <p className='text-sm sm:text-base text-grey dark:text-white/70 leading-relaxed'>
              Se você tem dúvidas sobre a plataforma, conta, depósitos, saques ou sobre como a
              GuardBroker funciona na prática, nossa equipe está pronta para ajudar. Use o
              formulário abaixo para enviar sua mensagem e retornaremos o mais rápido possível.
            </p>
            <p className='text-sm sm:text-base text-grey dark:text-white/70 leading-relaxed'>
              Para assuntos gerais, suporte ou questões relacionadas à sua conta, você também pode
              entrar em contato diretamente pelo e-mail:{' '}
              <a
                href='mailto:contato@guardbroker.com'
                className='text-primary hover:underline'>
                contato@guardbroker.com
              </a>
              .
            </p>
          </div>

          {/* BLOCO DE DETALHES EM TEXTO */}
          <div className='space-y-2 sm:space-y-3 mb-10 sm:mb-12'>
            <h3 className='text-base sm:text-lg font-semibold text-midnight_text dark:text-white'>
              Quando devo falar com o suporte?
            </h3>
            <ul className='list-disc list-inside text-sm sm:text-base text-grey dark:text-white/70 leading-relaxed space-y-1'>
              <li>Dúvidas sobre acesso à sua conta ou login.</li>
              <li>Ajuda com depósitos, saques ou atualização de dados.</li>
              <li>Reportar qualquer comportamento suspeito ou dificuldade na plataforma.</li>
              <li>Esclarecer pontos sobre proteção de capital e funcionamento da corretora.</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}

export default page
