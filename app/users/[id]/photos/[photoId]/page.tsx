import React from "react";

interface Props {
  params: {
    photoId: number;
  };
}

const PhotoIdPage = ({ params: { photoId } }: Props) => {
  return <div>PhotoIdPage {photoId}</div>;
};

export default PhotoIdPage;
