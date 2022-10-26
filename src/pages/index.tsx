import type { NextPage } from "next";
import DeviceStrip from "../components/DeviceStrip";

import Layout from "../components/layout";
import VideoContainer from "../components/VideoContainer";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="mt-12 flex flex-col items-center gap-4">
        <form onSubmit={() => {}} className="flex flex-col items-center gap-4">
          <input
            type="text"
            placeholder="Room Name"
            className="placeholder:text-gray bg-gray-2 rounded-lg h-10 px-4 text-white text-center"
          />
          <button
            type="submit"
            className="bg-yellow rounded-lg h-10 px-4 text-white"
          >
            Join Room
          </button>
        </form>

        <div className="mt-12 bg-white relative overflow-hidden rounded-lg">
          <VideoContainer />
        </div>

        <DeviceStrip />
      </div>
    </Layout>
  );
};

export default Home;
