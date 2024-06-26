import React from 'react'
import IconMenu from './icons/IconMenu';
import IconAdd from './icons/IconAdd';

type Props = {
  openSidebarClick: () => void;
  title: string;
  newChatClick: () => void;
}

const Header = ({openSidebarClick, newChatClick, title}: Props) => {
  return (
    <header className='flex justify-between items-center w-full border-b border-b-gray-600 p-2 md:hidden'>
      <div onClick={openSidebarClick}>
        <IconMenu width={24} height={24} />
      </div>

      <div className="mx-2 truncate">{title}</div>
      
      <div onClick={newChatClick}>
        <IconAdd width={24} height={24} />
      </div>
    </header>
  )
}

export default Header