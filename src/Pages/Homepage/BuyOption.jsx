import React from 'react'
import { Box, Button, Checkbox, Flex, Menu, MenuButton, MenuItem, MenuList, Radio, RadioGroup, Select, Stack } from "@chakra-ui/react"
import style from "./Homepage.module.css"
import { ChevronDownIcon } from '@chakra-ui/icons'

function BuyOption() {
    const [value, setValue] = React.useState("fullHouse")
    return (
        <Flex alignItems="center" gap={5}>
            <RadioGroup onChange={setValue} value={value}>
                <Stack direction='row' className={style.radioBtnBox}>
                    <Radio colorScheme='green' value='fullHouse' fontSize="10px !important">Full House</Radio>
                    <Radio colorScheme='green' value='landPlot' fontSize="10px !important">Land/Plot</Radio>
                </Stack>
            </RadioGroup>

            {value === 'fullHouse' && <Flex alignItems="center" gap={5}>
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
                    <option value='Under Construction'>Under Construction</option>
                    <option value='Ready'>Ready</option>
                </Select>
                <Flex className={style.radioBtnBox} p="10px 15px" border="1px solid #e2e2e2" justifyContent="center" alignItems="center">
                    <Checkbox colorScheme='green' fontSize="12px !important">
                        New Builder Projects
                    </Checkbox>
                </Flex>
            </Flex>}

        </Flex>
    )
}

export default BuyOption