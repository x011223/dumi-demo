import React, { useState } from 'react';

const Foo = (props: { text: string }) => {
  const { text } = props;
  const [title, setTitle] = useState('title');
  return (
    <button
      onClick={() => {
        setTitle(title === 'title' ? text : 'title');
      }}
      type="button"
    >
      {title}
    </button>
  );
};

export default Foo;
