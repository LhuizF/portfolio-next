export const About = () => {
  return (
    <section className="py-16 px-4 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-gray-800 animate-fadeIn-scroll">
          <h2
            className="text-3xl font-bold mb-4 text-center">
            Um pouco sobre mim
          </h2>

          <div>
            <p className="text-gray-200">
              Ao longo de quase 4 anos como desenvolvedor full stack, venho trabalhando principalmente com React, React Native, Node.js e C#.
            </p>

            <p className="text-gray-200">
              Acredito que programação vai além da técnica: envolve criatividade, adaptabilidade e a busca constante por aprendizado. Gosto de explorar diferentes formas de resolver problemas, sempre com disposição para compartilhar conhecimento e colaborar com o time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
