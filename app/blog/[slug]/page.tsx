import React from 'react'

type Props = {
  params: {
      slug: string;
  };
};

function page({params: {slug}}: Props) {
  return (
    <div>page</div>
  )
}

export default page