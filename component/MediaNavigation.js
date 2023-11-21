import React from 'react'
import Link from 'next/link';

const MediaNavigation = () => {
  return (
    <>
     <ul>
                                                <li><Link href='/media'>Ad Campaigns</Link></li>
                                                <li><Link href='/'>Events</Link></li>
                                                <li><Link href=''>Press Coverage</Link></li>
                                                <li><Link href=''>Notice ads</Link></li>
                                            </ul>
    </>
  )
}
export default MediaNavigation;