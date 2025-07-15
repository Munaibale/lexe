export default function About() {
  return (
    <div className="section bg-white dark:bg-gray-900 text-dark dark:text-white">
      <div className="container">
        <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center min-h-screen">
          <h1 className="h1">About Us</h1>
          <p className="fs-6 xl:fs-5 mt-8 max-w-2xl">
            We are a team of passionate developers and designers creating amazing digital experiences.
            Our mission is to build innovative solutions that help businesses grow and succeed in the digital world.
          </p>
          <div className="mt-8">
            <h2 className="h3 mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="h4 mb-2">Innovation</h3>
                <p>We constantly push boundaries to create cutting-edge solutions.</p>
              </div>
              <div className="text-center">
                <h3 className="h4 mb-2">Quality</h3>
                <p>We deliver high-quality products that exceed expectations.</p>
              </div>
              <div className="text-center">
                <h3 className="h4 mb-2">Collaboration</h3>
                <p>We work closely with our clients to achieve their goals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}