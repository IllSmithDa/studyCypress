import { Box, Link } from '@mui/material';
import React from 'react';
import "./Footer.scss"

export default function Footer() {
  return (
    <Box style={{ padding: "50px" }}>
      <Box component="section" className="footer">
        <Box component="ul">
          <Box component="li">
            <Link href='#'><h2>Member Ship</h2></Link>
          </Box>
          <Box component="li">
            <Link href='#'>Join now</Link>
          </Box>
          <Box component="li">
            <Link href='#'>Member Priveleges</Link>
          </Box>
          <Box component="li">
            <Link href='#'>Executive Membership</Link>
          </Box>
          <Box component="li">
            <Link href='#'>Sign In or Register</Link>
          </Box>
        </Box>
        <Box component="ul">
          <Box component="li">
            <Link href='#'><h2>Customer Service</h2></Link>
          </Box>
          <Box component="li">
            <Link href='#'>Order Status</Link>
          </Box>
          <Box component="li">
            <Link href='#'>Order Status</Link>
          </Box>
          <Box component="li">
            <Link href='#'>Rebates</Link>
          </Box>
          <Box component="li">
            <Link href='#'>Shipping</Link>
          </Box>
          <Box component="li">
            <Link href='#'>Returns Policy</Link>
          </Box>
        </Box>
        <Box component="ul">
          <Box component="li">
            <Link href='#'><h2>Vendors & Suppliers</h2></Link>
          </Box>
          <Box component="li">
            <Link href='#'>Supply Chain Disclosure</Link>
          </Box>
          <Box component="li">
            <Link href='#'>Ethics Hotline for Suppliers</Link>
          </Box>
          <Box component="li">
            <Link href='#'>Supplier Diversity</Link>
          </Box>
        </Box>
        <Box component="ul">
          <Box component="li">
            <Link href='#'><h2>Locations & Services</h2></Link>
          </Box>
          <Box component="li">
            <Link href='#'>Find a Warehouse</Link>
          </Box>
          <Box component="li">
            <Link href='#'>Locations Coming Soon</Link>
          </Box>
          <Box component="li">
            <Link href='#'>Hours and Holiday Closures</Link>
          </Box>
          <Box component="li">
            <Link href='#'>Special Events</Link>
          </Box>
        </Box>
      </Box>
      <Box component="nav" className='footer-links'>
        <Link href='#'>Site map</Link>
        <Link href='#'>Terms and Conditions</Link>
        <Link href='#'>Your Privacy Rights</Link>
        <Link href='#'>CA Notice</Link>
        <Link href='#'>Cookie Settins</Link>
        <Link href='#'>Feedback</Link>
      </Box>
    </Box>
  )
}