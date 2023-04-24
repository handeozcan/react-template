import React from 'react';
import { useTranslation } from 'react-i18next';
import { DownOutlined, FlagTwoTone } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';

function ChangeLanguage() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleMenuClick = (e) => {
    changeLanguage(e.key);
  };

  const items = [
    {
      label: 'Tr',
      key: 'tr',
      icon: <FlagTwoTone />,
    },
    {
      label: 'En',
      key: 'en',
      icon: <FlagTwoTone />,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div>
      <Dropdown trigger={['click']} menu={menuProps}>
        <Button>
          <Space>
            Languages
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </div>
  );
}

export default ChangeLanguage;
