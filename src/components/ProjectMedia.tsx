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
        <img src={url} width="100%" height="100%" />
      );
    }
    case 'pdf': {
      const url = pb.files.getUrl(media, media.media!);
      return (
        <object data={url} type="application/pdf" width="100%" height="100%">
          <p>Alternative text - include a link <a href={url}>to the PDF!</a></p>
        </object>
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