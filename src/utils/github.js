export const fetchPostsFromGitHub = async (folder) => {
  const GITHUB_OWNER = "YOUR_GITHUB_USERNAME";
  const GITHUB_REPO = "YOUR_REPO_NAME";
  const API_BASE = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${folder}`;

  const response = await fetch(API_BASE);
  if (!response.ok) return [];

  const data = await response.json();

  const posts = await Promise.all(
    data.map(async (item) => {
      if (item.type !== "dir") return null;

      const res = await fetch(`${API_BASE}/${item.name}`);
      const files = await res.json();
      const getFile = (name) =>
        files.find((f) => f.name === name)?.download_url;

      const [zag, post, banner, zipFile] = await Promise.all([
        fetch(getFile("zag.txt")).then((r) => r.text()),
        fetch(getFile("post.txt")).then((r) => r.text()),
        getFile("banner.png"),
        files.find((f) => f.name.endsWith(".zip"))?.download_url,
      ]);

      return {
        id: item.name,
        title: zag.trim(),
        description: post.trim(),
        banner,
        download: zipFile,
      };
    })
  );

  return posts.filter(Boolean);
};
