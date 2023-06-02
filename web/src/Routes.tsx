import { Set, Router, Route } from '@redwoodjs/router'

import { useAuth } from './auth'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import AuthPage from './pages/AuthPage/AuthPage'
import EventsPage from './pages/EventsPage/EventsPage'
import TermsAndConditionsPage from './pages/TermsAndConditions/TermsAndConditions'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={MainLayout} title="Events" titleTo="events">
        {/* <Private unauthenticated="events">
          <Route path="/new" page={EventNewEventPage} name="newEvent" />
          <Route path="/{id:Int}/edit" page={EventEditEventPage} name="editEvent" />
        </Private> */}
        {/* <Route path="/{id:Int}" page={EventEventPage} name="event" /> */}
        <Route path="/" page={EventsPage} name="events" />
      </Set>

      <Set wrap={AuthLayout} title="Authentication" titleTo="auth">
        <Route path="/auth" page={AuthPage} name="auth" />
        <Route path="/terms" page={TermsAndConditionsPage} name="termsAndConditions" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
