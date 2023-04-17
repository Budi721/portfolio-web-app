export default async function handler(req, res) {
  const {email, status} = req.body
  const apiKey = process.env.MAILCHIMP_API_KEY
  const baseUrl = process.env.MAILCHIMP_BASE_URL
  const listId = process.env.MAILCHIMP_LIST_ID

  const response = await fetch(baseUrl + '/lists/' + listId + '/members', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + 'auth ' + apiKey,
    },
    body: JSON.stringify({
      "email_address": email,
      "status": status
    }),
  });

  res.status(200).json(await response.json())
}