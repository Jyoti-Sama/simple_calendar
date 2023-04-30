import { FC, useEffect, useMemo, useState } from 'react'
import { Calendar, dateFnsLocalizer, Event, momentLocalizer } from 'react-big-calendar'
import withDragAndDrop, { withDragAndDropProps } from 'react-big-calendar/lib/addons/dragAndDrop'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import addHours from 'date-fns/addHours'
import startOfHour from 'date-fns/startOfHour'
import Modal from "react-modal";
import moment from 'moment';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import CreateEventModal from './CreateEventModal'

// custom css
import './custom.cal.css'
import ShowEventModal from './ShowEventModal'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MyModal = ({ submitHandler, modalIsOpen }): JSX.Element => {

    console.log("hello there", "general kenobi");
    return (
        <div>
            <h2> Hello </h2>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={this.afterOpenModal}
                // onRequestClose={this.closeModal}
                contentLabel="Example Modal"
            >
                <h2 /* ref={subtitle => (this.subtitle = subtitle)} */>
                    For admins/ Lectures
                </h2>
                {/* <button onClick={this.closeModal}>close</button> */}
                <div>Add lecture to calender</div>
                <form onSubmit={submitHandler}>
                    <input />

                    <input type="submit" value="Submit" />
                </form>
            </Modal>
        </div>
    );
}

//



