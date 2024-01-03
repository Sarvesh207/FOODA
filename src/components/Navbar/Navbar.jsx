import  { Fragment } from 'react'
import React from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import Header from '../Header'
const navigation = [
  { name: 'Home', href:'/', current: false },
  { name: 'Search', href: '/search', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'About', href: '/about', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const cartItems = useSelector((store) => store.cart.items);
  

  return (
    <>
    
    
    </>
  )
}
