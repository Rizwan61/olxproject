import React from 'react'

function Modal({handleCancel,handleOk,confirmLoading,modalText}) {
    
        
    
  return (
    <>
    
    <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal></>
  )
}

export default Modal