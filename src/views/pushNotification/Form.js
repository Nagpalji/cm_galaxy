import React, { useEffect, useState } from "react"
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { toast, ToastContainer } from "react-toastify"

const DropDown = ({ value, onDragStart }) => {
  const { id, option } = value
  return (
    <>
      <div className="accordion" id="accordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="Dropdown">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="true" aria-controls={`${id}`} >
              {`${id}`}
            </button>
          </h2>
          <div id="dropdown" className="accordion-collapse collapse show" aria-labelledby="Dropdown" data-bs-parent="#accordion" >
            <div className="accordion-body m-0 p-0 d-flex flex-wrap justify-content-around align-items-center">
              {option?.map((val, index) => {
                return (
                  <>
                    <div key={val} id={id} onDragStart={(e) => onDragStart(e, val)} draggable className={`m-0 ml-1 mb-1 p-0 ${id}`} >
                      <span className={`btn btn-outline-primary m-0 ${index > 0}`}>{val}</span>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Form() {

  const [text, setText] = useState("")
  const [image, setImage] = useState("")
  const [title, setTitle] = useState("")
  const [tasks, setTasks] = useState({
    device:['android', 'ubuntu', 'windows', 'ios'],
    category:['tofu', 'mofu', 'bofu', 'convertion']
  })
  const [dropedItem, setDropItem] = useState([])

  const textChange = (event) => {
    setText(event.target.value)
  }

  const [modal, setModal] = useState(false)

  const onDragOver = (ev) => {
    ev.preventDefault()
  }

  const onDragStart = (ev, value) => {
    ev.dataTransfer.setData("text/plain", JSON.stringify({
          [ev.target.getAttribute('id')]:value
        }))
  }
  const onDrop = (ev, cat) => {
    const id = ev.dataTransfer.getData("text")
    const test = JSON.parse(id)
    const category = Object.keys(test)[0]
    tasks[category].splice(id, 1)
    setTasks(tasks)
    setDropItem([...dropedItem, id])
 }

 const SendNow = async () => {
  const result = dropedItem.reduce((acc, item) => {
    const obj = JSON.parse(item)
    for (const key in obj) {
      if (acc.hasOwnProperty(key)) {
        acc[key].push(obj[key])
      } else {
        acc[key] = [obj[key]]
      }
    }
    return acc
  }, {})

    fetch('https://srvr1px.cyberads.io/notificationSend/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image,
          filter: result,
          message:text,
          title
        })
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            toast.success("Message Sent ...")
          } else {
            // show an error message
          }
        })
        .catch(error => {
          // handle errors
          toast.error(error.message)
      })
  
 }

  function handleImageUpload(event) {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function() {
      const imageDataURL = reader.result
      setImage(imageDataURL)
    }
  }
  
  return (
    <>
    <ToastContainer />
      <PerfectScrollbar className='shadow bg-white rounded p-1 col-lg-3 col-md-10 col-sm-10' style={{ height: '75vh' }}>
        <DropDown value={{ id: "device", option: tasks.device }} onDragStart={onDragStart} />
        <DropDown value={{ id: "category", option: tasks.category }} onDragStart={onDragStart} />
      </PerfectScrollbar>
      <div className="bg-white shadow rounded p-1 col-lg-8 col-md-10 col-sm-11">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="Dropdown">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#dropdowns"
                aria-expanded="true"
                aria-controls="dropdowns"
              >
                Drop Here
              </button>
            </h2>
            <div
              id="dropdowns"
              className="accordion-collapse collapse show"
              aria-labelledby="Dropdown"
              data-bs-parent="#accordionExample"
              onDragOver={(e) => onDragOver(e)}
              onDrop={(e) => onDrop(e, "complete")}
            >
              <div className="accordion-body">
                {dropedItem.map((val, index) => {
                  const value = JSON.parse(val)
                  return (
                    <>
                      <div className="d-inline">
                        <span className={`btn btn-outline-primary ${index > 0 && "ml-1"}`}>{value[Object.keys(value)]}</span>
                      </div>
                    </>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="accordion-item mt-1 border">
            <h2 className="accordion-header" id="sendMessage">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#send"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Send Message
              </button>
            </h2>
            <div
              id="send"
              className="accordion-collapse collapse"
              aria-labelledby="send"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="">
                <label>Set Logo </label>
                <input type="file" className="form-control" onChange={handleImageUpload} />

                  {/* <img
                    className="border rounded-circle bg-dark"
                    src=""
                    alt=""
                    style={{ height: 50, width: 50 }}
                  /> */}
                </div>
                <div className="mb-2 mt-2">
                  <h4>Enter Title</h4>
                  <input type="text" className="form-control" placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                  <h4>Message</h4>
                  <div className="d-flex flex-column justify-content-center">
                    <textarea
                      name="Message"
                      id="Message"
                      cols="70"
                      rows="5"
                      value={text}
                      onChange={textChange}
                      placeholder="Write message..."
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-center m-1">
                    <button className="btn btn-md btn-primary ml-1" onClick={() => setModal(true)}>Preview</button>
                  </div>
                </div>
              </div>

              <Modal size='lg' isOpen={modal} toggle={() => setModal(!modal)} >
                <ModalHeader toggle={() => setModal(!modal)}>
                  Notification
                </ModalHeader>
                <ModalBody>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="border m-1 p-1" style={{ maxWidth: 330, minWidth: 330 }}>
                      <div className="d-flex">
                        <img
                          src="./okana.png"
                          className="rounded-circle border border-primary"
                          alt=""
                          style={{ height: 50, width: 50 }}
                        />
                      </div>
                      <div className="pt-1">
                        <h5>CM Galaxy</h5>
                        <p>{text}</p>
                        <div className="d-flex">
                          <a href="https://cmgalaxy.com/index">cmgalaxy.com</a>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-1">
                      <button onClick={SendNow} className="btn btn-primary">Send</button>
                    </div>
                  </div>
                </ModalBody>
              </Modal>
              {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
