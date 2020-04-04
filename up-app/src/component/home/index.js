import React from 'react';

import {Switch,Route,Redirect,Link} from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import List from '../list'
import Add from '../add'
import Edit from '../edit'
import Look from '../look'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Home extends React.Component{
    state = {
        defaultSelectedKeys:'1',
        collapsed: false,
      };
      defaultSelectedKeysFun=(val)=>{
         
        this.setState({ defaultSelectedKeys:val});
      }
      onCollapse = collapsed => {
    
        this.setState({ collapsed });
      };
    render(){
        const {defaultSelectedKeys} = this.state

        return <div>
             <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <Menu theme="dark" selectedKeys={[defaultSelectedKeys]} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
                    <SubMenu key="sub1" title={
                        <span>
                            <Icon type="user" />
                            <span>职员管理</span>
                        </span>
                    }
                    >
                        <Menu.Item key="1" onClick={()=>{
                        this.defaultSelectedKeysFun('1')
                        this.props.history.push('/home/list')
                        }}>职员列表</Menu.Item>
                        <Menu.Item key="2" onClick={()=>{
                        this.defaultSelectedKeysFun('2')
                        this.props.history.push('/home/add')
                        }}>添加职员</Menu.Item>
                    </SubMenu>
                    
                    <Menu.Item key="3">
                        <Icon type="file" />
                        <span><Link to="/home/ask">随机提问</Link></span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="bar-chart" />
                        <span><Link to="/home/num">数据分析</Link></span>
                    </Menu.Item>
                </Menu>
                </Sider>
                <Layout>
                <Header style={{ background: '#fff', paddingRight:15,textAlign:'right' }} >
                    zhongxue | 退出
                </Header>
                <Content style={{ margin: '15px',background: '#fff' }}>
                  <Switch>
                      <Route path="/home/list" render={(props)=>{
                          return <List {...props} defaultSelectedKeysFun={this.defaultSelectedKeysFun}/>}
                          }></Route>
                      <Route path="/home/add" render={(props)=>{return <Add {...props} defaultSelectedKeysFun={this.defaultSelectedKeysFun}/>}}></Route>
                      <Route path="/home/ask" component={()=><div>随机提问</div>}></Route>
                      <Route path="/home/edit" component={Edit}></Route>
                      <Route path="/home/look" component={Look}></Route>
                      <Route path="/home/num" component={()=><div>数据分析</div>}></Route>
                      <Redirect from="/home" to="/home/list"></Redirect>
                  </Switch>
                </Content>
                <Footer style={{ textAlign: 'center' }}>1706A网络科技有限公司</Footer>
                </Layout>
            </Layout>
        </div>
    }
}

export default Home;







