import React from 'react'

function Css() {
  return (
    <div>
      <h2 style={{ textAlign: "center", color: "green" }}>CSS Language</h2>
      <div style={{display:"flex"}}>
      <div>
      <img
            src="https://www.techdevl.com/staff/css/img/imglogo.png"
            alt='css'
            width={250}
            height={250}
          />
      </div>
      <div>
        <dl>
          <dt>
            <b>Language</b>
          </dt>
          <dd>CSS</dd>
          <dt>
            <b>Description</b>
          </dt>
          <dd>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </dd>
        </dl>
      </div>
      </div>
     
    </div>
  )
}

export default Css