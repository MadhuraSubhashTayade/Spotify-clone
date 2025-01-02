import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] flex flex-col justify-around rounded">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="home" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="search" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} alt="library" className="w-8" />
            <p className="font-semibold">Your library</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={assets.arrow_icon} alt="right-arrow" className="w-5" />
            <img src={assets.plus_icon} alt="add" className="w-5" />
          </div>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create your first playlist</h1>
          <p className="font-light">it is easy we will help you</p>
          <button className="px-2 py-1.5 bg-white text-[15px] mt-4 rounded-full text-black">
            Create Playlist
          </button>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Let us find some podcast to follow</h1>
          <p className="font-light">We will keep you updated on new episodes</p>
          <button className="px-2 py-1.5 bg-white text-[15px] mt-4 rounded-full text-black">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
