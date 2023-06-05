import React from 'react'
import { useRouter } from "next/router";
import ClientLayout from '@/components/ClientLayout';
import Heading from '@/components/Heading';
import {BsPhone,BsCashStack} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {FaUsers} from 'react-icons/fa'
import Image from 'next/image';
import moment from 'moment'
const Book = () => {

    const router = useRouter();
    const { houseId, house, details,fromDate,toDate } = router.query;
    

   const dateFrom = moment(fromDate).format("DD-MM-YYYY")

   const startDate= moment(dateFrom).format("D")

   const dateTo = moment(toDate).format("MM-DD-YYYY")
   console.log(dateTo);
 
   const endDate = moment(dateTo).format("D")
   console.log(endDate);

  const toDateDay = moment(toDate.$d).format("D")
  const fromMonth = moment(fromDate.$d).format("MMM").toUpperCase();
  const toMonth = moment(toDate.$d).format("MMM").toUpperCase();

  

    // Parse the JSON string back to objects

    const parsedDetails = JSON.parse(details);
    const parsedHouse = JSON.parse(house)


  return (
    <ClientLayout>

      <div className='h-full bg-gray-200 -mt-2 px-4'>
        <div className=' py-8  border-b-[0.8px] border-yellow-400'>
        <Heading title="Booking Details"/>
        </div>
        <div className='grid grid-cols-3'>
        <div className='py-8  col-span-2 '>
            <div className='grid grid-cols-3 gap-y-8'>
            <div>
            <h4 className='text-lg text-green-800 font-extrabold'>FirstName</h4>
            <p>{parsedDetails.firstName}</p>
            </div>
            <div>
            <h4 className='text-lg text-green-800 font-extrabold'>LastName</h4>
            <p>{parsedDetails.lastName}</p>
            </div>
            <div>
            <h4 className='text-lg text-green-800 font-extrabold'>Contact</h4>
            <p>{parsedDetails.phoneNumber}</p>
            </div>
            <div>
            <h4 className='text-lg text-green-800 font-extrabold'>Email</h4>
            <p>{parsedDetails.email}</p>
            </div>
            <div>
            <h4 className='text-lg text-green-800 font-extrabold'>Address</h4>
            <p>{parsedDetails.address}</p>
            </div>
            <div>
            <h4 className='text-lg text-green-800 font-extrabold'>Nationality</h4>
            <p>{parsedDetails.nationality}</p>
            </div>
            <div>
            <h4 className='text-lg text-green-800 font-extrabold'>Special Requests</h4>
            <p>{parsedDetails.request}</p>
            </div>
            
            </div>

            <div className='mt-6'>
            <div>
            <h4 className='text-lg text-green-800 font-extrabold'>Arrival Time</h4>
            <p>{parsedDetails.arrival}</p>
            </div> 
            </div>

            <div className='mt-16 px-4 mr-28 '>
           
            <h4 className='text-2xl pb-2 text-green-800 font-extrabold text-center border-b-[0.8px] border-yellow-400 '>Terms & Conditions</h4>
                <ul className='flex flex-col space-y-4  mt-4'>
                <li className='text-sm list-disc'>If you do not show up for your reservation and do not notify us of a cancellation, you will be charged for the full amount of the booking.</li>
                <li className='text-sm list-disc'>If you need to cancel your reservation, please do so at least 48 hours before your scheduled arrival time to receive a full refund. If you cancel within 48 hours of your scheduled arrival time, your deposit will not be refunded.</li>
                <li className='text-sm list-disc'>All rates are quoted and charged in the local currency, and currency exchange rates may apply if paying with a foreign currency.</li>
                <li className='text-sm list-disc'>Please note that additional charges may apply for any extra services or amenities requested during your stay.</li>
                <li className='text-sm list-disc'>A deposit of 50% of the total booking cost is required at the time of booking to secure your reservation.</li>
                <li className='text-sm list-disc'>We accept payment by bank deposit and MPESA We do not accept cash and personal checks.</li>
                <li className='text-sm list-disc'>Local taxes may be applied to your booking and will be included in the total price.</li>
                   <li className='text-sm list-disc'>The remaining balance of your booking must be paid upon arrival at the hotel.</li>
                    
                   
                   
                </ul>
           
            </div>

            <div className='mt-6 flex items-center space-x-4'>
                <input type="checkbox"className=''/>
                <p className='text-lg font-extrabold '>I acknowledge the payment terms and conditions.</p>
            </div>

            <div className='mt-9'>
                <h4 className='text-lg text-green-800  font-extrabold '>Support</h4>
                <div className='mt-3 flex items-center space-x-20'>
                    <div className='flex items-center space-x-3'>
                        <p className='text-3xl'><BsPhone/></p>
                        <p>+245798024710</p>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <p className='text-3xl'><AiOutlineMail/></p>
                        <p>silentpalmsvilla@gmail.com</p>
                    </div>

                </div>
            </div>
           

            
            
        </div>
        <div className='px-4 py-8'>
           <div>
            <div className='relative h-[280px] w-[350px] mx-auto'>
                <Image src={parsedHouse.imageUrl} fill className="box object-cover"/>
            </div>
            <div className='my-6'>
                <p className='text-md text-green-800 font-extrabold text-center'>{parsedHouse.title}</p>
            </div>
            <div className='grid grid-cols-2 gap-2  px-5 mb-2 w-[300px] mx-auto'>
                <div className='bg-green-400 h-[100px] flex justify-center items-center flex-col'>
                    <p className='text-5xl text-white font-bold'>{startDate}</p>
                    <p className='text-2xl text-white'>{fromMonth}</p>
                </div>
                <div className='bg-green-400 h-[100px] flex justify-center items-center flex-col'>
                    <p className='text-5xl text-white font-bold'>{endDate}</p>
                    <p className='text-2xl text-white'>{toMonth}</p>
                </div>
                
            </div>
            <div className='grid grid-cols-2 gap-2 px-5 w-[300px] mx-auto'>
                <div className='bg-green-400 h-[100px] flex justify-center items-center flex-col'>
                    <p className='text-5xl text-white font-bold'><FaUsers/></p>
                    <p className='text-2xl text-white'>4 Guests</p>
                </div>
                <div className='bg-green-400 h-[100px] flex justify-center items-center flex-col'>
                    <p className='text-5xl text-white font-bold'><BsCashStack/></p>
                    <p className='text-2xl text-white'>5000</p>
                </div>
                
            </div>
            <div className='my-6 w-[300px] mx-auto text-center'>
                <p className='px-4'>You are required to pay an initial deposit of KES 2500 or a full payment of KES 5000 via lia na mpesa paybill no below then click confirm payment.</p>
                <div className='mt-6'>
                    <p className='text-lg'>TILL</p>
                    <p className='text-3xl font-bold'>4098459</p>
                </div>
                <div className='mt-4'>
                    <p className='text-lg'>ACCOUNT</p>
                    <p className='text-xl font-semibold'>YOUR NAME</p>
                </div>
                <div className='my-7'>
            <button className='px-4 py-3 bg-green-800 text-white border-none'>CONFIRM PAYMENT</button>
            </div>
            </div>
            
            
           </div>
        </div>
        </div>
       
       
      </div>
    
      <div>

      </div>
      <div></div>
      
    </ClientLayout>
  )
}

export default Book
