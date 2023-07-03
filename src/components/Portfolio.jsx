import React from 'react'
import mail from '../assets/portfolio/composeMail.jpg';
import ecommerce from '../assets/portfolio/ecommerce.png'
import netflix from '../assets/portfolio/Screenshot.png'
import expenseTracker from '../assets/portfolio/expenseTrackert.png'
import weather from '../assets/portfolio/weather.jpg'
import restaurant from '../assets/portfolio/restaurant.png'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: mail,
      github:'https://github.com/HimanshuDeveloperr/mail-box.git',
      demo:"https://cheery-gnome-ebf72d.netlify.app/"
    },
    {
      id: 2,
      src: ecommerce,
      github:'https://github.com/HimanshuDeveloperr/e-commerce.git',
          demo:"https://zippy-gumption-ec4114.netlify.app/"
    },
    {
      id: 3,
      src: netflix,
      github:'https://github.com/HimanshuDeveloperr/netflix_replica.git',
          demo:"https://himanshunetflix.netlify.app/"
    },
    {
      id: 4,
      src: weather,
      github:'https://github.com/HimanshuDeveloperr/weather-app.git',
          demo:"https://himanshu-weatherapp.netlify.app/"
    },
    {
      id: 5,
      src: expenseTracker,
      github:'https://github.com/HimanshuDeveloperr/my-app.git',
          demo:"https://zippy-gumption-ec4114.netlify.app/"
    },
    {
      id: 6,
      src: restaurant,
      github:'https://github.com/HimanshuDeveloperr/restaurant.git',
          demo:"https://himanshu-restaurant.netlify.app/"
    },
  ];

  const openGitHubRepo = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 px-2 md:px-0">
          {portfolios.map(({ id, src,github,demo }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg w-64">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full"
              />
              <div className="flex items-center justify-center">
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={()=>openGitHubRepo(demo)}>
                  Demo
                </button>
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105" onClick={()=>openGitHubRepo(github)}>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
