import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import clientData from '../../assets/clients.json'

function ClientDetailPage() {
    const { client_id } = useParams();
    const [userEvents, setuserEvents] = useState([])
    const [isUserPresent, setisUserPresent] = useState(true)
    const [userDetails, setuserDetails] = useState(null)


    useEffect(() => {
        // console

        let index = -1;
        for (let i = 0; i < clientData.length; i++) {
            if (client_id == clientData[i].client_id) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            setisUserPresent(false);
            return;
        }

        setuserDetails(clientData[index]);

        const evs = localStorage.getItem('all-events');
        if (evs) {
            const allEvents = JSON.parse(evs);
            console.log(allEvents)
            const userEvents = allEvents.filter(events => {
                if (events?.eventDetails && client_id === events.eventDetails.client_id && events.eventDetails.selectedOption === 'client') return true;
                else return false;
            });

            userEvents.reverse();

            setuserEvents(userEvents);
            console.log(userEvents, userDetails)
        }
    }, [])


    return (
        <div style={{ padding: "20px", minHeight: "450px" }}>
            {isUserPresent ? (
                <div>

                    <div>
                        {userDetails ? (
                            <div>
                                <div>
                                    <span
                                        style={{
                                            fontSize: "20px", fontWeight: "500"
                                        }}
                                    >
                                        {userDetails.name}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "13px", fontWeight: "500", margin: "0 0 0 20px", padding: "1px 5px", background: "#F0F0F0", borderRadius: "8px", opacity: "0.8"
                                        }}
                                    >
                                        {userDetails.isAdult ? "Adult" : "kiddo"}
                                    </span>
                                </div>

                                <div>
                                    <div
                                        style={{
                                            fontSize: "14px", fontWeight: "500", margin: "20px 0 5px 0", color: "#1371c8"
                                        }}
                                    >
                                        Overview</div>
                                </div>

                                <hr style={{ width: "630px", opacity: "0.3" }} />
                                <br />

                                <div>
                                    {
                                        userEvents.length > 0 ? (
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <div>
                                                    {userEvents.map((item, index) => {
                                                        let d = new Date(item.eventDetails.start);
                                                        var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

                                                        const formatter = (temp) => {
                                                            let date = new Date(temp);
                                                            var hours = date.getHours();
                                                            var mins: any = date.getMinutes();
                                                            var ampm = hours >= 12 ? 'pm' : 'am';
                                                            hours = hours % 12;
                                                            hours = hours ? hours : 12; // the hour '0' should be '12'
                                                            mins = mins < 10 ? '0' + mins : mins;
                                                            return hours + ':' + mins + ' ' + ampm;
                                                        }

                                                        return (
                                                            <div
                                                                key={item.id}
                                                            >

                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                        // alignItems: "center",
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            fontSize: "13px", fontWeight: "500", margin: "0 20px 0 0px", height: "23px", padding: "1px 5px", background: "#F0F0F0", borderRadius: "4px", opacity: "0.7"
                                                                        }}
                                                                    >
                                                                        <span>{mS[d.getMonth()]} </span><span>{d.getDate()}</span>
                                                                    </div>

                                                                    <div>
                                                                        <div
                                                                            style={{
                                                                                display: "flex",
                                                                                alignItems: "center",
                                                                                justifyContent: "space-between",
                                                                                width: "560px",
                                                                                fontSize: "14px",
                                                                                fontWeight: "500"
                                                                            }}
                                                                        >
                                                                            <div
                                                                                style={{
                                                                                    fontSize: "16px", fontWeight: "600"
                                                                                }}
                                                                            >
                                                                                <span>Appoinment </span><span>#{userEvents.length - index}</span>
                                                                            </div>

                                                                            <div
                                                                                style={{ opacity: "0.5" }}
                                                                            >
                                                                                <span>{formatter(item.eventDetails.start)}</span> - <span>{formatter(item.eventDetails.end)}</span>
                                                                            </div>
                                                                        </div>

                                                                        <br />
                                                                        <hr style={{ opacity: "0.2" }} />
                                                                    </div>
                                                                </div>


                                                                <br />
                                                            </div>
                                                        )
                                                    })}
                                                </div>

                                                <div
                                                    style={{ 
                                                        padding: "10px 15px",
                                                        margin: "15px",
                                                        boxShadow: "0 2px 4px rgba(0,0,0,.06)"
                                                     }}
                                                >
                                                    <div style={{
                                                        fontWeight: "500",
                                                        fontSize: "14px",
                                                        opacity: "0.8"
                                                }}>
                                                    Client info
                                                    </div>
                                                    <div style={{fontSize: "12px"}}>
                                                        <div style={{ display: "flex", margin: "10px 0 0px 0" }}>
                                                            <div style={{ opacity: "0.7", width: "70px" }}>Phone</div>
                                                            <div>
                                                                <div  style={{color: "rgb(19, 113, 200)"}}>{userDetails.number}</div>
                                                                <div>Mobile</div>
                                                            </div>
                                                        </div>

                                                        <div style={{ display: "flex" , margin: "10px 0 0px 0" }}>
                                                            <div style={{ opacity: "0.7", width: "70px" }}>Email</div>
                                                            <div>
                                                                <div style={{color: "rgb(19, 113, 200)"}}>{userDetails.email}</div>
                                                                <div>Work</div>
                                                            </div>
                                                        </div>

                                                        <div style={{ display: "flex" , margin: "10px 0 0px 0" }}>
                                                            <div style={{ opacity: "0.7", width: "70px" }}>Addr.</div>
                                                            <div>
                                                                <div>{"132 Main street"}</div>
                                                                <div>town, CA 12345</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div>No events</div>
                                        )
                                    }
                                </div>
                            </div>
                        ) : null}
                    </div>



                </div>
            ) : <div>user not present</div>}
        </div>
    )
}

export default ClientDetailPage