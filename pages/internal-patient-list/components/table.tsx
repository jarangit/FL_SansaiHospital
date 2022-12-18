import React from 'react'
import { BiUserPlus } from 'react-icons/bi'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { AiFillPrinter } from 'react-icons/ai'
import { GiHealthNormal } from 'react-icons/gi'
import { mockDataInternalUserList } from '../../../contrasts/internalUserList'
import Image from 'next/image'
type Props = {}

const Table = (props: Props) => {

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
  return (
    <div>
      <div className='flex w-full justify-between items-center'>
        <div>
          <button className={`${styled.button}`}>
            <div>เพิ่ม</div>
            <div>
              <BiUserPlus size={30} />
            </div>
          </button>
        </div>

        <div className='flex gap-3 items-center'>
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
          <div>
            <AiFillPrinter size={40} />
          </div>
        </div>
      </div>

      <table className='border-collapse border border-purple w-full my-8'>
        <thead>
          <tr >
            <th className={`${styled.th}`}>ชื้อคนไข้</th>
            <th className={`${styled.th}`}>วันที่</th>
            <th className={`${styled.th}`}>HN</th>
            <th className={`${styled.th}`}>Note</th>
          </tr>
        </thead>
        <tbody>
          {mockDataInternalUserList.map((item, key) => (
            <React.Fragment key={key}>
              <tr>
                <td className={`${styled.td}`}>
                  <div className='flex items-center justify-between'>
                    <div className='w-[200px]'>
                      {item.name}
                    </div>
                    <div className='flex gap-1 flex-col'>
                      <div className={`${styled.card}`}>
                        <div>
                          <Image src={"/img/icons/bed.svg"} alt="" width={20} height={20} />
                        </div>
                        <div>
                          Bed Number
                        </div>
                      </div>
                      <div className={`${styled.card}`}>
                        <div>
                          <GiHealthNormal size={15} />
                        </div>
                        <div>
                          Ward Number
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={`${styled.td}`}>{item.date}</td>
                <td className={`${styled.td}`}>{item.hn}</td>
                <td className={`${styled.td} `}>
                  <div className={`flex items-center justify-center cursor-pointer`}>
                    <Image src={"/img/icons/doc.svg"} alt="" width={20} height={20} />
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table