import React from 'react'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Form } from '../ui/form'
import { FormField } from '../ui/form'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

interface InviteRsvpContentProps {
    token: string
    submitted: string | boolean
}

const InviteRsvpContent = async ({ token, submitted }: InviteRsvpContentProps) => {

    const row = await prisma.eventInvite.findFirst({
        where: { token },
        include: {
            event: {
                select: {
                    id: true,
                    title: true,
                    description: true,
                    location: true,
                    eventDate: true,
                }
            }
        }
    })

    if (!row) {
        notFound()
    }

    const e = row.event
    const event = {
        title: e.title,
        description: e.description,
        location: e.location,
        eventDate: e.eventDate ? new Date(e.eventDate).toISOString() : null,
    }

    return (
        <div className='mx-auto w-full max-w-2xl'>
            <Card>
                <CardHeader className='space-y-3'>
                    <Badge variant={"secondary"} className='w-fit'>RSVP</Badge>
                    <CardTitle className=''>{event.title}</CardTitle>
                    <p className='text-sm text-muted-foreground'>
                        {event.eventDate
                            ? new Date(event.eventDate).toLocaleString()
                            : "No date set"}
                        {event.location ? ` - ${event.location}` : ""}
                    </p>
                    {event.description ? (
                        <p className='text-sm text-muted-foreground'>
                            {event.description}
                        </p>
                    ): null}
                </CardHeader>
                <CardContent>
                    {submitted ? (
                        <p className='mb-4 rounded-md border border-accent/50 bg-accent/15 p-3 text-sm text-[#e9dbff]'>
                            Thanks. Your RSVP has been recorded or updated.
                        </p>
                    ): null}
                    <Form>
                        <FormField>
                            <Label htmlFor='name'>Name</Label>
                            <Input id="name" name='name' required placeholder='Your name' />
                        </FormField>
                        <FormField>
                            <Label htmlFor='email'>Email</Label>
                            <Input id="email" name='email' type='email' required placeholder='example@example123.com' />
                        </FormField>
                        <FormField>
                            <Label htmlFor='status'>Attendance</Label>
                            <select
                                id="status"
                                name="status"
                                required
                                defaultValue={"going"}
                                className='flex h-10 w-full rounded-md border border-border bg-[#16161f] px-3'
                            >
                                <option value="going">Going</option>
                                <option value="maybe">Maybe</option>
                                <option value="not_going">Not Going</option>
                            </select>
                        </FormField>
                        <Button type="submit">Submit RSVP</Button>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default InviteRsvpContent
