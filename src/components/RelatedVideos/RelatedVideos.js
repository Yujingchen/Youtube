import React from "react";
import "./RelatedVideos.scss";
import VideoPreview from "../VideoPreview/VideoPreview";
import NextUpVideo from "./NextUpVideo/NextUpVideo";

export default function RelatedVideos(props) {
  if (!props.videos || !props.videos.length) {
    return <div className="related-videos" />;
  }

  const nextUpVideo = props.videos[0];
  const remainingVideos = props.videos.slice(1);

  const relatedVideosPreviews = remainingVideos.map(remainingVideo => {
    return (
      <VideoPreview
        video={remainingVideo}
        key={remainingVideo.id}
        pathname="watch"
        search={`?v=${remainingVideo.id}`}
        horizontal={true}
      />
    );
  });

  return (
    <div className="related-videos">
      <NextUpVideo video={nextUpVideo} />
      {relatedVideosPreviews}{" "}
    </div>
  );
}
