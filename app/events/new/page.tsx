import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormField, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import createEventAction from '@/lib/actions/events'
import Link from 'next/link'
import React from 'react'

const NewEventPage = () => {
  return (
    <div className='mx-auto w-full max-w-2xl'>
      <Card>
        <CardHeader>
          <CardTitle>Create Event</CardTitle>
        </CardHeader>
        <CardContent>
          <Form action={createEventAction}>
            <FormField>
              <Label htmlFor='title'>Title</Label>
              <Input id="title" name='title' required placeholder='Game night' />
            </FormField>
            <FormField>
              <Label htmlFor='description'>Description</Label>
              <Textarea id="description" name='description' placeholder='Join us for an evening of fun!' />
            </FormField>
            <FormField>
              <Label htmlFor='location'>Location</Label>
              <Input id="location" name='location' required placeholder='123 Main Street' />
            </FormField>
            <FormField>
              <Label htmlFor='eventDate'>Date and time</Label>
              <Input id="eventDate" name='eventDate' type='datetime-local' required />
              <FormMessage>Opitional, you can set this later.</FormMessage>
            </FormField>

            <div className='flex items-center gap-3'>
              <Button type='submit'>Create Event</Button>
              <Button variant={"outline"} type='button' asChild><Link href='/dashboard'>Cancel</Link></Button>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default NewEventPage
