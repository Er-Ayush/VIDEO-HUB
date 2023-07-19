import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi'

const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button zIndex={'overlay'} pos={'fixed'} top={'4'} left={'4'} colorScheme='purple' p={'0'} h={'10'} w={'10'} borderRadius={'full'}>
                <BiMenuAltLeft size={'20'} onClick={onOpen} />
            </Button>
            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader textAlign={'center'} fontSize={'30'} color={'black'}> VIDEO HUB</DrawerHeader>
                    <DrawerBody>
                        <VStack >
                            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                                <Link to={'/'}>HOME</Link>
                            </Button>
                            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                                <Link to={'/videos'}>Videos</Link>
                            </Button>
                            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                                <Link to={'/videos'}>Free Videos</Link>
                            </Button>
                            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                                <Link to={'/upload'}>Upload </Link>
                            </Button>
                        </VStack>

                        <HStack position={'absolute'} bottom={'200'} left={'0'} w={'80%'} m={'30'} justifyContent={'space-evenly'}>
                            <Button onClick={onClose} variant={'solid'} colorScheme='purple'>
                                <Link to={'/login'}>Login</Link>
                            </Button>
                            <Button onClick={onClose} variant={'outline'} colorScheme='purple'>
                                <Link to={'/signup'}>Signup</Link>
                            </Button>
                        </HStack>


                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header
