import { Button, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { ListingType } from './ListingType'
import './ListingTypeMenu.css'

interface ListingTypeMenuProps {
  listingType: ListingType
}

export function ListingTypeMenu(props: ListingTypeMenuProps): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const closeMenu = () => {
    setAnchorEl(null)
  }
  const routeTo = (path: string) => {
    window.location.href = path
  }
  const menuItemFor = (listingType: ListingType) => {
    return (
        <MenuItem
          className='listing-type-menu-item'
          key={listingType.key}
          onClick={() => routeTo(listingType.path())}>
          <b>{listingType.icon}</b>&nbsp;&nbsp;{listingType.name}
        </MenuItem>
    )
  }
  return (
      <div className='listing-menu-container'>
        <Button
            className='listing-type-button'
            onClick={openMenu}>{props.listingType.icon}</Button>
        <Menu
            className='listing-type-menu'
            open={open}
            anchorEl={anchorEl}
            onClose={closeMenu}
            MenuListProps={{
              dense: true
            }}>
          { menuItemFor(ListingType.programs) }
          { menuItemFor(ListingType.discs) }
        </Menu>
      </div>
  )
}