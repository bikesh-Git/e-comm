// A mock function to mimic making an async request for data
export function fetchAllProduct() {
  return new Promise(async (resolve) =>
    // setTimeout(() => resolve({ data: amount }), 500),
  {  const response = await fetch("http://localhost:3000/product")
    const data = await response.json()
    resolve({data})
  })
}
