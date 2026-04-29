import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'

interface Props {
    userId: string | undefined
}


const DashboardContent = async ({ userId }: Props) => {

    const rows = await prisma.event.findMany({
        where: { ownerUserId: userId },
        orderBy: { createdAt: "desc" },
        select: {
            id: true,
            title: true,
            eventDate: true,
            location: true,
            // rsvps: { select: { status: true }},
        }
    })

    const events = rows.map((row) => ({
        id: row.id,
        title: row.title,
        eventDate: row.eventDate ? row.eventDate.toISOString() : null,
        location: row.location,
    }))

    return (
        <div className='flex flex-1 flex-col gap-6'>
            <div className='flex flex-wrap items-center justify-between gap-3'>
                <div>
                    <h1 className='text-2xl font-semibold tracking-tight'>Your Events</h1>
                    <p className='text-sm text-muted-foreground'>Track attendee responses and manage invite links.</p>
                </div>

                <Button asChild>
                    <Link href={"/events/new"}>Create Event</Link>
                </Button>
            </div>

            {events.length === 0 ? (
                <Card>
                    <CardHeader>
                        <CardTitle>No events yet</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className='text-sm text-muted-foreground'>Create your first event to start collecting RSVPs</p>
                    </CardContent>
                </Card>
            ) : (
                <div className='grid md:grid-cols-2 gap-6'>
                    {events.map((event) => (
                        <Card key={event.id} className=''>
                            <CardHeader className='space-y-3'>
                                <div className='flex justify-between gap-2 items-center'>
                                    <CardTitle className='text-lg'>{event.title}</CardTitle>
                                    <Button asChild  size={"sm"}>
                                        <Link href={`/events/${event.id}`}>Open</Link>
                                    </Button>
                                </div>
                                <div className='flex flex-wrap gap-1 text-xs'>
                                    <Badge variant="secondary"/>
                                    <Badge variant="secondary" />
                                    <Badge variant="secondary" />
                                </div>
                                <p>
                                    {event.eventDate ? new Date(event.eventDate).toLocaleDateString() : "No date selected"}
                                    {event.location ? ` - ${event.location}` : ""}

                                </p>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DashboardContent
