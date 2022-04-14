import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import parse from "html-react-parser";

const Desease = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:1337/api/posts/2`, {
      method: "GET",
      headers: {
        "content-type": "application/html",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.data.attributes);
        console.log("response", res.data.attributes);
        console.log(typeof posts.content);
        console.log(posts);
      });
  }, []);
  return (
    <div className="mt-5">
      <div className="mt-5">
        <h2 className="fs-3">{posts.title}</h2>
        {/* <div className="my-4 fs-6">{parse(posts.content)}</div> */}
        <p>
          Ceci est un article pour expliquer les avancées de la recherche sur la
          maladie
        </p>
        <div className="date">
          {/* <p>écrit le {post.createdAt}</p> */}
          <p>mis à jour le {posts.updatedAt}</p>
        </div>
      </div>
    </div>
  );
};

export default Desease;
