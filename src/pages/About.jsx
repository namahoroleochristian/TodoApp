import React from 'react';


const About = () => {
  return (
    <>
    {/* <Header/> */}
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">About This Todo List App</h1>
        <p className="text-gray-600 leading-7 mb-6">
          This Todo List application is a simple and intuitive tool for managing your daily tasks effectively.
          Designed with a focus on usability and responsiveness, this app allows you to seamlessly add, view, 
          update, and delete tasks.
        </p>
        <p className="text-gray-600 leading-7 mb-6">
          Built with <strong>React</strong> for a dynamic user experience and styled using <strong>TailwindCSS</strong>, 
          this app demonstrates key front-end development principles, including state management, component-based 
          architecture, and API integration. It uses a <strong>mock API</strong> powered by JSON Server to handle 
          backend operations during development.
        </p>
        <p className="text-gray-600 leading-7">
          Whether you're a developer looking to learn React or someone in need of a simple task manager, this app 
          serves as a great starting point. Explore the features, manage your tasks, and enhance your productivity today!
        </p>
      </div>
    </div>
    </>
  );
};

export default About;
