export default function Card({ project }: { project: Project }) {
  const ptContent = project.translations.find(t => t.language === 'pt');

  if (!ptContent) return null;

  return (
    <div className="bg-white/10 backdrop-blur-sm border
      border-white/20 rounded-xl overflow-hidden hover:transform
      hover:scale-[1.02] transition-all duration-300 flex flex-col"
    >
      <div className="h-48 overflow-hidden shrink-0">
        <img src={project.imageUrl} alt={ptContent.title} className="w-full h-full object-cover" />
      </div>

      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold mb-2 text-white">{ptContent.title}</h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed grow">{ptContent.description}</p>

        {project.githubStats && (
          <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-gray-300 border-t 
            border-white/10 pt-4 mt-2"
          >

            <span className="flex items-center gap-1 font-semibold text-yellow-400"
              title="Estrelas no GitHub"
            >
              ⭐ {project.githubStats.stars}
            </span>

            {project.githubStats.languages && project.githubStats.languages.length > 0 && (
              <span className="text-gray-500">•</span>
            )}

            {project.githubStats.languages && project.githubStats.languages.length > 0 && (
              <div className="flex flex-wrap gap-2">

                {project.githubStats.languages.slice(0, 3).map(lang => (
                  <span key={lang}
                    className="bg-white/10 border border-white/20 px-2 py-1 
                    rounded-md text-[11px] uppercase tracking-wider"
                  >{lang}</span>
                ))}

                {project.githubStats.languages.length > 3 && (
                  <span className="text-gray-500 px-1 py-1 text-[11px]">+</span>
                )}
              </div>
            )}
          </div>
        )}

        <div className="flex gap-4 mt-auto">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
            >Ver Projeto</a>
          )}

          {project.repoUrl && project.repoUrl !== "" && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center border border-white/40 hover:bg-white/10 text-white font-semibold py-2 px-4 rounded transition-colors"
            >Código</a>
          )}
        </div>
      </div>
    </div>
  );
}