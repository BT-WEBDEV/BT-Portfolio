const SKILLS_GRAPHQL_FIELDS = `{
        id
        slug
        name
        description
        usage
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
      }`


async function fetchGraphQL(query, preview = false) {
    console.log ('can i fetch?')
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${
            preview
                ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
                : process.env.CONTENTFUL_ACCESS_TOKEN
            }`,
        },
        body: JSON.stringify({ query }),
        }
    ).then((response) => response.json())
}


function extractPostEntries(fetchResponse) {
    console.log ('im fetching')
    return fetchResponse?.data?.skillsCollection?.items 
}


export async function getAllSkillsForHome(preview) {
    const entries = await fetchGraphQL(
        `query {
        skillsCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}) {
            items {
            ${SKILLS_GRAPHQL_FIELDS}
            }
        }
        }`,
        preview
    )
    return extractPostEntries(entries)
}