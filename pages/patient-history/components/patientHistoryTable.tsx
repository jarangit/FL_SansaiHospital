import React from 'react'
import { AiFillPrinter } from 'react-icons/ai'
import { GiHealthNormal } from 'react-icons/gi'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { FaPenAlt } from 'react-icons/fa'
import { mockDataPatientList } from '../../../contrasts/patientHistoryList'
import Image from 'next/image'
type Props = {}

const PatientHistoryTable = (props: Props) => {
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
      bg-purple-supperLight
      text-purple
      p-2
    ` ,
    td: `
      border border-purple
      h-full
      p-2
      text-center
    ` ,
    card: `
      bg-purple-supperLight py-2 px-3 rounded-md
      flex gap-2 items-right w-fit justify-end
      text-xs
    `
  }
  return (
    <div>
      <div className='flex gap-3 items-center w-full justify-end'>
        <button className={`${styled.button} min-w-[120px]`}>
          <div>วันที่</div>
          <div>
            <MdOutlineKeyboardArrowDown size={30} />
          </div>
        </button>
        <button className={`${styled.button} min-w-[120px]`}>
          <div>เลือกเวลา</div>
          <div>
            <MdOutlineKeyboardArrowDown size={30} />
          </div>
        </button>
        <button className={`${styled.button} min-w-[120px]`}>
          <div>เพิ่มรายการ</div>
        </button>
        <div>
          <AiFillPrinter size={40} />
        </div>
      </div>


      <div className='overflow-x-scroll'>
        <table className='border-collapse border border-purple w-full my-8 text-sm'>
          <thead>
            <tr>
              <td rowSpan={2} className={`${styled.th} text-center`}>ชื่อยา, วิธีใช้</td>
              <td rowSpan={2} className={`${styled.th} text-center`}>
                <div>
                  Route
                </div>
              </td>
              <td rowSpan={2} className={`${styled.th} text-center`}>ชั่วโมงให้ยา</td>
              <th colSpan={1} scope="colgroup" className={`${styled.th}`}>
                <div>วันที่</div>
                <div className='text-black text-sm font-thin'>12/12/2565</div>
              </th>
              <th colSpan={1} scope="colgroup" className={`${styled.th}`}>
                <div>วันที่</div>
                <div className='text-black text-sm font-thin'>12/12/2565</div>
              </th>
              <th colSpan={1} scope="colgroup" className={`${styled.th}`}>
                <div>วันที่</div>
                <div className='text-black text-sm font-thin'>12/12/2565</div>
              </th>
              <th colSpan={1} scope="colgroup" className={`${styled.th}`}>
                <div>วันที่</div>
                <div className='text-black text-sm font-thin'>12/12/2565</div>
              </th>
              <th colSpan={1} scope="colgroup" className={`${styled.th}`}>
                <div>วันที่</div>
                <div className='text-black text-sm font-thin'>12/12/2565</div>
              </th>
              <th colSpan={1} scope="colgroup" className={`${styled.th}`}>
                <div>วันที่</div>
                <div className='text-black text-sm font-thin'>12/12/2565</div>
              </th>
              <th colSpan={1} scope="colgroup" className={`${styled.th}`}>
                <div>วันที่</div>
                <div className='text-black text-sm font-thin'>12/12/2565</div>
              </th>
              <td rowSpan={2} className={`${styled.th} text-center`}>
                ผู้จ่ายยา
              </td>

            </tr>
            <tr>
              <th scope="col" className={`${styled.th}`}>เวลา</th>
              <th scope="col" className={`${styled.th}`}>เวลา</th>
              <th scope="col" className={`${styled.th}`}>เวลา</th>
              <th scope="col" className={`${styled.th}`}>เวลา</th>
              <th scope="col" className={`${styled.th}`}>เวลา</th>
              <th scope="col" className={`${styled.th}`}>เวลา</th>
              <th scope="col" className={`${styled.th}`}>เวลา</th>
            </tr>
          </thead>
          <tbody>
            {mockDataPatientList.map((item, key) => (
              <React.Fragment key={key}>
                <tr>
                  <td className={`${styled.td}`}>
                    <div className=''>
                      <div className='w-[200px] text-left'>
                        {item.name}
                      </div>
                      <div className='text-right w-full flex justify-end'>
                        <div className={`${styled.card}`}>
                          <div>
                            {/* <Image src={"/img/icons/bed.svg"} alt="" width={20} height={20} /> */}
                            <FaPenAlt size={15} />
                          </div>
                          <div>
                            Edit
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className={`${styled.td}`}>{item.route}</td>
                  <td className={`${styled.td}`}>{item.hr}</td>
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

                  <td className={`${styled.td} `}>
                    <div className={`flex items-center justify-center cursor-pointer`} onClick={() => ""}>
                      <Image src={"/img/icons/userIcon.svg"} alt="" width={20} height={20} />
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PatientHistoryTable