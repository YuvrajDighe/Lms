import React, { useState } from 'react';

function Forms() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    rememberMe: false,
    subscription: 'monthly'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted!\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="w-full p-6 font-sans min-h-screen bg-[#464859] text-white">
      {/* Top Navigation */}
     

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-2">React Forms Guide</h1>
        <p className="text-gray-300">Learn how to create and manage forms in React</p>
      </header>
 <div className="flex justify-between mb-8">
        <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors">
          <span className="mr-2">❮</span> Previous
        </button>
        <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors">
          Next <span className="ml-2">❯</span>
        </button>
      </div>
      {/* Basic Information Section (Top) */}
      <section className="mb-10 bg-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">HTML Forms Basics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-300 mb-2">What are Forms?</h3>
            <p className="text-gray-200 mb-4">
              HTML forms are used to collect user input. They contain various interactive controls like:
            </p>
            <ul className="list-disc pl-5 text-gray-200 space-y-1">
              <li>Text fields (text, password, email)</li>
              <li>Checkboxes and radio buttons</li>
              <li>Dropdown selects</li>
              <li>Text areas</li>
              <li>Submit buttons</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-300 mb-2">Basic Form Example</h3>
            <div className="bg-gray-800 rounded-md p-4">
              <pre className="text-gray-100 text-sm overflow-x-auto">
{`<form>
  <label>
    Username:
    <input type="text" name="username" />
  </label>
  <label>
    Password:
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections (Below) */}
      
      {/* 1. Controlled Components */}
      <section className="mb-10 bg-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full mr-3">1</span>
          Controlled Components
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-300 mb-2">React Form Handling</h3>
            <p className="text-gray-200">
              In React, form inputs should be "controlled components" where:
            </p>
            <ul className="list-disc pl-5 text-gray-200 mt-2 space-y-1">
              <li>React controls the value via <code>value</code> prop</li>
              <li>Changes are handled via <code>onChange</code> event</li>
              <li>State becomes the single source of truth</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-md p-4">
            <h4 className="text-gray-300 mb-2 font-mono text-sm">Example</h4>
            <pre className="text-gray-100 text-sm overflow-x-auto">
{`const [input, setInput] = useState('');

<input
  type="text"
  value={input}
  onChange={(e) => setInput(e.target.value)}
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* 2. onChange & Value Binding */}
      <section className="mb-10 bg-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <span className="inline-flex items-center justify-center w-8 h-8 bg-green-500 rounded-full mr-3">2</span>
          onChange & Value Binding
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-300 mb-2">Handling Different Input Types</h3>
            <div className="bg-gray-800 rounded-md p-4">
              <pre className="text-gray-100 text-sm overflow-x-auto">
{`// Text input
<input
  type="text"
  value={text}
  onChange={(e) => setText(e.target.value)}
/>

// Checkbox
<input
  type="checkbox"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>

// Select dropdown
<select
  value={option}
  onChange={(e) => setOption(e.target.value)}
>
  <option value="A">Option A</option>
  <option value="B">Option B</option>
</select>`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-300 mb-2">Multiple Inputs Pattern</h3>
            <p className="text-gray-200 mb-2">
              For forms with multiple inputs, use a single state object:
            </p>
            <div className="bg-gray-800 rounded-md p-4">
              <pre className="text-gray-100 text-sm overflow-x-auto">
{`const [form, setForm] = useState({
  email: '',
  password: '',
  remember: false
});

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setForm(prev => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value
  }));
};`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Form Submission */}
      <section className="mb-10 bg-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <span className="inline-flex items-center justify-center w-8 h-8 bg-purple-500 rounded-full mr-3">3</span>
          Form Submission Handling
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-gray-300 mb-2">Submission Process</h3>
            <ol className="list-decimal pl-5 text-gray-200 space-y-1">
              <li>Attach <code>onSubmit</code> handler to form</li>
              <li>Prevent default behavior with <code>e.preventDefault()</code></li>
              <li>Validate form data</li>
              <li>Submit data to server/API</li>
              <li>Handle response/errors</li>
            </ol>
          </div>

          <div className="bg-gray-800 rounded-md p-4">
            <h4 className="text-gray-300 mb-2 font-mono text-sm">Submission Example</h4>
            <pre className="text-gray-100 text-sm overflow-x-auto">
{`const handleSubmit = (e) => {
  e.preventDefault();
  // Validate data
  if (!form.email || !form.password) {
    alert('Please fill all fields');
    return;
  }
  // Submit to API
  fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify(form),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    // Handle success
  })
  .catch(error => {
    // Handle error
  });
};`}
            </pre>
          </div>

          <div className="p-4 bg-gray-600 rounded-md">
            <h3 className="font-medium text-gray-300 mb-3">Complete Form Example</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-1">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-700 border border-gray-500 rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-700 border border-gray-500 rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-700 border border-gray-500 rounded"
                  required
                  minLength="6"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600"
                  id="rememberMe"
                />
                <label htmlFor="rememberMe" className="ml-2 text-gray-300">Remember me</label>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Submit
              </button>
            </form>

            <div className="mt-4 p-3 bg-gray-700 rounded">
              <h4 className="text-gray-300 mb-1">Current Form State:</h4>
              <pre className="text-gray-100 text-sm overflow-x-auto">
                {JSON.stringify(formData, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className="flex justify-between mt-8">
        <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors">
          <span className="mr-2">❮</span> Previous
        </button>
        <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors">
          Next <span className="ml-2">❯</span>
        </button>
      </div>
    </div>
  );
}

export default Forms;