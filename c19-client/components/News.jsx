import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const News = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:1337/api/categories/1?fields=title&populate=posts`,
      {
        method: "GET",
        headers: {
          "content-type": "application/html",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.data.attributes.posts.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="mt-5">
      {posts.map((post, index) => {
        return <PostCard post={post} key={index} />;
      })}
    </div>
  );
};

export default News;
