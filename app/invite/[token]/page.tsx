import InviteRsvpContent from '@/components/InviteRsvpContent/InviteRsvpContent'
import React from 'react'

type InvitePageProps = {
    params: {token: string}
    searchParams: {submitted: string}
}

const InvitePage = async ({ params, searchParams }: InvitePageProps)=> {

    const { token } = params
    const query = searchParams


  return (
    <div>
        <InviteRsvpContent token={token} submitted={query.submitted === "1"} />
    </div>
  )
}

export default InvitePage
