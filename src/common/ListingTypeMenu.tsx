import { Button, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { ListingType } from './ListingType'

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
          key={listingType.key}
          onClick={() => routeTo(listingType.path)}>
          {listingType.name}
        </MenuItem>
    )
  }
  return (
      <>
        <Button
            className='listing-type-button'
            onClick={openMenu}>{props.listingType.icon}</Button>
        <Menu
            open={open}
            anchorEl={anchorEl}
            onClose={closeMenu}>
          { menuItemFor(ListingType.programs) }
          { menuItemFor(ListingType.discs) }
        </Menu>
      </>
  )
}