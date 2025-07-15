import { useState } from 'react';

const Forms = () => {
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

  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState('concept');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      console.log('Form submitted:', formData);
    }
  };

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
    <div className="min-h-screen p-6 bg-[#464859] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Buttons */}
        <div className="flex justify-between mb-8">
          <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
            <span className="mr-2">❮</span> Previous
          </button>
          <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
            Next <span className="ml-2">❯</span>
          </button>
        </div>

        {/* Header */}
        <h1 className="text-4xl font-bold mb-8 text-center text-white">React Forms Masterclass</h1>

        {/* Tabs */}
        <div className="flex border-b border-gray-600 mb-8">
          <button
            className={`py-3 px-6 font-medium text-lg ${activeTab === 'concept' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400'}`}
            onClick={() => setActiveTab('concept')}
          >
            Concept
          </button>
          <button
            className={`py-3 px-6 font-medium text-lg ${activeTab === 'examples' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400'}`}
            onClick={() => setActiveTab('examples')}
          >
            Examples
          </button>
          <button
            className={`py-3 px-6 font-medium text-lg ${activeTab === 'practice' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400'}`}
            onClick={() => setActiveTab('practice')}
          >
            Practice
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'concept' && (
          <div className="space-y-6">
            <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-green-400">Controlled Components</h2>
              <p className="mb-4 text-gray-300">
                In React, controlled components are form elements whose values are controlled by React state.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg mb-4">
                <pre className="text-green-300 text-sm">
                  {`const [value, setValue] = useState('');

<input 
  type="text" 
  value={value} 
  onChange={(e) => setValue(e.target.value)}
/>`}
                </pre>
              </div>
              <p className="text-gray-300">
                This pattern gives React full control over form data, enabling validation and manipulation.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-green-400">Form Submission</h2>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="text-green-300 text-sm">
                  {`const handleSubmit = (e) => {
  e.preventDefault();
  // Process form data
};

<form onSubmit={handleSubmit}>
  {/* form elements */}
</form>`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'examples' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-green-400">Text Input</h3>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white mb-4"
                placeholder="Username"
              />
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="text-green-300 text-sm">
                  {`const [username, setUsername] = useState('');

<input 
  type="text" 
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-green-400">Checkbox</h3>
              <div className="flex items-center mb-4">
                <input type="checkbox" className="h-5 w-5 text-green-400 rounded" />
                <label className="ml-2">Remember me</label>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="text-green-300 text-sm">
                  {`const [remember, setRemember] = useState(false);

<input 
  type="checkbox" 
  checked={remember}
  onChange={(e) => setRemember(e.target.checked)}
/>`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'practice' && (
          <div className="bg-gray-700 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-green-400">Practice Form</h2>
            
            {isSubmitted ? (
              <div className="bg-gray-800 p-6 rounded-lg border border-green-400">
                <h3 className="text-xl font-bold mb-4 text-green-400">Form Submitted!</h3>
                <pre className="bg-gray-900 p-4 rounded-lg overflow-auto text-gray-300">
                  {JSON.stringify(formData, null, 2)}
                </pre>
                <button
                  onClick={resetForm}
                  className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg"
                >
                  Reset Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Username *</label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-gray-800 border rounded-lg ${errors.username ? 'border-red-500' : 'border-gray-600'}`}
                    />
                    {errors.username && <p className="text-red-400 mt-1">{errors.username}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-gray-800 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
                    />
                    {errors.email && <p className="text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Password *</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-gray-800 border rounded-lg ${errors.password ? 'border-red-500' : 'border-gray-600'}`}
                    />
                    {errors.password && <p className="text-red-400 mt-1">{errors.password}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Age *</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-gray-800 border rounded-lg ${errors.age ? 'border-red-500' : 'border-gray-600'}`}
                    />
                    {errors.age && <p className="text-red-400 mt-1">{errors.age}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Gender *</label>
                  <div className="flex space-x-6">
                    {['male', 'female', 'other'].map(gender => (
                      <label key={gender} className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value={gender}
                          checked={formData.gender === gender}
                          onChange={handleChange}
                          className="h-4 w-4 text-green-400"
                        />
                        <span className="ml-2 capitalize">{gender}</span>
                      </label>
                    ))}
                  </div>
                  {errors.gender && <p className="text-red-400 mt-1">{errors.gender}</p>}
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Bio</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg"
                    rows="4"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 text-green-400 rounded"
                  />
                  <label className="ml-2 text-gray-300">Remember me</label>
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-800"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Forms;