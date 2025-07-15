export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$9',
      period: '/month',
      features: [
        'Up to 5 projects',
        '10GB storage',
        'Email support',
        'Basic analytics'
      ]
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      features: [
        'Up to 25 projects',
        '100GB storage',
        'Priority support',
        'Advanced analytics',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      features: [
        'Unlimited projects',
        '1TB storage',
        '24/7 phone support',
        'Custom analytics',
        'Advanced integrations',
        'Dedicated account manager'
      ]
    }
  ]

  return (
    <div className="section bg-white dark:bg-gray-900 text-dark dark:text-white">
      <div className="container">
        <div className="panel text-center mb-12">
          <h1 className="h1">Pricing Plans</h1>
          <p className="fs-6 xl:fs-5 mt-4">
            Choose the perfect plan for your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`border rounded-lg p-8 text-center relative ${
                plan.popular 
                  ? 'border-primary bg-primary/5' 
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="h3 mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 dark:text-gray-400">{plan.period}</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center justify-center">
                    <span className="text-primary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                className={`btn w-full ${
                  plan.popular 
                    ? 'btn-primary' 
                    : 'border border-gray-300 dark:border-gray-600 hover:border-primary'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}