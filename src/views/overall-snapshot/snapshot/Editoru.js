import { Editor } from 'react-draft-wysiwyg'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const Editoru = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Key Highlights</CardTitle>
      </CardHeader>
      <CardBody>
        <Editor />
      </CardBody>
    </Card>
  )
}

export default Editoru
