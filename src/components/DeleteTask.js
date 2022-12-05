import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    useDisclosure,
    IconButton
  } from '@chakra-ui/react'
  import { useState } from 'react';
  import React from 'react';
  import { FiTrash2 } from 'react-icons/fi'

  

  function DeleteAllTask({ deleteTaskAll }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                colorScheme='gray'
                px='8'
                h='45'
                color='gray.500'
                mt='8'
                onClick={onOpen}
                >
                eliminar todas
            </Button>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent w='90%'>
                <ModalHeader>
                 ¿De verdad quieres eliminar todas las tareas??
                </ModalHeader>
                <ModalFooter>
                <Button mr={3} onClick={onClose}>No</Button>
                <Button colorScheme='blue' onClick={() => deleteTaskAll()}>
                    Si
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
    )
  }

  function DeleteTask({ task, deleteTask}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <IconButton
            icon={<FiTrash2 />}
            isRound='true'
            onClick={onOpen}
        />

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent w='90%'>
            <ModalHeader>
            ¿Realmente quieres eliminar la tarea?
            </ModalHeader>
            <ModalBody>
                <Text>{task.body}</Text>
            </ModalBody>
            <ModalFooter>
              <Button mr={3} onClick={onClose}>No</Button>
              <Button colorScheme='blue' onClick={() => deleteTask(task.id, onClose)}>
                Si
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export { DeleteTask, DeleteAllTask }