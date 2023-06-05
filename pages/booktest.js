import { useRouter } from 'next/router';
import React from 'react'
import moment from 'moment'

const Booktest = () => {

    const router = useRouter()

    const { fromDate,toDate } = router.query;
    console.log(moment(fromDate).format("MMM").toUpperCase());
  return (
    <div>
      <p>{fromDate}</p>
      <p>{toDate}</p>
    </div>
  )
}

export default Booktest
