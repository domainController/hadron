fetch("https://httpbin.org/basic-auth/user/passwd", {
  headers: new Headers({
    "Authorization": `Basic ${base64.encode(`${login}:${password}`)}`
  }),
}).then(response => {
  if (!response.ok) throw new Error(response.status);
  return response.json();
})