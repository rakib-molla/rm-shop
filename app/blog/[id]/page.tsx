
const BlogDetails = async({params}: {params: {id: string}}) => {
    const {id} = await params;
  return (
    <div>BlogDetails {id}</div>
  )
}

export default BlogDetails