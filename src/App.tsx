import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { FeatureGrid } from './components/FeatureGrid'
import { ScreenshotsSection } from './components/ScreenshotsSection'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <HowItWorks />
      <FeatureGrid />
      <ScreenshotsSection />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
