import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rtt6si1m4i01z660j99u7z/master',
    // headers: {
    //     'Authorization' : 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYyODI5NTgsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNHJ0dDZzaTFtNGkwMXo2NjBqOTl1N3ovbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNTAwYmZkYjYtYTBjNi00OGI2LTg0NDgtYWMyMzgwOWY5ZjI2IiwianRpIjoiY2w0dnczeG16MXhqNzAxdW81cjcxNnU3NSJ9.JDZ-FUM1QJlQvGtQ8BciePJMWKqCwXNpZZDFPiXQfVhSU3qPPMM1LibcLUx39qn0kVeh3E7W0Z6V6CI_Xs4nKtmsW_ac0yga5iFV-56ZK3R4GrgTciXnKWwQXyQRD4xmpYyha-5zoEow2jdIJpeClUbepIMUc5O40A_UaXUYKjZEm9kj2Qtq-z49rBtq_tXQmntipRrlw1cphyw-yleHH0cPYB9RW59GYIjSLWrVGnJjzYQbG9mwhQH8J3CqRGh66mJg4xGXUqs7O4g41Ax8x859blU3sH7oTQKcb0ZIn6ZSEUKrRlhxfdDNBf6HftK9P652Za-j61jxHR_-aLywdf_PzKs36GxrUQ1CBa9DivhP20PO0oLmgJDjWzuQPw5_P7VJYrPR-QEc2bW4ZCIoggjPuGUyReQ7dYTbuqv1i9ye39_SBl7xD4_JQ6EEFAGlgzQzIhblvK9e_HxJP6MNZ9dPFzFXzU2VENMgWNJgWZ3EjEOgmLGbyfMkHYSb9qrLdjYIkMzN2J0Kwl_t4XJ1i6_X0lif-FCn6LYVQF7NwwXge7BtZK9hyUryAw3ptGfWZXK3Z2BHq2hRxSKC5f_dYAeflXXlOHz0b5Hp5l7g0h6plKxYfXVHk19FJIpHu-piJuPxo9Thvi_xo7aGRpP1BANIqVOvebfEXMV3xfIca3M'
    // },
    cache: new InMemoryCache()
})