const App: FC = () => {
    const [events, setEvents] = useState<Event[]>([
        {
            title: 'Learn cool stuff',
            start,
            end,
        },
    ]);


    const [modalIsOpen, setmodalIsOpen] = useState<boolean>(false);
    const [eventShowModalIsOpen, setEventShowModalIsOpen] = useState<boolean>(false);
    const [tempEvent, settempEvent] = useState<any>({});


    const onEventResize: withDragAndDropProps['onEventResize'] = (data: any) => {
        let ind = -1;
        for (let i = 0; i < events.length; i++) {
            if (data.event.id === events[i].id) {
                ind = i;
                break;
            }
        }
        console.log(ind)
        events[ind].start = data.start;
        events[ind].end = data.end;
    }

    const onEventDrop: withDragAndDropProps['onEventDrop'] = (data: any) => {
        let ind = -1;
        for (let i = 0; i < events.length; i++) {
            if (data.event.id === events[i].id) {
                ind = i;
                break;
            }
        }
        console.log(ind)
        events[ind].start = data.start;
        events[ind].end = data.end;
    }

    const handleSelect = (e: any) => {
        let s = new Date(e.start);
        let en = new Date(e.end);

        console.log(s)

        const temp = {
            start: e.start,
            end: e.end,
            date: `${s.getFullYear()}-${(s.getMonth()+1).toString().padStart(2, '0')}-${s.getDate()}`,
            min: s.getMinutes(),
            duration: Math.floor((en.getTime() - s.getTime()) / (1000 * 60))
        }

        settempEvent(temp);
        setmodalIsOpen(true);
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function onSubmit(payload) {

        setEvents(currentEvents => {
            const selectedEvent = {
                id: Date.now(),
                title: payload.title,
                start: payload.start,
                end: payload.end,
                eventDetails: payload
            }
            return [...currentEvents, selectedEvent]
        })

        console.log(tempEvent);
        setmodalIsOpen(false);
    }

    // TODO
    const handleSelectEvent = (e: any) => {
        console.log(e.eventDetails)
        setEventShowModalIsOpen(true)
    }

    useEffect(() => {
        const icon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#707070" fill-rule="evenodd" d="M11.333 5.333c0 .367-.3.667-.666.667A.669.669 0 0110 5.333V2.667c0-.367.3-.667.667-.667.366 0 .666.3.666.667v.666h2c.367 0 .667.3.667.667 0 .367-.3.667-.667.667h-2v.666zm-8.666-.666A.669.669 0 012 4c0-.367.3-.667.667-.667h6v1.334h-6zm0 8A.669.669 0 012 12c0-.367.3-.667.667-.667H6v1.334H2.667zm6 .666v-.666h4.666c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667H8.667v-.666c0-.367-.3-.667-.667-.667-.367 0-.667.3-.667.667v2.666c0 .367.3.667.667.667.367 0 .667-.3.667-.667zm-4-6v-.666c0-.367.3-.667.666-.667C5.7 6 6 6.3 6 6.667v2.666C6 9.7 5.7 10 5.333 10a.669.669 0 01-.666-.667v-.666h-2A.669.669 0 012 8c0-.367.3-.667.667-.667h2zM14 8c0-.367-.3-.667-.667-.667h-6v1.334h6c.367 0 .667-.3.667-.667z" clip-rule="evenodd"></path></svg>';
        const head = document.querySelector('.rbc-toolbar');

        if (head?.children.length == 3) {
            const avail = document.createElement('div');
            avail.innerHTML = '<button>' + icon + '</button>';
            head.appendChild(avail);
        }

        if (head?.children.length == 4) {
            const avail = document.createElement('div');
            avail.innerHTML = '<button>Availability</button>';
            head.appendChild(avail);
        }


    }, [])

    const { defaultDate, scrollToTime } = useMemo(
        () => ({
            defaultDate: new Date(2015, 3, 12),
            scrollToTime: new Date(1970, 1, 1, 6),
        }),
        []
    )

    const closeCreateEventModal = () => {
        setmodalIsOpen(false);
    }

    const closeEventShowModal = () => {
        setEventShowModalIsOpen(false);
    }

    const blockedEvents = [
        {
            start: new Date('2023-05-01T13:00:00'),
            end: new Date('2023-05-01T14:00:00'),
        },
        {
            start: new Date('2023-05-02T10:00:00'),
            end: new Date('2023-05-02T12:00:00'),
        },
        // add more blocked slots as needed
    ];

    const eventPropGetter = (event, start, end, isSelected) => {
        if (event.background) {
            return {
                style: {
                    backgroundColor: 'red',
                    opacity: 0.1,
                    pointerEvents: 'none',
                    color: "green"
                },
            };
        }
    };


    return (
        <div>
            <DnDCalendar
                selectable={true}
                onSelectSlot={handleSelect}
                events={events}
                localizer={localizer}
                onEventDrop={onEventDrop}
                onEventResize={onEventResize}
                onSelectEvent={handleSelectEvent}

                onSelect={(e) => console.log(e)}

                scrollToTime={scrollToTime}

                min={moment().hour(7).minute(0).toDate()}
                max={moment().hour(23).minute(59).toDate()}
                defaultView='week'
                views={['day', 'week', 'month']}

                backgroundEvents={blockedEvents}
                eventPropGetter={eventPropGetter}

                step={15}
                timeslots={4}

                messages={messages}

                // resizable
                style={{ height: 'calc(100vh - 90px)' }}

            // components={{ toolbar: CustomToolbar }}
            />

            <hr style={{ opacity: "0.5" }} />

            <footer
                style={{
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 0 0 20px",
                    fontSize: "11px",
                    opacity: 0.5
                }}
            >
                © 2023 Simple Calendar · Terms · Privacy & Security · Support · Licensed Content
            </footer>

            {<CreateEventModal
                submitHandler={onSubmit}
                isOpen={modalIsOpen}
                onClose={closeCreateEventModal}
                temEvent={tempEvent}
            />}

            {<ShowEventModal
                submitHandler={onSubmit}
                isOpen={eventShowModalIsOpen}
                onClose={closeEventShowModal}
                temEvent={tempEvent}
            />}


        </div>
    )
}

const locales = {
    'en-US': enUS,
}
const endOfHour = (date: Date): Date => addHours(startOfHour(date), 1)
const now = new Date()
const start = endOfHour(now)
const end = addHours(start, 2)
// The types here are `object`. Strongly consider making them better as removing `locales` caused a fatal error
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})

const messages = {
    today: "Today",
    previous: "<",
    next: ">",
};

// const localizer = momentLocalizer(moment);

localizer.formats.timeGutterFormat = (date, culture, localizer) => localizer.format(date, "h a", culture);
// localizer.formats.dayHeaderFormat = (date, culture, localizer) => localizer.format(date, "d", culture) +'\n'+ localizer.format(date, "ddd", culture)
// localizer.formats.dayHeaderFormat = (date, culture, localizer) => {
//     return (
//         <div>
//             <div>{localizer.format(date, "d", culture)}</div>
//             <div>{localizer.format(date, "ddd", culture)}</div>
//         </div>
//     );
// };

const DnDCalendar = withDragAndDrop(Calendar)


function CalendarCom() {
    return (
        <div>
            <App />
        </div>
    )
}

export default CalendarCom