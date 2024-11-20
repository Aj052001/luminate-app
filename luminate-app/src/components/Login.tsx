// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import OnboardingScreen from './OnboardingScreen.tsx';

// const API_URL = 'http://localhost:5000/api/auth';

// const AuthForms = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });
//   const [message, setMessage] = useState({ text: '', type: '' });
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     // Configure axios interceptors on mount
//     const requestInterceptor = axios.interceptors.request.use(
//       (config) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//           config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//       },
//       (error) => Promise.reject(error)
//     );

//     return () => {
//       // Eject the interceptor when the component unmounts
//       axios.interceptors.request.eject(requestInterceptor);
//     };
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setMessage({ text: '', type: '' });

//     try {
//       const response = await axios.post(`${API_URL}/${isLogin ? 'login' : 'register'}`, formData);
//       if (!isLogin) {
//         setMessage({ text: 'Registration successful! Redirecting to login...', type: 'success' });
//         setTimeout(() => {
//           setIsLogin(true);
//           setMessage({ text: '', type: '' });
//         }, 2000);
//       } else {
//         localStorage.setItem('token', response.data.token);
//         localStorage.setItem('user', JSON.stringify(response.data.user));
//         setIsAuthenticated(true);
//       }
//     } catch (error) {
//       setMessage({
//         text: error.response ? error.response.data.message : 'An error occurred, please try again',
//         type: 'error'
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (isAuthenticated) {
//     return <OnboardingScreen />;
//   }

//   return (
//     <div className="min-h-screen bg-purple-950 flex items-center justify-center p-4">
//       <div className="w-full max-w-md bg-purple-900 rounded-lg shadow-xl p-8">
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-white text-center">
//             {isLogin ? 'Login' : 'Register'}
//           </h2>
//         </div>

//         {message.text && (
//           <div className={`mb-4 p-3 rounded-md text-center ${
//             message.type === 'success'
//               ? 'bg-green-600/20 text-green-200'
//               : 'bg-red-600/20 text-red-200'
//           }`}>
//             {message.text}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="username" className="block text-sm font-medium text-gray-200 mb-2">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               className="w-full px-4 py-2 bg-purple-800 border border-purple-600 rounded-md text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
//               required
//               placeholder="Enter your username"
//             />
//           </div>

//           {!isLogin && (
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 bg-purple-800 border border-purple-600 rounded-md text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
//                 required
//                 placeholder="Enter your email"
//               />
//             </div>
//           )}

//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 bg-purple-800 border border-purple-600 rounded-md text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
//               required
//               placeholder="Enter your password"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className={`w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-900 transition duration-200 font-medium ${
//               isLoading ? 'opacity-70 cursor-not-allowed' : ''
//             }`}
//           >
//             {isLoading ? (
//               <span className="flex items-center justify-center">
//                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 {isLogin ? 'Logging in...' : 'Registering...'}
//               </span>
//             ) : (
//               <span>{isLogin ? 'Login' : 'Register'}</span>
//             )}
//           </button>

//           {isLogin && (
//             <p className="text-center text-sm text-gray-300">
//               Don't have an account?{" "}
//               <button
//                 type="button"
//                 onClick={() => setIsLogin(false)}
//                 className="text-purple-300 hover:text-purple-200 underline focus:outline-none"
//               >
//                 Register
//               </button>
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AuthForms;



import React, { useState } from 'react';
import OnboardingScreen from './OnboardingScreen.tsx';


const AuthForms = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (!isLogin) {
        // Registration logic
        await new Promise(resolve => setTimeout(resolve, 1000));
        setMessage({
          text: 'Registration successful! Redirecting to login...',
          type: 'success'
        });
        
        setFormData({
          username: '',
          email: '',
          password: ''
        });
        
        setTimeout(() => {
          setIsLogin(true);
          setMessage({ text: '', type: '' });
        }, 2000);
      } else {
        // Login logic
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsAuthenticated(true);
      }
    } catch (error) {
      setMessage({
        text: isLogin ? 'Login failed. Please try again.' : 'Registration failed. Please try again.',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuthenticated) {
    return <OnboardingScreen/>; // Redirect to your OnboardingScreen component
  }

  return (
    <div className="min-h-screen bg-purple-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-purple-900 rounded-lg shadow-xl p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white text-center">
            {isLogin ? 'Login' : 'Register'}
          </h2>
        </div>
        
        {message.text && (
          <div className={`mb-4 p-3 rounded-md text-center ${
            message.type === 'success' 
              ? 'bg-green-600/20 text-green-200' 
              : 'bg-red-600/20 text-red-200'
          }`}>
            {message.text}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="username" 
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-purple-800 border border-purple-600 rounded-md text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              required
              placeholder="Enter your username"
            />
          </div>
          
          {!isLogin && (
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-purple-800 border border-purple-600 rounded-md text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                required
                placeholder="Enter your email"
              />
            </div>
          )}

          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-purple-800 border border-purple-600 rounded-md text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              required
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-900 transition duration-200 font-medium ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {isLogin ? 'Logging in...' : 'Registering...'}
              </span>
            ) : (
              <span>{isLogin ? 'Login' : 'Register'}</span>
            )}
          </button>

          {isLogin && (
            <p className="text-center text-sm text-gray-300">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="text-purple-300 hover:text-purple-200 underline focus:outline-none"
              >
                Register
              </button>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthForms;