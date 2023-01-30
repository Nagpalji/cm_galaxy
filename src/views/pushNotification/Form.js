import React, { useState } from "react"
import "../funnelmapping/details.css"
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'

const DropDown = ({ value, onDragStart }) => {
  const { id, option } = value
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="Dropdown">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${id}`}
              aria-expanded="true"
              aria-controls={`${id}`}
            >
              {`${id}`}
            </button>
          </h2>
          <div
            id="dropdown"
            className="accordion-collapse collapse show"
            aria-labelledby="Dropdown"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {option.map((val, index) => {
                return (
                  <>
                    <div key={val}
                      onDragStart={(e) => onDragStart(e, val)}
                      draggable
                      className=""
                    >
                      <span className={`btn btn-outline-primary ${index > 0 && "mt-1"}`}>{val}</span>
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
  const [tasks, setTasks] = useState(['android', 'ios', 'window', 'ubuntu'])
  const [dropedItem, setDropItem] = useState([])

  const textChange = (event) => {
    setText(event.target.value)
  }

  const [modal, setModal] = useState(false)
  const onDragOver = (ev) => {
    ev.preventDefault()
  }

  const onDragStart = (ev, value) => {
    ev.dataTransfer.setData("text/plain", value)
  }
  const onDrop = (ev, cat) => {
    const id = ev.dataTransfer.getData("text")
    const filteredTask = tasks.filter((item) => !id.includes(item))
    setTasks(filteredTask)
    setDropItem([...dropedItem, id])
  }

  return (
    <>
      <PerfectScrollbar className='shadow bg-white rounded p-1 col-lg-3 col-md-10 col-sm-10' style={{ height: '75vh' }}>
        <DropDown value={{ id: "device", option: tasks }} onDragStart={onDragStart} />
        <DropDown value={{ id: "os", option: tasks }} onDragStart={onDragStart} />
      </PerfectScrollbar>
      <div className="bg-white shadow rounded p-1 col-lg-8 col-md-10 col-sm-11">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="Dropdown">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#dropdown"
                aria-expanded="true"
                aria-controls="dropdown"
              >
                Drop Here
              </button>
            </h2>
            <div
              id="dropdown"
              className="accordion-collapse collapse show"
              aria-labelledby="Dropdown"
              data-bs-parent="#accordionExample"
              onDragOver={(e) => onDragOver(e)}
              onDrop={(e) => onDrop(e, "complete")}
            >
              <div className="accordion-body">
                {dropedItem.map((val, index) => {
                  return (
                    <>
                      <div className="d-inline">
                        <span className={`btn btn-outline-primary ${index > 0 && "ml-1"}`}>{val}</span>
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
                  <img
                    className="border rounded-circle bg-dark"
                    src=""
                    alt=""
                    style={{ height: 50, width: 50 }}
                  />
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
                          className="circle rounded-circle border border-primary"
                          alt=""
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
                      <button className="btn btn-primary">Send</button>
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
