import React, { Fragment } from 'react'
import { Header } from 'shared/components/Header'
import { Row, Col } from 'antd'
import { Sidebar } from 'shared/components/Sidebar'
import { ContentWrapper } from 'shared/components/Content/Content.styled'
import { Route } from 'react-router-dom'

const AppPrivateLayout: React.FC<any> = ({component:Component, ...props}) => {
    return (
        <Fragment>
            <Header />
            <Row>
                <Col>
                    <Sidebar />
                </Col>
                <Col flex={1}>
                    <ContentWrapper>
                        <Component {...props} />
                    </ContentWrapper>
                </Col>
            </Row>
        </Fragment>
    )
}

export default AppPrivateLayout
