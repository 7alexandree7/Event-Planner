import EventDetailsContent from '@/components/EventDetailsContent/EventDetailsContent'
import { getSession } from '@/lib/auth/server'
import React from 'react'

const EventDetails = async ({ params }: { params: Promise<{ eventid: string }> }) => {

    const { eventid } = await params
    const session = await getSession()

    return (
        <>
            <EventDetailsContent eventId={eventid} userId={session?.data?.user?.id} />
        </>
    )
}

export default EventDetails
