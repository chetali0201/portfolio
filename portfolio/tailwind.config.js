/** @type {import('tailwindcss').Config} */

export default {

darkMode:'class',

content:[
'./index.html',
'./src/**/*.{js,jsx}',
],

theme:{

extend:{

colors:{

background:'#FFF8FB',

surface:'#FFFDFE',

card:'#FFFFFF',

paper:'#2B1C26',

muted:'#8B7280',

signal:{

cyan:'#F9A8D4',

violet:'#EC4899',

amber:'#FDA4AF',

},

},

boxShadow:{

glow:
'0 10px 35px rgba(236,72,153,.14)',

soft:
'0 12px 30px rgba(255,182,193,.18)',

},

borderRadius:{

xl:'22px',

'2xl':'30px',

},

},

},

plugins:[],

}
