import React from 'react';
// Importe tes images ici si tu en as dans le dossier assets
// import img1 from '../assets/projet1.png'; 

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  // si un projet n'a pas d'image, on peut laisser undefined ou utiliser une image par défaut
  image?: string;
  github: string;
  live: string;
}

const Projects: React.FC = () => {
  // Voici ton tableau de données propre
  const projectsList: Project[] = [
    {
      id: 1,
      title: "Gestionnaire de tâches",
      description: "Application pour organiser les tâches et améliorer la productivité.",
      technologies: ["React", "Node.js", "Tailwind CSS"],
      image: "https://via.placeholder.com/400x200?text=Gestionnaire+de+taches",
      github: "https://github.com/Rassoult/mon-portfolio",
      live: "https://mon-portfolio-votre-nom.vercel.app" 
    },
    {
      id: 2,
      title: "Blog Personnel",
      description: "Un blog pour partager mes pensées et expériences en développement web.",
      technologies: ["Next.js", "Markdown", "CSS Modules"],
      image: "https://via.placeholder.com/400x200?text=Blog+Personnel",
      github: "https://github.com/Rassoult/mon-portfolio",
      live: "https://mon-portfolio-votre-nom.vercel.app"
    }

  ];

  return (
    <section className="py-20 bg-slate-50" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-slate-800">Mes Projets</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-2xl transition-shadow">
              <img
                src={project.image || "https://via.placeholder.com/400x200?text=Image+manquante"}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-indigo-600 font-medium hover:underline">Code GitHub</a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;