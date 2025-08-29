export const About = () => {
  return (
    <section className="py-10 px-4 bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-gray-800  font-inter"
        >
          {/* <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10" /> */}
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
