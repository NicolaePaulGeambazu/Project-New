// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const data = {
  main: {
    title: "Ecommerce Website Builder ",
    description: "Create a site, sell your product, get paid",
    age: "cutu",
  }
}

export default (req, res) => {
  // connect to database, later on
  res.status(200).json(data)
}
