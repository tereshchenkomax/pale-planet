export default async function getPosts() {
  const response = await fetch('https://bejamas.io/api/blog?category=case-studies');
  const data = await response.json();
  const posts = data?.posts;
  return posts;
}
