import { FullscreenControl } from "@/components/video/controls/FullscreenControl";
import { LoadingControl } from "@/components/video/controls/LoadingControl";
import { PauseControl } from "@/components/video/controls/PauseControl";
import { ProgressControl } from "@/components/video/controls/ProgressControl";
import { SourceControl } from "@/components/video/controls/SourceControl";
import { TimeControl } from "@/components/video/controls/TimeControl";
import { VolumeControl } from "@/components/video/controls/VolumeControl";
import { VideoPlayer } from "@/components/video/VideoPlayer";
import { useCallback, useState } from "react";

// test videos: https://gist.github.com/jsturgis/3b19447b304616f18657

// TODO video todos:
//  - make pretty
//  - better seeking
//  - improve seekables
//  - error handling
//  - middle pause button + click to pause
//  - improve pausing while seeking/buffering
//  - captions
//  - IOS support: (no volume, fullscreen video element instead of wrapper)
//  - IpadOS support: (fullscreen video wrapper should work, see (lookmovie.io) )
//  - HLS support: feature detection otherwise use HLS.js
export function TestView() {
  const [show, setShow] = useState(false);
  const handleClick = useCallback(() => {
    setShow((v) => !v);
  }, [setShow]);

  if (!show) {
    return <p onClick={handleClick}>Click me to show</p>;
  }

  return (
    <div className="w-[40rem] max-w-full">
      <VideoPlayer autoPlay>
        <PauseControl />
        <FullscreenControl />
        <ProgressControl />
        <VolumeControl />
        <LoadingControl />
        <TimeControl />
        <SourceControl source="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" />
      </VideoPlayer>
    </div>
  );
}
