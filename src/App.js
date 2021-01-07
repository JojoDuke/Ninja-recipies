import React, { Component } from 'react';

class App extends Component {
  state = {
    isVisible: true ^ false
  };

  handleClick = () => {
    this.setState({
      isVisible: false
    });
  }

  otherClick = () => {
    this.setState({
      isVisible: true
    })
  }

  render(){
    return(
      <div className="App grid md:grid-cols-3">
        <div className="md:col-span-1 md:flex md:justify-end">
          <nav className="text-right">
            <div className="flex justify-between items-center">
              <h1 className="border-b border-gray-100 font-bold uppercase p-4">
                <a href="/" className="text-xl text-green-500 hover:text-gray-700">Food Ninja</a>
              </h1>
              <div className="px-4 cursor-pointer md:hidden" id="burger">
                <svg className="w-6" viewBox="0 0 100 80" width="40" height="40">
                  <rect width="100" height="20" onClick={this.handleClick}></rect>
                  <rect y="30" width="100" height="20"></rect>
                  <rect y="60" width="100" height="20" onClick={this.otherClick}></rect>
                </svg>
              </div>
            </div>
            <ul className={`mt-6 text-sm md:block ${!this.state.isVisible ? "block" : "hidden"}`} id="menu">
              <li className="font-bold py-1">
              <a href="/" className="px-4 flex justify-end border-r-4 border-red-500">
                <span>Home</span>
              </a>
              </li>
              <li className="py-1">
              <a href="/" className="px-4 flex justify-end">
                <span>About</span>
              </a>
              </li>
              <li className="py-1">
              <a href="/" className="px-4 flex justify-end">
                <span>Contact</span>
              </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* MAIN */}
        <main className="py-6 px-16 bg-gray-100 md:col-span-2">
          <div className="flex justify-center md:justify-end ">
            <a href="/" className="btn border-red-500 text-red-500 md:border-2 hover:bg-red-500 hover:text-white transition ease-out duration-500">Log In</a>
            <a href="/" className="btn border-red-500 text-red-500 ml-4 md:border-2 hover:bg-red-500 hover:text-white transition ease-out duration-300">Sign Up</a>
          </div>
          <header>
            <h2 className="text-5xl text-gray-700 font-semibold">Recipies</h2>
            <h3 className="text-2xl font-semibold">For Ninjas</h3>
          </header>
          <div>
            <h4 className="font-bold border-b border-gray-200 mt-12 pb-2">Latest Recipies</h4>

            <div className="mt-8 grid lg:grid-cols-3 cursor-pointer gap-10 sm:grid-row-3">
              {/* Cards go here! */}
              <div className="card">
                <img src="https://i.pinimg.com/originals/d3/19/0b/d3190b2bc8806fb7c350fafa4cdc7a9a.jpg" 
                    alt="yea"
                    className="w-full h-32 sm:h-48 object-cover"
                    />
                <div className="m-4">
                  <span className="font-bold ">5 Bean Chilli Stew</span>
                  <span className="block text-gray-500 text-sm">Recipie by Mario</span>
                </div>
                <div className="badge">
                  <span className="">25 mins</span>
                </div>
              </div>

              <div className="card">
                <img src="https://food-images.files.bbci.co.uk/food/recipes/spaghetti_and_meatballs_69603_16x9.jpg" 
                    alt="yea"
                    className="w-full h-32 sm:h-48 object-cover"
                    />
                <div className="m-4">
                  <span className="font-bold ">Spaghetti and Meatballs</span>
                  <span className="block text-gray-500 text-sm">Recipie by Mario</span>
                </div>
                <div className="badge">
                  <span className="">40 mins</span>
                </div>
              </div>

              <div className="card">
                <img src="https://images-gmi-pmc.edge-generalmills.com/6467a87b-0186-410b-bf19-96ed4dc32936.jpg" 
                    alt="yea"
                    className="w-full h-32 sm:h-48 object-cover"
                    />
                <div className="m-4">
                  <span className="font-bold ">Bacon Burger</span>
                  <span className="block text-gray-500 text-sm">Recipie by Mario</span>
                </div>
                <div className="badge">
                  <span className="">15 mins</span>
                </div>
              </div>
            </div>

            <h4 className="font-bold border-b border-gray-200 mt-12 pb-2">Most Popular</h4>

            <div className="mt-8">
              {/* Cards go here! */}
            </div>

            <div className="flex justify-center">
              <button className="bg-gray-200 text-gray-400 btn hover:shadow-inner">
                Load More
              </button>
            </div>
          </div>

        </main>
      </div>
    );
  };
};

export default App;
