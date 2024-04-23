import React from 'react';

interface InfoComponentProps {
  title: string;
  body: (string | JSX.Element)[];
}

const InfoComponent: React.FC<InfoComponentProps> = ({ title, body }) => {
  return (
    <div>
      <h1 className='mb-12 text-4xl'>{title}</h1>
      {body.map((item, index) => (
        typeof item === 'string'
          ? <p className='mb-6' key={index}>{item}</p>
          : item
      ))}
    </div>
  );
};

export default InfoComponent;