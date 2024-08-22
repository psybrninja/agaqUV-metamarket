'use client'

import { Button, Row, Col } from 'antd'
import { Typography } from 'antd'
import { UserOutlined, ShopOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const navigateToBuyers = () => {
    router.push('/buyers')
  }

  const navigateToSellers = () => {
    router.push('/sellers')
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2} style={{ textAlign: 'center' }}>
        Welcome to the Marketplace
      </Title>
      <Paragraph style={{ textAlign: 'center' }}>
        Please choose whether you want to browse as a Buyer or a Seller to
        navigate to the appropriate section.
      </Paragraph>
      <Row justify="center" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Button
            type="primary"
            icon={<UserOutlined />}
            block
            onClick={navigateToBuyers}
          >
            Browse as Buyer
          </Button>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Button
            type="primary"
            icon={<ShopOutlined />}
            block
            onClick={navigateToSellers}
          >
            Browse as Seller
          </Button>
        </Col>
      </Row>
    </PageLayout>
  )
}
