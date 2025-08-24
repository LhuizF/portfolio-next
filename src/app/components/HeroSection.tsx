const skills = ["Node.js", "React", "TypeScript", "C#", "Docker"]

const HORIZONTAL = 6;
const VERTICAL = 12;

const horizontalLines = Array.from({ length: HORIZONTAL }, (_, i) => i);
const verticalLines = Array.from({ length: VERTICAL }, (_, i) => i);

const randomDuration = () => 4 + Math.random() * 6;

const randomDelay = () => Math.random() * 5;

export const HeroSection = () => {
  return (
    <main>
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-50" />

      <div className="absolute inset-0 overflow-hidden">
        {horizontalLines.map((i) => (
          <span
            key={`h-${i}`}
            className="light horizontal"
            style={{
              top: `${((i + 1) * 100) / (HORIZONTAL + 1)}%`,
              animationDuration: `${randomDuration()}s`,
              animationDelay: `${randomDelay()}s`,
            }}
          />
        ))}

        {verticalLines.map((i) => (
          <span
            key={`v-${i}`}
            className="light vertical"
            style={{
              left: `${((i + 1) * 100) / (VERTICAL + 1)}%`,
              animationDuration: `${randomDuration()}s`,
              animationDelay: `${randomDelay()}s`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900" />

      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-4xl w-full mx-4">
          <div className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-10 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 font-inter">Luiz Henrique Ferreira</h1>
            <p className="text-gray-400 mb-3 sm:text-xl font-inter">
              Full Stack Developer
            </p>
            <div className="flex flex-wrap gap-2 mt-2 font-inter">
              {skills.map((skill) => (
                <div key={skill} className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
