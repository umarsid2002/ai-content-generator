import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import React from 'react'

const UsageTrack = () => {

    // const {user} = useUser()
    // console.log(user?.primaryEmailAddress?.emailAddress)

  return (
    <div className='m-5'>
        <div className='bg-primary text-white p-3 rounded-lg'>
            <h2 className='font-medium'>Credits</h2>
            <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                <div className='h-2 bg-white rounded-full'
                style={{
                    width:'35%'
                }}>
                    
                </div>
            </div>
            <h2 className='text-sm mt-2'>350/10,000 Credits Used</h2>
        </div>
        <Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button>
    </div>
  )
}

export default UsageTrack
