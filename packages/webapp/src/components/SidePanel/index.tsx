import { Avatar, Card, List } from 'antd'
import React from 'react'

import { useAppSelector } from '@packages/common/hooks/redux'
import { IUserInfoState } from '@packages/common/slices/userInfoSlice'
import './index.less'

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
]

const SidePanel: React.FC = () => {
  const userInfo: IUserInfoState = useAppSelector((state) => state.userInfo)

  return (
    <div id="findme-sidepanel-wrapper">
      <div className="avatar-wrapper">
        <Avatar
          size={40}
          style={{
            backgroundColor: '#fde3cf',
            color: '#f56a00',
          }}
        >
          {userInfo.username?.[0] ?? ''}
        </Avatar>
      </div>
      <Card title="People & Devices">
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                  />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  )
}

export default SidePanel
