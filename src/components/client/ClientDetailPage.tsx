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
            setuserEvents(userEvents);
            console.log(userEvents, userDetails)
        }
    }, [])


    return (
        <div style={{ padding: "20px", minHeight: "450px" }}>
            {isUserPresent ? (
                <div>
                    {userDetails ? (
                        <div>
                            <div>
                                <span>{userDetails.name}</span>
                            </div>

                            <br />
                            <hr />
                            <br />

                            <div>
                                {
                                    userEvents.length > 0 ? (
                                        <div>
                                            {userEvents.map(item => (
                                                <div key={item.id}>
                                                    <div>{item.title}</div>
                                                    <div><span>on </span><span>{item.eventDetails.eventDate}</span></div>
                                                    <div><span>time </span><span>{item.eventDetails.eventTime}</span></div>
                                                    <div><span>duration </span><span>{item.eventDetails.eventDuration}</span></div>
                                                    <div><span>cost </span><span>{item.eventDetails.serviceFee}</span></div>
                                                    <br />
                                                    <hr />
                                                    <br />
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div>No events</div>
                                    )
                                }
                            </div>
                        </div>
                    ) : null}
                </div>
            ) : <div>user not present</div>}
        </div>
    )
}

export default ClientDetailPage