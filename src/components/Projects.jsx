import React from 'react'

const projects = [
  {
    id: 1,
    title: 'NeuroChat',
    description: 'An enterprise LLM chatbot platform with multi-model orchestration, RAG pipelines, and real-time streaming. Handles 50k+ concurrent conversations.',
    tags: ['React', 'Python', 'LangChain', 'Redis', 'PostgreSQL'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'VisionLab',
    description: 'Computer vision toolkit for real-time object detection, image segmentation, and visual search. Deployed across 200+ edge devices.',
    tags: ['PyTorch', 'OpenCV', 'FastAPI', 'Docker', 'ONNX'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 3,
    title: 'CodeSensei',
    description: 'AI-powered code reviewer that catches bugs, suggests optimizations, and enforces style guides. Integrated with GitHub Actions.',
    tags: ['TypeScript', 'GPT-4', 'GitHub API', 'Next.js', 'Vercel'],
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    id: 4,
    title: 'FlowML',
    description: 'ML pipeline orchestrator for training, evaluation, and deployment. Supports distributed training across multi-GPU clusters.',
    tags: ['Python', 'Kubernetes', 'Apache Airflow', 'Go', 'gRPC'],
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    id: 5,
    title: 'PixelForge',
    description: 'AI image generation platform with fine-tuning, inpainting, and style transfer. Serves 10k+ generations daily.',
    tags: ['Stable Diffusion', 'React', 'Node.js', 'AWS', 'S3'],
    color: 'from-rose-500 to-rose-600'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-black border-t border-gray-300 dark:border-gray-800 transition-colors duration-300">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">What I've Built</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">A selection of AI-powered products and tools.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-700 rounded-lg p-6 transition group cursor-pointer"
            >
              <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-semibold mb-4`}>
                {project.title}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-800 text-blue-400 font-semibold group-hover:text-blue-300 transition flex items-center gap-2">
                View Project →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
