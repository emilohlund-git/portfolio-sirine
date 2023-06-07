import React from 'react';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';
import ProjectMedia from './ProjectMedia';

type Props = {
  media: ProjectMedia;
}

const Mockup: React.FC<Props> = ({ media }) => {
  return (
    <DeviceFrameset device="iPhone X" zoom={.8} color="black">
      <ProjectMedia mediaType="image" media={media} />
    </DeviceFrameset>
  )
}

export default Mockup