import React from "react";
import parse from "html-react-parser";

const PostCard = ({ post }) => {
  console.log({ post });
  return (
    <div className="mt-5">
      <h2 className="fs-3">{post.title}</h2>
      <div className="my-4 fs-6">{parse(post.content)}</div>
      <div className="date">
        <p>écrit le {post.createdAt}</p>
        <p>mis à jour le {post.updatedAt}</p>
      </div>
    </div>
  );
};

export default PostCard;
