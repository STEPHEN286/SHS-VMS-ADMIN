import { Modal } from 'antd'
import React from 'react'

export default function CustomModal({Isvisible, modalTitile, setIsvisible,  children}) {
  const handleCloseModal = () => {
    setIsvisible(false)
    }
  return (
    <Modal title={modalTitile} visible={Isvisible}  onCancel={handleCloseModal} >
        {children}
        </Modal>
  )
}
