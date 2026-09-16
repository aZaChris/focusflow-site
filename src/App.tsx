import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { FeatureGrid } from './components/FeatureGrid'
import { ScreenshotsSection } from './components/ScreenshotsSection'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { ThemeProvider } from './theme/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <Hero />
      <HowItWorks />
      <FeatureGrid />
      <ScreenshotsSection />
      <FinalCTA />
      <Footer />
    </ThemeProvider>
  )
}

export default App
