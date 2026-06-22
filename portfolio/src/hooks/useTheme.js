import { useEffect, useState, useCallback } from 'react'

export default function useTheme() {

const [theme, setTheme] = useState(() => {

if (typeof window === 'undefined')
return 'light'

return localStorage.getItem('ck-theme') || 'light'

})

useEffect(() => {

const root = document.documentElement

if (theme === 'dark') {

root.classList.add('dark')

} else {

root.classList.remove('dark')

}

localStorage.setItem(
'ck-theme',
theme
)

}, [theme])

const toggleTheme = useCallback(() => {

setTheme((t)=>

t === 'dark'
? 'light'
: 'dark'

)

}, [])

return {
theme,
toggleTheme
}

}