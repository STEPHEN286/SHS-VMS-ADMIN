import { Button } from 'antd';
import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi';
import Table from '../../ui/Table';
import CustomModal from '../../ui/Modal';
import RegisterVoterForm from './VoterForm';

export default function VoterContent() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const headers = ["VoterId",'Name', 'Class', 'Department', 'Status'];

    const data = [
        ["V001", "John Doe", "Senior", "Computer Science", "Active"],
  ["V002", "Jane Smith", "Junior", "Mathematics", "Inactive"],
  ["V003", "Alice Johnson", "Sophomore", "Physics", "Active"]
      ];
      


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
            <h1>Voters</h1>
            <Button color="primary" onClick={handleOpenModal}  icon = {<BiPlus />} variant="solid">
  Add Voter
</Button>
        </div>
        <Table
        headers={headers}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
        pagination={pagination}
      />

<CustomModal  modalTitile={"Regiter Candidate"} Isvisible={isModalVisible}  setIsvisible={setIsModalVisible}  >

 <RegisterVoterForm />
</CustomModal>

      
    </div>
  )
}
