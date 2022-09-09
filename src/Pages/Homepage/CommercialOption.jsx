import React from 'react'
import { Box, Button, Checkbox, Flex, Menu, MenuButton, MenuItem, MenuList, Radio, RadioGroup, Select, Stack } from "@chakra-ui/react"
import style from "./Homepage.module.css"
import { ChevronDownIcon } from '@chakra-ui/icons'

function CommercialOption() {
    const [value, setValue] = React.useState("rent")
    return (
        <Flex alignItems="center" gap={4}>
            <RadioGroup onChange={setValue} value={value}>
                <Stack direction='row' className={style.radioBtnBox}>
                    <Radio colorScheme='green' value='rent' fontSize="10px !important">Rent</Radio>
                    <Radio colorScheme='green' value='buy' fontSize="10px !important">Buy</Radio>
                </Stack>
            </RadioGroup>
            <Menu className={style.radioBtnBox}>
                <MenuButton gap="40px" as={Button} rightIcon={<ChevronDownIcon />} border="1px solid #e2e2e2 !important" borderRadius="0" bgColor="#fcfcfc" fontSize="12px !important" fontWeight="400">
                    Property Type
                </MenuButton>
                <MenuList className={style.menuItems}>
                    <MenuItem>
                        <Checkbox colorScheme='green' fontSize="12px !important">
                            Office Space
                        </Checkbox>
                    </MenuItem>
                    <MenuItem>
                        <Checkbox colorScheme='green' fontSize="12px !important">
                            Co-Working
                        </Checkbox>
                    </MenuItem>
                    <MenuItem>
                        <Checkbox colorScheme='green' fontSize="12px !important">
                            Restaurant/Cafe
                        </Checkbox>
                    </MenuItem>
                    <MenuItem>
                        <Checkbox colorScheme='green' fontSize="12px !important">
                            Shop
                        </Checkbox>
                    </MenuItem>
                    <MenuItem>
                        <Checkbox colorScheme='green' fontSize="12px !important">
                            Showroom
                        </Checkbox>
                    </MenuItem>
                    <MenuItem>
                        <Checkbox colorScheme='green' fontSize="12px !important">
                            Industrial Building
                        </Checkbox>
                    </MenuItem>
                    <MenuItem>
                        <Checkbox colorScheme='green' fontSize="12px !important">
                            Industrial Shed
                        </Checkbox>
                    </MenuItem>
                    <MenuItem>
                        <Checkbox colorScheme='green' fontSize="12px !important">
                            Gowdown/Warehouse
                        </Checkbox>
                    </MenuItem>
                    <MenuItem>
                        <Checkbox colorScheme='green' fontSize="12px !important">
                            Other Business
                        </Checkbox>
                    </MenuItem>
                </MenuList>
            </Menu>

        </Flex>
    )
}

export default CommercialOption