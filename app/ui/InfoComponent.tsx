import React from 'react';

interface InfoComponentProps {
  title: string;
  body: string[];
}

const InfoComponent: React.FC<InfoComponentProps> = ({ title, body }) => {
  return (
    <div>
      <h1 className='mb-12 text-4xl'>{title}</h1>
      {body.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default InfoComponent;