import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import SideBarOption from './SideBarOption'
import db from './firebase'
import { useStateValue } from './StateProvider'

function Sidebar() {
  const [{ user }] = useStateValue()
  const [channels, setChannels] = useState([])

  useEffect(() => {
    //   Run this code when sidebar components loads
    db.collection('rooms').onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        })),
      ),
    )
  }, [])

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Learn and Teach </h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </div>
        <Create />
      </div>
      <SideBarOption Icon={InsertComment} title="Thread" />
      <SideBarOption Icon={Inbox} title="Mentions & Reactions" />
      <SideBarOption Icon={Drafts} title="Saved items" />
      <SideBarOption Icon={BookmarkBorder} title="Channel browser" />
      <SideBarOption Icon={PeopleAlt} title="People & user groups" />
      <SideBarOption Icon={Apps} title="Apps" />
      <SideBarOption Icon={FileCopy} title="File Browser" />
      <SideBarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SideBarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SideBarOption Icon={Add} addChannelOption title="Add Channels" />

      {channels.map((channel) => (
        <SideBarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  )
}

export default Sidebar
