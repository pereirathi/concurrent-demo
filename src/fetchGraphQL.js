async function fetchGraphQL(text, variables) {
  const response = await fetch('https://api.ze.delivery/public-api', {
    method: 'POST',
    headers: {
      Authorization: '',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  })

  return response.json()
}

export default fetchGraphQL
