import React, { useState, useEffect } from 'react';
import { Box, Flex, Image, Badge, Heading } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { get_mybooking } from '../api/farm.api';
import BookingComponent from '../components/farm/BookingComponent';

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const fetchMyBookings = async () => {
      const data = await get_mybooking();
      setBookings(data.data);
    };
    fetchMyBookings();
  }, []);

  return (
    <>
      <Heading as="h2" size="xl" p={'25px 0px'}>
        Your Bookings
      </Heading>
      {bookings.map((booking, index) => {
        return <BookingComponent key={index} booking={booking} />;
      })}
    </>
  );
};

export default MyBooking;
