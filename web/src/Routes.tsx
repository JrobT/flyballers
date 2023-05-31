import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="Events" titleTo="events" buttonLabel="New Event" buttonTo="newEvent">
        <Route path="/new" page={EventNewEventPage} name="newEvent" />
        <Route path="/{id:Int}/edit" page={EventEditEventPage} name="editEvent" />
        <Route path="/{id:Int}" page={EventEventPage} name="event" />
        <Route path="/" page={EventEventsPage} name="events" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
