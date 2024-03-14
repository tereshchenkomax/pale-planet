export default async function getGame(slug) {
  const res = await fetch('https://www.casino-gorilla.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query SpecificGameQuery($slug: String!) {
          gameBy(slug: $slug) {
            iframeLink
            slug
            id
            title
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
      `,
      variables: {
        slug,
      },
    }),
  });
  const data = await res.json();

  return data?.data?.gameBy ?? {};
}
