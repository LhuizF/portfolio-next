const experiences = [
  {
    title: 'Desenvolvedor Full-Stack Pleno',
    company: 'Nuai',
    period: 'Nov 2023 até o momento',
    responsibilities: [
      'Desenvolvi um aplicativo desktop modular em <strong>Electron</strong>, com front-end em <strong>React</strong> e back-end em <strong>Node.js (NestJS)</strong>, garantindo escalabilidade e fácil manutenção.',
      'Estruturei e implementei <strong> pipelines de CI/CD </strong> para build e deploy de APIs, além de pipeline de atualização remota dos apps, integrados a eventos do <strong>Firebase Firestore</strong>.',
      'Responsável pela configuração de <strong>testes automatizados com Jest</strong> em <strong>React</strong> e <strong>NestJS</strong>, implementando validação pre-push que evitou regressões e aumentou a confiabilidade em produção.',
      'Implementei um sistema de telemedicina, com filas em tempo real via <strong>WebSockets</strong> e chamadas de vídeo integradas, tanto nos apps (<strong>Electron/React</strong> e <strong>React-native</strong>) quanto no dashboard administrativo (<strong>Angular</strong>).'
    ]
  },
  {
    title: 'Desenvolvedor Full Stack Jr',
    company: 'Grupo Voitto',
    period: 'Dez 2021 a Nov 2023',
    responsibilities: [
      'Implementei um novo <strong>gateway</strong> de pagamentos, incluindo PIX, cartão de crédito e recorrência,<strong> aumentando a confiabilidade </strong>,<strong> diminuindo erros </strong> e <strong>diversidade de meios de pagamento. </strong>',
      'Desenvolvi um sistema de notificações internas por e-mail, disparadas via <strong>webhooks</strong>, para alertar o time financeiro sobre clientes inadimplentes, <strong> reduzindo esforços manuais</strong> e otimizando o processo de cobrança.',
      'Liderei a implementação de novos layouts e telas em todo o aplicativo <strong>React Native</strong>, utilizando <strong>styled-components</strong> para garantir uma melhor experiência do usuário (UI/UX).',
      'Assumi papel de referência técnica, auxiliando e <strong> orientando estagiários </strong> com acompanhamento de demandas e <strong> code reviews</strong>, promovendo boas práticas de desenvolvimento.'

    ]
  }
]

export const Experiences = () => {
  return (
    <section className="pt-10 pb-10 px-4 bg-zinc-900 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center font-inter">
          Experiências
        </h2>
        <div className="relative rounded-2xl"        >
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 last:mb-0 relative rounded-2xl py-6 pr-6 pl-14 md:pl-16 backdrop-blur-lg border border-gray-800 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-white/10">

              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl" />
              <div className="z-10">
                <div className="absolute left-6 top-6 bottom-6 w-5 flex justify-center">

                  <div className="w-0.5 h-full bg-gray-700/80"></div>

                  <div className="absolute top-0 flex-shrink-0 w-5 h-5 rounded-full bg-green-900 flex items-center justify-center z-10">
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl text-white mb-1 font-semibold">
                    {exp.title}
                  </h3>
                  <p className="text-green-500 mb-4 font-semibold">
                    {exp.company} <span className="text-gray-300 font-normal">- {exp.period}</span>
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
