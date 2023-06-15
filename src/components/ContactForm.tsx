import emailjs from '@emailjs/browser';
import { FormEvent, useState } from 'react';
import Spinner from './Spinner';

interface ContactFormData {
  email: string;
  message: string;
}

type Props = {
  caption?: string;
}

const ContactForm: React.FC<Props> = ({ caption }) => {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    email: '',
    message: ''
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    try {
      const response = await emailjs.send(serviceId, 'template_1t7fpb5', {
        email: formData.email,
        message: formData.message
      }, publicKey);

      if (response.status === 200) {
        setFormData({
          email: '',
          message: ''
        });
      }
    } catch (err) {
      console.error(err);
    }
    setIsSending(false);
  }

  return (
    <div id="contact" className="p-20 py-52 min-h-screen md:h-screen flex flex-col justify-center items-center bg-[#2F2F2F] text-[#DDDDDD]">
      <div className="text-center md:w-1/3">
        <h2 className="text-[2rem] md:text-[4rem] font-extralight">Contact me</h2>
        <p className="font-extralight md:text-[1.5rem]">{caption}</p>
        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-y-8 font-extralight">
          <input value={formData.email} onChange={(e) => {
            setFormData({
              ...formData,
              email: e.target.value
            })
          }} className="md:text-[1.5rem] bg-transparent border-[1px] rounded-2xl py-2 px-4 w-full" placeholder="Your email" type="text" />
          <textarea value={formData.message} onChange={(e) => {
            setFormData({
              ...formData,
              message: e.target.value
            })
          }} className="no-scrollbar md:text-[1.5rem] bg-transparent border-[1px] rounded-2xl py-2 px-4 w-full" placeholder="Message" />
          <button type="submit" className="md:text-[1.5rem] border-[1px] rounded-2xl py-2 px-4 w-full bg-[#EAEAEA] text-[#2E2E2E]">
            {isSending ?
              <Spinner full={false} />
              :
              'Send'
            }
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm