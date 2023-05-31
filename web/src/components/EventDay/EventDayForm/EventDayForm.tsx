import type { EditEventDayById, UpdateEventDayInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  DatetimeLocalField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormEventDay = NonNullable<EditEventDayById['eventDay']>

interface EventDayFormProps {
  eventDay?: EditEventDayById['eventDay']
  onSave: (data: UpdateEventDayInput, id?: FormEventDay['id']) => void
  error: RWGqlError
  loading: boolean
}

const EventDayForm = (props: EventDayFormProps) => {
  const onSubmit = (data: FormEventDay) => {
    props.onSave(data, props?.eventDay?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormEventDay> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date
        </Label>

        <DatetimeLocalField
          name="date"
          defaultValue={formatDatetime(props.eventDay?.date)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="date" className="rw-field-error" />

        <Label
          name="eventId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Event id
        </Label>

        <NumberField
          name="eventId"
          defaultValue={props.eventDay?.eventId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="eventId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default EventDayForm
