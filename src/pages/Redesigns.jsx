import { useEffect, useState } from "react";
import { fetchPostsFromGitHub } from "../utils/github";
import PostCard from "../components/PostCard";

const Redesigns = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchPostsFromGitHub("redesigns").then(setPosts);
  }, []);

  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        className="w-full mb-4 p-2 rounded-xl bg-gray-700 text-white placeholder-white"
        placeholder="Поиск редизайна..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filtered.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Redesigns;
