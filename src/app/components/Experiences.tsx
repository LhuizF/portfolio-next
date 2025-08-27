const experiences = [
  {
    title: 'Desenvolvedor Full-Stack Pleno',
    company: 'Nuai',
    period: 'Nov 2023 até o momento',
    responsibilities: [
      'Desenvolvimento de aplicativo desktop modular em <strong>Electron</strong>, com <strong>front-end em React</strong> e <strong>back-end em Node.js (NestJS)</strong>',
      'Idealização e implementação de <strong>pipeline de CI/CD</strong> para build e atualização remota do app, integrado a eventos do <strong>Firebase Firestore</strong>',
      'Configuração e implementação de <strong>testes automatizados</strong> com <strong>Jest</strong> em React e NestJS, com <strong>validação pre-push</strong> para garantir qualidade de código',
      'Implementação de sistema de <strong>telemedicina em tempo real</strong>, com <strong>filas via WebSockets</strong> e <strong>chamadas de vídeo integradas</strong> no app (React) e dashboard (Angular)'
    ]
  },
  {
    title: 'Desenvolvedor Full Stack Jr',
    company: 'Grupo Voitto',
    period: 'Dez 2021 a Nov 2023',
    responsibilities: [
      'Implementação de um novo gateway de pagamento, com pagamentos de pix ,cartão recorrência.',
      'Sistema de notificação interna por email para clientes inadimplentes atravesse de webhooks.',
      'Assumi a responsabilidade de implementação de novos layout em todo app e novas telas react-native e styles-component.',
      'Responsável por auxiliar e orientar estagiários, incluindo acompanhamento de demandas e revisão de código (code review).'
    ]
  }
]

export const Experiences = () => {
  return (
    <section className="pt-10 pb-20 px-4 bg-zinc-900 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Experiências
        </h2>

        <div className="relative z-10 space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 last:mb-0 group">
              <div className="relative bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 shadow-md transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-green-500/10 py-6 pr-6 pl-14 md:pl-16">

                <div className="absolute left-6 top-6 bottom-6 w-5 flex justify-center">

                  <div className="w-0.5 h-full bg-gray-700/50"></div>

                  <div className="absolute top-0 flex-shrink-0 w-5 h-5 rounded-full bg-zinc-950 border-2 border-green-500 flex items-center justify-center z-10">
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl text-white mb-1 font-semibold">
                    {exp.title}
                  </h3>
                  <p className="text-gray-300 mb-4 font-semibold">
                    {exp.company} <span className="text-gray-500 font-normal">- {exp.period}</span>
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>
                        <span dangerouslySetInnerHTML={{ __html: resp }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="bg-gradient-to-b from-transparent to-zinc-950 w-full h-48 absolute bottom-0 left-0" /> */}
    </section>
  )
}

