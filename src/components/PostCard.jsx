const PostCard = ({ post }) => (
  <div className="bg-white text-black rounded-2xl p-3 mb-4">
    <img
      src={post.banner}
      alt="Banner"
      className="w-full h-48 object-cover rounded-xl mb-2"
    />
    <h2 className="text-xl font-bold mb-1">{post.title}</h2>
    <p className="mb-2">{post.description}</p>
    <a
      href={post.download}
      download
      className="block bg-black text-white text-center rounded-xl py-2"
    >
      Скачать
    </a>
  </div>
);

export default PostCard;
