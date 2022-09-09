import React from 'react'
import { Box, Button, Checkbox, Flex, Menu, MenuButton, MenuItem, MenuList, Radio, RadioGroup, Select, Stack } from "@chakra-ui/react"
import style from "./Homepage.module.css"
import { ChevronDownIcon } from '@chakra-ui/icons'

function RentOption() {
    const [value, setValue] = React.useState("fullHouse")
    return (
        <Flex alignItems="center" gap={5}>
            <RadioGroup onChange={setValue} value={value}>
                <Stack direction='row' className={style.radioBtnBox}>
                    <Radio colorScheme='green' value='fullHouse' fontSize="10px !important">Full House</Radio>
                    <Radio colorScheme='green' value='pgHostel' fontSize="10px !important">PG/Hostel</Radio>
                    <Radio colorScheme='green' value='flatmates' fontSize="10px !important">Flatmates</Radio>
                </Stack>
            </RadioGroup>

            {value === 'fullHouse' ? <Flex alignItems="center" gap={5}>
                <Menu className={style.radioBtnBox}>
                    <MenuButton gap="40px" as={Button} rightIcon={<ChevronDownIcon />} border="1px solid #e2e2e2 !important" borderRadius="0" bgColor="#fcfcfc" fontSize="12px !important" fontWeight="400">
                        Apartment Type
                    </MenuButton>
                    <MenuList className={style.menuItems}>
                        <MenuItem>
                            <Checkbox colorScheme='green' fontSize="12px !important">
                                1 RK
                            </Checkbox>
                        </MenuItem>
                        <MenuItem>
                            <Checkbox colorScheme='green' fontSize="12px !important">
                                1 BHK
                            </Checkbox>
                        </MenuItem>
                        <MenuItem>
                            <Checkbox colorScheme='green' fontSize="12px !important">
                                2 BHK
                            </Checkbox>
                        </MenuItem>
                        <MenuItem>
                            <Checkbox colorScheme='green' fontSize="12px !important">
                                3 BHK
                            </Checkbox>
                        </MenuItem>
                        <MenuItem>
                            <Checkbox colorScheme='green' fontSize="12px !important">
                                4 BHK
                            </Checkbox>
                        </MenuItem>
                        <MenuItem>
                            <Checkbox colorScheme='green' fontSize="12px !important">
                                4+ BHK
                            </Checkbox>
                        </MenuItem>
                    </MenuList>
                </Menu>

                <Select placeholder='Select option' w="150px" border="1px solid #e2e2e2" borderRadius="0" fontSize="14px">
                    <option value='immediate'>Immediate</option>
                    <option value='within15Days'>Within 15 Days</option>
                    <option value='within30Days'>Within 30 Days</option>
                    <option value='after30Days'>After 30 Days</option>
                </Select>
            </Flex> : <Flex alignItems="center" gap={5}>
                <Menu className={style.radioBtnBox}>
                    <MenuButton gap="40px" as={Button} rightIcon={<ChevronDownIcon />} border="1px solid #e2e2e2 !important" borderRadius="0" bgColor="#fcfcfc" fontSize="12px !important" fontWeight="400">
                        Tenant Type
                    </MenuButton>
                    <MenuList className={style.menuItems}>
                        <MenuItem>
                            <Checkbox colorScheme='green' fontSize="12px !important">
                                Male
                            </Checkbox>
                        </MenuItem>
                        <MenuItem>
                            <Checkbox colorScheme='green' fontSize="12px !important">
                                Female
                            </Checkbox>
                        </MenuItem>
                    </MenuList>
                </Menu>

                <Select placeholder='Room Type' w="150px" border="1px solid #e2e2e2" borderRadius="0" fontSize="14px">
                    <option value='singleRoom'>Single Room</option>
                    <option value='doubleSharing'>Double Sharing</option>
                    <option value='tripleSharing'>Triple Sharing</option>
                    <option value='fourSharing'>Four Sharing</option>
                </Select>
            </Flex>}

        </Flex>
    )
}

export default RentOption