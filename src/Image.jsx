import React from 'react';

const Image = (props) => {
  const { tags, webformatURL } = props;
  return (
    <div className="row">
      <div className="col-md-12 px-0">
        <div className="rounded-lg overflow-hidden">
          <img src={webformatURL} className="img-fluid " alt={tags}></img>
        </div>
      </div>
    </div>
  );
};

export default Image;
