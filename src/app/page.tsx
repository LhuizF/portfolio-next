export default function Home() {
  const skills = ["Node.js", "React", "TypeScript", "C#", "Docker"]
  return (
    <main className="">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10"></div>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-4xl w-full mx-4">
          <div className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6">
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 font-inter">Luiz Henrique</h1>
            <p className="text-gray-400 mb-2 sm:text-xl font-inter">
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
  );
}
