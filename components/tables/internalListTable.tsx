import React, { useState } from 'react'
import { BiUserPlus } from 'react-icons/bi'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { AiFillPrinter } from 'react-icons/ai'
import { GiHealthNormal } from 'react-icons/gi'
import Image from 'next/image'
import { mockDataInternalUserList } from '../../contrasts/internalUserList'
import ModalPatientCreate from '../../pages/internal-patient-list/components/modalPatientCreate'
import ModalPatientDetail from '../../pages/internal-patient-list/components/modalPatientDetail'
import Datepicker from '../input/datePicker'
import TimePicker from '../input/timePicker'
import ModalSignature from '../modal/modalSignatrue'


type Props = {
  setShowFormPatient: any
}

const InternalTable = ({ setShowFormPatient }: Props) => {
  const [showModalDetail, setShowModalDetail] = useState(false)
  const [showModalCreate, setShowModalCreate] = useState(false)
  const [showModalSigner, setShowModalSigner] = useState(false)
  const [onShowDatePicker, setOnShowDatePicker] = useState(false)
  const [onShowTimePicker, setOnShowTimePicker] = useState(false)

  const styled = {
    button: `
      bg-purple    
      rounded-md
      px-3
      py-1
      text-white
      flex gap-2 items-center justify-between
    `,
    th: `
      border border-purple
      h-24
      bg-purple-supperLight
      text-purple
      p-2
    ` ,
    td: `
      border border-purple
      h-full
      p-3
    ` ,
    card: `
      bg-purple-supperLight py-2 px-3 rounded-md
      flex gap-3 items-center justify-between
      text-xs
    `
  }

  const toggleShowPicker = (type: string) => {
    switch (type) {
      case "OPEN_TIME":
        setOnShowTimePicker(!onShowTimePicker)
        setOnShowDatePicker(false)
        break;
      case "OPEN_DATE":
        setOnShowTimePicker(false)
        setOnShowDatePicker(!onShowDatePicker)
        break;

      default:
        break;
    }
  }
  const onSwitchModal = (value: string) => {
    if (value == "CREATE") {
      setShowModalDetail(false)
      setShowModalCreate(true)
    }
  }
  return (
    <div className=''>
      {/* <div className='flex w-full justify-between items-center '>
        <div>
          <button className={`${styled.button}`} onClick={() => setShowFormPatient(true)}>
            <div>เพิ่ม</div>
            <div>
              <BiUserPlus size={30} />
            </div>
          </button>
        </div>

        <div className='flex gap-3 items-center'>
          <div className='relative'>
            <button className={`${styled.button} min-w-[120px]`} onClick={() => toggleShowPicker("OPEN_DATE")}>
              <div>วันที่</div>
              <div className={`${onShowDatePicker ? "rotate-180 transition-all" : ""}`}>
                <MdOutlineKeyboardArrowDown size={30} />
              </div>
            </button>
            <div className={`absolute right-0 max-h-0 overflow-hidden transition-all p-6 w-[350px] ${onShowDatePicker ? "max-h-[500px]" : "p-0"}`}>
              <Datepicker />
            </div>
          </div>
          <div className='relative '>
            <button className={`${styled.button} min-w-[120px]`} onClick={() => toggleShowPicker("OPEN_TIME")}>
              <div>เลือกเวลา</div>
              <div className={`${onShowTimePicker ? "rotate-180 transition-all" : ""}`}>
                <MdOutlineKeyboardArrowDown size={30} />
              </div>
            </button>
            <div className={`absolute -right-16 max-h-0 overflow-hidden transition-all p-6 w-[350px] ${onShowTimePicker ? "max-h-[500px]" : "p-0"}`}>
              <TimePicker onSave={() => toggleShowPicker("OPEN_TIME")} />
            </div>
          </div>
          <div>
            <AiFillPrinter size={40} />
          </div>
        </div>
      </div> */}

      <table className='border-collapse border border-purple w-full my-8'>
        <thead>
          <tr >
            <th className={`${styled.th}`}>ชื้อคนไข้</th>
            <th className={`${styled.th}`}>ชื่อยา</th>
            <th className={`${styled.th}`}>วันที่</th>
            <th className={`${styled.th}`}>เวลา</th>
            <th className={`${styled.th}`}>HN</th>
            <th className={`${styled.th}`}>ผู้จ่ายยา</th>
          </tr>
        </thead>
        <tbody>
          {mockDataInternalUserList.map((item: any, key: any) => (
            <React.Fragment key={key}>
              <tr className={`${item.userSignature ? "bg-green" : "bg-red"}`}>
                <td className={`${styled.td}`}>
                  <div className='flex items-center justify-between'>
                    <div className='w-[200px]'>
                      {item.name}
                    </div>
                    <div className='flex gap-1 flex-col'>
                      <div className={`${styled.card}`}>
                        <div>
                          Router: Oral
                          {/* <Image src={"/img/icons/bed.svg"} alt="" width={20} height={20} /> */}
                        </div>
                        {/* <div>
                          Bed Number
                        </div> */}
                      </div>
                      <div className={`${styled.card}`}>
                        {/* <div>
                          <GiHealthNormal size={15} />
                        </div> */}
                        <div>
                          ชั่วโมงให้ยา: Tid
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={`${styled.td}`}>{item.drugName}</td>
                <td className={`${styled.td}`}>{item.date}</td>
                <td className={`${styled.td}`}>
                  <div className='flex gap-1 justify-center'>
                    <div>
                      <Image src={"/img/icons/clock.svg"} alt="" width={20} height={20} />
                    </div>
                    <div>
                      {item.time}
                    </div>
                  </div>
                </td>
                <td className={`${styled.td}`}>{item.hn}</td>
                <td className={`${styled.td} `}>
                  {item.userSignature ? (
                    <div className={`flex items-center justify-center cursor-pointer`}>
                      <Image src={"/img/signer.png"} alt="" width={50} height={50} />
                    </div>
                  ) : <div className={`flex items-center justify-center cursor-pointer`} onClick={() => setShowModalSigner(true)}>
                    <Image src={"/img/icons/userIcon.svg"} alt="" width={20} height={20} />
                  </div>}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {/* modal zone */}
      <ModalPatientDetail handleClose={() => setShowModalDetail(false)} open={showModalDetail} switchModal={onSwitchModal} />
      <ModalPatientCreate handleClose={() => setShowModalCreate(false)} open={showModalCreate} />
      <ModalSignature handleClose={() => setShowModalSigner(false)} open={showModalSigner} />
    </div>
  )
}

export default InternalTable