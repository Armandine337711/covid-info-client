import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
const server = process.env.BACK_API;
const News = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    console.log("server", server);
    fetch(`${server}/categories/1?fields=title&populate=posts`, {
      method: "GET",
      headers: {
        "content-type": "application/html",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.data.attributes.posts.data);
      });
  }, []);

  return (
    <div className="mt-5">
      {posts.map((post, index) => {
        return <PostCard post={post.attributes} key={index} />;
      })}
    </div>
  );
};

export default News;
