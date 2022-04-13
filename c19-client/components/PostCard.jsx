import React from "react";
import parse from "html-react-parser";

const PostCard = ({ post }) => {
  console.log({ post });
  return (
    <div className="my-4">
      <h2>{post.attributes.title}</h2>
      <div>{parse(post.attributes.content)}</div>
    </div>
  );
};

export default PostCard;
