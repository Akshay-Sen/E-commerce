import React from 'react'

function Contact() {
    return (
        <div>
            <div className=' h-auto'>
                <h1 className='w-full flex justify-center
       text-3xl font-semibold py-8'>
                    Contact
                </h1>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29240.4478369073!2d75.10193112120223!3d23.63816618978537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39641ae6038b4b39%3A0xc3c2e7907e363628!2sJaora%2C%20Madhya%20Pradesh%20457226!5e0!3m2!1sen!2sin!4v1697703588639!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            <div className='mt-8'>
                <form action="https://formspree.io/f/mdoryqaq" method='post'
                className='flex flex-col items-center gap-4'
                >
                    <input type="text"
                        placeholder='username'
                        name='username'
                        required
                        autoComplete='off' 
                        className='border-2 w-80 px-2 py-1'
                        />

                    <input type="email"
                        placeholder='Email'
                        name='Email'
                        required
                        autoComplete='off'
                        className='border-2 w-80 px-2 py-1 '
                        />

                    <textarea name="Message" cols="10" rows="5"
                        placeholder='Enter Your Message'
                        required
                        autoComplete='off'
                        className='border-2 w-80 px-2 py-1'
                        >
                    </textarea>
                    <button className='border-2 mt-1 py-1 px-3 rounded-md text-xl bg-[#2929cc] text-white hover:bg-white hover:text-black'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
