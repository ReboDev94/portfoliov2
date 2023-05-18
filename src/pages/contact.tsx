import { ChangeEvent, FormEvent, useState } from 'react'
import { Button } from '../components/Button';

import SocialMedia from '@/components/SocialMedia';
import ContactInformation from '@/components/ContactInformation';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


const initData = {
  name: '',
  email: '',
  message: '',
};
const notifySuccess = () => toast('Here is your toast.');

const Contact = () => {

  const [loading, setLoading] = useState(false);
  const [{ name, email, message }, setFormContact] = useState(initData);

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormContact((prev) => ({ ...prev, [name]: value }));
  };


  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    axios({
      method: 'POST',
      url: 'https://formbold.com/s/6QO53',
      data: { name, email, message },
    })
      .then(() => {
        toast.success('He recibido tu mensaje, muy pronto me pondré en contacto contigo, gracias.');
        setFormContact(initData);
      })
      .catch(() => {
        toast.error('Ocurrió un error, por favor inténtalo mas tarde.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="flex flex-col container mx-auto px-4 sm:px-6 md:px-10 gap-10">
      <div className='mt-10'>
        <h1 className="text-3xl font-semibold text-center">
          <span className="text-red-600">C</span>ontact Me
        </h1>
      </div>
      <div className='md:mx-36'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 mb-4 py-4 border-b border-gray-300'>
          <div className='flex flex-col gap-6'>
            <h1 className="text-xl font-semibold text-red-600">Drop Me a Message</h1>
            <ContactInformation />
          </div>
          <div>
            <form className='flex flex-col gap-4' onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => onInputChange(e)}
                className="block w-full p-2.5 shadow-sm rounded-lg border border-solid border-gray-500 text-sm text-neutral-800 focus:outline-none focus:border-none focus:ring-1 focus:ring-offset-0 focus:ring-red-600"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => onInputChange(e)}
                className="block w-full p-2.5 shadow-sm rounded-lg border border-solid border-gray-500 text-sm text-neutral-800 focus:outline-none focus:border-none focus:ring-1 focus:ring-offset-0 focus:ring-red-600"
                required
              />
              <textarea
                value={message}
                onChange={(e) => onInputChange(e)}
                name="message"
                placeholder="Message"
                rows={4}
                className="block w-full p-2.5 shadow-sm rounded-lg border border-solid border-gray-500 text-sm text-neutral-800 focus:outline-none focus:border-none focus:ring-1 focus:ring-offset-0 focus:ring-red-600"
                required
              />
              <div className='flex justify-end'>
                <Button type='submit' disabled={loading}>Send</Button>
              </div>
            </form>
          </div>
        </div>
        <SocialMedia className='flex gap-5' />
      </div>
      <Toaster />
    </section>
  )
}

export default Contact
