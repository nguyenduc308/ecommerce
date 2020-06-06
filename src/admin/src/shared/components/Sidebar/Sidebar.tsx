import React, { useState, useEffect } from 'react'
import { Menu } from 'antd';
import { ShoppingCartOutlined, WindowsOutlined, HeartTwoTone, HomeOutlined } from '@ant-design/icons';

import { SidebarWrapper } from './Sidebar.styled';
import { useLocation , Link} from 'react-router-dom';

const { SubMenu } = Menu;

const Sidebar = () => {
    const [selectedKey, setSelectedKey] = useState('/');

    const location = useLocation();

    useEffect(()=> {
        setSelectedKey(location.pathname)
    },[location])

    return ( 
        <SidebarWrapper>
             <Menu
                style={{ width: 256 }}
                defaultSelectedKeys={[selectedKey]}
                defaultOpenKeys={['/']}
                selectedKeys={[selectedKey]}
                selectable={true}
                mode="inline"
                forceSubMenuRender={true}
            >
                <Menu.Item key="/"><HomeOutlined />
                    <Link to="/">Home</Link>
                </Menu.Item>
                <SubMenu
                key="/categories"
                title={
                    <span>
                    <WindowsOutlined />
                    Categories
                    </span>
                }
                >
                    <Menu.ItemGroup key="g1" title="Management">
                        <Menu.Item key="/categories"><Link to="/categories">List</Link></Menu.Item>
                        <Menu.Item key="2">Create</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g2" title="Analytics">
                    </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<ShoppingCartOutlined />} title="Products" disabled>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    </SubMenu>
                    <SubMenu
                    key="sub4"
                    disabled
                    title={
                        <span>
                        <HeartTwoTone twoToneColor="#eb2f96" />
                        <span>News</span>
                        </span>
                    }
                    >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
        </SidebarWrapper>
    )
}

export default Sidebar
