import React, { useState } from "react"
import "./details.css"
import "../funnelmapping/details.css"
import * as AiIcons from 'react-icons/ai'

export default function Form() {
  const [options, setOption] = useState([
    "Option-1",
    "Option-2",
    "Option-3",
    "Option-4",
    "Option-5"
  ])
  const [text, setText] = useState("")

  const textChange = (event) => {
    setText(event.target.value)
  }
  return (
    <>
      <div className="bg-white shadow rounded p-1  col-lg-8 col-md-10 col-sm-11">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="Dropdown">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#dropdown"
                aria-expanded="true"
                aria-controls="dropdown"
              >
                DropDown
              </button>
            </h2>
            <div
              id="dropdown"
              class="accordion-collapse collapse show"
              aria-labelledby="Dropdown"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <h2>Drag and drop</h2>
                <h2>Drag and drop</h2>
                <h2>Drag and drop</h2>
                <h2>Drag and drop</h2>
                <h2>Drag and drop</h2>
              </div>
            </div>
          </div>
          <div class="accordion-item mt-5">
            <h2 class="accordion-header" id="sendMessage">
              <button
                class="accordion-button"
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
              class="accordion-collapse collapse "
              aria-labelledby="send"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div className="">
                  <img
                    className="logo1 border rounded-circle bg-dark"
                    src=""
                    alt=""
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
                    <button className="btn btn-md btn-primary ml-1">Preview</button>
                  </div>
                </div>
              </div>
              <div className="previewNotification float-right border m-1 p-1">
                <div className="d-flex justify-content-between">
                  <img
                    src="/assets/images/team/04.jpg"
                    className="circle rounded-circle border border-primary"
                    alt=""
                  />
                  <AiIcons.AiOutlineClose />
                </div>
                <div className="pt-1">
                  <h5>CM Galaxy</h5>
                  <p>{text}</p>
                  <div className="d-flex">
                    <a href="https://cmgalaxy.com/index">cmgalaxy.com</a>
                  </div>
                </div>
                  <div className="d-flex justify-content-center mt-1">
                    <button className="btn btn-primary">Send</button>
                  </div>
              </div>
              {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
