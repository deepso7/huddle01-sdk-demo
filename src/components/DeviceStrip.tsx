import Image from "next/image";
import { useHuddleStore } from "@huddle01/huddle01-client/store/useRootStore";

const DeviceStrip = () => {
  const isCamPaused = useHuddleStore((state) => state.isCamPaused);
  const isMicPaused = useHuddleStore((state) => state.isMicPaused);
  const toggleProducerMedia = useHuddleStore(
    (state) => state.toggleProducerMedia
  );

  // const { memoStream: stream, deviceLoading } = useMediaDevices();

  return (
    <div className="flex gap-4">
      <button
        onClick={() => toggleProducerMedia("cam", isCamPaused ? "on" : "off")}
      >
        <Image
          src={isCamPaused ? "/assets/cam-off.svg" : "/assets/cam-on.svg"}
          width={32}
          height={32}
          alt="cam"
          className="bg-yellow rounded-lg h-9 w-9"
        />
      </button>

      <button
        onClick={() => toggleProducerMedia("mic", isMicPaused ? "on" : "off")}
      >
        <Image
          src={isMicPaused ? "/assets/mic-off.svg" : "/assets/mic-on.svg"}
          width={32}
          height={32}
          alt="cam"
          className="bg-yellow rounded-lg h-9 w-9"
        />
      </button>
    </div>
  );
};

export default DeviceStrip;
