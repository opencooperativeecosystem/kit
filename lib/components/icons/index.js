import * as React from 'react'
const browser = typeof window !== 'undefined'

const nullServerComponent = () => (<span />)

// ACTIVITIES
export const Activity = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' color={color} fill='none' stroke='currentColor' strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round' className='feather feather-activity'><polyline points='22 12 18 12 15 21 9 3 6 12 2 12'></polyline></svg>
)

// DIARY
export const Diary = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' color={color} fill='none' stroke='currentColor' strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round' className='feather feather-activity'><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
)

// CALENDAR
export const Calendar = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' color={color} fill='none' stroke='currentColor' strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round' className='feather feather-activity'><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
)

// LINK
export const Link = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' color={color} fill='none' stroke='currentColor' strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round' className='feather feather-activity'><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
)

// INVENTORY
export const Inventory = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' color={color} fill='none' stroke='currentColor' strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round' className='feather feather-activity'><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
)

// GLOBE
export const Globe = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' color={color} fill='none' stroke='currentColor' strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round' className='feather feather-activity'><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
)

// HOME
export const Home = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' color={color} fill='none' stroke='currentColor' strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round' className='feather feather-activity'><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
)

// WORK
export const Work = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' color={color} fill='none' stroke='currentColor' strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round' className='feather feather-activity'><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
)

// VALIDATE
export const Validate = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' color={color} fill='none' stroke='currentColor' strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round' className='feather feather-activity'><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg>
)

// BELL
export const Bell = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' color={color} fill='none' stroke='currentColor' strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round' className='feather feather-activity'><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>
)

// User
export const User = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' color={color} fill='none' stroke='currentColor' strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round' className='feather feather-activity'><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
)
// Settings
export const Settings = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' color={color} fill='none' stroke='currentColor' strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round' className='feather feather-activity'><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
)
// Power
export const Power = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' color={color} fill='none' stroke='currentColor' strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round' className='feather feather-activity'><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>
)
// Preferites
export const Preferites = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' color={color} fill='none' stroke='currentColor' strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round' className='feather feather-activity'><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
)

// MENU
export const Menu = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' color={color} fill='none' stroke='currentColor' strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round' className='feather feather-activity'><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
)

// CARD
export const Card = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={width} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
)

// LEFT
export const Left = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={width} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clipboard"><line x1="20" y1="12" x2="4" y2="12"></line><polyline points="10 18 4 12 10 6"></polyline></svg>
)

// RIGHT
export const Right = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={width} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clipboard"><line x1="4" y1="12" x2="20" y2="12"></line><polyline points="14 6 20 12 14 18"></polyline></svg>
)

// CLOCK
export const Clock = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={width} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clipboard"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
)

// TEXT
export const Text = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-align-left"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
)

// MESSAGE
export const Message = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
    <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
)

// CROSS
export const Cross = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333', stroke = 2}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
)

// USERS
export const Users = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
)

// CHECK
export const Check = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><polyline points="20 6 9 17 4 12"></polyline></svg>
)

// SHIELD
export const Shield = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z"></path></svg>
)

// PLUS
export const Plus = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
)

// MORE
export const More = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
)

// EDIT
export const Edit = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
)

// EDIT-2
export const Edit2 = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
)

// TRASH
export const Trash = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
)

// FOLDER
export const Folder = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
)

// NEWFILE
export const NewFile = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
)

// STAR
export const Star = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
)
// LOCK
export const Lock = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
)

// COPY
export const Copy = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
)


// LOADING
export const Loading = !browser ? nullServerComponent : ({width = 24, height = 24, strokeWidth = 2, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 38 38" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><defs>
  <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
      <stop stopColor={color} stopOpacity="0" offset="0%"/>
      <stop stopColor={color} stopOpacity=".631" offset="63.146%"/>
      <stop stopColor={color} offset="100%"/>
  </linearGradient>
</defs>
<g fill="none" fillRule="evenodd">
  <g transform="translate(1 1)">
      <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" strokeWidth="2">
          <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="0.9s"
              repeatCount="indefinite" />
      </path>
      <circle fill={color} cx="36" cy="18" r="1">
          <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="0.9s"
              repeatCount="indefinite" />
      </circle>
  </g>
</g></svg>
)

export default {Activity, Clock, Link, Copy, NewFile, Folder, Lock, Star, Trash, Edit2, Loading, Calendar, Edit, Diary, Inventory, Globe, Home, Work, Validate, Bell, User, Settings, Power, Preferites, Menu, Card, Left, Right, Text, Message, Cross, Users, Check, Shield, Plus, More}