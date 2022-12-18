import React from 'react'
import Table from './components/table'

type Props = {}

const InternalPatientListPage = (props: Props) => {
  return (
    <div>
      <div className='text-3xl font-bold mb-10'>
        <div className='text-purple'>รายชื่อผู้ป่วยใน</div>
        <div>แผนกศัลยกรรมหญิง</div>
      </div>

      <div>
        <Table />
      </div>
    </div>
  )
}

export default InternalPatientListPage