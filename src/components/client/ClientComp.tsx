import react, { useState, useEffect } from 'react'
import clientData from '../../assets/clients.json'
import { Link } from 'react-router-dom';

function ClientComp() {
  const [clients, setclients] = useState([]);
  const [isMangeClicked, setisMangeClicked] = useState(false);
  useEffect(() => {
    setclients(clientData);
  }, [])

  return (
    <div
      style={{
        padding: "20px 25px"
      }}
    >
      <div>
        <div
          style={{
            fontSize: "20px",
            fontWeight: "500"
          }}
        >
          Clients and contacts
        </div>
        <div
          style={{
            fontSize: "12px",
            margin: "5px 0",
            opacity: "0.9"
          }}
        >
          Total clients: {clients.length}
        </div>
        <div
          style={{
            fontSize: "13px",
            margin: "25px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <div>
              <label>
                <input
                  type="text"
                  placeholder='Search'
                  style={{
                    padding: "6px 5px 6px 30px",
                    border: "1px solid #333",
                    borderRadius: "4px"
                  }}
                />
              </label>
            </div>
            <div
              style={{
                margin: "0 0  0 20px",
                position: "relative"
              }}
            >
              <button
                style={{
                  padding: "5px 5px 5px 25px",
                  fontWeight: "600",
                  border: "none",
                  background: "none",
                  fontSize: "13px",
                  opacity: "0.7"
                }}
              >
                Clients
              </button>
              <div
                style={{
                  position: "absolute",
                  top: "3px",
                  left: "5px"
                }}
              >H</div>
            </div>
          </div>
          <div>
            <label>
              <select
                // value={}
                // onChange={}
                style={{
                  padding: "8px 15px 8px 4px",
                  background: "#F2F2F2",
                  border: "none",
                  opacity: "0.7",
                  fontSize: "14px"
                }}
              >
                <option value="last name">Sort: first name</option>
                <option value="first name">Sort: last name</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "200px 120px 260px 240px 50px",
            gridGap: "10px",
            margin: "0 0 5px 0",
            opacity: "0.8",
            fontSize: "12px"
          }}
        >
          <div>Name</div>
          <div></div>
          <div>Contact info</div>
          <div>Relationship</div>
          <div></div>
        </div>

        <hr style={{ opacity: 0.2 }} />

        <div>
          {
            clients.map(item => (
              <>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "200px 120px 260px 240px 50px",
                    gridGap: "10px",
                    padding: "20px 0 20px 0",
                    textDecoration: "none"
                  }}
                >
                  <Link to={"/client/"+item.client_id}>
                    <div
                      style={{
                        color: "#1371c8",
                        fontSize: "15px",
                        fontWeight: "500",
                        textDecoration: "none"
                      }}
                    >
                      {item.name}
                    </div>
                  </Link>

                  <div>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        background: "#F2F2F2",
                        padding: "2px 6px",
                        borderRadius: "10px"
                      }}
                    >
                      {item.isAdult ? "Adult" : "kiddo"}
                    </span>
                  </div>
                  <div>
                    <div>
                      <span>{item.number}</span>
                      <span style={{ margin: "0 0 0 10px", opacity: 0.8 }}>Mobile</span>
                    </div>
                    <div style={{ margin: "10px 0 0 0" }}>
                      <span>{item.email}</span>
                      <span style={{ margin: "0 0 0 10px", opacity: 0.8 }}>Work</span>
                    </div>
                  </div>
                  <div>{item.relation}</div>
                  <div>
                    <button
                      onClick={() => setisMangeClicked(!isMangeClicked)}
                      style={{
                        border: "none",
                        background: "none",
                        opacity: 0.8
                      }}
                    >
                      Manage
                    </button>
                  </div>
                </div>
                <hr style={{ opacity: 0.2 }} />
              </>

            ))
          }
        </div >

        {/* {
          isMangeClicked ? (
            <label>
              <select
                // value={}
                // onChange={}
                style={{
                  padding: "0",
                  background: "none",
                  border: "none",
                  opacity: "0.7"
                }}
              >
                <option value="last name">View Client</option>
                <option value="last name">Edit Client info</option>
                <option value="last name">Marge with duplicates</option>
                <option value="last name">Add this Client to a Couple</option>
                <option value="last name">Make inactive</option>
              </select>
            </label>
          ) : null
        } */}
      </div>
    </div>
  )
}

export default ClientComp