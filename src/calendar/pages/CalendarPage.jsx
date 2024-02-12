import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, addHours, startOfWeek, getDay } from 'date-fns'
import enUs from 'date-fns/locale/en-US'

import { Navbar } from "../components/Navbar"

const locales = {
    'en-Us': enUs
}

const localizer = dateFnsLocalizer({
 format,
 parse,
 startOfWeek,
 getDay,
 locales   
})

const events = [{
    title: 'Cumple de andrea',
    notes: 'hay que celebrar',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    bgColor: '#fafafa'
}]

export const CalendarPage = ()=>{
    return(
        <>
          <Navbar/>
          <Calendar
            localizer={ localizer }
            events={ events  }
            startAccessor="start"
            style={{ height:500 }}
          />
        </>
    )
}