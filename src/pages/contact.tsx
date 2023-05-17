import { ChangeEvent, useState } from 'react'
import { Button } from '../components/Button';

import SocialMedia from '@/components/SocialMedia';
import ContactInformation from '@/components/ContactInformation';

const initData = {
  name: '',
  email: '',
  message: '',
};
const contact = () => {

  const [{ name, email, message }, setFormContact] = useState(initData);

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormContact((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="flex flex-col container mx-auto px-4 sm:px-6 md:px-10 gap-10">
      <div className='mt-10'>
        <h1 className="text-3xl font-semibold text-center">
          <span className="text-red-600">C</span>ontact Me
        </h1>
      </div>
      <div className='md:mx-36'>
        <div className='grid grid-cols-2 mb-4 py-4 border-b border-red-600'>
          <div className='flex flex-col gap-6'>
            <h1 className="text-xl font-semibold text-red-600">Drop Me a Message</h1>
            <ContactInformation />
          </div>
          <div>
            <form className='flex flex-col gap-4'>
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
                type="text"
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
                <Button>Send</Button>
              </div>
            </form>
          </div>
        </div>
        <SocialMedia className='flex gap-5' />
      </div>

    </section>
  )
}

export default contact
