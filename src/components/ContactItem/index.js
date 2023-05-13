import './index.css'

const ContactItem = props => {
  const {BookDetails} = props
  const {name, url} = BookDetails

  return (
    <li className="table-row">
      <p>{name}</p>

      <img src={url} alt="any" className="image" />
    </li>
  )
}

export default ContactItem
