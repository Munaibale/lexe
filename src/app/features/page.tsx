export default function Features() {
  const features = [
    {
      icon: '🚀',
      title: 'Fast Performance',
      description: 'Optimized for speed with server-side rendering and static generation.'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Works perfectly on all devices, from mobile to desktop.'
    },
    {
      icon: '🔒',
      title: 'Secure',
      description: 'Built with security best practices and regular updates.'
    },
    {
      icon: '🎨',
      title: 'Customizable',
      description: 'Easily customize colors, fonts, and layouts to match your brand.'
    },
    {
      icon: '⚡',
      title: 'Modern Stack',
      description: 'Built with the latest technologies including Next.js and React.'
    },
    {
      icon: '🛠️',
      title: 'Developer Friendly',
      description: 'Clean code structure and comprehensive documentation.'
    }
  ]

  return (
    <div className="section bg-white dark:bg-gray-900 text-dark dark:text-white">
      <div className="container">
        <div className="panel text-center mb-12">
          <h1 className="h1">Features</h1>
          <p className="fs-6 xl:fs-5 mt-4">
            Discover what makes our platform special.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="h4 mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}