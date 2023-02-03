import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import Signin from './components/signin';
import Signup from './components/signup';
import Newsletter from './components/newsletter';
import Layout from './components/layout';

const TemplatList = ({ handleTemplateToggle }) => {
  return (
    <div class="max-w-screen-md px-2.5 mt-5 flex justify-center">
      <Button id="signin" class="bg-white h-20 p-2 rounded mr-5 hover:bg-blue-500 hover:text-white shadow-xl hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:text-white focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg active:text-white transition duration-150 ease-in-out" onClick={() => handleTemplateToggle('signin')}>Signin template</Button>
      <Button id="signup" class="bg-white h-20 p-2 rounded mr-5 hover:bg-blue-500 hover:text-white shadow-xl hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:text-white focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg active:text-white transition duration-150 ease-in-out" onClick={() => handleTemplateToggle('signup')}>Signup template</Button>
      <Button id="signup" class="bg-white h-20 p-2 rounded hover:bg-blue-500 hover:text-white shadow-xl hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:text-white focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg active:text-white transition duration-150 ease-in-out" onClick={() => handleTemplateToggle('newsletter')}>Newsletter template</Button>
    </div>
  )
}

function App() {
  const [type, setType] = useState('');

  const handleTemplateToggle = (value) => {
    setType(value);
  }

  const handleTemplateView = () => {
    switch (type) {
      case 'signin':
        return <Signin />;
      case 'signup':
        return <Signup />;
      case 'newsletter':
        return <Newsletter />;
      default:
        return <h1>No form found</h1>;
    }
  }

  return (
    <Layout>
      <div class="h-full pt-5 pb-5">
        <h1 class="text-3xl font-bold text-center">
          Form Templates
        </h1>
        {!type ? <TemplatList handleTemplateToggle={handleTemplateToggle} /> :
          <div class="relative">
            <Button class="absolute top-0 right-5 hover:bg-blue-500 hover:text-white bg-gray-200 h-8 w-8 rounded-full hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:text-white focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out" onClick={() => handleTemplateToggle('')}>X</Button>
            {handleTemplateView()}
          </div>
        }
      </div>
    </Layout>
  );
}

export default App;
