import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, description, publishedDate} = blogData
  return (
    <li className="item-container" key={id}>
      <div className="item-header">
        <h1 className="title">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}
export default BlogItem
