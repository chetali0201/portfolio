import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import {
FiMail,
FiGithub,
FiLinkedin,
FiDownload,
FiSend,
} from 'react-icons/fi'

import {
fadeUp,
viewportOnce,
} from '../animations/variants'

const SERVICE_ID='service_gzrwsca'
const TEMPLATE_ID='template_vvs3fd7'
const PUBLIC_KEY='oBiLvxOZqhnnjFcqK'

export default function Contact(){

const formRef=useRef(null)

const [status,setStatus]=useState('idle')

const handleSubmit=async(e)=>{

e.preventDefault()

if(status==='sending') return

setStatus('sending')

try{

const response=
await emailjs.sendForm(
SERVICE_ID,
TEMPLATE_ID,
formRef.current,
PUBLIC_KEY
)

console.log(response)

setStatus('success')

formRef.current?.reset()

}
catch(error){

console.log(error)

alert(
error?.text ||
error?.message ||
'Email send failed'
)

setStatus('error')

}

}

return(

<section
id="contact"
className="relative section-pad"
>

<motion.p
variants={fadeUp}
initial="hidden"
whileInView="visible"
viewport={viewportOnce}
className="eyebrow mb-4"

>

 · Contact

</motion.p>

<motion.h2
variants={fadeUp}
initial="hidden"
whileInView="visible"
viewport={viewportOnce}
className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold max-w-2xl"

>

Let’s create something together.

</motion.h2>

<div className="mt-14 grid lg:grid-cols-[0.8fr_1.2fr] gap-10">

<div className="space-y-6">

<p className="text-paper/55">

Have an idea or project?
Feel free to contact me.

</p>

<a
href="mailto:chetalikumbhare0212@gmail.com"
className="glass rounded-2xl p-4 flex gap-3"

>

<FiMail size={18}/>

<span>

[chetalikumbhare0212@gmail.com](mailto:chetalikumbhare0212@gmail.com)

</span>

</a>

<div className="flex gap-3">

<a
href="https://github.com/chetali0201"
target="_blank"
rel="noreferrer"
className="glass p-3 rounded-xl"

>

<FiGithub/>

</a>

<a
href="https://www.linkedin.com/"
target="_blank"
rel="noreferrer"
className="glass p-3 rounded-xl"

>

<FiLinkedin/>

</a>

</div>

<a
href="/resume.pdf"
download
className="glass rounded-full px-6 py-3 inline-flex gap-2"

>

<FiDownload/>

Resume

</a>

</div>

<motion.form

ref={formRef}

onSubmit={handleSubmit}

variants={fadeUp}

initial="hidden"

whileInView="visible"

viewport={viewportOnce}

className="glass rounded-2xl p-8 space-y-5"

>

<input

name="user_name"

required

placeholder="Your Name"

className="w-full bg-white/5 rounded-xl px-4 py-3"

/>

<input

type="email"

name="user_email"

required

placeholder="Your Email"

className="w-full bg-white/5 rounded-xl px-4 py-3"

/>

<input

name="subject"

required

placeholder="Subject"

className="w-full bg-white/5 rounded-xl px-4 py-3"

/>

<textarea

name="message"

required

rows="5"

placeholder="Write your message"

className="w-full bg-white/5 rounded-xl px-4 py-3"

/>



<button

type="submit"

disabled={status==='sending'}

className="px-8 py-3 rounded-full bg-signal-cyan text-black flex items-center gap-2"

>

{

status==='sending'

? 'Sending...'

:

<>

Send Message

<FiSend/>

</>

}

</button>



{

status==='success'

&&

<p className="text-signal-cyan">

Message sent successfully ✓

</p>

}



{

status==='error'

&&

<p className="text-red-400">

Failed to send message

</p>

}


</motion.form>

</div>

</section>

)

}
