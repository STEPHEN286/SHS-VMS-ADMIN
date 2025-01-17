import React, { useState } from 'react'
import Table from '../../ui/Table'
import { Button,  } from 'antd';
import { BiPlus } from 'react-icons/bi';
import CustomModal from '../../ui/Modal';
import RegisterCandidateForm from './CandidateForm';


export default function CandidateContent() {
  const [isModalVisible, setIsModalVisible] = useState(false);
    
    const headers = ['Name', 'Position', 'Department', 'Status'];

    const data = [
        ['John Smith', 'President', 'IT Department', 'Active'],
        ['Jane Doe', 'Vice President', 'HR Department', 'Inactive'],
        ['Mike Johnson', 'Manager', 'Sales Department', 'Active'],
    ]


    const handleEdit = (index) => {
        alert(`Edit row ${index}`);
      };
    
      const handleDelete = (index) => {
        const newData = data.filter((_, i) => i !== index);
        
      };
    
      const pagination = {
        from: 1,
        to: 3,
        total: 24,
        current: 1,
      };

      const handleOpenModal = () => {
        setIsModalVisible(true);
        };

      const handleCloseModal = () => {
        setIsModalVisible(false); 
      }
    
  return (
    <div >
        <div className='flex justify-between'>
            <h1>Candidates</h1>
            <Button color="primary" onClick={handleOpenModal}  icon = {<BiPlus />} variant="solid">
  Add Candidaate
</Button>
        </div>
        <Table
        headers={headers}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
        pagination={pagination}
      />

<CustomModal  modalTitile={"Regiter Candidate"} setIsvisible={setIsModalVisible} Isvisible={isModalVisible}   >

 <RegisterCandidateForm />
</CustomModal>

      
    </div>
  )
}
