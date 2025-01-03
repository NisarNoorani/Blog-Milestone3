// pages/index.js
export default function Home() {
    return (
      <section className="bg-[#171717] text-white py-32 min-h-screen">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between my-16 md:my-32">
          {/* Left Column */}
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start p-8">
            <h1 className="text-5xl md:text-6xl font-serif text-yellow-300 mb-6 tracking-wide">
              Welcome to Blog Sphere
            </h1>
            <h2 className="text-3xl md:text-4xl font-mono leading-relaxed md:leading-snug mb-6">
              Where Ideas Meet the World
            </h2>
            <p className="text-base md:text-lg font-sans text-gray-300 mb-8">
              Blog Sphere is your space to share stories, ideas, and insights with a global audience. 
              Discover engaging content, write your thoughts, and connect with a community of creators.
            </p>
            <a
              href="#"
              className="bg-transparent text-yellow-300 hover:bg-yellow-300 hover:text-black font-bold rounded-md border-2 border-yellow-300 py-3 px-6 transition duration-300 ease-in-out"
            >
              Join Blog Sphere
            </a>
          </div>
  
          {/* Right Column with Images */}
          <div className="w-full md:w-3/5 flex justify-center md:justify-end space-x-6 p-8 mt-12 md:mt-0">
            <div className="w-1/3">
              <img
                className="w-full h-auto object-cover rounded-lg shadow-md"
                src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
                alt="Blog Sphere Image 1"
              />
            </div>
            <div className="w-1/3">
              <img
                className="w-full h-auto object-cover rounded-lg shadow-md"
                src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
                alt="Blog Sphere Image 2"
              />
            </div>
            <div className="w-1/3">
              <img
                className="w-full h-auto object-cover rounded-lg shadow-md"
                src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
                alt="Blog Sphere Image 3"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
