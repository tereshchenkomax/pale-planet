export default async function getGames() {
  const res = await fetch('https://www.casino-gorilla.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        {
          games {
            nodes {
              id
              title
              slug
              featuredImage {
                node {
                  sourceUrl
                }
              }
              seo {
                metaDesc
              }
            }
          }
        }
      `,
    }),
  });
  const data = await res.json();

  return data?.data?.games?.nodes ?? [];
}
