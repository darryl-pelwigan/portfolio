import React from 'react'

const blogPosts = [
  {
    id: 1,
    category: 'LLM',
    title: 'Why RAG is Eating the AI World',
    excerpt: 'Retrieval-Augmented Generation is becoming the default architecture for enterprise AI. Here\'s why it works and how to build one.',
    date: 'Mar 2026',
    readTime: '8 min read',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    category: 'ML',
    title: 'Fine-Tuning vs. Prompting: A Practical Guide',
    excerpt: 'When should you fine-tune a model versus engineering better prompts? I break down cost, performance, and maintenance trade-offs.',
    date: 'Jan 2026',
    readTime: '12 min read',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 3,
    category: 'MLOps',
    title: 'Building ML Pipelines That Don\'t Break at 3AM',
    excerpt: 'Lessons from running production ML systems. Monitoring, rollback strategies, and why you need feature stores.',
    date: 'Nov 2025',
    readTime: '6 min read',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    id: 4,
    category: 'CV',
    title: 'The State of Computer Vision in 2025',
    excerpt: 'From YOLO to vision transformers — a survey of what\'s working in production computer vision systems today.',
    date: 'Sep 2025',
    readTime: '10 min read',
    color: 'from-emerald-500 to-emerald-600'
  }
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-black border-t border-gray-300 dark:border-gray-800 transition-colors duration-300">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Writing & Thinking</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Thoughts on AI engineering, ML systems, and building products.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-700 rounded-lg p-6 transition group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${post.color} text-white text-xs font-semibold`}>
                  {post.category}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-500">{post.date}</span>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-400 transition">
                {post.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="text-sm text-gray-500 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition">
                {post.readTime}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
