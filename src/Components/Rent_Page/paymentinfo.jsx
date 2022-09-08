import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Payment from './payment';

export default function PaymentDetail() {
  return (
    <div>
        <Routes>
            <Route path="/rent/page" element={<Payment/>}>
            </Route>
        </Routes>
    </div>
  )
}
