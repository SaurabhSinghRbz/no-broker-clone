import React from 'react'
import Detail from './detailshow'
import DetailAdd from './detailAdd'
import { Box } from "@chakra-ui/react"

export default function Rent() {
  return (
    <Box bg='#004daa'>
        <Detail/>
        <DetailAdd/>
    </Box>
  )
}
