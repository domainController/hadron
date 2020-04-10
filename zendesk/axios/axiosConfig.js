const origin = axios.create({
  baseURL: 'https://admintestpatrice.zendesk.com/api/v2/incrementalice',
  headers: {'Authorization': `Basic ${token}`}
});

origin.get('/path') // https://stackoverflow.com/questions/40988238/sending-the-bearer-token-with-axios
.then(response => {
    return response.data;
})