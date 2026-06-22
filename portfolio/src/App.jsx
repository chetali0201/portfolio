import { useEffect, useState } from 'react'
import useTheme from './hooks/useTheme'

import Loader from './components/Loader'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {

const { theme, toggleTheme } = useTheme()

const [loading, setLoading] = useState(true)

useEffect(() => {

const t = setTimeout(() => {
setLoading(false)
}, 1400)

return () => clearTimeout(t)

}, [])

return (

<div
className={
theme === 'dark'
? 'dark min-h-screen'
: 'min-h-screen'
}
>

<Loader loading={loading}/>

<CursorGlow/>

<Navbar
theme={theme}
toggleTheme={toggleTheme}
/>

<main
className="
relative
overflow-x-hidden
"
>

<Hero/>

<About/>

<Skills/>

<Projects/>

<Services/>

<Experience/>

<Testimonials/>

<Contact/>

</main>

<Footer/>

</div>

)

}