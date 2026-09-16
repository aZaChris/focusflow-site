import { Hero } from './components/Hero'
import { FeatureSection } from './components/FeatureSection'
import { Footer } from './components/Footer'
import { features } from './data/features'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      {features.map((feature, i) => (
        <FeatureSection key={feature.title} feature={feature} reversed={i % 2 === 1} />
      ))}
      <Footer />
    </div>
  )
}

export default App
