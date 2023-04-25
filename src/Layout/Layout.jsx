import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  CaretRightOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SnippetsOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import ChangeLanguage from '../component/changeLang';

const { Header, Content, Footer, Sider } = Layout;
// const items = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   BarChartOutlined,
//   CloudOutlined,
//   AppstoreOutlined,
//   TeamOutlined,
//   ShopOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));

const menuItems = [
  {
    key: 0,
    icon: React.createElement(HomeOutlined),
    label: 'Anasayfa',
    children: [
      {
        key: 1,
        icon: React.createElement(CaretRightOutlined),
        label: <Link to="/home/news"> Haberler </Link>,
      },
      {
        key: 2,
        icon: React.createElement(CaretRightOutlined),
        label: <Link to="/home/main-animation"> Animasyon </Link>,
      },
    ],
  },
  {
    key: 3,
    icon: React.createElement(UnorderedListOutlined),
    label: <Link to="/navbar"> Navbar </Link>,
  },
  {
    key: 4,
    icon: React.createElement(SnippetsOutlined),
    label: <Link to="/pages"> Sayfalar </Link>,
  },
  {
    key: 5,
    icon: React.createElement(UserOutlined),
    label: <Link to="/users"> Kullanıcılar </Link>,
  },
  // {
  //   key: 6,
  //   icon: React.createElement(UserOutlined),
  //   label: 'Naber',
  //   children: [
  //     {
  //       key: 7,
  //       icon: React.createElement(UserOutlined),
  //       label: <Link to="/naber/hande-1"> Hande 1 </Link>,
  //     },
  //     {
  //       key: 8,
  //       icon: React.createElement(UserOutlined),
  //       label: <Link to="/naber/hande-2"> Hande 2 </Link>,
  //     },
  //   ],
  // },
];

function LayoutComp() {
  const [collapsed, setCollapsed] = useState(false);
  const { i18n } = useTranslation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={menuItems} />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: collapsed ? '80px' : '200px',
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                marginLeft: 20,
              }}
            />
            <ChangeLanguage />
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          {i18n.t('global.footer')}
        </Footer>
      </Layout>
    </Layout>
  );
}

export default LayoutComp;
