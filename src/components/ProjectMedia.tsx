import React from 'react';
import pb from '../pb.config';
import Embed from './Embed';

type Props = {
  mediaType?: 'pdf' | 'image' | 'video' | 'embed';
  media: ProjectMedia;
}

const ProjectMedia: React.FC<Props> = ({ mediaType, media }) => {
  switch (mediaType) {
    case 'image': {
      const url = pb.files.getUrl(media, media.media!, { thumb: '100x150' })
      return (
        <img className="z-10" src={url} width="100%" height="100%" />
      );
    }
    case 'pdf': {
      const url = pb.files.getUrl(media, media.media!);
      return (
        <div className="h-full w-full">
          <object data={`${url}?#zoom=75%scrollbar=0%toolbar=0&navpanes=0&view=Fit&statusbar=0`} type="application/pdf" width="100%" height="100%">
            <p>Click to open <a href={url}>the PDF!</a></p>
          </object>
        </div>
      );
    }
    case 'video': {
      const url = pb.files.getUrl(media, media.media!);
      return (
        <video src={url} autoPlay loop muted width="100%" height="100%" />
      )
    }
    case 'embed': {
      return (
        <Embed src={media.embed_src} />
      )
    }
    default: return <p>Invalid media type</p>
  }
}

export default ProjectMedia