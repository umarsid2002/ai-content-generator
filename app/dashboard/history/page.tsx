"use client"
import React, { useEffect } from 'react'
import * as schema from '../../../utils/schema'
import { drizzle } from 'drizzle-orm/neon-http';
import { AIOutput } from '../../../utils/schema';
import { db } from '@/utils/db';

const History = () => {
    
    const result = db.select().from(AIOutput)
    useEffect(()=>{
    },[])

  return (
    <div className='bg-white p-5 m-4'>
        <h2 className='font-bold text-2xl'>History</h2>
        <p>Search your previously generated Ai content</p>
        <div className="grid grid-cols-5">

        </div>



    </div>
  )
}

export default History
