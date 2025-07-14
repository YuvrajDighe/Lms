import { useState } from 'react';

const Forms = () => {
  // State for form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    rememberMe: false,
    gender: '',
    course: 'react',
    bio: '',
    age: ''
  });

  // State for form errors
  const [errors, setErrors] = useState({});

  // State for active tab
  const [activeTab, setActiveTab] = useState('concept');

  // State for form submission
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!formData.gender) newErrors.gender = 'Please select gender';
    if (!formData.age) newErrors.age = 'Age is required';
    else if (isNaN(formData.age) || formData.age < 1) newErrors.age = 'Enter valid age';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      console.log('Form submitted:', formData);
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      rememberMe: false,
      gender: '',
      course: 'react',
      bio: '',
      age: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">React Forms Masterclass</h1>

     
      <div className="flex justify-between mt-8">
        <button
          className="flex items-center bg-green-500 hover:bg-green-600 text-gray-800 text-white font-semibold py-2 px-4 rounded transition-colors"
          onClick={() => console.log('Previous clicked')} 
        >
          <span className="mr-2">❮</span> Previous
        </button>

        <button
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors"
          onClick={() => console.log('Next clicked')} 
        >
          Next <span className="ml-2">❯</span>
        </button>
      </div>

      
      <div className="flex border-b border-gray-200 mb-8">
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'concept' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('concept')}
        >
          Concept
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'examples' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('examples')}
        >
          Examples
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'practice' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('practice')}
        >
          Practice
        </button>
      </div>

  
      {activeTab === 'concept' && (
        <div className="space-y-8">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">What are Controlled Components?</h2>
            <p className="text-gray-700 mb-4">
              In React, <span className="font-semibold">controlled components</span> are form elements whose values are controlled by React state.
            </p>
            <div className="bg-gray-100 p-4 rounded-md mb-4">
              <pre className="text-sm text-gray-800">
                {`// 1. Create state for the input value
const [inputValue, setInputValue] = useState('');

// 2. Bind the input's value to the state
<input 
  type="text" 
  value={inputValue} 
  onChange={(e) => setInputValue(e.target.value)}
/>`}
              </pre>
            </div>
            <p className="text-gray-700">
              This pattern gives React full control over the form data, making it easier to validate, manipulate, and submit form data.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Use Controlled Components?</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>React becomes the "single source of truth" for form data</li>
              <li>Easy to implement form validation</li>
              <li>Simple to reset or programmatically change form values</li>
              <li>Better integration with React's ecosystem</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Form Submission Handling</h2>
            <p className="text-gray-700 mb-4">
              In React, you handle form submission by attaching an <code className="bg-gray-200 px-1 rounded">onSubmit</code> handler to the form element.
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre className="text-sm text-gray-800">
                {`const handleSubmit = (e) => {
  e.preventDefault(); // Prevent default form submission
  // Validate and process form data here
};

<form onSubmit={handleSubmit}>
  {/* form inputs */}
  <button type="submit">Submit</button>
</form>`}
              </pre>
            </div>
          </section>
        </div>
      )}

    
      {activeTab === 'examples' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Text Input</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <pre className="text-xs text-gray-800">
                {`const [username, setUsername] = useState('');

<input 
  type="text" 
  value={username} 
  onChange={(e) => setUsername(e.target.value)}
  placeholder="Enter username"
/>`}
              </pre>
            </div>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Checkbox</h3>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="rememberMe"
                className="h-4 w-4 text-blue-600 rounded"
                checked={formData.rememberMe}
                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <pre className="text-xs text-gray-800">
                {`const [rememberMe, setRememberMe] = useState(false);

<input 
  type="checkbox" 
  checked={rememberMe} 
  onChange={(e) => setRememberMe(e.target.checked)}
/>`}
              </pre>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Select Dropdown</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Favorite Course</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              >
                <option value="react">React</option>
                <option value="javascript">JavaScript</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
              </select>
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <pre className="text-xs text-gray-800">
                {`const [course, setCourse] = useState('react');

<select 
  value={course} 
  onChange={(e) => setCourse(e.target.value)}
>
  <option value="react">React</option>
  {/* other options */}
</select>`}
              </pre>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Radio Buttons</h3>
            <div className="space-y-2 mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  className="h-4 w-4 text-blue-600"
                  checked={formData.gender === 'male'}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                />
                <label htmlFor="male" className="ml-2 text-sm text-gray-700">Male</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className="h-4 w-4 text-blue-600"
                  checked={formData.gender === 'female'}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                />
                <label htmlFor="female" className="ml-2 text-sm text-gray-700">Female</label>
              </div>
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <pre className="text-xs text-gray-800">
                {`const [gender, setGender] = useState('');

<input 
  type="radio" 
  name="gender" 
  value="male" 
  checked={gender === 'male'}
  onChange={(e) => setGender(e.target.value)}
/>
{/* other radio inputs */}`}
              </pre>
            </div>
          </div>
        </div>
      )}


      {activeTab === 'practice' && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Interactive Form Practice</h2>

          {isSubmitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              <h3 className="font-bold text-xl mb-2">Form Submitted Successfully!</h3>
              <div className="bg-white p-3 rounded mb-4">
                <pre className="overflow-auto">{JSON.stringify(formData, null, 2)}</pre>
              </div>
              <button
                onClick={resetForm}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Fill Another Form
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                    Username <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter username"
                  />
                  {errors.username && <p className="mt-1 text-sm text-red-600">{errors.username}</p>}
                </div>

          
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter email"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter password"
                  />
                  {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                </div>

                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                    Age <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md ${errors.age ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter age"
                  />
                  {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {['Male', 'Female', 'Other'].map((gender) => (
                      <div key={gender} className="flex items-center">
                        <input
                          type="radio"
                          id={gender.toLowerCase()}
                          name="gender"
                          value={gender.toLowerCase()}
                          checked={formData.gender === gender.toLowerCase()}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600"
                        />
                        <label htmlFor={gender.toLowerCase()} className="ml-2 text-sm text-gray-700">
                          {gender}
                        </label>
                      </div>
                    ))}
                  </div>
                  {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender}</p>}
                </div>

 
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                    Favorite Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="react">React</option>
                    <option value="javascript">JavaScript</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="node">Node.js</option>
                  </select>
                </div>
              </div>

     
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 rounded"
                />
                <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
                  Remember me
                </label>
              </div>

        
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  rows="3"
                  placeholder="Tell us about yourself..."
                ></textarea>
              </div>

         
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>

              </div>
            </form>

          )}
        </div>

      )}
    </div>
  );
};

export default Forms;