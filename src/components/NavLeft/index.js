
import React from 'react';
import './index.less';

import { Menu, Icon } from 'antd';

import menuConfig from './../../config/menuConfig';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class NavLeft extends React.Component{

    componentWillMount() {

        const menuTreeNode = this.renderMenu(menuConfig);
        console.log(menuConfig);
        this.setState({
            menuTreeNode
        })
    }

    renderMenu = (data) => {

        return data.map((item => {

            if(item.children != undefined){

                return (

                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }

            return <Menu.Item title={item.title} key={item.key}> {item.title} </Menu.Item>
        }))
    }

    render(){

        return(
            <div>

                <div className="logo">

                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>immoc MS</h1>
                </div>
                <div>
                    <Menu theme="dark" mode="vertical">
                        {this.state.menuTreeNode}

                    </Menu>

                </div>
            </div>
        )
    }
}